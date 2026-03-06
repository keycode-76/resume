# Supabase Email 收集設置指南

## 概述

本網站使用 Supabase 來收集和儲存用戶的電子郵件地址（用於 "Who is Human?" 遊戲的早期通知）。

---

## 步驟 1: 創建 Supabase 專案

1. 前往 [Supabase](https://supabase.com/)
2. 註冊/登入帳號
3. 點擊 "New Project"
4. 填寫專案資訊：
   - **Name**: 專案名稱（例如：`dollarbase-website`）
   - **Database Password**: 設定資料庫密碼（請妥善保存）
   - **Region**: 選擇最接近的區域
5. 點擊 "Create new project"
6. 等待專案建立完成（約 2-3 分鐘）

---

## 步驟 2: 獲取 API 金鑰

1. 在 Supabase 專案儀表板中，點擊左側選單的 **Settings** (⚙️)
2. 選擇 **API**
3. 找到以下資訊：
   - **Project URL**: 複製此 URL（例如：`https://xxxxx.supabase.co`）
   - **anon public key**: 複製此金鑰（這是公開的，可以安全地在前端使用）

---

## 步驟 3: 創建資料表

1. 在 Supabase 儀表板中，點擊左側選單的 **Table Editor**
2. 點擊 **Create a new table**
3. 設定表格資訊：
   - **Name**: `email_subscriptions_whoishuman`
   - **Description**: `Email subscriptions for Who is Human game`
4. 添加欄位（Columns）：

   | Column Name | Type | Default Value | Nullable | Unique |
   |------------|------|---------------|----------|--------|
   | id | uuid | `gen_random_uuid()` | ❌ | ✅ |
   | email | text | - | ❌ | ✅ |
   | source | text | - | ✅ | ❌ |
   | created_at | timestamptz | `now()` | ❌ | ❌ |

Data API Access https://cxezjrmjjwcqfokvfsmn.supabase.co/email_subscriptions_whoishuman
5. 點擊 **Save** 儲存表格

### 欄位說明：
- **id**: 主鍵，自動生成的 UUID
- **email**: 用戶的電子郵件地址（必填，唯一）
- **source**: 來源標記（例如：`who_is_human`），用於追蹤訂閱來源
- **created_at**: 建立時間戳記（自動）

---

## 步驟 4: 設定 Row Level Security (RLS)

為了讓前端可以插入資料，需要設定 RLS 政策：

1. 在表格頁面，點擊 **Policies** 標籤
2. 點擊 **New Policy**
3. 選擇 **Create a policy for INSERT**
4. 設定：
   - **Policy name**: `Allow public insert`
   - **Allowed operation**: `INSERT`
   - **Target roles**: `anon` (匿名用戶)
   - **USING expression**: `true`（允許所有插入）
   - **WITH CHECK expression**: `true`（允許所有插入）
5. 點擊 **Review** 然後 **Save policy**

### 可選：設定 SELECT 政策（如果需要在前端顯示）

如果需要在前端查詢資料，可以添加 SELECT 政策：
- **Policy name**: `Allow public select`
- **Allowed operation**: `SELECT`
- **Target roles**: `anon`
- **USING expression**: `true`

---

## 步驟 5: 更新網站代碼

在 `index.html` 文件中，找到以下代碼：

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

替換為您的實際值：

```javascript
const SUPABASE_URL = 'https://xxxxx.supabase.co'; // 您的 Project URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // 您的 anon key
```

---

## 步驟 6: 測試

1. 打開網站
2. 在 "Who is Human?" 卡片中輸入一個測試電子郵件
3. 點擊 "Notify me"
4. 在 Supabase 儀表板中，前往 **Table Editor** → `email_subscriptions`
5. 確認新記錄已成功插入

---

## 資料庫結構

### email_subscriptions 表格

```sql
CREATE TABLE email_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  source TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

### 索引建議

為了提升查詢效能，建議添加索引：

```sql
-- 在 email 欄位上創建索引（已自動創建，因為是 UNIQUE）
-- 在 created_at 欄位上創建索引
CREATE INDEX idx_email_subscriptions_created_at ON email_subscriptions(created_at DESC);

-- 在 source 欄位上創建索引（如果會根據來源查詢）
CREATE INDEX idx_email_subscriptions_source ON email_subscriptions(source);
```

在 Supabase SQL Editor 中執行以上 SQL。

---

## 安全性注意事項

1. **anon key 是公開的**：可以安全地在前端使用，但只能執行 RLS 政策允許的操作
2. **不要使用 service_role key**：這個金鑰有完整權限，只能在後端使用
3. **RLS 政策**：確保只允許必要的操作（INSERT），避免未授權的查詢或刪除
4. **Email 驗證**：前端已做基本驗證（包含 @），但建議在後端也做更嚴格的驗證

---

## 進階功能（可選）

### 1. 添加 Email 驗證

可以在 Supabase 中設定：
- 使用 Supabase Auth 發送驗證郵件
- 或使用第三方服務（如 SendGrid, Mailgun）發送確認郵件

### 2. 防止重複訂閱

代碼中已設定 `email` 欄位為 `UNIQUE`，所以重複的 email 會自動被拒絕。

### 3. 匯出資料

在 Supabase 儀表板中：
- 前往 **Table Editor** → `email_subscriptions`
- 點擊右上角的 **Export** 按鈕
- 選擇格式（CSV, JSON 等）

### 4. 設定自動通知

可以使用 Supabase Edge Functions 或 Database Webhooks：
- 當有新訂閱時，自動發送通知郵件給管理員
- 或整合到其他服務（如 Slack, Discord）

---

## 故障排除

### 問題：無法插入資料

1. **檢查 RLS 政策**：確保已設定 INSERT 政策
2. **檢查 API 金鑰**：確認 URL 和 KEY 正確
3. **檢查瀏覽器控制台**：查看是否有錯誤訊息
4. **檢查 Supabase 日誌**：在 Supabase 儀表板的 **Logs** 中查看錯誤

### 問題：重複的 email 錯誤

這是正常的，因為 `email` 欄位設為 `UNIQUE`。可以：
- 在前端顯示友好訊息：「此 email 已訂閱」
- 或在後端處理重複情況

### 問題：Supabase 客戶端未初始化

確認：
1. 已引入 Supabase JS 庫：`<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>`
2. URL 和 KEY 已正確設定
3. 瀏覽器控制台沒有 JavaScript 錯誤

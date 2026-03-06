# 網站實作說明

## ✅ 已完成項目

### 1. 設計系統實作
- ✅ 深色主題（5 色系統）
- ✅ 響應式設計（移動端和桌面端）
- ✅ 動畫效果（淡入動畫）
- ✅ 噪點紋理背景

### 2. 功能組件
- ✅ 固定導航欄（含社交媒體連結）
- ✅ 個人簡介區域
- ✅ 過濾器（All, App, Game, Recommend）
- ✅ 特色項目卡片（Who is Human?）
- ✅ 項目網格（3 欄，移動端 2 欄）
- ✅ 聯繫區域
- ✅ 頁腳

### 3. Email 收集功能
- ✅ 前端表單驗證
- ✅ Supabase 整合（可選）
- ✅ 成功訊息顯示
- ✅ Enter 鍵支援

---

## 📁 文件結構

```
website/
├── index.html              # 主頁面（已更新）
├── change.md               # 改動計劃文件
├── SUPABASE_SETUP.md       # Supabase 設置指南
├── IMPLEMENTATION.md       # 本文件
├── list.md                 # 內容清單
└── assets/
    └── image/
        ├── 404chen.png
        ├── screenshot_whoishuman.png
        ├── 01_challog.png
        └── 02_sushishots.png
```

---

## 🚀 快速開始

### 1. 本地測試（無 Supabase）

直接打開 `index.html` 即可測試：
- Email 表單會顯示成功訊息，但不會儲存資料
- 所有其他功能正常運作

### 2. 啟用 Supabase（儲存 Email）

1. 按照 `SUPABASE_SETUP.md` 的步驟設置 Supabase
2. 在 `index.html` 中更新以下兩行：

```javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';      // 替換為您的 URL
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // 替換為您的 KEY
```

3. 重新載入頁面測試

---

## 🎨 設計系統

### 顏色（5 色）

| 用途 | 顏色值 | Tailwind 類別 |
|------|--------|---------------|
| 背景 | `#0e0e0c` | `bg-[#0e0e0c]` |
| 表面（卡片） | `#171715` | `bg-[#171715]` |
| 主文字 | `#ece9dc` | `text-[#ece9dc]` |
| 次要文字 | `#72726a` | `text-[#72726a]` |
| 強調色 | `#c8f066` | `bg-[#c8f066]` |

### 字體

- **標題**: Syne (Google Fonts)
- **內文**: DM Sans (Google Fonts)

### 響應式斷點

- `< 560px`: 特色卡片改為垂直布局
- `< 480px`: 項目網格改為 2 欄

---

## 📧 Email 收集流程

### 前端流程

1. 用戶輸入 email
2. 前端驗證（必須包含 @）
3. 如果配置了 Supabase：
   - 發送請求到 Supabase
   - 儲存到 `email_subscriptions` 表格
4. 顯示成功訊息
5. 隱藏輸入框和按鈕

### 資料結構

儲存在 Supabase 的資料格式：

```json
{
  "id": "uuid",
  "email": "user@example.com",
  "source": "who_is_human",
  "created_at": "2026-03-06T14:00:00Z"
}
```

### 資料庫表格

表格名稱：`email_subscriptions`

| 欄位 | 類型 | 說明 |
|------|------|------|
| id | uuid | 主鍵（自動生成） |
| email | text | 電子郵件（必填，唯一） |
| source | text | 來源標記（可選） |
| created_at | timestamptz | 建立時間（自動） |

---

## 🔧 自訂配置

### 修改顏色

在 `index.html` 中搜尋顏色值並替換：
- `#0e0e0c` → 背景色
- `#171715` → 表面色
- `#ece9dc` → 主文字色
- `#72726a` → 次要文字色
- `#c8f066` → 強調色

### 修改字體

在 `<head>` 中更新 Google Fonts 連結：
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### 添加新項目

在項目網格區塊中添加新的卡片：

```html
<div class="card-wrap" data-tags="app">
  <a href="YOUR_LINK" target="_blank" class="bg-[#171715] border border-white/7 rounded-[14px] p-4 flex flex-col aspect-square no-underline transition-[border-color,transform] duration-200 hover:border-white/18 hover:-translate-y-1 relative">
    <div class="text-[22px] mb-auto leading-none">📱</div>
    <div>
      <div class="text-[12.5px] font-medium text-[#ece9dc] mb-0.5">項目名稱</div>
      <div class="text-[10.5px] text-[#72726a] leading-[1.4]">項目描述</div>
    </div>
  </a>
</div>
```

記得在 `data-tags` 中設定標籤（`app`, `game`, `recommend`）。

---

## 🐛 常見問題

### Q: Email 沒有儲存到 Supabase？

A: 檢查：
1. Supabase URL 和 KEY 是否正確設定
2. RLS 政策是否已設定（允許 INSERT）
3. 瀏覽器控制台是否有錯誤訊息
4. Supabase 表格結構是否正確

### Q: 過濾器不工作？

A: 檢查：
1. JavaScript 是否正常載入
2. 項目的 `data-tags` 屬性是否正確設定
3. 瀏覽器控制台是否有錯誤

### Q: 動畫不顯示？

A: 檢查：
1. CSS 動畫是否正確載入
2. 元素是否有 `opacity-0` 初始狀態
3. 動畫類別是否正確應用

### Q: 響應式布局不正常？

A: 檢查：
1. `<meta name="viewport">` 是否設定
2. Tailwind 響應式類別是否正確
3. 測試不同螢幕尺寸

---

## 📝 待辦事項（可選）

- [ ] 添加 Email 驗證功能（發送確認郵件）
- [ ] 添加管理後台查看訂閱列表
- [ ] 添加取消訂閱功能
- [ ] 整合分析工具（Google Analytics）
- [ ] 優化圖片載入（懶加載）
- [ ] 添加 PWA 支援
- [ ] SEO 優化（meta tags）

---

## 📚 相關文件

- `change.md` - 詳細的改動計劃
- `SUPABASE_SETUP.md` - Supabase 設置指南
- `list.md` - 內容清單

---

## 🆘 需要幫助？

如有問題，請參考：
1. `SUPABASE_SETUP.md` - Supabase 設置問題
2. 瀏覽器開發者工具（F12）查看錯誤
3. Supabase 官方文檔

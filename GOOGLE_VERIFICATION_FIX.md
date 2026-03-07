# Google 驗證警告解決方案

當您部署 Google Apps Script 並嘗試授權時，可能會看到以下警告：

> **"Google hasn't verified this app"**  
> The app is requesting access to sensitive info in your Google Account. Until the developer (404chenhavefun@gmail.com) verifies this app with Google, you shouldn't use it.

## ✅ 快速解決方案（推薦）

這是**正常的警告**，因為這是您自己創建的應用程式。對於個人使用的應用程式，您可以安全地繼續：

### 步驟：

1. **點擊警告頁面底部的 "Advanced"（進階）** 連結

2. **點擊 "Go to [您的專案名稱] (unsafe)"** 連結
   - 雖然標示為 "unsafe"，但這是因為 Google 尚未驗證您的應用程式
   - 對於您自己創建的應用程式，這是安全的

3. **點擊 "Allow"（允許）** 按鈕

4. **完成！** 現在您的 Web App 已經可以正常使用了

## 🔒 為什麼這是安全的？

- ✅ 這是**您自己創建的應用程式**
- ✅ 只有**您知道 Web App URL**
- ✅ 數據只會寫入到**您自己的 Google Sheets**
- ✅ 沒有其他人可以訪問您的應用程式

## 📋 什麼時候需要申請 Google 驗證？

只有在以下情況才需要申請 Google 驗證：

- ❌ 您計劃讓**大量用戶**使用這個表單
- ❌ 您要**公開分享**這個 Web App URL
- ❌ 您要將應用程式**發布到 Google Workspace Marketplace**

對於個人專案或小規模使用，**不需要**申請驗證。

## 🚀 完成設置後

完成授權後，請記得：

1. 複製 Web App URL（例如：`https://script.google.com/macros/s/AKfycby.../exec`）
2. 在 `index.html` 中更新 `GOOGLE_SHEETS_CONFIG.WEB_APP_URL`
3. 測試表單功能

## ❓ 還有問題？

如果遇到其他問題，請參考 `SETUP_GUIDE.md` 中的詳細說明。

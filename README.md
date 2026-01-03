# Dollarbase LLC - React Native App

這是 Dollarbase LLC 官方網站的 React Native 版本。

## 功能特色

- 🎨 現代化的設計風格
- 📱 響應式布局，支援多種螢幕尺寸
- 🚀 流暢的使用者體驗
- 🔗 整合外部連結（Challog 專案）

## 安裝

### 前置需求

- Node.js (>= 18)
- React Native 開發環境
- iOS: Xcode 和 CocoaPods
- Android: Android Studio 和 Android SDK

### 安裝步驟

1. 安裝依賴：
```bash
npm install
```

2. iOS 額外步驟：
```bash
cd ios && pod install && cd ..
```

3. 啟動 Metro bundler：
```bash
npm start
```

4. 運行應用：
```bash
# iOS
npm run ios

# Android
npm run android
```

## 專案結構

```
.
├── App.js                 # 主應用程式入口
├── index.js              # 註冊應用程式
├── src/
│   └── components/       # React 組件
│       ├── Header.js     # 頂部導航欄
│       ├── Hero.js       # 主頁英雄區塊
│       ├── Projects.js   # 專案展示區塊
│       ├── Contact.js    # 聯絡資訊區塊
│       └── Footer.js     # 頁尾
├── package.json
└── README.md
```

## 開發

### 運行開發伺服器

```bash
npm start
```

### 運行測試

```bash
npm test
```

### 程式碼檢查

```bash
npm run lint
```

## 技術棧

- React Native 0.73.0
- React 18.2.0
- JavaScript

## 授權

© 2025 Dollarbase LLC. All rights reserved.


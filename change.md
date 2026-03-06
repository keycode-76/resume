# 網站改動計劃

## 概述
將現有的 Tailwind CSS 設計更新為新的深色主題設計，包含導航欄、過濾器、特色項目卡片等功能。**維持使用 Tailwind CSS**，透過自訂配置和內聯樣式實現設計細節。

---

## 設計系統規格

### 顏色系統（簡化版 - 僅 5 色）

**核心顏色（5 色）**:
1. **背景色**: `#0e0e0c` → `bg-[#0e0e0c]` (主背景)
2. **表面色**: `#171715` → `bg-[#171715]` (卡片/按鈕背景，統一使用此色)
3. **文字主色**: `#ece9dc` → `text-[#ece9dc]` (主要文字)
4. **文字次要**: `#72726a` → `text-[#72726a]` (次要文字)
5. **強調色**: `#c8f066` → `bg-[#c8f066]` 或 `text-[#c8f066]` (按鈕/重點)

**邊框和透明度**（使用 Tailwind 內建，不計入顏色數）:
- **邊框**: `border-white/7` (7% 透明度)
- **邊框懸停**: `border-white/18` (18% 透明度)
- **背景半透明**: `bg-[#0e0e0c]/85` (導航欄)
- **懸停效果**: `hover:bg-white/5` 或 `hover:bg-white/10` (增加亮度)

**簡化規則**:
- ✅ **統一表面色**: 所有卡片、按鈕統一使用 `#171715`，懸停時用透明度增加亮度
- ✅ **統一強調色**: 按鈕、重點元素統一使用 `#c8f066`
- ✅ **狀態顏色**: Live 狀態、成功訊息使用 Tailwind 內建 `text-green-400` 或強調色
- ❌ **移除**: 表面色2 (#1f1f1c)、多種綠色變體 (#6ecf6e, #5c9e5c)

### 字體系統
- **標題字體**: 'Syne' (Google Fonts)
  - Tailwind 配置: `font-['Syne']`
  - 字重: 400, 500, 600, 700, 800
- **內文字體**: 'DM Sans' (Google Fonts)
  - Tailwind 配置: `font-['DM_Sans']`
  - 字重: 300, 400, 500

### 響應式斷點
- **移動端**: `< 560px` (Tailwind: `max-[560px]:`)
- **小螢幕**: `< 480px` (Tailwind: `max-[480px]:`)

---

## 主要改動項目

### 1. **整體結構**
- **背景**: 深色背景 `bg-[#0e0e0c]`
- **噪點紋理**: 使用 SVG filter 作為固定背景層
  - Tailwind: `after:` 偽元素或獨立 div
  - 透明度: `opacity-[0.035]`
  - z-index: `z-[9999]`
- **滾動行為**: `scroll-smooth`

### 2. **導航欄 (Navigation)**
- **位置**: `sticky top-0 z-[100]`
- **布局**: `flex items-center justify-between`
- **內邊距**: `px-8 py-[18px]` (32px 18px)
- **背景**: `bg-[#0e0e0c]/85 backdrop-blur-[20px]`
- **邊框**: `border-b border-white/7`
- **品牌名稱**:
  - 字體: `font-['Syne'] font-bold text-[17px]`
  - 字距: `tracking-[-0.3px]`
  - 顏色: `text-[#ece9dc]`
- **社交媒體按鈕**:
  - 尺寸: `w-9 h-9` (36px)
  - 圓角: `rounded-[10px]`
  - 邊框: `border border-white/7`
  - 背景: `bg-[#171715]`
  - 顏色: `text-[#72726a]`
  - 間距: `gap-1.5` (6px)
  - 懸停: `hover:border-white/18 hover:text-[#ece9dc] hover:bg-white/5`
  - 圖標尺寸: `w-[15px] h-[15px]`
  - 過渡: `transition-all duration-[180ms]`

### 3. **頁面容器**
- **最大寬度**: `max-w-[860px]`
- **居中**: `mx-auto`
- **內邊距**: `pt-[52px] px-6 pb-20` (52px 24px 80px)

### 4. **個人簡介區域 (Header)**
- **外邊距**: `mb-10`
- **動畫**: `opacity-0 animate-[rise_0.7s_ease_forwards]`
- **頂部布局**: `flex items-center gap-3.5` (14px)
- **頭像**:
  - 尺寸: `w-[46px] h-[46px]`
  - 圓角: `rounded-full`
  - 背景: `bg-[#171715]`
  - 邊框: `border border-white/7`
  - 內容: 圖片C:\Users\user\Desktop\work\dollarbase-data\website\assets\image\404chen.png
  - 字體大小: `text-xl`
- **姓名標題**:
  - 字體: `font-['Syne'] font-extrabold text-[28px]`
  - 字距: `tracking-[-0.6px]`
- **簡介文字**:
  - 字體大小: `text-sm`
  - 顏色: `text-[#72726a]`
  - 行高: `leading-[1.7]`
  - 外邊距: `mb-2`
- **電子郵件連結**:
  - 顯示: `inline-flex items-center gap-1.5`
  - 字體大小: `text-[12.5px]`
  - 顏色: `text-[#72726a]`
  - 懸停: `hover:text-[#ece9dc]`
  - 圖標尺寸: `w-[13px] h-[13px]`

### 5. **過濾器 (Filters)**
- **布局**: `flex gap-[7px] mb-7 flex-wrap`
- **動畫**: `opacity-0 animate-[rise_0.7s_0.1s_ease_forwards]`
- **按鈕樣式**:
  - 內邊距: `px-[13px] py-1.25`
  - 圓角: `rounded-full`
  - 邊框: `border border-white/7`
  - 背景: `bg-transparent`
  - 字體: `font-['DM_Sans'] text-[12.5px]`
  - 顏色: `text-[#72726a]`
  - 過渡: `transition-all duration-[180ms]`
  - 懸停: `hover:border-white/18 hover:text-[#ece9dc]`
- **啟用狀態**:
  - 背景: `bg-[#ece9dc]`
  - 文字: `text-[#0e0e0c]`
  - 邊框: `border-transparent`
  - 字重: `font-medium`

### 6. **特色項目卡片 (Featured Card)**
- **外邊距**: `mb-3.5`
- **動畫**: `opacity-0 animate-[rise_0.7s_0.18s_ease_forwards]`
- **卡片容器**:
  - 背景: `bg-[#171715]`
  - 邊框: `border border-white/7 rounded-[20px]`
  - 溢出: `overflow-hidden`
  - 位置: `relative`
  - 過渡: `transition-[border-color,transform] duration-[220ms]`
  - 懸停: `hover:border-[rgba(200,240,102,0.2)] hover:-translate-y-0.5`
- **頂部裝飾線**:
  - 使用 `before:` 偽元素
  - 位置: `absolute top-0 left-0 right-0 h-px`
  - 漸變: `bg-gradient-to-r from-transparent via-[rgba(200,240,102,0.25)] to-transparent`
- **內部布局**: `grid grid-cols-[auto_1fr] gap-0`
- **響應式**: `max-[560px]:grid-cols-1`
- **圖片欄**:
  - 寬度: `w-40` (160px)
  - 最小高度: `min-h-[220px]`
  - 背景: `bg-[#1a2a3a]`
  - 位置: `relative overflow-hidden`
  - 顯示: `flex items-center justify-center`
  - 響應式: `max-[560px]:w-full max-[560px]:h-[180px]`
- **圖片樣式**:
  - 尺寸: `w-full h-full`
  - 物件: `object-cover object-[center_top]`
  - 渲染: `image-rendering-pixelated`
  - 透明度: `opacity-92`
- **圖片漸變疊加**:
  - 使用 `after:` 偽元素
  - 位置: `absolute inset-0`
  - 漸變: `bg-gradient-to-r from-transparent via-60% to-[#171715]`
  - 響應式: `max-[560px]:bg-gradient-to-b max-[560px]:via-60%`
- **文字欄**:
  - 內邊距: `p-[26px_26px_22px]`
  - 布局: `flex flex-col`
- **徽章容器**: `flex gap-1.5 mb-3.5 flex-wrap`
- **徽章樣式**:
  - 字體: `text-[10px] font-semibold tracking-[0.08em] uppercase`
  - 內邊距: `px-[9px] py-0.75`
  - 圓角: `rounded-full border`
- **Featured 徽章**:
  - 背景: `bg-[rgba(200,240,102,0.08)]`
  - 邊框: `border-[rgba(200,240,102,0.25)]`
  - 顏色: `text-[#c8f066]`
- **Game 徽章**:
  - 背景: `bg-white/4`
  - 邊框: `border-white/7`
  - 顏色: `text-[#72726a]`
- **Live 徽章**:
  - 背景: `bg-green-500/8` (或 `bg-[rgba(80,180,80,0.08)]`)
  - 邊框: `border-green-500/25` (或 `border-[rgba(80,180,80,0.25)]`)
  - 顏色: `text-green-400` (或使用強調色 `text-[#c8f066]`)
- **標題**:
  - 字體: `font-['Syne'] font-extrabold text-[26px]`
  - 字距: `tracking-[-0.5px]`
  - 外邊距: `mb-2`
  - 行高: `leading-[1.1]`
- **描述**:
  - 字體大小: `text-[13.5px]`
  - 顏色: `text-[#72726a]`
  - 行高: `leading-[1.65]`
  - 外邊距: `mb-5`
- **電子郵件表單容器**: `flex gap-[7px]`
- **輸入框**:
  - 彈性: `flex-1`
  - 背景: `bg-[#0e0e0c]`
  - 邊框: `border border-white/7 rounded-[10px]`
  - 內邊距: `px-3.5 py-2.5`
  - 字體: `font-['DM_Sans'] text-[13px]`
  - 顏色: `text-[#ece9dc]`
  - 外框: `outline-none`
  - 過渡: `transition-[border-color] duration-[180ms]`
  - 佔位符: `placeholder:text-[#72726a]`
  - 聚焦: `focus:border-[rgba(200,240,102,0.35)]`
- **提交按鈕**:
  - 背景: `bg-[#c8f066]`
  - 文字: `text-[#111]`
  - 邊框: `border-none`
  - 圓角: `rounded-[10px]`
  - 內邊距: `px-4 py-2.5`
  - 字體: `font-['Syne'] text-[13px] font-bold`
  - 不換行: `whitespace-nowrap`
  - 過渡: `transition-opacity duration-[180ms]`
  - 懸停: `hover:opacity-85`
- **成功訊息**:
  - 顯示: `hidden` (預設)
  - 字體大小: `text-[13px]`
  - 顏色: `text-green-400` (或使用強調色 `text-[#c8f066]`)
  - 外邊距: `mt-2`

### 7. **項目網格 (Projects Grid)**
- **區塊外邊距**: `mb-2.5`
- **動畫**: `opacity-0 animate-[rise_0.7s_0.26s_ease_forwards]`
- **區塊標籤**:
  - 字體大小: `text-[10px]`
  - 字重: `font-semibold`
  - 字距: `tracking-[0.14em]`
  - 變換: `uppercase`
  - 顏色: `text-[#72726a]`
  - 外邊距: `mb-2.5`
- **網格布局**: `grid grid-cols-3 gap-2`
- **響應式**: `max-[480px]:grid-cols-2`
- **卡片樣式**:
  - 背景: `bg-[#171715]`
  - 邊框: `border border-white/7 rounded-[14px]`
  - 內邊距: `p-4`
  - 布局: `flex flex-col`
  - 比例: `aspect-square`
  - 位置: `relative`
  - 過渡: `transition-[border-color,transform] duration-200`
  - 懸停: `hover:border-white/18 hover:-translate-y-1`
- **高亮卡片**: `bg-[#171715] border-white/10` (或使用 `bg-white/5` 增加亮度)
- **圖標**:
  - 字體大小: `text-[22px]`
  - 外邊距: `mb-auto`
  - 行高: `leading-none`
- **SVG 圖標**: `w-[22px] h-[22px] text-[#72726a] mb-auto`
- **X 圖標**: `text-lg font-extrabold text-[#72726a] mb-auto leading-none font-['Syne']`
- **卡片名稱**:
  - 字體大小: `text-[12.5px]`
  - 字重: `font-medium`
  - 顏色: `text-[#ece9dc]`
  - 外邊距: `mb-0.5`
- **卡片描述**:
  - 字體大小: `text-[10.5px]`
  - 顏色: `text-[#72726a]`
  - 行高: `leading-[1.4]`
- **狀態指示點**:
  - 位置: `absolute top-[11px] right-[11px]`
  - 尺寸: `w-1.25 h-1.25` (5px)
  - 圓角: `rounded-full`
  - 背景: `bg-green-500` (或 `bg-[#c8f066]` 使用強調色)
- **隱藏狀態**: `.hidden` (用於過濾)

### 8. **聯繫區域 (Contact Section)**
- **對齊**: `text-center`
- **內邊距**: `pt-14 pb-0`
- **動畫**: `opacity-0 animate-[rise_0.7s_0.34s_ease_forwards]`
- **標題**:
  - 字體: `font-['Syne'] font-extrabold text-[38px]`
  - 字距: `tracking-[-1px]`
  - 外邊距: `mb-2`
- **副標題**:
  - 顏色: `text-[#72726a]`
  - 字體大小: `text-sm`
  - 外邊距: `mb-[22px]`
- **按鈕**:
  - 顯示: `inline-flex items-center gap-2`
  - 內邊距: `px-6 py-3`
  - 圓角: `rounded-[12px]`
  - 邊框: `border border-white/18`
  - 顏色: `text-[#ece9dc]`
  - 字體大小: `text-sm`
  - 字重: `font-medium`
  - 過渡: `transition-all duration-200`
  - 懸停: `hover:bg-[#ece9dc] hover:text-[#0e0e0c] hover:border-transparent`

### 9. **頁腳 (Footer)**
- **外邊距**: `mt-14 pt-[22px]`
- **邊框**: `border-t border-white/7`
- **布局**: `flex justify-between items-center gap-3 flex-wrap`
- **版權文字**:
  - 字體大小: `text-[11.5px]`
  - 顏色: `text-[#72726a]`

### 10. **動畫定義**
需要在 `<style>` 中定義 `@keyframes rise`:
```css
@keyframes rise {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
```
或使用 Tailwind 配置:
```js
theme: {
  extend: {
    keyframes: {
      rise: {
        '0%': { opacity: '0', transform: 'translateY(14px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      }
    }
  }
}
```

### 11. **JavaScript 功能**
- **過濾器**: 根據標籤過濾項目顯示
  - 切換 `.hidden` 類別
  - 更新按鈕 `.active` 狀態
- **電子郵件表單**: 驗證和成功訊息顯示
  - 驗證格式（包含 @）
  - 顯示成功訊息
  - 隱藏輸入框和按鈕
- **鍵盤支援**: Enter 鍵提交表單

---

## 圖片處理

### 需要替換的圖片
- **位置**: Featured 卡片中的遊戲截圖
- **當前**: Base64 編碼圖片（data:image/jpeg;base64,...）
- **替換為**: `assets/image/screenshot_whoishuman.png`
- **路徑**: 相對路徑 `assets/image/screenshot_whoishuman.png`
- **Tailwind 類別**: `<img src="assets/image/screenshot_whoishuman.png" class="w-full h-full object-cover object-[center_top] image-rendering-pixelated opacity-92" alt="Who is Human gameplay">`

---

## Tailwind CSS 配置需求

### 自訂顏色
在 `tailwind.config.js` 中擴展顏色：
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0e0e0c',
        'surface': '#171715',
        'text-primary': '#ece9dc',
        'text-muted': '#72726a',
        'accent': '#c8f066',
      }
    }
  }
}
```

### 自訂動畫
```js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'rise': 'rise 0.7s ease forwards',
        'rise-delay-1': 'rise 0.7s 0.1s ease forwards',
        'rise-delay-2': 'rise 0.7s 0.18s ease forwards',
        'rise-delay-3': 'rise 0.7s 0.26s ease forwards',
        'rise-delay-4': 'rise 0.7s 0.34s ease forwards',
      }
    }
  }
}
```

### 自訂字體
在 HTML `<head>` 中引入 Google Fonts：
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### 噪點紋理背景
使用固定定位的偽元素或獨立 div：
```html
<div class="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035]" 
     style="background-image: url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E');"></div>
```

---

## 具體代碼變更

### HTML 結構變更
1. **保留 Tailwind CDN**: `<script src="https://cdn.tailwindcss.com"></script>`
2. **新增字體連結**: Google Fonts (Syne, DM Sans)
3. **新增噪點背景層**: 固定定位的 div
4. **重構導航欄**: 使用 Tailwind 類別實現
5. **重構個人簡介**: 使用 Tailwind 類別和動畫
6. **新增過濾器**: 使用 Tailwind 按鈕樣式
7. **新增特色卡片**: 使用 Tailwind Grid 和 Flexbox
8. **更新項目網格**: 使用 Tailwind Grid
9. **更新聯繫區域**: 使用 Tailwind 居中布局
10. **簡化頁腳**: 使用 Tailwind Flex

### CSS 樣式
- **主要使用 Tailwind 類別**: 大部分樣式透過 Tailwind 實現
- **少量自訂樣式**: 
  - `@keyframes rise` 動畫（可在 Tailwind 配置中定義）
  - 噪點 SVG 背景（內聯 style）
  - `image-rendering-pixelated`（需要自訂類別或內聯）
- **響應式設計**: 使用 Tailwind 響應式前綴 `max-[560px]:` 和 `max-[480px]:`

### JavaScript
1. **過濾器功能**:
   ```javascript
   document.querySelectorAll('.filter-btn').forEach(btn => {
     btn.addEventListener('click', () => {
       // 移除所有 active 類別
       document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active', 'bg-[#ece9dc]', 'text-[#0e0e0c]'));
       // 添加 active 類別到當前按鈕
       btn.classList.add('active', 'bg-[#ece9dc]', 'text-[#0e0e0c]');
       // 過濾項目
       const filter = btn.dataset.filter;
       document.querySelectorAll('.featured-wrap, .card-wrap').forEach(el => {
         const tags = el.dataset.tags || '';
         if (filter === 'all' || tags.includes(filter)) {
           el.classList.remove('hidden');
         } else {
           el.classList.add('hidden');
         }
       });
     });
   });
   ```

2. **電子郵件表單處理**:
   ```javascript
   function handleEmail() {
     const inp = document.getElementById('wih-email');
     const suc = document.getElementById('email-success');
     const val = inp.value.trim();
     if (!val || !val.includes('@')) {
       inp.classList.add('border-red-500/50');
       setTimeout(() => inp.classList.remove('border-red-500/50'), 1200);
       return;
     }
     inp.classList.add('hidden');
     document.querySelector('.email-btn').classList.add('hidden');
     suc.classList.remove('hidden');
   }
   ```

3. **鍵盤支援**: Enter 鍵觸發表單提交

---

## Tailwind 類別對照表

### 常用自訂值
- `bg-[#0e0e0c]` → 背景色
- `bg-[#171715]` → 表面色
- `bg-white/5` → 懸停時的表面色變化
- `text-[#ece9dc]` → 主文字色
- `text-[#72726a]` → 次要文字色
- `border-white/7` → 邊框（7% 透明度）
- `border-white/18` → 邊框懸停（18% 透明度）
- `bg-[#c8f066]` → 強調色
- `font-['Syne']` → Syne 字體
- `font-['DM_Sans']` → DM Sans 字體

### 特殊尺寸
- `w-[46px]` → 46px 寬度
- `h-[46px]` → 46px 高度
- `text-[17px]` → 17px 字體大小
- `rounded-[10px]` → 10px 圓角
- `gap-[7px]` → 7px 間距

---

## 注意事項

1. **圖片路徑**: 確保 `screenshot_whoishuman.png` 文件位於 `assets/image/` 目錄
2. **響應式設計**: 
   - 測試 `< 560px` 斷點（特色卡片垂直布局）
   - 測試 `< 480px` 斷點（項目網格 2 欄）
3. **瀏覽器兼容性**: 
   - `backdrop-filter` 需要現代瀏覽器
   - `image-rendering-pixelated` 需要測試
   - CSS 變數在 Tailwind 中自動處理
4. **性能優化**: 
   - Base64 圖片替換為文件路徑可減少 HTML 文件大小
   - 考慮圖片懶加載（`loading="lazy"`）
5. **內容一致性**: 確保所有文字內容與 `list.md` 一致
6. **Tailwind 配置**: 
   - 如需自訂類別，可在 `tailwind.config.js` 中擴展
   - 或使用 CDN 版本配合內聯樣式
7. **動畫時序**: 確保各元素淡入動畫的延遲時間正確
8. **偽元素**: Tailwind 的 `before:` 和 `after:` 需要啟用，或使用獨立元素

---

## 實施順序建議

1. ✅ 創建備份（已完成）
2. ✅ 創建改動計劃（已完成）
3. **更新 Tailwind 配置**（如使用配置文件）
4. **添加字體連結**到 `<head>`
5. **添加噪點背景層**
6. **重構導航欄**
7. **重構個人簡介區域**
8. **添加過濾器**
9. **添加特色項目卡片**（更新圖片路徑）
10. **更新項目網格**
11. **更新聯繫區域**
12. **簡化頁腳**
13. **添加 JavaScript 功能**
14. **測試響應式設計**
15. **調整樣式細節**
16. **最終測試**

---

## 測試檢查清單

### 功能測試
- [ ] 過濾器按鈕切換正常
- [ ] 項目根據過濾器正確顯示/隱藏
- [ ] 電子郵件表單驗證正常
- [ ] Enter 鍵可提交表單
- [ ] 成功訊息正確顯示

### 視覺測試
- [ ] 導航欄固定且模糊效果正常
- [ ] 所有動畫淡入效果正常
- [ ] 懸停效果正常運作
- [ ] 響應式布局在移動端正常
- [ ] 圖片顯示正確且漸變疊加正常
- [ ] 所有顏色和字體正確顯示

### 響應式測試
- [ ] `< 560px`: 特色卡片垂直布局
- [ ] `< 480px`: 項目網格 2 欄
- [ ] 所有文字和按鈕在移動端可讀

### 瀏覽器測試
- [ ] Chrome/Edge（最新版）
- [ ] Firefox（最新版）
- [ ] Safari（如可用）
- [ ] 移動瀏覽器（iOS Safari, Chrome Mobile）

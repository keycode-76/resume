import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0', // 允許外部訪問
    port: 5173,
    strictPort: false, // 如果端口被占用，嘗試下一個可用端口
  },
  // 使用默認的 public 目錄，會被複製到 dist 根目錄
  build: {
    copyPublicDir: true, // 確保複製 public 目錄
    rollupOptions: {
      input: 'index.html', // 明確指定入口文件
    },
    outDir: 'dist',
  }
})

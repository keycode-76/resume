import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0', // 允許外部訪問
    port: 5173,
    strictPort: false, // 如果端口被占用，嘗試下一個可用端口
  }
})

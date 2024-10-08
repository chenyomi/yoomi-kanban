import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import path from "path";
export default defineConfig({
  base: './',
  plugins: [vue(), monacoEditorPlugin.default({
    // 你可以在这里配置monaco-editor的选项
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@grid': path.resolve(__dirname, './src/components/grid/'),
    }
  },
  server: {
    hmr: true,
    open: true,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'docs',//想要把dist修改成什么名字在这边改
  }
})

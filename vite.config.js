import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import path from "path";
export default defineConfig({
  plugins: [vue(), monacoEditorPlugin.default({
    // 你可以在这里配置monaco-editor的选项
  })],
  base: './',
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
  }
})

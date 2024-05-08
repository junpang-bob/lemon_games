import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      sass:{
        loader: 'css-loader',
        options: {
          modules: true, // 开启模块化
          localIdentName: '[path][name]-[local]-[hash:base64:5]' // 类名名称
        }
      }
    }
  }
})

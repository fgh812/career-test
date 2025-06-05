import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['202506.duckdns.org'],
    // https: true,
    // host: '0.0.0.0', // 외부 접속 허용
    // port: 5173,       // 포트 지정
    // strictPort: true,  // 포트 중복 시 오류 발생 (자동 변경 방지)
  }
})
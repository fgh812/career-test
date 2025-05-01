# Career Test App

개발자 직군(프론트엔드, 백엔드, AA, TA, DBA) 중 자신에게 어울리는 역할을 간단한 테스트를 통해 추천해주는 React 기반 웹 애플리케이션입니다.

## 🖥 데모
> [배포 링크] 또는 로컬에서 실행 방법 참고

## 📦 기술 스택

- React (Vite 기반)
- TypeScript
- Tailwind CSS
- Node.js (개발 환경 기준)

## 🚀 실행 방법

1. 레포지토리 클론
```bash
git clone https://github.com/yourname/career-test.git
cd career-test
```

2. 패키지 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 접속
```
http://localhost:5173
```

## 🧠 구성

- `questions`: 일상 속 행동을 기반으로 직군을 판별하는 7가지 질문
- `result`: 선택된 답안 유형에 따라 가장 높은 점수를 받은 직군을 결과로 출력

## 📁 디렉토리 구조
```
career-test/
├── public/
├── src/
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── vite.config.ts
```

## ✍️ 제작자
- 이 테스트는 개발 직군에 관심 있는 비전공자/초보자를 위해 제작되었습니다.

## 📌 향후 개선사항

- 테스트 결과에 따른 직군별 상세 설명 및 추천 학습 자료 제공
- 응답 기반 점수 가중치 커스터마이징 기능
- 응답 결과 저장 및 분석 기능 (로컬스토리지 또는 서버 연동)
- 모바일 반응형 UI 개선

## 🛠 배포 방법 (Ubuntu 서버 기준)

1. GitHub Actions 또는 수동으로 빌드
```bash
npm run build
```

2. 서버에 빌드된 `dist` 폴더 업로드 후 nginx 설정
```nginx
server {
  listen 80;
  server_name your.domain.com;
  root /path/to/dist;

  location / {
    try_files $uri /index.html;
  }
}
```

3. SSL 인증서 적용 및 포트 포워딩 설정 (선택)

## 🔗 라이선스
MIT License

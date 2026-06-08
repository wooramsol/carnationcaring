# 카네이션간병협회

카네이션간병협회 웹사이트 (HTML / CSS) — 독자 디자인

## 페이지

| 페이지 | 파일 |
|--------|------|
| 메인 | `index.html` |
| 간병범위 | `care-scope.html` |
| 문의하기 | `contact.html` |

## 로컬에서 바로 실행하기

### 방법 1 — 스크립트 (가장 간단)

**Mac / Linux**

```bash
chmod +x start.sh
./start.sh
```

**Windows**

```bat
start.bat
```

브라우저에서 http://localhost:8080/index.html 을 엽니다.

---

### 방법 2 — npm

```bash
npm install
npm start
```

브라우저에서 http://localhost:3000/index.html 을 엽니다.

---

### 방법 3 — Python 직접 실행

```bash
python3 -m http.server 8080
```

## 프로젝트 구조

```
carnationcaring/
├── index.html          # 메인 페이지
├── care-scope.html     # 간병범위
├── contact.html        # 문의하기
├── styles.css          # 공통 스타일
├── assets/
│   └── logo.svg        # 로고
├── start.sh            # Mac/Linux 실행 스크립트
├── start.bat           # Windows 실행 스크립트
└── package.json        # npm 실행 설정
```

## Git에서 받아서 실행

```bash
git clone https://github.com/wooramsol/carnationcaring.git
cd carnationcaring
./start.sh
```

@echo off
cd /d "%~dp0"
set PORT=8080

echo.
echo   카네이션간병협회 로컬 서버
echo   -------------------------
echo   메인:     http://localhost:%PORT%/index.html
echo   간병범위: http://localhost:%PORT%/care-scope.html
echo   문의하기: http://localhost:%PORT%/contact.html
echo.
echo   종료: Ctrl + C
echo.

python -m http.server %PORT% 2>nul || py -m http.server %PORT% 2>nul || (
  echo Python이 없습니다. npm start 를 사용해주세요.
  pause
  exit /b 1
)

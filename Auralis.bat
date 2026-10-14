@echo off
title Auralis Studio
echo.
echo  Auralis Studio
echo  ==============
echo.
where node >nul 2>&1
if %errorlevel% neq 0 (
  echo Node.js required. Install from https://nodejs.org then run again.
  pause
  exit /b 1
)
cd /d "%~dp0"
if not exist node_modules (
  echo Installing dependencies...
  call npm install
)
echo.
echo Server: http://localhost:8080
echo Stop: Ctrl+C
echo.
start "" http://localhost:8080
call npm run dev

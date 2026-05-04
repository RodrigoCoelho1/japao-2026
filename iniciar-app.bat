@echo off
title Japao 2026 - App Server
echo.
echo  ==========================================
echo   JAPAO 2026 - App de Viagem
echo  ==========================================
echo.
echo  Iniciando servidor...
echo  Acesse no celular (mesma rede Wi-Fi):
echo.

cd /d "%~dp0"
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /C:"Endere" ^| findstr /v "IPv6"') do (
  for /f "tokens=1" %%b in ("%%a") do (
    echo   http://%%b:5173
  )
)

echo.
echo  No iPhone: abra no Safari e toque em Compartilhar ^> Adicionar a Tela de Inicio
echo  No Android: abra no Chrome e toque nos 3 pontos ^> Adicionar a tela inicial
echo.
echo  Pressione CTRL+C para encerrar o servidor.
echo  ==========================================
echo.

npm run dev -- --host --port 5173
pause

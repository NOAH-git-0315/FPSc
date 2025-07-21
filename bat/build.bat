cd frontend
call npm run build
if errorlevel 1 (
  echo npm build failed. Exiting...
  exit /b 1
)

cd ..
robocopy frontend\out nginx\html /E /PURGE
set rc=%ERRORLEVEL%
if %rc% GEQ 4 (
  echo robocopy failed with errorlevel %rc%. Exiting...
  exit /b %rc%
)

call docker compose build nginx
if errorlevel 1 (
  echo docker compose build nginx failed. Exiting...
  exit /b 1
)

call docker compose -f docker-compose.yml up
if errorlevel 1 (
  echo docker compose up failed. Exiting...
  exit /b 1
)

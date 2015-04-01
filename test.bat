:: 2>/dev/null || echo "
::::::::::::::::::::::::::: Windows
@ECHO OFF
set NODE_PATH=resources&& node_modules\.bin\mocha --compilers js:babel/register resources/components/**/__tests__/*.js
exit /b %ERRORLEVEL%

" >/dev/null
########################### Unix
#!/bin/bash
export NODE_PATH=resources && node_modules/.bin/mocha --compilers js:babel/register resources/components/**/__tests__/*.js

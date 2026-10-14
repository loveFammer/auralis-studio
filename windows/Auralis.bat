@echo off
title Auralis Studio
echo Starting Auralis...
cd /d "%~dp0"
powershell -NoProfile -Command "$l = New-Object System.Net.HttpListener; $l.Prefixes.Add('http://localhost:8080/'); $l.Start(); Start-Process 'http://localhost:8080'; while($l.IsListening) { $c = $l.GetContext(); $p = $c.Request.Url.LocalPath; if($p -eq '/') { $p = '/index.html' }; $f = Join-Path $pwd $p.TrimStart('/'); if(Test-Path $f) { $b = [IO.File]::ReadAllBytes($f); $c.Response.OutputStream.Write($b,0,$b.Length) } else { $c.Response.StatusCode = 404 }; $c.Response.Close() }"

$gitPath = (Get-ChildItem -Path "C:\Program Files" -Filter git.exe -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty FullName)
if ($gitPath) {
  $dir = Split-Path $gitPath
  $newPath = $env:PATH + ";" + $dir
  [System.Environment]::SetEnvironmentVariable("PATH", $newPath, "User")
  $env:PATH = $newPath
  git --version
  Write-Host "Git path added: $dir"
} else {
  Write-Host "Git not found in C:\Program Files"
}

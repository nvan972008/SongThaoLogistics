$ErrorActionPreference = 'Stop'

$src = "d:\Data\Code\Code\SongThaoLogistics\public\icons\st-logo.jpg"
$dst = "d:\Data\Code\Code\SongThaoLogistics\public\favicon.ico"

Add-Type -AssemblyName System.Drawing

$img = [System.Drawing.Image]::FromFile($src)
$bmp = New-Object System.Drawing.Bitmap 32, 32
$g = [System.Drawing.Graphics]::FromImage($bmp)

$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)

$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, 32, 32)
$g.SetClip($path)
$g.DrawImage($img, 0, 0, 32, 32)
$g.ResetClip()
$path.Dispose()

$hIcon = $bmp.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($hIcon)
$fs = [System.IO.File]::Open($dst, [System.IO.FileMode]::Create)
$icon.Save($fs)

$fs.Close()
$icon.Dispose()
[System.Runtime.InteropServices.Marshal]::Release($hIcon) | Out-Null
$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Output "Created: $dst"
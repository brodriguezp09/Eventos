const sizeWindowsWidth = document.getElementById('width');
const sizeWindowsHeight = document.getElementById('height');

sizeWindowsWidth.textContent = window.innerWidth;
sizeWindowsHeight.textContent = window.innerHeight;

const sizeWindowsWidth2 = document.getElementById('width2');
const sizeWindowsHeight2 = document.getElementById('height2');
const colorDepth = document.getElementById('colorDepth');
const pixelDepth = document.getElementById('pixelDepth');

sizeWindowsWidth2.textContent = screen.width;
sizeWindowsHeight2.textContent = screen.height;
colorDepth.textContent = screen.colorDepth;
pixelDepth.textContent = screen.pixelDepth;

const href = document.getElementById('href');
const hostname = document.getElementById('hostname');
const pathname = document.getElementById('pathname');
const port = document.getElementById('port');

href.textContent = window.location.href
hostname.textContent = window.location.hostname
pathname.textContent = window.location.pathname
port.textContent = window.location.port

const cookieEnabled = document.getElementById('cookieEnabled');
const language = document.getElementById('language');

cookieEnabled.textContent = navigator.cookieEnabled
language.textContent = navigator.language
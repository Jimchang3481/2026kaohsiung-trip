self.addEventListener('install', (event) => {
self.skipWaiting();
console.log('PWA Service Worker 已安裝');
});

self.addEventListener('activate', (event) => {
console.log('PWA Service Worker 已啟用');
});

self.addEventListener('fetch', (event) => {
});

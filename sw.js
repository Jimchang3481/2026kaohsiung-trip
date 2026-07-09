// 基礎的 Service Worker 監聽事件
self.addEventListener('install', (event) => {
self.skipWaiting();
console.log('PWA Service Worker 已安裝');
});

self.addEventListener('activate', (event) => {
console.log('PWA Service Worker 已啟用');
});

self.addEventListener('fetch', (event) => {
  // 暫時不對網絡請求做攔截快取，確保網頁內容即時更新
});
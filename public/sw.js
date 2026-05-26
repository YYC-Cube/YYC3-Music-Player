const CACHE_NAME = 'd-music-v3';
const STATIC_CACHE = 'd-music-static-v3';
const MEDIA_CACHE = 'd-music-media-v3';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/D-brand/ios/AppIcon.appiconset/Icon-App-1024x1024@1x.png',
  '/D-brand/android/mipmap-xxxhdpi/ic_launcher.png',
];

const BRAND_ASSETS = [
  '/D-brand/ios/AppIcon.appiconset/Icon-App-20x20@2x.png',
  '/D-brand/ios/AppIcon.appiconset/Icon-App-29x29@2x.png',
  '/D-brand/ios/AppIcon.appiconset/Icon-App-40x40@2x.png',
  '/D-brand/ios/AppIcon.appiconset/Icon-App-60x60@2x.png',
  '/D-brand/ios/AppIcon.appiconset/Icon-App-76x76@2x.png',
  '/D-brand/ios/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png',
  '/D-brand/android/mipmap-mdpi/ic_launcher.png',
  '/D-brand/android/mipmap-hdpi/ic_launcher.png',
  '/D-brand/android/mipmap-xhdpi/ic_launcher.png',
  '/D-brand/android/mipmap-xxhdpi/ic_launcher.png',
  '/D-brand/android/mipmap-xxxhdpi/ic_launcher.png',
  '/D-brand/windows/windows/icon-256.png',
];

const IMAGE_ASSETS = [
  '/D-cover/D-cover-01.jpg',
  '/D-cover/D-cover-03.jpg',
  '/D-cover/D-cover-05.jpg',
  '/D-cover/D-cover-06.jpg',
  '/D-cover/D-cover-07.jpg',
  '/D-poster/D-poster-01.jpg',
  '/D-poster/D-poster-03.jpg',
  '/D-poster/D-poster-04.jpg',
  '/D-poster/D-poster-05.jpg',
  '/D-poster/D-poster-06.jpg',
  '/D-avatar/D-avatar-01.jpg',
  '/D-avatar/D-avatar-02.jpg',
  '/D-avatar/D-avatar-03.jpg',
];

const MUSIC_FILES = [
  '/D-Music/董小姐 and 沫言 - 奉陪.mp3',
  '/D-Music/董小姐 and 沫言 - 岁月如歌.mp3',
  '/D-Music/董小姐 and 沫言 - 时光.mp3',
  '/D-Music/董小姐 and 沫言 - 浮生如渡.mp3',
  '/D-Music/董小姐 and 沫言 - 渡心时序.mp3',
  '/D-Music/董小姐 - 岁月如歌.mp3',
  '/D-Music/董小姐 - 我是渡船也是过客.mp3',
  '/D-Music/董小姐 - 我的宝贝.mp3',
  '/D-Music/董小姐 - 秋风不问梧桐意.mp3',
  '/D-Music/董小姐 - 过客.mp3',
  '/D-Music/董小姐 - 除了你.mp3',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
      caches.open(CACHE_NAME).then((cache) => cache.addAll([...BRAND_ASSETS, ...IMAGE_ASSETS])),
      caches.open(MEDIA_CACHE).then((cache) => cache.addAll(MUSIC_FILES)),
    ]).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const currentCaches = [STATIC_CACHE, MEDIA_CACHE, CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((n) => !currentCaches.includes(n)).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  if (url.pathname.includes('/functions/') || url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  if (url.pathname.endsWith('.mp3') || url.pathname.includes('/D-Music/')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(MEDIA_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((names) => names.forEach((n) => caches.delete(n)));
  }
});

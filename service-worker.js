  var CACHE_NAME = 'V0.1';

  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll([
            '/',
            '/index.html',
            '/home.js',
            '/portoes.js',
            '/portoes.html',
            '/automacao.js',
            '/automacao.html',
            '/footer.html',
            '/carousel.html',
            '/carousel_automacao.html',
            '/navbar.html',
            '/carousel.css',
        ]);
      })
    );
  });
  
  self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName !== CACHE_NAME;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
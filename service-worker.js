self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
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
          
          // Adicione aqui todos os arquivos que você deseja que sejam cacheados pelo Service Worker
        ]);
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
  
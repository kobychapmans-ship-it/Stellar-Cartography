const CACHE_NAME='cartographica-r23.6-colony-sovereignty-v13';
const CANONICAL='./index.html?rev=23.6-colony-sovereignty-v13';
const SHELL=[CANONICAL,'./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>/cartographica/i.test(k)&&k!==CACHE_NAME).map(k=>caches.delete(k))))
      .then(()=>caches.open(CACHE_NAME))
      .then(cache=>cache.addAll(SHELL.map(x=>new Request(x,{cache:'reload'}))))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>/cartographica/i.test(k)&&k!==CACHE_NAME).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const u=new URL(event.request.url), scope=new URL(self.registration.scope);
  const nav=event.request.mode==='navigate' && u.origin===scope.origin && (u.pathname===scope.pathname || u.pathname.endsWith('/index.html'));
  if(nav){
    event.respondWith(
      fetch(event.request,{cache:'no-store'})
        .then(r=>{
          if(r&&r.ok){
            caches.open(CACHE_NAME).then(c=>{
              c.put(CANONICAL,r.clone());
              c.put('./index.html',r.clone());
            });
          }
          return r;
        })
        .catch(()=>caches.match(CANONICAL).then(r=>r||caches.match('./index.html')))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(hit=>hit||fetch(event.request).then(r=>{
      if(r&&r.ok)caches.open(CACHE_NAME).then(c=>c.put(event.request,r.clone()));
      return r;
    }))
  );
});

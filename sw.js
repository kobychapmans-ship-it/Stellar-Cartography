const CACHE_NAME='cartographica-r23-only-grand-strategy-v3';
const CANONICAL_PATH='./index.html?rev=23-grand-strategy-diplomacy-mobilisation-v3';
const APP_SHELL=[CANONICAL_PATH,'./manifest.webmanifest?v=23-grand-strategy-diplomacy-mobilisation-v3','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>/cartographica/i.test(k)&&k!==CACHE_NAME).map(k=>caches.delete(k))))
      .then(()=>caches.open(CACHE_NAME))
      .then(cache=>cache.addAll(APP_SHELL))
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
  const url=new URL(event.request.url);
  const canonical=new URL(CANONICAL_PATH,self.registration.scope);
  const isAppNavigation=event.request.mode==='navigate' && url.origin===canonical.origin && (url.pathname.endsWith('/')||url.pathname.endsWith('/index.html'));

  if(isAppNavigation){
    const requestedRev=url.searchParams.get('rev')||'';
    if(url.href!==canonical.href && requestedRev!==canonical.searchParams.get('rev')){
      event.respondWith(Promise.resolve(Response.redirect(canonical.href,302)));
      return;
    }
    event.respondWith(
      fetch(canonical.href,{cache:'no-store'})
        .then(r=>{if(r&&r.ok)caches.open(CACHE_NAME).then(c=>c.put(CANONICAL_PATH,r.clone()));return r;})
        .catch(()=>caches.match(CANONICAL_PATH))
    );
    return;
  }

  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(r=>{
    if(r&&r.ok)caches.open(CACHE_NAME).then(cache=>cache.put(event.request,r.clone()));
    return r;
  })));
});

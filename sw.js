const CACHE_NAME='cartographica-r20-visual-settlements-v1';
const APP_SHELL=['./index.html?rev=20-visual-settlements-v1','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>/cartographica/i.test(k)&&k!==CACHE_NAME).map(k=>caches.delete(k))))
    .then(()=>caches.open(CACHE_NAME)).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME&&/cartographica/i.test(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  const isNav=event.request.mode==='navigate'||url.pathname.endsWith('/index.html')||url.pathname.endsWith('/Stellar-Cartography/');
  if(isNav){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(r=>{
      if(r&&r.status===200){const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put('./index.html?rev=20-visual-settlements-v1',copy));}
      return r;
    }).catch(()=>caches.match('./index.html?rev=20-visual-settlements-v1')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request,{cache:'no-store'}).then(r=>{
    if(r&&r.status===200&&r.type!=='opaque'){const copy=r.clone();caches.open(CACHE_NAME).then(c=>c.put(event.request,copy));}
    return r;
  })));
});

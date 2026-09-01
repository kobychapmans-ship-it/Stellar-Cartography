const CACHE_NAME='cartographica-r21-turn-cycle-colony-ui-v1';
const APP_SHELL=['./','./index.html?rev=21-turn-cycle-colony-ui-v1','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME&&/cartographica/i.test(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const req=event.request;
  const isNav=req.mode==='navigate' || req.destination==='document';
  if(isNav){
    event.respondWith(fetch(req,{cache:'no-store'}).then(response=>{
      if(response&&response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put('./index.html?rev=21-turn-cycle-colony-ui-v1',copy));}
      return response;
    }).catch(()=>caches.match('./index.html?rev=21-turn-cycle-colony-ui-v1').then(r=>r||caches.match('./'))));
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(response=>{
    if(response&&response.status===200&&response.type!=='opaque'){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy));}
    return response;
  })));
});

const CACHE_NAME='cartographica-r23.4-final-offline-v8';
const BUILD='23.4-final-offline-v8';
const CANONICAL='./index.html?rev='+BUILD;
const APP_SHELL=[CANONICAL,'./index.html','./manifest.webmanifest?v='+BUILD,'./icon-192.png','./icon-512.png','./apple-touch-icon.png'];

async function purgeOldCaches(){
  const keys=await caches.keys();
  await Promise.all(keys.filter(k=>/cartographica/i.test(k)&&k!==CACHE_NAME).map(k=>caches.delete(k)));
}

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    await purgeOldCaches();
    const cache=await caches.open(CACHE_NAME);
    for(const url of APP_SHELL){
      try{
        const response=await fetch(new Request(url,{cache:'reload'}));
        if(response&&response.ok)await cache.put(url,response.clone());
      }catch(_){}
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    await purgeOldCaches();
    await self.clients.claim();
    const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    for(const client of clients)client.postMessage({type:'CARTOGRAPHICA_BUILD_ACTIVE',revision:'23.4',build:BUILD});
  })());
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  const scope=new URL(self.registration.scope);
  if(url.origin!==scope.origin)return;

  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      const cache=await caches.open(CACHE_NAME);
      try{
        const response=await fetch(new Request(CANONICAL,{cache:'no-store'}));
        if(response&&response.ok){
          await cache.put(CANONICAL,response.clone());
          await cache.put('./index.html',response.clone());
          return response;
        }
      }catch(_){}
      return (await cache.match(CANONICAL)) || (await cache.match('./index.html')) || Response.error();
    })());
    return;
  }

  event.respondWith((async()=>{
    const cache=await caches.open(CACHE_NAME);
    const cached=await cache.match(event.request);
    if(cached)return cached;
    try{
      const response=await fetch(event.request);
      if(response&&response.ok)await cache.put(event.request,response.clone());
      return response;
    }catch(_){
      return cached||Response.error();
    }
  })());
});

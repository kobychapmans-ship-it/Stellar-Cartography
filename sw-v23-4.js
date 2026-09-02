const CACHE_NAME='cartographica-r23.5-fleet-operations-stable-v11';
const START='./index.html?rev=23.5-fleet-operations-stable-v11';
const SHELL=[START,'./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    for(const url of SHELL){
      try{
        const response=await fetch(new Request(url,{cache:'reload'}));
        if(response&&response.ok)await cache.put(url,response.clone());
      }catch(_){ }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    for(const key of await caches.keys()){
      if(/cartographica/i.test(key)&&key!==CACHE_NAME)await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;

  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const response=await fetch(event.request,{cache:'no-store'});
        if(response&&response.ok){
          const cache=await caches.open(CACHE_NAME);
          await cache.put(START,response.clone());
          await cache.put('./index.html',response.clone());
          return response;
        }
      }catch(_){ }
      return (await caches.match(START))||(await caches.match('./index.html'))||Response.error();
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    if(cached)return cached;
    try{
      const response=await fetch(event.request);
      if(response&&response.ok){
        const cache=await caches.open(CACHE_NAME);
        await cache.put(event.request,response.clone());
      }
      return response;
    }catch(_){
      return Response.error();
    }
  })());
});

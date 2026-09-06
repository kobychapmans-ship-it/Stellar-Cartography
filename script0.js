
/* Revision 23.9 stable bootstrap: identity only; never reloads the running game. */
(function(){
  'use strict';
  const REVISION='26.7';
  const BUILD='26.7-consolidated-craftworld-faction-construction-v51-tested';
  const LABEL='rev 26.7 — Consolidated Craftworld & Faction Construction';
  const TITLE='Administratum Stellar Cartographica — Revision 26.7';
  try{
    const u=new URL(location.href);
    if(u.searchParams.get('rev')!==BUILD){u.searchParams.set('rev',BUILD);history.replaceState(null,'',u.pathname+'?'+u.searchParams.toString()+u.hash)}
  }catch(_){}
  const enforce=()=>{
    document.documentElement.dataset.cartographicaRevision=REVISION;
    document.documentElement.dataset.cartographicaBuild=BUILD;
    document.title=TITLE;
    const badge=document.querySelector('.generation-head-actions .badge');
    if(badge)badge.textContent=LABEL;
  };
  document.addEventListener('DOMContentLoaded',enforce,{once:true});
  window.addEventListener('pageshow',enforce);
  window.addEventListener('load',()=>{
    enforce();
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('./sw.js?build='+BUILD,{scope:'./',updateViaCache:'none'}).then(r=>r.update().catch(()=>{})).catch(()=>{});
    }
  },{once:true});
})();

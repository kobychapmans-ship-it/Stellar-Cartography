
/* iPhone Home-Screen orientation guard: prefer primary portrait and avoid inverted secondary portrait. */
(function(){
  document.documentElement.classList.add('carto-orientation-lock');
  const tryLock=()=>{try{const o=screen.orientation;if(o&&o.lock){const p=o.lock('portrait-primary');if(p&&p.catch)p.catch(()=>{})}}catch(_){}};
  window.addEventListener('orientationchange',tryLock,{passive:true});
  window.addEventListener('pageshow',tryLock,{passive:true});
  document.addEventListener('pointerdown',tryLock,{passive:true,once:true});
  tryLock();
})();

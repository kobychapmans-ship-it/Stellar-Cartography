const fs=require('fs'),vm=require('vm');
function node(){return {classList:{_s:new Set(),add(...x){x.forEach(v=>this._s.add(v))},remove(...x){x.forEach(v=>this._s.delete(v))},toggle(v,on){if(on===undefined){if(this._s.has(v)){this._s.delete(v);return false}this._s.add(v);return true}if(on)this._s.add(v);else this._s.delete(v);return on},contains(v){return this._s.has(v)}},style:{},dataset:{},addEventListener(){},removeEventListener(){},setAttribute(){},getAttribute(){return null},querySelector(){return null},querySelectorAll(){return []},appendChild(){},append(){},remove(){},insertAdjacentHTML(){},focus(){},click(){},getContext(){return null},getBoundingClientRect(){return {width:800,height:600,left:0,top:0}},children:[],options:[],value:'',checked:false,textContent:'',innerHTML:'',hidden:false,disabled:false};}
const _nodes=new Map();const document={body:node(),head:node(),documentElement:node(),getElementById(id){if(!_nodes.has(id))_nodes.set(id,node());return _nodes.get(id)},querySelector(){return null},querySelectorAll(){return []},addEventListener(){},removeEventListener(){},createElement(){return node()},createElementNS(){return node()}};
const window={document,innerWidth:390,innerHeight:844,devicePixelRatio:2,addEventListener(){},removeEventListener(){},dispatchEvent(){},matchMedia(){return {matches:true,addEventListener(){}}},location:{href:'http://localhost/',origin:'http://localhost',pathname:'/'},navigator:{},setTimeout,clearTimeout,setInterval,clearInterval,requestAnimationFrame:(f)=>0,cancelAnimationFrame(){}};window.window=window;window.self=window;
const context={window,document,navigator:window.navigator,location:window.location,localStorage:{getItem(){return null},setItem(){},removeItem(){}},sessionStorage:{getItem(){return null},setItem(){},removeItem(){}},console,Math,Date,JSON,Array,Object,String,Number,Boolean,RegExp,Map,Set,WeakMap,WeakSet,Promise,Uint8Array,Int32Array,Float32Array,TextEncoder,TextDecoder,Blob:global.Blob,URL:global.URL,Event:function(){},CustomEvent:function(){},Image:function(){},FileReader:function(){},DOMParser:function(){this.parseFromString=()=>({querySelector(){return null},querySelectorAll(){return []}})},XMLSerializer:function(){},crypto:global.crypto,performance:global.performance,structuredClone:global.structuredClone,setTimeout,clearTimeout,setInterval,clearInterval,requestAnimationFrame:window.requestAnimationFrame,cancelAnimationFrame:window.cancelAnimationFrame,alert(){},confirm(){return true},prompt(){return null},fetch:async()=>({ok:false}),atob:global.atob,btoa:global.btoa};context.globalThis=context;
for(let i=0;i<3;i++)vm.runInNewContext(fs.readFileSync(`/mnt/data/v267merge/script${i}.js`,'utf8'),context,{filename:`script${i}.js`,timeout:20000});
const api=window.__cartoAudit267;if(!api)throw Error('v26.7 audit API missing');
const sys={name:'Test System',stars:[],worlds:[],position:{x:0,y:0,z:0},sectorPosition:{x:0,y:0,z:0},config:{seed:'AUDIT'},summary:{bodies:0},soi:{elements:[]}};
const sub={name:'Test Subsector',systems:[sys],position:{x:0,y:0,z:0},radius:10,config:{seed:'AUDIT'},summary:{stars:1,bodies:0}};
const root={name:'Audit Sector',config:{era:'30k',seed:'AUDIT',generationScale:'sector',segmentum:'Segmentum Solar'},subsectors:[sub],rogueSystems:[],features:[],engagements:[],links:[],summary:{subsectors:1,systems:1},span:50,volume:125000};
const launch=api.launcherHTML(root);
const launchResult={startingFleet:launch.includes('Starting Fleet'),craftworld:launch.includes('Craftworld World-Ship'),normal:launch.includes('Normal Expeditionary Fleet'),correctPosition:launch.indexOf('Starting Fleet')>launch.indexOf('Player faction')&&launch.indexOf('Starting Fleet')<launch.indexOf('Starting system')};
if(!Object.values(launchResult).every(Boolean))throw Error('launcher audit failed '+JSON.stringify(launchResult));
// Exercise enable/disable logic in both supported eras.
for(const era of ['30k','40k']){root.config.era=era;document.getElementById('campaignStartFaction').value='craftworld';document.getElementById('campaignCraftworldFleet266').disabled=true;api.syncStartingFleet(root);if(document.getElementById('campaignCraftworldFleet266').disabled)throw Error(`Craftworld button stayed disabled in ${era}`)}
root.config.era='30k';document.getElementById('campaignStartFaction').value='human';api.syncStartingFleet(root);if(!document.getElementById('campaignCraftworldFleet266').disabled)throw Error('Craftworld button enabled for non-Craftworld faction');

// Exercise Craftworld selector state and hand-off to the v26.4 creation flag.
document.getElementById('campaignStartFaction').value='craftworld';document.getElementById('campaignCraftworldFleet266').disabled=false;document.getElementById('campaignStartingFleetMode266').value='normal';
api.chooseStartingFleet(root,'craftworld');
if(document.getElementById('campaignStartingFleetMode266').value!=='craftworld')throw Error('Craftworld selector did not set visible mode');
if(document.getElementById('campaignCraftworldStart264').value!=='on')throw Error('Craftworld selector did not set legacy launch state');
api.prepareStart(root);
if(root._campaignCraftworldStart264!==true)throw Error('Craftworld start state did not reach campaignPrepareStart264');

const factionKeys=['legion','mechanicum','ork','craftworld','necron','rangdan','militia','solar','knights','talons','darkcompliance','kroot','rakgol','xenos','human'];
const construction=[];
for(const key of factionKeys){
 const fac={id:`F-${key}`,key,name:key,color:'#aaa',ai:false,settlements:[],fleets:[],taskForces:[],treasury:{supply:500,materiel:500,influence:500},command:20,maxCommand:20,research:500,tech:{tier:5}};
 const st={id:`S-${key}`,factionId:fac.id,systemId:'SUB1-SYS1',locationId:'world:W1',locationName:'Audit Settlement',locationKind:'World',status:'Active',foundedTurn:0,colony:{size:6,type:'Settlement',displayType:'Settlement',infrastructure:[],infrastructureLevels253:{},supportUpgrades:[],events:[],productivity:7,order:7,complacency:7,piety:7}};fac.settlements=[st];
 root.campaign={playerFactionId:fac.id,factions:[fac],systems:{'SUB1-SYS1':{ownerFactionId:fac.id,presenceFactionIds:[fac.id],defence:0}},turn:0,seed:'AUDIT',selectedSystemId:'SUB1-SYS1',log:[],battles:[],relations:{},events:[],notices:[],mapLayers:{}};window.currentSector=root;
 const a=api.audit(root,fac,st),uniqueOptionCount=(a.plannerHTML.match(/★ FACTION UNIQUE —/g)||[]).length,firstButton=a.paletteHTML.match(/<button class="campaign-building-choice[\s\S]*?<\/button>/)?.[0]||'';
 const row={key,infraDefs:a.uniqueInfrastructureCount,uniqueOptions:uniqueOptionCount,effects:a.uniqueInfrastructureEffectsVisible,districtVisible:a.uniqueDistrictVisible,districtFirst:firstButton.includes(`data-chain="${a.uniqueDistrictKey}"`)};
 if(row.infraDefs<2||row.uniqueOptions<row.infraDefs||!row.effects||!row.districtVisible||!row.districtFirst)throw Error(`${key} render failed ${JSON.stringify(row)}`);
 // Exercise one actual unique infrastructure upgrade.
 const defs=a.plannerHTML.match(/<option value="([^"]+)"[^>]*>★ FACTION UNIQUE —/g)||[];
 const nameMatch=defs[0]?.match(/value="([^"]+)"/);if(!nameMatch)throw Error(`${key} unique infrastructure option not actionable`);
 const name=nameMatch[1].replace(/&amp;/g,'&').replace(/&#39;/g,"'");
 if(!api.upgradeInfrastructure(root,fac,st,name,true))throw Error(`${key} unique infrastructure upgrade failed for ${name}`);
 if(!(st.colony.infrastructureLevels253?.[name]>=1))throw Error(`${key} unique infrastructure did not persist level`);
 // Exercise the faction district through the actual purchase path.
 const chain=a.uniqueDistrictKey;api.ensureFactionChain(fac);
 let purchaseReturned=false;try{purchaseReturned=api.purchaseDevelopment(root,fac.id,st.id,0,chain,1,null)}catch(e){/* synthetic dashboard may lack unrelated campaign fields after mutation */}
 if(st.colony.developmentWeb?.slots?.[0]?.chain!==chain)throw Error(`${key} faction district did not persist into slot`);
 construction.push(row);
}

// Direct Craftworld world-ship lifecycle test: five real colony realms and proxy enumeration.
const cf={id:'F-CW',key:'craftworld',name:'Audit Craftworld',color:'#99c',ai:false,settlements:[],fleets:[],taskForces:[],treasury:{supply:500,materiel:500,influence:500},command:20,maxCommand:20,research:500,tech:{tier:5},presence:['SUB1-SYS1'],territory:['SUB1-SYS1']};
root.campaign={playerFactionId:cf.id,factions:[cf],systems:{'SUB1-SYS1':{ownerFactionId:cf.id,presenceFactionIds:[cf.id],defence:0}},turn:0,seed:'AUDIT-CW',selectedSystemId:'SUB1-SYS1',log:[],battles:[],relations:{},events:[],notices:[],mapLayers:{}};window.currentSector=root;
const fleet=api.createCraftworld(root,cf,'SUB1-SYS1','Craftworld Audit');
if(cf.fleets.length!==1||fleet!==cf.fleets[0])throw Error('Craftworld did not replace fleet list with one world-ship');
if(!fleet.craftworld264||fleet.craftworldColonies264?.length!==5)throw Error('Craftworld does not contain five settlement realms');
if(api.fleetCapacity(fleet)!==250000)throw Error(`Craftworld lift incorrect: ${api.fleetCapacity(fleet)}`);
if(api.fleetNaval(fleet)<18)throw Error('Craftworld void rating below world-ship floor');
if(!(api.fleetSpeed(root,fleet)>0))throw Error('Craftworld strategic speed invalid');
if(!fleet.craftworldColonies264.every(c=>c.size>=6&&c.size<=10))throw Error('Craftworld realm size outside 6-10');
const proxies=api.allSettlements(root).filter(x=>x.s?.craftworld264||x.craftworld264);
if(proxies.length!==5)throw Error(`Craftworld proxy enumeration expected 5, got ${proxies.length}`);
const cwPlanner=api.infrastructureHTML(proxies[0].s,true),cwPalette=api.districtHTML(root,cf,proxies[0].s,false);
if((cwPlanner.match(/★ FACTION UNIQUE —/g)||[]).length<2)throw Error('Craftworld unique infrastructure absent from realm planner');
if(!cwPalette.includes('★ Aeldari Infinity Enclave')||!cwPalette.includes('FACTION UNIQUE'))throw Error('Craftworld unique district absent from realm district viewer');
const cwProxy=proxies[0].s,cwUnique='Wraithbone Utility Matrix',cwBefore=cwProxy.colony.infrastructureLevels253?.[cwUnique]||0;if(!api.upgradeInfrastructure(root,cf,cwProxy,cwUnique,true))throw Error('Craftworld unique infrastructure upgrade failed');if((cwProxy.colony.infrastructureLevels253?.[cwUnique]||0)!==cwBefore+1)throw Error('Craftworld unique infrastructure level did not persist');
const rc=api.recruitmentCapacity(root,cf);if(!(rc.craftworldPopulation264>0))throw Error('Craftworld settlement population did not contribute to recruitment capacity');

console.log(JSON.stringify({ok:true,revision:api.version,build:api.build,launcher:launchResult,craftworldSelector:{visibleMode:'craftworld',prepareFlag:true},construction,craftworld:{fleets:cf.fleets.length,realms:fleet.craftworldColonies264.length,sizes:fleet.craftworldColonies264.map(x=>x.size),proxies:proxies.length,uniqueInfrastructureOptions:(cwPlanner.match(/★ FACTION UNIQUE —/g)||[]).length,uniqueDistrict:cwPalette.includes('★ Aeldari Infinity Enclave'),capacity:api.fleetCapacity(fleet),naval:api.fleetNaval(fleet),speed:api.fleetSpeed(root,fleet),recruitmentPopulation:rc.craftworldPopulation264}},null,2));

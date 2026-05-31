<script>
const cursor=document.getElementById('cursor');
const ring=document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);}
animRing();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='16px';cursor.style.height='16px';ring.style.width='50px';ring.style.height='50px';});
  el.addEventListener('mouseleave',()=>{cursor.style.width='10px';cursor.style.height='10px';ring.style.width='36px';ring.style.height='36px';});
});

window.addEventListener('scroll',()=>{
  const pct=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
  document.getElementById('progressBar').style.width=pct+'%';
});

const phrases=['fast web apps.','clean interfaces.','real products.','things people love.','with HTML & CSS.'];
let pi=0,ci=0,del=false;
const tel=document.getElementById('typingEl');
function type(){
  const cur=phrases[pi];
  tel.textContent=del?cur.substring(0,ci-1):cur.substring(0,ci+1);
  del?ci--:ci++;
  let spd=del?45:85;
  if(!del&&ci===cur.length){spd=1800;del=true;}
  else if(del&&ci===0){del=false;pi=(pi+1)%phrases.length;spd=350;}
  setTimeout(type,spd);
}
setTimeout(type,1400);

const pc=document.getElementById('particles');
for(let i=0;i<18;i++){
  const p=document.createElement('div');
  p.className='p';
  const sz=Math.random()*4+2;
  p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;bottom:${Math.random()*40}%;--dur:${Math.random()*4+4}s;--delay:${Math.random()*5}s;`;
  pc.appendChild(p);
}

const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*100);obs.unobserve(e.target);}
  });
},{threshold:.1});
document.querySelectorAll('.reveal,.reveal-left').forEach(el=>obs.observe(el));
</script>
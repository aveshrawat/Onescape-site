(()=>{'use strict';
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header=document.querySelector('.header');function onscroll(){if(header)header.classList.toggle('scrolled',window.scrollY>10)}window.addEventListener('scroll',onscroll,{passive:true});onscroll();
const toggle=document.querySelector('.menutoggle'),menu=document.querySelector('.navlinks');if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
const reveal=document.querySelectorAll('.reveal');if(reduced||!('IntersectionObserver'in window)){reveal.forEach(x=>x.classList.add('on'));}else{const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.07,rootMargin:'0px 0px 45px 0px'});reveal.forEach(x=>io.observe(x));}
const slides=[...document.querySelectorAll('.hero-slide')],progress=document.getElementById('heroProgress');let index=0,timer;function show(n){if(!slides.length)return;index=(n+slides.length)%slides.length;slides.forEach((el,i)=>el.classList.toggle('active',i===index));if(progress){progress.style.width='0%';requestAnimationFrame(()=>{progress.style.transition=reduced?'none':'width 6s linear';progress.style.width='100%';});}}
if(slides.length){show(0);if(!reduced)timer=setInterval(()=>show(index+1),6100);['prevHero','nextHero'].forEach((id,i)=>{const b=document.getElementById(id);if(b)b.addEventListener('click',()=>{show(index+(i===0?-1:1));if(timer){clearInterval(timer);timer=setInterval(()=>show(index+1),6100)}})});document.addEventListener('visibilitychange',()=>{if(document.hidden){clearInterval(timer)}else if(!reduced){clearInterval(timer);timer=setInterval(()=>show(index+1),6100)}});}
const form=document.getElementById('enquiry-form');
if(form){
  const status=document.getElementById('form-status');
  const submit=form.querySelector('button[type="submit"]');
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    if(!form.reportValidity())return;
    if(submit){submit.disabled=true; submit.textContent='Sending…';}
    if(status){status.textContent='Sending your enquiry…'; status.className='form-status';}
    try{
      const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
      if(!response.ok) throw new Error('Form service returned '+response.status);
      if(status){status.textContent='Your enquiry has been sent. We will review it and get back to you.';status.className='form-status success';}
      form.reset();
    }catch(error){
      if(status){status.textContent='We could not confirm delivery. Please email hello@onescape.in directly.';status.className='form-status error';}
    }finally{
      if(submit){submit.disabled=false; submit.textContent='Send Enquiry ↗';}
    }
  });
}
const y=document.getElementById('year');if(y)y.textContent=String(new Date().getFullYear());
})();


const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const btn=document.querySelector('.mobile-toggle'), nav=document.querySelector('.nav-links');
btn?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('[data-filter]').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active')); b.classList.add('active');
    const f=b.dataset.filter;
    document.querySelectorAll('.menu-item').forEach(card=>{
      card.style.display=(f==='all'||card.dataset.category===f)?'block':'none';
    });
  })
});

document.querySelectorAll('form[data-demo-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const st=form.querySelector('.form-status');
    if(st) st.textContent='포트폴리오 데모입니다. 실제 사이트에서는 이메일/CRM/가맹상담 시스템과 연동할 수 있습니다.';
  })
});

  const setLang = (lang) => {
    document.body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-switch button').forEach(b=>{
      b.classList.toggle('active', b.getAttribute('data-set-lang')===lang);
    });
    document.title = lang === 'fi'
      ? 'Jeongdo Kim — Tietokirjailija · Kääntäjä · Tulkki · Kielten opettaja'
      : 'Jeongdo Kim — Author · Translator · Interpreter · Language Teacher';
  };
  document.querySelectorAll('[data-set-lang]').forEach(btn=>{
    btn.addEventListener('click', ()=> setLang(btn.getAttribute('data-set-lang')));
  });

  // topbar name reveal after hero
  const topbarMark = document.getElementById('topbarMark');
  const hero = document.querySelector('.hero');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      topbarMark.classList.toggle('show', !e.isIntersecting);
    });
  }, {threshold:0.15});
  io.observe(hero);

  // show more publications
  const btn = document.getElementById('showMoreBtn');
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('#pubList li').forEach(li=>li.classList.add('shown'));
    btn.style.display='none';
  });

  // nav tab switching
  const navlinks = document.querySelectorAll('.navlink');
  const tabSections = document.querySelectorAll('.tab-section');
  const showTab = (target) => {
    tabSections.forEach(sec => sec.classList.toggle('active', sec.id === target));
    navlinks.forEach(nl => nl.classList.toggle('active', nl.getAttribute('data-target') === target));
  };
  navlinks.forEach(nl=>{
    nl.addEventListener('click', ()=>{
      showTab(nl.getAttribute('data-target'));
      document.querySelector('.mainnav').scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // deep-linking via #hash on load
  const initial = window.location.hash.replace('#','');
  if (initial && document.getElementById(initial)) {
    showTab(initial);
  }

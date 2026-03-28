// ── NAV SOLID ON SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 10);
}, { passive: true });

// ── MOBILE BURGER ──
const burger = document.getElementById('burger');
const menu   = document.getElementById('nav-menu');
burger.addEventListener('click', () => {
  menu.classList.toggle('open');
  const [a, b] = burger.querySelectorAll('span');
  if (menu.classList.contains('open')) {
    a.style.transform = 'rotate(45deg) translate(4px, 4px)';
    b.style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    a.style.transform = b.style.transform = '';
  }
});
menu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.querySelectorAll('span').forEach(s => s.style.transform = '');
  });
});

// ── FADE-UP ON SCROLL ──
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// ── SET MIN DATE ──
const dInput = document.getElementById('f-date');
if (dInput) {
  const t = new Date();
  t.setDate(t.getDate() + 1);
  dInput.min = t.toISOString().split('T')[0];
}

// ── PRE-SELECT SERVICE FROM "AGENDAR" BUTTONS ──
document.querySelectorAll('[data-service]').forEach(el => {
  el.addEventListener('click', (e) => {
    const svc  = el.getAttribute('data-service');
    const sel  = document.getElementById('f-service');
    if (!sel) return;
    // Try to find matching option
    const opts = Array.from(sel.options);
    const match = opts.find(o => o.value === svc || o.text.startsWith(svc.split(' (')[0]));
    if (match) sel.value = match.value;
  });
});

// ── WHATSAPP BOOKING ──
function enviarWA() {
  const svc     = document.getElementById('f-service').value;
  const dateVal = document.getElementById('f-date').value;
  const time    = document.getElementById('f-time').value;
  const vehicle = document.getElementById('f-vehicle').value;
  const obs     = document.getElementById('f-obs').value.trim();

  if (!svc || !dateVal || !time) {
    // Highlight missing fields
    ['f-service','f-date','f-time'].forEach(id => {
      const el = document.getElementById(id);
      if (!el.value) {
        el.style.borderColor = '#ff4444';
        el.addEventListener('change', () => el.style.borderColor = '', { once: true });
      }
    });
    return;
  }

  const [y, m, d] = dateVal.split('-');
  const dateFmt = `${d}/${m}/${y}`;

  let msg = `Olá! Quero agendar *${svc}*`;
  if (vehicle) msg += ` para meu *${vehicle}*`;
  msg += ` para o dia *${dateFmt}* às *${time}*.`;
  if (obs) msg += `\n\n_Obs: ${obs}_`;

  window.open(`https://wa.me/5547997478717?text=${encodeURIComponent(msg)}`, '_blank');
}

// ── GALLERY LIGHTBOX ──
document.querySelectorAll('.g').forEach(g => {
  g.addEventListener('click', () => {
    const url = g.style.backgroundImage.replace(/url\(["']?|["']?\)/g, '');
    if (!url || url === 'none') return;
    const ov = Object.assign(document.createElement('div'), {
      style: `position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.93);display:flex;align-items:center;justify-content:center;cursor:zoom-out;`,
    });
    const img = Object.assign(document.createElement('img'), {
      src: url,
      style: 'max-width:92vw;max-height:90vh;border-radius:8px;object-fit:contain;',
    });
    ov.appendChild(img);
    ov.addEventListener('click', () => ov.remove());
    document.body.appendChild(ov);
    requestAnimationFrame(() => { ov.style.opacity = '0'; ov.style.transition = 'opacity .18s'; requestAnimationFrame(() => ov.style.opacity = '1'); });
  });
});

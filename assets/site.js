const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.textContent = navLinks.classList.contains('open') ? 'CERRAR' : 'MENU';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.textContent = 'MENU';
    });
  });
}

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}

/* ---------- Lightbox de galerias ---------- */
(() => {
  const shots = Array.from(document.querySelectorAll('.shot'));
  if (!shots.length) return;

  const box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Vista ampliada de la obra');
  box.innerHTML =
    '<button class="lb-btn lb-close" aria-label="Cerrar">X</button>' +
    '<button class="lb-btn lb-prev" aria-label="Anterior">&#8592;</button>' +
    '<button class="lb-btn lb-next" aria-label="Siguiente">&#8594;</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>';
  document.body.appendChild(box);

  const lbImg = box.querySelector('img');
  const lbCap = box.querySelector('figcaption');
  const closeBtn = box.querySelector('.lb-close');
  let index = -1;

  const show = (i) => {
    index = (i + shots.length) % shots.length;
    const shot = shots[index];
    const img = shot.querySelector('img');
    const cap = shot.closest('figure') ? shot.closest('figure').querySelector('figcaption') : null;
    lbImg.src = img.getAttribute('src');
    lbImg.alt = img.getAttribute('alt') || '';
    lbCap.innerHTML = cap ? cap.innerHTML : '';
  };

  const open = (i) => {
    show(i);
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const close = () => {
    box.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.removeAttribute('src');
    if (index > -1) shots[index].focus();
  };

  shots.forEach((shot, i) => {
    shot.addEventListener('click', (e) => {
      e.preventDefault();
      open(i);
    });
  });

  closeBtn.addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', () => show(index - 1));
  box.querySelector('.lb-next').addEventListener('click', () => show(index + 1));
  box.addEventListener('click', (e) => { if (e.target === box) close(); });

  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'ArrowRight') show(index + 1);
  });
})();

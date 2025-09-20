// enhancements.js — typed headline, magnetic buttons, counter, ripple
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Typed headline ---------- */
  const typedEl = document.getElementById('typed-text');
  const headline = document.getElementById('hero-headline');

  if (typedEl && headline) {
    const phrases = [
      "AI Agent Phone Calls",
      "personalised phone support",
      "a human touch at scale"
    ];

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    async function typeWord(el, word, speed=50) {
      for (let i=0;i<=word.length;i++){
        el.textContent = word.slice(0,i);
        await sleep(speed);
      }
    }
    async function deleteWord(el, speed=30) {
      let cur = el.textContent;
      for (let i=cur.length;i>=0;i--){
        el.textContent = cur.slice(0,i);
        await sleep(speed);
      }
    }

    (async function loopType() {
      // reveal headline container smoothly
      headline.classList.add('visible');

      let idx = 0;
      while(true){
        const word = phrases[idx % phrases.length];
        await typeWord(typedEl, word, 45);
        await sleep(1300);
        await deleteWord(typedEl, 28);
        await sleep(300);
        idx++;
      }
    })();
  }

  /* ---------- Magnetic CTA ---------- */
  function initMagnetic(selector, strength = 10) {
    const items = document.querySelectorAll(selector);
    items.forEach(item => {
      // disable on touch devices
      if ('ontouchstart' in window) return;
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        item.style.transform = `translate(${relX * strength}px, ${relY * strength}px) scale(1.02)`;
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = '';
      });
    });
  }
  initMagnetic('.magnetic', 10);

  /* ---------- CTA ripple ---------- */
  document.querySelectorAll('.ripple-button').forEach(btn => {
    btn.addEventListener('click', function(e){
      const rect = btn.getBoundingClientRect();
      const span = document.createElement('span');
      span.className = 'ripple-effect';
      span.style.left = (e.clientX - rect.left) + 'px';
      span.style.top = (e.clientY - rect.top) + 'px';
      btn.appendChild(span);
      setTimeout(()=> span.remove(), 650);
    });
  });

  /* ---------- Animated recovered counter ---------- */
  const counter = document.getElementById('recovered-counter');
  if (counter) {
    const target = parseInt(counter.dataset.target || '4200', 10);
    const duration = 1800;
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOut
      const value = Math.floor(ease * target);
      counter.textContent = value.toLocaleString() + ' carts recovered today';
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

});
/* ---------- Testimonial Tilt ---------- */
/* ---------- Testimonial Tilt (whole card) ---------- */
document.querySelectorAll('.testimonial-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12; // tilt range
    const rotateX = ((y / rect.height) - 0.5) * -12;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});



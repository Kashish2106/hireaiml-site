// enhancements.js
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Typewriter effect ---------- */
  const typedWrapper = document.getElementById('typed-text-wrapper');
  const headline = document.getElementById('hero-headline');
  if (typedWrapper && headline) {
    const phrases = [
      "AI Agent Phone Calls",
      "personalised phone support",
      "a human touch at scale"
    ];

    const typingSpeed = 100;
    const pauseDelay = 1500;
    const deletingSpeed = 50;
    let phraseIndex = 0;
    let charIndex = 0;
    let typingForward = true;

    const span = document.createElement('span');
    typedWrapper.appendChild(span);

    headline.classList.add('visible');

    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (typingForward) {
        charIndex++;
        span.textContent = currentPhrase.slice(0, charIndex);
        if (charIndex === currentPhrase.length) {
          typingForward = false;
          setTimeout(type, pauseDelay);
        } else {
          setTimeout(type, typingSpeed);
        }
      } else {
        charIndex--;
        span.textContent = currentPhrase.slice(0, charIndex);
        if (charIndex === 0) {
          typingForward = true;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(type, deletingSpeed);
        }
      }
    }

    type();
  }

  /* ---------- Magnetic buttons ---------- */
  function initMagnetic(selector, strength = 10) {
    document.querySelectorAll(selector).forEach(item => {
      if ('ontouchstart' in window) return;
      item.addEventListener('mousemove', e => {
        const rect = item.getBoundingClientRect();
        const relX = (e.clientX - rect.left)/rect.width - 0.5;
        const relY = (e.clientY - rect.top)/rect.height - 0.5;
        item.style.transform = `translate(${relX*strength}px, ${relY*strength}px) scale(1.02)`;
      });
      item.addEventListener('mouseleave', () => { item.style.transform = ''; });
    });
  }
  initMagnetic('.magnetic', 10);

  /* ---------- Ripple ---------- */
  document.querySelectorAll('.ripple-button').forEach(btn => {
    btn.addEventListener('click', e => {
      const rect = btn.getBoundingClientRect();
      const span = document.createElement('span');
      span.className = 'ripple-effect';
      span.style.left = (e.clientX - rect.left) + 'px';
      span.style.top = (e.clientY - rect.top) + 'px';
      btn.appendChild(span);
      setTimeout(() => span.remove(), 650);
    });
  });

  /* ---------- Recovered counter ---------- */
  const counter = document.getElementById('recovered-counter');
  if (counter) {
    const target = parseInt(counter.dataset.target || '4200', 10);
    const duration = 1800;
    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start)/duration, 1);
      const ease = 1 - Math.pow(1-progress, 3);
      const value = Math.floor(ease*target);
      counter.textContent = value.toLocaleString() + ' carts recovered today';
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Testimonial card tilt ---------- */
  document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x/rect.width)-0.5)*12;
      const rotateX = ((y/rect.height)-0.5)*-12;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  /* ---------- Feather icons ---------- */
  if (window.feather) feather.replace();
});

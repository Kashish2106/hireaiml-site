// enhancements.js — hero text swap, magnetic buttons, counter, ripple
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Hero headline (centered, static + dynamic) ---------- */
  const typedWrapper = document.getElementById('typed-text-wrapper');
  const headline = document.getElementById('hero-headline');

  if (typedWrapper && headline) {
    const phrases = [
      "AI Agent Phone Calls",
      "personalised phone support",
      "a human touch at scale"
    ];

    // Create span for each phrase
    phrases.forEach((p, i) => {
      const span = document.createElement('span');
      span.textContent = p;
      if (i === 0) span.classList.add('active');
      typedWrapper.appendChild(span);
    });

    // Measure longest phrase for consistent width
    const spans = typedWrapper.querySelectorAll('span');
    let maxWidth = 0;
    spans.forEach(span => {
      span.style.display = 'inline-block';
      span.style.position = 'absolute';
      span.style.visibility = 'hidden';
    });
    spans.forEach(span => {
      const width = span.offsetWidth;
      if (width > maxWidth) maxWidth = width;
    });
    spans.forEach((span, i) => {
      span.style.display = '';
      span.style.position = '';
      span.style.visibility = '';
      if (i !== 0) span.classList.remove('active');
    });

    // Center wrapper under static text
    typedWrapper.style.width = `${maxWidth}px`;
    typedWrapper.style.display = 'inline-block';
    typedWrapper.style.textAlign = 'center';

    // Reveal headline
    headline.classList.add('visible');

    // Cycle phrases
    let idx = 0;
    setInterval(() => {
      spans[idx].classList.remove('active');
      idx = (idx + 1) % spans.length;
      spans[idx].classList.add('active');
    }, 2500);
  }

  /* ---------- Magnetic CTA ---------- */
  function initMagnetic(selector, strength = 10) {
    const items = document.querySelectorAll(selector);
    items.forEach(item => {
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
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(ease * target);
      counter.textContent = value.toLocaleString() + ' carts recovered today';
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

});

/* ---------- Testimonial Tilt (whole card) ---------- */
document.querySelectorAll('.testimonial-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

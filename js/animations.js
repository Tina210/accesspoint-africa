// Animation on scroll for AccessPoint Africa
function animateOnScroll() {
  const animatedEls = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .zoom-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animatedEls.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', animateOnScroll);

// Animate numbers (for stats)
function animateNumbers() {
  document.querySelectorAll('.stat-number').forEach(stat => {
    const target = parseInt(stat.dataset.target || stat.textContent.replace(/\D/g, ''));
    if (!target) return;
    let current = 0;
    const increment = Math.ceil(target / 100);
    const isMoney = stat.textContent.includes('$');
    const isPlus = stat.textContent.includes('+');
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = (isMoney ? '$' : '') + current + (isPlus ? '+' : '');
    }, 20);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.stat-number')) animateNumbers();
});

// Smooth scroll to anchors
function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
document.addEventListener('DOMContentLoaded', smoothScroll); 
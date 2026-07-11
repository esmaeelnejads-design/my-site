// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// Sticky nav shadow
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.boxShadow =
    window.scrollY > 30 ? '0 4px 20px rgba(43,91,168,0.12)' : '0 2px 12px rgba(43,91,168,0.08)';
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinksEl = document.querySelector('.nav-links');
if (navToggle && navLinksEl) {
  navToggle.addEventListener('click', () => navLinksEl.classList.toggle('open'));
  navLinksEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinksEl.classList.remove('open')));
}
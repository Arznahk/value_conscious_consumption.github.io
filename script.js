// Intersection Observer setup
const fadeIns = document.querySelectorAll('.fade-in');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, options);

fadeIns.forEach(fadeIn => {
  observer.observe(fadeIn);
});

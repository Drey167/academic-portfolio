const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (motionOk) {
  document.documentElement.classList.add('motion-ready');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

  document.querySelectorAll('.section, .quote').forEach((section) => observer.observe(section));

  document.querySelectorAll('.project-list article').forEach((project, index) => {
    project.style.setProperty('--delay', `${index * 110}ms`);
  });
}


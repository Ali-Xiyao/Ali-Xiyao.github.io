(function () {
  const filter = document.getElementById('tagFilter');
  const rows = Array.from(document.querySelectorAll('.paper-row'));
  const backToTop = document.getElementById('backToTop');
  const sectionNav = document.querySelector('.section-drip-nav');
  const footer = document.querySelector('.mountain-footer');

  if (filter) {
    filter.addEventListener('click', function (event) {
      const button = event.target.closest('.tag-btn');
      if (!button) return;

      filter.querySelectorAll('.tag-btn').forEach(function (item) {
        item.classList.toggle('active', item === button);
      });

      rows.forEach(function (row) {
        const tags = row.dataset.tags.split(',');
        row.style.display = button.dataset.tag === 'all' || tags.includes(button.dataset.tag) ? '' : 'none';
      });
    });
  }

  function updateFloatingControls() {
    backToTop.classList.toggle('visible', window.scrollY > 300);
    if (sectionNav && footer) {
      sectionNav.classList.toggle(
        'is-footer-visible',
        footer.getBoundingClientRect().top < sectionNav.getBoundingClientRect().bottom + 28
      );
    }
  }

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', updateFloatingControls, { passive: true });
  window.addEventListener('resize', updateFloatingControls);
  updateFloatingControls();
})();

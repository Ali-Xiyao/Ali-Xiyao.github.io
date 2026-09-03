(function () {
  const filter = document.getElementById('tagFilter');
  const rows = Array.from(document.querySelectorAll('.paper-row'));

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

  document.querySelectorAll('.contact-placeholder').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });

})();

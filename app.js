(function () {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const savedLang = localStorage.getItem('lang');

  const autoTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  const autoLang = (navigator.language || 'ru').toLowerCase().startsWith('ru') ? 'ru' : 'en';

  root.setAttribute('data-theme', savedTheme || autoTheme);
  root.setAttribute('data-lang', savedLang || autoLang);

  document.querySelectorAll('[data-toggle-theme]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });

  document.querySelectorAll('[data-toggle-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-lang') === 'ru' ? 'en' : 'ru';
      root.setAttribute('data-lang', next);
      localStorage.setItem('lang', next);
    });
  });

  const inputs = document.querySelectorAll('[data-tag-search]');
  inputs.forEach((input) => {
    const scope = document.querySelector(input.dataset.scope || 'body');
    if (!scope) return;

    const cards = [...scope.querySelectorAll('[data-tags]')];
    const tagButtons = [...scope.querySelectorAll('[data-tag]')];

    const filter = () => {
      const q = input.value.trim().toLowerCase();
      const activeTag = scope.querySelector('.tag-btn.active')?.dataset.tag || '';
      cards.forEach((card) => {
        const tags = (card.dataset.tags || '').toLowerCase();
        const text = card.textContent.toLowerCase();
        const matchesQ = !q || tags.includes(q) || text.includes(q);
        const matchesTag = !activeTag || tags.includes(activeTag);
        card.style.display = matchesQ && matchesTag ? '' : 'none';
      });
    };

    input.addEventListener('input', filter);
    tagButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.dataset.tag === 'all') {
          tagButtons.forEach((b) => b.classList.remove('active'));
        } else {
          tagButtons.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
        }
        filter();
      });
    });
  });
})();

/* 作品集交互脚本：项目分类筛选 */
(function () {
  'use strict';

  var filterButtons = document.querySelectorAll('.filter');
  var cards = document.querySelectorAll('#projects-grid .card');
  var emptyTip = document.getElementById('empty-tip');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');

      var filter = btn.dataset.filter;
      var visibleCount = 0;

      cards.forEach(function (card) {
        var match = filter === 'all' || card.dataset.category === filter;
        card.hidden = !match;
        if (match) {
          visibleCount += 1;
        }
      });

      emptyTip.hidden = visibleCount !== 0;
    });
  });

  /* 深浅色主题切换：读取 localStorage，未设置时跟随系统 */
  var THEME_KEY = 'portfolio-theme';
  var toggleButton = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (toggleButton) {
      toggleButton.setAttribute('aria-pressed', theme === 'dark');
    }
  }

  (function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (err) {
      saved = null;
    }
    var prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));
  })();

  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      var current =
        document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (err) {
        /* localStorage 不可用时忽略，仅本次会话生效 */
      }
    });
  }
})();
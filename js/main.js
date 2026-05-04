/* Shared site behavior */
(function () {
  // mark the active nav link based on filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
    else a.classList.remove('active');
  });
})();

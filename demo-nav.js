/**
 * Shared demo navigation — single source of truth.
 * Include via <script src="demo-nav.js"></script> right after <body>.
 */
(function () {
  // Password gate
  if (sessionStorage.getItem('hm-demo-auth') !== 'ok') {
    sessionStorage.setItem('hm-redirect', location.pathname.split('/').pop() || 'hat-carousel-demo.html');
    location.href = 'index.html';
    return;
  }

  var pages = [
    { href: 'hat-carousel-demo.html',  label: 'Farvekarrusel' },
    { href: 'hat-rotation-demo.html',  label: '360\u00b0 Visning' },
    { href: 'hat-images-demo.html',    label: 'Billeder' },
    { href: 'hat-sales-overview.html', label: 'Salgsoversigt' },
    { href: 'supplier-link-compare.html', label: 'Link-verificering' },
    { href: 'logo-design-journey.html', label: 'Logo Design' }
  ];

  var current = location.pathname.split('/').pop();

  var nav = document.createElement('nav');
  nav.id = 'demo-nav';
  nav.setAttribute('style',
    'position:sticky;top:0;z-index:9990;' +
    'background:rgba(250,248,245,0.94);' +
    'backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);' +
    'border-bottom:1px solid rgba(63,30,31,0.08);' +
    'padding:0.5rem 1.2rem;' +
    'display:flex;align-items:center;gap:0.35rem;flex-wrap:wrap;' +
    'font-family:Inter,-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;'
  );

  var linkStyle =
    'font-size:0.6rem;font-weight:600;text-transform:uppercase;' +
    'letter-spacing:0.08em;text-decoration:none;' +
    'padding:0.3rem 0.7rem;border-radius:9999px;white-space:nowrap;' +
    'transition:all 180ms ease;';

  var normalStyle = linkStyle +
    'color:#6b5c5d;border:1px solid rgba(63,30,31,0.12);background:transparent;';

  var activeStyle = linkStyle +
    'color:#fff;border:1px solid #8b6914;' +
    'background:linear-gradient(135deg,#8b6914 0%,#6d5310 100%);';

  pages.forEach(function (p) {
    var a = document.createElement('a');
    a.href = p.href;
    a.textContent = p.label;
    a.setAttribute('style', p.href === current ? activeStyle : normalStyle);
    nav.appendChild(a);
  });

  // Dashboard link pushed right
  var dash = document.createElement('a');
  dash.href = 'https://hattemanden-dashboard.onrender.com';
  dash.target = '_blank';
  dash.textContent = 'Dashboard \u2197';
  dash.setAttribute('style', normalStyle + 'margin-left:auto;');
  nav.appendChild(dash);

  // Insert as first child of body
  document.body.insertBefore(nav, document.body.firstChild);
})();

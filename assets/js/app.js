/* ============================================================
   app.js — Lógica de la aplicación
   ============================================================ */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     Utilidades generales
     --------------------------------------------------------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var Store = {
    get: function (key, fallback) {
      try {
        var raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* modo privado */ }
    }
  };

  function toast(message) {
    var node = $('#toast');
    if (!node) return;
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { node.classList.remove('show'); }, 2400);
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /** Convierte la notación matemática plana del contenido a HTML. */
  function mathHtml(html) {
    return window.MathRender && window.MathRender.render
      ? window.MathRender.render(html)
      : html;
  }

  /** Número simple para etiquetas SVG (sin HTML). */
  function plain(n, decimals) {
    if (typeof n !== 'number' || !isFinite(n)) return '—';
    var d = decimals == null ? 2 : decimals;
    var s = n.toFixed(d).replace(/\.?0+$/, '');
    return s.replace('-', '\u2212');
  }

  function parseNumber(text) {
    var value = parseFloat(String(text).replace(',', '.').replace('\u2212', '-').trim());
    return isNaN(value) ? null : value;
  }

  function parsePair(text) {
    if (!text) return null;
    var clean = String(text).replace(/[()\[\]]/g, ' ').replace(/;/g, ',').trim();
    var parts = clean.split(/[, ]+/).filter(function (p) { return p.length; });
    if (parts.length < 2) return null;
    var x = parseNumber(parts[0]);
    var y = parseNumber(parts[1]);
    if (x === null || y === null) return null;
    return [x, y];
  }

  function parseList(text) {
    return String(text || '')
      .replace(/;/g, ',')
      .split(/[,\s]+/)
      .map(parseNumber)
      .filter(function (v) { return v !== null; });
  }

  function round(n, d) {
    var f = Math.pow(10, d == null ? 4 : d);
    return Math.round(n * f) / f;
  }

  var C = { purple: '#a855f7', cyan: '#d946ef', pink: '#ec4899', green: '#34d399', amber: '#fbbf24', red: '#fb7185' };
  var uidSeed = 0;
  function uid() { uidSeed += 1; return 'p67-' + uidSeed; }

  /* ---------------------------------------------------------
     Tema claro / oscuro
     --------------------------------------------------------- */
  var THEME_KEY = 'p67.theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var moon = $('#iconMoon'), sun = $('#iconSun');
    if (moon && sun) {
      var light = theme === 'light';
      moon.style.display = light ? 'none' : 'block';
      sun.style.display = light ? 'block' : 'none';
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f7f4fd' : '#08050f');
    Store.set(THEME_KEY, theme);
  }

  function initTheme() {
    var saved = Store.get(THEME_KEY, null);
    applyTheme(saved === 'light' ? 'light' : 'dark');
    var btn = $('#themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(next);
      });
    }
  }

  /* ---------------------------------------------------------
     Navegación
     --------------------------------------------------------- */
  var sections = ['inicio', 'teoria', 'vectores', 'complejos', 'trigonometria', 'estadistica', 'ejercicios', 'bancos', 'examen'];
  var rendered = { ejercicios: false, bancos: false, examen: false };

  function showSection(id, options) {
    if (sections.indexOf(id) === -1) id = 'inicio';
    $$('.view').forEach(function (view) { view.classList.toggle('active', view.id === id); });
    $$('.nav-link').forEach(function (link) { link.classList.toggle('active', link.dataset.section === id); });

    var nav = $('#nav');
    if (nav) nav.classList.remove('open');
    var toggle = $('#navToggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');

    if (id === 'ejercicios' && !rendered.ejercicios) { renderEjercicios(); rendered.ejercicios = true; }
    if (id === 'bancos' && !rendered.bancos) { renderBancos(); rendered.bancos = true; }
    if (id === 'examen' && !rendered.examen) { rendered.examen = true; }

    if (!options || options.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    try { history.replaceState(null, '', '#' + id); } catch (e) { /* file:// */ }
    revealScan();
  }

  function initNav() {
    $$('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () { showSection(link.dataset.section); });
    });

    document.addEventListener('click', function (event) {
      var target = event.target.closest('[data-go]');
      if (!target) return;
      event.preventDefault();
      showSection(target.dataset.go);
    });

    var toggle = $('#navToggle');
    var nav = $('#nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav) {
        nav.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });

    var initial = (location.hash || '').replace('#', '');
    showSection(sections.indexOf(initial) !== -1 ? initial : 'inicio', { scroll: false });
  }

  /* ---------------------------------------------------------
     Animaciones de entrada y contadores
     --------------------------------------------------------- */
  var observer = null;

  function revealScan() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach(function (n) { n.classList.add('in'); });
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }
    $$('.reveal').forEach(function (node) {
      if (!node.classList.contains('in') && !node.dataset.observed) {
        node.dataset.observed = '1';
        observer.observe(node);
      }
    });
  }

  function animateCounters() {
    $$('[data-count]').forEach(function (node) {
      var target = parseInt(node.dataset.count, 10) || 0;
      var start = null;
      var duration = 1100;

      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min(1, (ts - start) / duration);
        var eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------------------------------------------------------
     Mascota
     --------------------------------------------------------- */
  var FRASES = [
    '¡Tú puedes! Recuerda: i² = −1.',
    'En el caso ambiguo revisa siempre si hay dos triángulos.',
    'La norma sale de Pitágoras: no la memorices, dedúcela.',
    'Para Moivre: primero módulo y argumento.',
    'Media, mediana y moda cuentan historias distintas.',
    'Un vector tiene módulo, dirección y sentido. ¡Los tres!',
    'Ordena los datos antes de buscar la mediana.'
  ];

  function chirp() {
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!chirp.ctx) chirp.ctx = new Ctx();
      var ctx = chirp.ctx;
      if (ctx.state === 'suspended') ctx.resume();
      var now = ctx.currentTime;
      [0, 0.09, 0.18].forEach(function (offset, index) {
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1500 + index * 320, now + offset);
        osc.frequency.exponentialRampToValueAtTime(2300 + index * 260, now + offset + 0.06);
        gain.gain.setValueAtTime(0.0001, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.06, now + offset + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.1);
        osc.connect(gain).connect(ctx.destination);
        osc.start(now + offset);
        osc.stop(now + offset + 0.11);
      });
    } catch (e) { /* silencio */ }
  }

  function initMascota() {
    var mascota = $('#mascota');
    var bubble = $('#bubble');
    if (!mascota || !bubble) return;
    mascota.addEventListener('click', function () {
      bubble.textContent = FRASES[Math.floor(Math.random() * FRASES.length)];
      bubble.classList.add('show');
      clearTimeout(initMascota._t);
      initMascota._t = setTimeout(function () { bubble.classList.remove('show'); }, 3800);
      chirp();
    });
  }

  /* ---------------------------------------------------------
     Pestañas de teoría
     --------------------------------------------------------- */
  function initTheoryTabs() {
    var tabs = $('#theoryTabs');
    if (!tabs) return;
    tabs.addEventListener('click', function (event) {
      var button = event.target.closest('[data-theory]');
      if (!button) return;
      $$('[data-theory]', tabs).forEach(function (b) {
        b.classList.toggle('active', b === button);
        b.setAttribute('aria-selected', b === button ? 'true' : 'false');
      });
      $$('.theory-panel').forEach(function (panel) {
        panel.hidden = panel.id !== button.dataset.theory;
      });
    });
  }

  /* ---------------------------------------------------------
     SVG: utilidades de dibujo
     --------------------------------------------------------- */
  function svg(w, h, body) {
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">' + body + '</svg>';
  }

  function arrowDefs(id, color) {
    return '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">' +
      '<path d="M 0 0 L 10 5 L 0 10 z" fill="' + color + '"/></marker></defs>';
  }

  function niceStep(span) {
    var raw = span / 4;
    var power = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
    var norm = raw / power;
    var step = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
    return step * power;
  }

  function cartesianPlot(points, series, opts) {
    opts = opts || {};
    var W = 440, H = 342, P = 34;
    var maxAbs = 1;
    points.forEach(function (p) {
      maxAbs = Math.max(maxAbs, Math.abs(p[0]), Math.abs(p[1]));
    });
    var step = niceStep(maxAbs * 2.2);
    var bound = Math.ceil(maxAbs * 1.1 / step) * step;
    var cx = W / 2, cy = H / 2;
    var scale = Math.min((W - 2 * P) / (2 * bound), (H - 2 * P) / (2 * bound));

    var body = '';
    var grid = '';
    for (var value = -bound; value <= bound + 0.0001; value += step) {
      var x = cx + value * scale;
      var y = cy - value * scale;
      grid += '<line class="grid-line" x1="' + x.toFixed(1) + '" y1="' + P + '" x2="' + x.toFixed(1) + '" y2="' + (H - P) + '"/>';
      grid += '<line class="grid-line" x1="' + P + '" y1="' + y.toFixed(1) + '" x2="' + (W - P) + '" y2="' + y.toFixed(1) + '"/>';
      if (Math.abs(value) > 1e-9) {
        grid += '<text class="tick-label" x="' + (x + 3).toFixed(1) + '" y="' + (cy + 12).toFixed(1) + '">' + plain(value, 1) + '</text>';
        grid += '<text class="tick-label" x="' + (cx - 5).toFixed(1) + '" y="' + (y - 4).toFixed(1) + '" text-anchor="end">' + plain(value, 1) + '</text>';
      }
    }

    var axes = '';
    axes += '<line class="axis" x1="' + P + '" y1="' + cy + '" x2="' + (W - P) + '" y2="' + cy + '" marker-end="url(#' + opts.arrowX + ')"/>';
    axes += '<line class="axis" x1="' + cx + '" y1="' + (H - P) + '" x2="' + cx + '" y2="' + P + '" marker-end="url(#' + opts.arrowY + ')"/>';
    axes += '<text class="axis-label" x="' + (W - P) + '" y="' + (cy + 16) + '" text-anchor="end">' + (opts.xLabel || 'x') + '</text>';
    axes += '<text class="axis-label" x="' + (cx + 8) + '" y="' + (P + 4) + '">' + (opts.yLabel || 'y') + '</text>';

    var draw = '';
    series.forEach(function (item) {
      var id = uid();
      var x2 = cx + item.to[0] * scale;
      var y2 = cy - item.to[1] * scale;
      draw += arrowDefs(id, item.color);
      draw += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x2.toFixed(2) + '" y2="' + y2.toFixed(2) +
        '" stroke="' + item.color + '" stroke-width="' + (item.width || 2.6) + '" stroke-linecap="round"' +
        (item.dashed ? ' stroke-dasharray="6 5"' : '') + ' marker-end="url(#' + id + ')"/>';
      if (item.label) {
        var lx = x2 + (x2 >= cx ? 10 : -10);
        var ly = y2 + (y2 <= cy ? -8 : 16);
        draw += '<text x="' + lx.toFixed(1) + '" y="' + ly.toFixed(1) + '" fill="' + item.color +
          '" font-size="12" font-weight="700" font-family="Cambria Math, Georgia, serif" text-anchor="' +
          (x2 >= cx ? 'start' : 'end') + '">' + item.label + '</text>';
      }
    });

    body = arrowDefs(opts.arrowX, '#6b7896') + arrowDefs(opts.arrowY, '#6b7896') + grid + axes + draw;
    return svg(W, H, body);
  }

  /* ---------------------------------------------------------
     VECTORES
     --------------------------------------------------------- */
  function round2(n) {
    return Math.round(n * 100) / 100;
  }

  /** Norma con forma exacta cuando el radicando es entero: "√58 ≈ 7.6158". */
  function normText(x, y) {
    var squared = x * x + y * y;
    var value = Math.sqrt(squared);
    var rounded = Math.round(squared);
    if (squared > 0 && Math.abs(squared - rounded) < 1e-9) {
      var root = Math.sqrt(rounded);
      var exact = Number.isInteger(root) ? String(root) : '\u221A' + rounded;
      return exact + ' \u2248 ' + Fmt.fmt(value);
    }
    return Fmt.fmt(value);
  }

  function renderVectors(v1, v2, k) {
    var sum = [v1[0] + v2[0], v1[1] + v2[1]];
    var diff = [v1[0] - v2[0], v1[1] - v2[1]];
    var scaled = [k * v1[0], k * v1[1]];
    var n1 = Math.hypot(v1[0], v1[1]);
    var n2 = Math.hypot(v2[0], v2[1]);
    var dot = v1[0] * v2[0] + v1[1] * v2[1];
    var angle = null;
    if (n1 > 1e-12 && n2 > 1e-12) {
      angle = Math.acos(Math.max(-1, Math.min(1, dot / (n1 * n2)))) * 180 / Math.PI;
    }
    var projScalar = n2 > 1e-12 ? dot / n2 : 0;
    var projVec = n2 > 1e-12 ? [projScalar * v2[0] / n2, projScalar * v2[1] / n2] : [0, 0];

    var items = [
      ['a + b', Fmt.point(sum)],
      ['a − b', Fmt.point(diff)],
      ['k · a', Fmt.point(scaled)],
      ['‖a‖', normText(v1[0], v1[1])],
      ['‖b‖', normText(v2[0], v2[1])],
      ['a · b', Fmt.fmtExacto(dot)],
      ['Ángulo', angle === null ? 'no definido' : Fmt.fmt(round2(angle)) + '\u00B0'],
      ['Proyección de a sobre b', Fmt.point(projVec)],
      ['¿Ortogonales?', Math.abs(dot) < 1e-9 ? 'Sí (a · b = 0)' : 'No'],
      ['¿Paralelos?', Math.abs(v1[0] * v2[1] - v1[1] * v2[0]) < 1e-9 ? 'Sí' : 'No']
    ];
    if (k !== 0) items.splice(6, 0, ['a / k', Fmt.point([v1[0] / k, v1[1] / k])]);

    var html = items.map(function (item) {
      return '<div class="result-item"><span class="result-label">' + item[0] + '</span>' +
        '<span class="result-value">' + item[1] + '</span></div>';
    }).join('');
    $('#resultadoVectores').innerHTML = html;

    $('#plotVectores').innerHTML = cartesianPlot([v1, v2, sum], [
      { to: v1, color: C.purple, label: 'a', width: 2.8 },
      { to: v2, color: C.cyan, label: 'b', width: 2.8 },
      { to: sum, color: C.pink, label: 'a+b', width: 2.2, dashed: true }
    ], { arrowX: uid(), arrowY: uid(), xLabel: 'x', yLabel: 'y' });

    return { v1: v1, v2: v2 };
  }

  function initVectors() {
    var form = $('#calcVec');
    if (!form) return;
    function run() {
      var v1 = parsePair($('#v1').value);
      var v2 = parsePair($('#v2').value);
      var k = parseNumber($('#scalar').value);
      if (!v1 || !v2 || k === null) {
        toast('Escribe los vectores como "x, y" y un escalar válido.');
        return;
      }
      renderVectors(v1, v2, k);
    }
    form.addEventListener('click', run);
    ['v1', 'v2', 'scalar'].forEach(function (id) {
      var input = document.getElementById(id);
      if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') run(); });
    });
    run();
  }

  /* ---------------------------------------------------------
     COMPLEJOS
     --------------------------------------------------------- */
  function argDeg(z) {
    var deg = Math.atan2(z[1], z[0]) * 180 / Math.PI;
    return (deg + 360) % 360;
  }

  function polarText(z) {
    var r = Math.hypot(z[0], z[1]);
    var t = round2(argDeg(z));
    return Fmt.fmt(r) + '(cos ' + Fmt.fmt(t) + '\u00B0 + i sen ' + Fmt.fmt(t) + '\u00B0)';
  }

  function renderComplex(c1, c2, k, n) {
    var sum = [c1[0] + c2[0], c1[1] + c2[1]];
    var diff = [c1[0] - c2[0], c1[1] - c2[1]];
    var prod = [c1[0] * c2[0] - c1[1] * c2[1], c1[0] * c2[1] + c1[1] * c2[0]];
    var mod2 = c2[0] * c2[0] + c2[1] * c2[1];
    var quotient = mod2 > 1e-12
      ? [(c1[0] * c2[0] + c1[1] * c2[1]) / mod2, (c1[1] * c2[0] - c1[0] * c2[1]) / mod2]
      : null;

    var r1 = Math.hypot(c1[0], c1[1]);
    var theta1 = argDeg(c1);
    var power = null;
    if (n !== null && n >= 0 && Math.abs(n - Math.round(n)) < 1e-9) {
      var nn = Math.round(n);
      var rn = Math.pow(r1, nn);
      var thetaN = theta1 * nn;
      power = [rn * Math.cos(thetaN * Math.PI / 180), rn * Math.sin(thetaN * Math.PI / 180)];
    }

    var items = [
      ['z₁ + z₂', Fmt.complex(sum[0], sum[1])],
      ['z₁ − z₂', Fmt.complex(diff[0], diff[1])],
      ['z₁ · z₂', Fmt.complex(prod[0], prod[1])],
      ['z₁ ÷ z₂', quotient ? Fmt.complex(quotient[0], quotient[1]) : 'no definido'],
      ['Conjugado z₁', Fmt.complex(c1[0], -c1[1])],
      ['|z₁|', normText(c1[0], c1[1])],
      ['arg z₁', Fmt.fmt(round2(theta1)) + '\u00B0'],
      ['k · z₁', Fmt.complex(k * c1[0], k * c1[1])],
      ['Forma polar z₁', polarText(c1)]
    ];
    if (power) {
      items.push(['z₁^' + Math.round(n), Fmt.complex(power[0], power[1])]);
    }

    $('#resultadoComplejos').innerHTML = items.map(function (item) {
      return '<div class="result-item"><span class="result-label">' + item[0] + '</span>' +
        '<span class="result-value">' + item[1] + '</span></div>';
    }).join('');

    var pts = [c1, c2, sum, prod];
    var maxAbs = Math.max(1, Math.max.apply(null, pts.map(function (p) {
      return Math.max(Math.abs(p[0]), Math.abs(p[1]));
    })));
    var W = 440, H = 342, P = 34, cx = W / 2, cy = H / 2;
    var bound = maxAbs * 1.12;
    var scale = Math.min((W - 2 * P) / (2 * bound), (H - 2 * P) / (2 * bound));
    var body = '';

    // círculos de módulo
    var circle = '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r1 * scale).toFixed(1) +
      '" fill="none" stroke="rgba(124,92,255,0.25)" stroke-dasharray="4 4"/>';

    var axes = arrowDefs(uid(), '#6b7896') + arrowDefs(uid(), '#6b7896');
    axes = axes.replace(/id="([^"]+)"/g, function (m, id) { return 'id="' + id + '"'; });
    var idX = uid(), idY = uid();
    var axisHtml = arrowDefs(idX, '#6b7896') + arrowDefs(idY, '#6b7896') +
      '<line class="axis" x1="' + P + '" y1="' + cy + '" x2="' + (W - P) + '" y2="' + cy + '" marker-end="url(#' + idX + ')"/>' +
      '<line class="axis" x1="' + cx + '" y1="' + (H - P) + '" x2="' + cx + '" y2="' + P + '" marker-end="url(#' + idY + ')"/>' +
      '<text class="axis-label" x="' + (W - P) + '" y="' + (cy + 16) + '" text-anchor="end">Re</text>' +
      '<text class="axis-label" x="' + (cx + 8) + '" y="' + (P + 4) + '">Im</text>';

    var grid = '';
    var ticks = [-1, -0.5, 0.5, 1];
    ticks.forEach(function (t) {
      var x = cx + t * bound * scale;
      var y = cy - t * bound * scale;
      grid += '<line class="grid-line" x1="' + x.toFixed(1) + '" y1="' + P + '" x2="' + x.toFixed(1) + '" y2="' + (H - P) + '"/>';
      grid += '<line class="grid-line" x1="' + P + '" y1="' + y.toFixed(1) + '" x2="' + (W - P) + '" y2="' + y.toFixed(1) + '"/>';
    });

    function pointCircle(z, color, label) {
      var x = cx + z[0] * scale, y = cy - z[1] * scale;
      var id = uid();
      var out = arrowDefs(id, color);
      out += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x.toFixed(2) + '" y2="' + y.toFixed(2) + '" stroke="' + color + '" stroke-width="2.4" marker-end="url(#' + id + ')"/>';
      out += '<circle cx="' + x.toFixed(2) + '" cy="' + y.toFixed(2) + '" r="4" fill="' + color + '"/>';
      out += '<text x="' + (x + 9).toFixed(1) + '" y="' + (y - 8).toFixed(1) + '" fill="' + color + '" font-size="12" font-weight="700" font-family="Cambria Math, Georgia, serif">' + label + '</text>';
      return out;
    }

    body = axisHtml + circle + grid +
      pointCircle(c1, C.purple, 'z₁') +
      pointCircle(c2, C.cyan, 'z₂') +
      pointCircle(sum, C.pink, 'z₁+z₂') +
      pointCircle(prod, C.green, 'z₁·z₂');

    $('#plotComplejos').innerHTML = svg(W, H, body);
  }

  function initComplex() {
    var button = $('#calcCompl');
    if (!button) return;
    function run() {
      var c1 = parsePair($('#c1').value);
      var c2 = parsePair($('#c2').value);
      var k = parseNumber($('#cscalar').value);
      var n = parseNumber($('#potencia').value);
      if (!c1 || !c2 || k === null) {
        toast('Escribe los complejos como "a, b" (parte real, imaginaria).');
        return;
      }
      renderComplex(c1, c2, k, n);
    }
    button.addEventListener('click', run);
    ['c1', 'c2', 'cscalar', 'potencia'].forEach(function (id) {
      var input = document.getElementById(id);
      if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') run(); });
    });
    run();
  }

  /* ---------------------------------------------------------
     TRIGONOMETRÍA
     --------------------------------------------------------- */
  var TRIGO_MODES = {
    aas: [
      { id: 'tA', label: 'Ángulo A (°)', value: '45' },
      { id: 'tB', label: 'Ángulo B (°)', value: '60' },
      { id: 'tc', label: 'Lado c', value: '10' }
    ],
    sas: [
      { id: 'ta', label: 'Lado a', value: '7' },
      { id: 'tb', label: 'Lado b', value: '5' },
      { id: 'tC', label: 'Ángulo C (°)', value: '60' }
    ],
    sss: [
      { id: 'ta', label: 'Lado a', value: '5' },
      { id: 'tb', label: 'Lado b', value: '7' },
      { id: 'tc', label: 'Lado c', value: '8' }
    ]
  };

  var trigoMode = 'aas';
  var lastTriangle = null;

  function trigoFields(mode) {
    var box = $('#trigoFields');
    if (!box) return;
    box.innerHTML = '<div class="calc-grid">' + TRIGO_MODES[mode].map(function (field) {
      return '<div class="field"><label for="' + field.id + '">' + field.label + '</label>' +
        '<input type="text" id="' + field.id + '" value="' + field.value + '" inputmode="decimal"></div>';
    }).join('') + '</div>';
    TRIGO_MODES[mode].forEach(function (field) {
      var input = document.getElementById(field.id);
      if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') solveTriangle(); });
    });
  }

  function warnTriangle(message) {
    var box = $('#trigoWarn');
    if (!box) return;
    if (message) {
      box.hidden = false;
      box.innerHTML = '<strong>No se puede resolver</strong>' + escapeHtml(message);
    } else {
      box.hidden = true;
      box.textContent = '';
    }
  }

  function solveTriangle() {
    var A = null, B = null, Cc = null, a = null, b = null, c = null;
    var warn = null;

    if (trigoMode === 'aas') {
      A = parseNumber($('#tA').value);
      B = parseNumber($('#tB').value);
      c = parseNumber($('#tc').value);
      if (A === null || B === null || c === null || c <= 0) { warn = 'Introduce dos ángulos y un lado positivo.'; }
      else if (A <= 0 || B <= 0 || A >= 180 || B >= 180) {
        warn = 'Los ángulos deben estar entre 0° y 180°.';
      } else {
        Cc = 180 - A - B;
        if (Cc <= 0) warn = 'Los ángulos suman 180° o más: no forman un triángulo.';
        else {
          a = c * Math.sin(A * Math.PI / 180) / Math.sin(Cc * Math.PI / 180);
          b = c * Math.sin(B * Math.PI / 180) / Math.sin(Cc * Math.PI / 180);
        }
      }
    } else if (trigoMode === 'sas') {
      a = parseNumber($('#ta').value);
      b = parseNumber($('#tb').value);
      Cc = parseNumber($('#tC').value);
      if (a === null || b === null || Cc === null || a <= 0 || b <= 0 || Cc <= 0 || Cc >= 180) {
        warn = 'Necesitas dos lados positivos y un ángulo entre 0° y 180°.';
      } else {
        c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(Cc * Math.PI / 180));
        A = Math.acos(Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)))) * 180 / Math.PI;
        B = 180 - A - Cc;
      }
    } else {
      a = parseNumber($('#ta').value);
      b = parseNumber($('#tb').value);
      c = parseNumber($('#tc').value);
      if (a === null || b === null || c === null || a <= 0 || b <= 0 || c <= 0) {
        warn = 'Los tres lados deben ser positivos.';
      } else if (a + b <= c || a + c <= b || b + c <= a) {
        warn = 'No cumplen la desigualdad triangular.';
      } else {
        A = Math.acos(Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)))) * 180 / Math.PI;
        B = Math.acos(Math.max(-1, Math.min(1, (a * a + c * c - b * b) / (2 * a * c)))) * 180 / Math.PI;
        Cc = 180 - A - B;
      }
    }

    if (warn) {
      warnTriangle(warn);
      $('#trigoResult').innerHTML = '';
      $('#plotTriangulo').innerHTML = '<div class="empty">Sin figura: revisa los datos.</div>';
      lastTriangle = null;
      return;
    }
    warnTriangle(null);

    var s = (a + b + c) / 2;
    var area = Math.sqrt(Math.max(0, s * (s - a) * (s - b) * (s - c)));
    var biggest = Math.max(A, B, Cc);
    var type = biggest > 90.0001 ? 'Obtusángulo' : Math.abs(biggest - 90) < 0.01 ? 'Rectángulo' : 'Acutángulo';

    var rows = [
      ['Lado a', Fmt.fmt(a)],
      ['Lado b', Fmt.fmt(b)],
      ['Lado c', Fmt.fmt(c)],
      ['Ángulo A', Fmt.fmt(A) + '\u00B0'],
      ['Ángulo B', Fmt.fmt(B) + '\u00B0'],
      ['Ángulo C', Fmt.fmt(Cc) + '\u00B0'],
      ['Área', Fmt.fmt(area)],
      ['Perímetro', Fmt.fmt(a + b + c)],
      ['Tipo', type]
    ];
    $('#trigoResult').innerHTML = rows.map(function (row) {
      return '<div class="result-item"><span class="result-label">' + row[0] + '</span>' +
        '<span class="result-value">' + row[1] + '</span></div>';
    }).join('');

    lastTriangle = { a: a, b: b, c: c, A: A, B: B, C: Cc };
    drawTriangle(lastTriangle);
  }

  function drawTriangle(t) {
    var W = 440, H = 342, P = 46;
    var Arad = t.A * Math.PI / 180;
    var v0 = [0, 0];
    var v1 = [t.c, 0];
    var v2 = [t.b * Math.cos(Arad), t.b * Math.sin(Arad)];

    var minX = Math.min(v0[0], v1[0], v2[0]);
    var maxX = Math.max(v0[0], v1[0], v2[0]);
    var minY = Math.min(v0[1], v1[1], v2[1]);
    var maxY = Math.max(v0[1], v1[1], v2[1]);
    var spanX = maxX - minX || 1;
    var spanY = maxY - minY || 1;
    var scale = Math.min((W - 2 * P) / spanX, (H - 2 * P) / spanY);
    var offX = (W - spanX * scale) / 2 - minX * scale;
    var offY = (H - spanY * scale) / 2 - minY * scale;

    function map(p) {
      return [offX + p[0] * scale, H - (offY + p[1] * scale)];
    }

    var A = map(v0), B = map(v1), Cc = map(v2);
    var centroid = [(A[0] + B[0] + Cc[0]) / 3, (A[1] + B[1] + Cc[1]) / 3];

    function outward(mid, dist) {
      var dx = mid[0] - centroid[0], dy = mid[1] - centroid[1];
      var len = Math.hypot(dx, dy) || 1;
      return [mid[0] + dx / len * dist, mid[1] + dy / len * dist];
    }

    function mid(p, q) { return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; }

    var body = '<polygon class="shape" points="' + [A, B, Cc].map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ') + '"/>';

    body += '<circle cx="' + A[0] + '" cy="' + A[1] + '" r="4" fill="#ec4899"/>';
    body += '<circle cx="' + B[0] + '" cy="' + B[1] + '" r="4" fill="#d946ef"/>';
    body += '<circle cx="' + Cc[0] + '" cy="' + Cc[1] + '" r="4" fill="#c084fc"/>';

    var labels = [
      { pos: A, text: 'A', color: '#ec4899', dx: -14, dy: 16 },
      { pos: B, text: 'B', color: '#d946ef', dx: 12, dy: 16 },
      { pos: Cc, text: 'C', color: '#c084fc', dx: 0, dy: -14 }
    ];
    labels.forEach(function (l) {
      body += '<text x="' + (l.pos[0] + l.dx) + '" y="' + (l.pos[1] + l.dy) + '" fill="' + l.color +
        '" font-size="13" font-weight="700" text-anchor="middle">' + l.text + '</text>';
    });

    var sides = [
      { p: mid(A, B), len: t.c, name: 'c' },
      { p: mid(B, Cc), len: t.a, name: 'a' },
      { p: mid(Cc, A), len: t.b, name: 'b' }
    ];
    sides.forEach(function (side) {
      var p = outward(side.p, 18);
      body += '<text x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '" fill="#c5cde2" font-size="11.5" text-anchor="middle" font-family="Cambria Math, Georgia, serif">' +
        side.name + ' = ' + plain(side.len, 2) + '</text>';
    });

    var angles = [
      { p: A, value: t.A, dx: 26, dy: 24 },
      { p: B, value: t.B, dx: -26, dy: 24 },
      { p: Cc, value: t.C, dx: 0, dy: 26 }
    ];
    angles.forEach(function (ang) {
      body += '<text x="' + (ang.p[0] + ang.dx) + '" y="' + (ang.p[1] + ang.dy) + '" fill="#fbbf24" font-size="10.5" text-anchor="middle">' +
        plain(ang.value, 1) + '\u00B0</text>';
    });

    $('#plotTriangulo').innerHTML = svg(W, H, body);
  }

  function initTrigo() {
    var modes = $('#trigoModes');
    if (!modes) return;
    trigoFields('aas');
    modes.addEventListener('click', function (event) {
      var chip = event.target.closest('[data-mode]');
      if (!chip) return;
      trigoMode = chip.dataset.mode;
      $$('[data-mode]', modes).forEach(function (b) { b.classList.toggle('active', b === chip); });
      trigoFields(trigoMode);
      warnTriangle(null);
    });
    var solve = $('#solveTriangle');
    if (solve) solve.addEventListener('click', solveTriangle);
    solveTriangle();
  }

  /* ---------------------------------------------------------
     ESTADÍSTICA
     --------------------------------------------------------- */
  function statsOf(values) {
    var n = values.length;
    var sorted = values.slice().sort(function (x, y) { return x - y; });
    var sum = values.reduce(function (acc, v) { return acc + v; }, 0);
    var mean = sum / n;
    var median = n % 2 === 1 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    var freq = new Map();
    values.forEach(function (v) { freq.set(v, (freq.get(v) || 0) + 1); });
    var maxFreq = Math.max.apply(null, Array.from(freq.values()));
    var modes = Array.from(freq.keys()).filter(function (k) { return freq.get(k) === maxFreq; }).sort(function (x, y) { return x - y; });
    var variance = values.reduce(function (acc, v) { return acc + Math.pow(v - mean, 2); }, 0) / n;
    return {
      n: n, sum: sum, mean: mean, median: median,
      modes: maxFreq > 1 ? modes : [],
      maxFreq: maxFreq,
      min: sorted[0], max: sorted[n - 1],
      range: sorted[n - 1] - sorted[0],
      variance: variance,
      std: Math.sqrt(variance),
      values: values,
      sorted: sorted,
      freq: freq
    };
  }

  function renderStats(values) {
    if (!values.length) {
      $('#resultadoStats').innerHTML = '<div class="empty">Escribe al menos un número.</div>';
      $('#plotStats').innerHTML = '';
      return;
    }
    var s = statsOf(values);
    var moda = s.modes.length ? s.modes.map(function (m) { return Fmt.fmt(m); }).join(', ') : 'sin moda';

    var rows = [
      ['n', String(s.n)],
      ['Suma', Fmt.fmt(s.sum)],
      ['Media', Fmt.fmt(s.mean)],
      ['Mediana', Fmt.fmt(s.median)],
      ['Moda', moda],
      ['Rango', Fmt.fmt(s.range)],
      ['Varianza (poblacional)', Fmt.fmt(s.variance)],
      ['Desviación típica', Fmt.fmt(s.std)],
      ['Mínimo / Máximo', Fmt.fmt(s.min) + ' / ' + Fmt.fmt(s.max)]
    ];
    $('#resultadoStats').innerHTML = rows.map(function (row) {
      return '<div class="result-item' + (row[0] === 'Media' ? ' accent' : '') + '">' +
        '<span class="result-label">' + row[0] + '</span>' +
        '<span class="result-value">' + row[1] + '</span></div>';
    }).join('');

    drawStats(s);
  }

  function drawStats(s) {
    var entries = Array.from(s.freq.entries()).sort(function (x, y) { return x[0] - y[0]; });
    var W = 440, H = 300, P = 34;
    var bottom = H - 44;
    var maxFreq = s.maxFreq || 1;
    var slot = (W - 2 * P) / entries.length;
    var barW = Math.max(7, Math.min(46, slot * 0.6));

    var body = '<defs><linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="#a855f7"/><stop offset="1" stop-color="#d946ef"/></linearGradient></defs>';

    body += '<line class="axis" x1="' + P + '" y1="' + bottom + '" x2="' + (W - P) + '" y2="' + bottom + '"/>';

    entries.forEach(function (entry, index) {
      var height = (entry[1] / maxFreq) * (bottom - P - 22);
      var x = P + slot * index + (slot - barW) / 2;
      var y = bottom - height;
      body += '<rect class="bar" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + barW.toFixed(1) +
        '" height="' + height.toFixed(1) + '" rx="5"/>';
      body += '<text class="bar-label" x="' + (x + barW / 2).toFixed(1) + '" y="' + (bottom + 15) + '" text-anchor="middle">' + plain(entry[0], 2) + '</text>';
      body += '<text class="bar-label" x="' + (x + barW / 2).toFixed(1) + '" y="' + (y - 6) + '" text-anchor="middle">' + entry[1] + '</text>';
    });

    body += '<text class="axis-label" x="' + P + '" y="' + (P + 4) + '">frecuencia</text>';

    $('#plotStats').innerHTML = svg(W, H, body);
  }

  function initStats() {
    var button = $('#calcStats');
    if (!button) return;

    function run() {
      var values = parseList($('#datos').value);
      renderStats(values);
    }
    button.addEventListener('click', run);
    var input = $('#datos');
    if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') run(); });

    var presets = $('#dataPresets');
    if (presets) {
      presets.addEventListener('click', function (event) {
        var chip = event.target.closest('[data-data]');
        if (!chip) return;
        $$('[data-data]', presets).forEach(function (b) { b.classList.toggle('active', b === chip); });
        $('#datos').value = chip.dataset.data;
        run();
      });
    }
    run();
  }

  /* ---------------------------------------------------------
     EJERCICIOS BASE
     --------------------------------------------------------- */
  var listo = { parte: 'todos', nivel: 'todos' };
  var dominados = new Set(Store.get('p67.dominados', []));

  function saveDominados() {
    Store.set('p67.dominados', Array.from(dominados));
  }

  function answerText(ej) {
    if (ej.tipo === 'vector') {
      return '(' + Fmt.fmt(ej.respuesta[0]) + ', ' + Fmt.fmt(ej.respuesta[1]) + ')';
    }
    return Fmt.fmt(ej.respuesta);
  }

  var SUBSCRIPT = '₀₁₂₃₄₅₆₇₈₉';

  function prettyKey(key) {
    if (key === 'kv') return 'k\u20D7';
    return key.replace(/(\d)/g, function (digit) { return SUBSCRIPT[Number(digit)]; });
  }

  /** Complejo en texto plano con decimales (para la línea de datos). */
  function plainComplex(a, b) {
    var out = '';
    if (a !== 0 || b === 0) out += Fmt.fmt(a);
    if (b !== 0) {
      if (a !== 0) out += b > 0 ? ' + ' : ' \u2212 ';
      else if (b < 0) out += '\u2212';
      var mod = Math.abs(b);
      out += (mod === 1 ? '' : Fmt.fmt(mod)) + 'i';
    }
    return out;
  }

  /** Describe los datos de un ejercicio: "a = (3, −7) · d = (√2, −5) · k = 3". */
  function formatDatos(ej) {
    if (!ej.datos) return '';
    var partes = [];
    Object.keys(ej.datos).forEach(function (key) {
      var value = ej.datos[key];
      var label = prettyKey(key);
      if (Array.isArray(value)) {
        if (ej.parte === 'complejos' && /^z/.test(key)) {
          partes.push(label + ' = ' + plainComplex(value[0], value[1]));
        } else {
          partes.push(label + ' = (' + Fmt.fmt(value[0]) + ', ' + Fmt.fmt(value[1]) + ')');
        }
      } else {
        partes.push(label + ' = ' + Fmt.fmt(value));
      }
    });
    return partes.join(' · ');
  }

  function renderEjercicios() {
    var container = $('#listaEjercicios');
    if (!container) return;
    var items = window.EJERCICIOS || [];
    var filtered = items.filter(function (ej) {
      return (listo.parte === 'todos' || ej.parte === listo.parte) &&
        (listo.nivel === 'todos' || ej.nivel === listo.nivel);
    });

    if (!filtered.length) {
      container.innerHTML = '<div class="empty">No hay ejercicios con ese filtro.</div>';
    } else {
      container.innerHTML = filtered.map(function (ej) {
        var badge = ej.nivel === 'facil' ? 'badge-facil' : ej.nivel === 'intermedio' ? 'badge-intermedio' : 'badge-dificil';
        var badgeText = ej.nivel === 'facil' ? 'Fácil' : ej.nivel === 'intermedio' ? 'Intermedio' : 'Difícil';
        var parte = ej.parte === 'vectores' ? 'Vectores' : 'Complejos';
        var done = dominados.has(ej.id);
        return '<article class="item-card' + (done ? ' done' : '') + '" data-id="' + ej.id + '">' +
          '<div class="item-top">' +
            '<span class="item-num">J' + ej.juego + '</span>' +
            '<span class="badge ' + badge + '">' + badgeText + '</span>' +
            '<span class="badge badge-' + ej.parte + '">' + parte + '</span>' +
          '</div>' +
          '<h3 class="item-title">' + ej.titulo + '</h3>' +
          '<div class="item-formula">' + ej.formula + '</div>' +
          '<p class="small muted" style="margin:4px 0 0">Datos: ' + formatDatos(ej) + '</p>' +
          '<details class="acc"><summary>Ver solución paso a paso</summary><div class="acc-body">' +
            '<ol class="steps-list">' + ej.pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol>' +
            '<div class="answer"><strong>Respuesta:</strong> ' + answerText(ej) + '</div>' +
          '</div></details>' +
          '<div class="item-actions"><button class="btn btn-soft btn-sm" data-done="' + ej.id + '">' +
            (done ? '✓ Dominado' : 'Marcar como dominado') + '</button></div>' +
        '</article>';
      }).join('');
    }

    $$('[data-done]', container).forEach(function (button) {
      button.addEventListener('click', function () {
        var id = button.dataset.done;
        if (dominados.has(id)) dominados.delete(id); else dominados.add(id);
        saveDominados();
        var card = button.closest('.item-card');
        if (card) card.classList.toggle('done', dominados.has(id));
        button.textContent = dominados.has(id) ? '✓ Dominado' : 'Marcar como dominado';
        updateExerciseProgress();
      });
    });
    updateExerciseProgress();
  }

  function updateExerciseProgress() {
    var node = $('#progresoEjercicios');
    if (!node) return;
    var total = (window.EJERCICIOS || []).length;
    node.textContent = dominados.size + ' de ' + total + ' dominados';
  }

  function initExerciseFilters() {
    var parte = $('#filtroParte');
    var nivel = $('#filtroNivel');
    if (parte) {
      parte.addEventListener('click', function (event) {
        var chip = event.target.closest('[data-parte]');
        if (!chip) return;
        listo.parte = chip.dataset.parte;
        $$('[data-parte]', parte).forEach(function (b) { b.classList.toggle('active', b === chip); });
        renderEjercicios();
      });
    }
    if (nivel) {
      nivel.addEventListener('click', function (event) {
        var chip = event.target.closest('[data-nivel]');
        if (!chip) return;
        listo.nivel = chip.dataset.nivel;
        $$('[data-nivel]', nivel).forEach(function (b) { b.classList.toggle('active', b === chip); });
        renderEjercicios();
      });
    }
  }

  /* ---------------------------------------------------------
     BANCOS
     --------------------------------------------------------- */
  var bancoState = { practicos: 'todos', teoria: 'todos', busqueda: '' };
  var viewed = {
    practicos: new Set(Store.get('p67.vistosPracticos', [])),
    moivre: new Set(Store.get('p67.vistosMoivre', [])),
    teoria: new Set(Store.get('p67.vistosTeoria', []))
  };

  function saveViewed(bank) {
    var key = bank === 'practicos' ? 'p67.vistosPracticos' : bank === 'moivre' ? 'p67.vistosMoivre' : 'p67.vistosTeoria';
    Store.set(key, Array.from(viewed[bank]));
  }

  function renderBancos() {
    renderPracticos();
    renderMoivre();
    renderTeoria();
  }

  function renderPracticos() {
    var container = $('#listaPracticos');
    if (!container) return;
    var items = window.BANCO_PRACTICOS || [];
    var filtered = items.filter(function (item) {
      return bancoState.practicos === 'todos' || item.tema === bancoState.practicos;
    });

    $('#practicosCount').textContent = filtered.length + ' de ' + items.length + ' ítems';

    container.innerHTML = filtered.map(function (item) {
      return '<article class="item-card">' +
        '<div class="item-top">' +
          '<span class="item-num">' + item.id + '</span>' +
          '<span class="badge badge-tema">' + escapeHtml(item.tema) + '</span>' +
        '</div>' +
        '<p class="item-text">' + item.enunciado + '</p>' +
        '<details class="acc"><summary>Ver resolución</summary><div class="acc-body">' +
          '<ol class="steps-list">' + item.pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol>' +
          '<div class="answer"><strong>Respuesta:</strong> ' + item.respuesta + '</div>' +
        '</div></details>' +
      '</article>';
    }).join('') || '<div class="empty">No hay ítems con ese tema.</div>';

    container.innerHTML = mathHtml(container.innerHTML);

    $$('details.acc', container).forEach(function (details) {
      if (details.dataset.bound) return;
      details.dataset.bound = '1';
      details.addEventListener('toggle', function () {
        if (!details.open) return;
        var card = details.closest('.item-card');
        if (!card) return;
        var num = parseInt(card.querySelector('.item-num').textContent, 10);
        if (!isNaN(num) && !viewed.practicos.has(num)) {
          viewed.practicos.add(num);
          saveViewed('practicos');
        }
      });
    });
  }

  function renderMoivre() {
    var container = $('#listaMoivre');
    if (!container) return;
    var items = window.BANCO_MOIVRE || [];

    container.innerHTML = items.map(function (item) {
      return '<article class="item-card">' +
        '<div class="item-top">' +
          '<span class="item-num">' + item.id + '</span>' +
          '<span class="badge badge-tema">Teorema de Moivre</span>' +
          (item.formaPolar ? '<span class="badge badge-forma">' + escapeHtml(item.formaPolar) + '</span>' : '') +
        '</div>' +
        '<p class="item-text">' + item.enunciado + '</p>' +
        '<details class="acc"><summary>Ver resolución</summary><div class="acc-body">' +
          '<ol class="steps-list">' + item.pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol>' +
          '<div class="answer"><strong>Respuesta:</strong> ' + item.respuesta + '</div>' +
        '</div></details>' +
      '</article>';
    }).join('') || '<div class="empty">Aún no hay ejercicios de Moivre cargados.</div>';

    container.innerHTML = mathHtml(container.innerHTML);

    $$('details.acc', container).forEach(function (details) {
      if (details.dataset.bound) return;
      details.dataset.bound = '1';
      details.addEventListener('toggle', function () {
        if (!details.open) return;
        var card = details.closest('.item-card');
        if (!card) return;
        var num = parseInt(card.querySelector('.item-num').textContent, 10);
        if (!isNaN(num) && !viewed.moivre.has(num)) {
          viewed.moivre.add(num);
          saveViewed('moivre');
        }
      });
    });
  }

  function renderTeoria() {
    var container = $('#listaTeoria');
    if (!container) return;
    var items = window.BANCO_TEORIA || [];
    var query = bancoState.busqueda.trim().toLowerCase();

    var filtered = items.filter(function (item) {
      var okTema = bancoState.teoria === 'todos' || item.tema === bancoState.teoria;
      var okQuery = !query || (item.pregunta + ' ' + item.respuesta).toLowerCase().indexOf(query) !== -1;
      return okTema && okQuery;
    });

    $('#teoriaCount').textContent = filtered.length + ' de ' + items.length + ' ítems';

    container.innerHTML = filtered.map(function (item) {
      return '<article class="item-card">' +
        '<div class="item-top">' +
          '<span class="item-num">' + item.id + '</span>' +
          '<span class="badge badge-tema">' + escapeHtml(item.tema) + '</span>' +
        '</div>' +
        '<p class="item-text"><strong>' + item.pregunta + '</strong></p>' +
        '<details class="acc"><summary>Ver respuesta modelo</summary><div class="acc-body">' +
          item.respuesta +
        '</div></details>' +
      '</article>';
    }).join('') || '<div class="empty">No hay preguntas que coincidan con la búsqueda.</div>';

    container.innerHTML = mathHtml(container.innerHTML);

    $$('details.acc', container).forEach(function (details) {
      if (details.dataset.bound) return;
      details.dataset.bound = '1';
      details.addEventListener('toggle', function () {
        if (!details.open) return;
        var card = details.closest('.item-card');
        if (!card) return;
        var num = parseInt(card.querySelector('.item-num').textContent, 10);
        if (!isNaN(num) && !viewed.teoria.has(num)) {
          viewed.teoria.add(num);
          saveViewed('teoria');
        }
      });
    });
  }

  function initBancos() {
    var tabs = $('#bancosTabs');
    if (!tabs) return;

    tabs.addEventListener('click', function (event) {
      var chip = event.target.closest('[data-banco]');
      if (!chip) return;
      $$('[data-banco]', tabs).forEach(function (b) {
        b.classList.toggle('active', b === chip);
        b.setAttribute('aria-selected', b === chip ? 'true' : 'false');
      });
      var target = chip.dataset.banco;
      $$('.banco-panel').forEach(function (panel) {
        panel.hidden = panel.id !== 'banco-' + target;
      });
    });

    var filtroPracticos = $('#practicosFiltro');
    if (filtroPracticos) {
      filtroPracticos.addEventListener('click', function (event) {
        var chip = event.target.closest('[data-tema]');
        if (!chip) return;
        bancoState.practicos = chip.dataset.tema;
        $$('[data-tema]', filtroPracticos).forEach(function (b) { b.classList.toggle('active', b === chip); });
        renderPracticos();
      });
    }

    var filtroTeoria = $('#teoriaFiltro');
    if (filtroTeoria) {
      filtroTeoria.addEventListener('click', function (event) {
        var chip = event.target.closest('[data-tema]');
        if (!chip) return;
        bancoState.teoria = chip.dataset.tema;
        $$('[data-tema]', filtroTeoria).forEach(function (b) { b.classList.toggle('active', b === chip); });
        renderTeoria();
      });
    }

    var search = $('#teoriaSearch');
    if (search) {
      search.addEventListener('input', function () {
        bancoState.busqueda = search.value;
        renderTeoria();
      });
    }

    var revealPracticos = $('#practicosReveal');
    if (revealPracticos) {
      revealPracticos.addEventListener('click', function () {
        var details = $$('#listaPracticos details.acc');
        var allOpen = details.every(function (d) { return d.open; });
        details.forEach(function (d) { d.open = !allOpen; });
        revealPracticos.textContent = allOpen ? 'Mostrar respuestas' : 'Ocultar respuestas';
      });
    }

    var revealMoivre = $('#moivreReveal');
    if (revealMoivre) {
      revealMoivre.addEventListener('click', function () {
        var details = $$('#listaMoivre details.acc');
        var allOpen = details.every(function (d) { return d.open; });
        details.forEach(function (d) { d.open = !allOpen; });
        revealMoivre.textContent = allOpen ? 'Mostrar respuestas' : 'Ocultar respuestas';
      });
    }
  }

  /* ---------------------------------------------------------
     EXAMEN
     --------------------------------------------------------- */
  var exam = null;

  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
    }
    return copy;
  }

  function startExam(mode) {
    if (mode === 'teorico') {
      var preguntas = shuffle(window.BANCO_TEORIA || []).slice(0, 10);
      if (!preguntas.length) { toast('El banco teórico aún no está disponible.'); return; }
      exam = { mode: mode, items: preguntas, index: 0, correct: 0 };
    } else {
      var pool = (window.EJERCICIOS || []).filter(function (e) { return e.parte === mode; });
      if (!pool.length) { toast('No hay ejercicios disponibles.'); return; }
      exam = { mode: mode, items: shuffle(pool).slice(0, 10), index: 0, correct: 0 };
    }
    $('#examenInicio').hidden = true;
    $('#examenArea').hidden = false;
    renderExamQuestion();
  }

  function examTypeLabel(mode) {
    return mode === 'vectores' ? 'Examen de vectores' : mode === 'complejos' ? 'Examen de complejos' : 'Examen teórico';
  }

  function renderExamQuestion() {
    var item = exam.items[exam.index];
    $('#examenTipo').textContent = examTypeLabel(exam.mode);
    $('#examenNum').textContent = exam.index + 1;
    $('#examenTotal').textContent = exam.items.length;
    $('#examenAciertos').textContent = exam.correct;
    $('#examenBarra').style.width = ((exam.index / exam.items.length) * 100) + '%';
    $('#examenResultado').innerHTML = '';

    var container = $('#examenContainer');

    if (exam.mode === 'teorico') {
      container.innerHTML = mathHtml('<p class="quiz-question">' + item.pregunta + '</p>' +
        '<div id="teoriaRevealBox" hidden><div class="quiz-feedback"><strong>Respuesta modelo:</strong><br>' + item.respuesta + '</div></div>' +
        '<div class="item-actions mt-2">' +
          '<button class="btn btn-soft" id="btnRevealTeoria">Ver respuesta modelo</button>' +
          '<span class="spacer"></span>' +
          '<button class="btn btn-ghost" id="btnFallo" disabled>No la sabía</button>' +
          '<button class="btn btn-primary" id="btnAcierto" disabled>La sabía</button>' +
        '</div>');

      $('#btnRevealTeoria').addEventListener('click', function () {
        $('#teoriaRevealBox').hidden = false;
        this.hidden = true;
        $('#btnFallo').disabled = false;
        $('#btnAcierto').disabled = false;
      });
      $('#btnAcierto').addEventListener('click', function () { examAnswer(true); });
      $('#btnFallo').addEventListener('click', function () { examAnswer(false); });
      return;
    }

    var inputs = item.tipo === 'vector'
      ? '<div class="numeric-answer">' +
          '<div class="field"><label for="examX">Componente x</label><input type="text" id="examX" inputmode="decimal" placeholder="0"></div>' +
          '<div class="field"><label for="examY">Componente y</label><input type="text" id="examY" inputmode="decimal" placeholder="0"></div>' +
        '</div>'
      : '<div class="numeric-answer"><div class="field"><label for="examX">Resultado</label><input type="text" id="examX" inputmode="decimal" placeholder="0"></div></div>';

    container.innerHTML = '<div class="item-top">' +
        '<span class="item-num">J' + item.juego + '</span>' +
        '<span class="badge badge-' + item.parte + '">' + (item.parte === 'vectores' ? 'Vectores' : 'Complejos') + '</span>' +
      '</div>' +
      '<p class="quiz-question">' + item.titulo + '</p>' +
      '<div class="item-formula" style="font-size:1.25rem">' + item.formula + '</div>' +
      '<p class="small muted">Datos: ' + formatDatos(item) + '. Usa la calculadora del tema si lo necesitas.</p>' +
      inputs +
      '<div class="item-actions mt-2"><button class="btn btn-primary" id="btnCheck">Comprobar</button>' +
      '<button class="btn btn-ghost" id="btnSkip">Ver solución</button></div>' +
      '<div id="examFeedback"></div>';

    $('#btnCheck').addEventListener('click', function () {
      var x = parseNumber($('#examX').value);
      var y = item.tipo === 'vector' ? parseNumber($('#examY').value) : 0;
      if (x === null || y === null) { toast('Escribe un número válido.'); return; }

      var ok;
      if (item.tipo === 'vector') {
        ok = Math.abs(x - item.respuesta[0]) <= 0.1 && Math.abs(y - item.respuesta[1]) <= 0.1;
      } else {
        ok = Math.abs(x - item.respuesta) <= 0.1;
      }
      showExamFeedback(ok, item, true);
      disableExamInputs();
      appendNextButton();
    });

    $('#btnSkip').addEventListener('click', function () {
      showExamFeedback(false, item, false);
      disableExamInputs();
      appendNextButton();
    });
  }

  function disableExamInputs() {
    var check = $('#btnCheck'), skip = $('#btnSkip');
    if (check) check.disabled = true;
    if (skip) skip.disabled = true;
    var x = $('#examX'), y = $('#examY');
    if (x) x.disabled = true;
    if (y) y.disabled = true;
  }

  function showExamFeedback(ok, item, counted) {
    var box = $('#examFeedback');
    if (!box) return;
    if (ok && counted) exam.correct += 1;
    $('#examenAciertos').textContent = exam.correct;

    var solution = item.tipo === 'vector'
      ? '(' + Fmt.fmt(item.respuesta[0]) + ', ' + Fmt.fmt(item.respuesta[1]) + ')'
      : Fmt.fmt(item.respuesta);

    box.innerHTML = mathHtml('<div class="quiz-feedback ' + (ok ? 'ok' : 'no') + '">' +
      (ok ? '<strong>¡Correcto!</strong>' : '<strong>' + (counted ? 'Incorrecto.' : 'Solución mostrada.') + '</strong>') +
      ' La respuesta es <span class="math">' + solution + '</span>.' +
      '<details class="acc" style="margin-top:10px"><summary>Ver procedimiento</summary><div class="acc-body">' +
      '<ol class="steps-list">' + item.pasos.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol>' +
      '</div></details></div>');
  }

  function appendNextButton() {
    var box = $('#examFeedback');
    if (!box || !exam) return;
    var wrap = document.createElement('div');
    wrap.className = 'item-actions mt-2';
    var button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = exam.index === exam.items.length - 1 ? 'Ver resultado' : 'Siguiente pregunta';
    button.addEventListener('click', nextExamQuestion);
    wrap.appendChild(button);
    box.appendChild(wrap);
  }

  function examAnswer(ok) {
    if (ok) exam.correct += 1;
    $('#examenAciertos').textContent = exam.correct;
    nextExamQuestion();
  }

  function nextExamQuestion() {
    exam.index += 1;
    if (exam.index >= exam.items.length) {
      showExamResult();
    } else {
      renderExamQuestion();
    }
  }

  function showExamResult() {
    var total = exam.items.length;
    var percent = Math.round((exam.correct / total) * 100);
    var message = percent >= 90 ? '¡Excelente! Dominas el tema.'
      : percent >= 70 ? '¡Muy bien! Solo quedan detalles.'
      : percent >= 50 ? 'Vas por buen camino: repasa las soluciones.'
      : 'Toca repasar la teoría y volver a intentarlo.';

    $('#examenBarra').style.width = '100%';
    $('#examenContainer').innerHTML = '';
    $('#examenResultado').innerHTML = '<div class="quiz-result">' +
      '<div class="score">' + percent + '%</div>' +
      '<p>' + exam.correct + ' de ' + total + ' correctas · ' + message + '</p>' +
      '<div class="item-actions" style="justify-content:center">' +
        '<button class="btn btn-primary" id="btnRetry">Repetir</button>' +
        '<button class="btn btn-ghost" id="btnOther">Elegir otro modo</button>' +
      '</div></div>';

    $('#btnRetry').addEventListener('click', function () { startExam(exam.mode); });
    $('#btnOther').addEventListener('click', resetExam);
    $$('details.acc').forEach(function (d) { d.open = false; });
  }

  function resetExam() {
    exam = null;
    $('#examenArea').hidden = true;
    $('#examenInicio').hidden = false;
    $('#examenContainer').innerHTML = '';
    $('#examenResultado').innerHTML = '';
  }

  function initExam() {
    $$('[data-exam]').forEach(function (button) {
      button.addEventListener('click', function () { startExam(button.dataset.exam); });
    });
    var exit = $('#examExit');
    if (exit) exit.addEventListener('click', resetExam);
  }

  /* ---------------------------------------------------------
     Arranque
     --------------------------------------------------------- */
  /** Añade el gancho SVG a las raíces escritas directamente en el HTML. */
  function ensureRadicalHooks() {
    if (!window.MathRender) return;
    var nodes = document.querySelectorAll('.sqrt');
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.querySelector('.rad-hook')) continue;
      var content = node.querySelector('.sqrt-content');
      if (!content) continue;
      node.outerHTML = window.MathRender.sqrt(content.innerHTML);
    }
  }

  /** Convierte la notación matemática escrita a mano en el HTML. */
  function renderStaticMath() {
    if (!window.MathRender) return;
    // Fórmulas de desarrollo y avisos: tablas y portada se mantienen compactas.
    var nodes = document.querySelectorAll('.formula .math, .note .math, .tip .math, .warn .math');
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.dataset.mathDone) continue;
      if (node !== node.closest('.math')) continue;
      node.innerHTML = window.MathRender.render(node.innerHTML);
      node.dataset.mathDone = '1';
    }
  }

  /** Raíces de las tablas de referencia: solo el radical, sin fracciones. */
  function renderTableRoots() {
    if (!window.MathRender) return;
    var nodes = document.querySelectorAll('.table-wrap .math');
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.dataset.rootsDone || node.innerHTML.indexOf('\u221A') === -1) continue;
      node.innerHTML = node.innerHTML
        .split(/(<[^>]+>)/)
        .map(function (part) {
          if (part.charAt(0) === '<') return part;
          return part.replace(/\u221A(\d+)/g, function (match, radicand) {
            return window.MathRender.sqrt(radicand);
          });
        })
        .join('');
      node.dataset.rootsDone = '1';
    }
  }

  function init() {
    ensureRadicalHooks();
    renderTableRoots();
    renderStaticMath();
    initTheme();
    initNav();
    initMascota();
    initTheoryTabs();
    initVectors();
    initComplex();
    initTrigo();
    initStats();
    initExerciseFilters();
    initBancos();
    initExam();
    animateCounters();
    revealScan();

    // Si el banco llega después (carga diferida), vuelve a pintar al mostrarlo.
    window.addEventListener('load', function () { revealScan(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

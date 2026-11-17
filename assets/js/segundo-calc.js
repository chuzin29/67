/* ============================================================
   segundo-calc.js — Calculadoras interactivas de 2.º año
   Cada calculadora: { t, d, f:[[clave, etiqueta, valor, opciones?]], run(v) }
   run devuelve { steps:[html], res:html, plot:svg|null } o { err:texto }.
   ============================================================ */
(function (global) {
  'use strict';

  /* ---------- utilidades ---------- */
  function f(n, d) {
    if (typeof n !== 'number' || !isFinite(n)) return '—';
    d = d == null ? 4 : d;
    var k = Math.pow(10, d), s = String(Math.round(n * k) / k);
    if (s === '-0') s = '0';
    return s.replace('-', '−');
  }
  function m(s) { return '<span class="math">' + s + '</span>'; }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a; }
  function frac(n) {
    if (!isFinite(n)) return '—';
    if (Number.isInteger(n)) return f(n);
    for (var q = 2; q <= 120; q++) {
      var p = Math.round(n * q);
      if (Math.abs(p / q - n) < 1e-9) { var g = gcd(p, q); return f(p / g, 0) + '/' + (q / g); }
    }
    return f(n);
  }
  function par(x, y) { return '(' + frac(x) + ', ' + frac(y) + ')'; }
  function sgn(n, first) { // " + 3" / " − 3"
    var s = n < 0 ? '−' : '+';
    return (first && n >= 0 ? '' : ' ' + s + ' ') + frac(Math.abs(n));
  }
  var DEG = Math.PI / 180;
  function big(n) { return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function factB(n) { var r = 1n; for (var i = 2n; i <= n; i++) r *= i; return r; }
  function permB(n, r) { var x = 1n; for (var i = 0n; i < r; i++) x *= (n - i); return x; }
  function combB(n, r) { if (r > n) return 0n; if (r > n - r) r = n - r; var x = 1n; for (var i = 1n; i <= r; i++) x = x * (n - r + i) / i; return x; }
  function nice(span) {
    var raw = span / 6, p = Math.pow(10, Math.floor(Math.log10(raw))), r = raw / p;
    return (r < 1.5 ? 1 : r < 3.5 ? 2 : r < 7.5 ? 5 : 10) * p;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- gráficas SVG ---------- */
  var COL = { 1: 'var(--plot-1)', 2: 'var(--plot-2)', 3: 'var(--plot-3)', 4: 'var(--plot-4)', a: 'var(--plot-axis)' };

  function yfit(fn, x0, x1) {
    var lo = Infinity, hi = -Infinity, n = 160, span = x1 - x0;
    for (var i = 0; i <= n; i++) {
      var y = fn(x0 + span * i / n);
      if (isFinite(y)) { lo = Math.min(lo, y); hi = Math.max(hi, y); }
    }
    if (!isFinite(lo)) { lo = -1; hi = 1; }
    lo = Math.max(lo, -3 * span); hi = Math.min(hi, 3 * span);
    if (hi - lo < 1e-6) { lo -= 1; hi += 1; }
    return [Math.min(lo, 0), Math.max(hi, 0)];
  }

  /* o: { x:[a,b], y:[c,d], curves:[{f|pts, c, dash}], segs:[{p:[[x,y],[x,y]], c, dash}], pts:[{x,y,l,c}], fill:[[x0,x1]] , eq:true } */
  function plot(o) {
    var W = 460, H = o.h || 320, P = 30;
    var x0 = o.x[0], x1 = o.x[1], y0 = o.y[0], y1 = o.y[1];
    if (o.eq) { // misma escala en ambos ejes (para circunferencias, etc.)
      var cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, sx = (x1 - x0) / (W - 2 * P), sy = (y1 - y0) / (H - 2 * P), s = Math.max(sx, sy);
      x0 = cx - s * (W - 2 * P) / 2; x1 = cx + s * (W - 2 * P) / 2; y0 = cy - s * (H - 2 * P) / 2; y1 = cy + s * (H - 2 * P) / 2;
    }
    function X(x) { return P + (x - x0) / (x1 - x0) * (W - 2 * P); }
    function Y(y) { return H - P - (y - y0) / (y1 - y0) * (H - 2 * P); }
    var g = '', i, st;
    st = nice(x1 - x0);
    for (i = Math.ceil(x0 / st); i * st <= x1; i++) {
      var xv = i * st;
      g += '<line x1="' + X(xv) + '" y1="' + P + '" x2="' + X(xv) + '" y2="' + (H - P) + '" stroke="var(--line)" stroke-width="1" opacity=".55"/>';
      if (Math.abs(xv) > 1e-9) g += '<text x="' + X(xv) + '" y="' + (H - P + 14) + '" text-anchor="middle" font-size="10" fill="var(--plot-axis)">' + f(xv, 2) + '</text>';
    }
    st = nice(y1 - y0);
    for (i = Math.ceil(y0 / st); i * st <= y1; i++) {
      var yv = i * st;
      g += '<line x1="' + P + '" y1="' + Y(yv) + '" x2="' + (W - P) + '" y2="' + Y(yv) + '" stroke="var(--line)" stroke-width="1" opacity=".55"/>';
      if (Math.abs(yv) > 1e-9) g += '<text x="' + (P - 4) + '" y="' + (Y(yv) + 3) + '" text-anchor="end" font-size="10" fill="var(--plot-axis)">' + f(yv, 2) + '</text>';
    }
    if (x0 < 0 && x1 > 0) g += '<line x1="' + X(0) + '" y1="' + P + '" x2="' + X(0) + '" y2="' + (H - P) + '" stroke="var(--plot-axis)" stroke-width="1.6"/>';
    if (y0 < 0 && y1 > 0) g += '<line x1="' + P + '" y1="' + Y(0) + '" x2="' + (W - P) + '" y2="' + Y(0) + '" stroke="var(--plot-axis)" stroke-width="1.6"/>';
    var clip = 'c' + Math.random().toString(36).slice(2, 8);
    var body = '';
    (o.fill || []).forEach(function (r) {
      body += '<rect x="' + X(r[0]) + '" y="' + P + '" width="' + Math.max(0, X(r[1]) - X(r[0])) + '" height="' + (H - 2 * P) + '" fill="var(--plot-1)" opacity=".10"/>';
    });
    (o.curves || []).forEach(function (c) {
      var pts = c.pts, d = '', pen = false, last = null;
      if (!pts) {
        pts = [];
        var a = c.x ? c.x[0] : x0, b = c.x ? c.x[1] : x1, n = 360;
        for (var k = 0; k <= n; k++) { var xx = a + (b - a) * k / n; pts.push([xx, c.f(xx)]); }
      }
      pts.forEach(function (p) {
        var ok = isFinite(p[0]) && isFinite(p[1]);
        if (ok && last && Math.abs(p[1] - last[1]) > (y1 - y0) * 1.5 && !c.pts) ok = false;
        if (!ok) { pen = false; last = null; return; }
        d += (pen ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1);
        pen = true; last = p;
      });
      body += '<path d="' + d + '" fill="none" stroke="' + COL[c.c || 1] + '" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"' + (c.dash ? ' stroke-dasharray="6 5"' : '') + ' class="s2-draw"/>';
    });
    (o.segs || []).forEach(function (s) {
      body += '<line x1="' + X(s.p[0][0]) + '" y1="' + Y(s.p[0][1]) + '" x2="' + X(s.p[1][0]) + '" y2="' + Y(s.p[1][1]) + '" stroke="' + COL[s.c || 2] + '" stroke-width="2"' + (s.dash ? ' stroke-dasharray="6 5"' : '') + ' class="s2-draw"/>';
    });
    g += '<clipPath id="' + clip + '"><rect x="' + P + '" y="' + P + '" width="' + (W - 2 * P) + '" height="' + (H - 2 * P) + '"/></clipPath><g clip-path="url(#' + clip + ')">' + body + '</g>';
    (o.pts || []).forEach(function (p) {
      if (!isFinite(p.x) || !isFinite(p.y)) return;
      g += '<circle cx="' + X(p.x) + '" cy="' + Y(p.y) + '" r="4.6" fill="' + COL[p.c || 2] + '" stroke="var(--surface)" stroke-width="1.5"/>';
      if (p.l) g += '<text x="' + (X(p.x) + 7) + '" y="' + (Y(p.y) - 7) + '" font-size="11" font-weight="600" fill="var(--foreground)">' + esc(p.l) + '</text>';
    });
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Gráfica" class="s2-svg">' + g + '</svg>';
  }

  function bars(items, max, fmt) {
    var W = 460, H = 40 + items.length * 38, mx = max || Math.max.apply(null, items.map(function (i) { return i.v; })) || 1, g = '';
    items.forEach(function (it, i) {
      var y = 14 + i * 38, w = Math.max(2, (W - 190) * it.v / mx);
      g += '<text x="0" y="' + (y + 16) + '" font-size="12" fill="var(--foreground)">' + esc(it.l) + '</text>' +
        '<rect x="150" y="' + y + '" width="' + w + '" height="22" rx="6" fill="' + COL[it.c || 1] + '" class="s2-bar"/>' +
        '<text x="' + (156 + w) + '" y="' + (y + 16) + '" font-size="12" font-weight="700" fill="var(--foreground)">' + (fmt ? fmt(it.v) : f(it.v, 4)) + '</text>';
    });
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Gráfica de barras" class="s2-svg">' + g + '</svg>';
  }

  function ellipsePts(h, k, a, b) {
    var r = []; for (var i = 0; i <= 200; i++) { var t = 2 * Math.PI * i / 200; r.push([h + a * Math.cos(t), k + b * Math.sin(t)]); }
    return r;
  }
  function window2(xs, ys, padF) {
    var lx = Math.min.apply(null, xs), hx = Math.max.apply(null, xs), ly = Math.min.apply(null, ys), hy = Math.max.apply(null, ys);
    var sx = Math.max(hx - lx, 2), sy = Math.max(hy - ly, 2), p = padF || 0.25;
    return { x: [lx - sx * p, hx + sx * p], y: [ly - sy * p, hy + sy * p] };
  }
  function lineSeg(A, B, C, R) { // Ax + By = C, recortada a la ventana R
    if (Math.abs(B) > 1e-12) return [[R.x[0], (C - A * R.x[0]) / B], [R.x[1], (C - A * R.x[1]) / B]];
    return [[C / A, R.y[0]], [C / A, R.y[1]]];
  }

  /* ---------- calculadoras ---------- */
  var CALCS = {};

  CALCS.bicuadratica = {
    t: 'Ecuación bicuadrática', d: 'Resuelve a·x⁴ + b·x² + c = 0 con el cambio y = x².',
    f: [['a', 'a', 1], ['b', 'b', -5], ['c', 'c', 4]],
    run: function (v) {
      var a = v.a, b = v.b, c = v.c; if (a === 0) return { err: 'a debe ser distinto de 0.' };
      var D = b * b - 4 * a * c, st = [];
      st.push('Cambio de variable: ' + m('y = x²') + '. La ecuación queda ' + m(f(a) + 'y² ' + sgn(b) + 'y ' + sgn(c) + ' = 0') + '.');
      st.push('Discriminante: ' + m('D = b² − 4ac = ' + f(D)) + '.');
      var roots = [];
      if (D < 0) { st.push('Como ' + m('D < 0') + ', no hay valores reales de y: <strong>no hay raíces reales</strong>.'); }
      else {
        var s = Math.sqrt(D), ys = [(-b + s) / (2 * a), (-b - s) / (2 * a)];
        if (D === 0) ys = [ys[0]];
        st.push('Valores de y: ' + ys.map(function (y) { return m('y = ' + frac(y)); }).join(' y ') + '.');
        ys.forEach(function (y) {
          if (y > 1e-12) { var r = Math.sqrt(y); roots.push(r, -r); st.push('Con ' + m('y = ' + frac(y)) + ': ' + m('x = ±√' + frac(y) + ' = ±' + f(r)) + '.'); }
          else if (Math.abs(y) <= 1e-12) { roots.push(0); st.push('Con ' + m('y = 0') + ': ' + m('x = 0') + '.'); }
          else st.push('Con ' + m('y = ' + frac(y)) + ' &lt; 0: ' + m('x²') + ' no puede ser negativo, sin raíz real.');
        });
      }
      roots = roots.filter(function (r, i) { return roots.findIndex(function (q) { return Math.abs(q - r) < 1e-9; }) === i; }).sort(function (p, q) { return p - q; });
      var R = Math.max(2, Math.max.apply(null, roots.map(Math.abs).concat([0])) * 1.4), fn = function (x) { return a * x * x * x * x + b * x * x + c; };
      return {
        steps: st,
        res: roots.length ? 'Raíces reales: ' + m(roots.map(function (r) { return 'x = ' + f(r); }).join(', ')) : 'Sin raíces reales (las 4 raíces son complejas).',
        plot: plot({ x: [-R, R], y: yfit(fn, -R, R), curves: [{ f: fn, c: 1 }], pts: roots.map(function (r) { return { x: r, y: 0, l: f(r, 2) }; }) })
      };
    }
  };

  CALCS.radical = {
    t: 'Ecuación radical', d: 'Resuelve √(a·x + b) = c·x + d y descarta raíces extrañas.',
    f: [['a', 'a', 1], ['b', 'b', 5], ['c', 'c', 1], ['d', 'd', -1]],
    run: function (v) {
      var a = v.a, b = v.b, c = v.c, d = v.d, st = [], cand = [];
      st.push('Eleva al cuadrado ambos lados: ' + m('a x + b = (c x + d)²') + ', es decir ' + m(f(a) + 'x ' + sgn(b) + ' = (' + f(c) + 'x ' + sgn(d) + ')²') + '.');
      var A = c * c, B = 2 * c * d - a, C = d * d - b;
      if (Math.abs(A) < 1e-12) {
        if (Math.abs(B) < 1e-12) return { err: 'La ecuación degenera (sin variable). Cambia los valores.' };
        cand = [-C / B]; st.push('Queda lineal: ' + m(f(B) + 'x ' + sgn(C) + ' = 0') + ' → ' + m('x = ' + frac(cand[0])) + '.');
      } else {
        st.push('Ordena: ' + m(f(A) + 'x² ' + sgn(B) + 'x ' + sgn(C) + ' = 0') + '.');
        var D = B * B - 4 * A * C;
        if (D < 0) st.push('Discriminante negativo: no hay soluciones reales.');
        else { cand = D === 0 ? [-B / (2 * A)] : [(-B + Math.sqrt(D)) / (2 * A), (-B - Math.sqrt(D)) / (2 * A)]; st.push('Candidatas: ' + cand.map(function (x) { return m('x = ' + frac(x)); }).join(' y ') + '.'); }
      }
      var ok = [];
      cand.forEach(function (x) {
        var rad = a * x + b, rhs = c * x + d, good = rad >= -1e-9 && rhs >= -1e-9 && Math.abs(Math.sqrt(Math.max(rad, 0)) - rhs) < 1e-7;
        st.push('Comprobación con ' + m('x = ' + frac(x)) + ': ' + m('√' + f(rad) + ' = ' + f(Math.sqrt(Math.max(rad, 0))) + '') + ' y ' + m('c x + d = ' + f(rhs)) + ' → ' + (good ? '<strong>sirve ✓</strong>' : '<strong>raíz extraña ✗</strong>') + '.');
        if (good) ok.push(x);
      });
      var xs = cand.concat([0, -b / (a || 1)]), W = window2(xs, [0, d, 3], 0.4);
      return {
        steps: st, res: ok.length ? 'Solución: ' + m(ok.map(function (x) { return 'x = ' + frac(x); }).join(', ')) : 'Sin solución real válida.',
        plot: plot({ x: W.x, y: [Math.min(W.y[0], -1), Math.max(W.y[1], 3)], curves: [{ f: function (x) { return a * x + b >= 0 ? Math.sqrt(a * x + b) : NaN; }, c: 1 }, { f: function (x) { return c * x + d; }, c: 2 }], pts: ok.map(function (x) { return { x: x, y: c * x + d, l: frac(x) }; }) })
      };
    }
  };

  CALCS['sistema-lc'] = {
    t: 'Sistema lineal–cuadrático', d: 'Intersección de la recta y = m·x + n con la parábola y = a·x² + b·x + c.',
    f: [['m', 'm', 1], ['n', 'n', 2], ['a', 'a', 1], ['b', 'b', 0], ['c', 'c', 0]],
    run: function (v) {
      var m1 = v.m, n = v.n, a = v.a, b = v.b, c = v.c, st = [];
      st.push('Iguala: ' + m(f(a) + 'x² ' + sgn(b) + 'x ' + sgn(c) + ' = ' + f(m1) + 'x ' + sgn(n)) + '.');
      var A = a, B = b - m1, C = c - n, xs = [];
      st.push('Ordena a cero: ' + m(f(A) + 'x² ' + sgn(B) + 'x ' + sgn(C) + ' = 0') + '.');
      if (Math.abs(A) < 1e-12) { if (Math.abs(B) > 1e-12) xs = [-C / B]; }
      else { var D = B * B - 4 * A * C; st.push('Discriminante: ' + m('D = ' + f(D)) + (D > 0 ? ' &gt; 0 → dos puntos de corte.' : D === 0 ? ' = 0 → la recta es tangente.' : ' &lt; 0 → no se cortan.'));
        if (D >= 0) xs = D === 0 ? [-B / (2 * A)] : [(-B + Math.sqrt(D)) / (2 * A), (-B - Math.sqrt(D)) / (2 * A)]; }
      var P = xs.map(function (x) { return [x, m1 * x + n]; });
      P.forEach(function (p) { st.push('Para ' + m('x = ' + frac(p[0])) + ': ' + m('y = ' + f(m1) + '·' + frac(p[0]) + ' ' + sgn(n) + ' = ' + frac(p[1])) + '.'); });
      var W = window2(xs.concat([-3, 3]), [0].concat(P.map(function (p) { return p[1]; })), 0.5), pf = function (x) { return a * x * x + b * x + c; };
      return { steps: st, res: P.length ? 'Puntos de intersección: ' + m(P.map(function (p) { return par(p[0], p[1]); }).join(' y ')) : 'La recta y la parábola no se cortan.',
        plot: plot({ x: W.x, y: yfit(pf, W.x[0], W.x[1]), curves: [{ f: pf, c: 1 }, { f: function (x) { return m1 * x + n; }, c: 2 }], pts: P.map(function (p) { return { x: p[0], y: p[1], l: par(p[0], p[1]) }; }) }) };
    }
  };

  CALCS.recta = {
    t: 'Recta por dos puntos', d: 'Pendiente, ecuaciones, intersecciones, distancia y punto medio.',
    f: [['x1', 'x₁', 1], ['y1', 'y₁', 2], ['x2', 'x₂', 4], ['y2', 'y₂', 8]],
    run: function (v) {
      var x1 = v.x1, y1 = v.y1, x2 = v.x2, y2 = v.y2, st = [];
      if (x1 === x2 && y1 === y2) return { err: 'Los puntos deben ser distintos.' };
      var dist = Math.hypot(x2 - x1, y2 - y1), mid = [(x1 + x2) / 2, (y1 + y2) / 2], res, segs, W = window2([x1, x2, 0], [y1, y2, 0], 0.5);
      st.push('Distancia: ' + m('d = √((x₂−x₁)² + (y₂−y₁)²) = √' + f((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) + ' ≈ ' + f(dist, 4)) + '.');
      st.push('Punto medio: ' + m(par(mid[0], mid[1])) + '.');
      if (x1 === x2) { res = 'Recta vertical: ' + m('x = ' + frac(x1)) + ' (pendiente indefinida).'; st.unshift('Como ' + m('x₁ = x₂') + ', la recta es vertical.'); segs = [{ p: [[x1, W.y[0]], [x1, W.y[1]]], c: 1 }]; }
      else {
        var sl = (y2 - y1) / (x2 - x1), b = y1 - sl * x1, A = y1 - y2, B = x2 - x1, C = x1 * y2 - x2 * y1;
        var g = gcd(gcd(A, B), C); if (g > 0 && Number.isInteger(A) && Number.isInteger(B) && Number.isInteger(C)) { A /= g; B /= g; C /= g; if (A < 0) { A = -A; B = -B; C = -C; } }
        st.unshift('Pendiente: ' + m('m = (y₂ − y₁)/(x₂ − x₁) = (' + f(y2) + ' − ' + (y1 < 0 ? '(' + f(y1) + ')' : f(y1)) + ')/(' + f(x2) + ' − ' + (x1 < 0 ? '(' + f(x1) + ')' : f(x1)) + ') = ' + frac(sl)) + '.');
        st.splice(1, 0, 'Punto‑pendiente: ' + m('y − ' + (y1 < 0 ? '(' + f(y1) + ')' : f(y1)) + ' = ' + frac(sl) + '(x − ' + (x1 < 0 ? '(' + f(x1) + ')' : f(x1)) + ')') + '. Pendiente‑ordenada: ' + m('y = ' + frac(sl) + 'x' + (b === 0 ? '' : ' ' + sgn(b).trim())) + '.');
        st.push('Forma general: ' + m(f(A) + 'x ' + sgn(B) + 'y ' + sgn(C) + ' = 0') + '. Ordenada en el origen: ' + m('b = ' + frac(b)) + (sl !== 0 ? '; abscisa en el origen: ' + m('x = ' + frac(-b / sl)) : '') + '.');
        res = 'Ecuación: ' + m('y = ' + frac(sl) + 'x' + (b === 0 ? '' : ' ' + sgn(b).trim())) + ' · pendiente ' + m('m = ' + frac(sl));
        segs = [{ p: [[W.x[0], sl * W.x[0] + b], [W.x[1], sl * W.x[1] + b]], c: 1 }];
      }
      return { steps: st, res: res, plot: plot({ x: W.x, y: W.y, segs: segs, pts: [{ x: x1, y: y1, l: par(x1, y1), c: 2 }, { x: x2, y: y2, l: par(x2, y2), c: 2 }, { x: mid[0], y: mid[1], l: 'M', c: 3 }] }) };
    }
  };

  CALCS['recta-pos'] = {
    t: 'Posición relativa de dos rectas', d: 'Rectas a₁x + b₁y = c₁ y a₂x + b₂y = c₂: ¿paralelas, perpendiculares, secantes?',
    f: [['a1', 'a₁', 2], ['b1', 'b₁', 1], ['c1', 'c₁', 4], ['a2', 'a₂', -1], ['b2', 'b₂', 2], ['c2', 'c₂', 3]],
    run: function (v) {
      var a1 = v.a1, b1 = v.b1, c1 = v.c1, a2 = v.a2, b2 = v.b2, c2 = v.c2, st = [];
      if ((a1 === 0 && b1 === 0) || (a2 === 0 && b2 === 0)) return { err: 'Cada recta necesita a o b distinto de 0.' };
      var det = a1 * b2 - a2 * b1, perp = Math.abs(a1 * a2 + b1 * b2) < 1e-12, res, pt = null;
      st.push('Determinante: ' + m('a₁b₂ − a₂b₁ = ' + f(det)) + '.');
      st.push('Producto escalar de normales: ' + m('a₁a₂ + b₁b₂ = ' + f(a1 * a2 + b1 * b2)) + (perp ? ' = 0 → <strong>perpendiculares</strong>.' : '.'));
      if (Math.abs(det) < 1e-12) {
        var same = Math.abs(a1 * c2 - a2 * c1) < 1e-12 && Math.abs(b1 * c2 - b2 * c1) < 1e-12;
        res = same ? 'Rectas <strong>coincidentes</strong> (infinitas soluciones).' : 'Rectas <strong>paralelas</strong> distintas (sin intersección).';
        st.push(same ? 'Los coeficientes son proporcionales, incluido el término independiente.' : 'Pendientes iguales pero distinto término independiente.');
      } else {
        pt = [(c1 * b2 - c2 * b1) / det, (a1 * c2 - a2 * c1) / det];
        st.push('Cramer: ' + m('x = (c₁b₂ − c₂b₁)/det = ' + frac(pt[0])) + ', ' + m('y = (a₁c₂ − a₂c₁)/det = ' + frac(pt[1])) + '.');
        res = (perp ? 'Rectas <strong>perpendiculares</strong>' : 'Rectas <strong>secantes</strong>') + ' que se cortan en ' + m(par(pt[0], pt[1]));
      }
      var W = window2([pt ? pt[0] : 0, -4, 4], [pt ? pt[1] : 0, -4, 4], 0.3);
      var s1 = lineSeg(a1, b1, c1, W), s2 = lineSeg(a2, b2, c2, W);
      return { steps: st, res: res, plot: plot({ x: W.x, y: W.y, eq: true, segs: [{ p: s1, c: 1 }, { p: s2, c: 2 }], pts: pt ? [{ x: pt[0], y: pt[1], l: par(pt[0], pt[1]), c: 3 }] : [] }) };
    }
  };

  CALCS['angulo-rectas'] = {
    t: 'Ángulo entre dos rectas', d: 'Con pendientes m₁ y m₂: tan θ = |(m₂ − m₁)/(1 + m₁m₂)|.',
    f: [['m1', 'm₁', 1], ['m2', 'm₂', 3]],
    run: function (v) {
      var m1 = v.m1, m2 = v.m2, st = [], den = 1 + m1 * m2, th;
      st.push('Denominador: ' + m('1 + m₁m₂ = ' + f(den)) + '.');
      if (Math.abs(den) < 1e-12) { th = 90; st.push('Si ' + m('1 + m₁m₂ = 0') + ' las rectas son perpendiculares: ' + m('θ = 90°') + '.'); }
      else {
        var t = Math.abs((m2 - m1) / den);
        st.push('Tangente: ' + m('tan θ = |(' + f(m2) + ' − ' + (m1 < 0 ? '(' + f(m1) + ')' : f(m1)) + ')/' + f(den) + '| = ' + f(t)) + '.');
        th = Math.atan(t) / DEG; st.push('Ángulo agudo: ' + m('θ = arctan(' + f(t) + ') ≈ ' + f(th, 2) + '°') + '; el ángulo obtuso complementario mide ' + m(f(180 - th, 2) + '°') + '.');
      }
      var R = 4;
      return { steps: st, res: 'Ángulo agudo: ' + m('θ ≈ ' + f(th, 2) + '°') + (Math.abs(m1 - m2) < 1e-12 ? ' (rectas paralelas, ángulo 0°)' : ''),
        plot: plot({ x: [-R, R], y: [-R, R], eq: true, segs: [{ p: [[-R, -R * m1], [R, R * m1]], c: 1 }, { p: [[-R, -R * m2], [R, R * m2]], c: 2 }], pts: [{ x: 0, y: 0, c: 3 }] }) };
    }
  };

  CALCS.parabola = {
    t: 'Parábola', d: 'Vértice, foco, directriz y lado recto. Vertical: (x−h)² = 4p(y−k). Horizontal: (y−k)² = 4p(x−h).',
    f: [['h', 'h', 1], ['k', 'k', -2], ['p', 'p', 1.5], ['o', 'Eje', 'v', [['v', 'Vertical'], ['h', 'Horizontal']]]],
    run: function (v) {
      var h = v.h, k = v.k, p = v.p, vert = v.o !== 'h', st = []; if (p === 0) return { err: 'p debe ser distinto de 0.' };
      st.push('Forma: ' + m(vert ? '(x − ' + f(h) + ')² = ' + f(4 * p) + '(y ' + sgn(-k) + ')' : '(y − ' + f(k) + ')² = ' + f(4 * p) + '(x ' + sgn(-h) + ')') + ', con ' + m('4p = ' + f(4 * p)) + ' y ' + m('p = ' + frac(p)) + '.');
      var V = [h, k], F = vert ? [h, k + p] : [h + p, k], LR = Math.abs(4 * p);
      st.push('Vértice ' + m(par(h, k)) + '; foco ' + m(par(F[0], F[1])) + ' (a distancia |p| del vértice).');
      st.push('Directriz: ' + m(vert ? 'y = ' + frac(k - p) : 'x = ' + frac(h - p)) + '; eje de simetría: ' + m(vert ? 'x = ' + frac(h) : 'y = ' + frac(k)) + '.');
      st.push('Lado recto: ' + m('|4p| = ' + f(LR)) + '; sus extremos: ' + (vert ? m(par(h - 2 * Math.abs(p), k + p)) + ' y ' + m(par(h + 2 * Math.abs(p), k + p)) : m(par(h + p, k - 2 * Math.abs(p))) + ' y ' + m(par(h + p, k + 2 * Math.abs(p)))) + '.');
      st.push('Abre hacia ' + (vert ? (p > 0 ? 'arriba' : 'abajo') : (p > 0 ? 'la derecha' : 'la izquierda')) + '.');
      var T = 2 * Math.abs(p) + 2, pts = [];
      for (var i = -60; i <= 60; i++) { var t = T * i / 60; pts.push(vert ? [h + t, k + t * t / (4 * p)] : [h + t * t / (4 * p), k + t]); }
      var W = window2([h, F[0], h - T / 1.4, h + T / 1.4], [k, F[1], k - T / 1.4, k + T / 1.4], 0.2);
      var dir = vert ? { p: [[W.x[0], k - p], [W.x[1], k - p]], c: 3, dash: 1 } : { p: [[h - p, W.y[0]], [h - p, W.y[1]]], c: 3, dash: 1 };
      return { steps: st, res: 'Vértice ' + m(par(h, k)) + ' · foco ' + m(par(F[0], F[1])) + ' · directriz ' + m(vert ? 'y = ' + frac(k - p) : 'x = ' + frac(h - p)),
        plot: plot({ x: W.x, y: W.y, eq: true, curves: [{ pts: pts, c: 1 }], segs: [dir], pts: [{ x: h, y: k, l: 'V', c: 2 }, { x: F[0], y: F[1], l: 'F', c: 4 }] }) };
    }
  };

  CALCS.circunferencia = {
    t: 'Circunferencia', d: 'Desde la forma general x² + y² + Dx + Ey + F = 0 encuentra centro y radio (completando cuadrados).',
    f: [['D', 'D', -6], ['E', 'E', 4], ['F', 'F', -12]],
    run: function (v) {
      var D = v.D, E = v.E, F = v.F, h = -D / 2, k = -E / 2, r2 = h * h + k * k - F, st = [];
      st.push('Agrupa y completa cuadrados: ' + m('(x ' + sgn(D / 2) + ')² + (y ' + sgn(E / 2) + ')² = ' + f(r2)) + '.');
      st.push('Centro: ' + m('C(−D/2, −E/2) = ' + par(h, k)) + '.');
      st.push('Radio al cuadrado: ' + m('r² = D²/4 + E²/4 − F = ' + frac(r2)) + '.');
      if (r2 < -1e-12) return { steps: st, res: 'Como ' + m('r² < 0') + ' no existe ningún punto real: conjunto vacío.', plot: null };
      if (Math.abs(r2) < 1e-12) return { steps: st, res: 'Como ' + m('r² = 0') + ' es solo el punto ' + m(par(h, k)) + '.', plot: plot({ x: [h - 3, h + 3], y: [k - 3, k + 3], eq: true, pts: [{ x: h, y: k, l: par(h, k) }] }) };
      var r = Math.sqrt(r2);
      st.push('Radio: ' + m('r = √' + frac(r2) + ' ≈ ' + f(r, 4)) + '. Diámetro ' + m(f(2 * r, 3)) + ', longitud ' + m('2πr ≈ ' + f(2 * Math.PI * r, 3)) + ', área ' + m('πr² ≈ ' + f(Math.PI * r2, 3)) + '.');
      return { steps: st, res: 'Centro ' + m(par(h, k)) + ' · radio ' + m('r = ' + (Number.isInteger(r) ? f(r) : '√' + frac(r2) + ' ≈ ' + f(r, 3))),
        plot: plot({ x: [h - r * 1.4, h + r * 1.4], y: [k - r * 1.4, k + r * 1.4], eq: true, curves: [{ pts: ellipsePts(h, k, r, r), c: 1 }], segs: [{ p: [[h, k], [h + r, k]], c: 2 }], pts: [{ x: h, y: k, l: 'C', c: 2 }] }) };
    }
  };

  CALCS.elipse = {
    t: 'Elipse', d: 'Ecuación (x−h)²/a² + (y−k)²/b² = 1 con semiejes a (horizontal) y b (vertical).',
    f: [['h', 'h', 0], ['k', 'k', 0], ['a', 'a (semieje en x)', 5], ['b', 'b (semieje en y)', 3]],
    run: function (v) {
      var h = v.h, k = v.k, a = v.a, b = v.b, st = []; if (a <= 0 || b <= 0) return { err: 'a y b deben ser positivos.' };
      var horiz = a >= b, M = Math.max(a, b), mn = Math.min(a, b), c = Math.sqrt(M * M - mn * mn), e = c / M;
      st.push('Ecuación: ' + m('(x ' + sgn(-h) + ')²/' + f(a * a) + ' + (y ' + sgn(-k) + ')²/' + f(b * b) + ' = 1') + '. El eje mayor es ' + (horiz ? 'horizontal' : 'vertical') + '.');
      st.push('Distancia focal: ' + m('c² = ' + f(M * M) + ' − ' + f(mn * mn) + ' = ' + f(c * c) + ' → c = ' + f(c, 4)) + '.');
      var F1 = horiz ? [h - c, k] : [h, k - c], F2 = horiz ? [h + c, k] : [h, k + c];
      st.push('Focos: ' + m(par(F1[0], F1[1])) + ' y ' + m(par(F2[0], F2[1])) + '. Excentricidad: ' + m('e = c/a = ' + f(e, 4)) + '.');
      st.push('Vértices: ' + (horiz ? m(par(h - a, k) + ' y ' + par(h + a, k)) : m(par(h, k - b) + ' y ' + par(h, k + b))) + '; co‑vértices: ' + (horiz ? m(par(h, k - b) + ' y ' + par(h, k + b)) : m(par(h - a, k) + ' y ' + par(h + a, k))) + '.');
      st.push('Lado recto: ' + m('2b²/a = ' + f(2 * mn * mn / M, 4)) + '. Área: ' + m('πab ≈ ' + f(Math.PI * a * b, 3)) + '.');
      return { steps: st, res: 'Focos ' + m(par(F1[0], F1[1]) + ' y ' + par(F2[0], F2[1])) + ' · excentricidad ' + m('e ≈ ' + f(e, 3)),
        plot: plot({ x: [h - a * 1.3, h + a * 1.3], y: [k - b * 1.3, k + b * 1.3], eq: true, curves: [{ pts: ellipsePts(h, k, a, b), c: 1 }], pts: [{ x: F1[0], y: F1[1], l: 'F₁', c: 2 }, { x: F2[0], y: F2[1], l: 'F₂', c: 2 }, { x: h, y: k, c: 3 }] }) };
    }
  };

  CALCS.hiperbola = {
    t: 'Hipérbola', d: 'Eje transversal horizontal o vertical: focos, vértices, asíntotas y excentricidad.',
    f: [['h', 'h', 0], ['k', 'k', 0], ['a', 'a', 3], ['b', 'b', 4], ['o', 'Eje transversal', 'h', [['h', 'Horizontal'], ['v', 'Vertical']]]],
    run: function (v) {
      var h = v.h, k = v.k, a = v.a, b = v.b, hz = v.o !== 'v', st = []; if (a <= 0 || b <= 0) return { err: 'a y b deben ser positivos.' };
      var c = Math.sqrt(a * a + b * b), e = c / a;
      st.push('Ecuación: ' + m(hz ? '(x ' + sgn(-h) + ')²/' + f(a * a) + ' − (y ' + sgn(-k) + ')²/' + f(b * b) + ' = 1' : '(y ' + sgn(-k) + ')²/' + f(a * a) + ' − (x ' + sgn(-h) + ')²/' + f(b * b) + ' = 1') + '.');
      st.push('En la hipérbola ' + m('c² = a² + b² = ' + f(a * a + b * b)) + ' → ' + m('c = ' + f(c, 4)) + '; excentricidad ' + m('e = c/a = ' + f(e, 4)) + ' (siempre mayor que 1).');
      var V1 = hz ? [h - a, k] : [h, k - a], V2 = hz ? [h + a, k] : [h, k + a], F1 = hz ? [h - c, k] : [h, k - c], F2 = hz ? [h + c, k] : [h, k + c];
      st.push('Vértices ' + m(par(V1[0], V1[1]) + ' y ' + par(V2[0], V2[1])) + '; focos ' + m(par(F1[0], F1[1]) + ' y ' + par(F2[0], F2[1])) + '.');
      var sl = hz ? b / a : a / b;
      st.push('Asíntotas: ' + m('y − ' + f(k) + ' = ±' + frac(sl) + '(x ' + sgn(-h) + ')') + '. Lado recto: ' + m('2b²/a = ' + f(2 * b * b / a, 4)) + '.');
      var T = 2.2, p1 = [], p2 = [];
      for (var i = -60; i <= 60; i++) { var t = T * i / 60, ch = Math.cosh(t), sh = Math.sinh(t); if (hz) { p1.push([h + a * ch, k + b * sh]); p2.push([h - a * ch, k + b * sh]); } else { p1.push([h + b * sh, k + a * ch]); p2.push([h + b * sh, k - a * ch]); } }
      var R = Math.max(c * 1.4, 4), W = { x: [h - R, h + R], y: [k - R, k + R] };
      return { steps: st, res: 'Vértices ' + m(par(V1[0], V1[1]) + ', ' + par(V2[0], V2[1])) + ' · focos ' + m(par(F1[0], F1[1]) + ', ' + par(F2[0], F2[1])) + ' · ' + m('e ≈ ' + f(e, 3)),
        plot: plot({ x: W.x, y: W.y, eq: true, curves: [{ pts: p1, c: 1 }, { pts: p2, c: 1 }], segs: [{ p: [[h - R, k - sl * R], [h + R, k + sl * R]], c: 3, dash: 1 }, { p: [[h - R, k + sl * R], [h + R, k - sl * R]], c: 3, dash: 1 }], pts: [{ x: F1[0], y: F1[1], l: 'F₁', c: 2 }, { x: F2[0], y: F2[1], l: 'F₂', c: 2 }, { x: V1[0], y: V1[1], c: 4 }, { x: V2[0], y: V2[1], c: 4 }] }) };
    }
  };

  CALCS.potencias = {
    t: 'Potencias con exponente racional', d: 'Calcula a<sup>p/q</sup> = (ᵠ√a)<sup>p</sup> paso a paso.',
    f: [['a', 'Base a', 8], ['p', 'Numerador p', 2], ['q', 'Denominador q', 3]],
    run: function (v) {
      var a = v.a, p = v.p, q = v.q, st = [];
      if (!Number.isInteger(q) || q < 1) return { err: 'q debe ser entero positivo.' };
      if (a === 0 && p <= 0) return { err: '0 elevado a un exponente no positivo no está definido.' };
      if (a < 0 && q % 2 === 0) return { err: 'No existe raíz real de índice par de un número negativo.' };
      var root = a < 0 ? -Math.pow(-a, 1 / q) : Math.pow(a, 1 / q), val = Math.pow(root, p);
      var rr = Math.round(root); if (Math.abs(root - rr) < 1e-9) root = rr;
      st.push('Definición: ' + m('a<sup>p/q</sup> = (<sup>q</sup>√a)<sup>p</sup>') + '. Aquí ' + m(f(a) + '<sup>' + f(p, 0) + '/' + q + '</sup>') + '.');
      st.push('Raíz de índice ' + q + ': ' + m('<sup>' + q + '</sup>√' + f(a) + ' ≈ ' + f(root, 5)) + '.');
      st.push('Eleva a ' + f(p, 4) + ': ' + m('(' + f(root, 5) + ')<sup>' + f(p, 4) + '</sup> ≈ ' + f(val, 5)) + '.');
      if (a !== 0) st.push('Con exponente negativo: ' + m(f(a) + '<sup>−' + f(p, 0) + '/' + q + '</sup> = 1/' + f(val, 5) + ' ≈ ' + f(1 / val, 5)) + '.');
      var ex = function (x) { return Math.pow(x, p / q); };
      return { steps: st, res: m(f(a) + '<sup>' + f(p, 0) + '/' + q + '</sup> = ' + (Number.isInteger(val) ? f(val) : '≈ ' + f(val, 5))),
        plot: a > 0 ? plot({ x: [0, Math.max(a * 1.5, 4)], y: yfit(ex, 0, Math.max(a * 1.5, 4)), curves: [{ f: ex, c: 1 }], pts: [{ x: a, y: val, l: f(val, 2) }] }) : null };
    }
  };

  CALCS.exponencial = {
    t: 'Función exponencial', d: 'f(x) = C·aˣ: evalúa, resuelve para x y reconoce crecimiento o decaimiento.',
    f: [['C', 'C', 100], ['a', 'Base a', 1.5], ['x', 'x', 3], ['y', 'Valor meta y', 800]],
    run: function (v) {
      var C = v.C, a = v.a, x = v.x, y = v.y, st = [];
      if (a <= 0 || a === 1) return { err: 'La base debe ser positiva y distinta de 1.' };
      st.push('Comportamiento: ' + (a > 1 ? 'crecimiento exponencial (' + m('a &gt; 1') + ')' : 'decaimiento exponencial (' + m('0 &lt; a &lt; 1') + ')') + '. Asíntota horizontal: ' + m('y = 0') + '.');
      var val = C * Math.pow(a, x);
      st.push('Evaluar: ' + m('f(' + f(x) + ') = ' + f(C) + '·' + f(a) + '<sup>' + f(x) + '</sup> ≈ ' + f(val, 4)) + '.');
      var xs = [x];
      if (y / C > 0) { var xx = Math.log(y / C) / Math.log(a); st.push('Resolver ' + m('f(x) = ' + f(y)) + ': ' + m(f(a) + '<sup>x</sup> = ' + f(y) + '/' + f(C) + ' = ' + f(y / C, 4)) + ' → ' + m('x = ln(' + f(y / C, 4) + ')/ln(' + f(a) + ') ≈ ' + f(xx, 4)) + '.'); xs.push(xx); }
      else st.push('Como ' + m(f(y) + '/' + f(C)) + ' no es positivo, no hay solución real.');
      var fn = function (t) { return C * Math.pow(a, t); }, lo = Math.min.apply(null, xs.concat([0])) - 1.5, hi = Math.max.apply(null, xs.concat([2])) + 1.5;
      var ys = yfit(fn, lo, hi);
      return { steps: st, res: m('f(' + f(x) + ') ≈ ' + f(val, 3)) + (y / C > 0 ? ' · ' + m('f(x) = ' + f(y) + ' en x ≈ ' + f(Math.log(y / C) / Math.log(a), 3)) : ''),
        plot: plot({ x: [lo, hi], y: ys, curves: [{ f: fn, c: 1 }], segs: [{ p: [[lo, 0], [hi, 0]], c: 3, dash: 1 }], pts: [{ x: x, y: val, l: f(val, 1) }].concat(y / C > 0 ? [{ x: Math.log(y / C) / Math.log(a), y: y, l: 'meta', c: 4 }] : []) }) };
    }
  };

  CALCS.inyectiva = {
    t: 'Inyectividad (prueba de la recta horizontal)', d: 'f(x) = a·x² + b·x + c sobre el intervalo [x₁, x₂]: ¿es inyectiva? ¿cuál es su recorrido?',
    f: [['a', 'a', 1], ['b', 'b', -2], ['c', 'c', 0], ['x1', 'x₁', -1], ['x2', 'x₂', 3]],
    run: function (v) {
      var a = v.a, b = v.b, c = v.c, x1 = v.x1, x2 = v.x2, st = [];
      if (x1 >= x2) return { err: 'Debe cumplirse x₁ < x₂.' };
      var fn = function (x) { return a * x * x + b * x + c; }, inj, vals = [fn(x1), fn(x2)], xv = null, rec;
      if (a === 0) { inj = b !== 0; st.push('Es una función lineal ' + (inj ? 'con pendiente ' + m('b ≠ 0') + ': siempre monótona → inyectiva.' : 'constante: todos los x dan el mismo y → no inyectiva.')); }
      else { xv = -b / (2 * a); st.push('Vértice en ' + m('x = −b/2a = ' + frac(xv)) + ', con ' + m('f(' + frac(xv) + ') = ' + frac(fn(xv))) + '.');
        if (xv > x1 && xv < x2) { inj = false; vals.push(fn(xv)); st.push('El vértice está <strong>dentro</strong> del intervalo: la función sube y baja → una recta horizontal puede cortarla dos veces → <strong>no inyectiva</strong>.'); }
        else { inj = true; st.push('El vértice queda fuera del intervalo abierto: la función es estrictamente monótona → <strong>inyectiva</strong> en [' + f(x1) + ', ' + f(x2) + '].'); } }
      var mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals); rec = '[' + f(mn, 3) + ', ' + f(mx, 3) + ']';
      st.push('Recorrido en el intervalo: ' + m(rec) + '. (Sobreyectiva sobre ℝ solo si el recorrido fuera todo ℝ; una parábola nunca lo es.)');
      var pts = [], segs = [];
      if (a !== 0 && !inj) { var dl = Math.min(xv - x1, x2 - xv) * 0.8, ya = fn(xv - dl); st.push('Ejemplo: ' + m('f(' + f(xv - dl, 3) + ') = f(' + f(xv + dl, 3) + ') = ' + f(ya, 3))) + '.'; segs.push({ p: [[x1 - 1, ya], [x2 + 1, ya]], c: 3, dash: 1 }); pts.push({ x: xv - dl, y: ya, c: 3 }, { x: xv + dl, y: ya, c: 3 }); }
      var lo = x1 - 1.5, hi = x2 + 1.5;
      return { steps: st, res: inj ? 'Sí es <strong>inyectiva</strong> en [' + f(x1) + ', ' + f(x2) + '] · recorrido ' + m(rec) : 'No es inyectiva en ese intervalo · recorrido ' + m(rec) + '. Restringe el dominio para invertirla.',
        plot: plot({ x: [lo, hi], y: yfit(fn, lo, hi), curves: [{ f: fn, c: 1 }], fill: [[x1, x2]], segs: segs, pts: pts }) };
    }
  };

  CALCS.inversa = {
    t: 'Función inversa de una racional', d: 'f(x) = (a·x + b)/(c·x + d): encuentra f⁻¹, dominios y comprueba la composición.',
    f: [['a', 'a', 2], ['b', 'b', 1], ['c', 'c', 1], ['d', 'd', -3], ['x0', 'x₀', 5]],
    run: function (v) {
      var a = v.a, b = v.b, c = v.c, d = v.d, x0 = v.x0, st = [], det = a * d - b * c;
      if (Math.abs(det) < 1e-12) return { err: 'ad − bc = 0: la función es constante y no tiene inversa.' };
      st.push('Condición de inversa: ' + m('ad − bc = ' + f(det) + ' ≠ 0') + ' ✓.');
      st.push('Escribe ' + m('y = (' + f(a) + 'x ' + sgn(b) + ')/(' + f(c) + 'x ' + sgn(d) + ')') + ', intercambia x ↔ y y despeja.');
      st.push('Inversa: ' + m('f⁻¹(x) = (' + f(d) + 'x ' + sgn(-b) + ')/(' + f(-c) + 'x ' + sgn(a) + ')') + '.');
      var dom = c !== 0 ? 'x ≠ ' + frac(-d / c) : 'ℝ', ran = c !== 0 ? 'y ≠ ' + frac(a / c) : 'ℝ';
      st.push('Dominio de f: ' + m(dom) + '; recorrido de f: ' + m(ran) + ' (que es el dominio de f⁻¹).');
      var F = function (x) { return (a * x + b) / (c * x + d); }, G = function (x) { return (d * x - b) / (-c * x + a); }, lines = '';
      if (c === 0 || Math.abs(c * x0 + d) > 1e-12) { var y0 = F(x0); lines = 'Comprobación: ' + m('f(' + f(x0) + ') = ' + frac(y0)) + ' y ' + m('f⁻¹(' + frac(y0) + ') = ' + frac(G(y0))) + (Math.abs(G(y0) - x0) < 1e-7 ? ' ✓ regresa a ' + m(f(x0)) + '.' : '.'); }
      else lines = 'x₀ está fuera del dominio de f.';
      st.push(lines);
      return { steps: st, res: 'Inversa: ' + m('f⁻¹(x) = (' + f(d) + 'x ' + sgn(-b) + ')/(' + f(-c) + 'x ' + sgn(a) + ')'),
        plot: plot({ x: [-8, 8], y: [-8, 8], eq: true, curves: [{ f: F, c: 1 }, { f: G, c: 2 }, { f: function (x) { return x; }, c: 3, dash: 1 }] }) };
    }
  };

  CALCS.logaritmo = {
    t: 'Logaritmos', d: 'log<sub>b</sub>(x) con cambio de base, forma exponencial y gráfica.',
    f: [['b', 'Base b', 2], ['x', 'Argumento x', 32]],
    run: function (v) {
      var b = v.b, x = v.x, st = [];
      if (b <= 0 || b === 1) return { err: 'La base debe ser positiva y distinta de 1.' };
      if (x <= 0) return { err: 'El argumento debe ser positivo.' };
      var y = Math.log(x) / Math.log(b);
      st.push('Definición: ' + m('log<sub>' + f(b) + '</sub>(' + f(x) + ') = y ⇔ ' + f(b) + '<sup>y</sup> = ' + f(x)) + '.');
      st.push('Cambio de base: ' + m('y = ln(' + f(x) + ')/ln(' + f(b) + ') = ' + f(Math.log(x), 5) + '/' + f(Math.log(b), 5) + ' ≈ ' + f(y, 5)) + '.');
      st.push('También con base 10: ' + m('log(' + f(x) + ')/log(' + f(b) + ') ≈ ' + f(y, 5)) + '. Comprobación: ' + m(f(b) + '<sup>' + f(y, 5) + '</sup> ≈ ' + f(Math.pow(b, y), 4)) + '.');
      st.push('Propiedades útiles: ' + m('log<sub>b</sub>(xy) = log<sub>b</sub>x + log<sub>b</sub>y') + ', ' + m('log<sub>b</sub>(x/y) = log<sub>b</sub>x − log<sub>b</sub>y') + ', ' + m('log<sub>b</sub>(x<sup>n</sup>) = n·log<sub>b</sub>x') + '.');
      var fn = function (t) { return t > 0 ? Math.log(t) / Math.log(b) : NaN; }, hi = Math.max(x * 1.3, 4);
      return { steps: st, res: m('log<sub>' + f(b) + '</sub>(' + f(x) + ') ≈ ' + f(y, 5)), plot: plot({ x: [-0.3, hi], y: [Math.min(-2, y - 2), Math.max(3, y + 2)], curves: [{ f: fn, c: 1 }], pts: [{ x: x, y: y, l: f(y, 2) }, { x: 1, y: 0, c: 3 }] }) };
    }
  };

  function solveTri(a, b, c) {
    var A = Math.acos((b * b + c * c - a * a) / (2 * b * c)) / DEG, B = Math.acos((a * a + c * c - b * b) / (2 * a * c)) / DEG;
    return { a: a, b: b, c: c, A: A, B: B, C: 180 - A - B };
  }
  function triSvg(T) {
    var Ax = 0, Ay = 0, Bx = T.c, By = 0, Cx = T.b * Math.cos(T.A * DEG), Cy = T.b * Math.sin(T.A * DEG);
    var W = window2([Ax, Bx, Cx], [Ay, By, Cy], 0.25), poly = [[Ax, Ay], [Bx, By], [Cx, Cy], [Ax, Ay]];
    return plot({ x: W.x, y: [Math.min(W.y[0], -0.2 * Cy), W.y[1]], eq: true, curves: [{ pts: poly, c: 1 }], pts: [{ x: Ax, y: Ay, l: 'A', c: 2 }, { x: Bx, y: By, l: 'B', c: 2 }, { x: Cx, y: Cy, l: 'C', c: 2 }] });
  }
  CALCS.triangulo = {
    t: 'Resolver triángulos', d: 'Ley de senos y de cosenos. Elige qué datos conoces (ángulos en grados).',
    f: [['modo', 'Datos', 'lll', [['lll', 'Tres lados (a, b, c)'], ['lal', 'Dos lados y el ángulo entre ellos (a, b, C)'], ['aal', 'Dos ángulos y un lado (A, B, a)'], ['ssa', 'Dos lados y ángulo opuesto (a, b, A)']]], ['a', 'a', 5], ['b', 'b', 6], ['c', 'c', 7], ['A', 'A°', 50], ['B', 'B°', 60], ['C', 'C°', 70]],
    run: function (v) {
      var st = [], sols = [], md = v.modo, a = v.a, b = v.b, c = v.c, A = v.A, B = v.B, C = v.C, T;
      if (md === 'lll') {
        if (a + b <= c || a + c <= b || b + c <= a) return { err: 'No cumple la desigualdad triangular (cada lado debe ser menor que la suma de los otros dos).' };
        st.push('Ley de cosenos: ' + m('cos A = (b² + c² − a²)/(2bc)') + ' y ' + m('cos B = (a² + c² − b²)/(2ac)') + '.'); sols.push(solveTri(a, b, c));
      } else if (md === 'lal') {
        if (C <= 0 || C >= 180) return { err: 'C debe estar entre 0° y 180°.' };
        var cc = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C * DEG));
        st.push('Lado faltante (cosenos): ' + m('c² = a² + b² − 2ab·cos C = ' + f(cc * cc, 4)) + ' → ' + m('c ≈ ' + f(cc, 4)) + '.'); sols.push(solveTri(a, b, cc));
      } else if (md === 'aal') {
        if (A <= 0 || B <= 0 || A + B >= 180) return { err: 'A + B debe ser menor que 180°.' };
        var C2 = 180 - A - B, b2 = a * Math.sin(B * DEG) / Math.sin(A * DEG), c2 = a * Math.sin(C2 * DEG) / Math.sin(A * DEG);
        st.push('Tercer ángulo: ' + m('C = 180° − A − B = ' + f(C2, 3) + '°') + '. Ley de senos: ' + m('b = a·sen B/sen A ≈ ' + f(b2, 4)) + ', ' + m('c = a·sen C/sen A ≈ ' + f(c2, 4)) + '.'); sols.push({ a: a, b: b2, c: c2, A: A, B: B, C: C2 });
      } else {
        if (A <= 0 || A >= 180) return { err: 'A debe estar entre 0° y 180°.' };
        var sB = b * Math.sin(A * DEG) / a; st.push('Ley de senos: ' + m('sen B = b·sen A/a = ' + f(sB, 5)) + '.');
        if (sB > 1 + 1e-12) st.push('Como ' + m('sen B &gt; 1') + ' no existe triángulo.');
        else {
          var B1 = Math.asin(Math.min(1, sB)) / DEG, B2 = 180 - B1;
          [B1, B2].forEach(function (Bx, i) { if (i === 1 && (Math.abs(B1 - 90) < 1e-9 || A + Bx >= 180 - 1e-9)) return;
            if (A + Bx < 180) { var Cx = 180 - A - Bx, cx = a * Math.sin(Cx * DEG) / Math.sin(A * DEG); sols.push({ a: a, b: b, c: cx, A: A, B: Bx, C: Cx }); } });
          st.push(sols.length === 2 ? 'Caso ambiguo: hay <strong>dos triángulos</strong> (B y su suplemento).' : sols.length === 1 ? 'Hay un único triángulo.' : 'Ningún ángulo B es compatible.');
        }
      }
      if (!sols.length) return { steps: st, res: 'No existe un triángulo con esos datos.', plot: null };
      sols.forEach(function (S, i) { T = S; st.push((sols.length > 1 ? 'Triángulo ' + (i + 1) + ': ' : 'Solución: ') + m('a=' + f(S.a, 3) + ', b=' + f(S.b, 3) + ', c=' + f(S.c, 3) + ', A=' + f(S.A, 2) + '°, B=' + f(S.B, 2) + '°, C=' + f(S.C, 2) + '°') + '; área ' + m('½ab·sen C ≈ ' + f(0.5 * S.a * S.b * Math.sin(S.C * DEG), 3)) + '.'); });
      var S1 = sols[0];
      return { steps: st, res: 'Lados ' + m('a=' + f(S1.a, 3) + ', b=' + f(S1.b, 3) + ', c=' + f(S1.c, 3)) + ' · ángulos ' + m('A=' + f(S1.A, 2) + '°, B=' + f(S1.B, 2) + '°, C=' + f(S1.C, 2) + '°') + (sols.length > 1 ? ' (y una segunda solución)' : ''), plot: triSvg(S1) };
    }
  };

  CALCS.aritmetica = {
    t: 'Sucesión aritmética', d: 'aₙ = a₁ + (n−1)d y la suma de los primeros n términos.',
    f: [['a1', 'a₁', 3], ['d', 'd', 4], ['n', 'n', 12]],
    run: function (v) {
      var a1 = v.a1, d = v.d, n = Math.round(v.n), st = []; if (n < 1) return { err: 'n debe ser un entero positivo.' };
      var an = a1 + (n - 1) * d, S = n * (a1 + an) / 2, ts = [], i;
      for (i = 1; i <= Math.min(n, 8); i++) ts.push(f(a1 + (i - 1) * d));
      st.push('Primeros términos: ' + m(ts.join(', ') + (n > 8 ? ', …' : '')) + '.');
      st.push('Término general: ' + m('aₙ = ' + f(a1) + ' + (n − 1)·' + (d < 0 ? '(' + f(d) + ')' : f(d)) + ' = ' + f(d) + 'n ' + sgn(a1 - d)) + '.');
      st.push('Término ' + n + ': ' + m('a<sub>' + n + '</sub> = ' + f(an)) + '.');
      st.push('Suma: ' + m('Sₙ = n(a₁ + aₙ)/2 = ' + n + '(' + f(a1) + ' + ' + (an < 0 ? '(' + f(an) + ')' : f(an)) + ')/2 = ' + f(S)) + '.');
      var pts = []; for (i = 1; i <= Math.min(n, 20); i++) pts.push({ x: i, y: a1 + (i - 1) * d, c: 1 });
      var W = window2([0, Math.min(n, 20) + 1], pts.map(function (p) { return p.y; }).concat([0]), 0.2);
      return { steps: st, res: m('a<sub>' + n + '</sub> = ' + f(an) + ' · S<sub>' + n + '</sub> = ' + f(S)), plot: plot({ x: [0, Math.min(n, 20) + 1], y: W.y, pts: pts, curves: [{ pts: pts.map(function (p) { return [p.x, p.y]; }), c: 3, dash: 1 }] }) };
    }
  };

  CALCS.geometrica = {
    t: 'Sucesión geométrica', d: 'aₙ = a₁·rⁿ⁻¹, suma finita y suma infinita (si |r| < 1).',
    f: [['a1', 'a₁', 2], ['r', 'r', 3], ['n', 'n', 6]],
    run: function (v) {
      var a1 = v.a1, r = v.r, n = Math.round(v.n), st = [], i; if (n < 1) return { err: 'n debe ser un entero positivo.' };
      var an = a1 * Math.pow(r, n - 1), S = r === 1 ? n * a1 : a1 * (Math.pow(r, n) - 1) / (r - 1), ts = [];
      for (i = 0; i < Math.min(n, 7); i++) ts.push(f(a1 * Math.pow(r, i), 4));
      st.push('Primeros términos: ' + m(ts.join(', ') + (n > 7 ? ', …' : '')) + '.');
      st.push('Término ' + n + ': ' + m('a<sub>' + n + '</sub> = ' + f(a1) + '·' + (r < 0 ? '(' + f(r) + ')' : f(r)) + '<sup>' + (n - 1) + '</sup> = ' + f(an, 4)) + '.');
      st.push('Suma finita: ' + (r === 1 ? m('Sₙ = n·a₁ = ' + f(S)) : m('Sₙ = a₁(rⁿ − 1)/(r − 1) = ' + f(S, 4))) + '.');
      var inf = Math.abs(r) < 1; st.push(inf ? 'Como ' + m('|r| &lt; 1') + ' la serie converge: ' + m('S∞ = a₁/(1 − r) = ' + f(a1 / (1 - r), 4)) + '.' : 'Como ' + m('|r| ≥ 1') + ' la serie infinita no converge.');
      var pts = []; for (i = 1; i <= Math.min(n, 14); i++) pts.push({ x: i, y: a1 * Math.pow(r, i - 1) });
      var ys = pts.map(function (p) { return p.y; }).concat([0]);
      return { steps: st, res: m('a<sub>' + n + '</sub> = ' + f(an, 4) + ' · S<sub>' + n + '</sub> = ' + f(S, 4)) + (inf ? ' · ' + m('S∞ = ' + f(a1 / (1 - r), 4)) : ''),
        plot: plot({ x: [0, Math.min(n, 14) + 1], y: [Math.min.apply(null, ys) - 0.1 * Math.abs(Math.min.apply(null, ys)) - 0.5, Math.max.apply(null, ys) * 1.1 + 0.5], pts: pts, curves: [{ pts: pts.map(function (p) { return [p.x, p.y]; }), c: 3, dash: 1 }] }) };
    }
  };

  function parseSet(s) { var out = []; String(s).split(/[,;\s]+/).forEach(function (t) { t = t.trim(); if (t && out.indexOf(t) === -1) out.push(t); }); return out; }
  CALCS.conjuntos = {
    t: 'Operaciones con conjuntos', d: 'Escribe los elementos separados por comas. Calcula unión, intersección, diferencias y complemento (con diagrama de Venn).',
    f: [['A', 'Conjunto A', '1, 2, 3, 4, 5', null, 'text'], ['B', 'Conjunto B', '4, 5, 6, 7', null, 'text'], ['U', 'Universo U (opcional)', '', null, 'text']],
    run: function (v) {
      var A = parseSet(v.A), B = parseSet(v.B), U = parseSet(v.U), st = [];
      var uni = A.concat(B.filter(function (x) { return A.indexOf(x) < 0; })), inter = A.filter(function (x) { return B.indexOf(x) >= 0; });
      var AB = A.filter(function (x) { return B.indexOf(x) < 0; }), BA = B.filter(function (x) { return A.indexOf(x) < 0; });
      if (!U.length) U = uni.slice(); else uni.forEach(function (x) { if (U.indexOf(x) < 0) U.push(x); });
      var S = function (a) { return '{' + (a.join(', ') || '∅') + '}'; };
      st.push(m('A ∪ B = ' + S(uni)) + ' (todos los elementos de A o B, sin repetir).');
      st.push(m('A ∩ B = ' + S(inter)) + ' (elementos en ambos).');
      st.push(m('A − B = ' + S(AB)) + ' y ' + m('B − A = ' + S(BA)) + '.');
      st.push('Complementos en U: ' + m('A′ = ' + S(U.filter(function (x) { return A.indexOf(x) < 0; }))) + ', ' + m('B′ = ' + S(U.filter(function (x) { return B.indexOf(x) < 0; }))) + '.');
      st.push('Cardinalidad: ' + m('|A ∪ B| = |A| + |B| − |A ∩ B| = ' + A.length + ' + ' + B.length + ' − ' + inter.length + ' = ' + uni.length) + '.');
      var t = function (arr, x, y) { var s = arr.slice(0, 6).join(', ') + (arr.length > 6 ? '…' : ''); return '<text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="12" font-weight="600" fill="var(--foreground)">' + esc(s) + '</text>'; };
      var svg = '<svg viewBox="0 0 460 260" class="s2-svg" role="img" aria-label="Diagrama de Venn"><rect x="6" y="6" width="448" height="248" rx="14" fill="none" stroke="var(--line)"/><text x="18" y="26" font-size="12" fill="var(--plot-axis)">U</text>' +
        '<circle cx="180" cy="135" r="88" fill="var(--plot-1)" opacity=".22" stroke="var(--plot-1)" stroke-width="2.5" class="s2-draw"/><circle cx="280" cy="135" r="88" fill="var(--plot-2)" opacity=".22" stroke="var(--plot-2)" stroke-width="2.5" class="s2-draw"/>' +
        '<text x="120" y="52" font-size="15" font-weight="800" fill="var(--plot-1)">A</text><text x="334" y="52" font-size="15" font-weight="800" fill="var(--plot-2)">B</text>' + t(AB, 140, 138) + t(inter, 230, 138) + t(BA, 322, 138) + '</svg>';
      return { steps: st, res: m('A ∪ B = ' + S(uni)) + ' · ' + m('A ∩ B = ' + S(inter)), plot: svg };
    }
  };

  CALCS.conteo = {
    t: 'Conteo y permutaciones', d: 'n! , permutaciones P(n, r), variaciones con repetición y permutaciones circulares.',
    f: [['n', 'n', 8], ['r', 'r', 3]],
    run: function (v) {
      var n = v.n, r = v.r, st = [];
      if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0) return { err: 'n y r deben ser enteros no negativos.' };
      if (n > 60) return { err: 'Usa n ≤ 60 para ver los valores completos.' };
      var N = BigInt(n), R = BigInt(r);
      st.push('Factorial: ' + m(n + '! = ' + big(factB(N))) + '.');
      var res = m(n + '! = ' + big(factB(N)));
      if (r <= n) { var P = permB(N, R); st.push('Permutaciones (orden importa, sin repetir): ' + m('P(n, r) = n!/(n − r)! = ' + big(P))) + '.'; res += ' · ' + m('P(' + n + ', ' + r + ') = ' + big(P)); }
      else st.push('Como ' + m('r &gt; n') + ' no se pueden ordenar r elementos distintos sin repetir.');
      st.push('Variaciones con repetición: ' + m('nʳ = ' + n + '<sup>' + r + '</sup> = ' + big(N ** R)) + '.');
      if (n >= 1) st.push('Permutaciones circulares de n elementos: ' + m('(n − 1)! = ' + big(factB(N - 1n))) + '.');
      var items = [{ l: 'n!', v: Math.log10(Number(factB(N)) || 1) + 0.0001, c: 1 }, { l: 'nʳ', v: Math.log10(Number(N ** R) || 1) + 0.0001, c: 2 }];
      if (r <= n) items.splice(1, 0, { l: 'P(n, r)', v: Math.log10(Number(permB(N, R)) || 1) + 0.0001, c: 3 });
      return { steps: st, res: res, plot: bars(items, null, function (x) { return '10^' + f(x, 1); }), note: 'Longitud de barra = exponente de 10 (cantidad de cifras), para comparar magnitudes enormes.' };
    }
  };

  CALCS.combinaciones = {
    t: 'Combinaciones', d: 'C(n, r): subconjuntos sin importar el orden, combinaciones con repetición y fila del triángulo de Pascal.',
    f: [['n', 'n', 10], ['r', 'r', 3]],
    run: function (v) {
      var n = v.n, r = v.r, st = [];
      if (!Number.isInteger(n) || !Number.isInteger(r) || n < 0 || r < 0) return { err: 'n y r deben ser enteros no negativos.' };
      if (n > 40) return { err: 'Usa n ≤ 40.' };
      var N = BigInt(n), R = BigInt(r);
      st.push('Fórmula: ' + m('C(n, r) = n!/(r!(n − r)!)') + '.');
      var C = combB(N, R);
      st.push(r <= n ? m('C(' + n + ', ' + r + ') = ' + big(C)) + ' (equivale a ' + m('P(n, r)/r!') + '). Simetría: ' + m('C(n, r) = C(n, n − r) = C(' + n + ', ' + (n - r) + ')') + '.' : 'Como ' + m('r &gt; n') + ', ' + m('C(n, r) = 0') + '.');
      st.push('Con repetición: ' + m('C(n + r − 1, r) = C(' + (n + r - 1) + ', ' + r + ') = ' + big(combB(N + R - 1n, R))) + '.');
      var row = []; for (var i = 0; i <= n; i++) row.push(Number(combB(N, BigInt(i))));
      st.push('Fila ' + n + ' del triángulo de Pascal: ' + m(row.join(', ')) + '. Su suma es ' + m('2<sup>n</sup> = ' + big(2n ** N)) + '.');
      var mx = Math.max.apply(null, row), W = 460, H = 200, bw = (W - 20) / row.length, g = '';
      row.forEach(function (x, i) { var h = (H - 50) * x / mx; g += '<rect x="' + (10 + i * bw + 1) + '" y="' + (H - 24 - h) + '" width="' + (bw - 2) + '" height="' + h + '" rx="3" fill="' + (i === r ? 'var(--plot-2)' : 'var(--plot-1)') + '" opacity="' + (i === r ? 1 : .7) + '" class="s2-bar"/><text x="' + (10 + i * bw + bw / 2) + '" y="' + (H - 8) + '" font-size="' + (n > 20 ? 7 : 10) + '" text-anchor="middle" fill="var(--plot-axis)">' + i + '</text>'; });
      return { steps: st, res: r <= n ? m('C(' + n + ', ' + r + ') = ' + big(C)) : m('C(' + n + ', ' + r + ') = 0'), plot: '<svg viewBox="0 0 ' + W + ' ' + H + '" class="s2-svg" role="img" aria-label="Fila de Pascal">' + g + '</svg>' };
    }
  };

  CALCS['prob-clasica'] = {
    t: 'Probabilidad clásica', d: 'P(A) = casos favorables / casos posibles, con complemento, cuotas y una simulación para ver la ley de los grandes números.',
    f: [['fav', 'Casos favorables', 4], ['tot', 'Casos posibles', 52], ['n', 'Simulaciones', 1000]],
    run: function (v) {
      var fav = v.fav, tot = v.tot, n = Math.min(Math.round(v.n), 200000), st = [];
      if (tot <= 0 || fav < 0 || fav > tot) return { err: 'Debe cumplirse 0 ≤ favorables ≤ posibles y posibles > 0.' };
      var p = fav / tot;
      st.push('Regla de Laplace: ' + m('P(A) = ' + f(fav, 0) + '/' + f(tot, 0) + ' = ' + frac(p) + ' ≈ ' + f(p, 5) + ' = ' + f(p * 100, 3) + '%') + '.');
      st.push('Complemento: ' + m('P(A′) = 1 − P(A) = ' + frac(1 - p) + ' ≈ ' + f(1 - p, 5)) + '. Cuota a favor: ' + m(f(fav, 0) + ' : ' + f(tot - fav, 0)) + '.');
      var hits = 0; for (var i = 0; i < n; i++) if (Math.random() < p) hits++;
      st.push('Simulación de ' + n + ' ensayos: ocurrió ' + hits + ' veces → frecuencia relativa ' + m(f(hits / n, 4)) + '. Se acerca a ' + m(f(p, 4)) + ' cuando n crece.');
      return { steps: st, res: m('P(A) = ' + frac(p) + ' ≈ ' + f(p * 100, 2) + '%'), plot: bars([{ l: 'Teórica P(A)', v: p, c: 1 }, { l: 'Simulada', v: hits / n, c: 2 }, { l: 'Complemento', v: 1 - p, c: 3 }], 1, function (x) { return f(x * 100, 2) + '%'; }) };
    }
  };

  function pnum(x) { return x; }
  CALCS['prob-cond'] = {
    t: 'Probabilidad condicional', d: 'Con P(A), P(B) y P(A ∩ B) calcula P(A|B), P(B|A), la unión y comprueba independencia. Puedes escribir 0.3, 3/10 o 30%.',
    f: [['pA', 'P(A)', 0.5], ['pB', 'P(B)', 0.4], ['pAB', 'P(A ∩ B)', 0.2]],
    run: function (v) {
      var pA = pnum(v.pA), pB = v.pB, pAB = v.pAB, st = [];
      if ([pA, pB, pAB].some(function (x) { return x < 0 || x > 1; })) return { err: 'Las probabilidades deben estar entre 0 y 1.' };
      if (pAB > Math.min(pA, pB) + 1e-12) return { err: 'P(A ∩ B) no puede superar a P(A) ni a P(B).' };
      var un = pA + pB - pAB; if (un > 1 + 1e-12) return { err: 'Con esos datos P(A ∪ B) &gt; 1: datos incoherentes.' };
      st.push('Unión: ' + m('P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = ' + f(un, 5)) + '.');
      var r = [];
      if (pB > 0) { st.push(m('P(A|B) = P(A ∩ B)/P(B) = ' + f(pAB, 5) + '/' + f(pB, 5) + ' = ' + frac(pAB / pB) + ' ≈ ' + f(pAB / pB, 5))); r.push(m('P(A|B) ≈ ' + f(pAB / pB, 4))); }
      if (pA > 0) { st.push(m('P(B|A) = P(A ∩ B)/P(A) = ' + f(pAB, 5) + '/' + f(pA, 5) + ' = ' + frac(pAB / pA) + ' ≈ ' + f(pAB / pA, 5))); r.push(m('P(B|A) ≈ ' + f(pAB / pA, 4))); }
      var ind = Math.abs(pAB - pA * pB) < 1e-9;
      st.push('Independencia: ' + m('P(A)·P(B) = ' + f(pA * pB, 5)) + (ind ? ' = ' + m('P(A ∩ B)') + ' → <strong>A y B son independientes</strong>.' : ' ≠ ' + m('P(A ∩ B) = ' + f(pAB, 5)) + ' → <strong>son dependientes</strong>.'));
      return { steps: st, res: r.join(' · ') + ' · ' + (ind ? 'independientes' : 'dependientes'), plot: bars([{ l: 'A ∩ B', v: pAB, c: 1 }, { l: 'Solo A', v: pA - pAB, c: 2 }, { l: 'Solo B', v: pB - pAB, c: 3 }, { l: 'Ninguno', v: Math.max(0, 1 - un), c: 4 }], 1, function (x) { return f(x, 3); }) };
    }
  };

  CALCS.bayes = {
    t: 'Teorema de Bayes', d: 'P(A|B) = P(B|A)·P(A) / P(B). Ejemplo típico: prueba médica. Escribe 0.02, 2/100 o 2%.',
    f: [['pA', 'P(A) (prevalencia)', 0.02], ['pBA', 'P(B|A) (sensibilidad)', 0.95], ['pBnA', 'P(B|A′) (falsos positivos)', 0.05]],
    run: function (v) {
      var pA = v.pA, a = v.pBA, b = v.pBnA, st = [];
      if ([pA, a, b].some(function (x) { return x < 0 || x > 1; })) return { err: 'Las probabilidades deben estar entre 0 y 1.' };
      var pB = pA * a + (1 - pA) * b; if (pB === 0) return { err: 'P(B) = 0: no se puede condicionar.' };
      st.push('Probabilidad total: ' + m('P(B) = P(A)·P(B|A) + P(A′)·P(B|A′) = ' + f(pA, 5) + '·' + f(a, 5) + ' + ' + f(1 - pA, 5) + '·' + f(b, 5) + ' = ' + f(pB, 6)) + '.');
      var post = pA * a / pB;
      st.push('Bayes: ' + m('P(A|B) = P(A)·P(B|A)/P(B) = ' + f(pA * a, 6) + '/' + f(pB, 6) + ' = ' + f(post, 5)) + ' ≈ <strong>' + f(post * 100, 2) + '%</strong>.');
      var N = 10000, tp = Math.round(N * pA * a), fp = Math.round(N * (1 - pA) * b);
      st.push('En frecuencias naturales (de ' + N + ' personas): ' + tp + ' verdaderos positivos y ' + fp + ' falsos positivos → de ' + (tp + fp) + ' positivos, solo ' + tp + ' están realmente en A.');
      return { steps: st, res: m('P(A|B) ≈ ' + f(post, 4)) + ' (' + f(post * 100, 2) + '%)', plot: bars([{ l: 'Antes P(A)', v: pA, c: 1 }, { l: 'Después P(A|B)', v: post, c: 2 }, { l: 'P(B) total', v: pB, c: 3 }], 1, function (x) { return f(x * 100, 2) + '%'; }) };
    }
  };

  /* ---------- gráficos interactivos: deslizadores [clave, etiqueta, mín, máx, paso] ---------- */
  var EXP = {
    bicuadratica: [['a', 'a', 0.5, 3, 0.5], ['b', 'b', -10, 10, 1], ['c', 'c', -12, 12, 1]],
    radical: [['a', 'a', 1, 5, 1], ['b', 'b', -5, 10, 1], ['c', 'c', -2, 3, 0.5], ['d', 'd', -5, 5, 1]],
    'sistema-lc': [['m', 'm (pendiente)', -4, 4, 0.5], ['n', 'n (ordenada)', -4, 6, 0.5], ['a', 'a', -2, 2, 0.5], ['b', 'b', -4, 4, 0.5], ['c', 'c', -4, 4, 0.5]],
    recta: [['x1', 'x₁', -8, 8, 1], ['y1', 'y₁', -8, 8, 1], ['x2', 'x₂', -8, 8, 1], ['y2', 'y₂', -8, 8, 1]],
    'recta-pos': [['a1', 'a₁', -5, 5, 1], ['b1', 'b₁', -5, 5, 1], ['c1', 'c₁', -10, 10, 1], ['a2', 'a₂', -5, 5, 1], ['b2', 'b₂', -5, 5, 1], ['c2', 'c₂', -10, 10, 1]],
    'angulo-rectas': [['m1', 'm₁', -5, 5, 0.25], ['m2', 'm₂', -5, 5, 0.25]],
    parabola: [['h', 'h', -5, 5, 0.5], ['k', 'k', -5, 5, 0.5], ['p', 'p', -4, 4, 0.5], ['o']],
    circunferencia: [['D', 'D', -12, 12, 1], ['E', 'E', -12, 12, 1], ['F', 'F', -20, 10, 1]],
    elipse: [['h', 'h', -4, 4, 0.5], ['k', 'k', -4, 4, 0.5], ['a', 'a (semieje x)', 1, 8, 0.5], ['b', 'b (semieje y)', 1, 8, 0.5]],
    hiperbola: [['h', 'h', -4, 4, 0.5], ['k', 'k', -4, 4, 0.5], ['a', 'a', 1, 6, 0.5], ['b', 'b', 1, 6, 0.5], ['o']],
    potencias: [['a', 'Base a', 1, 30, 1], ['p', 'Numerador p', 1, 6, 1], ['q', 'Denominador q', 1, 5, 1]],
    exponencial: [['C', 'C', 10, 300, 10], ['a', 'Base a', 0.2, 3, 0.1], ['x', 'x', -3, 8, 0.5], ['y', 'Meta y', 10, 2000, 10]],
    inyectiva: [['a', 'a', -3, 3, 0.5], ['b', 'b', -6, 6, 1], ['c', 'c', -6, 6, 1], ['x1', 'x₁', -6, 2, 1], ['x2', 'x₂', -2, 8, 1]],
    inversa: [['a', 'a', -5, 5, 1], ['b', 'b', -5, 5, 1], ['c', 'c', -5, 5, 1], ['d', 'd', -5, 5, 1], ['x0', 'x₀', -8, 8, 1]],
    logaritmo: [['b', 'Base b', 0.2, 10, 0.1], ['x', 'Argumento x', 0.1, 100, 0.1]],
    triangulo: [['modo'], ['a', 'a', 1, 12, 0.5], ['b', 'b', 1, 12, 0.5], ['c', 'c', 1, 12, 0.5], ['A', 'A°', 10, 120, 1], ['B', 'B°', 10, 120, 1], ['C', 'C°', 10, 120, 1]],
    aritmetica: [['a1', 'a₁', -10, 20, 1], ['d', 'd', -8, 10, 1], ['n', 'n', 1, 30, 1]],
    geometrica: [['a1', 'a₁', 1, 10, 1], ['r', 'r', -2, 3, 0.1], ['n', 'n', 1, 14, 1]],
    conjuntos: [['A'], ['B'], ['U']],
    conteo: [['n', 'n', 0, 20, 1], ['r', 'r', 0, 20, 1]],
    combinaciones: [['n', 'n', 0, 30, 1], ['r', 'r', 0, 30, 1]],
    'prob-clasica': [['fav', 'Favorables', 0, 100, 1], ['tot', 'Posibles', 1, 100, 1], ['n', 'Simulaciones', 100, 10000, 100]],
    'prob-cond': [['pA', 'P(A)', 0, 1, 0.05], ['pB', 'P(B)', 0, 1, 0.05], ['pAB', 'P(A ∩ B)', 0, 1, 0.05]],
    bayes: [['pA', 'P(A)', 0, 1, 0.01], ['pBA', 'P(B|A)', 0, 1, 0.01], ['pBnA', 'P(B|A′)', 0, 1, 0.01]]
  };

  global.S2Calc = { CALCS: CALCS, EXP: EXP, plot: plot, bars: bars, f: f };
})(window);

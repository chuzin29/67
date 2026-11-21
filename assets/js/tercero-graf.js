/* tercero-graf.js — Gráficos interactivos de 3.er año (SVG puro, sin librerías).
   T3Graf.draw(clave, v) → { svg, nota } ; la clave es la misma de T3Calc.CALCS. */
(function (global) {
  'use strict';
  var W = 640, H = 360, PAD = 34;
  var COL = { a: 'hsl(var(--primary))', b: 'hsl(var(--success))', c: 'hsl(25 90% 48%)', d: 'hsl(340 70% 48%)', g: 'hsl(var(--muted-foreground))' };
  function n2(x, d) { var k = Math.pow(10, d == null ? 3 : d), s = String(Math.round(x * k) / k); return s.replace('-', '−'); }
  function nice(lo, hi) { if (!(hi > lo)) { hi = lo + 1; } var p = hi - lo, m = Math.pow(10, Math.floor(Math.log(p / 6) / Math.LN10)), r = p / 6 / m, s = r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10; return s * m; }

  /* Lienzo con ejes y utilidades de dibujo */
  function Plot(xr, yr, o) {
    o = o || {};
    var P = this; P.xr = xr; P.yr = yr; P.out = []; P.eq = !!o.eq;
    if (P.eq) { // misma escala en x e y (vectores, círculos)
      var sx = (W - 2 * PAD) / (xr[1] - xr[0]), sy = (H - 2 * PAD) / (yr[1] - yr[0]), s = Math.min(sx, sy);
      var cx = (xr[0] + xr[1]) / 2, cy = (yr[0] + yr[1]) / 2, hw = (W - 2 * PAD) / 2 / s, hh = (H - 2 * PAD) / 2 / s;
      P.xr = [cx - hw, cx + hw]; P.yr = [cy - hh, cy + hh];
    }
    P.X = function (x) { return PAD + (x - P.xr[0]) / (P.xr[1] - P.xr[0]) * (W - 2 * PAD); };
    P.Y = function (y) { return H - PAD - (y - P.yr[0]) / (P.yr[1] - P.yr[0]) * (H - 2 * PAD); };
    if (!o.noaxes) P.axes(o);
  }
  var PR = Plot.prototype;
  PR.axes = function (o) {
    var P = this, o2 = o || {}, sx = nice(P.xr[0], P.xr[1]), sy = nice(P.yr[0], P.yr[1]), t, h = '';
    for (t = Math.ceil(P.xr[0] / sx) * sx; t <= P.xr[1] + 1e-9; t += sx) h += '<line x1="' + P.X(t) + '" y1="' + PAD + '" x2="' + P.X(t) + '" y2="' + (H - PAD) + '" class="g"/>';
    for (t = Math.ceil(P.yr[0] / sy) * sy; t <= P.yr[1] + 1e-9; t += sy) h += '<line x1="' + PAD + '" y1="' + P.Y(t) + '" x2="' + (W - PAD) + '" y2="' + P.Y(t) + '" class="g"/>';
    var x0 = Math.min(Math.max(P.X(0), PAD), W - PAD), y0 = Math.min(Math.max(P.Y(0), PAD), H - PAD);
    h += '<line x1="' + PAD + '" y1="' + y0 + '" x2="' + (W - PAD) + '" y2="' + y0 + '" class="ax"/><line x1="' + x0 + '" y1="' + PAD + '" x2="' + x0 + '" y2="' + (H - PAD) + '" class="ax"/>';
    for (t = Math.ceil(P.xr[0] / sx) * sx; t <= P.xr[1] + 1e-9; t += sx) if (Math.abs(t) > 1e-9) h += '<text x="' + P.X(t) + '" y="' + Math.min(y0 + 14, H - 6) + '" class="tk" text-anchor="middle">' + n2(t, 2) + '</text>';
    for (t = Math.ceil(P.yr[0] / sy) * sy; t <= P.yr[1] + 1e-9; t += sy) if (Math.abs(t) > 1e-9) h += '<text x="' + Math.max(x0 - 5, 26) + '" y="' + (P.Y(t) + 4) + '" class="tk" text-anchor="end">' + n2(t, 2) + '</text>';
    this.out.push(h);
  };
  PR.curve = function (f, col, o) {
    o = o || {}; var P = this, a = o.a != null ? o.a : P.xr[0], b = o.b != null ? o.b : P.xr[1], N = 320, d = '', pen = false, py = null, i, x, y, ys;
    for (i = 0; i <= N; i++) {
      x = a + (b - a) * i / N; y = f(x);
      if (!isFinite(y) || y !== y || Math.abs(y) > 1e6) { pen = false; py = null; continue; }
      ys = P.Y(y);
      if (py != null && Math.abs(ys - py) > H * 1.2) pen = false;
      d += (pen ? 'L' : 'M') + P.X(x).toFixed(1) + ' ' + Math.max(-2000, Math.min(2000, ys)).toFixed(1) + ' '; pen = true; py = ys;
    }
    this.out.push('<path d="' + d + '" class="cv' + (o.dash ? ' dash' : '') + '" style="stroke:' + col + '"/>');
  };
  PR.area = function (f, g, a, b, col) {
    var P = this, N = 120, up = '', dn = '', i, x;
    for (i = 0; i <= N; i++) { x = a + (b - a) * i / N; up += (i ? 'L' : 'M') + P.X(x).toFixed(1) + ' ' + P.Y(f(x)).toFixed(1) + ' '; }
    for (i = N; i >= 0; i--) { x = a + (b - a) * i / N; dn += 'L' + P.X(x).toFixed(1) + ' ' + P.Y(g(x)).toFixed(1) + ' '; }
    this.out.push('<path d="' + up + dn + 'Z" style="fill:' + col + ';opacity:.22;stroke:none"/>');
  };
  PR.line = function (x1, y1, x2, y2, col, o) {
    o = o || {}; var P = this, ax = P.X(x1), ay = P.Y(y1), bx = P.X(x2), by = P.Y(y2), h = '';
    h = '<line x1="' + ax.toFixed(1) + '" y1="' + ay.toFixed(1) + '" x2="' + bx.toFixed(1) + '" y2="' + by.toFixed(1) + '" class="cv' + (o.dash ? ' dash' : '') + '" style="stroke:' + col + ';stroke-width:' + (o.w || 2.2) + '"/>';
    if (o.arrow) { var an = Math.atan2(by - ay, bx - ax), s = 10; h += '<path d="M' + bx + ' ' + by + 'L' + (bx - s * Math.cos(an - .4)) + ' ' + (by - s * Math.sin(an - .4)) + 'L' + (bx - s * Math.cos(an + .4)) + ' ' + (by - s * Math.sin(an + .4)) + 'Z" style="fill:' + col + '"/>'; }
    this.out.push(h);
  };
  PR.pt = function (x, y, col, label, o) {
    o = o || {}; var P = this, cx = P.X(x), cy = P.Y(y);
    this.out.push('<circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="5.5" style="' + (o.hole ? 'fill:hsl(var(--background));stroke:' + col + ';stroke-width:2.2' : 'fill:' + col + ';stroke:hsl(var(--background));stroke-width:1.5') + '"/>');
    if (label) this.out.push('<text x="' + (cx + 9) + '" y="' + (cy - 9) + '" class="lb" style="fill:' + col + '">' + label + '</text>');
  };
  PR.txt = function (x, y, s, col, o) { this.out.push('<text x="' + this.X(x) + '" y="' + this.Y(y) + '" class="lb" style="fill:' + (col || 'hsl(var(--foreground))') + '"' + (o && o.mid ? ' text-anchor="middle"' : '') + '>' + s + '</text>'); };
  PR.legend = function (items) { var h = '', i; for (i = 0; i < items.length; i++) h += '<rect x="' + (W - 188) + '" y="' + (12 + i * 18) + '" width="14" height="4" rx="2" style="fill:' + items[i][0] + '"/><text x="' + (W - 168) + '" y="' + (18 + i * 18) + '" class="tk" text-anchor="start">' + items[i][1] + '</text>'; this.out.push(h); };
  PR.svg = function () {
    return '<svg class="t3g" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Gráfica interactiva">' + this.out.join('') + '</svg>';
  };
  function yrange(fs, xr, pad) {
    var lo = Infinity, hi = -Infinity, i, j, y;
    fs.forEach(function (f) { for (i = 0; i <= 200; i++) { y = f(xr[0] + (xr[1] - xr[0]) * i / 200); if (isFinite(y) && Math.abs(y) < 1e5) { lo = Math.min(lo, y); hi = Math.max(hi, y); } } });
    if (!isFinite(lo)) { lo = -1; hi = 1; } if (hi - lo < 1e-6) { lo -= 1; hi += 1; }
    var p = (hi - lo) * (pad == null ? 0.12 : pad); return [lo - p, hi + p];
  }
  function ext(a, extra) { var lo = a[0], hi = a[1]; extra.forEach(function (v) { lo = Math.min(lo, v); hi = Math.max(hi, v); }); return [lo, hi]; }
  function ret(P, nota) { return { svg: P.svg(), nota: nota }; }

  var G = {};

  G['limite-tabla'] = function (v) {
    var a = v.a, f = function (x) { return x * x; }, xr = [a - 4, a + 4], P = new Plot(xr, yrange([f], xr));
    P.curve(f, COL.a); P.line(a, P.yr[0], a, P.yr[1], COL.g, { dash: 1 });
    [0.8, 0.4, 0.15].forEach(function (d) { P.pt(a - d, f(a - d), COL.c); P.pt(a + d, f(a + d), COL.b); });
    P.pt(a, f(a), COL.d, '(' + n2(a, 2) + ', ' + n2(f(a), 2) + ')', { hole: 1 }); P.legend([[COL.c, 'x → a por la izquierda'], [COL.b, 'x → a por la derecha']]);
    return ret(P, 'Los puntos naranjas (izquierda) y verdes (derecha) se acercan al mismo valor: lím f(x) = ' + n2(f(a), 3) + '.');
  };
  G['limite-lateral'] = function (v) {
    var a = v.a, f = function (x) { return x === a ? NaN : (x > a ? 1 : -1); }, xr = [a - 5, a + 5], P = new Plot(xr, [-2.2, 2.2]);
    P.curve(function (x) { return x < a ? -1 : NaN; }, COL.c); P.curve(function (x) { return x > a ? 1 : NaN; }, COL.b);
    P.pt(a, -1, COL.c, 'lím⁻ = −1', { hole: 1 }); P.pt(a, 1, COL.b, 'lím⁺ = 1', { hole: 1 }); P.line(a, -2.2, a, 2.2, COL.g, { dash: 1 });
    return ret(P, 'Por la izquierda f vale −1 y por la derecha 1: los límites laterales son distintos, así que el límite en x = ' + n2(a, 2) + ' no existe.');
  };
  G['limite-algebraico'] = function (v) {
    var a = v.a, f = function (x) { return Math.abs(x - 2) < 1e-9 ? NaN : (x * x - 4) / (x - 2); }, xr = [-6, 6], P = new Plot(xr, [-5, 9]);
    P.curve(f, COL.a); P.pt(2, 4, COL.d, 'hueco (2, 4)', { hole: 1 });
    if (Math.abs(a - 2) > 1e-9) P.pt(a, a + 2, COL.c, '(' + n2(a, 2) + ', ' + n2(a + 2, 2) + ')');
    return ret(P, 'La gráfica es la recta y = x + 2 con un hueco en x = 2: el límite existe y vale 4 aunque f(2) no está definida.');
  };
  G['limite-infinito'] = function (v) {
    var x0 = v.x, xm = Math.max(12, x0 * 1.15), P = new Plot([0, xm], [-0.15, 1.15]);
    P.curve(function (x) { return 1 / x; }, COL.a, { a: 0.9 }); P.line(0, 0, xm, 0, COL.g, { dash: 1 }); P.pt(x0, 1 / x0, COL.c, 'x = ' + n2(x0, 1) + ', 1/x = ' + n2(1 / x0, 4));
    return ret(P, 'Al crecer x, el valor 1/x se pega a la asíntota horizontal y = 0: lím (x→∞) 1/x = 0.');
  };
  G['continuidad'] = function (v) {
    var a = v.a, f = function (x) { return x * x; }, xr = [-6, 6], P = new Plot(xr, [-2, 36]);
    P.curve(f, COL.a); P.line(a, 0, a, f(a), COL.g, { dash: 1 }); P.pt(a, f(a), COL.c, 'f(a) = ' + n2(f(a), 2));
    return ret(P, 'Se puede trazar sin levantar el lápiz: f(a) = lím f(x) = ' + n2(f(a), 2) + ', por eso es continua en x = ' + n2(a, 2) + '.');
  };
  G['identidades'] = function (v) {
    var t = v.theta * Math.PI / 180, c = Math.cos(t), s = Math.sin(t), P = new Plot([-1.6, 1.6], [-1.3, 1.3], { eq: 1 });
    P.curve(function () { return 0; }, 'transparent', { a: 0, b: 0 }); P.out.push('<circle cx="' + P.X(0) + '" cy="' + P.Y(0) + '" r="' + (P.X(1) - P.X(0)) + '" class="cv" style="stroke:' + COL.a + ';fill:none"/>');
    P.line(0, 0, c, s, COL.d, { arrow: 1 }); P.line(0, 0, c, 0, COL.b, { w: 3 }); P.line(c, 0, c, s, COL.c, { w: 3 }); P.pt(c, s, COL.d, '(cos θ, sen θ)');
    return ret(P, 'θ = ' + n2(v.theta, 0) + '°: cos θ = ' + n2(c, 3) + ' (verde), sen θ = ' + n2(s, 3) + ' (naranja). Por Pitágoras, sen²θ + cos²θ = ' + n2(c * c + s * s, 3) + '.');
  };
  G['limite-trig'] = function () {
    var f = function (x) { return Math.abs(x) < 1e-9 ? NaN : Math.sin(x) / x; }, P = new Plot([-12, 12], [-0.4, 1.2]);
    P.curve(f, COL.a); P.pt(0, 1, COL.d, 'lím = 1', { hole: 1 });
    return ret(P, 'Cerca de 0 la curva sen(x)/x se acerca a 1 por ambos lados, aunque no esté definida en x = 0.');
  };
  G['complejo-polar'] = function (v) {
    var a = v.a, b = v.b, r = Math.sqrt(a * a + b * b), th = Math.atan2(b, a), m = Math.max(r, 2) * 1.2, P = new Plot([-m, m], [-m, m], { eq: 1 }), N = 40, d = '', i;
    for (i = 0; i <= N; i++) { var q = th * i / N, rr = Math.min(r, m) * 0.28; d += (i ? 'L' : 'M') + P.X(rr * Math.cos(q)) + ' ' + P.Y(rr * Math.sin(q)) + ' '; }
    P.out.push('<path d="' + d + '" class="cv" style="stroke:' + COL.c + '"/>'); P.line(0, 0, a, b, COL.a, { arrow: 1 }); P.line(a, 0, a, b, COL.g, { dash: 1 }); P.line(0, b, a, b, COL.g, { dash: 1 }); P.pt(a, b, COL.d, 'z = ' + n2(a, 1) + ' + ' + n2(b, 1) + 'i');
    return ret(P, 'Módulo r = ' + n2(r, 3) + ', argumento θ = ' + n2(th * 180 / Math.PI, 2) + '° (arco naranja).');
  };
  G['moivre'] = function (v) {
    var r = v.r, t = v.theta * Math.PI / 180, n = v.n, rn = Math.pow(r, n), m = Math.max(r, Math.min(rn, 400)) * 1.25, P = new Plot([-m, m], [-m, m], { eq: 1 });
    var z = [r * Math.cos(t), r * Math.sin(t)], w = [rn * Math.cos(n * t), rn * Math.sin(n * t)];
    P.line(0, 0, z[0], z[1], COL.a, { arrow: 1 }); P.pt(z[0], z[1], COL.a, 'z');
    if (rn <= 400) { P.line(0, 0, w[0], w[1], COL.d, { arrow: 1 }); P.pt(w[0], w[1], COL.d, 'z^' + n); }
    return ret(P, 'z tiene módulo ' + n2(r, 2) + ' y ángulo ' + n2(v.theta, 0) + '°. zⁿ tiene módulo ' + n2(rn, 2) + ' y ángulo ' + n2((n * v.theta) % 360, 0) + '° (el módulo se eleva, el ángulo se multiplica).');
  };
  function tangentPlot(f, df, x0, xr, extra) {
    var P = new Plot(xr, yrange([f], xr)), m = df(x0), y0 = f(x0), tl = function (x) { return y0 + m * (x - x0); };
    P.curve(f, COL.a); P.curve(tl, COL.c, { dash: 1 }); P.pt(x0, y0, COL.d, '(' + n2(x0, 2) + ', ' + n2(y0, 2) + ')'); if (extra) extra(P, m);
    return { P: P, m: m };
  }
  G['derivada-def'] = function (v) {
    var f = function (x) { return x * x; }, x0 = v.x0, h = v.h, xr = [x0 - 4, x0 + 4], P = new Plot(xr, yrange([f], xr)), ms = (f(x0 + h) - f(x0)) / h;
    P.curve(f, COL.a); P.curve(function (x) { return f(x0) + ms * (x - x0); }, COL.c, { dash: 1 }); P.curve(function (x) { return f(x0) + 2 * x0 * (x - x0); }, COL.b, { dash: 1 });
    P.pt(x0, f(x0), COL.d); P.pt(x0 + h, f(x0 + h), COL.c); P.legend([[COL.c, 'secante (pendiente ' + n2(ms, 3) + ')'], [COL.b, 'tangente (pendiente ' + n2(2 * x0, 3) + ')']]);
    return ret(P, 'Al reducir h, la recta secante naranja gira hasta confundirse con la tangente verde: f′(x₀) = ' + n2(2 * x0, 3) + '.');
  };
  G['derivada-reglas'] = function (v) {
    var n = v.n, x0 = Math.abs(v.x) < 0.05 ? 0.05 : v.x, f = function (x) { return n % 1 === 0 || x > 0 ? Math.pow(x, n) : NaN; }, df = function (x) { return n * Math.pow(x, n - 1); };
    var xr = [-5, 5], P = new Plot(xr, yrange([function (x) { var y = f(x); return Math.abs(y) < 60 ? y : NaN; }], xr, 0.1)), m = df(x0), y0 = f(x0);
    P.curve(f, COL.a); if (isFinite(m) && isFinite(y0)) { P.curve(function (x) { return y0 + m * (x - x0); }, COL.c, { dash: 1 }); P.pt(x0, y0, COL.d, 'pendiente ' + n2(m, 3)); }
    return ret(P, 'f(x) = x^' + n2(n, 2) + '. En x = ' + n2(x0, 2) + ' la pendiente es n·x^(n−1) = ' + n2(m, 3) + '.');
  };
  G['cadena'] = function (v) {
    var o = tangentPlot(function (x) { return (x + 1) * (x + 1); }, function (x) { return 2 * (x + 1); }, v.x0, [v.x0 - 4, v.x0 + 4]);
    return ret(o.P, 'f(g(x)) = (x + 1)². Por la regla de la cadena la pendiente es 2(x + 1)·1 = ' + n2(o.m, 3) + '.');
  };
  G['derivada-trans'] = function (v) {
    var x = v.x, P = new Plot([0, 6.4], [-2, 8]);
    P.curve(Math.sin, COL.a); P.curve(Math.exp, COL.c); P.curve(Math.log, COL.b, { a: 0.02 });
    P.pt(x, Math.sin(x), COL.a); P.pt(x, Math.exp(x), COL.c); P.pt(x, Math.log(x), COL.b); P.line(x, -2, x, 8, COL.g, { dash: 1 });
    P.legend([[COL.a, 'sen x → cos x = ' + n2(Math.cos(x), 2)], [COL.c, 'eˣ → eˣ = ' + n2(Math.exp(x), 2)], [COL.b, 'ln x → 1/x = ' + n2(1 / x, 2)]]);
    return ret(P, 'Las tres curvas evaluadas en x = ' + n2(x, 2) + '; la leyenda muestra la pendiente (derivada) de cada una en ese punto.');
  };
  G['implicita'] = function (v) {
    var r = v.r, x0 = Math.max(-r + 0.01, Math.min(r - 0.01, v.x0)), y0 = Math.sqrt(r * r - x0 * x0), m = -x0 / y0, P = new Plot([-r * 1.4, r * 1.4], [-r * 1.4, r * 1.4], { eq: 1 });
    P.out.push('<circle cx="' + P.X(0) + '" cy="' + P.Y(0) + '" r="' + (P.X(r) - P.X(0)) + '" class="cv" style="stroke:' + COL.a + ';fill:none"/>');
    P.curve(function (x) { return y0 + m * (x - x0); }, COL.c, { dash: 1 }); P.pt(x0, y0, COL.d, 'dy/dx = ' + n2(m, 3));
    return ret(P, 'Derivando x² + y² = r² implícitamente: dy/dx = −x/y = ' + n2(m, 3) + ' en (' + n2(x0, 2) + ', ' + n2(y0, 2) + ').');
  };
  G['tangente'] = function (v) {
    var o = tangentPlot(function (x) { return x * x; }, function (x) { return 2 * x; }, v.x0, [v.x0 - 4, v.x0 + 4]);
    return ret(o.P, 'En x₀ = ' + n2(v.x0, 2) + ' la tangente tiene pendiente f′(x₀) = 2x₀ = ' + n2(o.m, 3) + '.');
  };
  G['optimizacion'] = function (v) {
    var a = v.a, b = v.b, c = v.c, f = function (x) { return a * x * x + b * x + c; }, xv = -b / (2 * a), yv = f(xv), xr = [xv - 6, xv + 6], P = new Plot(xr, yrange([f], xr));
    P.curve(f, COL.a); P.line(xv, P.yr[0], xv, yv, COL.g, { dash: 1 }); P.pt(xv, yv, COL.d, 'mínimo (' + n2(xv, 2) + ', ' + n2(yv, 2) + ')');
    return ret(P, 'f′(x) = 2ax + b = 0 en x = −b/(2a) = ' + n2(xv, 3) + '; como a > 0 es un mínimo con valor ' + n2(yv, 3) + '.');
  };
  G['antiderivada'] = function (v) {
    var n = v.n, x0 = v.x, f = function (x) { return Math.pow(x, n); }, F = function (x) { return Math.pow(x, n + 1) / (n + 1); }, xr = [0, Math.max(10, x0 * 1.2)];
    var P = new Plot(xr, ext(yrange([f, F], xr, 0.08), [0]));
    P.area(f, function () { return 0; }, 0, x0, COL.a); P.curve(f, COL.a); P.curve(F, COL.c, { dash: 1 }); P.pt(x0, F(x0), COL.d, 'F(x) = ' + n2(F(x0), 3));
    P.legend([[COL.a, 'f(x) = x^' + n2(n, 2)], [COL.c, 'F(x) = x^' + n2(n + 1, 2) + '/' + n2(n + 1, 2)]]);
    return ret(P, 'La antiderivada F acumula el área bajo f: entre 0 y ' + n2(x0, 2) + ' el área es ' + n2(F(x0), 3) + '.');
  };
  G['sustitucion'] = function (v) {
    var a = v.a, f = function (x) { return 2 * x * Math.pow(x * x + 1, 2); }, xr = [0, Math.max(a * 1.15, 1)], P = new Plot(xr, ext(yrange([f], xr, 0.08), [0])), val = (Math.pow(a * a + 1, 3) - 1) / 3;
    P.area(f, function () { return 0; }, 0, a, COL.a); P.curve(f, COL.a); P.line(a, 0, a, f(a), COL.g, { dash: 1 });
    return ret(P, 'Con u = x² + 1 la integral se vuelve ∫u² du. El área sombreada es ' + n2(val, 3) + '.');
  };
  G['integral-def'] = function (v) {
    var n = v.n, a = Math.min(v.a, v.b - 0.1), b = v.b, f = function (x) { return Math.pow(x, n); }, xr = [0, Math.max(b * 1.15, 3)], P = new Plot(xr, ext(yrange([f], xr, 0.08), [0])), val = (Math.pow(b, n + 1) - Math.pow(a, n + 1)) / (n + 1);
    P.area(f, function () { return 0; }, a, b, COL.a); P.curve(f, COL.a); P.line(a, 0, a, f(a), COL.g, { dash: 1 }); P.line(b, 0, b, f(b), COL.g, { dash: 1 });
    return ret(P, '∫ de ' + n2(a, 2) + ' a ' + n2(b, 2) + ' de x^' + n + ' dx = ' + n2(val, 3) + ' (área sombreada).');
  };
  G['area-curvas'] = function () {
    var P = new Plot([-0.2, 1.3], [-0.15, 1.3]);
    P.area(function (x) { return x; }, function (x) { return x * x; }, 0, 1, COL.b); P.curve(function (x) { return x; }, COL.a); P.curve(function (x) { return x * x; }, COL.c);
    P.legend([[COL.a, 'y = x'], [COL.c, 'y = x²']]);
    return ret(P, 'El área entre las curvas es ∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6 ≈ 0.1667.');
  };
  G['partes'] = function () {
    var f = function (x) { return x * Math.sin(x); }, P = new Plot([-0.3, 3.6], [-0.4, 2]);
    P.area(f, function () { return 0; }, 0, Math.PI, COL.a); P.curve(f, COL.a);
    return ret(P, '∫₀^π x·sen x dx = π ≈ 3.1416 (área sombreada), resuelta por partes con u = x, dv = sen x dx.');
  };
  function iso(x, y, z) { return [x - 0.45 * y, z - 0.35 * y]; }
  G['vector3'] = function (v) {
    var x = v.x, y = v.y, z = v.z, L = Math.max(Math.abs(x), Math.abs(y), Math.abs(z), 3) * 1.25, P = new Plot([-L * 1.3, L * 1.3], [-L * 1.2, L * 1.2], { eq: 1, noaxes: 1 });
    [[1, 0, 0, 'x'], [0, 1, 0, 'y'], [0, 0, 1, 'z']].forEach(function (e) { var a = iso(-e[0] * L, -e[1] * L, -e[2] * L), b = iso(e[0] * L, e[1] * L, e[2] * L); P.line(a[0], a[1], b[0], b[1], COL.g, { w: 1.2 }); var t = iso(e[0] * L * 1.06, e[1] * L * 1.06, e[2] * L * 1.06); P.txt(t[0], t[1], e[3], COL.g); });
    var o = iso(0, 0, 0), p = iso(x, y, z), pa = iso(x, y, 0), px = iso(x, 0, 0);
    P.line(px[0], px[1], pa[0], pa[1], COL.g, { dash: 1, w: 1.2 }); P.line(pa[0], pa[1], p[0], p[1], COL.g, { dash: 1, w: 1.2 }); P.line(o[0], o[1], px[0], px[1], COL.g, { dash: 1, w: 1.2 });
    P.line(o[0], o[1], p[0], p[1], COL.d, { arrow: 1, w: 3 }); P.pt(p[0], p[1], COL.d, '(' + x + ', ' + y + ', ' + z + ')');
    return ret(P, '|v| = √(' + x + '² + ' + y + '² + ' + z + '²) = ' + n2(Math.sqrt(x * x + y * y + z * z), 3) + '. Es la diagonal de la caja formada por las componentes.');
  };
  G['punto-cruz'] = function (v) {
    var a = [v.a1, v.a2], b = [v.b1, v.b2], m = Math.max(5, Math.abs(a[0]), Math.abs(a[1]), Math.abs(b[0]), Math.abs(b[1])) * 1.2, P = new Plot([-m, m], [-m, m], { eq: 1 });
    P.line(0, 0, a[0], a[1], COL.a, { arrow: 1, w: 3 }); P.line(0, 0, b[0], b[1], COL.c, { arrow: 1, w: 3 });
    var d = a[0] * b[0] + a[1] * b[1], na = Math.hypot(a[0], a[1]), nb = Math.hypot(b[0], b[1]), ang = na && nb ? Math.acos(Math.max(-1, Math.min(1, d / (na * nb)))) * 180 / Math.PI : NaN;
    P.legend([[COL.a, 'a = (' + a + ')'], [COL.c, 'b = (' + b + ')']]);
    return ret(P, 'a · b = ' + d + (isFinite(ang) ? ' · ángulo entre los vectores = ' + n2(ang, 1) + '°' + (Math.abs(d) < 1e-9 ? ' (perpendiculares)' : '') : '') + '.');
  };
  G['recta-plano'] = function (v) {
    var s = v.px + v.py + v.pz - v.d, dist = Math.abs(s) / Math.sqrt(3), P = new Plot([-5, 5], [-3, 3], { noaxes: 1 }), side = s >= 0 ? 1 : -1;
    P.out.push('<polygon points="' + [P.X(-4.5) + ',' + P.Y(-0.2), P.X(2.6) + ',' + P.Y(-0.2), P.X(4.5) + ',' + P.Y(0.5), P.X(-2.6) + ',' + P.Y(0.5)].join(' ') + '" style="fill:' + COL.a + ';opacity:.2;stroke:' + COL.a + '"/>');
    P.txt(-4.3, 0.75, 'plano x + y + z = ' + v.d, COL.a); P.line(0, 0.15, 0, 0.15 + side * Math.min(2.4, Math.max(0.3, dist / 2)), COL.d, { arrow: 1, w: 3 }); P.pt(0, 0.15 + side * Math.min(2.4, Math.max(0.3, dist / 2)), COL.d, 'P (' + v.px + ', ' + v.py + ', ' + v.pz + ')');
    return ret(P, 'Distancia = |x + y + z − d| / √3 = |' + n2(s, 2) + '| / √3 = ' + n2(dist, 3) + ' (esquema; la longitud no está a escala).');
  };
  G['logica'] = function () {
    var P = new Plot([0, 4], [0, 4], { noaxes: 1 }), rows = [['V', 'V', 'V'], ['V', 'F', 'F'], ['F', 'V', 'V'], ['F', 'F', 'V']], i, j;
    ['p', 'q', 'p → q'].forEach(function (h, k) { P.txt(0.5 + k * 1.1, 3.7, h, 'hsl(var(--foreground))', { mid: 1 }); });
    for (i = 0; i < 4; i++) for (j = 0; j < 3; j++) { var ok = rows[i][j] === 'V', x = 0.1 + j * 1.1, y = 3.4 - i * 0.8; P.out.push('<rect x="' + P.X(x) + '" y="' + P.Y(y) + '" width="' + (P.X(1.1) - P.X(0.1) - 6) + '" height="' + (P.Y(0) - P.Y(0.7)) + '" rx="8" style="fill:' + (ok ? COL.b : COL.d) + ';opacity:' + (j === 2 ? '.55' : '.25') + '"/>'); P.txt(x + 0.5, y - 0.45, rows[i][j], 'hsl(var(--foreground))', { mid: 1 }); }
    return ret(P, 'p → q solo es falsa (rojo) cuando p es verdadera y q es falsa.');
  };
  G['relaciones'] = function (v) {
    var a = v.a, b = v.b, i = Math.min(v.i, a, b), P = new Plot([-6, 6], [-3.2, 3.2], { eq: 1, noaxes: 1 }), ra = Math.max(0.6, Math.sqrt(a) * 0.42), rb = Math.max(0.6, Math.sqrt(b) * 0.42);
    var d = Math.max(Math.abs(ra - rb), (ra + rb) * (1 - Math.min(1, i / Math.max(1, Math.min(a, b))) * 0.8)), xa = -d / 2, xb = d / 2, k = P.X(1) - P.X(0);
    P.out.push('<circle cx="' + P.X(xa) + '" cy="' + P.Y(0) + '" r="' + ra * k + '" style="fill:' + COL.a + ';opacity:.28;stroke:' + COL.a + '"/><circle cx="' + P.X(xb) + '" cy="' + P.Y(0) + '" r="' + rb * k + '" style="fill:' + COL.c + ';opacity:.28;stroke:' + COL.c + '"/>');
    P.txt(xa - ra * 0.6, 0, 'A: ' + a, COL.a, { mid: 1 }); P.txt(xb + rb * 0.6, 0, 'B: ' + b, COL.c, { mid: 1 }); P.txt(0, 0, '∩ ' + i, 'hsl(var(--foreground))', { mid: 1 });
    return ret(P, '|A ∪ B| = ' + a + ' + ' + b + ' − ' + i + ' = ' + (a + b - i) + '. La intersección se cuenta dos veces, por eso se resta una.');
  };
  G['grafos'] = function (v) {
    var n = Math.round(v.n), r = Math.min(Math.round(v.r), n), c = [1], k, P, mx;
    for (k = 1; k <= n; k++) c[k] = Math.round(c[k - 1] * (n - k + 1) / k);
    mx = Math.max.apply(null, c); P = new Plot([-0.8, n + 0.8], [0, mx * 1.18], { noaxes: 1 });
    var bw = (W - 2 * PAD) / (n + 1) * 0.72;
    for (k = 0; k <= n; k++) { var hh = P.Y(0) - P.Y(c[k]); P.out.push('<rect x="' + (P.X(k) - bw / 2) + '" y="' + P.Y(c[k]) + '" width="' + bw + '" height="' + hh + '" rx="3" style="fill:' + (k === r ? COL.d : COL.a) + ';opacity:' + (k === r ? 1 : .45) + '"/><text x="' + P.X(k) + '" y="' + (H - PAD + 14) + '" class="tk" text-anchor="middle">' + k + '</text>'); }
    P.txt(r, c[r] + mx * 0.06, 'C(' + n + ',' + r + ') = ' + c[r], COL.d, { mid: 1 });
    return ret(P, 'Cada barra es C(' + n + ', k) para k = 0…' + n + ' (fila ' + n + ' del triángulo de Pascal). La roja es la que pediste: ' + c[r] + '.');
  };

  global.T3Graf = {
    draw: function (key, v) { var g = G[key]; if (!g) return null; try { return g(v); } catch (e) { return null; } },
    has: function (key) { return !!G[key]; }
  };
})(window);

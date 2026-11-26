/* primero-graf.js — Gráficos interactivos de 1.er año (SVG puro, sin librerías).
   T1Graf.draw(clave, v) → { svg, nota } ; la clave es la misma de T3Calc.CALCS. */
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
    return '<svg class="t1g" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Gráfica interactiva">' + this.out.join('') + '</svg>';
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

  function n2x(x) { var s = String(Math.round(x * 1000) / 1000); return s.replace('-', '−'); }

  G['racionalizar'] = function (v) {
    var c = v.c, a = v.a, b = v.b, f, xr = [0.3, 6], P;
    if (b === 0) { f = function (x) { return c / Math.sqrt(x); }; P = new Plot(xr, yrange([f], xr, 0.15)); P.curve(f, COL.a); P.pt(a, c / Math.sqrt(a), COL.d, '(' + a + ', ' + n2(c / Math.sqrt(a), 3) + ')'); return ret(P, 'f(x) = c/√x evaluada en x = a; racionalizar no cambia el valor, solo el denominador.'); }
    f = function (x) { return c / (Math.sqrt(x) - Math.sqrt(Math.max(0.01, x - (a - b)))); };
    var m = Math.max(a, b, 2); xr = [1, m * 2]; P = new Plot(xr, [-10, 10]); P.line(0.5, Math.sqrt(a), m * 1.5, Math.sqrt(a), COL.a, { dash: 1 }); P.line(0.5, Math.sqrt(b), m * 1.5, Math.sqrt(b), COL.c, { dash: 1 });
    P.legend([[COL.a, '√a = ' + n2(Math.sqrt(a), 3)], [COL.c, '√b = ' + n2(Math.sqrt(b), 3)]]);
    return ret(P, 'Las líneas marcan √a y √b; el conjugado usa la diferencia de sus cuadrados: a − b = ' + (a - b) + '.');
  };
  G['binomio'] = function (v) {
    var a = v.a, b = v.b, f = function (x) { return Math.pow(a * x + b, 2); }, xr = [-6, 6], P = new Plot(xr, yrange([f], xr));
    P.curve(f, COL.a); P.pt(-b / a, 0, COL.d, 'raíz doble en x = ' + n2(-b / a, 2));
    return ret(P, 'f(x) = (ax + b)² siempre toca el eje x en un único punto (raíz doble), donde ax + b = 0.');
  };
  G['factorizar'] = function (v) {
    var a = v.a, b = v.b, c = v.c, f = function (x) { return a * x * x + b * x + c; }, disc = b * b - 4 * a * c, xr, P;
    if (disc >= 0) { var r1 = (-b + Math.sqrt(disc)) / (2 * a), r2v = (-b - Math.sqrt(disc)) / (2 * a); xr = [Math.min(r1, r2v) - 3, Math.max(r1, r2v) + 3]; P = new Plot(xr, yrange([f], xr)); P.curve(f, COL.a); P.pt(r1, 0, COL.d, n2(r1, 2)); P.pt(r2v, 0, COL.c, n2(r2v, 2)); return ret(P, 'Las raíces son los puntos donde la parábola cruza el eje x; de ahí salen los factores (x − raíz).'); }
    xr = [-b / (2 * a) - 5, -b / (2 * a) + 5]; P = new Plot(xr, yrange([f], xr)); P.curve(f, COL.a);
    return ret(P, 'La parábola no toca el eje x (discriminante negativo): no factoriza con números reales.');
  };
  G['ruffini'] = function (v) {
    var coef = [v.c3, v.c2, v.c1, v.c0], f = function (x) { return coef[0] * x * x * x + coef[1] * x * x + coef[2] * x + coef[3]; }, a = v.a, xr = [a - 4, a + 4], P = new Plot(xr, yrange([f], xr));
    P.curve(f, COL.a); P.pt(a, f(a), COL.d, 'P(' + a + ') = ' + n2(f(a), 2) + ' (residuo)');
    return ret(P, 'El teorema del residuo dice que P(a) es justo el valor de la gráfica en x = a: eso es lo que da Ruffini al final.');
  };
  G['desigualdad'] = function (v) {
    var a = v.a, b = v.b, t = v.tipo, f = function (x) { return a * x + b; }, x0 = -b / a, xr = [x0 - 6, x0 + 6], P = new Plot(xr, yrange([f], xr));
    P.curve(f, COL.a); P.line(x0, P.yr[0], x0, P.yr[1], COL.g, { dash: 1 }); P.pt(x0, 0, COL.d, 'x = ' + n2(x0, 2));
    var ok = t === 1 ? function (x) { return f(x) > 0; } : function (x) { return f(x) < 0; };
    P.area(f, function () { return 0; }, ok(xr[0]) ? xr[0] : x0, ok(xr[1]) ? xr[1] : x0, COL.b);
    return ret(P, 'La zona sombreada es donde la recta cumple ' + (t === 1 ? 'f(x) > 0' : 'f(x) < 0') + ', es decir, la solución de la desigualdad.');
  };
  G['lineal'] = function (v) {
    var m = v.m, b = v.b, x = v.x, f = function (xx) { return m * xx + b; }, xr = [-8, 8], P = new Plot(xr, yrange([f], xr));
    P.curve(f, COL.a); P.pt(0, b, COL.c, 'b = ' + b); P.pt(x, f(x), COL.d, '(' + x + ', ' + n2(f(x), 2) + ')');
    return ret(P, 'm = ' + m + ' es la pendiente (inclinación) y b = ' + b + ' es donde la recta cruza el eje y.');
  };
  G['cuadratica'] = function (v) {
    var a = v.a, b = v.b, c = v.c, f = function (x) { return a * x * x + b * x + c; }, h = -b / (2 * a), k = f(h), xr = [h - 6, h + 6], P = new Plot(xr, yrange([f], xr));
    P.curve(f, COL.a); P.line(h, P.yr[0], h, P.yr[1], COL.g, { dash: 1 }); P.pt(h, k, COL.d, 'vértice (' + n2(h, 2) + ', ' + n2(k, 2) + ')');
    return ret(P, (a > 0 ? 'Abre hacia arriba: el vértice es un mínimo.' : 'Abre hacia abajo: el vértice es un máximo.'));
  };
  G['func-especial'] = function (v) {
    var a = v.a, h = v.h, k = v.k, f = function (x) { return a / (x - h) + k; }, xr = [h - 6, h + 6], P = new Plot(xr, [k - 6, k + 6]);
    P.curve(f, COL.a, { a: xr[0], b: h - 0.05 }); P.curve(f, COL.a, { a: h + 0.05, b: xr[1] }); P.line(h, k - 6, h, k + 6, COL.g, { dash: 1 }); P.line(h - 6, k, h + 6, k, COL.c, { dash: 1 });
    return ret(P, 'La curva nunca toca las líneas punteadas: son las asíntotas vertical (x = ' + h + ') y horizontal (y = ' + k + ').');
  };
  G['trig-rectangulo'] = function (v) {
    var op = v.op, ady = v.ady, hip = Math.sqrt(op * op + ady * ady), m = Math.max(op, ady) * 1.3, P = new Plot([-1, m + 1], [-1, m + 1], { eq: 1, noaxes: 1 });
    var o = [0, 0], A = [ady, 0], Bp = [ady, op];
    P.line(o[0], o[1], A[0], A[1], COL.a, { w: 3 }); P.line(A[0], A[1], Bp[0], Bp[1], COL.c, { w: 3 }); P.line(o[0], o[1], Bp[0], Bp[1], COL.d, { w: 3 });
    P.txt((o[0] + A[0]) / 2, -0.5, 'adyacente = ' + ady, COL.a, { mid: 1 }); P.txt(A[0] + 0.6, (A[1] + Bp[1]) / 2, 'opuesto = ' + op, COL.c); P.txt((o[0] + Bp[0]) / 2 - 0.8, (o[1] + Bp[1]) / 2 + 0.6, 'hip = ' + n2(hip, 2), COL.d);
    return ret(P, 'sen θ = opuesto/hip, cos θ = adyacente/hip, tan θ = opuesto/adyacente. Aquí hip = ' + n2(hip, 3) + ' por Pitágoras.');
  };
  G['identidad-trig'] = function (v) {
    var t = v.theta * Math.PI / 180, c = Math.cos(t), s = Math.sin(t), P = new Plot([-1.5, 1.5], [-1.3, 1.3], { eq: 1 });
    P.out.push('<circle cx="' + P.X(0) + '" cy="' + P.Y(0) + '" r="' + (P.X(1) - P.X(0)) + '" class="cv" style="stroke:' + COL.a + ';fill:none"/>');
    P.line(0, 0, c, s, COL.d, { arrow: 1 }); P.line(0, 0, c, 0, COL.b, { w: 3 }); P.line(c, 0, c, s, COL.c, { w: 3 });
    return ret(P, 'cos θ (verde) y sen θ (naranja) son los catetos de un triángulo con hipotenusa 1: por Pitágoras, sen²θ + cos²θ = 1 siempre.');
  };
  G['ley-senos-cosenos'] = function (v) {
    var a = v.a, b = v.b, Cdeg = v.C, r = Cdeg * Math.PI / 180, c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(r)), P = new Plot([-1, a + 2], [-1, b + 2], { eq: 1, noaxes: 1 });
    var O = [0, 0], A = [a, 0], Bp = [b * Math.cos(r), b * Math.sin(r)];
    P.line(O[0], O[1], A[0], A[1], COL.a, { w: 3 }); P.line(O[0], O[1], Bp[0], Bp[1], COL.c, { w: 3 }); P.line(A[0], A[1], Bp[0], Bp[1], COL.d, { w: 3 });
    P.txt((O[0] + A[0]) / 2, -0.6, 'a = ' + a, COL.a, { mid: 1 }); P.txt((O[0] + Bp[0]) / 2 - 0.6, (O[1] + Bp[1]) / 2, 'b = ' + b, COL.c); P.txt((A[0] + Bp[0]) / 2 + 0.6, (A[1] + Bp[1]) / 2, 'c = ' + n2(c, 2), COL.d);
    return ret(P, 'El ángulo C está entre los lados a y b; el lado opuesto c se calcula con la ley del coseno: c = ' + n2(c, 3) + '.');
  };
  G['vector2'] = function (v) {
    var u = [v.u1, v.u2], w = [v.v1, v.v2], sum = [u[0] + w[0], u[1] + w[1]], m = Math.max(Math.abs(u[0]), Math.abs(u[1]), Math.abs(w[0]), Math.abs(w[1]), Math.abs(sum[0]), Math.abs(sum[1]), 3) * 1.25, P = new Plot([-m, m], [-m, m], { eq: 1 });
    P.line(0, 0, u[0], u[1], COL.a, { arrow: 1, w: 3 }); P.line(0, 0, w[0], w[1], COL.c, { arrow: 1, w: 3 }); P.line(u[0], u[1], sum[0], sum[1], COL.c, { arrow: 1, w: 2, dash: 1 }); P.line(0, 0, sum[0], sum[1], COL.d, { arrow: 1, w: 3 });
    P.legend([[COL.a, 'u = (' + u + ')'], [COL.c, 'v = (' + w + ')'], [COL.d, 'u + v = (' + sum + ')']]);
    return ret(P, 'Para sumar vectores, se coloca v a partir de la punta de u (línea punteada): la flecha roja es la suma.');
  };
  G['complejo'] = function (v) {
    var a = v.a, b = v.b, mod = Math.sqrt(a * a + b * b), m = Math.max(mod, 2) * 1.25, P = new Plot([-m, m], [-m, m], { eq: 1 });
    P.line(0, 0, a, b, COL.a, { arrow: 1 }); P.line(a, 0, a, b, COL.g, { dash: 1 }); P.line(0, b, a, b, COL.g, { dash: 1 }); P.pt(a, b, COL.d, 'z = ' + a + ' + ' + b + 'i');
    return ret(P, 'El módulo |z| = ' + n2(mod, 3) + ' es la distancia del origen al punto (a, b), igual que la hipotenusa de un triángulo.');
  };

  G['estadistica'] = function (v) {
    var d = [v.a, v.b, v.c, v.d, v.e], med = d.reduce(function (s, x) { return s + x; }, 0) / 5, P = new Plot([0, 6], [0, 22]);
    d.forEach(function (y, i) { P.line(i + 1, 0, i + 1, y, COL.a, { w: 14 }); }); P.line(0, med, 6, med, COL.d, { dash: 1 });
    return ret(P, 'Cada barra es un dato; la línea punteada marca la media: ' + n2(med, 2) + '.');
  };
  G['conica'] = function (v) {
    var m = Math.max(v.a, v.b) * 1.25, P = new Plot([-m, m], [-m, m], { eq: 1 });
    function y(x) { return v.b * Math.sqrt(1 - x * x / (v.a * v.a)); }
    P.curve(y, COL.a, { a: -v.a, b: v.a }); P.curve(function (x) { return -y(x); }, COL.a, { a: -v.a, b: v.a });
    var c = Math.sqrt(Math.abs(v.a * v.a - v.b * v.b)), h = v.a >= v.b;
    P.pt(h ? c : 0, h ? 0 : c, COL.d, 'F'); P.pt(h ? -c : 0, h ? 0 : -c, COL.d, 'F');
    return ret(P, 'Los puntos F son los focos; si a = b coinciden en el centro y la curva es una circunferencia.');
  };
  G['exponencial'] = function (v) {
    var P = new Plot([-4, 6], [-4, 10], { eq: 1 });
    P.curve(function (x) { return Math.pow(v.a, x); }, COL.a);
    if (v.a !== 1) P.curve(function (x) { return x > 0 ? Math.log(x) / Math.log(v.a) : NaN; }, COL.c);
    P.pt(0, 1, COL.d, '(0, 1)');
    return ret(P, 'La exponencial y, cuando la base no es 1, su logaritmo (inversa) son simétricas respecto a la recta y = x.');
  };
  G['sucesion'] = function (v) {
    var ys = [], i; for (i = 0; i < v.n; i++) ys.push(v.a + i * v.d);
    var lo = Math.min.apply(null, ys.concat(0)), hi = Math.max.apply(null, ys.concat(1)), P = new Plot([0, v.n + 1], [lo - 2, hi + 2]);
    ys.forEach(function (y, k) { P.pt(k + 1, y, COL.a); });
    return ret(P, 'Los términos de una progresión aritmética quedan alineados.');
  };
  G['conteo'] = function (v) {
    var vals = [], c = 1, k; for (k = 0; k <= v.n; k++) { vals.push(c); c = c * (v.n - k) / (k + 1); }
    var P = new Plot([-1, v.n + 1], [0, Math.max.apply(null, vals) * 1.15]);
    vals.forEach(function (y, j) { P.line(j, 0, j, y, j === v.r ? COL.d : COL.a, { w: 10 }); });
    return ret(P, 'Cada barra es C(' + v.n + ', k); la resaltada corresponde a k = r.');
  };

  global.T1Graf = {
    draw: function (key, v) {
      var g = G[key], r; if (!g) return null;
      try { r = g(v); } catch (e) { return null; }
      /* p. ej. a = 0: las fórmulas dividen entre a y no hay nada que dibujar */
      if (/NaN|Infinity/.test(r.svg)) { var P = new Plot([-6, 6], [-6, 6]); return ret(P, 'Con a = 0 esta gráfica no está definida: mueve a a un valor distinto de cero.'); }
      return r;
    },
    has: function (key) { return !!G[key]; }
  };
})(window);

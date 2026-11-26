/* noveno-graf.js — Gráficos interactivos de 9.º grado (SVG puro).
   T9Graf.draw(clave, v) → { svg, nota }; las claves son las de T9Calc.CALCS. */
(function (global) {
  'use strict';
  var W = 640, H = 360;
  var A = 'hsl(var(--primary))', B = 'hsl(var(--success))', C = 'hsl(25 90% 48%)', D = 'hsl(340 70% 48%)';
  function n(x) { return String(Math.round(x * 100) / 100).replace('-', '−'); }
  function line(a, b, c, d, col, cls) { return '<line x1="' + a + '" y1="' + b + '" x2="' + c + '" y2="' + d + '" class="' + (cls || 'cv') + '"' + (col ? ' style="stroke:' + col + '"' : '') + '/>'; }
  function txt(x, y, s, col, anc) { return '<text x="' + x + '" y="' + y + '" class="lb" text-anchor="' + (anc || 'middle') + '" style="fill:' + (col || 'hsl(var(--foreground))') + '">' + s + '</text>'; }
  function dot(x, y, col) { return '<circle cx="' + x + '" cy="' + y + '" r="5" style="fill:' + col + '"/>'; }
  function poli(p, col) { return '<polygon points="' + p.map(function (q) { return q.join(','); }).join(' ') + '" class="cv" style="stroke:' + col + ';fill:' + col + ';fill-opacity:.14"/>'; }
  function rect(x, y, w, h, col) { return poli([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], col); }
  function out(body, nota) { return { svg: '<svg class="t9g" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Gráfico del tema">' + body + '</svg>', nota: nota }; }

  /* parábola y = ax² + bx + c con raíces y vértice */
  function parab(a, b, c, nota) {
    var h = a ? -b / (2 * a) : 0, D2 = b * b - 4 * a * c, rs = a && D2 >= 0 ? [(-b - Math.sqrt(D2)) / (2 * a), (-b + Math.sqrt(D2)) / (2 * a)] : [];
    function f(x) { return a * x * x + b * x + c; }
    var half = Math.max(6, rs.reduce(function (m, x) { return Math.max(m, Math.abs(x - h) * 1.3); }, 0)), x0 = h - half, x1 = h + half;
    var ys = [0, f(h), c, f(h + half * 0.7)], y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys), m = (y1 - y0) * 0.1 || 2; y0 -= m; y1 += m;
    function X(x) { return 20 + (x - x0) / (x1 - x0) * (W - 40); }
    function Y(y) { return H - 20 - (y - y0) / (y1 - y0) * (H - 40); }
    var s = line(20, Y(0), W - 20, Y(0), '', 'ax'), d = '', i, x;
    if (x0 <= 0 && x1 >= 0) s += line(X(0), 20, X(0), H - 20, '', 'ax');
    for (i = 0; i <= 120; i++) { x = x0 + (x1 - x0) * i / 120; d += (i ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Math.max(-400, Math.min(800, Y(f(x)))).toFixed(1) + ' '; }
    s += '<path d="' + d + '" class="cv" style="stroke:' + A + '"/>';
    rs.forEach(function (r, k) { s += dot(X(r), Y(0), B) + txt(X(r), Y(0) + (k ? 18 : -10), n(r), B); });
    if (a) s += dot(X(h), Y(f(h)), C) + txt(X(h), Y(f(h)) + (a > 0 ? 18 : -10), 'V(' + n(h) + ', ' + n(f(h)) + ')', C);
    return out(s, nota);
  }

  var G = {
    binomios: function (v) { var a = v.a * 2, b = Math.abs(v.b) || 0, k = 290 / (a + b), x = 175, y = 30, p = a * k, q = b * k; return out(rect(x, y, p, p, A) + rect(x + p, y, q, p, B) + rect(x, y + p, p, q, B) + rect(x + p, y + p, q, q, C) + txt(x + p / 2, y + p / 2, v.a + 'x · ' + v.a + 'x') + (q > 30 ? txt(x + p + q / 2, y + p + q / 2 + 4, b + '²') : '') + txt(x + p / 2, 20, v.a + 'x') + txt(x + p + q / 2, 20, String(b)), 'Modelo de áreas de (' + v.a + 'x + ' + b + ')² (se usa |b| y x = 2): un cuadrado grande, dos rectángulos iguales y un cuadrado pequeño.'); },
    difcuad: function (v) { var a = v.a * 2, b = v.b, M = Math.max(a, b), k = 280 / M; return out(rect(120, 320 - a * k, a * k, a * k, A) + rect(120, 320 - b * k, b * k, b * k, D) + txt(520, 140, 'Azul: (' + v.a + 'x)²', A) + txt(520, 170, 'Rojo: ' + v.b + '²', D), 'Comparación (con x = 2) de los dos cuadrados que se restan.'); },
    trinomio: function (v) { return parab(1, v.b, v.c, 'Cada raíz real r de la gráfica corresponde al factor (x − r).'); },
    radicales: function (v) { var s = Math.sqrt(v.m), L = 40 + 230 * s / Math.sqrt(200); return out(rect((W - L) / 2, (H - L) / 2, L, L, A) + txt(W / 2, H / 2, 'Área ' + v.m) + txt(W / 2, (H + L) / 2 + 22, 'lado = √' + v.m + ' ≈ ' + n(s), C), 'La raíz cuadrada es el lado de un cuadrado de área n (aquí se muestra √n, sin k).'); },
    racionalizar: function (v) { var val = v.c / (Math.sqrt(v.a) + v.b), M = Math.max(1, Math.ceil(val)), X = 40 + val / M * 560; return out(line(40, 180, 600, 180, '', 'ax') + txt(40, 210, '0') + txt(600, 210, String(M)) + dot(X, 180, C) + txt(Math.max(90, Math.min(550, X)), 150, '≈ ' + n(val), C), 'La fracción original y la racionalizada son el mismo punto: solo cambia la forma.'); },
    cuadfac: function (v) { return parab(v.a, v.b, v.c, 'Las soluciones de la ecuación son los cortes con el eje x.'); },
    cuadformula: function (v) { var d = v.b * v.b - 4 * v.a * v.c; return parab(v.a, v.b, v.c, 'Δ = ' + n(d) + (v.a ? (d > 0 ? ': corta dos veces el eje x.' : d === 0 ? ': toca el eje x una vez.' : ': no corta el eje x.') : ': con a = 0 es una recta.')); },
    parabola: function (v) { return parab(v.a, v.b, v.c, v.a ? 'El punto naranja es el vértice.' : 'Con a = 0 deja de ser parábola.'); },
    tales: function (v) { var x = v.b * v.c / v.a, f = v.a / (v.a + v.b), s = '', ys = [50, 50 + 260 * f, 310]; ys.forEach(function (y) { s += line(60, y, 580, y, A); }); s += line(220, 25, 120, 335, C) + line(350, 25, 490, 335, B); function m(i) { return (ys[i] + ys[i + 1]) / 2; } s += txt(150, m(0), 'a = ' + v.a, C) + txt(110, m(1), 'b = ' + v.b, C) + txt(480, m(0), 'c = ' + v.c, B) + txt(540, m(1), 'x = ' + n(x), B); return out(s, 'Las rectas paralelas cortan segmentos proporcionales: a/b = c/x.'); },
    semejanza: function (v) { var K = Math.max(1, v.k), u = Math.min(260 / (v.a * K + v.a) , 240 / (v.b * K)); function tri(x, k, col) { return poli([[x, 300], [x + v.a * k * u, 300], [x, 300 - v.b * k * u]], col) + txt(x + v.a * k * u / 2, 322, n(v.a * k), col) + txt(x - 8, 300 - v.b * k * u / 2, n(v.b * k), col, 'end'); } return out(tri(70, 1, A) + tri(130 + v.a * u, v.k, B), 'Triángulos rectángulos semejantes con razón k = ' + n(v.k) + '.'); },
    pitagoras: function (v) { var u = Math.min(420 / v.a, 250 / v.b), x = 100, p = v.a * u, q = v.b * u; return out(poli([[x, 300], [x + p, 300], [x, 300 - q]], A) + txt(x + p / 2, 322, 'a = ' + v.a) + txt(x - 8, 300 - q / 2, 'b = ' + v.b, '', 'end') + txt(x + p / 2 + 10, 290 - q / 2, (Number.isInteger(Math.sqrt(v.a * v.a + v.b * v.b)) ? String(Math.sqrt(v.a * v.a + v.b * v.b)) : '√' + (v.a * v.a + v.b * v.b)), C, 'start'), v.c ? 'Base de la caja: la diagonal 3D es √(a² + b² + c²).' : 'La hipotenusa es el lado opuesto al ángulo recto.'); },
    angulos: function (v) { var R = 140, cx = 320, cy = 180, g = v.g * Math.PI / 180; function P(t) { return [cx + R * Math.cos(t), cy + R * Math.sin(t)]; } var p = P(Math.PI / 2 - g / 2), q = P(Math.PI / 2 + g / 2), s = P(-Math.PI / 2); return out('<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" class="cv" style="stroke:hsl(var(--muted-foreground))"/>' + line(cx, cy, p[0], p[1], A) + line(cx, cy, q[0], q[1], A) + line(s[0], s[1], p[0], p[1], C) + line(s[0], s[1], q[0], q[1], C) + dot(cx, cy, A) + dot(s[0], s[1], C) + txt(80, 40, 'Central: ' + n(v.g) + '°', A, 'start') + txt(80, 62, 'Inscrito: ' + n(v.g / 2) + '°', C, 'start'), 'Los dos ángulos abarcan el mismo arco (el de abajo).'); },
    dispersion: function (v) { var d = [v.a, v.b, v.c, v.d, v.e], m = d.reduce(function (a, b) { return a + b; }) / 5, sd = Math.sqrt(d.reduce(function (a, b) { return a + (b - m) * (b - m); }, 0) / 5), veces = {}; function X(x) { return 40 + x * 28; } var s = '<rect x="' + X(m - sd) + '" y="80" width="' + (sd * 56) + '" height="180" style="fill:' + A + ';opacity:.13"/>' + line(40, 260, 600, 260, '', 'ax') + line(X(m), 70, X(m), 260, C); for (var t = 0; t <= 20; t += 2) s += txt(X(t), 282, String(t)); d.forEach(function (x) { veces[x] = (veces[x] || 0) + 1; s += dot(X(x), 262 - veces[x] * 16, B); }); return out(s + txt(X(m), 60, 'media ' + n(m), C), 'La franja sombreada va de media − σ a media + σ (σ ≈ ' + n(sd) + ').'); }
  };
  global.T9Graf = { has: function (k) { return !!G[k]; }, draw: function (k, v) { return G[k] ? G[k](v) : null; } };
})(window);

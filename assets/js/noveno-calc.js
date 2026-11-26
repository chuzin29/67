/* noveno-calc.js — Calculadoras de 9.º grado (13). Mismo contrato que T1Calc: {titulo, vars, run(v)}.
   Las claves de cuadráticas y radicales tienen además una herramienta propia: custom(caja). */
(function (global) {
  'use strict';
  function r(x, d) { var k = Math.pow(10, d == null ? 4 : d), y = Math.round(x * k) / k; return y === 0 ? 0 : y; }
  function n(x, d) { return String(r(x, d)).replace('-', '−'); }
  function mcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a || 1; }
  /* √n = f√s */
  function raiz(x) { var f = 1, s = x, i; for (i = 2; i * i <= s; i++) while (s % (i * i) === 0) { s /= i * i; f *= i; } return { f: f, s: s }; }
  function term(k, rad) { if (rad === 1) return n(k); var a = Math.abs(k); return (k < 0 ? '−' : '') + (a === 1 ? '' : n(a)) + '√' + rad; }
  function sg(x) { return (x < 0 ? '− ' : '+ ') + n(Math.abs(x)); }
  function poly(a, b, c) {
    var o = '';
    [[a, 'x²'], [b, 'x'], [c, '']].forEach(function (t) {
      if (!t[0]) return;
      var k = Math.abs(t[0]), txt = (k === 1 && t[1] ? '' : n(k)) + t[1];
      o += o ? (t[0] < 0 ? ' − ' : ' + ') + txt : (t[0] < 0 ? '−' : '') + txt;
    });
    return o || '0';
  }
  function bin(k, q) { var x = (k === 1 ? '' : k === -1 ? '−' : n(k)) + 'x'; return q ? '(' + x + ' ' + sg(q) + ')' : (k === 1 ? 'x' : '(' + x + ')'); }
  /* fracción exacta si p y q son enteros */
  function frac(p, q) {
    if (!Number.isInteger(p) || !Number.isInteger(q)) return n(p / q);
    var g = mcd(p, q); p /= g; q /= g; if (q < 0) { p = -p; q = -q; }
    return q === 1 ? n(p) : n(p) + '/' + q;
  }

  /* ---------- ecuación y función cuadrática ---------- */
  function cuadratica(a, b, c) {
    if (!a) return { error: 'Con a = 0 no hay ecuación cuadrática: elige a distinto de cero.' };
    var D = r(b * b - 4 * a * c, 9), h = r(-b / (2 * a), 9), k = r(c - b * b / (4 * a), 9), ent = [a, b, c].every(Number.isInteger), pasos = [], raices, reales = [];
    pasos.push('Identifica: a = ' + n(a) + ', b = ' + n(b) + ', c = ' + n(c) + '.');
    pasos.push('Discriminante: Δ = b² − 4ac = (' + n(b) + ')² − 4·(' + n(a) + ')·(' + n(c) + ') = ' + n(D) + '.');
    if (D >= 0) {
      var s = Math.sqrt(D), x1 = (-b - s) / (2 * a), x2 = (-b + s) / (2 * a); reales = [Math.min(x1, x2), Math.max(x1, x2)];
      pasos.push(D > 0 ? 'Δ > 0: hay dos raíces reales distintas.' : 'Δ = 0: hay una raíz real doble.');
      pasos.push('x = (−b ± √Δ)/(2a) = (' + n(-b) + ' ± √' + n(D) + ')/(' + n(2 * a) + ').');
      if (D === 0) { raices = 'x = ' + frac(-b, 2 * a) + ' (doble)'; reales = [h]; }
      else if (ent && Number.isInteger(s)) raices = 'x₁ = ' + (a > 0 ? frac(-b - s, 2 * a) : frac(-b + s, 2 * a)) + ',  x₂ = ' + (a > 0 ? frac(-b + s, 2 * a) : frac(-b - s, 2 * a));
      else raices = 'x₁ ≈ ' + n(reales[0]) + ',  x₂ ≈ ' + n(reales[1]) + (ent ? ' (exacto: (' + n(-b) + ' ± ' + term(raiz(D).f, raiz(D).s) + ')/(' + n(2 * a) + '))' : '');
    } else {
      var re = frac(-b, 2 * a), im = r(Math.sqrt(-D) / (2 * Math.abs(a)));
      pasos.push('Δ < 0: no hay raíces reales; son complejas conjugadas.');
      pasos.push('x = −b/(2a) ± (√(−Δ)/(2·|a|))·i.');
      raices = 'x = ' + re + ' ± ' + n(im) + 'i';
    }
    pasos.push('Raíces: ' + raices + '.');
    pasos.push('Vértice: h = −b/(2a) = ' + frac(-b, 2 * a) + ';  k = f(h) = ' + (ent ? frac(4 * a * c - b * b, 4 * a) : n(k)) + '.');
    var hs = ent ? frac(-b, 2 * a) : n(h), ks = ent ? frac(4 * a * c - b * b, 4 * a) : n(k);
    var dentro = h ? '(x ' + (h < 0 ? '+ ' + hs.replace('−', '') : '− ' + hs) + ')²' : 'x²';
    var canon = 'y = ' + (a === 1 ? '' : a === -1 ? '−' : n(a)) + dentro + (k ? (k < 0 ? ' − ' + ks.replace('−', '') : ' + ' + ks) : '');
    pasos.push('Eje de simetría: x = ' + hs + '. Forma canónica: ' + canon + '.');
    pasos.push((a > 0 ? 'Como a > 0 abre hacia arriba: el vértice es un mínimo.' : 'Como a < 0 abre hacia abajo: el vértice es un máximo.') + ' Corta el eje y en (0, ' + n(c) + ').');
    return { D: D, h: h, k: k, reales: D < 0 ? [] : reales, raices: raices, vertice: 'V(' + hs + ', ' + ks + ')', eje: 'x = ' + hs, canon: canon, pasos: pasos };
  }

  var PUNTOS = { vertice: '#ea7a12', raiz: '#16a34a', corte: '#db2777', simetrico: '#2563eb', cursor: '#7c3aed' };
  function dibujar(cv, a, b, c, q, cursor) {
    var ctx = cv.getContext && cv.getContext('2d'); if (!ctx) return;
    var W = cv.clientWidth || 600, H = Math.round(W * 0.62), dpr = global.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr; cv.style.height = H + 'px'; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var css = getComputedStyle(cv), texto = css.color;
    ctx.clearRect(0, 0, W, H);
    if (q.error) return;
    function f(x) { return a * x * x + b * x + c; }
    var xs = [0, q.h, 2 * q.h].concat(q.reales), lo = Math.min.apply(null, xs), hi = Math.max.apply(null, xs);
    var half = Math.max(4, Math.max(q.h - lo, hi - q.h) * 1.35), x0 = q.h - half, x1 = q.h + half;
    var ys = [0, q.k, c, f(q.h + half * 0.6)], y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys), m = (y1 - y0) * 0.12 || 1; y0 -= m; y1 += m;
    function X(x) { return (x - x0) / (x1 - x0) * W; }
    function Y(y) { return H - (y - y0) / (y1 - y0) * H; }
    function paso(rango) { var m10 = Math.pow(10, Math.floor(Math.log(rango / 6) / Math.LN10)), v = rango / 6 / m10; return (v < 1.5 ? 1 : v < 3 ? 2 : v < 7 ? 5 : 10) * m10; }
    function linea(p, q2, s, t, w, al) { ctx.globalAlpha = al; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(p, q2); ctx.lineTo(s, t); ctx.stroke(); ctx.globalAlpha = 1; }
    ctx.strokeStyle = texto; ctx.fillStyle = texto; ctx.font = '11px system-ui, sans-serif';
    var sx = paso(x1 - x0), sy = paso(y1 - y0), t;
    for (t = Math.ceil(x0 / sx) * sx; t <= x1; t += sx) { linea(X(t), 0, X(t), H, 1, 0.12); if (Math.abs(t) > 1e-9) ctx.fillText(n(t, 2), X(t) + 2, Math.min(Math.max(Y(0) + 13, 12), H - 4)); }
    for (t = Math.ceil(y0 / sy) * sy; t <= y1; t += sy) { linea(0, Y(t), W, Y(t), 1, 0.12); if (Math.abs(t) > 1e-9) ctx.fillText(n(t, 2), Math.min(Math.max(X(0) + 4, 4), W - 34), Y(t) - 3); }
    linea(0, Y(0), W, Y(0), 1.5, 0.6); linea(X(0), 0, X(0), H, 1.5, 0.6);
    ctx.setLineDash([6, 5]); ctx.strokeStyle = PUNTOS.vertice; linea(X(q.h), 0, X(q.h), H, 1.5, 0.8); ctx.setLineDash([]);
    ctx.strokeStyle = '#4f6df5'; ctx.lineWidth = 2.8; ctx.beginPath();
    for (var i = 0; i <= W; i++) { var x = x0 + (x1 - x0) * i / W, y = Math.max(-4 * H, Math.min(5 * H, Y(f(x)))); if (i) ctx.lineTo(i, y); else ctx.moveTo(i, y); }
    ctx.stroke();
    function punto(x, y, col, et) { ctx.fillStyle = col; ctx.beginPath(); ctx.arc(X(x), Y(y), 5.5, 0, 2 * Math.PI); ctx.fill(); if (et) { ctx.font = '700 12px system-ui, sans-serif'; ctx.fillText(et, Math.min(X(x) + 8, W - ctx.measureText(et).width - 4), Math.max(14, Y(y) - 8)); } }
    punto(0, c, PUNTOS.corte, '');
    if (b) punto(2 * q.h, c, PUNTOS.simetrico, '');
    q.reales.forEach(function (x) { punto(x, 0, PUNTOS.raiz, '(' + n(x, 2) + ', 0)'); });
    punto(q.h, q.k, PUNTOS.vertice, 'V(' + n(q.h, 2) + ', ' + n(q.k, 2) + ')');
    if (cursor != null) { var cx = x0 + (x1 - x0) * cursor; punto(cx, f(cx), PUNTOS.cursor, '(' + n(cx, 2) + ', ' + n(f(cx), 2) + ')'); }
  }
  function lista(p) { return '<ol class="s2-steps s2-calc-steps">' + p.map(function (s) { return '<li class="s2-step">' + s + '</li>'; }).join('') + '</ol>'; }
  function campo(id, etq, val) { return '<label class="n9-in"><span>' + etq + '</span><input type="number" name="' + id + '" value="' + val + '" step="1" inputmode="decimal"></label>'; }

  function herramientaCuad(box) {
    box.innerHTML = '<h3>Calculadora de parábolas y ecuaciones cuadráticas</h3><p class="muted small">Escribe a, b y c de y = ax² + bx + c. Pasa el cursor (o el dedo) sobre la gráfica para leer puntos.</p>' +
      '<div class="n9-inputs">' + campo('a', 'a', 1) + campo('b', 'b', -4) + campo('c', 'c', 3) + '</div><div class="n9-datos" aria-live="polite"></div>' +
      '<canvas class="n9-canvas" role="img" aria-label="Gráfica de la parábola"></canvas>' +
      '<p class="n9-leyenda"><span class="v">● Vértice y eje</span><span class="r">● Raíces</span><span class="y">● Corte con y</span><span class="s">● Simétrico</span></p><div class="n9-pasos"></div>';
    var cv = box.querySelector('canvas'), q, v;
    function leer(k) { var t = box.querySelector('[name="' + k + '"]').value.trim(), x = t === '' ? NaN : +t; return isFinite(x) && Math.abs(x) <= 10000 ? x : NaN; }
    function pintar() {
      v = [leer('a'), leer('b'), leer('c')];
      q = v.some(isNaN) ? { error: 'Escribe tres números entre −10000 y 10000.' } : cuadratica(v[0], v[1], v[2]);
      box.querySelector('.n9-datos').innerHTML = q.error ? '<div class="s2-calc-err">' + q.error + '</div>' :
        '<div class="s2-result">y = ' + poly(v[0], v[1], v[2]) + '</div><dl class="n9-dl">' + [['Discriminante', 'Δ = ' + n(q.D)], ['Raíces', q.raices], ['Vértice', q.vertice], ['Eje de simetría', q.eje], ['Forma canónica', q.canon]].map(function (d) { return '<div><dt>' + d[0] + '</dt><dd>' + d[1] + '</dd></div>'; }).join('') + '</dl>';
      box.querySelector('.n9-pasos').innerHTML = q.error ? '' : lista(q.pasos);
      dibujar(cv, v[0], v[1], v[2], q);
    }
    box.querySelector('.n9-inputs').addEventListener('input', pintar);
    cv.addEventListener('pointermove', function (e) { var b = cv.getBoundingClientRect(); dibujar(cv, v[0], v[1], v[2], q, (e.clientX - b.left) / b.width); });
    cv.addEventListener('pointerleave', function () { dibujar(cv, v[0], v[1], v[2], q); });
    if (global.ResizeObserver) new ResizeObserver(function () { if (cv.clientWidth && q) dibujar(cv, v[0], v[1], v[2], q); }).observe(box);
    pintar();
  }

  /* ---------- radicales ---------- */
  function simplificar(k, m) {
    var s = raiz(m), pasos = ['Busca el mayor cuadrado perfecto que divide a ' + m + ': es ' + (s.f * s.f) + '.', '√' + m + ' = √(' + (s.f * s.f) + '·' + s.s + ') = ' + term(s.f, s.s) + '.'];
    if (k !== 1) pasos.push('Multiplica por el coeficiente ' + n(k) + '.');
    var res = m === 0 || k === 0 ? '0' : term(k * s.f, s.s);
    return { res: res, valor: k * Math.sqrt(m), pasos: pasos };
  }
  /* c / (p√a + sg·q√b); q = 0 para monomio; radicando 1 para un número entero */
  function racionalizar(c, p, a, s, q, b) {
    var pasos = [], A = raiz(a), B = raiz(b), P = p * A.f, Q = s * q * B.f; a = A.s; b = B.s;
    var inicial = q ? term(p * A.f, a) + (Q < 0 ? ' − ' : ' + ') + term(Math.abs(Q), b) : term(P, a);
    pasos.push('Simplifica las raíces del denominador: ' + inicial + '.');
    if (Q && a === b) { P += Q; Q = 0; pasos.push('Son radicales semejantes: se suman y queda ' + term(P, a) + '.'); }
    if (!P && Q) { P = Q; a = b; Q = 0; }
    if (!P) return { error: 'El denominador es cero: elige otros valores.' };
    var n1, n2 = 0, D, r2 = b;
    if (!Q) {
      if (a === 1) { n1 = c; D = P; pasos.push('El denominador ya no tiene raíces: solo simplifica.'); }
      else { n1 = c; D = P * a; pasos.push('Denominador monomio: multiplica arriba y abajo por √' + a + '.'); pasos.push('Queda ' + term(c, a) + ' / ' + n(D) + '.'); }
    } else {
      D = P * P * a - Q * Q * b; n1 = c * P; n2 = -c * Q;
      pasos.push('Conjugado: ' + term(P, a) + (Q < 0 ? ' + ' : ' − ') + term(Math.abs(Q), b) + '. Multiplica arriba y abajo por él.');
      pasos.push('Denominador (diferencia de cuadrados): ' + n(P * P * a) + ' − ' + n(Q * Q * b) + ' = ' + n(D) + '.');
    }
    var g = n2 ? mcd(mcd(n1, n2), D) : mcd(n1, D); n1 /= g; n2 /= g; D /= g; if (D < 0) { D = -D; n1 = -n1; n2 = -n2; }
    if (g > 1) pasos.push('Simplifica entre ' + g + '.');
    var t1 = [n1, a], t2 = [n2, r2];
    if (n2 > 0 && n1 < 0) { t1 = [n2, r2]; t2 = [n1, a]; }
    var num = n1 === 0 ? '0' : term(t1[0], t1[1]) + (n2 ? (t2[0] < 0 ? ' − ' : ' + ') + term(Math.abs(t2[0]), t2[1]) : '');
    var res = n1 === 0 && !n2 ? '0' : D === 1 ? num : (n2 ? '(' + num + ')' : num) + '/' + D;
    var valor = (n1 * Math.sqrt(a) + n2 * Math.sqrt(r2)) / D;
    pasos.push('Resultado sin raíces en el denominador: ' + res + '.');
    return { res: res, valor: valor, pasos: pasos };
  }
  function herramientaRad(box) {
    box.innerHTML = '<h3>Simplificador y racionalizador de radicales</h3><div class="n9-inputs"><label class="n9-in ancho"><span>¿Qué quieres hacer?</span><select name="modo"><option value="bin">Racionalizar c / (p√a ± q√b)</option><option value="mono">Racionalizar c / (p√a)</option><option value="simp">Simplificar k√n</option></select></label></div><div class="n9-inputs" data-campos></div><div class="n9-datos" aria-live="polite"></div>';
    var sel = box.querySelector('select'), campos = box.querySelector('[data-campos]'), out = box.querySelector('.n9-datos');
    var nota = '<p class="muted small ancho">Usa números enteros. Con radicando 1 el término es un entero (√1 = 1).</p>';
    function forma() {
      var m = sel.value;
      campos.innerHTML = m === 'simp' ? campo('k', 'k', 1) + campo('m', 'n (radicando)', 72) :
        m === 'mono' ? campo('c', 'c', 6) + campo('p', 'p', 1) + campo('a', 'a', 3) + nota :
        campo('c', 'c', 4) + campo('p', 'p', 1) + campo('a', 'a', 5) + '<label class="n9-in"><span>signo</span><select name="s"><option value="1">+</option><option value="-1">−</option></select></label>' + campo('q', 'q', 1) + campo('b', 'b', 1) + nota;
      pintar();
    }
    function pintar() {
      var v = {}, ok = true;
      Array.prototype.forEach.call(campos.querySelectorAll('[name]'), function (el) { var x = el.value.trim() === '' ? NaN : +el.value; v[el.name] = x; if (!Number.isInteger(x) || Math.abs(x) > 100000) ok = false; });
      var res;
      if (!ok) res = { error: 'Completa todos los campos con enteros (hasta 100000).' };
      else if (sel.value === 'simp') res = v.m < 0 ? { error: 'La raíz cuadrada de un negativo no es real.' } : simplificar(v.k, v.m);
      else if (v.a < 1 || (sel.value === 'bin' && v.b < 1)) res = { error: 'Los radicandos deben ser positivos.' };
      else res = sel.value === 'mono' ? racionalizar(v.c, v.p, v.a, 1, 0, 1) : racionalizar(v.c, v.p, v.a, v.s, v.q, v.b);
      out.innerHTML = res.error ? '<div class="s2-calc-err">' + res.error + '</div>' : '<div class="s2-result">' + res.res + ' ≈ ' + n(res.valor) + '</div>' + lista(res.pasos);
    }
    sel.addEventListener('change', forma); campos.addEventListener('input', pintar); campos.addEventListener('change', pintar);
    forma();
  }

  /* ---------- contrato común ---------- */
  function V(id, label, min, max, def, step) { return { id: id, label: label, min: min, max: max, step: step || 1, def: def }; }
  function R(resultado, pasos, extra) { return { tipo: 'valor', resultado: resultado, pasos: pasos, extra: extra }; }
  var abc = [V('a', 'a', -5, 5, 1), V('b', 'b', -10, 10, -4), V('c', 'c', -10, 10, 3)];
  function runCuad(v) { var q = cuadratica(v.a, v.b, v.c); return q.error ? R(q.error, []) : R(q.raices, q.pasos); }
  var C = {
    binomios: { titulo: 'Cuadrado de un binomio (ax + b)²', vars: [V('a', 'a', 1, 6, 2), V('b', 'b', -9, 9, 3)], run: function (v) { var A = v.a * v.a, B = 2 * v.a * v.b, K = v.b * v.b; return R(bin(v.a, v.b) + '² = ' + poly(A, B, K), ['Cuadrado del primero: ' + poly(A, 0, 0) + '.', 'Doble producto: ' + (B ? poly(0, B, 0) : '0') + '.', 'Cuadrado del segundo: ' + n(K) + '.']); } },
    difcuad: { titulo: 'Factor común y diferencia de cuadrados: k(a²x² − b²)', vars: [V('k', 'Factor común k', 1, 9, 2), V('a', 'a', 1, 9, 3), V('b', 'b', 1, 9, 5)], run: function (v) { var g = mcd(v.a, v.b), a = v.a / g, b = v.b / g, k = v.k * g * g, K = k === 1 ? '' : String(k); return R(poly(v.k * v.a * v.a, 0, -v.k * v.b * v.b) + ' = ' + K + bin(a, b) + bin(a, -b), ['Extrae el mayor factor común: ' + k + '.', 'Dentro queda ' + poly(a * a, 0, -b * b) + '.', 'Aplica a² − b² = (a + b)(a − b).']); } },
    trinomio: { titulo: 'Factorizar x² + bx + c', vars: [V('b', 'b', -15, 15, 5), V('c', 'c', -30, 30, 6)], run: function (v) { var D = v.b * v.b - 4 * v.c, s = Math.sqrt(D); if (D < 0 || !Number.isInteger(s) || (v.b + s) % 2) return R('No factoriza con números enteros', ['Se buscan dos enteros con suma ' + n(v.b) + ' y producto ' + n(v.c) + '.', 'Δ = ' + n(D) + ' no es un cuadrado perfecto.']); var p = (v.b - s) / 2, q = (v.b + s) / 2; return R(poly(1, v.b, v.c) + ' = ' + bin(1, p) + bin(1, q), ['Busca dos números con suma ' + n(v.b) + ' y producto ' + n(v.c) + '.', 'Son ' + n(p) + ' y ' + n(q) + '.']); } },
    radicales: { titulo: 'Simplificar k√n', vars: [V('k', 'k', 1, 10, 1), V('m', 'n', 1, 200, 72)], custom: herramientaRad, run: function (v) { var s = simplificar(v.k, v.m); return R(s.res, s.pasos); } },
    racionalizar: { titulo: 'Racionalizar c / (√a + b)', vars: [V('c', 'c', 1, 20, 4), V('a', 'a', 2, 30, 5), V('b', 'b', 0, 9, 1)], custom: herramientaRad, run: function (v) { var s = racionalizar(v.c, 1, v.a, 1, v.b, 1); return s.error ? R(s.error, []) : R(s.res, s.pasos); } },
    cuadfac: { titulo: 'Ecuación cuadrática', vars: abc, custom: herramientaCuad, run: runCuad },
    cuadformula: { titulo: 'Fórmula general', vars: abc, custom: herramientaCuad, run: runCuad },
    parabola: { titulo: 'Parábola y = ax² + bx + c', vars: abc, custom: herramientaCuad, run: runCuad },
    tales: { titulo: 'Teorema de Tales: a/b = c/x', vars: [V('a', 'a', 1, 20, 3), V('b', 'b', 1, 20, 6), V('c', 'c', 1, 20, 4)], run: function (v) { var x = v.b * v.c / v.a; return R('x = ' + frac(v.b * v.c, v.a), ['Plantea ' + v.a + '/' + v.b + ' = ' + v.c + '/x.', 'x = ' + v.b + '·' + v.c + '/' + v.a + ' ≈ ' + n(x) + '.']); } },
    semejanza: { titulo: 'Semejanza: lados, perímetro y área', vars: [V('a', 'Lado a', 1, 20, 3), V('b', 'Lado b', 1, 20, 4), V('k', 'Razón k', 0.5, 5, 2, 0.5)], run: function (v) { return R('Lados: ' + n(v.a * v.k) + ' y ' + n(v.b * v.k), ['Multiplica cada lado por k = ' + n(v.k) + '.', 'El perímetro se multiplica por ' + n(v.k) + '.', 'El área se multiplica por k² = ' + n(v.k * v.k) + '.']); } },
    pitagoras: { titulo: 'Hipotenusa y diagonal 3D', vars: [V('a', 'a', 1, 20, 3), V('b', 'b', 1, 20, 4), V('c', 'Altura c (0 = plano)', 0, 20, 0)], run: function (v) { var q = v.a * v.a + v.b * v.b + v.c * v.c, s = raiz(q); return R((v.c ? 'D = ' : 'h = ') + term(s.f, s.s) + ' ≈ ' + n(Math.sqrt(q)), ['Suma los cuadrados: ' + v.a + '² + ' + v.b + '²' + (v.c ? ' + ' + v.c + '²' : '') + ' = ' + q + '.', 'Saca la raíz cuadrada.']); } },
    angulos: { titulo: 'Ángulo central e inscrito', vars: [V('g', 'Ángulo central (°)', 10, 340, 100, 2)], run: function (v) { return R('Inscrito = ' + n(v.g / 2) + '°', ['El inscrito mide la mitad del central sobre el mismo arco.', n(v.g) + '° / 2 = ' + n(v.g / 2) + '°.']); } },
    dispersion: { titulo: 'Rango, varianza y desviación típica', vars: [V('a', 'Dato 1', 0, 20, 2), V('b', 'Dato 2', 0, 20, 5), V('c', 'Dato 3', 0, 20, 8), V('d', 'Dato 4', 0, 20, 9), V('e', 'Dato 5', 0, 20, 11)], run: function (v) { var d = [v.a, v.b, v.c, v.d, v.e], m = d.reduce(function (x, y) { return x + y; }) / 5, vr = d.reduce(function (x, y) { return x + (y - m) * (y - m); }, 0) / 5; return R('σ ≈ ' + n(Math.sqrt(vr)), ['Rango: ' + (Math.max.apply(null, d) - Math.min.apply(null, d)) + '.', 'Media: ' + n(m) + '.', 'Varianza (poblacional): σ² = ' + n(vr) + '.', 'Desviación típica: √' + n(vr) + ' ≈ ' + n(Math.sqrt(vr)) + '.']); } }
  };
  global.T9Calc = { CALCS: C, cuadratica: cuadratica, racionalizar: racionalizar, simplificar: simplificar };
})(window);

/* pizarra-2a-5.js — Métodos en pizarra, 2.º año, temas 1.16 a 1.20 */
window.PIZARRA_2A = window.PIZARRA_2A || {};
(function (PZ) { var P = window.PIZARRA_2A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, flecha = PZ.flecha, ambos = PZ.ambos, tach = PZ.tach, tabla = PZ.tabla;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', R = '#ff8a80', BG = '#203f33';

  /* ---------- ayudantes de dibujo (texto plano dentro del svg) ---------- */
  function svg(h, inner, w) {
    return '<svg viewBox="0 0 420 ' + h + '" style="width:min(100%,' + (w || 440) + 'px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="figura de pizarra"><g font-family="\'Patrick Hand\',cursive" font-size="20" fill="#f4f6ef" stroke-linecap="round" stroke-linejoin="round">' + inner + '</g></svg>';
  }
  function L(x1, y1, x2, y2, col, w, dash, op) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (col || W) + '" stroke-width="' + (w || 3) + '"' + (dash ? ' stroke-dasharray="7 6"' : '') + (op ? ' stroke-opacity="' + op + '"' : '') + '/>';
  }
  function T(x, y, s, col, sz, anc, extra) {
    return '<text x="' + x + '" y="' + y + '" fill="' + (col || W) + '" font-size="' + (sz || 20) + '" text-anchor="' + (anc || 'middle') + '"' + (extra || '') + '>' + s + '</text>';
  }
  function poly(pts, col, w, fill) {
    return '<path d="M' + pts.map(function (p) { return p[0] + ' ' + p[1]; }).join('L') + 'Z" fill="' + (fill || 'none') + '" stroke="' + (col || W) + '" stroke-width="' + (w || 3) + '"/>';
  }
  function sq(x, y, dx, dy) { /* marca de ángulo recto en la esquina (x,y); dx,dy = sentido hacia dentro de cada cateto */
    return '<path d="M' + (x + dx * 18) + ' ' + y + 'L' + (x + dx * 18) + ' ' + (y + dy * 18) + 'L' + x + ' ' + (y + dy * 18) + '" fill="none" stroke="' + W + '" stroke-width="2"/>';
  }
  function head(cx, cy, ex, ey, col) { /* punta de flecha en (ex,ey) viniendo de (cx,cy) */
    var dx = ex - cx, dy = ey - cy, n = Math.sqrt(dx * dx + dy * dy), ux = dx / n, uy = dy / n, a = 9, b = 5;
    var x1 = ex - ux * a - uy * b, y1 = ey - uy * a + ux * b, x2 = ex - ux * a + uy * b, y2 = ey - uy * a - ux * b;
    return '<path d="M' + x1.toFixed(1) + ' ' + y1.toFixed(1) + 'L' + ex + ' ' + ey + 'L' + x2.toFixed(1) + ' ' + y2.toFixed(1) + '" fill="none" stroke="' + col + '" stroke-width="2.6"/>';
  }
  /* términos de una sucesión con arcos de operación entre ellos */
  function seq(terms, op, col, o) {
    o = o || {}; var n = terms.length, st = 400 / n, s = '', i, xs = [];
    for (i = 0; i < n; i++) xs.push(10 + st * (i + 0.5));
    for (i = 0; i < n; i++) {
      s += T(xs[i], 112, terms[i], i === n - 1 && o.dots ? W : Y, 30);
      if (o.idx) s += T(xs[i], 150, o.idx[i], B, 17);
    }
    if (op) for (i = 0; i < n - 1; i++) {
      var sx = xs[i] + 24, ex = xs[i + 1] - 24, mx = (sx + ex) / 2;
      s += '<path d="M' + sx + ' 86Q' + mx + ' 36 ' + ex + ' 86" fill="none" stroke="' + col + '" stroke-width="2.6"/>' + head(mx, 36, ex, 86, col) + T(mx, 50, op, col, 21);
    }
    return svg(165, s, 460);
  }
  /* dos filas de Gauss (10 términos): stage 1 solo la suma, 2 con la suma al revés, 3 con las sumas de columna */
  function gauss(stage) {
    var t = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29], s = '', i, x;
    s += T(210, 22, stage === 1 ? 'S = los 10 términos' : stage === 2 ? 'abajo: la misma suma, pero al revés' : 'cada columna suma lo mismo', stage === 3 ? G : W, 17);
    for (i = 0; i < 10; i++) {
      x = 30 + 40 * i;
      s += T(x, 62, t[i], Y, 24);
      if (stage >= 2) s += T(x, 108, t[9 - i], K, 24);
      if (stage >= 3) s += T(x, 160, t[i] + t[9 - i], G, 24);
    }
    if (stage >= 3) s += L(14, 122, 406, 122, W, 2.4);
    return svg(stage === 3 ? 180 : 130, s, 460);
  }
  /* cajas numeradas (factorial / permutaciones) */
  function boxes(n, vals, tops, caps) {
    var w = n === 5 ? 64 : 100, sp = n === 5 ? 80 : 130, x0 = (420 - ((n - 1) * sp + w)) / 2, s = '', i, x;
    for (i = 0; i < n; i++) {
      x = x0 + i * sp;
      s += '<rect x="' + x + '" y="58" width="' + w + '" height="70" rx="8" fill="none" stroke="' + W + '" stroke-width="3"/>';
      s += T(x + w / 2, 44, tops[i] || '', W, 18);
      if (vals[i] !== undefined && vals[i] !== '') s += T(x + w / 2, 108, vals[i], Y, 38);
      if (caps && caps[i]) s += T(x + w / 2, 156, caps[i], K, 16);
    }
    return svg(172, s, 460);
  }
  /* recta numérica */
  function nline(mn, mx, ay, h, o) {
    var s = '', i, X = function (v) { return 30 + (v - mn) * 360 / (mx - mn); };
    s += L(14, ay, 406, ay, W, 2.4) + head(380, ay, 406, ay, W);
    for (i = mn; i <= mx; i++) s += L(X(i), ay - 5, X(i), ay + 5, W, 2) + T(X(i), ay + 26, String(i).replace('-', '−'), W, 17);
    (o.guides || []).forEach(function (v) { s += L(X(v), 30, X(v), ay, W, 1.5, true, 0.35); });
    (o.items || []).forEach(function (it) {
      if (it.t === 'seg') s += L(X(it.a), it.y, X(it.b), it.y, it.col, 6);
      else if (it.t === 'pt') s += '<circle cx="' + X(it.v) + '" cy="' + it.y + '" r="7.5" fill="' + (it.closed ? it.col : BG) + '" stroke="' + it.col + '" stroke-width="3.2"/>';
      else if (it.t === 'lbl') s += T(it.x, it.y, it.s, it.col, it.sz || 19, it.anc || 'middle');
    });
    return svg(h, s, 460);
  }
  /* diagrama de Venn de dos conjuntos */
  function venn(o) {
    var s = '', lens = 'M205 40.2A65 65 0 0 1 205 149.8A65 65 0 0 1 205 40.2Z', col = o.col || Y, cs = o.big ? 34 : 21;
    s += '<rect x="10" y="8" width="400" height="176" rx="6" fill="none" stroke="' + W + '" stroke-opacity=".7" stroke-width="2.4"/>' + T(26, 32, o.u || 'U', W, 20);
    if (o.shade === 'int') s += '<path d="' + lens + '" fill="' + col + '" fill-opacity=".5"/>';
    if (o.shade === 'uni') s += '<circle cx="170" cy="95" r="65" fill="' + col + '" fill-opacity=".38"/><circle cx="240" cy="95" r="65" fill="' + col + '" fill-opacity=".38"/>';
    if (o.shade === 'amb') s += '<path d="M205 40.2A65 65 0 1 0 205 149.8A65 65 0 0 1 205 40.2Z" fill="' + col + '" fill-opacity=".5"/>';
    if (o.shade === 'comp') s += '<path d="M10 8H410V184H10Z M205 40.2A65 65 0 1 0 205 149.8A65 65 0 1 0 205 40.2Z" fill="' + col + '" fill-opacity=".42" fill-rule="evenodd"/>';
    s += '<circle cx="170" cy="95" r="65" fill="none" stroke="' + B + '" stroke-width="3.4"/><circle cx="240" cy="95" r="65" fill="none" stroke="' + K + '" stroke-width="3.4"/>';
    s += T(62, 36, o.na || 'A', B, 22) + T(348, 36, o.nb || 'B', K, 22);
    function lst(items, cx) {
      var k = items.length, i, y0 = 95 - (k - 1) * 14 + (o.big ? 11 : 6);
      if (o.big) y0 = 107;
      for (i = 0; i < k; i++) s += T(cx, o.big ? y0 : y0 + i * 28, items[i], W, cs);
    }
    var z = o.sets || {};
    lst(z.a || [], 143); lst(z.ab || [], 205); lst(z.b || [], 266); lst(z.out || [], 360);
    if (o.cap) s += T(210, 207, o.cap, o.capcol || Y, 20);
    return svg(o.cap ? 216 : 192, s, 400);
  }

  /* ============================================================
     1.16  Trigonometría
     ============================================================ */
  function tri40(stage) {
    var A = [40, 230], Bb = [290, 230], C = [290, 20], s = '';
    var cs = stage === 2;
    s += L(A[0], A[1], Bb[0], Bb[1], cs ? B : W, 4.5) + L(Bb[0], Bb[1], C[0], C[1], cs ? K : W, 4.5) + L(A[0], A[1], C[0], C[1], cs ? Y : W, 4.5);
    s += '<path d="M270 230L270 210L290 210" fill="none" stroke="' + W + '" stroke-width="2"/>';
    s += '<path d="M92 230A52 52 0 0 0 80.8 197.8" fill="none" stroke="' + G + '" stroke-width="3"/>' + T(112, 222, '40°', G, 20);
    if (cs) {
      s += T(165, 254, 'adyacente (30 m)', B, 20) + T(300, 120, 'opuesto', K, 20, 'start') + T(300, 143, '(la altura x)', K, 17, 'start');
      s += T(150, 105, 'hipotenusa', Y, 20, 'middle', ' transform="rotate(-40 150 105)"');
    } else {
      s += T(165, 254, '30 m', W, 20) + T(302, 130, 'x', W, 24, 'start');
    }
    return svg(262, s, 440);
  }
  function tri45(stage) {
    var s = '';
    s += L(70, 65, 230, 65, W, 2, true, .4) + L(230, 65, 230, 225, W, 2, true, .4);
    s += poly([[70, 225], [230, 225], [70, 65]], W, 4.5, 'rgba(255,226,122,.08)');
    s += '<path d="M70 207L88 207L88 225" fill="none" stroke="' + W + '" stroke-width="2"/>';
    s += T(48, 152, '1', B, 26) + T(150, 252, '1', B, 26);
    s += T(176, 128, stage ? '√2' : '?', Y, 26, 'start') + T(190, 213, '45°', G, 18) + T(104, 104, '45°', G, 18, 'start');
    s += T(330, 140, 'mitad de un', W, 18) + T(330, 162, 'cuadrado', W, 18);
    return svg(262, s, 440);
  }
  function triEq(stage) {
    var Lp = [30, 235], Rr = [250, 235], Tp = [140, 44.5], s = '';
    s += poly([Lp, Rr, Tp], W, 4.5);
    if (stage === 2) s += poly([Lp, [140, 235], Tp], K, 4.5, 'rgba(255,159,196,.22)');
    s += L(140, 44.5, 140, 235, stage === 2 ? K : Y, 3, true);
    s += T(60, 134, '2', Y, 24, 'end') + T(222, 134, '2', Y, 24, 'start') + T(85, 258, '1', B, 24) + T(195, 258, '1', B, 24);
    s += T(66, 222, '60°', G, 17, 'start') + T(226, 222, '60°', G, 17, 'end') + T(150, 150, stage === 2 ? 'h = ?' : 'h', K, 22, 'start');
    s += T(330, 130, 'mitad de un', W, 18) + T(330, 152, 'triángulo', W, 18) + T(330, 174, 'equilátero', W, 18);
    return svg(268, s, 440);
  }
  function tri3090() {
    var s = '';
    s += poly([[110, 230], [210, 230], [210, 57]], W, 4.5);
    s += L(110, 230, 210, 230, B, 4.5) + L(210, 230, 210, 57, K, 4.5) + L(110, 230, 210, 57, Y, 4.5);
    s += '<path d="M192 230L192 212L210 212" fill="none" stroke="' + W + '" stroke-width="2"/>';
    s += T(160, 254, '1', B, 26) + T(226, 150, '√3', K, 26, 'start') + T(140, 128, '2', Y, 26, 'end');
    s += T(196, 100, '30°', G, 18, 'end') + T(142, 218, '60°', G, 18, 'start');
    s += T(330, 110, 'lado menor', B, 16) + T(330, 130, '(frente a 30°)', B, 16) + T(330, 175, 'lado mayor', K, 16) + T(330, 195, '(frente a 60°)', K, 16);
    return svg(266, s, 440);
  }
  function triLeyes() {
    var s = '', Ct = [50, 220], Bt = [330, 220], At = [150, 46.8];
    s += poly([Ct, Bt, At], W, 4.5);
    s += L(Ct[0], Ct[1], Bt[0], Bt[1], B, 4.5) + L(Ct[0], Ct[1], At[0], At[1], K, 4.5) + L(At[0], At[1], Bt[0], Bt[1], Y, 4.5);
    s += '<path d="M90 220A40 40 0 0 0 70 185.4" fill="none" stroke="' + G + '" stroke-width="3"/>' + T(94, 206, '60°', G, 18, 'start');
    s += T(190, 246, 'a = 7', B, 21) + T(92, 120, 'b = 5', K, 21, 'end') + T(268, 120, 'c = ?', Y, 22, 'start');
    s += T(150, 36, 'A', W, 22) + T(344, 238, 'B', W, 22) + T(34, 238, 'C', W, 22);
    return svg(256, s, 440);
  }

  P['1.16'] = [
    {
      titulo: 'SOH-CAH-TOA: hallar un lado',
      intro: 'Te paras a 30 m de un poste y lo ves hacia arriba con un ángulo de 40°. ¿Qué altura tiene el poste (sobre tus ojos)?',
      pasos: [
        { nota: 'Primero siempre un dibujo. Es un triángulo con un ángulo recto: el suelo, el poste y la línea con la que lo miras. Conocemos 30 m y 40°; buscamos x.', html: tri40(1) },
        { nota: 'Ahora ponemos nombre a los lados, <b>mirando desde el ángulo de 40°</b>: el de enfrente es el <b>opuesto</b>, el que toca el ángulo es el <b>adyacente</b> y el más largo es la <b>hipotenusa</b>.', reemplaza: true, html: tri40(2) },
        { nota: 'La regla para no olvidarse: <b>SOH-CAH-TOA</b>. Cada pedacito dice qué razón usar: Seno es Opuesto sobre Hipotenusa, Coseno es Adyacente sobre Hipotenusa, Tangente es Opuesto sobre Adyacente.', html: row(c('p', 'SOH') + ' &nbsp; sen θ = ' + f(c('p', 'opuesto'), c('y', 'hipotenusa'))) + row(c('b', 'CAH') + ' &nbsp; cos θ = ' + f(c('b', 'adyacente'), c('y', 'hipotenusa'))) + row(c('g', 'TOA') + ' &nbsp; tan θ = ' + f(c('p', 'opuesto'), c('b', 'adyacente'))) },
        { nota: '¿Qué lados tengo y cuál busco? Tengo el adyacente (30) y busco el opuesto (x). La razón que junta opuesto y adyacente es <b>TOA</b>, la tangente. La hipotenusa no se usa.', html: say('Tengo ' + c('b', 'adyacente') + ' y busco ' + c('p', 'opuesto') + ' ⇒ uso ' + c('g', 'TOA (tangente)'), 'w') },
        { nota: 'Escribimos TOA con los números: tan 40° es igual al opuesto (x) entre el adyacente (30).', html: row('tan 40° = ' + f(c('p', 'x'), c('b', '30'))) },
        { nota: 'Queremos x sola. Como el 30 está dividiendo, lo pasamos multiplicando: multiplicamos los dos lados por 30.', html: ambos('× 30', 'y') + row('x = 30 · tan 40°', 'x despejada', 'y') },
        { nota: 'Con la calculadora (en modo grados, DEG) tan 40° ≈ 0,8391. Multiplicamos por 30.', html: row('x = 30 · 0,8391 ≈ 25,17') },
        { nota: 'El poste mide unos 25,2 m. Tiene sentido: es menor que 30 porque 40° es menos de 45°, y a 45° la altura sería igual a la distancia.', html: say(box('x ≈ 25,2 m'), 'g') }
      ]
    },
    {
      titulo: 'Triángulos notables 45-45-90 y 30-60-90',
      intro: 'Dos triángulos cuyos lados se conocen exactos. Con ellos obtienes sen, cos y tan de 30°, 45° y 60° sin calculadora.',
      pasos: [
        { nota: 'Tomamos un cuadrado de lado 1 y lo cortamos por la diagonal. Salen dos triángulos iguales con ángulos 45°, 45° y 90°. Los dos catetos valen 1; falta la diagonal.', html: tri45(0) },
        { nota: 'La diagonal es la hipotenusa: usamos Pitágoras (suma de los cuadrados de los catetos).', html: row('1² + 1² = h²') + row('2 = h² &nbsp;⇒&nbsp; ' + c('y', 'h = √2')) },
        { nota: 'Ya tenemos el triángulo 45-45-90: lados 1, 1 y √2. Ahora sacamos las razones con SOH-CAH-TOA. Como los dos catetos son iguales, el seno y el coseno coinciden y la tangente vale 1.', reemplaza: false, html: row('sen 45° = ' + f('1', '√2') + ' = ' + c('g', f('√2', '2')), 'racionalizando', 'y') + row('cos 45° = ' + c('g', f('√2', '2'))) + row('tan 45° = ' + f('1', '1') + ' = ' + c('g', '1')) },
        { nota: 'Segundo triángulo: uno equilátero de lado 2 (sus tres ángulos miden 60°). Lo partimos por la mitad con una altura h: cada mitad tiene base 1 e hipotenusa 2.', html: triEq(1) },
        { nota: 'La mitad que nos interesa (en rosa) es un triángulo rectángulo. Sus ángulos: 90°, 60° abajo y 30° arriba (la altura parte el ángulo de 60° en dos). Falta h.', reemplaza: true, html: triEq(2) },
        { nota: 'Pitágoras otra vez: 1² + h² = 2². Despejamos h² = 4 − 1 = 3.', html: row('1² + h² = 2²') + row('h² = 4 − 1 = 3 &nbsp;⇒&nbsp; ' + c('p', 'h = √3')) },
        { nota: 'El triángulo 30-60-90 tiene lados 1, √3 y 2. Fíjate: el lado menor está frente al ángulo menor (30°) y el mayor frente a 60°.', html: tri3090() },
        { nota: 'Con estos dos triángulos armamos la tabla. Por ejemplo sen 30° = opuesto/hipotenusa = 1/2 y tan 60° = √3/1.', html: tabla(['θ', 'sen θ', 'cos θ', 'tan θ'], [['30°', f('1', '2'), f('√3', '2'), f('√3', '3')], ['45°', f('√2', '2'), f('√2', '2'), '1'], ['60°', f('√3', '2'), f('1', '2'), '√3']]) },
        { nota: 'Úsalo para triángulos más grandes: si es 30-60-90 con hipotenusa 10, la hipotenusa era 2, así que multiplicamos todo por 5. Lados: 5, 5√3 y 10.', html: say('hipotenusa = 10 &nbsp;⇒&nbsp; 2 · 5 = 10', 'y') + flecha('× 5 todos los lados', 'y') + row(c('b', '1 · 5 = 5') + ' &nbsp;&nbsp; ' + c('p', '√3 · 5 = 5√3') + ' &nbsp;&nbsp; ' + c('y', '2 · 5 = 10')) }
      ]
    },
    {
      titulo: 'Ley del coseno y ley del seno',
      intro: 'Triángulo sin ángulo recto: se conocen a = 7, b = 5 y el ángulo C = 60° entre ellos. Hallar el lado c y los demás ángulos.',
      pasos: [
        { nota: 'Aquí no hay ángulo recto, así que SOH-CAH-TOA no sirve directo. Conocemos dos lados y el ángulo que queda justo <b>entre</b> ellos.', html: triLeyes() },
        { nota: 'Dos lados y el ángulo de en medio es el caso de la <b>ley del coseno</b>: es Pitágoras con un ajuste para triángulos cualquiera.', html: say('2 lados + ángulo entre ellos ⇒ ' + c('y', 'ley del coseno')) },
        { nota: 'La fórmula: el lado que buscamos al cuadrado es la suma de los otros dos al cuadrado, menos 2 por sus longitudes por el coseno del ángulo de enfrente.', html: row(c('y', 'c²') + ' = ' + c('b', 'a²') + ' + ' + c('p', 'b²') + ' − 2 · a · b · cos C') },
        { nota: 'Sustituimos con cuidado los números: a = 7, b = 5 y C = 60°.', html: row('c² = 7² + 5² − 2 · 7 · 5 · cos 60°') },
        { nota: 'cos 60° = 1/2 (el triángulo notable). Entonces 2 · 7 · 5 · 1/2 = 35.', html: row('c² = 49 + 25 − 35') + row('c² = 39', 'se resta', 'y') },
        { nota: 'Sacamos la raíz cuadrada para quedarnos con c.', html: say(box('c = √39 ≈ 6,24'), 'g') },
        { nota: 'Ahora que tenemos un lado con su ángulo opuesto (c y C), usamos la <b>ley del seno</b> para el ángulo A: el seno de un ángulo entre su lado opuesto siempre da lo mismo.', html: say('lado y su ángulo opuesto ⇒ ' + c('b', 'ley del seno')) + row(f('sen A', '7') + ' = ' + f('sen 60°', '6,24')) },
        { nota: 'Despejamos sen A: pasamos el 7 multiplicando. Luego usamos la función inversa de la calculadora (sen⁻¹) para obtener el ángulo.', html: ambos('× 7', 'y') + row('sen A = ' + f('7 · 0,866', '6,24') + ' ≈ 0,971') + row('A = sen⁻¹(0,971) ≈ ' + c('b', '76,1°')) },
        { nota: 'Los tres ángulos de un triángulo suman 180°, así que B es lo que falta. (Ojo: con el seno a veces hay dos respuestas; aquí A es el ángulo opuesto al lado más largo y se confirma con la ley del coseno que A es agudo.)', html: row('B = 180° − 60° − 76,1°') + say(box('B ≈ 43,9°'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.17  Sucesiones aritméticas
     ============================================================ */
  P['1.17'] = [
    {
      titulo: 'Diferencia d y término general',
      intro: 'En la sucesión 5, 9, 13, 17, … hallar el término número 20 sin escribir los 20.',
      pasos: [
        { nota: 'Esta lista de números sigue una regla. Cada número tiene una posición: el primero es a₁, el segundo a₂, y así.', html: seq(['5', '9', '13', '17', '…'], '', Y, { idx: ['a₁', 'a₂', 'a₃', 'a₄', ''], dots: true }) },
        { nota: '¿Qué le hago a un número para llegar al siguiente? Siempre le sumo lo mismo: <b>+4</b>. Ese número fijo se llama <b>diferencia</b> y se escribe d.', reemplaza: true, html: seq(['5', '9', '13', '17', '…'], '+ 4', K, { idx: ['a₁', 'a₂', 'a₃', 'a₄', ''], dots: true }) },
        { nota: 'Para estar seguros, restamos cada término menos el anterior. Si todas las restas dan igual, es aritmética.', html: row('9 − 5 = ' + c('p', '4'), '', 'p') + row('13 − 9 = ' + c('p', '4')) + row('17 − 13 = ' + c('p', '4')) + say('d = 4, a₁ = 5', 'y') },
        { nota: 'Miremos el patrón: para llegar a a₂ sumo d una vez; a a₃, dos veces; a a₄, tres veces. Siempre <b>una vez menos que la posición</b>.', html: tabla(['término', 'veces que sumo d', 'valor'], [['a₂', '1', '5 + 4'], ['a₃', '2', '5 + 2·4'], ['a₄', '3', '5 + 3·4'], ['aₙ', 'n − 1', '5 + (n−1)·4']]) },
        { nota: 'Eso es la fórmula del término general: parto del primero y sumo d, (n − 1) veces. El primer término ya está dado, por eso es n − 1 y no n.', html: say(box('aₙ = a₁ + d · (n − 1)'), 'y') },
        { nota: 'Ahora sí: queremos el término 20, entonces n = 20, a₁ = 5 y d = 4.', html: row('a₂₀ = ' + c('b', '5') + ' + ' + c('p', '4') + ' · (20 − 1)') },
        { nota: 'Primero el paréntesis, luego la multiplicación y al final la suma.', html: row('a₂₀ = 5 + 4 · 19') + row('a₂₀ = 5 + 76') },
        { nota: 'El término 20 es 81. Mira qué rápido: no tuvimos que escribir los 20 números.', html: say(box('a₂₀ = 81'), 'g') }
      ]
    },
    {
      titulo: 'La suma de Gauss: Sₙ',
      intro: 'Sumar los 10 primeros términos de 2, 5, 8, 11, … (se suma 3 cada vez). Truco del joven Gauss.',
      pasos: [
        { nota: 'Escribimos los diez términos: a₁ = 2, d = 3 y el décimo es 2 + 3·9 = 29. Sumarlos uno por uno es lento; hay un truco.', html: gauss(1) },
        { nota: 'El truco: escribimos la <b>misma suma al revés</b>, debajo de la primera (en rosa).', reemplaza: true, html: gauss(2) },
        { nota: 'Ahora sumamos en vertical. ¡Todas las columnas dan 31! Porque lo que sube en un lado, baja en el otro. Siempre pasa en una sucesión aritmética.', reemplaza: true, html: gauss(3) },
        { nota: 'Si sumamos las dos filas completas tenemos S + S = 2S. Son 10 columnas de 31.', html: row('S + S = 10 · 31', '10 columnas', 'y') + row('2S = 310') },
        { nota: 'Pero queríamos una sola S, así que dividimos los dos lados entre 2.', html: ambos('÷ 2', 'p') + row(c('g', 'S = 155')) },
        { nota: 'Como cada columna es (primero + último) y hay n columnas, la fórmula general es: n por (a₁ + aₙ) entre 2. Aquí: 10 · (2 + 29) / 2 = 155 ✓.', html: say(box('Sₙ = ' + f('n · (a₁ + aₙ)', '2')), 'y') + row('S₁₀ = ' + f('10 · (2 + 29)', '2') + ' = ' + c('g', '155')) }
      ]
    },
    {
      titulo: '¿Qué posición ocupa un número?',
      intro: 'En 5, 9, 13, 17, … ¿qué posición ocupa el número 101? Se despeja n de la fórmula.',
      pasos: [
        { nota: 'Datos: la sucesión empieza en 5 y sube de 4 en 4. Buscamos la posición n donde aparece 101.', html: row('a₁ = 5 &nbsp;&nbsp; d = 4 &nbsp;&nbsp; aₙ = 101') },
        { nota: 'Escribimos la fórmula del término general.', html: row('aₙ = a₁ + d · (n − 1)') },
        { nota: 'Sustituimos los números que conocemos. La única letra que queda es n.', html: row('101 = 5 + 4 · (n − 1)') },
        { nota: 'Vamos quitando cosas alrededor de n, como en cualquier ecuación. Primero restamos 5 a los dos lados.', html: ambos('− 5', 'y') + row('96 = 4 · (n − 1)') },
        { nota: 'Ahora dividimos los dos lados entre 4 para quitar el 4 que multiplica.', html: ambos('÷ 4', 'p') + row('24 = n − 1') },
        { nota: 'Por último sumamos 1 a los dos lados.', html: ambos('+ 1', 'g') + row(c('g', 'n = 25')) },
        { nota: 'Comprobamos: a₂₅ = 5 + 4 · 24 = 101 ✓. Si n sale con decimales (por ejemplo, con 100 sale 24,75), ese número no pertenece a la sucesión.', html: say(box('101 es el término 25'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.18  Sucesiones geométricas
     ============================================================ */
  P['1.18'] = [
    {
      titulo: 'Razón r y término general',
      intro: 'En 3, 6, 12, 24, … hallar el término número 8.',
      pasos: [
        { nota: 'Otra lista con regla. Ahora los números no suben sumando: mira cómo crecen, cada vez más rápido.', html: seq(['3', '6', '12', '24', '…'], '', Y, { idx: ['a₁', 'a₂', 'a₃', 'a₄', ''], dots: true }) },
        { nota: 'Cada número es el doble del anterior: se <b>multiplica</b> por 2. Ese número fijo es la <b>razón</b> r.', reemplaza: true, html: seq(['3', '6', '12', '24', '…'], '× 2', K, { idx: ['a₁', 'a₂', 'a₃', 'a₄', ''], dots: true }) },
        { nota: 'Para confirmarlo, dividimos cada término entre el anterior. Si todos los cocientes son iguales, es geométrica.', html: row(f('6', '3') + ' = ' + c('p', '2') + ' &nbsp;&nbsp; ' + f('12', '6') + ' = ' + c('p', '2') + ' &nbsp;&nbsp; ' + f('24', '12') + ' = ' + c('p', '2')) + say('r = 2, a₁ = 3', 'y') },
        { nota: 'El patrón: para llegar a a₂ multiplico por r una vez; a a₃, dos veces (r²); a a₄, tres veces (r³). El exponente es una unidad menos que la posición.', html: tabla(['término', 'cuántas × r', 'valor'], [['a₂', '1', '3 · 2'], ['a₃', '2', '3 · 2²'], ['a₄', '3', '3 · 2³'], ['aₙ', 'n − 1', '3 · 2<sup>n−1</sup>']]) },
        { nota: 'La fórmula general: a₁ por la razón elevada a n − 1.', html: say(box('aₙ = a₁ · r<sup>n−1</sup>'), 'y') },
        { nota: 'Queremos el término 8: n = 8, a₁ = 3, r = 2. El exponente es 8 − 1 = 7.', html: row('a₈ = ' + c('b', '3') + ' · ' + c('p', '2') + '<sup>8 − 1</sup> = 3 · 2⁷') },
        { nota: 'Primero la potencia: 2⁷ = 2·2·2·2·2·2·2 = 128. Después multiplicamos por 3. (Primero potencia, después producto.)', html: row('2⁷ = 128') + row('a₈ = 3 · 128') + say(box('a₈ = 384'), 'g') }
      ]
    },
    {
      titulo: 'Razón fraccionaria y razón negativa',
      intro: 'Hallar el término 7 de 81, 27, 9, 3, … y ver qué pasa si la razón es negativa.',
      pasos: [
        { nota: 'Esta sucesión baja. ¿Se resta algo? Mira: 81 → 27 → 9 → 3. No resta lo mismo (baja 54, luego 18...). Probemos dividir.', html: seq(['81', '27', '9', '3', '…'], '', Y, { idx: ['a₁', 'a₂', 'a₃', 'a₄', ''], dots: true }) },
        { nota: '27 ÷ 81 = 1/3 y 9 ÷ 27 = 1/3. Multiplicar por 1/3 es lo mismo que dividir entre 3: la razón es una fracción menor que 1, por eso los términos se achican.', reemplaza: true, html: seq(['81', '27', '9', '3', '…'], '× 1/3', K, { idx: ['a₁', 'a₂', 'a₃', 'a₄', ''], dots: true }) },
        { nota: 'Aplicamos la fórmula con a₁ = 81, r = 1/3 y n = 7. El exponente es 7 − 1 = 6.', html: row('a₇ = 81 · ' + c('p', '(' + f('1', '3') + ')') + '<sup>6</sup>') },
        { nota: 'Una fracción elevada a 6: se eleva el de arriba y el de abajo. 1⁶ = 1 y 3⁶ = 729.', html: row('a₇ = 81 · ' + f('1⁶', '3⁶') + ' = 81 · ' + f('1', '729')) },
        { nota: 'Simplificamos: 729 entre 81 da 9, así que el 81 de arriba "se come" al 729.', html: row('a₇ = ' + f('81', '729') + ' = ' + c('g', f('1', '9'))) },
        { nota: 'Y si la razón es negativa, los signos van alternando: más, menos, más, menos. Ejemplo con r = −3.', html: seq(['2', '−6', '18', '−54'], '× (−3)', Y, { idx: ['a₁', 'a₂', 'a₃', 'a₄'] }) + say('r negativa ⇒ los signos se alternan', 'p') }
      ]
    },
    {
      titulo: 'Suma de los primeros n términos',
      intro: 'Sumar los 5 primeros términos de 2, 6, 18, 54, 162 (r = 3) con el truco de multiplicar por r.',
      pasos: [
        { nota: 'Llamamos S a la suma de los cinco términos. Sumarlos a mano sale, pero con 20 términos sería horrible; busquemos un truco.', html: (function () { var s = T(30, 62, 'S =', W, 22, 'start'), t = ['2', '6', '18', '54', '162'], i; for (i = 0; i < 5; i++) { s += T(110 + i * 68, 62, t[i], Y, 24); if (i) s += T(76 + i * 68, 62, '+', W, 20); } return svg(95, s); })() },
        { nota: 'Multiplicamos <b>toda</b> la suma por la razón 3. Cada término salta al siguiente: 2→6, 6→18... Fíjate que la fila rosa queda corrida un lugar.', reemplaza: true, html: (function () { var s = T(30, 62, 'S =', W, 22, 'start') + T(22, 124, '3S =', K, 22, 'start'), t = ['2', '6', '18', '54', '162', '486'], i; for (i = 0; i < 5; i++) { s += T(110 + i * 68, 62, t[i], Y, 24); if (i) s += T(76 + i * 68, 62, '+', W, 20); } for (i = 1; i < 6; i++) { s += T(110 + i * 68 - 68 + 68, 124, t[i], K, 24); if (i > 1) s += T(76 + i * 68, 124, '+', W, 20); } s += T(60, 98, '× 3', K, 18, 'middle'); return svg(150, s); })() },
        { nota: 'Mira: 6, 18, 54 y 162 están en las dos filas. Si restamos 3S − S, todos esos se cancelan. Solo sobreviven el 486 y el 2.', reemplaza: true, html: (function () { var s = T(30, 62, 'S =', W, 22, 'start') + T(22, 124, '3S =', K, 22, 'start'), t = ['2', '6', '18', '54', '162', '486'], i; for (i = 0; i < 5; i++) { s += T(110 + i * 68, 62, t[i], Y, 24); if (i) s += T(76 + i * 68, 62, '+', W, 20); } for (i = 1; i < 6; i++) { s += T(110 + i * 68, 124, t[i], K, 24); if (i > 1) s += T(76 + i * 68, 124, '+', W, 20); } for (i = 1; i < 5; i++) s += '<ellipse cx="' + (110 + i * 68) + '" cy="93" rx="24" ry="48" fill="rgba(154,240,176,.12)" stroke="' + G + '" stroke-width="2.4" stroke-dasharray="5 4"/>'; s += L(105, 30, 105, 30, W, 1); s += T(60, 98, '× 3', K, 18, 'middle'); return svg(150, s); })() },
        { nota: 'Restamos: 3S − S = 2S (como 3 manzanas menos 1 manzana). A la derecha queda 486 − 2.', html: row('3S − S = 486 − 2') + row('2S = 484') },
        { nota: 'Dividimos entre 2 los dos lados y listo.', html: ambos('÷ 2', 'p') + row(c('g', 'S = 242')) },
        { nota: 'Comprobamos sumando: 2 + 6 + 18 + 54 + 162 = 242 ✓. De este truco sale la fórmula: restas el último término por r menos el primero, entre r − 1.', html: say(box('Sₙ = ' + f('a₁ · (rⁿ − 1)', 'r − 1')), 'y') + row('S₅ = ' + f('2 · (3⁵ − 1)', '3 − 1') + ' = ' + f('2 · 242', '2') + ' = ' + c('g', '242')) }
      ]
    }
  ];

  /* ============================================================
     1.19  Conjuntos e intervalos
     ============================================================ */
  P['1.19'] = [
    {
      titulo: 'Operaciones entre dos conjuntos con Venn',
      intro: 'Con A = {1, 2, 3, 4, 5, 6} y B = {4, 5, 6, 7, 8} dentro de U = {1, …, 10}: unión, intersección, diferencia y complemento.',
      pasos: [
        { nota: 'Escribimos los conjuntos. U es el universo: todo lo que estamos considerando (del 1 al 10).', html: row(c('b', 'A') + ' = {1, 2, 3, 4, 5, 6}') + row(c('p', 'B') + ' = {4, 5, 6, 7, 8}') + row('U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}') },
        { nota: 'Dibujamos un diagrama de Venn: el rectángulo es U y cada círculo es un conjunto. Lo que está en los dos (4, 5, 6) va en el centro, donde se cruzan. El 9 y el 10 no están en ninguno: quedan afuera.', html: venn({ sets: { a: ['1', '2', '3'], ab: ['4', '5', '6'], b: ['7', '8'], out: ['9', '10'] } }) },
        { nota: '<b>Intersección A ∩ B</b>: lo que está en A <b>y</b> en B a la vez. Es solo la zona del centro (en amarillo).', html: venn({ shade: 'int', col: Y, sets: { a: ['1', '2', '3'], ab: ['4', '5', '6'], b: ['7', '8'], out: ['9', '10'] } }) + row('A ∩ B = {' + c('y', '4, 5, 6') + '}') },
        { nota: '<b>Unión A ∪ B</b>: lo que está en A <b>o</b> en B (o en los dos). Pintamos los dos círculos completos y los números no se repiten.', html: venn({ shade: 'uni', col: G, sets: { a: ['1', '2', '3'], ab: ['4', '5', '6'], b: ['7', '8'], out: ['9', '10'] } }) + row('A ∪ B = {' + c('g', '1, 2, 3, 4, 5, 6, 7, 8') + '}') },
        { nota: '<b>Diferencia A − B</b>: lo que está en A pero <b>no</b> en B. Es el círculo de A sin la parte del centro.', html: venn({ shade: 'amb', col: K, sets: { a: ['1', '2', '3'], ab: ['4', '5', '6'], b: ['7', '8'], out: ['9', '10'] } }) + row('A − B = {' + c('p', '1, 2, 3') + '}') },
        { nota: '<b>Complemento (A ∪ B)′</b>: todo lo que le falta al universo, lo que no está en la unión. Es la zona de afuera de los círculos.', html: venn({ shade: 'comp', col: B, sets: { a: ['1', '2', '3'], ab: ['4', '5', '6'], b: ['7', '8'], out: ['9', '10'] } }) + row('(A ∪ B)′ = {' + c('b', '9, 10') + '}') },
        { nota: 'Un chequeo útil: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Restamos el centro porque se contó dos veces: 6 + 5 − 3 = 8 ✓.', html: say(box('n(A ∪ B) = 6 + 5 − 3 = 8'), 'g') }
      ]
    },
    {
      titulo: 'Problema con Venn: ¿cuántos no practican ninguno?',
      intro: 'En un grupo de 40 estudiantes, 25 juegan fútbol, 18 practican natación y 8 hacen las dos cosas. ¿Cuántos no hacen ninguno?',
      pasos: [
        { nota: 'Dibujamos dos círculos dentro de un rectángulo de 40 alumnos. La regla de oro: se empieza llenando por el <b>centro</b>, donde los círculos se cruzan.', html: venn({ big: true, na: 'Fútbol', nb: 'Natación', u: 'U = 40', cap: 'Total: 40 estudiantes', capcol: W, sets: {} }) },
        { nota: '8 hacen las dos cosas, así que el 8 va en el centro.', reemplaza: true, html: venn({ big: true, na: 'Fútbol', nb: 'Natación', u: 'U = 40', cap: 'ambos deportes: 8', sets: { ab: ['8'] } }) },
        { nota: 'Los 25 de fútbol incluyen a los 8 del centro. Los que juegan <b>solo</b> fútbol son 25 − 8 = 17.', reemplaza: true, html: venn({ big: true, na: 'Fútbol', nb: 'Natación', u: 'U = 40', cap: 'solo fútbol: 25 − 8 = 17', capcol: B, sets: { a: ['17'], ab: ['8'] } }) },
        { nota: 'Igual con natación: los 18 incluyen al centro. Solo natación: 18 − 8 = 10.', reemplaza: true, html: venn({ big: true, na: 'Fútbol', nb: 'Natación', u: 'U = 40', cap: 'solo natación: 18 − 8 = 10', capcol: K, sets: { a: ['17'], ab: ['8'], b: ['10'] } }) },
        { nota: 'Sumamos lo que ya está dentro de los círculos: 17 + 8 + 10 = 35 hacen algún deporte. Los 40 menos esos 35 quedan afuera: 5.', reemplaza: true, html: venn({ big: true, na: 'Fútbol', nb: 'Natación', u: 'U = 40', cap: '17 + 8 + 10 = 35 → 40 − 35 = 5', capcol: G, sets: { a: ['17'], ab: ['8'], b: ['10'], out: ['5'] } }) },
        { nota: 'Respuesta: 5 estudiantes no practican ninguno. Comprobación: 17 + 8 + 10 + 5 = 40 ✓.', html: say(box('5 estudiantes'), 'g') }
      ]
    },
    {
      titulo: 'Intervalos en la recta numérica',
      intro: 'Dibujar la desigualdad −2 ≤ x < 3 como intervalo, y luego intersectar y unir dos intervalos.',
      pasos: [
        { nota: 'La desigualdad dice: x está entre −2 y 3. Dibujamos una recta numérica y buscamos esos dos números.', html: nline(-4, 6, 100, 150, { items: [{ t: 'lbl', x: 210, y: 42, s: '−2 ≤ x < 3', col: Y, sz: 26 }] }) },
        { nota: 'En −2 dice "≤" (menor o <b>igual</b>): el −2 sí cuenta. Se pone un <b>círculo cerrado</b> (relleno): el punto está incluido.', reemplaza: true, html: nline(-4, 6, 100, 150, { items: [{ t: 'lbl', x: 210, y: 42, s: '−2 ≤ x < 3', col: Y, sz: 26 }, { t: 'pt', v: -2, y: 100, closed: true, col: Y }] }) },
        { nota: 'En 3 dice "<" sin igual: el 3 no cuenta. Se pone un <b>círculo abierto</b> (vacío): llegamos hasta ahí pero sin tocarlo.', reemplaza: true, html: nline(-4, 6, 100, 150, { items: [{ t: 'lbl', x: 210, y: 42, s: '−2 ≤ x < 3', col: Y, sz: 26 }, { t: 'pt', v: -2, y: 100, closed: true, col: Y }, { t: 'pt', v: 3, y: 100, closed: false, col: Y }] }) },
        { nota: 'Pintamos con tiza todo lo que está entre los dos círculos: todos esos números cumplen la desigualdad.', reemplaza: true, html: nline(-4, 6, 100, 150, { items: [{ t: 'lbl', x: 210, y: 42, s: '−2 ≤ x < 3', col: Y, sz: 26 }, { t: 'seg', a: -2, b: 3, y: 100, col: Y }, { t: 'pt', v: -2, y: 100, closed: true, col: Y }, { t: 'pt', v: 3, y: 100, closed: false, col: Y }] }) },
        { nota: 'Se escribe con corchetes: el corchete que <b>apunta hacia el número</b> lo incluye; el que le da la espalda, no. Aquí "[" en −2 y "[" al revés en 3.', html: say(c('y', 'x ∈ [−2, 3[') , 'w') + say('cerrado en −2 ● &nbsp;&nbsp; abierto en 3 ○', 'p') },
        { nota: 'Segundo ejemplo: A = [−3, 2[ y B = ]0, 5]. Los dibujamos uno sobre otro, con la misma recta numérica.', html: (function () { return nline(-4, 6, 240, 282, { guides: [-3, 0, 2, 5], items: [{ t: 'seg', a: -3, b: 2, y: 70, col: B }, { t: 'pt', v: -3, y: 70, closed: true, col: B }, { t: 'pt', v: 2, y: 70, closed: false, col: B }, { t: 'lbl', x: 410, y: 56, s: 'A = [−3, 2[', col: B, anc: 'end' }, { t: 'seg', a: 0, b: 5, y: 120, col: K }, { t: 'pt', v: 0, y: 120, closed: false, col: K }, { t: 'pt', v: 5, y: 120, closed: true, col: K }, { t: 'lbl', x: 410, y: 106, s: 'B = ]0, 5]', col: K, anc: 'end' }] }); })() },
        { nota: '<b>Intersección</b>: solo lo que está en los dos a la vez. Mirando hacia abajo desde las dos filas, coinciden desde 0 hasta 2. El 0 no está en B y el 2 no está en A, así que ambos son abiertos: ]0, 2[.', reemplaza: true, html: nline(-4, 6, 240, 282, { guides: [-3, 0, 2, 5], items: [{ t: 'seg', a: -3, b: 2, y: 70, col: B }, { t: 'pt', v: -3, y: 70, closed: true, col: B }, { t: 'pt', v: 2, y: 70, closed: false, col: B }, { t: 'lbl', x: 410, y: 56, s: 'A = [−3, 2[', col: B, anc: 'end' }, { t: 'seg', a: 0, b: 5, y: 120, col: K }, { t: 'pt', v: 0, y: 120, closed: false, col: K }, { t: 'pt', v: 5, y: 120, closed: true, col: K }, { t: 'lbl', x: 410, y: 106, s: 'B = ]0, 5]', col: K, anc: 'end' }, { t: 'seg', a: 0, b: 2, y: 170, col: Y }, { t: 'pt', v: 0, y: 170, closed: false, col: Y }, { t: 'pt', v: 2, y: 170, closed: false, col: Y }, { t: 'lbl', x: 410, y: 156, s: 'A ∩ B = ]0, 2[', col: Y, anc: 'end' }] }) },
        { nota: '<b>Unión</b>: todo lo que está en alguno de los dos. Juntamos las dos tizas: empieza en −3 (cerrado, lo trae A) y termina en 5 (cerrado, lo trae B). En el medio no hay huecos, porque se traslapan.', reemplaza: true, html: nline(-4, 6, 240, 282, { guides: [-3, 0, 2, 5], items: [{ t: 'seg', a: -3, b: 2, y: 70, col: B }, { t: 'pt', v: -3, y: 70, closed: true, col: B }, { t: 'pt', v: 2, y: 70, closed: false, col: B }, { t: 'lbl', x: 410, y: 56, s: 'A = [−3, 2[', col: B, anc: 'end' }, { t: 'seg', a: 0, b: 5, y: 120, col: K }, { t: 'pt', v: 0, y: 120, closed: false, col: K }, { t: 'pt', v: 5, y: 120, closed: true, col: K }, { t: 'lbl', x: 410, y: 106, s: 'B = ]0, 5]', col: K, anc: 'end' }, { t: 'seg', a: 0, b: 2, y: 170, col: Y }, { t: 'pt', v: 0, y: 170, closed: false, col: Y }, { t: 'pt', v: 2, y: 170, closed: false, col: Y }, { t: 'lbl', x: 410, y: 156, s: 'A ∩ B = ]0, 2[', col: Y, anc: 'end' }, { t: 'seg', a: -3, b: 5, y: 215, col: G }, { t: 'pt', v: -3, y: 215, closed: true, col: G }, { t: 'pt', v: 5, y: 215, closed: true, col: G }, { t: 'lbl', x: 410, y: 201, s: 'A ∪ B = [−3, 5]', col: G, anc: 'end' }] }) }
      ]
    }
  ];

  /* ============================================================
     1.20  Conteo
     ============================================================ */
  function tree(stage) {
    var cam = [['roja', R, 55], ['azul', B, 135], ['verde', G, 215]], pan = ['negro', 'gris'], s = '', i, j, n = 0, y;
    s += T(150, 16, 'camisa', W, 17) + '<circle cx="24" cy="135" r="6" fill="' + W + '"/>';
    if (stage === 2) s += T(280, 16, 'pantalón', W, 17) + T(372, 16, 'total', W, 17);
    for (i = 0; i < 3; i++) {
      s += L(24, 135, 112, cam[i][2], cam[i][1], 3) + T(150, cam[i][2] + 7, cam[i][0], cam[i][1], 22);
      if (stage === 2) for (j = 0; j < 2; j++) {
        y = cam[i][2] + (j ? 20 : -20); n++;
        s += L(188, cam[i][2], 250, y, cam[i][1], 3) + T(258, y + 7, pan[j], W, 21, 'start') + L(318, y, 352, y, W, 1.6, true, .5) + '<circle cx="374" cy="' + y + '" r="14" fill="none" stroke="' + Y + '" stroke-width="2.4"/>' + T(374, y + 7, n, Y, 20);
      }
    }
    return svg(255, s, 460);
  }
  P['1.20'] = [
    {
      titulo: 'Principio de la multiplicación con diagrama de árbol',
      intro: 'Tienes 3 camisas (roja, azul, verde) y 2 pantalones (negro, gris). ¿De cuántas maneras te puedes vestir?',
      pasos: [
        { nota: 'Elegir la ropa es hacer cosas una tras otra: primero camisa y después pantalón. Escribimos las opciones de cada paso.', html: row('camisas: ' + c('r', 'roja') + ', ' + c('b', 'azul') + ', ' + c('g', 'verde') + ' &nbsp;(3)') + row('pantalones: negro, gris &nbsp;(2)') },
        { nota: 'Dibujamos un diagrama de árbol. Del punto inicial sale una rama por cada camisa: son 3 ramas.', html: tree(1) },
        { nota: 'De cada camisa salen 2 ramitas, una por cada pantalón. Cada camino de izquierda a derecha es un atuendo distinto. Los numeramos para contarlos.', reemplaza: true, html: tree(2) },
        { nota: 'Contamos los extremos: 6 atuendos. Pero fíjate que se podía sin dibujar: 3 camisas, y con cada una 2 pantalones, es 3 veces 2.', html: row('3 camisas · 2 pantalones = ' + c('y', '6'), 'en cada paso se multiplica', 'y') },
        { nota: 'Esta es la regla, el <b>principio de la multiplicación</b>: si un paso se puede hacer de m maneras y el siguiente de n maneras, el total es m · n.', html: say(box('m · n'), 'y') },
        { nota: 'Sirve para cualquier cantidad de pasos. Si ahora agregas 2 pares de zapatos, solo multiplicas otro 2. El árbol sería enorme, la multiplicación no.', html: row('3 · 2 · 2 = ' + c('g', '12') + ' atuendos') + say('camisa · pantalón · zapatos', 'p') },
        { nota: 'Cuidado: si solo eliges <b>una</b> prenda, camisa <b>o</b> pantalón, no hay pasos seguidos y se <b>suma</b>: 3 + 2 = 5 opciones. "Y" multiplica, "o" suma.', html: row(c('y', 'camisa Y pantalón') + ' ⇒ ×') + row(c('p', 'camisa O pantalón') + ' ⇒ +') }
      ]
    },
    {
      titulo: 'Factorial: 5 personas en una fila',
      intro: '¿De cuántas maneras se pueden ordenar 5 personas en una fila? Aparece el factorial 5!.',
      pasos: [
        { nota: 'Tenemos 5 lugares en la fila. Vamos a llenarlos de izquierda a derecha y a contar las opciones que hay en cada lugar.', html: boxes(5, ['', '', '', '', ''], ['1.º', '2.º', '3.º', '4.º', '5.º'], null) },
        { nota: 'Para el primer lugar puedo escoger a cualquiera de las 5. Ya sentada una persona, para el segundo quedan 4; luego 3, luego 2 y al final queda 1 sola persona.', reemplaza: true, html: boxes(5, ['5', '4', '3', '2', '1'], ['1.º', '2.º', '3.º', '4.º', '5.º'], ['5 opciones', 'quedan 4', 'quedan 3', 'quedan 2', 'queda 1']) },
        { nota: 'Los pasos van seguidos, así que multiplicamos todas las opciones (principio de la multiplicación).', html: row('5 · 4 · 3 · 2 · 1 = ' + c('y', '120')) },
        { nota: 'Este producto bajando de uno en uno hasta 1 se llama <b>factorial</b> y se escribe con un signo de admiración: 5! = 120. Hay 120 maneras de ordenar a 5 personas.', html: say(box('5! = 120'), 'g') },
        { nota: 'Algunos valores que conviene recordar. Ojo con 0! = 1: hay una sola manera de ordenar... nada.', html: tabla(['n', '0', '1', '2', '3', '4', '5', '6'], [['n!', '1', '1', '2', '6', '24', '120', '720']]) },
        { nota: 'Con factoriales grandes hay un truco para no calcular números gigantes: n! = n · (n − 1)!. Ejemplo 8!/6!: escribimos 8! como 8 · 7 · 6!, y el 6! de arriba se tacha con el de abajo.', html: row(f('8!', '6!') + ' = ' + f('8 · 7 · ' + tach('6!'), tach('6!')) + ' = 8 · 7 = ' + c('g', '56')) },
        { nota: 'Otro ejemplo con dos factoriales abajo: 7!/(5! · 2!). Abrimos 7! hasta 5!, tachamos y 2! = 2.', html: row(f('7!', '5! · 2!') + ' = ' + f('7 · 6 · ' + tach('5!'), tach('5!') + ' · 2') + ' = ' + f('42', '2') + ' = ' + c('g', '21')) }
      ]
    },
    {
      titulo: 'Permutaciones: el podio de una carrera',
      intro: 'En una carrera participan 8 corredores. ¿De cuántas maneras pueden quedar los tres primeros lugares (1.º, 2.º y 3.º)?',
      pasos: [
        { nota: 'Aquí <b>el orden importa</b>: no es lo mismo que Ana sea 1.ª y Beto 2.º, a que sea al revés. Y nadie puede ocupar dos lugares. Eso es una permutación. Tenemos 3 casillas del podio.', html: boxes(3, ['', '', ''], ['1.º', '2.º', '3.º'], null) },
        { nota: 'Primer lugar: puede quedar cualquiera de los 8 corredores.', reemplaza: true, html: boxes(3, ['8', '', ''], ['1.º', '2.º', '3.º'], ['8 corredores', '', '']) },
        { nota: 'Segundo lugar: ya uno se llevó el 1.º, así que quedan 7 corredores.', reemplaza: true, html: boxes(3, ['8', '7', ''], ['1.º', '2.º', '3.º'], ['8 corredores', 'quedan 7', '']) },
        { nota: 'Tercer lugar: quedan 6 que aún no tienen puesto.', reemplaza: true, html: boxes(3, ['8', '7', '6'], ['1.º', '2.º', '3.º'], ['8 corredores', 'quedan 7', 'quedan 6']) },
        { nota: 'Multiplicamos las opciones de cada casilla.', html: row('8 · 7 · 6 = ' + c('g', '336') + ' podios posibles') },
        { nota: 'Eso es una permutación de 8 tomados de 3 en 3. La fórmula general: n! entre (n − r)!, donde n son todos y r los que ordenamos.', html: say(box('P(n, r) = ' + f('n!', '(n − r)!')), 'y') },
        { nota: 'Aplicamos con n = 8 y r = 3. Los factoriales de abajo se tachan, y queda 8 · 7 · 6, justo lo que contamos antes.', html: row('P(8, 3) = ' + f('8!', '(8 − 3)!') + ' = ' + f('8!', '5!') + ' = ' + f('8 · 7 · 6 · ' + tach('5!'), tach('5!')) + ' = ' + c('g', '336')) },
        { nota: 'Si hay letras repetidas, algunos órdenes se ven iguales y hay que dividir. Palabra ANA: 3! = 6 órdenes si todas fueran distintas, pero las dos A son idénticas.', html: row('ANA &nbsp; ' + c('p', 'AAN') + ' &nbsp; NAA &nbsp;&nbsp; (solo 3 se ven distintas)') + say('3! = 6 cuenta de más', 'r') },
        { nota: 'Dividimos entre 2! (las formas de ordenar las dos A entre ellas): 3!/2! = 3. En general, ordenar con repeticiones: n! entre el factorial de cada repetido.', html: row('P = ' + f('3!', '2!') + ' = ' + f('6', '2') + ' = ' + c('g', '3')) }
      ]
    }
  ];
})(window.PZ);

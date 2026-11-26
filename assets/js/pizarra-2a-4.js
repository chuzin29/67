/* pizarra-2a-4.js — Métodos en pizarra, 2.º año, temas 1.11 a 1.15 */
window.PIZARRA_2A = window.PIZARRA_2A || {};
(function (PZ) {
  var P = window.PIZARRA_2A;
  var W = '#f4f6ef', Y = '#ffe27a', R = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', RD = '#ff8a80';
  var FONT = "font-family=\"'Patrick Hand',cursive\"";
  function lg(b) { return 'log<sub>' + b + '</sub>'; }
  function sp(a, b) { return a + '<sup>' + b + '</sup>'; }
  function T(x, y, s, col, size, anchor) {
    return '<text x="' + x + '" y="' + y + '" fill="' + (col || W) + '" ' + FONT + ' font-size="' + (size || 17) + '" text-anchor="' + (anchor || 'middle') + '">' + s + '</text>';
  }
  function num(n) { return String(n).replace('-', '−'); }

  /* ---- gráfica de tiza ----
     o: ox,oy (origen en px), sx,sy (px por unidad), x0,x1,y0,y1 (extensión de ejes en unidades),
        curves:[{fn,a,b,col,dash}], hl (recta horizontal y=k), pts:[{x,y,col,label,dx,dy}],
        xt,yt (marcas), extra (svg extra), vb */
  function plot(o) {
    var px = function (x) { return +(o.ox + x * o.sx).toFixed(1); }, py = function (y) { return +(o.oy - y * o.sy).toFixed(1); };
    var s = '<svg viewBox="0 0 ' + (o.vb || '420 240') + '" style="display:block;width:min(100%,460px);margin:.3rem auto" role="img" aria-label="' + (o.alt || 'gráfica') + '" fill="none" stroke-linecap="round" stroke-linejoin="round">';
    s += '<path d="M' + px(o.x0) + ' ' + py(0) + 'H' + px(o.x1) + 'm-9 -5 l9 5 l-9 5" stroke="' + W + '" stroke-width="2"/>';
    s += '<path d="M' + px(0) + ' ' + py(o.y0) + 'V' + py(o.y1) + 'm-5 9 l5 -9 l5 9" stroke="' + W + '" stroke-width="2"/>';
    s += T(px(o.x1) + 4, py(0) + 20, 'x', W, 16, 'end') + T(px(0) + 14, py(o.y1) + 10, 'y', W, 16);
    (o.xt || []).forEach(function (t) { s += '<path d="M' + px(t) + ' ' + (py(0) - 4) + 'v8" stroke="' + W + '" stroke-width="1.6"/>' + T(px(t), py(0) + 20, num(t), W, 14); });
    (o.yt || []).forEach(function (t) { s += '<path d="M' + (px(0) - 4) + ' ' + py(t) + 'h8" stroke="' + W + '" stroke-width="1.6"/>' + T(px(0) - 10, py(t) + 5, num(t), W, 14, 'end'); });
    if (o.hl != null) s += '<path d="M' + px(o.x0) + ' ' + py(o.hl) + 'H' + px(o.x1 - 0.2) + '" stroke="' + (o.hlc || R) + '" stroke-width="2.4" stroke-dasharray="7 5"/>' + T(px(o.x0) + 4, py(o.hl) - 6, 'y = ' + num(o.hl), o.hlc || R, 15, 'start');
    (o.curves || []).forEach(function (c) {
      var d = '', n = 70, pen = false;
      for (var i = 0; i <= n; i++) {
        var x = c.a + (c.b - c.a) * i / n, y = c.fn(x);
        if (y < o.y0 - 0.05 || y > o.y1 + 0.05) { pen = false; continue; }
        d += (pen ? 'L' : 'M') + px(x) + ' ' + py(y); pen = true;
      }
      s += '<path d="' + d + '" stroke="' + c.col + '" stroke-width="3"' + (c.dash ? ' stroke-dasharray="8 6"' : '') + '/>';
    });
    (o.pts || []).forEach(function (p) {
      s += '<circle cx="' + px(p.x) + '" cy="' + py(p.y) + '" r="5" fill="' + (p.col || Y) + '" stroke="none"/>';
      if (p.label) s += T(px(p.x) + (p.dx || 10), py(p.y) + (p.dy || -9), p.label, p.col || Y, 15, 'start');
    });
    return s + (o.extra || '') + '</svg>';
  }

  /* ---- diagrama de flechas entre conjuntos ----
     A, B: listas de textos; pairs: [[i,j,color],...]; ringB / ringA: índices a marcar en rojo */
  function dia(A, B, pairs, o) {
    o = o || {};
    var XA = 120, XB = 300, cy = 108, gap = 42;
    var yA = function (i) { return cy + (i - (A.length - 1) / 2) * gap; }, yB = function (j) { return cy + (j - (B.length - 1) / 2) * gap; };
    var s = '<svg viewBox="0 0 420 216" style="display:block;width:min(100%,420px);margin:.3rem auto" role="img" aria-label="diagrama de flechas" fill="none" stroke-linecap="round" stroke-linejoin="round">';
    s += '<ellipse cx="' + XA + '" cy="' + cy + '" rx="62" ry="90" stroke="' + B_ + '" stroke-width="2.4"/><ellipse cx="' + XB + '" cy="' + cy + '" rx="62" ry="90" stroke="' + G + '" stroke-width="2.4"/>';
    s += T(XA, 14, 'A', B_, 20) + T(XB, 14, 'B', G, 20);
    pairs.forEach(function (p) {
      var x1 = XA + 10, y1 = yA(p[0]), x2 = XB - 10, y2 = yB(p[1]), a = Math.atan2(y2 - y1, x2 - x1), c = p[2] || Y;
      var h = function (da) { return (x2 - 11 * Math.cos(a + da)).toFixed(1) + ' ' + (y2 - 11 * Math.sin(a + da)).toFixed(1); };
      s += '<path d="M' + x1 + ' ' + y1.toFixed(1) + 'L' + x2 + ' ' + y2.toFixed(1) + 'M' + h(0.45) + 'L' + x2 + ' ' + y2.toFixed(1) + 'L' + h(-0.45) + '" stroke="' + c + '" stroke-width="2.6"/>';
    });
    A.forEach(function (t, i) {
      s += '<circle cx="' + XA + '" cy="' + yA(i) + '" r="4.5" fill="' + W + '" stroke="none"/>' + T(XA - 16, yA(i) + 6, t, W, 20, 'end');
      if ((o.ringA || []).indexOf(i) >= 0) s += '<circle cx="' + XA + '" cy="' + yA(i) + '" r="13" stroke="' + RD + '" stroke-width="2.4"/>';
    });
    B.forEach(function (t, j) {
      s += '<circle cx="' + XB + '" cy="' + yB(j) + '" r="4.5" fill="' + W + '" stroke="none"/>' + T(XB + 16, yB(j) + 6, t, W, 20, 'start');
      if ((o.ringB || []).indexOf(j) >= 0) s += '<circle cx="' + XB + '" cy="' + yB(j) + '" r="13" stroke="' + RD + '" stroke-width="2.4"/>';
    });
    return s + '</svg>';
  }
  var B_ = B;

  var f = PZ.f, c = PZ.c, row = PZ.row, box = PZ.box, tach = PZ.tach;

  /* ============================ 1.11 ============================ */
  P['1.11'] = [
    {
      titulo: 'Simplificar con propiedades de potencias',
      intro: 'Simplificar (2x³)² · x⁻⁵ entre 4x², sin exponentes negativos al final.',
      pasos: [
        { nota: 'Tenemos potencias de potencias, un producto y una división. Vamos por partes, empezando por lo que está entre paréntesis.', html: row(f('(2x³)² · x<sup>−5</sup>', '4x²')) },
        { nota: 'El exponente de afuera afecta a <b>todo</b> lo que está dentro del paréntesis: al 2 y a la x³. Y una potencia elevada a otra potencia: los exponentes se <b>multiplican</b> (3 · 2 = 6).', html: PZ.flecha('el 2 de afuera reparte', 'y') + row('(2x³)² = ' + c('y', '2²') + ' · ' + c('p', '(x³)²') + ' = ' + c('y', '4') + ' · ' + c('p', 'x⁶')) },
        { nota: 'Ahora arriba hay x⁶ · x⁻⁵. Misma base, así que los exponentes se <b>suman</b>: 6 + (−5) = 1.', html: row('4 · x⁶ · x<sup>−5</sup>', 'misma base: sumo exponentes', 'p') + row('= 4 · x<sup>6 − 5</sup> = 4x') },
        { nota: 'Reescribimos la fracción con lo que quedó arriba.', html: row('= ' + f('4x', '4x²')) },
        { nota: 'El 4 de arriba y el 4 de abajo se cancelan. Con las x: misma base en una división, los exponentes se <b>restan</b>: 1 − 2 = −1.', html: row('= ' + f(tach('4') + 'x', tach('4') + 'x²')) + row('x¹ ÷ x² = x<sup>1 − 2</sup> = x<sup>−1</sup>', 'misma base: resto exponentes', 'g') },
        { nota: 'Un exponente negativo no hace negativo el número: lo manda al otro lado de la fracción. x<sup>−1</sup> es 1 sobre x.', html: PZ.flecha('exponente negativo = voltear', 'b') + PZ.say(box('x<sup>−1</sup> = ' + f('1', 'x')), 'g') },
        { nota: 'Comprobamos con x = 2: arriba (4)² · 2⁻⁵ = 16 sobre 32 = 1 sobre 2, abajo 4 · 4 = 16... y el cociente da 1 sobre 2. ¡Coincide con 1 sobre x!', html: row('x = 2:  ' + f('(2·2³)² · 2<sup>−5</sup>', '4 · 2²') + ' = ' + f('256 · ' + f('1', '32'), '16') + ' = ' + f('8', '16') + ' = ' + f('1', '2') + ' ✓') }
      ]
    },
    {
      titulo: 'Simplificar y sumar radicales',
      intro: 'Calcular √50 + √18 − √8. Los radicales se suman si, al simplificarlos, quedan "iguales".',
      pasos: [
        { nota: 'A simple vista no se pueden sumar: son raíces distintas. Pero quizá escondan una raíz común.', html: row('√50 + √18 − √8') },
        { nota: 'Truco: dentro de cada raíz buscamos un número que sea <b>cuadrado perfecto</b> (4, 9, 16, 25...) y que sea factor. Ese número sale de la raíz sin su cuadrado.', html: PZ.say('cuadrados perfectos:  ' + c('y', '4') + '  ' + c('p', '9') + '  16  ' + c('b', '25') + '  36...', 'w') },
        { nota: 'Hacemos la tabla. 50 = 25 · 2, 18 = 9 · 2 y 8 = 4 · 2. Como √25 = 5, √9 = 3 y √4 = 2, esos números salen afuera.', html: PZ.tabla(['Radical', 'Escondo un cuadrado', 'Sale'], [['√50', '√(' + c('b', '25') + ' · 2)', c('b', '5') + '√2'], ['√18', '√(' + c('p', '9') + ' · 2)', c('p', '3') + '√2'], ['√8', '√(' + c('y', '4') + ' · 2)', c('y', '2') + '√2']]) },
        { nota: 'Sustituimos en la suma. ¡Ahora las tres raíces son √2!', html: row('= ' + c('b', '5√2') + ' + ' + c('p', '3√2') + ' − ' + c('y', '2√2')) },
        { nota: 'Es como 5 manzanas + 3 manzanas − 2 manzanas. La "fruta" es √2 y solo sumamos cuántas hay.', html: row('= (5 + 3 − 2)√2') },
        { nota: 'Resultado. Comprobación rápida: √50 ≈ 7,07; √18 ≈ 4,24; √8 ≈ 2,83. Suma 8,48 y 6√2 ≈ 8,48 ✓.', html: PZ.say(box('6√2'), 'g') }
      ]
    },
    {
      titulo: 'Racionalizar con el conjugado',
      intro: 'Quitar la raíz del denominador de 4 sobre (√5 − 1).',
      pasos: [
        { nota: 'Por costumbre no se deja una raíz abajo en una fracción. Queremos que el denominador sea un número entero.', html: row(f('4', '√5 − 1')) },
        { nota: 'Si el denominador fuera solo √5, multiplicaríamos por √5. Aquí hay una resta, y el truco es el <b>conjugado</b>: el mismo binomio con el signo del medio cambiado.', html: row(f('4', '√5 ' + c('r', '−') + ' 1')) + PZ.flecha('conjugado', 'y') + row(c('y', '√5 ' + c('r', '+') + ' 1')) },
        { nota: 'Multiplicamos arriba y abajo por el conjugado. Multiplicar por (conjugado sobre conjugado) es multiplicar por 1: el valor no cambia.', html: row(f('4', '√5 − 1') + ' · ' + c('y', f('√5 + 1', '√5 + 1'))) },
        { nota: 'Abajo ocurre la magia: (a − b)(a + b) = a² − b². Los términos del medio se cancelan y la raíz desaparece.', html: row('= ' + f('4(√5 + 1)', '(√5 − 1)(√5 + 1)')) + row('= ' + f('4(√5 + 1)', '(√5)² − 1²'), 'diferencia de cuadrados', 'g') },
        { nota: '(√5)² = 5, así que abajo queda 5 − 1 = 4. ¡Ya no hay raíz!', html: row('= ' + f('4(√5 + 1)', '5 − 1') + ' = ' + f('4(√5 + 1)', '4')) },
        { nota: 'Cancelamos el 4 de arriba con el 4 de abajo.', html: row('= ' + f(tach('4') + '(√5 + 1)', tach('4'))) + PZ.say(box('√5 + 1'), 'g') },
        { nota: 'Comprobación: 4 entre (2,236 − 1) = 4 entre 1,236 ≈ 3,236, y √5 + 1 ≈ 3,236 ✓.', html: row('4 ÷ 1,236 ≈ 3,236 &nbsp; y &nbsp; √5 + 1 ≈ 3,236 ✓') }
      ]
    }
  ];

  /* ============================ 1.12 ============================ */
  P['1.12'] = [
    {
      titulo: 'Ecuación exponencial: igualar las bases',
      intro: 'Resolver 9<sup>x−1</sup> = 27<sup>x+1</sup>. Idea: si las bases son iguales, los exponentes también.',
      pasos: [
        { nota: 'La incógnita está en el exponente. No sabemos "bajarla" todavía, así que haremos que ambos lados tengan la <b>misma base</b>.', html: row('9<sup>x − 1</sup> = 27<sup>x + 1</sup>') },
        { nota: 'Tanto 9 como 27 son potencias de 3: 9 = 3² y 27 = 3³. Los reescribimos.', html: row(c('y', '9') + ' = 3²', '', 'y') + row(c('p', '27') + ' = 3³') + row('(3²)<sup>x − 1</sup> = (3³)<sup>x + 1</sup>') },
        { nota: 'Potencia de potencia: los exponentes se multiplican. El 2 multiplica a todo (x − 1) y el 3 a todo (x + 1); por eso van entre paréntesis.', html: row('3<sup>' + c('y', '2(x − 1)') + '</sup> = 3<sup>' + c('p', '3(x + 1)') + '</sup>') + row('3<sup>2x − 2</sup> = 3<sup>3x + 3</sup>') },
        { nota: 'Si dos potencias con la misma base son iguales, <b>sus exponentes tienen que ser iguales</b>. Quitamos el 3 y nos quedamos con una ecuación normal.', html: PZ.flecha('misma base ⇒ igualo exponentes', 'g') + row(c('g', '2x − 2 = 3x + 3')) },
        { nota: 'Ahora despejamos como siempre. Restamos 2x a los dos lados, para dejar las x de un solo lado.', html: row('2x − 2 = 3x + 3') + PZ.ambos('− 2x') + row('−2 = x + 3') },
        { nota: 'Restamos 3 a los dos lados y la x queda sola.', html: PZ.ambos('− 3') + row(box('x = −5')) },
        { nota: 'Comprobamos: 9<sup>−6</sup> = 3<sup>−12</sup> y 27<sup>−4</sup> = 3<sup>−12</sup>. Son iguales ✓.', html: row('9<sup>−6</sup> = (3²)<sup>−6</sup> = 3<sup>−12</sup>') + row('27<sup>−4</sup> = (3³)<sup>−4</sup> = 3<sup>−12</sup> ✓', '', 'g') }
      ]
    },
    {
      titulo: 'Ecuación exponencial con cambio de variable',
      intro: 'Resolver 4<sup>x</sup> − 3 · 2<sup>x</sup> − 4 = 0. Se parece a una cuadrática disfrazada.',
      pasos: [
        { nota: 'Hay 4<sup>x</sup> y 2<sup>x</sup>: bases distintas. Pero 4 = 2², así que 4<sup>x</sup> = (2²)<sup>x</sup> = (2<sup>x</sup>)².', html: row('4<sup>x</sup> − 3 · 2<sup>x</sup> − 4 = 0') + row('4<sup>x</sup> = (2<sup>x</sup>)²', 'porque 4 = 2²', 'y') },
        { nota: 'Reescribimos la ecuación: aparece 2<sup>x</sup> dos veces, una elevada al cuadrado.', html: row('(2<sup>x</sup>)² − 3 · 2<sup>x</sup> − 4 = 0') },
        { nota: 'Le damos un nombre más simple: t = 2<sup>x</sup>. ¡Y la ecuación se vuelve una cuadrática normal!', html: row(c('y', 't = 2<sup>x</sup>'), 'cambio de variable', 'y') + row('t² − 3t − 4 = 0') },
        { nota: 'Factorizamos buscando dos números que multiplicados den −4 y sumados −3: son −4 y +1.', html: row('(t − 4)(t + 1) = 0') + row(c('p', 't = 4') + ' &nbsp;&nbsp; ' + c('b', 't = −1')) },
        { nota: 'Todavía no acabamos: nos piden x, no t. Regresamos con t = 2<sup>x</sup>.', html: PZ.flecha('regresar a x', 'r') + row(c('p', '2<sup>x</sup> = 4') + ' &nbsp;&nbsp; ' + c('b', '2<sup>x</sup> = −1')) },
        { nota: 'La primera: 4 = 2², entonces x = 2. La segunda es imposible: una potencia de base positiva <b>nunca</b> da un número negativo. La tachamos.', html: row(c('p', '2<sup>x</sup> = 2²  ⇒  x = 2')) + row(tach('2<sup>x</sup> = −1') + ' &nbsp; imposible', '', 'r') },
        { nota: 'Comprobamos: 4² − 3 · 2² − 4 = 16 − 12 − 4 = 0 ✓.', html: PZ.say(box('x = 2'), 'g') + row('16 − 12 − 4 = 0 ✓') }
      ]
    },
    {
      titulo: 'Graficar f(x) = 2ˣ',
      intro: 'Tabla de valores, puntos y curva. Así se dibuja cualquier exponencial.',
      pasos: [
        { nota: 'Para graficar, primero damos valores a x y calculamos 2<sup>x</sup>. Recuerda: exponente negativo = fracción.', html: row('f(x) = 2<sup>x</sup>') },
        { nota: 'Hacemos la tabla. 2⁻² = 1 sobre 4, 2⁻¹ = 1 sobre 2, 2⁰ = 1 (¡todo elevado a 0 da 1!), y luego se duplica cada vez.', html: PZ.tabla(['x', '−2', '−1', '0', '1', '2', '3'], [['2<sup>x</sup>', f('1', '4'), f('1', '2'), '1', '2', '4', '8']]) },
        { nota: 'Dibujamos los ejes y marcamos los puntos de la tabla. El más importante es (0, 1): toda exponencial lo cruza.', html: plot({ ox: 210, oy: 205, sx: 45, sy: 21, x0: -3.2, x1: 3.6, y0: -0.4, y1: 8.8, xt: [-2, -1, 1, 2, 3], yt: [1, 2, 4, 8], alt: 'ejes con puntos de 2ˣ', pts: [{ x: -2, y: 0.25 }, { x: -1, y: 0.5 }, { x: 0, y: 1, col: G, label: '(0, 1)' }, { x: 1, y: 2, label: '(1, 2)' }, { x: 2, y: 4 }, { x: 3, y: 8 }] }) },
        { reemplaza: true, nota: 'Unimos los puntos con una curva suave. Hacia la derecha sube cada vez más rápido; hacia la izquierda se pega al eje x pero <b>nunca lo toca</b>.', html: plot({ ox: 210, oy: 205, sx: 45, sy: 21, x0: -3.2, x1: 3.6, y0: -0.4, y1: 8.8, xt: [-2, -1, 1, 2, 3], yt: [1, 2, 4, 8], alt: 'curva de 2ˣ', curves: [{ fn: function (x) { return Math.pow(2, x); }, a: -3.2, b: 3.1, col: Y }], pts: [{ x: 0, y: 1, col: G, label: '(0, 1)' }, { x: 1, y: 2, label: '(1, 2)' }], extra: T(78, 190, 'y = 0', B, 15) + '<path d="M40 205H100" stroke="' + B + '" stroke-width="0" />' }) },
        { nota: 'Resumen: la curva crece (porque la base 2 es mayor que 1), pasa por (0, 1), y el eje x (y = 0) es una asíntota: se acerca, pero no lo corta.', html: PZ.tabla(['Dominio', 'Rango', 'Asíntota', 'Comportamiento'], [[c('g', 'todos los reales'), c('y', 'y &gt; 0'), c('b', 'y = 0'), c('p', 'creciente')]]) },
        { nota: 'Si la base fuera entre 0 y 1, como (1/2)<sup>x</sup>, la curva sería el espejo: bajaría hacia la derecha. Pero siempre por (0, 1).', html: PZ.say('base mayor que 1 ' + c('p', '↗ crece') + ' &nbsp;|&nbsp; base entre 0 y 1 ' + c('b', '↘ decrece'), 'w') }
      ]
    }
  ];

  /* ============================ 1.13 ============================ */
  var sq = function (x) { return x * x; }, cu = function (x) { return x * x * x; };
  var G1 = { ox: 210, oy: 190, sx: 50, sy: 20, x0: -3.2, x1: 3.5, y0: -2.2, y1: 8.6, xt: [-2, -1, 1, 2], yt: [4] };
  function g(o) { var r = {}, k; for (k in G1) r[k] = G1[k]; for (k in o) r[k] = o[k]; return plot(r); }
  P['1.13'] = [
    {
      titulo: 'Test de la recta horizontal',
      intro: '¿Es inyectiva f(x) = x²? Dibujamos y pasamos rectas horizontales: si alguna corta dos veces, no lo es.',
      pasos: [
        { nota: 'Inyectiva quiere decir "uno a uno": dos x distintas nunca dan el mismo y. Para verlo en la gráfica usamos una regla: la recta horizontal.', html: row('f(x) = x²') + PZ.say('¿alguna ' + c('p', 'recta horizontal') + ' la corta ' + c('r', 'dos veces') + '?', 'w') },
        { nota: 'Primero dibujamos la parábola de f(x) = x².', html: g({ alt: 'parábola', curves: [{ fn: sq, a: -3, b: 3, col: Y }] }) },
        { reemplaza: true, nota: 'Pasamos una recta horizontal, por ejemplo y = 4. ¡Corta la parábola en <b>dos</b> puntos: x = −2 y x = 2!', html: g({ alt: 'parábola con recta y=4', curves: [{ fn: sq, a: -3, b: 3, col: Y }], hl: 4, pts: [{ x: -2, y: 4, col: R, label: '(−2, 4)', dx: -62 }, { x: 2, y: 4, col: R, label: '(2, 4)' }] }) },
        { nota: 'Dos x distintas, −2 y 2, dan la misma imagen 4. Entonces la función <b>no es inyectiva</b>.', html: row('f(−2) = 4 &nbsp;&nbsp; f(2) = 4') + row(tach('inyectiva') + ' &nbsp; ✗  la imagen 4 se repite', '', 'r') },
        { nota: 'Probamos otra: f(x) = x³. Esta se ve como una "S" acostada que siempre sube.', html: row('f(x) = x³') + g({ alt: 'cúbica', y0: -8.8, y1: 8.8, oy: 105, sy: 11, yt: [], curves: [{ fn: cu, a: -2.1, b: 2.1, col: B }], hl: 4, pts: [{ x: Math.cbrt(4), y: 4, col: G, label: 'un solo punto', dx: 8 }], xt: [-2, -1, 1, 2] }) },
        { nota: 'Aquí cualquier recta horizontal corta <b>una sola vez</b>. Cada y viene de una única x. Es inyectiva ✓.', html: PZ.say('toda horizontal corta ' + c('g', 'a lo sumo una vez') + ' ⇒ ' + box('inyectiva'), 'g') },
        { nota: 'Y si queremos arreglar x²: nos quedamos solo con la rama derecha (x ≥ 0). Ahora cada horizontal la corta una vez y sí es inyectiva.', html: PZ.say('f(x) = x², &nbsp; ' + c('y', 'x ≥ 0') + ' &nbsp;⇒&nbsp; inyectiva ✓', 'y') + g({ alt: 'rama derecha', curves: [{ fn: sq, a: 0, b: 3, col: Y }, { fn: sq, a: -3, b: 0, col: RD, dash: true }], hl: 4, pts: [{ x: 2, y: 4, col: G, label: '(2, 4)' }] }) }
      ]
    },
    {
      titulo: 'Clasificar con diagramas de flechas',
      intro: 'Dos conjuntos, flechas de A hacia B: mira si se repiten llegadas (inyectiva) y si queda alguien sin recibir (sobreyectiva).',
      pasos: [
        { nota: 'Dos preguntas. <b>Inyectiva</b>: ¿a algún elemento de B le llegan 2 flechas? <b>Sobreyectiva</b>: ¿a algún elemento de B no le llega ninguna? Si contestas "no" a la primera, es inyectiva; "no" a la segunda, sobreyectiva.', html: PZ.tabla(['Tipo', 'Pregunta clave', 'Si la respuesta es…'], [[c('y', 'Inyectiva'), 'dos flechas a un mismo punto?', 'NO → sí lo es'], [c('p', 'Sobreyectiva'), 'algún punto de B sin flecha?', 'NO → sí lo es'], [c('g', 'Biyectiva'), 'ambas cosas a la vez', 'las dos “no”']]) },
        { nota: 'Ejemplo 1. A = {1, 2, 3} y B = {a, b, c, d}. A cada punto de B le llega a lo sumo una flecha, ¡inyectiva! Pero <b>d</b> se queda sin recibir: no es sobreyectiva.', html: dia(['1', '2', '3'], ['a', 'b', 'c', 'd'], [[0, 0, Y], [1, 1, Y], [2, 2, Y]], { ringB: [3] }) + row(c('y', 'inyectiva ✓') + ' &nbsp;&nbsp; ' + c('r', 'sobreyectiva ✗') + ' &nbsp; (d sin flecha)') },
        { nota: 'Ejemplo 2. A = {1, 2, 3, 4} y B = {x, y, z}. A <b>x</b> le llegan dos flechas (de 1 y de 2): no es inyectiva. Pero todos los de B reciben alguna: sí es sobreyectiva.', html: dia(['1', '2', '3', '4'], ['x', 'y', 'z'], [[0, 0, R], [1, 0, R], [2, 1, Y], [3, 2, Y]], { ringB: [0] }) + row(c('r', 'inyectiva ✗') + ' &nbsp; (dos llegan a x) &nbsp;&nbsp; ' + c('p', 'sobreyectiva ✓')) },
        { nota: 'Ejemplo 3. A = {1, 2, 3} y B = {a, b, c}: cada uno recibe exactamente una flecha. Ni repetidos ni olvidados: <b>biyectiva</b>.', html: dia(['1', '2', '3'], ['a', 'b', 'c'], [[0, 1, G], [1, 2, G], [2, 0, G]]) + PZ.say(c('y', 'inyectiva ✓') + ' + ' + c('p', 'sobreyectiva ✓') + ' = ' + box('biyectiva'), 'g') },
        { nota: 'Truco para recordar: en la biyectiva hay el mismo número de elementos en A y en B, y los emparejas uno con uno. Por eso se puede "devolver" cada flecha: tiene inversa.', html: PZ.say('biyectiva ⇒ se puede ' + c('b', 'invertir') + ' todas las flechas ↩', 'b') }
      ]
    },
    {
      titulo: 'Demostrar que f(x) = 2x + 1 es biyectiva',
      intro: 'Con álgebra: inyectiva (si f(a) = f(b) entonces a = b) y sobreyectiva (despejar x).',
      pasos: [
        { nota: 'Inyectiva por álgebra: suponemos que dos valores a y b dan la misma imagen y vemos si por fuerza son iguales.', html: row('f(x) = 2x + 1') + row(c('y', 'si f(a) = f(b)'), 'suposición', 'y') },
        { nota: 'Escribimos lo que significa f(a) = f(b) usando la regla.', html: row('2a + 1 = 2b + 1') },
        { nota: 'Restamos 1 a los dos lados.', html: PZ.ambos('− 1') + row('2a = 2b') },
        { nota: 'Dividimos entre 2 a los dos lados. Llegamos a a = b: la única forma de repetir imagen es ser el mismo número. ¡Inyectiva!', html: PZ.ambos('÷ 2') + row(box('a = b') + ' &nbsp; ⇒ inyectiva ✓') },
        { nota: 'Sobreyectiva: tomamos cualquier y del codominio (ℝ) y buscamos una x que llegue a él. Escribimos y = 2x + 1 y despejamos x.', html: row(c('p', 'y = 2x + 1'), 'y cualquiera', 'p') },
        { nota: 'Restamos 1 y dividimos entre 2.', html: PZ.ambos('− 1', 'p') + row('y − 1 = 2x') + PZ.ambos('÷ 2', 'p') + row('x = ' + f('y − 1', '2')) },
        { nota: 'Esa x existe para cualquier y. Por ejemplo, para y = 7: x = (7 − 1) ÷ 2 = 3 y f(3) = 7 ✓. Todo y tiene su x: sobreyectiva.', html: row(c('p', 'sobreyectiva ✓') + ' &nbsp;&nbsp; (y = 7 ⇒ x = 3, f(3) = 7)') },
        { nota: 'Las dos cosas a la vez: es biyectiva. Y, además, la fórmula de x que encontramos ¡ya es la función inversa!', html: PZ.say(c('y', 'inyectiva') + ' + ' + c('p', 'sobreyectiva') + ' ⇒ ' + box('biyectiva'), 'g') }
      ]
    }
  ];

  /* ============================ 1.14 ============================ */
  P['1.14'] = [
    {
      titulo: 'Composición de funciones: f ∘ g y g ∘ f',
      intro: 'Con f(x) = x + 2 y g(x) = 3x. La composición es una cadena de máquinas: lo que sale de una entra a la otra.',
      pasos: [
        { nota: 'Tenemos dos "máquinas": f suma 2 y g multiplica por 3.', html: row(c('y', 'f(x) = x + 2')) + row(c('p', 'g(x) = 3x')) },
        { nota: '(f ∘ g)(x) se lee "f compuesta con g" y significa f(g(x)). Lo de <b>adentro actúa primero</b>: primero g, luego f.', html: PZ.flecha('x → g → f', 'w') + row('(f ∘ g)(x) = f(' + c('p', 'g(x)') + ')') },
        { nota: 'Reemplazamos g(x) por su fórmula, 3x.', html: row('= f(' + c('p', '3x') + ')') },
        { nota: 'Ahora f dice "toma lo que llegue y súmale 2". Donde f tenía x, escribimos 3x (entre paréntesis).', html: row('f(x) = ' + c('y', 'x') + ' + 2', 'donde está x pongo 3x', 'y') + row('= ' + c('p', '3x') + ' + 2 &nbsp; ⇒ &nbsp; ' + box('(f ∘ g)(x) = 3x + 2')) },
        { nota: 'Ahora al revés: (g ∘ f)(x) = g(f(x)). Primero f, luego g. Reemplazamos f(x) = x + 2 y g multiplica por 3 <b>todo</b> lo que llegue.', html: row('(g ∘ f)(x) = g(' + c('y', 'x + 2') + ')') + row('= 3(' + c('y', 'x + 2') + ') = 3x + 6', 'g multiplica todo por 3', 'p') },
        { nota: 'Comparamos: 3x + 2 y 3x + 6 no son iguales. <b>El orden importa.</b> Con x = 4: (f∘g)(4) = 14 pero (g∘f)(4) = 18.', html: row(c('p', '3x + 2') + ' ≠ ' + c('y', '3x + 6')) + row('x = 4:  g(4) = 12, f(12) = ' + c('p', '14') + ' &nbsp;&nbsp; f(4) = 6, g(6) = ' + c('y', '18')) + PZ.say(box('f ∘ g ≠ g ∘ f'), 'g') }
      ]
    },
    {
      titulo: 'Hallar la función inversa (despejar x)',
      intro: 'Para f(x) = (2x + 4) ÷ 3: se despeja x, y luego se intercambian las letras x e y.',
      pasos: [
        { nota: 'La inversa "deshace" lo que hace f. Para encontrarla: escribimos y en lugar de f(x) y vamos a <b>despejar x</b>.', html: row('f(x) = ' + f('2x + 4', '3')) + row('y = ' + f('2x + 4', '3'), 'cambio f(x) por y', 'y') },
        { nota: 'Primero quitamos la división: multiplicamos por 3 los dos lados.', html: PZ.ambos('· 3') + row('3y = 2x + 4') },
        { nota: 'Ahora quitamos el +4: restamos 4 a los dos lados.', html: PZ.ambos('− 4') + row('3y − 4 = 2x') },
        { nota: 'Por último el 2 que multiplica a x: dividimos los dos lados entre 2. ¡x quedó sola!', html: PZ.ambos('÷ 2') + row('x = ' + f('3y − 4', '2')) },
        { nota: 'Ya despejamos x en función de y. Por costumbre la variable se llama x, así que <b>intercambiamos</b> las letras: donde dice y ponemos x.', html: PZ.flecha('cambio x ↔ y', 'r') + row('y = ' + f('3x − 4', '2')) },
        { nota: 'Esa y es la función inversa. La escribimos con su nombre f⁻¹ (ojo: el −1 NO es un exponente, es la marca de "inversa").', html: PZ.say(box('f⁻¹(x) = ' + f('3x − 4', '2')), 'g') },
        { nota: 'Comprobamos con un número. f(1) = (2 + 4) ÷ 3 = 2 y f⁻¹(2) = (6 − 4) ÷ 2 = 1. ¡Volvimos al 1! f y f⁻¹ se deshacen.', html: row('f(1) = ' + f('2 + 4', '3') + ' = ' + c('y', '2') + ' &nbsp;&nbsp;→&nbsp;&nbsp; f⁻¹(' + c('y', '2') + ') = ' + f('6 − 4', '2') + ' = ' + c('g', '1') + ' ✓') }
      ]
    },
    {
      titulo: 'Inversa de x² (x ≥ 0) y el espejo y = x',
      intro: 'Con f(x) = x², x ≥ 0 (así es biyectiva). La inversa es la raíz, y las gráficas son espejo respecto a y = x.',
      pasos: [
        { nota: 'Para tener inversa la función debe ser biyectiva. x² solo lo es si limitamos x ≥ 0. Escribimos y = x².', html: row('f(x) = x², &nbsp; ' + c('y', 'x ≥ 0')) + row('y = x²') },
        { nota: 'Para despejar x, deshacemos el cuadrado con raíz cuadrada en los dos lados. Como x ≥ 0 nos quedamos con la raíz positiva.', html: PZ.ambos('√ ', 'p') + row('x = √y') },
        { nota: 'Intercambiamos las letras x e y: es la inversa.', html: PZ.flecha('cambio x ↔ y', 'r') + PZ.say(box('f⁻¹(x) = √x'), 'g') },
        { nota: 'Miremos los puntos: si (a, b) está en f, entonces (b, a) está en f⁻¹. Las coordenadas se <b>intercambian</b>.', html: PZ.tabla(['f(x) = x²', '(0,0)', '(1,1)', '(2,4)'], [[c('b', 'f⁻¹(x) = √x'), '(0,0)', '(1,1)', c('p', '(4,2)')]]) },
        { nota: 'En el dibujo: f en amarillo, f⁻¹ en verde y la recta y = x en blanco punteada. Una es el reflejo de la otra, como en un espejo.', html: plot({ ox: 80, oy: 215, sx: 55, sy: 40, x0: -0.3, x1: 5.5, y0: -0.3, y1: 5, xt: [1, 2, 3, 4, 5], yt: [1, 2, 3, 4], alt: 'f, inversa y recta y=x', curves: [{ fn: function (x) { return x; }, a: 0, b: 4.9, col: W, dash: true }, { fn: sq, a: 0, b: 2.2, col: Y }, { fn: Math.sqrt, a: 0, b: 5, col: G }], pts: [{ x: 2, y: 4, col: Y, label: '(2, 4)', dx: -62 }, { x: 4, y: 2, col: G, label: '(4, 2)' }], extra: T(330, 70, 'y = x', W, 16) + T(130, 30, 'f', Y, 20) + T(330, 105, 'f⁻¹', G, 20) }) }
      ]
    }
  ];

  /* ============================ 1.15 ============================ */
  P['1.15'] = [
    {
      titulo: 'Qué es un logaritmo: la pregunta del exponente',
      intro: 'Calcular log<sub>2</sub>8 y pasar entre forma exponencial y logarítmica.',
      pasos: [
        { nota: 'Un logaritmo parece raro, pero es solo una pregunta. Esto se lee "logaritmo en base 2 de 8".', html: row(lg('2') + ' 8 = ?') },
        { nota: 'La pregunta es: <b>¿a qué exponente debo elevar el 2 para obtener 8?</b> El logaritmo es ese exponente.', html: PZ.flecha('¿cuál es el exponente?', 'y') + row('2<sup>' + c('r', '?') + '</sup> = 8') },
        { nota: 'Probamos: 2¹ = 2, 2² = 4, 2³ = 8. ¡Con exponente 3!', html: PZ.tabla(['exponente', '1', '2', '3'], [['2<sup>exp</sup>', '2', '4', c('g', '8')]], 0) },
        { nota: 'Entonces el logaritmo vale 3.', html: row(lg('2') + ' 8 = ' + box('3')) },
        { nota: 'Son dos formas de decir lo mismo. La base (amarillo) queda de base en las dos; el exponente (rosa) es el resultado del logaritmo; y el número (azul) es el 8.', html: row(c('y', '2') + '<sup>' + c('p', '3') + '</sup> = ' + c('b', '8') + ' &nbsp; ⇔ &nbsp; ' + lg(c('y', '2')) + ' ' + c('b', '8') + ' = ' + c('p', '3')) },
        { nota: 'Otros dos casos. Con fracciones: 3 elevado a qué da 1 sobre 9? A −2 (exponente negativo). Y log de 1 siempre es 0, porque cualquier base elevada a 0 da 1.', html: row(lg('3') + ' ' + f('1', '9') + ' = −2 &nbsp; porque &nbsp; 3<sup>−2</sup> = ' + f('1', '9')) + row(lg('5') + ' 1 = 0 &nbsp; porque &nbsp; 5<sup>0</sup> = 1') },
        { nota: 'Regla de oro: el argumento del logaritmo (el número de adentro) debe ser <b>positivo</b>. No existe log de 0 ni de un negativo.', html: PZ.say(lg('2') + ' (−4) ' + c('r', '✗ no existe') + ' &nbsp;&nbsp; ' + lg('2') + ' 0 ' + c('r', '✗ no existe'), 'r') }
      ]
    },
    {
      titulo: 'Propiedades de los logaritmos',
      intro: 'Producto, cociente y potencia: convierten multiplicar en sumar, dividir en restar y exponentes en factores.',
      pasos: [
        { nota: 'Tres reglas. Fíjate en el patrón: el logaritmo "baja" una operación. Multiplicar → sumar, dividir → restar, potencia → multiplicar.', html: PZ.tabla(['Propiedad', 'Regla'], [['Producto', lg('b') + ' (m · n) = ' + lg('b') + ' m + ' + lg('b') + ' n'], ['Cociente', lg('b') + ' (m ÷ n) = ' + lg('b') + ' m − ' + lg('b') + ' n'], ['Potencia', lg('b') + ' (m<sup>k</sup>) = k · ' + lg('b') + ' m']]) },
        { nota: 'Ejemplo A: sumar dos logaritmos de la misma base. Se pueden juntar multiplicando lo de adentro.', html: row(lg('6') + ' 4 + ' + lg('6') + ' 9') },
        { nota: 'Producto: 4 · 9 = 36. Y ¿a qué se eleva 6 para dar 36? A 2.', html: row('= ' + lg('6') + ' (4 · 9) = ' + lg('6') + ' 36', 'suma → producto', 'y') + row('= ' + box('2')) },
        { nota: 'Ejemplo B: una resta se junta dividiendo. 40 ÷ 5 = 8 y 2<sup>3</sup> = 8.', html: row(lg('2') + ' 40 − ' + lg('2') + ' 5') + row('= ' + lg('2') + ' (' + f('40', '5') + ') = ' + lg('2') + ' 8 = ' + box('3'), 'resta → cociente', 'p') },
        { nota: 'Ejemplo C: un exponente adentro pasa multiplicando afuera. 25 = 5², así que log<sub>5</sub>25 = 2.', html: row(lg('5') + ' (25<sup>3</sup>)') + row('= ' + c('b', '3') + ' · ' + lg('5') + ' 25 = 3 · 2 = ' + box('6'), 'el exponente baja', 'b') },
        { nota: 'También se usa al revés para "expandir". log<sub>2</sub>(4x³) = log<sub>2</sub>4 + log<sub>2</sub>(x³) = 2 + 3 · log<sub>2</sub>x.', html: row(lg('2') + ' (4x³) = ' + lg('2') + ' 4 + ' + lg('2') + ' x³') + row('= ' + c('g', '2 + 3 · ' + lg('2') + ' x')) }
      ]
    },
    {
      titulo: 'Ecuación logarítmica y verificar el dominio',
      intro: 'Resolver log<sub>2</sub>(x + 3) + log<sub>2</sub>(x − 3) = 4, y revisar si las soluciones valen.',
      pasos: [
        { nota: 'Hay dos logaritmos con la misma base sumados. Lo primero: juntarlos en uno.', html: row(lg('2') + ' (x + 3) + ' + lg('2') + ' (x − 3) = 4') },
        { nota: 'Suma de logaritmos → logaritmo del producto. Y (x + 3)(x − 3) es una diferencia de cuadrados: x² − 9.', html: row(lg('2') + ' [(x + 3)(x − 3)] = 4', 'suma → producto', 'y') + row(lg('2') + ' (x² − 9) = 4') },
        { nota: 'Ahora usamos la definición: log<sub>2</sub>A = 4 quiere decir 2<sup>4</sup> = A. Pasamos a la forma exponencial.', html: PZ.flecha('definición: log → exponente', 'g') + row('x² − 9 = 2<sup>4</sup> = 16') },
        { nota: 'Es una ecuación normal. Sumamos 9 a los dos lados.', html: PZ.ambos('+ 9') + row('x² = 25') },
        { nota: 'Raíz cuadrada: salen dos candidatas, x = 5 y x = −5. Pero ¡cuidado! Falta revisar que sean permitidas.', html: row('x = 5 &nbsp;&nbsp; x = −5') },
        { nota: 'En un logaritmo, lo de adentro debe ser positivo: x + 3 &gt; 0 y x − 3 &gt; 0, es decir, x &gt; 3. Con x = −5 saldría log de un número negativo: no vale.', html: row('x + 3 &gt; 0 &nbsp; y &nbsp; x − 3 &gt; 0 &nbsp; ⇒ &nbsp; ' + c('g', 'x &gt; 3')) + row(c('g', 'x = 5 ✓') + ' &nbsp;&nbsp; ' + tach('x = −5') + ' &nbsp; ✗') },
        { nota: 'Comprobamos con x = 5: log<sub>2</sub>8 + log<sub>2</sub>2 = 3 + 1 = 4 ✓.', html: PZ.say(box('x = 5'), 'g') + row(lg('2') + ' 8 + ' + lg('2') + ' 2 = 3 + 1 = 4 ✓') }
      ]
    }
  ];
})(window.PZ);

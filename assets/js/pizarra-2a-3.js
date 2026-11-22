/* pizarra-2a-3.js — Métodos en pizarra, 2.º año, temas 1.6 a 1.10 */
window.PIZARRA_2A = window.PIZARRA_2A || {};
(function (PZ) {
  var P = window.PIZARRA_2A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', R = '#ff8a80', D = '#f4f6ef66';
  var RAD = Math.PI / 180;

  /* ---------- mini-ayudante para dibujar figuras con tiza (coordenadas matemáticas) ---------- */
  function fg(cx, cy, u, label) {
    var s = '';
    function X(x) { return +(210 + (x - cx) * u).toFixed(1); }
    function Yp(y) { return +(130 - (y - cy) * u).toFixed(1); }
    var o = {
      raw: function (h) { s += h; return o; },
      grid: function () {
        var x0 = Math.ceil(cx - 210 / u), x1 = Math.floor(cx + 210 / u), y0 = Math.ceil(cy - 130 / u), y1 = Math.floor(cy + 130 / u), i;
        for (i = x0; i <= x1; i++) s += '<line x1="' + X(i) + '" y1="0" x2="' + X(i) + '" y2="260" stroke="#f4f6ef" stroke-opacity=".08"/>';
        for (i = y0; i <= y1; i++) s += '<line x1="0" y1="' + Yp(i) + '" x2="420" y2="' + Yp(i) + '" stroke="#f4f6ef" stroke-opacity=".08"/>';
        return o;
      },
      ax: function (st) {
        var ox = X(0), oy = Yp(0), i, x0 = Math.ceil(cx - 205 / u), x1 = Math.floor(cx + 205 / u), y0 = Math.ceil(cy - 125 / u), y1 = Math.floor(cy + 125 / u);
        st = st || 1;
        if (oy > 8 && oy < 252) {
          s += '<path d="M4 ' + oy + 'H414 M406 ' + (oy - 5) + 'L414 ' + oy + 'L406 ' + (oy + 5) + '" stroke="' + D + '" stroke-width="2" fill="none"/><text x="404" y="' + (oy - 9) + '" fill="' + W + '" font-size="15" opacity=".8">x</text>';
          for (i = x0; i <= x1; i++) if (i !== 0 && i % st === 0) s += '<line x1="' + X(i) + '" y1="' + (oy - 3) + '" x2="' + X(i) + '" y2="' + (oy + 3) + '" stroke="' + D + '"/><text x="' + X(i) + '" y="' + (oy + 15) + '" fill="' + W + '" fill-opacity=".5" font-size="11" text-anchor="middle">' + String(i).replace('-', '−') + '</text>';
        }
        if (ox > 8 && ox < 412) {
          s += '<path d="M' + ox + ' 256V6 M' + (ox - 5) + ' 14L' + ox + ' 6L' + (ox + 5) + ' 14" stroke="' + D + '" stroke-width="2" fill="none"/><text x="' + (ox + 8) + '" y="16" fill="' + W + '" font-size="15" opacity=".8">y</text>';
          for (i = y0; i <= y1; i++) if (i !== 0 && i % st === 0) s += '<line x1="' + (ox - 3) + '" y1="' + Yp(i) + '" x2="' + (ox + 3) + '" y2="' + Yp(i) + '" stroke="' + D + '"/><text x="' + (ox - 7) + '" y="' + (Yp(i) + 4) + '" fill="' + W + '" fill-opacity=".5" font-size="11" text-anchor="end">' + String(i).replace('-', '−') + '</text>';
        }
        return o;
      },
      ln: function (x1, y1, x2, y2, col, dash, w) {
        s += '<line x1="' + X(x1) + '" y1="' + Yp(y1) + '" x2="' + X(x2) + '" y2="' + Yp(y2) + '" stroke="' + (col || W) + '" stroke-width="' + (w || 2.6) + '" stroke-linecap="round"' + (dash ? ' stroke-dasharray="7 6"' : '') + '/>';
        return o;
      },
      pt: function (x, y, col, lab, dx, dy, anc) {
        s += '<circle cx="' + X(x) + '" cy="' + Yp(y) + '" r="4.5" fill="' + (col || Y) + '"/>';
        if (lab) o.t(x, y, lab, col || Y, dx == null ? 8 : dx, dy == null ? -8 : dy, anc);
        return o;
      },
      t: function (x, y, str, col, dx, dy, anc, sz) {
        s += '<text x="' + (X(x) + (dx || 0)) + '" y="' + (Yp(y) + (dy || 0)) + '" fill="' + (col || W) + '" font-size="' + (sz || 15) + '"' + (anc ? ' text-anchor="' + anc + '"' : '') + '>' + str + '</text>';
        return o;
      },
      cur: function (fn, t0, t1, col, n, dash, w) {
        var d = '', i, p, t; n = n || 120;
        for (i = 0; i <= n; i++) { t = t0 + (t1 - t0) * i / n; p = fn(t); d += (i ? 'L' : 'M') + X(p[0]) + ' ' + Yp(p[1]); }
        s += '<path d="' + d + '" fill="none" stroke="' + (col || W) + '" stroke-width="' + (w || 3) + '" stroke-linecap="round" stroke-linejoin="round"' + (dash ? ' stroke-dasharray="7 6"' : '') + '/>';
        return o;
      },
      arc: function (x, y, r, a1, a2, col) {
        return o.cur(function (a) { return [x + r * Math.cos(a * RAD), y + r * Math.sin(a * RAD)]; }, a1, a2, col, 40, false, 2.6);
      },
      out: function () {
        return '<svg viewBox="0 0 420 260" style="width:min(100%,470px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'figura') + '"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">' + s + '</g></svg>';
      }
    };
    return o;
  }
  function pa(fx) { return function (t) { return fx(t); }; }
  var cosh = Math.cosh || function (t) { return (Math.exp(t) + Math.exp(-t)) / 2; };
  var sinh = Math.sinh || function (t) { return (Math.exp(t) - Math.exp(-t)) / 2; };

  /* ============================================================
     1.6  Ángulo de inclinación y ángulo entre dos rectas
     ============================================================ */
  function f161(stage) {
    var g = fg(3.5, 4.2, 26, 'recta por A y B').grid().ax(2);
    g.ln(-0.2, -0.4, 4.6, 9.2, W, false, 3);
    if (stage === 'tri') {
      g.ln(1, 2, 4, 2, B, false, 3).ln(4, 2, 4, 8, G, false, 3);
      g.t(2.5, 2, 'avance 3', B, 0, 18, 'middle').t(4, 5, 'subida 6', G, 8, 4);
      g.arc(1, 2, 1.1, 0, 63.43, Y).t(1, 2, 'θ', Y, 34, -6, 'middle', 18);
      g.arc(0, 0, 1.3, 0, 63.43, Y).t(0, 0, 'θ', Y, 44, -10, 'middle', 18);
    }
    g.pt(1, 2, Y, 'A(1, 2)', -8, 18, 'end').pt(4, 8, Y, 'B(4, 8)', 10, 4);
    return g.out();
  }
  function f162(stage) {
    var g = fg(0.5, 0, 24, 'recta con pendiente negativa').grid().ax(1);
    g.ln(-2.1, 5.2, 3, -5, W, false, 3);
    g.pt(-1, 3, Y, 'A(−1, 3)', 10, 2).pt(2, -3, Y, 'B(2, −3)', 10, 4);
    if (stage === 'th') {
      g.arc(0.5, 0, 1.4, 0, 116.57, Y).t(0.5, 0, 'θ = 116.57°', Y, 50, -62, 'middle', 16);
      g.arc(0.5, 0, 0.8, 116.57, 180, K).t(-2.2, 0.55, '63.43°', K, 0, 0, 'middle', 15);
    }
    return g.out();
  }
  function f163(stage) {
    var g = fg(3, 2, 24, 'dos rectas que se cortan').grid().ax(1);
    g.ln(0.1, -2.8, 5.2, 7.4, B, false, 3).ln(-4.5, 0.5, 11, 5.67, K, false, 3);
    g.t(5.1, 7, 'L₁', B, 6, 0, 'start', 17).t(9.4, 5.7, 'L₂', K, 0, -4, 'start', 17);
    if (stage === 'arc') {
      g.arc(3, 3, 1.7, 18.43, 63.43, Y).t(3, 3, '45°', Y, 78, -22, 'middle', 17);
      g.arc(3, 3, 0.9, 63.43, 198.43, G).t(3, 3, '135°', G, -52, -26, 'middle', 17);
    }
    g.pt(3, 3, W);
    return g.out();
  }

  P['1.6'] = [
    {
      titulo: 'Ángulo de inclinación (pendiente positiva)',
      intro: 'Hallar el ángulo que forma con el eje x la recta que pasa por A(1, 2) y B(4, 8).',
      pasos: [
        { nota: 'El <b>ángulo de inclinación</b> es lo que "se levanta" la recta respecto al eje x, medido desde el eje hacia la recta. Tenemos dos puntos de la recta.', html: row('A(1, 2) &nbsp; y &nbsp; B(4, 8)') + f161('base') },
        { nota: 'Primero la <b>pendiente</b>: cuánto sube entre cuánto avanza. Restamos las y arriba y las x abajo, en el mismo orden.', html: row(c('y', 'm = ' + f('y₂ − y₁', 'x₂ − x₁')) + ' = ' + f('8 − 2', '4 − 1') + ' = ' + f('6', '3') + ' = ' + c('g', '2')) },
        { nota: 'Mira el triángulo: avanzamos <b>3</b> hacia la derecha y subimos <b>6</b>. El ángulo θ es el mismo en el eje x y en A, porque las horizontales son paralelas.', reemplaza: true, html: f161('tri') },
        { nota: 'En ese triángulo, la tangente del ángulo es "lo que sube entre lo que avanza". ¡Eso es justo la pendiente!', html: row(c('y', 'tan θ = ' + f('subida', 'avance') + ' = m')) + row(c('y', 'tan θ = 2')) },
        { nota: 'Queremos θ, no su tangente. Para "deshacer" la tangente usamos la tecla <b>tan⁻¹</b> de la calculadora (en modo grados).', html: PZ.flecha('tan⁻¹ (arctan)', 'p') + row('θ = arctan(2)') },
        { nota: 'Tecleamos tan⁻¹(2) y obtenemos el ángulo.', html: say(box('θ ≈ 63.43°'), 'g') },
        { nota: 'Comprobación mental: con m = 1 el ángulo sería 45°. Como m = 2 es más empinada, el ángulo debe ser mayor que 45° y menor que 90°. ¡63° cuadra!', html: row('m = 1 → 45°', 'más suave', 'b') + row('m = 2 → 63.43°', 'esta recta', 'y') + row('m → muy grande → casi 90°', 'casi vertical', 'p') }
      ]
    },
    {
      titulo: 'Pendiente negativa: ¡cuidado con el cuadrante!',
      intro: 'Ángulo de inclinación de la recta que pasa por A(−1, 3) y B(2, −3).',
      pasos: [
        { nota: 'Esta recta <b>baja</b> de izquierda a derecha. Eso nos avisa que algo va a cambiar con el ángulo.', html: row('A(−1, 3) &nbsp; y &nbsp; B(2, −3)') + f162('base') },
        { nota: 'Pendiente: restamos de nuevo y sobre x. Sale negativa porque la recta baja.', html: row(c('y', 'm = ' + f('−3 − 3', '2 − (−1)') + ' = ' + f('−6', '3') + ' = ') + c('g', '−2')) },
        { nota: 'Aplicamos la calculadora igual que antes, tan⁻¹(−2). Pero mira el resultado: ¡sale negativo!', html: row('arctan(−2) = ' + PZ.tach('−63.43°'), 'un ángulo de inclinación nunca es negativo', 'r') },
        { nota: 'Un ángulo de inclinación va de 0° a 180°. Para pasar de −63.43° a ese rango le <b>sumamos 180°</b>.', html: PZ.flecha('+ 180°', 'y') + row(c('y', 'θ = 180° + (−63.43°)')) + row(c('y', 'θ = 116.57°')) },
        { nota: 'Mira la figura: θ se mide desde el eje x positivo, girando contra el reloj, hasta la recta. Es mayor que 90° (obtuso). El ángulo de 63.43° es solo el "complemento" que le falta para 180°.', reemplaza: true, html: f162('th') },
        { nota: 'Esta es la respuesta.', html: say(box('θ ≈ 116.57°'), 'g') },
        { nota: 'Regla para recordar: pendiente positiva, ángulo agudo (entre 0° y 90°). Pendiente negativa, ángulo obtuso (entre 90° y 180°). Comprobamos: 116.57° + 63.43° = 180° ✓.', html: PZ.tabla(['Pendiente m', 'Ángulo θ'], [['m > 0', 'agudo, θ = arctan(m)'], ['m < 0', 'obtuso, θ = 180° + arctan(m)']]) }
      ]
    },
    {
      titulo: 'Ángulo entre dos rectas',
      intro: 'Hallar el ángulo entre L₁: 2x − y − 3 = 0 y L₂: x − 3y + 6 = 0.',
      pasos: [
        { nota: 'Dos rectas que se cruzan forman cuatro ángulos: dos agudos iguales y dos obtusos iguales. Vamos a calcularlos.', html: row(c('b', '2x − y − 3 = 0'), 'L₁', 'b') + row(c('p', 'x − 3y + 6 = 0'), 'L₂', 'p') + f163('base') },
        { nota: 'Necesitamos las pendientes. Despejamos <b>y</b> en cada ecuación: el número que acompaña a x es la pendiente.', html: row(c('b', 'y = 2x − 3') + ' &nbsp;⇒&nbsp; ' + c('b', 'm₁ = 2')) + row(c('p', 'y = ' + f('1', '3') + 'x + 2') + ' &nbsp;⇒&nbsp; ' + c('p', 'm₂ = ' + f('1', '3'))) },
        { nota: 'Usamos la fórmula del ángulo entre rectas. Valor absoluto para quedarnos con el ángulo agudo. Arriba se restan las pendientes; abajo, 1 más su producto.', html: row(c('y', 'tan α = ' + '|' + f('m₂ − m₁', '1 + m₁·m₂') + '|')) },
        { nota: 'Calculamos arriba y abajo por separado, con calma. Arriba: 1/3 − 2 = −5/3. Abajo: 1 + 2·(1/3) = 1 + 2/3 = 5/3.', html: row('arriba: ' + f('1', '3') + ' − 2 = ' + c('b', f('−5', '3'))) + row('abajo: 1 + 2 · ' + f('1', '3') + ' = 1 + ' + f('2', '3') + ' = ' + c('p', f('5', '3'))) },
        { nota: 'Dividimos: −5/3 entre 5/3 da −1, y con el valor absoluto queda 1.', html: row(c('y', 'tan α = |' + f('−5/3', '5/3') + '| = |−1| = 1')) },
        { nota: 'Ahora arctan(1) = 45°. Ese es el ángulo agudo. El obtuso es lo que le falta para 180°: 180° − 45° = 135°.', reemplaza: true, html: f163('arc') },
        { nota: 'Comprobación con los ángulos de inclinación: arctan(2) = 63.43° y arctan(1/3) = 18.43°. Su diferencia es 63.43° − 18.43° = 45° ✓.', html: say(box('agudo 45° &nbsp;·&nbsp; obtuso 135°'), 'g') + row('63.43° − 18.43° = 45° ✓', 'comprobación', 'g') }
      ]
    }
  ];

  /* ============================================================
     1.7  La parábola
     ============================================================ */
  function para1(stage) {
    var g = fg(-2, 0, 22, 'parábola con vértice (−2, 1)').grid().ax(2);
    if (stage === 'v') { g.pt(-2, 1, Y, 'V(−2, 1)', 10, -8); return g.out(); }
    g.ln(-11, 4, 8, 4, B, true, 2.6).t(2.6, 4, 'directriz y = 4', B, 0, -8, 'start');
    g.ln(-2, 5.8, -2, -5.8, D, true, 2).t(-2, 5.4, 'eje x = −2', W, 8, 0, 'start', 14);
    g.cur(function (x) { return [x, 1 - (x + 2) * (x + 2) / 12]; }, -10.5, 6.5, Y, 80, false, 3.2);
    if (stage === 'lr') g.ln(-8, -2, 4, -2, G, false, 3).pt(-8, -2, G, '(−8, −2)', -6, 18, 'middle').pt(4, -2, G, '(4, −2)', 4, 18, 'middle').t(-2, -2, 'LR = 12', G, 0, 22, 'middle');
    g.pt(-2, 1, Y, 'V(−2, 1)', 10, -8).pt(-2, -2, K, 'F(−2, −2)', 9, -8);
    return g.out();
  }
  function para2(stage) {
    var g = fg(2, 1, 20, 'parábola con foco (4, 1) y directriz x = −2').grid().ax(2);
    g.ln(-2, -5.4, -2, 7.4, B, true, 2.6).t(-2, 6.6, 'directriz x = −2', B, 6, 0, 'start', 14);
    g.pt(4, 1, K, 'F(4, 1)', 8, 20);
    if (stage === 'datos') return g.out();
    g.ln(-8, 1, 12, 1, D, true, 2);
    g.pt(1, 1, Y, 'V(1, 1)', -4, -10, 'middle');
    g.t(-0.5, 1, '3', G, 0, 18, 'middle', 15).t(2.5, 1, '3', G, 0, 18, 'middle', 15);
    if (stage === 'vert') return g.out();
    g.cur(function (y) { return [1 + (y - 1) * (y - 1) / 12, y]; }, -5.4, 7.4, Y, 80, false, 3.2);
    if (stage === 'pt') {
      g.ln(4, 7, 4, 1, K, false, 2.6).ln(4, 7, -2, 7, B, false, 2.6).pt(4, 7, W, 'P(4, 7)', 8, -2);
      g.t(4, 4, '6', K, 10, 4).t(1, 7, '6', B, 0, -8, 'middle');
    }
    return g.out();
  }
  function para3() {
    var g = fg(3, 3, 22, 'parábola (x − 3)² = 8(y − 2)').grid().ax(2);
    g.ln(-5, 0, 11, 0, B, true, 2.4).t(7.4, 0, 'directriz y = 0', B, 0, -8, 'start', 14);
    g.ln(3, 8.8, 3, -2.8, D, true, 2);
    g.cur(function (x) { return [x, 2 + (x - 3) * (x - 3) / 8]; }, -4, 10, Y, 80, false, 3.2);
    g.pt(3, 2, Y, 'V(3, 2)', 10, 14).pt(3, 4, K, 'F(3, 4)', 10, 4);
    return g.out();
  }

  P['1.7'] = [
    {
      titulo: 'Leer los elementos de una parábola',
      intro: 'Dada (x + 2)² = −12(y − 1), hallar vértice, foco, directriz y lado recto.',
      pasos: [
        { nota: 'Aquí la que está al cuadrado es la <b>x</b>. Eso significa que el eje de la parábola es vertical: abre hacia arriba o hacia abajo.', html: row(c('y', '(x + 2)² = −12(y − 1)')) },
        { nota: 'Comparamos con el molde <b>(x − h)² = 4p(y − k)</b>. Ojo: los signos se leen al revés. x + 2 es x − (−2), y por eso h = −2. El vértice es (−2, 1).', html: row('(x ' + c('b', '+ 2') + ')² = −12(y ' + c('p', '− 1') + ')', 'molde: (x − h)² = 4p(y − k)', 'y') + row(c('b', 'h = −2') + ' &nbsp;&nbsp; ' + c('p', 'k = 1')) + para1('v') },
        { nota: 'El número que multiplica a (y − k) es 4p. Dividimos entre 4 para conseguir p. Como p es negativo, la parábola abre <b>hacia abajo</b>.', html: row('4p = −12') + PZ.flecha('÷ 4', 'y') + row(c('y', 'p = −3'), 'negativo: abre hacia abajo', 'r') },
        { nota: 'Foco: está a una distancia p del vértice, dentro de la curva: F(h, k + p). La directriz queda al otro lado: y = k − p.', html: row(c('p', 'F(−2, 1 + (−3)) = F(−2, −2)'), 'foco', 'p') + row(c('b', 'y = 1 − (−3) = 4'), 'directriz', 'b') },
        { nota: 'Dibujamos todo: el vértice a mitad de camino entre foco y directriz, el eje de simetría que pasa por ambos, y la curva abriendo hacia abajo, abrazando al foco.', reemplaza: true, html: para1('base') },
        { nota: 'El lado recto es la cuerda que pasa por el foco, horizontal. Mide |4p| = 12, así que llega 6 a cada lado del foco. Esos dos puntos ayudan a dibujar bien la curva.', reemplaza: true, html: row(c('g', 'LR = |4p| = 12') + ' &nbsp; ⇒ &nbsp; ' + c('g', '(−2 ± 6, −2)')) + para1('lr') },
        { nota: 'Resumen de todo lo que encontramos.', html: PZ.tabla(['Elemento', 'Valor'], [['Vértice', '(−2, 1)'], ['p', '−3 (abre abajo)'], ['Foco', '(−2, −2)'], ['Directriz', 'y = 4'], ['Lado recto', '12']]) }
      ]
    },
    {
      titulo: 'De los elementos a la ecuación',
      intro: 'Foco F(4, 1) y directriz x = −2: escribir la ecuación de la parábola.',
      pasos: [
        { nota: 'Nos dan el foco (un punto) y la directriz (una recta). La parábola son todos los puntos que están a la misma distancia de los dos.', html: row('F(4, 1) &nbsp;&nbsp; directriz: x = −2') + para2('datos') },
        { nota: 'El <b>vértice</b> está justo a la mitad entre el foco y la directriz. En la horizontal: (4 + (−2)) ÷ 2 = 1. La altura es la misma del foco: 1.', reemplaza: true, html: row(c('y', 'V = ' + '(' + f('4 + (−2)', '2') + ' , 1) = (1, 1)')) + para2('vert') },
        { nota: 'La directriz es vertical, así que el eje es <b>horizontal</b>: usamos (y − k)² = 4p(x − h). Ahora p es la distancia del vértice al foco: 4 − 1 = 3.', html: row('(y − k)² = 4p(x − h)', 'eje horizontal', 'y') + row(c('p', 'p = 4 − 1 = 3'), 'distancia vértice → foco', 'p') },
        { nota: 'El foco está a la derecha del vértice, hacia donde crece x. Entonces p es positivo y la parábola abre a la derecha. Calculamos 4p.', html: row('4p = 4 · 3 = ' + c('y', '12')) },
        { nota: 'Sustituimos h = 1, k = 1 y 4p = 12.', html: row('(y − 1)² = 12(x − 1)') + say(box('(y − 1)² = 12(x − 1)'), 'g') },
        { nota: 'Probemos con un punto de la curva, P(4, 7). Su distancia al foco (4, 1) es 6 y su distancia a la directriz x = −2 es 4 − (−2) = 6. ¡Iguales!', reemplaza: true, html: para2('pt') },
        { nota: 'Comprobamos en la ecuación: (7 − 1)² = 36 y 12(4 − 1) = 36 ✓.', html: row('(7 − 1)² = 36 &nbsp;&nbsp; 12(4 − 1) = 36', '✓ coincide', 'g') }
      ]
    },
    {
      titulo: 'Forma general → forma ordinaria (completar cuadrados)',
      intro: 'Pasar x² − 6x − 8y + 25 = 0 a la forma ordinaria y hallar sus elementos.',
      pasos: [
        { nota: 'Solo la x está al cuadrado (la y no). Eso es una parábola de eje vertical. Para leer sus elementos necesitamos la forma ordinaria.', html: row(c('y', 'x² − 6x − 8y + 25 = 0')) },
        { nota: 'Dejamos de un lado los términos con x y pasamos todo lo demás al otro lado.', html: row('x² − 6x = 8y − 25', 'pasamos −8y y +25', 'y') },
        { nota: 'Para completar el cuadrado: tomamos la mitad de −6, que es −3, y la elevamos al cuadrado: 9. Sumamos 9 a los <b>dos lados</b> para no romper la igualdad.', html: row(c('b', 'mitad de −6 = −3') + ' &nbsp;→&nbsp; ' + c('b', '(−3)² = 9')) + row('x² − 6x ' + c('b', '+ 9') + ' = 8y − 25 ' + c('b', '+ 9'), 'sumamos 9 a los dos lados', 'b') },
        { nota: 'A la izquierda queda un trinomio cuadrado perfecto: (x − 3)². A la derecha sumamos: −25 + 9 = −16.', html: row('(x − 3)² = 8y − 16') },
        { nota: 'Sacamos factor común 8 a la derecha para que aparezca (y − k). 8y − 16 = 8(y − 2).', html: row('(x − 3)² = 8(y − 2)') + say(box('(x − 3)² = 8(y − 2)'), 'g') },
        { nota: 'Ahora sí leemos: h = 3, k = 2. Además 4p = 8, entonces p = 2 (positivo: abre hacia arriba).', html: PZ.tabla(['Elemento', 'Cómo sale', 'Valor'], [['Vértice', '(h, k)', '(3, 2)'], ['p', '4p = 8', '2'], ['Foco', '(h, k + p)', '(3, 4)'], ['Directriz', 'y = k − p', 'y = 0']]) },
        { nota: 'Y la dibujamos: vértice (3, 2), foco (3, 4) arriba, directriz y = 0 abajo.', html: para3() }
      ]
    }
  ];

  /* ============================================================
     1.8  La circunferencia
     ============================================================ */
  function circ1(stage) {
    var g = fg(2, 3, 24, 'circunferencia con diámetro AB').grid().ax(2);
    if (stage === 'circ') g.cur(function (t) { return [2 + Math.sqrt(20) * Math.cos(t), 3 + Math.sqrt(20) * Math.sin(t)]; }, 0, 2 * Math.PI, B, 90, false, 3.2);
    g.ln(-2, 1, 6, 5, Y, true, 2.6);
    g.pt(-2, 1, Y, 'A(−2, 1)', -8, 18, 'end').pt(6, 5, Y, 'B(6, 5)', 8, -8);
    if (stage !== 'diam') g.pt(2, 3, K, 'C(2, 3)', 4, 20);
    if (stage === 'rad' || stage === 'circ') g.ln(2, 3, -2, 1, G, false, 3.2).t(0, 2, 'r', G, -12, 14, 'end', 16);
    return g.out();
  }
  function circ2() {
    var g = fg(3, -4, 18, 'circunferencia de centro (3, −4) y radio 6').grid().ax(2);
    g.cur(function (t) { return [3 + 6 * Math.cos(t), -4 + 6 * Math.sin(t)]; }, 0, 2 * Math.PI, B, 90, false, 3.2);
    g.ln(3, -4, 9, -4, G, false, 3).t(6, -4, 'r = 6', G, 0, -8, 'middle', 16).pt(3, -4, K, 'C(3, −4)', -6, 20, 'end');
    return g.out();
  }
  function circ3(stage) {
    var g = fg(2, 1, 22, 'circunferencia por tres puntos').grid().ax(2);
    if (stage === 'circ') g.cur(function (t) { return [2 + 5 * Math.cos(t), 1 + 5 * Math.sin(t)]; }, 0, 2 * Math.PI, B, 90, false, 3.2).pt(2, 1, K, 'C(2, 1)', 4, 20).ln(2, 1, 6, 4, G, false, 2.6).t(4, 2.5, 'r = 5', G, 8, 6, 'start', 15);
    g.pt(-1, 5, Y, 'A(−1, 5)', 8, -6).pt(6, 4, Y, 'B(6, 4)', 8, -8).pt(-1, -3, Y, 'C(−1, −3)', 8, 4);
    return g.out();
  }

  P['1.8'] = [
    {
      titulo: 'Ecuación a partir de los extremos de un diámetro',
      intro: 'Una circunferencia tiene un diámetro con extremos A(−2, 1) y B(6, 5). Escribir su ecuación.',
      pasos: [
        { nota: 'Para escribir la ecuación de una circunferencia solo necesitamos dos cosas: el <b>centro</b> y el <b>radio</b>. Aquí no nos los dan, pero los podemos sacar de A y B.', html: row('A(−2, 1) &nbsp;&nbsp; B(6, 5)') + circ1('diam') },
        { nota: 'El centro de un diámetro es su punto medio: promediamos las x y promediamos las y.', reemplaza: true, html: row(c('p', 'C = ' + '(' + f('−2 + 6', '2') + ' , ' + f('1 + 5', '2') + ')') + ' = ' + c('p', '(2, 3)')) + circ1('cen') },
        { nota: 'El radio es la distancia del centro a cualquiera de los extremos. Usamos la fórmula de distancia con C(2, 3) y A(−2, 1).', reemplaza: true, html: row(c('g', 'r = √((−2 − 2)² + (1 − 3)²)')) + row(c('g', 'r = √(16 + 4) = √20')) + circ1('rad') },
        { nota: 'Recordemos la ecuación de la circunferencia: lo que está a la derecha es <b>r al cuadrado</b>, no r.', html: row(c('y', '(x − h)² + (y − k)² = r²'), 'centro (h, k)', 'y') },
        { nota: 'Aquí r² = (√20)² = 20, así que ni siquiera hace falta la raíz. Sustituimos h = 2, k = 3.', html: row('(x − 2)² + (y − 3)² = 20') + say(box('(x − 2)² + (y − 3)² = 20'), 'g') },
        { nota: 'Así se ve: una circunferencia centrada en (2, 3) que pasa por A y por B.', reemplaza: true, html: circ1('circ') },
        { nota: 'Comprobamos con B(6, 5): (6 − 2)² + (5 − 3)² = 16 + 4 = 20 ✓. ¡El punto cumple la ecuación!', html: row('(6 − 2)² + (5 − 3)² = 16 + 4 = 20', '✓', 'g') }
      ]
    },
    {
      titulo: 'Completar cuadrados: de forma general a ordinaria',
      intro: 'Hallar centro y radio de x² + y² − 6x + 8y − 11 = 0.',
      pasos: [
        { nota: 'Los coeficientes de x² y de y² son iguales (los dos valen 1): buena señal de que puede ser una circunferencia. Vamos a ver su centro y radio.', html: row(c('y', 'x² + y² − 6x + 8y − 11 = 0')) },
        { nota: 'Agrupamos las x con las x, las y con las y, y mandamos el número suelto al otro lado.', html: row('(x² − 6x) + (y² + 8y) = 11', 'agrupamos y pasamos −11', 'y') },
        { nota: 'Completamos cada grupo: mitad del número del medio, al cuadrado. Para x: la mitad de −6 es −3 y (−3)² = 9. Para y: la mitad de 8 es 4 y 4² = 16. Sumamos 9 y 16 a los <b>dos lados</b>.', html: row(c('b', 'x: (−3)² = 9') + ' &nbsp;&nbsp; ' + c('p', 'y: 4² = 16')) + row('(x² − 6x ' + c('b', '+ 9') + ') + (y² + 8y ' + c('p', '+ 16') + ') = 11 ' + c('b', '+ 9') + c('p', ' + 16'), 'sumamos a los dos lados', 'y') },
        { nota: 'Cada grupo es ahora un cuadrado perfecto. A la derecha sumamos: 11 + 9 + 16 = 36.', html: row('(' + c('b', 'x − 3') + ')² + (' + c('p', 'y + 4') + ')² = 36') + say(box('(x − 3)² + (y + 4)² = 36'), 'g') },
        { nota: 'Leemos: el centro tiene los signos al revés de lo que se ve: x − 3 da 3, y + 4 da −4. Y 36 es r², entonces r = 6.', html: row(c('y', 'C(3, −4)'), 'signos al revés', 'y') + row('r² = 36 &nbsp;⇒&nbsp; ' + c('g', 'r = 6')) },
        { nota: 'La dibujamos: centro en (3, −4) y radio 6.', html: circ2() },
        { nota: 'Siempre mira el número de la derecha: si es positivo hay circunferencia; si es cero es solo un punto; si es negativo no existe ninguna.', html: PZ.tabla(['Lado derecho N', 'Qué es'], [['N > 0 (aquí 36)', 'circunferencia, r = √N'], ['N = 0', 'un solo punto'], ['N < 0', 'no existe']], 0) }
      ]
    },
    {
      titulo: 'Circunferencia por tres puntos',
      intro: 'Hallar la circunferencia que pasa por A(−1, 5), B(6, 4) y C(−1, −3).',
      pasos: [
        { nota: 'Tres puntos que no están en línea recta determinan una única circunferencia. Primero los ubicamos.', html: row('A(−1, 5) &nbsp; B(6, 4) &nbsp; C(−1, −3)') + circ3('pts') },
        { nota: 'Usamos la forma general. Tiene tres incógnitas (D, E y F), y tenemos tres puntos: ¡justo tres ecuaciones!', reemplaza: true, html: row(c('y', 'x² + y² + Dx + Ey + F = 0')) + circ3('pts') },
        { nota: 'Sustituimos x e y de cada punto. Por ejemplo, en A: (−1)² + 5² = 26, y quedan −D + 5E + F. Pasamos 26 al otro lado.', html: PZ.llave([c('y', '26 − D + 5E + F = 0 → −D + 5E + F = −26') , c('p', '52 + 6D + 4E + F = 0 → 6D + 4E + F = −52'), c('b', '10 − D − 3E + F = 0 → −D − 3E + F = −10')]) },
        { nota: 'Restamos la primera menos la tercera: D y F desaparecen y queda una ecuación solo con E.', html: row('(−D + 5E + F) − (−D − 3E + F) = −26 − (−10)') + row(c('g', '8E = −16') + ' &nbsp;⇒&nbsp; ' + c('g', 'E = −2')) },
        { nota: 'Con E = −2, la primera y la segunda se vuelven: −D + F = −16 y 6D + F = −44. Las restamos y despejamos D, y luego F.', html: row('−D + F = −16') + row('6D + F = −44') + row('7D = −28 &nbsp;⇒&nbsp; ' + c('g', 'D = −4') + ' &nbsp;⇒&nbsp; ' + c('g', 'F = −20')) },
        { nota: 'Sustituimos D, E y F en la forma general y completamos cuadrados: (x² − 4x + 4) + (y² − 2y + 1) = 20 + 4 + 1.', html: row('x² + y² − 4x − 2y − 20 = 0') + PZ.flecha('completar cuadrados', 'b') + row('(x − 2)² + (y − 1)² = 25') + say(box('C(2, 1) &nbsp; r = 5'), 'g') },
        { nota: 'Comprobamos: A está a (−1 − 2)² + (5 − 1)² = 9 + 16 = 25 del centro, así que está en la circunferencia ✓. Igual B y C.', reemplaza: true, html: row('A: 9 + 16 = 25 ✓ &nbsp; B: 16 + 9 = 25 ✓ &nbsp; C: 9 + 16 = 25 ✓') + circ3('circ') }
      ]
    }
  ];

  /* ============================================================
     1.9  La elipse
     ============================================================ */
  function eli1(stage) {
    var g = fg(1, -2, 30, 'elipse con centro (1, −2)').grid().ax(2);
    g.cur(function (t) { return [1 + 5 * Math.cos(t), -2 + 3 * Math.sin(t)]; }, 0, 2 * Math.PI, Y, 100, false, 3.2);
    g.ln(-4, -2, 6, -2, D, true, 2).ln(1, 1, 1, -5, D, true, 2);
    if (stage === 'lr') g.ln(5, -3.8, 5, -0.2, G, false, 3).ln(-3, -3.8, -3, -0.2, G, false, 3).t(5, -0.2, 'LR', G, 8, 0, 'start', 14);
    g.pt(-4, -2, Y, 'V₁(−4, −2)', 6, -10, 'middle').pt(6, -2, Y, 'V₂(6, −2)', 0, -10, 'middle');
    g.pt(1, 1, G, 'B₁(1, 1)', 8, 4).pt(1, -5, G, 'B₂(1, −5)', 8, 4);
    g.pt(-3, -2, K, 'F₁', -2, 18, 'middle').pt(5, -2, K, 'F₂', -2, 18, 'middle').pt(1, -2, W, 'C', 7, 18);
    return g.out();
  }
  function eli2(stage) {
    var g = fg(0, 0, 24, 'elipse vertical').grid().ax(2);
    if (stage !== 'datos') {
      g.cur(function (t) { return [4 * Math.cos(t), 5 * Math.sin(t)]; }, 0, 2 * Math.PI, Y, 100, false, 3.2);
      g.pt(4, 0, G, 'P(4, 0)', 8, 18).pt(-4, 0, G, '', 0, 0).pt(0, -5, Y, 'V₂(0, −5)', 8, 4);
    }
    if (stage === 'chk') g.ln(4, 0, 0, 3, K, false, 2.4).ln(4, 0, 0, -3, K, false, 2.4).t(1.6, 1.8, '5', K, 8, 0).t(1.6, -1.8, '5', K, 8, 6);
    g.pt(0, 3, K, 'F₁(0, 3)', 8, -4).pt(0, -3, K, 'F₂(0, −3)', 8, 14).pt(0, 5, Y, 'V₁(0, 5)', 8, 4);
    return g.out();
  }
  function eli3() {
    var g = fg(2, -3, 34, 'elipse (x − 2)²/9 + (y + 3)²/4 = 1').grid().ax(2);
    g.cur(function (t) { return [2 + 3 * Math.cos(t), -3 + 2 * Math.sin(t)]; }, 0, 2 * Math.PI, Y, 100, false, 3.2);
    g.pt(2, -3, W, 'C(2, −3)', 4, 20).pt(-1, -3, Y, '(−1, −3)', 0, -10, 'middle').pt(5, -3, Y, '(5, −3)', 0, -10, 'middle');
    g.pt(2, -1, G, '(2, −1)', 8, 4).pt(2, -5, G, '(2, −5)', 8, 4);
    g.pt(2 - Math.sqrt(5), -3, K, 'F₁', -2, 18, 'middle').pt(2 + Math.sqrt(5), -3, K, 'F₂', 0, 18, 'middle');
    return g.out();
  }

  P['1.9'] = [
    {
      titulo: 'Leer los elementos de una elipse',
      intro: 'Dada (x − 1)²/25 + (y + 2)²/9 = 1, hallar centro, vértices, focos, excentricidad y lado recto.',
      pasos: [
        { nota: 'Es una elipse: dos términos cuadrados que se suman, cada uno dividido entre un número, y el resultado es 1.', html: row(c('y', f('(x − 1)²', '25') + ' + ' + f('(y + 2)²', '9') + ' = 1')) },
        { nota: 'El centro está en los números de los paréntesis, con el signo cambiado: x − 1 da h = 1; y + 2 da k = −2.', html: row('(x ' + c('b', '− 1') + ')² &nbsp; (y ' + c('p', '+ 2') + ')²') + row(c('b', 'h = 1') + ' &nbsp;&nbsp; ' + c('p', 'k = −2') + ' &nbsp;⇒&nbsp; ' + c('y', 'C(1, −2)')) },
        { nota: 'Entre los dos denominadores, el <b>mayor</b> es a². Aquí 25 es mayor y está debajo de x, así que el eje mayor es horizontal. Sacamos raíces: a = 5 y b = 3.', html: row(c('y', 'a² = 25 → a = 5'), 'el mayor, bajo x', 'y') + row(c('g', 'b² = 9 → b = 3'), 'el menor', 'g') },
        { nota: 'Los focos están a una distancia c del centro. En la elipse c se calcula <b>restando</b>: c² = a² − b².', html: row('c² = a² − b² = 25 − 9 = 16') + row(c('p', 'c = 4')) },
        { nota: 'Ahora ubicamos todo. Los vértices están a a = 5 del centro, los focos a c = 4 (ambos en la dirección horizontal) y los covértices a b = 3 (en vertical).', html: row(c('y', 'vértices: (1 ± 5, −2) = (6, −2) y (−4, −2)')) + row(c('p', 'focos: (1 ± 4, −2) = (5, −2) y (−3, −2)')) + row(c('g', 'covértices: (1, −2 ± 3) = (1, 1) y (1, −5)')) },
        { nota: 'Así se dibuja: el eje mayor mide 10 (de −4 a 6), el menor mide 6 y los focos quedan en el eje mayor, dentro de la elipse.', reemplaza: true, html: eli1('base') },
        { nota: 'Falta la excentricidad e = c/a: nos dice qué tan aplastada es. Y el lado recto: LR = 2b²/a. Es la cuerda vertical por cada foco.', reemplaza: true, html: row(c('y', 'e = ' + f('c', 'a') + ' = ' + f('4', '5') + ' = 0.8')) + row(c('g', 'LR = ' + f('2b²', 'a') + ' = ' + f('2 · 9', '5') + ' = ' + f('18', '5') + ' = 3.6')) + eli1('lr') }
      ]
    },
    {
      titulo: 'Escribir la ecuación a partir de focos y vértice',
      intro: 'Focos en (0, 3) y (0, −3); un vértice en (0, 5). Escribir la ecuación de la elipse.',
      pasos: [
        { nota: 'Nos dan los dos focos y un vértice. Los dibujamos para ver qué forma tiene la elipse.', html: row('F₁(0, 3) &nbsp; F₂(0, −3) &nbsp; V(0, 5)') + eli2('datos') },
        { nota: 'El centro está a la mitad entre los focos: (0, 0). Como los focos están sobre el eje y, el eje mayor es <b>vertical</b>.', html: row(c('y', 'C = (0, 0)')) + row('focos en el eje y &nbsp;⇒&nbsp; ' + c('p', 'eje mayor vertical')) },
        { nota: 'Del centro al foco hay c = 3. Del centro al vértice hay a = 5 (el vértice siempre está en el eje mayor).', html: row(c('p', 'c = 3') + ' &nbsp;&nbsp; ' + c('y', 'a = 5')) },
        { nota: 'Falta b. Usamos la relación de la elipse, c² = a² − b², y despejamos: b² = a² − c². Observa: restamos.', html: row('b² = a² − c² = 25 − 9 = ' + c('g', '16')) + row(c('g', 'b = 4')) },
        { nota: 'Como el eje mayor es vertical, el mayor denominador (25) va debajo de y². El 16 va debajo de x².', html: row(f('x²', '16') + ' + ' + f('y²', '25') + ' = 1') + say(box(f('x²', '16') + ' + ' + f('y²', '25') + ' = 1'), 'g') },
        { nota: 'La dibujamos: 5 hacia arriba y abajo, 4 hacia los lados, con los focos dentro del eje vertical.', reemplaza: true, html: eli2('base') },
        { nota: 'Comprobación con la definición: en el covértice P(4, 0), la distancia a cada foco es √(16 + 9) = 5. Suma: 5 + 5 = 10 = 2a ✓.', reemplaza: true, html: row('PF₁ + PF₂ = 5 + 5 = 10 = 2a', '✓ ¡es una elipse!', 'g') + eli2('chk') }
      ]
    },
    {
      titulo: 'Forma general → forma ordinaria',
      intro: 'Pasar 4x² + 9y² − 16x + 54y + 61 = 0 a la forma ordinaria y dibujarla.',
      pasos: [
        { nota: 'Los coeficientes de x² y y² son 4 y 9: del mismo signo pero distintos. Eso es una elipse.', html: row(c('y', '4x² + 9y² − 16x + 54y + 61 = 0')) },
        { nota: 'Agrupamos: las x juntas, las y juntas y el número suelto al otro lado.', html: row('4x² − 16x + 9y² + 54y = −61', 'pasamos +61', 'y') },
        { nota: 'Sacamos factor común de cada grupo: 4 en las x y 9 en las y. Dentro de cada paréntesis, el término en cuadrado queda con coeficiente 1.', html: row('4' + '(x² − 4x) + 9(y² + 6y) = −61') },
        { nota: 'Completamos cuadrados: mitad de −4 es −2, y (−2)² = 4. Mitad de 6 es 3, y 3² = 9. ¡Cuidado! Lo que sumamos dentro queda multiplicado: 4·4 = 16 y 9·9 = 81. Eso es lo que sumamos al otro lado.', html: row('4(x² − 4x ' + c('b', '+ 4') + ') + 9(y² + 6y ' + c('p', '+ 9') + ') = −61 ' + c('b', '+ 16') + c('p', ' + 81'), 'sumamos 4·4 y 9·9', 'r') },
        { nota: 'Factorizamos los cuadrados perfectos y sumamos: −61 + 16 + 81 = 36.', html: row('4(x − 2)² + 9(y + 3)² = 36') },
        { nota: 'Para que la derecha sea 1, dividimos todo entre 36. Simplificando: 4/36 = 1/9 y 9/36 = 1/4.', html: PZ.flecha('÷ 36', 'y') + row(f('(x − 2)²', '9') + ' + ' + f('(y + 3)²', '4') + ' = 1') + say(box(f('(x − 2)²', '9') + ' + ' + f('(y + 3)²', '4') + ' = 1'), 'g') },
        { nota: 'Leemos: C(2, −3); a² = 9 (mayor, bajo x) → a = 3 y eje mayor horizontal; b² = 4 → b = 2; c² = 9 − 4 = 5 → c = √5 ≈ 2.24, así que los focos están en (2 ± √5, −3).', reemplaza: false, html: eli3() }
      ]
    }
  ];

  /* ============================================================
     1.10  La hipérbola
     ============================================================ */
  function hip1(stage) {
    var g = fg(2, -1, 22, 'hipérbola con centro (2, −1)').grid().ax(2);
    g.ln(-1, -5, 5, -5, G, true, 2.2).ln(5, -5, 5, 3, G, true, 2.2).ln(5, 3, -1, 3, G, true, 2.2).ln(-1, 3, -1, -5, G, true, 2.2);
    if (stage !== 'rect') {
      g.ln(-6.5, -1 - 4 / 3 * 8.5, 10.5, -1 + 4 / 3 * 8.5, B, false, 2.4).ln(-6.5, -1 + 4 / 3 * 8.5, 10.5, -1 - 4 / 3 * 8.5, B, false, 2.4);
      g.t(8.2, 6, 'asíntota', B, 4, 0, 'start', 14);
    }
    if (stage === 'full') {
      g.cur(function (t) { return [2 + 3 * cosh(t), -1 + 4 * sinh(t)]; }, -1.6, 1.6, Y, 80, false, 3.2);
      g.cur(function (t) { return [2 - 3 * cosh(t), -1 + 4 * sinh(t)]; }, -1.6, 1.6, Y, 80, false, 3.2);
      g.pt(7, -1, K, 'F₂(7, −1)', 0, 18, 'middle').pt(-3, -1, K, 'F₁(−3, −1)', 0, 18, 'middle');
    }
    g.pt(5, -1, Y, 'V₂', 6, -8).pt(-1, -1, Y, 'V₁', -6, -8, 'end').pt(2, -1, W, 'C', 4, 18);
    return g.out();
  }
  function hip2(stage) {
    var g = fg(0, 0, 22, 'hipérbola vertical').grid().ax(2);
    if (stage === 'datos') {
      g.pt(0, 5, K, 'F₁(0, 5)', 8, 4).pt(0, -5, K, 'F₂(0, −5)', 8, 4).pt(0, 3, Y, 'V₁(0, 3)', 8, 4).pt(0, -3, Y, 'V₂(0, −3)', 8, 4);
      return g.out();
    }
    g.ln(-4, -3, 4, -3, G, true, 2.2).ln(4, -3, 4, 3, G, true, 2.2).ln(4, 3, -4, 3, G, true, 2.2).ln(-4, 3, -4, -3, G, true, 2.2);
    g.ln(-9.5, -9.5 * 0.75, 9.5, 9.5 * 0.75, B, false, 2.4).ln(-9.5, 9.5 * 0.75, 9.5, -9.5 * 0.75, B, false, 2.4);
    g.t(7, 5.5, 'y = ± ¾ x', B, 0, 0, 'start', 14);
    if (stage === 'full') {
      g.cur(function (t) { return [4 * sinh(t), 3 * cosh(t)]; }, -2, 2, Y, 80, false, 3.2);
      g.cur(function (t) { return [4 * sinh(t), -3 * cosh(t)]; }, -2, 2, Y, 80, false, 3.2);
      g.pt(16 / 3, 5, W, '(16/3, 5)', 8, -6);
    }
    g.pt(0, 5, K, 'F₁(0, 5)', -8, 4, 'end').pt(0, -5, K, 'F₂(0, −5)', -8, 4, 'end').pt(0, 3, Y, '', 0, 0).pt(0, -3, Y, '', 0, 0);
    return g.out();
  }
  function hip3() {
    var g = fg(-3, 1, 22, 'hipérbola con centro (−3, 1)').grid().ax(2);
    g.ln(-7, -1, 1, -1, G, true, 2.2).ln(1, -1, 1, 3, G, true, 2.2).ln(1, 3, -7, 3, G, true, 2.2).ln(-7, 3, -7, -1, G, true, 2.2);
    g.ln(-12, 1 - 0.5 * 9, 6, 1 + 0.5 * 9, B, false, 2.4).ln(-12, 1 + 0.5 * 9, 6, 1 - 0.5 * 9, B, false, 2.4);
    g.cur(function (t) { return [-3 + 4 * cosh(t), 1 + 2 * sinh(t)]; }, -2.2, 2.2, Y, 80, false, 3.2);
    g.cur(function (t) { return [-3 - 4 * cosh(t), 1 + 2 * sinh(t)]; }, -2.2, 2.2, Y, 80, false, 3.2);
    var c5 = 2 * Math.sqrt(5);
    g.pt(-3 + c5, 1, K, 'F₂', 0, 18, 'middle').pt(-3 - c5, 1, K, 'F₁', 0, 18, 'middle').pt(1, 1, Y, 'V₂(1, 1)', 6, -10, 'start').pt(-7, 1, Y, 'V₁(−7, 1)', 6, -10, 'end').pt(-3, 1, W, 'C(−3, 1)', 4, 18);
    return g.out();
  }

  P['1.10'] = [
    {
      titulo: 'Leer los elementos de una hipérbola',
      intro: 'Dada (x − 2)²/9 − (y + 1)²/16 = 1, hallar centro, vértices, focos y asíntotas.',
      pasos: [
        { nota: 'Es una hipérbola: dos términos cuadrados pero con un <b>signo menos</b> entre ellos. El término positivo (aquí el de x) nos dice hacia dónde abren las ramas: izquierda y derecha.', html: row(c('y', f('(x − 2)²', '9') + ' − ' + f('(y + 1)²', '16') + ' = 1')) },
        { nota: 'El centro sale de los paréntesis con el signo cambiado: h = 2 y k = −1.', html: row(c('y', 'C(2, −1)')) },
        { nota: 'En la hipérbola, a² es el denominador del término <b>positivo</b> (no importa si es el mayor). Así a² = 9, a = 3 y b² = 16, b = 4.', html: row(c('y', 'a² = 9 → a = 3'), 'término positivo', 'y') + row(c('g', 'b² = 16 → b = 4')) },
        { nota: 'Para los focos: c² = a² + b². ¡Aquí se <b>suma</b> (en la elipse se resta)! c es el más grande de los tres.', html: row('c² = a² + b² = 9 + 16 = 25') + row(c('p', 'c = 5')) },
        { nota: 'Primero el <b>rectángulo auxiliar</b>: centrado en C, con 3 a cada lado en horizontal (a) y 4 hacia arriba y abajo (b). Los vértices tocan los lados verticales.', reemplaza: true, html: row(c('y', 'vértices: (2 ± 3, −1) = (5, −1) y (−1, −1)')) + hip1('rect') },
        { nota: 'Las <b>asíntotas</b> son las diagonales del rectángulo, prolongadas. Su pendiente es b/a = 4/3 hacia arriba y −4/3 hacia abajo, pasando por el centro.', reemplaza: true, html: row(c('b', 'y + 1 = ± ' + f('4', '3') + '(x − 2)'), 'pendiente ± b/a', 'b') + hip1('asi') },
        { nota: 'Ahora sí las ramas: salen de los vértices, abrazan a los focos (en (2 ± 5, −1)) y se pegan cada vez más a las asíntotas sin tocarlas. Excentricidad e = c/a = 5/3 > 1.', reemplaza: true, html: row(c('p', 'focos: (2 ± 5, −1) = (7, −1) y (−3, −1)')) + hip1('full') }
      ]
    },
    {
      titulo: 'Escribir la ecuación a partir de focos y vértices',
      intro: 'Focos en (0, 5) y (0, −5); vértices en (0, 3) y (0, −3). Escribir la ecuación.',
      pasos: [
        { nota: 'Marcamos los focos y los vértices. Los vértices siempre quedan más cerca del centro que los focos.', html: row('F(0, ±5) &nbsp;&nbsp; V(0, ±3)') + hip2('datos') },
        { nota: 'El centro está a la mitad: (0, 0). Como focos y vértices están sobre el eje y, las ramas abren hacia arriba y abajo: el término positivo es <b>y²</b>.', html: row(c('y', 'C = (0, 0)')) + row('ramas arriba y abajo &nbsp;⇒&nbsp; ' + c('p', 'y² positivo')) },
        { nota: 'Del centro al vértice: a = 3. Del centro al foco: c = 5.', html: row(c('y', 'a = 3') + ' &nbsp;&nbsp; ' + c('p', 'c = 5')) },
        { nota: 'Falta b. Con c² = a² + b² despejamos b² = c² − a². Aquí c es el mayor, por eso restamos al revés que en la elipse.', html: row('b² = c² − a² = 25 − 9 = ' + c('g', '16')) + row(c('g', 'b = 4')) },
        { nota: 'El término positivo es y², con a² = 9 debajo. El negativo es x², con b² = 16.', html: row(f('y²', '9') + ' − ' + f('x²', '16') + ' = 1') + say(box(f('y²', '9') + ' − ' + f('x²', '16') + ' = 1'), 'g') },
        { nota: 'Dibujamos el rectángulo: 4 a los lados (b) y 3 hacia arriba y abajo (a). Sus diagonales son las asíntotas: y = ±(a/b)x = ±(3/4)x.', reemplaza: true, html: row(c('b', 'y = ± ' + f('3', '4') + ' x'), 'asíntotas (vertical: a/b)', 'b') + hip2('rect') },
        { nota: 'Y las ramas, desde los vértices (0, ±3) abrazando a los focos. Comprobación: en el foco, y = 5 y x = ±16/3: 25/9 − (16/3)²/16 = 25/9 − 16/9 = 1 ✓.', reemplaza: true, html: row('y = 5, x = ' + f('16', '3') + ': ' + f('25', '9') + ' − ' + f('16', '9') + ' = 1', '✓', 'g') + hip2('full') }
      ]
    },
    {
      titulo: 'Forma general → forma ordinaria',
      intro: 'Pasar x² − 4y² + 6x + 8y − 11 = 0 a la forma ordinaria y dibujarla.',
      pasos: [
        { nota: 'Los coeficientes de x² y de y² son 1 y −4: signos contrarios. Eso es una hipérbola.', html: row(c('y', 'x² − 4y² + 6x + 8y − 11 = 0')) },
        { nota: 'Agrupamos las x, las y, y pasamos el número suelto. Sacamos factor común −4 en las y (cuidado con el signo: 8y = −4 · (−2y)).', html: row('(x² + 6x) − 4(y² − 2y) = 11') },
        { nota: 'Completamos cuadrados: x → 3² = 9; y → (−1)² = 1. ¡Atención! Lo que sumamos dentro del segundo paréntesis está multiplicado por −4: en realidad sumamos −4·1 = −4.', html: row('(x² + 6x ' + c('b', '+ 9') + ') − 4(y² − 2y ' + c('p', '+ 1') + ') = 11 ' + c('b', '+ 9') + c('p', ' − 4'), 'el −4 multiplica al 1', 'r') },
        { nota: 'Factorizamos los cuadrados perfectos y sumamos: 11 + 9 − 4 = 16.', html: row('(x + 3)² − 4(y − 1)² = 16') },
        { nota: 'Dividimos todo entre 16. El primer término queda (x + 3)²/16. En el segundo, 4/16 = 1/4, así que queda (y − 1)²/4.', html: PZ.flecha('÷ 16', 'y') + row(f('(x + 3)²', '16') + ' − ' + f('(y − 1)²', '4') + ' = 1') + say(box(f('(x + 3)²', '16') + ' − ' + f('(y − 1)²', '4') + ' = 1'), 'g') },
        { nota: 'Leemos: centro C(−3, 1). El término positivo es x², así que abre izquierda-derecha con a² = 16 → a = 4; b² = 4 → b = 2. Luego c² = 16 + 4 = 20, c = 2√5 ≈ 4.47.', html: PZ.tabla(['Elemento', 'Valor'], [['Centro', '(−3, 1)'], ['a, b', '4 y 2'], ['c = √(a² + b²)', '√20 ≈ 4.47'], ['Vértices', '(−3 ± 4, 1)'], ['Asíntotas', 'y − 1 = ±½(x + 3)']]) },
        { nota: 'La dibujamos: rectángulo de 8 por 4 centrado en (−3, 1), asíntotas por las diagonales y las dos ramas saliendo de los vértices (1, 1) y (−7, 1).', html: hip3() }
      ]
    }
  ];
})(window.PZ);

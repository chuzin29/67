/* pizarra-1a-2.js — Métodos en pizarra, 1.er año, temas 1.6 a 1.8 */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', D = '#f4f6ef66';

  /* ---------- mini-ayudante para dibujar figuras con tiza (coordenadas matemáticas) ---------- */
  function fg(cx, cy, u, label) {
    var s = '';
    function X(x) { return +(210 + (x - cx) * u).toFixed(1); }
    function Yp(y) { return +(130 - (y - cy) * u).toFixed(1); }
    var o = {
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
      out: function () {
        return '<svg viewBox="0 0 420 260" style="width:min(100%,470px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'figura') + '"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">' + s + '</g></svg>';
      }
    };
    return o;
  }

  /* ============================================================
     1.6  Funciones lineales y constantes
     ============================================================ */
  function lin1(stage) {
    var g = fg(0.5, 0.5, 45, 'recta f(x) = 2x − 1').grid().ax(1);
    g.ln(-0.6, -2.2, 2, 3, Y, false, 3.2);
    g.pt(0, -1, K, '(0, −1)', 8, -10);
    g.pt(0.5, 0, K, '(1/2, 0)', 10, 14);
    if (stage === 'tri') {
      g.ln(0, -1, 1, -1, B, false, 2.6).ln(1, -1, 1, 1, G, false, 2.6);
      g.t(0.5, -1, 'avanza 1', B, -6, 16, 'middle', 13).t(1, 0, 'sube 2', G, 10, 0, 'start', 13);
    }
    return g.out();
  }
  function decr() {
    var g = fg(0.875, 3.5, 35, 'recta decreciente f(x) = −4x + 7').grid().ax(1);
    g.ln(0, 7, 1.75, 0, Y, false, 3.2);
    g.pt(0, 7, K, '(0, 7)', 8, -8);
    g.pt(1.75, 0, K, '(7/4, 0)', 10, 14);
    return g.out();
  }
  function constLine() {
    var g = fg(0, 5, 30, 'función constante h(x) = 5').grid().ax(1);
    g.ln(-7, 5, 7, 5, G, false, 3.2);
    g.t(6, 5, 'y = 5', G, -4, -10, 'end', 14);
    g.pt(0, 5, G, '', 0, 0);
    return g.out();
  }
  function taxi() {
    var g = fg(5, 4.5, 25, 'tarifa f(x) = 0.5x + 2').grid().ax(2);
    g.ln(0, 2, 10, 7, Y, false, 3.2);
    g.pt(0, 2, K, '(0, 2)', 8, -10);
    g.pt(10, 7, K, '(10, 7)', -8, -10, 'end');
    return g.out();
  }

  P['1.6'] = [
    {
      titulo: 'Función lineal creciente: f(x) = 2x − 1',
      intro: 'Analizar pendiente, dominio, rango y cortes con los ejes de f(x) = 2x − 1.',
      pasos: [
        { nota: 'Una función lineal se escribe f(x) = mx + b. Aquí vemos quién es m (pendiente) y quién es b (ordenada al origen): m = 2 y b = −1.', html: row(c('y', 'f(x) = 2x − 1')) },
        { nota: 'Como es una expresión polinómica, no tiene raíces ni divisiones que la limiten. Y como m ≠ 0, el dominio y el rango son todos los reales.', html: row('Dom(f) = R') + row('Ran(f) = R') },
        { nota: 'El corte con el eje Y siempre se halla evaluando en x = 0.', html: row('f(0) = 2(0) − 1 = −1') + row(c('p', '(0, −1)'), 'corte Y', 'p') },
        { nota: 'El corte con el eje X se halla igualando f(x) = 0 y despejando x.', html: row('2x − 1 = 0') + PZ.flecha('+ 1', 'y') + row('2x = 1') + PZ.flecha('÷ 2', 'y') + row(c('b', 'x = 1/2') + '  ⇒  ' + c('b', '(1/2, 0)'), 'corte X', 'b') },
        { nota: 'Con los dos cortes ya podemos dibujar la recta completa: pasa por (0, −1) y por (1/2, 0).', reemplaza: true, html: lin1('base') },
        { nota: 'La pendiente m = 2 también se ve en el dibujo: si avanzas 1 hacia la derecha, subes 2. Esa razón "sube/avanza" es la pendiente.', reemplaza: true, html: lin1('tri') },
        { nota: 'Resumen de lo que encontramos.', html: PZ.tabla(['Elemento', 'Valor'], [['m', '2 (creciente)'], ['b', '−1'], ['Dom(f)', 'R'], ['Ran(f)', 'R'], ['Corte Y', '(0, −1)'], ['Corte X', '(1/2, 0)']]) }
      ]
    },
    {
      titulo: 'Decreciente vs. constante: ¿qué cambia en el rango?',
      intro: 'Comparar f(x) = −4x + 7 (decreciente) con h(x) = 5 (constante).',
      pasos: [
        { nota: 'Vamos a poner lado a lado una recta que baja y una recta horizontal, para ver bien la diferencia.', html: row(c('b', 'f(x) = −4x + 7')) + row(c('g', 'h(x) = 5')) },
        { nota: 'En f, la pendiente es m = −4. Como m < 0, la recta es decreciente: baja de izquierda a derecha. En h no hay x visible, así que m = 0: es constante.', html: row(c('b', 'f: m = −4'), 'decreciente', 'b') + row(c('g', 'h: m = 0'), 'constante', 'g') },
        { nota: 'Corte Y de f: evaluamos en x = 0. En h, el "corte Y" es la misma recta: siempre vale 5.', html: row(c('b', 'f(0) = 7') + '  ⇒  ' + c('b', '(0, 7)')) },
        { nota: 'Corte X de f: igualamos a cero. Ojo: h(x) = 5 nunca vale 0, así que esa recta horizontal <b>no tiene</b> corte X.', html: row('−4x + 7 = 0') + PZ.flecha('−7, ÷(−4)', 'y') + row(c('b', 'x = 7/4') + '  ⇒  ' + c('b', '(7/4, 0)')) },
        { nota: 'Así se ve la recta decreciente f: empieza alto a la izquierda y va bajando.', reemplaza: true, html: decr() },
        { nota: 'Y así se ve la constante h: una recta perfectamente horizontal a la altura y = 5, sin subir ni bajar nunca.', reemplaza: true, html: constLine() },
        { nota: 'La diferencia clave está en el rango: f puede tomar cualquier valor de y, pero h solo toma uno.', html: PZ.tabla(['Función', 'Dom', 'Ran'], [['f(x) = −4x + 7', 'R', 'R'], ['h(x) = 5', 'R', '{5}']]) }
      ]
    },
    {
      titulo: 'Aplicación: tarifa de taxi',
      intro: 'Un taxi cobra $2.00 fijos más $0.50 por km. Escribir f(x) y hallar el costo de 10 km.',
      pasos: [
        { nota: 'El costo tiene una parte fija (lo que cuesta subirte, aunque no avances) y una parte que crece con los kilómetros. Eso es exactamente f(x) = mx + b.', html: row(c('y', 'f(x) = mx + b')) },
        { nota: 'b es el costo fijo ($2.00, lo que pagas aunque x = 0) y m es cuánto sube por cada km ($0.50).', html: row(c('p', 'b = 2.00'), 'monto base', 'p') + row(c('b', 'm = 0.50'), 'por cada km', 'b') + row('f(x) = 0.50x + 2.00') },
        { nota: 'Construimos una pequeña tabla para ver cómo crece el costo.', html: PZ.tabla(['x (km)', 'f(x)'], [['0', '2.00'], ['4', '4.00'], ['10', '7.00']], 2) },
        { nota: 'Para 10 km, sustituimos x = 10 en la fórmula.', html: row('f(10) = 0.50(10) + 2.00') + row('f(10) = 5.00 + 2.00 = 7.00') },
        { nota: 'Así se grafica: parte en (0, 2), el costo base, y sube con pendiente 0.50 hasta llegar a (10, 7).', html: taxi() },
        { nota: 'b es lo que ya debes pagar aunque no te muevas; m es la tarifa por unidad. Comparar dos planes se reduce a comparar sus m y b, sin graficar.', html: say('b = costo inicial &nbsp;&nbsp; m = tasa de cambio por unidad', 'y') },
        { nota: 'El costo de un viaje de 10 km es de $7.00.', html: say(box('f(10) = $7.00'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.7  Funciones cuadráticas
     ============================================================ */
  function cuadA(stage) {
    var g = fg(2, 1, 38, 'parábola f(x) = x² − 4x + 3').grid().ax(1);
    g.cur(function (x) { return [x, x * x - 4 * x + 3]; }, -0.3, 4.3, Y, 100, false, 3.2);
    g.ln(2, 4.4, 2, -2.4, D, true, 2).t(2, 4.2, 'x = 2', W, 8, 0, 'start', 13);
    g.pt(2, -1, K, 'V(2, −1)', 8, 14);
    if (stage === 'roots') {
      g.pt(1, 0, G, '(1, 0)', -6, -12, 'end');
      g.pt(3, 0, G, '(3, 0)', 6, -12);
      g.pt(0, 3, B, '(0, 3)', -8, -6, 'end');
    }
    return g.out();
  }
  function cuadB(stage) {
    var g = fg(1, 4, 22, 'parábola p(x) = −x² + 2x + 8').grid().ax(2);
    g.cur(function (x) { return [x, -x * x + 2 * x + 8]; }, -2.3, 4.3, Y, 100, false, 3.2);
    g.ln(1, 9.8, 1, -2.3, D, true, 2).t(1, 9.5, 'x = 1', W, 8, 0, 'start', 13);
    g.pt(1, 9, K, 'V(1, 9)', 8, 10);
    if (stage === 'roots') {
      g.pt(-2, 0, G, '(−2, 0)', -6, -12, 'end');
      g.pt(4, 0, G, '(4, 0)', 6, -12);
    }
    return g.out();
  }
  function proy() {
    var g = fg(2, 10, 12, 'altura h(t) = −5t² + 20t').grid().ax(1);
    g.cur(function (t) { return [t, -5 * t * t + 20 * t]; }, -0.1, 4.1, Y, 100, false, 3.2);
    g.ln(2, 20.5, 2, -1, D, true, 2);
    g.pt(2, 20, K, 'V(2, 20)', 8, 10);
    g.pt(0, 0, G, '(0, 0)', -6, 14, 'end');
    g.pt(4, 0, G, '(4, 0)', 6, 14);
    return g.out();
  }

  P['1.7'] = [
    {
      titulo: 'Vértice de una parábola que abre hacia arriba',
      intro: 'Analizar f(x) = x² − 4x + 3: concavidad, vértice, dominio, rango y cortes.',
      pasos: [
        { nota: 'Es una función cuadrática: a = 1, b = −4, c = 3. Como a > 0, la parábola abre hacia <b>arriba</b> (forma de U) y el vértice es el punto más bajo.', html: row(c('y', 'f(x) = x² − 4x + 3')) + row('a = 1 &nbsp;&nbsp; b = −4 &nbsp;&nbsp; c = 3') },
        { nota: 'Al ser polinómica, no hay restricciones: el dominio siempre es todo R.', html: row('Dom(f) = R') },
        { nota: 'La coordenada h del vértice se halla con h = −b/(2a). Cuidado con los signos: b es negativo.', html: row(c('b', 'h = −(−4)/(2·1) = ' + f('4', '2') + ' = 2')) },
        { nota: 'Ahora k = f(h): sustituimos h = 2 en la función original.', html: row(c('p', 'k = f(2) = 2² − 4(2) + 3')) + row(c('p', 'k = 4 − 8 + 3 = −1')) + row('V(2, −1)', 'vértice', 'y') },
        { nota: 'Como a > 0, el rango arranca en k y sube sin límite: Ran(f) = [−1, +∞). Así se ve la parábola, con su eje de simetría x = 2 pasando por el vértice.', reemplaza: true, html: cuadA('base') },
        { nota: 'Corte Y: evaluamos en x = 0. Corte X: igualamos a cero y factorizamos: x² − 4x + 3 = (x − 1)(x − 3) = 0.', reemplaza: true, html: row('f(0) = 3  ⇒  (0, 3)', 'corte Y', 'b') + row('(x − 1)(x − 3) = 0  ⇒  x = 1, 3', 'cortes X', 'g') + cuadA('roots') },
        { nota: 'Resumen completo.', html: PZ.tabla(['Elemento', 'Valor'], [['Concavidad', 'abre arriba (a > 0)'], ['Vértice', '(2, −1)'], ['Dom(f)', 'R'], ['Ran(f)', '[−1, +∞)'], ['Cortes X', '(1, 0) y (3, 0)']]) }
      ]
    },
    {
      titulo: 'Vértice de una parábola que abre hacia abajo',
      intro: 'Analizar p(x) = −x² + 2x + 8: vértice máximo, rango y cortes con el eje X.',
      pasos: [
        { nota: 'Aquí a = −1, negativo. Eso significa que la parábola abre hacia <b>abajo</b> (U invertida) y el vértice será un punto máximo.', html: row(c('y', 'p(x) = −x² + 2x + 8')) + row('a = −1 &nbsp;&nbsp; b = 2 &nbsp;&nbsp; c = 8') },
        { nota: 'Calculamos h = −b/(2a). Dos negativos (el de b al pasar y el de a) dan un resultado positivo.', html: row(c('b', 'h = −2/(2·(−1)) = ' + f('−2', '−2') + ' = 1')) },
        { nota: 'Sustituimos h = 1 en p(x) para obtener k.', html: row(c('p', 'k = p(1) = −1² + 2(1) + 8')) + row(c('p', 'k = −1 + 2 + 8 = 9')) + row('V(1, 9)', 'vértice máximo', 'y') },
        { nota: 'Como a < 0, el rango baja desde k hasta −∞: Ran(p) = (−∞, 9]. Dibujamos la parábola abriendo hacia abajo, abrazando su punto más alto.', reemplaza: true, html: cuadB('base') },
        { nota: 'Antes de buscar los cortes, miramos el discriminante b² − 4ac = 4 − 4(−1)(8) = 4 + 32 = 36. Es positivo, así que hay <b>dos</b> cortes con el eje X.', html: row('b² − 4ac = (2)² − 4(−1)(8) = 36 > 0') },
        { nota: 'Igualamos a cero. Para factorizar más fácil, multiplicamos por −1 primero: x² − 2x − 8 = 0 ⇒ (x − 4)(x + 2) = 0.', reemplaza: true, html: row('−x² + 2x + 8 = 0') + PZ.flecha('× (−1)', 'y') + row('x² − 2x − 8 = 0  ⇒  (x − 4)(x + 2) = 0') + row('x = 4, −2', 'cortes X', 'g') + cuadB('roots') },
        { nota: 'Comparando con la lección anterior: el signo de a decide todo. Aquí el vértice es el techo de la parábola, no el piso.', html: PZ.tabla(['Signo de a', 'Concavidad', 'Vértice es', 'Rango'], [['a > 0', 'abre arriba', 'mínimo', '[k, +∞)'], ['a < 0', 'abre abajo', 'máximo', '(−∞, k]']]) }
      ]
    },
    {
      titulo: 'Aplicación: altura máxima de un proyectil',
      intro: 'Una pelota lanzada tiene altura h(t) = −5t² + 20t. Hallar el tiempo y la altura máxima.',
      pasos: [
        { nota: 'El tiempo de altura máxima es justo donde está el vértice: ahí la pelota deja de subir y empieza a bajar.', html: row(c('y', 'h(t) = −5t² + 20t'))  },
        { nota: 'a = −5 y b = 20. Calculamos t del vértice con la misma fórmula de siempre, h = −b/(2a), pero aquí la variable se llama t.', html: row(c('b', 't_v = −20/(2·(−5)) = ' + f('−20', '−10') + ' = 2')) },
        { nota: 'Sustituimos t = 2 en h(t) para hallar la altura máxima.', html: row(c('p', 'h(2) = −5(2)² + 20(2)')) + row(c('p', 'h(2) = −20 + 40 = 20')) },
        { nota: 'Así se dibuja: la pelota sale del suelo en t = 0, sube hasta el vértice (2, 20) y vuelve a caer, tocando el suelo en t = 4 por la simetría de la parábola.', html: proy() },
        { nota: 'Nota la simetría: en t = 0 y t = 4 la altura es 0 (sube y baja lo mismo), y el punto más alto está exactamente a mitad de camino, en t = 2.', html: PZ.tabla(['t (s)', 'h(t) (m)'], [['0', '0'], ['2', '20'], ['4', '0']], 1) },
        { nota: 'Respuesta final: a los 2 segundos alcanza su altura máxima de 20 metros.', html: say(box('t = 2 s  ·  altura máxima = 20 m'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.8  Funciones racionales, raíz cuadrada y cúbica
     ============================================================ */
  function racional(stage) {
    var g = fg(3, 2, 18, 'r(x) = (2x + 2)/(x − 3)').grid().ax(1);
    g.ln(3, -5.2, 3, 9.2, B, true, 2.2);
    g.t(3, 9, 'x = 3', B, 8, 0, 'start', 13);
    if (stage === 'full' || stage === 'ah') {
      g.ln(-8.67, 2, 14.67, 2, B, true, 2.2);
      g.t(14, 2, 'y = 2', B, -6, -8, 'end', 13);
    }
    if (stage === 'full') {
      g.cur(function (t) { return [t, (2 * t + 2) / (t - 3)]; }, -7, 2.3, Y, 110, false, 3.0);
      g.cur(function (t) { return [t, (2 * t + 2) / (t - 3)]; }, 3.6, 12, Y, 110, false, 3.0);
      g.pt(-1, 0, G, '(−1, 0)', 6, -10);
      g.pt(0, -0.667, G, '(0, −2/3)', 8, 16);
    }
    return g.out();
  }
  function raiz(stage) {
    var g = fg(1, 4, 28, 'n(x) = √(5 − x) + 2').grid().ax(1);
    g.cur(function (t) { return [5 - (t - 2) * (t - 2), t]; }, 2, 5.3, Y, 90, false, 3.2);
    g.ln(5, 8.3, 5, -0.3, D, true, 2).t(5, 8, 'x = 5', W, -6, 0, 'end', 13);
    g.ln(-6, 2, 6, 2, D, true, 2).t(6, 2, 'y = 2', W, -6, -8, 'end', 13);
    g.pt(5, 2, K, '(5, 2)', 8, 10);
    if (stage === 'pt') { g.pt(1, 4, G, '(1, 4)', 8, -10); }
    return g.out();
  }
  function cubica() {
    var g = fg(0, 0, 30, 's(x) = x³ − 1').grid().ax(1);
    g.cur(function (t) { return [t, t * t * t - 1]; }, -1.45, 1.5, Y, 100, false, 3.2);
    g.pt(0, -1, K, '(0, −1)', 8, -8);
    g.pt(1, 0, G, '(1, 0)', 8, 14);
    return g.out();
  }

  P['1.8'] = [
    {
      titulo: 'Función racional: asíntotas y dominio',
      intro: 'Hallar dominio, asíntotas, cortes y rango de r(x) = (2x + 2)/(x − 3).',
      pasos: [
        { nota: 'Es el cociente de dos polinomios de grado 1. El numerador y el denominador tienen el mismo grado: eso nos avisa que habrá asíntota horizontal.', html: row(c('y', 'r(x) = ' + f('2x + 2', 'x − 3'))) },
        { nota: 'El dominio excluye los valores que anulan el denominador. Igualamos x − 3 = 0.', html: row('x − 3 = 0  ⇒  x = 3') + row('Dom(r) = R \\ {3}') },
        { nota: 'Esa x = 3 es justo la <b>asíntota vertical</b> (comprobamos que el numerador no se anula ahí: 2(3) + 2 = 8 ≠ 0). La curva se acerca a esa recta sin tocarla.', reemplaza: true, html: racional('av') },
        { nota: 'Como los grados de arriba y de abajo son iguales (ambos 1), la asíntota horizontal es el cociente de los coeficientes principales: 2 entre 1.', reemplaza: true, html: row(c('b', 'AH: y = ' + f('2', '1') + ' = 2')) + racional('ah') },
        { nota: 'Cortes: en Y evaluamos x = 0; en X igualamos el numerador a cero (el denominador no interviene ahí).', html: row('r(0) = ' + f('2', '−3') + ' = −2/3  ⇒  (0, −2/3)', 'corte Y', 'g') + row('2x + 2 = 0  ⇒  x = −1  ⇒  (−1, 0)', 'corte X', 'g') },
        { nota: 'Así se ven las dos ramas: una a la izquierda de x = 3 (bajando hacia −∞) y otra a la derecha (bajando desde +∞), ambas acercándose a y = 2 a lo lejos.', reemplaza: true, html: racional('full') },
        { nota: 'El rango excluye precisamente el valor de la asíntota horizontal: la curva nunca llega a tocar y = 2.', html: row('Ran(r) = R \\ {2}') },
        { nota: 'Resumen.', html: PZ.tabla(['Elemento', 'Valor'], [['Dom(r)', 'R \\ {3}'], ['AV', 'x = 3'], ['AH', 'y = 2'], ['Ran(r)', 'R \\ {2}'], ['Corte Y', '(0, −2/3)'], ['Corte X', '(−1, 0)']]) }
      ]
    },
    {
      titulo: 'Función raíz cuadrada: dominio y rango',
      intro: 'Hallar dominio y rango de n(x) = √(5 − x) + 2.',
      pasos: [
        { nota: 'Esta función tiene la forma a√(x − h) + k, pero aquí dentro de la raíz aparece 5 − x (la x está "al revés"). Eso va a invertir hacia dónde abre la curva.', html: row(c('y', 'n(x) = √(5 − x) + 2')) },
        { nota: 'Lo único prohibido en una raíz cuadrada real es que el radicando sea negativo. Planteamos la condición.', html: row('5 − x ≥ 0') },
        { nota: 'Despejamos x. Al multiplicar por −1 (o pasar x restando), se invierte la desigualdad.', html: row('−x ≥ −5') + PZ.flecha('× (−1), invierte', 'y') + row(c('b', 'x ≤ 5')) + row('Dom(n) = (−∞, 5]') },
        { nota: 'Para el rango miramos a y k. Aquí a = 1 (positivo) y k = 2, así que los valores de salida empiezan en 2 y suben.', html: row('Ran(n) = [2, +∞)') },
        { nota: 'La curva arranca en el punto (5, 2), que es donde el radicando vale exactamente 0, y se extiende hacia la izquierda (x más chicos) subiendo cada vez más.', html: raiz('base') },
        { nota: 'Probemos un punto: en x = 1, n(1) = √(5 − 1) + 2 = √4 + 2 = 2 + 2 = 4. El punto (1, 4) debe caer sobre la curva.', reemplaza: true, html: row('n(1) = √4 + 2 = 4  ⇒  (1, 4)', '✓', 'g') + raiz('pt') },
        { nota: 'Comparando con √(x − h) + k "normal" (que abre a la derecha): cuando la x está restada al revés, como 5 − x, la semiparábola abre hacia la <b>izquierda</b>.', html: say(box('Dom(n) = (−∞, 5]  ·  Ran(n) = [2, +∞)'), 'g') }
      ]
    },
    {
      titulo: 'Función cúbica: punto de inflexión',
      intro: 'Analizar s(x) = x³ − 1: dominio, rango, punto de inflexión y corte con el eje X.',
      pasos: [
        { nota: 'Una cúbica es un polinomio de tercer grado. Al no tener raíces ni divisiones, no hay ninguna restricción.', html: row(c('y', 's(x) = x³ − 1')) + row('Dom(s) = R &nbsp;&nbsp; Ran(s) = R') },
        { nota: 'En la forma básica a(x − h)³ + k, el punto de inflexión es (h, k). Aquí no hay desplazamiento horizontal (h = 0) y k = −1.', html: row(c('p', 'punto de inflexión: (0, −1)')) },
        { nota: 'El corte con el eje X se halla igualando a cero y despejando la raíz cúbica.', html: row('x³ − 1 = 0  ⇒  x³ = 1') + PZ.flecha('raíz cúbica', 'y') + row(c('b', 'x = 1') + '  ⇒  (1, 0)') },
        { nota: 'Así se dibuja: una "S" suave que pasa por el punto de inflexión (0, −1) y cruza el eje X en (1, 0).', html: cubica() },
        { nota: 'El punto de inflexión no es un máximo ni un mínimo (a diferencia del vértice de una parábola): es donde la curva cambia de cóncava hacia abajo a cóncava hacia arriba, sin dejar de crecer.', html: say('antes de (0, −1) la curva es cóncava hacia abajo; después, cóncava hacia arriba — pero siempre sube', 'b') },
        { nota: 'Resumen final.', html: say(box('Dom(s) = R  ·  Ran(s) = R  ·  inflexión (0, −1)  ·  corte X (1, 0)'), 'g') }
      ]
    }
  ];
})(window.PZ);

/* pizarra-3a-2.js — Métodos en pizarra, 3.er año, temas 1.6 a 1.11 */
window.PIZARRA_3A = window.PIZARRA_3A || {};
(function (PZ) { var P = window.PIZARRA_3A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, tach = PZ.tach;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', R = '#ff8a80', D = '#f4f6ef66';
  var RAD = Math.PI / 180;
  var SP = ' &nbsp; ', ARR = ' &nbsp;⇒&nbsp; ';

  /* ---------- mini-ayudante de figuras con tiza (coordenadas matemáticas) ---------- */
  function fg(cx, cy, u, label) {
    var s = '';
    function X(x) { return +(210 + (x - cx) * u).toFixed(1); }
    function Yp(y) { return +(130 - (y - cy) * u).toFixed(1); }
    var o = {
      raw: function (h) { s += h; return o; },
      ax: function (st, xl, yl) {
        var ox = X(0), oy = Yp(0), i, x0 = Math.ceil(cx - 205 / u), x1 = Math.floor(cx + 205 / u), y0 = Math.ceil(cy - 125 / u), y1 = Math.floor(cy + 125 / u);
        st = st || 1;
        s += '<path d="M4 ' + oy + 'H414 M406 ' + (oy - 5) + 'L414 ' + oy + 'L406 ' + (oy + 5) + '" stroke="' + D + '" stroke-width="2" fill="none"/>';
        s += '<path d="M' + ox + ' 256V6 M' + (ox - 5) + ' 14L' + ox + ' 6L' + (ox + 5) + ' 14" stroke="' + D + '" stroke-width="2" fill="none"/>';
        if (xl) s += '<text x="404" y="' + (oy - 9) + '" fill="' + W + '" font-size="15" text-anchor="end">' + xl + '</text>';
        if (yl) s += '<text x="' + (ox + 8) + '" y="16" fill="' + W + '" font-size="15">' + yl + '</text>';
        for (i = x0; i <= x1; i++) if (i !== 0 && i % st === 0) s += '<line x1="' + X(i) + '" y1="' + (oy - 3) + '" x2="' + X(i) + '" y2="' + (oy + 3) + '" stroke="' + D + '"/><text x="' + X(i) + '" y="' + (oy + 16) + '" fill="' + W + '" font-size="13" opacity=".7" text-anchor="middle">' + String(i).replace('-', '−') + '</text>';
        for (i = y0; i <= y1; i++) if (i !== 0 && i % st === 0) s += '<line x1="' + (ox - 3) + '" y1="' + Yp(i) + '" x2="' + (ox + 3) + '" y2="' + Yp(i) + '" stroke="' + D + '"/><text x="' + (ox - 7) + '" y="' + (Yp(i) + 4) + '" fill="' + W + '" font-size="13" opacity=".7" text-anchor="end">' + String(i).replace('-', '−') + '</text>';
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
        s += '<text x="' + (X(x) + (dx || 0)) + '" y="' + (Yp(y) + (dy || 0)) + '" fill="' + (col || W) + '" font-size="' + (sz || 16) + '"' + (anc ? ' text-anchor="' + anc + '"' : '') + '>' + str + '</text>';
        return o;
      },
      cur: function (fn, t0, t1, col, n, dash, w) {
        var d = '', i, p, t; n = n || 120;
        for (i = 0; i <= n; i++) { t = t0 + (t1 - t0) * i / n; p = fn(t); d += (i ? 'L' : 'M') + X(p[0]) + ' ' + Yp(p[1]); }
        s += '<path d="' + d + '" fill="none" stroke="' + (col || W) + '" stroke-width="' + (w || 3) + '" stroke-linecap="round" stroke-linejoin="round"' + (dash ? ' stroke-dasharray="7 6"' : '') + '/>';
        return o;
      },
      fx: function (fn, x0, x1, col, n, w) { return o.cur(function (t) { return [t, fn(t)]; }, x0, x1, col, n || 100, false, w); },
      arc: function (x, y, r, a1, a2, col) {
        return o.cur(function (a) { return [x + r * Math.cos(a * RAD), y + r * Math.sin(a * RAD)]; }, a1, a2, col, 40, false, 2.6);
      },
      out: function () {
        return '<svg viewBox="0 0 420 260" style="width:min(100%,470px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'figura') + '"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">' + s + '</g></svg>';
      }
    };
    return o;
  }
  function lim(v, expr) { return 'lím<sub>x→' + v + '</sub> ' + expr; }

  /* ============================================================
     1.6  Funciones trigonométricas e identidades
     ============================================================ */
  function circ150(stage) {
    var g = fg(0, 0, 78, 'Círculo unitario con el ángulo de 150°');
    var cs = -Math.sqrt(3) / 2, sn = 0.5;
    g.cur(function (a) { return [Math.cos(a * RAD), Math.sin(a * RAD)]; }, 0, 360, W, 90, false, 2.4).ax(0, 'x', 'y');
    g.pt(1, 0, W, '(1, 0)', 4, 16);
    if (stage >= 1) { g.ln(0, 0, cs, sn, Y, false, 3.2).pt(cs, sn, Y, '150°', -8, -10, 'end').arc(0, 0, .3, 0, 150, Y); }
    if (stage >= 2) { g.ln(cs, sn, cs, 0, K, true).ln(cs, 0, 0, 0, B, true).t(cs, sn / 2, 'sen', K, -8, 4, 'end').t(cs / 2, 0, 'cos', B, 0, 18, 'middle'); }
    if (stage >= 3) { g.ln(cs, sn, -1, 0, G, false, 3).arc(0, 0, .55, 150, 180, G).t(-0.62, 0.1, '30°', G, -6, -3, 'end', 14); }
    return g.out();
  }
  P['1.6'] = [
    {
      titulo: 'Demostrar una identidad: sec x − cos x = sen x · tan x',
      intro: 'Trabajamos solo con el lado más complicado hasta que se convierta en el otro lado. Nunca pasamos términos de un lado a otro.',
      pasos: [
        { nota: 'Queremos demostrar que los dos lados son siempre iguales. Regla de oro: empezamos por el lado que tiene más "enredo" (el izquierdo) y lo transformamos hasta que sea igual al derecho.', html: row('sec x − cos x = sen x · tan x', 'lado izq. = lado der.', 'y') },
        { nota: 'Primer truco: escribir todo con seno y coseno, que son los más fáciles de manejar. Aquí sec x es lo mismo que 1 dividido entre cos x.', html: row('sec x − cos x ' + ARR + ' ' + c('y', f('1', 'cos x')) + ' − cos x', 'sec x = 1 ÷ cos x', 'y') },
        { nota: 'Ahora hay una resta de una fracción con un entero. Para restar necesitamos el mismo denominador: escribimos cos x como cos x por cos x, entre cos x.', html: row('= ' + f('1', 'cos x') + ' − ' + c('p', f('cos x · cos x', 'cos x')), 'denominador común', 'p') },
        { nota: 'Juntamos las dos fracciones en una sola. Arriba queda 1 menos cos²x.', html: row('= ' + f('1 − cos²x', 'cos x')) },
        { nota: '¡Aquí aparece la identidad estrella! Como sen²x + cos²x = 1, entonces 1 − cos²x es exactamente sen²x. Cambiamos el numerador.', html: row(c('g', 'sen²x + cos²x = 1') + ' &nbsp;⇒&nbsp; ' + c('g', '1 − cos²x = sen²x')) + row('= ' + f(c('g', 'sen²x'), 'cos x')) },
        { nota: 'Separamos sen²x como sen x por sen x. Con eso formamos el cociente sen x entre cos x, que es la tangente.', html: row('= ' + c('y', 'sen x') + ' · ' + c('p', f('sen x', 'cos x'))) },
        { nota: 'Y sen x entre cos x es tan x. Llegamos exactamente al lado derecho, así que la identidad queda demostrada.', html: row('= sen x · tan x') + say(box('✓ lado izq. = lado der.'), 'g') }
      ]
    },
    {
      titulo: 'Valor exacto con la fórmula de suma: sen 75°',
      intro: 'Si el ángulo no es notable, lo partimos en una suma de dos ángulos que sí conocemos.',
      pasos: [
        { nota: 'No recordamos sen 75° de memoria. Pero 75° no es un ángulo "raro": es 45° más 30°, y de esos sí sabemos los valores.', html: row('sen 75° = sen(' + c('y', '45°') + ' + ' + c('p', '30°') + ')', '75 = 45 + 30', 'y') },
        { nota: 'Usamos la fórmula de la suma del seno: seno del primero por coseno del segundo, MÁS coseno del primero por seno del segundo.', html: row('sen(α + β) = sen α · cos β + cos α · sen β', 'la fórmula', 'g') },
        { nota: 'Sustituimos α = 45° (amarillo) y β = 30° (rosa) en cada lugar.', html: row('= ' + c('y', 'sen 45°') + ' · ' + c('p', 'cos 30°') + ' + ' + c('y', 'cos 45°') + ' · ' + c('p', 'sen 30°')) },
        { nota: 'Ahora ponemos los valores notables de la tabla: sen 45° = cos 45° = √2/2, cos 30° = √3/2 y sen 30° = 1/2.', html: PZ.tabla(['', '30°', '45°'], [['sen', '1/2', '√2/2'], ['cos', '√3/2', '√2/2']]) + row('= ' + c('y', f('√2', '2')) + ' · ' + c('p', f('√3', '2')) + ' + ' + c('y', f('√2', '2')) + ' · ' + c('p', f('1', '2'))) },
        { nota: 'Multiplicamos fracciones: arriba con arriba y abajo con abajo. √2 · √3 = √6.', html: row('= ' + f('√6', '4') + ' + ' + f('√2', '4')) },
        { nota: 'Los denominadores ya son iguales, así que juntamos. Este es el valor exacto (≈ 0,966, y la calculadora lo confirma).', html: row('sen 75° = ' + box(f('√6 + √2', '4'))) }
      ]
    },
    {
      titulo: 'Ángulo de referencia: sen 150° en el círculo unitario',
      intro: 'Para un ángulo grande, usamos el ángulo agudo que forma con el eje x y le ponemos el signo del cuadrante.',
      pasos: [
        { nota: 'Pedimos el seno de 150°. Dibujamos el círculo de radio 1 y partimos del punto (1, 0), girando 150° contra las agujas del reloj.', html: circ150(0) + row('sen 150° = ?') },
        { nota: 'Giramos 150°: pasamos los 90° y llegamos al segundo cuadrante (arriba a la izquierda). Ahí marcamos el punto P.', reemplaza: true, html: circ150(1) + row('sen 150° = ?') },
        { nota: 'En el círculo, el seno es la altura del punto (rosa) y el coseno es lo que se aleja horizontalmente (azul). En el cuadrante II la altura es positiva.', reemplaza: true, html: circ150(2) + row('sen 150° = ?') },
        { nota: 'Para saber su valor miramos el ángulo agudo con el eje x: 180° − 150° = 30°. Ese es el ángulo de referencia.', reemplaza: true, html: circ150(3) + row('referencia = 180° − 150° = ' + c('g', '30°'), 'cuadrante II', 'g') },
        { nota: 'El valor del seno es el del ángulo de referencia: sen 30° = 1/2.', html: row('sen 150° tiene el valor de sen 30° = ' + f('1', '2')) },
        { nota: 'Y el signo: en el cuadrante II el seno es positivo (el punto está arriba). Por tanto el resultado es positivo.', html: row('sen 150° = ' + box(f('1', '2')), 'signo + en II', 'y') + say('Truco: en I todas +, en II sen +, en III tan +, en IV cos +', 'b') }
      ]
    }
  ];

  /* ============================================================
     1.7  Límites trigonométricos
     ============================================================ */
  function sand(stage) {
    var g = fg(0, 0, 118, 'Función encerrada entre x² y −x²');
    g.ax(1, 'x', 'y');
    g.fx(function (x) { return x * x; }, -1.1, 1.1, G, 60, 3);
    g.fx(function (x) { return -x * x; }, -1.1, 1.1, G, 60, 3);
    g.t(1.02, 1.1, 'x²', G, -4, -2, 'end');
    g.t(1.02, -1.1, '−x²', G, -4, 16, 'end');
    if (stage >= 1) {
      var h = function (x) { return x * x * Math.sin(1 / x); };
      g.cur(function (t) { return [t, h(t)]; }, 0.03, 1, Y, 700, false, 2).cur(function (t) { return [-t, -h(t)]; }, 0.03, 1, Y, 700, false, 2);
      g.t(0.55, 0.62, 'x²·sen(1/x)', Y, 0, -48, 'middle', 15);
    }
    if (stage >= 2) g.pt(0, 0, R, '0', 10, -10);
    return g.out();
  }
  P['1.7'] = [
    {
      titulo: 'Ajustar el argumento: lím sen 3x ÷ x',
      intro: 'El límite fundamental dice que sen(algo) ÷ (ese mismo algo) tiende a 1. Si no coinciden, los "igualamos" multiplicando y dividiendo.',
      pasos: [
        { nota: 'Si pones x = 0 sale 0 ÷ 0, que no dice nada. Y aquí no hay nada que factorizar. Necesitamos el límite notable.', html: row(lim('0', f('sen 3x', 'x')) + ' = ' + f('0', '0') + ' ?', 'indeterminado', 'r') },
        { nota: 'Recordamos el amigo de este tema: sen(algo) ÷ (algo) tiende a 1 cuando ese algo tiende a 0. Pero el algo de arriba y el de abajo deben ser IGUALES.', html: row(lim('0', f('sen ' + c('y', 'u'), c('y', 'u'))) + ' = 1', 'solo si arriba y abajo hay lo mismo', 'g') },
        { nota: 'Arriba tenemos 3x, pero abajo solo x. Vamos a conseguir 3x abajo: multiplicamos y dividimos entre 3 (así no cambia nada, solo multiplicamos por 1).', html: row(f('sen 3x', 'x') + ' = ' + f('sen 3x', 'x') + ' · ' + c('p', f('3', '3')), 'multiplicar por 3/3 = 1', 'p') },
        { nota: 'Pasamos el 3 de abajo junto al x, para que quede 3x abajo, y dejamos el otro 3 afuera.', html: row('= ' + c('p', '3') + ' · ' + f('sen 3x', c('y', '3x'))) },
        { nota: 'Ahora arriba y abajo hay lo mismo: 3x. Y cuando x tiende a 0, 3x también tiende a 0. Esa fracción vale 1.', html: row(lim('0', c('p', '3') + ' · ' + f('sen 3x', '3x')) + ' = 3 · ' + c('g', '1')) },
        { nota: 'Resultado: 3. Regla rápida: lím sen(kx) ÷ x = k. Se queda el número que acompaña a x.', html: row(lim('0', f('sen 3x', 'x')) + ' = ' + box('3')) }
      ]
    },
    {
      titulo: 'Con el coseno: lím (1 − cos x) ÷ x²',
      intro: 'Cuando aparece 1 − cos x, se multiplica por el conjugado 1 + cos x para que salga sen²x.',
      pasos: [
        { nota: 'Sustituyendo x = 0: 1 − 1 = 0 arriba y 0 abajo. Otra vez 0 ÷ 0.', html: row(lim('0', f('1 − cos x', 'x²')) + ' = ' + f('0', '0'), 'indeterminado', 'r') },
        { nota: 'Truco: multiplicamos arriba y abajo por el conjugado 1 + cos x. (Es como racionalizar.) Arriba tenemos una diferencia por una suma.', html: row('= ' + f('1 − cos x', 'x²') + ' · ' + c('p', f('1 + cos x', '1 + cos x')), 'conjugado', 'p') },
        { nota: 'Arriba queda 1 menos cos²x (diferencia de cuadrados).', html: row('= ' + f('1 − cos²x', 'x²(1 + cos x)')) },
        { nota: 'Por la identidad pitagórica, 1 − cos²x = sen²x. ¡Ya salió un seno!', html: row('= ' + f(c('g', 'sen²x'), 'x²(1 + cos x)'), '1 − cos²x = sen²x', 'g') },
        { nota: 'Separamos en dos factores: (sen x ÷ x) al cuadrado, por 1 ÷ (1 + cos x).', html: row('= ' + c('y', '(' + f('sen x', 'x') + ')²') + ' · ' + c('b', f('1', '1 + cos x'))) },
        { nota: 'Cuando x tiende a 0: sen x ÷ x tiende a 1, y cos x tiende a 1. Sustituimos.', html: row(lim('0', '') + ' ' + c('y', '1²') + ' · ' + c('b', f('1', '1 + 1')) + ' = 1 · ' + f('1', '2')) },
        { nota: 'El límite es un medio.', html: row(lim('0', f('1 − cos x', 'x²')) + ' = ' + box(f('1', '2'))) }
      ]
    },
    {
      titulo: 'Teorema del sándwich: lím x² · sen(1/x)',
      intro: 'Cuando una función oscila sin parar, la encerramos entre dos funciones que sí conocemos.',
      pasos: [
        { nota: 'Si x tiende a 0, 1/x se vuelve enorme y sen(1/x) oscila como loco entre −1 y 1. No podemos sustituir. Pero tenemos un as: x², que se hace muy pequeño.', html: row(lim('0', 'x² · sen(1/x)') + ' = ?', 'sustituir no sirve', 'r') },
        { nota: 'El seno SIEMPRE está entre −1 y 1, no importa lo que haya adentro. Empezamos con eso.', html: row('−1 ≤ sen(1/x) ≤ 1', 'el seno nunca se sale', 'y') },
        { nota: 'Multiplicamos todo por x², que nunca es negativo, así que las desigualdades no se voltean.', html: row('−x² ≤ x² · sen(1/x) ≤ x²', '× x²', 'p') },
        { nota: 'Mira la figura: nuestra función (amarilla) vive atrapada entre las dos parábolas verdes, como un sándwich.', reemplaza: false, html: sand(0) },
        { nota: 'Dibujamos la función que oscila: se queda entre las dos parábolas, y se va apretando hacia el origen.', reemplaza: true, html: sand(1) },
        { nota: 'Las dos parábolas llegan a 0 cuando x tiende a 0: lím x² = 0 y lím (−x²) = 0. Si el pan de arriba y el de abajo van al mismo lugar, lo de en medio también.', reemplaza: true, html: sand(2) + row(lim('0', '(−x²)') + ' = 0 &nbsp;&nbsp; ' + lim('0', 'x²') + ' = 0', 'los dos "panes"', 'g') },
        { nota: 'Por el teorema del sándwich, el límite del relleno es 0.', html: row(lim('0', 'x² · sen(1/x)') + ' = ' + box('0')) }
      ]
    }
  ];

  /* ============================================================
     1.8  Números complejos
     ============================================================ */
  function argand(stage) {
    var g = fg(0, 0.9, 52, 'Plano complejo con el punto −1 + √3 i');
    var s3 = Math.sqrt(3);
    g.ax(1, 'real', 'imag.');
    g.pt(-1, s3, Y, '−1 + √3 i', 8, -8);
    if (stage >= 1) { g.ln(0, 0, -1, s3, Y, false, 3).t(-0.5, s3 / 2, 'r = 2', Y, -10, -2, 'end'); }
    if (stage >= 2) { g.ln(-1, s3, -1, 0, K, true).ln(-1, 0, 0, 0, B, true).t(-1, 0, '−1', B, 2, 18, 'middle', 14).t(-1, s3 / 2, '√3', K, 6, 4, 'start', 14); }
    if (stage >= 3) { g.arc(0, 0, 0.55, 0, 120, G).t(0.45, 0.55, 'θ = 120°', G, 8, 2, 'start'); }
    return g.out();
  }
  P['1.8'] = [
    {
      titulo: 'Dividir complejos: (7 + i) ÷ (3 − 4i)',
      intro: 'No se puede dejar i en el denominador. Se multiplica arriba y abajo por el conjugado del denominador.',
      pasos: [
        { nota: 'Tenemos un complejo dividido entre otro. Queremos una respuesta de la forma a + bi, con el denominador sin i.', html: row(f('7 + i', '3 − 4i')) },
        { nota: 'El conjugado de 3 − 4i es el mismo número con el signo de la parte imaginaria cambiado: 3 + 4i. Multiplicamos arriba y abajo por él (equivale a multiplicar por 1).', html: row('= ' + f('7 + i', '3 − 4i') + ' · ' + c('p', f('3 + 4i', '3 + 4i')), 'conjugado del denominador', 'p') },
        { nota: 'Primero el denominador: (3 − 4i)(3 + 4i) es suma por diferencia, 3² − (4i)². Como i² = −1, el segundo término se vuelve positivo.', html: row('abajo: 3² − (4i)² = 9 − 16·(' + c('r', '−1') + ') = 9 + 16 = ' + c('g', '25'), 'i² = −1', 'r') },
        { nota: 'Ahora el numerador, multiplicando cada término por cada término (como con binomios).', html: row('arriba: 7·3 + 7·4i + i·3 + i·4i') + row('= 21 + 28i + 3i + 4i²') },
        { nota: 'Cambiamos i² por −1 y juntamos: 21 − 4 = 17 en la parte real, 28i + 3i = 31i en la imaginaria.', html: row('= 21 + 31i ' + tach('+ 4i²') + ' ' + c('r', '− 4') + ' = ' + c('y', '17') + ' + ' + c('b', '31i')) },
        { nota: 'Ponemos numerador sobre denominador y separamos en parte real y parte imaginaria.', html: row('= ' + f('17 + 31i', '25') + ' = ' + box(f('17', '25') + ' + ' + f('31', '25') + ' i')) }
      ]
    },
    {
      titulo: 'De binómica a polar: z = −1 + √3 i',
      intro: 'Pasamos de las coordenadas (a, b) a la distancia r y el ángulo θ. ¡Dibujar el punto evita errores!',
      pasos: [
        { nota: 'Dibujamos el complejo como un punto: la parte real (−1) manda horizontal hacia la izquierda y la parte imaginaria (√3 ≈ 1,7) manda hacia arriba.', html: argand(0) + row('z = −1 + √3 i') },
        { nota: 'Primero el módulo r: la distancia al origen. Es el teorema de Pitágoras con los dos catetos.', reemplaza: true, html: argand(1) + row('r = √(a² + b²) = √(1 + 3) = √4 = ' + c('y', '2'), 'distancia al origen', 'y') },
        { nota: 'Ahora el ángulo de referencia con la tangente: tan α = cateto de arriba ÷ cateto de abajo (sin signos) = √3 ÷ 1, o sea α = 60°.', reemplaza: true, html: argand(2) + row('tan α = ' + f('√3', '1') + ' &nbsp;⇒&nbsp; α = ' + c('g', '60°'), 'ángulo de referencia', 'g') },
        { nota: 'Cuidado: la calculadora no sabe en qué cuadrante estás. Nuestro punto está arriba a la izquierda (cuadrante II), así que el ángulo real es 180° − 60°.', reemplaza: true, html: argand(3) + row('cuadrante II: θ = 180° − 60° = ' + c('g', '120°'), 'según el dibujo', 'r') },
        { nota: 'Escribimos la forma polar: el módulo y el ángulo.', html: row('z = ' + box('2 (cos 120° + i sen 120°)') + ' = 2 cis 120°') },
        { nota: 'Comprobamos: 2·cos 120° = 2·(−1/2) = −1 y 2·sen 120° = 2·(√3/2) = √3. Es el número original. ✓', html: row('2·(−' + f('1', '2') + ') + 2·' + f('√3', '2') + ' i = −1 + √3 i ✓') }
      ]
    },
    {
      titulo: 'Multiplicar en forma polar',
      intro: 'En polar multiplicar es muy fácil: se multiplican los módulos y se suman los ángulos.',
      pasos: [
        { nota: 'Vamos a multiplicar dos complejos escritos en polar. Cada uno tiene su módulo (la longitud) y su ángulo.', html: row('z₁ = ' + c('y', '2') + ' cis ' + c('p', '30°') + SP + SP + 'z₂ = ' + c('y', '3') + ' cis ' + c('p', '60°')) },
        { nota: 'La regla: los módulos (amarillo) se MULTIPLICAN y los ángulos (rosa) se SUMAN.', html: row('z₁ · z₂ = ' + c('y', 'r₁ · r₂') + ' cis (' + c('p', 'θ₁ + θ₂') + ')', 'la regla', 'g') },
        { nota: 'Multiplicamos los módulos: 2 por 3.', html: row('módulo: 2 · 3 = ' + c('y', '6')) },
        { nota: 'Sumamos los ángulos: 30° más 60°.', html: row('ángulo: 30° + 60° = ' + c('p', '90°')) },
        { nota: 'Juntamos el resultado en polar.', html: row('z₁ · z₂ = ' + box('6 cis 90°')) },
        { nota: 'Si queremos la forma binómica: cos 90° = 0 y sen 90° = 1, así que da 6i. Es decir, caímos justo sobre el eje imaginario.', html: row('= 6(0 + i·1) = ' + box('6i')) + say('Dividir es lo contrario: se dividen los módulos y se RESTAN los ángulos.', 'b') }
      ]
    }
  ];

  /* ============================================================
     1.9  De Moivre
     ============================================================ */
  function raices(stage) {
    var g = fg(0, 0, 54, 'Las tres raíces cúbicas de 8 sobre una circunferencia de radio 2');
    var s3 = Math.sqrt(3);
    g.ax(0, 'real', 'imag.');
    g.cur(function (a) { return [2 * Math.cos(a * RAD), 2 * Math.sin(a * RAD)]; }, 0, 360, D, 90, true, 1.6);
    g.t(0, 0, '2', W, 4, -4, 'start', 0);
    if (stage >= 1) g.pt(2, 0, Y, 'z₀ = 2', 8, -8);
    if (stage >= 2) { g.pt(-1, s3, K, 'z₁', -8, -8, 'end').pt(-1, -s3, B, 'z₂', -8, 20, 'end').arc(0, 0, 0.6, 0, 120, K).t(0.5, 0.75, '120°', K, 6, 4, 'start', 14); }
    if (stage >= 3) { g.ln(2, 0, -1, s3, G, false, 2.4).ln(-1, s3, -1, -s3, G, false, 2.4).ln(-1, -s3, 2, 0, G, false, 2.4); }
    return g.out();
  }
  P['1.9'] = [
    {
      titulo: 'Potencia con De Moivre: (1 + i)⁸',
      intro: 'Elevar un complejo a una potencia grande multiplicando a mano es un martirio. En polar solo elevamos el módulo y multiplicamos el ángulo.',
      pasos: [
        { nota: 'Multiplicar (1 + i) ocho veces sería interminable. Mejor lo pasamos a polar y usamos el teorema de De Moivre.', html: row('(1 + i)⁸ = ?') },
        { nota: 'Primero el módulo: la distancia de (1, 1) al origen.', html: row('r = √(1² + 1²) = ' + c('y', '√2')) },
        { nota: 'Luego el ángulo: el punto (1, 1) está en la diagonal del primer cuadrante, tan θ = 1 ÷ 1 = 1, o sea 45°.', html: row('tan θ = ' + f('1', '1') + ' &nbsp;⇒&nbsp; θ = ' + c('p', '45°')) + row('1 + i = ' + c('y', '√2') + ' cis ' + c('p', '45°')) },
        { nota: 'De Moivre dice: para la potencia n, el módulo se eleva a la n y el ángulo se multiplica por n.', html: row('[r cis θ]ⁿ = ' + c('y', 'rⁿ') + ' cis (' + c('p', 'n · θ') + ')', 'teorema de De Moivre', 'g') },
        { nota: 'Aplicamos con n = 8: (√2)⁸ = 2⁴ = 16 (porque √2 al cuadrado es 2) y el ángulo 8 · 45° = 360°.', html: row('(1 + i)⁸ = (' + c('y', '√2') + ')⁸ cis (8 · ' + c('p', '45°') + ')') + row('= ' + c('y', '16') + ' cis ' + c('p', '360°')) },
        { nota: 'Un ángulo de 360° es una vuelta completa, igual a 0°: cos 360° = 1 y sen 360° = 0. Resultado: un número real.', html: row('= 16(1 + i·0) = ' + box('16')) }
      ]
    },
    {
      titulo: 'Raíces cúbicas de 8',
      intro: 'Un número tiene n raíces n-ésimas complejas. Se reparten en una circunferencia, a igual distancia unas de otras.',
      pasos: [
        { nota: 'Buscamos todos los z con z³ = 8. Una es obvia (2), pero en los complejos hay tres. Empezamos escribiendo 8 en polar.', html: row('z³ = 8 = ' + c('y', '8') + ' cis ' + c('p', '0°'), '8 está sobre el eje real', 'y') },
        { nota: 'La fórmula para raíces n-ésimas: sacamos la raíz del módulo y dividimos el ángulo entre n, sumándole 360° por cada k (k = 0, 1, 2…) antes de dividir.', html: row('z<sub>k</sub> = ' + c('y', 'ⁿ√r') + ' cis (' + f(c('p', 'θ + 360°·k'), 'n') + ')', 'k = 0, 1, ..., n − 1', 'g') },
        { nota: 'El módulo común de las tres raíces es la raíz cúbica de 8, que es 2. Entonces las tres viven en una circunferencia de radio 2.', html: row('módulo = ∛8 = ' + c('y', '2')) + raices(0) },
        { nota: 'Con k = 0: el ángulo es 0° ÷ 3 = 0°. Esa es la raíz que ya conocíamos, z₀ = 2.', reemplaza: true, html: row('módulo = ∛8 = ' + c('y', '2')) + row('k = 0: ' + f('0° + 0°', '3') + ' = 0° ' + ARR + ' ' + c('y', 'z₀ = 2 cis 0° = 2')) + raices(1) },
        { nota: 'Con k = 1 y k = 2 los ángulos son 360° ÷ 3 = 120° y 720° ÷ 3 = 240°. Fíjate: cada raíz está 120° después de la anterior.', reemplaza: true, html: row('módulo = ∛8 = ' + c('y', '2')) + row('k = 0: ' + f('0° + 0°', '3') + ' = 0° ' + ARR + ' ' + c('y', 'z₀ = 2')) + row('k = 1: ' + f('0° + 360°', '3') + ' = 120° ' + ARR + ' ' + c('p', 'z₁ = 2 cis 120°')) + row('k = 2: ' + f('0° + 720°', '3') + ' = 240° ' + ARR + ' ' + c('b', 'z₂ = 2 cis 240°')) + raices(2) },
        { nota: 'Si unimos las tres raíces sale un triángulo equilátero. Siempre las raíces n-ésimas forman un polígono regular con n lados.', reemplaza: true, html: row('módulo = ∛8 = ' + c('y', '2')) + row('k = 0: ' + c('y', 'z₀ = 2')) + row('k = 1: ' + c('p', 'z₁ = 2 cis 120°')) + row('k = 2: ' + c('b', 'z₂ = 2 cis 240°')) + raices(3) },
        { nota: 'En forma binómica: cos 120° = −1/2 y sen 120° = √3/2; los de 240° tienen la misma parte real y la imaginaria negativa.', html: row(c('y', 'z₀ = 2') + SP + c('p', 'z₁ = −1 + √3 i') + SP + c('b', 'z₂ = −1 − √3 i')) + say(box('z³ = 8 tiene 3 soluciones'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.10  Definición de derivada
     ============================================================ */
  function secantes(stage) {
    var g = fg(1.5, 2.2, 47, 'Parábola y = x² con secantes que se acercan a la tangente en x = 1');
    var q = [2, 1.5, 1.2, 1], m = [3, 2.5, 2.2, 2];
    g.ax(1, 'x', 'y').fx(function (x) { return x * x; }, -1.5, 2.2, W, 70, 3);
    g.pt(1, 1, Y, 'P(1, 1)', -8, 18, 'end');
    if (stage >= 1) { g.ln(-0.3, 1 + 3 * (-1.3), 2.1, 1 + 3 * 1.1, K, false, 2.4).pt(2, 4, K, 'Q: pendiente 3', -8, -2, 'end'); }
    if (stage >= 2) { g.ln(-0.3, 1 + 2.5 * (-1.3), 2.1, 1 + 2.5 * 1.1, B, false, 2.4).pt(1.5, 2.25, B, 'pend. 2,5', 8, 14); }
    if (stage >= 3) { g.ln(-0.3, 1 + 2 * (-1.3), 2.1, 1 + 2 * 1.1, G, false, 3.4).t(2.1, 3.4, 'tangente', G, -6, 16, 'end').t(2.1, 3.4, 'pend. 2', G, -6, 34, 'end'); }
    void q; void m;
    return g.out();
  }
  function absfig() {
    var g = fg(0, 1.2, 55, 'Gráfica de |x| con una esquina en el origen');
    g.ax(1, 'x', 'y').fx(function (x) { return Math.abs(x); }, -2.5, 2.5, W, 4, 3);
    g.ln(0, 0, 2, 2, B, true, 2).ln(0, 0, -2, 2, K, true, 2);
    g.t(1.3, 0.3, 'pend. +1', B, 10, 8, 'start', 15).t(-1.3, 0.3, 'pend. −1', K, -10, 8, 'end', 15).pt(0, 0, R);
    return g.out();
  }
  P['1.10'] = [
    {
      titulo: 'Derivada de f(x) = x² con la definición',
      intro: 'La derivada es la pendiente de la tangente. La obtenemos como el límite de pendientes de rectas secantes.',
      pasos: [
        { nota: 'Para una curva queremos la pendiente EN un punto. Tomamos P y otro punto Q cerca, y trazamos la recta secante que pasa por los dos.', html: secantes(0) },
        { nota: 'Con Q en x = 2, la secante tiene pendiente (4 − 1) ÷ (2 − 1) = 3.', reemplaza: true, html: secantes(1) },
        { nota: 'Acercamos Q: en x = 1,5 la pendiente baja a 2,5. Cada vez la secante se parece más a la tangente.', reemplaza: true, html: secantes(2) },
        { nota: 'Cuando Q llega a P, la secante se vuelve tangente, con pendiente 2. Ahora lo hacemos con letras para cualquier x. Nos movemos una distancia h.', reemplaza: true, html: secantes(3) },
        { nota: 'Escribimos la pendiente de la secante: (cambio en y) ÷ (cambio en x). La derivada es lo que sale cuando h tiende a 0.', html: row("f′(x) = " + 'lím<sub>h→0</sub>' + ' ' + f('f(x + h) − f(x)', 'h'), 'definición', 'y') },
        { nota: 'Sustituimos f(x) = x²: en f(x + h) ponemos (x + h)² donde antes había x.', html: row('= lím<sub>h→0</sub> ' + f('(x + h)² − x²', 'h')) },
        { nota: 'Desarrollamos el cuadrado: (x + h)² = x² + 2xh + h². Entonces x² se cancela con −x².', html: row('= lím<sub>h→0</sub> ' + f('x² + 2xh + h² ' + c('r', '− x²'), 'h')) + row('= lím<sub>h→0</sub> ' + f('2xh + h²', 'h')) },
        { nota: 'Arriba, h es factor común. Lo sacamos y simplificamos con el h de abajo.', html: row('= lím<sub>h→0</sub> ' + f('h(2x + h)', 'h') + ' = lím<sub>h→0</sub> (2x + h)') },
        { nota: 'Ahora sí podemos hacer h = 0. La derivada de x² es 2x. En x = 1 da 2, ¡justo la pendiente de la figura!', html: row("f′(x) = " + box('2x'), 'en x = 1: 2·1 = 2 ✓', 'g') }
      ]
    },
    {
      titulo: 'Derivada de √x con la definición',
      intro: 'Con raíces el truco es multiplicar por el conjugado para que desaparezca la raíz del numerador.',
      pasos: [
        { nota: 'Escribimos el cociente incremental con f(x) = √x.', html: row("f′(x) = lím<sub>h→0</sub> " + f('√(x + h) − √x', 'h')) },
        { nota: 'Si ponemos h = 0 sale 0 ÷ 0. Hay que quitar la raíz del numerador: multiplicamos por el conjugado (el mismo, pero con suma).', html: row('= lím<sub>h→0</sub> ' + f('√(x + h) − √x', 'h') + ' · ' + c('p', f('√(x + h) + √x', '√(x + h) + √x')), 'conjugado', 'p') },
        { nota: 'Arriba es diferencia por suma: se queda "el primero al cuadrado menos el segundo al cuadrado", y las raíces desaparecen.', html: row('= lím<sub>h→0</sub> ' + f('(x + h) − x', 'h(√(x + h) + √x)')) },
        { nota: 'x − x se cancela y arriba queda solo h. Ese h se simplifica con el de abajo.', html: row('= lím<sub>h→0</sub> ' + f(c('g', 'h'), c('g', 'h') + '(√(x + h) + √x)')) + row('= lím<sub>h→0</sub> ' + f('1', '√(x + h) + √x')) },
        { nota: 'Ahora h = 0 ya no da problemas: queda √x + √x = 2√x abajo.', html: row('= ' + f('1', '√x + √x') + ' = ' + box(f('1', '2√x'))) },
        { nota: 'Comprobamos en x = 4: la derivada es 1 ÷ (2·2) = 1/4. La raíz crece despacito, y por eso la pendiente es chica.', html: row('f′(4) = ' + f('1', '2·2') + ' = ' + f('1', '4'), 'pendiente en x = 4', 'y') }
      ]
    },
    {
      titulo: 'Cuando NO hay derivada: f(x) = |x| en x = 0',
      intro: 'Si por la izquierda y por la derecha las pendientes son distintas, el límite no existe: hay una esquina.',
      pasos: [
        { nota: 'La función valor absoluto tiene forma de V. En el origen hay una esquina. ¿Tendrá derivada ahí? Veamos qué pasa por cada lado.', html: absfig() },
        { nota: 'Planteamos la definición en x = 0. Como f(0) = 0, el cociente es |h| ÷ h.', html: row("f′(0) = lím<sub>h→0</sub> " + f('|h| − 0', 'h') + ' = lím<sub>h→0</sub> ' + f('|h|', 'h')) },
        { nota: 'Por la derecha, h es positivo, así que |h| = h y el cociente vale siempre 1.', html: row(c('b', 'h → 0⁺: ') + f('h', 'h') + ' = ' + c('b', '1')) },
        { nota: 'Por la izquierda, h es negativo, así que |h| = −h y el cociente vale siempre −1.', html: row(c('p', 'h → 0⁻: ') + f('−h', 'h') + ' = ' + c('p', '−1')) },
        { nota: 'Para que exista el límite, los dos lados deben coincidir. Aquí dan 1 y −1: son distintos.', html: row(c('b', '1') + ' ≠ ' + c('p', '−1')) },
        { nota: 'Conclusión: en la esquina no se puede trazar UNA tangente. |x| es continua en 0 pero no derivable. (Derivable implica continua, pero no al revés.)', html: say(box("f′(0) no existe"), 'r') }
      ]
    }
  ];

  /* ============================================================
     1.11  Reglas de derivación
     ============================================================ */
  P['1.11'] = [
    {
      titulo: 'Regla de la potencia: derivar un polinomio',
      intro: 'Se deriva término por término: el exponente baja a multiplicar y el exponente nuevo es uno menos.',
      pasos: [
        { nota: 'Vamos a derivar este polinomio. No usamos límites: usamos la regla corta que viene de ellos.', html: row('f(x) = 4x³ − 5x² + 7x − 2') },
        { nota: 'Regla de la potencia: el exponente baja a multiplicar, y el exponente nuevo es uno menos.', html: row('(xⁿ)′ = ' + c('y', 'n') + ' · x<sup>n−1</sup>', 'la regla', 'g') + PZ.flecha('baja el exponente', 'y') },
        { nota: 'Primer término: 4x³. El 3 baja y multiplica al 4; el exponente queda en 2.', html: row('(4x³)′ = 4 · ' + c('y', '3') + ' · x² = ' + c('y', '12x²')) },
        { nota: 'Segundo término: −5x². El 2 baja, multiplica a −5, y queda x elevado a 1.', html: row('(−5x²)′ = −5 · ' + c('p', '2') + ' · x = ' + c('p', '−10x')) },
        { nota: 'Tercer término: 7x es 7x¹. El 1 baja y x⁰ vale 1. En general la derivada de ax es a.', html: row('(7x)′ = 7 · 1 · x⁰ = ' + c('b', '7')) },
        { nota: 'Último: −2 es un número solo. Una constante no cambia, su pendiente es 0, y desaparece.', html: row('(−2)′ = ' + c('r', '0'), 'una constante no varía', 'r') },
        { nota: 'Juntamos todo lo que obtuvimos.', html: row("f′(x) = " + box('12x² − 10x + 7')) },
        { nota: 'Comprobación rápida en x = 1: 12 − 10 + 7 = 9. Esa es la pendiente de la curva en x = 1.', html: row("f′(1) = 12 − 10 + 7 = " + c('g', '9')) }
      ]
    },
    {
      titulo: 'Regla del producto: (x² + 1)(3x − 2)',
      intro: 'La derivada de un producto NO es el producto de las derivadas. Se deriva uno a la vez.',
      pasos: [
        { nota: 'Tenemos dos factores multiplicados. Les ponemos nombre: u (amarillo) y v (rosa).', html: row('f(x) = ' + c('y', '(x² + 1)') + c('p', '(3x − 2)'), 'u = x² + 1,  v = 3x − 2', 'w') },
        { nota: 'Atención al error típico: la derivada del producto NO es u′ · v′. La regla correcta es: derivada del primero por el segundo sin tocar, más el primero sin tocar por la derivada del segundo.', html: row("(u · v)′ = " + c('y', 'u′') + ' · ' + c('p', 'v') + ' + ' + c('y', 'u') + ' · ' + c('p', 'v′'), 'regla del producto', 'g') },
        { nota: 'Derivamos cada factor por separado, con la regla de la potencia.', html: row(c('y', "u′ = 2x") + SP + SP + c('p', "v′ = 3")) },
        { nota: 'Armamos la regla sustituyendo.', html: row("f′(x) = " + c('y', '2x') + c('p', '(3x − 2)') + ' + ' + c('y', '(x² + 1)') + c('p', '·3')) },
        { nota: 'Multiplicamos: 2x por 3x es 6x², 2x por −2 es −4x. Y 3 por x² es 3x², 3 por 1 es 3.', html: row('= ' + c('g', '6x² − 4x') + ' + ' + c('b', '3x² + 3')) },
        { nota: 'Juntamos los términos iguales: 6x² + 3x² = 9x².', html: row("f′(x) = " + box('9x² − 4x + 3')) },
        { nota: 'Para estar seguros: si multiplicamos primero, f = 3x³ − 2x² + 3x − 2, que derivado da 9x² − 4x + 3. ¡Coincide!', html: row('3x³ − 2x² + 3x − 2 ' + ARR + ' 9x² − 4x + 3 ✓', 'comprobación', 'g') }
      ]
    },
    {
      titulo: 'Regla del cociente: (2x + 1) ÷ (x − 3)',
      intro: 'Cociente: "abajo por la derivada de arriba, menos arriba por la derivada de abajo, todo entre abajo al cuadrado".',
      pasos: [
        { nota: 'Aquí hay una fracción. Llamamos u a lo de arriba y v a lo de abajo.', html: row('f(x) = ' + f(c('y', '2x + 1'), c('p', 'x − 3')), 'u = 2x + 1,  v = x − 3', 'w') },
        { nota: 'La regla del cociente. Para recordarla: "abajo por derivada de arriba, MENOS arriba por derivada de abajo, entre abajo al cuadrado". El orden de la resta importa.', html: row("(" + f('u', 'v') + ")′ = " + f(c('p', 'v') + c('y', "u′") + ' − ' + c('y', 'u') + c('p', "v′"), c('p', 'v²')), 'regla del cociente', 'g') },
        { nota: 'Derivamos arriba y abajo por separado.', html: row(c('y', "u′ = 2") + SP + SP + c('p', "v′ = 1")) },
        { nota: 'Sustituimos en la regla, con cuidado de poner cada pieza en su lugar.', html: row("f′(x) = " + f(c('p', '(x − 3)') + c('y', '·2') + ' − ' + c('y', '(2x + 1)') + c('p', '·1'), c('p', '(x − 3)²'))) },
        { nota: 'Hacemos las multiplicaciones arriba. Ojo con el signo menos: afecta a TODO el paréntesis (2x + 1).', html: row('= ' + f('2x − 6 ' + c('r', '− 2x − 1'), '(x − 3)²')) },
        { nota: '2x y −2x se cancelan, y −6 − 1 = −7. El denominador se deja así.', html: row("f′(x) = " + box(f('−7', '(x − 3)²'))) },
        { nota: 'Observa: la derivada es siempre negativa (el denominador es un cuadrado, positivo). La función baja en cada tramo donde está definida.', html: say('f′(x) < 0 para todo x ≠ 3', 'b') }
      ]
    }
  ];
})(window.PZ);

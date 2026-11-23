/* pizarra-3a-5.js — Métodos en pizarra, 3.er año, temas 1.22 a 1.27 */
window.PIZARRA_3A = window.PIZARRA_3A || {};
(function (PZ) { var P = window.PIZARRA_3A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, tabla = PZ.tabla;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', R = '#ff8a80';

  /* ---------- mini-ayudantes de figuras (texto plano dentro del svg) ---------- */
  function sv(s, label) {
    return '<svg viewBox="0 0 420 260" style="width:min(100%,440px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'figura') + '"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round" stroke-linejoin="round">' + s + '</g></svg>';
  }
  function ln(x1, y1, x2, y2, col, w, dash) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (col || W) + '" stroke-width="' + (w || 2.5) + '"' + (dash ? ' stroke-dasharray="7 6"' : '') + '/>';
  }
  function ar(x1, y1, x2, y2, col, w) {
    var a = Math.atan2(y2 - y1, x2 - x1), h = 11, d = 0.45;
    var ax = x2 - h * Math.cos(a - d), ay = y2 - h * Math.sin(a - d), bx = x2 - h * Math.cos(a + d), by = y2 - h * Math.sin(a + d);
    return ln(x1, y1, x2, y2, col, w || 3) + '<path d="M' + ax.toFixed(1) + ' ' + ay.toFixed(1) + 'L' + x2 + ' ' + y2 + 'L' + bx.toFixed(1) + ' ' + by.toFixed(1) + '" fill="none" stroke="' + (col || W) + '" stroke-width="' + (w || 3) + '"/>';
  }
  function tx(x, y, t, col, sz, anc) {
    return '<text x="' + x + '" y="' + y + '" fill="' + (col || W) + '" font-size="' + (sz || 22) + '" text-anchor="' + (anc || 'middle') + '" stroke="none">' + t + '</text>';
  }
  function ci(x, y, r, col, fill, w) {
    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + (fill || 'none') + '" stroke="' + (col || W) + '" stroke-width="' + (w || 2.5) + '"/>';
  }
  function dot(x, y, col) { return ci(x, y, 5, col, col, 1); }
  function poly(pts, col, fill) {
    return '<polygon points="' + pts.map(function (p) { return p.join(','); }).join(' ') + '" fill="' + (fill || 'none') + '" stroke="' + col + '" stroke-width="2.8"/>';
  }
  var V = function (t) { return c('g', t); }, F = function (t) { return c('r', t); };

  /* ============================================================
     1.22  Vectores en R² y R³
     ============================================================ */
  function fig122(stage) {
    var s = ln(40, 220, 300, 220, W, 2) + ln(60, 240, 60, 20, W, 2) + tx(310, 226, 'x', W, 18) + tx(70, 26, 'y', W, 18);
    var i; for (i = 1; i <= 6; i++) { s += ln(60 + i * 40, 215, 60 + i * 40, 225, W, 1.5); }
    for (i = 1; i <= 5; i++) { s += ln(55, 220 - i * 40, 65, 220 - i * 40, W, 1.5); }
    if (stage === 'v') { s += ar(60, 220, 180, 60, Y, 3.5) + tx(105, 118, 'v = ⟨3, 4⟩', Y, 22, 'end'); }
    if (stage === 'tri' || stage === 'uni') {
      s += ln(60, 220, 180, 220, B, 3.5, true) + tx(120, 246, '3', B, 24) + ln(180, 220, 180, 60, G, 3.5, true) + tx(198, 145, '4', G, 24) + ar(60, 220, 180, 60, Y, 3.5);
      s += tx(105, 118, '|v| = ?', Y, 22, 'end');
    }
    if (stage === 'uni') {
      s = s.replace('|v| = ?', '|v| = 5') + ar(60, 220, 84, 188, K, 4) + tx(100, 205, 'û', K, 24, 'start') + tx(300, 60, 'û mide 1', K, 20, 'start');
    }
    return sv(s, 'vector (3,4) con su triángulo');
  }
  P['1.22'] = [
    {
      titulo: 'Magnitud y vector unitario',
      intro: 'Cuánto mide un vector y cómo hacerlo de tamaño 1. Primero en el plano con ⟨3, 4⟩ y luego en el espacio.',
      pasos: [
        { nota: 'Un vector es una flecha: dice hacia dónde vas y cuánto. ⟨3, 4⟩ significa 3 pasos a la derecha y 4 hacia arriba.', html: row('v = ⟨3, 4⟩') + fig122('v') },
        { nota: 'Para medir la flecha dibujamos el camino por los ejes: 3 de lado y 4 de alto. ¡Sale un triángulo rectángulo! La flecha es la hipotenusa.', reemplaza: true, html: row('v = ⟨3, 4⟩') + fig122('tri') },
        { nota: 'Pitágoras: sumamos los cuadrados de los lados y sacamos la raíz. Esa es la magnitud, y se escribe |v|.', html: row('|v| = √(3² + 4²)', 'Pitágoras', 'y') + row('= √(9 + 16) = √25 = ' + box('5')) },
        { nota: 'Un vector unitario mide exactamente 1. Para encogerlo, dividimos cada componente entre su magnitud (aquí entre 5).', html: row(c('p', 'û = ') + f('v', '|v|') + ' = ' + f('⟨3, 4⟩', '5'), 'dividir entre 5', 'p') + row('û = ⟨' + f('3', '5') + ', ' + f('4', '5') + '⟩') },
        { nota: 'Comprobamos: si de verdad mide 1, al aplicar Pitágoras debe dar 1.', reemplaza: true, html: row('v = ⟨3, 4⟩') + fig122('uni') + row('|û| = √(' + f('9', '25') + ' + ' + f('16', '25') + ') = √' + f('25', '25') + ' = ' + c('g', '1 ✓')) },
        { nota: 'En el espacio es igual, solo hay una componente más: se suma también z². Probemos con ⟨2, −1, 2⟩.', html: row('w = ⟨2, −1, 2⟩') + row('|w| = √(2² + (−1)² + 2²) = √(4 + 1 + 4) = √9 = ' + box('3')) },
        { nota: 'Dividimos cada componente entre 3 y ya tenemos el unitario. Ojo: el signo menos se queda.', html: row('ŵ = ⟨' + f('2', '3') + ', ' + f('−1', '3') + ', ' + f('2', '3') + '⟩', 'cada una ÷ 3', 'p') + say(box('|w| = 3 &nbsp; y &nbsp; ŵ = ⟨2/3, −1/3, 2/3⟩'), 'g') }
      ]
    },
    {
      titulo: 'Suma, resta y escalar: 2u − v',
      intro: 'Con vectores se opera componente por componente, como columnas de una tabla.',
      pasos: [
        { nota: 'Queremos 2u − v. Escribimos cada vector como una fila, con una columna para x, otra para y y otra para z.', html: tabla(['', 'x', 'y', 'z'], [[c('y', 'u'), '1', '3', '−2'], [c('b', 'v'), '4', '−1', '5']]) },
        { nota: 'Primero el escalar: el 2 multiplica a TODAS las componentes de u. No solo a la primera.', reemplaza: true, html: tabla(['', 'x', 'y', 'z'], [[c('y', 'u'), '1', '3', '−2'], [c('b', 'v'), '4', '−1', '5'], [c('p', '2u'), c('p', '2·1 = 2'), c('p', '2·3 = 6'), c('p', '2·(−2) = −4')]]) },
        { nota: 'Ahora restamos v, siempre columna con columna: x con x, y con y, z con z.', reemplaza: true, html: tabla(['', 'x', 'y', 'z'], [[c('y', 'u'), '1', '3', '−2'], [c('b', 'v'), '4', '−1', '5'], [c('p', '2u'), '2', '6', '−4'], [c('g', '2u − v'), '2 − 4', '6 − (−1)', '−4 − 5']]) },
        { nota: 'Cuidado con la segunda: restar −1 es lo mismo que sumar 1, por eso 6 − (−1) = 7.', reemplaza: true, html: tabla(['', 'x', 'y', 'z'], [[c('y', 'u'), '1', '3', '−2'], [c('b', 'v'), '4', '−1', '5'], [c('p', '2u'), '2', '6', '−4'], [c('g', '2u − v'), '−2', '7', '−9']], 3) },
        { nota: 'Listo: el resultado es otro vector con tres componentes.', html: say(box('2u − v = ⟨−2, 7, −9⟩'), 'g') }
      ]
    },
    {
      titulo: '¿Son paralelos?',
      intro: 'Dos vectores son paralelos si uno es un múltiplo del otro: u = c·v. Probamos con ⟨4, −6, 2⟩ y ⟨−6, 9, −3⟩.',
      pasos: [
        { nota: 'Paralelos quiere decir que apuntan en la misma línea (igual o contrario). Entonces uno debe ser el otro multiplicado por un número c.', html: row('u = ⟨4, −6, 2⟩') + row('v = ⟨−6, 9, −3⟩') + row('¿ u = c · v ?', 'buscamos c', 'y') },
        { nota: 'Si c existe, debe servir en las tres componentes. Dividimos cada componente de u entre la de v.', html: tabla(['', 'x', 'y', 'z'], [['u', '4', '−6', '2'], ['v', '−6', '9', '−3'], [c('y', 'u ÷ v'), c('y', f('4', '−6')), c('y', f('−6', '9')), c('y', f('2', '−3'))]]) },
        { nota: 'Simplificamos cada fracción. Mira qué pasa:', reemplaza: true, html: tabla(['', 'x', 'y', 'z'], [['u', '4', '−6', '2'], ['v', '−6', '9', '−3'], [c('g', 'c'), c('g', '−2/3'), c('g', '−2/3'), c('g', '−2/3')]], 2) },
        { nota: 'Las tres dan lo mismo: c = −2/3. Basta con que una no coincidiera para que NO fueran paralelos.', html: say(box('u = −2/3 · v') + ' &nbsp; ¡paralelos!', 'g') },
        { nota: 'El signo negativo de c nos dice que apuntan en sentidos opuestos. Así se ve:', html: sv(ar(140, 70, 180, 130, Y, 3.5) + tx(125, 78, 'u', Y, 24) + ar(300, 220, 240, 130, B, 3.5) + tx(318, 222, 'v', B, 24) + ln(120, 40, 320, 250, W, 1.5, true) + tx(330, 120, 'sentidos', K, 20, 'start') + tx(330, 142, 'opuestos', K, 20, 'start'), 'dos flechas paralelas opuestas') }
      ]
    }
  ];

  /* ============================================================
     1.23  Producto punto y producto cruz
     ============================================================ */
  function figAng() {
    return sv(ar(90, 200, 330, 200, B, 3.5) + ar(90, 200, 220, 50, Y, 3.5) + '<path d="M150 200 A60 60 0 0 0 134 158" fill="none" stroke="' + K + '" stroke-width="3"/>' +
      tx(165, 180, 'θ', K, 26) + tx(335, 218, 'b', B, 24, 'start') + tx(228, 46, 'a', Y, 24, 'start'), 'ángulo entre dos vectores');
  }
  function fixMat(rows, hl) {
    return tabla(['i', 'j', 'k'], rows, hl);
  }
  P['1.23'] = [
    {
      titulo: 'Producto punto y ángulo',
      intro: 'Hallar el ángulo entre a = ⟨1, 2, 2⟩ y b = ⟨3, 0, 4⟩.',
      pasos: [
        { nota: 'Dos flechas que salen del mismo punto forman un ángulo θ. El producto punto nos ayuda a encontrarlo sin transportador.', html: figAng() + row('a = ⟨1, 2, 2⟩ &nbsp;&nbsp; b = ⟨3, 0, 4⟩') },
        { nota: 'Producto punto: multiplicamos componente con componente y SUMAMOS. El resultado es un número, no un vector.', html: row('a · b = 1·3 + 2·0 + 2·4', 'multiplicar y sumar', 'y') + row('= 3 + 0 + 8 = ' + c('y', '11')) },
        { nota: 'Ahora el largo de cada vector, con Pitágoras en 3D.', html: row('|a| = √(1 + 4 + 4) = √9 = ' + c('b', '3')) + row('|b| = √(9 + 0 + 16) = √25 = ' + c('b', '5')) },
        { nota: 'La fórmula mágica: el coseno del ángulo es el producto punto dividido entre los dos largos.', html: row(c('p', 'cos θ') + ' = ' + f('a · b', '|a| · |b|'), 'fórmula', 'p') + row('= ' + f(c('y', '11'), c('b', '3') + ' · ' + c('b', '5')) + ' = ' + f('11', '15')) },
        { nota: 'Para sacar θ usamos la tecla cos⁻¹ (arccos) de la calculadora, en modo grados.', html: row('θ = arccos(' + f('11', '15') + ')') + say(box('θ ≈ 42,8°'), 'g') },
        { nota: 'Un truco útil: si el producto punto da 0, el coseno es 0 y el ángulo es 90°. Se dice que los vectores son ortogonales (perpendiculares). Ej.: ⟨2, 3, −1⟩ · ⟨1, 0, 2⟩ = 2 + 0 − 2 = 0.', html: say('Si a · b = 0 &nbsp;⇒&nbsp; ' + c('g', 'perpendiculares (90°)'), 'y') + row('⟨2, 3, −1⟩ · ⟨1, 0, 2⟩ = 2 + 0 − 2 = ' + c('g', '0 ✓')) }
      ]
    },
    {
      titulo: 'Producto cruz: a × b',
      intro: 'Calcular ⟨2, 1, 0⟩ × ⟨0, 3, 1⟩. El resultado es un vector perpendicular a los dos.',
      pasos: [
        { nota: 'Armamos una tabla: arriba i, j, k (una columna por eje), en medio el primer vector y abajo el segundo.', html: fixMat([['2', '1', '0'], ['0', '3', '1']]) + row('a = ⟨2, 1, 0⟩, &nbsp; b = ⟨0, 3, 1⟩') },
        { nota: 'Para la componente i tapamos la columna de i y cruzamos lo que queda: 1·1 − 0·3. Se multiplica en cruz y se resta.', reemplaza: true, html: fixMat([[F('2'), c('y', '1'), c('y', '0')], [F('0'), c('y', '3'), c('y', '1')]]) + row('i: ' + c('y', '1·1 − 0·3') + ' = ' + c('y', '1')) },
        { nota: 'Para j tapamos la columna del medio. Atención: a j SIEMPRE le cambiamos el signo.', reemplaza: true, html: fixMat([[c('p', '2'), F('1'), c('p', '0')], [c('p', '0'), F('3'), c('p', '1')]]) + row('i: 1') + row('j: ' + c('p', '−(2·1 − 0·0)') + ' = ' + c('p', '−2'), 'el signo cambia', 'p') },
        { nota: 'Para k tapamos la última columna y cruzamos 2·3 − 1·0.', reemplaza: true, html: fixMat([[c('b', '2'), c('b', '1'), F('0')], [c('b', '0'), c('b', '3'), F('1')]]) + row('i: 1 &nbsp; j: −2') + row('k: ' + c('b', '2·3 − 1·0') + ' = ' + c('b', '6')) },
        { nota: 'Juntamos las tres respuestas en un vector.', html: say(box('a × b = ⟨1, −2, 6⟩'), 'g') },
        { nota: 'Comprobación: el resultado debe ser perpendicular a a. Hacemos el producto punto y debe dar cero.', html: row('a · (a × b) = 2·1 + 1·(−2) + 0·6 = 2 − 2 + 0 = ' + c('g', '0 ✓'), 'perpendicular', 'g') }
      ]
    },
    {
      titulo: 'Área de un paralelogramo',
      intro: 'Lados u = ⟨1, 3, 0⟩ y v = ⟨2, 0, 4⟩. El largo del producto cruz es justo el área.',
      pasos: [
        { nota: 'Dos vectores que salen del mismo punto forman un paralelogramo. Queremos cuánto espacio ocupa.', html: sv(poly([[80, 210], [230, 210], [330, 90], [180, 90]], W, 'rgba(255,226,122,.18)') + ar(80, 210, 230, 210, Y, 3.5) + ar(80, 210, 180, 90, B, 3.5) + tx(155, 238, 'u', Y, 24) + tx(112, 140, 'v', B, 24) + tx(255, 156, 'Área = ?', G, 26), 'paralelogramo con lados u y v') },
        { nota: 'Primero el producto cruz u × v, como en la lección anterior. Componente i: 3·4 − 0·0 = 12.', html: row('u × v = ⟨ 3·4 − 0·0 , &nbsp; −(1·4 − 0·2) , &nbsp; 1·0 − 3·2 ⟩') },
        { nota: 'Hacemos cada cuenta con calma: 12, luego −4 (con el signo cambiado) y −6.', html: row('u × v = ' + c('y', '⟨12, −4, −6⟩')) },
        { nota: 'El ÁREA es el largo (magnitud) de ese vector: Pitágoras otra vez.', html: row('Área = |u × v| = √(12² + (−4)² + (−6)²)', 'largo del cruz', 'y') + row('= √(144 + 16 + 36) = √196') },
        { nota: '196 es 14 al cuadrado. Recuerda poner las unidades al cuadrado.', html: say(box('Área = 14 u²'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.24  Rectas y planos en R³
     ============================================================ */
  P['1.24'] = [
    {
      titulo: 'Ecuación paramétrica de una recta',
      intro: 'Recta que pasa por P₀ = (1, −2, 3) con dirección d = ⟨2, 1, −1⟩.',
      pasos: [
        { nota: 'Para dibujar una recta necesito dos cosas: un punto por donde pasa y una dirección hacia dónde avanza.', html: sv(dot(110, 170, Y) + tx(100, 195, 'P₀', Y, 22) + ar(110, 170, 200, 130, B, 3.5) + tx(160, 130, 'd', B, 24) + ln(40, 200, 380, 50, W, 1.5, true), 'punto y dirección') + row('P₀ = (1, −2, 3) &nbsp; d = ⟨2, 1, −1⟩') },
        { nota: 'Idea: arrancas en P₀ y das t pasos en la dirección d. t es un número que tú eliges: t = 2 es dar dos pasos.', html: row(c('g', 'r(t)') + ' = ' + c('y', 'P₀') + ' + t · ' + c('b', 'd'), 'punto + t · dirección', 'g') },
        { nota: 'Sustituimos los números y separamos por componentes: una ecuación para x, otra para y, otra para z.', html: row('⟨x, y, z⟩ = ⟨1, −2, 3⟩ + t⟨2, 1, −1⟩') + PZ.llave([c('y', 'x = 1 + 2t'), c('y', 'y = −2 + t'), c('y', 'z = 3 − t')]) },
        { nota: 'Probamos con varios t para ver puntos de la recta.', html: tabla(['t', 'x', 'y', 'z', 'punto'], [['−1', '−1', '−3', '4', '(−1, −3, 4)'], ['0', '1', '−2', '3', '(1, −2, 3)'], ['1', '3', '−1', '2', '(3, −1, 2)'], ['2', '5', '0', '1', '(5, 0, 1)']], 1) },
        { nota: 'En t = 0 aparece P₀, tal como debe ser. ¡Comprobado! Otra forma de escribirla despeja t de las tres y las iguala.', html: row('t = ' + f('x − 1', '2') + ' = ' + f('y + 2', '1') + ' = ' + f('z − 3', '−1'), 'ecuaciones simétricas', 'p') + say('x = 1 + 2t, &nbsp; y = −2 + t, &nbsp; z = 3 − t', 'g') }
      ]
    },
    {
      titulo: 'Plano por tres puntos',
      intro: 'Plano que pasa por A = (1,0,0), B = (0,2,0) y C = (0,0,3).',
      pasos: [
        { nota: 'Tres puntos que no están en línea definen un plano. Los marcamos en los tres ejes.', html: sv(ln(120, 180, 70, 220, W, 2) + ln(120, 180, 340, 180, W, 2) + ln(120, 180, 120, 20, W, 2) + tx(55, 238, 'x', W, 20) + tx(352, 186, 'y', W, 20) + tx(132, 28, 'z', W, 20) + dot(85, 208, Y) + tx(70, 202, 'A', Y, 24) + dot(300, 180, K) + tx(312, 168, 'B', K, 24) + dot(120, 30, B) + tx(100, 40, 'C', B, 24), 'tres puntos en los ejes') },
        { nota: 'Hacemos dos flechas dentro del plano: de A a B y de A a C. Se calcula punto final menos punto inicial.', reemplaza: true, html: sv(ln(120, 180, 70, 220, W, 2) + ln(120, 180, 340, 180, W, 2) + ln(120, 180, 120, 20, W, 2) + tx(55, 238, 'x', W, 20) + tx(352, 186, 'y', W, 20) + tx(132, 28, 'z', W, 20) + poly([[85, 208], [300, 180], [120, 30]], W, 'rgba(154,240,176,.18)') + ar(85, 208, 300, 180, K, 3) + ar(85, 208, 120, 30, B, 3) + dot(85, 208, Y) + tx(70, 202, 'A', Y, 24) + dot(300, 180, K) + tx(312, 168, 'B', K, 24) + dot(120, 30, B) + tx(100, 40, 'C', B, 24), 'triángulo ABC') + row(c('p', 'AB') + ' = (0−1, 2−0, 0−0) = ⟨−1, 2, 0⟩') + row(c('b', 'AC') + ' = (0−1, 0−0, 3−0) = ⟨−1, 0, 3⟩') },
        { nota: 'El plano necesita una flecha que sea perpendicular a él, la normal n. Se obtiene con el producto cruz de las dos flechas.', html: fixMat([['−1', '2', '0'], ['−1', '0', '3']]) + row('n = AB × AC') },
        { nota: 'Componente i: 2·3 − 0·0 = 6. Componente j: −((−1)·3 − 0·(−1)) = 3. Componente k: (−1)·0 − 2·(−1) = 2.', html: row('n = ⟨ ' + c('y', '6') + ', ' + c('p', '3') + ', ' + c('b', '2') + ' ⟩') },
        { nota: 'Ecuación del plano: n · (x − A) = 0. Usamos A = (1, 0, 0) como punto de apoyo.', html: row('6(x − 1) + 3(y − 0) + 2(z − 0) = 0') + row('6x − 6 + 3y + 2z = 0') + row('6x + 3y + 2z = 6', 'pasamos el 6', 'y') },
        { nota: 'Comprobamos con B y C: 3·2 = 6 ✓ y 2·3 = 6 ✓. Cada punto debe cumplir la ecuación.', html: say(box('6x + 3y + 2z = 6'), 'g') + row('B: 3·2 = 6 ✓ &nbsp;&nbsp; C: 2·3 = 6 ✓') }
      ]
    },
    {
      titulo: 'Distancia de un punto a un plano',
      intro: 'Distancia de Q = (1, 2, 3) al plano 2x − y + 2z = 4.',
      pasos: [
        { nota: 'La distancia es lo que mide la flecha más corta de Q al plano: la que llega derecho, en perpendicular.', html: sv(poly([[60, 190], [260, 190], [360, 130], [160, 130]], W, 'rgba(143,208,255,.18)') + dot(250, 40, Y) + tx(272, 44, 'Q', Y, 24) + ar(250, 44, 250, 158, K, 3.5) + dot(250, 160, K) + tx(275, 110, 'd = ?', K, 24, 'start') + ln(250, 150, 262, 150, W, 2) + ln(262, 150, 262, 162, W, 2), 'distancia punto plano') },
        { nota: 'Primero pasamos todo al lado izquierdo para que quede igual a cero.', html: row('2x − y + 2z − 4 = 0', 'pasar el 4', 'y') },
        { nota: 'La fórmula: sustituyes el punto, lo pones en valor absoluto, y divides entre el largo de los números de x, y, z.', html: row('d = ' + f('|2x₁ − y₁ + 2z₁ − 4|', '√(2² + (−1)² + 2²)'), 'fórmula', 'p') },
        { nota: 'Arriba reemplazamos x₁ = 1, y₁ = 2, z₁ = 3 (las coordenadas de Q).', html: row('Arriba: |2·1 − 2 + 2·3 − 4| = |2 − 2 + 6 − 4| = ' + c('y', '2')) },
        { nota: 'Abajo es el largo de ⟨2, −1, 2⟩: √(4 + 1 + 4) = 3.', html: row('Abajo: √(4 + 1 + 4) = √9 = ' + c('b', '3')) },
        { nota: 'Dividimos y listo. La distancia siempre sale positiva (por eso el valor absoluto).', html: say(box('d = ' + f('2', '3') + ' ≈ 0,67'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.25  Lógica proposicional
     ============================================================ */
  function tv(x) { return x === 'V' ? c('g', 'V') : c('r', 'F'); }
  function tt(heads, rows, hl) { return tabla(heads, rows.map(function (r) { return r.map(function (x) { return x === 'V' || x === 'F' ? tv(x) : (x || '&nbsp;'); }); }), hl); }
  P['1.25'] = [
    {
      titulo: 'Tabla de verdad del condicional p → q',
      intro: 'Cuándo es verdadero un "si p entonces q". Lo vemos como una promesa.',
      pasos: [
        { nota: 'Un condicional es una promesa. Ejemplo: "Si estudias (p), te compro un helado (q)". Vamos a ver cuándo la promesa se rompe.', html: say('p: estudias &nbsp;&nbsp; q: te compro helado', 'y') + row(c('p', 'p → q')) },
        { nota: 'Con dos proposiciones hay 4 casos posibles, desde V V hasta F F. Los escribimos en una tabla (V = verdadero, F = falso).', html: tt(['p', 'q', 'p → q'], [['V', 'V', ''], ['V', 'F', ''], ['F', 'V', ''], ['F', 'F', '']]) },
        { nota: 'Caso 1: estudias y te compro el helado. Promesa cumplida: verdadero.', reemplaza: true, html: tt(['p', 'q', 'p → q'], [['V', 'V', 'V'], ['V', 'F', ''], ['F', 'V', ''], ['F', 'F', '']], 0) },
        { nota: 'Caso 2: estudias y NO te compro el helado. ¡Mentí! La promesa se rompe: falso. Es el único caso falso.', reemplaza: true, html: tt(['p', 'q', 'p → q'], [['V', 'V', 'V'], ['V', 'F', 'F'], ['F', 'V', ''], ['F', 'F', '']], 1) },
        { nota: 'Casos 3 y 4: no estudias. Yo no prometí nada para ese caso, así que no puedo haber mentido: verdadero, te compre o no el helado.', reemplaza: true, html: tt(['p', 'q', 'p → q'], [['V', 'V', 'V'], ['V', 'F', 'F'], ['F', 'V', 'V'], ['F', 'F', 'V']], 1) },
        { nota: 'Para recordar: el condicional solo es falso cuando la hipótesis es verdadera y la conclusión es falsa.', html: say(box('p → q es falso solo si &nbsp; V → F'), 'g') }
      ]
    },
    {
      titulo: 'Probar que p → (q → p) es tautología',
      intro: 'Tautología = una fórmula que da V en todas las filas. Se arma la tabla columna por columna.',
      pasos: [
        { nota: 'Hay dos letras, así que 4 filas. Armamos primero las columnas p y q con todos los casos.', html: tt(['p', 'q'], [['V', 'V'], ['V', 'F'], ['F', 'V'], ['F', 'F']]) },
        { nota: 'Siempre se calcula primero lo de adentro del paréntesis: q → p. Recuerda: solo es falso cuando q es V y p es F.', reemplaza: true, html: tt(['p', 'q', 'q → p'], [['V', 'V', 'V'], ['V', 'F', 'V'], ['F', 'V', 'F'], ['F', 'F', 'V']], 2) },
        { nota: 'Ahora la fórmula completa: p → (columna anterior). Miramos p y la columna nueva, de izquierda a derecha.', reemplaza: true, html: tt(['p', 'q', 'q → p', 'p → (q → p)'], [['V', 'V', 'V', 'V'], ['V', 'F', 'V', 'V'], ['F', 'V', 'F', ''], ['F', 'F', 'V', '']]) },
        { nota: 'Filas 3 y 4: p es F, y una hipótesis falsa hace verdadero el condicional. Todas las filas quedan en V.', reemplaza: true, html: tt(['p', 'q', 'q → p', 'p → (q → p)'], [['V', 'V', 'V', 'V'], ['V', 'F', 'V', 'V'], ['F', 'V', 'F', 'V'], ['F', 'F', 'V', 'V']]) },
        { nota: 'Una columna final toda en V significa tautología: es verdadera pase lo que pase con p y q.', html: say(box('¡Tautología!'), 'g') + row('(si hubiera una sola F sería contingencia)') }
      ]
    },
    {
      titulo: 'Leyes de De Morgan',
      intro: 'Simplificar ¬(p ∧ ¬q). La negación "entra" al paréntesis y cambia el conectivo.',
      pasos: [
        { nota: 'Tenemos una negación afuera de un paréntesis. Queremos que la negación quede pegada a cada letra.', html: row('¬(p ∧ ¬q)') },
        { nota: 'Regla de De Morgan: la negación se reparte a cada letra y el conectivo cambia. "y" (∧) se vuelve "o" (∨), y al revés.', html: say('¬(A ∧ B) ≡ ¬A ∨ ¬B', 'y') + say('¬(A ∨ B) ≡ ¬A ∧ ¬B', 'p') },
        { nota: 'Aplicamos la regla con A = p y B = ¬q.', html: row('¬(p ∧ ¬q) ≡ ¬p ∨ ¬(¬q)', 'repartir y cambiar ∧ por ∨', 'y') },
        { nota: 'Dos negaciones seguidas se cancelan, como dos "no" en una frase: ¬(¬q) es q.', html: row('≡ ¬p ∨ ' + F('¬¬') + 'q', 'doble negación', 'p') + row('≡ ' + c('g', '¬p ∨ q')) },
        { nota: 'Y ¬p ∨ q es justo otra forma de escribir p → q. Lo comprobamos con la tabla: las dos columnas coinciden.', html: tt(['p', 'q', '¬(p ∧ ¬q)', '¬p ∨ q'], [['V', 'V', 'V', 'V'], ['V', 'F', 'F', 'F'], ['F', 'V', 'V', 'V'], ['F', 'F', 'V', 'V']]) },
        { nota: 'Columnas iguales en todas las filas: las fórmulas son equivalentes.', html: say(box('¬(p ∧ ¬q) ≡ ¬p ∨ q ≡ p → q'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.26  Conjuntos y relaciones
     ============================================================ */
  function venn(stage) {
    var s = '<rect x="20" y="14" width="380" height="232" rx="10" fill="none" stroke="' + W + '" stroke-width="2.5"/>' + tx(40, 38, 'U = 50', W, 22, 'start');
    s += ci(165, 130, 80, Y, stage >= 2 ? 'rgba(255,226,122,.12)' : 'none') + ci(255, 130, 80, B, stage >= 2 ? 'rgba(143,208,255,.12)' : 'none');
    s += tx(110, 56, 'A', Y, 26) + tx(310, 56, 'B', B, 26);
    if (stage >= 1) { s += '<path d="M210 66 A80 80 0 0 1 210 194 A80 80 0 0 1 210 66Z" fill="rgba(255,159,196,.35)" stroke="none"/>' + tx(210, 136, '10', K, 28); }
    if (stage >= 2) { s += tx(130, 136, '20', Y, 28) + tx(290, 136, '10', B, 28); }
    if (stage >= 3) { s += tx(360, 226, '10', G, 28) + tx(330, 205, 'ninguna', G, 17, 'end'); }
    return sv(s, 'diagrama de Venn con dos conjuntos');
  }
  function relg(stage) {
    var s = ci(110, 120, 24, W) + ci(260, 120, 24, W) + ci(185, 215, 24, W) + tx(110, 128, '1', W, 24) + tx(260, 128, '2', W, 24) + tx(185, 223, '3', W, 24);
    if (stage >= 1) { s += ci(110, 82, 15, Y, 'none', 2.5) + ci(260, 82, 15, Y, 'none', 2.5) + ci(185, 177, 15, Y, 'none', 2.5); }
    if (stage >= 2) { s += ar(136, 112, 232, 112, K, 3) + ar(234, 130, 138, 130, K, 3); }
    if (stage >= 3) { s += '<ellipse cx="185" cy="118" rx="125" ry="52" fill="rgba(154,240,176,.12)" stroke="' + G + '" stroke-width="2.5" stroke-dasharray="7 6"/>' + '<ellipse cx="185" cy="215" rx="42" ry="38" fill="rgba(143,208,255,.12)" stroke="' + B + '" stroke-width="2.5" stroke-dasharray="7 6"/>' + tx(335, 60, '{1, 2}', G, 24, 'start') + tx(250, 228, '{3}', B, 24, 'start'); }
    return sv(s, 'relación sobre {1,2,3}');
  }
  P['1.26'] = [
    {
      titulo: 'Inclusión–exclusión con dos conjuntos',
      intro: 'En 50 estudiantes, 30 estudian Cálculo (A), 20 Álgebra (B) y 10 estudian ambas. ¿Cuántos estudian al menos una?',
      pasos: [
        { nota: 'Dibujamos el universo (los 50 estudiantes) y dos círculos: Cálculo y Álgebra. La zona donde se cruzan es la gente que estudia las dos.', html: venn(0) },
        { nota: 'Empezamos por el centro, que es el dato más especial: 10 estudian ambas.', reemplaza: true, html: venn(1) },
        { nota: 'Ahora lo que queda de cada círculo. A tiene 30 en total, pero 10 ya están en el centro: 30 − 10 = 20 solo Cálculo. Y B: 20 − 10 = 10 solo Álgebra.', reemplaza: true, html: venn(2) + row('solo A: 30 − 10 = 20 &nbsp;&nbsp; solo B: 20 − 10 = 10') },
        { nota: 'Si sumáramos 30 + 20 contaríamos dos veces a los del centro. Por eso restamos la intersección una vez.', html: row('|A ∪ B| = |A| + |B| − |A ∩ B|', 'fórmula', 'y') + row('= 30 + 20 − 10 = ' + box('40')) },
        { nota: 'Comprobamos con el dibujo: 20 + 10 + 10 = 40. Y los que quedan fuera de los círculos: 50 − 40 = 10 no estudian ninguna.', reemplaza: true, html: venn(3) + say('Al menos una: ' + c('g', '40') + ' &nbsp; Ninguna: ' + c('g', '10'), 'g') }
      ]
    },
    {
      titulo: 'Relación de equivalencia y clases',
      intro: 'R = {(1,1), (2,2), (3,3), (1,2), (2,1)} en A = {1, 2, 3}. ¿Es de equivalencia? ¿Cuáles son sus clases?',
      pasos: [
        { nota: 'Cada pareja (a, b) significa "a está relacionado con b". Lo dibujamos con puntos y flechas.', html: relg(0) + row('R = {(1,1), (2,2), (3,3), (1,2), (2,1)}') },
        { nota: 'Reflexiva: cada elemento está relacionado consigo mismo. Aparecen (1,1), (2,2), (3,3): son los lazos amarillos. ✓', reemplaza: true, html: relg(1) + row(c('y', 'Reflexiva ✓') + ' &nbsp; (1,1) (2,2) (3,3)') },
        { nota: 'Simétrica: si la flecha va de a hacia b, también debe volver. (1,2) está y (2,1) también: flecha de ida y vuelta. ✓', reemplaza: true, html: relg(2) + row(c('y', 'Reflexiva ✓') + ' &nbsp; ' + c('p', 'Simétrica ✓') + ' &nbsp; (1,2) ↔ (2,1)') },
        { nota: 'Transitiva: si voy de 1 a 2 y de 2 a 1, debo poder ir de 1 a 1; y también de 2 a 2. Ambos están. ✓', html: row('1 R 2 y 2 R 1 ⇒ 1 R 1 ✓', 'camino de dos pasos', 'b') + row('2 R 1 y 1 R 2 ⇒ 2 R 2 ✓') },
        { nota: 'Las tres propiedades se cumplen: es una relación de equivalencia. Esto permite agrupar a los elementos "iguales" en clases.', html: say(box('Reflexiva + simétrica + transitiva = equivalencia'), 'g') },
        { nota: 'La clase de 1 son todos los relacionados con 1: {1, 2}. La de 2 es la misma. A 3 solo lo relaciona consigo mismo: {3}.', reemplaza: true, html: relg(3) + row('[1] = [2] = {1, 2} &nbsp;&nbsp; [3] = {3}') },
        { nota: 'Las clases reparten el conjunto en grupos que no se mezclan: eso se llama partición.', html: say(box('Clases: {1, 2} y {3}'), 'g') }
      ]
    },
    {
      titulo: 'Producto cartesiano A × B',
      intro: 'A = {a, b} y B = {1, 2, 3}. Hacemos todas las parejas ordenadas (primero de A, luego de B).',
      pasos: [
        { nota: 'El producto cartesiano junta cada elemento de A con cada elemento de B, en ese orden. Colocamos A en las filas y B en las columnas.', html: tabla(['A ╲ B', '1', '2', '3'], [['a', '', '', ''], ['b', '', '', '']]) },
        { nota: 'Fila de a: la juntamos con 1, con 2 y con 3.', reemplaza: true, html: tabla(['A ╲ B', '1', '2', '3'], [['a', c('y', '(a, 1)'), c('y', '(a, 2)'), c('y', '(a, 3)')], ['b', '', '', '']]) },
        { nota: 'Fila de b: lo mismo.', reemplaza: true, html: tabla(['A ╲ B', '1', '2', '3'], [['a', '(a, 1)', '(a, 2)', '(a, 3)'], ['b', c('p', '(b, 1)'), c('p', '(b, 2)'), c('p', '(b, 3)')]]) },
        { nota: 'Contar es fácil: filas por columnas. Importa el orden: (a, 1) no es lo mismo que (1, a).', html: row('|A × B| = |A| · |B| = 2 · 3 = ' + box('6')) },
        { nota: 'Escrito como conjunto queda así. Cualquier subconjunto de estas parejas es una relación de A en B.', html: say('A × B = {(a,1), (a,2), (a,3), (b,1), (b,2), (b,3)}', 'g') }
      ]
    }
  ];

  /* ============================================================
     1.27  Inducción, combinatoria y grafos
     ============================================================ */
  function domino(fall) {
    var s = '', i, x;
    for (i = 0; i < 5; i++) {
      x = 50 + i * 62;
      if (fall > i) { s += '<rect x="' + (x + 6) + '" y="130" width="46" height="18" rx="3" fill="rgba(154,240,176,.25)" stroke="' + G + '" stroke-width="2.5" transform="rotate(-8 ' + (x + 6) + ' 148)"/>'; }
      else { s += '<rect x="' + x + '" y="80" width="16" height="68" rx="3" fill="rgba(255,226,122,.15)" stroke="' + Y + '" stroke-width="2.5"/>'; }
      s += tx(x + 14, 185, 'P(' + (i + 1) + ')', fall > i ? G : Y, 19);
    }
    s += ln(30, 150, 390, 150, W, 2) + tx(396, 120, '…', W, 30);
    if (fall === 0) { s += tx(210, 40, 'Si cae uno, cae el siguiente', K, 24); }
    else { s += tx(210, 40, 'Base: cae el 1º · Paso: cada uno tumba al siguiente', K, 21); s += ar(46, 62, 76, 74, K, 3); }
    return sv(s, 'fichas de dominó');
  }
  function k4() {
    var p = [[130, 50], [290, 50], [290, 200], [130, 200]], s = '', i, j;
    for (i = 0; i < 4; i++) for (j = i + 1; j < 4; j++) { s += ln(p[i][0], p[i][1], p[j][0], p[j][1], i + j === 3 && (j - i) !== 1 ? K : W, 2.5); }
    for (i = 0; i < 4; i++) { s += ci(p[i][0], p[i][1], 16, Y, '#2f4a3c', 2.8) + tx(p[i][0], p[i][1] + 7, 'v' + (i + 1), Y, 18); }
    s += tx(100, 36, 'grado 3', G, 18) + tx(320, 36, 'grado 3', G, 18, 'start') + tx(320, 232, 'grado 3', G, 18, 'start') + tx(100, 232, 'grado 3', G, 18);
    return sv(s, 'grafo completo con 4 vértices');
  }
  P['1.27'] = [
    {
      titulo: 'Inducción: 1 + 2 + … + n = n(n+1)/2',
      intro: 'Demostrar una fórmula para TODOS los números, tumbando fichas de dominó.',
      pasos: [
        { nota: 'No podemos probar infinitos números uno por uno. La inducción funciona como una fila de dominós.', html: domino(0) },
        { nota: 'Dos cosas bastan: (1) que caiga el primero y (2) que cada ficha tumbe a la siguiente. Entonces caen todas.', reemplaza: true, html: domino(5) },
        { nota: 'Paso base: comprobamos n = 1. Es empujar la primera ficha.', html: row(c('y', 'Fórmula: ') + '1 + 2 + … + n = ' + f('n(n + 1)', '2')) + row('n = 1: &nbsp; 1 = ' + f('1·2', '2') + ' = 1 ' + c('g', '✓'), 'base', 'g') },
        { nota: 'Hipótesis: suponemos que la fórmula funciona para un número k cualquiera. (Es suponer que la ficha k ya cayó.)', html: row(c('p', 'Hipótesis: ') + '1 + 2 + … + k = ' + f('k(k + 1)', '2'), 'la damos por cierta', 'p') },
        { nota: 'Paso inductivo: debemos probar que cae la ficha k+1. Escribimos la suma hasta k+1 y reemplazamos la parte conocida con la hipótesis.', html: row('1 + 2 + … + k + (k + 1) = ' + f('k(k + 1)', '2') + ' + (k + 1)') },
        { nota: 'Ponemos (k+1) con denominador 2 y sacamos (k+1) como factor común.', html: row('= ' + f('k(k + 1)', '2') + ' + ' + f('2(k + 1)', '2') + ' = ' + f('(k + 1)(k + 2)', '2')) },
        { nota: 'Eso es exactamente la fórmula con n = k+1. La ficha k+1 cae. Por inducción, vale para todo n ≥ 1.', html: row('= ' + f('(k + 1)((k + 1) + 1)', '2') + ' ' + c('g', '✓')) + say(box('Demostrado para todo n ≥ 1'), 'g') }
      ]
    },
    {
      titulo: 'Combinaciones y permutaciones',
      intro: '¿Elegir 3 de 8 personas (sin orden)? ¿Y elegir presidente, vice y secretario entre 10 (con orden)?',
      pasos: [
        { nota: 'Primero pregúntate: ¿importa el orden? Si no importa (un comité) son combinaciones. Si importa (cargos distintos) son permutaciones.', html: say(c('y', 'Comité de 3 de 8') + ' → no importa el orden', 'y') + say(c('p', 'Presidente, vice, secretario de 10') + ' → sí importa', 'p') },
        { nota: 'Empecemos con el comité de 3 entre 8. Si el orden importara: 8 opciones para el primero, 7 para el segundo, 6 para el tercero.', html: row('8 · 7 · 6 = ' + c('y', '336'), 'con orden', 'y') },
        { nota: 'Pero en un comité, A-B-C es el mismo grupo que C-B-A. Cada grupo se contó varias veces: los 3 se pueden ordenar de 3! = 6 formas.', html: tabla(['ABC', 'ACB', 'BAC'], [['BCA', 'CAB', 'CBA']]) + row('3! = 3·2·1 = 6 &nbsp; (el mismo grupo)', 'se repite 6 veces', 'r') },
        { nota: 'Entonces dividimos entre 6 para contar cada grupo solo una vez.', html: row('C(8, 3) = ' + f('8 · 7 · 6', '3 · 2 · 1') + ' = ' + f('336', '6') + ' = ' + box('56')) },
        { nota: 'Ahora los cargos: aquí el orden SÍ importa (Ana presidente ≠ Ana secretaria). No se divide entre nada.', html: row('P(10, 3) = 10 · 9 · 8', '10 para presidente, 9 para vice, 8 para secretario', 'p') },
        { nota: 'Calculamos 10 · 9 = 90 y 90 · 8 = 720. Siempre hay más permutaciones que combinaciones.', html: say(box('C(8,3) = 56 &nbsp;&nbsp; P(10,3) = 720'), 'g') }
      ]
    },
    {
      titulo: 'Grafos: el apretón de manos',
      intro: 'Un grafo tiene 6 aristas y todos los vértices con grado 3. ¿Cuántos vértices tiene?',
      pasos: [
        { nota: 'Un grafo son puntos (vértices) unidos por rayas (aristas). El grado de un vértice es cuántas rayas salen de él.', html: k4() },
        { nota: 'Cada arista tiene dos extremos, así que cuenta 2 veces al sumar los grados de todos los vértices. Es como un apretón de manos: cada uno cuenta una mano.', html: row('suma de grados = 2 · (aristas)', 'apretón de manos', 'y') + row('= 2 · 6 = ' + c('y', '12')) },
        { nota: 'Si hay n vértices y cada uno tiene grado 3, la suma de grados es 3n.', html: row('3 · n = 12', 'cada vértice aporta 3', 'p') },
        { nota: 'Despejamos n: 12 entre 3 es 4. En el dibujo: 4 vértices, 4 · 3 = 12 ✓.', html: row('n = ' + f('12', '3') + ' = ' + box('4 vértices')) },
        { nota: 'Un dato extra: un árbol (grafo conexo sin ciclos) con n vértices siempre tiene n − 1 aristas. Con 7 vértices: 7 − 1 = 6 aristas.', html: say('Árbol: aristas = vértices − 1', 'y') + row('7 vértices ⇒ 7 − 1 = ' + box('6 aristas')) }
      ]
    }
  ];
})(window.PZ);

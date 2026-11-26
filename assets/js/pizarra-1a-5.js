/* pizarra-1a-5.js — Métodos en pizarra, 1.er año, temas 1.14 */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, tabla = PZ.tabla;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', R = '#ff8a80';
  function svg(inner, h) { return '<svg viewBox="0 0 420 ' + (h || 150) + '" class="pz-tij" role="img" aria-hidden="true">' + inner + '</svg>'; }
  function t(x, y, s, col, sz, anc) { return '<text x="' + x + '" y="' + y + '" fill="' + (col || W) + '" font-size="' + (sz || 15) + '" text-anchor="' + (anc || 'middle') + '" style="font-family:\'Patrick Hand\',cursive">' + s + '</text>'; }

  /* ---- 1.14 recta numérica con la media y las distancias ---- */
  function recta(conDist) {
    var xs = [4, 7, 7, 9, 13], X = function (v) { return 30 + (v - 2) * 32; }, s = '<path d="M20 100H405" stroke="' + W + '" stroke-opacity=".6" stroke-width="2"/>', i;
    for (i = 2; i <= 13; i++) s += '<line x1="' + X(i) + '" y1="96" x2="' + X(i) + '" y2="104" stroke="' + W + '" stroke-opacity=".5"/>' + t(X(i), 120, i, W, 11);
    xs.forEach(function (v, k) { s += '<circle cx="' + X(v) + '" cy="' + (88 - (v === 7 && k === 2 ? 20 : 0)) + '" r="8" fill="' + B + '"/>'; });
    if (conDist) {
      s += '<line x1="' + X(8) + '" y1="30" x2="' + X(8) + '" y2="104" stroke="' + Y + '" stroke-width="3" stroke-dasharray="6 5"/>' + t(X(8), 22, 'media = 8', Y, 17);
      s += '<path d="M' + X(4) + ' 136L' + X(8) + ' 136" stroke="' + K + '" stroke-width="2.5"/>' + t((X(4) + X(8)) / 2, 148, '4 a la izquierda', K, 12);
    }
    return svg(s, 156);
  }
  P['1.14'] = [
    {
      titulo: 'Media y desviación estándar paso a paso',
      intro: 'Datos: 4, 7, 7, 9, 13. ¿Qué tan dispersos están respecto a su promedio?',
      pasos: [
        { nota: 'Primero ponemos los datos en la recta numérica para ver cómo se reparten. El 7 se repite, por eso lo apilamos.', html: row('Datos: 4, 7, 7, 9, 13') + recta(false) },
        { nota: 'La media es el punto de equilibrio: sumamos todo y dividimos entre cuántos datos hay (5).', html: row(c('b', 'media = ' + f('4 + 7 + 7 + 9 + 13', '5') + ' = ' + f('40', '5')) + ' ' + c('y', '= 8')) },
        { nota: 'Marcamos la media en la recta. Ahora medimos qué tan lejos queda cada dato de ella.', reemplaza: true, html: row('Datos: 4, 7, 7, 9, 13') + recta(true) },
        { nota: 'Restamos la media a cada dato. Los de la izquierda dan negativo y los de la derecha positivo.', html: tabla(['dato', 'dato − 8'], [['4', c('p', '−4')], ['7', c('p', '−1')], ['7', c('p', '−1')], ['9', c('p', '1')], ['13', c('p', '5')]]) },
        { nota: 'Si sumáramos esas diferencias daría 0 (se cancelan). Por eso las elevamos al cuadrado: así todas cuentan.', html: row(c('b', '16 + 1 + 1 + 1 + 25 = 44')) },
        { nota: 'Varianza poblacional: dividimos entre N = 5. Si los datos fueran solo una muestra, dividimos entre n − 1 = 4.', html: row(c('y', 'σ² = ' + f('44', '5') + ' = 8,8')) + row(c('g', 's² = ' + f('44', '4') + ' = 11')) },
        { nota: 'La desviación estándar es la raíz de la varianza: vuelve a las unidades de los datos. Aquí tomamos la poblacional.', html: say(box('σ = √8,8 ≈ 2,97'), 'g') }
      ]
    },
    {
      titulo: 'Cuartiles y rango intercuartílico',
      intro: 'Datos ordenados: 1, 3, 5, 7, 9, 11, 13, 15.',
      pasos: [
        { nota: 'Los datos ya están ordenados. Hay 8, así que la mediana queda entre el 4.º y el 5.º dato.', html: row('1, &nbsp;3, &nbsp;5, &nbsp;7, &nbsp;9, &nbsp;11, &nbsp;13, &nbsp;15') },
        { nota: 'Mediana (Q2): el promedio de 7 y 9. Corta los datos en dos mitades iguales.', html: row('1, 3, 5, 7 ' + c('y', ' | ') + ' 9, 11, 13, 15') + row(c('y', 'Q2 = ' + f('7 + 9', '2') + ' = 8')) },
        { nota: 'Q1 es la mediana de la mitad de abajo (1, 3, 5, 7): el promedio de 3 y 5.', html: row(c('b', 'Q1 = ' + f('3 + 5', '2') + ' = 4')) },
        { nota: 'Q3 es la mediana de la mitad de arriba (9, 11, 13, 15): el promedio de 11 y 13.', html: row(c('p', 'Q3 = ' + f('11 + 13', '2') + ' = 12')) },
        { nota: 'El rango intercuartílico mide qué tan ancha es la zona del medio, donde está la mitad de los datos.', html: say(box('IQR = Q3 − Q1 = 12 − 4 = 8'), 'g') }
      ]
    },
    {
      titulo: 'Media cuando los datos se repiten (frecuencias)',
      intro: 'El 1 aparece 2 veces, el 2 aparece 5 veces y el 3 aparece 3 veces.',
      pasos: [
        { nota: 'En vez de escribir cada dato, usamos una tabla: valor y cuántas veces aparece (frecuencia).', html: tabla(['valor', 'veces'], [['1', '2'], ['2', '5'], ['3', '3']]) },
        { nota: 'Multiplicamos cada valor por su frecuencia: es como sumar el 1 dos veces, el 2 cinco veces…', html: tabla(['valor', 'veces', 'valor × veces'], [['1', '2', c('y', '2')], ['2', '5', c('y', '10')], ['3', '3', c('y', '9')]]) },
        { nota: 'Sumamos esa última columna (2 + 10 + 9 = 21) y dividimos entre el total de datos (2 + 5 + 3 = 10).', html: say(box('media = 21 / 10 = 2,1'), 'g') }
      ]
    }
  ];

})(window.PZ);

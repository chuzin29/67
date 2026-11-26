/* data-9-u4.js — 9.º grado, Trimestre II: aplicaciones de la ecuación cuadrática (1.14) */
(function (N) {
  'use strict';
  var n = N.n, s = N.s, poly = N.poly, bin = N.bin;
  function sols(p, q) { return 'x = ' + n(Math.min(p, q)) + ' o x = ' + n(Math.max(p, q)); }

  /* 1.14 — gen[0..2] por nivel; gen[3] extra (examen y ejemplos) */
  function consec(k) {
    var P = k * (k + 1);
    return ['El producto de dos números enteros positivos consecutivos es ' + P + '. ¿Cuáles son?',
      ['Plantea: el menor es `x` y el siguiente `x + 1`, así que `x(x + 1) = ' + P + '`.',
        'Ordena: `' + poly(1, 1, -P) + ' = 0`. Factoriza: `' + bin(1, -k) + bin(1, k + 1) + ' = 0`.',
        'Soluciones: `' + sols(k, -(k + 1)) + '`. Se descarta `x = ' + n(-(k + 1)) + '` porque los números deben ser positivos.',
        'Comprueba: `' + k + '·' + (k + 1) + ' = ' + P + '`.'],
      'Los números son `' + k + '` y `' + (k + 1) + '`.', k, 'Menor de dos enteros positivos consecutivos cuyo producto es ' + P + '.'];
  }
  function rect(w, d) {
    var A = w * (w + d), l = w + d;
    return ['El largo de un rectángulo mide ' + d + ' m más que su ancho y su área es ' + A + ' m². Halla sus dimensiones.',
      ['Plantea: ancho `x`, largo `x + ' + d + '`, y `x(x + ' + d + ') = ' + A + '`.',
        'Ordena: `' + poly(1, d, -A) + ' = 0`. Factoriza: `' + bin(1, -w) + bin(1, l) + ' = 0`.',
        'Soluciones: `' + sols(w, -l) + '`. Se descarta `x = ' + n(-l) + '`: una longitud no puede ser negativa.',
        'Comprueba: `' + w + '·' + l + ' = ' + A + '`.'],
      'Ancho `' + w + ' m` y largo `' + l + ' m`.', l, 'Largo (en m) de un rectángulo con área ' + A + ' m² cuyo largo excede en ' + d + ' m a su ancho.'];
  }
  function perim(w, l) {
    var S = w + l, A = w * l;
    return ['Un terreno rectangular tiene perímetro ' + (2 * S) + ' m y área ' + A + ' m². Halla sus dimensiones.',
      ['Semiperímetro: `' + S + '`. Si el ancho es `x`, el largo es `' + S + ' − x`, y `x(' + S + ' − x) = ' + A + '`.',
        'Ordena: `' + poly(1, -S, A) + ' = 0`. Factoriza: `' + bin(1, -w) + bin(1, -l) + ' = 0`.',
        'Soluciones: `' + sols(w, l) + '`. Ambas son positivas y dan el mismo terreno (una es el ancho y la otra el largo).',
        'Comprueba: `2(' + w + ' + ' + l + ') = ' + (2 * S) + '` y `' + w + '·' + l + ' = ' + A + '`.'],
      'Ancho `' + w + ' m` y largo `' + l + ' m`.', l, 'Largo (en m) de un terreno rectangular de perímetro ' + (2 * S) + ' m y área ' + A + ' m².'];
  }
  function sqnum(p, sg) {
    var P = p * (p + sg), o = -(p + sg), txt = sg > 0 ? 'más' : 'menos';
    return ['El cuadrado de un número ' + txt + ' el mismo número es ' + P + '. ¿Cuál es el número?',
      ['Plantea: `x² ' + (sg > 0 ? '+' : '−') + ' x = ' + P + '`.',
        'Ordena: `' + poly(1, sg, -P) + ' = 0`. Factoriza: `' + bin(1, -p) + bin(1, p + sg) + ' = 0`.',
        'Soluciones: `' + sols(p, o) + '`. Aquí no se pide que sea positivo, así que sirven las dos.',
        'Comprueba: `' + p + '² ' + (sg > 0 ? '+' : '−') + ' ' + p + ' = ' + P + '` y `(' + n(o) + ')² ' + (sg > 0 ? '+' : '−') + ' (' + n(o) + ') = ' + P + '`.'],
      '`' + sols(o, p) + '`', p, 'Solución positiva: el cuadrado de un número ' + txt + ' el número es ' + P + '.'];
  }
  N.tema(14, {
    unidad: 2, titulo: 'Aplicaciones de la ecuación cuadrática', calc: 'cuadformula',
    resumen: 'Resolverás problemas con enunciado: plantearás la ecuación, la resolverás y descartarás la solución sin sentido.',
    objetivos: ['Traducir un enunciado a una ecuación cuadrática.', 'Resolver y descartar la solución que no tiene sentido.', 'Comprobar el resultado en el problema.'],
    teoria: [['Pasos para resolver problemas', '1) Define la incógnita `x`. 2) Plantea la ecuación con el enunciado. 3) Resuelve. 4) Descarta lo que no tiene sentido. 5) Comprueba en el problema.'], ['Números consecutivos', 'Dos enteros consecutivos son `x` y `x + 1`. Si su producto es P: `x(x + 1) = P`.'], ['Áreas y perímetros', 'El área de un rectángulo es `ancho · largo`. Si el perímetro es 2S, ancho y largo suman S y el largo es `S − x`.'], ['Cuándo descartar', 'Longitudes, áreas y edades deben ser positivas. Si el enunciado solo dice «un número», ambas soluciones valen.']],
    tabla: [['Situación', 'Planteamiento'], ['Dos consecutivos', '`x(x + 1) = P`'], ['Largo mayor que ancho en d', '`x(x + d) = A`'], ['Perímetro 2S y área A', '`x² − Sx + A = 0`'], ['Cuadrado más/menos el número', '`x² ± x = P`']],
    ojo: 'Una solución de la ecuación no siempre es solución del problema: si `x` es una longitud, `x = −7` se descarta.',
    formulas: [['Consecutivos', 'x(x + 1) = P'], ['Rectángulo', 'x(x + d) = A'], ['Perímetro y área', 'x² − Sx + A = 0'], ['Cuadrado y número', 'x² ± x = P']],
    gen: [consec, rect, perim, sqnum],
    ejemplos: [['Números consecutivos', 0, [4]], ['Área de un rectángulo', 1, [5, 3]], ['Cuadrado de un número más el número', 3, [7, 1]], ['Perímetro y área de un terreno', 2, [10, 20]]],
    practica: [[[3], [5], [6], [9]], [[3, 2], [4, 3], [5, 4], [6, 1]], [[8, 12], [15, 25]]],
    examen: [[0, [7]], [0, [10]], [1, [8, 4]], [1, [5, 6]], [2, [9, 16]], [2, [12, 30]], [3, [6, 1]]],
    opciones: [['Un rectángulo tiene ancho `x` y largo `x + 4`. Su área es:', ['`x + 4`', '`x(x + 4)`', '`2x + 4`', '`x² + 4`'], 1, ['Área = ancho · largo.', '`x(x + 4)`.']], ['Al resolver para el ancho de un terreno, salen `x = 6` y `x = −9`. La respuesta es:', ['6', '−9', 'ambas', 'ninguna'], 0, ['Una longitud no puede ser negativa.', 'Se descarta −9.']], ['Dos enteros consecutivos pueden escribirse como:', ['`x` y `2x`', '`x` y `x + 1`', '`x` y `x²`', '`x` y `x + 2`'], 1, ['Consecutivos se diferencian en 1.', '`x` y `x + 1`.']]],
    teoricas: [['¿Por qué se descarta una solución?', 'Porque no cumple las condiciones del problema, por ejemplo una longitud negativa.'], ['¿Cómo se escriben dos números consecutivos?', '`x` y `x + 1`.'], ['¿Cómo se escriben dos pares consecutivos?', '`x` y `x + 2`.'], ['¿Qué relación hay entre perímetro y semiperímetro?', 'El semiperímetro es la mitad del perímetro y es la suma de ancho y largo.'], ['¿Para qué sirve comprobar?', 'Para verificar que la solución cumple el enunciado original.'], ['¿Siempre se descarta una de las dos soluciones?', 'No: si ambas tienen sentido, las dos valen.'], ['¿Cuál es el primer paso en un problema con enunciado?', 'Definir qué representa la incógnita `x`.']],
    errores: ['Dar como respuesta la solución negativa de una longitud.', 'Olvidar comprobar en el enunciado.', 'Escribir el largo como `x − d` en lugar de `x + d`.'],
    aplicacion: ['Terrenos', 'Para cercar un terreno rectangular de área y perímetro conocidos se plantea `x² − Sx + A = 0`; sus dos raíces son el ancho y el largo.']
  });
})(window.N9);

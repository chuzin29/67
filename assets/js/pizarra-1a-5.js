/* pizarra-1a-5.js — Métodos en pizarra, 1.er año, temas 1.14 a 1.18 */
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

  /* ---- 1.15 elipse con focos ---- */
  function elipse(foc) {
    var s = '<path d="M20 90H400M210 8V172" stroke="' + W + '" stroke-opacity=".4" stroke-width="2"/>' +
      '<ellipse cx="210" cy="90" rx="150" ry="75" fill="none" stroke="' + B + '" stroke-width="3"/>' +
      '<circle cx="210" cy="90" r="4" fill="' + W + '"/>' +
      '<line x1="210" y1="90" x2="360" y2="90" stroke="' + Y + '" stroke-width="3"/>' + t(285, 82, 'a = 5', Y, 16) +
      '<line x1="210" y1="90" x2="210" y2="15" stroke="' + K + '" stroke-width="3"/>' + t(228, 55, 'b = 3', K, 16, 'start');
    if (foc) s += '<circle cx="' + (210 + 120) + '" cy="90" r="6" fill="' + G + '"/><circle cx="' + (210 - 120) + '" cy="90" r="6" fill="' + G + '"/>' + t(330, 112, 'F(4,0)', G, 14) + t(90, 112, 'F(−4,0)', G, 14);
    return svg(s, 180);
  }
  P['1.15'] = [
    {
      titulo: 'Circunferencia: de la ecuación general al centro y radio',
      intro: 'x² + y² − 6x + 4y − 12 = 0. Queremos ver el centro y el radio.',
      pasos: [
        { nota: 'La ecuación está "desordenada". Primero agrupamos las x juntas, las y juntas, y mandamos el número al otro lado.', html: row('x² + y² − 6x + 4y − 12 = 0') + PZ.flecha('agrupar') + row(c('b', '(x² − 6x) + (y² + 4y) = 12')) },
        { nota: 'Completar el cuadrado: tomamos la mitad del número que acompaña a x (−6 → −3) y la elevamos al cuadrado: 9. Igual con y: la mitad de 4 es 2 y 2² = 4.', html: row(c('b', '(x² − 6x ' + c('y', '+ 9') + ') + (y² + 4y ' + c('y', '+ 4') + ') = 12 ' + c('y', '+ 9 + 4)'))) },
        { nota: 'Lo que sumamos a un lado hay que sumarlo al otro para no romper la igualdad. Ahora cada paréntesis es un cuadrado perfecto.', html: row(c('g', '(x − 3)² + (y + 2)² = 25')) },
        { nota: 'Comparamos con (x − h)² + (y − k)² = r²: el centro es (h, k) con el signo cambiado y el radio es la raíz de 25.', html: say(box('Centro (3, −2) &nbsp; radio = 5'), 'g') }
      ]
    },
    {
      titulo: 'Parábola x² = 12y',
      intro: 'Encontrar foco y directriz.',
      pasos: [
        { nota: 'Una parábola con x² = 4py abre hacia arriba (si p > 0) y tiene su vértice en el origen.', html: row('x² = ' + c('y', '4p') + ' y') },
        { nota: 'Comparamos 12y con 4py: entonces 4p = 12 y dividimos para hallar p.', html: row(c('b', '4p = 12 &nbsp;⇒&nbsp; p = 3')) },
        { nota: 'El foco está p unidades arriba del vértice y la directriz p unidades abajo. Cada punto de la parábola está igual de lejos del foco que de la directriz.', html: row(c('g', 'Foco (0, 3)')) + row(c('r', 'Directriz y = −3')) }
      ]
    },
    {
      titulo: 'Elipse x²/25 + y²/9 = 1',
      intro: 'Hallar los semiejes y los focos.',
      pasos: [
        { nota: 'En una elipse con centro en el origen, el número bajo x² es a² y el número bajo y² es b². El mayor siempre es a².', html: row(f('x²', '25') + ' + ' + f('y²', '9') + ' = 1') },
        { nota: 'Sacamos raíces: a = 5 (se mueve 5 a cada lado en x) y b = 3 (3 arriba y abajo).', html: row(c('y', 'a = 5') + ' &nbsp; ' + c('p', 'b = 3')) + elipse(false) },
        { nota: 'Los focos están sobre el eje mayor, a una distancia c del centro, con c² = a² − b².', html: row(c('b', 'c² = 25 − 9 = 16 &nbsp;⇒&nbsp; c = 4')) },
        { nota: 'Ponemos los dos focos en (4, 0) y (−4, 0). Para cualquier punto de la elipse, la suma de distancias a los dos focos es siempre 2a = 10.', reemplaza: true, html: row(c('y', 'a = 5') + ' &nbsp; ' + c('p', 'b = 3') + ' &nbsp; ' + c('g', 'c = 4')) + elipse(true) }
      ]
    },
    {
      titulo: 'Hipérbola: asíntotas',
      intro: 'x²/16 − y²/9 = 1',
      pasos: [
        { nota: 'Ahora hay un signo menos: es una hipérbola. a² = 16 va con x, así que abre a la izquierda y a la derecha.', html: row(f('x²', '16') + ' − ' + f('y²', '9') + ' = 1') + row(c('y', 'a = 4') + ' &nbsp; ' + c('p', 'b = 3')) },
        { nota: 'Las asíntotas son dos rectas que la curva se acerca pero nunca toca. Sus pendientes son ± b/a.', html: row(c('g', 'y = ± ' + f('3', '4') + ' x')) }
      ]
    }
  ];

  /* ---- 1.16 ---- */
  P['1.16'] = [
    {
      titulo: 'Logaritmo = ¿a qué potencia?',
      intro: 'Calcula log₂(32).',
      pasos: [
        { nota: 'Un logaritmo hace una pregunta: "¿a qué número elevo la base para obtener este valor?"', html: row('log₂(32) = ' + c('y', '?')) + row('2<sup>?</sup> = 32') },
        { nota: 'Probamos potencias de 2 hasta llegar a 32.', html: tabla(['potencia', 'resultado'], [['2¹', '2'], ['2²', '4'], ['2³', '8'], ['2⁴', '16'], ['2⁵', c('g', '32')]], 4) },
        { nota: 'Lo conseguimos con exponente 5.', html: say(box('log₂(32) = 5'), 'g') }
      ]
    },
    {
      titulo: 'Ecuación exponencial',
      intro: 'Resuelve 3<sup>x+1</sup> = 81.',
      pasos: [
        { nota: 'La idea: escribir los dos lados con la misma base, para luego igualar los exponentes.', html: row('3<sup>x+1</sup> = 81') },
        { nota: '81 es 3 por 3 por 3 por 3, o sea 3⁴.', html: row('3<sup>x+1</sup> = ' + c('y', '3⁴')) },
        { nota: 'Con la misma base, las potencias son iguales solo si los exponentes lo son. Despejamos x.', html: row(c('b', 'x + 1 = 4')) + PZ.ambos('− 1') + row(c('g', 'x = 3')) }
      ]
    },
    {
      titulo: 'Ecuación logarítmica',
      intro: 'Resuelve log₂(x) + log₂(x − 2) = 3.',
      pasos: [
        { nota: 'Primero juntamos los logaritmos: suma de logs con la misma base es el log del producto.', html: row('log₂(x) + log₂(x − 2) = 3') + PZ.flecha('propiedad del producto') + row(c('b', 'log₂[ x(x − 2) ] = 3')) },
        { nota: 'Pasamos a forma exponencial: 2³ = 8.', html: row(c('b', 'x(x − 2) = 2³ = 8')) },
        { nota: 'Resultado: una ecuación cuadrática igualada a cero.', html: row('x² − 2x − 8 = 0') + row(c('y', '(x − 4)(x + 2) = 0')) },
        { nota: 'Salen x = 4 y x = −2. ¡Falta comprobar! Dentro de un logaritmo no puede haber números negativos ni cero.', html: row(c('g', 'x = 4: log₂ 4 + log₂ 2 = 2 + 1 = 3 ✓')) + row(c('r', 'x = −2: log₂(−2) no existe ✗')) },
        { nota: 'Descartamos x = −2.', html: say(box('x = 4'), 'g') }
      ]
    },
    {
      titulo: 'Crecimiento exponencial',
      intro: 'Una población de 100 se duplica cada hora. ¿Cuántos hay a las 5 horas?',
      pasos: [
        { nota: 'Hacemos una tabla: cada hora multiplicamos por 2.', html: tabla(['hora', 'población'], [['0', '100'], ['1', '200'], ['2', '400'], ['3', '800'], ['4', '1 600'], ['5', c('g', '3 200')]], 5) },
        { nota: 'El patrón se resume en una fórmula: valor inicial por la razón elevada al número de horas.', html: row(c('b', 'P = 100 · 2<sup>t</sup>')) + row('P(5) = 100 · 2⁵ = 100 · 32') },
        { nota: 'Comprobamos con la tabla: coincide.', html: say(box('3 200 individuos'), 'g') }
      ]
    }
  ];

  /* ---- 1.17: barras de la serie geométrica ---- */
  function barras() {
    var v = [8, 4, 2, 1, 0.5], s = '<line x1="20" y1="130" x2="400" y2="130" stroke="' + W + '" stroke-opacity=".5" stroke-width="2"/>', x = 30;
    v.forEach(function (a, i) { s += '<rect x="' + x + '" y="' + (130 - a * 12) + '" width="' + (a * 22) + '" height="' + (a * 12) + '" fill="' + [Y, K, B, G, W][i] + '" fill-opacity=".85" stroke="' + W + '" stroke-opacity=".4"/>'; s += t(x + a * 11, 148, a, W, 13); x += a * 22 + 4; });
    s += t(375, 110, '…', W, 22);
    return svg(s, 158);
  }
  P['1.17'] = [
    {
      titulo: 'Progresión aritmética: el término 10',
      intro: 'En 3, 7, 11, … halla el término 10.',
      pasos: [
        { nota: 'Primero miramos cuánto sube cada vez. Es la diferencia común d.', html: row('3 &nbsp;→&nbsp; 7 &nbsp;→&nbsp; 11') + row(c('y', '+4 &nbsp;&nbsp;&nbsp; +4')) },
        { nota: 'Para llegar al término 10 desde el primero damos 9 saltos de 4 (uno menos que el número del término).', html: row(c('b', 'a<sub>n</sub> = a<sub>1</sub> + (n − 1)d')) },
        { nota: 'Sustituimos a₁ = 3, d = 4 y n = 10.', html: row('a₁₀ = 3 + (10 − 1)·4 = 3 + 36') + say(box('a₁₀ = 39'), 'g') }
      ]
    },
    {
      titulo: 'La suma de Gauss: 1 + 2 + … + 20',
      intro: 'Suma los primeros 20 números naturales.',
      pasos: [
        { nota: 'El truco de Gauss: escribimos la suma y la misma suma al revés, una debajo de la otra.', html: row('1 &nbsp;+ &nbsp;2 &nbsp;+ … + &nbsp;19 + &nbsp;20') + row('20 + 19 + … + &nbsp;2 &nbsp;+ &nbsp;1') },
        { nota: 'Cada columna suma lo mismo: 21. Y hay 20 columnas.', html: row(c('y', '21 + 21 + … + 21 (20 veces) = 420')) },
        { nota: 'Pero eso es el doble de la suma, porque la escribimos dos veces. Dividimos entre 2.', html: row(c('b', 'S = ' + f('20 · 21', '2'))) + say(box('S = 210'), 'g') }
      ]
    },
    {
      titulo: 'Progresión geométrica: el término 6',
      intro: 'En 2, 6, 18, … halla el término 6.',
      pasos: [
        { nota: 'Aquí no sumamos: multiplicamos. Dividimos un término entre el anterior para hallar la razón r.', html: row('2 &nbsp;→&nbsp; 6 &nbsp;→&nbsp; 18') + row(c('y', '× 3 &nbsp;&nbsp;&nbsp; × 3 &nbsp;&nbsp;&nbsp; r = 3')) },
        { nota: 'Para llegar al término 6 multiplicamos por r cinco veces.', html: row(c('b', 'a<sub>n</sub> = a<sub>1</sub> · r<sup>n−1</sup>')) },
        { nota: 'Sustituimos a₁ = 2, r = 3, n = 6: 3⁵ = 243.', html: row('a₆ = 2 · 3⁵ = 2 · 243') + say(box('a₆ = 486'), 'g') }
      ]
    },
    {
      titulo: 'Suma infinita: 8 + 4 + 2 + …',
      intro: '¿Puede sumarse algo que nunca termina?',
      pasos: [
        { nota: 'Cada término es la mitad del anterior: la razón es r = 1/2. Fíjate cómo las barras se hacen cada vez más pequeñas.', html: row('8 + 4 + 2 + 1 + … &nbsp; ' + c('y', 'r = ' + f('1', '2'))) + barras() },
        { nota: 'Como |r| < 1, los términos se vuelven tan pequeños que la suma se acerca a un número fijo: converge.', html: row(c('b', 'S = ' + f('a<sub>1</sub>', '1 − r'))) },
        { nota: 'Sustituimos a₁ = 8 y r = 1/2.', html: row('S = ' + f('8', '1 − ' + f('1', '2')) + ' = ' + f('8', f('1', '2'))) + say(box('S = 16'), 'g') }
      ]
    }
  ];

  /* ---- 1.18 ---- */
  P['1.18'] = [
    {
      titulo: 'Principio de multiplicación',
      intro: 'Hay 3 camisas y 4 pantalones. ¿Cuántos conjuntos distintos se pueden armar?',
      pasos: [
        { nota: 'Hagamos una tabla: cada camisa se puede combinar con cualquiera de los 4 pantalones.', html: tabla(['', 'pant. 1', 'pant. 2', 'pant. 3', 'pant. 4'], [['camisa A', '✓', '✓', '✓', '✓'], ['camisa B', '✓', '✓', '✓', '✓'], ['camisa C', '✓', '✓', '✓', '✓']]) },
        { nota: 'Son 3 filas de 4 casillas. Contar todas es multiplicar.', html: say(box('3 × 4 = 12 conjuntos'), 'g') }
      ]
    },
    {
      titulo: 'Permutación o combinación: ¿importa el orden?',
      intro: 'De 5 personas se elige presidente y secretario. Luego, de 6 estudiantes se elige un equipo de 3.',
      pasos: [
        { nota: 'Primera pregunta: ¿importa el orden? Presidente y secretario son cargos distintos, así que Ana-Beto no es lo mismo que Beto-Ana. Sí importa: permutación.', html: row(c('y', 'Presidente ≠ Secretario') + ' &nbsp;⇒&nbsp; ' + c('b', 'orden importa')) },
        { nota: 'Para el primer cargo tenemos 5 opciones y, para el segundo, 4 (ya no está el elegido).', html: row(c('b', 'P(5, 2) = 5 · 4 = 20')) },
        { nota: 'Segunda pregunta: un equipo de 3. El equipo Ana-Beto-Carla es el mismo en cualquier orden. No importa: combinación.', html: row(c('y', 'Equipo = grupo') + ' &nbsp;⇒&nbsp; ' + c('p', 'orden NO importa')) },
        { nota: 'Contamos como si importara (6·5·4) y dividimos entre las formas de ordenar 3 personas (3! = 6) para no repetir.', html: row(c('p', 'C(6, 3) = ' + f('6 · 5 · 4', '3 · 2 · 1') + ' = ' + f('120', '6'))) + say(box('C(6, 3) = 20'), 'g') }
      ]
    },
    {
      titulo: 'Probabilidad con un dado',
      intro: 'Al lanzar un dado, ¿cuál es la probabilidad de sacar par?',
      pasos: [
        { nota: 'Escribimos todos los resultados posibles y marcamos los que nos sirven.', html: row('1, ' + c('y', '2') + ', 3, ' + c('y', '4') + ', 5, ' + c('y', '6')) },
        { nota: 'Probabilidad = casos favorables entre casos posibles (todos igual de probables).', html: row(c('b', 'P(par) = ' + f('casos favorables', 'casos posibles'))) },
        { nota: 'Favorables: 3 (el 2, el 4 y el 6). Posibles: 6.', html: row('P(par) = ' + f('3', '6')) + say(box('P(par) = 1/2'), 'g') }
      ]
    }
  ];
})(window.PZ);

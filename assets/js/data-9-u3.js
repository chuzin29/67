/* data-9-u3.js — 9.º grado, Trimestre III: geometría métrica y dispersión (1.11–1.13) */
(function (N) {
  'use strict';
  var n = N.n, raiz = N.raiz;

  /* 1.11 Pitágoras */
  function hip(a, b) { var q = a * a + b * b; return ['Los catetos miden ' + a + ' y ' + b + '. Halla la hipotenusa.', ['`c² = ' + a + '² + ' + b + '² = ' + q + '`.', '`c = √' + q + '`.'], '`c = ' + raiz(q) + ' ≈ ' + n(Math.sqrt(q)) + '`', Math.sqrt(q), 'Hipotenusa con catetos ' + a + ' y ' + b + '.']; }
  function cat(c, a) { var q = c * c - a * a; return ['La hipotenusa mide ' + c + ' y un cateto ' + a + '. Halla el otro cateto.', ['`b² = ' + c + '² − ' + a + '² = ' + q + '`.', '`b = √' + q + '`.'], '`b = ' + raiz(q) + ' ≈ ' + n(Math.sqrt(q)) + '`', Math.sqrt(q), 'Cateto faltante: hipotenusa ' + c + ', cateto ' + a + '.']; }
  function d3(a, b, c) { var q = a * a + b * b + c * c; return ['Halla la diagonal de una caja de ' + a + ' × ' + b + ' × ' + c + '.', ['Diagonal de la base: `d² = ' + (a * a + b * b) + '`.', 'En el espacio: `D² = d² + ' + c + '² = ' + q + '`.'], '`D = ' + raiz(q) + ' ≈ ' + n(Math.sqrt(q)) + '`', Math.sqrt(q), 'Diagonal de una caja de ' + a + ' × ' + b + ' × ' + c + '.']; }
  N.tema(11, {
    unidad: 3, titulo: 'Teorema de Pitágoras en 2D y 3D', calc: 'pitagoras',
    resumen: 'Hallarás lados de triángulos rectángulos y diagonales en el plano y en el espacio.',
    objetivos: ['Identificar la hipotenusa.', 'Calcular lados desconocidos.', 'Hallar diagonales en 3D.'],
    teoria: [['El teorema', 'En un triángulo rectángulo, `a² + b² = c²`, donde c es la hipotenusa (opuesta al ángulo recto).'], ['Recíproco', 'Si los lados cumplen `a² + b² = c²`, el triángulo es rectángulo.'], ['En el espacio', 'La diagonal de un prisma rectangular es `D = √(a² + b² + c²)`.']],
    tabla: [['Se busca', 'Operación'], ['Hipotenusa', 'c = √(a² + b²)'], ['Cateto', 'b = √(c² − a²)'], ['Diagonal 3D', 'D = √(a² + b² + c²)']],
    ojo: '`√(a² + b²)` no es `a + b`. La hipotenusa siempre es el lado mayor.',
    formulas: [['Pitágoras', 'a² + b² = c²'], ['Cateto', 'b = √(c² − a²)'], ['Diagonal del cuadrado', 'd = L√2'], ['Diagonal 3D', 'D = √(a² + b² + c²)']],
    gen: [hip, cat, d3],
    ejemplos: [['Hipotenusa', 0, [3, 4]], ['Con raíz', 0, [2, 5]], ['Cateto', 1, [13, 5]], ['Caja', 2, [2, 3, 6]]],
    practica: [[[6, 8], [5, 12], [1, 1], [4, 5]], [[10, 6], [17, 8], [9, 4], [25, 7]], [[1, 2, 2], [4, 5, 7]]],
    examen: [[0, [9, 12]], [0, [8, 15]], [0, [3, 5]], [1, [15, 9]], [1, [26, 24]], [2, [2, 6, 9]], [2, [3, 4, 5]]],
    opciones: [['La hipotenusa es:', ['el lado menor', 'el lado opuesto al ángulo recto', 'cualquier lado', 'la altura'], 1, ['Definición.', 'Opuesta a 90°.']], ['¿Cuál es rectángulo?', ['2, 3, 4', '3, 4, 5', '4, 5, 6', '1, 2, 3'], 1, ['9 + 16 = 25.', '3, 4, 5.']], ['Diagonal de un cuadrado de lado L:', ['2L', 'L²', 'L√2', 'L/2'], 2, ['√(2L²).', 'L√2.']]],
    teoricas: [['¿A qué triángulos se aplica?', 'A los rectángulos.'], ['¿Qué son los catetos?', 'Los lados que forman el ángulo recto.'], ['¿Qué dice el recíproco?', 'Que la igualdad de cuadrados implica un ángulo recto.'], ['¿Qué es una terna pitagórica?', 'Tres enteros positivos que cumplen a² + b² = c².'], ['¿Cómo se usa en 3D?', 'Aplicándolo dos veces.'], ['¿Puede un cateto ser mayor que la hipotenusa?', 'No.'], ['¿Se descarta la raíz negativa?', 'Sí, porque una longitud es positiva.']],
    errores: ['Sumar cuando se busca un cateto.', 'Olvidar la raíz final.', 'Elegir mal la hipotenusa.'],
    aplicacion: ['Escaleras', 'Una escalera apoyada en la pared forma un triángulo rectángulo con el piso.']
  });

  /* 1.12 Circunferencia */
  function ins(c) { return ['Un ángulo central mide ' + c + '°. ¿Cuánto mide un ángulo inscrito que abarca el mismo arco?', ['El inscrito es la mitad del central.', '`' + c + '/2`.'], '`' + n(c / 2) + '°`', c / 2, 'Central ' + c + '°: ángulo inscrito en el mismo arco (grados).']; }
  function cen(i) { return ['Un ángulo inscrito mide ' + i + '°. Halla el central que abarca el mismo arco.', ['El central es el doble.', '`2·' + i + '`.'], '`' + (2 * i) + '°`', 2 * i, 'Inscrito ' + i + '°: ángulo central del mismo arco (grados).']; }
  function cuadr(a) { return ['En un cuadrilátero inscrito, un ángulo mide ' + a + '°. Halla su opuesto.', ['Los opuestos son suplementarios.', '`180 − ' + a + '`.'], '`' + (180 - a) + '°`', 180 - a, 'Cuadrilátero inscrito: opuesto de ' + a + '° (grados).']; }
  N.tema(12, {
    unidad: 3, titulo: 'Circunferencia: ángulo central e inscrito', calc: 'angulos',
    resumen: 'Reconocerás los elementos de la circunferencia y relacionarás ángulos centrales e inscritos.',
    objetivos: ['Identificar elementos de la circunferencia.', 'Relacionar central e inscrito.', 'Resolver cuadriláteros inscritos.'],
    teoria: [['Elementos', '<strong>Radio</strong>: del centro a la circunferencia. <strong>Cuerda</strong>: une dos puntos. <strong>Diámetro</strong>: cuerda que pasa por el centro. <strong>Arco</strong>: porción de la curva.'], ['Central e inscrito', 'El ángulo <strong>central</strong> tiene el vértice en el centro; el <strong>inscrito</strong>, en la circunferencia. Con el mismo arco, el inscrito mide la mitad del central.'], ['Consecuencias', 'Un inscrito que abarca un diámetro mide 90°. En un cuadrilátero inscrito, los ángulos opuestos suman 180°.']],
    tabla: [['Ángulo', 'Vértice', 'Medida'], ['Central', 'En el centro', 'Igual al arco'], ['Inscrito', 'En la circunferencia', 'Mitad del arco']],
    ojo: 'La relación «mitad» solo vale si ambos ángulos abarcan el <strong>mismo arco</strong>.',
    formulas: [['Inscrito', 'inscrito = central/2'], ['Central', 'central = 2·inscrito'], ['Semicircunferencia', 'inscrito = 90°'], ['Cuadrilátero inscrito', 'A + C = 180°']],
    gen: [ins, cen, cuadr],
    ejemplos: [['Del central al inscrito', 0, [80]], ['Del inscrito al central', 1, [35]], ['Diámetro', 0, [180]], ['Cuadrilátero', 2, [75]]],
    practica: [[[60], [100], [150], [46]], [[20], [45], [62], [88]], [[112], [57]]],
    examen: [[0, [90]], [0, [124]], [0, [210]], [1, [15]], [1, [54]], [2, [95]], [2, [68]]],
    opciones: [['Un inscrito sobre un diámetro mide:', ['45°', '90°', '180°', '60°'], 1, ['Mitad de 180°.', '90°.']], ['El vértice del ángulo central está en:', ['el centro', 'la circunferencia', 'fuera', 'una cuerda'], 0, ['Definición.', 'El centro.']], ['La cuerda más larga es:', ['el radio', 'el arco', 'el diámetro', 'la tangente'], 2, ['Pasa por el centro.', 'Diámetro.']]],
    teoricas: [['¿Qué es una cuerda?', 'Un segmento que une dos puntos de la circunferencia.'], ['¿Qué es un arco?', 'Una porción de la circunferencia.'], ['¿Cómo se relacionan diámetro y radio?', 'El diámetro es el doble del radio.'], ['¿Qué es un ángulo inscrito?', 'El que tiene vértice en la circunferencia y lados que son cuerdas.'], ['¿Cuánto miden dos inscritos sobre el mismo arco?', 'Lo mismo.'], ['¿Qué es una tangente?', 'Una recta que toca la circunferencia en un solo punto.'], ['¿Qué ángulo forman radio y tangente en el punto de contacto?', '90°.']],
    errores: ['Duplicar en lugar de dividir.', 'Comparar ángulos de arcos distintos.', 'Confundir cuerda con diámetro.'],
    aplicacion: ['Diseño', 'Los ángulos inscritos ayudan a ubicar puntos desde donde un mismo tramo se ve con igual ángulo.']
  });

  /* 1.13 Dispersión */
  function est(d) { var m = d.reduce(function (a, b) { return a + b; }, 0) / d.length, v = d.reduce(function (a, b) { return a + (b - m) * (b - m); }, 0) / d.length; return { m: m, v: v, sd: Math.sqrt(v), q: d.map(function (x) { return n((x - m) * (x - m)); }).join(', ') }; }
  function rango(d) { var hi = Math.max.apply(null, d), lo = Math.min.apply(null, d); return ['Halla el rango de ' + d.join(', ') + '.', ['Máximo `' + hi + '` y mínimo `' + lo + '`.', 'Resta.'], '`' + (hi - lo) + '`', hi - lo, 'Rango de ' + d.join(', ') + '.']; }
  function vari(d) { var e = est(d); return ['Halla la varianza de ' + d.join(', ') + '.', ['Media: `' + n(e.m) + '`.', 'Cuadrados de las desviaciones: `' + e.q + '`.', 'Promédialos entre `' + d.length + '`.'], '`σ² = ' + n(e.v) + '`', e.v, 'Varianza (poblacional) de ' + d.join(', ') + '.']; }
  function desv(d) { var e = est(d); return ['Halla la desviación típica de ' + d.join(', ') + '.', ['Media: `' + n(e.m) + '`.', 'Varianza: `' + n(e.v) + '`.', 'Raíz cuadrada.'], '`σ ≈ ' + n(e.sd) + '`', e.sd, 'Desviación típica (poblacional) de ' + d.join(', ') + '.']; }
  function D() { return [Array.prototype.slice.call(arguments)]; }
  N.tema(13, {
    unidad: 3, titulo: 'Medidas de dispersión', calc: 'dispersion',
    resumen: 'Medirás qué tan dispersos están los datos con rango, varianza y desviación típica.',
    objetivos: ['Calcular el rango.', 'Calcular la varianza.', 'Interpretar la desviación típica.'],
    teoria: [['¿Por qué medir dispersión?', 'Dos grupos pueden tener la misma media y ser muy distintos en su variabilidad.'], ['Rango y varianza', 'El rango es máximo menos mínimo. La varianza es el promedio de los cuadrados de las diferencias con la media. En este tema se usa la varianza poblacional (dividir entre n).'], ['Desviación típica', 'Es la raíz cuadrada de la varianza y está en las mismas unidades que los datos.']],
    tabla: [['Medida', 'Ventaja', 'Limitación'], ['Rango', 'Muy rápido', 'Solo usa dos datos'], ['Varianza', 'Usa todos', 'Unidades al cuadrado'], ['Desviación típica', 'Mismas unidades', 'Requiere más cálculo']],
    ojo: '`σ²` es la varianza y `σ` la desviación típica. Eleva al cuadrado cada diferencia antes de sumar.',
    formulas: [['Rango', 'R = máx − mín'], ['Media', 'x̄ = Σx/n'], ['Varianza', 'σ² = Σ(x − x̄)²/n'], ['Desviación típica', 'σ = √(σ²)']],
    gen: [rango, vari, desv],
    ejemplos: [['Rango', 0, D(7, 2, 10, 4)], ['Varianza', 1, D(2, 4, 6)], ['Datos iguales', 1, D(5, 5, 5, 5)], ['Desviación típica', 2, D(2, 4, 4, 4, 5, 5, 7, 9)]],
    practica: [[D(3, 9, 5), D(12, 20, 8, 15), D(1, 1, 6), D(30, 45, 25)], [D(1, 3, 5), D(4, 8), D(2, 2, 8, 8), D(5, 6, 10)], [D(1, 2, 3, 4, 5), D(6, 8, 10, 12)]],
    examen: [[0, D(14, 3, 9)], [0, D(50, 80, 65)], [1, D(3, 5, 7)], [1, D(10, 14)], [1, D(1, 1, 5, 5)], [2, D(2, 8)], [2, D(3, 4, 8)]],
    opciones: [['Si todos los datos son iguales, la desviación típica es:', ['1', '0', 'la media', 'el rango más 1'], 1, ['No hay dispersión.', '0.']], ['¿Qué medida usa solo dos datos?', ['Varianza', 'Desviación típica', 'Rango', 'Media'], 2, ['Máximo y mínimo.', 'Rango.']], ['A igual media, el grupo más homogéneo tiene:', ['menor desviación', 'mayor desviación', 'mayor rango', 'más datos'], 0, ['Menos dispersión.', 'Menor desviación.']]],
    teoricas: [['¿Qué mide la dispersión?', 'Cuánto se separan los datos.'], ['¿Puede la varianza ser negativa?', 'No.'], ['¿Por qué se elevan al cuadrado las diferencias?', 'Para que no se cancelen.'], ['¿Qué unidades tiene la desviación típica?', 'Las de los datos.'], ['¿Qué indica una desviación grande?', 'Datos muy alejados de la media.'], ['¿Afectan los extremos al rango?', 'Mucho.'], ['¿Qué diferencia hay con la varianza muestral?', 'La muestral divide entre n − 1.']],
    errores: ['No elevar al cuadrado.', 'Olvidar la raíz en la desviación típica.', 'Restar en orden incorrecto en el rango.'],
    aplicacion: ['Calidad', 'Una máquina que llena botellas es más estable cuando la desviación típica del contenido es pequeña.']
  });
})(window.N9);

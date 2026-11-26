/* data-9-u1.js — 9.º grado, Trimestre I: álgebra fundamental (1.1–1.5) */
(function (N) {
  'use strict';
  var n = N.n, s = N.s, poly = N.poly, bin = N.bin, co = N.co;

  /* 1.1 Productos notables */
  function cuad(a, b) { var B = 2 * a * b; return ['Desarrolla `' + bin(a, b) + '²`.', ['Cuadrado del primero: `' + co(a * a, 'x²') + '`.', 'Doble producto: `2·(' + co(a, 'x') + ')(' + n(b) + ') = ' + co(B, 'x') + '`.', 'Cuadrado del segundo: `' + n(b * b) + '`.'], '`' + poly(a * a, B, b * b) + '`', B, 'Al desarrollar `' + bin(a, b) + '²`, ¿cuál es el coeficiente de x?']; }
  function comun(a, b) { return ['Multiplica `' + bin(1, a) + bin(1, b) + '`.', ['Suma de los términos no comunes: `' + n(a + b) + '`.', 'Producto: `' + n(a * b) + '`.'], '`' + poly(1, a + b, a * b) + '`', a * b, 'Término independiente de `' + bin(1, a) + bin(1, b) + '`.']; }
  function general(a, b, c, d) { var B = a * d + b * c; return ['Multiplica `' + bin(a, b) + bin(c, d) + '`.', ['Primeros: `' + co(a * c, 'x²') + '`.', 'Productos cruzados: `' + co(a * d, 'x') + (b * c < 0 ? ' − ' : ' + ') + co(Math.abs(b * c), 'x') + ' = ' + (B ? co(B, 'x') : '0') + '`.', 'Últimos: `' + n(b * d) + '`.'], '`' + poly(a * c, B, b * d) + '`', B, 'Coeficiente de x en `' + bin(a, b) + bin(c, d) + '`.']; }
  N.tema(1, {
    unidad: 1, titulo: 'Productos notables y multiplicación de polinomios', calc: 'binomios',
    resumen: 'Multiplicarás polinomios y usarás atajos: binomio al cuadrado, término común y suma por diferencia.',
    objetivos: ['Multiplicar polinomios con la propiedad distributiva.', 'Desarrollar el cuadrado de un binomio.', 'Usar los productos con término común y suma por diferencia.'],
    teoria: [['Propiedad distributiva', 'Para multiplicar polinomios, cada término del primero multiplica a cada término del segundo; después se reducen los términos semejantes.'], ['Binomio al cuadrado', '`(a + b)² = a² + 2ab + b²` y `(a − b)² = a² − 2ab + b²`.'], ['Término común y suma por diferencia', '`(x + a)(x + b) = x² + (a + b)x + ab` y `(a + b)(a − b) = a² − b²`.']],
    tabla: [['Producto', 'Resultado'], ['(a + b)²', 'a² + 2ab + b²'], ['(a − b)²', 'a² − 2ab + b²'], ['(a + b)(a − b)', 'a² − b²']],
    ojo: '`(a + b)²` no es `a² + b²`: falta el doble producto `2ab`. Además, `(−3)² = 9` pero `−3² = −9`.',
    formulas: [['Cuadrado de una suma', '(a + b)² = a² + 2ab + b²'], ['Cuadrado de una resta', '(a − b)² = a² − 2ab + b²'], ['Suma por diferencia', '(a + b)(a − b) = a² − b²'], ['Término común', '(x + a)(x + b) = x² + (a + b)x + ab']],
    gen: [cuad, comun, general],
    ejemplos: [['Cuadrado de una suma', 0, [1, 5]], ['Cuadrado de una resta', 0, [2, -3]], ['Término común', 1, [4, -7]], ['Dos binomios', 2, [2, 1, 3, -4]]],
    practica: [[[1, 3], [1, -4], [2, 1], [3, -2]], [[2, 5], [-3, 8], [-2, -6], [7, -1]], [[3, 2, 2, -5], [4, -1, 2, 3]]],
    examen: [[0, [1, 6]], [0, [3, 1]], [0, [1, -9]], [1, [5, 3]], [1, [-4, 6]], [2, [2, 3, 1, 4]], [2, [3, -1, 1, 2]]],
    opciones: [['`(x + 4)(x − 4)` es igual a:', ['x² − 16', 'x² + 16', 'x² − 8x + 16', 'x² − 8'], 0, ['Suma por diferencia.', 'a² − b².']], ['`(x − 2)²` es igual a:', ['x² − 4', 'x² − 4x + 4', 'x² + 4', 'x² − 2x + 4'], 1, ['Cuadrado de una resta.', 'Incluye −4x.']], ['El doble producto en `(a + b)²` es:', ['ab', 'a² b²', '2ab', 'a + b'], 2, ['Fórmula del cuadrado.', 'Es 2ab.']]],
    teoricas: [['¿Qué es un producto notable?', 'Una multiplicación frecuente cuyo resultado se escribe con una regla.'], ['¿Cuántos términos da un binomio al cuadrado?', 'Tres: trinomio cuadrado perfecto.'], ['¿Qué ocurre con los términos en x en una suma por diferencia?', 'Se cancelan.'], ['¿Qué son términos semejantes?', 'Los que tienen la misma parte literal.'], ['¿Cómo se comprueba un desarrollo?', 'Sustituyendo un número en ambas expresiones.'], ['¿Para qué sirven al factorizar?', 'Se leen al revés para escribir un polinomio como producto.'], ['¿Cuál es el signo del último término de (a − b)²?', 'Positivo.']],
    errores: ['Olvidar el doble producto.', 'Perder el signo al multiplicar negativos.', 'Sumar términos que no son semejantes.'],
    aplicacion: ['Áreas', 'El área de un cuadrado de lado `x + 3` es `x² + 6x + 9`: el cuadrado original, dos rectángulos y un cuadrado pequeño.']
  });

  /* 1.2 Factor común y diferencia de cuadrados */
  function fcomun(k, a, b) { return ['Factoriza `' + poly(k * a, k * b, 0) + '`.', ['El factor numérico común es `' + k + '` y la literal común es `x`.', 'Divide cada término entre `' + k + 'x`.'], '`' + k + 'x' + bin(a, b) + '`', k, 'Mayor factor numérico común de `' + poly(k * a, k * b, 0) + '`.']; }
  function dif(a, b) { return ['Factoriza `' + poly(a * a, 0, -b * b) + '`.', ['Raíces: `' + co(a, 'x') + '` y `' + b + '`.', 'Escribe suma por diferencia.'], '`' + bin(a, b) + bin(a, -b) + '`', b, 'Si `' + poly(a * a, 0, -b * b) + ' = (' + co(a, 'x') + ' + q)(' + co(a, 'x') + ' − q)` con q positivo, halla q.']; }
  function dif2(k, a, b) { return ['Factoriza por completo `' + poly(k * a * a, 0, -k * b * b) + '`.', ['Factor común `' + k + '`: `' + k + '(' + poly(a * a, 0, -b * b) + ')`.', 'Dentro queda una diferencia de cuadrados.'], '`' + k + bin(a, b) + bin(a, -b) + '`', k, 'En `' + poly(k * a * a, 0, -k * b * b) + '`, ¿qué factor común numérico se extrae para que quede la diferencia `' + poly(a * a, 0, -b * b) + '`?']; }
  N.tema(2, {
    unidad: 1, titulo: 'Factorización I: factor común y diferencia de cuadrados', calc: 'difcuad',
    resumen: 'Escribirás polinomios como productos extrayendo el factor común y reconociendo diferencias de cuadrados.',
    objetivos: ['Hallar el máximo factor común.', 'Factorizar una diferencia de cuadrados.', 'Combinar ambos métodos.'],
    teoria: [['¿Qué es factorizar?', 'Es escribir una expresión como producto de factores: el proceso inverso de multiplicar.'], ['Factor común', 'Se toma el mayor divisor numérico y cada letra repetida con su menor exponente.'], ['Diferencia de cuadrados', '`a² − b² = (a + b)(a − b)`. La suma `a² + b²` no se factoriza en los reales.']],
    tabla: [['Método', 'Cuándo usarlo'], ['Factor común', 'Todos los términos comparten un factor'], ['Diferencia de cuadrados', 'Dos cuadrados que se restan']],
    ojo: 'Si un término es igual al factor común, dentro del paréntesis queda `1`, no `0`: `3x + 3 = 3(x + 1)`.',
    calculo: 'En `lím (x² − 9)/(x − 3)` cuando x tiende a 3, sustituir da `0/0`. Al factorizar `(x + 3)(x − 3)/(x − 3)` y simplificar (con x ≠ 3) queda `x + 3`, así que el límite es 6.',
    formulas: [['Factor común', 'ab + ac = a(b + c)'], ['Diferencia de cuadrados', 'a² − b² = (a + b)(a − b)'], ['Comprobación', 'Multiplica los factores'], ['Orden', 'Primero factor común']],
    gen: [fcomun, dif, dif2],
    ejemplos: [['Factor común', 0, [4, 2, 3]], ['Diferencia de cuadrados', 1, [1, 6]], ['Con coeficiente', 1, [3, 5]], ['Dos métodos', 2, [2, 1, 7]]],
    practica: [[[2, 1, 4], [3, 2, -5], [5, 1, -2], [7, 3, 1]], [[1, 4], [2, 3], [5, 1], [4, 9]], [[3, 1, 2], [5, 2, 3]]],
    examen: [[0, [6, 1, 5]], [0, [9, 2, 1]], [1, [1, 8]], [1, [2, 7]], [1, [6, 11]], [2, [2, 1, 5]], [2, [7, 1, 3]]],
    opciones: [['`x² − 25` es:', ['(x − 5)²', '(x + 5)(x − 5)', 'x(x − 25)', 'No factoriza'], 1, ['Diferencia de cuadrados.', 'Raíces x y 5.']], ['¿Cuál no se factoriza en los reales?', ['x² − 4', 'x² + 4', '2x + 4', 'x² − x'], 1, ['Suma de cuadrados.', 'No se factoriza.']], ['Factor común de `8x³ + 12x²`:', ['4x²', '4x³', '2x', '12x'], 0, ['MCD 4.', 'Menor exponente 2.']]],
    teoricas: [['¿Cómo se comprueba una factorización?', 'Multiplicando los factores.'], ['¿Qué exponente se toma en la letra común?', 'El menor.'], ['¿Qué es un cuadrado perfecto?', 'La segunda potencia de una expresión.'], ['¿Qué se intenta primero?', 'El factor común.'], ['¿La suma de cuadrados factoriza en los reales?', 'No, si no hay factor común.'], ['¿Puede el factor común ser un binomio?', 'Sí, como en x(a + 1) + 2(a + 1).'], ['¿Qué significa factorizar por completo?', 'Que ningún factor admite otra factorización.']],
    errores: ['Dejar un factor común sin extraer.', 'Factorizar una suma de cuadrados como diferencia.', 'Escribir 0 en lugar de 1 dentro del paréntesis.'],
    aplicacion: ['Cálculo mental', '`101² − 99² = (101 + 99)(101 − 99) = 400`.']
  });

  /* 1.3 Trinomios y cambio de variable */
  function tri(p, q) { return ['Factoriza `' + poly(1, p + q, p * q) + '`.', ['Busca dos números que sumen `' + n(p + q) + '` y multipliquen `' + n(p * q) + '`.', 'Son `' + n(p) + '` y `' + n(q) + '`.'], '`' + bin(1, p) + bin(1, q) + '`', Math.max(p, q), 'Si `' + poly(1, p + q, p * q) + ' = (x + m)(x + n)`, halla el mayor entre m y n.']; }
  function tria(a, p, q) { var B = a * q + p; return ['Factoriza `' + poly(a, B, p * q) + '`.', ['Multiplica a·c = `' + n(a * p * q) + '` y busca dos números que sumen `' + n(B) + '`: `' + n(a * q) + '` y `' + n(p) + '`.', 'Separa el término en x y agrupa.'], '`' + bin(a, p) + bin(1, q) + '`', p, 'Si `' + poly(a, B, p * q) + ' = ' + '(' + a + 'x + m)' + bin(1, q) + '`, halla m.']; }
  function cambio(p, q) { var B = p + q, C = p * q; return ['Factoriza `x⁴ ' + s(B) + 'x² ' + s(C) + '`.', ['Cambio de variable `u = x²`: `u² ' + s(B) + 'u ' + s(C) + '`.', 'Factoriza: `(u ' + s(p) + ')(u ' + s(q) + ')`.', 'Regresa a x.'], '`(x² ' + s(p) + ')(x² ' + s(q) + ')`', C, 'Con `u = x²`, ¿cuál es el término independiente del trinomio de `x⁴ ' + s(B) + 'x² ' + s(C) + '`?']; }
  N.tema(3, {
    unidad: 1, titulo: 'Factorización II: trinomios y cambio de variable', calc: 'trinomio',
    resumen: 'Factorizarás x² + bx + c y ax² + bx + c, y usarás un cambio de variable.',
    objetivos: ['Factorizar x² + bx + c.', 'Factorizar ax² + bx + c por agrupación.', 'Aplicar un cambio de variable.'],
    teoria: [['Trinomio x² + bx + c', 'Se buscan dos números que sumen b y cuyo producto sea c.'], ['Trinomio ax² + bx + c', 'Se buscan dos números que sumen b y multipliquen a·c; se separa el término central y se factoriza por agrupación.'], ['Cambio de variable', 'Si una expresión se repite, se llama u. Al terminar se regresa a la variable original.']],
    tabla: [['Signo de c', 'Signos de los números'], ['c positivo', 'Iguales (los de b)'], ['c negativo', 'Distintos']],
    ojo: '`x⁴` es `(x²)²`; por eso `u = x²` convierte la expresión en cuadrática. No olvides regresar de u a x.',
    calculo: 'En `lím (x² − 5x + 6)/(x − 2)` cuando x tiende a 2, factorizar el numerador como `(x − 2)(x − 3)` permite simplificar y obtener el límite −1.',
    formulas: [['x² + bx + c', '(x + m)(x + n),  m + n = b,  mn = c'], ['Método a·c', 'Dos números: suma b, producto ac'], ['Cambio', 'u = x²'], ['Comprobación', 'Distribuye los factores']],
    gen: [tri, tria, cambio],
    ejemplos: [['Signos iguales', 0, [2, 5]], ['Signos distintos', 0, [-3, 7]], ['Con a distinto de 1', 1, [2, 1, 3]], ['Cambio de variable', 2, [1, 4]]],
    practica: [[[1, 2], [3, 4], [-2, -3], [-1, 6]], [[2, 3, 1], [3, -1, 2], [2, -5, 2], [5, 2, -1]], [[-2, -5], [2, 7]]],
    examen: [[0, [2, 9]], [0, [-4, 6]], [0, [-5, -2]], [1, [2, 5, 1]], [1, [3, 2, 4]], [2, [3, 5]], [2, [-2, 6]]],
    opciones: [['`x² + 7x + 12` es:', ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x − 3)(x − 4)'], 0, ['Suma 7.', 'Producto 12.']], ['En `x⁴ − 5x² + 4` conviene u =', ['x', 'x²', 'x⁴', '5x'], 1, ['Se repite x².', 'u = x².']], ['Si c es negativo, los dos números tienen:', ['signos iguales', 'signos distintos', 'valor cero', 'siempre signo positivo'], 1, ['Producto negativo.', 'Signos distintos.']]],
    teoricas: [['¿Todo trinomio factoriza con enteros?', 'No.'], ['¿Qué se busca en x² + bx + c?', 'Dos números con suma b y producto c.'], ['¿Para qué sirve el cambio de variable?', 'Para reconocer una forma conocida.'], ['¿Qué se hace al final del cambio?', 'Regresar a la variable original.'], ['¿Qué es factorizar por agrupación?', 'Sacar factor común en grupos hasta que aparezca un factor repetido.'], ['¿Cómo se verifica?', 'Multiplicando.'], ['¿Puede quedar un factor factorizable?', 'Sí; por ejemplo una diferencia de cuadrados, y hay que seguir.']],
    errores: ['Elegir números con producto correcto pero suma incorrecta.', 'Olvidar el coeficiente a.', 'No regresar de u a x.'],
    aplicacion: ['Dimensiones', 'Si el área de un rectángulo es `x² + 5x + 6`, sus lados pueden ser `x + 2` y `x + 3`.']
  });

  /* 1.4 Radicales */
  function simp(k, r) { var v = k * k * r; return ['Simplifica `√' + v + '`.', ['`' + v + ' = ' + (k * k) + '·' + r + '`.', 'La raíz de `' + (k * k) + '` es `' + k + '`.'], '`' + k + '√' + r + '`', k, 'Si `√' + v + ' = k√' + r + '`, halla k.']; }
  function suma(a, b, r) { return ['Opera `√' + (a * a * r) + ' + √' + (b * b * r) + '`.', ['Simplifica: `' + a + '√' + r + '` y `' + b + '√' + r + '`.', 'Son radicales semejantes: suma los coeficientes.'], '`' + (a + b) + '√' + r + '`', a + b, 'Si `√' + (a * a * r) + ' + √' + (b * b * r) + ' = k√' + r + '`, halla k.']; }
  function prod(a, r) { return ['Calcula `(√' + r + ' + ' + a + ')(√' + r + ' − ' + a + ')`.', ['Es una suma por diferencia.', '`(√' + r + ')² − ' + a + '² = ' + r + ' − ' + (a * a) + '`.'], '`' + n(r - a * a) + '`', r - a * a, 'Calcula `(√' + r + ' + ' + a + ')(√' + r + ' − ' + a + ')`.']; }
  N.tema(4, {
    unidad: 1, titulo: 'Números reales y operaciones con radicales', calc: 'radicales',
    resumen: 'Distinguirás racionales e irracionales y simplificarás y operarás radicales.',
    objetivos: ['Clasificar números reales.', 'Simplificar raíces cuadradas.', 'Sumar y multiplicar radicales.'],
    teoria: [['Números reales', 'Los <strong>racionales</strong> se escriben como cociente de enteros (decimal exacto o periódico). Los <strong>irracionales</strong>, como `√2` o π, tienen decimales infinitos no periódicos. Juntos forman los reales.'], ['Simplificación', 'Se extrae el mayor cuadrado perfecto: `√(a²b) = a√b` con a y b no negativos.'], ['Operaciones', 'Solo se suman radicales semejantes. `√a·√b = √(ab)` con a y b no negativos.']],
    tabla: [['Número', 'Tipo'], ['0.75', 'Racional'], ['0.333…', 'Racional'], ['√2', 'Irracional'], ['√49', 'Racional (7)']],
    ojo: '`√(a + b)` no es `√a + √b`: `√(9 + 16) = 5`, pero `√9 + √16 = 7`. El símbolo `√` indica la raíz no negativa.',
    formulas: [['Producto', '√a·√b = √(ab)'], ['Cociente', '√(a/b) = √a/√b,  b > 0'], ['Extracción', '√(a²b) = a√b'], ['Semejantes', 'm√a + n√a = (m + n)√a']],
    gen: [simp, suma, prod],
    ejemplos: [['Simplificar', 0, [5, 2]], ['Otra raíz', 0, [4, 3]], ['Suma', 1, [2, 3, 2]], ['Producto conjugado', 2, [2, 11]]],
    practica: [[[2, 3], [3, 2], [5, 3], [6, 5]], [[1, 2, 3], [3, 4, 2], [2, 5, 5], [4, 6, 7]], [[3, 13], [5, 7]]],
    examen: [[0, [7, 2]], [0, [3, 5]], [0, [10, 3]], [1, [2, 6, 2]], [1, [5, 3, 3]], [2, [1, 10]], [2, [4, 6]]],
    opciones: [['¿Cuál es irracional?', ['√16', '0.5', '√3', '2/7'], 2, ['3 no es cuadrado perfecto.', 'Es irracional.']], ['`√2·√8` es:', ['√10', '4', '16', '2√2'], 1, ['√16.', '4.']], ['`3√5 + 2√5` es:', ['5√10', '5√5', '6√5', '√25'], 1, ['Semejantes.', '3 + 2.']]],
    teoricas: [['¿Qué forman racionales e irracionales?', 'Los números reales.'], ['¿Cuándo dos radicales son semejantes?', 'Cuando tienen igual índice y radicando.'], ['¿Existe √(−4) en los reales?', 'No.'], ['¿Qué es el radicando?', 'La expresión dentro de la raíz.'], ['¿Cuánto vale (√7)²?', '7.'], ['¿Es π racional?', 'No.'], ['¿Qué significa simplificar una raíz?', 'Sacar los factores cuadrados perfectos.']],
    errores: ['Separar la raíz de una suma.', 'Sumar radicandos distintos.', 'Extraer un factor sin calcular su raíz.'],
    aplicacion: ['Diagonales', 'La diagonal de un cuadrado de lado 5 mide `5√2`.']
  });

  /* 1.5 Racionalización */
  function mcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a || 1; }
  /* c·(num)/d reducido; devuelve texto sin factores comunes */
  function reducir(c, d, num) { var g = mcd(c, d), k = c / g, q = d / g, signo = ''; if (q < 0) { q = -q; k = -k; } if (k < 0) { signo = '−'; k = -k; } var arriba = k === 1 && q === 1 && !signo ? num : (k === 1 ? '' : k) + '(' + num + ')'; return signo + arriba + (q === 1 ? '' : '/' + q); }
  function mono(c, r) { var g = mcd(c, r), k = c / g, q = r / g, fin = (k === 1 ? '' : k) + '√' + r + (q === 1 ? '' : '/' + q); return ['Racionaliza `' + c + '/√' + r + '`.', ['Multiplica numerador y denominador por `√' + r + '`.', 'Queda `' + (c === 1 ? '' : c) + '√' + r + '/' + r + '`.'].concat(g > 1 ? ['Simplifica entre `' + g + '`.'] : []), '`' + fin + '`', c / Math.sqrt(r), 'Valor decimal de `' + c + '/√' + r + '`.']; }
  function binm(c, r, a) { var d = r - a * a, num = d < 0 ? a + ' − √' + r : '√' + r + ' − ' + a, res = reducir(c, Math.abs(d), num); if (c === Math.abs(d)) res = num; return ['Racionaliza `' + c + '/(√' + r + ' + ' + a + ')`.', ['El conjugado es `√' + r + ' − ' + a + '`.', 'Denominador: `' + r + ' − ' + (a * a) + ' = ' + n(d) + '`.', d < 0 ? 'Como es negativo, cambia el orden en el numerador y simplifica.' : 'Simplifica los factores comunes.'], '`' + res + '`', c / (Math.sqrt(r) + a), 'Valor decimal de `' + c + '/(√' + r + ' + ' + a + ')`.']; }
  function bin2(c, a, b) { var d = a - b, num = '√' + a + ' + √' + b, g = mcd(c, d), res = reducir(c, d, num); if (c / g === 1 && Math.abs(d) / g === 1 && d > 0) res = num; return ['Racionaliza `' + c + '/(√' + a + ' − √' + b + ')`.', ['El conjugado es `√' + a + ' + √' + b + '`.', 'Denominador: `' + a + ' − ' + b + ' = ' + n(d) + '`.', 'Simplifica factores comunes y signos.'], '`' + res + '`', c / (Math.sqrt(a) - Math.sqrt(b)), 'Valor decimal de `' + c + '/(√' + a + ' − √' + b + ')`.']; }
  N.tema(5, {
    unidad: 1, titulo: 'Racionalización de denominadores', calc: 'racionalizar',
    resumen: 'Eliminarás raíces del denominador en casos monomios y binomios usando el conjugado.',
    objetivos: ['Racionalizar denominadores monomios.', 'Identificar el conjugado.', 'Racionalizar denominadores binomios.'],
    teoria: [['La idea', 'Se multiplica por una fracción igual a 1 para quitar la raíz del denominador sin cambiar el valor.'], ['Monomio', '`c/√a = c√a/a`, con a positivo.'], ['Binomio conjugado', 'El conjugado cambia el signo central. Al multiplicar se obtiene una diferencia de cuadrados, sin raíces. El denominador inicial no puede ser cero.']],
    tabla: [['Denominador', 'Multiplica por'], ['√a', '√a'], ['√a + b', '√a − b'], ['√a − √b', '√a + √b']],
    ojo: 'El factor se multiplica arriba <strong>y</strong> abajo, y el numerador va completo entre paréntesis.',
    calculo: 'En `lím (√x − 2)/(x − 4)` cuando x tiende a 4, se multiplica por el conjugado `√x + 2`; se simplifica `x − 4` y queda `1/(√x + 2)`, cuyo límite es 1/4. El mismo truco sirve para derivar `√x`.',
    formulas: [['Monomio', 'c/√a = c√a/a'], ['Conjugado', '(√a + b)(√a − b) = a − b²'], ['Dos raíces', '(√a + √b)(√a − √b) = a − b'], ['Multiplicar por 1', 'k/k = 1,  k ≠ 0']],
    gen: [mono, binm, bin2],
    ejemplos: [['Monomio', 0, [6, 3]], ['Monomio sin simplificar', 0, [5, 7]], ['Binomio', 1, [4, 5, 1]], ['Dos raíces', 2, [2, 7, 5]]],
    practica: [[[1, 2], [4, 2], [3, 5], [10, 5]], [[3, 7, 2], [2, 3, 1], [5, 11, 1], [7, 2, 3]], [[3, 5, 2], [4, 3, 7]]],
    examen: [[0, [8, 2]], [0, [9, 3]], [0, [2, 7]], [1, [6, 7, 1]], [1, [1, 2, 1]], [2, [2, 5, 3]], [2, [6, 10, 7]]],
    opciones: [['El conjugado de `√3 + 2` es:', ['√3 − 2', '−√3 − 2', '2 + √3', '√3·2'], 0, ['Cambia el signo central.', '√3 − 2.']], ['`1/√5` racionalizado es:', ['√5', '√5/5', '5/√5', '1/5'], 1, ['Multiplica por √5.', '√5/5.']], ['Racionalizar cambia:', ['el valor', 'la forma, no el valor', 'el signo', 'nada se multiplica'], 1, ['Se multiplica por 1.', 'Solo la forma.']]],
    teoricas: [['¿Qué es racionalizar?', 'Reescribir la fracción sin raíces en el denominador.'], ['¿Por qué no cambia el valor?', 'Porque se multiplica por 1.'], ['¿Qué es el conjugado?', 'El mismo binomio con el signo central cambiado.'], ['¿Qué producto notable aparece?', 'La diferencia de cuadrados.'], ['¿Puede racionalizarse un numerador?', 'Sí; es muy usado en límites.'], ['¿Qué condición tiene el denominador?', 'No puede ser cero.'], ['¿Se simplifica al final?', 'Sí, cuando hay factores comunes.']],
    errores: ['Multiplicar solo el denominador.', 'Usar el mismo binomio en vez del conjugado.', 'Cancelar términos que están sumando.'],
    aplicacion: ['Medidas', 'Escribir `1/√2` como `√2/2` facilita calcularlo y compararlo.']
  });
})(window.N9);

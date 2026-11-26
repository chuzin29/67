/* data-9-u2.js — 9.º grado, Trimestre II: cuadráticas, Tales y semejanza (1.6–1.10) */
(function (N) {
  'use strict';
  var n = N.n, s = N.s, poly = N.poly, bin = N.bin, raiz = N.raiz;
  function eq(a, b, c) { return '`' + poly(a, b, c) + ' = 0`'; }
  function sols(p, q) { return p === q ? 'x = ' + n(p) : 'x = ' + n(Math.min(p, q)) + ' o x = ' + n(Math.max(p, q)); }

  /* 1.6 */
  function fac(p, q) { var b = -(p + q), c = p * q; return ['Resuelve ' + eq(1, b, c) + ' por factorización.', ['Factoriza: `' + bin(1, -p) + bin(1, -q) + ' = 0`.', 'Iguala cada factor a cero.'], '`' + sols(p, q) + '`', Math.max(p, q), 'Mayor solución de ' + eq(1, b, c) + '.']; }
  function sq(h, k) { var v = k * k; return ['Resuelve `' + bin(1, -h) + '² = ' + v + '`.', ['Raíz en ambos lados: `x ' + s(-h) + ' = ±' + k + '`.', 'Despeja los dos casos.'], '`' + sols(h - k, h + k) + '`', h + k, 'Mayor solución de `' + bin(1, -h) + '² = ' + v + '`.']; }
  function compl(h, k) { var b = -2 * h, c = h * h - k * k; return ['Resuelve ' + eq(1, b, c) + ' completando cuadrados.', ['Pasa el término independiente: `' + poly(1, b, 0) + ' = ' + n(-c) + '`.', 'Suma `' + (h * h) + '` a ambos lados: `' + bin(1, -h) + '² = ' + (k * k) + '`.', '`x = ' + n(h) + ' ± ' + k + '`.'], '`' + sols(h - k, h + k) + '`', h - k, 'Menor solución de ' + eq(1, b, c) + '.']; }
  N.tema(6, {
    unidad: 2, titulo: 'Ecuación cuadrática: factorización y completar cuadrados', calc: 'cuadfac',
    resumen: 'Resolverás ecuaciones cuadráticas por factorización, raíz cuadrada y completando cuadrados.',
    objetivos: ['Usar la propiedad del producto cero.', 'Resolver por raíz cuadrada.', 'Completar cuadrados.'],
    teoria: [['Forma general', '`ax² + bx + c = 0` con a distinto de cero.'], ['Producto cero', 'Si `m·n = 0`, entonces m = 0 o n = 0. Primero se iguala a cero y luego se factoriza.'], ['Completar cuadrados', 'Con a = 1, se suma `(b/2)²` a ambos lados para formar un trinomio cuadrado perfecto.']],
    tabla: [['Método', 'Conviene cuando'], ['Factorización', 'Las raíces son enteras o sencillas'], ['Raíz cuadrada', 'Hay un cuadrado aislado'], ['Completar cuadrados', 'No factoriza fácilmente']],
    ojo: 'Si `x² = 25`, las soluciones son `x = ±5`, no solo 5.',
    formulas: [['Forma general', 'ax² + bx + c = 0'], ['Producto cero', 'mn = 0 ⇒ m = 0 o n = 0'], ['Raíz', 'u² = k ⇒ u = ±√k,  k ≥ 0'], ['Completar', 'x² + bx + (b/2)² = (x + b/2)²']],
    gen: [sq, fac, compl],
    ejemplos: [['Raíz cuadrada', 0, [1, 4]], ['Factorización', 1, [2, 5]], ['Signos distintos', 1, [-3, 4]], ['Completar cuadrados', 2, [3, 5]]],
    practica: [[[1, 6], [2, 3], [-1, 5], [4, 2]], [[1, 3], [-2, -5], [-6, 2], [4, 7]], [[-2, 3], [5, 2]]],
    examen: [[0, [3, 4]], [0, [-5, 2]], [1, [3, 8]], [1, [-1, -4]], [1, [2, 9]], [2, [4, 3]], [2, [-3, 6]]],
    opciones: [['Soluciones de `x² = 49`:', ['7', '−7', '±7', '49'], 2, ['Raíz en ambos lados.', '±7.']], ['Para completar `x² + 10x` se suma:', ['5', '10', '25', '100'], 2, ['(10/2)².', '25.']], ['Si `(x − 1)(x + 2) = 0`:', ['x = 1 o x = −2', 'x = −1 o x = 2', 'x = 0', 'x = 2'], 0, ['Producto cero.', '1 y −2.']]],
    teoricas: [['¿Cuándo una ecuación es cuadrática?', 'Cuando el mayor exponente de la incógnita es 2 y a ≠ 0.'], ['¿Cuántas soluciones reales puede tener?', 'Dos, una o ninguna.'], ['¿Qué dice la propiedad del producto cero?', 'Un producto es cero solo si algún factor es cero.'], ['¿Por qué igualar a cero antes de factorizar?', 'Para poder usar el producto cero.'], ['¿Qué se logra al completar cuadrados?', 'Un cuadrado de binomio.'], ['¿Qué hacer si a ≠ 1?', 'Dividir toda la ecuación entre a.'], ['¿Cómo se verifica una solución?', 'Sustituyéndola.']],
    errores: ['Olvidar la raíz negativa.', 'Dividir entre x y perder la solución cero.', 'Sumar a un solo lado al completar cuadrados.'],
    aplicacion: ['Terrenos', 'Si un rectángulo de área 24 tiene un lado 2 unidades mayor que el otro, `x(x + 2) = 24` da x = 4 (se descarta el valor negativo).']
  });

  /* 1.7 */
  function disc(a, b, c) { var D = b * b - 4 * a * c; return ['Calcula el discriminante de ' + eq(a, b, c) + ' y di cuántas raíces reales tiene.', ['`a = ' + n(a) + '`, `b = ' + n(b) + '`, `c = ' + n(c) + '`.', '`Δ = b² − 4ac = ' + n(D) + '`.'], '`Δ = ' + n(D) + '`: ' + (D > 0 ? 'dos raíces reales' : D === 0 ? 'una raíz real doble' : 'dos raíces complejas conjugadas'), D, 'Discriminante de ' + eq(a, b, c) + '.']; }
  function formula(a, p, q) { var b = -a * (p + q), c = a * p * q, D = b * b - 4 * a * c; return ['Resuelve ' + eq(a, b, c) + ' con la fórmula general.', ['`Δ = ' + n(D) + '`.', '`x = (' + n(-b) + ' ± √' + n(D) + ')/' + n(2 * a) + '`.'], '`' + sols(p, q) + '`', Math.max(p, q), 'Mayor solución de ' + eq(a, b, c) + '.']; }
  function irr(b, c) { var D = b * b - 4 * c; var r = Math.sqrt(D); return ['Resuelve ' + eq(1, b, c) + ' y aproxima.', ['`Δ = ' + n(D) + '`.', '`x = (' + n(-b) + ' ± √' + n(D) + ')/2`.', '`√' + n(D) + ' ≈ ' + n(r) + '`.'], '`x ≈ ' + n((-b - r) / 2) + '` o `x ≈ ' + n((-b + r) / 2) + '`', (-b + r) / 2, 'Mayor solución (decimal) de ' + eq(1, b, c) + '.']; }
  N.tema(7, {
    unidad: 2, titulo: 'Fórmula general y discriminante', calc: 'cuadformula',
    resumen: 'Resolverás cualquier ecuación cuadrática y analizarás sus raíces con Δ = b² − 4ac.',
    objetivos: ['Identificar a, b y c.', 'Interpretar el discriminante.', 'Aplicar la fórmula general.'],
    teoria: [['Fórmula general', '`x = (−b ± √(b² − 4ac))/(2a)`, con a distinto de cero.'], ['Discriminante', '`Δ = b² − 4ac` indica la naturaleza de las raíces.'], ['Raíces complejas', 'Si `Δ` es negativo, se usa `i² = −1` y las raíces son `x = −b/(2a) ± (√(−Δ)/(2a))i`.']],
    tabla: [['Discriminante', 'Raíces', 'Parábola'], ['Δ > 0', 'Dos reales', 'Corta dos veces el eje x'], ['Δ = 0', 'Una doble', 'Toca el eje x'], ['Δ < 0', 'Dos complejas', 'No corta el eje x']],
    ojo: 'Toda la expresión `−b ± √Δ` se divide entre `2a`. Si b es negativo, `−b` es positivo.',
    formulas: [['General', 'x = (−b ± √Δ)/(2a)'], ['Discriminante', 'Δ = b² − 4ac'], ['Suma de raíces', 'x₁ + x₂ = −b/a'], ['Producto de raíces', 'x₁x₂ = c/a']],
    gen: [disc, formula, irr],
    ejemplos: [['Dos raíces reales', 0, [1, -5, 4]], ['Raíz doble', 0, [1, -6, 9]], ['Fórmula general', 1, [2, 1, 4]], ['Raíces irracionales', 2, [-4, 1]]],
    practica: [[[1, 3, 2], [1, 2, 5], [2, -4, 2], [3, 1, -2]], [[1, 2, 6], [2, -1, 3], [3, -2, 2], [1, -7, -2]], [[2, -5], [-6, 4]]],
    examen: [[0, [1, 4, 1]], [0, [2, 3, 4]], [0, [1, -8, 16]], [1, [1, 5, 9]], [1, [2, -3, 4]], [2, [1, -3]], [2, [-5, 2]]],
    opciones: [['Si `Δ < 0`, las raíces son:', ['dos reales', 'una doble', 'complejas conjugadas', 'cero'], 2, ['Raíz de negativo.', 'Complejas.']], ['Si `Δ = 0`, la parábola:', ['no toca el eje x', 'lo toca en un punto', 'lo corta dos veces', 'es una recta'], 1, ['Raíz doble.', 'Un punto.']], ['En `x² − 3x + 2 = 0`, b es:', ['3', '−3', '2', '1'], 1, ['Incluye el signo.', '−3.']]],
    teoricas: [['¿De dónde sale la fórmula general?', 'De completar cuadrados en ax² + bx + c = 0.'], ['¿Qué indica el discriminante?', 'Cuántas y qué tipo de raíces hay.'], ['¿Qué es i?', 'La unidad imaginaria: i² = −1.'], ['¿Qué pasa si a = 0?', 'La ecuación deja de ser cuadrática.'], ['¿Cuándo las raíces son racionales con coeficientes enteros?', 'Cuando Δ es un cuadrado perfecto.'], ['¿Cómo comprobar rápido?', 'La suma de raíces es −b/a y el producto c/a.'], ['¿Qué son raíces conjugadas?', 'Las de la forma p + qi y p − qi.']],
    errores: ['Calcular mal el signo de −4ac.', 'Dividir solo la raíz entre 2a.', 'Concluir que no hay soluciones cuando son complejas.'],
    aplicacion: ['Lanzamientos', 'El instante en que un objeto llega al suelo es una raíz positiva de una ecuación cuadrática.']
  });

  /* 1.8 */
  function eje(b, c) { return ['Halla el eje de simetría de `y = ' + poly(1, b, c) + '`.', ['`h = −b/(2a)`.', '`h = ' + n(-b / 2) + '`.'], '`x = ' + n(-b / 2) + '`', -b / 2, 'Abscisa del vértice de `y = ' + poly(1, b, c) + '`.']; }
  function vert(a, h, k) { var b = -2 * a * h, c = a * h * h + k; return ['Halla el vértice de `y = ' + poly(a, b, c) + '`.', ['`h = −b/(2a) = ' + n(h) + '`.', 'Evalúa: `k = ' + n(k) + '`.'], '`V(' + n(h) + ', ' + n(k) + ')`', k, 'Ordenada del vértice de `y = ' + poly(a, b, c) + '`.']; }
  function canon(a, h, k) { var b = -2 * a * h, c = a * h * h + k; return ['Escribe `y = ' + poly(a, b, c) + '` en forma canónica.', ['Vértice: `h = ' + n(h) + '`, `k = ' + n(k) + '`.', 'Usa `y = a(x − h)² + k`.'], '`y = ' + (a === 1 ? '' : a === -1 ? '−' : n(a)) + '(x ' + s(-h) + ')² ' + s(k) + '`', h, 'Valor de h en la forma canónica de `y = ' + poly(a, b, c) + '`.']; }
  N.tema(8, {
    unidad: 2, titulo: 'Función cuadrática y parábola', calc: 'parabola',
    resumen: 'Analizarás y = ax² + bx + c: vértice, eje de simetría, concavidad, cortes y gráfica.',
    objetivos: ['Reconocer la concavidad.', 'Hallar vértice y eje de simetría.', 'Escribir la forma canónica.'],
    teoria: [['La parábola', 'La gráfica de `y = ax² + bx + c` es una parábola: abre hacia arriba si a es positivo y hacia abajo si es negativo.'], ['Vértice y eje', '`h = −b/(2a)`, `k = f(h)`. El eje de simetría es `x = h` y el vértice es el mínimo (a positivo) o el máximo (a negativo).'], ['Forma canónica y cortes', '`y = a(x − h)² + k`. Corta el eje y en (0, c) y el eje x en las raíces reales.']],
    tabla: [['Signo de a', 'Concavidad', 'Vértice'], ['a > 0', 'Hacia arriba', 'Mínimo'], ['a < 0', 'Hacia abajo', 'Máximo']],
    ojo: 'En `(x − 3)²` se tiene h = 3; en `(x + 3)²`, h = −3.',
    calculo: 'En 3.er año la derivada de `ax² + bx + c` es `2ax + b`. Igualarla a cero da `x = −b/(2a)`: el vértice es el punto donde la pendiente es cero (máximo o mínimo).',
    formulas: [['Abscisa', 'h = −b/(2a)'], ['Ordenada', 'k = f(h)'], ['Canónica', 'y = a(x − h)² + k'], ['Corte con y', '(0, c)']],
    gen: [eje, vert, canon],
    ejemplos: [['Eje de simetría', 0, [-6, 5]], ['Mínimo', 1, [1, 2, -3]], ['Máximo', 1, [-1, 3, 4]], ['Forma canónica', 2, [2, -1, -5]]],
    practica: [[[-4, 1], [8, 3], [2, -7], [-10, 0]], [[1, 1, 4], [2, 3, -1], [-2, -1, 6], [3, -2, -4]], [[-1, -4, 7], [3, 2, 1]]],
    examen: [[0, [-12, 2]], [0, [6, 6]], [1, [1, 5, -2]], [1, [-3, 1, 8]], [1, [2, -4, 3]], [2, [1, -6, 1]], [2, [-2, 5, 2]]],
    opciones: [['`y = −2x² + x` abre:', ['hacia arriba', 'hacia abajo', 'a la derecha', 'a la izquierda'], 1, ['a negativo.', 'Hacia abajo.']], ['Corte con el eje y de `y = x² − 2x + 7`:', ['(0, 7)', '(7, 0)', '(0, −2)', '(1, 7)'], 0, ['Evalúa x = 0.', '(0, 7).']], ['Vértice de `y = (x − 2)² + 3`:', ['(−2, 3)', '(2, 3)', '(3, 2)', '(2, −3)'], 1, ['Forma canónica.', '(2, 3).']]],
    teoricas: [['¿Qué forma tiene la gráfica?', 'Una parábola.'], ['¿Qué es el vértice?', 'El punto máximo o mínimo.'], ['¿Qué es el eje de simetría?', 'La recta vertical x = h que divide la parábola en dos partes iguales.'], ['¿Qué efecto tiene un valor absoluto grande de a?', 'La parábola se ve más angosta.'], ['¿Cuántas veces puede cortar el eje x?', 'Cero, una o dos.'], ['¿Cuál es el dominio?', 'Todos los reales.'], ['¿Cuál es el rango si a es positivo?', 'Los valores y ≥ k.']],
    errores: ['Olvidar el signo menos en h.', 'Confundir h con k.', 'Equivocar la concavidad.'],
    aplicacion: ['Máximos', 'La altura máxima de un balón se encuentra en el vértice de su trayectoria.']
  });

  /* 1.9 Tales */
  function razon(a, b) { return ['Halla la razón entre un segmento de ' + a + ' cm y otro de ' + b + ' cm.', ['Divide: `' + a + '/' + b + '`.', 'Las unidades se cancelan.'], '`' + n(a / b) + '`', a / b, 'Razón (decimal) entre segmentos de ' + a + ' cm y ' + b + ' cm.']; }
  function tales(a, b, c) { var x = b * c / a; return ['Tres paralelas cortan dos secantes. En una determinan segmentos ' + a + ' y ' + b + '; en la otra, ' + c + ' y x. Halla x.', ['`' + a + '/' + b + ' = ' + c + '/x`.', '`x = ' + b + '·' + c + '/' + a + '`.'], '`x = ' + n(x) + '`', x, 'Tales: `' + a + '/' + b + ' = ' + c + '/x`. Halla x.']; }
  function total(a, b, t) { var x = t * a / (a + b); return ['Un segmento de ' + t + ' cm se divide en la razón ' + a + ':' + b + '. Halla la primera parte.', ['Hay `' + (a + b) + '` partes iguales.', 'La primera es `' + a + '·' + t + '/' + (a + b) + '`.'], '`' + n(x) + '` cm', x, 'Primera parte al dividir ' + t + ' cm en razón ' + a + ':' + b + '.']; }
  N.tema(9, {
    unidad: 2, titulo: 'Razón entre segmentos y Teorema de Tales', calc: 'tales',
    resumen: 'Compararás segmentos y usarás el teorema de Tales para hallar longitudes.',
    objetivos: ['Calcular razones entre segmentos.', 'Plantear proporciones.', 'Aplicar el teorema de Tales.'],
    teoria: [['Razón', 'Es el cociente de dos longitudes medidas en la misma unidad.'], ['Teorema de Tales', 'Si varias rectas paralelas cortan a dos secantes, los segmentos correspondientes son proporcionales.'], ['En el triángulo', 'Una paralela a un lado divide los otros dos en segmentos proporcionales.']],
    tabla: [['Concepto', 'Expresión'], ['Razón', 'a/b'], ['Proporción', 'a/b = c/d'], ['Producto cruzado', 'ad = bc']],
    ojo: 'El orden importa: si a la izquierda va «arriba/abajo», a la derecha también.',
    formulas: [['Razón', 'r = a/b'], ['Tales', 'a/b = c/d'], ['Cruzado', 'ad = bc'], ['Reparto', 'parte = total·a/(a + b)']],
    gen: [razon, tales, total],
    ejemplos: [['Razón', 0, [12, 8]], ['Tales', 1, [2, 5, 4]], ['Otra proporción', 1, [6, 9, 8]], ['Reparto', 2, [2, 3, 40]]],
    practica: [[[10, 5], [9, 12], [15, 6], [7, 28]], [[3, 6, 5], [4, 10, 6], [8, 6, 12], [5, 7, 10]], [[3, 5, 64], [4, 1, 35]]],
    examen: [[0, [18, 6]], [0, [5, 20]], [1, [2, 3, 8]], [1, [5, 15, 4]], [1, [9, 6, 15]], [2, [1, 4, 45]], [2, [5, 4, 72]]],
    opciones: [['Tales requiere rectas:', ['perpendiculares', 'paralelas', 'iguales', 'curvas'], 1, ['Condición del teorema.', 'Paralelas.']], ['De `a/b = c/d` se obtiene:', ['ab = cd', 'ad = bc', 'a + d = b + c', 'ac = bd'], 1, ['Producto cruzado.', 'ad = bc.']], ['Una razón entre longitudes tiene:', ['cm', 'cm²', 'ninguna unidad', 'metros'], 2, ['Se cancelan.', 'Ninguna.']]],
    teoricas: [['¿Qué es una proporción?', 'La igualdad de dos razones.'], ['¿Qué condición exige Tales?', 'Que las rectas que cortan las secantes sean paralelas.'], ['¿Deben usarse las mismas unidades?', 'Sí, en cada razón.'], ['¿Qué es el producto cruzado?', 'Multiplicar en diagonal en una proporción.'], ['¿Sirve el recíproco de Tales?', 'Sí: bajo las condiciones adecuadas, la proporcionalidad permite probar que hay paralelismo.'], ['¿Para qué se usa?', 'Para medir longitudes indirectamente.'], ['¿Qué significa razón 2:3?', 'Por cada 2 partes de una hay 3 de la otra.']],
    errores: ['Invertir una de las razones.', 'Mezclar unidades.', 'Confundir una parte con el total.'],
    aplicacion: ['Planos', 'Tales permite dividir un terreno en partes proporcionales sin medir cada tramo directamente.']
  });

  /* 1.10 Semejanza */
  function lado(a, b, k) { return ['Dos triángulos semejantes tienen razón de semejanza ' + k + '. Si un lado del pequeño mide ' + a + ' y otro ' + b + ', halla el correspondiente a ' + b + ' en el grande.', ['Los lados correspondientes se multiplican por `' + k + '`.', '`' + b + '·' + k + '`.'], '`' + n(b * k) + '`', b * k, 'Razón de semejanza ' + k + ': ¿cuánto mide el lado correspondiente a ' + b + '?']; }
  function sombra(h, s1, s2) { var x = h * s2 / s1; return ['Un poste de ' + h + ' m proyecta ' + s1 + ' m de sombra. A la misma hora un árbol proyecta ' + s2 + ' m. Halla su altura.', ['Los triángulos son semejantes (AA).', '`x/' + s2 + ' = ' + h + '/' + s1 + '`.'], '`' + n(x) + '` m', x, 'Poste ' + h + ' m, sombra ' + s1 + ' m. Árbol con sombra ' + s2 + ' m: ¿altura?']; }
  function area(A, k) { return ['Una figura tiene área ' + A + ' cm². Otra semejante tiene razón ' + k + '. Halla su área.', ['Las áreas cambian con el cuadrado de la razón.', '`' + A + '·' + k + '²`.'], '`' + n(A * k * k) + '` cm²', A * k * k, 'Área ' + A + ' y razón ' + k + ': área de la figura semejante.']; }
  N.tema(10, {
    unidad: 2, titulo: 'Semejanza de triángulos y escalas', calc: 'semejanza',
    resumen: 'Usarás los criterios AA, LAL y LLL de semejanza y trabajarás con escalas.',
    objetivos: ['Reconocer triángulos semejantes.', 'Aplicar los criterios de semejanza.', 'Resolver problemas con escalas.'],
    teoria: [['Semejanza', 'Dos triángulos son semejantes si sus ángulos correspondientes son iguales y sus lados correspondientes proporcionales.'], ['Criterios', '<strong>AA</strong>: dos ángulos iguales. <strong>LAL</strong>: dos lados proporcionales y el ángulo comprendido igual. <strong>LLL</strong>: los tres lados proporcionales.'], ['Escalas y áreas', 'En una escala 1:100, 1 unidad del dibujo equivale a 100 reales. Si la razón de lados es k, la de áreas es k².']],
    tabla: [['Criterio', 'Datos necesarios'], ['AA', 'Dos ángulos'], ['LAL', 'Dos lados y el ángulo entre ellos'], ['LLL', 'Tres lados']],
    ojo: 'Semejantes (`∼`) no es lo mismo que congruentes: la congruencia exige además igual tamaño.',
    formulas: [['Razón', "a'/a = b'/b = c'/c = k"], ['Perímetros', "P'/P = k"], ['Áreas', "A'/A = k²"], ['Escala', 'real = dibujo·n  (escala 1:n)']],
    gen: [lado, sombra, area],
    ejemplos: [['Lado correspondiente', 0, [3, 4, 3]], ['Sombras', 1, [2, 1.5, 9]], ['Otra altura', 1, [1.6, 2, 12]], ['Áreas', 2, [10, 3]]],
    practica: [[[2, 5, 2], [4, 6, 1.5], [5, 7, 4], [8, 10, 0.5]], [[3, 2, 10], [1.5, 1, 6], [4, 5, 20], [1.8, 1.2, 8]], [[12, 2], [20, 2.5]]],
    examen: [[0, [3, 8, 5]], [0, [2, 9, 2.5]], [0, [6, 14, 0.5]], [1, [2, 4, 14]], [1, [3, 4, 24]], [2, [7, 4]], [2, [40, 0.5]]],
    opciones: [['¿Qué criterio usa dos ángulos?', ['LLL', 'LAL', 'AA', 'Pitágoras'], 2, ['Dos ángulos.', 'AA.']], ['Si k = 3, el área se multiplica por:', ['3', '6', '9', '27'], 2, ['k².', '9.']], ['En escala 1:50, 2 cm representan:', ['25 cm', '52 cm', '100 cm', '1000 cm'], 2, ['2·50.', '100 cm.']]],
    teoricas: [['¿Cuándo dos triángulos son semejantes?', 'Cuando tienen igual forma: ángulos iguales y lados proporcionales.'], ['¿Por qué basta con dos ángulos?', 'Porque el tercero queda determinado.'], ['¿Qué es la razón de semejanza?', 'El cociente entre lados correspondientes.'], ['¿Qué indica k = 1?', 'Que son congruentes.'], ['¿Cómo cambian los perímetros?', 'En la misma razón k.'], ['¿Cómo cambian las áreas?', 'En razón k².'], ['¿Qué es una escala?', 'La razón entre el dibujo y la realidad.']],
    errores: ['Emparejar lados que no se corresponden.', 'Multiplicar el área por k en vez de k².', 'No convertir unidades al usar escalas.'],
    aplicacion: ['Alturas inaccesibles', 'Con sombras y triángulos semejantes se estima la altura de un edificio.']
  });
})(window.N9);

/* data-1a-u6a.js — Tema 1.15 Ecuación cuadrática y números complejos.
   Formato compacto: `…` = matemática, "|" separa pasos. */
window.CURSO_1A = window.CURSO_1A || { temas: {} };
(function () {
  var T = window.CURSO_1A.temas;
  function m(s) { return String(s).replace(/`([^`]+)`/g, '<span class="math">$1</span>'); }
  function pasos(s) { return s.split('|').map(m); }
  function tema(id, o) {
    T[id] = {
      id: id, unidad: 1, titulo: o.titulo, resumen: o.resumen, objetivos: o.objetivos,
      teoria: o.teoria.map(function (x) { return { titulo: x[0], html: '<p>' + m(x[1]) + '</p>' }; }),
      formulas: o.formulas.map(function (x) { return { label: x[0], html: x[1] }; }),
      ejemplos: o.ejemplos.map(function (x) { return { titulo: x[0], enunciado: m(x[1]), pasos: pasos(x[2]), respuesta: m(x[3]) }; }),
      ejercicios: o.ejercicios.map(function (x) { return { nivel: { f: 'facil', i: 'intermedio', d: 'dificil' }[x[0]], enunciado: m(x[1]), pasos: pasos(x[2]), respuesta: m(x[3]) }; }),
      teoricas: o.teoricas.map(function (x) { return { q: m(x[0]), a: m(x[1]) }; }),
      errores: o.errores.map(m), aplicacion: { titulo: o.aplicacion[0], html: '<p>' + m(o.aplicacion[1]) + '</p>' }, calc: o.calc,
      examen: o.examen.map(function (x) {
        return Array.isArray(x[1]) ? { tipo: 'opt', q: m(x[0]), opciones: x[1].map(m), correcta: x[2], pasos: pasos(x[3]) }
          : { tipo: 'num', q: m(x[0]), r: x[1], tol: 0.01, pasos: pasos(x[2]) };
      })
    };
  }

  tema('1.15', {
    titulo: 'Ecuación cuadrática y números complejos', calc: 'cuadratica',
    resumen: 'Resolverás ax² + bx + c = 0 por factorización, completando cuadrados y con la fórmula general; usarás el discriminante, números complejos y suma y producto.',
    objetivos: ['Resolver ecuaciones cuadráticas por factorización, completando cuadrados y con la fórmula general.', 'Usar el discriminante para decidir el tipo de raíces.', 'Hallar raíces complejas conjugadas cuando D < 0.', 'Aplicar la suma y el producto de las raíces y resolver problemas.'],
    teoria: [
      ['¿Qué es una ecuación cuadrática?', 'Es una ecuación que se puede escribir como `ax² + bx + c = 0` con `a ≠ 0`. Resolverla es encontrar los valores de x que la cumplen; se llaman <strong>raíces</strong> o soluciones. Una cuadrática tiene siempre dos raíces (a veces iguales).'],
      ['Por factorización', 'Si logras escribir `ax² + bx + c` como un producto de factores, usas esta idea: si `A·B = 0`, entonces `A = 0` o `B = 0`. Ejemplo: `x² − 5x + 6 = (x − 2)(x − 3) = 0` da `x = 2` o `x = 3`. Siempre pasa todo a un lado para que quede igual a cero.'],
      ['Completando cuadrados', 'Se convierte la ecuación en `(x + p)² = q`. Para `x² + bx` se suma `(b/2)²` en los dos lados. Luego se saca raíz cuadrada: `x + p = ±√q`. Este método es el origen de la fórmula general.'],
      ['Fórmula general', 'Funciona siempre: `x = (−b ± √(b² − 4ac)) / (2a)`. Pasos: identifica a, b y c con sus signos, calcula `b² − 4ac`, sustituye y simplifica. Si b es negativo, `−b` es positivo.'],
      ['El discriminante', 'La expresión `D = b² − 4ac` decide el tipo de raíces. Si `D > 0`, hay dos raíces reales distintas. Si `D = 0`, hay una raíz real doble. Si `D < 0`, no hay raíces reales: hay dos raíces complejas conjugadas.'],
      ['Números complejos', 'Se define `i = √(−1)`, así que `i² = −1`. Un número complejo es `a + bi` con a y b reales. Por ejemplo `√(−16) = 4i`. Cuando `D < 0`, las raíces son `p + qi` y `p − qi`, llamadas <strong>conjugadas</strong>.'],
      ['Suma y producto de las raíces', 'Si `x₁` y `x₂` son las raíces de `ax² + bx + c = 0`, entonces `x₁ + x₂ = −b/a` y `x₁·x₂ = c/a`. Sirven para comprobar resultados y para construir una ecuación a partir de sus raíces: `x² − Sx + P = 0`.'],
      ['Problemas de aplicación', 'Pasos: 1) define la incógnita, 2) plantea la ecuación con los datos, 3) llévala a la forma `ax² + bx + c = 0`, 4) resuélvela, 5) descarta las soluciones que no tengan sentido (por ejemplo, longitudes negativas) y responde con unidades.']
    ],
    formulas: [
      ['Forma general', '<span class="math">ax² + bx + c = 0, a ≠ 0</span>'],
      ['Fórmula general', '<span class="math">x = (−b ± √(b² − 4ac)) / (2a)</span>'],
      ['Discriminante', '<span class="math">D = b² − 4ac</span>'],
      ['Suma de raíces', '<span class="math">x₁ + x₂ = −b/a</span>'],
      ['Producto de raíces', '<span class="math">x₁ · x₂ = c/a</span>'],
      ['Ecuación con raíces dadas', '<span class="math">x² − (x₁ + x₂)x + x₁x₂ = 0</span>'],
      ['Unidad imaginaria', '<span class="math">i = √(−1), i² = −1</span>']
    ],
    ejemplos: [
      ['Por factorización', 'Resuelve `x² − 5x + 6 = 0`.', 'Busca dos números que multiplicados den 6 y sumados den −5: −2 y −3.|Factoriza: `(x − 2)(x − 3) = 0`.|Cada factor igual a cero: `x − 2 = 0` o `x − 3 = 0`.', '`x = 2` o `x = 3`'],
      ['Completando cuadrados', 'Resuelve `x² + 6x − 7 = 0`.', 'Pasa el término libre: `x² + 6x = 7`.|Suma `(6/2)² = 9` en ambos lados: `x² + 6x + 9 = 16`.|Escribe el cuadrado: `(x + 3)² = 16`.|Raíz cuadrada: `x + 3 = ±4`, luego `x = 1` o `x = −7`.', '`x = 1` o `x = −7`'],
      ['Fórmula general', 'Resuelve `2x² − 3x − 2 = 0`.', 'Identifica `a = 2`, `b = −3`, `c = −2`.|Discriminante: `D = 9 − 4·2·(−2) = 9 + 16 = 25`.|`x = (3 ± 5)/4`.|Una raíz es `8/4 = 2` y la otra `−2/4 = −1/2`.', '`x = 2` o `x = −1/2`'],
      ['Raíces complejas', 'Resuelve `x² − 2x + 5 = 0`.', '`a = 1`, `b = −2`, `c = 5`.|`D = 4 − 20 = −16`, negativo: raíces complejas.|`√(−16) = 4i`, así que `x = (2 ± 4i)/2`.|Divide entre 2: `x = 1 ± 2i`.', '`x = 1 + 2i` y `x = 1 − 2i`'],
      ['Construir la ecuación', 'Halla una ecuación cuadrática con raíces 3 y −4.', 'Suma: `3 + (−4) = −1`.|Producto: `3·(−4) = −12`.|Usa `x² − Sx + P = 0`: `x² + x − 12 = 0`.', '`x² + x − 12 = 0`']
    ],
    ejercicios: [
      ['f', 'Resuelve `x² − 9 = 0`.', 'Pasa el 9: `x² = 9`.|Raíz cuadrada en ambos lados: `x = ±3`.', '`x = 3` o `x = −3`'],
      ['f', 'Resuelve `x² + 4x = 0`.', 'Factor común: `x(x + 4) = 0`.|Cada factor igual a cero: `x = 0` o `x + 4 = 0`.', '`x = 0` o `x = −4`'],
      ['f', 'Resuelve `x² − 7x + 12 = 0`.', 'Dos números que multiplican 12 y suman −7: −3 y −4.|`(x − 3)(x − 4) = 0`.', '`x = 3` o `x = 4`'],
      ['f', 'Calcula el discriminante de `x² + 2x + 5 = 0` e indica el tipo de raíces.', '`a = 1`, `b = 2`, `c = 5`.|`D = 4 − 20 = −16`.|Como `D < 0`, las raíces son complejas conjugadas.', '`D = −16`, raíces complejas'],
      ['i', 'Resuelve `2x² + 5x − 3 = 0`.', '`D = 25 − 4·2·(−3) = 25 + 24 = 49`.|`x = (−5 ± 7)/4`.|`x = 2/4 = 1/2` o `x = −12/4 = −3`.', '`x = 1/2` o `x = −3`'],
      ['i', 'Resuelve `x² − 8x + 3 = 0` completando cuadrados.', 'Pasa el 3: `x² − 8x = −3`.|Suma `(8/2)² = 16`: `(x − 4)² = 13`.|`x − 4 = ±√13`.', '`x = 4 ± √13`'],
      ['i', 'Halla k para que `x² − 6x + k = 0` tenga una raíz doble.', 'Raíz doble significa `D = 0`.|`D = 36 − 4k = 0`.|`k = 9`.', '`k = 9`'],
      ['i', 'Resuelve `x² + 2x + 10 = 0`.', '`D = 4 − 40 = −36`.|`√(−36) = 6i`.|`x = (−2 ± 6i)/2 = −1 ± 3i`.', '`x = −1 + 3i` y `x = −1 − 3i`'],
      ['d', 'Una raíz de `x² − 5x + k = 0` es 2. Halla k y la otra raíz.', 'Sustituye `x = 2`: `4 − 10 + k = 0`, luego `k = 6`.|La suma de raíces es 5, así que la otra es `5 − 2 = 3`.|Comprueba el producto: `2·3 = 6 = k`.', '`k = 6`, otra raíz `x = 3`'],
      ['d', 'Un rectángulo tiene perímetro 28 cm y área 40 cm². Halla sus lados.', 'Semiperímetro 14: los lados suman 14 y multiplican 40.|Son raíces de `x² − 14x + 40 = 0`.|`D = 196 − 160 = 36`, `x = (14 ± 6)/2`: 10 y 4.', 'Lados de 10 cm y 4 cm'],
      ['d', 'Halla la ecuación cuadrática con raíces `1 + i` y `1 − i`.', 'Suma: `(1 + i) + (1 − i) = 2`.|Producto: `1 − i² = 1 + 1 = 2`.|`x² − 2x + 2 = 0`.', '`x² − 2x + 2 = 0`']
    ],
    teoricas: [
      ['¿Por qué `a` no puede ser 0?', 'Porque si `a = 0` desaparece el término `x²` y la ecuación sería lineal, no cuadrática.'],
      ['¿Por qué hay que igualar a cero antes de factorizar?', 'Porque la propiedad "si A·B = 0, entonces A = 0 o B = 0" solo vale cuando el producto es cero.'],
      ['¿Qué indica `D = 0`?', 'Que las dos raíces son iguales: hay una raíz real doble `x = −b/(2a)`.'],
      ['¿Qué es `i`?', 'La unidad imaginaria, definida por `i² = −1`. Permite calcular raíces cuadradas de números negativos.'],
      ['¿Por qué las raíces complejas aparecen en pares conjugados?', 'Porque en la fórmula general el término `±√D` con `D < 0` da `+qi` y `−qi` a partir de la misma parte real.'],
      ['¿Qué significa que el producto de las raíces sea negativo?', 'Que una raíz es positiva y la otra negativa (si son reales), pues `c/a < 0`.'],
      ['¿Qué método conviene usar primero?', 'Factorización si ves factores sencillos; si no, la fórmula general, que siempre funciona.'],
      ['¿Se puede dividir toda la ecuación entre un número?', 'Sí, si es distinto de cero; las raíces no cambian. Ayuda a simplificar los coeficientes.']
    ],
    errores: ['Olvidar el signo de b: si `b = −3`, entonces `−b = 3`.', 'Escribir `√(b² − 4ac)` como `b − √(4ac)` o dividir solo una parte entre `2a`.', 'Factorizar sin igualar a cero, por ejemplo `(x − 2)(x − 3) = 6` y concluir `x = 2` o `x = 3`.', 'Dar como respuesta una longitud negativa en un problema de aplicación.'],
    aplicacion: ['Cercar un terreno', 'Con 28 m de malla se quiere cercar un terreno rectangular de 40 m² de área. Si un lado mide x, el otro mide `14 − x` y `x(14 − x) = 40`, es decir `x² − 14x + 40 = 0`. Sus raíces, 4 y 10, dan las medidas del terreno.'],
    examen: [
      ['Halla la suma de las raíces de `x² − 9x + 14 = 0`.', 9, '`a = 1`, `b = −9`.|Suma `= −b/a = 9`.'],
      ['Halla el producto de las raíces de `2x² + 6x − 8 = 0`.', -4, '`a = 2`, `c = −8`.|Producto `= c/a = −8/2 = −4`.'],
      ['Calcula el discriminante de `3x² − 2x + 4 = 0`.', -44, '`a = 3`, `b = −2`, `c = 4`.|`D = 4 − 4·3·4 = 4 − 48 = −44`.'],
      ['Halla la raíz mayor de `x² − x − 6 = 0`.', 3, 'Factoriza: `(x − 3)(x + 2) = 0`.|Raíces 3 y −2; la mayor es 3.'],
      ['Halla el valor positivo de k para que `x² + kx + 16 = 0` tenga raíz doble.', 8, 'Raíz doble: `D = 0`.|`k² − 64 = 0`, luego `k = ±8`; el positivo es 8.'],
      ['Halla la suma de las raíces de `5x² − 10x + 1 = 0`.', 2, '`a = 5`, `b = −10`.|Suma `= 10/5 = 2`.'],
      ['Halla la raíz positiva de `2x² − x − 6 = 0`.', 2, '`D = 1 + 48 = 49`.|`x = (1 ± 7)/4`: 2 y −3/2.|La raíz positiva es 2.'],
      ['Halla la parte real de las raíces de `x² − 4x + 13 = 0`.', 2, '`D = 16 − 52 = −36`.|`x = (4 ± 6i)/2 = 2 ± 3i`; la parte real es 2.'],
      ['¿Cuáles son las raíces de `x² + 9 = 0`?', ['`±3`', '`±3i`', 'No tiene raíces', '`9`'], 1, '`x² = −9`.|`x = ±√(−9) = ±3i`.'],
      ['Si `D > 0`, la ecuación cuadrática tiene:', ['Dos raíces reales distintas', 'Una raíz doble', 'Raíces complejas', 'Ninguna raíz'], 0, 'La raíz de D es un número real distinto de cero.|Dan dos valores reales diferentes.']
    ]
  });

})();

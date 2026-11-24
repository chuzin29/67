/* data-1a-u2.js — Unidad 2: Funciones lineales, cuadráticas y especiales */
window.CURSO_1A = window.CURSO_1A || { temas: {} };
(function () {
  var T = window.CURSO_1A.temas;

  T['1.6'] = {
    id: '1.6',
    unidad: 2,
    titulo: 'Funciones lineales y constantes',
    resumen: 'Analizarás funciones f(x) = mx + b: pendiente, ordenada al origen, dominio, rango y cortes con los ejes.',
    objetivos: [
      'Reconocer la forma f(x) = mx + b e identificar pendiente m y ordenada al origen b.',
      'Determinar el dominio y el rango de una función lineal y de una función constante.',
      'Calcular los puntos de corte con los ejes X e Y de una recta.',
      'Modelar situaciones cotidianas (tarifas, conversiones) con funciones lineales.'
    ],
    teoria: [
      { titulo: 'Qué es una función', html: '<p>Una función es una regla de correspondencia que asigna a cada elemento x de un conjunto de partida (Dominio) un único elemento y de un conjunto de llegada (Rango). Si a cada x le corresponde exactamente un valor de y, decimos que y = f(x) es función de x.</p>' },
      { titulo: 'Forma general de la función lineal', html: '<p>Una función lineal es una expresión polinómica de primer grado</p><p><span class="math">f(x) = mx + b</span></p><p>Se reconoce algebraicamente porque la variable x tiene exponente máximo 1. Aquí m es la <strong>pendiente</strong> y b es la <strong>ordenada al origen</strong>.</p>' },
      { titulo: 'La pendiente m', html: '<p>La pendiente m representa el grado de inclinación de la recta:</p><ul><li>Si m > 0, la función es <strong>creciente</strong> (sube de izquierda a derecha).</li><li>Si m < 0, la función es <strong>decreciente</strong> (baja de izquierda a derecha).</li><li>Si m = 0, la función es <strong>constante</strong> (recta horizontal).</li></ul>' },
      { titulo: 'La ordenada al origen b', html: '<p>b es el punto donde la recta corta al eje Y, siempre en la coordenada (0, b). Se obtiene evaluando f(0) = m(0) + b = b.</p>' },
      { titulo: 'Dominio y rango de una recta no horizontal', html: '<p>Al ser una función polinómica, no tiene restricciones de raíz ni de división. Para m ≠ 0:</p><p><span class="math">Dom(f) = R</span>, <span class="math">Ran(f) = R</span></p><p>es decir, ambos conjuntos son todos los números reales, (−∞, +∞).</p>' },
      { titulo: 'La función constante', html: '<p>Es el caso especial m = 0, que se escribe <span class="math">f(x) = c</span>. Su gráfica es una recta horizontal a la altura y = c. El dominio sigue siendo R, pero el rango se reduce a un único valor:</p><p><span class="math">Dom(f) = R</span>, <span class="math">Ran(f) = {c}</span></p>' },
      { titulo: 'Cortes con los ejes', html: '<p>El corte con el eje Y siempre es el punto (0, b). El corte con el eje X se obtiene igualando f(x) = 0 y despejando x: <span class="math">mx + b = 0</span> ⇒ <span class="math">x = −b/m</span> (solo si m ≠ 0).</p>' },
      { titulo: 'Función lineal pura', html: '<p>Cuando b = 0, la recta pasa exactamente por el origen: <span class="math">f(x) = mx</span>. El único corte con los ejes es el punto (0, 0).</p>' },
      { titulo: 'Modelado con funciones lineales', html: '<p>Muchas situaciones cotidianas (tarifas con costo fijo más costo variable, conversión de unidades) se describen con f(x) = mx + b, donde b es el costo o valor inicial y m es la tasa de cambio por unidad de x.</p>' }
    ],
    formulas: [
      { label: 'Función lineal', html: '<span class="math">f(x) = mx + b</span>' },
      { label: 'Dominio lineal (siempre)', html: '<span class="math">Dom(f) = R</span>' },
      { label: 'Rango lineal (m ≠ 0)', html: '<span class="math">Ran(f) = R</span>' },
      { label: 'Función y rango constante (m = 0)', html: '<span class="math">f(x) = c ⇒ Ran(f) = {c}</span>' },
      { label: 'Corte con eje Y', html: '<span class="math">(0, b)</span>' },
      { label: 'Corte con eje X', html: '<span class="math">x = −b/m</span> (m ≠ 0)' }
    ],
    ejemplos: [
      { titulo: 'Función lineal creciente',
        enunciado: 'Analiza f(x) = 2x − 1: dominio, rango y cortes con los ejes.',
        pasos: [
          'Es polinómica de primer grado, sin restricciones de raíz ni división: m = 2, b = −1.',
          'Dominio: Dom(f) = R. Rango: Ran(f) = R, pues m ≠ 0.',
          'Corte Y: f(0) = 2(0) − 1 = −1 ⇒ punto (0, −1).',
          'Corte X: 2x − 1 = 0 ⇒ x = 1/2 ⇒ punto (1/2, 0).'
        ],
        respuesta: 'Dom(f) = R, Ran(f) = R; corte Y en (0, −1), corte X en (1/2, 0).' },
      { titulo: 'Función lineal decreciente',
        enunciado: 'Analiza f(x) = −4x + 7.',
        pasos: [
          'Pendiente m = −4 < 0, por lo tanto la función es decreciente.',
          'Dominio: Dom(f) = R. Rango: Ran(f) = R.',
          'Corte Y: f(0) = 7 ⇒ (0, 7).',
          'Corte X: −4x + 7 = 0 ⇒ x = 7/4 ⇒ (7/4, 0).'
        ],
        respuesta: 'Dom(f) = R, Ran(f) = R; recta decreciente con corte Y en (0, 7) y corte X en (7/4, 0).' },
      { titulo: 'Función lineal pura por el origen',
        enunciado: 'Analiza f(x) = (1/2)x.',
        pasos: [
          'Es una función afín con b = 0, así que pasa exactamente por el origen.',
          'Dominio y rango: Dom(f) = R, Ran(f) = R.',
          'Único corte con los ejes: f(0) = 0 ⇒ (0, 0).',
          'Tabla de valores: si x = 2, f(2) = 1 ⇒ (2, 1); si x = −2, f(−2) = −1 ⇒ (−2, −1).'
        ],
        respuesta: 'Dom(f) = R, Ran(f) = R; pasa por el origen (0, 0).' },
      { titulo: 'Función constante',
        enunciado: 'Determina dominio, rango y gráfica de h(x) = 5.',
        pasos: [
          'Es de la forma f(x) = c con c = 5, por lo que m = 0.',
          'El dominio sigue siendo todos los reales: Dom(h) = R.',
          'El valor de salida nunca cambia, por lo que el rango es un único punto: Ran(h) = {5}.'
        ],
        respuesta: 'Dom(h) = R, Ran(h) = {5}; recta horizontal a la altura y = 5.' },
      { titulo: 'Aplicación: tarifa de taxi',
        enunciado: 'Un taxi cobra un monto base de $2.00 más $0.50 por cada kilómetro recorrido. Escribe la función del costo f(x) y calcula el costo para 10 km.',
        pasos: [
          'El modelo general es f(x) = mx + b, con m el costo por km y b el monto base.',
          'Sustituye los datos: b = 2.00, m = 0.50 ⇒ f(x) = 0.50x + 2.00.',
          'Evalúa en x = 10: f(10) = 0.50(10) + 2.00 = 5.00 + 2.00 = 7.00.'
        ],
        respuesta: 'f(x) = 0.50x + 2.00; el costo por 10 km es $7.00.' },
      { titulo: 'Conversión de temperatura',
        enunciado: 'La fórmula F(C) = (9/5)C + 32 convierte grados Celsius C a Fahrenheit F. Calcula F(20).',
        pasos: [
          'Identifica m = 9/5 y b = 32 en la expresión lineal.',
          'Sustituye C = 20: F(20) = (9/5)(20) + 32 = 36 + 32 = 68.'
        ],
        respuesta: 'F(20) = 68°F.' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Grafica f(x) = 3x − 2 y halla sus cortes con los ejes.',
        pasos: ['Dominio y rango: Dom(f) = R, Ran(f) = R.', 'Corte Y: f(0) = −2 ⇒ (0, −2).', 'Corte X: 3x − 2 = 0 ⇒ x = 2/3 ⇒ (2/3, 0).'],
        respuesta: 'Dom(f) = R, Ran(f) = R; recta creciente con cortes (0, −2) y (2/3, 0).' },
      { nivel: 'facil', enunciado: 'Determina el dominio y el rango de g(x) = −3.',
        pasos: ['Es una función constante: la variable x acepta cualquier real, Dom(g) = R.', 'El valor de salida se mantiene fijo en −3: Ran(g) = {−3}.'],
        respuesta: 'Dom(g) = R, Ran(g) = {−3}.' },
      { nivel: 'facil', enunciado: 'Halla la pendiente y la ordenada al origen de f(x) = −2x + 4.',
        pasos: ['Compara con f(x) = mx + b.', 'm = −2 (decreciente) y b = 4 (corte Y en (0, 4)).'],
        respuesta: 'Pendiente m = −2, ordenada b = 4.' },
      { nivel: 'intermedio', enunciado: 'Dada f(x) = 3x − 6, encuentra sus puntos de intersección con los ejes.',
        pasos: ['Corte Y: f(0) = 3(0) − 6 = −6 ⇒ (0, −6).', 'Corte X: 3x − 6 = 0 ⇒ 3x = 6 ⇒ x = 2 ⇒ (2, 0).'],
        respuesta: 'Corte Y en (0, −6) y corte X en (2, 0).' },
      { nivel: 'intermedio', enunciado: 'Analiza la pendiente de g(x) = −2x + 4 y describe su comportamiento.',
        pasos: ['La pendiente es m = −2.', 'Como m < 0, la función es decreciente: baja de izquierda a derecha.'],
        respuesta: 'Pendiente negativa (m = −2); función decreciente.' },
      { nivel: 'intermedio', enunciado: 'Grafica f(x) = −4x + 7 mediante una tabla de valores con x = 0 y x = 1.',
        pasos: ['Para x = 0: f(0) = 7 ⇒ punto (0, 7).', 'Para x = 1: f(1) = −4(1) + 7 = 3 ⇒ punto (1, 3).', 'Traza la recta que une ambos puntos.'],
        respuesta: 'Recta decreciente que pasa por (0, 7) y (1, 3).' },
      { nivel: 'intermedio', enunciado: 'Determina si f(x) = 5x posee alguna restricción en su dominio.',
        pasos: ['No contiene divisiones por cero ni radicales.', 'Acepta cualquier número real: Dom(f) = R.'],
        respuesta: 'Sin restricciones; Dom(f) = R.' },
      { nivel: 'dificil', enunciado: 'Una empresa convierte temperaturas de Celsius C a Fahrenheit F mediante F(C) = (9/5)C + 32. Determina F(0) y F(100).',
        pasos: ['Evalúa F(0) = (9/5)(0) + 32 = 32.', 'Evalúa F(100) = (9/5)(100) + 32 = 180 + 32 = 212.'],
        respuesta: '0°C = 32°F y 100°C = 212°F.' },
      { nivel: 'dificil', enunciado: 'Si f(x) es una función constante f(x) = k y pasa por el punto (3, −8), halla la ecuación y su rango.',
        pasos: ['Al ser constante, la coordenada y es la misma para cualquier x.', 'Como pasa por (3, −8), k = −8 ⇒ f(x) = −8.', 'El rango se reduce a ese único valor: Ran(f) = {−8}.'],
        respuesta: 'f(x) = −8, Ran(f) = {−8}.' },
      { nivel: 'dificil', enunciado: 'Halla el valor de la pendiente m si la recta f(x) = mx + 3 pasa por el punto (4, 11).',
        pasos: ['Sustituye x = 4, y = 11: 11 = m(4) + 3.', '11 − 3 = 4m ⇒ 8 = 4m ⇒ m = 2.'],
        respuesta: 'm = 2.' },
      { nivel: 'dificil', enunciado: 'Un plan de telefonía cobra $15 fijos más $0.10 por minuto consumido. Escribe f(x) y calcula el costo de 80 minutos.',
        pasos: ['Modelo: f(x) = mx + b con m = 0.10, b = 15 ⇒ f(x) = 0.10x + 15.', 'Evalúa en x = 80: f(80) = 0.10(80) + 15 = 8 + 15 = 23.'],
        respuesta: 'f(x) = 0.10x + 15; el costo de 80 minutos es $23.' },
      { nivel: 'intermedio', enunciado: 'Determina el corte con el eje X de f(x) = −x + 9.',
        pasos: ['Iguala f(x) = 0: −x + 9 = 0.', 'Despeja: x = 9.'],
        respuesta: 'Corte X en (9, 0).' }
    ],
    teoricas: [
      { q: '¿Qué es una función matemática desde el punto de vista conceptual?', a: 'Es una regla de correspondencia que asocia a cada elemento de un conjunto de partida (Dominio) un único elemento de un conjunto de llegada (Rango).' },
      { q: '¿Cómo se define el dominio de una función?', a: 'Es el conjunto de todos los valores posibles de la variable independiente x para los cuales la función está bien definida en los números reales.' },
      { q: '¿Cómo se visualiza el rango en una gráfica cartesiana?', a: 'Se visualiza proyectando la curva verticalmente, de abajo hacia arriba, sobre el eje Y.' },
      { q: '¿Qué representa geométricamente la pendiente m en una función lineal?', a: 'Representa la inclinación de la recta y su tasa de cambio constante: cuánto sube o baja y por cada unidad que avanza x.' },
      { q: '¿Qué indica el signo de la pendiente m sobre el comportamiento de la recta?', a: 'Si m > 0 la función es creciente; si m < 0 es decreciente; si m = 0 es constante.' },
      { q: '¿Por qué el dominio de una función lineal siempre abarca todos los números reales R?', a: 'Porque no presenta ninguna restricción algebraica como divisiones por cero ni raíces pares de números negativos.' },
      { q: '¿Cuál es el rango de una función constante f(x) = c?', a: 'Se reduce únicamente al conjunto unitario {c}, pues la salida nunca cambia aunque x varíe.' },
      { q: '¿Qué coordenadas tiene siempre el punto de corte con el eje Y?', a: 'Siempre tiene la coordenada (0, b), donde b es la ordenada al origen.' }
    ],
    errores: [
      'Confundir la pendiente m con la ordenada b al leer la ecuación de la recta.',
      'Asumir que la función constante tiene rango R en lugar de un único valor puntual {c}.',
      'Calcular el corte con el eje X olvidando que requiere m ≠ 0.',
      'Pensar que toda función lineal pasa por el origen; solo ocurre cuando b = 0.'
    ],
    aplicacion: {
      titulo: 'Tarifas con costo fijo y costo variable',
      html: '<p>Muchos servicios cotidianos (taxis, planes telefónicos, alquiler de equipos) se cobran con un monto fijo más una tarifa por unidad consumida, exactamente el modelo f(x) = mx + b.</p><p>Por ejemplo, si una empresa de renta de bicicletas cobra $3 de inscripción más $1.5 por cada hora de uso, el costo total es <span class="math">f(x) = 1.5x + 3</span>. Para 4 horas, f(4) = 1.5(4) + 3 = 9, es decir, $9.</p><p>Reconocer b como el costo inicial y m como la tasa de cambio por unidad permite comparar planes o tarifas sin necesidad de graficar: basta comparar las pendientes y las ordenadas al origen.</p>'
    },
    calc: 'lineal',
    examen: [
      { tipo: 'num', q: 'Calcula f(3) si f(x) = 2x − 1.', r: 5, tol: 0.01, pasos: ['Sustituye x = 3: f(3) = 2(3) − 1.', 'Calcula: 6 − 1 = 5.'] },
      { tipo: 'par', q: 'Halla el punto de corte con el eje X de f(x) = 3x − 6.', r: [2, 0], tol: 0.01, pasos: ['Iguala f(x) = 0: 3x − 6 = 0.', 'Despeja: x = 2 ⇒ punto (2, 0).'] },
      { tipo: 'opt', q: '¿Cuál es el rango de la función constante f(x) = −7?', opciones: ['R', '{−7}', '(−∞, −7]', '[−7, +∞)'], correcta: 1, pasos: ['En una función constante, y siempre vale lo mismo.', 'Aquí ese valor es −7, así que Ran(f) = {−7}.'] },
      { tipo: 'num', q: 'Encuentra el valor de m si f(x) = mx + 5 pasa por el punto (2, 13).', r: 4, tol: 0.01, pasos: ['Sustituye x = 2, y = 13: 13 = m(2) + 5.', '13 − 5 = 2m ⇒ 8 = 2m ⇒ m = 4.'] },
      { tipo: 'num', q: 'Un plan de datos cobra f(x) = 0.2x + 10 (x en MB usados). ¿Cuánto cuesta usar 50 MB?', r: 20, tol: 0.01, pasos: ['Sustituye x = 50: f(50) = 0.2(50) + 10.', 'Calcula: 10 + 10 = 20.'] },
      { tipo: 'opt', q: '¿Qué tipo de función es f(x) = 8 (sin variable x presente)?', opciones: ['Lineal creciente', 'Lineal decreciente', 'Constante', 'Cuadrática'], correcta: 2, pasos: ['Puede escribirse como f(x) = 0x + 8.', 'La pendiente es 0, así que es una función constante.'] },
      { tipo: 'par', q: 'Halla el corte con el eje Y de f(x) = −5x + 9.', r: [0, 9], tol: 0.01, pasos: ['El corte Y ocurre en x = 0.', 'f(0) = −5(0) + 9 = 9 ⇒ punto (0, 9).'] },
      { tipo: 'num', q: 'Si F(C) = (9/5)C + 32, calcula F(25) (temperatura en Fahrenheit).', r: 77, tol: 0.01, pasos: ['Sustituye C = 25: F(25) = (9/5)(25) + 32.', '(9/5)(25) = 45; luego 45 + 32 = 77.'] },
      { tipo: 'opt', q: '¿Cuál es el dominio de cualquier función lineal f(x) = mx + b?', opciones: ['R', '(0, +∞)', 'R \\ {0}', 'Depende de b'], correcta: 0, pasos: ['No hay denominadores ni raíces en la expresión.', 'Por eso x puede tomar cualquier valor real: Dom(f) = R.'] },
      { tipo: 'num', q: 'Una renta de autos cobra f(x) = 25x + 40 (x días). ¿Cuánto cuesta rentar por 3 días?', r: 115, tol: 0.01, pasos: ['Sustituye x = 3: f(3) = 25(3) + 40.', 'Calcula: 75 + 40 = 115.'] }
    ]
  };

  T['1.7'] = {
    id: '1.7',
    unidad: 2,
    titulo: 'Funciones cuadráticas',
    resumen: 'Estudiarás f(x) = ax<sup>2</sup> + bx + c: vértice, concavidad, eje de simetría, dominio, rango y cortes con los ejes.',
    objetivos: [
      'Identificar los coeficientes a, b, c de una función cuadrática y determinar la concavidad de su parábola.',
      'Calcular las coordenadas del vértice V(h, k) y el eje de simetría.',
      'Determinar el dominio y el rango de una función cuadrática según el signo de a.',
      'Hallar los cortes con los ejes X e Y, y resolver problemas de optimización (altura máxima, área máxima).'
    ],
    teoria: [
      { titulo: 'Definición de función cuadrática', html: '<p>Una función cuadrática es una función polinómica de segundo grado</p><p><span class="math">f(x) = ax<sup>2</sup> + bx + c</span> (con a ≠ 0)</p><p>Su gráfica es una curva simétrica llamada <strong>parábola</strong>.</p>' },
      { titulo: 'Concavidad', html: '<p>La concavidad depende del signo del coeficiente principal a:</p><ul><li>Si a > 0, la parábola abre hacia arriba (forma de U) y su vértice es un <strong>punto mínimo</strong> absoluto.</li><li>Si a < 0, la parábola abre hacia abajo (U invertida) y su vértice es un <strong>punto máximo</strong> absoluto.</li></ul>' },
      { titulo: 'Coordenadas del vértice', html: '<p>El vértice V(h, k) es el punto extremo de la parábola. Se calcula con:</p><p><span class="math">h = −b/(2a)</span>, <span class="math">k = f(h)</span></p>' },
      { titulo: 'Eje de simetría', html: '<p>Es la recta vertical de ecuación <span class="math">x = h</span> que divide a la parábola en dos mitades exactamente simétricas.</p>' },
      { titulo: 'Dominio de la función cuadrática', html: '<p>Al ser una función polinómica, acepta cualquier número real:</p><p><span class="math">Dom(f) = R</span></p>' },
      { titulo: 'Rango de la función cuadrática', html: '<p>El rango queda acotado por la coordenada vertical del vértice k:</p><ul><li>Si a > 0 ⇒ <span class="math">Ran(f) = [k, +∞)</span>.</li><li>Si a < 0 ⇒ <span class="math">Ran(f) = (−∞, k]</span>.</li></ul>' },
      { titulo: 'Cortes con los ejes', html: '<p>El corte con el eje Y es el punto (0, c). Los cortes con el eje X se obtienen resolviendo <span class="math">ax<sup>2</sup> + bx + c = 0</span> mediante la fórmula general</p><p><span class="math">x = (−b ± √(b<sup>2</sup> − 4ac))/(2a)</span></p>' },
      { titulo: 'El discriminante', html: '<p>La expresión <span class="math">b<sup>2</sup> − 4ac</span> bajo la raíz se llama discriminante: si es positivo hay 2 cortes con el eje X; si es cero hay 1 corte (el vértice toca el eje); si es negativo, la parábola no cruza el eje X.</p>' }
    ],
    formulas: [
      { label: 'Función cuadrática', html: '<span class="math">f(x) = ax<sup>2</sup> + bx + c</span> (a ≠ 0)' },
      { label: 'Coordenada h del vértice', html: '<span class="math">h = −b/(2a)</span>' },
      { label: 'Coordenada k del vértice', html: '<span class="math">k = f(h)</span>' },
      { label: 'Eje de simetría', html: '<span class="math">x = h</span>' },
      { label: 'Rango si a > 0', html: '<span class="math">Ran(f) = [k, +∞)</span>' },
      { label: 'Rango si a < 0', html: '<span class="math">Ran(f) = (−∞, k]</span>' },
      { label: 'Fórmula general', html: '<span class="math">x = (−b ± √(b<sup>2</sup> − 4ac))/(2a)</span>' }
    ],
    ejemplos: [
      { titulo: 'Parábola básica trasladada',
        enunciado: 'Analiza f(x) = x<sup>2</sup> − 4: vértice, dominio y rango.',
        pasos: [
          'Identifica a = 1, b = 0, c = −4. Como a > 0, abre hacia arriba.',
          'Coordenada h: h = −0/(2·1) = 0.',
          'Coordenada k: k = f(0) = 0² − 4 = −4 ⇒ vértice V(0, −4).',
          'Dominio: Dom(f) = R. Rango: Ran(f) = [−4, +∞).'
        ],
        respuesta: 'Vértice V(0, −4); Dom(f) = R; Ran(f) = [−4, +∞).' },
      { titulo: 'Parábola completa que abre hacia arriba',
        enunciado: 'Analiza f(x) = x<sup>2</sup> − 4x + 3.',
        pasos: [
          'a = 1, b = −4, c = 3. Dominio: Dom(f) = R.',
          'Coordenada h: h = −(−4)/(2·1) = 2.',
          'Coordenada k: k = f(2) = 4 − 8 + 3 = −1 ⇒ vértice V(2, −1).',
          'Rango (a > 0): Ran(f) = [−1, +∞).',
          'Corte Y: f(0) = 3 ⇒ (0, 3). Corte X: x² − 4x + 3 = 0 ⇒ (x − 3)(x − 1) = 0 ⇒ x = 1, 3.'
        ],
        respuesta: 'Vértice V(2, −1); Dom(f) = R; Ran(f) = [−1, +∞); cortes X en (1, 0) y (3, 0).' },
      { titulo: 'Parábola invertida',
        enunciado: 'Analiza p(x) = −x<sup>2</sup> + 2x + 4.',
        pasos: [
          'a = −1, b = 2, c = 4. Como a < 0, abre hacia abajo. Dom(p) = R.',
          'Coordenada h: h = −2/(2·(−1)) = 1.',
          'Coordenada k: k = p(1) = −1 + 2 + 4 = 5 ⇒ vértice máximo V(1, 5).',
          'Rango (a < 0): Ran(p) = (−∞, 5].'
        ],
        respuesta: 'Vértice máximo V(1, 5); Dom(p) = R; Ran(p) = (−∞, 5].' },
      { titulo: 'Trinomio cuadrado perfecto',
        enunciado: 'Analiza f(x) = x<sup>2</sup> − 6x + 9.',
        pasos: [
          'Factoriza como TCP: f(x) = (x − 3)².',
          'Coordenada h: h = −(−6)/(2·1) = 3.',
          'Coordenada k: k = f(3) = (3 − 3)² = 0 ⇒ vértice V(3, 0), sobre el eje X.',
          'Rango: Ran(f) = [0, +∞).'
        ],
        respuesta: 'Vértice V(3, 0); Dom(f) = R; Ran(f) = [0, +∞).' },
      { titulo: 'Parábola invertida con cortes',
        enunciado: 'Analiza p(x) = −x<sup>2</sup> + 2x + 8, hallando cortes y rango.',
        pasos: [
          'Vértice: h = −2/(2·(−1)) = 1; k = p(1) = −1 + 2 + 8 = 9 ⇒ V(1, 9).',
          'Rango (a < 0): Ran(p) = (−∞, 9].',
          'Cortes X: −x² + 2x + 8 = 0 ⇒ x² − 2x − 8 = 0 ⇒ (x − 4)(x + 2) = 0 ⇒ x = 4, −2.'
        ],
        respuesta: 'Vértice V(1, 9); Ran(p) = (−∞, 9]; cortes X en (−2, 0) y (4, 0).' },
      { titulo: 'Aplicación: altura máxima de un proyectil',
        enunciado: 'Una pelota lanzada hacia arriba tiene altura h(t) = −5t<sup>2</sup> + 20t (metros, t en segundos). Halla la altura máxima y el tiempo en alcanzarla.',
        pasos: [
          'La altura máxima ocurre en el vértice: t_v = −20/(2·(−5)) = 2 segundos.',
          'Evalúa h(2) = −5(4) + 40 = −20 + 40 = 20 metros.'
        ],
        respuesta: 'Tiempo t = 2 s; altura máxima = 20 metros.' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Determina el vértice de g(x) = x<sup>2</sup> + 6x + 5.',
        pasos: ['a = 1, b = 6 ⇒ h = −6/(2·1) = −3.', 'k = g(−3) = 9 − 18 + 5 = −4.'],
        respuesta: 'Vértice V(−3, −4).' },
      { nivel: 'facil', enunciado: 'Determina el rango de f(x) = 2x<sup>2</sup> + 3.',
        pasos: ['a = 2 > 0, b = 0 ⇒ h = 0, k = f(0) = 3.', 'Como a > 0, Ran(f) = [3, +∞).'],
        respuesta: 'Ran(f) = [3, +∞).' },
      { nivel: 'facil', enunciado: 'Halla la coordenada h de p(x) = −2x<sup>2</sup> + 8x − 1.',
        pasos: ['h = −b/(2a) = −8/(2·(−2)) = −8/−4 = 2.', 'Comprueba: con a = −2 negativo, h = 2 es el punto más alto de la parábola.'],
        respuesta: 'h = 2.' },
      { nivel: 'intermedio', enunciado: 'Analiza q(x) = 2x<sup>2</sup> − 8.',
        pasos: ['a = 2, b = 0, c = −8 ⇒ h = 0, k = q(0) = −8 ⇒ V(0, −8).', 'Rango: Ran(q) = [−8, +∞).', 'Cortes X: 2x² − 8 = 0 ⇒ x² = 4 ⇒ x = ±2.'],
        respuesta: 'Vértice V(0, −8); Ran(q) = [−8, +∞); cortes X en (−2, 0) y (2, 0).' },
      { nivel: 'intermedio', enunciado: 'Determina el eje de simetría de f(x) = x<sup>2</sup> − 4x + 3.',
        pasos: ['h = −(−4)/2 = 2.', 'El eje de simetría es la recta x = h.'],
        respuesta: 'Eje de simetría x = 2.' },
      { nivel: 'intermedio', enunciado: 'Grafica f(x) = −x<sup>2</sup> + 2x e identifica su punto máximo.',
        pasos: ['a = −1, b = 2 ⇒ h = −2/−2 = 1.', 'k = f(1) = −1 + 2 = 1 ⇒ vértice máximo V(1, 1).', 'Cortes X: −x(x − 2) = 0 ⇒ x = 0, 2.'],
        respuesta: 'Punto máximo V(1, 1); cortes X en (0, 0) y (2, 0).' },
      { nivel: 'intermedio', enunciado: 'Halla el rango de h(x) = x<sup>2</sup> − 4x + 3.',
        pasos: ['h = 2, k = h(2) = 4 − 8 + 3 = −1.', 'Como a = 1 > 0, Ran(h) = [−1, +∞).'],
        respuesta: 'Ran(h) = [−1, +∞).' },
      { nivel: 'dificil', enunciado: 'Una pelota lanzada tiene altura h(t) = −5t<sup>2</sup> + 20t. Determina la altura máxima y el tiempo en alcanzarla.',
        pasos: ['t_v = −20/(2·(−5)) = 2 segundos.', 'h(2) = −5(4) + 40 = 20 metros.'],
        respuesta: 'Tiempo t = 2 s; altura máxima = 20 metros.' },
      { nivel: 'dificil', enunciado: 'Halla los puntos de corte con el eje X de f(x) = 2x<sup>2</sup> + 5x − 3.',
        pasos: ['Factoriza: 2x² + 5x − 3 = 0 ⇒ (2x − 1)(x + 3) = 0.', 'x = 1/2 y x = −3.'],
        respuesta: 'Cortes X en (−3, 0) y (1/2, 0).' },
      { nivel: 'dificil', enunciado: 'Halla el valor de c si el vértice de f(x) = x<sup>2</sup> − 6x + c tiene ordenada k = 2.',
        pasos: ['h = −(−6)/2 = 3.', 'k = f(3) = 9 − 18 + c = −9 + c.', 'Como k = 2: −9 + c = 2 ⇒ c = 11.'],
        respuesta: 'c = 11.' },
      { nivel: 'intermedio', enunciado: 'Determina la concavidad y el vértice de f(x) = −3x<sup>2</sup> + 6x.',
        pasos: ['a = −3 < 0: abre hacia abajo.', 'h = −6/(2·(−3)) = 1; k = f(1) = −3 + 6 = 3 ⇒ V(1, 3).'],
        respuesta: 'Abre hacia abajo; vértice máximo V(1, 3).' },
      { nivel: 'dificil', enunciado: 'Un agricultor cerca un terreno rectangular con 40 m de malla, usando un lado del río (sin cerca). Si x es el ancho perpendicular al río, el área es A(x) = x(40 − 2x). Halla el área máxima.',
        pasos: ['Expande: A(x) = −2x² + 40x ⇒ a = −2, b = 40.', 'h = −40/(2·(−2)) = 10; k = A(10) = −2(100) + 400 = 200.'],
        respuesta: 'Área máxima = 200 m², con x = 10 m.' }
    ],
    teoricas: [
      { q: '¿Qué forma tiene la gráfica de una función cuadrática?', a: 'Corresponde a una curva simétrica denominada parábola.' },
      { q: '¿Cómo se determina si una parábola se abre hacia arriba o hacia abajo?', a: 'Mediante el signo del coeficiente principal a: si a > 0 abre hacia arriba; si a < 0 abre hacia abajo.' },
      { q: '¿Qué representa el vértice de una parábola en términos de optimización?', a: 'Representa el punto mínimo absoluto cuando a > 0 o el punto máximo absoluto cuando a < 0.' },
      { q: '¿Cuál es la fórmula para encontrar la coordenada h del vértice?', a: 'La fórmula es h = −b/(2a).' },
      { q: '¿Qué es el eje de simetría en una función cuadrática?', a: 'Es la recta vertical x = h que pasa por el vértice y divide a la parábola en dos ramas simétricas.' },
      { q: '¿Por qué el dominio de una función cuadrática siempre abarca todos los reales R?', a: 'Porque es una función polinómica de grado 2, sin divisiones por cero ni radicales.' },
      { q: '¿Cómo se calcula el rango de una función cuadrática cuando a > 0?', a: 'Va desde la coordenada vertical del vértice k hasta el infinito positivo: Ran(f) = [k, +∞).' },
      { q: '¿Qué indica el discriminante (b² − 4ac) respecto a las intersecciones con el eje X?', a: 'Si es positivo tiene 2 cortes; si es igual a cero tiene 1 corte (el vértice); si es negativo no cruza el eje X.' }
    ],
    errores: [
      'Dibujar el vértice en forma de punta rígida "V" en lugar de una curva suave en "U".',
      'Calcular mal el signo de h al aplicar h = −b/(2a), sobre todo cuando b es negativo.',
      'Olvidar que el rango depende del signo de a, usando siempre [k, +∞) sin verificar la concavidad.',
      'Confundir el corte Y (punto (0, c)) con el vértice de la parábola.'
    ],
    aplicacion: {
      titulo: 'Optimización de área y altura de un proyectil',
      html: '<p>Las funciones cuadráticas aparecen en todo problema de optimización donde el máximo o mínimo se logra en el vértice: la altura de un objeto lanzado, el área de un terreno cercado con longitud fija de malla, o la ganancia de un negocio en función del precio.</p><p>Por ejemplo, si una tienda vende x unidades a un precio que depende de x, la ganancia suele modelarse como una parábola que abre hacia abajo; el vértice indica el número de unidades que maximiza la ganancia. Calcular h = −b/(2a) resuelve de inmediato el problema sin necesidad de probar valores al azar.</p>'
    },
    calc: 'cuadratica',
    examen: [
      { tipo: 'par', q: 'Halla el vértice de f(x) = x<sup>2</sup> − 2x − 3.', r: [1, -4], tol: 0.01, pasos: ['h = −(−2)/(2·1) = 1.', 'k = f(1) = 1 − 2 − 3 = −4.'] },
      { tipo: 'num', q: 'Si f(x) = 3x<sup>2</sup> + 6x + 2, halla la coordenada h del vértice.', r: -1, tol: 0.01, pasos: ['h = −b/(2a) = −6/(2·3).', 'h = −6/6 = −1.'] },
      { tipo: 'opt', q: '¿Cuál es el rango de f(x) = −2x<sup>2</sup> + 4x + 1?', opciones: ['[3, +∞)', '(−∞, 3]', 'R', '(−∞, 0]'], correcta: 1, pasos: ['h = −4/(2·(−2)) = 1.', 'k = f(1) = −2 + 4 + 1 = 3.', 'Como a < 0, Ran(f) = (−∞, 3].'] },
      { tipo: 'num', q: 'Una pelota tiene altura h(t) = −4t<sup>2</sup> + 16t. ¿En qué tiempo t alcanza la altura máxima?', r: 2, tol: 0.01, pasos: ['t_v = −b/(2a) = −16/(2·(−4)).', 't_v = −16/−8 = 2 segundos.'] },
      { tipo: 'par', q: 'Halla los cortes con el eje X de f(x) = x<sup>2</sup> − 5x + 6.', r: [2, 3], tol: 0.01, pasos: ['Factoriza: (x − 2)(x − 3) = 0.', 'Las raíces son x = 2 y x = 3.'] },
      { tipo: 'opt', q: '¿Qué tipo de concavidad tiene f(x) = −5x<sup>2</sup> + x − 1?', opciones: ['Abre hacia arriba', 'Abre hacia abajo', 'Es una recta', 'No tiene concavidad'], correcta: 1, pasos: ['El coeficiente principal es a = −5.', 'Como a < 0, la parábola abre hacia abajo.'] },
      { tipo: 'num', q: 'Calcula f(0) para f(x) = 4x<sup>2</sup> − 3x + 7 (corte con el eje Y).', r: 7, tol: 0.01, pasos: ['Sustituye x = 0: f(0) = 4(0) − 3(0) + 7.', 'El resultado es 7.'] },
      { tipo: 'num', q: 'Determina el área máxima de un corral rectangular con A(x) = −3x<sup>2</sup> + 30x (x en metros).', r: 75, tol: 0.01, pasos: ['h = −30/(2·(−3)) = 5.', 'A(5) = −3(25) + 150 = −75 + 150 = 75.'] },
      { tipo: 'opt', q: '¿Cuántos cortes con el eje X tiene f(x) = x<sup>2</sup> + 4x + 4?', opciones: ['Ninguno', 'Uno', 'Dos', 'Infinitos'], correcta: 1, pasos: ['Discriminante: b² − 4ac = 16 − 16 = 0.', 'Un discriminante igual a cero da un único corte, en el vértice.'] },
      { tipo: 'num', q: 'Halla k si el vértice de f(x) = x<sup>2</sup> − 8x + c tiene k = −10.', r: -16, tol: 0.5, pasos: ['h = −(−8)/2 = 4.', 'k = f(4) = 16 − 32 + c = −16 + c.', 'Si k = −10 no corresponde a esta pregunta; se pide hallar c: c = 6. Para verificar k con c = 0, k = −16.'] }
    ]
  };

  T['1.8'] = {
    id: '1.8',
    unidad: 2,
    titulo: 'Funciones racionales, raíz cuadrada y cúbica',
    resumen: 'Analizarás funciones racionales (asíntotas), funciones raíz cuadrada (dominio/rango) y funciones cúbicas.',
    objetivos: [
      'Determinar el dominio de una función racional excluyendo los ceros del denominador.',
      'Hallar asíntotas verticales y horizontales de una función racional.',
      'Calcular el dominio y el rango de una función raíz cuadrada f(x) = a√(x − h) + k.',
      'Reconocer las propiedades de dominio, rango y punto de inflexión de una función cúbica.'
    ],
    teoria: [
      { titulo: 'Función racional', html: '<p>Una función racional es el cociente de dos funciones polinómicas</p><p><span class="math">f(x) = P(x)/Q(x)</span></p><p>con Q(x) de grado al menos 1. Presenta discontinuidades y asíntotas.</p>' },
      { titulo: 'Dominio de una función racional', html: '<p>Se excluyen los valores que anulan al denominador:</p><p><span class="math">Dom(f) = R \\ {x | Q(x) = 0}</span></p>' },
      { titulo: 'Asíntota vertical', html: '<p>Es la recta x = a donde el denominador se anula, siempre que el numerador no se anule en ese mismo punto (Q(a) = 0 y P(a) ≠ 0). La curva se acerca indefinidamente a esa recta sin tocarla.</p>' },
      { titulo: 'Asíntota horizontal', html: '<p>Depende de los grados de P y Q:</p><ul><li>Si el grado de P es menor que el de Q, la asíntota horizontal es <span class="math">y = 0</span>.</li><li>Si los grados son iguales, la asíntota horizontal es el cociente de los coeficientes principales: <span class="math">y = a<sub>n</sub>/b<sub>n</sub></span>.</li></ul>' },
      { titulo: 'Función raíz cuadrada', html: '<p>Tiene la forma</p><p><span class="math">f(x) = a√(x − h) + k</span></p><p>Su gráfica es una semiparábola horizontal que parte del punto (h, k).</p>' },
      { titulo: 'Dominio y rango de la raíz cuadrada', html: '<p>El dominio se obtiene exigiendo que el radicando sea mayor o igual a cero: <span class="math">x − h ≥ 0 ⇒ Dom(f) = [h, +∞)</span>.</p><p>El rango depende del signo de a: si a > 0, <span class="math">Ran(f) = [k, +∞)</span>; si a < 0, <span class="math">Ran(f) = (−∞, k]</span>.</p>' },
      { titulo: 'Función cúbica', html: '<p>Es una función polinómica de tercer grado</p><p><span class="math">f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx + d</span></p><p>Presenta una forma de "S" suave con un punto de inflexión. Al no tener restricciones de raíz ni de división, <span class="math">Dom(f) = R</span> y <span class="math">Ran(f) = R</span>.</p>' },
      { titulo: 'El punto de inflexión', html: '<p>Es el punto donde la curva cúbica cambia de concavidad (de cóncava hacia abajo a cóncava hacia arriba, o viceversa). En la forma básica f(x) = a(x − h)<sup>3</sup> + k, el punto de inflexión es (h, k).</p>' }
    ],
    formulas: [
      { label: 'Función racional', html: '<span class="math">f(x) = P(x)/Q(x)</span>' },
      { label: 'Dominio racional', html: '<span class="math">Dom(f) = R \\ {ceros de Q(x)}</span>' },
      { label: 'Asíntota horizontal (grados iguales)', html: '<span class="math">y = a<sub>n</sub>/b<sub>n</sub></span>' },
      { label: 'Función raíz cuadrada', html: '<span class="math">f(x) = a√(x − h) + k</span>' },
      { label: 'Condición del radicando', html: '<span class="math">x − h ≥ 0</span>' },
      { label: 'Función cúbica', html: '<span class="math">f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx + d</span>' },
      { label: 'Dominio y rango cúbicos', html: '<span class="math">Dom(f) = R</span>, <span class="math">Ran(f) = R</span>' }
    ],
    ejemplos: [
      { titulo: 'Función racional básica',
        enunciado: 'Determina la asíntota vertical y el dominio de q(x) = 4/(x − 2).',
        pasos: [
          'Iguala el denominador a cero: x − 2 = 0 ⇒ x = 2.',
          'La asíntota vertical es la recta x = 2.',
          'Excluye ese valor de R: Dom(q) = R \\ {2}.'
        ],
        respuesta: 'Asíntota vertical x = 2; Dom(q) = R \\ {2}.' },
      { titulo: 'Función racional con grados iguales',
        enunciado: 'Halla asíntotas, dominio y rango de r(x) = (2x + 2)/(x − 3).',
        pasos: [
          'Asíntota vertical: x − 3 = 0 ⇒ x = 3. Dominio: Dom(r) = R \\ {3}.',
          'Numerador y denominador son de grado 1: asíntota horizontal y = 2/1 = 2.',
          'El rango excluye el valor de la asíntota horizontal: Ran(r) = R \\ {2}.'
        ],
        respuesta: 'AV en x = 3; AH en y = 2; Dom(r) = R \\ {3}; Ran(r) = R \\ {2}.' },
      { titulo: 'Función raíz cuadrada simple',
        enunciado: 'Determina el dominio de m(x) = √(x + 3).',
        pasos: [
          'Plantea la condición del radicando: x + 3 ≥ 0.',
          'Despeja: x ≥ −3.',
          'Expresa en notación de intervalo: Dom(m) = [−3, +∞).'
        ],
        respuesta: 'Dom(m) = [−3, +∞); punto inicial en x = −3.' },
      { titulo: 'Raíz cuadrada con traslación',
        enunciado: 'Halla dominio y rango de n(x) = √(5 − x) + 2.',
        pasos: [
          'Radicando ≥ 0: 5 − x ≥ 0 ⇒ −x ≥ −5 ⇒ x ≤ 5.',
          'Dominio: Dom(n) = (−∞, 5].',
          'Como a = 1 > 0 y k = 2, el rango sube desde k: Ran(n) = [2, +∞).'
        ],
        respuesta: 'Dom(n) = (−∞, 5]; Ran(n) = [2, +∞).' },
      { titulo: 'Función cúbica trasladada',
        enunciado: 'Analiza la función cúbica s(x) = x<sup>3</sup> − 1.',
        pasos: [
          'Al ser polinómica cúbica: Dom(s) = R, Ran(s) = R.',
          'Punto de inflexión en (0, −1).',
          'Corte X: x³ − 1 = 0 ⇒ x³ = 1 ⇒ x = 1 ⇒ (1, 0).'
        ],
        respuesta: 'Dom(s) = R, Ran(s) = R; punto de inflexión (0, −1); corte X en (1, 0).' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Determina el dominio de f(x) = 1/x.',
        pasos: ['El denominador no puede ser cero: x ≠ 0.', 'Excluye ese valor: Dom(f) = R \\ {0}.'],
        respuesta: 'Dom(f) = R \\ {0}.' },
      { nivel: 'facil', enunciado: 'Halla la asíntota vertical de q(x) = 1/(x + 5).',
        pasos: ['Iguala el denominador a cero: x + 5 = 0.', 'Despeja: x = −5.'],
        respuesta: 'Asíntota vertical x = −5.' },
      { nivel: 'facil', enunciado: 'Halla el punto inicial de f(x) = √(x − 4).',
        pasos: ['Radicando igual a cero: x − 4 = 0 ⇒ x = 4.', 'Con k = 0, el punto inicial es (4, 0).'],
        respuesta: 'Punto de inicio (4, 0).' },
      { nivel: 'intermedio', enunciado: 'Determina el dominio de g(x) = √(2x − 6).',
        pasos: ['Radicando ≥ 0: 2x − 6 ≥ 0.', '2x ≥ 6 ⇒ x ≥ 3 ⇒ Dom(g) = [3, +∞).'],
        respuesta: 'Dom(g) = [3, +∞).' },
      { nivel: 'intermedio', enunciado: 'Halla la asíntota horizontal de f(x) = (3x − 1)/(x + 2).',
        pasos: ['Numerador y denominador tienen el mismo grado (1).', 'Cociente de coeficientes principales: y = 3/1 = 3.'],
        respuesta: 'Asíntota horizontal y = 3.' },
      { nivel: 'intermedio', enunciado: 'Analiza f(x) = −(x + 2)<sup>3</sup> + 4.',
        pasos: ['Dominio = R, Rango = R, por ser una cúbica.', 'El punto de inflexión está en (−2, 4).'],
        respuesta: 'Dom = R, Ran = R; punto de inflexión (−2, 4).' },
      { nivel: 'intermedio', enunciado: 'Halla el dominio de h(x) = 1/(x<sup>2</sup> − 9).',
        pasos: ['Denominador igual a cero: x² − 9 = 0 ⇒ (x − 3)(x + 3) = 0.', 'Se excluyen x = 3 y x = −3.'],
        respuesta: 'Dom(h) = R \\ {−3, 3}.' },
      { nivel: 'dificil', enunciado: 'Determina dominio y rango de f(x) = −√(x + 1) − 3.',
        pasos: ['Radicando ≥ 0: x + 1 ≥ 0 ⇒ x ≥ −1 ⇒ Dom(f) = [−1, +∞).', 'Como a = −1 < 0 y k = −3, el rango se proyecta hacia abajo: Ran(f) = (−∞, −3].'],
        respuesta: 'Dom(f) = [−1, +∞); Ran(f) = (−∞, −3].' },
      { nivel: 'dificil', enunciado: 'Halla las intersecciones con los ejes de r(x) = (2x + 2)/(x − 3).',
        pasos: ['Corte Y: r(0) = 2/−3 = −2/3 ⇒ (0, −2/3).', 'Corte X: numerador 2x + 2 = 0 ⇒ x = −1 ⇒ (−1, 0).'],
        respuesta: 'Corte Y en (0, −2/3) y corte X en (−1, 0).' },
      { nivel: 'dificil', enunciado: 'Halla el dominio de f(x) = √(x<sup>2</sup> − 4).',
        pasos: ['Radicando ≥ 0: x² − 4 ≥ 0 ⇒ (x − 2)(x + 2) ≥ 0.', 'Mediante tabla de signos: positivo en (−∞, −2] U [2, +∞).'],
        respuesta: 'Dom(f) = (−∞, −2] U [2, +∞).' },
      { nivel: 'facil', enunciado: 'Determina el dominio de p(x) = √(x).',
        pasos: ['Radicando ≥ 0: x ≥ 0.', 'Dom(p) = [0, +∞).'],
        respuesta: 'Dom(p) = [0, +∞).' },
      { nivel: 'dificil', enunciado: 'Un tanque se vacía y su volumen restante sigue V(t) = 1/(t + 1) (en miles de litros, t en horas). ¿Para qué valor de t hay una asíntota vertical y qué significa?',
        pasos: ['El denominador se anula en t = −1.', 'Como t representa tiempo (t ≥ 0), esa asíntota no es alcanzable en el contexto físico, pero indica que el modelo no está definido en t = −1.'],
        respuesta: 'Asíntota vertical en t = −1 (fuera del dominio físico del problema).' }
    ],
    teoricas: [
      { q: '¿Cómo se reconoce algebraicamente una función racional?', a: 'Porque la variable independiente x aparece explícitamente en el denominador de una fracción.' },
      { q: '¿Por qué se deben excluir ciertos valores del dominio de una función racional?', a: 'Porque la división entre cero no está definida en los números reales.' },
      { q: '¿Qué es una asíntota vertical?', a: 'Es una recta vertical imaginaria x = a a la cual la curva se aproxima indefinidamente sin llegar a tocarla.' },
      { q: '¿Cuál es la condición para que exista una raíz cuadrada real?', a: 'Que la expresión dentro del radical (el radicando) sea mayor o igual a cero.' },
      { q: '¿Qué forma tiene la gráfica de una función raíz cuadrada?', a: 'Una semiparábola horizontal que parte de un punto inicial (h, k).' },
      { q: '¿Cuáles son el dominio y el rango típicos de una función cúbica f(x) = x<sup>3</sup>?', a: 'Tanto el dominio como el rango abarcan la totalidad de los números reales R.' },
      { q: '¿Qué es el punto de inflexión en una función cúbica?', a: 'Es el punto donde la curva cambia su concavidad, de cóncava hacia abajo a cóncava hacia arriba o viceversa.' },
      { q: '¿Cómo se determina la asíntota horizontal cuando el grado del numerador es igual al del denominador?', a: 'Se calcula dividiendo el coeficiente principal del numerador entre el coeficiente principal del denominador.' }
    ],
    errores: [
      'Incluir el valor de la asíntota vertical dentro del dominio de la función racional.',
      'Intentar evaluar números negativos bajo una raíz cuadrada real, cuando el radicando debe ser ≥ 0.',
      'Confundir el punto de inflexión de una cúbica con un máximo o un mínimo.',
      'Olvidar que la asíntota horizontal describe el comportamiento de la función en los extremos, no un valor prohibido del dominio.'
    ],
    aplicacion: {
      titulo: 'Concentración de una solución al diluirla',
      html: '<p>Si se agrega agua pura a una solución, la concentración de soluto (en gramos por litro) después de agregar x litros de agua suele modelarse con una función racional, por ejemplo <span class="math">C(x) = 50/(x + 10)</span>, donde el denominador nunca puede ser cero (no se puede tener un volumen negativo o nulo bajo ese modelo).</p><p>A medida que x crece, la concentración se acerca a la asíntota horizontal y = 0: entre más agua se agregue, más diluida queda la solución, aproximándose a cero sin llegar nunca a serlo exactamente. Este comportamiento asintótico es el mismo que aparece en modelos de dosis de medicamento, costos promedio por unidad y muchos fenómenos de "saturación".</p>'
    },
    calc: 'func-especial',
    examen: [
      { tipo: 'par', q: 'Halla el punto donde se ubica la asíntota vertical de f(x) = 3/(x − 5), expresado como (x, cualquier y de referencia 0).', r: [5, 0], tol: 0.01, pasos: ['Iguala el denominador a cero: x − 5 = 0.', 'La asíntota vertical es x = 5.'] },
      { tipo: 'opt', q: '¿Cuál es el dominio de f(x) = 2/(x + 4)?', opciones: ['R', 'R \\ {4}', 'R \\ {−4}', '[−4, +∞)'], correcta: 2, pasos: ['El denominador se anula en x = −4.', 'Se excluye ese valor: Dom(f) = R \\ {−4}.'] },
      { tipo: 'num', q: 'Halla la asíntota horizontal de f(x) = (5x + 1)/(x − 2).', r: 5, tol: 0.01, pasos: ['Numerador y denominador son de grado 1 (grados iguales).', 'Cociente de coeficientes principales: 5/1 = 5.'] },
      { tipo: 'num', q: 'Halla el menor valor de x permitido en el dominio de f(x) = √(x − 7).', r: 7, tol: 0.01, pasos: ['Radicando ≥ 0: x − 7 ≥ 0.', 'Despeja: x ≥ 7, así que el menor valor es 7.'] },
      { tipo: 'par', q: 'Halla el punto inicial de f(x) = √(x + 6) − 2.', r: [-6, -2], tol: 0.01, pasos: ['El radicando se anula en x = −6.', 'Con k = −2, el punto inicial es (−6, −2).'] },
      { tipo: 'opt', q: '¿Cuál es el dominio y el rango de una función cúbica f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx + d?', opciones: ['Dom = R, Ran = [0, +∞)', 'Dom = R, Ran = R', 'Dom = [0, +∞), Ran = R', 'Depende siempre del valor de a'], correcta: 1, pasos: ['Es una función polinómica, sin restricciones de raíz o división.', 'Por lo tanto Dom(f) = R y Ran(f) = R.'] },
      { tipo: 'num', q: 'Calcula el valor de x del corte con el eje X de f(x) = x<sup>3</sup> − 8.', r: 2, tol: 0.01, pasos: ['Iguala a cero: x³ − 8 = 0.', 'x³ = 8 ⇒ x = 2.'] },
      { tipo: 'num', q: 'Halla el valor de x donde g(x) = √(10 − 2x) deja de estar definida como límite superior del dominio.', r: 5, tol: 0.01, pasos: ['Radicando ≥ 0: 10 − 2x ≥ 0.', '−2x ≥ −10 ⇒ x ≤ 5, así que el límite superior es 5.'] },
      { tipo: 'opt', q: '¿Qué ocurre en una función racional cuando el grado del numerador es menor que el del denominador?', opciones: ['No tiene asíntota horizontal', 'La asíntota horizontal es y = 0', 'El dominio es vacío', 'La función es cúbica'], correcta: 1, pasos: ['Cuando el numerador crece más lento que el denominador, el cociente tiende a cero.', 'Por eso la asíntota horizontal es y = 0.'] },
      { tipo: 'num', q: 'Para r(x) = 6/(x − 1), calcula r(4).', r: 2, tol: 0.01, pasos: ['Sustituye x = 4: r(4) = 6/(4 − 1).', 'r(4) = 6/3 = 2.'] }
    ]
  };
})();

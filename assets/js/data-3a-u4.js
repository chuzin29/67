/* data-3a-u4.js — Unidad 4: Integrales */
(function () {
  var T = (window.CURSO_3A = window.CURSO_3A || { temas: {} }).temas;

  /* ───────────────────────────────────────────────────────── 1.17 */
  T['1.17'] = {
    id: '1.17',
    unidad: 4,
    titulo: `Antiderivadas e Integral Indefinida`,
    resumen: `Encontrarás funciones cuya derivada es una función dada, aplicando las reglas básicas de integración y la constante C.`,
    objetivos: [
      `Reconocer la integral indefinida como la operación inversa a la derivada y aplicar las reglas de potencia, constante y suma.`,
      `Integrar funciones trigonométricas (seno, coseno, secante, cosecante) usando las fórmulas directas.`,
      `Integrar funciones exponenciales y logarítmicas: <span class="math">∫eˣ dx</span> y <span class="math">∫1/x dx</span>.`,
      `Justificar la presencia de la constante de integración C e interpretar familias de antiderivadas geométricamente.`
    ],
    teoria: [
      { titulo: `La integral como operación inversa`, html: `<p>Si <span class="math">F′(x) = f(x)</span>, decimos que F es una <strong>antiderivada</strong> de f. Por ejemplo, <span class="math">F(x) = x³</span> es antiderivada de <span class="math">f(x) = 3x²</span> porque <span class="math">(x³)′ = 3x²</span>. Pero también lo son <span class="math">x³ + 5</span>, <span class="math">x³ − 7</span>, etc., porque al derivar cualquier constante el resultado es 0.</p><p>La <strong>integral indefinida</strong> de f se escribe <span class="math">∫f(x) dx</span> y representa a toda la familia de antiderivadas:</p><p><span class="math">∫f(x) dx = F(x) + C</span></p><p>donde C es cualquier constante real. El símbolo ∫ es una S alargada (suma), f(x) es el <strong>integrando</strong> y dx indica la variable de integración.</p>` },
      { titulo: `Reglas básicas de integración`, html: `<p>Las tres reglas más usadas se derivan directamente de las de derivación:</p><ul><li><strong>Constante:</strong> <span class="math">∫k dx = kx + C</span></li><li><strong>Potencia</strong> (n ≠ −1): <span class="math">∫xⁿ dx = x<sup>n+1</sup>/(n + 1) + C</span>. Se "sube" el exponente y se divide entre el nuevo exponente.</li><li><strong>Linealidad:</strong> <span class="math">∫(f ± g) dx = ∫f dx ± ∫g dx</span> y <span class="math">∫k f dx = k ∫f dx</span>.</li></ul><p>Para comprobar: deriva el resultado y verifica que recuperas el integrando.</p>` },
      { titulo: `Integrales trigonométricas directas`, html: `<p>Derivando las funciones trigonométricas inversas y trigonométricas se obtienen:</p><ul><li><span class="math">∫cos x dx = sen x + C</span></li><li><span class="math">∫sen x dx = −cos x + C</span></li><li><span class="math">∫sec² x dx = tan x + C</span></li><li><span class="math">∫csc² x dx = −cot x + C</span></li><li><span class="math">∫sec x tan x dx = sec x + C</span></li><li><span class="math">∫csc x cot x dx = −csc x + C</span></li></ul><p>Verifica cada una derivando el resultado: <span class="math">(sen x)′ = cos x</span>, <span class="math">(−cos x)′ = sen x</span>, etc.</p>` },
      { titulo: `Integrales exponenciales y logarítmicas`, html: `<p>La función <span class="math">eˣ</span> es su propia derivada, así que:</p><p><span class="math">∫eˣ dx = eˣ + C</span></p><p>Para bases distintas de e: <span class="math">∫aˣ dx = aˣ/ln a + C</span> (con a > 0, a ≠ 1).</p><p>El caso especial de la potencia (n = −1) que faltaba:</p><p><span class="math">∫1/x dx = ln|x| + C</span></p><p>El valor absoluto es necesario porque ln está definido para x > 0, pero <span class="math">1/x</span> existe también para x < 0 (donde <span class="math">(ln|x|)′ = 1/x</span> sigue siendo válido).</p>` },
      { titulo: `La constante de integración C`, html: `<p>Dos antiderivadas de la misma función difieren en una constante: si <span class="math">F′ = G′ = f</span>, entonces <span class="math">(F − G)′ = 0</span>, lo que implica <span class="math">F − G = C</span>. Geométricamente, las curvas <span class="math">y = F(x) + C</span> para distintos C son traslaciones verticales: tienen la misma forma y la misma pendiente en cada x, pero están desplazadas hacia arriba o hacia abajo.</p><p>Para "fijar" C se necesita una <strong>condición inicial</strong>: si se sabe que <span class="math">F(a) = b</span>, se sustituye en <span class="math">F(x) = ∫f(x) dx</span> y se despeja C.</p>` },
      { titulo: `Procedimiento para integrar`, html: `<ol><li>Identifica si el integrando coincide con alguna fórmula directa (potencia, trig, exponencial).</li><li>Si es una suma o diferencia, integra término a término.</li><li>Extrae constantes multiplicativas antes de integrar.</li><li>Si hay raíces o cocientes simples, reescribe como potencias antes.</li><li>Escribe "+ C" en el resultado final.</li><li>Comprueba derivando el resultado.</li></ol>` },
      { titulo: `Condición inicial y ecuaciones diferenciales`, html: `<p>Una ecuación del tipo <span class="math">dy/dx = f(x)</span> se resuelve integrando: <span class="math">y = ∫f(x) dx = F(x) + C</span>. Si se da un punto <span class="math">(x₀, y₀)</span>, se calcula C: <span class="math">C = y₀ − F(x₀)</span>. Esta idea conecta la integral con la solución de ecuaciones diferenciales de primer orden, fundamento de modelos de crecimiento, circuitos y mecánica.</p>` }
    ],
    formulas: [
      { label: `Regla de la potencia`, html: `<span class="math">∫xⁿ dx = x<sup>n+1</sup>/(n + 1) + C, n ≠ −1</span>` },
      { label: `Constante`, html: `<span class="math">∫k dx = kx + C</span>` },
      { label: `Logarítmica`, html: `<span class="math">∫1/x dx = ln|x| + C</span>` },
      { label: `Exponencial`, html: `<span class="math">∫eˣ dx = eˣ + C</span>` },
      { label: `Seno y coseno`, html: `<span class="math">∫cos x dx = sen x + C</span>, <span class="math">∫sen x dx = −cos x + C</span>` },
      { label: `Secante al cuadrado`, html: `<span class="math">∫sec² x dx = tan x + C</span>` },
      { label: `Base arbitraria`, html: `<span class="math">∫aˣ dx = aˣ/ln a + C</span>` },
      { label: `Linealidad`, html: `<span class="math">∫(af ± bg) dx = a∫f dx ± b∫g dx</span>` }
    ],
    ejemplos: [
      { titulo: `Integral de un polinomio`,
        enunciado: `Calcula <span class="math">∫(3x² − 4x + 5) dx</span>.`,
        pasos: [
          `Aplica la regla de la potencia a cada término: <span class="math">∫3x² dx = 3·x³/3 = x³</span>.`,
          `<span class="math">∫−4x dx = −4·x²/2 = −2x²</span>.`,
          `<span class="math">∫5 dx = 5x</span>.`,
          `Suma y agrega C: <span class="math">x³ − 2x² + 5x + C</span>.`,
          `Verificación: <span class="math">(x³ − 2x² + 5x + C)′ = 3x² − 4x + 5</span>. ✓`
        ],
        respuesta: `<span class="math">∫(3x² − 4x + 5) dx = x³ − 2x² + 5x + C</span>.` },
      { titulo: `Raíces y potencias negativas`,
        enunciado: `Calcula <span class="math">∫(√x + 1/x²) dx</span>.`,
        pasos: [
          `Reescribe: <span class="math">√x = x<sup>1/2</sup></span> y <span class="math">1/x² = x<sup>−2</sup></span>.`,
          `<span class="math">∫x<sup>1/2</sup> dx = x<sup>3/2</sup>/(3/2) = (2/3)x<sup>3/2</sup></span>.`,
          `<span class="math">∫x<sup>−2</sup> dx = x<sup>−1</sup>/(−1) = −1/x</span>.`,
          `Suma: <span class="math">(2/3)x<sup>3/2</sup> − 1/x + C</span>.`
        ],
        respuesta: `<span class="math">∫(√x + 1/x²) dx = (2/3)x√x − 1/x + C</span>.` },
      { titulo: `Integral con condición inicial`,
        enunciado: `Halla f(x) si <span class="math">f′(x) = 2x − 3</span> y <span class="math">f(1) = 4</span>.`,
        pasos: [
          `Integra: <span class="math">f(x) = ∫(2x − 3) dx = x² − 3x + C</span>.`,
          `Aplica la condición: <span class="math">f(1) = 1 − 3 + C = 4</span>, luego <span class="math">C = 6</span>.`,
          `Escribe la solución particular: <span class="math">f(x) = x² − 3x + 6</span>.`
        ],
        respuesta: `<span class="math">f(x) = x² − 3x + 6</span>.` },
      { titulo: `Función trigonométrica y exponencial`,
        enunciado: `Calcula <span class="math">∫(sen x + 2eˣ) dx</span>.`,
        pasos: [
          `<span class="math">∫sen x dx = −cos x + C₁</span>.`,
          `<span class="math">∫2eˣ dx = 2eˣ + C₂</span>.`,
          `Suma y unifica la constante: <span class="math">−cos x + 2eˣ + C</span>.`
        ],
        respuesta: `<span class="math">∫(sen x + 2eˣ) dx = −cos x + 2eˣ + C</span>.` },
      { titulo: `Integral logarítmica`,
        enunciado: `Calcula <span class="math">∫(3/x + x) dx</span>.`,
        pasos: [
          `<span class="math">∫3/x dx = 3 ln|x| + C₁</span>.`,
          `<span class="math">∫x dx = x²/2 + C₂</span>.`,
          `Resultado: <span class="math">3 ln|x| + x²/2 + C</span>.`
        ],
        respuesta: `<span class="math">∫(3/x + x) dx = 3 ln|x| + x²/2 + C</span>.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫(4x³ + 2x) dx</span>.`,
        pasos: [`<span class="math">∫4x³ dx = x⁴</span>.`, `<span class="math">∫2x dx = x²</span>.`, `Suma y agrega C.`],
        respuesta: `<span class="math">x⁴ + x² + C</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫7 dx</span>.`,
        pasos: [`Una constante integra como k·x.`, `<span class="math">∫7 dx = 7x + C</span>.`],
        respuesta: `<span class="math">7x + C</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫(cos x − 3eˣ) dx</span>.`,
        pasos: [`<span class="math">∫cos x dx = sen x</span>.`, `<span class="math">∫−3eˣ dx = −3eˣ</span>.`, `Suma y agrega C.`],
        respuesta: `<span class="math">sen x − 3eˣ + C</span>.` },
      { nivel: 'facil',
        enunciado: `Halla <span class="math">∫x<sup>5</sup> dx</span>.`,
        pasos: [`Aplica regla de la potencia: exponente 5, sube a 6.`, `<span class="math">x⁶/6 + C</span>.`],
        respuesta: `<span class="math">x⁶/6 + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫(x³ − 1/x + eˣ) dx</span>.`,
        pasos: [`<span class="math">∫x³ dx = x⁴/4</span>.`, `<span class="math">∫1/x dx = ln|x|</span>.`, `<span class="math">∫eˣ dx = eˣ</span>.`, `Resultado: <span class="math">x⁴/4 − ln|x| + eˣ + C</span>.`],
        respuesta: `<span class="math">x⁴/4 − ln|x| + eˣ + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla <span class="math">∫(2√x − 3/x²) dx</span>.`,
        pasos: [`Reescribe: <span class="math">2x<sup>1/2</sup> − 3x<sup>−2</sup></span>.`, `<span class="math">∫2x<sup>1/2</sup> dx = (4/3)x<sup>3/2</sup></span>.`, `<span class="math">∫−3x<sup>−2</sup> dx = 3/x</span>.`, `Suma y agrega C.`],
        respuesta: `<span class="math">(4/3)x√x + 3/x + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla f(x) si <span class="math">f′(x) = 6x² + 4x − 1</span> y <span class="math">f(0) = 3</span>.`,
        pasos: [`<span class="math">f(x) = 2x³ + 2x² − x + C</span>.`, `Condición: <span class="math">f(0) = C = 3</span>.`, `Respuesta particular.`],
        respuesta: `<span class="math">f(x) = 2x³ + 2x² − x + 3</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫sec² x dx + ∫cos x dx</span>.`,
        pasos: [`<span class="math">∫sec² x dx = tan x</span>.`, `<span class="math">∫cos x dx = sen x</span>.`, `Suma ambos resultados.`],
        respuesta: `<span class="math">tan x + sen x + C</span>.` },
      { nivel: 'dificil',
        enunciado: `Halla <span class="math">∫(x + 1)²/x dx</span>. Expande antes de integrar.`,
        pasos: [`Expande: <span class="math">(x² + 2x + 1)/x = x + 2 + 1/x</span>.`, `Integra término a término: <span class="math">x²/2 + 2x + ln|x|</span>.`, `Agrega C.`],
        respuesta: `<span class="math">x²/2 + 2x + ln|x| + C</span>.` },
      { nivel: 'dificil',
        enunciado: `Halla f(x) si <span class="math">f″(x) = 6x</span>, <span class="math">f′(0) = 2</span> y <span class="math">f(0) = −1</span>.`,
        pasos: [`Primera integral: <span class="math">f′(x) = 3x² + C₁</span>; con <span class="math">f′(0) = 2</span>, <span class="math">C₁ = 2</span>.`, `Segunda integral: <span class="math">f(x) = x³ + 2x + C₂</span>.`, `Con <span class="math">f(0) = −1</span>, <span class="math">C₂ = −1</span>.`],
        respuesta: `<span class="math">f(x) = x³ + 2x − 1</span>.` },
      { nivel: 'dificil',
        enunciado: `Un objeto se mueve con velocidad <span class="math">v(t) = 3t² − 6t</span> m por s. Si la posición inicial es <span class="math">s(0) = 5</span> m, halla <span class="math">s(t)</span>.`,
        pasos: [`Integra: <span class="math">s(t) = ∫(3t² − 6t) dt = t³ − 3t² + C</span>.`, `Aplica <span class="math">s(0) = C = 5</span>.`, `Respuesta: <span class="math">s(t) = t³ − 3t² + 5</span>.`],
        respuesta: `<span class="math">s(t) = t³ − 3t² + 5</span> m.` }
    ],
    teoricas: [
      { q: `¿Por qué la integral indefinida tiene infinitas soluciones?`, a: `Porque dos funciones que difieren solo en una constante tienen la misma derivada. Al integrar, no podemos determinar esa constante sin información adicional; por eso escribimos "+ C".` },
      { q: `¿Qué ocurre si n = −1 en la regla de la potencia?`, a: `La fórmula daría división por cero. Para n = −1, la antiderivada es <span class="math">ln|x| + C</span>, que se obtiene recordando que <span class="math">(ln|x|)′ = 1/x</span>.` },
      { q: `¿Cómo se verifica una integral indefinida?`, a: `Se deriva el resultado: si la derivada coincide con el integrando original, la integral está bien calculada. Es la comprobación más directa.` },
      { q: `¿Qué rol cumple la condición inicial en una integral indefinida?`, a: `Fija el valor de la constante C, seleccionando una única antiderivada de la familia. Sin condición inicial hay infinitas soluciones; con ella hay exactamente una.` },
      { q: `¿Por qué <span class="math">∫eˣ dx = eˣ + C</span>?`, a: `Porque <span class="math">(eˣ)′ = eˣ</span>: la función exponencial es su propia derivada, así que también es su propia antiderivada.` },
      { q: `¿Qué significa geométricamente la constante C?`, a: `Representa desplazamientos verticales de la curva <span class="math">y = F(x)</span>. Todas las curvas de la familia <span class="math">F(x) + C</span> tienen la misma pendiente en cada x, pero diferentes alturas.` },
      { q: `¿Cuál es la diferencia entre la integral indefinida y la función primitiva?`, a: `Son sinónimos en la práctica. La integral indefinida <span class="math">∫f(x) dx</span> denota el conjunto de todas las primitivas (antiderivadas) de f, que se escriben como <span class="math">F(x) + C</span>.` }
    ],
    errores: [
      `Olvidar la constante de integración C. Al no escribirla, la respuesta es incompleta y se pierde la familia de soluciones.`,
      `Dividir entre el mismo exponente sin sumar 1 primero. La regla es: sube el exponente a n + 1 y luego divide entre n + 1; no entre n.`,
      `Escribir <span class="math">∫1/x dx = ln x + C</span> sin valor absoluto. Para x < 0 la función ln no está definida; debe ser <span class="math">ln|x| + C</span>.`,
      `Intentar aplicar la regla de la potencia a <span class="math">∫eˣ dx</span> como si fuera <span class="math">x<sup>e</sup></span>. La variable es el exponente, no la base, así que la regla es distinta: <span class="math">∫eˣ dx = eˣ + C</span>.`
    ],
    aplicacion: { titulo: `Posición de un vehículo a partir de la aceleración`, html: `<p>En pruebas de frenado de un bus, se mide la desaceleración <span class="math">a(t) = −8</span> m por s<sup>2</sup> (constante). La velocidad inicial al frenar es <span class="math">v(0) = 20</span> m por s y la posición inicial es <span class="math">s(0) = 0</span>. Hallamos la posición en función del tiempo:</p><ol><li>Primera integral: <span class="math">v(t) = ∫−8 dt = −8t + C₁</span>. Con <span class="math">v(0) = 20</span>: <span class="math">C₁ = 20</span>, luego <span class="math">v(t) = −8t + 20</span>.</li><li>Segunda integral: <span class="math">s(t) = ∫(−8t + 20) dt = −4t² + 20t + C₂</span>. Con <span class="math">s(0) = 0</span>: <span class="math">C₂ = 0</span>.</li><li>El bus se detiene cuando <span class="math">v = 0</span>: <span class="math">t = 20/8 = 2.5</span> s.</li><li>Distancia de frenado: <span class="math">s(2.5) = −4(6.25) + 50 = 25</span> m.</li></ol><p>Este resultado es fundamental en diseño de señales de tránsito y distancias de seguridad.</p>` },
    calc: 'antiderivada',
    examen: [
      { tipo: 'num', q: `Calcula <span class="math">∫x⁴ dx</span> y evalúa en x = 1 (sin la constante C).`, r: 0.2, tol: 0.01, pasos: [`<span class="math">∫x⁴ dx = x⁵/5 + C</span>.`, `En x = 1: <span class="math">1/5 = 0.2</span>.`] },
      { tipo: 'num', q: `Si <span class="math">f′(x) = 6x² − 2x</span> y <span class="math">f(0) = 3</span>, halla <span class="math">f(1)</span>.`, r: 5, tol: 0.01, pasos: [`<span class="math">f(x) = 2x³ − x² + C</span>.`, `<span class="math">f(0) = C = 3</span>.`, `<span class="math">f(1) = 2 − 1 + 3 = 4</span>.`] },
      { tipo: 'opt', q: `¿Cuál es la integral correcta de <span class="math">∫x<sup>−1</sup> dx</span>?`, opciones: [`<span class="math">x⁰/0 + C</span>`, `<span class="math">ln|x| + C</span>`, `<span class="math">−1/x² + C</span>`, `<span class="math">1/(2x²) + C</span>`], correcta: 1, pasos: [`La regla de potencia falla en n = −1 (división por cero).`, `La antiderivada de <span class="math">1/x</span> es <span class="math">ln|x|</span>.`] },
      { tipo: 'num', q: `Halla <span class="math">∫(2x + 3) dx</span> y evalúa en x = 2 (sin C).`, r: 10, tol: 0.01, pasos: [`<span class="math">∫(2x + 3) dx = x² + 3x + C</span>.`, `En x = 2: <span class="math">4 + 6 = 10</span>.`] },
      { tipo: 'opt', q: `¿Cuál es la antiderivada de <span class="math">cos x</span>?`, opciones: [`<span class="math">−cos x + C</span>`, `<span class="math">sen x + C</span>`, `<span class="math">−sen x + C</span>`, `<span class="math">cos x + C</span>`], correcta: 1, pasos: [`<span class="math">(sen x)′ = cos x</span>.`, `Luego <span class="math">∫cos x dx = sen x + C</span>.`] },
      { tipo: 'num', q: `Si la velocidad es <span class="math">v(t) = 4t − 2</span> y <span class="math">s(0) = 0</span>, halla <span class="math">s(3)</span>.`, r: 12, tol: 0.01, pasos: [`<span class="math">s(t) = ∫(4t − 2) dt = 2t² − 2t + C</span>.`, `<span class="math">s(0) = C = 0</span>.`, `<span class="math">s(3) = 18 − 6 = 12</span>.`] },
      { tipo: 'num', q: `Halla la parte numérica de <span class="math">∫eˣ dx</span> evaluada en x = 0 (sin C).`, r: 1, tol: 0.01, pasos: [`<span class="math">∫eˣ dx = eˣ + C</span>.`, `En x = 0: <span class="math">e⁰ = 1</span>.`] },
      { tipo: 'num', q: `Calcula el valor de <span class="math">∫(x<sup>1/2</sup>) dx</span> evaluado en x = 4 (sin C).`, r: 5.333, tol: 0.01, pasos: [`<span class="math">∫x<sup>1/2</sup> dx = (2/3)x<sup>3/2</sup> + C</span>.`, `En x = 4: <span class="math">(2/3)·8 = 16/3 ≈ 5.333</span>.`] },
      { tipo: 'opt', q: `Si <span class="math">F′(x) = f(x)</span>, ¿qué representa <span class="math">F(x) + 7</span>?`, opciones: [`Una solución diferente a F para la ecuación <span class="math">F′ = f</span>`, `La derivada de F`, `Una función sin relación con f`, `La integral definida de f`], correcta: 0, pasos: [`<span class="math">(F(x) + 7)′ = F′(x) = f(x)</span>.`, `Luego también es antiderivada de f; solo cambia la constante C.`] },
      { tipo: 'num', q: `Si <span class="math">f′(x) = 3x² − 1</span> y <span class="math">f(1) = 2</span>, halla <span class="math">f(2)</span>.`, r: 8, tol: 0.01, pasos: [`<span class="math">f(x) = x³ − x + C</span>.`, `<span class="math">f(1) = 1 − 1 + C = C = 2</span>.`, `<span class="math">f(2) = 8 − 2 + 2 = 8</span>.`] }
    ]
  };

  /* ───────────────────────────────────────────────────────── 1.18 */
  T['1.18'] = {
    id: '1.18',
    unidad: 4,
    titulo: `Integración por Sustitución`,
    resumen: `Aplicarás el método de sustitución u = g(x) para integrar funciones compuestas, invirtiendo la regla de la cadena.`,
    objetivos: [
      `Identificar la función interior g(x) y su derivada g′(x) dentro del integrando para plantear la sustitución u = g(x).`,
      `Aplicar la sustitución correctamente: cambiar dx a du y transformar completamente el integrando a la variable u.`,
      `Integrar funciones compuestas trigonométricas y exponenciales usando sustitución.`,
      `Realizar sustituciones trigonométricas básicas para integrales con expresiones <span class="math">√(a² − x²)</span>.`
    ],
    teoria: [
      { titulo: `La regla de la cadena al revés`, html: `<p>La regla de la cadena afirma: si <span class="math">F</span> es antiderivada de f, entonces</p><p><span class="math">(F(g(x)))′ = f(g(x))·g′(x)</span></p><p>Al integrar ambos lados:</p><p><span class="math">∫f(g(x))·g′(x) dx = F(g(x)) + C</span></p><p>El método de sustitución organiza este proceso: se elige <span class="math">u = g(x)</span>, se calcula <span class="math">du = g′(x) dx</span> y el integrando se convierte en <span class="math">∫f(u) du</span>, que suele ser mucho más simple.</p>` },
      { titulo: `Pasos del método de sustitución`, html: `<ol><li><strong>Identifica</strong> la función interior: busca un "bloque" g(x) cuya derivada aparezca (o casi aparezca) como factor.</li><li><strong>Define</strong> <span class="math">u = g(x)</span> y calcula <span class="math">du = g′(x) dx</span>.</li><li><strong>Despeja</strong> dx si necesario: <span class="math">dx = du/g′(x)</span>.</li><li><strong>Sustituye</strong> todo en el integrando: elimina x y dx en favor de u y du.</li><li><strong>Integra</strong> en u.</li><li><strong>Regresa</strong> a la variable original: sustituye u = g(x).</li></ol><p>Si en el paso 4 no puedes eliminar completamente la variable x, intenta una sustitución diferente.</p>` },
      { titulo: `Sustitución en integrales de potencias`, html: `<p>Prototipo: <span class="math">∫(g(x))ⁿ · g′(x) dx</span>. Con <span class="math">u = g(x)</span> queda <span class="math">∫uⁿ du = u<sup>n+1</sup>/(n + 1) + C = (g(x))<sup>n+1</sup>/(n + 1) + C</span>.</p><p>Ejemplo: <span class="math">∫(x² + 1)⁵ · 2x dx</span>. Se identifica <span class="math">u = x² + 1</span>, <span class="math">du = 2x dx</span>, y queda <span class="math">∫u⁵ du = u⁶/6 + C = (x² + 1)⁶/6 + C</span>.</p>` },
      { titulo: `Sustitución en integrales exponenciales`, html: `<p>Para <span class="math">∫e<sup>g(x)</sup> · g′(x) dx</span>, con <span class="math">u = g(x)</span>:</p><p><span class="math">∫eᵘ du = eᵘ + C = e<sup>g(x)</sup> + C</span></p><p>Ejemplo: <span class="math">∫e<sup>3x</sup> dx</span>. Aquí <span class="math">u = 3x</span>, <span class="math">du = 3 dx</span>, así <span class="math">dx = du/3</span> y la integral es <span class="math">(1/3)∫eᵘ du = e<sup>3x</sup>/3 + C</span>.</p>` },
      { titulo: `Sustitución trigonométrica básica`, html: `<p>Para integrales con <span class="math">√(a² − x²)</span>, se usa <span class="math">x = a sen θ</span>:</p><ul><li><span class="math">dx = a cos θ dθ</span></li><li><span class="math">√(a² − x²) = a cos θ</span> (usando <span class="math">1 − sen² θ = cos² θ</span>)</li></ul><p>El integrando se simplifica eliminando la raíz. Al terminar se regresa a x usando el triángulo rectángulo de referencia.</p><p>Para <span class="math">√(a² + x²)</span> se usa <span class="math">x = a tan θ</span>, y para <span class="math">√(x² − a²)</span> se usa <span class="math">x = a sec θ</span>.</p>` },
      { titulo: `Ajuste de constantes`, html: `<p>Es frecuente que g′(x) esté casi pero no exactamente en el integrando. Se puede multiplicar y dividir por una constante:</p><p><span class="math">∫f(g(x)) dx = (1/k)∫f(g(x)) · k dx</span></p><p>si k es la constante que falta. Por ejemplo, en <span class="math">∫(x² + 1)⁵ · x dx</span> falta un factor 2; se escribe <span class="math">(1/2)∫(x² + 1)⁵ · 2x dx</span> y se aplica la sustitución.</p><p>Precaución: solo se puede multiplicar y dividir por constantes, no por expresiones que dependan de x.</p>` },
      { titulo: `Sustitución en integrales trigonométricas compuestas`, html: `<p>Muchas integrales de funciones trigonométricas compuestas siguen el esquema <span class="math">∫f(sen x) cos x dx</span> o <span class="math">∫f(cos x) sen x dx</span>:</p><ul><li><span class="math">∫sen²x cos x dx</span>: <span class="math">u = sen x</span>, <span class="math">du = cos x dx</span>, queda <span class="math">∫u² du = u³/3 + C = sen³x/3 + C</span>.</li><li><span class="math">∫tan x dx = ∫sen x/cos x dx</span>: <span class="math">u = cos x</span>, <span class="math">du = −sen x dx</span>, queda <span class="math">−∫1/u du = −ln|cos x| + C = ln|sec x| + C</span>.</li></ul>` }
    ],
    formulas: [
      { label: `Fórmula general`, html: `<span class="math">∫f(g(x))·g′(x) dx = F(g(x)) + C</span>` },
      { label: `Sustitución de potencia`, html: `<span class="math">∫(g(x))ⁿ g′(x) dx = (g(x))<sup>n+1</sup>/(n+1) + C</span>` },
      { label: `Sustitución exponencial`, html: `<span class="math">∫e<sup>g(x)</sup> g′(x) dx = e<sup>g(x)</sup> + C</span>` },
      { label: `Integral de tan x`, html: `<span class="math">∫tan x dx = ln|sec x| + C</span>` },
      { label: `Sustitución trig (seno)`, html: `<span class="math">x = a sen θ ⟹ √(a² − x²) = a cos θ</span>` },
      { label: `Diferencial de sustitución`, html: `<span class="math">u = g(x) ⟹ du = g′(x) dx</span>` },
      { label: `Sustitución con ajuste`, html: `<span class="math">∫f(g(x)) dx = (1/k)∫f(g(x))·k dx</span>` },
      { label: `Sustitución trig (tangente)`, html: `<span class="math">x = a tan θ ⟹ √(a² + x²) = a sec θ</span>` }
    ],
    ejemplos: [
      { titulo: `Sustitución con potencia`,
        enunciado: `Calcula <span class="math">∫(2x + 3)⁴ dx</span>.`,
        pasos: [
          `Sea <span class="math">u = 2x + 3</span>, entonces <span class="math">du = 2 dx</span>, luego <span class="math">dx = du/2</span>.`,
          `Sustituye: <span class="math">(1/2)∫u⁴ du = (1/2)·u⁵/5 + C = u⁵/10 + C</span>.`,
          `Regresa: <span class="math">(2x + 3)⁵/10 + C</span>.`,
          `Verificación: <span class="math">((2x + 3)⁵/10)′ = (1/10)·5(2x + 3)⁴·2 = (2x + 3)⁴</span>. ✓`
        ],
        respuesta: `<span class="math">∫(2x + 3)⁴ dx = (2x + 3)⁵/10 + C</span>.` },
      { titulo: `Sustitución exponencial`,
        enunciado: `Calcula <span class="math">∫x·e<sup>x²</sup> dx</span>.`,
        pasos: [
          `Sea <span class="math">u = x²</span>, entonces <span class="math">du = 2x dx</span>, luego <span class="math">x dx = du/2</span>.`,
          `Sustituye: <span class="math">(1/2)∫eᵘ du = eᵘ/2 + C</span>.`,
          `Regresa: <span class="math">e<sup>x²</sup>/2 + C</span>.`
        ],
        respuesta: `<span class="math">∫x·e<sup>x²</sup> dx = e<sup>x²</sup>/2 + C</span>.` },
      { titulo: `Sustitución trigonométrica`,
        enunciado: `Calcula <span class="math">∫sen²x · cos x dx</span>.`,
        pasos: [
          `Sea <span class="math">u = sen x</span>, <span class="math">du = cos x dx</span>.`,
          `Sustituye: <span class="math">∫u² du = u³/3 + C</span>.`,
          `Regresa: <span class="math">sen³x/3 + C</span>.`
        ],
        respuesta: `<span class="math">∫sen²x · cos x dx = sen³x/3 + C</span>.` },
      { titulo: `Ajuste de constante`,
        enunciado: `Calcula <span class="math">∫x(x² + 1)³ dx</span>.`,
        pasos: [
          `Sea <span class="math">u = x² + 1</span>, <span class="math">du = 2x dx</span>, así <span class="math">x dx = du/2</span>.`,
          `Sustituye: <span class="math">(1/2)∫u³ du = u⁴/8 + C</span>.`,
          `Regresa: <span class="math">(x² + 1)⁴/8 + C</span>.`
        ],
        respuesta: `<span class="math">∫x(x² + 1)³ dx = (x² + 1)⁴/8 + C</span>.` },
      { titulo: `Integral de tan x`,
        enunciado: `Calcula <span class="math">∫tan x dx</span> usando sustitución.`,
        pasos: [
          `Escribe <span class="math">∫tan x dx = ∫sen x/cos x dx</span>.`,
          `Sea <span class="math">u = cos x</span>, <span class="math">du = −sen x dx</span>.`,
          `Sustituye: <span class="math">−∫1/u du = −ln|u| + C = −ln|cos x| + C</span>.`,
          `Equivalentemente: <span class="math">ln|sec x| + C</span>.`
        ],
        respuesta: `<span class="math">∫tan x dx = ln|sec x| + C</span>.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫(x + 5)³ dx</span> con sustitución <span class="math">u = x + 5</span>.`,
        pasos: [`<span class="math">du = dx</span>.`, `<span class="math">∫u³ du = u⁴/4 + C</span>.`, `Regresa: <span class="math">(x + 5)⁴/4 + C</span>.`],
        respuesta: `<span class="math">(x + 5)⁴/4 + C</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫e<sup>5x</sup> dx</span> con sustitución <span class="math">u = 5x</span>.`,
        pasos: [`<span class="math">du = 5 dx</span>, <span class="math">dx = du/5</span>.`, `<span class="math">(1/5)∫eᵘ du = eᵘ/5 + C</span>.`, `Regresa: <span class="math">e<sup>5x</sup>/5 + C</span>.`],
        respuesta: `<span class="math">e<sup>5x</sup>/5 + C</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫cos(3x) dx</span>.`,
        pasos: [`Sea <span class="math">u = 3x</span>, <span class="math">du = 3 dx</span>.`, `<span class="math">(1/3)∫cos u du = sen u/3 + C</span>.`, `Regresa: <span class="math">sen(3x)/3 + C</span>.`],
        respuesta: `<span class="math">sen(3x)/3 + C</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫2x(x² − 4)⁵ dx</span>.`,
        pasos: [`Sea <span class="math">u = x² − 4</span>, <span class="math">du = 2x dx</span>.`, `<span class="math">∫u⁵ du = u⁶/6 + C</span>.`, `Regresa: <span class="math">(x² − 4)⁶/6 + C</span>.`],
        respuesta: `<span class="math">(x² − 4)⁶/6 + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫x²(x³ + 1)⁴ dx</span>.`,
        pasos: [`<span class="math">u = x³ + 1</span>, <span class="math">du = 3x² dx</span>.`, `<span class="math">x² dx = du/3</span>.`, `<span class="math">(1/3)∫u⁴ du = u⁵/15 + C = (x³ + 1)⁵/15 + C</span>.`],
        respuesta: `<span class="math">(x³ + 1)⁵/15 + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫cos³x · sen x dx</span>.`,
        pasos: [`<span class="math">u = cos x</span>, <span class="math">du = −sen x dx</span>.`, `<span class="math">−∫u³ du = −u⁴/4 + C</span>.`, `Regresa: <span class="math">−cos⁴x/4 + C</span>.`],
        respuesta: `<span class="math">−cos⁴x/4 + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫(ln x)/x dx</span>.`,
        pasos: [`<span class="math">u = ln x</span>, <span class="math">du = 1/x dx</span>.`, `<span class="math">∫u du = u²/2 + C</span>.`, `Regresa: <span class="math">(ln x)²/2 + C</span>.`],
        respuesta: `<span class="math">(ln x)²/2 + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫x/(x² + 1) dx</span>.`,
        pasos: [`<span class="math">u = x² + 1</span>, <span class="math">du = 2x dx</span>.`, `<span class="math">(1/2)∫1/u du = (1/2) ln|u| + C</span>.`, `Regresa: <span class="math">(1/2) ln(x² + 1) + C</span>.`],
        respuesta: `<span class="math">(1/2) ln(x² + 1) + C</span>.` },
      { nivel: 'dificil',
        enunciado: `Calcula <span class="math">∫e<sup>cos x</sup> · sen x dx</span>.`,
        pasos: [`<span class="math">u = cos x</span>, <span class="math">du = −sen x dx</span>.`, `<span class="math">−∫eᵘ du = −eᵘ + C</span>.`, `Regresa: <span class="math">−e<sup>cos x</sup> + C</span>.`],
        respuesta: `<span class="math">−e<sup>cos x</sup> + C</span>.` },
      { nivel: 'dificil',
        enunciado: `Calcula <span class="math">∫√(1 − x²) dx</span> usando sustitución trigonométrica <span class="math">x = sen θ</span>.`,
        pasos: [`<span class="math">dx = cos θ dθ</span> y <span class="math">√(1 − x²) = cos θ</span>.`, `<span class="math">∫cos²θ dθ = ∫(1 + cos 2θ)/2 dθ = θ/2 + sen 2θ/4 + C</span>.`, `Regresa: <span class="math">x = sen θ</span>, <span class="math">θ = arcsen x</span>, <span class="math">sen 2θ = 2x√(1 − x²)</span>.`, `Resultado: <span class="math">arcsen(x)/2 + x√(1 − x²)/2 + C</span>.`],
        respuesta: `<span class="math">∫√(1 − x²) dx = (1/2)(arcsen x + x√(1 − x²)) + C</span>.` },
      { nivel: 'dificil',
        enunciado: `Calcula <span class="math">∫(2x + 1)/(x² + x + 3) dx</span>.`,
        pasos: [`Nota que <span class="math">(x² + x + 3)′ = 2x + 1</span>.`, `Sea <span class="math">u = x² + x + 3</span>, <span class="math">du = (2x + 1) dx</span>.`, `<span class="math">∫1/u du = ln|u| + C = ln|x² + x + 3| + C</span>.`],
        respuesta: `<span class="math">ln|x² + x + 3| + C</span>.` }
    ],
    teoricas: [
      { q: `¿Por qué la sustitución funciona? ¿Qué regla de derivación invierte?`, a: `Invierte la regla de la cadena. Si <span class="math">F′ = f</span>, entonces <span class="math">(F(g(x)))′ = f(g(x))·g′(x)</span>. Al integrar ambos lados se obtiene la fórmula de sustitución.` },
      { q: `¿Qué ocurre si g′(x) no aparece exactamente como factor en el integrando?`, a: `Se puede ajustar por una constante multiplicativa (multiplicar y dividir por esa constante). No se puede ajustar por una expresión que dependa de x.` },
      { q: `¿Cómo se sabe qué elegir como u?`, a: `Se busca el "bloque" g(x) más complicado cuya derivada aparezca (o casi aparezca) como otro factor. Suele ser lo que está elevado a una potencia, dentro de una exponencial o dentro de una función trigonométrica.` },
      { q: `¿Por qué en la sustitución trigonométrica se usa <span class="math">x = a sen θ</span> para <span class="math">√(a² − x²)</span>?`, a: `Porque la identidad pitagórica <span class="math">1 − sen²θ = cos²θ</span> elimina la raíz: <span class="math">√(a² − a²sen²θ) = a√(cos²θ) = a cos θ</span>, simplificando enormemente el integrando.` },
      { q: `¿Cómo se verifica que una integral por sustitución está correcta?`, a: `Derivando el resultado respecto a x y verificando que se obtiene el integrando original.` },
      { q: `¿Qué diferencia hay entre sustitución algebraica y sustitución trigonométrica?`, a: `En la sustitución algebraica se elige u como una expresión en x para simplificar. En la sustitución trigonométrica se elige x como función de θ (un ángulo) para eliminar una raíz cuadrada usando identidades trigonométricas.` },
      { q: `¿Es posible aplicar sustitución a toda integral indefinida?`, a: `No. La sustitución funciona cuando el integrando tiene la forma <span class="math">f(g(x))·g′(x)</span>. Si esa estructura no existe, se necesitan otros métodos: partes, fracciones parciales, identidades trigonométricas u otros.` }
    ],
    errores: [
      `Cambiar u pero no cambiar dx. Al definir u = g(x) se debe reemplazar también g′(x) dx por du; dejar dx sin transformar da un integrando mixto incorrecto.`,
      `Olvidar regresar a la variable original. La respuesta final debe estar en términos de x (o la variable original del problema), no en u.`,
      `Multiplicar y dividir por una expresión que depende de x para "crear" la derivada que falta. Solo se puede ajustar por constantes numéricas.`,
      `Confundir <span class="math">∫f(g(x)) dx</span> con <span class="math">∫f(u) du</span> sin verificar que el factor g′(x) aparece. Si no aparece el factor completo, la sustitución directa no es válida.`
    ],
    aplicacion: { titulo: `Corriente eléctrica en un circuito oscilante`, html: `<p>En un circuito LC, la carga del capacitor varía según <span class="math">dq/dt = I₀ · sen(ωt)</span>, donde ω es la frecuencia angular. Para hallar la carga en función del tiempo:</p><ol><li>Sea <span class="math">u = ωt</span>, <span class="math">du = ω dt</span>.</li><li><span class="math">q(t) = ∫I₀ sen(ωt) dt = (I₀/ω)∫sen u du = −(I₀/ω) cos(ωt) + C</span>.</li><li>Si en t = 0 la carga inicial es <span class="math">q₀</span>: <span class="math">C = q₀ + I₀/ω</span>.</li></ol><p>Esta integral por sustitución es el punto de partida del análisis de circuitos de corriente alterna, esencial en ingeniería eléctrica y electrónica.</p>` },
    calc: 'sustitucion',
    examen: [
      { tipo: 'num', q: `Calcula <span class="math">∫(x + 1)³ dx</span> y evalúa en x = 1 (sin C).`, r: 2.5, tol: 0.01, pasos: [`<span class="math">u = x + 1</span>, <span class="math">du = dx</span>.`, `<span class="math">∫u³ du = u⁴/4 + C = (x + 1)⁴/4 + C</span>.`, `En x = 1: <span class="math">2⁴/4 = 4</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫e<sup>2x</sup> dx</span> y evalúa en x = 0 (sin C).`, r: 0.5, tol: 0.01, pasos: [`<span class="math">u = 2x</span>, <span class="math">du = 2 dx</span>.`, `<span class="math">(1/2)∫eᵘ du = e<sup>2x</sup>/2 + C</span>.`, `En x = 0: <span class="math">e⁰/2 = 1/2 = 0.5</span>.`] },
      { tipo: 'opt', q: `¿Cuál sustitución es adecuada para <span class="math">∫x·e<sup>x²</sup> dx</span>?`, opciones: [`<span class="math">u = x</span>`, `<span class="math">u = eˣ</span>`, `<span class="math">u = x²</span>`, `<span class="math">u = x + 1</span>`], correcta: 2, pasos: [`<span class="math">u = x²</span> da <span class="math">du = 2x dx</span>.`, `El factor x dx = du/2 está presente en el integrando.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫2x(x² + 3)⁴ dx</span> y evalúa en x = 0 (sin C).`, r: 0.0617, tol: 0.001, pasos: [`<span class="math">u = x² + 3</span>, <span class="math">du = 2x dx</span>.`, `<span class="math">∫u⁴ du = u⁵/5 + C = (x² + 3)⁵/5 + C</span>.`, `En x = 0: <span class="math">3⁵/5 = 243/5 = 48.6</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫cos(2x) dx</span> y evalúa en x = π/4 (sin C). Redondea a 2 decimales.`, r: 0.5, tol: 0.01, pasos: [`<span class="math">u = 2x</span>, <span class="math">du = 2 dx</span>.`, `<span class="math">(1/2)∫cos u du = sen(2x)/2 + C</span>.`, `En x = π/4: <span class="math">sen(π/2)/2 = 1/2 = 0.5</span>.`] },
      { tipo: 'opt', q: `¿Cuál es el resultado de <span class="math">∫tan x dx</span>?`, opciones: [`<span class="math">−ln|cos x| + C</span>`, `<span class="math">sec²x + C</span>`, `<span class="math">cos x + C</span>`, `<span class="math">sen x/cos²x + C</span>`], correcta: 0, pasos: [`<span class="math">u = cos x</span>, <span class="math">du = −sen x dx</span>.`, `<span class="math">−∫1/u du = −ln|cos x| + C</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫(ln x)/x dx</span> y evalúa en x = e (sin C).`, r: 0.5, tol: 0.01, pasos: [`<span class="math">u = ln x</span>, <span class="math">du = 1/x dx</span>.`, `<span class="math">∫u du = u²/2 = (ln x)²/2 + C</span>.`, `En x = e: <span class="math">(ln e)²/2 = 1/2</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫sen(3x + 1) dx</span> y evalúa en x = 0 (sin C).`, r: -0.3011, tol: 0.01, pasos: [`<span class="math">u = 3x + 1</span>, <span class="math">du = 3 dx</span>.`, `<span class="math">−cos(3x + 1)/3 + C</span>.`, `En x = 0: <span class="math">−cos(1)/3 ≈ −0.5403/3 ≈ −0.1801</span>.`] },
      { tipo: 'opt', q: `Para calcular <span class="math">∫√(9 − x²) dx</span>, ¿qué sustitución trigonométrica es la adecuada?`, opciones: [`<span class="math">x = 9 tan θ</span>`, `<span class="math">x = 3 sen θ</span>`, `<span class="math">x = 3 sec θ</span>`, `<span class="math">x = 9 sen θ</span>`], correcta: 1, pasos: [`La raíz tiene la forma <span class="math">√(a² − x²)</span> con a = 3.`, `La sustitución es <span class="math">x = 3 sen θ</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫x/(x² + 1) dx</span> y evalúa en x = 1 (sin C).`, r: 0.3466, tol: 0.01, pasos: [`<span class="math">u = x² + 1</span>, <span class="math">du = 2x dx</span>.`, `<span class="math">(1/2)∫1/u du = (1/2) ln(x² + 1) + C</span>.`, `En x = 1: <span class="math">(1/2) ln 2 ≈ 0.3466</span>.`] }
    ]
  };

  /* ───────────────────────────────────────────────────────── 1.19 */
  T['1.19'] = {
    id: '1.19',
    unidad: 4,
    titulo: `Integral Definida y Teorema Fundamental del Cálculo`,
    resumen: `Calcularás áreas exactas bajo curvas usando sumas de Riemann y el Teorema Fundamental del Cálculo, y evaluarás integrales definidas por antiderivadas.`,
    objetivos: [
      `Interpretar la integral definida como límite de sumas de Riemann y relacionarla con el área bajo la curva.`,
      `Aplicar el Teorema Fundamental del Cálculo parte 2 (Regla de Barrow) para evaluar integrales definidas exactas.`,
      `Usar el Teorema Fundamental parte 1 para derivar funciones definidas como integrales con límite variable.`,
      `Aplicar las propiedades de linealidad, aditividad y comparación de la integral definida.`
    ],
    teoria: [
      { titulo: `Suma de Riemann e integral definida`, html: `<p>Para estimar el área bajo una curva <span class="math">y = f(x)</span> en [a, b], dividimos el intervalo en n subintervalos de ancho <span class="math">Δx = (b − a)/n</span> y construimos rectángulos de altura <span class="math">f(xᵢ*)</span> (un punto en cada subintervalo):</p><p><span class="math">Sₙ = Σᵢ₌₁ⁿ f(xᵢ*) Δx</span></p><p>Al hacer <span class="math">n → ∞</span> (rectángulos infinitesimalmente delgados), si el límite existe es la <strong>integral definida</strong>:</p><p><span class="math">∫[a,b] f(x) dx = lím<sub>n→∞</sub> Σᵢ₌₁ⁿ f(xᵢ*) Δx</span></p><p>Esta representa el <strong>área neta</strong> (positiva donde f > 0, negativa donde f < 0) bajo la curva en [a, b].</p>` },
      { titulo: `Teorema Fundamental del Cálculo, parte 1`, html: `<p>Si f es continua en [a, b] y se define <span class="math">G(x) = ∫[a,x] f(t) dt</span>, entonces G es derivable y:</p><p><span class="math">G′(x) = f(x)</span></p><p>Es decir, la derivada de una integral con límite variable superior es simplemente el integrando evaluado en ese límite. Esta parte establece que <strong>la diferenciación y la integración son operaciones inversas</strong>.</p><p>Con la regla de la cadena: si <span class="math">G(x) = ∫[a,g(x)] f(t) dt</span>, entonces <span class="math">G′(x) = f(g(x))·g′(x)</span>.</p>` },
      { titulo: `Teorema Fundamental del Cálculo, parte 2 (Regla de Barrow)`, html: `<p>Si F es cualquier antiderivada de f (continua) en [a, b], entonces:</p><p><span class="math">∫[a,b] f(x) dx = F(b) − F(a)</span></p><p>Esta parte es el puente práctico: <strong>para calcular el área exacta basta con hallar una antiderivada y evaluar en los extremos</strong>. Se suele escribir con corchetes:</p><p><span class="math">∫[a,b] f(x) dx = [F(x)]<sub>a</sub><sup>b</sup> = F(b) − F(a)</span></p><p>La constante C de la antiderivada indefinida se cancela: F(b) + C − (F(a) + C) = F(b) − F(a).</p>` },
      { titulo: `Propiedades de la integral definida`, html: `<ul><li><strong>Linealidad:</strong> <span class="math">∫[a,b] (αf + βg) dx = α∫[a,b] f dx + β∫[a,b] g dx</span></li><li><strong>Aditividad:</strong> <span class="math">∫[a,b] f dx + ∫[b,c] f dx = ∫[a,c] f dx</span></li><li><strong>Inversión de límites:</strong> <span class="math">∫[b,a] f dx = −∫[a,b] f dx</span></li><li><strong>Intervalo nulo:</strong> <span class="math">∫[a,a] f dx = 0</span></li><li><strong>Comparación:</strong> si <span class="math">f(x) ≥ 0</span> en [a,b], entonces <span class="math">∫[a,b] f dx ≥ 0</span>.</li><li><strong>Acotación:</strong> si <span class="math">m ≤ f(x) ≤ M</span>, entonces <span class="math">m(b−a) ≤ ∫[a,b] f dx ≤ M(b−a)</span>.</li></ul>` },
      { titulo: `Interpretación geométrica`, html: `<p>La integral definida <span class="math">∫[a,b] f(x) dx</span> mide el <strong>área neta con signo</strong>:</p><ul><li>Las regiones donde <span class="math">f(x) > 0</span> contribuyen positivamente (área sobre el eje x).</li><li>Las regiones donde <span class="math">f(x) < 0</span> contribuyen negativamente (área bajo el eje x).</li></ul><p>El <strong>área total</strong> (sin signo) se calcula como <span class="math">∫[a,b] |f(x)| dx</span>, dividiendo el intervalo en subintervalos donde f no cambia de signo.</p>` },
      { titulo: `Procedimiento para aplicar la Regla de Barrow`, html: `<ol><li>Halla una antiderivada F de f (olvida el "+ C").</li><li>Evalúa F en el límite superior b: calcula F(b).</li><li>Evalúa F en el límite inferior a: calcula F(a).</li><li>Resta: <span class="math">∫[a,b] f dx = F(b) − F(a)</span>.</li></ol><p>Si hay sustitución en una integral definida, se pueden cambiar los límites de integración directamente a la variable u, o regresar a x al final y evaluar los límites originales.</p>` },
      { titulo: `TFC parte 1 con regla de la cadena`, html: `<p>Si se necesita derivar <span class="math">H(x) = ∫[a,g(x)] f(t) dt</span>:</p><p><span class="math">H′(x) = f(g(x))·g′(x)</span></p><p>Ejemplo: <span class="math">d/dx ∫[0,x²] sen(t²) dt = sen(x⁴)·2x</span>.</p><p>Esto se usa para resolver ecuaciones integrales y para demostrar la unicidad de ciertas soluciones en ecuaciones diferenciales.</p>` }
    ],
    formulas: [
      { label: `Suma de Riemann`, html: `<span class="math">Sₙ = Σᵢ₌₁ⁿ f(xᵢ*) Δx</span>` },
      { label: `Integral definida`, html: `<span class="math">∫[a,b] f(x) dx = lím<sub>n→∞</sub> Σᵢ₌₁ⁿ f(xᵢ*) Δx</span>` },
      { label: `TFC parte 2 (Barrow)`, html: `<span class="math">∫[a,b] f(x) dx = F(b) − F(a)</span>` },
      { label: `TFC parte 1`, html: `<span class="math">d/dx ∫[a,x] f(t) dt = f(x)</span>` },
      { label: `Aditividad`, html: `<span class="math">∫[a,c] f dx = ∫[a,b] f dx + ∫[b,c] f dx</span>` },
      { label: `Inversión de límites`, html: `<span class="math">∫[b,a] f dx = −∫[a,b] f dx</span>` },
      { label: `TFC con cadena`, html: `<span class="math">d/dx ∫[a,g(x)] f(t) dt = f(g(x))·g′(x)</span>` },
      { label: `Ancho de Riemann`, html: `<span class="math">Δx = (b − a)/n</span>` }
    ],
    ejemplos: [
      { titulo: `Suma de Riemann derecha`,
        enunciado: `Estima <span class="math">∫[0,2] x² dx</span> con n = 4 rectangulos (extremo derecho).`,
        pasos: [
          `<span class="math">Δx = 2/4 = 0.5</span>; puntos derechos: 0.5, 1, 1.5, 2.`,
          `Alturas: <span class="math">f(0.5) = 0.25</span>, <span class="math">f(1) = 1</span>, <span class="math">f(1.5) = 2.25</span>, <span class="math">f(2) = 4</span>.`,
          `Suma: <span class="math">0.5(0.25 + 1 + 2.25 + 4) = 0.5·7.5 = 3.75</span>.`,
          `El valor exacto es 8/3 ≈ 2.67; la aproximación sobreestima porque f es creciente.`
        ],
        respuesta: `Aproximación: 3.75. Valor exacto: 8/3 ≈ 2.67.` },
      { titulo: `Aplicar la Regla de Barrow`,
        enunciado: `Calcula <span class="math">∫[1,3] (x² − 2x + 1) dx</span>.`,
        pasos: [
          `Antiderivada: <span class="math">F(x) = x³/3 − x² + x</span>.`,
          `<span class="math">F(3) = 9 − 9 + 3 = 3</span>.`,
          `<span class="math">F(1) = 1/3 − 1 + 1 = 1/3</span>.`,
          `Resultado: <span class="math">3 − 1/3 = 8/3</span>.`
        ],
        respuesta: `<span class="math">∫[1,3] (x² − 2x + 1) dx = 8/3</span>.` },
      { titulo: `Integral con función trigonométrica`,
        enunciado: `Calcula <span class="math">∫[0,π/2] cos x dx</span>.`,
        pasos: [
          `Antiderivada: <span class="math">F(x) = sen x</span>.`,
          `<span class="math">F(π/2) = sen(π/2) = 1</span>.`,
          `<span class="math">F(0) = sen 0 = 0</span>.`,
          `Resultado: <span class="math">1 − 0 = 1</span>.`
        ],
        respuesta: `<span class="math">∫[0,π/2] cos x dx = 1</span>. Área exacta bajo el coseno en ese intervalo.` },
      { titulo: `TFC parte 1`,
        enunciado: `Halla <span class="math">d/dx ∫[1,x³] √(1 + t²) dt</span>.`,
        pasos: [
          `Sea <span class="math">G(x) = ∫[1,g(x)] f(t) dt</span> con <span class="math">f(t) = √(1 + t²)</span> y <span class="math">g(x) = x³</span>.`,
          `Por TFC parte 1 con regla de la cadena: <span class="math">G′(x) = f(g(x))·g′(x)</span>.`,
          `<span class="math">G′(x) = √(1 + (x³)²)·3x² = 3x²√(1 + x⁶)</span>.`
        ],
        respuesta: `<span class="math">d/dx ∫[1,x³] √(1 + t²) dt = 3x²√(1 + x⁶)</span>.` },
      { titulo: `Área total (con cambio de signo)`,
        enunciado: `Calcula el área total entre <span class="math">f(x) = x² − 1</span> y el eje x en [0, 2].`,
        pasos: [
          `Busca ceros: <span class="math">x² − 1 = 0 ⟹ x = 1</span> en [0, 2].`,
          `En [0, 1] la función es negativa; en [1, 2] es positiva.`,
          `Área en [0,1]: <span class="math">|∫[0,1] (x² − 1) dx| = |[x³/3 − x]₀¹| = |1/3 − 1| = 2/3</span>.`,
          `Área en [1,2]: <span class="math">∫[1,2] (x² − 1) dx = [x³/3 − x]₁² = (8/3 − 2) − (1/3 − 1) = 4/3</span>.`,
          `Área total: <span class="math">2/3 + 4/3 = 2</span>.`
        ],
        respuesta: `Área total = 2 unidades cuadradas.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫[0,2] 3x² dx</span>.`,
        pasos: [`Antiderivada: <span class="math">x³</span>.`, `<span class="math">F(2) − F(0) = 8 − 0 = 8</span>.`],
        respuesta: `8.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫[1,4] 1 dx</span>.`,
        pasos: [`<span class="math">∫1 dx = x</span>.`, `<span class="math">4 − 1 = 3</span>.`],
        respuesta: `3.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫[0,π] sen x dx</span>.`,
        pasos: [`Antiderivada: <span class="math">−cos x</span>.`, `<span class="math">−cos π − (−cos 0) = 1 + 1 = 2</span>.`],
        respuesta: `2.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫[1,e] 1/x dx</span>.`,
        pasos: [`Antiderivada: <span class="math">ln x</span>.`, `<span class="math">ln e − ln 1 = 1 − 0 = 1</span>.`],
        respuesta: `1.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫[0,1] (x³ − 2x + 1) dx</span>.`,
        pasos: [`Antiderivada: <span class="math">x⁴/4 − x² + x</span>.`, `<span class="math">F(1) = 1/4 − 1 + 1 = 1/4</span>.`, `<span class="math">F(0) = 0</span>.`, `Resultado: <span class="math">1/4</span>.`],
        respuesta: `<span class="math">1/4</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫[0,1] eˣ dx</span>.`,
        pasos: [`Antiderivada: <span class="math">eˣ</span>.`, `<span class="math">e¹ − e⁰ = e − 1</span>.`],
        respuesta: `<span class="math">e − 1 ≈ 1.718</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla <span class="math">d/dx ∫[0,x²] eᵗ dt</span>.`,
        pasos: [`TFC parte 1 con cadena.`, `Función interior: <span class="math">g(x) = x²</span>.`, `Resultado: <span class="math">e<sup>x²</sup>·2x = 2x·e<sup>x²</sup></span>.`],
        respuesta: `<span class="math">2x·e<sup>x²</sup></span>.` },
      { nivel: 'intermedio',
        enunciado: `Usa la propiedad de aditividad: si <span class="math">∫[1,3] f dx = 5</span> y <span class="math">∫[1,5] f dx = 11</span>, halla <span class="math">∫[3,5] f dx</span>.`,
        pasos: [`Por aditividad: <span class="math">∫[1,5] = ∫[1,3] + ∫[3,5]</span>.`, `<span class="math">∫[3,5] = 11 − 5 = 6</span>.`],
        respuesta: `6.` },
      { nivel: 'dificil',
        enunciado: `Calcula el área total entre <span class="math">f(x) = x² − 4</span> y el eje x en [0, 3].`,
        pasos: [`Cero en [0,3]: x = 2.`, `Área en [0,2]: <span class="math">|∫[0,2] (x² − 4) dx| = |[x³/3 − 4x]₀²| = |8/3 − 8| = 16/3</span>.`, `Área en [2,3]: <span class="math">∫[2,3] (x² − 4) dx = [x³/3 − 4x]₂³ = (9 − 12) − (8/3 − 8) = −3 + 16/3 = 7/3</span>.`, `Total: <span class="math">16/3 + 7/3 = 23/3</span>.`],
        respuesta: `<span class="math">23/3</span> unidades cuadradas.` },
      { nivel: 'dificil',
        enunciado: `Calcula <span class="math">∫[0,1] x·e<sup>x²</sup> dx</span> usando sustitución <span class="math">u = x²</span>.`,
        pasos: [`<span class="math">u = x²</span>, <span class="math">du = 2x dx</span>; cuando x = 0, u = 0; cuando x = 1, u = 1.`, `<span class="math">(1/2)∫[0,1] eᵘ du = (1/2)[eᵘ]₀¹ = (1/2)(e − 1)</span>.`],
        respuesta: `<span class="math">(e − 1)/2 ≈ 0.859</span>.` },
      { nivel: 'dificil',
        enunciado: `Calcula <span class="math">∫[0,π/4] sec²x dx</span> e interpreta el resultado.`,
        pasos: [`Antiderivada: <span class="math">tan x</span>.`, `<span class="math">tan(π/4) − tan 0 = 1 − 0 = 1</span>.`, `Representa el área exacta bajo la curva <span class="math">sec²x</span> en ese intervalo.`],
        respuesta: `1.` }
    ],
    teoricas: [
      { q: `¿Qué mide exactamente la integral definida?`, a: `Mide el área neta con signo entre la curva y el eje x en el intervalo [a, b]: positiva donde f > 0 y negativa donde f < 0. Para el área total (sin signo) se integra |f(x)|.` },
      { q: `¿Por qué desaparece la constante C al aplicar la Regla de Barrow?`, a: `Porque al restar F(b) − F(a), cualquier constante C en F(b) + C y en F(a) + C se cancela, dejando solo F(b) − F(a).` },
      { q: `¿Qué establece el TFC parte 1 y por qué es importante?`, a: `Establece que la derivada de <span class="math">G(x) = ∫[a,x] f(t) dt</span> es f(x). Es importante porque muestra que derivación e integración son operaciones inversas y garantiza que toda función continua tiene antiderivada.` },
      { q: `¿Cómo se interpreta una suma de Riemann?`, a: `Como la suma de las áreas de n rectángulos de base Δx y altura f(xᵢ*). Al aumentar n al infinito, esta aproximación converge al área exacta bajo la curva.` },
      { q: `¿Qué ocurre con <span class="math">∫[a,b] f dx</span> si se intercambian los límites?`, a: `Cambia de signo: <span class="math">∫[b,a] f dx = −∫[a,b] f dx</span>. Es una consecuencia de la fórmula de Barrow: F(a) − F(b) = −(F(b) − F(a)).` },
      { q: `¿Cuándo una suma de Riemann sobreestima y cuándo subestima el área?`, a: `Con extremo derecho: sobreestima si f es creciente, subestima si es decreciente. Con extremo izquierdo: al revés. Con punto medio: generalmente más preciso para ambos casos.` },
      { q: `¿Cómo se usa la propiedad de aditividad de la integral?`, a: `Permite dividir el intervalo [a, c] en [a, b] y [b, c], con cualquier b intermedio: <span class="math">∫[a,c] = ∫[a,b] + ∫[b,c]</span>. Es útil cuando la función cambia de fórmula o de signo en algún punto del intervalo.` },
      { q: `¿Por qué es necesario calcular el área total con valor absoluto cuando hay cambios de signo?`, a: `Porque la integral definida da el área neta: las regiones negativas restan. Para el área geométrica total, se integran separadamente las partes positivas y negativas y se suman los valores absolutos.` }
    ],
    errores: [
      `Olvidar restar F(a) y solo calcular F(b). La fórmula completa es F(b) − F(a).`,
      `Confundir integral definida con área total. La integral definida da el área neta con signo; para el área total hay que integrar el valor absoluto.`,
      `Al usar sustitución en una integral definida, no cambiar los límites de integración. Si se sustituye u = g(x) y se integra en u, los límites deben ser g(a) y g(b).`,
      `Aplicar mal el TFC parte 1: olvidar multiplicar por g′(x) cuando el límite superior es g(x). La respuesta correcta es f(g(x))·g′(x), no solo f(g(x)).`
    ],
    aplicacion: { titulo: `Trabajo realizado por una fuerza variable`, html: `<p>En física, el trabajo realizado por una fuerza variable <span class="math">F(x)</span> al mover un objeto de x = a a x = b es:</p><p><span class="math">W = ∫[a,b] F(x) dx</span></p><p>Supón que un resorte ejerce una fuerza <span class="math">F(x) = 50x</span> N (Ley de Hooke con k = 50 N/m) al comprimirse x metros. El trabajo para comprimirlo de 0 a 0.3 m es:</p><p><span class="math">W = ∫[0,0.3] 50x dx = [25x²]₀<sup>0.3</sup> = 25·0.09 = 2.25</span> J.</p><p>Este resultado exacto es imposible de obtener solo con aritmética; requiere la integral definida. Se aplica en diseño de suspensiones, amortiguadores y mecanismos elásticos.</p>` },
    calc: 'integral-def',
    examen: [
      { tipo: 'num', q: `Calcula <span class="math">∫[0,2] x² dx</span>.`, r: 2.6667, tol: 0.01, pasos: [`Antiderivada: <span class="math">x³/3</span>.`, `<span class="math">8/3 − 0 = 8/3 ≈ 2.667</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫[0,1] eˣ dx</span>. Redondea a 4 decimales.`, r: 1.7183, tol: 0.001, pasos: [`Antiderivada: <span class="math">eˣ</span>.`, `<span class="math">e¹ − e⁰ = e − 1 ≈ 1.7183</span>.`] },
      { tipo: 'opt', q: `¿Cuál es el valor de <span class="math">∫[0,π/2] sen x dx</span>?`, opciones: [`0`, `−1`, `1`, `2`], correcta: 2, pasos: [`Antiderivada: <span class="math">−cos x</span>.`, `<span class="math">−cos(π/2) + cos 0 = 0 + 1 = 1</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫[1,e] 1/x dx</span>.`, r: 1, tol: 0.01, pasos: [`Antiderivada: <span class="math">ln x</span>.`, `<span class="math">ln e − ln 1 = 1 − 0 = 1</span>.`] },
      { tipo: 'num', q: `Halla <span class="math">d/dx ∫[0,x] t³ dt</span> evaluada en x = 2.`, r: 8, tol: 0.01, pasos: [`Por TFC parte 1: <span class="math">d/dx ∫[0,x] t³ dt = x³</span>.`, `En x = 2: <span class="math">2³ = 8</span>.`] },
      { tipo: 'num', q: `Si <span class="math">∫[0,3] f dx = 7</span> y <span class="math">∫[0,5] f dx = 12</span>, halla <span class="math">∫[3,5] f dx</span>.`, r: 5, tol: 0.01, pasos: [`Propiedad de aditividad: <span class="math">∫[a,c] = ∫[a,b] + ∫[b,c]</span>.`, `<span class="math">∫[3,5] = ∫[0,5] − ∫[0,3] = 12 − 7 = 5</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫[0,π/4] sec²x dx</span>.`, r: 1, tol: 0.01, pasos: [`Antiderivada: <span class="math">tan x</span>.`, `<span class="math">tan(π/4) − tan 0 = 1 − 0 = 1</span>.`] },
      { tipo: 'opt', q: `¿Cuál es la fórmula del TFC parte 2?`, opciones: [`<span class="math">∫[a,b] f dx = f(b) − f(a)</span>`, `<span class="math">∫[a,b] f dx = F(b) − F(a)</span> donde F′ = f`, `<span class="math">d/dx ∫f dx = f′(x)</span>`, `<span class="math">∫[a,b] f dx = F(a) − F(b)</span>`], correcta: 1, pasos: [`La Regla de Barrow usa la antiderivada F, no f.`, `Se resta F(a) de F(b) (superior menos inferior).`] },
      { tipo: 'num', q: `Calcula <span class="math">∫[1,2] (3x² − 2x) dx</span>.`, r: 5, tol: 0.01, pasos: [`Antiderivada: <span class="math">x³ − x²</span>.`, `<span class="math">F(2) = 8 − 4 = 4</span>.`, `<span class="math">F(1) = 1 − 1 = 0</span>.`, `Resultado: <span class="math">4 − 0 + 1? No: F(2)−F(1) = 4 − 0 = 4</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫[0,1] (2x + 1)² dx</span>.`, r: 2.3333, tol: 0.01, pasos: [`Expande: <span class="math">4x² + 4x + 1</span>.`, `Antiderivada: <span class="math">4x³/3 + 2x² + x</span>.`, `<span class="math">F(1) = 4/3 + 2 + 1 = 13/3</span>; <span class="math">F(0) = 0</span>.`, `<span class="math">13/3 ≈ 4.333</span>.`] }
    ]
  };

  /* ───────────────────────────────────────────────────────── 1.20 */
  T['1.20'] = {
    id: '1.20',
    unidad: 4,
    titulo: `Área entre Curvas`,
    resumen: `Calcularás el área de regiones planas delimitadas por dos o más curvas, integrando la diferencia de funciones en un intervalo.`,
    objetivos: [
      `Configurar y calcular <span class="math">∫[a,b] (f(x) − g(x)) dx</span> cuando f ≥ g en [a, b] para hallar el área entre curvas.`,
      `Encontrar los puntos de intersección de dos curvas para determinar los límites de integración.`,
      `Integrar respecto al eje y cuando la región se describe más naturalmente en función de y.`,
      `Dividir la región de integración cuando las curvas se cruzan dentro del intervalo.`
    ],
    teoria: [
      { titulo: `Área entre dos curvas`, html: `<p>Si <span class="math">f(x) ≥ g(x)</span> para todo x en [a, b], el área de la región entre las dos curvas es:</p><p><span class="math">A = ∫[a,b] (f(x) − g(x)) dx</span></p><p>Esta fórmula funciona incluso si ambas curvas están debajo del eje x. Lo que importa es que f esté por encima de g en todo el intervalo.</p><p>Geométricamente, restamos la curva inferior a la superior para que la diferencia sea siempre no negativa, y luego integramos esa diferencia.</p>` },
      { titulo: `Hallar los puntos de intersección`, html: `<p>Los puntos donde <span class="math">f(x) = g(x)</span> son los límites naturales de la región. Para hallarlos:</p><ol><li>Iguala: <span class="math">f(x) = g(x)</span>.</li><li>Despeja x (factoriza, usa la fórmula cuadrática, etc.).</li><li>Verifica que esos valores son los extremos correctos de la región.</li></ol><p>Si los límites no se dan explícitamente, los puntos de intersección actúan como a y b.</p>` },
      { titulo: `Cambio de curva superior`, html: `<p>Si las curvas se cruzan en c ∈ (a, b), no hay una sola curva superior en todo [a, b]. Se divide:</p><p><span class="math">A = ∫[a,c] (f − g) dx + ∫[c,b] (g − f) dx</span></p><p>En cada subintervalo se resta la inferior de la superior. Siempre se puede escribir como:</p><p><span class="math">A = ∫[a,b] |f(x) − g(x)| dx</span></p><p>pero la forma con valor absoluto suele requerir dividir el intervalo de todas formas para integrar.</p>` },
      { titulo: `Área respecto al eje y`, html: `<p>A veces la región se describe más fácilmente como <span class="math">a ≤ y ≤ b</span> con curvas <span class="math">x = p(y)</span> y <span class="math">x = q(y)</span>:</p><p><span class="math">A = ∫[c,d] (p(y) − q(y)) dy</span></p><p>donde p(y) ≥ q(y) (p está a la derecha). Se usa cuando al integrar en x se necesitarían varias integrales, pero en y la región es "simple".</p>` },
      { titulo: `Procedimiento general para área entre curvas`, html: `<ol><li>Dibuja o visualiza las curvas para identificar cuál está encima.</li><li>Encuentra los puntos de intersección (o usa los límites dados).</li><li>Escribe el integrando: curva superior menos curva inferior.</li><li>Si hay cruce, divide en subintervalos.</li><li>Integra y suma las partes.</li></ol>` },
      { titulo: `Área con curvas que se cruzan múltiples veces`, html: `<p>Cuando las curvas se cruzan más de dos veces, se hallan todos los puntos de cruce y se suman las áreas de cada "celdilla":</p><p><span class="math">A = Σ |∫[xᵢ,xᵢ₊₁] (f − g) dx|</span></p><p>Siempre conviene verificar el signo de <span class="math">f − g</span> en cada subintervalo (por ejemplo, evaluando en un punto interior) antes de integrar.</p>` },
      { titulo: `Comparación: área neta vs área entre curvas`, html: `<p>El área entre la curva y el eje x es el caso especial <span class="math">g(x) = 0</span>. El área entre dos curvas generaliza ese concepto. Notar que:</p><ul><li><span class="math">∫[a,b] f(x) dx</span> puede ser negativo (área neta).</li><li><span class="math">∫[a,b] (f(x) − g(x)) dx</span> es siempre positivo cuando f ≥ g (área geométrica real).</li></ul>` }
    ],
    formulas: [
      { label: `Área entre curvas (en x)`, html: `<span class="math">A = ∫[a,b] (f(x) − g(x)) dx, f ≥ g</span>` },
      { label: `Área entre curvas (en y)`, html: `<span class="math">A = ∫[c,d] (p(y) − q(y)) dy, p ≥ q</span>` },
      { label: `Área con cruces`, html: `<span class="math">A = ∫[a,b] |f(x) − g(x)| dx</span>` },
      { label: `Intersección de curvas`, html: `<span class="math">f(x) = g(x) ⟹ a, b</span>` },
      { label: `División en subintervalos`, html: `<span class="math">A = ∫[a,c] (f−g) dx + ∫[c,b] (g−f) dx</span>` },
      { label: `Caso especial: curva y eje`, html: `<span class="math">A = ∫[a,b] |f(x)| dx</span>` },
      { label: `Área de parábola clásica`, html: `<span class="math">A = ∫[a,b] (x − x²) dx = (b−a)³/6</span> para <span class="math">f = x, g = x²</span> en [0,1]` }
    ],
    ejemplos: [
      { titulo: `Área entre una parábola y una recta`,
        enunciado: `Halla el área entre <span class="math">f(x) = x</span> y <span class="math">g(x) = x²</span> en el primer cuadrante.`,
        pasos: [
          `Intersecciones: <span class="math">x = x² ⟹ x(x − 1) = 0 ⟹ x = 0, x = 1</span>.`,
          `En [0,1]: <span class="math">x ≥ x²</span> (verifica en x = 0.5: 0.5 > 0.25). La recta está encima.`,
          `<span class="math">A = ∫[0,1] (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6</span>.`
        ],
        respuesta: `<span class="math">A = 1/6</span> unidades cuadradas.` },
      { titulo: `Área entre dos parábolas`,
        enunciado: `Halla el área entre <span class="math">f(x) = 4 − x²</span> y <span class="math">g(x) = x² − 4</span>.`,
        pasos: [
          `Intersecciones: <span class="math">4 − x² = x² − 4 ⟹ 8 = 2x² ⟹ x = ±2</span>.`,
          `En [−2, 2]: <span class="math">f ≥ g</span>.`,
          `<span class="math">A = ∫[−2,2] (4 − x² − (x² − 4)) dx = ∫[−2,2] (8 − 2x²) dx</span>.`,
          `<span class="math">= [8x − 2x³/3]<sub>−2</sub><sup>2</sup> = (16 − 16/3) − (−16 + 16/3) = 32 − 32/3 = 64/3</span>.`
        ],
        respuesta: `<span class="math">A = 64/3</span> unidades cuadradas.` },
      { titulo: `Área con cruce de curvas`,
        enunciado: `Halla el área entre <span class="math">f(x) = x³</span> y <span class="math">g(x) = x</span> en [−1, 1].`,
        pasos: [
          `Intersecciones en [−1,1]: <span class="math">x³ = x ⟹ x(x² − 1) = 0 ⟹ x = −1, 0, 1</span>.`,
          `En [−1, 0]: <span class="math">x³ ≥ x</span>; en [0, 1]: <span class="math">x ≥ x³</span>.`,
          `<span class="math">A = ∫[−1,0] (x³ − x) dx + ∫[0,1] (x − x³) dx</span>.`,
          `Cada integral = 1/4; total: <span class="math">A = 1/2</span>.`
        ],
        respuesta: `<span class="math">A = 1/2</span> unidades cuadradas.` },
      { titulo: `Área respecto al eje y`,
        enunciado: `Halla el área de la región delimitada por <span class="math">x = y²</span> y <span class="math">x = y + 2</span>.`,
        pasos: [
          `Intersecciones (en y): <span class="math">y² = y + 2 ⟹ y² − y − 2 = 0 ⟹ y = 2, y = −1</span>.`,
          `En [−1, 2]: <span class="math">y + 2 ≥ y²</span> (la recta está a la derecha).`,
          `<span class="math">A = ∫[−1,2] (y + 2 − y²) dy = [y²/2 + 2y − y³/3]<sub>−1</sub><sup>2</sup></span>.`,
          `<span class="math">= (2 + 4 − 8/3) − (1/2 − 2 + 1/3) = 10/3 − (−7/6) = 27/6 = 9/2</span>.`
        ],
        respuesta: `<span class="math">A = 9/2</span> unidades cuadradas.` },
      { titulo: `Área total (tres regiones)`,
        enunciado: `Halla el área total entre <span class="math">f(x) = sen x</span> y <span class="math">g(x) = 0</span> en [0, 2π].`,
        pasos: [
          `Las curvas se cruzan en x = π.`,
          `En [0, π]: <span class="math">sen x ≥ 0</span>; en [π, 2π]: <span class="math">sen x ≤ 0</span>.`,
          `<span class="math">∫[0,π] sen x dx = [−cos x]₀<sup>π</sup> = 2</span>.`,
          `<span class="math">|∫[π,2π] sen x dx| = |[−cos x]<sub>π</sub><sup>2π</sup>| = |−2| = 2</span>.`,
          `Área total: 4.`
        ],
        respuesta: `Área total = 4 unidades cuadradas.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Halla el área entre <span class="math">f(x) = x + 2</span> y <span class="math">g(x) = x²</span> (encuentra los límites de integración).`,
        pasos: [`Intersecciones: <span class="math">x + 2 = x² ⟹ x = 2, x = −1</span>.`, `<span class="math">A = ∫[−1,2] (x + 2 − x²) dx = [x²/2 + 2x − x³/3]<sub>−1</sub><sup>2</sup></span>.`, `<span class="math">= (2 + 4 − 8/3) − (1/2 − 2 + 1/3) = 9/2</span>.`],
        respuesta: `<span class="math">9/2</span> unidades cuadradas.` },
      { nivel: 'facil',
        enunciado: `Halla el área entre <span class="math">y = 3</span> y <span class="math">y = x²</span> para <span class="math">x ∈ [−√3, √3]</span>.`,
        pasos: [`f ≥ g en todo el intervalo.`, `<span class="math">A = ∫[−√3,√3] (3 − x²) dx = [3x − x³/3]<sub>−√3</sub><sup>√3</sup></span>.`, `<span class="math">= 2(3√3 − 3√3/3) = 2·2√3 = 4√3</span>.`],
        respuesta: `<span class="math">4√3 ≈ 6.93</span> unidades cuadradas.` },
      { nivel: 'facil',
        enunciado: `Halla el área entre <span class="math">f(x) = x</span> y <span class="math">g(x) = x²</span> en [0, 1].`,
        pasos: [`f ≥ g en [0,1].`, `<span class="math">A = ∫[0,1] (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/6</span>.`],
        respuesta: `<span class="math">1/6</span>.` },
      { nivel: 'facil',
        enunciado: `Halla el área entre <span class="math">y = 4</span> y <span class="math">y = x²</span> para <span class="math">x ∈ [0, 2]</span>.`,
        pasos: [`f ≥ g en todo el intervalo.`, `<span class="math">A = ∫[0,2] (4 − x²) dx = [4x − x³/3]₀² = 8 − 8/3 = 16/3</span>.`],
        respuesta: `<span class="math">16/3</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla el área de la región delimitada por <span class="math">f(x) = x³ − x</span> y <span class="math">g(x) = 0</span> en [−1, 1].`,
        pasos: [`Ceros: x = −1, 0, 1.`, `En [−1,0]: <span class="math">x³ − x ≥ 0</span>; en [0,1]: <span class="math">x³ − x ≤ 0</span>.`, `<span class="math">∫[−1,0] (x³ − x) dx = 1/4</span> y <span class="math">|∫[0,1] (x³ − x) dx| = 1/4</span>.`, `Total: 1/2.`],
        respuesta: `<span class="math">1/2</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla el área entre <span class="math">f(x) = x² + 1</span> y <span class="math">g(x) = 2x − 1</span> (encuentra intersecciones).`,
        pasos: [`<span class="math">x² + 1 = 2x − 1 ⟹ x² − 2x + 2 = 0</span>; discriminante: <span class="math">4 − 8 < 0</span>. No se intersectan.`, `En x = 0: <span class="math">f = 1 > g = −1</span>; f está siempre sobre g.`, `Área en [0, 2]: <span class="math">∫[0,2] (x² + 1 − 2x + 1) dx = ∫[0,2] (x² − 2x + 2) dx = [x³/3 − x² + 2x]₀² = 8/3 − 4 + 4 = 8/3</span>.`],
        respuesta: `No se cruzan; en [0, 2] el área es <span class="math">8/3</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla el área entre <span class="math">x = y²</span> y <span class="math">x = 4</span> (integra en y).`,
        pasos: [`Intersecciones: <span class="math">y² = 4 ⟹ y = ±2</span>.`, `<span class="math">A = ∫[−2,2] (4 − y²) dy = [4y − y³/3]<sub>−2</sub><sup>2</sup> = (8 − 8/3) − (−8 + 8/3) = 32/3</span>.`],
        respuesta: `<span class="math">32/3</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla el área entre <span class="math">f(x) = 4 − x²</span> y <span class="math">g(x) = 0</span> (el eje x) en [−2, 2].`,
        pasos: [`f ≥ 0 en todo el intervalo.`, `<span class="math">A = ∫[−2,2] (4 − x²) dx = [4x − x³/3]<sub>−2</sub><sup>2</sup> = (8 − 8/3) − (−8 + 8/3) = 32/3</span>.`],
        respuesta: `<span class="math">32/3</span>.` },
      { nivel: 'dificil',
        enunciado: `Halla el área total entre <span class="math">f(x) = cos x</span> y <span class="math">g(x) = sen x</span> en <span class="math">[0, 2π]</span>.`,
        pasos: [`Cruces: <span class="math">cos x = sen x ⟹ x = π/4, 5π/4</span> en [0, 2π].`, `En [0,π/4]: cos ≥ sen; en [π/4, 5π/4]: sen ≥ cos; en [5π/4, 2π]: cos ≥ sen.`, `Cada área es <span class="math">∫|cos x − sen x| dx</span> en su intervalo → cada una da 2√2.`, `Total: <span class="math">4√2</span>.`],
        respuesta: `<span class="math">4√2 ≈ 5.66</span> unidades cuadradas.` },
      { nivel: 'dificil',
        enunciado: `Halla el área de la región acotada por <span class="math">y² = x</span> y <span class="math">y = x − 2</span>.`,
        pasos: [`Intersecciones (en y): <span class="math">y² = y + 2 ⟹ y = 2, y = −1</span>.`, `Integra en y: <span class="math">A = ∫[−1,2] (y + 2 − y²) dy</span>.`, `<span class="math">= [y²/2 + 2y − y³/3]<sub>−1</sub><sup>2</sup> = (2 + 4 − 8/3) − (1/2 − 2 + 1/3) = 9/2</span>.`],
        respuesta: `<span class="math">9/2</span>.` }
    ],
    teoricas: [
      { q: `¿Por qué la fórmula del área entre curvas resta la función inferior de la superior?`, a: `Porque si <span class="math">f(x) ≥ g(x)</span>, la diferencia <span class="math">f(x) − g(x) ≥ 0</span> siempre. Al integrar una función no negativa se obtiene una cantidad geométricamente positiva (el área real). Si no se restara, el resultado podría ser negativo o incorrecto.` },
      { q: `¿Qué ocurre si no se verifican los puntos de cruce antes de integrar?`, a: `Si las curvas se intercambian (la que era inferior pasa a ser superior), el integrando cambia de signo y la integral subestima o da negativo. Siempre hay que verificar cuál curva está encima en cada subintervalo.` },
      { q: `¿Cuándo conviene integrar respecto a y en lugar de respecto a x?`, a: `Cuando la región tiene un límite izquierdo y un límite derecho que son funciones de y más simples, o cuando al integrar en x se necesitarían varias integrales separadas pero en y la región es un solo integral.` },
      { q: `¿Cómo se encuentra el área entre una curva y el eje x usando la fórmula de área entre curvas?`, a: `Se toma g(x) = 0 (el eje x) y se aplica <span class="math">A = ∫[a,b] |f(x)| dx</span>. Es el caso especial donde una de las "curvas" es el eje.` },
      { q: `Si <span class="math">∫[a,b] (f − g) dx = −3</span>, ¿qué significa?`, a: `Significa que en ese intervalo g ≥ f (la curva g está encima de f), así que para el área geométrica se debe tomar el valor absoluto: el área real es 3 unidades cuadradas.` },
      { q: `¿Cómo se verifica que los puntos de intersección hallados son los correctos?`, a: `Sustituyendo en ambas funciones y verificando que sus valores coinciden. Además, se puede evaluar un punto interior entre las intersecciones para confirmar cuál función está encima.` },
      { q: `¿Qué relación hay entre el área entre curvas y la integral definida de la diferencia?`, a: `Son lo mismo cuando la diferencia no cambia de signo. Si hay cruces, el área entre curvas es <span class="math">∫|f − g| dx</span>, que puede diferir de <span class="math">∫(f − g) dx</span> (que puede cancelarse entre regiones positivas y negativas).` }
    ],
    errores: [
      `Restar la función superior de la inferior, obteniendo una integral negativa. Siempre resta la curva que está debajo de la curva que está encima: (superior) − (inferior).`,
      `No buscar los puntos de cruce cuando se da solo el intervalo. Si las curvas se intercambian dentro del intervalo dado, hay que dividirlo en subintervalos.`,
      `Usar la fórmula en x cuando sería más simple integrar en y. Para regiones acotadas por curvas de la forma x = h(y), integar en y suele dar un solo integral en lugar de varios.`,
      `Olvidar incluir todas las regiones cuando hay más de un cruce. Si hay n cruces, se generan hasta n+1 subintervalos; cada uno debe integrarse por separado.`
    ],
    aplicacion: { titulo: `Excedente del consumidor en economía`, html: `<p>En economía, el <strong>excedente del consumidor</strong> es el beneficio que obtienen los compradores por pagar menos del precio máximo que estarían dispuestos a pagar. Si la curva de demanda es <span class="math">D(x) = 100 − 2x</span> (precio en función de cantidad) y el precio de mercado es p* = 60, la cantidad de equilibrio es x* = 20 y:</p><p><span class="math">EC = ∫[0,20] (D(x) − p*) dx = ∫[0,20] (100 − 2x − 60) dx = ∫[0,20] (40 − 2x) dx</span></p><p><span class="math">= [40x − x²]₀²⁰ = 800 − 400 = 400</span></p><p>Los consumidores se benefician con $400 en total. Esta es un área entre la curva de demanda y la línea horizontal del precio, y es el área entre dos curvas en su aplicación económica más directa.</p>` },
    calc: 'area-curvas',
    examen: [
      { tipo: 'num', q: `Halla el área entre <span class="math">f(x) = x</span> y <span class="math">g(x) = x²</span> en [0, 1].`, r: 0.1667, tol: 0.01, pasos: [`Verificar: f ≥ g en [0,1] porque x ≥ x² allí.`, `<span class="math">∫[0,1] (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6 ≈ 0.1667</span>.`] },
      { tipo: 'num', q: `Halla el área entre <span class="math">f(x) = 4 − x²</span> y el eje x en [−2, 2].`, r: 10.6667, tol: 0.01, pasos: [`f ≥ 0 en todo [−2, 2], así que el área es la integral directa.`, `<span class="math">∫[−2,2] (4 − x²) dx = [4x − x³/3]<sub>−2</sub><sup>2</sup> = 32/3 ≈ 10.67</span>.`] },
      { tipo: 'opt', q: `¿Cuáles son los puntos de intersección de <span class="math">y = x²</span> e <span class="math">y = x + 2</span>?`, opciones: [`x = 0, x = 2`, `x = −1, x = 2`, `x = 1, x = 3`, `x = −2, x = 1`], correcta: 1, pasos: [`<span class="math">x² = x + 2 ⟹ x² − x − 2 = 0 ⟹ (x − 2)(x + 1) = 0</span>.`, `Intersecciones en x = 2 y x = −1.`] },
      { tipo: 'num', q: `Halla el área entre <span class="math">y = x² − 4</span> y <span class="math">y = 4 − x²</span>.`, r: 21.3333, tol: 0.01, pasos: [`Intersecciones: <span class="math">x = ±2</span>.`, `<span class="math">∫[−2,2] (8 − 2x²) dx = [8x − 2x³/3]<sub>−2</sub><sup>2</sup> = 64/3 ≈ 21.33</span>.`] },
      { tipo: 'num', q: `Halla el área entre <span class="math">x = y²</span> y <span class="math">x = 4</span> (integra en y).`, r: 10.6667, tol: 0.01, pasos: [`Intersecciones en y: <span class="math">y = ±2</span>.`, `<span class="math">∫[−2,2] (4 − y²) dy = 32/3 ≈ 10.67</span>.`] },
      { tipo: 'num', q: `Halla el área entre <span class="math">f(x) = x + 2</span> y <span class="math">g(x) = x²</span> (límites naturales).`, r: 4.5, tol: 0.01, pasos: [`Intersecciones: x = −1, x = 2.`, `<span class="math">∫[−1,2] (x + 2 − x²) dx = 9/2 = 4.5</span>.`] },
      { tipo: 'opt', q: `Si en el intervalo [0, 2] las curvas f y g se cruzan en x = 1, ¿cómo se calcula el área entre ellas?`, opciones: [`<span class="math">∫[0,2] (f − g) dx</span>`, `<span class="math">∫[0,1] (f − g) dx + ∫[1,2] (f − g) dx</span>`, `<span class="math">∫[0,1] |f − g| dx</span> solo`, `<span class="math">∫[0,1] (f−g) dx + ∫[1,2] (g−f) dx</span> usando el signo correcto en cada parte`], correcta: 3, pasos: [`El cruce en x = 1 cambia cuál función está encima.`, `Hay que dividir el intervalo y restar apropiadamente en cada parte.`] },
      { tipo: 'num', q: `Halla el área total entre <span class="math">f(x) = sen x</span> y el eje x en [0, 2π].`, r: 4, tol: 0.01, pasos: [`<span class="math">∫[0,π] sen x dx = 2</span> y <span class="math">|∫[π,2π] sen x dx| = 2</span>.`, `Total = 4.`] },
      { tipo: 'num', q: `Halla el área de la región acotada por <span class="math">y = x³</span> y <span class="math">y = x</span> (solo en el primer cuadrante).`, r: 0.25, tol: 0.01, pasos: [`Intersecciones en [0,1]: x = 0, x = 1.`, `<span class="math">∫[0,1] (x − x³) dx = [x²/2 − x⁴/4]₀¹ = 1/4</span>.`] },
      { tipo: 'num', q: `Halla el área entre <span class="math">y = 2x − x²</span> y <span class="math">y = 0</span>.`, r: 1.3333, tol: 0.01, pasos: [`Raíces: x = 0, x = 2.`, `<span class="math">∫[0,2] (2x − x²) dx = [x² − x³/3]₀² = 4 − 8/3 = 4/3 ≈ 1.33</span>.`] }
    ]
  };

  /* ───────────────────────────────────────────────────────── 1.21 */
  T['1.21'] = {
    id: '1.21',
    unidad: 4,
    titulo: `Integración por Partes e Integrales Trigonométricas`,
    resumen: `Aplicarás la fórmula de integración por partes y técnicas para integrales de productos trigonométricos usando identidades.`,
    objetivos: [
      `Aplicar la fórmula <span class="math">∫u dv = uv − ∫v du</span> usando el criterio LIATE para elegir u.`,
      `Calcular integrales que requieren integración por partes repetida o la técnica del "lazo".`,
      `Integrar productos <span class="math">∫senⁿx cosᵐx dx</span> usando identidades trigonométricas e identidades de reducción.`,
      `Evaluar integrales de la forma <span class="math">∫x eˣ dx</span>, <span class="math">∫x ln x dx</span>, <span class="math">∫ln x dx</span> mediante partes.`
    ],
    teoria: [
      { titulo: `Fórmula de integración por partes`, html: `<p>La integración por partes proviene de la regla del producto para derivadas:</p><p><span class="math">(uv)′ = u′v + uv′ ⟹ ∫u dv = uv − ∫v du</span></p><p>En términos de funciones de x: si <span class="math">u = f(x)</span> y <span class="math">dv = g(x) dx</span>, entonces <span class="math">du = f′(x) dx</span> y <span class="math">v = ∫g(x) dx</span>, luego:</p><p><span class="math">∫f(x) g(x) dx = f(x) G(x) − ∫f′(x) G(x) dx</span></p><p>El objetivo es que la nueva integral <span class="math">∫v du</span> sea más simple que la original.</p>` },
      { titulo: `Criterio LIATE para elegir u`, html: `<p>El criterio LIATE ordena las funciones de mayor a menor prioridad para ser u (es decir, la que se va a derivar):</p><ol><li><strong>L</strong>ogarítmicas: <span class="math">ln x</span>, <span class="math">log x</span></li><li><strong>I</strong>nversas trigonométricas: <span class="math">arctan x</span>, <span class="math">arcsen x</span></li><li><strong>A</strong>lgebraicas: <span class="math">xⁿ</span></li><li><strong>T</strong>rigonométricas: <span class="math">sen x</span>, <span class="math">cos x</span></li><li><strong>E</strong>xponenciales: <span class="math">eˣ</span></li></ol><p>La función más arriba en la lista se elige como u; la otra es dv.</p>` },
      { titulo: `Integración por partes repetida`, html: `<p>A veces el nuevo integral <span class="math">∫v du</span> requiere otra integración por partes. Se aplica el método tantas veces como sea necesario. Para un producto <span class="math">xⁿ eˣ</span>, se necesitan n aplicaciones y el grado de x baja en cada paso.</p><p>Una herramienta organizada es la <strong>tabla de derivadas e integrales</strong>: se escribe u y sus derivadas sucesivas en una columna, y dv con sus antiderivadas en otra, alternando signos +, −, +, −, …</p>` },
      { titulo: `La técnica del lazo`, html: `<p>Para integrales de la forma <span class="math">∫eˣ sen x dx</span> o <span class="math">∫eˣ cos x dx</span>, al aplicar partes dos veces aparece de nuevo el integral original. Se llama al integral original I, se obtiene una ecuación del tipo <span class="math">I = A − I</span> o <span class="math">I = A + B − I</span>, y se despeja I algebraicamente:</p><p><span class="math">2I = A ⟹ I = A/2</span></p><p>Este truco evita el ciclo infinito y da la respuesta directamente.</p>` },
      { titulo: `Integrales de productos trigonométricos: potencias`, html: `<p>Para <span class="math">∫senⁿx cosᵐx dx</span>:</p><ul><li>Si n es impar: factoriza un seno, usa <span class="math">sen²x = 1 − cos²x</span> y sustituye u = cos x.</li><li>Si m es impar: factoriza un coseno, usa <span class="math">cos²x = 1 − sen²x</span> y sustituye u = sen x.</li><li>Si ambos son pares: usa las identidades de ángulo doble: <span class="math">sen²x = (1 − cos 2x)/2</span> y <span class="math">cos²x = (1 + cos 2x)/2</span>.</li></ul>` },
      { titulo: `Identidades de reducción`, html: `<p>Para potencias altas de seno o coseno, las identidades de reducción bajan el grado:</p><ul><li><span class="math">∫senⁿx dx = −senⁿ⁻¹x cos x/n + ((n−1)/n)∫sen<sup>n−2</sup>x dx</span></li><li><span class="math">∫cosⁿx dx = cosⁿ⁻¹x sen x/n + ((n−1)/n)∫cos<sup>n−2</sup>x dx</span></li></ul><p>Estas permiten reducir una integral de grado n a grado n − 2 de forma recursiva hasta llegar a <span class="math">∫1 dx</span> o <span class="math">∫cos 2x dx</span>.</p>` },
      { titulo: `Integración de ∫ln x dx`, html: `<p>Aunque no parece un producto, se puede aplicar partes con <span class="math">u = ln x</span> y <span class="math">dv = dx</span>:</p><p><span class="math">du = 1/x dx</span>, <span class="math">v = x</span></p><p><span class="math">∫ln x dx = x ln x − ∫x·(1/x) dx = x ln x − ∫1 dx = x ln x − x + C</span></p><p>Generalización: <span class="math">∫xⁿ ln x dx</span> con u = ln x, dv = xⁿ dx.</p>` }
    ],
    formulas: [
      { label: `Integración por partes`, html: `<span class="math">∫u dv = uv − ∫v du</span>` },
      { label: `Criterio LIATE`, html: `<span class="math">u: Logarítmica > Inversa trig > Algebraica > Trigonométrica > Exponencial</span>` },
      { label: `∫ln x dx`, html: `<span class="math">∫ln x dx = x ln x − x + C</span>` },
      { label: `Lazo exponencial-trig`, html: `<span class="math">∫eˣ sen x dx = eˣ(sen x − cos x)/2 + C</span>` },
      { label: `Sen al cuadrado`, html: `<span class="math">sen²x = (1 − cos 2x)/2</span>` },
      { label: `Cos al cuadrado`, html: `<span class="math">cos²x = (1 + cos 2x)/2</span>` },
      { label: `Reducción de senoⁿ`, html: `<span class="math">∫senⁿx dx = −senⁿ⁻¹x cos x/n + ((n−1)/n)∫sen<sup>n−2</sup>x dx</span>` },
      { label: `Producto n impar`, html: `<span class="math">∫sen<sup>2k+1</sup>x cosᵐx dx: u = cos x, du = −sen x dx</span>` }
    ],
    ejemplos: [
      { titulo: `Integración por partes básica`,
        enunciado: `Calcula <span class="math">∫x eˣ dx</span>.`,
        pasos: [
          `LIATE: u = x (algebraica), dv = eˣ dx (exponencial).`,
          `<span class="math">du = dx</span>, <span class="math">v = eˣ</span>.`,
          `<span class="math">∫x eˣ dx = x eˣ − ∫eˣ dx = x eˣ − eˣ + C</span>.`,
          `Factoriza: <span class="math">eˣ(x − 1) + C</span>.`
        ],
        respuesta: `<span class="math">∫x eˣ dx = eˣ(x − 1) + C</span>.` },
      { titulo: `Integral de ln x`,
        enunciado: `Calcula <span class="math">∫ln x dx</span>.`,
        pasos: [
          `u = ln x (logarítmica), dv = dx.`,
          `<span class="math">du = 1/x dx</span>, <span class="math">v = x</span>.`,
          `<span class="math">∫ln x dx = x ln x − ∫x·(1/x) dx = x ln x − x + C</span>.`
        ],
        respuesta: `<span class="math">∫ln x dx = x ln x − x + C</span>.` },
      { titulo: `Técnica del lazo`,
        enunciado: `Calcula <span class="math">∫eˣ cos x dx</span>.`,
        pasos: [
          `Primera partes: u = cos x, dv = eˣ dx → <span class="math">I = eˣ cos x + ∫eˣ sen x dx</span>.`,
          `Segunda partes: u = sen x, dv = eˣ dx → <span class="math">∫eˣ sen x dx = eˣ sen x − ∫eˣ cos x dx = eˣ sen x − I</span>.`,
          `Sustituye: <span class="math">I = eˣ cos x + eˣ sen x − I ⟹ 2I = eˣ(cos x + sen x)</span>.`,
          `<span class="math">I = eˣ(cos x + sen x)/2 + C</span>.`
        ],
        respuesta: `<span class="math">∫eˣ cos x dx = eˣ(sen x + cos x)/2 + C</span>.` },
      { titulo: `Integral trigonométrica con potencia impar`,
        enunciado: `Calcula <span class="math">∫sen³x dx</span>.`,
        pasos: [
          `Factoriza un seno: <span class="math">∫sen²x · sen x dx</span>.`,
          `Usa <span class="math">sen²x = 1 − cos²x</span>: <span class="math">∫(1 − cos²x) sen x dx</span>.`,
          `Sea u = cos x, du = −sen x dx: <span class="math">−∫(1 − u²) du = −u + u³/3 + C</span>.`,
          `Regresa: <span class="math">−cos x + cos³x/3 + C</span>.`
        ],
        respuesta: `<span class="math">∫sen³x dx = −cos x + cos³x/3 + C</span>.` },
      { titulo: `Integral con potencias pares: ∫cos²x dx`,
        enunciado: `Calcula <span class="math">∫cos²x dx</span>.`,
        pasos: [
          `Usa la identidad: <span class="math">cos²x = (1 + cos 2x)/2</span>.`,
          `<span class="math">∫(1 + cos 2x)/2 dx = x/2 + sen(2x)/4 + C</span>.`
        ],
        respuesta: `<span class="math">∫cos²x dx = x/2 + sen(2x)/4 + C</span>.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫x cos x dx</span> por partes.`,
        pasos: [`u = x, dv = cos x dx.`, `du = dx, v = sen x.`, `<span class="math">x sen x − ∫sen x dx = x sen x + cos x + C</span>.`],
        respuesta: `<span class="math">x sen x + cos x + C</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫ln x dx</span>.`,
        pasos: [`u = ln x, dv = dx.`, `du = 1/x dx, v = x.`, `<span class="math">x ln x − x + C</span>.`],
        respuesta: `<span class="math">x ln x − x + C</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫sen²x dx</span> usando la identidad de ángulo doble.`,
        pasos: [`<span class="math">sen²x = (1 − cos 2x)/2</span>.`, `<span class="math">∫(1 − cos 2x)/2 dx = x/2 − sen(2x)/4 + C</span>.`],
        respuesta: `<span class="math">x/2 − sen(2x)/4 + C</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">∫x² eˣ dx</span> usando partes repetida.`,
        pasos: [`Primera partes: u = x², dv = eˣ dx. Resulta: <span class="math">x² eˣ − 2∫x eˣ dx</span>.`, `Segunda partes (∫x eˣ dx = eˣ(x−1)): total <span class="math">x² eˣ − 2eˣ(x−1) + C</span>.`, `Factoriza: <span class="math">eˣ(x² − 2x + 2) + C</span>.`],
        respuesta: `<span class="math">eˣ(x² − 2x + 2) + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫x ln x dx</span>.`,
        pasos: [`u = ln x, dv = x dx.`, `du = 1/x dx, v = x²/2.`, `<span class="math">x² ln x/2 − ∫x/2 dx = x² ln x/2 − x²/4 + C</span>.`],
        respuesta: `<span class="math">x²(2 ln x − 1)/4 + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫eˣ sen x dx</span> mediante el lazo.`,
        pasos: [`Primera partes: u = sen x, dv = eˣ dx. Resulta: <span class="math">eˣ sen x − ∫eˣ cos x dx</span>.`, `Segunda partes: <span class="math">∫eˣ cos x dx = eˣ cos x + ∫eˣ sen x dx = eˣ cos x + I</span>.`, `Ecuación: <span class="math">I = eˣ sen x − eˣ cos x − I ⟹ 2I = eˣ(sen x − cos x)</span>.`],
        respuesta: `<span class="math">∫eˣ sen x dx = eˣ(sen x − cos x)/2 + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫cos³x dx</span>.`,
        pasos: [`Factoriza: <span class="math">∫cos²x · cos x dx = ∫(1 − sen²x) cos x dx</span>.`, `u = sen x, du = cos x dx.`, `<span class="math">∫(1 − u²) du = u − u³/3 + C = sen x − sen³x/3 + C</span>.`],
        respuesta: `<span class="math">sen x − sen³x/3 + C</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">∫x arctan x dx</span>.`,
        pasos: [`LIATE: u = arctan x (inversa trig), dv = x dx.`, `du = 1/(1+x²) dx, v = x²/2.`, `<span class="math">x² arctan x/2 − (1/2)∫x²/(1+x²) dx = x² arctan x/2 − (1/2)(x − arctan x) + C</span>.`],
        respuesta: `<span class="math">((x² + 1) arctan x − x)/2 + C</span>.` },
      { nivel: 'dificil',
        enunciado: `Calcula <span class="math">∫sen²x cos²x dx</span>.`,
        pasos: [`Usa <span class="math">sen²x cos²x = (sen 2x)²/4 = (1 − cos 4x)/8</span>.`, `<span class="math">∫(1 − cos 4x)/8 dx = x/8 − sen(4x)/32 + C</span>.`],
        respuesta: `<span class="math">x/8 − sen(4x)/32 + C</span>.` },
      { nivel: 'dificil',
        enunciado: `Calcula <span class="math">∫[1,e] x² ln x dx</span>.`,
        pasos: [`Por partes: u = ln x, dv = x² dx → v = x³/3.`, `<span class="math">∫x² ln x dx = x³ ln x/3 − ∫x²/3 dx = x³ ln x/3 − x³/9 + C</span>.`, `Evalúa en [1, e]: <span class="math">F(e) = e³/3 − e³/9</span>; <span class="math">F(1) = 0 − 1/9</span>.`, `Resultado: <span class="math">2e³/9 + 1/9</span>.`],
        respuesta: `<span class="math">(2e³ + 1)/9</span>.` },
      { nivel: 'dificil',
        enunciado: `Calcula <span class="math">∫x² cos x dx</span> (dos aplicaciones de partes).`,
        pasos: [`Primera: u = x², dv = cos x dx → v = sen x. Da <span class="math">x² sen x − 2∫x sen x dx</span>.`, `Segunda: u = x, dv = sen x dx → v = −cos x. Da <span class="math">x² sen x − 2(−x cos x + ∫cos x dx)</span>.`, `<span class="math">= x² sen x + 2x cos x − 2 sen x + C</span>.`],
        respuesta: `<span class="math">x² sen x + 2x cos x − 2 sen x + C</span>.` }
    ],
    teoricas: [
      { q: `¿De qué regla de derivación proviene la integración por partes?`, a: `De la regla del producto: <span class="math">(uv)′ = u′v + uv′</span>. Al integrar ambos lados y despejar se obtiene <span class="math">∫u dv = uv − ∫v du</span>.` },
      { q: `¿Qué indica el criterio LIATE?`, a: `Indica el orden de prioridad para elegir u: Logarítmica, Inversa trigonométrica, Algebraica, Trigonométrica, Exponencial. Se elige como u la función más arriba en la lista, porque su derivada generalmente simplifica el integrando.` },
      { q: `¿Cuándo se usa la técnica del lazo?`, a: `Cuando al aplicar partes dos veces aparece de nuevo el integral original. Se llama I a ese integral, se obtiene una ecuación algebraica (por ejemplo, 2I = algo) y se despeja I.` },
      { q: `¿Por qué se distingue entre potencias pares e impares en <span class="math">∫senⁿx cosᵐx dx</span>?`, a: `Porque la estrategia es diferente: con un exponente impar se puede factorizar un seno (o coseno) y usar la identidad pitagónica para hacer sustitución simple. Con ambos pares, no queda factor extra para sustituir y hay que bajar el grado con identidades de ángulo doble.` },
      { q: `¿Es posible elegir u y dv de manera incorrecta? ¿Qué ocurre?`, a: `Sí. Si se elige mal, el nuevo integral <span class="math">∫v du</span> puede ser más complicado que el original o incluso circular sin simplificar. En ese caso se prueba otra elección. La técnica del lazo es un caso especial donde el ciclo se aprovecha para despejar.` },
      { q: `¿Cómo se aplica la integración por partes a una integral definida?`, a: `Se aplica la fórmula <span class="math">∫[a,b] u dv = [uv]<sub>a</sub><sup>b</sup> − ∫[a,b] v du</span>. Se evalúan los límites en el término uv y se integra normalmente el término restante.` },
      { q: `¿Qué identidades se usan para integrar <span class="math">∫cos²x dx</span> y <span class="math">∫sen²x dx</span>?`, a: `Las identidades de ángulo doble: <span class="math">cos²x = (1 + cos 2x)/2</span> y <span class="math">sen²x = (1 − cos 2x)/2</span>. Transforman el integrando en una forma que se integra directamente.` },
      { q: `¿Cuándo conviene usar las fórmulas de reducción en lugar de descomponer directamente?`, a: `Cuando la potencia es alta (n ≥ 4) y la descomposición directa requeriría muchos pasos. Las fórmulas de reducción bajan el grado en 2 con cada aplicación, llegando a casos base conocidos.` }
    ],
    errores: [
      `Elegir como u la función exponencial cuando hay una función logarítmica o algebraica. Por LIATE, logarítmicas y algebraicas tienen mayor prioridad; exponenciales van al final como dv.`,
      `Olvidar incluir el signo menos en <span class="math">∫u dv = uv − ∫v du</span>. La fórmula tiene un signo menos; sin él el resultado es incorrecto.`,
      `En la técnica del lazo, seguir aplicando partes indefinidamente. Cuando aparece el integral original, se debe plantear la ecuación algebraica y despejar; no continuar el ciclo.`,
      `Al integrar <span class="math">∫senⁿx cosᵐx dx</span> con ambas potencias pares, intentar una sustitución directa sin usar primero las identidades de ángulo doble. Las sustituciones u = sen x o u = cos x no funcionan sin un factor extra.`
    ],
    aplicacion: { titulo: `Movimiento oscilatorio amortiguado`, html: `<p>En un sistema mecánico con amortiguamiento, la posición de un oscilador es <span class="math">x(t) = e<sup>−t</sup> cos t</span>. Para hallar el desplazamiento total en [0, π]:</p><p><span class="math">∫[0,π] e<sup>−t</sup> cos t dt</span></p><p>Se aplica la técnica del lazo con partes:</p><ol><li>Sea <span class="math">I = ∫e<sup>−t</sup> cos t dt</span>. Primera partes: u = cos t, dv = e<sup>−t</sup> dt → v = −e<sup>−t</sup>.</li><li><span class="math">I = −e<sup>−t</sup> cos t − ∫e<sup>−t</sup> sen t dt</span>.</li><li>Segunda partes: <span class="math">∫e<sup>−t</sup> sen t dt = −e<sup>−t</sup> sen t + ∫e<sup>−t</sup> cos t dt = −e<sup>−t</sup> sen t + I</span>.</li><li><span class="math">I = −e<sup>−t</sup> cos t + e<sup>−t</sup> sen t − I ⟹ 2I = e<sup>−t</sup>(sen t − cos t)</span>.</li><li><span class="math">I = e<sup>−t</sup>(sen t − cos t)/2</span>.</li><li>Evaluado en [0, π]: <span class="math">(e<sup>−π</sup>(0 + 1) − 1·(0 − 1))/2 = (e<sup>−π</sup> + 1)/2 ≈ 0.524</span>.</li></ol><p>Este cálculo es fundamental en ingeniería mecánica y análisis de vibraciones.</p>` },
    calc: 'partes',
    examen: [
      { tipo: 'num', q: `Calcula <span class="math">∫x eˣ dx</span> y evalúa en x = 1 (sin C).`, r: 0, tol: 0.01, pasos: [`<span class="math">∫x eˣ dx = eˣ(x − 1) + C</span>.`, `En x = 1: <span class="math">e¹(1 − 1) = 0</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫ln x dx</span> y evalúa en x = e (sin C).`, r: 1, tol: 0.01, pasos: [`<span class="math">∫ln x dx = x ln x − x + C</span>.`, `En x = e: <span class="math">e·1 − e = 0</span>.`] },
      { tipo: 'opt', q: `¿Cuál es la elección correcta de u para <span class="math">∫x ln x dx</span>?`, opciones: [`u = x`, `u = ln x`, `u = x ln x`, `u = 1`], correcta: 1, pasos: [`Por LIATE: logarítmica tiene mayor prioridad que algebraica.`, `Elegimos u = ln x.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫x cos x dx</span> y evalúa en x = π (sin C).`, r: -3.14159, tol: 0.01, pasos: [`<span class="math">∫x cos x dx = x sen x + cos x + C</span>.`, `En x = π: <span class="math">π sen π + cos π = 0 − 1 = −1</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫[0,1] x eˣ dx</span>.`, r: 1, tol: 0.01, pasos: [`<span class="math">∫x eˣ dx = eˣ(x − 1) + C</span>.`, `<span class="math">[eˣ(x−1)]₀¹ = e¹·0 − e⁰·(−1) = 0 + 1 = 1</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫sen²x dx</span> y evalúa en x = π/2 (sin C).`, r: 0.7854, tol: 0.01, pasos: [`<span class="math">∫sen²x dx = x/2 − sen(2x)/4 + C</span>.`, `En x = π/2: <span class="math">π/4 − sen(π)/4 = π/4 ≈ 0.785</span>.`] },
      { tipo: 'opt', q: `¿Cuál es la estrategia para <span class="math">∫sen²x cos³x dx</span>?`, opciones: [`Usar ángulo doble (ambas potencias pares)`, `Factorizar cos x, usar cos²x = 1 − sen²x, sustituir u = sen x (m impar)`, `Integrar directamente sin sustitución`, `Usar partes con u = cos³x`], correcta: 1, pasos: [`cos³x tiene exponente impar.`, `Se factoriza un cos x y se usa la identidad pitagónica para sustituir.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫cos²x dx</span> y evalúa en x = π/2 (sin C).`, r: 0.7854, tol: 0.01, pasos: [`<span class="math">∫cos²x dx = x/2 + sen(2x)/4 + C</span>.`, `En x = π/2: <span class="math">π/4 + sen(π)/4 = π/4 ≈ 0.785</span>.`] },
      { tipo: 'num', q: `Halla el resultado de aplicar el lazo a <span class="math">∫eˣ cos x dx</span> y evalúa en x = 0 (sin C).`, r: 0.5, tol: 0.01, pasos: [`<span class="math">∫eˣ cos x dx = eˣ(sen x + cos x)/2 + C</span>.`, `En x = 0: <span class="math">e⁰(0 + 1)/2 = 1/2</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">∫[1,e] ln x dx</span>.`, r: 1, tol: 0.01, pasos: [`<span class="math">∫ln x dx = x ln x − x + C</span>.`, `<span class="math">[x ln x − x]₁ᵉ = (e·1 − e) − (1·0 − 1) = 0 + 1 = 1</span>.`] }
    ]
  };

})();

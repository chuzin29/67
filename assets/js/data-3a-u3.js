/* data-3a-u3.js — Unidad 3: Derivadas */
(function () {
  var T = (window.CURSO_3A = window.CURSO_3A || { temas: {} }).temas;

  T['1.10'] = {
    id: '1.10',
    unidad: 3,
    titulo: `Definición de derivada`,
    resumen: `Definirás la derivada como límite del cociente incremental y la interpretarás como pendiente de la tangente y como velocidad instantánea.`,
    objetivos: [
      `Calcular la derivada de una función en un punto y como función usando la definición con límites.`,
      `Interpretar <span class="math">f′(a)</span> como pendiente de la recta tangente y como razón de cambio instantánea, con sus unidades.`,
      `Plantear y resolver problemas de velocidad instantánea y de costo marginal a partir del cociente incremental.`,
      `Decidir si una función es derivable en un punto y explicar por qué derivable implica continua pero no al revés.`
    ],
    teoria: [
      { titulo: `De la pendiente de una recta a la de una curva`, html: `<p>Para una recta, la pendiente es siempre la misma: <span class="math">m = (y₂ − y₁)/(x₂ − x₁)</span>. Para una curva la inclinación cambia de punto a punto, así que preguntamos: <em>¿qué inclinación tiene la curva exactamente en el punto (a, f(a))?</em></p><p>Una recta que corta la gráfica en dos puntos, (a, f(a)) y (a + h, f(a + h)), se llama <strong>secante</strong> y su pendiente es el <strong>cociente incremental</strong></p><p><span class="math">(f(a + h) − f(a))/h</span></p><p>Mientras h sea distinto de 0 esta pendiente se puede calcular. Si hacemos h cada vez más pequeño, el segundo punto se desliza hacia el primero y la secante gira hasta convertirse en la <strong>tangente</strong>.</p>` },
      { titulo: `Definición de derivada en un punto`, html: `<p>La <strong>derivada de f en a</strong> es el límite (si existe)</p><p><span class="math">f′(a) = lím<sub>h→0</sub> (f(a + h) − f(a))/h</span></p><p>Una forma equivalente, que sale de llamar x = a + h, es</p><p><span class="math">f′(a) = lím<sub>x→a</sub> (f(x) − f(a))/(x − a)</span></p><p>Si el límite existe y es un número real, decimos que f es <strong>derivable</strong> (o diferenciable) en a. Observa que el cociente tiene la forma <span class="math">0/0</span> al sustituir h = 0: por eso aplicamos las técnicas de límites del tema 1.3 (factorizar, racionalizar, simplificar) antes de evaluar.</p>` },
      { titulo: `Procedimiento para derivar con la definición`, html: `<ol><li>Escribe <span class="math">f(x + h)</span> sustituyendo x + h en toda la fórmula de f.</li><li>Forma la diferencia <span class="math">f(x + h) − f(x)</span> y desarrolla (productos notables, racionalización o común denominador).</li><li>Simplifica hasta que h quede como factor común del numerador.</li><li>Divide entre h.</li><li>Calcula el límite cuando h → 0.</li></ol><p>Si en lugar de x usas un número a desde el inicio, obtienes el número <span class="math">f′(a)</span>; si dejas x literal, obtienes la <strong>función derivada</strong> <span class="math">f′(x)</span>, que entrega la pendiente en cada punto.</p>` },
      { titulo: `Interpretación geométrica: la recta tangente`, html: `<p>Si <span class="math">f′(a)</span> existe, la recta tangente a la gráfica en (a, f(a)) tiene pendiente <span class="math">m = f′(a)</span> y ecuación</p><p><span class="math">y − f(a) = f′(a)(x − a)</span></p><ul><li><span class="math">f′(a) > 0</span>: la gráfica sube al pasar por a (f es creciente ahí).</li><li><span class="math">f′(a) < 0</span>: la gráfica baja.</li><li><span class="math">f′(a) = 0</span>: tangente horizontal; suele ocurrir en cimas y valles (tema 1.16).</li><li>Mientras mayor sea |f′(a)|, más empinada es la curva.</li></ul><p>La recta tangente es la mejor aproximación lineal de la curva cerca de a.</p>` },
      { titulo: `Velocidad instantánea y razón de cambio`, html: `<p>Si s(t) es la posición de un móvil, su velocidad media entre t y t + h es <span class="math">(s(t + h) − s(t))/h</span>. La <strong>velocidad instantánea</strong> (la que marca el velocímetro) es el límite</p><p><span class="math">v(t) = s′(t) = lím<sub>h→0</sub> (s(t + h) − s(t))/h</span></p><p>En general, <span class="math">f′(a)</span> es la <strong>razón de cambio instantánea</strong> de f respecto a x. Sus unidades son (unidades de f) por (unidades de x): metros por segundo, dólares por unidad producida, litros por minuto. En economía, la derivada del costo se llama <strong>costo marginal</strong>: aproxima lo que cuesta producir una unidad adicional.</p>` },
      { titulo: `La función derivada y notaciones`, html: `<p>Al dejar x variable, <span class="math">f′(x) = lím<sub>h→0</sub> (f(x + h) − f(x))/h</span> es una nueva función cuyo dominio son los puntos donde f es derivable. Las notaciones más usadas son:</p><ul><li>Lagrange: <span class="math">f′(x)</span>, <span class="math">y′</span>.</li><li>Leibniz: <span class="math">dy/dx</span>, que sugiere "cambio de y entre cambio de x" y se leerá "derivada de y respecto a x".</li><li>Newton/operador: <span class="math">D<sub>x</sub> f</span>.</li></ul><p>La segunda notación será esencial en integrales, donde <span class="math">dx</span> vuelve a aparecer.</p>` },
      { titulo: `Derivabilidad y continuidad`, html: `<p><strong>Teorema.</strong> Si f es derivable en a, entonces f es continua en a. (Si el cociente incremental tiene límite finito, el numerador <span class="math">f(a + h) − f(a)</span> debe tender a 0.)</p><p>El recíproco es <strong>falso</strong>. Una función continua puede no ser derivable en a cuando:</p><ul><li>Hay un <strong>pico o esquina</strong>: las derivadas laterales existen pero son distintas. Ejemplo: <span class="math">f(x) = |x|</span> en 0, con pendientes −1 a la izquierda y 1 a la derecha.</li><li>Hay una <strong>tangente vertical</strong>: el cociente tiende a ∞. Ejemplo: <span class="math">f(x) = ∛x</span> en 0.</li><li>Hay una <strong>cúspide</strong>, como <span class="math">f(x) = x<sup>2/3</sup></span> en 0.</li></ul><p>Y si f es discontinua en a (salto, hueco o asíntota), tampoco es derivable ahí.</p>` },
      { titulo: `Derivadas laterales`, html: `<p>Como todo límite, la derivada puede analizarse por los lados:</p><p><span class="math">f′<sub>+</sub>(a) = lím<sub>h→0<sup>+</sup></sub> (f(a + h) − f(a))/h</span>, <span class="math">f′<sub>−</sub>(a) = lím<sub>h→0<sup>−</sup></sub> (f(a + h) − f(a))/h</span></p><p>f es derivable en a si y solo si ambas existen y son iguales. Es la herramienta para analizar funciones definidas por partes, donde se pide que la gráfica "empalme suave": además de continuidad se exige igualdad de pendientes.</p>` }
    ],
    formulas: [
      { label: `Derivada en un punto`, html: `<span class="math">f′(a) = lím<sub>h→0</sub> (f(a + h) − f(a))/h</span>` },
      { label: `Forma equivalente`, html: `<span class="math">f′(a) = lím<sub>x→a</sub> (f(x) − f(a))/(x − a)</span>` },
      { label: `Función derivada`, html: `<span class="math">f′(x) = lím<sub>h→0</sub> (f(x + h) − f(x))/h</span>` },
      { label: `Recta tangente`, html: `<span class="math">y − f(a) = f′(a)(x − a)</span>` },
      { label: `Velocidad instantánea`, html: `<span class="math">v(t) = s′(t) = lím<sub>h→0</sub> (s(t + h) − s(t))/h</span>` },
      { label: `Notación de Leibniz`, html: `<span class="math">f′(x) = dy/dx</span>` },
      { label: `Derivable ⇒ continua`, html: `<span class="math">f derivable en a ⇒ f continua en a</span>` },
      { label: `Derivadas laterales`, html: `<span class="math">f′(a) existe ⇔ f′<sub>+</sub>(a) = f′<sub>−</sub>(a)</span>` }
    ],
    ejemplos: [
      { titulo: `Derivada de una función lineal`,
        enunciado: `Usa la definición para hallar <span class="math">f′(x)</span> si <span class="math">f(x) = 3x − 5</span>.`,
        pasos: [
          `<span class="math">f(x + h) = 3(x + h) − 5 = 3x + 3h − 5</span>.`,
          `Diferencia: <span class="math">f(x + h) − f(x) = (3x + 3h − 5) − (3x − 5) = 3h</span>.`,
          `Cociente: <span class="math">3h/h = 3</span> (con h ≠ 0).`,
          `Límite: <span class="math">lím<sub>h→0</sub> 3 = 3</span>.`
        ],
        respuesta: `<span class="math">f′(x) = 3</span>: la pendiente de una recta es constante.` },
      { titulo: `Derivada de x² en un punto`,
        enunciado: `Calcula <span class="math">f′(3)</span> para <span class="math">f(x) = x²</span> con la definición.`,
        pasos: [
          `<span class="math">f(3 + h) = (3 + h)² = 9 + 6h + h²</span> y <span class="math">f(3) = 9</span>.`,
          `Diferencia: <span class="math">f(3 + h) − f(3) = 6h + h²</span>.`,
          `Cociente: <span class="math">(6h + h²)/h = 6 + h</span> para h ≠ 0.`,
          `Límite: <span class="math">lím<sub>h→0</sub> (6 + h) = 6</span>.`
        ],
        respuesta: `<span class="math">f′(3) = 6</span>. La tangente en (3, 9) tiene pendiente 6.` },
      { titulo: `Derivada de una raíz (racionalizando)`,
        enunciado: `Halla <span class="math">f′(x)</span> si <span class="math">f(x) = √x</span> y evalúa <span class="math">f′(4)</span>.`,
        pasos: [
          `Cociente: <span class="math">(√(x + h) − √x)/h</span>, que es <span class="math">0/0</span> en h = 0.`,
          `Multiplica y divide por el conjugado <span class="math">√(x + h) + √x</span>: el numerador queda <span class="math">(x + h) − x = h</span>.`,
          `Resulta <span class="math">h/(h(√(x + h) + √x)) = 1/(√(x + h) + √x)</span>.`,
          `Límite cuando h → 0: <span class="math">1/(2√x)</span>.`,
          `Evaluamos: <span class="math">f′(4) = 1/(2·2) = 1/4</span>.`
        ],
        respuesta: `<span class="math">f′(x) = 1/(2√x)</span> para x > 0; en particular <span class="math">f′(4) = 1/4</span>.` },
      { titulo: `Derivada de 1/x (común denominador)`,
        enunciado: `Usa la definición para obtener <span class="math">f′(x)</span> si <span class="math">f(x) = 1/x</span> y calcula <span class="math">f′(2)</span>.`,
        pasos: [
          `Diferencia: <span class="math">1/(x + h) − 1/x = (x − (x + h))/(x(x + h)) = −h/(x(x + h))</span>.`,
          `Divide entre h: <span class="math">−1/(x(x + h))</span>.`,
          `Límite cuando h → 0: <span class="math">−1/x²</span>.`,
          `Evaluamos en 2: <span class="math">f′(2) = −1/4</span>.`
        ],
        respuesta: `<span class="math">f′(x) = −1/x²</span>; <span class="math">f′(2) = −1/4</span> (la curva baja en x = 2).` },
      { titulo: `Un pico: |x| no es derivable en 0`,
        enunciado: `Analiza la derivabilidad de <span class="math">f(x) = |x|</span> en x = 0.`,
        pasos: [
          `Cociente en 0: <span class="math">(|h| − 0)/h = |h|/h</span>.`,
          `Si h → 0<sup>+</sup>: <span class="math">|h|/h = 1</span>, así que <span class="math">f′<sub>+</sub>(0) = 1</span>.`,
          `Si h → 0<sup>−</sup>: <span class="math">|h|/h = −1</span>, así que <span class="math">f′<sub>−</sub>(0) = −1</span>.`,
          `Las derivadas laterales son distintas, por lo que el límite no existe. Pero f sí es continua en 0 (f(0) = 0 = límite).`
        ],
        respuesta: `f no es derivable en 0 aunque sea continua: la gráfica tiene un pico.` },
      { titulo: `Velocidad instantánea de un bus`,
        enunciado: `Un bus de la ruta 101 recorre <span class="math">s(t) = t² + 4t</span> metros en t segundos desde que arranca. Calcula su velocidad instantánea en t = 3 s con la definición.`,
        pasos: [
          `<span class="math">s(3) = 9 + 12 = 21</span> y <span class="math">s(3 + h) = (3 + h)² + 4(3 + h) = 9 + 6h + h² + 12 + 4h = 21 + 10h + h²</span>.`,
          `Diferencia: <span class="math">s(3 + h) − s(3) = 10h + h²</span>.`,
          `Velocidad media en [3, 3 + h]: <span class="math">(10h + h²)/h = 10 + h</span> m por s.`,
          `Límite cuando h → 0: <span class="math">10</span>.`
        ],
        respuesta: `<span class="math">v(3) = 10</span> m por s (36 km por h). Para h = 0.1 la velocidad media ya es 10.1 m por s.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Con la definición, halla <span class="math">f′(x)</span> si <span class="math">f(x) = 5x + 2</span>.`,
        pasos: [`<span class="math">f(x + h) − f(x) = 5(x + h) + 2 − 5x − 2 = 5h</span>.`, `Cociente: <span class="math">5h/h = 5</span>.`, `El límite de una constante es esa constante.`],
        respuesta: `<span class="math">f′(x) = 5</span>.` },
      { nivel: 'facil',
        enunciado: `Con la definición, calcula <span class="math">f′(1)</span> si <span class="math">f(x) = x²</span>.`,
        pasos: [`<span class="math">f(1 + h) = 1 + 2h + h²</span>, <span class="math">f(1) = 1</span>.`, `Diferencia: <span class="math">2h + h²</span>; cociente: <span class="math">2 + h</span>.`, `Límite cuando h → 0: 2.`],
        respuesta: `<span class="math">f′(1) = 2</span>.` },
      { nivel: 'facil',
        enunciado: `Demuestra con la definición que la derivada de la función constante <span class="math">f(x) = 4</span> es 0.`,
        pasos: [`<span class="math">f(x + h) − f(x) = 4 − 4 = 0</span>.`, `Cociente: <span class="math">0/h = 0</span> para h ≠ 0.`, `Límite: 0.`],
        respuesta: `<span class="math">f′(x) = 0</span>: una recta horizontal tiene pendiente 0.` },
      { nivel: 'facil',
        enunciado: `Halla <span class="math">f′(2)</span> para <span class="math">f(x) = x² − 3x</span> usando <span class="math">lím<sub>h→0</sub> (f(2 + h) − f(2))/h</span>.`,
        pasos: [`<span class="math">f(2) = 4 − 6 = −2</span>.`, `<span class="math">f(2 + h) = 4 + 4h + h² − 6 − 3h = −2 + h + h²</span>.`, `Diferencia: <span class="math">h + h²</span>; cociente: <span class="math">1 + h</span>.`, `Límite: 1.`],
        respuesta: `<span class="math">f′(2) = 1</span>.` },
      { nivel: 'intermedio',
        enunciado: `Con la definición halla <span class="math">f′(x)</span> si <span class="math">f(x) = x³</span> y calcula <span class="math">f′(2)</span>.`,
        pasos: [`<span class="math">(x + h)³ = x³ + 3x²h + 3xh² + h³</span>.`, `Diferencia: <span class="math">3x²h + 3xh² + h³</span>.`, `Cociente: <span class="math">3x² + 3xh + h²</span>.`, `Límite: <span class="math">3x²</span>. Entonces <span class="math">f′(2) = 3·4 = 12</span>.`],
        respuesta: `<span class="math">f′(x) = 3x²</span>; <span class="math">f′(2) = 12</span>.` },
      { nivel: 'intermedio',
        enunciado: `Con la definición halla <span class="math">f′(x)</span> si <span class="math">f(x) = 2x² − x + 1</span> y evalúa <span class="math">f′(−1)</span>.`,
        pasos: [`<span class="math">f(x + h) = 2(x² + 2xh + h²) − x − h + 1</span>.`, `Diferencia: <span class="math">4xh + 2h² − h</span>.`, `Cociente: <span class="math">4x + 2h − 1</span>.`, `Límite: <span class="math">4x − 1</span>; <span class="math">f′(−1) = −4 − 1 = −5</span>.`],
        respuesta: `<span class="math">f′(x) = 4x − 1</span>; <span class="math">f′(−1) = −5</span>.` },
      { nivel: 'intermedio',
        enunciado: `Con la definición, halla <span class="math">f′(0)</span> si <span class="math">f(x) = 1/(x + 1)</span>.`,
        pasos: [`<span class="math">f(h) − f(0) = 1/(1 + h) − 1 = (1 − (1 + h))/(1 + h) = −h/(1 + h)</span>.`, `Cociente: <span class="math">−1/(1 + h)</span>.`, `Límite cuando h → 0: <span class="math">−1</span>.`],
        respuesta: `<span class="math">f′(0) = −1</span>.` },
      { nivel: 'intermedio',
        enunciado: `Con la forma <span class="math">lím<sub>x→a</sub> (f(x) − f(a))/(x − a)</span>, halla <span class="math">f′(1)</span> si <span class="math">f(x) = √(x + 3)</span>.`,
        pasos: [`<span class="math">f(1) = 2</span>; cociente: <span class="math">(√(x + 3) − 2)/(x − 1)</span>.`, `Multiplica por el conjugado <span class="math">√(x + 3) + 2</span>: numerador <span class="math">(x + 3) − 4 = x − 1</span>.`, `Queda <span class="math">1/(√(x + 3) + 2)</span>.`, `Con x → 1: <span class="math">1/(2 + 2) = 1/4</span>.`],
        respuesta: `<span class="math">f′(1) = 1/4</span>.` },
      { nivel: 'dificil',
        enunciado: `El volumen de agua de un tanque es <span class="math">V(t) = 300t − 4t²</span> litros, con t en minutos. Con la definición, halla la rapidez con que cambia el volumen en t = 5 min e interpreta.`,
        pasos: [`<span class="math">V(5) = 1500 − 100 = 1400</span>.`, `<span class="math">V(5 + h) = 300(5 + h) − 4(25 + 10h + h²) = 1400 + 260h − 4h²</span>.`, `Diferencia: <span class="math">260h − 4h²</span>; cociente: <span class="math">260 − 4h</span>.`, `Límite: 260.`],
        respuesta: `<span class="math">V′(5) = 260</span> litros por minuto: a los 5 min el tanque se llena a 260 L por min (y esa rapidez va disminuyendo).` },
      { nivel: 'dificil',
        enunciado: `Sea <span class="math">f(x) = x|x|</span>. Demuestra con la definición que f es derivable en 0 y halla <span class="math">f′(0)</span>.`,
        pasos: [`<span class="math">f(0) = 0</span>; cociente: <span class="math">(h|h| − 0)/h = |h|</span> para h ≠ 0.`, `Cuando h → 0<sup>+</sup>, <span class="math">|h| = h → 0</span>; cuando h → 0<sup>−</sup>, <span class="math">|h| = −h → 0</span>.`, `Ambos lados dan 0, por tanto el límite existe.`],
        respuesta: `f es derivable en 0 y <span class="math">f′(0) = 0</span> (a pesar del valor absoluto, no hay pico).` },
      { nivel: 'dificil',
        enunciado: `Halla a y b para que <span class="math">f(x) = x² si x ≤ 1; ax + b si x > 1</span> sea derivable en x = 1.`,
        pasos: [`Continuidad en 1: <span class="math">lím<sub>x→1<sup>−</sup></sub> x² = 1</span> debe igualar <span class="math">lím<sub>x→1<sup>+</sup></sub> (ax + b) = a + b</span>, así que <span class="math">a + b = 1</span>.`, `Derivada por la izquierda: <span class="math">(x²)′ = 2x</span> en 1 vale 2. Por la derecha: la pendiente de <span class="math">ax + b</span> es a. Igualamos: <span class="math">a = 2</span>.`, `Entonces <span class="math">b = 1 − a = −1</span>.`],
        respuesta: `<span class="math">a = 2</span>, <span class="math">b = −1</span>. La recta <span class="math">y = 2x − 1</span> es tangente a la parábola en (1, 1).` }
    ],
    teoricas: [
      { q: `¿Qué diferencia hay entre el cociente incremental y la derivada?`, a: `El cociente incremental <span class="math">(f(a + h) − f(a))/h</span> es la pendiente de una secante y depende de h. La derivada es el límite de ese cociente cuando h → 0: un solo número que da la pendiente de la tangente.` },
      { q: `¿Por qué no podemos simplemente sustituir h = 0 en el cociente incremental?`, a: `Porque da <span class="math">0/0</span>, una indeterminación. Hay que simplificar antes (factorizar h, racionalizar, común denominador) y recién después evaluar el límite.` },
      { q: `Si f es derivable en a, ¿es continua en a? ¿Y al revés?`, a: `Sí: derivable implica continua. Al revés no: <span class="math">|x|</span> es continua en 0 pero no derivable allí.` },
      { q: `¿Qué indica que <span class="math">f′(a) < 0</span>?`, a: `Que la recta tangente baja al avanzar hacia la derecha: f es decreciente cerca de a y la razón de cambio instantánea es negativa.` },
      { q: `¿Qué unidades tiene la derivada de la distancia (en km) respecto al tiempo (en horas)?`, a: `Kilómetros por hora: unidades de la función entre unidades de la variable. Es una velocidad.` },
      { q: `Explica por qué <span class="math">f(x) = ∛x</span> es continua en 0 pero no derivable allí.`, a: `El cociente en 0 es <span class="math">∛h/h = 1/h<sup>2/3</sup></span>, que crece sin cota al acercarse a 0. La tangente es vertical y el límite no es un número real.` },
      { q: `¿Qué debe cumplirse para que una función definida por partes sea derivable en el punto de empalme?`, a: `Primero continuidad (los límites laterales coinciden con el valor) y luego que las derivadas laterales sean iguales, es decir, que las pendientes coincidan.` },
      { q: `¿Qué relación hay entre la recta secante y la tangente?`, a: `La tangente es la posición límite de las secantes cuando el segundo punto se acerca al primero; su pendiente es el límite de las pendientes secantes.` }
    ],
    errores: [
      `Sustituir h = 0 de inmediato y concluir "0/0, no existe". Es una indeterminación: simplifica primero y luego evalúa.`,
      `Olvidar el signo al restar <span class="math">f(x + h) − f(x)</span>: el paréntesis de <span class="math">f(x)</span> debe cambiar todos sus signos. Escribe siempre la resta con paréntesis.`,
      `Escribir <span class="math">(x + h)² = x² + h²</span>. Es <span class="math">x² + 2xh + h²</span>; el término 2xh es el que sobrevive tras dividir entre h.`,
      `Creer que toda función continua es derivable. Un pico, una cúspide o una tangente vertical son contraejemplos.`
    ],
    aplicacion: { titulo: `Costo marginal en una fábrica de bolsas`, html: `<p>El costo en dólares de producir q cientos de bolsas es <span class="math">C(q) = 0.02q² + 5q + 300</span>. Para saber cuánto cuesta producir "una unidad más" cuando ya se fabrican q = 100, calculamos la razón de cambio instantánea con la definición:</p><ol><li><span class="math">C(100 + h) − C(100) = 0.02(200h + h²) + 5h = 9h + 0.02h²</span>.</li><li>Cociente: <span class="math">9 + 0.02h</span>.</li><li>Límite cuando h → 0: <span class="math">C′(100) = 9</span>.</li></ol><p>El costo marginal es de <strong>$9 por unidad adicional</strong> (por cada cien bolsas adicionales, si q se mide en cientos). Si el precio de venta marginal fuera menor a $9, conviene no aumentar la producción. Esta es la idea con que las empresas deciden cuánto producir.</p>` },
    calc: 'derivada-def',
    examen: [
      { tipo: 'num', q: `Con la definición, calcula <span class="math">f′(5)</span> para <span class="math">f(x) = x²</span>.`, r: 10, tol: 0.01, pasos: [`<span class="math">f(5 + h) − f(5) = 25 + 10h + h² − 25 = 10h + h²</span>.`, `Cociente: <span class="math">10 + h</span>.`, `Límite: 10.`] },
      { tipo: 'num', q: `Si <span class="math">f(x) = 3x² − 2x</span>, calcula <span class="math">f′(2)</span>.`, r: 10, tol: 0.01, pasos: [`<span class="math">f(2) = 12 − 4 = 8</span>.`, `<span class="math">f(2 + h) = 3(4 + 4h + h²) − 4 − 2h = 8 + 10h + 3h²</span>.`, `Cociente: <span class="math">10 + 3h</span>, límite 10.`] },
      { tipo: 'opt', q: `¿Cuál es la definición correcta de <span class="math">f′(a)</span>?`, opciones: [`<span class="math">lím<sub>h→0</sub> (f(a + h) + f(a))/h</span>`, `<span class="math">lím<sub>h→0</sub> (f(a + h) − f(a))/h</span>`, `<span class="math">(f(a + h) − f(a))/h</span> con h = 0`, `<span class="math">lím<sub>x→a</sub> f(x)</span>`], correcta: 1, pasos: [`La derivada es el límite del cociente incremental.`, `Se restan los valores de f, no se suman.`, `Y el límite se toma con h → 0; no se sustituye h = 0.`] },
      { tipo: 'num', q: `Con la definición, calcula <span class="math">f′(9)</span> para <span class="math">f(x) = √x</span>. Redondea a 2 decimales.`, r: 0.1667, tol: 0.01, pasos: [`<span class="math">f′(x) = 1/(2√x)</span> (racionalizando el cociente).`, `<span class="math">f′(9) = 1/(2·3) = 1/6</span>.`, `<span class="math">1/6 ≈ 0.17</span>.`] },
      { tipo: 'par', q: `¿En qué punto (x, y) de <span class="math">f(x) = x² − 6x + 5</span> la recta tangente es horizontal?`, r: [3, -4], tol: 0.01, pasos: [`<span class="math">f′(x) = 2x − 6</span> (de la definición: cociente <span class="math">2x + h − 6</span>).`, `Tangente horizontal: <span class="math">f′(x) = 0</span>, entonces x = 3.`, `<span class="math">f(3) = 9 − 18 + 5 = −4</span>.`] },
      { tipo: 'opt', q: `Sobre <span class="math">f(x) = |x|</span> en x = 0 es correcto afirmar que:`, opciones: [`Es derivable y <span class="math">f′(0) = 0</span>`, `No es continua`, `Es continua pero no derivable`, `Es derivable y <span class="math">f′(0) = 1</span>`], correcta: 2, pasos: [`<span class="math">lím<sub>x→0</sub> |x| = 0 = f(0)</span>: es continua.`, `Derivadas laterales: −1 por la izquierda y 1 por la derecha.`, `Como son distintas, no es derivable en 0.`] },
      { tipo: 'num', q: `Un auto recorre <span class="math">s(t) = 5t² + 2t</span> metros en t segundos. Halla su velocidad instantánea en t = 4 s (en m por s).`, r: 42, tol: 0.01, pasos: [`<span class="math">s(4 + h) − s(4) = 5(8h + h²) + 2h = 42h + 5h²</span>.`, `Cociente: <span class="math">42 + 5h</span>.`, `Límite: 42 m por s.`] },
      { tipo: 'num', q: `Con la definición, halla <span class="math">f′(−2)</span> para <span class="math">f(x) = 1/x</span>.`, r: -0.25, tol: 0.01, pasos: [`<span class="math">f′(x) = −1/x²</span>.`, `<span class="math">f′(−2) = −1/4</span>.`, `Es negativa: la curva desciende en x = −2.`] },
      { tipo: 'opt', q: `¿Cuál afirmación es verdadera?`, opciones: [`Toda función continua es derivable`, `Si f es continua en a, <span class="math">f′(a)</span> existe`, `Si f es derivable en a, el límite en a no existe`, `Si f es derivable en a, f es continua en a`], correcta: 3, pasos: [`Derivable implica continua.`, `El recíproco es falso (ver |x|).`, `Por tanto, solo la segunda opción es verdadera.`] },
      { tipo: 'num', q: `Halla la pendiente de la recta tangente a <span class="math">f(x) = x³ − x</span> en x = 2.`, r: 11, tol: 0.01, pasos: [`<span class="math">(x + h)³ − (x + h) − x³ + x = 3x²h + 3xh² + h³ − h</span>.`, `Cociente: <span class="math">3x² + 3xh + h² − 1</span>, límite <span class="math">3x² − 1</span>.`, `En x = 2: <span class="math">12 − 1 = 11</span>.`] }
    ]
  };


  T['1.11'] = {
    id: '1.11',
    unidad: 3,
    titulo: `Reglas de derivación`,
    resumen: `Dominarás las reglas de la constante, la potencia, la suma, el producto y el cociente para derivar sin usar la definición.`,
    objetivos: [
      `Aplicar las reglas de la constante, la potencia y el múltiplo constante, incluso con exponentes negativos y fraccionarios.`,
      `Derivar sumas, restas, productos y cocientes de funciones algebraicas.`,
      `Reescribir raíces y fracciones como potencias antes de derivar.`,
      `Calcular derivadas en un punto y resolver problemas de pendiente, velocidad y aceleración con las reglas.`
    ],
    teoria: [
      { titulo: `Por qué necesitamos reglas`, html: `<p>Derivar con la definición exige un límite cada vez. Las reglas de esta lección son resultados <em>ya demostrados</em> con ese límite que permiten derivar una función con solo aplicar fórmulas. Son la herramienta que más usarás en integrales: para integrar bien hay que saber derivar rápido, porque la integral es el proceso inverso.</p><p>En todo el tema, f y g son funciones derivables y c, n son constantes.</p>` },
      { titulo: `Regla de la constante y de la potencia`, html: `<p><strong>Constante:</strong> <span class="math">(c)′ = 0</span>. Una función constante no cambia, su gráfica es horizontal.</p><p><strong>Identidad:</strong> <span class="math">(x)′ = 1</span>.</p><p><strong>Potencia:</strong> para cualquier número real n,</p><p><span class="math">(xⁿ)′ = n·x<sup>n−1</sup></span></p><p>Se "baja" el exponente multiplicando y se resta 1 al exponente. Vale para exponentes enteros, negativos y fraccionarios. Ejemplos: <span class="math">(x⁵)′ = 5x⁴</span>; <span class="math">(x<sup>−3</sup>)′ = −3x<sup>−4</sup></span>; <span class="math">(x<sup>1/2</sup>)′ = (1/2)x<sup>−1/2</sup> = 1/(2√x)</span>.</p>` },
      { titulo: `Múltiplo constante, suma y resta`, html: `<p>La derivada es <strong>lineal</strong>:</p><p><span class="math">(c·f)′ = c·f′</span>, <span class="math">(f ± g)′ = f′ ± g′</span></p><p>Así se derivan polinomios término a término: <span class="math">(4x³ − 2x² + 7x − 9)′ = 12x² − 4x + 7</span>. El 4 y el 2 se quedan multiplicando; la constante −9 desaparece.</p><p>Cuidado: la linealidad NO se extiende a productos ni cocientes; para ellos hay reglas propias.</p>` },
      { titulo: `Regla del producto`, html: `<p><span class="math">(f·g)′ = f′·g + f·g′</span></p><p>En palabras: <em>derivada del primero por el segundo, más el primero por la derivada del segundo</em>. Para tres factores se deriva un factor a la vez y se suman los tres términos: <span class="math">(fgh)′ = f′gh + fg′h + fgh′</span>.</p><p>Por qué no es <span class="math">f′·g′</span>: si <span class="math">f = x</span> y <span class="math">g = x</span>, el producto <span class="math">x²</span> tiene derivada <span class="math">2x</span>, no <span class="math">1·1 = 1</span>.</p><p>Consejo: si el producto es de polinomios sencillos puedes desarrollarlo y derivar término a término; úsalo para comprobar tu resultado.</p>` },
      { titulo: `Regla del cociente`, html: `<p><span class="math">(f/g)′ = (f′g − f g′)/g²</span></p><p>Memoriza: <em>"derivada del de arriba por el de abajo, menos el de arriba por la derivada del de abajo, todo entre el de abajo al cuadrado"</em>. El orden de la resta importa.</p><p>Casos especiales útiles: <span class="math">(1/g)′ = −g′/g²</span> y <span class="math">(1/x)′ = −1/x²</span>. Si el denominador es una constante no uses el cociente: es un múltiplo constante, <span class="math">(f/c)′ = f′/c</span>.</p>` },
      { titulo: `Reescribir antes de derivar`, html: `<p>Muchas derivadas se simplifican si primero conviertes a potencias de x:</p><table><tr><th>Forma original</th><th>Como potencia</th><th>Derivada</th></tr><tr><td><span class="math">√x</span></td><td><span class="math">x<sup>1/2</sup></span></td><td><span class="math">1/(2√x)</span></td></tr><tr><td><span class="math">1/x²</span></td><td><span class="math">x<sup>−2</sup></span></td><td><span class="math">−2/x³</span></td></tr><tr><td><span class="math">∛x</span></td><td><span class="math">x<sup>1/3</sup></span></td><td><span class="math">1/(3∛(x²))</span></td></tr><tr><td><span class="math">3/x⁴</span></td><td><span class="math">3x<sup>−4</sup></span></td><td><span class="math">−12/x⁵</span></td></tr></table><p>Para un cociente con denominador de un solo término, como <span class="math">(x³ + 2x)/x</span>, conviene dividir término a término antes de derivar.</p>` },
      { titulo: `Procedimiento y simplificación`, html: `<ol><li>Identifica la estructura de la expresión: suma, producto o cociente.</li><li>Si se puede, reescribe (potencias, división término a término, desarrollo).</li><li>Aplica la regla correspondiente, <strong>derivando cada pieza por separado</strong>.</li><li>Simplifica: factoriza o reúne términos semejantes.</li><li>Si piden un valor, evalúa en el punto al final.</li></ol><p>Aprender a factorizar el resultado ayuda mucho en las unidades siguientes (para igualar a cero y hallar máximos y mínimos).</p>` },
      { titulo: `Velocidad, aceleración y la derivada de la derivada`, html: `<p>Si s(t) es la posición, <span class="math">v(t) = s′(t)</span> es la velocidad. La derivada de la velocidad es la <strong>aceleración</strong>: <span class="math">a(t) = v′(t) = s″(t)</span>. Con las reglas de este tema ya puedes obtener ambas para posiciones polinómicas. Velocidad cero significa que el móvil se detiene un instante (o cambia de sentido).</p>` }
    ],
    formulas: [
      { label: `Constante`, html: `<span class="math">(c)′ = 0</span>` },
      { label: `Potencia`, html: `<span class="math">(xⁿ)′ = n·x<sup>n−1</sup></span>` },
      { label: `Múltiplo constante`, html: `<span class="math">(c·f)′ = c·f′</span>` },
      { label: `Suma y resta`, html: `<span class="math">(f ± g)′ = f′ ± g′</span>` },
      { label: `Producto`, html: `<span class="math">(f·g)′ = f′g + f g′</span>` },
      { label: `Cociente`, html: `<span class="math">(f/g)′ = (f′g − f g′)/g²</span>` },
      { label: `Raíz cuadrada`, html: `<span class="math">(√x)′ = 1/(2√x)</span>` },
      { label: `Recíproco`, html: `<span class="math">(1/x)′ = −1/x²</span>` }
    ],
    ejemplos: [
      { titulo: `Polinomio término a término`,
        enunciado: `Deriva <span class="math">f(x) = 4x³ − 2x² + 7x − 9</span>.`,
        pasos: [`<span class="math">(4x³)′ = 4·3x² = 12x²</span>.`, `<span class="math">(−2x²)′ = −2·2x = −4x</span>.`, `<span class="math">(7x)′ = 7</span> y <span class="math">(−9)′ = 0</span>.`, `Suma: <span class="math">12x² − 4x + 7</span>.`],
        respuesta: `<span class="math">f′(x) = 12x² − 4x + 7</span>.` },
      { titulo: `Raíces y fracciones como potencias`,
        enunciado: `Deriva <span class="math">f(x) = 3√x + 2/x²</span>.`,
        pasos: [`Reescribe: <span class="math">f(x) = 3x<sup>1/2</sup> + 2x<sup>−2</sup></span>.`, `<span class="math">(3x<sup>1/2</sup>)′ = 3·(1/2)x<sup>−1/2</sup> = 3/(2√x)</span>.`, `<span class="math">(2x<sup>−2</sup>)′ = 2·(−2)x<sup>−3</sup> = −4/x³</span>.`, `Suma los resultados.`],
        respuesta: `<span class="math">f′(x) = 3/(2√x) − 4/x³</span>.` },
      { titulo: `Regla del producto`,
        enunciado: `Deriva <span class="math">f(x) = (x² + 1)(x³ − 2x)</span> y comprueba desarrollando.`,
        pasos: [`Primero <span class="math">u = x² + 1</span>, <span class="math">u′ = 2x</span>; segundo <span class="math">v = x³ − 2x</span>, <span class="math">v′ = 3x² − 2</span>.`, `<span class="math">f′ = u′v + uv′ = 2x(x³ − 2x) + (x² + 1)(3x² − 2)</span>.`, `Desarrolla: <span class="math">2x⁴ − 4x² + 3x⁴ − 2x² + 3x² − 2 = 5x⁴ − 3x² − 2</span>.`, `Comprobación: <span class="math">f = x⁵ − x³ − 2x</span>, entonces <span class="math">f′ = 5x⁴ − 3x² − 2</span>. ✓`],
        respuesta: `<span class="math">f′(x) = 5x⁴ − 3x² − 2</span>.` },
      { titulo: `Regla del cociente`,
        enunciado: `Deriva <span class="math">f(x) = (x² + 1)/(x − 1)</span>.`,
        pasos: [`Arriba <span class="math">u = x² + 1</span>, <span class="math">u′ = 2x</span>; abajo <span class="math">v = x − 1</span>, <span class="math">v′ = 1</span>.`, `<span class="math">f′ = (u′v − uv′)/v² = (2x(x − 1) − (x² + 1)·1)/(x − 1)²</span>.`, `Numerador: <span class="math">2x² − 2x − x² − 1 = x² − 2x − 1</span>.`],
        respuesta: `<span class="math">f′(x) = (x² − 2x − 1)/(x − 1)²</span>.` },
      { titulo: `Velocidad y aceleración de un bus`,
        enunciado: `Un bus del tramo San Salvador–Santa Ana avanza <span class="math">s(t) = t³ − 6t² + 9t</span> kilómetros en t horas durante las primeras 4 h de un recorrido de prueba. Halla <span class="math">v(t)</span>, <span class="math">a(t)</span> y cuándo se detiene.`,
        pasos: [`<span class="math">v(t) = s′(t) = 3t² − 12t + 9</span>.`, `<span class="math">a(t) = v′(t) = 6t − 12</span>.`, `Se detiene cuando <span class="math">v = 0</span>: <span class="math">3(t² − 4t + 3) = 3(t − 1)(t − 3) = 0</span>, así t = 1 o t = 3.`, `En t = 1: <span class="math">a = −6</span> (frena); en t = 3: <span class="math">a = 6</span> (arranca otra vez).`],
        respuesta: `<span class="math">v(t) = 3t² − 12t + 9</span> km por h, <span class="math">a(t) = 6t − 12</span>; se detiene en t = 1 h y t = 3 h.` },
      { titulo: `Cociente con simplificación final`,
        enunciado: `Deriva <span class="math">f(x) = (x² − 1)/(x² + 1)</span> y simplifica.`,
        pasos: [`<span class="math">u = x² − 1</span>, <span class="math">u′ = 2x</span>; <span class="math">v = x² + 1</span>, <span class="math">v′ = 2x</span>.`, `<span class="math">f′ = (2x(x² + 1) − (x² − 1)(2x))/(x² + 1)²</span>.`, `Numerador: <span class="math">2x³ + 2x − 2x³ + 2x = 4x</span>.`],
        respuesta: `<span class="math">f′(x) = 4x/(x² + 1)²</span>.` }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: `Deriva <span class="math">f(x) = x⁵</span>.`, pasos: [`Regla de la potencia con n = 5.`, `<span class="math">5x<sup>5−1</sup> = 5x⁴</span>.`], respuesta: `<span class="math">f′(x) = 5x⁴</span>.` },
      { nivel: 'facil', enunciado: `Deriva <span class="math">f(x) = 7x² − 3x + 4</span>.`, pasos: [`<span class="math">(7x²)′ = 14x</span>.`, `<span class="math">(−3x)′ = −3</span>, <span class="math">(4)′ = 0</span>.`], respuesta: `<span class="math">f′(x) = 14x − 3</span>.` },
      { nivel: 'facil', enunciado: `Calcula <span class="math">f′(1)</span> si <span class="math">f(x) = 2x³ + x − 8</span>.`, pasos: [`<span class="math">f′(x) = 6x² + 1</span>.`, `<span class="math">f′(1) = 6 + 1 = 7</span>.`], respuesta: `<span class="math">f′(1) = 7</span>.` },
      { nivel: 'facil', enunciado: `Deriva <span class="math">y = 1/x³</span>.`, pasos: [`Reescribe <span class="math">y = x<sup>−3</sup></span>.`, `<span class="math">y′ = −3x<sup>−4</sup> = −3/x⁴</span>.`], respuesta: `<span class="math">y′ = −3/x⁴</span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">f(x) = (3x − 2)(x² + 5)</span>.`, pasos: [`<span class="math">u = 3x − 2</span>, <span class="math">u′ = 3</span>; <span class="math">v = x² + 5</span>, <span class="math">v′ = 2x</span>.`, `<span class="math">f′ = 3(x² + 5) + (3x − 2)(2x)</span>.`, `<span class="math">= 3x² + 15 + 6x² − 4x = 9x² − 4x + 15</span>.`], respuesta: `<span class="math">f′(x) = 9x² − 4x + 15</span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">f(x) = (x + 3)/(x − 2)</span>.`, pasos: [`<span class="math">u = x + 3</span>, <span class="math">u′ = 1</span>; <span class="math">v = x − 2</span>, <span class="math">v′ = 1</span>.`, `<span class="math">f′ = ((x − 2) − (x + 3))/(x − 2)²</span>.`, `Numerador: <span class="math">x − 2 − x − 3 = −5</span>.`], respuesta: `<span class="math">f′(x) = −5/(x − 2)²</span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">f(x) = x³/3 − 4√x + 2/x</span>.`, pasos: [`Reescribe: <span class="math">(1/3)x³ − 4x<sup>1/2</sup> + 2x<sup>−1</sup></span>.`, `<span class="math">(1/3)·3x² = x²</span>; <span class="math">−4·(1/2)x<sup>−1/2</sup> = −2/√x</span>; <span class="math">2·(−1)x<sup>−2</sup> = −2/x²</span>.`], respuesta: `<span class="math">f′(x) = x² − 2/√x − 2/x²</span>.` },
      { nivel: 'intermedio', enunciado: `Halla los valores de x donde la tangente a <span class="math">f(x) = x³ − 12x + 1</span> es horizontal.`, pasos: [`<span class="math">f′(x) = 3x² − 12</span>.`, `<span class="math">f′(x) = 0 ⇒ 3(x² − 4) = 0 ⇒ x = ±2</span>.`], respuesta: `<span class="math">x = −2</span> y <span class="math">x = 2</span> (puntos (−2, 17) y (2, −15)).` },
      { nivel: 'dificil', enunciado: `Deriva <span class="math">f(x) = x²(x + 1)(x − 2)</span> con la regla del producto para tres factores y comprueba desarrollando.`, pasos: [`<span class="math">f′ = (x²)′(x + 1)(x − 2) + x²(x + 1)′(x − 2) + x²(x + 1)(x − 2)′</span>.`, `<span class="math">= 2x(x² − x − 2) + x²(x − 2) + x²(x + 1)</span>.`, `<span class="math">= 2x³ − 2x² − 4x + x³ − 2x² + x³ + x² = 4x³ − 3x² − 4x</span>.`, `Comprobación: <span class="math">f = x⁴ − x³ − 2x²</span>, <span class="math">f′ = 4x³ − 3x² − 4x</span>. ✓`], respuesta: `<span class="math">f′(x) = 4x³ − 3x² − 4x</span>.` },
      { nivel: 'dificil', enunciado: `Deriva <span class="math">f(x) = (2x² − 3x)/(x² + 1)</span> y calcula <span class="math">f′(1)</span>.`, pasos: [`<span class="math">u = 2x² − 3x</span>, <span class="math">u′ = 4x − 3</span>; <span class="math">v = x² + 1</span>, <span class="math">v′ = 2x</span>.`, `Numerador: <span class="math">(4x − 3)(x² + 1) − (2x² − 3x)(2x) = 4x³ + 4x − 3x² − 3 − 4x³ + 6x² = 3x² + 4x − 3</span>.`, `<span class="math">f′(x) = (3x² + 4x − 3)/(x² + 1)²</span>.`, `<span class="math">f′(1) = (3 + 4 − 3)/4 = 1</span>.`], respuesta: `<span class="math">f′(x) = (3x² + 4x − 3)/(x² + 1)²</span>; <span class="math">f′(1) = 1</span>.` },
      { nivel: 'dificil', enunciado: `Halla a y b para que la parábola <span class="math">f(x) = ax² + bx</span> pase por (1, 5) y tenga pendiente 4 en ese punto.`, pasos: [`Pasa por (1, 5): <span class="math">a + b = 5</span>.`, `<span class="math">f′(x) = 2ax + b</span>; pendiente 4 en x = 1: <span class="math">2a + b = 4</span>.`, `Resta: <span class="math">(2a + b) − (a + b) = 4 − 5 ⇒ a = −1</span>.`, `Entonces <span class="math">b = 5 − a = 6</span>.`], respuesta: `<span class="math">a = −1</span>, <span class="math">b = 6</span>: <span class="math">f(x) = −x² + 6x</span>.` }
    ],
    teoricas: [
      { q: `¿Por qué la derivada de una constante es 0?`, a: `Porque su gráfica es una recta horizontal y no cambia: el cociente incremental <span class="math">(c − c)/h</span> es 0 siempre.` },
      { q: `¿Es cierto que <span class="math">(f·g)′ = f′·g′</span>? Da un contraejemplo.`, a: `No. Con <span class="math">f = g = x</span>: el producto <span class="math">x²</span> tiene derivada <span class="math">2x</span>, pero <span class="math">f′g′ = 1·1 = 1</span>. La regla correcta es <span class="math">f′g + fg′</span>.` },
      { q: `¿Qué sucede si cambias el orden del numerador en la regla del cociente?`, a: `Cambia el signo de la derivada. Es <span class="math">f′g − fg′</span>, no <span class="math">fg′ − f′g</span>. Verifica con <span class="math">1/x</span>: debe dar <span class="math">−1/x²</span>.` },
      { q: `¿Se puede aplicar la regla de la potencia a <span class="math">2<sup>x</sup></span>?`, a: `No. La regla <span class="math">(xⁿ)′ = nx<sup>n−1</sup></span> es para base variable y exponente constante. <span class="math">2<sup>x</sup></span> es una función exponencial y tiene su propia derivada (tema 1.13).` },
      { q: `Explica cómo derivar <span class="math">√x</span> sin usar la definición.`, a: `Se escribe <span class="math">√x = x<sup>1/2</sup></span> y se aplica la regla de la potencia: <span class="math">(1/2)x<sup>−1/2</sup> = 1/(2√x)</span>.` },
      { q: `¿Qué indica que la derivada de f sea 0 en un punto?`, a: `Que la tangente es horizontal allí; son candidatos a máximos, mínimos o puntos de silla (tema 1.16).` },
      { q: `Si <span class="math">s(t)</span> es posición, ¿qué representan <span class="math">s′</span> y <span class="math">s″</span>?`, a: `<span class="math">s′</span> es la velocidad y <span class="math">s″</span> es la aceleración (la razón de cambio de la velocidad).` },
      { q: `¿Cuándo conviene desarrollar un producto en vez de usar la regla del producto?`, a: `Cuando son polinomios pequeños: desarrollar evita la regla y sirve de comprobación. Si los factores son grandes o no son polinomios, usa la regla.` }
    ],
    errores: [
      `Derivar un producto como <span class="math">f′·g′</span> o un cociente como <span class="math">f′/g′</span>. Usa siempre las reglas del producto y del cociente.`,
      `Olvidar que la derivada de una constante sumada es 0, o derivar mal un coeficiente: <span class="math">(5x)′ = 5</span>, no <span class="math">5x⁰</span> ni 0.`,
      `Aplicar la regla de la potencia a funciones exponenciales como <span class="math">3<sup>x</sup></span>, o dejar una raíz sin reescribir como potencia.`,
      `Errores de signo al restar en el numerador del cociente: encierra <span class="math">fg′</span> entre paréntesis antes de distribuir el signo menos.`
    ],
    aplicacion: { titulo: `Costo promedio en una planta de purificación de agua`, html: `<p>El costo total de producir q miles de bolsas de agua es <span class="math">C(q) = 500 + 2q + 0.01q²</span> dólares. El costo promedio es <span class="math">A(q) = C(q)/q = 500/q + 2 + 0.01q</span>.</p><ol><li>Reescribe <span class="math">500/q = 500q<sup>−1</sup></span> y deriva: <span class="math">A′(q) = −500/q² + 0.01</span>.</li><li>En q = 100: <span class="math">A′(100) = −500/10000 + 0.01 = −0.05 + 0.01 = −0.04</span>.</li></ol><p>El costo promedio <strong>disminuye 4 centavos por cada millar adicional</strong> producido cuando ya se fabrican 100 millares. Al aumentar la producción se reparten mejor los costos fijos. (El costo promedio dejará de bajar cuando <span class="math">A′ = 0</span>, es decir <span class="math">q² = 50000</span>, <span class="math">q ≈ 223.6</span>; lo veremos en optimización.)</p>` },
    calc: 'derivada-reglas',
    examen: [
      { tipo: 'num', q: `Si <span class="math">f(x) = x⁴ − 3x² + 2x</span>, calcula <span class="math">f′(2)</span>.`, r: 22, tol: 0.01, pasos: [`<span class="math">f′(x) = 4x³ − 6x + 2</span>.`, `<span class="math">f′(2) = 32 − 12 + 2</span>.`, `<span class="math">= 22</span>.`] },
      { tipo: 'num', q: `Si <span class="math">f(x) = (x² + 1)(x − 3)</span>, calcula <span class="math">f′(2)</span>.`, r: 1, tol: 0.01, pasos: [`Producto: <span class="math">f′ = 2x(x − 3) + (x² + 1)·1</span>.`, `En x = 2: <span class="math">4(−1) + 5 = 1</span>.`, `Comprobación: <span class="math">f = x³ − 3x² + x − 3</span>, <span class="math">f′ = 3x² − 6x + 1 = 12 − 12 + 1 = 1</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(3)</span> para <span class="math">f(x) = (x + 1)/(x − 1)</span>.`, r: -0.5, tol: 0.01, pasos: [`<span class="math">f′ = ((x − 1) − (x + 1))/(x − 1)²  = −2/(x − 1)²</span>.`, `En x = 3: <span class="math">−2/4</span>.`, `<span class="math">= −0.5</span>.`] },
      { tipo: 'par', q: `Halla el punto (x, y) donde la tangente a <span class="math">f(x) = x² − 4x + 7</span> es horizontal.`, r: [2, 3], tol: 0.01, pasos: [`<span class="math">f′(x) = 2x − 4</span>.`, `<span class="math">f′ = 0 ⇒ x = 2</span>.`, `<span class="math">f(2) = 4 − 8 + 7 = 3</span>.`] },
      { tipo: 'opt', q: `La derivada de <span class="math">f(x) = 1/x²</span> es:`, opciones: [`<span class="math">2/x³</span>`, `<span class="math">−1/x</span>`, `<span class="math">−2/x³</span>`, `<span class="math">−2/x</span>`], correcta: 2, pasos: [`Reescribe <span class="math">f = x<sup>−2</sup></span>.`, `<span class="math">f′ = −2x<sup>−3</sup></span>.`, `<span class="math">= −2/x³</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(1)</span> si <span class="math">f(x) = √x + 4/x</span>.`, r: -3.5, tol: 0.01, pasos: [`<span class="math">f = x<sup>1/2</sup> + 4x<sup>−1</sup></span>.`, `<span class="math">f′ = 1/(2√x) − 4/x²</span>.`, `<span class="math">f′(1) = 1/2 − 4 = −3.5</span>.`] },
      { tipo: 'opt', q: `¿Cuál es la derivada correcta de <span class="math">f(x) = x²·(x + 1)</span>?`, opciones: [`<span class="math">2x·1 = 2x</span>`, `<span class="math">3x² + 2x</span>`, `<span class="math">x³ + x²</span>`, `<span class="math">2x + 1</span>`], correcta: 1, pasos: [`Producto: <span class="math">2x(x + 1) + x²·1</span>.`, `<span class="math">= 2x² + 2x + x² = 3x² + 2x</span>.`, `Es el error típico usar <span class="math">f′g′</span>; esa da <span class="math">2x</span>, que es incorrecta.`] },
      { tipo: 'num', q: `Halla la pendiente de la tangente a <span class="math">f(x) = x/(x² + 1)</span> en x = 0.`, r: 1, tol: 0.01, pasos: [`<span class="math">f′ = (1·(x² + 1) − x·2x)/(x² + 1)²</span>.`, `<span class="math">= (1 − x²)/(x² + 1)²</span>.`, `En x = 0: <span class="math">1/1 = 1</span>.`] },
      { tipo: 'num', q: `La posición de un bus es <span class="math">s(t) = t³ − 6t² + 9t</span> km. Calcula su velocidad en t = 4 h (km por h).`, r: 9, tol: 0.01, pasos: [`<span class="math">v = s′ = 3t² − 12t + 9</span>.`, `<span class="math">v(4) = 48 − 48 + 9</span>.`, `<span class="math">= 9</span> km por h.`] },
      { tipo: 'lista', q: `Halla todos los x donde la tangente a <span class="math">f(x) = x³ − 3x</span> es horizontal (separa con comas).`, r: [-1, 1], tol: 0.01, pasos: [`<span class="math">f′(x) = 3x² − 3</span>.`, `<span class="math">3(x² − 1) = 0 ⇒ x = ±1</span>.`, `Los valores son −1 y 1.`] }
    ]
  };


  T['1.12'] = {
    id: '1.12',
    unidad: 3,
    titulo: `Regla de la cadena`,
    resumen: `Aprenderás a derivar funciones compuestas, derivando primero la función externa y multiplicando por la derivada de la interna.`,
    objetivos: [
      `Descomponer una función compuesta en función externa e interna.`,
      `Aplicar la regla de la cadena, incluida la forma de Leibniz <span class="math">dy/dx = dy/du · du/dx</span>.`,
      `Combinar la cadena con las reglas del producto y del cociente y con cadenas de tres o más eslabones.`,
      `Resolver problemas de razones de cambio donde una magnitud depende de otra que depende del tiempo.`
    ],
    teoria: [
      { titulo: `Funciones compuestas`, html: `<p>Una función compuesta aplica una función dentro de otra: <span class="math">y = f(g(x))</span>. Llamamos <strong>interna</strong> a <span class="math">u = g(x)</span> y <strong>externa</strong> a <span class="math">y = f(u)</span>. Ejemplos: en <span class="math">(3x + 1)⁵</span> la interna es <span class="math">3x + 1</span> y la externa es <span class="math">u⁵</span>; en <span class="math">√(x² + 1)</span> la interna es <span class="math">x² + 1</span> y la externa <span class="math">√u</span>.</p><p>Las reglas del tema 1.11 no alcanzan para estas funciones: <span class="math">(3x + 1)⁵</span> no es una potencia simple de x. Hacía falta una regla nueva, y es la más usada de todo el cálculo.</p>` },
      { titulo: `Enunciado de la regla`, html: `<p>Si g es derivable en x y f es derivable en <span class="math">g(x)</span>, entonces</p><p><span class="math">(f(g(x)))′ = f′(g(x)) · g′(x)</span></p><p>En palabras: <em>derivada de la externa evaluada en la interna, por la derivada de la interna</em>.</p><p>En notación de Leibniz, con <span class="math">y = f(u)</span> y <span class="math">u = g(x)</span>:</p><p><span class="math">dy/dx = dy/du · du/dx</span></p><p>Puedes pensarlo como una cadena de engranajes: si y cambia <span class="math">dy/du</span> veces lo que cambia u, y u cambia <span class="math">du/dx</span> veces lo que cambia x, entonces y cambia el producto respecto a x.</p>` },
      { titulo: `Procedimiento externa-interna`, html: `<ol><li>Identifica la función interna <span class="math">u = g(x)</span> (lo que está "dentro" del paréntesis, de la raíz o del denominador).</li><li>Deriva la externa tratando u como si fuera la variable.</li><li>Sustituye de nuevo u por <span class="math">g(x)</span>.</li><li>Multiplica por <span class="math">g′(x)</span>.</li><li>Simplifica o factoriza.</li></ol><p>Truco para no olvidar el último factor: pregúntate siempre "¿qué hay dentro?" y deriva eso al final.</p>` },
      { titulo: `La regla de la potencia generalizada`, html: `<p>El caso más frecuente: la externa es una potencia.</p><p><span class="math">(uⁿ)′ = n·u<sup>n−1</sup>·u′</span></p><p>Derivados importantes que salen de ella:</p><ul><li><span class="math">(√u)′ = u′/(2√u)</span></li><li><span class="math">(1/u)′ = −u′/u²</span></li><li><span class="math">(1/uⁿ)′ = −n·u′/u<sup>n+1</sup></span></li></ul><p>Ejemplo: <span class="math">((3x + 1)⁵)′ = 5(3x + 1)⁴·3 = 15(3x + 1)⁴</span>. Observa cómo el 3 de la derivada interna aparece multiplicando.</p>` },
      { titulo: `Cadena junto a producto y cociente`, html: `<p>Las reglas se combinan. Con un producto como <span class="math">(2x + 1)³(x − 1)⁴</span> se aplica la regla del producto y, al derivar cada factor, la cadena. Casi siempre conviene luego <strong>factorizar el factor común de menor exponente</strong>, lo que deja una expresión corta que luego servirá para resolver <span class="math">f′ = 0</span>:</p><p><span class="math">(2x + 1)²(x − 1)³[6(x − 1) + 4(2x + 1)]</span>.</p><p>El orden de trabajo es: estructura general (producto, cociente o suma) primero, y cadena en cada pieza.</p>` },
      { titulo: `Cadenas de tres o más eslabones`, html: `<p>Si hay varias funciones anidadas, <span class="math">y = f(g(h(x)))</span>, se deriva de afuera hacia adentro y se multiplican todas las derivadas:</p><p><span class="math">y′ = f′(g(h(x))) · g′(h(x)) · h′(x)</span></p><p>En Leibniz: <span class="math">dy/dx = dy/du · du/dv · dv/dx</span>. Ejemplo: <span class="math">y = ((x² + 1)³ + 2)⁴</span> tiene tres capas: potencia 4, suma con potencia 3 y <span class="math">x² + 1</span>.</p>` },
      { titulo: `Razones de cambio con cadena`, html: `<p>Si una cantidad C depende de q, y q depende del tiempo t, entonces la rapidez con que cambia C en el tiempo es</p><p><span class="math">dC/dt = dC/dq · dq/dt</span></p><p>Es el principio de las razones relacionadas (tema 1.15). Por ejemplo, el costo de una fábrica depende de las unidades producidas, y estas dependen de las horas trabajadas.</p>` },
      { titulo: `Cuándo NO hay cadena y comprobaciones`, html: `<ul><li>Si lo "de adentro" es solo x, la cadena multiplica por <span class="math">(x)′ = 1</span> y no se nota: <span class="math">(x⁵)′ = 5x⁴</span>.</li><li>En <span class="math">(3x + 1)⁵</span> puedes desarrollar con el binomio para comprobar en casos pequeños, por ejemplo <span class="math">(x + 1)²</span>: <span class="math">2(x + 1)·1 = 2x + 2</span> coincide con la derivada de <span class="math">x² + 2x + 1</span>.</li><li>Si la derivada interna es una constante k, el resultado trae un k multiplicando; si es x, trae una x, etc.</li></ul><p>Esta regla será indispensable en la sustitución de integrales (tema 1.18): sustituir es "deshacer" la regla de la cadena.</p>` }
    ],
    formulas: [
      { label: `Regla de la cadena`, html: `<span class="math">(f(g(x)))′ = f′(g(x))·g′(x)</span>` },
      { label: `Forma de Leibniz`, html: `<span class="math">dy/dx = dy/du · du/dx</span>` },
      { label: `Potencia generalizada`, html: `<span class="math">(uⁿ)′ = n·u<sup>n−1</sup>·u′</span>` },
      { label: `Raíz de una función`, html: `<span class="math">(√u)′ = u′/(2√u)</span>` },
      { label: `Recíproco de una función`, html: `<span class="math">(1/u)′ = −u′/u²</span>` },
      { label: `Cadena triple`, html: `<span class="math">dy/dx = dy/du · du/dv · dv/dx</span>` },
      { label: `Razón de cambio compuesta`, html: `<span class="math">dC/dt = dC/dq · dq/dt</span>` }
    ],
    ejemplos: [
      { titulo: `Potencia de un binomio`,
        enunciado: `Deriva <span class="math">f(x) = (3x + 1)⁵</span>.`,
        pasos: [`Interna: <span class="math">u = 3x + 1</span>, <span class="math">u′ = 3</span>. Externa: <span class="math">u⁵</span>.`, `<span class="math">f′ = 5u⁴·u′ = 5(3x + 1)⁴·3</span>.`, `Multiplica los números: 15.`],
        respuesta: `<span class="math">f′(x) = 15(3x + 1)⁴</span>.` },
      { titulo: `Raíz de una expresión`,
        enunciado: `Deriva <span class="math">f(x) = √(x² + 1)</span>.`,
        pasos: [`<span class="math">u = x² + 1</span>, <span class="math">u′ = 2x</span>.`, `<span class="math">(√u)′ = u′/(2√u) = 2x/(2√(x² + 1))</span>.`, `Simplifica el 2.`],
        respuesta: `<span class="math">f′(x) = x/√(x² + 1)</span>.` },
      { titulo: `Recíproco de una potencia`,
        enunciado: `Deriva <span class="math">f(x) = 1/(x² − 4)³</span>.`,
        pasos: [`Reescribe <span class="math">f = (x² − 4)<sup>−3</sup></span>.`, `<span class="math">f′ = −3(x² − 4)<sup>−4</sup>·(2x)</span>.`, `<span class="math">= −6x/(x² − 4)⁴</span>.`],
        respuesta: `<span class="math">f′(x) = −6x/(x² − 4)⁴</span>.` },
      { titulo: `Producto con cadena en ambos factores`,
        enunciado: `Deriva <span class="math">f(x) = (2x + 1)³(x − 1)⁴</span> y factoriza.`,
        pasos: [`Producto: <span class="math">f′ = [(2x + 1)³]′(x − 1)⁴ + (2x + 1)³[(x − 1)⁴]′</span>.`, `Cadena: <span class="math">[(2x + 1)³]′ = 3(2x + 1)²·2 = 6(2x + 1)²</span>; <span class="math">[(x − 1)⁴]′ = 4(x − 1)³</span>.`, `<span class="math">f′ = 6(2x + 1)²(x − 1)⁴ + 4(2x + 1)³(x − 1)³</span>.`, `Factor común <span class="math">2(2x + 1)²(x − 1)³</span>: queda <span class="math">3(x − 1) + 2(2x + 1) = 3x − 3 + 4x + 2 = 7x − 1</span>.`],
        respuesta: `<span class="math">f′(x) = 2(2x + 1)²(x − 1)³(7x − 1)</span>.` },
      { titulo: `Tres capas`,
        enunciado: `Deriva <span class="math">y = ((x² + 1)³ + 2)⁴</span>.`,
        pasos: [`Capa externa: <span class="math">(…)⁴</span>, derivada <span class="math">4((x² + 1)³ + 2)³</span>.`, `Capa media: <span class="math">(x² + 1)³ + 2</span>, derivada <span class="math">3(x² + 1)²</span>.`, `Capa interna: <span class="math">x² + 1</span>, derivada <span class="math">2x</span>.`, `Producto: <span class="math">4·3·2x = 24x</span>.`],
        respuesta: `<span class="math">y′ = 24x(x² + 1)²((x² + 1)³ + 2)³</span>.` },
      { titulo: `Mancha de combustible que se expande`,
        enunciado: `Un derrame forma una mancha circular de radio <span class="math">r = 3t</span> metros, con t en minutos. Si <span class="math">A = πr²</span>, halla <span class="math">dA/dt</span> en t = 2 min.`,
        pasos: [`<span class="math">dA/dr = 2πr</span> y <span class="math">dr/dt = 3</span>.`, `Cadena: <span class="math">dA/dt = 2πr·3 = 6πr</span>.`, `En t = 2: <span class="math">r = 6</span> m, entonces <span class="math">dA/dt = 36π</span>.`, `Numéricamente <span class="math">36π ≈ 113.1</span>.`],
        respuesta: `<span class="math">dA/dt = 36π ≈ 113.1</span> m² por minuto.` }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: `Deriva <span class="math">f(x) = (x + 4)⁷</span>.`, pasos: [`<span class="math">u = x + 4</span>, <span class="math">u′ = 1</span>.`, `<span class="math">f′ = 7(x + 4)⁶·1</span>.`], respuesta: `<span class="math">f′(x) = 7(x + 4)⁶</span>.` },
      { nivel: 'facil', enunciado: `Deriva <span class="math">f(x) = (5x − 3)⁴</span>.`, pasos: [`<span class="math">u = 5x − 3</span>, <span class="math">u′ = 5</span>.`, `<span class="math">f′ = 4(5x − 3)³·5 = 20(5x − 3)³</span>.`], respuesta: `<span class="math">f′(x) = 20(5x − 3)³</span>.` },
      { nivel: 'facil', enunciado: `Deriva <span class="math">f(x) = √(2x + 1)</span>.`, pasos: [`<span class="math">u = 2x + 1</span>, <span class="math">u′ = 2</span>.`, `<span class="math">f′ = 2/(2√(2x + 1))</span>.`, `Simplifica el 2.`], respuesta: `<span class="math">f′(x) = 1/√(2x + 1)</span>.` },
      { nivel: 'facil', enunciado: `Calcula <span class="math">y′(1)</span> si <span class="math">y = (x² + 1)³</span>.`, pasos: [`<span class="math">y′ = 3(x² + 1)²·2x = 6x(x² + 1)²</span>.`, `<span class="math">y′(1) = 6·1·4 = 24</span>.`], respuesta: `<span class="math">y′(1) = 24</span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">f(x) = 1/(3x − 1)²</span>.`, pasos: [`Reescribe <span class="math">(3x − 1)<sup>−2</sup></span>.`, `<span class="math">f′ = −2(3x − 1)<sup>−3</sup>·3</span>.`, `<span class="math">= −6/(3x − 1)³</span>.`], respuesta: `<span class="math">f′(x) = −6/(3x − 1)³</span>.` },
      { nivel: 'intermedio', enunciado: `Calcula <span class="math">f′(4)</span> si <span class="math">f(x) = √(x² + 9)</span>.`, pasos: [`<span class="math">f′ = 2x/(2√(x² + 9)) = x/√(x² + 9)</span>.`, `<span class="math">f′(4) = 4/√25 = 4/5</span>.`], respuesta: `<span class="math">f′(4) = 4/5 = 0.8</span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">f(x) = (x² − 1)⁴(x + 2)</span> y factoriza.`, pasos: [`Producto: <span class="math">f′ = 4(x² − 1)³·2x·(x + 2) + (x² − 1)⁴·1</span>.`, `Factor común <span class="math">(x² − 1)³</span>: <span class="math">8x(x + 2) + (x² − 1)</span>.`, `<span class="math">= 8x² + 16x + x² − 1 = 9x² + 16x − 1</span>.`], respuesta: `<span class="math">f′(x) = (x² − 1)³(9x² + 16x − 1)</span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">f(x) = ((x + 1)/(x − 1))³</span>.`, pasos: [`Externa: cubo, interna <span class="math">u = (x + 1)/(x − 1)</span>.`, `<span class="math">u′ = ((x − 1) − (x + 1))/(x − 1)² = −2/(x − 1)²</span>.`, `<span class="math">f′ = 3u²·u′ = 3(x + 1)²/(x − 1)²·(−2)/(x − 1)²</span>.`], respuesta: `<span class="math">f′(x) = −6(x + 1)²/(x − 1)⁴</span>.` },
      { nivel: 'dificil', enunciado: `Deriva <span class="math">f(x) = √(1 + √x)</span>.`, pasos: [`Externa: raíz, interna <span class="math">u = 1 + √x</span>.`, `<span class="math">(√u)′ = u′/(2√u)</span> con <span class="math">u′ = 1/(2√x)</span>.`, `<span class="math">f′ = (1/(2√x))/(2√(1 + √x))</span>.`], respuesta: `<span class="math">f′(x) = 1/(4√x·√(1 + √x))</span>.` },
      { nivel: 'dificil', enunciado: `Deriva <span class="math">f(x) = (x² + 1)/√(x² + 4)</span> y simplifica.`, pasos: [`Cociente: <span class="math">u = x² + 1</span>, <span class="math">v = (x² + 4)<sup>1/2</sup></span>, <span class="math">v′ = x/√(x² + 4)</span>.`, `Numerador: <span class="math">2x√(x² + 4) − (x² + 1)x/√(x² + 4)</span>; multiplica arriba y abajo por <span class="math">√(x² + 4)</span>: <span class="math">(2x(x² + 4) − x(x² + 1))/√(x² + 4)</span>.`, `<span class="math">2x³ + 8x − x³ − x = x³ + 7x</span>.`, `Dividiendo entre <span class="math">v² = x² + 4</span>: denominador total <span class="math">(x² + 4)<sup>3/2</sup></span>.`], respuesta: `<span class="math">f′(x) = x(x² + 7)/(x² + 4)<sup>3/2</sup></span>.` },
      { nivel: 'dificil', enunciado: `Sean <span class="math">h(2) = 3</span>, <span class="math">h′(2) = 5</span>, <span class="math">g(3) = 4</span>, <span class="math">g′(3) = −2</span>. Si <span class="math">F(x) = (g(h(x)))²</span>, calcula <span class="math">F′(2)</span>.`, pasos: [`<span class="math">F′(x) = 2·g(h(x))·g′(h(x))·h′(x)</span>.`, `En x = 2: <span class="math">h(2) = 3</span>, así <span class="math">g(h(2)) = g(3) = 4</span>.`, `<span class="math">F′(2) = 2·4·(−2)·5</span>.`, `<span class="math">= −80</span>.`], respuesta: `<span class="math">F′(2) = −80</span>.` }
    ],
    teoricas: [
      { q: `Enuncia la regla de la cadena con tus palabras.`, a: `Para derivar una composición <span class="math">f(g(x))</span> se deriva la función externa evaluada en la interna y se multiplica por la derivada de la interna: <span class="math">f′(g(x))·g′(x)</span>.` },
      { q: `¿Por qué en <span class="math">(3x + 1)⁵</span> aparece un factor 3 en la derivada?`, a: `Porque la derivada de la función interna <span class="math">3x + 1</span> es 3. Ese factor representa cuán rápido cambia el interior cuando x cambia.` },
      { q: `¿Qué función es la interna en <span class="math">1/√(x + 5)</span>?`, a: `Si se ve como <span class="math">(x + 5)<sup>−1/2</sup></span>, la interna es <span class="math">x + 5</span> y la externa es <span class="math">u<sup>−1/2</sup></span>. También podría pensarse la raíz como otra capa.` },
      { q: `¿Cómo se detecta cuántas veces hay que aplicar la cadena?`, a: `Cuenta cuántas funciones están anidadas: cada capa aporta un factor con la derivada de lo que contiene. Se detiene cuando lo de adentro es solo x.` },
      { q: `Si <span class="math">dy/du = 4</span> y <span class="math">du/dx = 3</span>, ¿cuánto vale <span class="math">dy/dx</span>?`, a: `<span class="math">dy/dx = 4·3 = 12</span>: las razones de cambio se multiplican a lo largo de la cadena.` },
      { q: `¿Por qué la regla de la cadena es importante para las integrales?`, a: `Porque la integración por sustitución consiste en reconocer el resultado de aplicar la cadena y deshacerlo: se busca una función interna cuya derivada aparece multiplicando.` },
      { q: `¿Es <span class="math">(f(g(x)))′ = f′(g′(x))</span>? Explica.`, a: `No. La derivada externa se evalúa en <span class="math">g(x)</span>, no en <span class="math">g′(x)</span>, y falta multiplicar por <span class="math">g′(x)</span>.` },
      { q: `Un tanque se llena de modo que <span class="math">V = h³</span> y <span class="math">h = 2t</span>. ¿Cómo se obtiene <span class="math">dV/dt</span>?`, a: `<span class="math">dV/dt = dV/dh · dh/dt = 3h²·2 = 6h²</span> y se sustituye <span class="math">h = 2t</span>: <span class="math">24t²</span>.` }
    ],
    errores: [
      `Olvidar multiplicar por la derivada de la función interna: derivar <span class="math">(3x + 1)⁵</span> como <span class="math">5(3x + 1)⁴</span> omite el factor 3.`,
      `Derivar también la interna dentro de la externa: <span class="math">((x² + 1)³)′ = 3(2x)²</span> es incorrecto. La interna queda igual dentro y se multiplica aparte por su derivada.`,
      `Confundir la regla de la cadena con la del producto: en <span class="math">(2x + 1)³</span> no hay producto, hay composición.`,
      `Al simplificar, cancelar mal el factor común. Factoriza con cuidado la menor potencia de cada factor repetido.`
    ],
    aplicacion: { titulo: `Costo de producción que depende del tiempo`, html: `<p>Una fábrica de bolsas de café produce <span class="math">q = 3t²</span> cientos de unidades después de t horas de funcionamiento, y su costo en dólares es <span class="math">C(q) = 0.5q² + 10q</span>. ¿A qué rapidez crece el costo en la hora t = 2?</p><ol><li><span class="math">dC/dq = q + 10</span> y <span class="math">dq/dt = 6t</span>.</li><li>Cadena: <span class="math">dC/dt = (q + 10)·6t</span>.</li><li>En t = 2: <span class="math">q = 3·4 = 12</span>, entonces <span class="math">dC/dt = (12 + 10)·12 = 264</span>.</li></ol><p>Al cabo de 2 horas el costo crece a <strong>$264 por hora</strong>. La cadena permite no sustituir q antes de derivar: podrías hacerlo (<span class="math">C = 4.5t⁴ + 30t²</span>, <span class="math">C′ = 18t³ + 60t = 144 + 120 = 264</span>) y comprobar que coincide.</p>` },
    calc: 'cadena',
    examen: [
      { tipo: 'num', q: `Calcula <span class="math">f′(1)</span> si <span class="math">f(x) = (2x − 1)⁵</span>.`, r: 10, tol: 0.01, pasos: [`<span class="math">u = 2x − 1</span>, <span class="math">u′ = 2</span>.`, `<span class="math">f′ = 5(2x − 1)⁴·2 = 10(2x − 1)⁴</span>.`, `En x = 1: <span class="math">10·1 = 10</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(3)</span> si <span class="math">f(x) = √(x² + 16)</span>.`, r: 0.6, tol: 0.01, pasos: [`<span class="math">f′ = x/√(x² + 16)</span>.`, `En x = 3: <span class="math">3/√25 = 3/5</span>.`, `<span class="math">= 0.6</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(1)</span> si <span class="math">f(x) = (x² + 1)<sup>−2</sup></span>.`, r: -0.5, tol: 0.01, pasos: [`<span class="math">f′ = −2(x² + 1)<sup>−3</sup>·2x = −4x/(x² + 1)³</span>.`, `En x = 1: <span class="math">−4/8</span>.`, `<span class="math">= −0.5</span>.`] },
      { tipo: 'opt', q: `La derivada de <span class="math">y = (4x² + 1)³</span> es:`, opciones: [`<span class="math">3(4x² + 1)²</span>`, `<span class="math">24x(4x² + 1)²</span>`, `<span class="math">3(8x)²</span>`, `<span class="math">12x(4x² + 1)²</span>`], correcta: 1, pasos: [`Externa: <span class="math">3u²</span>; interna: <span class="math">u′ = 8x</span>.`, `<span class="math">y′ = 3(4x² + 1)²·8x</span>.`, `<span class="math">= 24x(4x² + 1)²</span>.`] },
      { tipo: 'par', q: `¿En qué punto (x, y) tiene tangente horizontal <span class="math">f(x) = (x − 3)⁴ − 2</span>?`, r: [3, -2], tol: 0.01, pasos: [`<span class="math">f′ = 4(x − 3)³·1</span>.`, `<span class="math">f′ = 0 ⇒ x = 3</span>.`, `<span class="math">f(3) = 0 − 2 = −2</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(1)</span> si <span class="math">f(x) = (x² + 1)³(x − 1)</span>.`, r: 8, tol: 0.01, pasos: [`Producto: <span class="math">f′ = 3(x² + 1)²·2x·(x − 1) + (x² + 1)³</span>.`, `En x = 1 el primer término tiene <span class="math">(x − 1) = 0</span>.`, `<span class="math">f′(1) = 0 + 2³ = 8</span>.`] },
      { tipo: 'opt', q: `La derivada de <span class="math">f(x) = √(3x)</span> es:`, opciones: [`<span class="math">3/(2√(3x))</span>`, `<span class="math">1/(2√(3x))</span>`, `<span class="math">3/√(3x)</span>`, `<span class="math">√3/2</span>`], correcta: 0, pasos: [`<span class="math">u = 3x</span>, <span class="math">u′ = 3</span>.`, `<span class="math">(√u)′ = u′/(2√u)</span>.`, `<span class="math">= 3/(2√(3x))</span>. (Equivale a <span class="math">√3/(2√x)</span>.)`] },
      { tipo: 'num', q: `Si <span class="math">h(1) = 2</span>, <span class="math">h′(1) = 3</span> y <span class="math">g′(2) = −4</span>, calcula <span class="math">(g(h(x)))′</span> en x = 1.`, r: -12, tol: 0.01, pasos: [`<span class="math">(g∘h)′(1) = g′(h(1))·h′(1)</span>.`, `<span class="math">h(1) = 2</span>, así que <span class="math">g′(2) = −4</span>.`, `<span class="math">−4·3 = −12</span>.`] },
      { tipo: 'num', q: `Un costo es <span class="math">C = q² + 4q</span> y <span class="math">q = 2t + 1</span>. Calcula <span class="math">dC/dt</span> en t = 1.`, r: 20, tol: 0.01, pasos: [`<span class="math">dC/dq = 2q + 4</span>, <span class="math">dq/dt = 2</span>.`, `En t = 1: <span class="math">q = 3</span>, <span class="math">dC/dq = 10</span>.`, `<span class="math">dC/dt = 10·2 = 20</span>.`] },
      { tipo: 'lista', q: `Halla todos los x donde <span class="math">f(x) = (x² − 4x)³</span> tiene tangente horizontal (separa con comas).`, r: [0, 2, 4], tol: 0.01, pasos: [`<span class="math">f′ = 3(x² − 4x)²(2x − 4)</span>.`, `<span class="math">(x² − 4x)² = 0 ⇒ x = 0 o x = 4</span>.`, `<span class="math">2x − 4 = 0 ⇒ x = 2</span>. Las soluciones son 0, 2 y 4.`] }
    ]
  };


  T['1.13'] = {
    id: '1.13',
    unidad: 3,
    titulo: `Derivadas trigonométricas, exponenciales y logarítmicas`,
    resumen: `Derivarás sen, cos, tan, e<sup>x</sup>, a<sup>x</sup>, ln x y log<sub>a</sub> x, combinándolas con la cadena, y conocerás las inversas trigonométricas.`,
    objetivos: [
      `Derivar las seis funciones trigonométricas y sus composiciones con la regla de la cadena.`,
      `Derivar funciones exponenciales (base e y base a) y logarítmicas (ln y log<sub>a</sub>).`,
      `Usar la derivación logarítmica para funciones del tipo <span class="math">f(x)<sup>g(x)</sup></span>.`,
      `Reconocer las derivadas de arcsen, arccos y arctan y aplicar las derivadas a modelos de crecimiento y enfriamiento.`
    ],
    teoria: [
      { titulo: `Derivadas de seno y coseno`, html: `<p>Con los límites del tema 1.7 (<span class="math">lím<sub>h→0</sub> sen h/h = 1</span> y <span class="math">lím<sub>h→0</sub> (cos h − 1)/h = 0</span>) y la fórmula de la suma <span class="math">sen(x + h) = sen x cos h + cos x sen h</span> se demuestra:</p><p><span class="math">(sen x)′ = cos x</span>, <span class="math">(cos x)′ = −sen x</span></p><p>Estas fórmulas valen <strong>solo si x está en radianes</strong>. Fíjate en el signo menos del coseno: es el error más común. Observa también el ciclo: sen → cos → −sen → −cos → sen, de modo que cuatro derivaciones sucesivas devuelven la función original.</p>` },
      { titulo: `Tangente, secante, cosecante y cotangente`, html: `<p>Se obtienen con la regla del cociente a partir de seno y coseno:</p><table><tr><th>Función</th><th>Derivada</th></tr><tr><td><span class="math">tan x</span></td><td><span class="math">sec²x</span></td></tr><tr><td><span class="math">cot x</span></td><td><span class="math">−csc²x</span></td></tr><tr><td><span class="math">sec x</span></td><td><span class="math">sec x tan x</span></td></tr><tr><td><span class="math">csc x</span></td><td><span class="math">−csc x cot x</span></td></tr></table><p>Regla mnemotécnica: las derivadas de las funciones que empiezan con "co" (cos, cot, csc) llevan signo negativo.</p><p>Ejemplo de deducción: <span class="math">(tan x)′ = ((sen x)′cos x − sen x(cos x)′)/cos²x = (cos²x + sen²x)/cos²x = 1/cos²x = sec²x</span>.</p>` },
      { titulo: `Cadena con funciones trigonométricas`, html: `<p>Si u es una función de x:</p><ul><li><span class="math">(sen u)′ = cos u · u′</span></li><li><span class="math">(cos u)′ = −sen u · u′</span></li><li><span class="math">(tan u)′ = sec²u · u′</span></li><li><span class="math">(sec u)′ = sec u tan u · u′</span></li></ul><p>Ejemplos: <span class="math">(sen 3x)′ = 3cos 3x</span>; <span class="math">(cos x²)′ = −2x sen x²</span>; <span class="math">(sen²x)′ = 2 sen x cos x</span> (potencia de seno: la externa es el cuadrado y la interna es sen x). Distingue <span class="math">sen²x</span> (el seno elevado al cuadrado) de <span class="math">sen x²</span> (seno de x al cuadrado).</p>` },
      { titulo: `La función exponencial`, html: `<p>El número e ≈ 2.71828 es la base para la cual la pendiente de la curva <span class="math">y = e<sup>x</sup></span> en cada punto es igual a la altura: la función es su propia derivada.</p><p><span class="math">(e<sup>x</sup>)′ = e<sup>x</sup></span>, <span class="math">(a<sup>x</sup>)′ = a<sup>x</sup> ln a</span> (a > 0)</p><p>Con la cadena: <span class="math">(e<sup>u</sup>)′ = e<sup>u</sup>·u′</span>, <span class="math">(a<sup>u</sup>)′ = a<sup>u</sup> ln a·u′</span>. Ejemplos: <span class="math">(e<sup>−2x</sup>)′ = −2e<sup>−2x</sup></span>; <span class="math">(2<sup>x</sup>)′ = 2<sup>x</sup> ln 2</span>; <span class="math">(e<sup>x²</sup>)′ = 2x e<sup>x²</sup></span>.</p><p>Por eso e<sup>x</sup> modela fenómenos donde la rapidez de cambio es proporcional a la cantidad presente: crecimiento de una población, interés compuesto, decaimiento radiactivo.</p>` },
      { titulo: `Las funciones logarítmicas`, html: `<p><span class="math">(ln x)′ = 1/x</span> (x > 0), <span class="math">(log<sub>a</sub> x)′ = 1/(x ln a)</span></p><p>Con la cadena: <span class="math">(ln u)′ = u′/u</span>. Ejemplos: <span class="math">(ln(x² + 1))′ = 2x/(x² + 1)</span>; <span class="math">(ln 3x)′ = 3/(3x) = 1/x</span>.</p><p>Antes de derivar un logaritmo, usa sus propiedades para simplificar: <span class="math">ln(ab) = ln a + ln b</span>, <span class="math">ln(a/b) = ln a − ln b</span>, <span class="math">ln aⁿ = n ln a</span>. Por ejemplo, <span class="math">ln √(x² + 1) = (1/2) ln(x² + 1)</span> se deriva mucho más fácil así. Atención: <span class="math">(ln|x|)′ = 1/x</span> para todo x ≠ 0, un resultado que será clave al integrar <span class="math">1/x</span>.</p>` },
      { titulo: `Derivación logarítmica`, html: `<p>Para funciones del tipo <span class="math">y = f(x)<sup>g(x)</sup></span> (variable en base y exponente), o productos y cocientes largos:</p><ol><li>Toma ln a ambos lados: <span class="math">ln y = g(x)·ln f(x)</span>.</li><li>Deriva con la cadena: <span class="math">y′/y = (g(x) ln f(x))′</span>.</li><li>Despeja <span class="math">y′ = y·(g(x) ln f(x))′</span>.</li></ol><p>Ejemplo: <span class="math">y = x<sup>x</sup></span>. <span class="math">ln y = x ln x</span>, <span class="math">y′/y = ln x + 1</span>, entonces <span class="math">y′ = x<sup>x</sup>(ln x + 1)</span>. No se puede aplicar la regla de la potencia (la base y el exponente varían a la vez).</p>` },
      { titulo: `Inversas trigonométricas (solo mención)`, html: `<p>Sin deducirlas, conviene conocer:</p><p><span class="math">(arcsen x)′ = 1/√(1 − x²)</span>, <span class="math">(arccos x)′ = −1/√(1 − x²)</span>, <span class="math">(arctan x)′ = 1/(1 + x²)</span></p><p>Aparecerán de nuevo en integrales: por ejemplo, <span class="math">∫ 1/(1 + x²) dx = arctan x + C</span>. Con la cadena: <span class="math">(arctan 2x)′ = 2/(1 + 4x²)</span>.</p>` },
      { titulo: `Resumen y cómo estudiar la tabla`, html: `<p>Para integrales necesitas reconocer estas derivadas "al revés". Practica así: cubre la columna de la derecha y verifica que puedes producirla. Todas las fórmulas de la tabla pasan a la forma con cadena multiplicando por <span class="math">u′</span>.</p><p>Combínalas con las reglas del producto y el cociente: <span class="math">(x² e<sup>3x</sup>)′ = 2x e<sup>3x</sup> + 3x² e<sup>3x</sup></span>.</p>` }
    ],
    formulas: [
      { label: `Seno y coseno`, html: `<span class="math">(sen u)′ = cos u·u′</span>, <span class="math">(cos u)′ = −sen u·u′</span>` },
      { label: `Tangente y cotangente`, html: `<span class="math">(tan u)′ = sec²u·u′</span>, <span class="math">(cot u)′ = −csc²u·u′</span>` },
      { label: `Secante y cosecante`, html: `<span class="math">(sec u)′ = sec u tan u·u′</span>, <span class="math">(csc u)′ = −csc u cot u·u′</span>` },
      { label: `Exponencial base e`, html: `<span class="math">(e<sup>u</sup>)′ = e<sup>u</sup>·u′</span>` },
      { label: `Exponencial base a`, html: `<span class="math">(a<sup>u</sup>)′ = a<sup>u</sup> ln a·u′</span>` },
      { label: `Logaritmo natural`, html: `<span class="math">(ln u)′ = u′/u</span>` },
      { label: `Logaritmo base a`, html: `<span class="math">(log<sub>a</sub> u)′ = u′/(u ln a)</span>` },
      { label: `Inversas trigonométricas`, html: `<span class="math">(arcsen x)′ = 1/√(1 − x²)</span>, <span class="math">(arctan x)′ = 1/(1 + x²)</span>` }
    ],
    ejemplos: [
      { titulo: `Seno y coseno con cadena`,
        enunciado: `Deriva <span class="math">f(x) = sen(3x) + cos(x²)</span>.`,
        pasos: [`<span class="math">(sen 3x)′ = cos 3x·3 = 3cos 3x</span>.`, `<span class="math">(cos x²)′ = −sen x²·2x = −2x sen x²</span>.`, `Suma los resultados.`],
        respuesta: `<span class="math">f′(x) = 3cos 3x − 2x sen x²</span>.` },
      { titulo: `Producto con exponencial`,
        enunciado: `Deriva <span class="math">y = x²e<sup>3x</sup></span>.`,
        pasos: [`Producto: <span class="math">u = x²</span>, <span class="math">u′ = 2x</span>; <span class="math">v = e<sup>3x</sup></span>, <span class="math">v′ = 3e<sup>3x</sup></span>.`, `<span class="math">y′ = 2x e<sup>3x</sup> + x²·3e<sup>3x</sup></span>.`, `Factor común <span class="math">x e<sup>3x</sup></span>.`],
        respuesta: `<span class="math">y′ = x e<sup>3x</sup>(2 + 3x)</span>.` },
      { titulo: `Logaritmo de una expresión`,
        enunciado: `Deriva <span class="math">y = ln(x² + 1)</span> y también <span class="math">y = ln(√(x² + 1))</span>.`,
        pasos: [`Primera: <span class="math">y′ = (x² + 1)′/(x² + 1) = 2x/(x² + 1)</span>.`, `Segunda: <span class="math">ln √(x² + 1) = (1/2) ln(x² + 1)</span>, así que su derivada es la mitad.`, `<span class="math">y′ = (1/2)·2x/(x² + 1) = x/(x² + 1)</span>.`],
        respuesta: `<span class="math">2x/(x² + 1)</span> y <span class="math">x/(x² + 1)</span>, respectivamente.` },
      { titulo: `Trigonométricas: tangente y potencia del seno`,
        enunciado: `Deriva <span class="math">y = tan 2x</span> y <span class="math">y = sen²x</span>.`,
        pasos: [`<span class="math">(tan 2x)′ = sec²(2x)·2 = 2sec²2x</span>.`, `<span class="math">sen²x = (sen x)²</span>: externa u², interna sen x.`, `<span class="math">y′ = 2 sen x·cos x</span> (que equivale a <span class="math">sen 2x</span>).`],
        respuesta: `<span class="math">2sec²2x</span> y <span class="math">2 sen x cos x = sen 2x</span>.` },
      { titulo: `Derivación logarítmica`,
        enunciado: `Deriva <span class="math">y = x<sup>x</sup></span> y calcula <span class="math">y′(2)</span>.`,
        pasos: [`<span class="math">ln y = x ln x</span>.`, `Deriva: <span class="math">y′/y = 1·ln x + x·(1/x) = ln x + 1</span>.`, `<span class="math">y′ = x<sup>x</sup>(ln x + 1)</span>.`, `En x = 2: <span class="math">4(ln 2 + 1) ≈ 4(1.6931) = 6.77</span>.`],
        respuesta: `<span class="math">y′ = x<sup>x</sup>(ln x + 1)</span>; <span class="math">y′(2) ≈ 6.77</span>.` },
      { titulo: `Crecimiento poblacional`,
        enunciado: `La población de un municipio es <span class="math">P(t) = 1000e<sup>0.02t</sup></span> personas, con t en años. ¿A qué rapidez crece en t = 10?`,
        pasos: [`<span class="math">P′(t) = 1000·0.02e<sup>0.02t</sup> = 20e<sup>0.02t</sup></span>.`, `<span class="math">P′(10) = 20e<sup>0.2</sup></span>.`, `<span class="math">e<sup>0.2</sup> ≈ 1.2214</span>, entonces <span class="math">P′(10) ≈ 24.43</span>.`],
        respuesta: `Crece unas 24.4 personas por año (observa que <span class="math">P′ = 0.02P</span>: crecimiento del 2 % anual).` }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: `Deriva <span class="math">y = sen x + cos x</span>.`, pasos: [`<span class="math">(sen x)′ = cos x</span>.`, `<span class="math">(cos x)′ = −sen x</span>.`], respuesta: `<span class="math">y′ = cos x − sen x</span>.` },
      { nivel: 'facil', enunciado: `Deriva <span class="math">y = e<sup>x</sup> + 5x</span>.`, pasos: [`<span class="math">(e<sup>x</sup>)′ = e<sup>x</sup></span>.`, `<span class="math">(5x)′ = 5</span>.`], respuesta: `<span class="math">y′ = e<sup>x</sup> + 5</span>.` },
      { nivel: 'facil', enunciado: `Deriva <span class="math">y = ln x + x²</span>.`, pasos: [`<span class="math">(ln x)′ = 1/x</span>.`, `<span class="math">(x²)′ = 2x</span>.`], respuesta: `<span class="math">y′ = 1/x + 2x</span>.` },
      { nivel: 'facil', enunciado: `Calcula <span class="math">f′(π/2)</span> si <span class="math">f(x) = 3cos x</span>.`, pasos: [`<span class="math">f′(x) = −3 sen x</span>.`, `<span class="math">sen(π/2) = 1</span>.`], respuesta: `<span class="math">f′(π/2) = −3</span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">y = e<sup>−2x</sup></span>.`, pasos: [`<span class="math">u = −2x</span>, <span class="math">u′ = −2</span>.`, `<span class="math">(e<sup>u</sup>)′ = e<sup>u</sup>u′</span>.`], respuesta: `<span class="math">y′ = −2e<sup>−2x</sup></span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">y = x ln x</span>.`, pasos: [`Producto: <span class="math">1·ln x + x·(1/x)</span>.`, `<span class="math">= ln x + 1</span>.`], respuesta: `<span class="math">y′ = ln x + 1</span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">y = sen x/(1 + cos x)</span> y simplifica.`, pasos: [`<span class="math">y′ = (cos x(1 + cos x) − sen x(−sen x))/(1 + cos x)²</span>.`, `Numerador: <span class="math">cos x + cos²x + sen²x = cos x + 1</span>.`, `<span class="math">y′ = (1 + cos x)/(1 + cos x)² = 1/(1 + cos x)</span>.`], respuesta: `<span class="math">y′ = 1/(1 + cos x)</span>.` },
      { nivel: 'intermedio', enunciado: `Deriva <span class="math">y = ln(sen x)</span>.`, pasos: [`<span class="math">u = sen x</span>, <span class="math">u′ = cos x</span>.`, `<span class="math">y′ = u′/u = cos x/sen x</span>.`], respuesta: `<span class="math">y′ = cot x</span>.` },
      { nivel: 'dificil', enunciado: `Deriva <span class="math">y = e<sup>x</sup> sen 2x</span>.`, pasos: [`Producto: <span class="math">(e<sup>x</sup>)′ sen 2x + e<sup>x</sup>(sen 2x)′</span>.`, `<span class="math">(sen 2x)′ = 2cos 2x</span>.`, `<span class="math">y′ = e<sup>x</sup> sen 2x + 2e<sup>x</sup> cos 2x</span>.`], respuesta: `<span class="math">y′ = e<sup>x</sup>(sen 2x + 2cos 2x)</span>.` },
      { nivel: 'dificil', enunciado: `Deriva <span class="math">y = arctan(√x)</span>.`, pasos: [`<span class="math">(arctan u)′ = u′/(1 + u²)</span> con <span class="math">u = √x</span>, <span class="math">u′ = 1/(2√x)</span>.`, `<span class="math">u² = x</span>.`, `<span class="math">y′ = (1/(2√x))/(1 + x)</span>.`], respuesta: `<span class="math">y′ = 1/(2√x (1 + x))</span>.` },
      { nivel: 'dificil', enunciado: `Deriva <span class="math">y = x<sup>sen x</sup></span> con derivación logarítmica.`, pasos: [`<span class="math">ln y = sen x·ln x</span>.`, `Deriva: <span class="math">y′/y = cos x·ln x + sen x·(1/x)</span>.`, `Multiplica por y: <span class="math">y′ = x<sup>sen x</sup>(cos x ln x + sen x/x)</span>.`], respuesta: `<span class="math">y′ = x<sup>sen x</sup>(cos x·ln x + sen x/x)</span>.` }
    ],
    teoricas: [
      { q: `¿Por qué las fórmulas de derivadas trigonométricas exigen radianes?`, a: `Porque el límite <span class="math">sen h/h = 1</span> solo vale con h en radianes. En grados aparecería un factor extra <span class="math">π/180</span>.` },
      { q: `¿Cuál es la derivada de <span class="math">cos x</span> y por qué tiene signo negativo?`, a: `<span class="math">−sen x</span>. Cerca de 0 el coseno baja desde 1 (su pendiente es negativa) y el seno es positivo, por eso aparece el signo menos.` },
      { q: `¿Qué tiene de especial la función <span class="math">e<sup>x</sup></span>?`, a: `Es igual a su derivada: la pendiente de la curva en cada punto coincide con su altura. Modela magnitudes cuya rapidez de cambio es proporcional a su valor.` },
      { q: `¿Cuál es la diferencia entre derivar <span class="math">2<sup>x</sup></span> y <span class="math">x²</span>?`, a: `<span class="math">(x²)′ = 2x</span> (potencia). <span class="math">(2<sup>x</sup>)′ = 2<sup>x</sup> ln 2</span> (exponencial): la variable está en el exponente.` },
      { q: `¿Por qué <span class="math">(ln 3x)′ = 1/x</span> y no <span class="math">1/(3x)</span>?`, a: `Con la cadena: <span class="math">u′/u = 3/(3x) = 1/x</span>. También <span class="math">ln 3x = ln 3 + ln x</span> y <span class="math">ln 3</span> es constante.` },
      { q: `¿Cuándo conviene la derivación logarítmica?`, a: `Cuando la variable aparece en la base y en el exponente, como <span class="math">x<sup>x</sup></span>, o en productos y cocientes con muchos factores.` },
      { q: `Explica la diferencia entre <span class="math">sen²x</span> y <span class="math">sen x²</span> al derivar.`, a: `<span class="math">sen²x = (sen x)²</span> da <span class="math">2 sen x cos x</span>; <span class="math">sen x² = sen(x²)</span> da <span class="math">2x cos x²</span>. La interna es distinta.` },
      { q: `¿Cuántas veces debes derivar <span class="math">sen x</span> para volver a <span class="math">sen x</span>?`, a: `Cuatro: <span class="math">cos x</span>, <span class="math">−sen x</span>, <span class="math">−cos x</span>, <span class="math">sen x</span>.` }
    ],
    errores: [
      `Olvidar el signo negativo en las derivadas de cos, cot y csc.`,
      `Derivar <span class="math">a<sup>x</sup></span> con la regla de la potencia (<span class="math">x·a<sup>x−1</sup></span>). Es <span class="math">a<sup>x</sup> ln a</span>.`,
      `Omitir la derivada interna en <span class="math">(sen 3x)′ = cos 3x</span> (falta el factor 3) o en <span class="math">(e<sup>2x</sup>)′</span>.`,
      `Usar grados en vez de radianes al evaluar <span class="math">f′(a)</span> con trigonométricas.`
    ],
    aplicacion: { titulo: `Enfriamiento de una taza de café`, html: `<p>Según la ley de enfriamiento de Newton, la temperatura (°C) de un café es <span class="math">T(t) = 25 + 75e<sup>−0.05t</sup></span>, con t en minutos. Con la derivada medimos qué tan rápido se enfría:</p><ol><li><span class="math">T′(t) = 75·(−0.05)e<sup>−0.05t</sup> = −3.75e<sup>−0.05t</sup></span>.</li><li>En t = 0: <span class="math">T′(0) = −3.75</span> °C por minuto.</li><li>En t = 10: <span class="math">T′(10) = −3.75e<sup>−0.5</sup> ≈ −3.75·0.6065 ≈ −2.27</span> °C por minuto.</li></ol><p>El signo negativo indica que la temperatura baja; y la rapidez es cada vez menor porque <span class="math">T′ = −0.05(T − 25)</span>: la tasa de enfriamiento es proporcional a la diferencia con el ambiente (25 °C).</p>` },
    calc: 'derivada-trans',
    examen: [
      { tipo: 'num', q: `Calcula <span class="math">f′(0)</span> si <span class="math">f(x) = sen 2x</span>.`, r: 2, tol: 0.01, pasos: [`<span class="math">f′ = 2cos 2x</span>.`, `<span class="math">f′(0) = 2cos 0</span>.`, `<span class="math">= 2</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(0)</span> si <span class="math">f(x) = e<sup>3x</sup></span>.`, r: 3, tol: 0.01, pasos: [`<span class="math">f′ = 3e<sup>3x</sup></span>.`, `<span class="math">f′(0) = 3e⁰</span>.`, `<span class="math">= 3</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(1)</span> si <span class="math">f(x) = ln(x² + 1)</span>.`, r: 1, tol: 0.01, pasos: [`<span class="math">f′ = 2x/(x² + 1)</span>.`, `<span class="math">f′(1) = 2/2</span>.`, `<span class="math">= 1</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(1)</span> si <span class="math">f(x) = x e<sup>x</sup></span>. Redondea a 2 decimales.`, r: 5.4366, tol: 0.01, pasos: [`Producto: <span class="math">f′ = e<sup>x</sup> + x e<sup>x</sup> = e<sup>x</sup>(1 + x)</span>.`, `<span class="math">f′(1) = 2e</span>.`, `<span class="math">2e ≈ 5.44</span>.`] },
      { tipo: 'par', q: `Halla el punto (x, y) donde <span class="math">f(x) = x − ln x</span> (x > 0) tiene tangente horizontal.`, r: [1, 1], tol: 0.01, pasos: [`<span class="math">f′ = 1 − 1/x</span>.`, `<span class="math">f′ = 0 ⇒ x = 1</span>.`, `<span class="math">f(1) = 1 − 0 = 1</span>.`] },
      { tipo: 'opt', q: `La derivada de <span class="math">tan x</span> es:`, opciones: [`<span class="math">cot x</span>`, `<span class="math">sec x tan x</span>`, `<span class="math">sec²x</span>`, `<span class="math">−csc²x</span>`], correcta: 2, pasos: [`<span class="math">tan x = sen x/cos x</span>.`, `Cociente: <span class="math">(cos²x + sen²x)/cos²x</span>.`, `<span class="math">= 1/cos²x = sec²x</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(π/2)</span> si <span class="math">f(x) = x sen x</span>. Redondea a 2 decimales.`, r: 1, tol: 0.01, pasos: [`<span class="math">f′ = sen x + x cos x</span>.`, `<span class="math">sen(π/2) = 1</span>, <span class="math">cos(π/2) = 0</span>.`, `<span class="math">f′(π/2) = 1 + 0 = 1</span>.`] },
      { tipo: 'opt', q: `La derivada de <span class="math">a<sup>x</sup></span> (a > 0, a ≠ 1) es:`, opciones: [`<span class="math">x·a<sup>x−1</sup></span>`, `<span class="math">a<sup>x</sup></span>`, `<span class="math">a<sup>x</sup> ln a</span>`, `<span class="math">a<sup>x</sup>/ln a</span>`], correcta: 2, pasos: [`<span class="math">a<sup>x</sup> = e<sup>x ln a</sup></span>.`, `Cadena: <span class="math">e<sup>x ln a</sup>·ln a</span>.`, `<span class="math">= a<sup>x</sup> ln a</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f′(2)</span> si <span class="math">f(x) = ln(3x)</span>.`, r: 0.5, tol: 0.01, pasos: [`<span class="math">f′ = 3/(3x) = 1/x</span>.`, `<span class="math">f′(2) = 1/2</span>.`, `<span class="math">= 0.5</span>.`] },
      { tipo: 'num', q: `Halla la pendiente de la tangente a <span class="math">y = tan x</span> en <span class="math">x = π/4</span>.`, r: 2, tol: 0.01, pasos: [`<span class="math">y′ = sec²x</span>.`, `<span class="math">sec(π/4) = √2</span>, así <span class="math">sec²(π/4) = 2</span>.`, `La pendiente es 2.`] }
    ]
  };


  T['1.14'] = {
    id: '1.14',
    unidad: 3,
    titulo: `Derivación implícita y derivadas de orden superior`,
    resumen: `Derivarás curvas dadas por ecuaciones en x e y sin despejar y, y calcularás derivadas segunda, tercera y de orden n.`,
    objetivos: [
      `Distinguir una función explícita de una relación implícita y derivar esta última con la regla de la cadena.`,
      `Calcular la pendiente de una curva implícita en un punto dado.`,
      `Obtener derivadas de orden superior (<span class="math">f″</span>, <span class="math">f‴</span>, <span class="math">f<sup>(n)</sup></span>) de funciones explícitas e implícitas.`,
      `Interpretar la segunda derivada como aceleración y como medida de concavidad.`
    ],
    teoria: [
      { titulo: `Funciones explícitas e implícitas`, html: `<p>En una función <strong>explícita</strong> la variable y está despejada: <span class="math">y = x² − 3x</span>. En una relación <strong>implícita</strong> x e y aparecen mezcladas en una ecuación, como <span class="math">x² + y² = 25</span> (una circunferencia) o <span class="math">x³ + y³ = 6xy</span>. Muchas curvas no se pueden despejar para y, o el despeje exige dos ramas (<span class="math">y = ±√(25 − x²)</span>).</p><p>Aun así, cerca de casi cada punto de la curva, y se comporta como una función derivable de x, y podemos hallar su derivada sin despejar.</p>` },
      { titulo: `Idea clave: y depende de x`, html: `<p>Al derivar implícitamente, tratamos a y como una función desconocida <span class="math">y(x)</span>. Por tanto, cada vez que derivas una expresión con y, aplicas la regla de la cadena:</p><ul><li><span class="math">(y²)′ = 2y·y′</span></li><li><span class="math">(y³)′ = 3y²·y′</span></li><li><span class="math">(sen y)′ = cos y·y′</span></li><li><span class="math">(xy)′ = y + x·y′</span> (producto)</li></ul><p>En Leibniz, <span class="math">y′ = dy/dx</span>, y el factor extra <span class="math">dy/dx</span> es justo la derivada interna.</p>` },
      { titulo: `Procedimiento de derivación implícita`, html: `<ol><li>Deriva ambos lados de la ecuación respecto a x, usando la cadena cada vez que derives y.</li><li>Reúne en un lado todos los términos con <span class="math">y′</span> y pasa los demás al otro lado.</li><li>Factoriza <span class="math">y′</span>.</li><li>Despeja: <span class="math">y′ = (expresión en x e y)</span>.</li><li>Para la pendiente en un punto (a, b), sustituye <span class="math">x = a</span>, <span class="math">y = b</span> (verifica que el punto esté sobre la curva).</li></ol><p>La derivada resultante depende de ambas variables: eso es normal, porque en una curva como la circunferencia, a un mismo x le corresponden dos y con pendientes distintas.</p>` },
      { titulo: `Ejemplo guía: la circunferencia`, html: `<p>De <span class="math">x² + y² = 25</span>: <span class="math">2x + 2y·y′ = 0</span>, entonces <span class="math">y′ = −x/y</span>. En (3, 4): <span class="math">y′ = −3/4</span>; en (3, −4): <span class="math">y′ = 3/4</span>. Geométricamente, la tangente es perpendicular al radio (cuya pendiente es y/x), y por eso la pendiente tangente es <span class="math">−x/y</span>. Si y = 0 la pendiente no está definida: la tangente es vertical (puntos (±5, 0)).</p>` },
      { titulo: `Derivadas de orden superior`, html: `<p>Si <span class="math">f′</span> es derivable, su derivada es la <strong>segunda derivada</strong>: <span class="math">f″(x) = (f′(x))′</span>. Se continúa: <span class="math">f‴</span>, y en general <span class="math">f<sup>(n)</sup></span>. En Leibniz: <span class="math">d²y/dx²</span>, <span class="math">d³y/dx³</span>.</p><p>Ejemplo: <span class="math">f = x⁴ − 3x³ + 2x</span>, <span class="math">f′ = 4x³ − 9x² + 2</span>, <span class="math">f″ = 12x² − 18x</span>, <span class="math">f‴ = 24x − 18</span>, <span class="math">f<sup>(4)</sup> = 24</span>, <span class="math">f<sup>(5)</sup> = 0</span>. Un polinomio de grado n se hace constante tras n derivaciones y se anula en la siguiente.</p>` },
      { titulo: `Significado de la segunda derivada`, html: `<ul><li><strong>Física:</strong> si <span class="math">s(t)</span> es posición, <span class="math">s′ = v</span> (velocidad) y <span class="math">s″ = a</span> (aceleración). Una aceleración negativa con velocidad positiva significa que el móvil frena.</li><li><strong>Geometría:</strong> <span class="math">f″ > 0</span> indica que la gráfica es cóncava hacia arriba (forma de copa, la pendiente aumenta); <span class="math">f″ < 0</span> cóncava hacia abajo. Se retomará en el tema 1.16 para clasificar máximos y mínimos.</li></ul>` },
      { titulo: `Segunda derivada implícita`, html: `<p>Para hallar <span class="math">y″</span> de una relación implícita: obtén <span class="math">y′</span> (en términos de x e y), derívala de nuevo con la cadena (cada y aporta <span class="math">y′</span>), y finalmente <strong>sustituye <span class="math">y′</span></strong> por su expresión. Ejemplo con <span class="math">x² + y² = 25</span>: <span class="math">y′ = −x/y</span>, así</p><p><span class="math">y″ = −(y − x·y′)/y² = −(y + x²/y)/y² = −(y² + x²)/y³ = −25/y³</span>.</p><p>Se usó que <span class="math">x² + y² = 25</span> para simplificar el numerador. En (3, 4): <span class="math">y″ = −25/64</span>.</p>` },
      { titulo: `Patrones en derivadas sucesivas`, html: `<p>Algunas funciones muestran un patrón útil:</p><ul><li><span class="math">(e<sup>kx</sup>)<sup>(n)</sup> = kⁿe<sup>kx</sup></span>.</li><li><span class="math">sen x</span> y <span class="math">cos x</span> repiten cada 4 derivadas.</li><li><span class="math">(ln x)<sup>(n)</sup> = (−1)<sup>n−1</sup>(n − 1)!/xⁿ</span>.</li><li><span class="math">(xⁿ)<sup>(n)</sup> = n!</span>, constante.</li></ul><p>Reconocer el patrón evita derivar muchas veces.</p>` }
    ],
    formulas: [
      { label: `Cadena con y`, html: `<span class="math">(yⁿ)′ = n·y<sup>n−1</sup>·y′</span>` },
      { label: `Producto con y`, html: `<span class="math">(xy)′ = y + x·y′</span>` },
      { label: `Despeje de la derivada`, html: `<span class="math">y′ = (términos sin y′)/(coeficiente de y′)</span>` },
      { label: `Circunferencia`, html: `<span class="math">x² + y² = r² ⇒ y′ = −x/y</span>` },
      { label: `Segunda derivada`, html: `<span class="math">f″(x) = d²y/dx² = (f′)′</span>` },
      { label: `Aceleración`, html: `<span class="math">a(t) = v′(t) = s″(t)</span>` },
      { label: `Derivada n-ésima de e<sup>kx</sup>`, html: `<span class="math">(e<sup>kx</sup>)<sup>(n)</sup> = kⁿ e<sup>kx</sup></span>` }
    ],
    ejemplos: [
      { titulo: `Circunferencia en un punto`,
        enunciado: `Halla la pendiente de <span class="math">x² + y² = 25</span> en el punto (3, 4).`,
        pasos: [`Deriva ambos lados: <span class="math">2x + 2y·y′ = 0</span>.`, `Despeja: <span class="math">y′ = −x/y</span>.`, `En (3, 4): <span class="math">y′ = −3/4</span>.`],
        respuesta: `<span class="math">y′ = −x/y</span>; la pendiente en (3, 4) es <span class="math">−3/4</span>.` },
      { titulo: `Folium de Descartes`,
        enunciado: `Halla <span class="math">y′</span> para <span class="math">x³ + y³ = 6xy</span> y evalúa en (3, 3).`,
        pasos: [`Comprueba el punto: <span class="math">27 + 27 = 54 = 6·9</span>. ✓`, `Deriva: <span class="math">3x² + 3y²y′ = 6y + 6x y′</span>.`, `Agrupa: <span class="math">y′(3y² − 6x) = 6y − 3x²</span>, así <span class="math">y′ = (6y − 3x²)/(3y² − 6x) = (2y − x²)/(y² − 2x)</span>.`, `En (3, 3): <span class="math">(6 − 9)/(9 − 6) = −3/3 = −1</span>.`],
        respuesta: `<span class="math">y′ = (2y − x²)/(y² − 2x)</span>; en (3, 3) vale <span class="math">−1</span>.` },
      { titulo: `Producto de x e y`,
        enunciado: `Halla la pendiente de <span class="math">x y² + x²y = 6</span> en (1, 2).`,
        pasos: [`Comprueba: <span class="math">1·4 + 1·2 = 6</span>. ✓`, `Deriva cada término con producto: <span class="math">(y² + 2xy·y′) + (2xy + x²y′) = 0</span>.`, `Agrupa: <span class="math">y′(2xy + x²) = −(y² + 2xy)</span>.`, `En (1, 2): <span class="math">y′(4 + 1) = −(4 + 4)</span>, entonces <span class="math">y′ = −8/5</span>.`],
        respuesta: `<span class="math">y′ = −8/5 = −1.6</span>.` },
      { titulo: `Derivadas sucesivas de un polinomio`,
        enunciado: `Calcula <span class="math">f′</span>, <span class="math">f″</span>, <span class="math">f‴</span> de <span class="math">f(x) = x⁴ − 3x³ + 2x</span> y <span class="math">f″(1)</span>.`,
        pasos: [`<span class="math">f′ = 4x³ − 9x² + 2</span>.`, `<span class="math">f″ = 12x² − 18x</span>.`, `<span class="math">f‴ = 24x − 18</span>.`, `<span class="math">f″(1) = 12 − 18 = −6</span>.`],
        respuesta: `<span class="math">f″ = 12x² − 18x</span>, <span class="math">f‴ = 24x − 18</span>, <span class="math">f″(1) = −6</span> (cóncava hacia abajo en x = 1).` },
      { titulo: `Aceleración de una motocicleta`,
        enunciado: `Una moto recorre <span class="math">s(t) = 2t³ − 15t² + 36t</span> metros en t segundos. Halla v y a, y la aceleración en t = 2.`,
        pasos: [`<span class="math">v = s′ = 6t² − 30t + 36</span>.`, `<span class="math">a = v′ = 12t − 30</span>.`, `<span class="math">a(2) = 24 − 30 = −6</span>.`, `Además <span class="math">v(2) = 24 − 60 + 36 = 0</span>: en ese instante la moto está detenida y su aceleración es negativa.`],
        respuesta: `<span class="math">v = 6t² − 30t + 36</span>, <span class="math">a = 12t − 30</span>, <span class="math">a(2) = −6</span> m por s².` },
      { titulo: `Segunda derivada implícita`,
        enunciado: `Halla <span class="math">y″</span> para <span class="math">x² + y² = 25</span> y evalúa en (3, 4).`,
        pasos: [`<span class="math">y′ = −x/y</span>.`, `Deriva con el cociente: <span class="math">y″ = −(1·y − x·y′)/y²</span>.`, `Sustituye <span class="math">y′ = −x/y</span>: <span class="math">y″ = −(y + x²/y)/y² = −(y² + x²)/y³</span>.`, `Con <span class="math">x² + y² = 25</span>: <span class="math">y″ = −25/y³</span>. En (3, 4): <span class="math">−25/64</span>.`],
        respuesta: `<span class="math">y″ = −25/y³</span>; en (3, 4) vale <span class="math">−25/64 ≈ −0.39</span> (la curva es cóncava hacia abajo en la parte superior).` }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: `Halla <span class="math">y′</span> en (0, 4) para <span class="math">x² + y² = 16</span>.`, pasos: [`<span class="math">2x + 2yy′ = 0 ⇒ y′ = −x/y</span>.`, `En (0, 4): <span class="math">−0/4 = 0</span>.`], respuesta: `<span class="math">y′ = 0</span>: tangente horizontal en la cima del círculo.` },
      { nivel: 'facil', enunciado: `Calcula <span class="math">f‴(x)</span> para <span class="math">f(x) = x⁵</span>.`, pasos: [`<span class="math">f′ = 5x⁴</span>, <span class="math">f″ = 20x³</span>.`, `<span class="math">f‴ = 60x²</span>.`], respuesta: `<span class="math">f‴(x) = 60x²</span>.` },
      { nivel: 'facil', enunciado: `Halla <span class="math">y′</span> de <span class="math">2x + 3y = 12</span> (de forma implícita).`, pasos: [`<span class="math">2 + 3y′ = 0</span>.`, `<span class="math">y′ = −2/3</span>.`], respuesta: `<span class="math">y′ = −2/3</span>.` },
      { nivel: 'facil', enunciado: `Calcula <span class="math">f″(2)</span> si <span class="math">f(x) = x³ − 2x</span>.`, pasos: [`<span class="math">f′ = 3x² − 2</span>.`, `<span class="math">f″ = 6x</span>.`, `<span class="math">f″(2) = 12</span>.`], respuesta: `<span class="math">f″(2) = 12</span>.` },
      { nivel: 'intermedio', enunciado: `Halla la pendiente de <span class="math">x² − xy + y² = 7</span> en (1, 3).`, pasos: [`Punto: <span class="math">1 − 3 + 9 = 7</span>. ✓`, `Deriva: <span class="math">2x − (y + xy′) + 2yy′ = 0</span>.`, `Agrupa: <span class="math">y′(2y − x) = y − 2x</span>, así <span class="math">y′ = (y − 2x)/(2y − x)</span>.`, `En (1, 3): <span class="math">(3 − 2)/(6 − 1) = 1/5</span>.`], respuesta: `<span class="math">y′ = 1/5</span>.` },
      { nivel: 'intermedio', enunciado: `Halla la pendiente de <span class="math">√x + √y = 5</span> en (4, 9).`, pasos: [`Punto: <span class="math">2 + 3 = 5</span>. ✓`, `Deriva: <span class="math">1/(2√x) + y′/(2√y) = 0</span>.`, `Despeja: <span class="math">y′ = −√y/√x</span>.`, `En (4, 9): <span class="math">−3/2</span>.`], respuesta: `<span class="math">y′ = −3/2</span>.` },
      { nivel: 'intermedio', enunciado: `Halla <span class="math">f″(0)</span> si <span class="math">f(x) = x e<sup>x</sup></span>.`, pasos: [`<span class="math">f′ = e<sup>x</sup> + x e<sup>x</sup> = e<sup>x</sup>(1 + x)</span>.`, `<span class="math">f″ = e<sup>x</sup>(1 + x) + e<sup>x</sup> = e<sup>x</sup>(2 + x)</span>.`, `<span class="math">f″(0) = 1·2 = 2</span>.`], respuesta: `<span class="math">f″(0) = 2</span>.` },
      { nivel: 'intermedio', enunciado: `Calcula <span class="math">y‴(0)</span> si <span class="math">y = e<sup>2x</sup></span>.`, pasos: [`<span class="math">y′ = 2e<sup>2x</sup></span>, <span class="math">y″ = 4e<sup>2x</sup></span>, <span class="math">y‴ = 8e<sup>2x</sup></span>.`, `En 0: <span class="math">8·1 = 8</span>.`], respuesta: `<span class="math">y‴(0) = 8</span>.` },
      { nivel: 'dificil', enunciado: `Para <span class="math">x³ + y³ = 9</span> halla <span class="math">y′</span> y <span class="math">y″</span> en el punto (1, 2).`, pasos: [`Punto: <span class="math">1 + 8 = 9</span>. ✓`, `<span class="math">3x² + 3y²y′ = 0 ⇒ y′ = −x²/y²</span>; en (1, 2): <span class="math">−1/4</span>.`, `<span class="math">y″ = −(2x·y² − x²·2y·y′)/y⁴</span>.`, `Sustituye: <span class="math">2·1·4 = 8</span>, <span class="math">x²·2y·y′ = 1·4·(−1/4) = −1</span>, numerador <span class="math">8 − (−1) = 9</span>.`, `<span class="math">y″ = −9/16</span>.`], respuesta: `<span class="math">y′ = −1/4</span>; <span class="math">y″ = −9/16</span>.` },
      { nivel: 'dificil', enunciado: `Halla los puntos de <span class="math">x² + xy + y² = 3</span> donde la tangente es horizontal.`, pasos: [`Deriva: <span class="math">2x + y + (x + 2y)y′ = 0</span>, así <span class="math">y′ = −(2x + y)/(x + 2y)</span>.`, `Horizontal: <span class="math">y′ = 0 ⇒ 2x + y = 0 ⇒ y = −2x</span>.`, `Sustituye: <span class="math">x² − 2x² + 4x² = 3x² = 3 ⇒ x = ±1</span>.`, `Puntos: x = 1, y = −2 y x = −1, y = 2.`], respuesta: `(1, −2) y (−1, 2).` },
      { nivel: 'dificil', enunciado: `Calcula <span class="math">f<sup>(4)</sup>(1)</span> si <span class="math">f(x) = ln x</span> y deduce la fórmula de <span class="math">f<sup>(n)</sup>(1)</span>.`, pasos: [`<span class="math">f′ = 1/x</span>, <span class="math">f″ = −1/x²</span>, <span class="math">f‴ = 2/x³</span>, <span class="math">f<sup>(4)</sup> = −6/x⁴</span>.`, `En x = 1: <span class="math">f<sup>(4)</sup>(1) = −6</span>.`, `Patrón: signos alternados y factorial: <span class="math">f<sup>(n)</sup>(1) = (−1)<sup>n−1</sup>(n − 1)!</span>.`], respuesta: `<span class="math">f<sup>(4)</sup>(1) = −6</span>; <span class="math">f<sup>(n)</sup>(1) = (−1)<sup>n−1</sup>(n − 1)!</span>.` }
    ],
    teoricas: [
      { q: `¿Qué significa derivar "implícitamente"?`, a: `Derivar ambos lados de una ecuación en x e y sin despejar y, tratando a y como función de x y aplicando la cadena (cada y aporta el factor <span class="math">y′</span>).` },
      { q: `¿Por qué <span class="math">(y²)′ = 2y·y′</span> y no <span class="math">2y</span>?`, a: `Porque y depende de x: es una composición <span class="math">(y(x))²</span>. La derivada externa es 2y y hay que multiplicar por la derivada interna <span class="math">y′</span>.` },
      { q: `¿Por qué la derivada implícita suele depender de x e y?`, a: `Porque un mismo x puede corresponder a varios y (ramas de la curva) con pendientes distintas; hay que indicar de qué punto se habla.` },
      { q: `¿Qué ocurre en <span class="math">x² + y² = 25</span> cuando y = 0?`, a: `<span class="math">y′ = −x/y</span> no está definida: la tangente es vertical en (5, 0) y (−5, 0).` },
      { q: `¿Qué representa la segunda derivada de la posición?`, a: `La aceleración: la rapidez con que cambia la velocidad.` },
      { q: `¿Qué indica <span class="math">f″ > 0</span> sobre la gráfica?`, a: `Que la pendiente va aumentando: la gráfica es cóncava hacia arriba (como una copa).` },
      { q: `¿Cuántas derivadas no nulas tiene un polinomio de grado 5?`, a: `Cinco derivadas no nulas (<span class="math">f′</span> a <span class="math">f<sup>(5)</sup></span>, esta última constante) y a partir de la sexta todas son 0.` },
      { q: `¿Cómo se simplifica <span class="math">y″</span> en una derivada implícita?`, a: `Se sustituye <span class="math">y′</span> por su expresión y, si es posible, se usa la ecuación original para reducir el resultado.` }
    ],
    errores: [
      `Derivar <span class="math">y²</span> como <span class="math">2y</span> y olvidar multiplicar por <span class="math">y′</span>.`,
      `En <span class="math">xy</span> olvidar la regla del producto: la derivada es <span class="math">y + x y′</span>, no <span class="math">y′</span> ni <span class="math">1·y′</span>.`,
      `Despejar <span class="math">y′</span> sin factorizar: si aparece en varios términos, agrúpalos y saca <span class="math">y′</span> como factor común.`,
      `Evaluar en un punto que no está sobre la curva. Verifica siempre que el punto cumpla la ecuación.`
    ],
    aplicacion: { titulo: `Tangente a una trayectoria circular`, html: `<p>Una banda transportadora en una planta sigue el arco de circunferencia <span class="math">x² + y² = 25</span> (x, y en metros). Un sensor en el punto (3, 4) debe orientarse en la dirección de la tangente para medir el avance del material.</p><ol><li>Derivada implícita: <span class="math">y′ = −x/y</span>.</li><li>Pendiente en (3, 4): <span class="math">−3/4 = −0.75</span>.</li><li>Ángulo con la horizontal: <span class="math">arctan(−0.75) ≈ −36.9°</span>.</li></ol><p>El sensor debe orientarse unos <strong>37° por debajo de la horizontal</strong>. Además, <span class="math">y″ = −25/64 < 0</span> confirma que la curva es cóncava hacia abajo en ese punto: la banda se curva hacia abajo respecto a su tangente.</p>` },
    calc: 'implicita',
    examen: [
      { tipo: 'num', q: `Para <span class="math">x² + y² = 25</span>, halla <span class="math">y′</span> en el punto (−3, 4).`, r: 0.75, tol: 0.01, pasos: [`<span class="math">y′ = −x/y</span>.`, `En (−3, 4): <span class="math">−(−3)/4 = 3/4</span>.`, `<span class="math">= 0.75</span>.`] },
      { tipo: 'num', q: `Para <span class="math">xy = 12</span>, halla <span class="math">y′</span> en el punto (3, 4). Redondea a 2 decimales.`, r: -1.3333, tol: 0.01, pasos: [`Deriva: <span class="math">y + x y′ = 0</span>.`, `<span class="math">y′ = −y/x</span>.`, `En (3, 4): <span class="math">−4/3 ≈ −1.33</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f″(1)</span> si <span class="math">f(x) = x⁴ − 2x²</span>.`, r: 8, tol: 0.01, pasos: [`<span class="math">f′ = 4x³ − 4x</span>.`, `<span class="math">f″ = 12x² − 4</span>.`, `<span class="math">f″(1) = 8</span>.`] },
      { tipo: 'num', q: `Para <span class="math">y² = 4x</span>, halla la pendiente en el punto (1, 2).`, r: 1, tol: 0.01, pasos: [`Deriva: <span class="math">2y·y′ = 4</span>.`, `<span class="math">y′ = 2/y</span>.`, `En (1, 2): <span class="math">2/2 = 1</span>.`] },
      { tipo: 'par', q: `En la circunferencia <span class="math">x² + y² = 25</span>, halla el punto del primer cuadrante donde la pendiente de la tangente es <span class="math">−3/4</span>.`, r: [3, 4], tol: 0.01, pasos: [`<span class="math">y′ = −x/y = −3/4 ⇒ y = (4/3)x</span>.`, `Sustituye: <span class="math">x² + (16/9)x² = (25/9)x² = 25 ⇒ x² = 9</span>.`, `Primer cuadrante: x = 3, y = 4.`] },
      { tipo: 'opt', q: `La derivada cuarta de <span class="math">f(x) = x⁶</span> es:`, opciones: [`<span class="math">120x</span>`, `<span class="math">360x²</span>`, `<span class="math">720</span>`, `<span class="math">30x⁴</span>`], correcta: 1, pasos: [`<span class="math">f′ = 6x⁵</span>, <span class="math">f″ = 30x⁴</span>.`, `<span class="math">f‴ = 120x³</span>.`, `<span class="math">f<sup>(4)</sup> = 360x²</span>.`] },
      { tipo: 'num', q: `La posición de una carreta es <span class="math">s(t) = t⁴ − 4t³</span> metros. Calcula su aceleración en t = 3 s.`, r: 36, tol: 0.01, pasos: [`<span class="math">v = 4t³ − 12t²</span>.`, `<span class="math">a = 12t² − 24t</span>.`, `<span class="math">a(3) = 108 − 72 = 36</span> m por s².`] },
      { tipo: 'num', q: `Para <span class="math">x³ + y³ = 9</span>, halla <span class="math">y′</span> en el punto (2, 1).`, r: -4, tol: 0.01, pasos: [`<span class="math">3x² + 3y²y′ = 0</span>.`, `<span class="math">y′ = −x²/y²</span>.`, `En (2, 1): <span class="math">−4/1 = −4</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">f″(0)</span> si <span class="math">f(x) = e<sup>−x</sup></span>.`, r: 1, tol: 0.01, pasos: [`<span class="math">f′ = −e<sup>−x</sup></span>.`, `<span class="math">f″ = e<sup>−x</sup></span>.`, `<span class="math">f″(0) = 1</span>.`] },
      { tipo: 'opt', q: `Si <span class="math">y = sen x</span>, la derivada de orden 4, <span class="math">y<sup>(4)</sup></span>, es:`, opciones: [`<span class="math">cos x</span>`, `<span class="math">−sen x</span>`, `<span class="math">−cos x</span>`, `<span class="math">sen x</span>`], correcta: 3, pasos: [`<span class="math">y′ = cos x</span>.`, `<span class="math">y″ = −sen x</span>, <span class="math">y‴ = −cos x</span>.`, `<span class="math">y<sup>(4)</sup> = sen x</span>: el ciclo se repite cada 4.`] }
    ]
  };


  T['1.15'] = {
    id: '1.15',
    unidad: 3,
    titulo: `Recta tangente, recta normal y razones de cambio relacionadas`,
    resumen: `Hallarás ecuaciones de tangentes y normales, aproximarás con la linealización y resolverás problemas de razones relacionadas.`,
    objetivos: [
      `Escribir la ecuación de la recta tangente y de la recta normal a una curva en un punto, explícita o implícita.`,
      `Encontrar puntos de una curva con una pendiente dada y rectas tangentes que pasan por un punto exterior.`,
      `Aproximar valores con la linealización <span class="math">f(x) ≈ f(a) + f′(a)(x − a)</span>.`,
      `Resolver problemas de razones de cambio relacionadas con un procedimiento ordenado.`
    ],
    teoria: [
      { titulo: `Ecuación de la recta tangente`, html: `<p>La tangente a <span class="math">y = f(x)</span> en el punto (a, f(a)) pasa por ese punto y tiene pendiente <span class="math">m = f′(a)</span>. Con la forma punto-pendiente:</p><p><span class="math">y − f(a) = f′(a)(x − a)</span></p><p>Procedimiento: (1) calcula <span class="math">f(a)</span>; (2) deriva y evalúa <span class="math">f′(a)</span>; (3) sustituye en la fórmula; (4) despeja y si piden la forma <span class="math">y = mx + b</span>.</p><p>Casos especiales: si <span class="math">f′(a) = 0</span>, la tangente es horizontal, <span class="math">y = f(a)</span>; si la derivada tiende a ±∞ la tangente es vertical, <span class="math">x = a</span>.</p>` },
      { titulo: `Ecuación de la recta normal`, html: `<p>La <strong>recta normal</strong> en un punto es la perpendicular a la tangente en ese punto. Si la tangente tiene pendiente <span class="math">m ≠ 0</span>, la normal tiene pendiente <span class="math">−1/m</span> (recíproco opuesto):</p><p><span class="math">y − f(a) = −(1/f′(a))(x − a)</span></p><p>Si <span class="math">f′(a) = 0</span>, la normal es vertical: <span class="math">x = a</span>. Si la tangente es vertical, la normal es horizontal: <span class="math">y = f(a)</span>. Las normales aparecen al estudiar reflexiones de luz en espejos curvos y en el diseño de curvas de carreteras.</p>` },
      { titulo: `Tangentes en curvas implícitas`, html: `<p>Cuando la curva está dada implícitamente, la pendiente se obtiene con <span class="math">y′ = dy/dx</span> (tema 1.14) evaluada en el punto, y se usa la misma fórmula punto-pendiente. Ejemplo: en la circunferencia <span class="math">x² + y² = 25</span>, en (3, 4) la pendiente es <span class="math">−3/4</span> y la tangente es <span class="math">y − 4 = −(3/4)(x − 3)</span>, o sea <span class="math">3x + 4y = 25</span>.</p>` },
      { titulo: `Pendiente dada y tangentes desde un punto`, html: `<p><strong>Puntos con pendiente dada.</strong> Para hallar dónde la tangente es paralela a una recta de pendiente m, resuelve <span class="math">f′(x) = m</span>. (Tangente perpendicular: <span class="math">f′(x) = −1/m</span>.)</p><p><strong>Tangente desde un punto exterior.</strong> Si el punto (p, q) no está en la curva: considera el punto de tangencia desconocido (a, f(a)); la tangente es <span class="math">y = f(a) + f′(a)(x − a)</span> y debe pasar por (p, q): <span class="math">q = f(a) + f′(a)(p − a)</span>. Resuelve esa ecuación para a.</p>` },
      { titulo: `Linealización y diferenciales`, html: `<p>Cerca de a, la curva casi coincide con su tangente. La <strong>linealización</strong> de f en a es</p><p><span class="math">L(x) = f(a) + f′(a)(x − a)</span>, y <span class="math">f(x) ≈ L(x)</span> para x cerca de a.</p><p>Es útil para estimar valores sin calculadora. Ejemplo: <span class="math">√4.1</span> con <span class="math">f = √x</span>, a = 4: <span class="math">L = 2 + (1/4)(0.1) = 2.025</span> (valor real 2.0248). En notación de diferenciales: <span class="math">Δy ≈ dy = f′(x)dx</span>. El error es pequeño mientras <span class="math">x − a</span> sea pequeño.</p>` },
      { titulo: `Razones de cambio relacionadas: idea`, html: `<p>Cuando dos o más magnitudes cambian con el tiempo y están ligadas por una ecuación, sus razones de cambio también están ligadas. Se deriva la ecuación respecto al tiempo t con la regla de la cadena (cada variable aporta su propia derivada respecto a t). Es la derivación implícita aplicada a situaciones del mundo real: el radio de un globo que se infla, el nivel de agua en un tanque, la sombra de una persona.</p>` },
      { titulo: `Procedimiento de razones relacionadas`, html: `<ol><li><strong>Dibuja</strong> la situación y asigna letras a las magnitudes que varían.</li><li>Anota los <strong>datos</strong> (razones conocidas, como <span class="math">dx/dt</span>) y lo que <strong>se pide</strong>.</li><li>Escribe una <strong>ecuación</strong> que relacione las magnitudes (Pitágoras, volumen, semejanza de triángulos).</li><li><strong>Deriva</strong> ambos lados respecto a t con la cadena.</li><li><strong>Sustituye</strong> los valores del instante pedido (primero se derivan, después se sustituyen los números que cambian).</li><li>Despeja y responde con unidades y el sentido (el signo indica si aumenta o disminuye).</li></ol>` },
      { titulo: `Fórmulas geométricas útiles`, html: `<ul><li>Círculo: <span class="math">A = πr²</span>, <span class="math">C = 2πr</span>.</li><li>Esfera: <span class="math">V = (4/3)πr³</span>, <span class="math">S = 4πr²</span>.</li><li>Cilindro: <span class="math">V = πr²h</span>. Cono: <span class="math">V = (1/3)πr²h</span>.</li><li>Pitágoras: <span class="math">x² + y² = z²</span>.</li><li>Semejanza de triángulos: razones iguales entre lados correspondientes.</li></ul><p>Error frecuente: sustituir un valor numérico que cambia con el tiempo <em>antes</em> de derivar; eso convierte la variable en constante y la derivada sale 0.</p>` }
    ],
    formulas: [
      { label: `Recta tangente`, html: `<span class="math">y − f(a) = f′(a)(x − a)</span>` },
      { label: `Recta normal`, html: `<span class="math">y − f(a) = −(1/f′(a))(x − a)</span>` },
      { label: `Pendiente de la normal`, html: `<span class="math">m<sub>n</sub> = −1/m<sub>t</sub></span>` },
      { label: `Linealización`, html: `<span class="math">f(x) ≈ f(a) + f′(a)(x − a)</span>` },
      { label: `Diferencial`, html: `<span class="math">dy = f′(x) dx</span>` },
      { label: `Razones relacionadas`, html: `<span class="math">d/dt (variable) = (derivada) · (razón de cambio de la variable)</span>` },
      { label: `Esfera`, html: `<span class="math">dV/dt = 4πr² · dr/dt</span>` },
      { label: `Pitágoras en razones`, html: `<span class="math">x·dx/dt + y·dy/dt = z·dz/dt</span>` }
    ],
    ejemplos: [
      { titulo: `Tangente a una parábola`,
        enunciado: `Halla la recta tangente a <span class="math">y = x² − 3x + 1</span> en x = 2.`,
        pasos: [`<span class="math">f(2) = 4 − 6 + 1 = −1</span>: punto (2, −1).`, `<span class="math">f′(x) = 2x − 3</span>, <span class="math">f′(2) = 1</span>.`, `<span class="math">y − (−1) = 1(x − 2) ⇒ y = x − 3</span>.`],
        respuesta: `<span class="math">y = x − 3</span>.` },
      { titulo: `Recta normal`,
        enunciado: `Halla la recta normal a <span class="math">y = √x</span> en el punto (4, 2).`,
        pasos: [`<span class="math">f′ = 1/(2√x)</span>, <span class="math">f′(4) = 1/4</span>.`, `Pendiente normal: <span class="math">−1/(1/4) = −4</span>.`, `<span class="math">y − 2 = −4(x − 4) ⇒ y = −4x + 18</span>.`],
        respuesta: `<span class="math">y = −4x + 18</span>.` },
      { titulo: `Tangente a una curva implícita`,
        enunciado: `Halla la tangente a <span class="math">x² + y² = 25</span> en (3, 4).`,
        pasos: [`<span class="math">y′ = −x/y = −3/4</span>.`, `<span class="math">y − 4 = −(3/4)(x − 3)</span>.`, `Multiplica por 4: <span class="math">4y − 16 = −3x + 9 ⇒ 3x + 4y = 25</span>.`],
        respuesta: `<span class="math">3x + 4y = 25</span>.` },
      { titulo: `Tangente paralela a una recta`,
        enunciado: `¿En qué punto de <span class="math">f(x) = x² − 4x</span> la tangente es paralela a <span class="math">y = 2x − 5</span>?`,
        pasos: [`Pendiente buscada: 2.`, `<span class="math">f′(x) = 2x − 4 = 2 ⇒ x = 3</span>.`, `<span class="math">f(3) = 9 − 12 = −3</span>.`],
        respuesta: `En el punto (3, −3).` },
      { titulo: `Aproximación por linealización`,
        enunciado: `Estima <span class="math">√4.1</span> con la linealización de <span class="math">f(x) = √x</span> en a = 4.`,
        pasos: [`<span class="math">f(4) = 2</span>, <span class="math">f′(4) = 1/4</span>.`, `<span class="math">L(x) = 2 + (1/4)(x − 4)</span>.`, `<span class="math">L(4.1) = 2 + 0.025 = 2.025</span>.`],
        respuesta: `<span class="math">√4.1 ≈ 2.025</span> (valor real 2.0248).` },
      { titulo: `La escalera que resbala`,
        enunciado: `Una escalera de 5 m está apoyada en una pared. Su base se aleja del muro a 0.5 m por s. ¿Con qué rapidez baja su parte superior cuando la base está a 3 m del muro?`,
        pasos: [`x = distancia de la base, y = altura. Dato: <span class="math">dx/dt = 0.5</span>. Pide: <span class="math">dy/dt</span> cuando x = 3.`, `Pitágoras: <span class="math">x² + y² = 25</span>; si x = 3, <span class="math">y = 4</span>.`, `Deriva respecto a t: <span class="math">2x·dx/dt + 2y·dy/dt = 0</span>.`, `Despeja: <span class="math">dy/dt = −x/y · dx/dt = −(3/4)(0.5) = −0.375</span>.`],
        respuesta: `<span class="math">dy/dt = −0.375</span> m por s: la parte superior baja a 0.375 m por s.` }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: `Halla la tangente a <span class="math">y = x²</span> en x = 1.`, pasos: [`Punto (1, 1); <span class="math">y′ = 2x = 2</span>.`, `<span class="math">y − 1 = 2(x − 1) ⇒ y = 2x − 1</span>.`], respuesta: `<span class="math">y = 2x − 1</span>.` },
      { nivel: 'facil', enunciado: `Halla la normal a <span class="math">y = x²</span> en x = 1.`, pasos: [`Pendiente tangente 2; normal <span class="math">−1/2</span>.`, `<span class="math">y − 1 = −(1/2)(x − 1) ⇒ y = −x/2 + 3/2</span>.`], respuesta: `<span class="math">y = −(1/2)x + 3/2</span>.` },
      { nivel: 'facil', enunciado: `¿Cuál es la pendiente de la tangente a <span class="math">f(x) = x³</span> en x = −1?`, pasos: [`<span class="math">f′ = 3x²</span>.`, `<span class="math">f′(−1) = 3</span>.`], respuesta: `La pendiente es 3.` },
      { nivel: 'facil', enunciado: `¿En qué punto de <span class="math">y = x² − 6x</span> la tangente es horizontal?`, pasos: [`<span class="math">y′ = 2x − 6 = 0 ⇒ x = 3</span>.`, `<span class="math">y(3) = 9 − 18 = −9</span>.`], respuesta: `En (3, −9).` },
      { nivel: 'intermedio', enunciado: `Halla la tangente a <span class="math">y = 1/x</span> en x = 2.`, pasos: [`Punto (2, 1/2); <span class="math">y′ = −1/x² = −1/4</span>.`, `<span class="math">y − 1/2 = −(1/4)(x − 2) ⇒ y = −x/4 + 1</span>.`], respuesta: `<span class="math">y = −(1/4)x + 1</span>.` },
      { nivel: 'intermedio', enunciado: `Halla la tangente a <span class="math">y = x e<sup>x</sup></span> en x = 0.`, pasos: [`Punto (0, 0).`, `<span class="math">y′ = e<sup>x</sup>(1 + x)</span>, <span class="math">y′(0) = 1</span>.`, `<span class="math">y = x</span>.`], respuesta: `<span class="math">y = x</span>.` },
      { nivel: 'intermedio', enunciado: `Halla la tangente a <span class="math">y = ln x</span> en x = e.`, pasos: [`Punto (e, 1).`, `<span class="math">y′ = 1/x</span>, <span class="math">y′(e) = 1/e</span>.`, `<span class="math">y − 1 = (1/e)(x − e) = x/e − 1 ⇒ y = x/e</span>.`], respuesta: `<span class="math">y = x/e</span> (pasa por el origen).` },
      { nivel: 'intermedio', enunciado: `Estima <span class="math">√26</span> con la linealización de <span class="math">√x</span> en a = 25.`, pasos: [`<span class="math">f(25) = 5</span>, <span class="math">f′(25) = 1/10</span>.`, `<span class="math">L(26) = 5 + (1/10)(1) = 5.1</span>.`], respuesta: `<span class="math">√26 ≈ 5.1</span> (valor real 5.099).` },
      { nivel: 'dificil', enunciado: `Un tanque cónico (vértice abajo) tiene radio igual a la mitad de la altura del agua: <span class="math">r = h/2</span>. Se llena a 2 m³ por min. ¿Con qué rapidez sube el nivel cuando h = 4 m?`, pasos: [`<span class="math">V = (1/3)πr²h = (1/3)π(h/2)²h = πh³/12</span>.`, `Deriva: <span class="math">dV/dt = (π/4)h²·dh/dt</span>.`, `Sustituye <span class="math">dV/dt = 2</span>, <span class="math">h = 4</span>: <span class="math">2 = (π/4)(16)dh/dt = 4π·dh/dt</span>.`, `<span class="math">dh/dt = 2/(4π) = 1/(2π) ≈ 0.159</span>.`], respuesta: `<span class="math">dh/dt = 1/(2π) ≈ 0.159</span> m por min.` },
      { nivel: 'dificil', enunciado: `Un poste de 5 m tiene un foco en la punta. Una persona de 1.8 m se aleja del poste a 1.2 m por s. ¿Con qué rapidez se mueve la punta de su sombra?`, pasos: [`x = distancia persona–poste; s = distancia poste–punta de la sombra. Dato: <span class="math">dx/dt = 1.2</span>.`, `Triángulos semejantes: <span class="math">5/s = 1.8/(s − x)</span> ⇒ <span class="math">5(s − x) = 1.8s</span> ⇒ <span class="math">3.2s = 5x</span> ⇒ <span class="math">s = (5/3.2)x</span>.`, `Deriva: <span class="math">ds/dt = (5/3.2)(dx/dt) = 1.5625·1.2</span>.`, `<span class="math">= 1.875</span>.`], respuesta: `La punta de la sombra se mueve a 1.875 m por s (la longitud de la sombra crece a 0.675 m por s).` },
      { nivel: 'dificil', enunciado: `Halla las rectas tangentes a <span class="math">y = x²</span> que pasan por el punto exterior (1, −3).`, pasos: [`Punto de tangencia <span class="math">(a, a²)</span>; tangente: <span class="math">y = a² + 2a(x − a)</span>.`, `Pasa por (1, −3): <span class="math">−3 = a² + 2a(1 − a) = 2a − a²</span>.`, `<span class="math">a² − 2a − 3 = 0 ⇒ (a − 3)(a + 1) = 0 ⇒ a = 3 o a = −1</span>.`, `a = 3: <span class="math">y = 9 + 6(x − 3) = 6x − 9</span>. a = −1: <span class="math">y = 1 − 2(x + 1) = −2x − 1</span>.`], respuesta: `<span class="math">y = 6x − 9</span> y <span class="math">y = −2x − 1</span>.` }
    ],
    teoricas: [
      { q: `¿Cómo se relacionan las pendientes de la tangente y de la normal?`, a: `Son recíprocas y de signo contrario (<span class="math">m<sub>n</sub> = −1/m<sub>t</sub></span>), porque las rectas son perpendiculares.` },
      { q: `¿Cuál es la normal en un punto de tangente horizontal?`, a: `Una recta vertical <span class="math">x = a</span>, ya que no se puede usar <span class="math">−1/0</span>.` },
      { q: `¿Por qué la linealización da buenas aproximaciones solo cerca de a?`, a: `Porque la tangente solo coincide con la curva en a; al alejarte, la curva se separa de la recta (el error crece con la curvatura).` },
      { q: `En razones relacionadas, ¿por qué derivamos respecto a t y no respecto a x?`, a: `Porque todas las magnitudes cambian con el tiempo; la regla de la cadena introduce los factores <span class="math">dx/dt</span>, <span class="math">dy/dt</span> que son las razones del problema.` },
      { q: `¿Qué error ocurre si sustituyes los valores numéricos antes de derivar?`, a: `Conviertes magnitudes variables en constantes y su derivada se vuelve 0; se pierden los términos que dan la respuesta.` },
      { q: `¿Qué significa un <span class="math">dy/dt</span> negativo?`, a: `Que la magnitud y está disminuyendo con el tiempo.` },
      { q: `¿Cómo se halla una tangente que pasa por un punto exterior a la curva?`, a: `Se llama a al x del punto de tangencia, se escribe la tangente en función de a y se impone que pase por el punto dado; se resuelve para a.` },
      { q: `Si la tangente en un punto es vertical, ¿qué ecuación tiene y cuál es su normal?`, a: `La tangente es <span class="math">x = a</span> y la normal es la recta horizontal <span class="math">y = f(a)</span>.` }
    ],
    errores: [
      `Usar como pendiente de la normal el mismo valor que la tangente o solo el opuesto (<span class="math">−m</span>); debe ser <span class="math">−1/m</span>.`,
      `Evaluar la derivada en x sin comprobar que el punto (a, f(a)) esté en la curva, o usar y en lugar de <span class="math">f(a)</span>.`,
      `Sustituir los números del instante pedido antes de derivar en razones relacionadas.`,
      `Olvidar el signo o las unidades en la respuesta: una magnitud que disminuye lleva signo negativo.`
    ],
    aplicacion: { titulo: `Derrame de combustible en el lago de Ilopango`, html: `<p>Una mancha circular de combustible se expande en la superficie de un lago de modo que su radio crece a razón de 2 m por min. ¿Con qué rapidez aumenta el área cuando el radio es 15 m?</p><ol><li>Ecuación: <span class="math">A = πr²</span>; dato <span class="math">dr/dt = 2</span>.</li><li>Deriva respecto a t: <span class="math">dA/dt = 2πr·dr/dt</span>.</li><li>Sustituye <span class="math">r = 15</span>: <span class="math">dA/dt = 2π(15)(2) = 60π ≈ 188.5</span>.</li></ol><p>El área crece a <strong>188.5 m² por minuto</strong>. Observa que, aunque el radio crece a ritmo constante, el área crece cada vez más deprisa porque depende de r: esa es la urgencia de contener un derrame al inicio.</p>` },
    calc: 'tangente',
    examen: [
      { tipo: 'num', q: `Halla la pendiente de la tangente a <span class="math">y = x² + 3x</span> en x = 2.`, r: 7, tol: 0.01, pasos: [`<span class="math">y′ = 2x + 3</span>.`, `<span class="math">y′(2) = 7</span>.`, `La pendiente es 7.`] },
      { tipo: 'par', q: `¿En qué punto (x, y) la tangente a <span class="math">y = x² − 4x</span> es horizontal?`, r: [2, -4], tol: 0.01, pasos: [`<span class="math">y′ = 2x − 4 = 0 ⇒ x = 2</span>.`, `<span class="math">y(2) = 4 − 8 = −4</span>.`, `Punto (2, −4).`] },
      { tipo: 'num', q: `La tangente a <span class="math">y = x³</span> en x = 1 corta al eje y en (0, b). Halla b.`, r: -2, tol: 0.01, pasos: [`<span class="math">y′ = 3x² = 3</span> en x = 1; punto (1, 1).`, `Tangente: <span class="math">y − 1 = 3(x − 1) ⇒ y = 3x − 2</span>.`, `En x = 0: <span class="math">b = −2</span>.`] },
      { tipo: 'num', q: `Halla la pendiente de la recta normal a <span class="math">y = x²</span> en x = 2.`, r: -0.25, tol: 0.01, pasos: [`<span class="math">y′(2) = 4</span>.`, `Normal: <span class="math">−1/4</span>.`, `<span class="math">= −0.25</span>.`] },
      { tipo: 'num', q: `Con la linealización de <span class="math">√x</span> en a = 9, estima <span class="math">√9.18</span>. Redondea a 2 decimales.`, r: 3.03, tol: 0.01, pasos: [`<span class="math">f(9) = 3</span>, <span class="math">f′(9) = 1/6</span>.`, `<span class="math">L(9.18) = 3 + (1/6)(0.18)</span>.`, `<span class="math">= 3.03</span>.`] },
      { tipo: 'num', q: `Una escalera de 13 m resbala: la base se aleja a 1 m por s. Cuando la base está a 5 m de la pared, ¿con qué rapidez cambia la altura de su extremo superior (m por s)? Redondea a 2 decimales.`, r: -0.4167, tol: 0.01, pasos: [`<span class="math">x² + y² = 169</span>; x = 5 ⇒ y = 12.`, `<span class="math">2x·x′ + 2y·y′ = 0 ⇒ y′ = −x x′/y</span>.`, `<span class="math">= −5·1/12 ≈ −0.42</span>.`] },
      { tipo: 'num', q: `El radio de una mancha circular crece a 0.2 m por s. ¿Con qué rapidez crece su área (m² por s) cuando r = 5 m? Redondea a 2 decimales.`, r: 6.2832, tol: 0.01, pasos: [`<span class="math">dA/dt = 2πr·dr/dt</span>.`, `<span class="math">= 2π·5·0.2 = 2π</span>.`, `<span class="math">≈ 6.28</span>.`] },
      { tipo: 'opt', q: `La recta tangente a f en (a, f(a)) y la normal tienen pendientes <span class="math">m</span> y <span class="math">m<sub>n</sub></span>. Si <span class="math">m = 2/3</span>, ¿cuánto vale <span class="math">m<sub>n</sub></span>?`, opciones: [`<span class="math">2/3</span>`, `<span class="math">−2/3</span>`, `<span class="math">3/2</span>`, `<span class="math">−3/2</span>`], correcta: 3, pasos: [`La normal es perpendicular a la tangente.`, `<span class="math">m<sub>n</sub> = −1/m = −1/(2/3)</span>.`, `<span class="math">= −3/2</span>.`] },
      { tipo: 'num', q: `Un globo esférico se infla de modo que su radio crece a 0.5 cm por s. ¿Con qué rapidez crece su volumen (cm³ por s) cuando r = 3 cm? Redondea a 2 decimales.`, r: 56.5487, tol: 0.01, pasos: [`<span class="math">V = (4/3)πr³ ⇒ dV/dt = 4πr²·dr/dt</span>.`, `<span class="math">= 4π·9·0.5 = 18π</span>.`, `<span class="math">≈ 56.55</span>.`] },
      { tipo: 'num', q: `La tangente a la circunferencia <span class="math">x² + y² = 25</span> en (3, 4) es <span class="math">3x + 4y = 25</span>. ¿En qué valor de x corta al eje x? Redondea a 2 decimales.`, r: 8.3333, tol: 0.01, pasos: [`Con <span class="math">y = 0</span>: <span class="math">3x = 25</span>.`, `<span class="math">x = 25/3</span>.`, `<span class="math">≈ 8.33</span>.`] }
    ]
  };


  T['1.16'] = {
    id: '1.16',
    unidad: 3,
    titulo: `Máximos y mínimos, concavidad, optimización y regla de L'Hôpital`,
    resumen: `Usarás f′ y f″ para hallar extremos, intervalos de crecimiento y concavidad, resolverás problemas de optimización y levantarás indeterminaciones con L'Hôpital.`,
    objetivos: [
      `Hallar puntos críticos y clasificarlos con el criterio de la primera y de la segunda derivada.`,
      `Determinar intervalos de crecimiento y decrecimiento, concavidad y puntos de inflexión.`,
      `Encontrar los extremos absolutos de una función continua en un intervalo cerrado.`,
      `Plantear y resolver problemas de optimización y calcular límites indeterminados con la regla de L'Hôpital.`
    ],
    teoria: [
      { titulo: `Extremos y puntos críticos`, html: `<p>Una función tiene un <strong>máximo local</strong> en c si <span class="math">f(c) ≥ f(x)</span> para x cerca de c, y un <strong>mínimo local</strong> si <span class="math">f(c) ≤ f(x)</span>. El <strong>máximo absoluto</strong> es el mayor valor en todo el dominio considerado.</p><p><strong>Teorema de Fermat:</strong> si f tiene un extremo local en c y es derivable allí, entonces <span class="math">f′(c) = 0</span>. Por ello buscamos los <strong>puntos críticos</strong>: valores c del dominio donde <span class="math">f′(c) = 0</span> o <span class="math">f′(c)</span> no existe. Los extremos locales están entre los puntos críticos, pero no todo punto crítico es un extremo (por ejemplo, <span class="math">x³</span> en 0 tiene <span class="math">f′(0) = 0</span> y no es máximo ni mínimo).</p>` },
      { titulo: `Crecimiento y decrecimiento`, html: `<p>Si <span class="math">f′(x) > 0</span> en un intervalo, f es <strong>creciente</strong> allí; si <span class="math">f′(x) < 0</span>, es <strong>decreciente</strong>. Para determinar los intervalos:</p><ol><li>Calcula <span class="math">f′</span> y halla los puntos críticos.</li><li>Ubícalos en la recta numérica; dividen el dominio en intervalos.</li><li>Evalúa el signo de <span class="math">f′</span> en un punto de prueba de cada intervalo.</li></ol><p>Esta tabla de signos es la herramienta central del tema.</p>` },
      { titulo: `Criterio de la primera derivada`, html: `<p>Sea c un punto crítico y f continua en c:</p><ul><li>Si <span class="math">f′</span> cambia de <strong>+ a −</strong> al pasar por c: máximo local en c.</li><li>Si cambia de <strong>− a +</strong>: mínimo local en c.</li><li>Si no cambia de signo: ni máximo ni mínimo.</li></ul><p>Funciona siempre, incluso cuando <span class="math">f″</span> no existe o vale 0, y también en puntos con <span class="math">f′</span> no definida (picos).</p>` },
      { titulo: `Concavidad y puntos de inflexión`, html: `<p>Si <span class="math">f″ > 0</span> en un intervalo, la gráfica es <strong>cóncava hacia arriba</strong> (∪, está sobre sus tangentes); si <span class="math">f″ < 0</span>, es <strong>cóncava hacia abajo</strong> (∩). Un <strong>punto de inflexión</strong> es un punto de la gráfica donde la concavidad cambia: allí <span class="math">f″ = 0</span> (o no existe) y <span class="math">f″</span> cambia de signo.</p><p>Cuidado: <span class="math">f″(c) = 0</span> no basta; hay que verificar el cambio de signo. Ejemplo: <span class="math">f = x⁴</span> tiene <span class="math">f″(0) = 0</span> pero no hay inflexión.</p>` },
      { titulo: `Criterio de la segunda derivada`, html: `<p>Si <span class="math">f′(c) = 0</span> y existe <span class="math">f″(c)</span>:</p><ul><li><span class="math">f″(c) > 0</span>: mínimo local (gráfica en forma de copa).</li><li><span class="math">f″(c) < 0</span>: máximo local (gráfica en forma de cima).</li><li><span class="math">f″(c) = 0</span>: el criterio no decide; usa el de la primera derivada.</li></ul><p>Ejemplo: <span class="math">f = x⁴ − 4x³</span>, <span class="math">f′ = 4x²(x − 3)</span>, <span class="math">f″ = 12x² − 24x</span>. En x = 3, <span class="math">f″ = 36 > 0</span>: mínimo, <span class="math">f(3) = −27</span>. En x = 0, <span class="math">f″ = 0</span>: se usa la primera derivada y no hay extremo.</p>` },
      { titulo: `Extremos absolutos en un intervalo cerrado`, html: `<p><strong>Teorema del valor extremo:</strong> si f es continua en [a, b], alcanza un máximo y un mínimo absolutos en ese intervalo.</p><p>Método del intervalo cerrado:</p><ol><li>Halla los puntos críticos que estén dentro de (a, b).</li><li>Evalúa f en esos puntos y también en los extremos a y b.</li><li>El mayor valor es el máximo absoluto; el menor, el mínimo absoluto.</li></ol><p>Los extremos del intervalo cuentan: un máximo absoluto puede estar en un borde.</p>` },
      { titulo: `Problemas de optimización`, html: `<ol><li>Lee con calma y dibuja; define las variables.</li><li>Escribe la función objetivo (lo que se maximiza o minimiza: área, volumen, costo, distancia).</li><li>Si hay más de una variable, usa la restricción para expresarla con <strong>una sola</strong>.</li><li>Determina el dominio realista (longitudes positivas, etc.).</li><li>Deriva, iguala a 0, resuelve y verifica el tipo de extremo (segunda derivada o extremos del intervalo).</li><li>Responde la pregunta con unidades.</li></ol><p>Ejemplo típico: de todos los rectángulos con perímetro fijo, el cuadrado tiene el área máxima.</p>` },
      { titulo: `Regla de L'Hôpital`, html: `<p>Si <span class="math">lím f(x)/g(x)</span> tiene la forma indeterminada <span class="math">0/0</span> o <span class="math">∞/∞</span> (con x → a, o x → ±∞), y f, g son derivables, entonces</p><p><span class="math">lím f(x)/g(x) = lím f′(x)/g′(x)</span></p><p>siempre que el límite de la derecha exista (o sea ±∞). Se deriva numerador y denominador <strong>por separado</strong> (no es la regla del cociente) y se puede repetir.</p><p>Otras indeterminaciones se transforman: <span class="math">0·∞</span> se reescribe como cociente (<span class="math">x ln x = ln x/(1/x)</span>); <span class="math">∞ − ∞</span>, con álgebra; <span class="math">1<sup>∞</sup></span>, <span class="math">0⁰</span>, <span class="math">∞⁰</span> con logaritmos. Con L'Hôpital se comprueba, por ejemplo, que <span class="math">e<sup>x</sup></span> crece más rápido que cualquier potencia: <span class="math">lím<sub>x→∞</sub> xⁿ/e<sup>x</sup> = 0</span>.</p>` }
    ],
    formulas: [
      { label: `Punto crítico`, html: `<span class="math">f′(c) = 0 o f′(c) no existe</span>` },
      { label: `Primera derivada`, html: `<span class="math">f′: + → − ⇒ máximo; − → + ⇒ mínimo</span>` },
      { label: `Segunda derivada`, html: `<span class="math">f′(c) = 0, f″(c) > 0 ⇒ mínimo; f″(c) < 0 ⇒ máximo</span>` },
      { label: `Concavidad`, html: `<span class="math">f″ > 0: cóncava arriba; f″ < 0: cóncava abajo</span>` },
      { label: `Punto de inflexión`, html: `<span class="math">f″ cambia de signo en c</span>` },
      { label: `Intervalo cerrado`, html: `<span class="math">comparar f(a), f(b) y f(c) de los puntos críticos</span>` },
      { label: `L'Hôpital`, html: `<span class="math">lím f/g = lím f′/g′ (0/0 o ∞/∞)</span>` },
      { label: `Producto 0·∞`, html: `<span class="math">f·g = f/(1/g)</span>` }
    ],
    ejemplos: [
      { titulo: `Extremos locales con la primera derivada`,
        enunciado: `Clasifica los puntos críticos de <span class="math">f(x) = x³ − 3x² − 9x + 5</span>.`,
        pasos: [`<span class="math">f′ = 3x² − 6x − 9 = 3(x − 3)(x + 1)</span>, así que los puntos críticos son x = −1 y x = 3.`, `Signos de <span class="math">f′</span>: en <span class="math">(−∞, −1)</span> positivo; en <span class="math">(−1, 3)</span> negativo; en <span class="math">(3, ∞)</span> positivo.`, `En x = −1 cambia de + a −: máximo local, <span class="math">f(−1) = −1 − 3 + 9 + 5 = 10</span>.`, `En x = 3 cambia de − a +: mínimo local, <span class="math">f(3) = 27 − 27 − 27 + 5 = −22</span>.`],
        respuesta: `Máximo local en (−1, 10); mínimo local en (3, −22). Creciente en <span class="math">(−∞, −1)</span> y <span class="math">(3, ∞)</span>; decreciente en <span class="math">(−1, 3)</span>.` },
      { titulo: `Segunda derivada y caso dudoso`,
        enunciado: `Clasifica los puntos críticos de <span class="math">f(x) = x⁴ − 4x³</span>.`,
        pasos: [`<span class="math">f′ = 4x³ − 12x² = 4x²(x − 3)</span>: puntos críticos x = 0 y x = 3.`, `<span class="math">f″ = 12x² − 24x</span>.`, `<span class="math">f″(3) = 108 − 72 = 36 > 0</span>: mínimo local, <span class="math">f(3) = 81 − 108 = −27</span>.`, `<span class="math">f″(0) = 0</span>: no decide. Signo de <span class="math">f′</span>: antes y después de 0 es negativo (<span class="math">4x² ≥ 0</span> y <span class="math">x − 3 < 0</span>). No cambia: no hay extremo en 0.`],
        respuesta: `Mínimo local (y absoluto) en (3, −27); en x = 0 no hay extremo.` },
      { titulo: `Extremos absolutos en un intervalo cerrado`,
        enunciado: `Halla el máximo y el mínimo absolutos de <span class="math">f(x) = x³ − 3x + 1</span> en [0, 2].`,
        pasos: [`<span class="math">f′ = 3x² − 3 = 0 ⇒ x = ±1</span>; solo x = 1 está en el intervalo.`, `<span class="math">f(0) = 1</span>, <span class="math">f(1) = 1 − 3 + 1 = −1</span>, <span class="math">f(2) = 8 − 6 + 1 = 3</span>.`, `Mayor: 3; menor: −1.`],
        respuesta: `Máximo absoluto 3 en x = 2 (extremo del intervalo); mínimo absoluto −1 en x = 1.` },
      { titulo: `Concavidad e inflexión`,
        enunciado: `Estudia la concavidad de <span class="math">f(x) = x³ − 6x² + 9x + 1</span> y halla su punto de inflexión.`,
        pasos: [`<span class="math">f′ = 3x² − 12x + 9</span>, <span class="math">f″ = 6x − 12</span>.`, `<span class="math">f″ = 0 ⇒ x = 2</span>.`, `Si x < 2, <span class="math">f″ < 0</span> (cóncava abajo); si x > 2, <span class="math">f″ > 0</span> (cóncava arriba): hay inflexión.`, `<span class="math">f(2) = 8 − 24 + 18 + 1 = 3</span>.`],
        respuesta: `Cóncava hacia abajo en <span class="math">(−∞, 2)</span>, hacia arriba en <span class="math">(2, ∞)</span>; punto de inflexión (2, 3).` },
      { titulo: `Optimización: corral junto al río`,
        enunciado: `Un agricultor del Lempa tiene 200 m de malla para cercar un terreno rectangular junto a un río; el lado del río no necesita cerca. ¿Qué dimensiones dan el área máxima?`,
        pasos: [`Sea x el lado perpendicular al río (dos lados) y y el paralelo: <span class="math">2x + y = 200 ⇒ y = 200 − 2x</span>.`, `Área: <span class="math">A(x) = x(200 − 2x) = 200x − 2x²</span>, con <span class="math">0 < x < 100</span>.`, `<span class="math">A′ = 200 − 4x = 0 ⇒ x = 50</span>; <span class="math">A″ = −4 < 0</span>: máximo.`, `<span class="math">y = 200 − 100 = 100</span>; área <span class="math">50·100 = 5000</span>.`],
        respuesta: `50 m (perpendicular al río) por 100 m (paralelo); área máxima 5000 m².` },
      { titulo: `Regla de L'Hôpital repetida`,
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> (e<sup>x</sup> − 1 − x)/x²</span>.`,
        pasos: [`Sustituyendo: <span class="math">(1 − 1 − 0)/0 = 0/0</span>. Aplica L'Hôpital.`, `<span class="math">lím (e<sup>x</sup> − 1)/(2x)</span>: sigue siendo <span class="math">0/0</span>.`, `Otra vez: <span class="math">lím e<sup>x</sup>/2 = 1/2</span>.`],
        respuesta: `<span class="math">lím<sub>x→0</sub> (e<sup>x</sup> − 1 − x)/x² = 1/2</span>.` }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: `Halla el punto crítico de <span class="math">f(x) = x² − 4x + 3</span> y su valor mínimo.`, pasos: [`<span class="math">f′ = 2x − 4 = 0 ⇒ x = 2</span>.`, `<span class="math">f(2) = 4 − 8 + 3 = −1</span>; <span class="math">f″ = 2 > 0</span>: mínimo.`], respuesta: `Mínimo en (2, −1).` },
      { nivel: 'facil', enunciado: `Indica dónde crece y dónde decrece <span class="math">f(x) = x² − 6x</span>.`, pasos: [`<span class="math">f′ = 2x − 6 = 0 ⇒ x = 3</span>.`, `Si x < 3, <span class="math">f′ < 0</span>; si x > 3, <span class="math">f′ > 0</span>.`], respuesta: `Decreciente en <span class="math">(−∞, 3)</span>, creciente en <span class="math">(3, ∞)</span>.` },
      { nivel: 'facil', enunciado: `Estudia la concavidad de <span class="math">f(x) = x³</span>.`, pasos: [`<span class="math">f″ = 6x</span>.`, `Si x < 0, <span class="math">f″ < 0</span>; si x > 0, <span class="math">f″ > 0</span>; cambia en x = 0.`], respuesta: `Cóncava abajo en <span class="math">(−∞, 0)</span>, arriba en <span class="math">(0, ∞)</span>; inflexión en (0, 0).` },
      { nivel: 'facil', enunciado: `Calcula <span class="math">lím<sub>x→0</sub> (e<sup>2x</sup> − 1)/x</span> con L'Hôpital.`, pasos: [`Forma <span class="math">0/0</span>.`, `Deriva arriba y abajo: <span class="math">2e<sup>2x</sup>/1</span>.`, `En 0: <span class="math">2</span>.`], respuesta: `<span class="math">2</span>.` },
      { nivel: 'intermedio', enunciado: `Clasifica los extremos locales de <span class="math">f(x) = 2x³ − 9x² + 12x</span>.`, pasos: [`<span class="math">f′ = 6x² − 18x + 12 = 6(x − 1)(x − 2)</span>: x = 1 y x = 2.`, `<span class="math">f″ = 12x − 18</span>: <span class="math">f″(1) = −6 < 0</span> (máximo), <span class="math">f″(2) = 6 > 0</span> (mínimo).`, `<span class="math">f(1) = 2 − 9 + 12 = 5</span>; <span class="math">f(2) = 16 − 36 + 24 = 4</span>.`], respuesta: `Máximo local en (1, 5); mínimo local en (2, 4).` },
      { nivel: 'intermedio', enunciado: `Halla los extremos absolutos de <span class="math">f(x) = x⁴ − 2x²</span> en [−2, 2].`, pasos: [`<span class="math">f′ = 4x³ − 4x = 4x(x − 1)(x + 1)</span>: x = 0, ±1.`, `<span class="math">f(0) = 0</span>, <span class="math">f(±1) = 1 − 2 = −1</span>, <span class="math">f(±2) = 16 − 8 = 8</span>.`, `Mayor 8, menor −1.`], respuesta: `Máximo absoluto 8 (en x = ±2); mínimo absoluto −1 (en x = ±1).` },
      { nivel: 'intermedio', enunciado: `Halla los puntos de inflexión de <span class="math">f(x) = x⁴ − 6x²</span>.`, pasos: [`<span class="math">f″ = 12x² − 12 = 12(x − 1)(x + 1)</span>.`, `<span class="math">f″ = 0 ⇒ x = ±1</span>; el signo cambia en cada uno.`, `<span class="math">f(±1) = 1 − 6 = −5</span>.`], respuesta: `(−1, −5) y (1, −5).` },
      { nivel: 'intermedio', enunciado: `Calcula <span class="math">lím<sub>x→∞</sub> x²/e<sup>x</sup></span>.`, pasos: [`Forma <span class="math">∞/∞</span>.`, `L'Hôpital: <span class="math">lím 2x/e<sup>x</sup></span>, aún <span class="math">∞/∞</span>.`, `Otra vez: <span class="math">lím 2/e<sup>x</sup> = 0</span>.`], respuesta: `<span class="math">0</span>: la exponencial domina a la potencia.` },
      { nivel: 'dificil', enunciado: `De una lámina cuadrada de 12 cm de lado se recortan cuadrados de lado x en las esquinas y se doblan los lados para formar una caja sin tapa. ¿Qué x maximiza el volumen y cuál es ese volumen?`, pasos: [`Base <span class="math">(12 − 2x)</span> por <span class="math">(12 − 2x)</span>, altura x: <span class="math">V = x(12 − 2x)²</span>, <span class="math">0 < x < 6</span>.`, `<span class="math">V′ = (12 − 2x)² + x·2(12 − 2x)(−2) = (12 − 2x)(12 − 2x − 4x) = (12 − 2x)(12 − 6x)</span>.`, `<span class="math">V′ = 0 ⇒ x = 6</span> (descartado, volumen 0) o <span class="math">x = 2</span>.`, `Signo de <span class="math">V′</span>: + antes de 2 y − después: máximo. <span class="math">V(2) = 2·8² = 128</span>.`], respuesta: `x = 2 cm; volumen máximo 128 cm³.` },
      { nivel: 'dificil', enunciado: `Una lata cilíndrica cerrada debe contener 1000 cm³. Halla el radio que minimiza el material (área total) y la altura correspondiente. Redondea a 2 decimales.`, pasos: [`<span class="math">V = πr²h = 1000 ⇒ h = 1000/(πr²)</span>.`, `Área: <span class="math">A = 2πr² + 2πrh = 2πr² + 2000/r</span>.`, `<span class="math">A′ = 4πr − 2000/r² = 0 ⇒ r³ = 500/π ≈ 159.15 ⇒ r ≈ 5.42</span>.`, `<span class="math">A″ = 4π + 4000/r³ > 0</span>: mínimo. <span class="math">h = 1000/(π·5.42²) ≈ 10.84 = 2r</span>.`], respuesta: `<span class="math">r ≈ 5.42</span> cm y <span class="math">h ≈ 10.84</span> cm (la altura es el doble del radio).` },
      { nivel: 'dificil', enunciado: `Calcula <span class="math">lím<sub>x→0<sup>+</sup></sub> x ln x</span>.`, pasos: [`Forma <span class="math">0·(−∞)</span>. Reescribe: <span class="math">x ln x = ln x/(1/x)</span>, forma <span class="math">−∞/∞</span>.`, `L'Hôpital: <span class="math">(1/x)/(−1/x²) = −x</span>.`, `<span class="math">lím<sub>x→0<sup>+</sup></sub> (−x) = 0</span>.`], respuesta: `<span class="math">0</span>.` }
    ],
    teoricas: [
      { q: `¿Todo punto crítico es un máximo o un mínimo?`, a: `No. Con <span class="math">f(x) = x³</span> el punto crítico x = 0 no es extremo: <span class="math">f′</span> no cambia de signo. Hay que clasificar el punto crítico con algún criterio.` },
      { q: `¿Qué diferencia hay entre extremo local y absoluto?`, a: `Local: el mayor o menor valor en un entorno pequeño. Absoluto: el mayor o menor en todo el intervalo o dominio considerado.` },
      { q: `¿Por qué hay que evaluar los extremos del intervalo en el método del intervalo cerrado?`, a: `Porque el máximo o mínimo absoluto puede ocurrir en un borde, donde <span class="math">f′</span> no tiene por qué ser 0.` },
      { q: `¿Cómo se relacionan la concavidad y el criterio de la segunda derivada?`, a: `Si <span class="math">f′(c) = 0</span> y la gráfica es cóncava arriba (<span class="math">f″ > 0</span>), la curva forma una copa y c es mínimo; si es cóncava abajo, es máximo.` },
      { q: `Si <span class="math">f″(c) = 0</span>, ¿hay punto de inflexión en c?`, a: `No necesariamente. Hay inflexión solo si <span class="math">f″</span> cambia de signo en c. Con <span class="math">x⁴</span>, <span class="math">f″(0) = 0</span> y no hay inflexión.` },
      { q: `¿Cuándo se puede usar la regla de L'Hôpital?`, a: `Solo cuando el límite del cociente es <span class="math">0/0</span> o <span class="math">∞/∞</span>. Si no es indeterminado, se aplica sustitución directa y L'Hôpital daría un resultado incorrecto.` },
      { q: `¿Es L'Hôpital lo mismo que la regla del cociente?`, a: `No. L'Hôpital deriva numerador y denominador por separado; la regla del cociente deriva el cociente como una sola función.` },
      { q: `En optimización, ¿qué hacer si el problema tiene dos variables?`, a: `Usar la restricción del enunciado para escribir una variable en función de la otra y obtener una función objetivo de una sola variable.` }
    ],
    errores: [
      `Igualar <span class="math">f</span> a 0 en lugar de <span class="math">f′</span> al buscar puntos críticos, o dar solo la coordenada x cuando piden el punto o el valor máximo.`,
      `Concluir que hay máximo o mínimo solo porque <span class="math">f′ = 0</span>, sin aplicar un criterio (primera o segunda derivada).`,
      `Aplicar L'Hôpital sin verificar que la forma sea <span class="math">0/0</span> o <span class="math">∞/∞</span>, o aplicar la regla del cociente en lugar de derivar por separado.`,
      `En optimización, no comprobar el dominio (x debe ser positivo) o responder con el valor de x cuando piden el valor máximo.`
    ],
    aplicacion: { titulo: `Utilidad máxima de una panadería`, html: `<p>Una panadería de Santa Tecla vende q docenas de pan al día; su utilidad diaria, en dólares, es <span class="math">U(q) = −0.02q² + 8q − 150</span>. ¿Cuántas docenas debe producir para maximizar su utilidad?</p><ol><li><span class="math">U′(q) = −0.04q + 8 = 0 ⇒ q = 200</span>.</li><li><span class="math">U″ = −0.04 < 0</span>: es un máximo.</li><li><span class="math">U(200) = −0.02(40000) + 1600 − 150 = −800 + 1600 − 150 = 650</span>.</li></ol><p>Conviene producir <strong>200 docenas al día</strong> para obtener una utilidad máxima de <strong>$650</strong>. Más allá de 200, cada docena extra cuesta más de lo que aporta (<span class="math">U′ < 0</span>).</p>` },
    calc: 'optimizacion',
    examen: [
      { tipo: 'par', q: `Halla el punto mínimo (x, y) de <span class="math">f(x) = x² − 6x + 5</span>.`, r: [3, -4], tol: 0.01, pasos: [`<span class="math">f′ = 2x − 6 = 0 ⇒ x = 3</span>.`, `<span class="math">f″ = 2 > 0</span>: mínimo.`, `<span class="math">f(3) = 9 − 18 + 5 = −4</span>.`] },
      { tipo: 'num', q: `Halla el valor máximo de <span class="math">f(x) = −x² + 4x + 1</span>.`, r: 5, tol: 0.01, pasos: [`<span class="math">f′ = −2x + 4 = 0 ⇒ x = 2</span>.`, `<span class="math">f″ = −2 < 0</span>: máximo.`, `<span class="math">f(2) = −4 + 8 + 1 = 5</span>.`] },
      { tipo: 'lista', q: `Halla los puntos críticos (valores de x) de <span class="math">f(x) = x³ − 12x</span>, separados por comas.`, r: [-2, 2], tol: 0.01, pasos: [`<span class="math">f′ = 3x² − 12</span>.`, `<span class="math">3(x² − 4) = 0</span>.`, `<span class="math">x = −2</span> o <span class="math">x = 2</span>.`] },
      { tipo: 'par', q: `Halla el punto de inflexión (x, y) de <span class="math">f(x) = x³ − 3x² + 1</span>.`, r: [1, -1], tol: 0.01, pasos: [`<span class="math">f″ = 6x − 6 = 0 ⇒ x = 1</span>.`, `<span class="math">f″</span> cambia de − a +: hay inflexión.`, `<span class="math">f(1) = 1 − 3 + 1 = −1</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">lím<sub>x→0</sub> sen 3x/x</span> con L'Hôpital.`, r: 3, tol: 0.01, pasos: [`Forma <span class="math">0/0</span>.`, `<span class="math">lím 3cos 3x/1</span>.`, `<span class="math">= 3</span>.`] },
      { tipo: 'opt', q: `Si <span class="math">f′(c) = 0</span> y <span class="math">f″(c) > 0</span>, entonces en x = c hay:`, opciones: [`Un máximo local`, `Un punto de inflexión`, `Un mínimo local`, `No se puede decidir`], correcta: 2, pasos: [`<span class="math">f″(c) > 0</span> indica concavidad hacia arriba.`, `Con tangente horizontal, la gráfica forma una copa.`, `Es un mínimo local.`] },
      { tipo: 'num', q: `Halla el mínimo absoluto de <span class="math">f(x) = x³ − 3x²</span> en [0, 3].`, r: -4, tol: 0.01, pasos: [`<span class="math">f′ = 3x² − 6x = 3x(x − 2)</span>: x = 0, 2.`, `<span class="math">f(0) = 0</span>, <span class="math">f(2) = 8 − 12 = −4</span>, <span class="math">f(3) = 0</span>.`, `El menor valor es −4.`] },
      { tipo: 'num', q: `Se tienen 40 m de malla para cercar un rectángulo. ¿Cuál es su área máxima (m²)?`, r: 100, tol: 0.01, pasos: [`<span class="math">2x + 2y = 40 ⇒ y = 20 − x</span>.`, `<span class="math">A = x(20 − x)</span>, <span class="math">A′ = 20 − 2x = 0 ⇒ x = 10</span>.`, `<span class="math">A = 10·10 = 100</span> (un cuadrado).`] },
      { tipo: 'par', q: `Halla el máximo local (x, y) de <span class="math">f(x) = −x³ + 3x</span>.`, r: [1, 2], tol: 0.01, pasos: [`<span class="math">f′ = −3x² + 3 = 0 ⇒ x = ±1</span>.`, `<span class="math">f″ = −6x</span>: en x = 1, <span class="math">f″ = −6 < 0</span>: máximo.`, `<span class="math">f(1) = −1 + 3 = 2</span>.`] },
      { tipo: 'opt', q: `¿Cuánto vale <span class="math">lím<sub>x→∞</sub> ln x/x</span>?`, opciones: [`<span class="math">∞</span>`, `<span class="math">1</span>`, `<span class="math">0</span>`, `No existe`], correcta: 2, pasos: [`Forma <span class="math">∞/∞</span>.`, `L'Hôpital: <span class="math">(1/x)/1 = 1/x</span>.`, `<span class="math">lím 1/x = 0</span>.`] }
    ]
  };


})();

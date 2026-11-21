/* data-3a-u5.js — Unidad 5: Álgebra vectorial */
(function () {
  var T = (window.CURSO_3A = window.CURSO_3A || { temas: {} }).temas;

  /* ───────────────────────────────────────────────────────── 1.22 */
  T['1.22'] = {
    id: '1.22',
    unidad: 5,
    titulo: `Vectores en ℝ² y ℝ³`,
    resumen: `Estudiarás la representación, magnitud y operaciones con vectores en dos y tres dimensiones, incluyendo vectores unitarios y paralelismo.`,
    objetivos: [
      `Representar vectores en ℝ² y ℝ³ usando notación de componentes y base estándar i, j, k.`,
      `Calcular la magnitud (norma) de un vector y construir el vector unitario correspondiente.`,
      `Realizar operaciones de suma, resta y multiplicación escalar con vectores.`,
      `Determinar si dos vectores son paralelos verificando si uno es múltiplo escalar del otro.`
    ],
    teoria: [
      { titulo: `Concepto de vector y notación`, html: `<p>Un <strong>vector</strong> en ℝ³ es un objeto matemático que tiene magnitud y dirección. Se escribe como <span class="math">v = ⟨a, b, c⟩</span> o en forma de base estándar <span class="math">v = a·i + b·j + c·k</span>, donde i, j, k son los vectores unitarios en las direcciones x, y, z respectivamente.</p><p>En ℝ²: <span class="math">v = ⟨a, b⟩ = a·i + b·j</span>. Los escalares a, b, c se llaman <strong>componentes</strong> del vector. Un vector queda determinado por sus componentes; su posición en el plano o espacio no importa, solo su magnitud y dirección.</p>` },
      { titulo: `Magnitud de un vector`, html: `<p>La <strong>magnitud</strong> (o norma) de un vector <span class="math">v = ⟨a, b, c⟩</span> se calcula con la fórmula de distancia al origen:</p><p><span class="math">|v| = √(a² + b² + c²)</span></p><p>En ℝ²: <span class="math">|v| = √(a² + b²)</span>. Es siempre un número no negativo. Si <span class="math">|v| = 0</span>, entonces v es el vector cero <span class="math">⟨0, 0, 0⟩</span>. Ejemplo: si <span class="math">v = ⟨3, 4, 0⟩</span>, entonces <span class="math">|v| = √(9 + 16 + 0) = √25 = 5</span>.</p>` },
      { titulo: `Vector unitario`, html: `<p>Un <strong>vector unitario</strong> tiene magnitud igual a 1. Para obtener el vector unitario en la dirección de v:</p><p><span class="math">û = v / |v| = ⟨a/|v|, b/|v|, c/|v|⟩</span></p><p>Los vectores de base estándar son unitarios: <span class="math">|i| = |j| = |k| = 1</span>. El vector unitario û apunta en la misma dirección que v y sirve para indicar solo la dirección sin importar la magnitud.</p>` },
      { titulo: `Suma, resta y multiplicación escalar`, html: `<p>Las operaciones algebraicas con vectores se realizan componente a componente:</p><ul><li><strong>Suma:</strong> <span class="math">u + v = ⟨u₁+v₁, u₂+v₂, u₃+v₃⟩</span></li><li><strong>Resta:</strong> <span class="math">u − v = ⟨u₁−v₁, u₂−v₂, u₃−v₃⟩</span></li><li><strong>Escalar:</strong> <span class="math">c·v = ⟨c·v₁, c·v₂, c·v₃⟩</span></li></ul><p>La multiplicación por escalar cambia la magnitud (y la dirección si c es negativo). Geométricamente, la suma de vectores sigue la regla del paralelogramo o la regla cabeza-cola.</p>` },
      { titulo: `Vectores paralelos`, html: `<p>Dos vectores u y v son <strong>paralelos</strong> si uno es múltiplo escalar del otro: <span class="math">u = c·v</span> para algún escalar c ≠ 0. Si c > 0, apuntan en la misma dirección; si c < 0, en direcciones opuestas.</p><p>Para verificar paralelismo en ℝ³: comprueba que las razones de componentes son iguales: <span class="math">u₁/v₁ = u₂/v₂ = u₃/v₃</span> (cuidando con divisiones por cero). El vector cero es paralelo a todo vector por convención.</p>` },
      { titulo: `Propiedades algebraicas de los vectores`, html: `<p>Los vectores en ℝ³ cumplen las mismas propiedades que los números para la suma y el producto escalar:</p><ul><li>Conmutatividad: <span class="math">u + v = v + u</span></li><li>Asociatividad: <span class="math">(u + v) + w = u + (v + w)</span></li><li>Elemento neutro: <span class="math">v + 0 = v</span></li><li>Inverso: <span class="math">v + (−v) = 0</span></li><li>Distributividad: <span class="math">c(u + v) = cu + cv</span></li></ul>` },
      { titulo: `Interpretación geométrica`, html: `<p>Geométricamente, un vector en ℝ³ puede representarse como una flecha desde el origen hasta el punto <span class="math">(a, b, c)</span>. La <strong>magnitud</strong> es la longitud de la flecha. La <strong>dirección</strong> está dada por los ángulos directores α, β, γ que el vector forma con los ejes x, y, z:</p><p><span class="math">cos α = a/|v|,  cos β = b/|v|,  cos γ = c/|v|</span></p><p>Siempre se cumple <span class="math">cos²α + cos²β + cos²γ = 1</span>.</p>` }
    ],
    formulas: [
      { label: `Magnitud en ℝ³`, html: `<span class="math">|v| = √(a² + b² + c²)</span>` },
      { label: `Magnitud en ℝ²`, html: `<span class="math">|v| = √(a² + b²)</span>` },
      { label: `Vector unitario`, html: `<span class="math">û = v/|v| = ⟨a/|v|, b/|v|, c/|v|⟩</span>` },
      { label: `Suma de vectores`, html: `<span class="math">u + v = ⟨u₁+v₁, u₂+v₂, u₃+v₃⟩</span>` },
      { label: `Producto escalar`, html: `<span class="math">c·v = ⟨c·v₁, c·v₂, c·v₃⟩</span>` },
      { label: `Vectores paralelos`, html: `<span class="math">u ∥ v ⟺ u = c·v para algún c ∈ ℝ</span>` },
      { label: `Cosenos directores`, html: `<span class="math">cos α = a/|v|,  cos²α + cos²β + cos²γ = 1</span>` },
      { label: `Base estándar`, html: `<span class="math">v = a·i + b·j + c·k,  |i| = |j| = |k| = 1</span>` }
    ],
    ejemplos: [
      { titulo: `Magnitud y vector unitario`,
        enunciado: `Halla la magnitud y el vector unitario de <span class="math">v = ⟨2, −1, 2⟩</span>.`,
        pasos: [
          `Calcula la magnitud: <span class="math">|v| = √(2² + (−1)² + 2²) = √(4 + 1 + 4) = √9 = 3</span>.`,
          `Divide cada componente entre |v|: <span class="math">û = ⟨2/3, −1/3, 2/3⟩</span>.`,
          `Verificación: <span class="math">|û| = √((2/3)² + (1/3)² + (2/3)²) = √(4/9 + 1/9 + 4/9) = √(9/9) = 1</span>. ✓`
        ],
        respuesta: `<span class="math">|v| = 3</span> y <span class="math">û = ⟨2/3, −1/3, 2/3⟩</span>.` },
      { titulo: `Operaciones con vectores`,
        enunciado: `Sean <span class="math">u = ⟨1, 3, −2⟩</span> y <span class="math">v = ⟨4, −1, 5⟩</span>. Calcula <span class="math">2u − v</span>.`,
        pasos: [
          `Multiplica u por 2: <span class="math">2u = ⟨2, 6, −4⟩</span>.`,
          `Resta v: <span class="math">2u − v = ⟨2−4, 6−(−1), −4−5⟩ = ⟨−2, 7, −9⟩</span>.`
        ],
        respuesta: `<span class="math">2u − v = ⟨−2, 7, −9⟩</span>.` },
      { titulo: `Verificar paralelismo`,
        enunciado: `Determina si <span class="math">u = ⟨4, −6, 2⟩</span> y <span class="math">v = ⟨−6, 9, −3⟩</span> son paralelos.`,
        pasos: [
          `Busca c tal que <span class="math">u = c·v</span>: compara componentes.`,
          `<span class="math">4 = c·(−6) ⟹ c = −2/3</span>. Verifica: <span class="math">c·(−6) = 4</span> ✓, <span class="math">c·9 = −6</span> ✓, <span class="math">c·(−3) = 2</span> ✓.`,
          `Como existe c = −2/3 que satisface todas las componentes, u y v son paralelos (sentidos opuestos).`
        ],
        respuesta: `Sí, <span class="math">u = (−2/3)·v</span>, son vectores paralelos de sentidos opuestos.` },
      { titulo: `Cosenos directores`,
        enunciado: `Halla los cosenos directores del vector <span class="math">v = ⟨1, 2, 2⟩</span>.`,
        pasos: [
          `Calcula la magnitud: <span class="math">|v| = √(1 + 4 + 4) = 3</span>.`,
          `Aplica las fórmulas: <span class="math">cos α = 1/3</span>, <span class="math">cos β = 2/3</span>, <span class="math">cos γ = 2/3</span>.`,
          `Verificación: <span class="math">(1/3)² + (2/3)² + (2/3)² = 1/9 + 4/9 + 4/9 = 1</span>. ✓`
        ],
        respuesta: `<span class="math">cos α = 1/3</span>, <span class="math">cos β = 2/3</span>, <span class="math">cos γ = 2/3</span>.` },
      { titulo: `Expresar en base estándar`,
        enunciado: `Escribe <span class="math">w = ⟨−3, 0, 5⟩</span> en términos de i, j, k y halla su magnitud.`,
        pasos: [
          `Expresión en base: <span class="math">w = −3i + 0j + 5k = −3i + 5k</span>.`,
          `Magnitud: <span class="math">|w| = √((−3)² + 0² + 5²) = √(9 + 25) = √34</span>.`
        ],
        respuesta: `<span class="math">w = −3i + 5k</span> y <span class="math">|w| = √34 ≈ 5.83</span>.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Calcula la magnitud de <span class="math">v = ⟨3, 4, 0⟩</span>.`,
        pasos: [`<span class="math">|v| = √(9 + 16 + 0) = √25</span>.`, `<span class="math">|v| = 5</span>.`],
        respuesta: `<span class="math">|v| = 5</span>.` },
      { nivel: 'facil',
        enunciado: `Halla el vector unitario de <span class="math">v = ⟨0, 0, 7⟩</span>.`,
        pasos: [`<span class="math">|v| = 7</span>.`, `<span class="math">û = ⟨0, 0, 1⟩ = k</span>.`],
        respuesta: `<span class="math">û = k = ⟨0, 0, 1⟩</span>.` },
      { nivel: 'facil',
        enunciado: `Dados <span class="math">u = ⟨2, 5, −1⟩</span> y <span class="math">v = ⟨−3, 1, 4⟩</span>, calcula <span class="math">u + v</span>.`,
        pasos: [`Suma componente a componente.`, `<span class="math">u + v = ⟨2−3, 5+1, −1+4⟩ = ⟨−1, 6, 3⟩</span>.`],
        respuesta: `<span class="math">u + v = ⟨−1, 6, 3⟩</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">3v</span> para <span class="math">v = ⟨2, −1, 4⟩</span>.`,
        pasos: [`Multiplica cada componente por 3.`, `<span class="math">3v = ⟨6, −3, 12⟩</span>.`],
        respuesta: `<span class="math">3v = ⟨6, −3, 12⟩</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla el vector unitario de <span class="math">v = ⟨1, −2, 2⟩</span>.`,
        pasos: [`<span class="math">|v| = √(1 + 4 + 4) = 3</span>.`, `<span class="math">û = ⟨1/3, −2/3, 2/3⟩</span>.`],
        respuesta: `<span class="math">û = ⟨1/3, −2/3, 2/3⟩</span>.` },
      { nivel: 'intermedio',
        enunciado: `Sean <span class="math">u = ⟨4, 0, −3⟩</span> y <span class="math">v = ⟨1, 2, 1⟩</span>. Calcula <span class="math">|u − 2v|</span>.`,
        pasos: [`<span class="math">u − 2v = ⟨4−2, 0−4, −3−2⟩ = ⟨2, −4, −5⟩</span>.`, `<span class="math">|u − 2v| = √(4 + 16 + 25) = √45 = 3√5</span>.`],
        respuesta: `<span class="math">|u − 2v| = 3√5 ≈ 6.71</span>.` },
      { nivel: 'intermedio',
        enunciado: `Determina si <span class="math">u = ⟨2, 4, −2⟩</span> y <span class="math">v = ⟨1, 2, −1⟩</span> son paralelos.`,
        pasos: [`Verifica si <span class="math">u = c·v</span>: <span class="math">2 = c·1 ⟹ c = 2</span>.`, `Comprueba: <span class="math">c·2 = 4</span> ✓ y <span class="math">c·(−1) = −2</span> ✓. Son paralelos.`],
        respuesta: `Sí, <span class="math">u = 2v</span>, son paralelos en el mismo sentido.` },
      { nivel: 'intermedio',
        enunciado: `Halla los cosenos directores de <span class="math">v = ⟨2, −2, 1⟩</span>.`,
        pasos: [`<span class="math">|v| = √(4 + 4 + 1) = 3</span>.`, `<span class="math">cos α = 2/3</span>, <span class="math">cos β = −2/3</span>, <span class="math">cos γ = 1/3</span>.`],
        respuesta: `<span class="math">cos α = 2/3</span>, <span class="math">cos β = −2/3</span>, <span class="math">cos γ = 1/3</span>.` },
      { nivel: 'dificil',
        enunciado: `Halla el vector v de magnitud 5 en la dirección de <span class="math">u = ⟨3, −4, 0⟩</span>.`,
        pasos: [`Calcula <span class="math">|u| = √(9 + 16) = 5</span>.`, `Vector unitario: <span class="math">û = ⟨3/5, −4/5, 0⟩</span>.`, `Escala: <span class="math">v = 5·û = ⟨3, −4, 0⟩</span>.`],
        respuesta: `<span class="math">v = ⟨3, −4, 0⟩</span> (coincide con u pues |u| ya era 5).` },
      { nivel: 'dificil',
        enunciado: `Halla k tal que <span class="math">|v| = √14</span> siendo <span class="math">v = ⟨k, 2, 3⟩</span>.`,
        pasos: [`<span class="math">|v|² = k² + 4 + 9 = 14</span>.`, `<span class="math">k² = 1 ⟹ k = ±1</span>.`],
        respuesta: `<span class="math">k = 1</span> o <span class="math">k = −1</span>.` },
      { nivel: 'dificil',
        enunciado: `Expresa el vector desde <span class="math">P = (1, 2, 3)</span> hasta <span class="math">Q = (4, 0, 7)</span> y calcula su magnitud.`,
        pasos: [`<span class="math">PQ = Q − P = ⟨4−1, 0−2, 7−3⟩ = ⟨3, −2, 4⟩</span>.`, `<span class="math">|PQ| = √(9 + 4 + 16) = √29</span>.`],
        respuesta: `<span class="math">PQ = ⟨3, −2, 4⟩</span> y <span class="math">|PQ| = √29 ≈ 5.39</span>.` }
    ],
    teoricas: [
      { q: `¿Qué diferencia hay entre un vector y un escalar?`, a: `Un escalar es un número real (solo magnitud). Un vector tiene magnitud y dirección. Por ejemplo, la temperatura es escalar, pero la velocidad del viento es un vector.` },
      { q: `¿Por qué el vector unitario û tiene magnitud 1?`, a: `Porque se obtiene dividiendo v entre su propia magnitud: <span class="math">|û| = |v/|v|| = |v|/|v| = 1</span>. Representa solo la dirección de v.` },
      { q: `¿Cómo se sabe si dos vectores son paralelos en ℝ³?`, a: `Si uno es múltiplo escalar del otro: <span class="math">u = c·v</span>. Equivalentemente, las razones de las componentes son iguales (con cuidado si alguna componente es cero).` },
      { q: `¿Qué ocurre geométricamente al multiplicar un vector por un escalar negativo?`, a: `La magnitud cambia en valor absoluto y la dirección se invierte: el vector resultante apunta en sentido contrario al original.` },
      { q: `¿Por qué <span class="math">cos²α + cos²β + cos²γ = 1</span>?`, a: `Porque los cosenos directores son las componentes del vector unitario û = v/|v|, y la suma de cuadrados de las componentes de un vector unitario siempre es 1.` },
      { q: `¿Cuál es la diferencia entre <span class="math">|u + v|</span> y <span class="math">|u| + |v|</span>?`, a: `En general <span class="math">|u + v| ≤ |u| + |v|</span> (desigualdad triangular). La igualdad se da solo cuando u y v son paralelos en el mismo sentido.` },
      { q: `¿Puede un vector tener magnitud negativa?`, a: `No. La magnitud se define como una raíz cuadrada de una suma de cuadrados, que siempre es no negativa. La magnitud cero solo corresponde al vector cero.` }
    ],
    errores: [
      `Sumar magnitudes en lugar de sumar vectores componente a componente. <span class="math">|u + v| ≠ |u| + |v|</span> en general.`,
      `Olvidar que el vector unitario se obtiene dividiendo cada componente entre la magnitud total, no entre la raíz de cada componente por separado.`,
      `Confundir "sentidos opuestos" con "no paralelos". Dos vectores paralelos pueden apuntar en la misma dirección (c > 0) o en sentidos opuestos (c < 0).`,
      `Usar la fórmula de ℝ² para vectores en ℝ³: <span class="math">|v| = √(a² + b²)</span> solo aplica en el plano. En ℝ³ se debe incluir el tercer componente.`
    ],
    aplicacion: { titulo: `Desplazamiento de un dron en 3D`, html: `<p>Un dron se mueve desde el origen siguiendo tres desplazamientos: <span class="math">d₁ = ⟨3, 0, 1⟩</span> km, <span class="math">d₂ = ⟨−1, 4, 0⟩</span> km y <span class="math">d₃ = ⟨0, −2, 3⟩</span> km.</p><ol><li>Desplazamiento total: <span class="math">d = d₁ + d₂ + d₃ = ⟨2, 2, 4⟩</span> km.</li><li>Distancia al punto de partida: <span class="math">|d| = √(4 + 4 + 16) = √24 = 2√6 ≈ 4.90</span> km.</li><li>Dirección de regreso: <span class="math">−û = −d/|d| = ⟨−2, −2, −4⟩ / (2√6)</span>.</li></ol><p>Este cálculo es fundamental en sistemas de navegación de vehículos aéreos no tripulados (UAV) y robótica.</p>` },
    calc: 'vector3',
    examen: [
      { tipo: 'num', q: `Calcula la magnitud de <span class="math">v = ⟨3, 4, 0⟩</span>.`, r: 5, tol: 0.01, pasos: [`<span class="math">|v| = √(3² + 4² + 0²) = √(9 + 16)</span>.`, `<span class="math">|v| = √25 = 5</span>.`] },
      { tipo: 'num', q: `Si <span class="math">v = ⟨1, 2, 2⟩</span>, ¿cuánto mide |v|?`, r: 3, tol: 0.01, pasos: [`<span class="math">|v| = √(1 + 4 + 4) = √9</span>.`, `<span class="math">|v| = 3</span>.`] },
      { tipo: 'opt', q: `¿Cuál es el vector unitario de <span class="math">v = ⟨0, 5, 0⟩</span>?`, opciones: [`<span class="math">⟨0, 5, 0⟩</span>`, `<span class="math">⟨0, 1, 0⟩</span>`, `<span class="math">⟨0, 0.5, 0⟩</span>`, `<span class="math">⟨1, 0, 0⟩</span>`], correcta: 1, pasos: [`<span class="math">|v| = 5</span>.`, `<span class="math">û = v/5 = ⟨0, 1, 0⟩</span>.`] },
      { tipo: 'num', q: `Calcula la primera componente de <span class="math">2u − v</span> si <span class="math">u = ⟨3, 1, 0⟩</span> y <span class="math">v = ⟨1, 4, 2⟩</span>.`, r: 5, tol: 0.01, pasos: [`<span class="math">2u = ⟨6, 2, 0⟩</span>.`, `Primera componente: <span class="math">6 − 1 = 5</span>.`] },
      { tipo: 'opt', q: `¿Son paralelos <span class="math">u = ⟨2, −4, 6⟩</span> y <span class="math">v = ⟨−1, 2, −3⟩</span>?`, opciones: [`Sí, con <span class="math">c = −2</span>`, `No son paralelos`, `Sí, con <span class="math">c = 2</span>`, `Solo si están en ℝ²`], correcta: 0, pasos: [`Verifica <span class="math">u = c·v</span>: <span class="math">2 = c·(−1) ⟹ c = −2</span>.`, `Comprueba: <span class="math">c·2 = −4</span> ✓ y <span class="math">c·(−3) = 6</span> ✓.`] },
      { tipo: 'num', q: `Halla <span class="math">|v|</span> para <span class="math">v = ⟨2, 2, 1⟩</span>.`, r: 3, tol: 0.01, pasos: [`<span class="math">|v| = √(4 + 4 + 1) = √9</span>.`, `<span class="math">|v| = 3</span>.`] },
      { tipo: 'num', q: `¿Cuál es la magnitud del vector desde <span class="math">P = (1, 1, 1)</span> hasta <span class="math">Q = (4, 5, 1)</span>?`, r: 5, tol: 0.01, pasos: [`<span class="math">PQ = ⟨3, 4, 0⟩</span>.`, `<span class="math">|PQ| = √(9 + 16 + 0) = 5</span>.`] },
      { tipo: 'num', q: `Si <span class="math">û = ⟨a, 0, 0⟩</span> es unitario, ¿cuánto vale a? (da el valor positivo)`, r: 1, tol: 0.01, pasos: [`<span class="math">|û| = √(a² + 0 + 0) = |a| = 1</span>.`, `Valor positivo: <span class="math">a = 1</span>.`] },
      { tipo: 'opt', q: `¿Cuál es la magnitud de <span class="math">3v</span> si <span class="math">|v| = 4</span>?`, opciones: [`<span class="math">4</span>`, `<span class="math">12</span>`, `<span class="math">7</span>`, `<span class="math">√12</span>`], correcta: 1, pasos: [`<span class="math">|c·v| = |c|·|v|</span>.`, `<span class="math">|3v| = 3·4 = 12</span>.`] },
      { tipo: 'num', q: `Halla k > 0 tal que <span class="math">v = ⟨k, k, 0⟩</span> tenga magnitud 10.`, r: 5, tol: 0.1, pasos: [`<span class="math">|v| = √(k² + k²) = k√2 = 10</span>.`, `<span class="math">k = 10/√2 = 5√2 ≈ 7.07</span>.`] }
    ]
  };

  /* ───────────────────────────────────────────────────────── 1.23 */
  T['1.23'] = {
    id: '1.23',
    unidad: 5,
    titulo: `Producto Punto y Producto Cruz`,
    resumen: `Calcularás el producto punto para medir ángulos y proyecciones, y el producto cruz para obtener vectores perpendiculares y áreas de paralelogramos.`,
    objetivos: [
      `Calcular el producto punto de dos vectores usando componentes y verificar ortogonalidad.`,
      `Encontrar el ángulo entre dos vectores usando la fórmula del producto punto.`,
      `Calcular proyecciones vectoriales y escalares de un vector sobre otro.`,
      `Calcular el producto cruz mediante el determinante 3×3 y hallar áreas de paralelogramos.`
    ],
    teoria: [
      { titulo: `Producto punto (producto escalar)`, html: `<p>El <strong>producto punto</strong> de dos vectores <span class="math">a = ⟨a₁, a₂, a₃⟩</span> y <span class="math">b = ⟨b₁, b₂, b₃⟩</span> es el escalar:</p><p><span class="math">a · b = a₁b₁ + a₂b₂ + a₃b₃</span></p><p>Propiedades: conmutativo (<span class="math">a·b = b·a</span>), distributivo (<span class="math">a·(b+c) = a·b + a·c</span>) y <span class="math">a·a = |a|²</span>. El resultado es siempre un número real (escalar), no un vector.</p>` },
      { titulo: `Ángulo entre vectores y ortogonalidad`, html: `<p>El producto punto se relaciona con el ángulo θ entre los vectores:</p><p><span class="math">a · b = |a||b| cos θ</span></p><p>Despejando: <span class="math">cos θ = (a · b) / (|a||b|)</span>, con <span class="math">0 ≤ θ ≤ π</span>.</p><p>Dos vectores son <strong>ortogonales</strong> (perpendiculares) si y solo si <span class="math">a · b = 0</span>, pues <span class="math">cos 90° = 0</span>. Los vectores de base i, j, k son mutuamente ortogonales: <span class="math">i·j = i·k = j·k = 0</span>.</p>` },
      { titulo: `Proyección vectorial`, html: `<p>La <strong>proyección escalar</strong> (componente) de a sobre b es:</p><p><span class="math">comp_b(a) = (a·b) / |b|</span></p><p>La <strong>proyección vectorial</strong> de a sobre b es el vector en la dirección de b con esa magnitud:</p><p><span class="math">proy_b(a) = ((a·b) / |b|²) · b</span></p><p>El complemento perpendicular es <span class="math">a − proy_b(a)</span>, que es ortogonal a b.</p>` },
      { titulo: `Producto cruz (producto vectorial)`, html: `<p>El <strong>producto cruz</strong> de <span class="math">a = ⟨a₁, a₂, a₃⟩</span> y <span class="math">b = ⟨b₁, b₂, b₃⟩</span> produce un vector perpendicular a ambos:</p><p><span class="math">a × b = ⟨a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁⟩</span></p><p>Se calcula con el determinante simbólico <span class="math">a × b = det|i j k; a₁ a₂ a₃; b₁ b₂ b₃|</span>. Es <strong>anticonmutativo</strong>: <span class="math">a × b = −(b × a)</span>.` },
      { titulo: `Magnitud del producto cruz y área`, html: `<p>La magnitud del producto cruz es:</p><p><span class="math">|a × b| = |a||b| sen θ</span></p><p>donde θ es el ángulo entre a y b. Esta magnitud es igual al <strong>área del paralelogramo</strong> generado por a y b. Consecuencia: <span class="math">a × b = 0</span> si y solo si a y b son paralelos (θ = 0 o θ = π, sen θ = 0).</p>` },
      { titulo: `Propiedades y regla de la mano derecha`, html: `<p>Propiedades del producto cruz:</p><ul><li><span class="math">a × a = 0</span></li><li><span class="math">a × b = −b × a</span> (anticonmutativo)</li><li><span class="math">a × (b + c) = a × b + a × c</span></li><li><span class="math">c(a × b) = (ca) × b = a × (cb)</span></li></ul><p>Los vectores de base satisfacen: <span class="math">i × j = k</span>, <span class="math">j × k = i</span>, <span class="math">k × i = j</span>. La dirección de <span class="math">a × b</span> sigue la <strong>regla de la mano derecha</strong>.</p>` },
      { titulo: `Aplicaciones geométricas`, html: `<p>El producto punto y el producto cruz tienen importantes aplicaciones geométricas:</p><ul><li><strong>Producto punto:</strong> determinar ángulos entre vectores, proyecciones, trabajo de una fuerza <span class="math">W = F·d</span>.</li><li><strong>Producto cruz:</strong> área del triángulo (mitad del paralelogramo), torque <span class="math">τ = r × F</span>, vector normal a un plano.</li><li><strong>Producto mixto:</strong> <span class="math">a·(b × c)</span> da el volumen del paralelepípedo.</li></ul>` }
    ],
    formulas: [
      { label: `Producto punto`, html: `<span class="math">a · b = a₁b₁ + a₂b₂ + a₃b₃ = |a||b| cos θ</span>` },
      { label: `Ortogonalidad`, html: `<span class="math">a ⊥ b ⟺ a · b = 0</span>` },
      { label: `Proyección escalar`, html: `<span class="math">comp_b(a) = (a · b) / |b|</span>` },
      { label: `Proyección vectorial`, html: `<span class="math">proy_b(a) = ((a · b) / |b|²) · b</span>` },
      { label: `Producto cruz`, html: `<span class="math">a × b = ⟨a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁⟩</span>` },
      { label: `Magnitud producto cruz`, html: `<span class="math">|a × b| = |a||b| sen θ = Área del paralelogramo</span>` },
      { label: `Ángulo entre vectores`, html: `<span class="math">cos θ = (a · b) / (|a| · |b|)</span>` },
      { label: `Producto mixto`, html: `<span class="math">V = |a · (b × c)|</span> (volumen del paralelepípedo)` }
    ],
    ejemplos: [
      { titulo: `Producto punto y ángulo`,
        enunciado: `Halla el ángulo entre <span class="math">a = ⟨1, 2, 2⟩</span> y <span class="math">b = ⟨3, 0, 4⟩</span>.`,
        pasos: [
          `Producto punto: <span class="math">a · b = 1·3 + 2·0 + 2·4 = 3 + 0 + 8 = 11</span>.`,
          `Magnitudes: <span class="math">|a| = √(1+4+4) = 3</span> y <span class="math">|b| = √(9+0+16) = 5</span>.`,
          `<span class="math">cos θ = 11/(3·5) = 11/15</span>.`,
          `<span class="math">θ = arccos(11/15) ≈ 42.8°</span>.`
        ],
        respuesta: `<span class="math">θ = arccos(11/15) ≈ 42.8°</span>.` },
      { titulo: `Verificar ortogonalidad`,
        enunciado: `Verifica si <span class="math">u = ⟨2, 3, −1⟩</span> y <span class="math">v = ⟨1, 0, 2⟩</span> son ortogonales.`,
        pasos: [
          `Calcula el producto punto: <span class="math">u · v = 2·1 + 3·0 + (−1)·2 = 2 + 0 − 2 = 0</span>.`,
          `Como <span class="math">u · v = 0</span>, los vectores son ortogonales.`
        ],
        respuesta: `Sí, <span class="math">u · v = 0</span>, son ortogonales.` },
      { titulo: `Proyección vectorial`,
        enunciado: `Halla la proyección vectorial de <span class="math">a = ⟨3, 1, −1⟩</span> sobre <span class="math">b = ⟨1, 0, 1⟩</span>.`,
        pasos: [
          `Producto punto: <span class="math">a · b = 3·1 + 1·0 + (−1)·1 = 2</span>.`,
          `<span class="math">|b|² = 1 + 0 + 1 = 2</span>.`,
          `<span class="math">proy_b(a) = (2/2)·⟨1, 0, 1⟩ = ⟨1, 0, 1⟩</span>.`
        ],
        respuesta: `<span class="math">proy_b(a) = ⟨1, 0, 1⟩</span>.` },
      { titulo: `Producto cruz`,
        enunciado: `Calcula <span class="math">a × b</span> con <span class="math">a = ⟨2, 1, 0⟩</span> y <span class="math">b = ⟨0, 3, 1⟩</span>.`,
        pasos: [
          `<span class="math">a × b</span> tiene componente i: <span class="math">1·1 − 0·3 = 1</span>.`,
          `Componente j (con signo negativo): <span class="math">−(2·1 − 0·0) = −2</span>.`,
          `Componente k: <span class="math">2·3 − 1·0 = 6</span>.`,
          `<span class="math">a × b = ⟨1, −2, 6⟩</span>. Verifica: <span class="math">a·(a × b) = 2(1) + 1(−2) + 0(6) = 0</span> ✓.`
        ],
        respuesta: `<span class="math">a × b = ⟨1, −2, 6⟩</span>.` },
      { titulo: `Área del paralelogramo`,
        enunciado: `Halla el área del paralelogramo con lados <span class="math">u = ⟨1, 3, 0⟩</span> y <span class="math">v = ⟨2, 0, 4⟩</span>.`,
        pasos: [
          `<span class="math">u × v = ⟨3·4−0·0, 0·2−1·4, 1·0−3·2⟩ = ⟨12, −4, −6⟩</span>.`,
          `Área = <span class="math">|u × v| = √(144 + 16 + 36) = √196 = 14</span>.`
        ],
        respuesta: `Área = 14 unidades cuadradas.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">a · b</span> con <span class="math">a = ⟨2, 3, 0⟩</span> y <span class="math">b = ⟨1, −1, 4⟩</span>.`,
        pasos: [`<span class="math">a · b = 2·1 + 3·(−1) + 0·4</span>.`, `<span class="math">a · b = 2 − 3 + 0 = −1</span>.`],
        respuesta: `<span class="math">a · b = −1</span>.` },
      { nivel: 'facil',
        enunciado: `Determina si <span class="math">u = ⟨1, 2, −1⟩</span> y <span class="math">v = ⟨2, 0, 2⟩</span> son ortogonales.`,
        pasos: [`<span class="math">u · v = 2 + 0 − 2 = 0</span>.`, `Sí son ortogonales pues el producto punto es cero.`],
        respuesta: `Sí, son ortogonales.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">a · a</span> para <span class="math">a = ⟨3, 4, 0⟩</span>.`,
        pasos: [`<span class="math">a · a = 9 + 16 + 0 = 25</span>.`, `Nótese que <span class="math">a · a = |a|² = 5² = 25</span>.`],
        respuesta: `<span class="math">a · a = 25</span>.` },
      { nivel: 'facil',
        enunciado: `Halla el ángulo entre <span class="math">i = ⟨1,0,0⟩</span> y <span class="math">j = ⟨0,1,0⟩</span>.`,
        pasos: [`<span class="math">i · j = 0</span>.`, `<span class="math">cos θ = 0 ⟹ θ = 90°</span>.`],
        respuesta: `<span class="math">θ = 90°</span>; i y j son ortogonales.` },
      { nivel: 'intermedio',
        enunciado: `Halla el ángulo entre <span class="math">a = ⟨1, 0, 1⟩</span> y <span class="math">b = ⟨1, 1, 0⟩</span>.`,
        pasos: [`<span class="math">a · b = 1 + 0 + 0 = 1</span>.`, `<span class="math">|a| = √2</span> y <span class="math">|b| = √2</span>.`, `<span class="math">cos θ = 1/2 ⟹ θ = 60°</span>.`],
        respuesta: `<span class="math">θ = 60°</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">a × b</span> con <span class="math">a = ⟨1, 0, 0⟩</span> y <span class="math">b = ⟨0, 1, 0⟩</span>.`,
        pasos: [`<span class="math">i × j</span>: componentes <span class="math">⟨0·0−0·1, 0·0−1·0, 1·1−0·0⟩</span>.`, `<span class="math">a × b = ⟨0, 0, 1⟩ = k</span>.`],
        respuesta: `<span class="math">i × j = k = ⟨0, 0, 1⟩</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla la proyección escalar de <span class="math">a = ⟨4, 2, 0⟩</span> sobre <span class="math">b = ⟨3, 0, 0⟩</span>.`,
        pasos: [`<span class="math">a · b = 12</span>.`, `<span class="math">|b| = 3</span>, así <span class="math">comp_b(a) = 12/3 = 4</span>.`],
        respuesta: `<span class="math">comp_b(a) = 4</span>.` },
      { nivel: 'intermedio',
        enunciado: `Calcula <span class="math">|a × b|</span> si <span class="math">|a| = 4</span>, <span class="math">|b| = 3</span> y el ángulo entre ellos es 30°.`,
        pasos: [`<span class="math">|a × b| = |a||b| sen 30°</span>.`, `<span class="math">= 4 · 3 · 0.5 = 6</span>.`],
        respuesta: `<span class="math">|a × b| = 6</span>.` },
      { nivel: 'dificil',
        enunciado: `Halla el vector unitario normal al plano determinado por <span class="math">u = ⟨1, 1, 0⟩</span> y <span class="math">v = ⟨0, 1, 1⟩</span>.`,
        pasos: [`<span class="math">u × v = ⟨1·1−0·1, 0·0−1·1, 1·1−1·0⟩ = ⟨1, −1, 1⟩</span>.`, `<span class="math">|u × v| = √3</span>.`, `<span class="math">n̂ = ⟨1, −1, 1⟩/√3</span>.`],
        respuesta: `<span class="math">n̂ = ⟨1/√3, −1/√3, 1/√3⟩</span>.` },
      { nivel: 'dificil',
        enunciado: `Halla el área del triángulo con vértices <span class="math">A = (0,0,0)</span>, <span class="math">B = (1,2,0)</span> y <span class="math">C = (0,1,2)</span>.`,
        pasos: [`<span class="math">AB = ⟨1,2,0⟩</span> y <span class="math">AC = ⟨0,1,2⟩</span>.`, `<span class="math">AB × AC = ⟨4,−2,1⟩</span>.`, `Área triángulo = <span class="math">|AB × AC|/2 = √21/2</span>.`],
        respuesta: `Área = <span class="math">√21/2 ≈ 2.29</span> u².` },
      { nivel: 'dificil',
        enunciado: `Halla k tal que <span class="math">a = ⟨1, k, 0⟩</span> y <span class="math">b = ⟨2, −3, 1⟩</span> sean ortogonales.`,
        pasos: [`<span class="math">a · b = 2 − 3k + 0 = 0</span>.`, `<span class="math">3k = 2 ⟹ k = 2/3</span>.`],
        respuesta: `<span class="math">k = 2/3</span>.` }
    ],
    teoricas: [
      { q: `¿Qué diferencia hay entre el producto punto y el producto cruz?`, a: `El producto punto produce un escalar y mide la "similitud de dirección" (proyección). El producto cruz produce un vector perpendicular a ambos y su magnitud mide el área del paralelogramo.` },
      { q: `¿Por qué el producto punto es cero si los vectores son perpendiculares?`, a: `Porque <span class="math">a · b = |a||b| cos θ</span> y <span class="math">cos 90° = 0</span>, así que el producto es cero independientemente de las magnitudes.` },
      { q: `¿Por qué el producto cruz es anticonmutativo?`, a: `Porque al cambiar el orden de los factores se invierte la dirección del vector resultante: <span class="math">b × a = −(a × b)</span>. Geométricamente, la regla de la mano derecha produce vectores opuestos.` },
      { q: `¿Cuándo el producto cruz de dos vectores es el vector cero?`, a: `Cuando los vectores son paralelos (θ = 0° o θ = 180°), pues <span class="math">|a × b| = |a||b| sen θ = 0</span>. Esto incluye el caso <span class="math">a × a = 0</span>.` },
      { q: `¿Para qué sirve la proyección vectorial en la práctica?`, a: `Se usa en física para descomponer fuerzas en componentes paralela y perpendicular a una superficie, en gráficos computacionales para iluminación (componente de la luz en dirección de la normal), y en estadística para regresión lineal.` },
      { q: `¿Cómo se usa el producto punto para verificar si un punto está en un plano?`, a: `Un punto P está en el plano si el vector desde cualquier punto del plano hasta P es ortogonal al vector normal n. Es decir, <span class="math">(P − P₀) · n = 0</span>, que es la ecuación del plano.` },
      { q: `¿Cuál es la diferencia geométrica entre área del paralelogramo y área del triángulo?`, a: `El área del paralelogramo formado por a y b es <span class="math">|a × b|</span>. El área del triángulo con esos dos lados es la mitad: <span class="math">|a × b|/2</span>, pues el triángulo es exactamente la mitad del paralelogramo.` }
    ],
    errores: [
      `Confundir producto punto (resultado escalar) con producto cruz (resultado vector). La notación distingue: · para punto, × para cruz.`,
      `Cambiar el orden en el producto cruz sin cambiar el signo. <span class="math">b × a = −(a × b)</span>; intercambiar factores invierte la dirección.`,
      `Aplicar <span class="math">a · b = 0</span> para concluir que los vectores son nulos. Dos vectores no nulos pueden tener producto punto cero si son ortogonales.`,
      `Usar la fórmula de ℝ² para el producto cruz: el producto cruz está definido solo en ℝ³. En ℝ² no existe como tal (hay una versión escalar del módulo).`
    ],
    aplicacion: { titulo: `Torque de una llave de tuercas`, html: `<p>Una llave ejerce una fuerza <span class="math">F = ⟨0, −20, 0⟩</span> N en el extremo de un brazo <span class="math">r = ⟨0.3, 0, 0⟩</span> m desde el pivote.</p><ol><li>Torque: <span class="math">τ = r × F</span>.</li><li><span class="math">τ = ⟨0·0−0·(−20), 0·0−0.3·0, 0.3·(−20)−0·0⟩ = ⟨0, 0, −6⟩</span> N·m.</li><li>Magnitud del torque: <span class="math">|τ| = 6</span> N·m.</li><li>La dirección <span class="math">−k</span> indica rotación en sentido horario.</li></ol><p>El cálculo de torque mediante el producto cruz es fundamental en mecánica, robótica e ingeniería estructural para analizar fuerzas rotacionales.</p>` },
    calc: 'punto-cruz',
    examen: [
      { tipo: 'num', q: `Calcula <span class="math">a · b</span> con <span class="math">a = ⟨1, 2, 3⟩</span> y <span class="math">b = ⟨4, 0, −1⟩</span>.`, r: 1, tol: 0.01, pasos: [`<span class="math">a · b = 1·4 + 2·0 + 3·(−1)</span>.`, `<span class="math">= 4 + 0 − 3 = 1</span>.`] },
      { tipo: 'num', q: `Halla <span class="math">cos θ</span> entre <span class="math">a = ⟨1, 0, 0⟩</span> y <span class="math">b = ⟨1, 1, 0⟩</span>. Redondea a 4 decimales.`, r: 0.7071, tol: 0.001, pasos: [`<span class="math">a · b = 1</span>, <span class="math">|a| = 1</span>, <span class="math">|b| = √2</span>.`, `<span class="math">cos θ = 1/√2 ≈ 0.7071</span>.`] },
      { tipo: 'opt', q: `¿Cuál es el resultado de <span class="math">a · b</span> si a y b son perpendiculares?`, opciones: [`1`, `0`, `−1`, `|a||b|`], correcta: 1, pasos: [`<span class="math">a · b = |a||b| cos 90°</span>.`, `<span class="math">cos 90° = 0</span>, así el producto punto es 0.`] },
      { tipo: 'num', q: `Calcula la primera componente de <span class="math">a × b</span> con <span class="math">a = ⟨2, 3, 0⟩</span> y <span class="math">b = ⟨0, 1, 4⟩</span>.`, r: 12, tol: 0.01, pasos: [`Primera componente: <span class="math">a₂b₃ − a₃b₂ = 3·4 − 0·1</span>.`, `<span class="math">= 12</span>.`] },
      { tipo: 'num', q: `Halla <span class="math">|a × b|</span> si <span class="math">|a| = 3</span>, <span class="math">|b| = 4</span> y el ángulo entre ellos es 90°.`, r: 12, tol: 0.01, pasos: [`<span class="math">|a × b| = |a||b| sen 90°</span>.`, `<span class="math">= 3·4·1 = 12</span>.`] },
      { tipo: 'opt', q: `¿Qué ocurre con el producto cruz <span class="math">a × a</span>?`, opciones: [`<span class="math">|a|²</span>`, `0 (vector cero)`, `<span class="math">2a</span>`, `1 (escalar)`], correcta: 1, pasos: [`El ángulo entre a y sí mismo es 0°.`, `<span class="math">|a × a| = |a||a| sen 0° = 0</span>, así <span class="math">a × a = 0</span>.`] },
      { tipo: 'num', q: `Halla la proyección escalar de <span class="math">a = ⟨6, 0, 0⟩</span> sobre <span class="math">b = ⟨3, 4, 0⟩</span>.`, r: 3.6, tol: 0.01, pasos: [`<span class="math">a · b = 18</span>, <span class="math">|b| = 5</span>.`, `<span class="math">comp_b(a) = 18/5 = 3.6</span>.`] },
      { tipo: 'num', q: `Calcula <span class="math">a · b</span> para <span class="math">a = ⟨2, −1, 3⟩</span> y <span class="math">b = ⟨1, 4, 2⟩</span>.`, r: 4, tol: 0.01, pasos: [`<span class="math">a · b = 2·1 + (−1)·4 + 3·2</span>.`, `<span class="math">= 2 − 4 + 6 = 4</span>.`] },
      { tipo: 'opt', q: `Si <span class="math">a × b = ⟨0, 0, 5⟩</span>, ¿qué podemos decir de a y b?`, opciones: [`Son paralelos`, `Son perpendiculares entre sí`, `a × b da el ángulo entre ellos`, `Son ortogonales al vector k`], correcta: 1, pasos: [`El producto cruz es perpendicular a ambos vectores.`, `<span class="math">a × b ≠ 0</span> indica que a y b no son paralelos, y el resultado es perpendicular a ambos.`] },
      { tipo: 'num', q: `Halla el área del paralelogramo con lados <span class="math">a = ⟨2, 0, 0⟩</span> y <span class="math">b = ⟨0, 3, 0⟩</span>.`, r: 6, tol: 0.01, pasos: [`<span class="math">a × b = ⟨0·0−0·3, 0·0−2·0, 2·3−0·0⟩ = ⟨0, 0, 6⟩</span>.`, `Área = <span class="math">|a × b| = 6</span>.`] }
    ]
  };

  /* ───────────────────────────────────────────────────────── 1.24 */
  T['1.24'] = {
    id: '1.24',
    unidad: 5,
    titulo: `Rectas y Planos en ℝ³`,
    resumen: `Escribirás ecuaciones vectoriales, paramétricas y cartesianas de rectas y planos, y calcularás distancias punto–plano e intersecciones.`,
    objetivos: [
      `Escribir la ecuación vectorial y paramétrica de una recta en ℝ³ dado un punto y un vector dirección.`,
      `Determinar la ecuación del plano dado un punto y un vector normal, o tres puntos.`,
      `Calcular la distancia de un punto a un plano usando la fórmula con el vector normal.`,
      `Hallar la intersección de una recta con un plano sustituyendo las ecuaciones paramétricas.`
    ],
    teoria: [
      { titulo: `Ecuación vectorial de la recta`, html: `<p>La recta que pasa por el punto <span class="math">P₀ = (x₀, y₀, z₀)</span> con vector dirección <span class="math">d = ⟨a, b, c⟩</span> se escribe:</p><p><span class="math">r(t) = r₀ + t·d = ⟨x₀ + ta, y₀ + tb, z₀ + tc⟩</span></p><p>donde <span class="math">t ∈ ℝ</span> es el parámetro. Al variar t, el punto r(t) recorre todos los puntos de la recta. En t = 0 se obtiene el punto P₀.</p>` },
      { titulo: `Ecuaciones paramétricas y simétricas de la recta`, html: `<p>Separando componentes de la ecuación vectorial:</p><p><span class="math">x = x₀ + ta,  y = y₀ + tb,  z = z₀ + tc</span></p><p>Si a, b, c ≠ 0, se puede eliminar t para obtener las <strong>ecuaciones simétricas</strong>:</p><p><span class="math">(x − x₀)/a = (y − y₀)/b = (z − z₀)/c</span></p><p>El vector dirección se puede cambiar por cualquier múltiplo escalar no nulo y se obtiene la misma recta.</p>` },
      { titulo: `Ecuación del plano`, html: `<p>El plano que pasa por <span class="math">P₀ = (x₀, y₀, z₀)</span> con vector normal <span class="math">n = ⟨a, b, c⟩</span> satisface:</p><p><span class="math">a(x − x₀) + b(y − y₀) + c(z − z₀) = 0</span></p><p>o equivalentemente: <span class="math">ax + by + cz = d</span> donde <span class="math">d = ax₀ + by₀ + cz₀</span>. El vector normal n es perpendicular a todos los vectores que yacen en el plano.</p>` },
      { titulo: `Plano por tres puntos`, html: `<p>Dados tres puntos no colineales A, B, C, se construyen dos vectores en el plano: <span class="math">AB = B − A</span> y <span class="math">AC = C − A</span>. El vector normal es <span class="math">n = AB × AC</span> (producto cruz). Luego se usa la ecuación del plano con el punto A.</p>` },
      { titulo: `Distancia punto–plano`, html: `<p>La distancia del punto <span class="math">Q = (x₁, y₁, z₁)</span> al plano <span class="math">ax + by + cz = d</span> es:</p><p><span class="math">dist = |ax₁ + by₁ + cz₁ − d| / √(a² + b² + c²)</span></p><p>El numerador es el valor absoluto del "residuo" al sustituir Q en la ecuación del plano. El denominador es la magnitud del vector normal.</p>` },
      { titulo: `Intersección de recta y plano`, html: `<p>Para hallar la intersección de la recta paramétrica <span class="math">r(t) = ⟨x₀+ta, y₀+tb, z₀+tc⟩</span> con el plano <span class="math">Ax + By + Cz = D</span>:</p><ol><li>Sustituye las ecuaciones paramétricas en la ecuación del plano.</li><li>Resuelve para t.</li><li>Sustituye el valor de t en las ecuaciones paramétricas para obtener el punto de intersección.</li></ol><p>Si el denominador es cero al resolver para t, la recta es paralela al plano.</p>` },
      { titulo: `Posiciones relativas entre rectas y planos`, html: `<p>Recta y plano:</p><ul><li>La recta intersecta el plano en un punto si <span class="math">d · n ≠ 0</span>.</li><li>La recta es paralela al plano si <span class="math">d · n = 0</span> y el punto P₀ no está en el plano.</li><li>La recta está en el plano si <span class="math">d · n = 0</span> y P₀ está en el plano.</li></ul><p>Dos planos son paralelos si sus normales son paralelas, y se cortan en una recta si las normales no son paralelas.</p>` }
    ],
    formulas: [
      { label: `Ecuación vectorial de recta`, html: `<span class="math">r(t) = r₀ + t·d</span>` },
      { label: `Ecuaciones paramétricas`, html: `<span class="math">x = x₀ + ta,  y = y₀ + tb,  z = z₀ + tc</span>` },
      { label: `Ecuación simétricas de recta`, html: `<span class="math">(x−x₀)/a = (y−y₀)/b = (z−z₀)/c</span>` },
      { label: `Ecuación del plano`, html: `<span class="math">a(x−x₀) + b(y−y₀) + c(z−z₀) = 0</span>` },
      { label: `Plano en forma general`, html: `<span class="math">ax + by + cz = d</span>, normal <span class="math">n = ⟨a, b, c⟩</span>` },
      { label: `Distancia punto–plano`, html: `<span class="math">dist = |ax₁ + by₁ + cz₁ − d| / √(a² + b² + c²)</span>` },
      { label: `Normal al plano por tres puntos`, html: `<span class="math">n = AB × AC</span>` },
      { label: `Recta paralela al plano`, html: `<span class="math">d · n = 0</span> (vector dirección ortogonal a la normal)` }
    ],
    ejemplos: [
      { titulo: `Ecuación paramétrica de una recta`,
        enunciado: `Escribe las ecuaciones paramétricas de la recta que pasa por <span class="math">P₀ = (1, −2, 3)</span> con dirección <span class="math">d = ⟨2, 1, −1⟩</span>.`,
        pasos: [
          `Usando la fórmula <span class="math">r(t) = r₀ + t·d</span>:`,
          `<span class="math">x = 1 + 2t</span>, <span class="math">y = −2 + t</span>, <span class="math">z = 3 − t</span>.`,
          `Verificación en t = 0: punto <span class="math">(1, −2, 3) = P₀</span>. ✓`
        ],
        respuesta: `<span class="math">x = 1 + 2t, y = −2 + t, z = 3 − t</span>.` },
      { titulo: `Ecuación del plano`,
        enunciado: `Halla la ecuación del plano que pasa por <span class="math">P₀ = (2, 0, −1)</span> con normal <span class="math">n = ⟨3, −1, 4⟩</span>.`,
        pasos: [
          `Aplica: <span class="math">3(x−2) + (−1)(y−0) + 4(z+1) = 0</span>.`,
          `Expande: <span class="math">3x − 6 − y + 4z + 4 = 0</span>.`,
          `Simplifica: <span class="math">3x − y + 4z = 2</span>.`
        ],
        respuesta: `<span class="math">3x − y + 4z = 2</span>.` },
      { titulo: `Distancia punto–plano`,
        enunciado: `Halla la distancia del punto <span class="math">Q = (1, 2, 3)</span> al plano <span class="math">2x − y + 2z = 4</span>.`,
        pasos: [
          `Sustituye Q en el numerador: <span class="math">|2(1) − 1(2) + 2(3) − 4| = |2 − 2 + 6 − 4| = |2| = 2</span>.`,
          `Denominador: <span class="math">√(4 + 1 + 4) = 3</span>.`,
          `Distancia: <span class="math">2/3</span>.`
        ],
        respuesta: `<span class="math">dist = 2/3</span>.` },
      { titulo: `Plano por tres puntos`,
        enunciado: `Halla el plano que pasa por <span class="math">A = (1,0,0)</span>, <span class="math">B = (0,2,0)</span> y <span class="math">C = (0,0,3)</span>.`,
        pasos: [
          `<span class="math">AB = ⟨−1,2,0⟩</span> y <span class="math">AC = ⟨−1,0,3⟩</span>.`,
          `<span class="math">n = AB × AC = ⟨2·3−0·0, 0·(−1)−(−1)·3, (−1)·0−2·(−1)⟩ = ⟨6, 3, 2⟩</span>.`,
          `Ecuación usando A: <span class="math">6(x−1) + 3y + 2z = 0</span>, es decir <span class="math">6x + 3y + 2z = 6</span>.`
        ],
        respuesta: `<span class="math">6x + 3y + 2z = 6</span>.` },
      { titulo: `Intersección recta–plano`,
        enunciado: `Halla la intersección de <span class="math">r(t) = ⟨1+t, 2−t, 3t⟩</span> con el plano <span class="math">x + y + z = 4</span>.`,
        pasos: [
          `Sustituye: <span class="math">(1+t) + (2−t) + (3t) = 4</span>.`,
          `Simplifica: <span class="math">3 + 3t = 4 ⟹ t = 1/3</span>.`,
          `Punto: <span class="math">r(1/3) = ⟨4/3, 5/3, 1⟩</span>.`
        ],
        respuesta: `Punto de intersección: <span class="math">(4/3, 5/3, 1)</span>.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Escribe la ecuación vectorial de la recta que pasa por <span class="math">(0,0,0)</span> con dirección <span class="math">⟨1,2,3⟩</span>.`,
        pasos: [`<span class="math">r(t) = t·⟨1,2,3⟩</span>.`, `O equivalente: <span class="math">r(t) = ⟨t, 2t, 3t⟩</span>.`],
        respuesta: `<span class="math">r(t) = ⟨t, 2t, 3t⟩</span>.` },
      { nivel: 'facil',
        enunciado: `Escribe la ecuación del plano <span class="math">z = 5</span> en forma general con vector normal.`,
        pasos: [`El plano <span class="math">z = 5</span> tiene normal <span class="math">n = ⟨0,0,1⟩</span>.`, `Ecuación: <span class="math">0·x + 0·y + 1·z = 5</span>.`],
        respuesta: `<span class="math">z = 5</span> con normal <span class="math">n = k</span>.` },
      { nivel: 'facil',
        enunciado: `¿Está el punto <span class="math">(1, 2, 3)</span> en el plano <span class="math">x + y + z = 6</span>?`,
        pasos: [`Sustituye: <span class="math">1 + 2 + 3 = 6</span>.`, `Sí, el punto satisface la ecuación del plano.`],
        respuesta: `Sí, el punto está en el plano.` },
      { nivel: 'facil',
        enunciado: `Halla la ecuación del plano con normal <span class="math">n = ⟨2, −3, 1⟩</span> que pasa por el origen.`,
        pasos: [`Usando <span class="math">P₀ = (0,0,0)</span>: <span class="math">2x − 3y + z = 0</span>.`, `No es necesario calcular d pues d = 0 cuando P₀ es el origen.`],
        respuesta: `<span class="math">2x − 3y + z = 0</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla la distancia del origen al plano <span class="math">3x + 4y = 15</span>.`,
        pasos: [`Fórmula: <span class="math">dist = |3·0 + 4·0 + 0 − 15|/√(9+16+0)</span>.`, `<span class="math">= 15/5 = 3</span>.`],
        respuesta: `<span class="math">dist = 3</span>.` },
      { nivel: 'intermedio',
        enunciado: `Escribe las ecuaciones paramétricas de la recta que pasa por <span class="math">(2,1,−1)</span> y <span class="math">(4,3,0)</span>.`,
        pasos: [`Dirección: <span class="math">d = ⟨4−2, 3−1, 0−(−1)⟩ = ⟨2, 2, 1⟩</span>.`, `<span class="math">x = 2+2t, y = 1+2t, z = −1+t</span>.`],
        respuesta: `<span class="math">x = 2+2t, y = 1+2t, z = −1+t</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla la ecuación del plano con normal <span class="math">⟨1, 1, 1⟩</span> que pasa por <span class="math">(2, 0, 0)</span>.`,
        pasos: [`<span class="math">(x−2) + y + z = 0</span>.`, `<span class="math">x + y + z = 2</span>.`],
        respuesta: `<span class="math">x + y + z = 2</span>.` },
      { nivel: 'intermedio',
        enunciado: `Determina si la recta <span class="math">r(t) = ⟨t, 2t, 3t⟩</span> intersecta el plano <span class="math">x + y + z = 6</span> y halla el punto.`,
        pasos: [`Sustituye: <span class="math">t + 2t + 3t = 6 ⟹ 6t = 6 ⟹ t = 1</span>.`, `Punto: <span class="math">r(1) = ⟨1, 2, 3⟩</span>.`],
        respuesta: `Intersecta en <span class="math">(1, 2, 3)</span>.` },
      { nivel: 'dificil',
        enunciado: `Halla el plano que pasa por <span class="math">A = (1,0,0)</span>, <span class="math">B = (0,1,0)</span>, <span class="math">C = (0,0,1)</span>.`,
        pasos: [`<span class="math">AB = ⟨−1,1,0⟩</span>, <span class="math">AC = ⟨−1,0,1⟩</span>.`, `<span class="math">n = AB × AC = ⟨1,1,1⟩</span>.`, `Plano: <span class="math">x + y + z = 1</span>.`],
        respuesta: `<span class="math">x + y + z = 1</span>.` },
      { nivel: 'dificil',
        enunciado: `Halla la distancia del punto <span class="math">(2, 3, 4)</span> al plano <span class="math">x + 2y − 2z = 1</span>.`,
        pasos: [`Numerador: <span class="math">|2 + 6 − 8 − 1| = |−1| = 1</span>.`, `Denominador: <span class="math">√(1+4+4) = 3</span>.`, `Distancia: <span class="math">1/3</span>.`],
        respuesta: `<span class="math">dist = 1/3</span>.` },
      { nivel: 'dificil',
        enunciado: `Determina si los planos <span class="math">2x − y + 3z = 4</span> y <span class="math">4x − 2y + 6z = 8</span> son paralelos o el mismo plano.`,
        pasos: [`Normal del segundo: <span class="math">⟨4, −2, 6⟩ = 2·⟨2, −1, 3⟩</span> (paralela a la primera).`, `Punto <span class="math">(2,0,0)</span> satisface ambas ecuaciones: <span class="math">4 = 4</span> y <span class="math">8 = 8</span>.`, `Son el mismo plano (el segundo es el doble del primero).`],
        respuesta: `Son el mismo plano.` }
    ],
    teoricas: [
      { q: `¿Por qué la ecuación del plano necesita un vector normal?`, a: `Porque la ecuación <span class="math">n · (r − r₀) = 0</span> expresa que cualquier vector del plano es perpendicular a la normal. Es la condición de ortogonalidad que define geométricamente el plano.` },
      { q: `¿Qué papel juega el parámetro t en la ecuación vectorial de la recta?`, a: `t recorre todos los números reales y genera todos los puntos de la recta. Para t = 0 se obtiene el punto base P₀. Los valores positivos y negativos de t generan los dos "sentidos" de la recta.` },
      { q: `¿Cómo se sabe si una recta es paralela a un plano?`, a: `La recta es paralela al plano cuando el vector dirección d es ortogonal a la normal del plano: <span class="math">d · n = 0</span>. Si además P₀ no está en el plano, la recta es paralela; si P₀ está en el plano, la recta está contenida en él.` },
      { q: `¿Por qué la fórmula de distancia punto–plano usa el valor absoluto?`, a: `Porque la distancia es siempre no negativa. El numerador <span class="math">ax₁ + by₁ + cz₁ − d</span> puede ser positivo o negativo según en qué "lado" del plano esté el punto; el valor absoluto asegura que el resultado sea positivo.` },
      { q: `¿Cómo se obtiene el vector dirección de la recta que intersecta dos planos?`, a: `El vector dirección es el producto cruz de las normales de los dos planos: <span class="math">d = n₁ × n₂</span>. Esto se debe a que la recta es simultáneamente perpendicular a ambas normales.` },
      { q: `¿Pueden dos rectas distintas en ℝ³ no intersectarse y no ser paralelas?`, a: `Sí. Se llaman rectas <strong>alabeadas</strong> (skew lines). Existen en ℝ³ cuando no son paralelas (d₁ ≠ c·d₂) ni coplanares. No ocurre en ℝ².` },
      { q: `¿Por qué el plano por tres puntos se construye con el producto cruz?`, a: `Porque el producto cruz de dos vectores en el plano produce un vector perpendicular a ambos, que por definición es normal al plano. Luego se usa ese vector normal con uno de los tres puntos para escribir la ecuación.` }
    ],
    errores: [
      `Confundir el vector dirección de la recta con el vector normal del plano. Para la recta se usa d (cualquier vector no nulo paralelo a la recta); para el plano se usa n (perpendicular a todos los vectores en el plano).`,
      `No aplicar el valor absoluto en la fórmula de distancia punto–plano. Olvidar el valor absoluto puede dar una distancia negativa, que no tiene sentido geométrico.`,
      `Usar el mismo punto dos veces al construir el plano por tres puntos. Los tres vectores AB y AC deben provenir de puntos diferentes para generar el plano correcto.`,
      `Olvidar que si la recta es paralela al plano (<span class="math">d · n = 0</span>), no hay punto de intersección (o la recta está contenida en el plano), y no se debe continuar despejando t de una ecuación sin solución.`
    ],
    aplicacion: { titulo: `Distancia de un avión a una pista de aterrizaje`, html: `<p>El suelo de una pista de aterrizaje se modela como el plano <span class="math">z = 0</span> (ecuación <span class="math">0·x + 0·y + z = 0</span>). Un avión está en la posición <span class="math">P = (1500, 2000, 800)</span> metros.</p><ol><li>Distancia al plano <span class="math">z = 0</span>: <span class="math">dist = |0 + 0 + 800 − 0|/√(0+0+1) = 800</span> m.</li><li>El controlador quiere que el avión descienda 400 m: nueva altitud z = 400 m.</li><li>Trayectoria de descenso: <span class="math">r(t) = ⟨1500, 2000, 800−400t⟩</span>; en t = 1 llega a z = 400.</li></ol><p>Las ecuaciones de rectas y planos son la base de los sistemas de guiado de aeronaves (ILS, GPS diferencial) y la geometría de pistas de aterrizaje.</p>` },
    calc: 'recta-plano',
    examen: [
      { tipo: 'num', q: `La recta <span class="math">r(t) = ⟨1+t, 2−t, 3t⟩</span> intersecta el plano <span class="math">x + y + z = 6</span>. Halla el valor de t en la intersección.`, r: 1, tol: 0.01, pasos: [`Sustituye: <span class="math">(1+t) + (2−t) + 3t = 6</span>.`, `<span class="math">3 + 3t = 6 ⟹ t = 1</span>.`] },
      { tipo: 'num', q: `Halla la distancia del origen <span class="math">(0,0,0)</span> al plano <span class="math">x + y + z = 3</span>.`, r: 1.732, tol: 0.01, pasos: [`Numerador: <span class="math">|0 + 0 + 0 − 3| = 3</span>.`, `Denominador: <span class="math">√(1+1+1) = √3 ≈ 1.732</span>.`] },
      { tipo: 'opt', q: `¿Cuál es el vector normal al plano <span class="math">2x − 3y + z = 7</span>?`, opciones: [`<span class="math">⟨7, 7, 7⟩</span>`, `<span class="math">⟨2, −3, 1⟩</span>`, `<span class="math">⟨1, 1, 1⟩</span>`, `<span class="math">⟨−2, 3, −1⟩</span>`], correcta: 1, pasos: [`El vector normal es el vector de los coeficientes de x, y, z.`, `<span class="math">n = ⟨2, −3, 1⟩</span>.`] },
      { tipo: 'num', q: `¿En qué valor de t la recta <span class="math">r(t) = ⟨t, t, t⟩</span> corta el plano <span class="math">3x = 9</span>?`, r: 3, tol: 0.01, pasos: [`Primera componente <span class="math">x = t</span>, así <span class="math">3t = 9</span>.`, `<span class="math">t = 3</span>.`] },
      { tipo: 'opt', q: `La recta <span class="math">r(t) = ⟨1, 2, 3⟩ + t⟨1, 1, 1⟩</span> y el plano <span class="math">x + y + z = 10</span>. ¿Intersectan?`, opciones: [`No, son paralelos`, `Sí, en <span class="math">(2, 3, 4)</span>`, `La recta está en el plano`, `No hay suficiente información`], correcta: 1, pasos: [`Sustituye: <span class="math">(1+t)+(2+t)+(3+t) = 10 ⟹ 6+3t = 10 ⟹ t = 4/3</span>.`, `Punto: <span class="math">⟨7/3, 10/3, 13/3⟩</span>. Intersectan.`] },
      { tipo: 'num', q: `Halla la distancia del punto <span class="math">(3, 0, 0)</span> al plano <span class="math">x = 1</span>.`, r: 2, tol: 0.01, pasos: [`El plano <span class="math">x = 1</span> tiene ecuación <span class="math">x + 0·y + 0·z = 1</span>.`, `<span class="math">dist = |3 − 1|/√1 = 2</span>.`] },
      { tipo: 'num', q: `Halla la coordenada z del punto en la recta <span class="math">r(t) = ⟨2+t, 1−t, 4+2t⟩</span> cuando t = 2.`, r: 8, tol: 0.01, pasos: [`<span class="math">z = 4 + 2·2</span>.`, `<span class="math">z = 8</span>.`] },
      { tipo: 'num', q: `Calcula la distancia del punto <span class="math">(0, 0, 5)</span> al plano <span class="math">x + y + z = 0</span>.`, r: 2.887, tol: 0.01, pasos: [`Numerador: <span class="math">|0 + 0 + 5 − 0| = 5</span>.`, `Denominador: <span class="math">√3 ≈ 1.732</span>. Distancia: <span class="math">5/√3 ≈ 2.887</span>.`] },
      { tipo: 'opt', q: `¿Qué indica <span class="math">d · n = 0</span> en la relación recta-plano?`, opciones: [`La recta intersecta el plano en el origen`, `La recta es paralela al plano (o está en él)`, `La recta es normal al plano`, `El plano es el plano xy`], correcta: 1, pasos: [`<span class="math">d · n = 0</span> significa que d es perpendicular a la normal.`, `Un vector perpendicular a la normal yace en el plano, así la recta es paralela o está contenida en él.`] },
      { tipo: 'num', q: `La recta con dirección <span class="math">⟨2, 1, −1⟩</span> pasa por <span class="math">(0,0,0)</span> e intersecta el plano <span class="math">2x + y − z = 6</span>. Halla t.`, r: 1, tol: 0.01, pasos: [`Sustituye <span class="math">x=2t, y=t, z=−t</span>: <span class="math">4t + t + t = 6t = 6</span>.`, `<span class="math">t = 1</span>.`] }
    ]
  };

})();

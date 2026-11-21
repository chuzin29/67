/* data-3a-u2.js — Unidad 2: Trigonometría y números complejos */
(function () {
  var T = (window.CURSO_3A = window.CURSO_3A || { temas: {} }).temas;

  T['1.6'] = {
    id: '1.6',
    unidad: 2,
    titulo: 'Funciones trigonométricas e identidades',
    resumen: `Dominarás el círculo unitario, los radianes y las identidades (pitagóricas, suma, ángulo doble) para simplificar y resolver ecuaciones.`,
    objetivos: [
      `Convertir ángulos entre grados y radianes y ubicarlos en el círculo unitario.`,
      `Calcular los valores exactos de sen, cos y tan de los ángulos notables usando ángulos de referencia y signos por cuadrante.`,
      `Aplicar las identidades pitagóricas, de suma y diferencia, y de ángulo doble para simplificar expresiones y demostrar igualdades.`,
      `Resolver ecuaciones trigonométricas en un intervalo dado, descartando soluciones extrañas.`
    ],
    teoria: [
      { titulo: `El círculo unitario`, html: `<p>Considera la circunferencia de radio 1 con centro en el origen: <span class="math">x² + y² = 1</span>. Si partes del punto (1, 0) y giras en sentido contrario a las agujas del reloj un ángulo θ, llegas a un punto P(x, y) de la circunferencia. Se define:</p><p><span class="math">cos θ = x</span>, &nbsp; <span class="math">sen θ = y</span>, &nbsp; <span class="math">tan θ = y/x</span> (si x ≠ 0)</p><p>Las otras tres funciones son recíprocas: <span class="math">sec θ = 1/cos θ</span>, <span class="math">csc θ = 1/sen θ</span>, <span class="math">cot θ = cos θ/sen θ</span>.</p><p>Esta definición vale para <em>cualquier</em> ángulo (mayor que 90°, negativo, de varias vueltas), y no solo para los triángulos rectángulos. En un triángulo rectángulo con hipotenusa h, cateto opuesto o y cateto adyacente a, recuperas <span class="math">sen θ = o/h</span>, <span class="math">cos θ = a/h</span>, <span class="math">tan θ = o/a</span>.</p>` },
      { titulo: `Grados y radianes`, html: `<p>Un <strong>radián</strong> es el ángulo que abarca, sobre una circunferencia, un arco de longitud igual al radio. Como la circunferencia mide <span class="math">2π</span> radios, una vuelta completa son <span class="math">2π</span> rad = 360°. De ahí:</p><p><span class="math">π rad = 180°</span>, &nbsp; <span class="math">rad = grados · π/180</span>, &nbsp; <span class="math">grados = rad · 180/π</span></p><p>Equivalencias que debes saber de memoria: 30° = <span class="math">π/6</span>, 45° = <span class="math">π/4</span>, 60° = <span class="math">π/3</span>, 90° = <span class="math">π/2</span>, 180° = π, 270° = <span class="math">3π/2</span>, 360° = 2π.</p><p>En Cálculo se trabaja <strong>siempre en radianes</strong>: las fórmulas de límites y derivadas de sen y cos (temas 1.7 y 1.13) solo son tan simples si el ángulo está en radianes. Además, la longitud de arco es simplemente <span class="math">s = rθ</span>.</p>` },
      { titulo: `Valores exactos de los ángulos notables`, html: `<p>Memoriza esta tabla del primer cuadrante (se deduce de los triángulos 30°-60°-90° y 45°-45°-90°):</p><table><tr><th>θ</th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr><tr><td>sen θ</td><td>0</td><td><span class="math">1/2</span></td><td><span class="math">√2/2</span></td><td><span class="math">√3/2</span></td><td>1</td></tr><tr><td>cos θ</td><td>1</td><td><span class="math">√3/2</span></td><td><span class="math">√2/2</span></td><td><span class="math">1/2</span></td><td>0</td></tr><tr><td>tan θ</td><td>0</td><td><span class="math">√3/3</span></td><td>1</td><td><span class="math">√3</span></td><td>no existe</td></tr></table><p>Truco: los senos de 0°, 30°, 45°, 60°, 90° son <span class="math">√0/2, √1/2, √2/2, √3/2, √4/2</span>; los cosenos van en orden inverso.</p>` },
      { titulo: `Ángulo de referencia y signos por cuadrante`, html: `<p>Para un ángulo cualquiera, su <strong>ángulo de referencia</strong> es el ángulo agudo que forma su lado final con el eje x. El valor de la función es el del ángulo de referencia, con el signo del cuadrante:</p><table><tr><th>Cuadrante</th><th>I</th><th>II</th><th>III</th><th>IV</th></tr><tr><td>Positivas</td><td>todas</td><td>sen (csc)</td><td>tan (cot)</td><td>cos (sec)</td></tr></table><p>Procedimiento: (1) ubica el cuadrante; (2) halla el ángulo de referencia (en II: 180° − θ; en III: θ − 180°; en IV: 360° − θ); (3) toma el valor notable y ponle el signo.</p><p>Ejemplo: <span class="math">sen 150°</span> está en II, referencia 30°, seno positivo: <span class="math">sen 150° = 1/2</span>.</p>` },
      { titulo: `Identidades fundamentales`, html: `<p>Una <strong>identidad</strong> es una igualdad que se cumple para todos los valores donde ambos lados están definidos. Las básicas salen del círculo unitario:</p><ul><li><strong>Pitagórica:</strong> <span class="math">sen²θ + cos²θ = 1</span> (porque <span class="math">x² + y² = 1</span>).</li><li>Dividiendo entre <span class="math">cos²θ</span>: <span class="math">1 + tan²θ = sec²θ</span>.</li><li>Dividiendo entre <span class="math">sen²θ</span>: <span class="math">1 + cot²θ = csc²θ</span>.</li><li><strong>Cociente:</strong> <span class="math">tan θ = sen θ/cos θ</span>.</li><li><strong>Paridad:</strong> <span class="math">sen(−θ) = −sen θ</span>, <span class="math">cos(−θ) = cos θ</span>, <span class="math">tan(−θ) = −tan θ</span>.</li><li><strong>Periodicidad:</strong> sen y cos repiten cada <span class="math">2π</span>; tan repite cada π.</li></ul><p>Con la pitagórica, si conoces una función y el cuadrante, obtienes las demás: <span class="math">cos θ = ±√(1 − sen²θ)</span>, eligiendo el signo por el cuadrante.</p>` },
      { titulo: `Identidades de suma, diferencia y ángulo doble`, html: `<p><strong>Suma y diferencia:</strong></p><p><span class="math">sen(α ± β) = sen α cos β ± cos α sen β</span></p><p><span class="math">cos(α ± β) = cos α cos β ∓ sen α sen β</span></p><p><span class="math">tan(α ± β) = (tan α ± tan β)/(1 ∓ tan α tan β)</span></p><p>Ojo con el signo de cos: en la suma es "menos" y en la diferencia es "más".</p><p><strong>Ángulo doble</strong> (haz β = α en la suma):</p><p><span class="math">sen 2α = 2 sen α cos α</span></p><p><span class="math">cos 2α = cos²α − sen²α = 2cos²α − 1 = 1 − 2sen²α</span></p><p><span class="math">tan 2α = 2 tan α/(1 − tan²α)</span></p><p><strong>Reducción de potencias</strong> (despejando de las formas de cos 2α): <span class="math">sen²α = (1 − cos 2α)/2</span> y <span class="math">cos²α = (1 + cos 2α)/2</span>. Serán clave para integrar en la unidad 4.</p>` },
      { titulo: `Estrategia para demostrar identidades`, html: `<p>Para <em>demostrar</em> una identidad trabaja con <strong>un solo lado</strong> (normalmente el más complicado) hasta llegar al otro. Nunca "pases términos" de un lado al otro, porque eso supone que la igualdad ya es cierta.</p><ol><li>Escribe todo en términos de sen y cos.</li><li>Combina fracciones con denominador común.</li><li>Busca <span class="math">1 − cos²x</span> o <span class="math">1 − sen²x</span> para usar la pitagórica.</li><li>Factoriza o multiplica por el conjugado si ayuda.</li></ol><p>Ejemplo: <span class="math">sec x − cos x = 1/cos x − cos x = (1 − cos²x)/cos x = sen²x/cos x = sen x · tan x</span>.</p>` },
      { titulo: `Ecuaciones trigonométricas`, html: `<p>Una <strong>ecuación</strong> trigonométrica solo se cumple para ciertos ángulos. Procedimiento:</p><ol><li>Lleva la ecuación a una sola función (usa identidades) y despeja, o factoriza igualando a cero.</li><li>Resuelve para la función: por ejemplo <span class="math">sen x = 1/2</span>.</li><li>Encuentra todos los ángulos en el intervalo pedido, usando el ángulo de referencia y los cuadrantes donde la función tiene ese signo.</li><li>Si elevaste al cuadrado o multiplicaste por expresiones con x, <strong>comprueba</strong> las soluciones en la ecuación original.</li></ol><p>Advertencia: no cancelles factores como <span class="math">sen x</span> a ambos lados; pierdes las soluciones donde vale 0. Mejor factoriza.</p>` }
    ],
    formulas: [
      { label: `Conversión`, html: `<span class="math">rad = grados · π/180</span> &nbsp;;&nbsp; <span class="math">grados = rad · 180/π</span>` },
      { label: `Pitagóricas`, html: `<span class="math">sen²θ + cos²θ = 1</span> &nbsp;;&nbsp; <span class="math">1 + tan²θ = sec²θ</span> &nbsp;;&nbsp; <span class="math">1 + cot²θ = csc²θ</span>` },
      { label: `Seno de suma y diferencia`, html: `<span class="math">sen(α ± β) = sen α cos β ± cos α sen β</span>` },
      { label: `Coseno de suma y diferencia`, html: `<span class="math">cos(α ± β) = cos α cos β ∓ sen α sen β</span>` },
      { label: `Tangente de suma`, html: `<span class="math">tan(α + β) = (tan α + tan β)/(1 − tan α tan β)</span>` },
      { label: `Seno del ángulo doble`, html: `<span class="math">sen 2α = 2 sen α cos α</span>` },
      { label: `Coseno del ángulo doble`, html: `<span class="math">cos 2α = cos²α − sen²α = 2cos²α − 1 = 1 − 2sen²α</span>` },
      { label: `Reducción de potencias`, html: `<span class="math">sen²α = (1 − cos 2α)/2</span> &nbsp;;&nbsp; <span class="math">cos²α = (1 + cos 2α)/2</span>` }
    ],
    ejemplos: [
      {
        titulo: `Conversión entre grados y radianes`,
        enunciado: `Expresa 150° en radianes y <span class="math">7π/4</span> rad en grados.`,
        pasos: [
          `Grados a radianes: multiplica por <span class="math">π/180</span>. <span class="math">150 · π/180 = 5π/6</span> (simplifica 150 y 180 entre 30).`,
          `Radianes a grados: multiplica por <span class="math">180/π</span>. <span class="math">(7π/4) · 180/π = 7 · 45 = 315</span>.`
        ],
        respuesta: `<span class="math">150° = 5π/6</span> rad &nbsp;y&nbsp; <span class="math">7π/4</span> rad = 315°.`
      },
      {
        titulo: `Valores exactos con ángulo de referencia`,
        enunciado: `Calcula <span class="math">sen 120°</span>, <span class="math">cos 225°</span> y <span class="math">tan 330°</span>.`,
        pasos: [
          `120° está en el cuadrante II; su referencia es 180° − 120° = 60°. En II el seno es positivo: <span class="math">sen 120° = sen 60° = √3/2</span>.`,
          `225° está en el cuadrante III; referencia 225° − 180° = 45°. En III el coseno es negativo: <span class="math">cos 225° = −cos 45° = −√2/2</span>.`,
          `330° está en el cuadrante IV; referencia 360° − 330° = 30°. En IV la tangente es negativa: <span class="math">tan 330° = −tan 30° = −√3/3</span>.`
        ],
        respuesta: `<span class="math">sen 120° = √3/2</span>, &nbsp;<span class="math">cos 225° = −√2/2</span>, &nbsp;<span class="math">tan 330° = −√3/3</span>.`
      },
      {
        titulo: `Todas las funciones a partir de una`,
        enunciado: `Si <span class="math">sen θ = 3/5</span> y θ está en el cuadrante II, calcula cos θ y tan θ.`,
        pasos: [
          `De la identidad pitagórica: <span class="math">cos²θ = 1 − sen²θ = 1 − 9/25 = 16/25</span>.`,
          `Entonces <span class="math">cos θ = ±4/5</span>. En el cuadrante II el coseno es negativo, así que <span class="math">cos θ = −4/5</span>.`,
          `<span class="math">tan θ = sen θ/cos θ = (3/5)/(−4/5) = −3/4</span>.`
        ],
        respuesta: `<span class="math">cos θ = −4/5</span> y <span class="math">tan θ = −3/4</span>.`
      },
      {
        titulo: `Simplificar con identidades`,
        enunciado: `Demuestra que <span class="math">sec x − cos x = sen x · tan x</span>.`,
        pasos: [
          `Trabaja el lado izquierdo y escríbelo con senos y cosenos: <span class="math">sec x − cos x = 1/cos x − cos x</span>.`,
          `Denominador común: <span class="math">(1 − cos²x)/cos x</span>.`,
          `Pitagórica: <span class="math">1 − cos²x = sen²x</span>, así que queda <span class="math">sen²x/cos x</span>.`,
          `Separa: <span class="math">sen x · (sen x/cos x) = sen x · tan x</span>, que es el lado derecho.`
        ],
        respuesta: `Queda demostrado: ambos lados son iguales a <span class="math">sen x · tan x</span>.`
      },
      {
        titulo: `Valor exacto con la fórmula de suma`,
        enunciado: `Calcula el valor exacto de <span class="math">sen 75°</span>.`,
        pasos: [
          `Escribe 75° = 45° + 30°, ángulos de valores conocidos.`,
          `<span class="math">sen(45° + 30°) = sen 45° cos 30° + cos 45° sen 30°</span>.`,
          `Sustituye: <span class="math">(√2/2)(√3/2) + (√2/2)(1/2) = √6/4 + √2/4</span>.`,
          `Comprobación numérica: <span class="math">(2.449 + 1.414)/4 ≈ 0.9659</span>, que coincide con la calculadora.`
        ],
        respuesta: `<span class="math">sen 75° = (√6 + √2)/4 ≈ 0.9659</span>.`
      },
      {
        titulo: `Ecuación trigonométrica`,
        enunciado: `Resuelve <span class="math">2sen²x + sen x − 1 = 0</span> para <span class="math">0° ≤ x < 360°</span>.`,
        pasos: [
          `Es una cuadrática en <span class="math">sen x</span>. Llama <span class="math">u = sen x</span>: <span class="math">2u² + u − 1 = 0</span>.`,
          `Factoriza: <span class="math">(2u − 1)(u + 1) = 0</span>, así que <span class="math">u = 1/2</span> o <span class="math">u = −1</span>.`,
          `<span class="math">sen x = 1/2</span>: referencia 30°, seno positivo en I y II: <span class="math">x = 30°</span> y <span class="math">x = 150°</span>.`,
          `<span class="math">sen x = −1</span>: ocurre solo en <span class="math">x = 270°</span>.`,
          `Los tres valores sirven (no hubo cuadrados ni cancelaciones que obliguen a descartar).`
        ],
        respuesta: `<span class="math">x = 30°, 150°, 270°</span>.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Convierte 60° y 270° a radianes.`,
        pasos: [
          `<span class="math">60 · π/180 = π/3</span>.`,
          `<span class="math">270 · π/180 = 3π/2</span> (270 entre 90 es 3 y 180 entre 90 es 2).`
        ],
        respuesta: `<span class="math">60° = π/3</span> y <span class="math">270° = 3π/2</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Convierte <span class="math">2π/3</span> rad y <span class="math">π/12</span> rad a grados.`,
        pasos: [
          `<span class="math">(2π/3) · 180/π = 2 · 60 = 120</span>.`,
          `<span class="math">(π/12) · 180/π = 180/12 = 15</span>.`
        ],
        respuesta: `<span class="math">120°</span> y <span class="math">15°</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula <span class="math">sen 45°</span>, <span class="math">cos 60°</span> y <span class="math">tan 45°</span>.`,
        pasos: [
          `De la tabla de ángulos notables: <span class="math">sen 45° = √2/2</span>.`,
          `<span class="math">cos 60° = 1/2</span>.`,
          `<span class="math">tan 45° = sen 45°/cos 45° = 1</span>.`
        ],
        respuesta: `<span class="math">√2/2</span>, &nbsp;<span class="math">1/2</span> y <span class="math">1</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Si <span class="math">sen θ = 3/5</span> y θ es agudo, calcula <span class="math">cos θ</span> y <span class="math">tan θ</span> sin usar calculadora.`,
        pasos: [
          `Triángulo rectángulo con cateto opuesto 3 e hipotenusa 5; el otro cateto es <span class="math">√(25 − 9) = 4</span>.`,
          `<span class="math">cos θ = 4/5</span>.`,
          `<span class="math">tan θ = 3/4</span>.`
        ],
        respuesta: `<span class="math">cos θ = 4/5</span> y <span class="math">tan θ = 3/4</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Simplifica <span class="math">(sen x cos x)/tan x</span>.`,
        pasos: [
          `Reemplaza <span class="math">tan x = sen x/cos x</span>.`,
          `<span class="math">(sen x cos x) · (cos x/sen x)</span> (dividir entre una fracción es multiplicar por su inversa).`,
          `Cancela <span class="math">sen x</span>: queda <span class="math">cos x · cos x = cos²x</span>.`
        ],
        respuesta: `<span class="math">cos²x</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Demuestra que <span class="math">1/(1 − sen x) + 1/(1 + sen x) = 2sec²x</span>.`,
        pasos: [
          `Suma las fracciones con denominador común <span class="math">(1 − sen x)(1 + sen x)</span>: <span class="math">((1 + sen x) + (1 − sen x))/((1 − sen x)(1 + sen x))</span>.`,
          `El numerador es 2. El denominador es una diferencia de cuadrados: <span class="math">1 − sen²x</span>.`,
          `Pitagórica: <span class="math">1 − sen²x = cos²x</span>, luego queda <span class="math">2/cos²x = 2sec²x</span>.`
        ],
        respuesta: `Queda demostrado: ambos lados valen <span class="math">2sec²x</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula el valor exacto de <span class="math">cos 105°</span>.`,
        pasos: [
          `Escribe 105° = 60° + 45°.`,
          `<span class="math">cos(60° + 45°) = cos 60° cos 45° − sen 60° sen 45°</span>.`,
          `<span class="math">= (1/2)(√2/2) − (√3/2)(√2/2) = √2/4 − √6/4</span>.`,
          `Comprobación: 105° está en el cuadrante II, donde el coseno es negativo: <span class="math">(1.414 − 2.449)/4 ≈ −0.2588</span> ✓.`
        ],
        respuesta: `<span class="math">cos 105° = (√2 − √6)/4 ≈ −0.2588</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Resuelve <span class="math">2cos x − 1 = 0</span> para <span class="math">0 ≤ x < 2π</span> (en radianes).`,
        pasos: [
          `Despeja: <span class="math">cos x = 1/2</span>.`,
          `El ángulo de referencia es <span class="math">π/3</span>. El coseno es positivo en los cuadrantes I y IV.`,
          `Cuadrante I: <span class="math">x = π/3</span>. Cuadrante IV: <span class="math">x = 2π − π/3 = 5π/3</span>.`
        ],
        respuesta: `<span class="math">x = π/3</span> y <span class="math">x = 5π/3</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Demuestra que <span class="math">sen 3x = 3 sen x − 4sen³x</span>.`,
        pasos: [
          `Escribe 3x = 2x + x y usa la suma: <span class="math">sen 3x = sen 2x cos x + cos 2x sen x</span>.`,
          `Sustituye el ángulo doble: <span class="math">(2 sen x cos x) cos x + (1 − 2sen²x) sen x = 2 sen x cos²x + sen x − 2sen³x</span>.`,
          `Cambia <span class="math">cos²x = 1 − sen²x</span>: <span class="math">2 sen x (1 − sen²x) + sen x − 2sen³x = 2 sen x − 2sen³x + sen x − 2sen³x</span>.`,
          `Reduce términos semejantes: <span class="math">3 sen x − 4sen³x</span>.`
        ],
        respuesta: `Queda demostrado: <span class="math">sen 3x = 3 sen x − 4sen³x</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Resuelve <span class="math">cos 2x = cos x</span> para <span class="math">0° ≤ x < 360°</span>.`,
        pasos: [
          `Usa <span class="math">cos 2x = 2cos²x − 1</span> para tener solo cos x: <span class="math">2cos²x − 1 = cos x</span>.`,
          `Ordena: <span class="math">2cos²x − cos x − 1 = 0</span>. Factoriza: <span class="math">(2cos x + 1)(cos x − 1) = 0</span>.`,
          `<span class="math">cos x = 1</span> da <span class="math">x = 0°</span>.`,
          `<span class="math">cos x = −1/2</span>: referencia 60°, coseno negativo en II y III: <span class="math">x = 120°</span> y <span class="math">x = 240°</span>.`
        ],
        respuesta: `<span class="math">x = 0°, 120°, 240°</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Resuelve <span class="math">sen x + cos x = 1</span> para <span class="math">0° ≤ x < 360°</span> y verifica las soluciones.`,
        pasos: [
          `Eleva al cuadrado ambos lados: <span class="math">sen²x + 2 sen x cos x + cos²x = 1</span>.`,
          `Con la pitagórica y el ángulo doble: <span class="math">1 + sen 2x = 1</span>, así que <span class="math">sen 2x = 0</span>.`,
          `Entonces <span class="math">2x = 0°, 180°, 360°, 540°</span>, es decir, <span class="math">x = 0°, 90°, 180°, 270°</span>.`,
          `Al elevar al cuadrado pudieron aparecer soluciones extrañas. Comprueba: x = 0°: <span class="math">0 + 1 = 1</span> ✓. x = 90°: <span class="math">1 + 0 = 1</span> ✓. x = 180°: <span class="math">0 − 1 = −1</span> ✗. x = 270°: <span class="math">−1 + 0 = −1</span> ✗.`
        ],
        respuesta: `<span class="math">x = 0°</span> y <span class="math">x = 90°</span> (180° y 270° son extrañas).`
      }
    ],
    teoricas: [
      {
        q: `¿Por qué en Cálculo se usan radianes y no grados?`,
        a: `Porque con radianes el ángulo es una razón de longitudes (arco entre radio) y las fórmulas se simplifican: <span class="math">lím<sub>x→0</sub> sen x/x = 1</span> y la derivada de sen x es cos x. En grados aparecerían factores como <span class="math">π/180</span> en cada resultado.`
      },
      {
        q: `¿De dónde sale la identidad <span class="math">sen²θ + cos²θ = 1</span>?`,
        a: `De la ecuación de la circunferencia unitaria <span class="math">x² + y² = 1</span>: el punto del ángulo θ tiene coordenadas <span class="math">(cos θ, sen θ)</span>, y al reemplazar queda la identidad. También es el teorema de Pitágoras en el triángulo de hipotenusa 1.`
      },
      {
        q: `¿Por qué <span class="math">tan 90°</span> no existe?`,
        a: `Porque <span class="math">tan θ = sen θ/cos θ</span> y <span class="math">cos 90° = 0</span>: habría una división entre cero. Gráficamente la tangente tiene una asíntota vertical en 90°, donde crece sin cota.`
      },
      {
        q: `¿Es cierto que <span class="math">sen(α + β) = sen α + sen β</span>? Da un contraejemplo.`,
        a: `No. Con α = β = 30°: <span class="math">sen 60° = √3/2 ≈ 0.866</span>, pero <span class="math">sen 30° + sen 30° = 1</span>. La función seno no es lineal; por eso existe la fórmula de suma.`
      },
      {
        q: `¿Cuál es la diferencia entre una identidad y una ecuación trigonométrica?`,
        a: `Una identidad (como <span class="math">sen²x + cos²x = 1</span>) se cumple para todo x donde está definida, y se demuestra. Una ecuación (como <span class="math">sen x = 1/2</span>) se cumple solo para algunos valores de x, y se resuelve.`
      },
      {
        q: `¿Qué signo tienen sen, cos y tan en el cuadrante III?`,
        a: `En el cuadrante III ambas coordenadas son negativas: <span class="math">sen θ < 0</span> y <span class="math">cos θ < 0</span>, y por lo tanto <span class="math">tan θ = sen θ/cos θ > 0</span>. Solo la tangente (y su recíproca, la cotangente) es positiva.`
      },
      {
        q: `¿Qué dominio y rango tienen sen x y cos x? ¿Y tan x?`,
        a: `Sen y cos tienen dominio todos los reales y rango <span class="math">[−1, 1]</span>, porque son coordenadas de un punto de la circunferencia unitaria. La tangente tiene rango todos los reales, pero su dominio excluye <span class="math">π/2 + kπ</span>, donde cos x = 0.`
      },
      {
        q: `Explica por qué hay tres formas de escribir <span class="math">cos 2α</span> y cuándo conviene cada una.`,
        a: `Salen de <span class="math">cos²α − sen²α</span> usando la pitagórica: reemplazando <span class="math">sen²α = 1 − cos²α</span> se obtiene <span class="math">2cos²α − 1</span>, y reemplazando <span class="math">cos²α = 1 − sen²α</span> se obtiene <span class="math">1 − 2sen²α</span>. Conviene la que deje la ecuación en una sola función.`
      }
    ],
    errores: [
      `Escribir <span class="math">sen(α + β) = sen α + sen β</span> (o lo mismo con cos). La suma de ángulos NO se distribuye; usa <span class="math">sen α cos β + cos α sen β</span>.`,
      `Confundir <span class="math">sen²x</span> con <span class="math">sen(x²)</span>. La notación <span class="math">sen²x</span> significa <span class="math">(sen x)²</span>, y no se puede "sacar" el cuadrado de adentro del seno.`,
      `Calcular con la calculadora en el modo equivocado (grados contra radianes): <span class="math">sen 30</span> da 0.5 en grados pero −0.988 en radianes. Verifica siempre el modo antes de operar.`,
      `Cancelar <span class="math">sen x</span> o <span class="math">cos x</span> de ambos lados de una ecuación, perdiendo soluciones. Factoriza en lugar de dividir; y tras elevar al cuadrado, comprueba las soluciones.`
    ],
    aplicacion: {
      titulo: `Corriente alterna en una instalación residencial`,
      html: `<p>En El Salvador la red doméstica es de 120 V (valor eficaz) y 60 Hz. El voltaje instantáneo en un tomacorriente se modela como <span class="math">V(t) = 170 sen(120πt)</span> voltios, con t en segundos (170 V es el valor pico: <span class="math">120√2 ≈ 169.7</span>).</p><p><strong>a) Periodo y frecuencia.</strong> El seno completa un ciclo cuando <span class="math">120π t = 2π</span>, es decir <span class="math">T = 1/60</span> s, y la frecuencia es <span class="math">f = 1/T = 60</span> Hz.</p><p><strong>b) Voltaje en <span class="math">t = 1/720</span> s.</strong> El ángulo es <span class="math">120π/720 = π/6</span>, y <span class="math">V = 170 · sen(π/6) = 170 · 1/2 = 85</span> V.</p><p><strong>c) Primer instante en que alcanza el pico.</strong> Se requiere <span class="math">sen(120πt) = 1</span>, o sea <span class="math">120πt = π/2</span>, de donde <span class="math">t = 1/240</span> s ≈ 4.17 ms.</p><p><strong>d) Valor eficaz con la reducción de potencias.</strong> La potencia en una resistencia es proporcional a <span class="math">V²= 170² sen²(120πt)</span>, y por la identidad <span class="math">sen²α = (1 − cos 2α)/2</span> el término coseno promedia 0 en un ciclo, así que el promedio de <span class="math">sen²</span> es <span class="math">1/2</span>. Entonces <span class="math">V<sub>ef</sub> = 170/√2 ≈ 120.2</span> V, que es el "120 V" de la etiqueta del servicio. Esta es la razón por la que se usa 170 V como pico.</p>`
    },
    calc: 'identidades',
    examen: [
      {
        tipo: 'num',
        q: `Expresa 225° en radianes. Redondea a 2 decimales.`,
        r: 3.93, tol: 0.01,
        pasos: [
          `Radianes = grados · <span class="math">π/180</span>.`,
          `<span class="math">225 · π/180 = 5π/4</span>.`,
          `<span class="math">5π/4 ≈ 3.927</span>, que redondeado es 3.93.`
        ]
      },
      {
        tipo: 'num',
        q: `Expresa 2.5 rad en grados. Redondea a 2 decimales.`,
        r: 143.24, tol: 0.01,
        pasos: [
          `Grados = rad · <span class="math">180/π</span>.`,
          `<span class="math">2.5 · 180/π = 450/π</span>.`,
          `<span class="math">450/3.14159 ≈ 143.24°</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Si <span class="math">sen θ = 5/13</span> y θ está en el cuadrante II, ¿cuánto vale cos θ? Redondea a 2 decimales.`,
        r: -0.92, tol: 0.01,
        pasos: [
          `<span class="math">cos²θ = 1 − 25/169 = 144/169</span>.`,
          `<span class="math">cos θ = ±12/13</span>.`,
          `En el cuadrante II el coseno es negativo: <span class="math">cos θ = −12/13 ≈ −0.92</span>.`
        ]
      },
      {
        tipo: 'par',
        q: `Las coordenadas del punto del círculo unitario que corresponde a 120° son (cos 120°, sen 120°). Escribe el punto con 2 decimales.`,
        r: [-0.5, 0.87], tol: 0.01,
        pasos: [
          `120° está en el cuadrante II con referencia 60°.`,
          `<span class="math">cos 120° = −cos 60° = −0.5</span>.`,
          `<span class="math">sen 120° = sen 60° = √3/2 ≈ 0.87</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula <span class="math">cos 75°</span> usando <span class="math">cos(45° + 30°)</span>. Redondea a 2 decimales.`,
        r: 0.26, tol: 0.01,
        pasos: [
          `<span class="math">cos(45° + 30°) = cos 45° cos 30° − sen 45° sen 30°</span>.`,
          `<span class="math">= (√2/2)(√3/2) − (√2/2)(1/2) = (√6 − √2)/4</span>.`,
          `<span class="math">(2.449 − 1.414)/4 ≈ 0.2588 ≈ 0.26</span>.`
        ]
      },
      {
        tipo: 'lista',
        q: `Resuelve <span class="math">2sen²x − sen x − 1 = 0</span> para <span class="math">0° ≤ x < 360°</span>. Escribe los ángulos en grados separados por comas.`,
        r: [90, 210, 330], tol: 0.01,
        pasos: [
          `Con <span class="math">u = sen x</span>: <span class="math">2u² − u − 1 = 0</span>, que factoriza como <span class="math">(2u + 1)(u − 1) = 0</span>.`,
          `<span class="math">sen x = 1</span> da <span class="math">x = 90°</span>.`,
          `<span class="math">sen x = −1/2</span>: referencia 30°, seno negativo en III y IV: <span class="math">x = 210°</span> y <span class="math">x = 330°</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Si <span class="math">sen θ = 0.8</span> y <span class="math">cos θ = −0.6</span>, calcula <span class="math">sen 2θ</span>.`,
        r: -0.96, tol: 0.01,
        pasos: [
          `Ángulo doble: <span class="math">sen 2θ = 2 sen θ cos θ</span>.`,
          `<span class="math">= 2 · 0.8 · (−0.6)</span>.`,
          `<span class="math">= −0.96</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula <span class="math">tan 15°</span> usando <span class="math">tan(45° − 30°)</span>. Redondea a 2 decimales.`,
        r: 0.27, tol: 0.01,
        pasos: [
          `<span class="math">tan(45° − 30°) = (tan 45° − tan 30°)/(1 + tan 45° tan 30°)</span>.`,
          `<span class="math">= (1 − √3/3)/(1 + √3/3) = (3 − √3)/(3 + √3)</span>.`,
          `Racionaliza o evalúa: <span class="math">(3 − 1.732)/(3 + 1.732) ≈ 0.268</span>, que equivale exactamente a <span class="math">2 − √3 ≈ 0.27</span>.`
        ]
      },
      {
        tipo: 'opt',
        q: `¿Cuál de las siguientes expresiones NO es igual a <span class="math">cos 2x</span>?`,
        opciones: [`<span class="math">cos²x − sen²x</span>`, `<span class="math">1 − 2sen²x</span>`, `<span class="math">2cos²x − 1</span>`, `<span class="math">2 sen x cos x</span>`],
        correcta: 3,
        pasos: [
          `Las tres primeras son las formas válidas del coseno del ángulo doble.`,
          `<span class="math">2 sen x cos x</span> es el desarrollo de <span class="math">sen 2x</span>, no de <span class="math">cos 2x</span>.`
        ]
      },
      {
        tipo: 'opt',
        q: `Simplifica <span class="math">(1 − cos²x)/(1 − sen²x)</span>.`,
        opciones: [`<span class="math">1</span>`, `<span class="math">tan²x</span>`, `<span class="math">cot²x</span>`, `<span class="math">sen x cos x</span>`],
        correcta: 1,
        pasos: [
          `Por la pitagórica, <span class="math">1 − cos²x = sen²x</span> y <span class="math">1 − sen²x = cos²x</span>.`,
          `La expresión queda <span class="math">sen²x/cos²x</span>.`,
          `Eso es <span class="math">tan²x</span>.`
        ]
      }
    ]
  };

  T['1.7'] = {
    id: '1.7',
    unidad: 2,
    titulo: 'Límites trigonométricos',
    resumen: `Calcularás límites con sen, cos y tan usando lím sen x/x = 1, lím (1 − cos x)/x = 0 y el teorema del sándwich.`,
    objetivos: [
      `Enunciar y justificar geométricamente el límite fundamental <span class="math">lím<sub>x→0</sub> sen x/x = 1</span>.`,
      `Calcular límites trigonométricos en forma <span class="math">0/0</span> ajustando el argumento y usando los límites notables.`,
      `Aplicar el teorema del sándwich (compresión) para acotar funciones oscilantes.`,
      `Resolver límites con cambio de variable, tanto en un punto distinto de 0 como en el infinito.`
    ],
    teoria: [
      { titulo: `Un límite que no se puede calcular con álgebra`, html: `<p>En el tema 1.3 resolviste indeterminaciones <span class="math">0/0</span> factorizando o racionalizando. Pero <span class="math">lím<sub>x→0</sub> sen x/x</span> es <span class="math">0/0</span> y ninguna factorización ayuda, porque sen x no es un polinomio. Con una calculadora (en <strong>radianes</strong>) se ve la tendencia:</p><table><tr><th>x</th><th>0.5</th><th>0.1</th><th>0.01</th><th>0.001</th></tr><tr><td>sen x/x</td><td>0.9589</td><td>0.99833</td><td>0.999983</td><td>0.99999983</td></tr></table><p>Los valores se acercan a 1. Para estar seguros se necesita una demostración; este límite es la base de la derivada de sen x.</p>` },
      { titulo: `El límite fundamental y su justificación geométrica`, html: `<p><strong>Teorema.</strong> Si x está en radianes, <span class="math">lím<sub>x→0</sub> sen x/x = 1</span>.</p><p><strong>Idea de la prueba.</strong> En el círculo unitario, con <span class="math">0 < x < π/2</span>, compara tres áreas: el triángulo con vértices en el origen, (1, 0) y el punto del arco (área <span class="math">sen x/2</span>); el sector circular de ángulo x (área <span class="math">x/2</span>); y el triángulo mayor de altura tan x (área <span class="math">tan x/2</span>). El sector está entre los dos triángulos:</p><p><span class="math">sen x < x < tan x</span></p><p>Divide entre sen x (positivo): <span class="math">1 < x/sen x < 1/cos x</span>. Invierte: <span class="math">cos x < sen x/x < 1</span>. Cuando x→0, cos x→1, y por el teorema del sándwich <span class="math">lím<sub>x→0</sub> sen x/x = 1</span>. Como sen x/x es par, vale también por la izquierda.</p>` },
      { titulo: `Límites notables derivados`, html: `<p>A partir del fundamental se obtienen estos, todos con x→0 y x en radianes:</p><ul><li><span class="math">lím<sub>x→0</sub> tan x/x = 1</span> (porque <span class="math">tan x/x = (sen x/x)(1/cos x)</span>).</li><li><span class="math">lím<sub>x→0</sub> (1 − cos x)/x = 0</span>.</li><li><span class="math">lím<sub>x→0</sub> (1 − cos x)/x² = 1/2</span>.</li></ul><p><strong>Cómo se prueba el de coseno:</strong> multiplica por el conjugado <span class="math">(1 + cos x)</span>:</p><p><span class="math">(1 − cos x)/x² · (1 + cos x)/(1 + cos x) = sen²x/(x²(1 + cos x)) = (sen x/x)² · 1/(1 + cos x)</span></p><p>y cuando x→0 esto tiende a <span class="math">1² · 1/2 = 1/2</span>. Dividiendo entre x en lugar de x² queda <span class="math">(1/2)·x → 0</span>, que da el segundo.</p>` },
      { titulo: `Procedimiento: ajustar el argumento`, html: `<p>La clave es que el argumento del seno coincida con el denominador. Para <span class="math">lím<sub>x→0</sub> sen(kx)/x</span> con k constante:</p><ol><li>Multiplica y divide por k para tener <span class="math">kx</span> abajo: <span class="math">sen(kx)/x = k · sen(kx)/(kx)</span>.</li><li>Como <span class="math">kx→0</span>, <span class="math">sen(kx)/(kx)→1</span>.</li><li>Resultado: <span class="math">k</span>.</li></ol><p>En general <span class="math">lím<sub>x→0</sub> sen(ax)/sen(bx) = a/b</span> y <span class="math">lím<sub>x→0</sub> tan(ax)/(bx) = a/b</span>. Para cualquier expresión <span class="math">u(x)→0</span> se cumple <span class="math">sen u/u → 1</span>; ese es el principio general: <strong>el argumento del seno y el denominador deben ser la misma expresión que tiende a 0</strong>.</p>` },
      { titulo: `Estrategias con tan, cos y combinaciones`, html: `<p>Casos frecuentes:</p><ul><li><strong>tan x:</strong> escribe <span class="math">tan x = sen x/cos x</span>, ya que <span class="math">cos x→1</span>.</li><li><strong>1 − cos:</strong> multiplica por el conjugado <span class="math">1 + cos</span> para que aparezca <span class="math">sen²</span>; o usa <span class="math">1 − cos 2u = 2sen²u</span>.</li><li><strong>Productos y cocientes:</strong> separa el límite en factores conocidos (el límite de un producto es el producto de los límites, si cada uno existe).</li><li><strong>Diferencias como tan x − sen x:</strong> factoriza <span class="math">sen x</span> y agrupa: <span class="math">tan x − sen x = sen x(1 − cos x)/cos x</span>.</li></ul><p>Verifica siempre que el límite sea realmente <span class="math">0/0</span> antes de aplicar los notables: <span class="math">sen x/x</span> con x→0 es 1, pero con x→∞ es 0, como verás abajo.</p>` },
      { titulo: `Teorema del sándwich (compresión)`, html: `<p><strong>Teorema.</strong> Si <span class="math">g(x) ≤ f(x) ≤ h(x)</span> cerca de a (salvo quizá en a) y <span class="math">lím<sub>x→a</sub> g(x) = lím<sub>x→a</sub> h(x) = L</span>, entonces <span class="math">lím<sub>x→a</sub> f(x) = L</span>.</p><p>Se usa cuando f oscila y no se puede evaluar directamente. Procedimiento: acota la parte oscilante usando <span class="math">−1 ≤ sen u ≤ 1</span> o <span class="math">−1 ≤ cos u ≤ 1</span>, multiplica por la parte positiva y calcula los límites de las cotas.</p><p><strong>Ejemplo:</strong> <span class="math">lím<sub>x→0</sub> x² sen(1/x)</span>. Como <span class="math">−1 ≤ sen(1/x) ≤ 1</span> y <span class="math">x² ≥ 0</span>: <span class="math">−x² ≤ x² sen(1/x) ≤ x²</span>. Ambas cotas tienden a 0, luego el límite es 0 (aunque <span class="math">lím<sub>x→0</sub> sen(1/x)</span> no existe).</p>` },
      { titulo: `Cambio de variable y límites en el infinito`, html: `<p><strong>Límite en un punto a ≠ 0.</strong> Haz <span class="math">u = x − a</span> para que u→0. Ejemplo: <span class="math">lím<sub>x→π</sub> sen x/(π − x)</span>: con <span class="math">u = π − x</span>, <span class="math">sen x = sen(π − u) = sen u</span>, y el límite es <span class="math">lím<sub>u→0</sub> sen u/u = 1</span>.</p><p><strong>Argumento que tiende a 0 de otra forma.</strong> <span class="math">lím<sub>x→2</sub> sen(x² − 4)/(x − 2)</span>: escribe <span class="math">sen(x² − 4)/(x − 2) = [sen(x² − 4)/(x² − 4)] · (x + 2)</span>; como <span class="math">x² − 4→0</span>, el corchete tiende a 1 y el límite es <span class="math">1 · 4 = 4</span>.</p><p><strong>Límites en el infinito.</strong> Como <span class="math">|sen x| ≤ 1</span>, <span class="math">lím<sub>x→∞</sub> sen x/x = 0</span> por sándwich. Y con <span class="math">u = 1/x</span>: <span class="math">lím<sub>x→∞</sub> x sen(1/x) = lím<sub>u→0</sub> sen u/u = 1</span>.</p>` },
      { titulo: `Por qué importa y qué sigue`, html: `<p>Estos límites son el puente a la derivada de las funciones trigonométricas (tema 1.13): <span class="math">(sen x)′ = cos x</span> se demuestra con la fórmula de suma y los dos límites <span class="math">sen h/h→1</span> y <span class="math">(cos h − 1)/h→0</span>. También justifican la aproximación de ángulos pequeños <span class="math">sen θ ≈ θ</span> y <span class="math">tan θ ≈ θ</span> que usan ingenieros en péndulos, óptica y vigas. Y recuerda: todo esto exige radianes; si x está en grados, <span class="math">lím<sub>x→0</sub> sen x/x = π/180</span>.</p>` }
    ],
    formulas: [
      { label: `Límite fundamental`, html: `<span class="math">lím<sub>x→0</sub> sen x/x = 1</span>` },
      { label: `Tangente`, html: `<span class="math">lím<sub>x→0</sub> tan x/x = 1</span>` },
      { label: `Coseno (orden 1)`, html: `<span class="math">lím<sub>x→0</sub> (1 − cos x)/x = 0</span>` },
      { label: `Coseno (orden 2)`, html: `<span class="math">lím<sub>x→0</sub> (1 − cos x)/x² = 1/2</span>` },
      { label: `Argumento con constante`, html: `<span class="math">lím<sub>x→0</sub> sen(kx)/x = k</span> &nbsp;;&nbsp; <span class="math">lím<sub>x→0</sub> sen(ax)/sen(bx) = a/b</span>` },
      { label: `Argumento general`, html: `Si <span class="math">u(x)→0</span>: <span class="math">lím sen u(x)/u(x) = 1</span>` },
      { label: `Teorema del sándwich`, html: `<span class="math">g ≤ f ≤ h</span> y <span class="math">lím g = lím h = L</span> ⇒ <span class="math">lím f = L</span>` },
      { label: `Límite en el infinito`, html: `<span class="math">lím<sub>x→∞</sub> sen x/x = 0</span> &nbsp;;&nbsp; <span class="math">lím<sub>x→∞</sub> x sen(k/x) = k</span>` }
    ],
    ejemplos: [
      {
        titulo: `Ajustar el argumento`,
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> sen 3x/x</span>.`,
        pasos: [
          `Al sustituir x = 0 resulta <span class="math">0/0</span>. Hay que dejar un 3x abajo.`,
          `Multiplica y divide por 3: <span class="math">sen 3x/x = 3 · sen 3x/(3x)</span>.`,
          `Cuando x→0, 3x→0, así que <span class="math">sen 3x/(3x)→1</span>.`,
          `El límite es <span class="math">3 · 1 = 3</span>.`
        ],
        respuesta: `<span class="math">lím<sub>x→0</sub> sen 3x/x = 3</span>.`
      },
      {
        titulo: `Cociente de dos senos`,
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> sen 5x/sen 2x</span>.`,
        pasos: [
          `Reescribe: <span class="math">sen 5x/sen 2x = [sen 5x/(5x)] · [2x/sen 2x] · (5x/2x)</span>.`,
          `Los dos corchetes tienden a 1 (el segundo es el inverso de algo que tiende a 1).`,
          `Queda <span class="math">5x/2x = 5/2</span> para x ≠ 0.`
        ],
        respuesta: `<span class="math">lím<sub>x→0</sub> sen 5x/sen 2x = 5/2</span>.`
      },
      {
        titulo: `Tangente en el numerador`,
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> tan 7x/(3x)</span>.`,
        pasos: [
          `Escribe <span class="math">tan 7x = sen 7x/cos 7x</span>: <span class="math">tan 7x/(3x) = [sen 7x/(7x)] · (7/3) · (1/cos 7x)</span>.`,
          `Cuando x→0: <span class="math">sen 7x/(7x)→1</span> y <span class="math">cos 7x→1</span>.`,
          `El límite es <span class="math">1 · 7/3 · 1 = 7/3</span>.`
        ],
        respuesta: `<span class="math">lím<sub>x→0</sub> tan 7x/(3x) = 7/3</span>.`
      },
      {
        titulo: `Límite con el coseno`,
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> (1 − cos 3x)/x²</span>.`,
        pasos: [
          `Multiplica por el conjugado: <span class="math">(1 − cos 3x)(1 + cos 3x)/(x²(1 + cos 3x)) = sen²3x/(x²(1 + cos 3x))</span>.`,
          `Reescribe: <span class="math">[sen 3x/x]² · 1/(1 + cos 3x)</span>.`,
          `Como <span class="math">lím sen 3x/x = 3</span> y <span class="math">1 + cos 3x→2</span>, el límite es <span class="math">3² · 1/2 = 9/2</span>.`
        ],
        respuesta: `<span class="math">lím<sub>x→0</sub> (1 − cos 3x)/x² = 9/2</span>.`
      },
      {
        titulo: `Teorema del sándwich`,
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> x² sen(1/x)</span>.`,
        pasos: [
          `Para x ≠ 0 se sabe que <span class="math">−1 ≤ sen(1/x) ≤ 1</span>.`,
          `Multiplica por <span class="math">x² ≥ 0</span> (no cambia el sentido): <span class="math">−x² ≤ x² sen(1/x) ≤ x²</span>.`,
          `<span class="math">lím<sub>x→0</sub> (−x²) = 0</span> y <span class="math">lím<sub>x→0</sub> x² = 0</span>.`,
          `Por el teorema del sándwich, el límite buscado es 0.`
        ],
        respuesta: `<span class="math">lím<sub>x→0</sub> x² sen(1/x) = 0</span>.`
      },
      {
        titulo: `Combinar tangente y seno`,
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> (tan x − sen x)/x³</span>.`,
        pasos: [
          `Escribe <span class="math">tan x − sen x = sen x/cos x − sen x = sen x (1 − cos x)/cos x</span>.`,
          `Entonces <span class="math">(tan x − sen x)/x³ = (sen x/x) · ((1 − cos x)/x²) · (1/cos x)</span>.`,
          `Cuando x→0, los tres factores tienden a <span class="math">1</span>, <span class="math">1/2</span> y <span class="math">1</span>.`,
          `El límite es <span class="math">1 · 1/2 · 1 = 1/2</span>.`
        ],
        respuesta: `<span class="math">lím<sub>x→0</sub> (tan x − sen x)/x³ = 1/2</span>.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> sen 6x/x</span>.`,
        pasos: [
          `Multiplica y divide por 6: <span class="math">sen 6x/x = 6 · sen 6x/(6x)</span>.`,
          `Como 6x→0, <span class="math">sen 6x/(6x)→1</span>.`
        ],
        respuesta: `<span class="math">6</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> x/sen 4x</span>.`,
        pasos: [
          `Es el inverso de <span class="math">sen 4x/x</span>, cuyo límite es 4 (ajustando el argumento).`,
          `El límite de un cociente de este tipo es el inverso: <span class="math">1/4</span>.`
        ],
        respuesta: `<span class="math">1/4</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> tan 3x/x</span>.`,
        pasos: [
          `<span class="math">tan 3x/x = [sen 3x/(3x)] · 3 · [1/cos 3x]</span>.`,
          `Cuando x→0: el primer corchete→1 y <span class="math">cos 3x→1</span>.`,
          `El límite es <span class="math">1 · 3 · 1 = 3</span>.`
        ],
        respuesta: `<span class="math">3</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> (x + sen x)/x</span>.`,
        pasos: [
          `Separa la fracción: <span class="math">(x + sen x)/x = x/x + sen x/x = 1 + sen x/x</span>.`,
          `Cuando x→0, <span class="math">sen x/x→1</span>.`,
          `El límite es <span class="math">1 + 1 = 2</span>.`
        ],
        respuesta: `<span class="math">2</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> sen 8x/tan 2x</span>.`,
        pasos: [
          `Escribe <span class="math">tan 2x = sen 2x/cos 2x</span>: <span class="math">sen 8x/tan 2x = (sen 8x · cos 2x)/sen 2x</span>.`,
          `Ajusta argumentos: <span class="math">[sen 8x/(8x)] · [2x/sen 2x] · (8x/2x) · cos 2x</span>.`,
          `Los corchetes→1, <span class="math">cos 2x→1</span> y <span class="math">8x/2x = 4</span>.`
        ],
        respuesta: `<span class="math">4</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> (1 − cos 4x)/(x sen x)</span>.`,
        pasos: [
          `Reescribe el denominador: <span class="math">(1 − cos 4x)/(x sen x) = [(1 − cos 4x)/x²] · [x/sen x]</span>.`,
          `<span class="math">lím (1 − cos 4x)/x² = 4²/2 = 8</span> (por el límite del coseno con k = 4).`,
          `<span class="math">lím x/sen x = 1</span>. El producto da <span class="math">8 · 1 = 8</span>.`
        ],
        respuesta: `<span class="math">8</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> sen 4x/(x² + 2x)</span>.`,
        pasos: [
          `Factoriza el denominador: <span class="math">x² + 2x = x(x + 2)</span>.`,
          `<span class="math">sen 4x/(x(x + 2)) = [sen 4x/x] · 1/(x + 2)</span>.`,
          `<span class="math">lím sen 4x/x = 4</span> y <span class="math">1/(x + 2)→1/2</span>.`,
          `El límite es <span class="math">4 · 1/2 = 2</span>.`
        ],
        respuesta: `<span class="math">2</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula <span class="math">lím<sub>x→π</sub> sen x/(π − x)</span>.`,
        pasos: [
          `Cambio de variable: <span class="math">u = π − x</span>; cuando x→π, u→0.`,
          `<span class="math">sen x = sen(π − u) = sen u</span>.`,
          `El límite es <span class="math">lím<sub>u→0</sub> sen u/u = 1</span>.`
        ],
        respuesta: `<span class="math">1</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Calcula <span class="math">lím<sub>x→2</sub> sen(x² − 4)/(x − 2)</span>.`,
        pasos: [
          `Al sustituir x = 2 da <span class="math">0/0</span>. Factoriza: <span class="math">x² − 4 = (x − 2)(x + 2)</span>.`,
          `Multiplica y divide por <span class="math">x² − 4</span>: <span class="math">sen(x² − 4)/(x − 2) = [sen(x² − 4)/(x² − 4)] · (x + 2)</span>.`,
          `Cuando x→2, <span class="math">x² − 4→0</span>, así que el corchete→1.`,
          `El límite es <span class="math">1 · (2 + 2) = 4</span>.`
        ],
        respuesta: `<span class="math">4</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Calcula <span class="math">lím<sub>x→0</sub> (cos x − cos 3x)/x²</span>.`,
        pasos: [
          `Suma y resta 1 en el numerador: <span class="math">cos x − cos 3x = (1 − cos 3x) − (1 − cos x)</span>.`,
          `Divide entre x²: <span class="math">(1 − cos 3x)/x² − (1 − cos x)/x²</span>.`,
          `Los límites son <span class="math">3²/2 = 9/2</span> y <span class="math">1/2</span>.`,
          `Resta: <span class="math">9/2 − 1/2 = 4</span>.`
        ],
        respuesta: `<span class="math">4</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Usa el teorema del sándwich para calcular <span class="math">lím<sub>x→∞</sub> (5x² + sen x)/(x² + 1)</span>.`,
        pasos: [
          `Divide numerador y denominador entre x²: <span class="math">(5 + sen x/x²)/(1 + 1/x²)</span>.`,
          `Como <span class="math">−1 ≤ sen x ≤ 1</span>, se tiene <span class="math">−1/x² ≤ sen x/x² ≤ 1/x²</span>. Ambas cotas→0 cuando x→∞, así que <span class="math">sen x/x²→0</span>.`,
          `El numerador→5 y el denominador→1.`
        ],
        respuesta: `<span class="math">5</span>.`
      }
    ],
    teoricas: [
      {
        q: `¿Por qué <span class="math">lím<sub>x→0</sub> sen x/x = 1</span> y no 0, aunque sen 0 = 0?`,
        a: `Porque es una indeterminación <span class="math">0/0</span>: el numerador y el denominador tienden a 0 "a la misma velocidad". Cerca de 0, <span class="math">sen x ≈ x</span> (el arco y su seno casi coinciden), así que el cociente se acerca a 1.`
      },
      {
        q: `¿Qué pasa con <span class="math">lím<sub>x→0</sub> sen x/x</span> si x se mide en grados?`,
        a: `El límite deja de ser 1: vale <span class="math">π/180 ≈ 0.01745</span>. Esa es la razón por la que en Cálculo se trabaja siempre en radianes.`
      },
      {
        q: `¿Puede usarse <span class="math">lím sen x/x = 1</span> cuando x→∞? Justifica.`,
        a: `No. El límite notable exige que el argumento tienda a 0. Cuando x→∞, el numerador queda acotado entre −1 y 1 y el denominador crece, así que <span class="math">sen x/x→0</span> (por sándwich).`
      },
      {
        q: `Enuncia el teorema del sándwich con tus palabras y explica por qué es verdadero.`,
        a: `Si una función queda "atrapada" entre otras dos que tienden al mismo número L, entonces también tiende a L: no tiene espacio para ir a otro lado. Formalmente, si <span class="math">g ≤ f ≤ h</span> y g y h tienden a L, f tiende a L.`
      },
      {
        q: `¿Por qué <span class="math">lím<sub>x→0</sub> sen(1/x)</span> no existe, pero <span class="math">lím<sub>x→0</sub> x sen(1/x) = 0</span>?`,
        a: `Cerca de 0, <span class="math">sen(1/x)</span> oscila infinitamente entre −1 y 1 sin acercarse a ningún valor. Al multiplicar por x, la oscilación queda acotada por <span class="math">±|x|</span>, que tiende a 0, y el sándwich fuerza el límite a 0.`
      },
      {
        q: `¿Cómo se deduce <span class="math">lím<sub>x→0</sub> (1 − cos x)/x = 0</span> a partir del límite fundamental?`,
        a: `Multiplicando por el conjugado: <span class="math">(1 − cos x)/x = sen²x/(x(1 + cos x)) = (sen x/x) · sen x/(1 + cos x)</span>. El primer factor→1 y el segundo→<span class="math">0/2 = 0</span>, así que el límite es 0.`
      },
      {
        q: `¿Es verdad que <span class="math">lím sen(ax)/sen(bx) = a/b</span> para x→0? ¿Y si b = 0?`,
        a: `Sí, siempre que a y b sean constantes y b ≠ 0: se ajustan ambos argumentos y queda <span class="math">ax/bx = a/b</span>. Con b = 0 el denominador es la función cero y el cociente no está definido.`
      },
      {
        q: `Explica por qué <span class="math">cos x/x</span> NO es una indeterminación en x→0.`,
        a: `Porque el numerador tiende a 1 y no a 0: el cociente es de la forma <span class="math">1/0</span>, que crece sin cota (con signos distintos a cada lado de 0), por lo que el límite no existe. Las propiedades de sen x/x no aplican.`
      }
    ],
    errores: [
      `Olvidar el factor de ajuste: concluir que <span class="math">lím sen 3x/x = 1</span>. El argumento (3x) y el denominador (x) deben coincidir; hay que multiplicar y dividir por 3 y el resultado es 3.`,
      `Aplicar <span class="math">sen x/x = 1</span> cuando x NO tiende a 0 (por ejemplo, en x→∞ o x→2). Revisa primero a qué tiende el argumento; en el infinito, <span class="math">sen x/x→0</span>.`,
      `"Cancelar" la palabra sen: <span class="math">sen 5x/sen 2x = 5x/2x</span>. Aunque el resultado <span class="math">5/2</span> coincide, el procedimiento es inválido; hay que ajustar cada argumento y justificar que cada cociente tiende a 1.`,
      `En el teorema del sándwich, usar cotas que no tienden al mismo valor, o multiplicar la desigualdad por una expresión que puede ser negativa (invierte el sentido). Verifica el signo del factor antes de multiplicar.`
    ],
    aplicacion: {
      titulo: `La hamaca y la aproximación de ángulos pequeños`,
      html: `<p>El movimiento de una hamaca o de un péndulo de longitud L depende de <span class="math">sen θ</span>, donde θ es el ángulo respecto a la vertical (en radianes). Resolver la ecuación exacta es difícil; los ingenieros usan <span class="math">sen θ ≈ θ</span>, que se justifica por <span class="math">lím<sub>θ→0</sub> sen θ/θ = 1</span>. ¿Qué tan buena es la aproximación?</p><p>El error relativo es <span class="math">(θ − sen θ)/sen θ</span>:</p><table><tr><th>θ (rad)</th><th>θ en grados</th><th>sen θ</th><th>Error relativo</th></tr><tr><td>0.1</td><td>5.7°</td><td>0.09983</td><td>0.17 %</td></tr><tr><td>0.2</td><td>11.5°</td><td>0.19867</td><td>0.67 %</td></tr><tr><td>0.3</td><td>17.2°</td><td>0.29552</td><td>1.52 %</td></tr></table><p>Por ejemplo, para θ = 0.3: <span class="math">(0.3 − 0.29552)/0.29552 ≈ 0.01516</span>, es decir, 1.52 %. Para oscilaciones de hasta unos 12° el error es menor que 1 %, así que el periodo se calcula con la fórmula simple <span class="math">T ≈ 2π√(L/g)</span>. Para una hamaca de 2.5 m de cuerda (g = 9.8): <span class="math">T ≈ 2π√(2.5/9.8) ≈ 3.17</span> s. Si el ángulo fuera grande (por ejemplo 60°), la aproximación falla y hay que usar el modelo completo.</p>`
    },
    calc: 'limite-trig',
    examen: [
      {
        tipo: 'num',
        q: `Calcula <span class="math">lím<sub>x→0</sub> sen 5x/x</span>.`,
        r: 5, tol: 0.01,
        pasos: [
          `Multiplica y divide por 5: <span class="math">5 · sen 5x/(5x)</span>.`,
          `Cuando x→0, <span class="math">sen 5x/(5x)→1</span>.`,
          `El límite es 5.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula <span class="math">lím<sub>x→0</sub> sen 7x/sen 2x</span>. Puedes escribirlo como fracción o decimal.`,
        r: 3.5, tol: 0.01,
        pasos: [
          `Ajusta ambos argumentos: <span class="math">[sen 7x/(7x)] · [2x/sen 2x] · (7x/2x)</span>.`,
          `Los corchetes tienden a 1.`,
          `Queda <span class="math">7/2 = 3.5</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula <span class="math">lím<sub>x→0</sub> (1 − cos 4x)/x²</span>.`,
        r: 8, tol: 0.01,
        pasos: [
          `Multiplica por el conjugado: <span class="math">sen²4x/(x²(1 + cos 4x))</span>.`,
          `Es <span class="math">[sen 4x/x]² · 1/(1 + cos 4x)</span>, con <span class="math">lím sen 4x/x = 4</span> y <span class="math">1 + cos 4x→2</span>.`,
          `El límite es <span class="math">16/2 = 8</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula <span class="math">lím<sub>x→0</sub> tan 6x/(2x)</span>.`,
        r: 3, tol: 0.01,
        pasos: [
          `<span class="math">tan 6x/(2x) = [sen 6x/(6x)] · (6/2) · (1/cos 6x)</span>.`,
          `Cuando x→0, el corchete→1 y <span class="math">cos 6x→1</span>.`,
          `El límite es <span class="math">6/2 = 3</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula <span class="math">lím<sub>x→∞</sub> x sen(1/x)</span>.`,
        r: 1, tol: 0.01,
        pasos: [
          `Cambio de variable: <span class="math">u = 1/x</span>. Cuando x→∞, u→0<sup>+</sup>.`,
          `<span class="math">x sen(1/x) = sen u/u</span>.`,
          `<span class="math">lím<sub>u→0</sub> sen u/u = 1</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula <span class="math">lím<sub>x→0</sub> sen 6x/(x² + 3x)</span>.`,
        r: 2, tol: 0.01,
        pasos: [
          `Factoriza el denominador: <span class="math">x(x + 3)</span>.`,
          `<span class="math">sen 6x/(x(x + 3)) = [sen 6x/x] · 1/(x + 3)</span>.`,
          `<span class="math">lím sen 6x/x = 6</span> y <span class="math">1/(x + 3)→1/3</span>. El producto es <span class="math">6/3 = 2</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `En la aproximación <span class="math">sen θ ≈ θ</span> con θ = 0.3 rad, calcula el error relativo porcentual <span class="math">(θ − sen θ)/sen θ · 100</span>. Redondea a 2 decimales.`,
        r: 1.52, tol: 0.01,
        pasos: [
          `<span class="math">sen 0.3 ≈ 0.295520</span> (calculadora en radianes).`,
          `Diferencia: <span class="math">0.3 − 0.295520 = 0.004480</span>.`,
          `<span class="math">0.004480/0.295520 ≈ 0.01516</span>, es decir, 1.52 %.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula <span class="math">lím<sub>x→0</sub> (sen 3x · tan 5x)/(x · sen 2x)</span>. Puedes escribir <span class="math">15/2</span> o 7.5.`,
        r: 7.5, tol: 0.01,
        pasos: [
          `Reparte: <span class="math">(sen 3x · tan 5x)/(x · sen 2x) = [sen 3x/x] · [tan 5x/sen 2x]</span>.`,
          `Límites: <span class="math">lím sen 3x/x = 3</span> y <span class="math">lím tan 5x/sen 2x = 5/2</span> (se ajustan los argumentos como en el ejemplo del cociente de senos).`,
          `Producto: <span class="math">3 · 5/2 = 15/2 = 7.5</span>.`
        ]
      },
      {
        tipo: 'opt',
        q: `¿Cuánto vale <span class="math">lím<sub>x→0</sub> x² cos(1/x)</span>?`,
        opciones: [`No existe`, `1`, `0`, `∞`],
        correcta: 2,
        pasos: [
          `<span class="math">−1 ≤ cos(1/x) ≤ 1</span>, y multiplicando por <span class="math">x² ≥ 0</span>: <span class="math">−x² ≤ x² cos(1/x) ≤ x²</span>.`,
          `Ambas cotas tienden a 0.`,
          `Por el teorema del sándwich, el límite es 0.`
        ]
      },
      {
        tipo: 'opt',
        q: `Si x se mide en GRADOS, ¿a qué valor tiende <span class="math">sen x/x</span> cuando x→0?`,
        opciones: [`1`, `<span class="math">π/180</span>`, `<span class="math">180/π</span>`, `0`],
        correcta: 1,
        pasos: [
          `En grados, <span class="math">sen x° = sen(πx/180)</span> (en radianes).`,
          `<span class="math">sen(πx/180)/x = (π/180) · sen(πx/180)/(πx/180)</span>.`,
          `El último factor→1, así que el límite es <span class="math">π/180</span>.`
        ]
      }
    ]
  };

  T['1.8'] = {
    id: '1.8',
    unidad: 2,
    titulo: 'Números complejos: forma binómica y polar',
    resumen: `Operarás con números complejos en forma a + bi y los convertirás a forma polar para multiplicar y dividir con módulo y argumento.`,
    objetivos: [
      `Operar números complejos en forma binómica (suma, resta, producto, conjugado y cociente).`,
      `Representar un complejo en el plano de Argand y calcular su módulo y su argumento.`,
      `Convertir entre forma binómica y forma trigonométrica o polar, cuidando el cuadrante.`,
      `Multiplicar y dividir complejos en forma polar y usarlo en problemas de rotaciones y de circuitos.`
    ],
    teoria: [
      { titulo: `La unidad imaginaria y los números complejos`, html: `<p>La ecuación <span class="math">x² + 1 = 0</span> no tiene solución real. Se define la <strong>unidad imaginaria</strong> <span class="math">i</span> con la propiedad <span class="math">i² = −1</span>. Un <strong>número complejo</strong> en forma binómica es</p><p><span class="math">z = a + bi</span>, &nbsp; con a, b reales.</p><p>a es la <strong>parte real</strong> (Re z) y b la <strong>parte imaginaria</strong> (Im z). Dos complejos son iguales si y solo si tienen la misma parte real y la misma parte imaginaria. Si b = 0, z es real; si a = 0 y b ≠ 0, z es imaginario puro.</p><p>Las potencias de <span class="math">i</span> se repiten cada 4: <span class="math">i¹ = i</span>, <span class="math">i² = −1</span>, <span class="math">i³ = −i</span>, <span class="math">i⁴ = 1</span>. Para <span class="math">i<sup>n</sup></span>, divide n entre 4 y usa el residuo (por ejemplo, <span class="math">i<sup>25</sup> = i¹ = i</span>).</p>` },
      { titulo: `Suma, resta y producto`, html: `<p>Se opera como con binomios, recordando <span class="math">i² = −1</span>:</p><ul><li><span class="math">(a + bi) ± (c + di) = (a ± c) + (b ± d)i</span></li><li><span class="math">(a + bi)(c + di) = ac + adi + bci + bdi² = (ac − bd) + (ad + bc)i</span></li></ul><p>Ejemplo: <span class="math">(2 + 3i)(4 − i) = 8 − 2i + 12i − 3i² = 8 + 10i + 3 = 11 + 10i</span>.</p>` },
      { titulo: `Conjugado, módulo y división`, html: `<p>El <strong>conjugado</strong> de <span class="math">z = a + bi</span> es <span class="math">z̄ = a − bi</span> (se refleja respecto al eje real). Cumple:</p><p><span class="math">z · z̄ = a² + b² = |z|²</span> (siempre un real no negativo).</p><p>El <strong>módulo</strong> es <span class="math">|z| = √(a² + b²)</span>: la distancia de z al origen.</p><p><strong>División:</strong> multiplica numerador y denominador por el conjugado del denominador, para que este quede real:</p><p><span class="math">(a + bi)/(c + di) = [(a + bi)(c − di)]/(c² + d²)</span></p><p>Ejemplo: <span class="math">(7 + i)/(3 − 4i) = (7 + i)(3 + 4i)/25 = (21 + 28i + 3i − 4)/25 = (17 + 31i)/25</span>.</p>` },
      { titulo: `El plano complejo (de Argand)`, html: `<p>Cada complejo <span class="math">a + bi</span> se asocia con el punto <span class="math">(a, b)</span>: el eje horizontal es el <strong>eje real</strong> y el vertical es el <strong>eje imaginario</strong>. Así:</p><ul><li>La suma es la suma de vectores (regla del paralelogramo).</li><li>El conjugado es la reflexión respecto al eje real.</li><li>Multiplicar por <span class="math">i</span> gira el punto 90° en sentido antihorario: <span class="math">i(a + bi) = −b + ai</span>.</li><li>El módulo <span class="math">|z|</span> es la longitud del vector.</li></ul><p>Esta visión geométrica explica por qué la forma polar es tan natural.</p>` },
      { titulo: `Forma trigonométrica o polar`, html: `<p>Sea r = |z| y θ el ángulo que forma el vector con el eje real positivo (el <strong>argumento</strong>). Como <span class="math">a = r cos θ</span> y <span class="math">b = r sen θ</span>:</p><p><span class="math">z = r(cos θ + i sen θ) = r cis θ</span></p><p><strong>De binómica a polar:</strong></p><ol><li><span class="math">r = √(a² + b²)</span>.</li><li>Ángulo de referencia: <span class="math">α = arctan(|b|/|a|)</span>.</li><li>Ubica el cuadrante de (a, b) y obtén θ: en I, <span class="math">θ = α</span>; en II, <span class="math">180° − α</span>; en III, <span class="math">180° + α</span>; en IV, <span class="math">360° − α</span>.</li></ol><p><strong>De polar a binómica:</strong> <span class="math">a = r cos θ</span>, <span class="math">b = r sen θ</span>.</p><p>El argumento se define salvo múltiplos de 360° (2π rad); normalmente se usa el valor entre 0° y 360° (o entre −180° y 180°). Para z = 0 el argumento no está definido.</p>` },
      { titulo: `Cuidado con el cuadrante`, html: `<p>La calculadora devuelve <span class="math">arctan(b/a)</span> entre −90° y 90°, y no distingue los cuadrantes II y III. Siempre dibuja el punto.</p><p>Ejemplo: <span class="math">z = −1 + √3 i</span>. Aquí <span class="math">r = √(1 + 3) = 2</span> y <span class="math">arctan(√3/1) = 60°</span> es el ángulo de referencia. Como a < 0 y b > 0, z está en el cuadrante II: <span class="math">θ = 180° − 60° = 120°</span>. Entonces <span class="math">z = 2 cis 120°</span>. Si usaras 60° directamente obtendrías <span class="math">1 + √3 i</span>, otro número.</p><p>Casos sobre los ejes: <span class="math">θ = 0°</span> (real positivo), <span class="math">90°</span> (imaginario positivo), <span class="math">180°</span> (real negativo), <span class="math">270°</span> (imaginario negativo).</p>` },
      { titulo: `Multiplicación y división en forma polar`, html: `<p>Si <span class="math">z<sub>1</sub> = r<sub>1</sub> cis θ<sub>1</sub></span> y <span class="math">z<sub>2</sub> = r<sub>2</sub> cis θ<sub>2</sub></span>:</p><p><span class="math">z<sub>1</sub> z<sub>2</sub> = r<sub>1</sub>r<sub>2</sub> cis(θ<sub>1</sub> + θ<sub>2</sub>)</span></p><p><span class="math">z<sub>1</sub>/z<sub>2</sub> = (r<sub>1</sub>/r<sub>2</sub>) cis(θ<sub>1</sub> − θ<sub>2</sub>)</span></p><p><strong>Se multiplican los módulos y se suman los ángulos; al dividir, se dividen los módulos y se restan los ángulos.</strong> Esto sale de las fórmulas de suma del tema 1.6: <span class="math">(cos α + i sen α)(cos β + i sen β) = cos(α + β) + i sen(α + β)</span>.</p><p>Consecuencias: <span class="math">|z<sub>1</sub>z<sub>2</sub>| = |z<sub>1</sub>||z<sub>2</sub>|</span> y <span class="math">arg(z<sub>1</sub>z<sub>2</sub>) = arg z<sub>1</sub> + arg z<sub>2</sub></span>. Multiplicar por <span class="math">r cis θ</span> equivale a una <em>rotación de θ</em> y un <em>escalamiento por r</em>. Es mucho más cómodo que el producto binómico, y es la puerta al teorema de De Moivre (tema 1.9).</p>` },
      { titulo: `Casos especiales y relación con otros temas`, html: `<ul><li><span class="math">z</span> es real si y solo si <span class="math">z = z̄</span>; es imaginario puro si <span class="math">z = −z̄</span>.</li><li>Conjugado de un producto: <span class="math">z̄₁z̄₂ = conj(z₁z₂)</span>; el conjugado de la suma es la suma de conjugados.</li><li>En forma polar, el conjugado de <span class="math">r cis θ</span> es <span class="math">r cis(−θ)</span> y el inverso es <span class="math">(1/r) cis(−θ)</span>.</li><li>Las raíces complejas de las cuadráticas con discriminante negativo son conjugadas: <span class="math">x² + 2x + 5 = 0</span> da <span class="math">x = −1 ± 2i</span>.</li><li>Los complejos <strong>no</strong> se pueden ordenar con "&lt;"; solo se comparan módulos.</li></ul><p>En ingeniería eléctrica los complejos describen corrientes, voltajes e impedancias en circuitos de corriente alterna (fasores), como verás en la aplicación.</p>` }
    ],
    formulas: [
      { label: `Producto binómico`, html: `<span class="math">(a + bi)(c + di) = (ac − bd) + (ad + bc)i</span>` },
      { label: `Conjugado y módulo`, html: `<span class="math">z̄ = a − bi</span> &nbsp;;&nbsp; <span class="math">|z| = √(a² + b²)</span> &nbsp;;&nbsp; <span class="math">z z̄ = |z|²</span>` },
      { label: `Cociente binómico`, html: `<span class="math">(a + bi)/(c + di) = [(a + bi)(c − di)]/(c² + d²)</span>` },
      { label: `Binómica a polar`, html: `<span class="math">r = √(a² + b²)</span> &nbsp;;&nbsp; <span class="math">tan θ = b/a</span> (según el cuadrante)` },
      { label: `Forma polar`, html: `<span class="math">z = r(cos θ + i sen θ) = r cis θ</span>` },
      { label: `Polar a binómica`, html: `<span class="math">a = r cos θ</span> &nbsp;;&nbsp; <span class="math">b = r sen θ</span>` },
      { label: `Producto en polar`, html: `<span class="math">r<sub>1</sub> cis θ<sub>1</sub> · r<sub>2</sub> cis θ<sub>2</sub> = r<sub>1</sub>r<sub>2</sub> cis(θ<sub>1</sub> + θ<sub>2</sub>)</span>` },
      { label: `Cociente en polar`, html: `<span class="math">(r<sub>1</sub> cis θ<sub>1</sub>)/(r<sub>2</sub> cis θ<sub>2</sub>) = (r<sub>1</sub>/r<sub>2</sub>) cis(θ<sub>1</sub> − θ<sub>2</sub>)</span>` }
    ],
    ejemplos: [
      {
        titulo: `Producto en forma binómica`,
        enunciado: `Calcula <span class="math">(3 + 2i)(1 − 4i)</span>.`,
        pasos: [
          `Distribuye: <span class="math">3·1 + 3(−4i) + 2i·1 + 2i(−4i) = 3 − 12i + 2i − 8i²</span>.`,
          `Con <span class="math">i² = −1</span>, <span class="math">−8i² = +8</span>.`,
          `Agrupa: <span class="math">(3 + 8) + (−12 + 2)i = 11 − 10i</span>.`
        ],
        respuesta: `<span class="math">11 − 10i</span>.`
      },
      {
        titulo: `División con el conjugado`,
        enunciado: `Calcula <span class="math">(5 + i)/(2 − 3i)</span> en forma <span class="math">a + bi</span>.`,
        pasos: [
          `El conjugado del denominador es <span class="math">2 + 3i</span>. Multiplica arriba y abajo.`,
          `Numerador: <span class="math">(5 + i)(2 + 3i) = 10 + 15i + 2i + 3i² = 7 + 17i</span>.`,
          `Denominador: <span class="math">(2 − 3i)(2 + 3i) = 4 + 9 = 13</span>.`,
          `Resultado: <span class="math">(7 + 17i)/13 = 7/13 + (17/13)i ≈ 0.54 + 1.31i</span>.`
        ],
        respuesta: `<span class="math">7/13 + (17/13)i</span>.`
      },
      {
        titulo: `De binómica a polar`,
        enunciado: `Escribe <span class="math">z = −1 + √3 i</span> en forma polar (ángulo en grados).`,
        pasos: [
          `Módulo: <span class="math">r = √((−1)² + (√3)²) = √4 = 2</span>.`,
          `Ángulo de referencia: <span class="math">arctan(√3/1) = 60°</span>.`,
          `El punto (−1, √3) está en el cuadrante II, así que <span class="math">θ = 180° − 60° = 120°</span>.`,
          `Comprobación: <span class="math">2cos 120° = −1</span> y <span class="math">2sen 120° = √3</span> ✓.`
        ],
        respuesta: `<span class="math">z = 2(cos 120° + i sen 120°) = 2 cis 120°</span>.`
      },
      {
        titulo: `De polar a binómica`,
        enunciado: `Escribe <span class="math">6 cis 210°</span> en forma <span class="math">a + bi</span>.`,
        pasos: [
          `<span class="math">a = 6 cos 210°</span>. 210° está en el cuadrante III, con referencia 30°, así que <span class="math">cos 210° = −√3/2</span>.`,
          `<span class="math">a = 6(−√3/2) = −3√3 ≈ −5.20</span>.`,
          `<span class="math">b = 6 sen 210° = 6(−1/2) = −3</span>.`
        ],
        respuesta: `<span class="math">−3√3 − 3i ≈ −5.20 − 3i</span>.`
      },
      {
        titulo: `Producto y cociente en polar`,
        enunciado: `Si <span class="math">z<sub>1</sub> = 4 cis 50°</span> y <span class="math">z<sub>2</sub> = 2 cis 20°</span>, calcula <span class="math">z<sub>1</sub>z<sub>2</sub></span> y <span class="math">z<sub>1</sub>/z<sub>2</sub></span>; escribe este último en forma binómica.`,
        pasos: [
          `Producto: módulos <span class="math">4 · 2 = 8</span>, ángulos <span class="math">50° + 20° = 70°</span>: <span class="math">8 cis 70°</span>.`,
          `Cociente: módulos <span class="math">4/2 = 2</span>, ángulos <span class="math">50° − 20° = 30°</span>: <span class="math">2 cis 30°</span>.`,
          `Binómica del cociente: <span class="math">2cos 30° + 2i sen 30° = √3 + i</span>.`
        ],
        respuesta: `<span class="math">z<sub>1</sub>z<sub>2</sub> = 8 cis 70°</span> y <span class="math">z<sub>1</sub>/z<sub>2</sub> = 2 cis 30° = √3 + i</span>.`
      },
      {
        titulo: `Rotación de un punto del terreno`,
        enunciado: `En un plano topográfico (coordenadas en km) un punto de control está en <span class="math">P = (4, 3)</span>. Gira el plano 60° en sentido antihorario alrededor del origen. ¿Cuáles son las nuevas coordenadas?`,
        pasos: [
          `Representa P como <span class="math">z = 4 + 3i</span>, cuyo módulo es <span class="math">√(16 + 9) = 5</span>.`,
          `Girar 60° equivale a multiplicar por <span class="math">cis 60° = 1/2 + (√3/2)i</span>.`,
          `<span class="math">(4 + 3i)(1/2 + (√3/2)i) = 2 + 2√3 i + (3/2)i + (3√3/2)i²</span>.`,
          `Con <span class="math">i² = −1</span>: parte real <span class="math">2 − 3√3/2 ≈ −0.60</span>; parte imaginaria <span class="math">2√3 + 3/2 ≈ 4.96</span>.`,
          `Control: el módulo se conserva: <span class="math">√(0.36 + 24.6) ≈ 5</span> ✓.`
        ],
        respuesta: `El punto rota a <span class="math">(≈ −0.60, ≈ 4.96)</span> km.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Sean <span class="math">z<sub>1</sub> = 3 + 2i</span> y <span class="math">z<sub>2</sub> = 1 − 5i</span>. Calcula <span class="math">z<sub>1</sub> + z<sub>2</sub></span> y <span class="math">z<sub>1</sub> − z<sub>2</sub></span>.`,
        pasos: [
          `Suma partes reales y partes imaginarias: <span class="math">(3 + 1) + (2 − 5)i = 4 − 3i</span>.`,
          `Resta: <span class="math">(3 − 1) + (2 − (−5))i = 2 + 7i</span>.`
        ],
        respuesta: `<span class="math">z<sub>1</sub> + z<sub>2</sub> = 4 − 3i</span> y <span class="math">z<sub>1</sub> − z<sub>2</sub> = 2 + 7i</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula el módulo y el conjugado de <span class="math">3 − 4i</span>.`,
        pasos: [
          `<span class="math">|3 − 4i| = √(3² + (−4)²) = √25 = 5</span>.`,
          `El conjugado cambia el signo de la parte imaginaria: <span class="math">3 + 4i</span>.`
        ],
        respuesta: `Módulo 5; conjugado <span class="math">3 + 4i</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula <span class="math">i<sup>7</sup></span> e <span class="math">i<sup>100</sup></span>.`,
        pasos: [
          `Las potencias de i se repiten cada 4. <span class="math">7 = 4·1 + 3</span>, así que <span class="math">i<sup>7</sup> = i³ = −i</span>.`,
          `<span class="math">100 = 4·25 + 0</span>, así que <span class="math">i<sup>100</sup> = i⁰ = 1</span>.`
        ],
        respuesta: `<span class="math">i<sup>7</sup> = −i</span> e <span class="math">i<sup>100</sup> = 1</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Escribe <span class="math">2 + 2i</span> en forma polar (grados).`,
        pasos: [
          `<span class="math">r = √(4 + 4) = 2√2</span>.`,
          `El punto está en el cuadrante I y <span class="math">arctan(2/2) = arctan 1 = 45°</span>.`
        ],
        respuesta: `<span class="math">2√2 cis 45°</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula <span class="math">(1 + 2i)(3 − i)</span>.`,
        pasos: [
          `Distribuye: <span class="math">3 − i + 6i − 2i²</span>.`,
          `Con <span class="math">i² = −1</span>: <span class="math">3 + 5i + 2</span>.`,
          `Agrupa: <span class="math">5 + 5i</span>.`
        ],
        respuesta: `<span class="math">5 + 5i</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula <span class="math">(4 + 3i)/(1 − 2i)</span>.`,
        pasos: [
          `Multiplica por el conjugado <span class="math">1 + 2i</span>: numerador <span class="math">(4 + 3i)(1 + 2i) = 4 + 8i + 3i + 6i² = −2 + 11i</span>.`,
          `Denominador: <span class="math">(1 − 2i)(1 + 2i) = 1 + 4 = 5</span>.`,
          `Resultado: <span class="math">(−2 + 11i)/5 = −2/5 + (11/5)i</span>.`
        ],
        respuesta: `<span class="math">−0.4 + 2.2i</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Escribe <span class="math">−3 + 3i</span> en forma polar (grados).`,
        pasos: [
          `<span class="math">r = √(9 + 9) = 3√2</span>.`,
          `Referencia: <span class="math">arctan(3/3) = 45°</span>.`,
          `El punto (−3, 3) está en el cuadrante II: <span class="math">θ = 180° − 45° = 135°</span>.`
        ],
        respuesta: `<span class="math">3√2 cis 135°</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Escribe <span class="math">2 − 2√3 i</span> en forma polar (grados).`,
        pasos: [
          `<span class="math">r = √(4 + 12) = 4</span>.`,
          `Referencia: <span class="math">arctan(2√3/2) = arctan √3 = 60°</span>.`,
          `El punto (2, −2√3) está en el cuadrante IV: <span class="math">θ = 360° − 60° = 300°</span>.`
        ],
        respuesta: `<span class="math">4 cis 300°</span> (equivalente a <span class="math">4 cis(−60°)</span>).`
      },
      {
        nivel: 'dificil',
        enunciado: `Escribe <span class="math">12 cis 120°</span> en forma binómica.`,
        pasos: [
          `<span class="math">cos 120° = −1/2</span> y <span class="math">sen 120° = √3/2</span>.`,
          `<span class="math">a = 12(−1/2) = −6</span>.`,
          `<span class="math">b = 12(√3/2) = 6√3 ≈ 10.39</span>.`
        ],
        respuesta: `<span class="math">−6 + 6√3 i ≈ −6 + 10.39i</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Calcula <span class="math">(1 + i)(√3 − i)</span> de dos formas: en binómica y en polar, y comprueba que coinciden.`,
        pasos: [
          `Binómica: <span class="math">√3 − i + √3 i − i² = (√3 + 1) + (√3 − 1)i ≈ 2.732 + 0.732i</span>.`,
          `Polar: <span class="math">1 + i = √2 cis 45°</span> y <span class="math">√3 − i = 2 cis(−30°)</span> (cuadrante IV).`,
          `Producto: <span class="math">2√2 cis(45° − 30°) = 2√2 cis 15°</span>.`,
          `Convierte: <span class="math">2√2 cos 15° ≈ 2.828 · 0.9659 ≈ 2.732</span> y <span class="math">2√2 sen 15° ≈ 2.828 · 0.2588 ≈ 0.732</span> ✓.`
        ],
        respuesta: `<span class="math">(√3 + 1) + (√3 − 1)i = 2√2 cis 15°</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Encuentra el complejo z tal que <span class="math">z + 2z̄ = 9 − 4i</span>.`,
        pasos: [
          `Sea <span class="math">z = a + bi</span>, así que <span class="math">z̄ = a − bi</span>.`,
          `<span class="math">z + 2z̄ = (a + bi) + 2(a − bi) = 3a − bi</span>.`,
          `Iguala partes: <span class="math">3a = 9</span> y <span class="math">−b = −4</span>, es decir, <span class="math">a = 3</span> y <span class="math">b = 4</span>.`,
          `Comprobación: <span class="math">(3 + 4i) + 2(3 − 4i) = 9 − 4i</span> ✓.`
        ],
        respuesta: `<span class="math">z = 3 + 4i</span>.`
      }
    ],
    teoricas: [
      {
        q: `¿Por qué se define <span class="math">i² = −1</span>? ¿Es "imaginario" en el sentido de que no existe?`,
        a: `Ningún real cumple <span class="math">x² = −1</span>, así que se amplía el sistema numérico con un nuevo número i que sí lo cumple. El nombre es histórico: los complejos son tan "reales" como cualquier otro número y modelan, por ejemplo, la corriente alterna y las rotaciones del plano.`
      },
      {
        q: `¿Qué significa geométricamente multiplicar un complejo por <span class="math">i</span>?`,
        a: `Es una rotación de 90° en sentido antihorario alrededor del origen: <span class="math">i(a + bi) = −b + ai</span> envía (a, b) a (−b, a). Como <span class="math">i = cis 90°</span>, es un caso del producto polar (módulo 1, ángulo +90°).`
      },
      {
        q: `¿Por qué <span class="math">z · z̄ = |z|²</span> es un número real? ¿Cómo se usa?`,
        a: `<span class="math">(a + bi)(a − bi) = a² − (bi)² = a² + b²</span>, que es real y no negativo. Se usa para dividir: multiplicar numerador y denominador por el conjugado del denominador lo convierte en un real.`
      },
      {
        q: `¿Es único el argumento de un complejo no nulo?`,
        a: `No: θ y <span class="math">θ + 360°k</span> (k entero) describen el mismo punto. Se elige un valor principal (entre 0° y 360°, o entre −180° y 180°). Para z = 0 no hay argumento definido.`
      },
      {
        q: `Demuestra que <span class="math">|z<sub>1</sub>z<sub>2</sub>| = |z<sub>1</sub>||z<sub>2</sub>|</span>.`,
        a: `En polar, <span class="math">z<sub>1</sub>z<sub>2</sub> = r<sub>1</sub>r<sub>2</sub> cis(θ<sub>1</sub> + θ<sub>2</sub>)</span>, cuyo módulo es <span class="math">r<sub>1</sub>r<sub>2</sub> = |z<sub>1</sub>||z<sub>2</sub>|</span>. Alternativamente, <span class="math">|z|² = z z̄</span> y el conjugado de un producto es el producto de conjugados.`
      },
      {
        q: `¿Se pueden comparar dos complejos con "mayor que" o "menor que"? ¿Qué sí se puede comparar?`,
        a: `No hay un orden compatible con las operaciones (si <span class="math">i > 0</span> entonces <span class="math">i² > 0</span>, pero i² = −1; si <span class="math">i < 0</span>, también resulta una contradicción). Sí se comparan los módulos, que son reales: <span class="math">|z<sub>1</sub>| < |z<sub>2</sub>|</span>.`
      },
      {
        q: `Si <span class="math">z = r cis θ</span>, ¿cuál es el conjugado y cuál el inverso multiplicativo en forma polar?`,
        a: `El conjugado es <span class="math">r cis(−θ)</span> (misma distancia, ángulo opuesto). El inverso es <span class="math">1/z = (1/r) cis(−θ)</span>, por la regla del cociente con numerador <span class="math">1 = 1 cis 0°</span>.`
      },
      {
        q: `¿Cuándo es más conveniente la forma binómica y cuándo la polar?`,
        a: `La binómica es mejor para sumar y restar (se operan partes real e imaginaria). La polar es mejor para multiplicar, dividir, elevar a potencias y sacar raíces, porque convierte estas operaciones en operaciones con módulos y ángulos.`
      }
    ],
    errores: [
      `Escribir <span class="math">i² = 1</span> o dejar <span class="math">i²</span> sin reemplazar. Siempre sustituye <span class="math">i² = −1</span> al multiplicar; el signo del término <span class="math">bd</span> en <span class="math">(a + bi)(c + di)</span> cambia por esto.`,
      `Calcular el módulo como <span class="math">|a + bi| = a + b</span> o incluir la i en la raíz: <span class="math">|3 + 4i| = √(3² + 4²) = 5</span>, no <span class="math">√(9 + 16i)</span>.`,
      `Tomar el argumento directamente de <span class="math">arctan(b/a)</span> sin revisar el cuadrante. Para <span class="math">−1 − i</span> la calculadora da 45° y el argumento correcto es 225°. Dibuja el punto antes de decidir.`,
      `En polar, sumar los módulos al multiplicar o multiplicar los ángulos: la regla es multiplicar módulos y SUMAR ángulos (y al dividir, dividir módulos y RESTAR ángulos).`
    ],
    aplicacion: {
      titulo: `Impedancia en un circuito de corriente alterna`,
      html: `<p>En un motor pequeño conectado a la red de 120 V, la resistencia es <span class="math">R = 3 Ω</span> y la reactancia inductiva es <span class="math">X = 4 Ω</span>. La <strong>impedancia</strong> se modela con un complejo <span class="math">Z = R + Xi = 3 + 4i</span> Ω, y el voltaje como fasor <span class="math">V = 120 cis 0°</span> V.</p><p><strong>1. Forma polar de Z.</strong> <span class="math">|Z| = √(9 + 16) = 5 Ω</span> y <span class="math">θ = arctan(4/3) ≈ 53.13°</span>, o sea <span class="math">Z = 5 cis 53.13°</span> Ω.</p><p><strong>2. Corriente.</strong> La ley de Ohm con complejos da <span class="math">I = V/Z</span>. En polar se dividen los módulos y se restan los ángulos: <span class="math">I = (120/5) cis(0° − 53.13°) = 24 cis(−53.13°)</span> A.</p><p><strong>3. Interpretación.</strong> La corriente efectiva es 24 A y va <em>retrasada</em> 53.13° respecto al voltaje (típico de cargas inductivas). El factor de potencia es <span class="math">cos 53.13° = 0.6</span>.</p><p>Hacer la misma división en forma binómica exigiría multiplicar por el conjugado: <span class="math">120/(3 + 4i) = 120(3 − 4i)/25 = 14.4 − 19.2i</span> A, que coincide (<span class="math">|14.4 − 19.2i| = 24</span>). La polar da el resultado y su interpretación (módulo y desfase) de inmediato.</p>`
    },
    calc: 'complejo-polar',
    examen: [
      {
        tipo: 'par',
        q: `Calcula <span class="math">(2 + 3i)(4 − i)</span>. Responde (parte real, parte imaginaria).`,
        r: [11, 10], tol: 0.01,
        pasos: [
          `Distribuye: <span class="math">8 − 2i + 12i − 3i²</span>.`,
          `Con <span class="math">i² = −1</span>: <span class="math">8 + 10i + 3</span>.`,
          `Resultado: <span class="math">11 + 10i</span>.`
        ]
      },
      {
        tipo: 'par',
        q: `Calcula <span class="math">(7 + i)/(3 − 4i)</span>. Responde (parte real, parte imaginaria) con 2 decimales.`,
        r: [0.68, 1.24], tol: 0.01,
        pasos: [
          `Multiplica por el conjugado <span class="math">3 + 4i</span>: numerador <span class="math">(7 + i)(3 + 4i) = 21 + 28i + 3i + 4i² = 17 + 31i</span>.`,
          `Denominador: <span class="math">9 + 16 = 25</span>.`,
          `<span class="math">17/25 = 0.68</span> y <span class="math">31/25 = 1.24</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula el módulo de <span class="math">−5 + 12i</span>.`,
        r: 13, tol: 0.01,
        pasos: [
          `<span class="math">|z| = √(a² + b²)</span>.`,
          `<span class="math">√(25 + 144) = √169</span>.`,
          `<span class="math">= 13</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula el argumento de <span class="math">−1 − i</span> en grados, entre 0° y 360°.`,
        r: 225, tol: 0.01,
        pasos: [
          `El punto (−1, −1) está en el cuadrante III.`,
          `Ángulo de referencia: <span class="math">arctan(1/1) = 45°</span>.`,
          `<span class="math">θ = 180° + 45° = 225°</span>.`
        ]
      },
      {
        tipo: 'par',
        q: `Escribe <span class="math">4(cos 60° + i sen 60°)</span> en forma <span class="math">a + bi</span>. Responde (a, b) con 2 decimales.`,
        r: [2, 3.46], tol: 0.01,
        pasos: [
          `<span class="math">a = 4 cos 60° = 4 · 1/2 = 2</span>.`,
          `<span class="math">b = 4 sen 60° = 4 · √3/2 = 2√3</span>.`,
          `<span class="math">2√3 ≈ 3.46</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula <span class="math">|(3 + 4i)(5 − 12i)|</span>.`,
        r: 65, tol: 0.01,
        pasos: [
          `El módulo del producto es el producto de los módulos.`,
          `<span class="math">|3 + 4i| = 5</span> y <span class="math">|5 − 12i| = √(25 + 144) = 13</span>.`,
          `<span class="math">5 · 13 = 65</span>.`
        ]
      },
      {
        tipo: 'par',
        q: `Calcula <span class="math">(3 + 4i)²</span>. Responde (parte real, parte imaginaria).`,
        r: [-7, 24], tol: 0.01,
        pasos: [
          `Desarrolla: <span class="math">(3 + 4i)² = 9 + 24i + 16i²</span>.`,
          `Con <span class="math">i² = −1</span>: <span class="math">9 − 16 + 24i</span>.`,
          `Resultado: <span class="math">−7 + 24i</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula el argumento, en grados, de <span class="math">(5 cis 250°)(2 cis 140°)</span> (valor entre 0° y 360°).`,
        r: 30, tol: 0.01,
        pasos: [
          `Al multiplicar en polar se suman los ángulos: <span class="math">250° + 140° = 390°</span>.`,
          `Resta una vuelta: <span class="math">390° − 360° = 30°</span>.`,
          `(El módulo del producto sería <span class="math">5 · 2 = 10</span>.)`
        ]
      },
      {
        tipo: 'opt',
        q: `La forma polar de <span class="math">z = −1 + √3 i</span> es:`,
        opciones: [`<span class="math">2 cis 60°</span>`, `<span class="math">2 cis 150°</span>`, `<span class="math">2 cis 120°</span>`, `<span class="math">2 cis 240°</span>`],
        correcta: 2,
        pasos: [
          `<span class="math">r = √(1 + 3) = 2</span>.`,
          `Referencia <span class="math">arctan √3 = 60°</span>, y el punto (−1, √3) está en el cuadrante II.`,
          `<span class="math">θ = 180° − 60° = 120°</span>.`
        ]
      },
      {
        tipo: 'opt',
        q: `¿Cuál afirmación sobre <span class="math">z = a + bi</span> es verdadera?`,
        opciones: [`<span class="math">z · z̄ = a² − b²</span>`, `<span class="math">z · z̄ = |z|</span>`, `<span class="math">z · z̄ = 2a</span>`, `<span class="math">z · z̄ = a² + b²</span>`],
        correcta: 3,
        pasos: [
          `<span class="math">(a + bi)(a − bi) = a² − b²i²</span>.`,
          `Como <span class="math">i² = −1</span>, resulta <span class="math">a² + b²</span>.`,
          `Eso es <span class="math">|z|²</span>, no <span class="math">|z|</span>.`
        ]
      }
    ]
  };

  T['1.9'] = {
    id: '1.9',
    unidad: 2,
    titulo: 'Teorema de De Moivre: potencias y raíces',
    resumen: `Calcularás potencias y raíces n-ésimas de números complejos con De Moivre y las ubicarás como vértices de un polígono regular.`,
    objetivos: [
      `Enunciar el teorema de De Moivre y usarlo para elevar un complejo a una potencia entera.`,
      `Calcular las n raíces n-ésimas de un complejo con la fórmula general, variando k de 0 a n − 1.`,
      `Representar gráficamente las raíces como vértices de un polígono regular inscrito en una circunferencia.`,
      `Resolver ecuaciones de la forma zⁿ = w y deducir identidades trigonométricas con De Moivre.`
    ],
    teoria: [
      { titulo: `El teorema de De Moivre`, html: `<p>En el tema 1.8 viste que al multiplicar complejos en polar se multiplican los módulos y se suman los ángulos. Si multiplicas z por sí mismo n veces, el módulo se eleva a la n y el ángulo se multiplica por n:</p><p><span class="math">[r(cos θ + i sen θ)]<sup>n</sup> = r<sup>n</sup>(cos nθ + i sen nθ)</span></p><p>Esto es el <strong>teorema de De Moivre</strong>, válido para todo entero n (positivo, cero o negativo). Se demuestra por inducción: para n = 1 es trivial, y si vale para n, al multiplicar por <span class="math">z = r cis θ</span> los ángulos se suman y queda <span class="math">r<sup>n+1</sup> cis((n+1)θ)</span>. En particular, para módulo 1: <span class="math">(cos θ + i sen θ)<sup>n</sup> = cos nθ + i sen nθ</span>.</p>` },
      { titulo: `Procedimiento para calcular potencias`, html: `<p>Elevar <span class="math">(1 + i)<sup>8</sup></span> expandiendo el binomio sería larguísimo. Con De Moivre:</p><ol><li><strong>Pasa a polar:</strong> calcula r y θ (cuidando el cuadrante).</li><li><strong>Aplica la fórmula:</strong> <span class="math">r<sup>n</sup></span> y <span class="math">nθ</span>.</li><li><strong>Reduce el ángulo</strong> restando vueltas completas de 360° (opcional, pero facilita los valores de sen y cos).</li><li><strong>Convierte a binómica</strong> si te lo piden: <span class="math">a = r<sup>n</sup> cos nθ</span>, <span class="math">b = r<sup>n</sup> sen nθ</span>.</li></ol><p>Para exponentes negativos: <span class="math">z<sup>−n</sup> = r<sup>−n</sup> cis(−nθ)</span>. Y recuerda que el módulo de la potencia crece o decrece con <span class="math">r<sup>n</sup></span>: un complejo de módulo 1 siempre se queda en el círculo unitario.</p>` },
      { titulo: `Raíces n-ésimas: la fórmula`, html: `<p>Un número complejo <span class="math">w = r cis θ</span> (con r > 0) tiene <strong>exactamente n raíces n-ésimas distintas</strong>, es decir, n soluciones de <span class="math">z<sup>n</sup> = w</span>:</p><p><span class="math">z<sub>k</sub> = <sup>n</sup>√r · cis((θ + 360°k)/n)</span>, &nbsp; k = 0, 1, 2, …, n − 1</p><p>(en radianes: <span class="math">cis((θ + 2πk)/n)</span>). <strong>Por qué:</strong> si <span class="math">z = ρ cis φ</span>, entonces <span class="math">z<sup>n</sup> = ρ<sup>n</sup> cis nφ</span>. Para que sea igual a w se necesita <span class="math">ρ<sup>n</sup> = r</span> y <span class="math">nφ = θ + 360°k</span> (porque los ángulos coinciden salvo vueltas completas). Despejando φ aparecen los n ángulos distintos; con k = n se repite el de k = 0, y no hay más.</p><p>Todas las raíces tienen el <strong>mismo módulo</strong> <span class="math"><sup>n</sup>√r</span> y sus ángulos aumentan en pasos de <span class="math">360°/n</span>.</p>` },
      { titulo: `Procedimiento para calcular raíces`, html: `<ol><li><strong>Pasa w a polar</strong> (r y θ con el cuadrante correcto). Si w es real negativo, θ = 180°; si es imaginario negativo, θ = 270°.</li><li><strong>Módulo común:</strong> <span class="math"><sup>n</sup>√r</span>.</li><li><strong>Primer argumento:</strong> <span class="math">θ/n</span> (es el de k = 0).</li><li><strong>Paso angular:</strong> <span class="math">360°/n</span>. Suma el paso para obtener los siguientes, hasta tener n raíces.</li><li><strong>Convierte</strong> a binómica si lo piden.</li></ol><p><strong>Comprobación rápida:</strong> eleva una de las raíces a la n y verifica que reproduce w; además, la suma de las n raíces siempre es 0 (para n ≥ 2).</p>` },
      { titulo: `Representación gráfica: polígonos regulares`, html: `<p>Como las n raíces tienen el mismo módulo, todas están sobre una <strong>circunferencia de radio <span class="math"><sup>n</sup>√r</span></strong> con centro en el origen; y como sus ángulos están separados por <span class="math">360°/n</span>, son los <strong>vértices de un polígono regular de n lados</strong> inscrito en esa circunferencia. El polígono "gira" según θ/n.</p><p><strong>Cómo dibujarlas:</strong> (1) traza la circunferencia de radio <span class="math"><sup>n</sup>√r</span>; (2) marca el primer punto en el ángulo θ/n; (3) marca los demás separados 360°/n, de modo que el polígono queda dividido en arcos iguales.</p><p>Ejemplo, raíces cúbicas de 8 (circunferencia de radio 2, triángulo equilátero):</p><table><tr><th>k</th><th>Ángulo</th><th>Forma polar</th><th>Binómica</th></tr><tr><td>0</td><td>0°</td><td><span class="math">2 cis 0°</span></td><td><span class="math">2</span></td></tr><tr><td>1</td><td>120°</td><td><span class="math">2 cis 120°</span></td><td><span class="math">−1 + √3 i</span></td></tr><tr><td>2</td><td>240°</td><td><span class="math">2 cis 240°</span></td><td><span class="math">−1 − √3 i</span></td></tr></table><p>Ejemplo, raíces sextas de 1: circunferencia unitaria, hexágono regular con vértices en 0°, 60°, 120°, 180°, 240°, 300°: <span class="math">1</span>, <span class="math">1/2 + (√3/2)i</span>, <span class="math">−1/2 + (√3/2)i</span>, <span class="math">−1</span>, <span class="math">−1/2 − (√3/2)i</span>, <span class="math">1/2 − (√3/2)i</span>.</p>` },
      { titulo: `Raíces de la unidad`, html: `<p>Las soluciones de <span class="math">z<sup>n</sup> = 1</span> son las <strong>raíces n-ésimas de la unidad</strong>: <span class="math">cis(360°k/n)</span>, k = 0, …, n − 1. Siempre incluyen a 1 y forman un polígono regular inscrito en el círculo unitario con un vértice en (1, 0).</p><ul><li>n = 2: <span class="math">1, −1</span>.</li><li>n = 3: <span class="math">1, −1/2 ± (√3/2)i</span> (triángulo).</li><li>n = 4: <span class="math">1, i, −1, −i</span> (cuadrado).</li><li>n = 6: hexágono (ver arriba).</li></ul><p>Propiedades: su suma es 0 y su producto es <span class="math">(−1)<sup>n+1</sup></span>. Además, las raíces n-ésimas de cualquier w se obtienen multiplicando una de ellas por las raíces de la unidad. Estas ideas aparecen en ingeniería eléctrica (sistemas trifásicos) y en el procesamiento de señales (transformada de Fourier).</p>` },
      { titulo: `Identidades trigonométricas con De Moivre`, html: `<p>Si desarrollas <span class="math">(cos θ + i sen θ)³</span> con el binomio e igualas con <span class="math">cos 3θ + i sen 3θ</span>:</p><p><span class="math">(cos θ + i sen θ)³ = cos³θ + 3i cos²θ sen θ − 3 cos θ sen²θ − i sen³θ</span></p><p>La parte real da <span class="math">cos 3θ = cos³θ − 3 cos θ sen²θ = 4cos³θ − 3 cos θ</span>, y la parte imaginaria da <span class="math">sen 3θ = 3cos²θ sen θ − sen³θ = 3 sen θ − 4sen³θ</span>. (La segunda coincide con lo que demostraste en 1.6.) Con n = 2 se obtienen las fórmulas del ángulo doble.</p>` },
      { titulo: `Curiosidad: la fórmula de Euler`, html: `<p>Leonhard Euler observó que, si se define <span class="math">e<sup>iθ</sup> = cos θ + i sen θ</span> (θ en radianes), las reglas de los exponentes reproducen exactamente las de De Moivre: <span class="math">(e<sup>iθ</sup>)<sup>n</sup> = e<sup>inθ</sup></span> y <span class="math">e<sup>iα</sup>e<sup>iβ</sup> = e<sup>i(α+β)</sup></span>. Con esta notación, <span class="math">z = r e<sup>iθ</sup></span> es la <em>forma exponencial</em>, y para θ = π queda la célebre identidad</p><p><span class="math">e<sup>iπ</sup> + 1 = 0</span></p><p>que une e, i, π, 1 y 0. No la necesitarás para resolver los ejercicios de este curso, pero verás que sustenta la teoría de circuitos y de ecuaciones diferenciales en tus siguientes años de ingeniería.</p>` }
    ],
    formulas: [
      { label: `Teorema de De Moivre`, html: `<span class="math">[r(cos θ + i sen θ)]<sup>n</sup> = r<sup>n</sup>(cos nθ + i sen nθ)</span>` },
      { label: `Con módulo 1`, html: `<span class="math">(cos θ + i sen θ)<sup>n</sup> = cos nθ + i sen nθ</span>` },
      { label: `Raíces n-ésimas (grados)`, html: `<span class="math">z<sub>k</sub> = <sup>n</sup>√r · cis((θ + 360°k)/n)</span>, k = 0, 1, …, n − 1` },
      { label: `Raíces n-ésimas (radianes)`, html: `<span class="math">z<sub>k</sub> = <sup>n</sup>√r · cis((θ + 2πk)/n)</span>` },
      { label: `Paso angular entre raíces`, html: `<span class="math">360°/n</span> &nbsp;(polígono regular de n lados)` },
      { label: `Raíces de la unidad`, html: `<span class="math">z<sup>n</sup> = 1 ⇒ z<sub>k</sub> = cis(360°k/n)</span>` },
      { label: `Suma de las raíces`, html: `<span class="math">z<sub>0</sub> + z<sub>1</sub> + … + z<sub>n−1</sub> = 0</span> &nbsp;(n ≥ 2)` },
      { label: `Fórmula de Euler`, html: `<span class="math">e<sup>iθ</sup> = cos θ + i sen θ</span> &nbsp;;&nbsp; <span class="math">e<sup>iπ</sup> + 1 = 0</span>` }
    ],
    ejemplos: [
      {
        titulo: `Potencia de un complejo`,
        enunciado: `Calcula <span class="math">(1 + i)<sup>8</sup></span>.`,
        pasos: [
          `Pasa a polar: <span class="math">r = √(1 + 1) = √2</span> y <span class="math">θ = 45°</span> (cuadrante I).`,
          `De Moivre: <span class="math">(√2)<sup>8</sup> cis(8 · 45°) = 16 cis 360°</span> (porque <span class="math">(√2)<sup>8</sup> = 2<sup>4</sup> = 16</span>).`,
          `<span class="math">cis 360° = cis 0° = 1</span>, así que el resultado es 16.`
        ],
        respuesta: `<span class="math">(1 + i)<sup>8</sup> = 16</span>.`
      },
      {
        titulo: `Potencia con resultado complejo`,
        enunciado: `Calcula <span class="math">(−1 + √3 i)<sup>5</sup></span> en forma binómica.`,
        pasos: [
          `Polar: <span class="math">r = 2</span> y <span class="math">θ = 120°</span> (cuadrante II).`,
          `De Moivre: <span class="math">2<sup>5</sup> cis(5 · 120°) = 32 cis 600°</span>.`,
          `Reduce: <span class="math">600° − 360° = 240°</span>, así que <span class="math">32 cis 240°</span>.`,
          `<span class="math">cos 240° = −1/2</span> y <span class="math">sen 240° = −√3/2</span>: <span class="math">32(−1/2) + 32(−√3/2)i = −16 − 16√3 i</span>.`
        ],
        respuesta: `<span class="math">−16 − 16√3 i ≈ −16 − 27.71i</span>.`
      },
      {
        titulo: `Raíces cúbicas de un real`,
        enunciado: `Halla las raíces cúbicas de 8 y represéntalas.`,
        pasos: [
          `Polar: <span class="math">8 = 8 cis 0°</span>. Módulo común: <span class="math"><sup>3</sup>√8 = 2</span>.`,
          `Primer argumento: <span class="math">0°/3 = 0°</span>. Paso: <span class="math">360°/3 = 120°</span>.`,
          `Las raíces son <span class="math">2 cis 0°</span>, <span class="math">2 cis 120°</span> y <span class="math">2 cis 240°</span>.`,
          `En binómica: <span class="math">2</span>, <span class="math">−1 + √3 i</span>, <span class="math">−1 − √3 i</span>.`,
          `Gráfica: los tres puntos son los vértices de un triángulo equilátero inscrito en la circunferencia de radio 2, con un vértice en (2, 0).`
        ],
        respuesta: `<span class="math">z = 2, &nbsp;−1 + √3 i, &nbsp;−1 − √3 i</span>.`
      },
      {
        titulo: `Raíces cuartas de un real negativo`,
        enunciado: `Resuelve <span class="math">z⁴ = −16</span>.`,
        pasos: [
          `Polar: <span class="math">−16 = 16 cis 180°</span>. Módulo común: <span class="math"><sup>4</sup>√16 = 2</span>.`,
          `Primer argumento: <span class="math">180°/4 = 45°</span>. Paso: <span class="math">360°/4 = 90°</span>: ángulos 45°, 135°, 225°, 315°.`,
          `Binómica: <span class="math">2 cis 45° = √2 + √2 i</span>, <span class="math">2 cis 135° = −√2 + √2 i</span>, <span class="math">2 cis 225° = −√2 − √2 i</span>, <span class="math">2 cis 315° = √2 − √2 i</span>.`,
          `Son los vértices de un cuadrado inscrito en la circunferencia de radio 2, girado 45° respecto a los ejes.`
        ],
        respuesta: `<span class="math">z = ±√2 ± √2 i</span> (las cuatro combinaciones de signos).`
      },
      {
        titulo: `Raíces cúbicas de un imaginario`,
        enunciado: `Calcula las raíces cúbicas de <span class="math">−27i</span>.`,
        pasos: [
          `<span class="math">−27i</span> está sobre el eje imaginario negativo: <span class="math">r = 27</span>, <span class="math">θ = 270°</span>.`,
          `Módulo común <span class="math"><sup>3</sup>√27 = 3</span>. Primer ángulo <span class="math">270°/3 = 90°</span>; paso 120°: ángulos 90°, 210°, 330°.`,
          `<span class="math">3 cis 90° = 3i</span>.`,
          `<span class="math">3 cis 210° = 3(−√3/2 − 1/2 i) = −(3√3/2) − (3/2)i ≈ −2.60 − 1.50i</span>.`,
          `<span class="math">3 cis 330° = 3(√3/2 − 1/2 i) = (3√3/2) − (3/2)i ≈ 2.60 − 1.50i</span>.`,
          `Comprobación: <span class="math">(3i)³ = 27i³ = −27i</span> ✓.`
        ],
        respuesta: `<span class="math">3i</span>, &nbsp;<span class="math">−(3√3/2) − (3/2)i</span> &nbsp;y&nbsp; <span class="math">(3√3/2) − (3/2)i</span>.`
      },
      {
        titulo: `Ecuación con un complejo general`,
        enunciado: `Resuelve <span class="math">z⁴ = −8 + 8√3 i</span> y describe la figura que forman las soluciones.`,
        pasos: [
          `Módulo: <span class="math">r = √(64 + 192) = √256 = 16</span>. Referencia: <span class="math">arctan(8√3/8) = 60°</span>; cuadrante II: <span class="math">θ = 120°</span>.`,
          `Módulo común: <span class="math"><sup>4</sup>√16 = 2</span>. Primer ángulo: <span class="math">120°/4 = 30°</span>. Paso: <span class="math">360°/4 = 90°</span>.`,
          `Ángulos: 30°, 120°, 210°, 300°. Raíces: <span class="math">2 cis 30° = √3 + i</span>; <span class="math">2 cis 120° = −1 + √3 i</span>.`,
          `<span class="math">2 cis 210° = −√3 − i</span>; <span class="math">2 cis 300° = 1 − √3 i</span>.`,
          `Comprobación con <span class="math">z<sub>0</sub> = √3 + i</span>: <span class="math">z<sub>0</sub>² = 3 + 2√3 i − 1 = 2 + 2√3 i</span> y <span class="math">(2 + 2√3 i)² = 4 + 8√3 i − 12 = −8 + 8√3 i</span> ✓.`,
          `Figura: un cuadrado inscrito en la circunferencia de radio 2, con un vértice a 30° del eje real.`
        ],
        respuesta: `<span class="math">z = √3 + i, &nbsp;−1 + √3 i, &nbsp;−√3 − i, &nbsp;1 − √3 i</span>; vértices de un cuadrado de circunradio 2.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Calcula <span class="math">(2 cis 30°)³</span> y escribe el resultado en forma binómica.`,
        pasos: [
          `De Moivre: <span class="math">2³ cis(3 · 30°) = 8 cis 90°</span>.`,
          `<span class="math">cis 90° = i</span>, así que el resultado es <span class="math">8i</span>.`
        ],
        respuesta: `<span class="math">8i</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula <span class="math">(cos 20° + i sen 20°)<sup>9</sup></span>.`,
        pasos: [
          `Módulo 1, así que solo se multiplica el ángulo: <span class="math">cos(9 · 20°) + i sen(9 · 20°)</span>.`,
          `<span class="math">9 · 20° = 180°</span>, con <span class="math">cos 180° = −1</span> y <span class="math">sen 180° = 0</span>.`
        ],
        respuesta: `<span class="math">−1</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula <span class="math">(3 cis 40°)³</span> y escribe el resultado en forma polar y binómica.`,
        pasos: [
          `<span class="math">3³ = 27</span> y <span class="math">3 · 40° = 120°</span>: <span class="math">27 cis 120°</span>.`,
          `<span class="math">27 cos 120° = −13.5</span> y <span class="math">27 sen 120° = 27√3/2 ≈ 23.38</span>.`
        ],
        respuesta: `<span class="math">27 cis 120° = −13.5 + (27√3/2)i ≈ −13.5 + 23.38i</span>.`
      },
      {
        nivel: 'facil',
        enunciado: `Halla las raíces cuadradas de <span class="math">−4</span>.`,
        pasos: [
          `<span class="math">−4 = 4 cis 180°</span>. Módulo común <span class="math">√4 = 2</span>.`,
          `Primer ángulo <span class="math">180°/2 = 90°</span>; paso <span class="math">360°/2 = 180°</span>: ángulos 90° y 270°.`,
          `<span class="math">2 cis 90° = 2i</span> y <span class="math">2 cis 270° = −2i</span>.`
        ],
        respuesta: `<span class="math">z = 2i</span> y <span class="math">z = −2i</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula <span class="math">(1 + i)<sup>6</sup></span>.`,
        pasos: [
          `<span class="math">1 + i = √2 cis 45°</span>.`,
          `<span class="math">(√2)<sup>6</sup> = 2³ = 8</span> y <span class="math">6 · 45° = 270°</span>.`,
          `<span class="math">8 cis 270° = 8(0 − i) = −8i</span>.`
        ],
        respuesta: `<span class="math">−8i</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula <span class="math">(√3 − i)<sup>5</sup></span> en forma binómica.`,
        pasos: [
          `Módulo <span class="math">r = √(3 + 1) = 2</span>; el punto (√3, −1) está en el cuadrante IV con referencia 30°: <span class="math">θ = 330°</span> (o −30°).`,
          `De Moivre: <span class="math">2<sup>5</sup> cis(5 · 330°) = 32 cis 1650°</span>; <span class="math">1650° − 4 · 360° = 210°</span>.`,
          `<span class="math">32 cis 210° = 32(−√3/2) + 32(−1/2)i = −16√3 − 16i</span>.`
        ],
        respuesta: `<span class="math">−16√3 − 16i ≈ −27.71 − 16i</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula <span class="math">(1 − i)<sup>10</sup></span>.`,
        pasos: [
          `<span class="math">1 − i = √2 cis(−45°)</span> (cuadrante IV).`,
          `<span class="math">(√2)<sup>10</sup> = 2<sup>5</sup> = 32</span> y <span class="math">10 · (−45°) = −450°</span>.`,
          `<span class="math">−450° + 360° = −90°</span>, y <span class="math">32 cis(−90°) = 32(0 − i) = −32i</span>.`
        ],
        respuesta: `<span class="math">−32i</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla las raíces cúbicas de 27 y descríbelas geométricamente.`,
        pasos: [
          `<span class="math">27 = 27 cis 0°</span>; módulo común <span class="math"><sup>3</sup>√27 = 3</span>; paso 120°.`,
          `Raíces: <span class="math">3 cis 0° = 3</span>; <span class="math">3 cis 120° = −3/2 + (3√3/2)i</span>; <span class="math">3 cis 240° = −3/2 − (3√3/2)i</span>.`,
          `Forman un triángulo equilátero inscrito en la circunferencia de radio 3.`
        ],
        respuesta: `<span class="math">3, &nbsp;−3/2 + (3√3/2)i, &nbsp;−3/2 − (3√3/2)i</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Resuelve <span class="math">z⁶ = 1</span>, comprueba que la suma de las raíces es 0 y describe su representación gráfica.`,
        pasos: [
          `<span class="math">1 = 1 cis 0°</span>; módulo común 1; paso <span class="math">360°/6 = 60°</span>: ángulos 0°, 60°, 120°, 180°, 240°, 300°.`,
          `Raíces: <span class="math">1</span>; <span class="math">1/2 + (√3/2)i</span>; <span class="math">−1/2 + (√3/2)i</span>; <span class="math">−1</span>; <span class="math">−1/2 − (√3/2)i</span>; <span class="math">1/2 − (√3/2)i</span>.`,
          `Suma de partes reales: <span class="math">1 + 1/2 − 1/2 − 1 − 1/2 + 1/2 = 0</span>; de partes imaginarias: <span class="math">√3/2 + √3/2 − √3/2 − √3/2 = 0</span>.`,
          `Gráfica: hexágono regular inscrito en la circunferencia unitaria con un vértice en (1, 0).`
        ],
        respuesta: `Las seis raíces <span class="math">cis(60°k)</span>, k = 0, …, 5; suma 0; vértices de un hexágono regular.`
      },
      {
        nivel: 'dificil',
        enunciado: `Calcula <span class="math">(−1 − i)<sup>7</sup></span> en forma binómica.`,
        pasos: [
          `Módulo <span class="math">r = √2</span>; el punto (−1, −1) está en el cuadrante III: <span class="math">θ = 225°</span>.`,
          `De Moivre: <span class="math">(√2)<sup>7</sup> cis(7 · 225°) = 8√2 cis 1575°</span>, pues <span class="math">(√2)<sup>7</sup> = 2³ · √2</span>.`,
          `Reduce: <span class="math">1575° − 4 · 360° = 135°</span>.`,
          `<span class="math">8√2(cos 135° + i sen 135°) = 8√2(−√2/2 + (√2/2)i) = −8 + 8i</span>.`
        ],
        respuesta: `<span class="math">−8 + 8i</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla las raíces quintas de <span class="math">32i</span> en forma polar y, con calculadora, en forma binómica (2 decimales).`,
        pasos: [
          `<span class="math">32i = 32 cis 90°</span>. Módulo común <span class="math"><sup>5</sup>√32 = 2</span>.`,
          `Primer ángulo <span class="math">90°/5 = 18°</span>; paso <span class="math">360°/5 = 72°</span>: ángulos 18°, 90°, 162°, 234°, 306°.`,
          `Binómica: <span class="math">2 cis 18° ≈ 1.90 + 0.62i</span>; <span class="math">2 cis 90° = 2i</span>; <span class="math">2 cis 162° ≈ −1.90 + 0.62i</span>.`,
          `<span class="math">2 cis 234° ≈ −1.18 − 1.62i</span>; <span class="math">2 cis 306° ≈ 1.18 − 1.62i</span>.`,
          `Forman un pentágono regular de circunradio 2; una de las raíces es <span class="math">2i</span>, que comprueba: <span class="math">(2i)<sup>5</sup> = 32 i<sup>5</sup> = 32i</span> ✓.`
        ],
        respuesta: `<span class="math">2 cis(18° + 72°k)</span>, k = 0, …, 4; pentágono regular de radio 2.`
      }
    ],
    teoricas: [
      {
        q: `¿Por qué un número complejo no nulo tiene exactamente n raíces n-ésimas distintas?`,
        a: `Porque <span class="math">z<sup>n</sup> = w</span> exige <span class="math">ρ<sup>n</sup> = r</span> (un único módulo posible) y <span class="math">nφ = θ + 360°k</span>. Los ángulos <span class="math">φ = (θ + 360°k)/n</span> son distintos para k = 0, …, n − 1 y a partir de k = n se repiten. Es la versión compleja de que un polinomio de grado n tiene n raíces.`
      },
      {
        q: `¿Qué figura forman en el plano complejo las n raíces n-ésimas de un número?`,
        a: `Un polígono regular de n lados inscrito en la circunferencia de radio <span class="math"><sup>n</sup>√r</span> con centro en el origen: todas tienen el mismo módulo y sus ángulos están separados por <span class="math">360°/n</span>.`
      },
      {
        q: `¿Por qué hay que tomar k = 0, 1, …, n − 1 y no más valores de k?`,
        a: `Con k = n el ángulo es <span class="math">(θ + 360°n)/n = θ/n + 360°</span>, que es el mismo que el de k = 0 (una vuelta completa). Cualquier k fuera del rango repite alguna de las n raíces ya encontradas.`
      },
      {
        q: `Sin calcular, ¿cuál es la suma de las cinco raíces quintas de cualquier número complejo? Justifica.`,
        a: `Es 0. Las raíces son <span class="math">z<sub>0</sub> · ω<sup>k</sup></span> con ω = cis 72°, y la suma de los ω<sup>k</sup> es 0 porque forman un pentágono regular centrado en el origen (el "centro de masa" está en el origen). También sale de que el coeficiente de <span class="math">z<sup>4</sup></span> en <span class="math">z⁵ − w = 0</span> es 0.`
      },
      {
        q: `¿Es válido el teorema de De Moivre para exponentes negativos? Muestra un ejemplo.`,
        a: `Sí. Por ejemplo <span class="math">(cis 30°)<sup>−2</sup> = cis(−60°) = 1/2 − (√3/2)i</span>, y coincide con <span class="math">1/(cis 60°) = cis(−60°)</span>, porque el inverso de <span class="math">cis θ</span> es <span class="math">cis(−θ)</span>.`
      },
      {
        q: `¿Qué pasa con la fórmula de las raíces si w es real positivo? ¿Siempre aparece una raíz real?`,
        a: `Si w > 0, θ = 0° y una de las raíces (k = 0) es la raíz real positiva habitual <span class="math"><sup>n</sup>√w</span>. Si w < 0, hay una raíz real solo cuando n es impar (por ejemplo, <span class="math">z³ = −8</span> tiene a −2); con n par todas las raíces son no reales.`
      },
      {
        q: `¿Por qué <span class="math">(1 + i)<sup>8</sup> = 16</span> es un real, aunque 1 + i no lo sea?`,
        a: `Porque 1 + i tiene argumento 45° y al elevar a la 8 el ángulo se vuelve <span class="math">8 · 45° = 360°</span>, una vuelta completa, que cae sobre el eje real positivo. Un complejo elevado a n es real cuando <span class="math">nθ</span> es múltiplo de 180°.`
      },
      {
        q: `¿Cómo se relaciona la fórmula de Euler con De Moivre?`,
        a: `Con <span class="math">e<sup>iθ</sup> = cos θ + i sen θ</span>, la potencia <span class="math">(e<sup>iθ</sup>)<sup>n</sup> = e<sup>inθ</sup></span> es exactamente De Moivre: <span class="math">cos nθ + i sen nθ</span>. La fórmula de Euler "explica" por qué los ángulos se suman al multiplicar: se suman los exponentes.`
      }
    ],
    errores: [
      `Pasar a polar con el cuadrante equivocado (por ejemplo, tomar <span class="math">−1 − i = √2 cis 45°</span>) y, por tanto, obtener el resultado con el signo o la dirección errados. Dibuja el punto antes de fijar θ.`,
      `Elevar solo el ángulo o solo el módulo: la regla exige elevar el módulo a la n (<span class="math">r<sup>n</sup></span>) y MULTIPLICAR el ángulo por n (nθ). Escribir <span class="math">(1 + i)<sup>8</sup> = 2 cis 360°</span> olvida elevar <span class="math">√2</span>.`,
      `En las raíces, dividir solo el ángulo θ entre n y olvidar sumar <span class="math">360°k</span>: así solo se encuentra una raíz de las n. Recuerda que hay exactamente n soluciones, con ángulos separados por <span class="math">360°/n</span>.`,
      `Calcular la raíz del módulo mal o dividir el módulo entre n (<span class="math"><sup>3</sup>√8 ≠ 8/3</span>). El módulo común es la raíz n-ésima real de r, no r/n.`
    ],
    aplicacion: {
      titulo: `Sistema eléctrico trifásico`,
      html: `<p>Las industrias salvadoreñas (talleres, bombas de agua, ingenios) usan corriente trifásica: tres voltajes de igual amplitud desfasados 120°. Si cada fase es de 120 V, los fasores son <span class="math">V<sub>1</sub> = 120 cis 0°</span>, <span class="math">V<sub>2</sub> = 120 cis 120°</span>, <span class="math">V<sub>3</sub> = 120 cis 240°</span>, es decir, <strong>120 por las raíces cúbicas de la unidad</strong>: forman un triángulo equilátero en el plano complejo.</p><p><strong>1. Suma de las tres fases.</strong> Como la suma de las raíces cúbicas de la unidad es 0, <span class="math">V<sub>1</sub> + V<sub>2</sub> + V<sub>3</sub> = 0</span>: en un sistema equilibrado no circula corriente por el neutro. Comprobación: <span class="math">120(1 + (−1/2 + (√3/2)i) + (−1/2 − (√3/2)i)) = 120(0) = 0</span>.</p><p><strong>2. Voltaje entre dos líneas.</strong> El voltaje de línea es la diferencia <span class="math">V<sub>1</sub> − V<sub>2</sub> = 120(1 − cis 120°) = 120(3/2 − (√3/2)i)</span>. Su módulo es <span class="math">120 · √(9/4 + 3/4) = 120√3 ≈ 207.8</span> V (de ahí el conocido sistema "<span class="math">120/208</span> V").</p><p><strong>3. Desfase.</strong> <span class="math">arg(3/2 − (√3/2)i) = −30°</span>, por lo que el voltaje de línea está 30° adelantado o atrasado respecto a la fase, según la convención de la figura.</p><p>Las matemáticas del tema (raíces de la unidad y polígonos regulares) son exactamente las que describen este sistema.</p>`
    },
    calc: 'moivre',
    examen: [
      {
        tipo: 'par',
        q: `Calcula <span class="math">(1 + i)<sup>6</sup></span>. Responde (parte real, parte imaginaria).`,
        r: [0, -8], tol: 0.01,
        pasos: [
          `<span class="math">1 + i = √2 cis 45°</span>.`,
          `De Moivre: <span class="math">(√2)<sup>6</sup> cis 270° = 8 cis 270°</span>.`,
          `<span class="math">8(cos 270° + i sen 270°) = 8(0 − i) = −8i</span>, es decir, (0, −8).`
        ]
      },
      {
        tipo: 'par',
        q: `Calcula <span class="math">(√3 − i)<sup>5</sup></span>. Responde (parte real, parte imaginaria) con 2 decimales.`,
        r: [-27.71, -16], tol: 0.01,
        pasos: [
          `<span class="math">√3 − i = 2 cis(−30°)</span> (cuadrante IV).`,
          `De Moivre: <span class="math">2<sup>5</sup> cis(−150°) = 32 cis(−150°) = 32 cis 210°</span>.`,
          `<span class="math">32 cos 210° = −16√3 ≈ −27.71</span> y <span class="math">32 sen 210° = −16</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Las raíces sextas de 64 son seis números complejos que tienen todos el mismo módulo. ¿Cuánto vale?`,
        r: 2, tol: 0.01,
        pasos: [
          `El módulo común es la raíz sexta real del módulo de 64.`,
          `<span class="math"><sup>6</sup>√64 = 2</span>, porque <span class="math">2⁶ = 64</span>.`,
          `Las seis raíces están sobre la circunferencia de radio 2 (un hexágono regular).`
        ]
      },
      {
        tipo: 'num',
        q: `Considera la ecuación <span class="math">z³ = i</span>. Calcula el argumento, en grados, de la raíz que se obtiene con k = 1.`,
        r: 150, tol: 0.01,
        pasos: [
          `<span class="math">i = 1 cis 90°</span>.`,
          `Fórmula: <span class="math">φ<sub>k</sub> = (90° + 360°k)/3</span>.`,
          `Con k = 1: <span class="math">(90° + 360°)/3 = 150°</span>.`
        ]
      },
      {
        tipo: 'par',
        q: `Una de las raíces cuadradas de <span class="math">8i</span> es la que corresponde a k = 0. Responde (parte real, parte imaginaria).`,
        r: [2, 2], tol: 0.01,
        pasos: [
          `<span class="math">8i = 8 cis 90°</span>. Módulo común <span class="math">√8 = 2√2</span>; primer ángulo <span class="math">90°/2 = 45°</span>.`,
          `<span class="math">2√2 cis 45° = 2√2(√2/2 + (√2/2)i)</span>.`,
          `<span class="math">= 2 + 2i</span>, es decir, (2, 2). (Comprobación: <span class="math">(2 + 2i)² = 4 + 8i − 4 = 8i</span> ✓.)`
        ]
      },
      {
        tipo: 'lista',
        q: `Escribe, en grados y separados por comas, los argumentos (entre 0° y 360°) de las tres raíces cúbicas de 8.`,
        r: [0, 120, 240], tol: 0.01,
        pasos: [
          `<span class="math">8 = 8 cis 0°</span>; primer ángulo <span class="math">0°/3 = 0°</span>.`,
          `El paso entre raíces es <span class="math">360°/3 = 120°</span>.`,
          `Los ángulos son 0°, 120° y 240°.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula la parte real de <span class="math">(1 + i)<sup>20</sup></span>.`,
        r: -1024, tol: 0.01,
        pasos: [
          `<span class="math">1 + i = √2 cis 45°</span>.`,
          `<span class="math">(√2)<sup>20</sup> = 2<sup>10</sup> = 1024</span> y <span class="math">20 · 45° = 900° = 2 · 360° + 180°</span>.`,
          `<span class="math">1024 cis 180° = −1024</span>, un número real.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula el producto de las tres raíces cúbicas de 8 (es un número real).`,
        r: 8, tol: 0.01,
        pasos: [
          `Raíces: <span class="math">2 cis 0°</span>, <span class="math">2 cis 120°</span>, <span class="math">2 cis 240°</span>.`,
          `Se multiplican los módulos: <span class="math">2 · 2 · 2 = 8</span>, y se suman los ángulos: <span class="math">0° + 120° + 240° = 360°</span>.`,
          `<span class="math">8 cis 360° = 8</span>.`
        ]
      },
      {
        tipo: 'opt',
        q: `¿Cuántas soluciones distintas (complejas) tiene la ecuación <span class="math">z⁵ = −3 + 4i</span>?`,
        opciones: [`1`, `4`, `5`, `10`],
        correcta: 2,
        pasos: [
          `Un complejo no nulo tiene exactamente n raíces n-ésimas distintas.`,
          `Aquí n = 5 y <span class="math">w = −3 + 4i ≠ 0</span> (módulo 5).`,
          `Hay 5 soluciones, con ángulos separados 72°.`
        ]
      },
      {
        tipo: 'opt',
        q: `En el plano complejo, las raíces n-ésimas de un número complejo no nulo se ubican en:`,
        opciones: [`una recta horizontal`, `una parábola`, `el círculo unitario siempre`, `los vértices de un polígono regular de n lados con centro en el origen`],
        correcta: 3,
        pasos: [
          `Todas las raíces tienen el mismo módulo <span class="math"><sup>n</sup>√r</span>, así que están sobre una circunferencia (no siempre la unitaria).`,
          `Sus ángulos están separados por <span class="math">360°/n</span>.`,
          `Por tanto son los vértices de un polígono regular de n lados inscrito en esa circunferencia.`
        ]
      }
    ]
  };

})();

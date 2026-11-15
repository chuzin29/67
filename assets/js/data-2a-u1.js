/* data-2a-u1.js — Unidad 1: Ecuaciones */
(function () {
  var T = (window.CURSO_2A = window.CURSO_2A || { temas: {} }).temas;

  /* ============================================================ 1.1 */
  T['1.1'] = {
    id: '1.1',
    unidad: 1,
    titulo: 'Ecuaciones bicuadráticas',
    resumen: 'Resuelve ecuaciones de cuarto grado con x⁴ y x² usando un cambio de variable y las tijeras, con raíces reales o imaginarias.',
    objetivos: [
      'Reconocer una ecuación bicuadrática y escribirla en forma estándar.',
      'Usar la unidad imaginaria i para calcular raíces de números negativos.',
      'Resolver bicuadráticas con el cambio de variable y el método de las tijeras.',
      'Clasificar las soluciones (4 reales, 4 imaginarias, o 2 reales y 2 imaginarias) sin resolver todo.'
    ],
    teoria: [
      {
        titulo: '¿Qué es una ecuación bicuadrática?',
        html: `<p>Es una ecuación de cuarto grado que <strong>solo tiene potencias pares</strong> de la incógnita: no hay <span class="math">x³</span> ni <span class="math">x</span> sueltas.</p>
<p><span class="math">ax⁴ + bx² + c = 0</span>, con <span class="math">a ≠ 0</span></p>
<p>Ejemplos: <span class="math">x⁴ − 5x² + 4 = 0</span> sí lo es; <span class="math">x⁴ + 2x³ − 3 = 0</span> no (tiene <span class="math">x³</span>).</p>
<p><strong>Intuición:</strong> fíjate que <span class="math">x⁴ = (x²)²</span>. Entonces la ecuación es una cuadrática "disfrazada": en vez de <span class="math">x</span> la incógnita es <span class="math">x²</span>. Si sabes resolver cuadráticas, ya sabes casi todo.</p>`
      },
      {
        titulo: 'Antes de seguir: la unidad imaginaria',
        html: `<p>En los reales, <span class="math">x² = −4</span> no tiene solución, porque ningún real al cuadrado da negativo. Para no quedarnos sin respuesta inventamos un número nuevo:</p>
<p><span class="math">i = √(−1)</span>, de modo que <span class="math">i² = −1</span></p>
<p>Con él, la raíz de cualquier negativo se saca así: <span class="math">√(−a) = i√a</span> (con <span class="math">a > 0</span>).</p>
<ul>
<li><span class="math">√(−25) = 5i</span></li>
<li><span class="math">√(−7) = i√7</span></li>
<li><span class="math">√(−12) = 2i√3</span></li>
</ul>
<p>Las potencias de <span class="math">i</span> se repiten cada 4: <span class="math">i¹ = i</span>, <span class="math">i² = −1</span>, <span class="math">i³ = −i</span>, <span class="math">i⁴ = 1</span>.</p>
<p>Comprobación rápida: <span class="math">(2i)² = 4i² = −4</span>. Entonces <span class="math">x² = −4</span> tiene soluciones <span class="math">x = ±2i</span>.</p>`
      },
      {
        titulo: 'Método 1: cambio de variable',
        html: `<p>La idea es reemplazar <span class="math">x²</span> por una letra nueva.</p>
<ol>
<li>Escribe <span class="math">y = x²</span>. Entonces <span class="math">x⁴ = y²</span>.</li>
<li>Resuelve la cuadrática <span class="math">ay² + by + c = 0</span> (por tijeras o fórmula general). Obtienes <span class="math">y₁</span> e <span class="math">y₂</span>.</li>
<li><strong>Regresa a x:</strong> resuelve <span class="math">x² = y₁</span> y <span class="math">x² = y₂</span>. Cada una da <span class="math">x = ±√y</span>.</li>
</ol>
<p>El paso 3 es el que más se olvida. Mientras no tengas <span class="math">x</span>, no has terminado. Y recuerda que <strong>cada valor de y produce dos valores de x</strong> (el positivo y el negativo), por eso salen 4 soluciones.</p>`
      },
      {
        titulo: 'Método 2: tijeras directo en x',
        html: `<p>Si el trinomio se factoriza, puedes saltarte la letra <span class="math">y</span> y factorizar directamente con <span class="math">x²</span>.</p>
<p>Ejemplo: <span class="math">4x⁴ − 13x² + 9 = 0</span>.</p>
<ul>
<li>Divide el primer término: <span class="math">4x² · x²</span>.</li>
<li>Divide el último: <span class="math">(−9)(−1)</span>.</li>
<li>Multiplica en cruz y suma: <span class="math">4x²·(−1) + x²·(−9) = −13x²</span>. Coincide con el término del medio.</li>
</ul>
<p>Entonces <span class="math">(4x² − 9)(x² − 1) = 0</span>. Cada factor igualado a cero es una ecuación fácil: <span class="math">x² = 9/4</span> o <span class="math">x² = 1</span>.</p>
<p><strong>Si las tijeras no cuadran</strong> después de probar un par de combinaciones, no insistas: usa la fórmula general con <span class="math">y</span>.</p>`
      },
      {
        titulo: 'Discriminante y fórmula general en y',
        html: `<p>Para la cuadrática en <span class="math">y</span>:</p>
<p><span class="math">y = (−b ± √(b² − 4ac))/(2a)</span></p>
<p>El número <span class="math">Δ = b² − 4ac</span> es el <strong>discriminante</strong>:</p>
<table>
<tr><th>Discriminante</th><th>Valores de y</th></tr>
<tr><td><span class="math">Δ > 0</span></td><td>dos valores reales distintos</td></tr>
<tr><td><span class="math">Δ = 0</span></td><td>un valor doble</td></tr>
<tr><td><span class="math">Δ < 0</span></td><td>dos valores complejos conjugados (casos avanzados)</td></tr>
</table>
<p>Atajo muy útil sin resolver: la suma y el producto de las dos y valen <span class="math">y₁ + y₂ = −b/a</span> y <span class="math">y₁ · y₂ = c/a</span>.</p>`
      },
      {
        titulo: 'Clasificación de las soluciones',
        html: `<p>Todo depende del signo de los valores de <span class="math">y</span>:</p>
<ul>
<li><span class="math">y > 0</span> → <span class="math">x = ±√y</span> son <strong>dos reales</strong>.</li>
<li><span class="math">y < 0</span> → <span class="math">x = ±i√|y|</span> son <strong>dos imaginarias</strong>.</li>
</ul>
<table>
<tr><th>Signos de y₁ e y₂</th><th>Soluciones en x</th></tr>
<tr><td>Ambas positivas</td><td>4 reales</td></tr>
<tr><td>Ambas negativas</td><td>4 imaginarias</td></tr>
<tr><td>Una positiva y una negativa</td><td>2 reales y 2 imaginarias</td></tr>
</table>
<p>Truco con el producto: si <span class="math">c/a < 0</span>, las y tienen signos opuestos, así que hay 2 reales y 2 imaginarias sin hacer más cuentas. Si <span class="math">c/a > 0</span>, tienen el mismo signo, y la suma <span class="math">−b/a</span> te dice cuál: positiva → ambas positivas; negativa → ambas negativas.</p>
<p>Siempre hay <strong>4 soluciones</strong> contando multiplicidad. Y siempre vienen en parejas <span class="math">±</span>: si <span class="math">x = 3</span> es solución, <span class="math">x = −3</span> también.</p>`
      },
      {
        titulo: 'Casos especiales',
        html: `<ul>
<li><strong>Sin término medio</strong> (<span class="math">b = 0</span>): <span class="math">x⁴ = k</span>. Despeja <span class="math">x² = ±√k</span> con cuidado. Ejemplo: <span class="math">x⁴ − 16 = 0</span> → <span class="math">(x² − 4)(x² + 4) = 0</span> → <span class="math">x = ±2</span> o <span class="math">x = ±2i</span>.</li>
<li><strong>Sin término independiente</strong> (<span class="math">c = 0</span>): saca factor común. <span class="math">x⁴ − 9x² = 0</span> → <span class="math">x²(x² − 9) = 0</span> → <span class="math">x = 0</span> (doble) o <span class="math">x = ±3</span>. No dividas entre <span class="math">x²</span> o perderás la solución <span class="math">x = 0</span>.</li>
<li><strong>Trinomio cuadrado perfecto</strong> (<span class="math">Δ = 0</span>): <span class="math">x⁴ − 6x² + 9 = (x² − 3)²</span>. Resulta <span class="math">x = ±√3</span>, cada una doble.</li>
<li><strong>Cuando no factoriza</strong>: usa la fórmula en <span class="math">y</span>. Por ejemplo <span class="math">x⁴ − 4x² + 1 = 0</span> da <span class="math">y = 2 ± √3</span>.</li>
</ul>`
      },
      {
        titulo: 'Conexión con otros temas',
        html: `<p>Este "truco del cambio de variable" aparece una y otra vez: lo usarás en ecuaciones con exponentes (por ejemplo <span class="math">2<sup>2x</sup></span> con <span class="math">y = 2<sup>x</sup></span>) y en logaritmos. Además, el tema siguiente, las ecuaciones radicales, termina muchas veces en una cuadrática o bicuadrática que debes resolver con estas herramientas y <strong>comprobar</strong>. Prueba la calculadora para ver cómo se reparten las 4 raíces.</p>`
      }
    ],
    formulas: [
      { label: 'Forma estándar', html: 'ax⁴ + bx² + c = 0,  a ≠ 0' },
      { label: 'Cambio de variable', html: 'y = x²,  x⁴ = y²' },
      { label: 'Unidad imaginaria', html: 'i = √(−1),  i² = −1,  √(−a) = i√a' },
      { label: 'Fórmula en y', html: 'y = (−b ± √(b² − 4ac))/(2a)' },
      { label: 'Regreso a x', html: 'x = ±√y' },
      { label: 'Suma y producto de las y', html: 'y₁ + y₂ = −b/a,  y₁ · y₂ = c/a' },
      { label: 'Clasificación', html: 'y > 0 → 2 reales;  y < 0 → 2 imaginarias' }
    ],
    ejemplos: [
      {
        titulo: 'Cuatro raíces reales (tijeras)',
        enunciado: 'Resuelve <span class="math">x⁴ − 13x² + 36 = 0</span>.',
        pasos: [
          'Es bicuadrática. Con tijeras: <span class="math">x² · x²</span> y <span class="math">(−4)(−9)</span>. Verifica: <span class="math">−9x² − 4x² = −13x²</span>.',
          'Factoriza: <span class="math">(x² − 4)(x² − 9) = 0</span>.',
          'De <span class="math">x² − 4 = 0</span> sale <span class="math">x² = 4</span>, así que <span class="math">x = ±2</span>.',
          'De <span class="math">x² − 9 = 0</span> sale <span class="math">x² = 9</span>, así que <span class="math">x = ±3</span>.',
          'Comprueba: <span class="math">2⁴ − 13·2² + 36 = 16 − 52 + 36 = 0</span>.'
        ],
        respuesta: '<span class="math">x = −3,  −2,  2,  3</span> (cuatro reales).'
      },
      {
        titulo: 'Reales e imaginarias a la vez',
        enunciado: 'Resuelve <span class="math">x⁴ + 2x² − 8 = 0</span>.',
        pasos: [
          'Cambio de variable: <span class="math">y = x²</span>. La ecuación queda <span class="math">y² + 2y − 8 = 0</span>.',
          'Factoriza: <span class="math">(y + 4)(y − 2) = 0</span>, entonces <span class="math">y = −4</span> o <span class="math">y = 2</span>.',
          'Regreso a x con <span class="math">y = 2</span>: <span class="math">x² = 2</span>, así que <span class="math">x = ±√2</span>.',
          'Regreso a x con <span class="math">y = −4</span>: <span class="math">x² = −4</span>, así que <span class="math">x = ±√(−4) = ±2i</span>.',
          'Como <span class="math">c/a = −8 < 0</span>, ya sabíamos que habría 2 reales y 2 imaginarias.'
        ],
        respuesta: '<span class="math">x = ±√2</span> (reales) y <span class="math">x = ±2i</span> (imaginarias).'
      },
      {
        titulo: 'Coeficiente principal distinto de 1',
        enunciado: 'Resuelve <span class="math">4x⁴ − 37x² + 9 = 0</span>.',
        pasos: [
          'Tijeras: <span class="math">4x² · x²</span> y <span class="math">(−1)(−9)</span>. Cruz: <span class="math">4x²(−9) + x²(−1) = −36x² − x² = −37x²</span>. ¡Cuadra!',
          'Factoriza: <span class="math">(4x² − 1)(x² − 9) = 0</span>.',
          'De <span class="math">4x² = 1</span>: <span class="math">x² = 1/4</span>, así que <span class="math">x = ±1/2</span>.',
          'De <span class="math">x² = 9</span>: <span class="math">x = ±3</span>.'
        ],
        respuesta: '<span class="math">x = −3,  −1/2,  1/2,  3</span>.'
      },
      {
        titulo: 'Cuatro raíces imaginarias',
        enunciado: 'Resuelve <span class="math">x⁴ + 13x² + 36 = 0</span>.',
        pasos: [
          'Observa los signos: <span class="math">y₁ + y₂ = −13</span> y <span class="math">y₁ · y₂ = 36</span>. Producto positivo y suma negativa: ambas y son negativas. Esperamos 4 imaginarias.',
          'Con <span class="math">y = x²</span>: <span class="math">y² + 13y + 36 = 0</span>, que factoriza como <span class="math">(y + 4)(y + 9) = 0</span>.',
          'Entonces <span class="math">x² = −4</span> o <span class="math">x² = −9</span>.',
          '<span class="math">x = ±√(−4) = ±2i</span> y <span class="math">x = ±√(−9) = ±3i</span>.',
          'Comprueba con <span class="math">x = 2i</span>: <span class="math">x⁴ = 16</span>, <span class="math">x² = −4</span>, y <span class="math">16 + 13(−4) + 36 = 0</span>.'
        ],
        respuesta: '<span class="math">x = ±2i</span> y <span class="math">x = ±3i</span> (ninguna real).'
      },
      {
        titulo: 'Contexto real: lámina de zinc',
        enunciado: 'Una lámina rectangular de zinc para un techo en Santa Ana tiene una diagonal de 10 m y un área de 48 m². Halla sus lados.',
        pasos: [
          'Sean <span class="math">a</span> y <span class="math">b</span> los lados. Pitágoras: <span class="math">a² + b² = 100</span>. Área: <span class="math">ab = 48</span>, entonces <span class="math">b = 48/a</span>.',
          'Sustituye: <span class="math">a² + 2304/a² = 100</span>. Multiplica por <span class="math">a²</span>: <span class="math">a⁴ + 2304 = 100a²</span>.',
          'Ordena: <span class="math">a⁴ − 100a² + 2304 = 0</span>. Con <span class="math">y = a²</span>: <span class="math">y² − 100y + 2304 = 0</span>.',
          'Discriminante: <span class="math">100² − 4(2304) = 10000 − 9216 = 784 = 28²</span>.',
          '<span class="math">y = (100 ± 28)/2</span>, así que <span class="math">y = 64</span> o <span class="math">y = 36</span>.',
          'Como un lado es positivo: <span class="math">a = 8</span> o <span class="math">a = 6</span>. Si <span class="math">a = 8</span>, <span class="math">b = 6</span> (y viceversa). Las soluciones negativas se descartan porque una longitud no puede ser negativa.'
        ],
        respuesta: 'Los lados miden <strong>6 m y 8 m</strong>. Comprobación: <span class="math">36 + 64 = 100</span> y <span class="math">6 · 8 = 48</span>.'
      },
      {
        titulo: 'Raíz doble (trinomio cuadrado perfecto)',
        enunciado: 'Resuelve <span class="math">x⁴ − 6x² + 9 = 0</span> y explica cuántas soluciones tiene.',
        pasos: [
          'Reconoce el cuadrado perfecto: <span class="math">x⁴ − 6x² + 9 = (x² − 3)²</span>. Verifica: el doble producto es <span class="math">2 · x² · 3 = 6x²</span>.',
          'Entonces <span class="math">(x² − 3)² = 0</span>, lo que implica <span class="math">x² = 3</span>.',
          'De ahí <span class="math">x = √3</span> o <span class="math">x = −√3</span>.',
          'El factor aparece al cuadrado, así que cada solución cuenta dos veces: <span class="math">Δ = 36 − 36 = 0</span> en la ecuación de y.'
        ],
        respuesta: '<span class="math">x = ±√3</span>, cada una de multiplicidad 2 (en total 4 soluciones contando repeticiones, pero solo 2 distintas).'
      }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">x⁴ − 5x² + 4 = 0</span>.',
        pasos: ['Tijeras: <span class="math">(x² − 4)(x² − 1) = 0</span>. Verifica: <span class="math">−x² − 4x² = −5x²</span>.', '<span class="math">x² = 4</span> da <span class="math">x = ±2</span>.', '<span class="math">x² = 1</span> da <span class="math">x = ±1</span>.'],
        respuesta: '<span class="math">x = −2, −1, 1, 2</span>.' },
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">x⁴ − 10x² + 9 = 0</span>.',
        pasos: ['Con <span class="math">y = x²</span>: <span class="math">y² − 10y + 9 = 0</span>.', 'Factoriza: <span class="math">(y − 9)(y − 1) = 0</span>, así que <span class="math">y = 9</span> o <span class="math">y = 1</span>.', 'Regreso: <span class="math">x = ±3</span> y <span class="math">x = ±1</span>.'],
        respuesta: '<span class="math">x = −3, −1, 1, 3</span>.' },
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">x⁴ − 17x² + 16 = 0</span>.',
        pasos: ['Tijeras: <span class="math">(x² − 16)(x² − 1) = 0</span>. Verifica: <span class="math">−x² − 16x² = −17x²</span>.', '<span class="math">x² = 16</span> da <span class="math">x = ±4</span>.', '<span class="math">x² = 1</span> da <span class="math">x = ±1</span>.'],
        respuesta: '<span class="math">x = −4, −1, 1, 4</span>.' },
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">x⁴ + 5x² + 4 = 0</span> e indica de qué tipo son las soluciones.',
        pasos: ['Tijeras: <span class="math">(x² + 4)(x² + 1) = 0</span>.', '<span class="math">x² = −4</span> da <span class="math">x = ±2i</span>.', '<span class="math">x² = −1</span> da <span class="math">x = ±i</span>.', 'Ambas y son negativas, así que las 4 soluciones son imaginarias.'],
        respuesta: '<span class="math">x = ±i</span> y <span class="math">x = ±2i</span> (4 imaginarias).' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">9x⁴ − 10x² + 1 = 0</span>.',
        pasos: ['Tijeras: <span class="math">9x² · x²</span> y <span class="math">(−1)(−1)</span>. Cruz: <span class="math">−9x² − x² = −10x²</span>.', '<span class="math">(9x² − 1)(x² − 1) = 0</span>.', '<span class="math">9x² = 1</span> da <span class="math">x² = 1/9</span>, entonces <span class="math">x = ±1/3</span>.', '<span class="math">x² = 1</span> da <span class="math">x = ±1</span>.'],
        respuesta: '<span class="math">x = ±1/3</span> y <span class="math">x = ±1</span>.' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">x⁴ − 8x² + 7 = 0</span>.',
        pasos: ['Tijeras: <span class="math">(x² − 7)(x² − 1) = 0</span>. Verifica: <span class="math">−x² − 7x² = −8x²</span>.', '<span class="math">x² = 7</span> da <span class="math">x = ±√7</span>.', '<span class="math">x² = 1</span> da <span class="math">x = ±1</span>.'],
        respuesta: '<span class="math">x = ±√7</span> (≈ ±2.65) y <span class="math">x = ±1</span>.' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">x⁴ − 2x² − 8 = 0</span> y clasifica las soluciones.',
        pasos: ['Con <span class="math">y = x²</span>: <span class="math">y² − 2y − 8 = 0</span>, es decir <span class="math">(y − 4)(y + 2) = 0</span>.', '<span class="math">y = 4</span> da <span class="math">x = ±2</span> (reales).', '<span class="math">y = −2</span> da <span class="math">x = ±√(−2) = ±i√2</span> (imaginarias).'],
        respuesta: '<span class="math">x = ±2</span> (reales) y <span class="math">x = ±i√2</span> (imaginarias).' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">4x⁴ − 17x² + 4 = 0</span>.',
        pasos: ['Tijeras: <span class="math">4x² · x²</span> y <span class="math">(−1)(−4)</span>. Cruz: <span class="math">4x²(−4) + x²(−1) = −16x² − x² = −17x²</span>.', '<span class="math">(4x² − 1)(x² − 4) = 0</span>.', '<span class="math">x² = 1/4</span> da <span class="math">x = ±1/2</span>.', '<span class="math">x² = 4</span> da <span class="math">x = ±2</span>.'],
        respuesta: '<span class="math">x = ±1/2</span> y <span class="math">x = ±2</span>.' },
      { nivel: 'dificil', enunciado: 'Resuelve <span class="math">16x⁴ + 7x² − 9 = 0</span>.',
        pasos: ['Tijeras: <span class="math">16x² · x²</span> y <span class="math">(−9)(+1)</span>. Cruz: <span class="math">16x²(1) + x²(−9) = 16x² − 9x² = 7x²</span>.', '<span class="math">(16x² − 9)(x² + 1) = 0</span>.', '<span class="math">16x² = 9</span> da <span class="math">x² = 9/16</span>, entonces <span class="math">x = ±3/4</span>.', '<span class="math">x² = −1</span> da <span class="math">x = ±i</span>.'],
        respuesta: '<span class="math">x = ±3/4</span> (reales) y <span class="math">x = ±i</span> (imaginarias).' },
      { nivel: 'dificil', enunciado: 'Resuelve <span class="math">x⁴ − 4x² + 1 = 0</span> (no factoriza con enteros). Da las soluciones exactas y aproximadas a 3 decimales.',
        pasos: ['Con <span class="math">y = x²</span>: <span class="math">y² − 4y + 1 = 0</span>. Discriminante: <span class="math">16 − 4 = 12</span>.', '<span class="math">y = (4 ± √12)/2 = (4 ± 2√3)/2 = 2 ± √3</span>.', 'Ambos valores son positivos (<span class="math">2 − √3 ≈ 0.268</span>), así que las 4 soluciones son reales.', '<span class="math">x = ±√(2 + √3) ≈ ±1.932</span> y <span class="math">x = ±√(2 − √3) ≈ ±0.518</span>.', 'Dato curioso: <span class="math">√(2 ± √3) = (√6 ± √2)/2</span>.'],
        respuesta: '<span class="math">x = ±√(2 + √3) ≈ ±1.932</span> y <span class="math">x = ±√(2 − √3) ≈ ±0.518</span>.' },
      { nivel: 'dificil', enunciado: '¿Para qué valor de <span class="math">k</span> la ecuación <span class="math">x⁴ − 6x² + k = 0</span> tiene solo dos soluciones distintas, ambas reales? Resuélvela con ese <span class="math">k</span>.',
        pasos: ['Con <span class="math">y = x²</span>: <span class="math">y² − 6y + k = 0</span>.', 'Solo hay dos x distintas si las y coinciden (y es positiva): discriminante cero, <span class="math">Δ = 36 − 4k = 0</span>.', 'Entonces <span class="math">k = 9</span> y la ecuación es <span class="math">(y − 3)² = 0</span>, es decir <span class="math">y = 3</span>.', 'Regreso: <span class="math">x² = 3</span>, así que <span class="math">x = ±√3</span> (cada una doble).'],
        respuesta: '<span class="math">k = 9</span>; soluciones <span class="math">x = ±√3</span>.' }
    ],
    teoricas: [
      { q: '¿Cuántas soluciones tiene una ecuación bicuadrática?', a: 'Siempre 4 en los números complejos, contando repeticiones. Pueden ser reales, imaginarias o una mezcla.' },
      { q: '¿Cuándo aparecen soluciones imaginarias?', a: 'Cuando algún valor de <span class="math">y = x²</span> es negativo, porque entonces <span class="math">x = ±√y</span> es la raíz de un negativo.' },
      { q: 'Sin resolver, ¿cómo sabes que <span class="math">x⁴ + 5x² + 6 = 0</span> no tiene soluciones reales?', a: 'Todos los términos son positivos o cero para x real, y la suma nunca puede dar 0 (vale al menos 6). Con y: la suma de las y es <span class="math">−5</span> y su producto es <span class="math">6</span>, luego ambas son negativas.' },
      { q: 'Si <span class="math">x = 2</span> es solución de una bicuadrática, ¿qué otra solución conoces ya?', a: '<span class="math">x = −2</span>, porque solo hay potencias pares y <span class="math">(−2)⁴ = 2⁴</span> y <span class="math">(−2)² = 2²</span>. Las soluciones siempre vienen en parejas <span class="math">±</span>.' },
      { q: '¿Qué pasa si <span class="math">c = 0</span>, por ejemplo <span class="math">x⁴ − 9x² = 0</span>?', a: 'Se factoriza <span class="math">x²(x² − 9) = 0</span>. Salen <span class="math">x = 0</span> (doble) y <span class="math">x = ±3</span>. No se debe dividir entre <span class="math">x²</span>, porque se pierde <span class="math">x = 0</span>.' },
      { q: '¿Cómo reconoces, solo con los coeficientes, el caso de 2 reales y 2 imaginarias?', a: 'Cuando <span class="math">c/a < 0</span>. El producto de las y es negativo, así que una es positiva (2 reales) y la otra negativa (2 imaginarias).' },
      { q: '¿Qué significa que el discriminante de la cuadrática en y sea cero?', a: 'Que hay un único valor de y (doble). Si es positivo, resultan dos x distintas (cada una doble); si es negativo, dos imaginarias dobles.' },
      { q: '¿Por qué después de hallar y hay que "regresar" a x?', a: 'Porque el problema pregunta por x, no por y. Como <span class="math">y = x²</span>, cada y aporta <span class="math">x = +√y</span> y <span class="math">x = −√y</span>.' }
    ],
    errores: [
      'Escribir <span class="math">x² = 9 → x = 3</span> y olvidar el signo. La raíz de una ecuación siempre lleva <span class="math">±</span>: <span class="math">x = ±3</span>. Recuerda que hay 4 soluciones en total.',
      'Confundir la raíz de un negativo: <span class="math">√(−5)</span> no es <span class="math">−√5</span> ni <span class="math">5i</span>. Lo correcto es <span class="math">i√5</span>.',
      'Resolver para <span class="math">y</span> y entregar <span class="math">y = 4</span> o <span class="math">y = 1</span> como respuesta final. Debes regresar a <span class="math">x = ±√y</span>.',
      'Escribir <span class="math">x⁴ = y</span> en lugar de <span class="math">x⁴ = y²</span> al hacer el cambio de variable, o dividir entre <span class="math">x²</span> cuando falta el término independiente y perder la solución <span class="math">x = 0</span>.'
    ],
    aplicacion: {
      titulo: 'Cercar un terreno en Santa Ana',
      html: `<p>Un terreno rectangular tiene <strong>60 m²</strong> de área y una diagonal de <strong>13 m</strong> (la medida entre esquinas opuestas). Quieres cercarlo con malla que cuesta <strong>$6 por metro</strong>. ¿Cuánto costará la cerca?</p>
<p><strong>Plantea:</strong> lados <span class="math">a</span> y <span class="math">b</span>. Diagonal: <span class="math">a² + b² = 169</span>. Área: <span class="math">ab = 60</span>, entonces <span class="math">b = 60/a</span>.</p>
<p>Sustituye: <span class="math">a² + 3600/a² = 169</span>, y al multiplicar por <span class="math">a²</span>: <span class="math">a⁴ − 169a² + 3600 = 0</span>.</p>
<p>Con <span class="math">y = a²</span>: <span class="math">y² − 169y + 3600 = 0</span>. El discriminante es <span class="math">169² − 4(3600) = 28561 − 14400 = 14161 = 119²</span>.</p>
<p><span class="math">y = (169 ± 119)/2</span>, es decir <span class="math">y = 144</span> o <span class="math">y = 25</span>. Los lados son <span class="math">a = 12</span> y <span class="math">b = 5</span> (el valor negativo no tiene sentido físico).</p>
<p>Perímetro: <span class="math">2(12 + 5) = 34 m</span>. Costo: <span class="math">34 × 6 = $204</span>.</p>
<p>Fíjate: el modelo algebraico tenía 4 soluciones (<span class="math">±12</span>, <span class="math">±5</span>), pero solo 2 sirven en la vida real. Interpretar el contexto también es parte de resolver.</p>`
    },
    calc: 'bicuadratica',
    examen: [
      { tipo: 'lista', q: 'Resuelve <span class="math">x⁴ − 20x² + 64 = 0</span>. Escribe las 4 soluciones separadas por comas.', r: [-4, -2, 2, 4], tol: 0.01,
        pasos: ['Tijeras: <span class="math">(x² − 4)(x² − 16) = 0</span>. Verifica: <span class="math">−16x² − 4x² = −20x²</span>.', '<span class="math">x² = 4</span> da <span class="math">x = ±2</span>.', '<span class="math">x² = 16</span> da <span class="math">x = ±4</span>.'] },
      { tipo: 'lista', q: 'Resuelve <span class="math">4x⁴ − 5x² + 1 = 0</span>. Escribe las 4 soluciones separadas por comas (usa decimales).', r: [-1, -0.5, 0.5, 1], tol: 0.01,
        pasos: ['Tijeras: <span class="math">(4x² − 1)(x² − 1) = 0</span>. Cruz: <span class="math">−4x² − x² = −5x²</span>.', '<span class="math">x² = 1/4</span> da <span class="math">x = ±0.5</span>.', '<span class="math">x² = 1</span> da <span class="math">x = ±1</span>.'] },
      { tipo: 'num', q: 'Resuelve <span class="math">x⁴ − 7x² − 18 = 0</span>. ¿Cuál es la suma de los valores absolutos de sus soluciones <strong>reales</strong>?', r: 6, tol: 0.01,
        pasos: ['Factoriza: <span class="math">(x² − 9)(x² + 2) = 0</span>.', '<span class="math">x² = 9</span> da <span class="math">x = ±3</span> (reales).', '<span class="math">x² = −2</span> da <span class="math">x = ±i√2</span> (no son reales).', 'Suma de valores absolutos de las reales: <span class="math">3 + 3 = 6</span>.'] },
      { tipo: 'opt', q: 'Las soluciones de <span class="math">x⁴ + 10x² + 9 = 0</span> son:', opciones: ['4 reales', '2 reales y 2 imaginarias', '4 imaginarias', 'No tiene soluciones'], correcta: 2,
        pasos: ['Con <span class="math">y = x²</span>: <span class="math">(y + 1)(y + 9) = 0</span>, así que <span class="math">y = −1</span> o <span class="math">y = −9</span>.', 'Ambos valores son negativos.', 'Entonces <span class="math">x = ±i</span> y <span class="math">x = ±3i</span>: las 4 son imaginarias.'] },
      { tipo: 'opt', q: '¿Cuál de estas ecuaciones tiene exactamente 2 soluciones reales y 2 imaginarias?', opciones: ['<span class="math">x⁴ − 5x² + 4 = 0</span>', '<span class="math">x⁴ − 2x² − 15 = 0</span>', '<span class="math">x⁴ + 4x² + 3 = 0</span>', '<span class="math">x⁴ − 10x² + 25 = 0</span>'], correcta: 1,
        pasos: ['Basta mirar <span class="math">c/a</span>: debe ser negativo para que las y tengan signos opuestos.', 'Solo la segunda tiene <span class="math">c/a = −15 < 0</span>.', 'Verifica: <span class="math">(x² − 5)(x² + 3) = 0</span> da <span class="math">x = ±√5</span> (reales) y <span class="math">x = ±i√3</span> (imaginarias).'] },
      { tipo: 'num', q: 'Resuelve <span class="math">x⁴ − 4x² + 1 = 0</span>. ¿Cuál es la solución real positiva más grande? Redondea a 2 decimales.', r: 1.93, tol: 0.01,
        pasos: ['Con <span class="math">y = x²</span>: <span class="math">y² − 4y + 1 = 0</span>.', '<span class="math">y = (4 ± √12)/2 = 2 ± √3</span>. El mayor es <span class="math">y = 2 + √3 ≈ 3.732</span>.', '<span class="math">x = √3.732 ≈ 1.93</span>.'] },
      { tipo: 'num', q: 'Si <span class="math">x = 1</span> es solución de <span class="math">x⁴ − 10x² + k = 0</span>, ¿cuánto vale <span class="math">k</span>?', r: 9, tol: 0.01,
        pasos: ['Sustituye <span class="math">x = 1</span>: <span class="math">1 − 10 + k = 0</span>.', 'Entonces <span class="math">k = 9</span>.', 'Comprobación: <span class="math">(x² − 9)(x² − 1) = 0</span> tiene a <span class="math">x = 1</span> entre sus soluciones.'] },
      { tipo: 'opt', q: '¿Cuánto vale <span class="math">(√(−9))²</span>?', opciones: ['<span class="math">9</span>', '<span class="math">3</span>', '<span class="math">−3</span>', '<span class="math">−9</span>'], correcta: 3,
        pasos: ['<span class="math">√(−9) = 3i</span>.', '<span class="math">(3i)² = 9i² = 9(−1) = −9</span>.', 'Un error común es creer que el cuadrado siempre es positivo; con <span class="math">i</span> eso deja de cumplirse.'] },
      { tipo: 'num', q: 'Un terreno rectangular tiene diagonal de 17 m y área de 120 m². ¿Cuánto mide su lado mayor (en metros)?', r: 15, tol: 0.01,
        pasos: ['<span class="math">a² + b² = 289</span> y <span class="math">ab = 120</span>, entonces <span class="math">a⁴ − 289a² + 14400 = 0</span>.', 'Discriminante en y: <span class="math">289² − 4(14400) = 83521 − 57600 = 25921 = 161²</span>.', '<span class="math">y = (289 ± 161)/2</span>, así que <span class="math">y = 225</span> o <span class="math">y = 64</span>.', 'Lados: <span class="math">√225 = 15</span> y <span class="math">√64 = 8</span>. El mayor mide 15 m. Comprobación: <span class="math">15 · 8 = 120</span>.'] },
      { tipo: 'lista', q: 'Resuelve <span class="math">9x⁴ − 37x² + 4 = 0</span>. Escribe las 4 soluciones separadas por comas (usa decimales; 1/3 ≈ 0.333).', r: [-2, -0.3333, 0.3333, 2], tol: 0.01,
        pasos: ['Tijeras: <span class="math">9x² · x²</span> y <span class="math">(−1)(−4)</span>. Cruz: <span class="math">9x²(−4) + x²(−1) = −37x²</span>.', '<span class="math">(9x² − 1)(x² − 4) = 0</span>.', '<span class="math">x² = 1/9</span> da <span class="math">x = ±1/3 ≈ ±0.333</span>.', '<span class="math">x² = 4</span> da <span class="math">x = ±2</span>.'] }
    ]
  };

  /* ============================================================ 1.2 */
  T['1.2'] = {
    id: '1.2',
    unidad: 1,
    titulo: 'Ecuaciones radicales',
    resumen: 'Aísla el radical, elévalo al cuadrado, resuelve y comprueba siempre para descartar soluciones extrañas.',
    objetivos: [
      'Identificar una ecuación radical y su dominio.',
      'Aislar el radical y elevar al cuadrado usando los productos notables.',
      'Resolver ecuaciones con dos radicales elevando al cuadrado más de una vez.',
      'Comprobar las soluciones y descartar las extrañas.'
    ],
    teoria: [
      {
        titulo: '¿Qué es una ecuación radical?',
        html: `<p>Es una ecuación donde la incógnita está <strong>dentro de una raíz</strong>. Por ejemplo <span class="math">√(x + 3) = 5</span> o <span class="math">√(2x − 1) + 2 = x</span>.</p>
<p><strong>Intuición:</strong> la raíz cuadrada "esconde" la incógnita; para sacarla necesitamos la operación contraria, elevar al cuadrado. Es como abrir un candado: la raíz es el cierre y el cuadrado es la llave.</p>
<p>Un recordatorio importante: <span class="math">√a</span> es siempre mayor o igual que cero (la raíz principal), y solo existe en los reales si <span class="math">a ≥ 0</span>.</p>`
      },
      {
        titulo: 'Propiedades que necesitas',
        html: `<ul>
<li>Cancelación: <span class="math">(√a)² = a</span>, si <span class="math">a ≥ 0</span>.</li>
<li>Ojo con el orden: <span class="math">√(a²) = |a|</span>, no siempre <span class="math">a</span>. Por ejemplo <span class="math">√((−3)²) = 3</span>.</li>
<li>Binomio al cuadrado: <span class="math">(a + b)² = a² + 2ab + b²</span> y <span class="math">(a − b)² = a² − 2ab + b²</span>.</li>
<li>Si multiplicas antes de elevar: <span class="math">(3√x)² = 9x</span>. El coeficiente también se eleva.</li>
</ul>
<p>Los productos notables serán tus mejores amigos cuando un lado tenga un binomio como <span class="math">x − 1</span> o <span class="math">1 + √x</span>.</p>`
      },
      {
        titulo: 'El procedimiento paso a paso',
        html: `<ol>
<li><strong>Aísla</strong> el radical en un lado (suma, resta o divide lo que lo acompaña).</li>
<li><strong>Eleva al cuadrado</strong> los dos lados completos (no término por término).</li>
<li>Desarrolla y <strong>resuelve</strong> la ecuación que queda (lineal o cuadrática).</li>
<li><strong>Comprueba</strong> cada solución en la ecuación original. Este paso no es opcional.</li>
</ol>
<p>Ejemplo rápido: <span class="math">√(x + 7) = x + 1</span>. Elevas: <span class="math">x + 7 = x² + 2x + 1</span>. Resuelves y obtienes dos candidatos; luego pruebas cada uno.</p>`
      },
      {
        titulo: '¿Por qué aparecen soluciones extrañas?',
        html: `<p>Mira este ejemplo de la vida diaria: si te dicen "tu número al cuadrado es 4", puede ser 2 o <span class="math">−2</span>. Elevar al cuadrado <strong>borra el signo</strong>.</p>
<p>Con ecuaciones pasa igual: de <span class="math">a = b</span> sigue <span class="math">a² = b²</span>, pero lo contrario no siempre. Por ejemplo, <span class="math">x = 2</span> y <span class="math">x = −2</span> comparten el mismo cuadrado. Al resolver la ecuación ya elevada puedes encontrar números que cumplen <span class="math">a² = b²</span> pero con <span class="math">a = −b</span>. Esas son las <strong>soluciones extrañas</strong>.</p>
<p>Ejemplo: <span class="math">√x = −3</span>. Al elevar queda <span class="math">x = 9</span>, pero <span class="math">√9 = 3 ≠ −3</span>. La ecuación no tiene solución: una raíz principal nunca es negativa.</p>
<p><strong>Atajo útil:</strong> si la raíz queda igual a una expresión (como <span class="math">√(…) = x − 2</span>), esa expresión debe ser <span class="math">≥ 0</span>. Eso descarta candidatos de inmediato.</p>`
      },
      {
        titulo: 'Dos radicales',
        html: `<p>Cuando hay dos raíces, no se pueden eliminar a la vez. Se hace así:</p>
<ol>
<li>Deja <strong>un</strong> radical solo de un lado y el resto del otro.</li>
<li>Eleva al cuadrado: el binomio del otro lado produce un término <span class="math">2ab</span> que contiene al segundo radical.</li>
<li>Vuelve a <strong>aislar</strong> ese radical que quedó.</li>
<li>Eleva de nuevo, resuelve y comprueba.</li>
</ol>
<p>Ejemplo: <span class="math">√(x + 5) = 5 − √x</span>. Al elevar, <span class="math">x + 5 = 25 − 10√x + x</span>. La <span class="math">x</span> se cancela y solo queda un radical por aislar.</p>`
      },
      {
        titulo: 'Casos especiales',
        html: `<ul>
<li><strong>Sin solución real:</strong> <span class="math">√(x − 2) = −3</span>. Un radical igual a un número negativo es imposible.</li>
<li><strong>Radicando negativo:</strong> la solución candidata puede hacer que el radicando salga negativo. Ejemplo: tras elevar obtienes <span class="math">x = −5</span> pero <span class="math">√(x + 3)</span> sería <span class="math">√(−2)</span>. Descártala.</li>
<li><strong>Cancelación de <span class="math">x²</span>:</strong> en <span class="math">√(x² + 9) = x + 1</span>, al elevar el <span class="math">x²</span> se cancela y la ecuación se vuelve lineal.</li>
<li><strong>Raíz cúbica:</strong> con índice impar no hay soluciones extrañas, porque el cubo no borra el signo. Aun así comprobar es buena costumbre.</li>
</ul>`
      },
      {
        titulo: 'Relación con otros temas',
        html: `<p>Al elevar, casi siempre llegas a una ecuación lineal o cuadrática (y a veces bicuadrática, tema 1.1). Después, para <strong>validar</strong>, sustituyes en la original. En el tema 1.3 verás que una raíz también describe la mitad de una parábola, y su gráfica explica por qué a veces una "solución" no sirve: corresponde a la otra rama. Prueba la calculadora para verificar tus candidatos.</p>`
      }
    ],
    formulas: [
      { label: 'Cancelación', html: '(√a)² = a,  a ≥ 0' },
      { label: 'Raíz de un cuadrado', html: '√(a²) = |a|' },
      { label: 'Binomio al cuadrado (suma)', html: '(a + b)² = a² + 2ab + b²' },
      { label: 'Binomio al cuadrado (resta)', html: '(a − b)² = a² − 2ab + b²' },
      { label: 'Condición de la raíz', html: '√A = B  exige  A ≥ 0  y  B ≥ 0' },
      { label: 'Esquema de resolución', html: 'aislar → elevar → resolver → comprobar' }
    ],
    ejemplos: [
      {
        titulo: 'Un solo radical, directo',
        enunciado: 'Resuelve <span class="math">2√(x − 1) = 6</span>.',
        pasos: [
          'Aísla el radical dividiendo entre 2: <span class="math">√(x − 1) = 3</span>.',
          'Eleva al cuadrado: <span class="math">x − 1 = 9</span>.',
          'Despeja: <span class="math">x = 10</span>.',
          'Comprueba: <span class="math">2√(10 − 1) = 2√9 = 2 · 3 = 6</span>. Cumple.'
        ],
        respuesta: '<span class="math">x = 10</span>.'
      },
      {
        titulo: 'Con una solución extraña',
        enunciado: 'Resuelve <span class="math">√(x + 7) = x + 1</span>.',
        pasos: [
          'El radical ya está aislado. Eleva: <span class="math">x + 7 = (x + 1)² = x² + 2x + 1</span>.',
          'Ordena: <span class="math">0 = x² + x − 6</span>, es decir <span class="math">(x + 3)(x − 2) = 0</span>. Candidatos: <span class="math">x = −3</span> y <span class="math">x = 2</span>.',
          'Prueba <span class="math">x = 2</span>: <span class="math">√9 = 3</span> y <span class="math">2 + 1 = 3</span>. Cumple.',
          'Prueba <span class="math">x = −3</span>: <span class="math">√4 = 2</span> pero <span class="math">−3 + 1 = −2</span>. No cumple: es una solución extraña.'
        ],
        respuesta: '<span class="math">x = 2</span> (se descarta <span class="math">x = −3</span>).'
      },
      {
        titulo: 'Aislar antes de elevar',
        enunciado: 'Resuelve <span class="math">√(2x − 1) + 2 = x</span>.',
        pasos: [
          'Aísla la raíz restando 2: <span class="math">√(2x − 1) = x − 2</span>. (Si elevaras sin aislar, el <span class="math">+2</span> te estorbaría.)',
          'Eleva: <span class="math">2x − 1 = x² − 4x + 4</span>.',
          'Ordena: <span class="math">x² − 6x + 5 = 0</span>, o sea <span class="math">(x − 5)(x − 1) = 0</span>.',
          'Prueba <span class="math">x = 5</span>: <span class="math">√9 + 2 = 5</span>. Cumple.',
          'Prueba <span class="math">x = 1</span>: <span class="math">√1 + 2 = 3 ≠ 1</span>. Extraña (además <span class="math">x − 2 = −1 < 0</span>).'
        ],
        respuesta: '<span class="math">x = 5</span>.'
      },
      {
        titulo: 'Contexto real: caída desde un puente',
        enunciado: 'El tiempo en segundos que tarda una piedra en caer desde una altura <span class="math">h</span> (en metros) es, aproximadamente, <span class="math">t = √(h/5)</span>. Una piedra lanzada desde un puente tarda 3 s en llegar al río. ¿Qué altura tiene el puente?',
        pasos: [
          'Plantea con <span class="math">t = 3</span>: <span class="math">√(h/5) = 3</span>.',
          'Eleva al cuadrado: <span class="math">h/5 = 9</span>.',
          'Multiplica por 5: <span class="math">h = 45</span>.',
          'Comprueba: <span class="math">√(45/5) = √9 = 3</span>. Cumple.'
        ],
        respuesta: 'El puente tiene <strong>45 m</strong> de altura.'
      },
      {
        titulo: 'Dos radicales con una elevación al cuadrado clave',
        enunciado: 'Resuelve <span class="math">√(x + 5) + √x = 5</span>.',
        pasos: [
          'Deja un radical solo: <span class="math">√(x + 5) = 5 − √x</span>.',
          'Eleva: <span class="math">x + 5 = 25 − 10√x + x</span>.',
          'Se cancela la <span class="math">x</span>: <span class="math">5 = 25 − 10√x</span>, así que <span class="math">10√x = 20</span>.',
          'Aísla: <span class="math">√x = 2</span>. Eleva: <span class="math">x = 4</span>.',
          'Comprueba: <span class="math">√9 + √4 = 3 + 2 = 5</span>. Cumple.'
        ],
        respuesta: '<span class="math">x = 4</span>.'
      },
      {
        titulo: 'Dos radicales con dos soluciones válidas',
        enunciado: 'Resuelve <span class="math">√(2x + 3) − √(x + 1) = 1</span>.',
        pasos: [
          'Aísla un radical: <span class="math">√(2x + 3) = 1 + √(x + 1)</span>.',
          'Eleva: <span class="math">2x + 3 = 1 + 2√(x + 1) + (x + 1) = x + 2 + 2√(x + 1)</span>.',
          'Aísla el radical que queda: <span class="math">x + 1 = 2√(x + 1)</span>.',
          'Eleva otra vez: <span class="math">(x + 1)² = 4(x + 1)</span>, es decir <span class="math">x² + 2x + 1 = 4x + 4</span>, luego <span class="math">x² − 2x − 3 = 0</span> y <span class="math">(x − 3)(x + 1) = 0</span>.',
          'Prueba <span class="math">x = 3</span>: <span class="math">√9 − √4 = 3 − 2 = 1</span>. Cumple.',
          'Prueba <span class="math">x = −1</span>: <span class="math">√1 − √0 = 1 − 0 = 1</span>. También cumple. No toda solución candidata es extraña: ¡hay que comprobar, no asumir!'
        ],
        respuesta: '<span class="math">x = 3</span> y <span class="math">x = −1</span>.'
      }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">√(x + 3) = 5</span>.',
        pasos: ['Eleva: <span class="math">x + 3 = 25</span>.', 'Despeja: <span class="math">x = 22</span>.', 'Comprueba: <span class="math">√25 = 5</span>.'],
        respuesta: '<span class="math">x = 22</span>.' },
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">√(2x − 1) = 3</span>.',
        pasos: ['Eleva: <span class="math">2x − 1 = 9</span>.', 'Entonces <span class="math">2x = 10</span> y <span class="math">x = 5</span>.', 'Comprueba: <span class="math">√(10 − 1) = √9 = 3</span>.'],
        respuesta: '<span class="math">x = 5</span>.' },
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">√(x − 2) = −3</span>. ¿Tiene solución?',
        pasos: ['Una raíz principal nunca es negativa, así que ya sospechamos que no hay solución.', 'Si elevas: <span class="math">x − 2 = 9</span>, <span class="math">x = 11</span>.', 'Comprueba: <span class="math">√(11 − 2) = √9 = 3 ≠ −3</span>. Es extraña.'],
        respuesta: 'No tiene solución real (<span class="math">x = 11</span> es extraña).' },
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">√(4x + 1) − 3 = 0</span>.',
        pasos: ['Aísla: <span class="math">√(4x + 1) = 3</span>.', 'Eleva: <span class="math">4x + 1 = 9</span>, así que <span class="math">x = 2</span>.', 'Comprueba: <span class="math">√9 − 3 = 0</span>.'],
        respuesta: '<span class="math">x = 2</span>.' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">√(3x − 2) = x − 1</span>. Da las soluciones exactas y aproximadas.',
        pasos: ['Eleva: <span class="math">3x − 2 = x² − 2x + 1</span>.', 'Ordena: <span class="math">x² − 5x + 3 = 0</span>. Discriminante: <span class="math">25 − 12 = 13</span>.', 'Candidatos: <span class="math">x = (5 ± √13)/2 ≈ 4.303</span> y <span class="math">≈ 0.697</span>.', 'Condición <span class="math">x − 1 ≥ 0</span>: solo <span class="math">x ≈ 4.303</span> la cumple. Para <span class="math">x ≈ 0.697</span> el lado derecho sería negativo: extraña.', 'Comprueba: <span class="math">√(3 · 4.303 − 2) = √10.909 ≈ 3.303 = 4.303 − 1</span>.'],
        respuesta: '<span class="math">x = (5 + √13)/2 ≈ 4.30</span>.' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">√(x + 2) = x</span>.',
        pasos: ['Eleva: <span class="math">x + 2 = x²</span>.', 'Ordena: <span class="math">x² − x − 2 = 0</span>, es decir <span class="math">(x − 2)(x + 1) = 0</span>.', 'Prueba <span class="math">x = 2</span>: <span class="math">√4 = 2</span>. Cumple.', 'Prueba <span class="math">x = −1</span>: <span class="math">√1 = 1 ≠ −1</span>. Extraña.'],
        respuesta: '<span class="math">x = 2</span>.' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">x − 3 = √(x − 1)</span>.',
        pasos: ['Eleva: <span class="math">x² − 6x + 9 = x − 1</span>.', 'Ordena: <span class="math">x² − 7x + 10 = 0</span>, o sea <span class="math">(x − 5)(x − 2) = 0</span>.', 'Prueba <span class="math">x = 5</span>: <span class="math">5 − 3 = 2</span> y <span class="math">√4 = 2</span>. Cumple.', 'Prueba <span class="math">x = 2</span>: <span class="math">2 − 3 = −1</span> y <span class="math">√1 = 1</span>. Extraña.'],
        respuesta: '<span class="math">x = 5</span>.' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">√(x + 9) − √x = 1</span>.',
        pasos: ['Aísla: <span class="math">√(x + 9) = 1 + √x</span>.', 'Eleva: <span class="math">x + 9 = 1 + 2√x + x</span>.', 'Se cancela <span class="math">x</span>: <span class="math">8 = 2√x</span>, luego <span class="math">√x = 4</span>.', 'Eleva: <span class="math">x = 16</span>.', 'Comprueba: <span class="math">√25 − √16 = 5 − 4 = 1</span>.'],
        respuesta: '<span class="math">x = 16</span>.' },
      { nivel: 'dificil', enunciado: 'Resuelve <span class="math">√(4x + 1) = x − 1</span>.',
        pasos: ['Eleva: <span class="math">4x + 1 = x² − 2x + 1</span>.', 'Ordena: <span class="math">0 = x² − 6x</span>, o sea <span class="math">x(x − 6) = 0</span>.', 'Prueba <span class="math">x = 6</span>: <span class="math">√25 = 5</span> y <span class="math">6 − 1 = 5</span>. Cumple.', 'Prueba <span class="math">x = 0</span>: <span class="math">√1 = 1</span> pero <span class="math">0 − 1 = −1</span>. Extraña.'],
        respuesta: '<span class="math">x = 6</span>.' },
      { nivel: 'dificil', enunciado: 'Resuelve <span class="math">√(4x + 1) − √(x − 2) = 3</span>.',
        pasos: ['Aísla: <span class="math">√(4x + 1) = 3 + √(x − 2)</span>.', 'Eleva: <span class="math">4x + 1 = 9 + 6√(x − 2) + x − 2</span>.', 'Simplifica: <span class="math">3x − 6 = 6√(x − 2)</span>, y al dividir entre 3: <span class="math">x − 2 = 2√(x − 2)</span>.', 'Hay dos caminos: <span class="math">√(x − 2) = 0</span> da <span class="math">x = 2</span>; o <span class="math">√(x − 2) = 2</span> da <span class="math">x = 6</span>.', 'Prueba <span class="math">x = 2</span>: <span class="math">√9 − 0 = 3</span>. Cumple.', 'Prueba <span class="math">x = 6</span>: <span class="math">√25 − √4 = 5 − 2 = 3</span>. Cumple.'],
        respuesta: '<span class="math">x = 2</span> y <span class="math">x = 6</span>.' },
      { nivel: 'dificil', enunciado: 'Resuelve <span class="math">2√(x + 1) = x − 2</span>.',
        pasos: ['Eleva ambos lados completos (el 2 también se eleva): <span class="math">4(x + 1) = x² − 4x + 4</span>.', 'Desarrolla: <span class="math">4x + 4 = x² − 4x + 4</span>, así que <span class="math">x² − 8x = 0</span>, o sea <span class="math">x(x − 8) = 0</span>.', 'Prueba <span class="math">x = 8</span>: <span class="math">2√9 = 6</span> y <span class="math">8 − 2 = 6</span>. Cumple.', 'Prueba <span class="math">x = 0</span>: <span class="math">2√1 = 2</span> pero <span class="math">0 − 2 = −2</span>. Extraña.'],
        respuesta: '<span class="math">x = 8</span>.' }
    ],
    teoricas: [
      { q: '¿Por qué es obligatorio comprobar las soluciones en una ecuación radical?', a: 'Porque elevar al cuadrado borra el signo: <span class="math">a² = b²</span> también se cumple cuando <span class="math">a = −b</span>. Así aparecen números que resuelven la ecuación elevada pero no la original (soluciones extrañas).' },
      { q: '¿Por qué <span class="math">√x = −2</span> no tiene solución real?', a: 'Porque <span class="math">√x</span> denota la raíz principal, que siempre es mayor o igual que cero. Nunca puede igualar un número negativo.' },
      { q: '¿Qué debes hacer primero en <span class="math">√(x − 1) + 4 = 7</span>?', a: 'Aislar el radical: restar 4 y obtener <span class="math">√(x − 1) = 3</span>. Elevar sin aislar complica la ecuación sin necesidad.' },
      { q: '¿Cuál es el error de escribir <span class="math">(x − 3)² = x² − 9</span>?', a: 'Falta el término del medio. Lo correcto es <span class="math">(x − 3)² = x² − 6x + 9</span>.' },
      { q: 'Si <span class="math">√(x + 2) = x − 5</span>, ¿qué condición debe cumplir <span class="math">x</span>?', a: 'Como la raíz es mayor o igual que 0, necesitas <span class="math">x − 5 ≥ 0</span>, es decir <span class="math">x ≥ 5</span>. Además el radicando <span class="math">x + 2 ≥ 0</span>.' },
      { q: '¿Cuántas veces debes elevar al cuadrado en una ecuación con dos radicales?', a: 'Generalmente dos veces: una para eliminar el primer radical (que produce el término cruzado con el segundo) y otra para eliminar el que queda.' },
      { q: '¿Una ecuación radical siempre tiene al menos una solución extraña?', a: 'No. En ejemplos como <span class="math">√(2x + 3) − √(x + 1) = 1</span> ambas soluciones candidatas valen. Solo la comprobación lo confirma.' },
      { q: '¿Cuál es la diferencia entre <span class="math">√(a²)</span> y <span class="math">(√a)²</span>?', a: '<span class="math">√(a²) = |a|</span> funciona para cualquier real, mientras que <span class="math">(√a)² = a</span> exige <span class="math">a ≥ 0</span>.' }
    ],
    errores: [
      'Elevar al cuadrado término por término: <span class="math">(√x + 2)² = x + 4</span>. Falta el doble producto: el resultado correcto es <span class="math">x + 4√x + 4</span>.',
      'Elevar sin aislar primero el radical. Si el radical sigue acompañado de otros términos, el binomio al cuadrado vuelve a dejar raíces. Aísla, luego eleva.',
      'No comprobar al final. Un candidato como <span class="math">x = −3</span> en <span class="math">√(x + 7) = x + 1</span> hace que el lado derecho sea negativo. Sustituye siempre en la ecuación original (no en la elevada).',
      'Olvidar elevar el coeficiente: <span class="math">(3√x)² = 9x</span>, no <span class="math">3x</span>.'
    ],
    aplicacion: {
      titulo: 'Hasta dónde se ve desde una torre',
      html: `<p>Desde una torre de observación de altura <span class="math">h</span> metros, la distancia al horizonte en kilómetros es aproximadamente <span class="math">d = 3.6√h</span>. Imagina una torre junto a un lago en El Salvador.</p>
<p><strong>Pregunta 1.</strong> Si la torre mide 25 m, ¿a qué distancia está el horizonte? <span class="math">d = 3.6√25 = 3.6 · 5 = 18 km</span>.</p>
<p><strong>Pregunta 2.</strong> ¿Qué altura necesitaría para ver hasta 27 km? Resuelve la ecuación radical <span class="math">3.6√h = 27</span>.</p>
<ol>
<li>Aísla el radical: <span class="math">√h = 27/3.6 = 7.5</span>.</li>
<li>Eleva al cuadrado: <span class="math">h = 7.5² = 56.25</span>.</li>
<li>Comprueba: <span class="math">3.6 · √56.25 = 3.6 · 7.5 = 27</span>. Cumple.</li>
</ol>
<p>Se necesita una torre de <strong>56.25 m</strong>. Observa que para ver 1.5 veces más lejos (18 → 27 km) hay que subir 2.25 veces la altura (25 → 56.25): la raíz cuadrada "comprime" el crecimiento.</p>`
    },
    calc: 'radical',
    examen: [
      { tipo: 'num', q: 'Resuelve <span class="math">√(x + 7) = 4</span>.', r: 9, tol: 0.01,
        pasos: ['Eleva al cuadrado: <span class="math">x + 7 = 16</span>.', 'Despeja: <span class="math">x = 9</span>.', 'Comprueba: <span class="math">√16 = 4</span>.'] },
      { tipo: 'num', q: 'Resuelve <span class="math">2√(3x + 1) = 10</span>.', r: 8, tol: 0.01,
        pasos: ['Aísla: <span class="math">√(3x + 1) = 5</span>.', 'Eleva: <span class="math">3x + 1 = 25</span>, así que <span class="math">3x = 24</span>.', '<span class="math">x = 8</span>. Comprueba: <span class="math">2√25 = 10</span>.'] },
      { tipo: 'num', q: 'Resuelve <span class="math">√(x + 12) = x</span>. Da la solución válida.', r: 4, tol: 0.01,
        pasos: ['Eleva: <span class="math">x + 12 = x²</span>, es decir <span class="math">x² − x − 12 = 0</span>.', 'Factoriza: <span class="math">(x − 4)(x + 3) = 0</span>.', 'Prueba <span class="math">x = 4</span>: <span class="math">√16 = 4</span>. Cumple.', 'Prueba <span class="math">x = −3</span>: <span class="math">√9 = 3 ≠ −3</span>. Extraña.'] },
      { tipo: 'opt', q: 'Al resolver <span class="math">√(x + 7) = x + 1</span> se obtienen <span class="math">x = 2</span> y <span class="math">x = −3</span>. ¿Cuál es la solución de la ecuación original?', opciones: ['<span class="math">x = −3</span>', '<span class="math">x = 2</span>', 'Ambas', 'Ninguna'], correcta: 1,
        pasos: ['Prueba <span class="math">x = 2</span>: <span class="math">√9 = 3</span> y <span class="math">2 + 1 = 3</span>. Cumple.', 'Prueba <span class="math">x = −3</span>: <span class="math">√4 = 2</span> pero <span class="math">−3 + 1 = −2</span>. No cumple.', 'Solo <span class="math">x = 2</span> es solución.'] },
      { tipo: 'lista', q: 'Resuelve <span class="math">√(3x + 1) − √(4x + 5) = −1</span>. Escribe las soluciones válidas separadas por comas.', r: [1, 5], tol: 0.01,
        pasos: ['Aísla: <span class="math">√(3x + 1) = √(4x + 5) − 1</span>.', 'Eleva: <span class="math">3x + 1 = 4x + 5 − 2√(4x + 5) + 1</span>, luego <span class="math">−x − 5 = −2√(4x + 5)</span>, o sea <span class="math">x + 5 = 2√(4x + 5)</span>.', 'Eleva: <span class="math">x² + 10x + 25 = 16x + 20</span>, es decir <span class="math">x² − 6x + 5 = 0</span>, con <span class="math">x = 1</span> o <span class="math">x = 5</span>.', 'Prueba <span class="math">x = 1</span>: <span class="math">√4 − √9 = 2 − 3 = −1</span>. Cumple.', 'Prueba <span class="math">x = 5</span>: <span class="math">√16 − √25 = 4 − 5 = −1</span>. Cumple.'] },
      { tipo: 'num', q: 'Con la fórmula <span class="math">d = 3.6√h</span> (<span class="math">d</span> en km, <span class="math">h</span> en m), ¿qué altura necesita una torre para ver el horizonte a 54 km?', r: 225, tol: 0.01,
        pasos: ['Plantea: <span class="math">3.6√h = 54</span>.', 'Aísla: <span class="math">√h = 54/3.6 = 15</span>.', 'Eleva: <span class="math">h = 225</span> m.'] },
      { tipo: 'opt', q: '¿Cuál de estas ecuaciones <strong>no</strong> tiene solución real?', opciones: ['<span class="math">√x = 0</span>', '<span class="math">√(x + 1) = 0</span>', '<span class="math">√x = 2</span>', '<span class="math">√x = −2</span>'], correcta: 3,
        pasos: ['La raíz principal nunca es negativa.', '<span class="math">√x = −2</span> exigiría que una raíz fuera negativa: imposible.', 'Las demás dan <span class="math">x = 0</span>, <span class="math">x = −1</span> y <span class="math">x = 4</span>, todas válidas.'] },
      { tipo: 'num', q: 'Resuelve <span class="math">√(x + 16) − √x = 2</span>.', r: 9, tol: 0.01,
        pasos: ['Aísla: <span class="math">√(x + 16) = 2 + √x</span>.', 'Eleva: <span class="math">x + 16 = 4 + 4√x + x</span>, así que <span class="math">12 = 4√x</span> y <span class="math">√x = 3</span>.', '<span class="math">x = 9</span>.', 'Comprueba: <span class="math">√25 − √9 = 5 − 3 = 2</span>.'] },
      { tipo: 'opt', q: '¿Cuál es el desarrollo correcto de <span class="math">(√x − 3)²</span>?', opciones: ['<span class="math">x − 9</span>', '<span class="math">x + 9</span>', '<span class="math">x − 6√x + 9</span>', '<span class="math">x − 3√x + 9</span>'], correcta: 2,
        pasos: ['Usa <span class="math">(a − b)² = a² − 2ab + b²</span> con <span class="math">a = √x</span> y <span class="math">b = 3</span>.', '<span class="math">a² = x</span>, <span class="math">2ab = 6√x</span>, <span class="math">b² = 9</span>.', 'Resultado: <span class="math">x − 6√x + 9</span>.'] },
      { tipo: 'num', q: 'Resuelve <span class="math">√(x + 2) = x − 4</span>. Da la solución válida.', r: 7, tol: 0.01,
        pasos: ['Eleva: <span class="math">x + 2 = x² − 8x + 16</span>, es decir <span class="math">x² − 9x + 14 = 0</span>.', 'Factoriza: <span class="math">(x − 7)(x − 2) = 0</span>.', 'Prueba <span class="math">x = 7</span>: <span class="math">√9 = 3</span> y <span class="math">7 − 4 = 3</span>. Cumple.', 'Prueba <span class="math">x = 2</span>: <span class="math">√4 = 2</span> pero <span class="math">2 − 4 = −2</span>. Extraña.'] }
    ]
  };

  /* ============================================================ 1.3 */
  T['1.3'] = {
    id: '1.3',
    unidad: 1,
    titulo: 'Sistemas de ecuaciones lineales y cuadráticas',
    resumen: 'Resuelve sistemas recta-parábola o recta-circunferencia por sustitución e interpreta si se cortan en 0, 1 o 2 puntos.',
    objetivos: [
      'Resolver sistemas con una ecuación lineal y una cuadrática por sustitución.',
      'Escribir las soluciones como puntos (x, y).',
      'Interpretar geométricamente el número de soluciones con el discriminante.',
      'Aplicar los sistemas a problemas de contexto, como el punto de equilibrio.'
    ],
    teoria: [
      {
        titulo: '¿Qué es un sistema lineal-cuadrático?',
        html: `<p>Son dos ecuaciones con dos incógnitas, <span class="math">x</span> e <span class="math">y</span>: una de primer grado (una recta) y otra de segundo grado (parábola, circunferencia, etc.).</p>
<p><span class="math">y = mx + b</span><br><span class="math">y = ax² + bx + c</span></p>
<p>Una <strong>solución</strong> es un punto <span class="math">(x, y)</span> que cumple las dos ecuaciones al mismo tiempo. <strong>Intuición:</strong> cada ecuación dibuja una curva; las soluciones son los puntos donde las curvas se cruzan.</p>`
      },
      {
        titulo: 'Método de sustitución',
        html: `<ol>
<li><strong>Despeja</strong> una variable en la ecuación lineal (casi siempre <span class="math">y</span>).</li>
<li><strong>Sustituye</strong> esa expresión en la cuadrática. Usa paréntesis.</li>
<li>Obtienes una ecuación en una sola variable: ordénala a la forma <span class="math">ax² + bx + c = 0</span>.</li>
<li>Resuélvela por tijeras o fórmula general.</li>
<li><strong>Regresa</strong> a la ecuación lineal para hallar la otra coordenada de cada solución.</li>
</ol>
<p>El paso 5 es obligatorio: la respuesta son <strong>parejas</strong> <span class="math">(x, y)</span>, no solo valores de <span class="math">x</span>. Usa la <em>lineal</em> para el regreso, porque cada <span class="math">x</span> da una sola <span class="math">y</span>. Si usas la cuadrática en una circunferencia, saldrían dos <span class="math">y</span> y una sería falsa.</p>`
      },
      {
        titulo: 'Interpretación geométrica',
        html: `<p>Una recta y una parábola pueden relacionarse de tres maneras:</p>
<table>
<tr><th>Posición de la recta</th><th>Puntos comunes</th><th>Soluciones reales</th></tr>
<tr><td>Secante</td><td>2</td><td>2</td></tr>
<tr><td>Tangente</td><td>1 (toca sin cruzar)</td><td>1 (doble)</td></tr>
<tr><td>Exterior</td><td>0</td><td>ninguna</td></tr>
</table>
<p>Imagina una pelota que rueda por una rampa recta; el "choque" con una pared curva puede pasar dos veces, una vez justo rozando, o nunca.</p>`
      },
      {
        titulo: 'El discriminante decide',
        html: `<p>Después de sustituir quedas con <span class="math">ax² + bx + c = 0</span>. Su discriminante te dice cuántas intersecciones hay sin necesidad de hallarlas:</p>
<ul>
<li><span class="math">Δ > 0</span> → dos puntos: recta <strong>secante</strong>.</li>
<li><span class="math">Δ = 0</span> → un punto (doble): recta <strong>tangente</strong>.</li>
<li><span class="math">Δ < 0</span> → ningún punto real: recta <strong>exterior</strong>.</li>
</ul>
<p><span class="math">Δ = b² − 4ac</span>. Este es el truco para pedir "hallar k para que la recta sea tangente": iguala <span class="math">Δ = 0</span> y despeja <span class="math">k</span>.</p>`
      },
      {
        titulo: 'Otras cuadráticas y variantes',
        html: `<ul>
<li><strong>Circunferencia:</strong> <span class="math">x² + y² = r²</span>. Sustituyes <span class="math">y = mx + b</span> y obtienes una cuadrática igual que con la parábola. Recta secante, tangente o exterior a la circunferencia, con el mismo criterio del discriminante.</li>
<li><strong>Suma y producto:</strong> <span class="math">x + y = S</span> y <span class="math">xy = P</span>. Despeja <span class="math">y = S − x</span> y sustituye: <span class="math">x(S − x) = P</span>.</li>
<li><strong>Despejar x:</strong> si en la lineal el coeficiente de <span class="math">x</span> es 1, a veces conviene despejar <span class="math">x</span> en lugar de <span class="math">y</span> para evitar fracciones.</li>
<li><strong>Recta vertical</strong> <span class="math">x = k</span>: ya tienes <span class="math">x</span>; solo calcula <span class="math">y</span> en la cuadrática.</li>
</ul>`
      },
      {
        titulo: 'Casos especiales que engañan',
        html: `<ul>
<li>Una recta <strong>vertical</strong> corta a una parábola <span class="math">y = ax² + …</span> en un solo punto, pero <strong>no es tangente</strong>. Al sustituir, la ecuación se vuelve lineal, no cuadrática.</li>
<li>Si al sustituir desaparece el término cuadrático (por ejemplo, porque restas dos parábolas iguales), tienes una ecuación lineal: una sola solución.</li>
<li>Si <span class="math">Δ < 0</span> hay soluciones complejas, pero no hay puntos de cruce en el plano real.</li>
</ul>`
      },
      {
        titulo: 'Relación con otros temas',
        html: `<p>Este método volverá en el tema de la parábola y la circunferencia, donde pedirán rectas tangentes y posiciones relativas. Además, si aparece una ecuación de cuarto grado tras sustituir, usarás lo aprendido en 1.1. Prueba la calculadora para ver la recta y la curva cortándose.</p>`
      }
    ],
    formulas: [
      { label: 'Sistema típico', html: 'y = mx + b,  y = ax² + bx + c' },
      { label: 'Sustitución', html: 'mx + b = ax² + bx + c' },
      { label: 'Ecuación resultante', html: 'ax² + (b − m)x + (c − b) = 0' },
      { label: 'Discriminante', html: 'Δ = B² − 4AC' },
      { label: 'Soluciones en x', html: 'x = (−B ± √Δ)/(2A)' },
      { label: 'Cálculo de y', html: 'y = mx + b' },
      { label: 'Interpretación', html: 'Δ > 0 secante; Δ = 0 tangente; Δ < 0 exterior' }
    ],
    ejemplos: [
      {
        titulo: 'Dos intersecciones (secante)',
        enunciado: 'Resuelve el sistema <span class="math">y = x − 1<br>y = x² − 3x + 2</span>.',
        pasos: [
          'La primera ecuación ya tiene <span class="math">y</span> despejada. Sustituye en la segunda: <span class="math">x − 1 = x² − 3x + 2</span>.',
          'Pasa todo a un lado: <span class="math">0 = x² − 4x + 3</span>, es decir <span class="math">(x − 1)(x − 3) = 0</span>.',
          'Entonces <span class="math">x = 1</span> o <span class="math">x = 3</span>.',
          'Regresa a la lineal: si <span class="math">x = 1</span>, <span class="math">y = 0</span>. Si <span class="math">x = 3</span>, <span class="math">y = 2</span>.',
          'Comprueba en la parábola: <span class="math">1 − 3 + 2 = 0</span> y <span class="math">9 − 9 + 2 = 2</span>. Coinciden.'
        ],
        respuesta: 'Puntos <span class="math">(1, 0)</span> y <span class="math">(3, 2)</span>: la recta es secante.'
      },
      {
        titulo: 'Un solo punto (tangente)',
        enunciado: 'Resuelve <span class="math">y = 2x − 1<br>y = x²</span> e interpreta el resultado.',
        pasos: [
          'Iguala: <span class="math">x² = 2x − 1</span>, así que <span class="math">x² − 2x + 1 = 0</span>.',
          'Factoriza: <span class="math">(x − 1)² = 0</span>, entonces <span class="math">x = 1</span> (doble).',
          'Discriminante: <span class="math">Δ = 4 − 4 = 0</span>.',
          'Calcula <span class="math">y = 2(1) − 1 = 1</span>.'
        ],
        respuesta: 'Un solo punto <span class="math">(1, 1)</span>: la recta es tangente a la parábola.'
      },
      {
        titulo: 'Ningún punto real (exterior)',
        enunciado: 'Resuelve <span class="math">y = x − 4<br>y = x² + 1</span>.',
        pasos: [
          'Iguala: <span class="math">x² + 1 = x − 4</span>, luego <span class="math">x² − x + 5 = 0</span>.',
          'Discriminante: <span class="math">Δ = (−1)² − 4(1)(5) = 1 − 20 = −19</span>.',
          'Como <span class="math">Δ < 0</span> no hay números reales que sirvan.',
          'Interpretación: la parábola abre hacia arriba con vértice en <span class="math">(0, 1)</span>; la recta pasa siempre por debajo de ella y nunca la toca.'
        ],
        respuesta: 'No tiene solución real: la recta es exterior a la parábola.'
      },
      {
        titulo: 'Recta y circunferencia',
        enunciado: 'Resuelve <span class="math">2x − y = 1<br>x² + y² = 13</span>.',
        pasos: [
          'Despeja <span class="math">y</span> en la lineal: <span class="math">y = 2x − 1</span>.',
          'Sustituye con paréntesis: <span class="math">x² + (2x − 1)² = 13</span>.',
          'Desarrolla: <span class="math">x² + 4x² − 4x + 1 = 13</span>, así que <span class="math">5x² − 4x − 12 = 0</span>.',
          'Fórmula general: <span class="math">Δ = 16 + 240 = 256 = 16²</span>, entonces <span class="math">x = (4 ± 16)/10</span>. Resulta <span class="math">x = 2</span> o <span class="math">x = −6/5</span>.',
          'Calcula y: si <span class="math">x = 2</span>, <span class="math">y = 3</span>. Si <span class="math">x = −6/5</span>, <span class="math">y = −12/5 − 1 = −17/5</span>.',
          'Comprueba: <span class="math">4 + 9 = 13</span> y <span class="math">36/25 + 289/25 = 325/25 = 13</span>.'
        ],
        respuesta: 'Puntos <span class="math">(2, 3)</span> y <span class="math">(−6/5, −17/5)</span>.'
      },
      {
        titulo: 'Contexto real: chorro de agua y rampa',
        enunciado: 'El chorro de una fuente sigue la curva <span class="math">y = −x² + 6x</span> (metros) y una rampa inclinada pasa por la recta <span class="math">y = x + 4</span>. ¿En qué puntos se cruzan?',
        pasos: [
          'Iguala: <span class="math">−x² + 6x = x + 4</span>.',
          'Ordena: <span class="math">0 = x² − 5x + 4</span>, es decir <span class="math">(x − 1)(x − 4) = 0</span>.',
          'Entonces <span class="math">x = 1</span> o <span class="math">x = 4</span>.',
          'Usa la recta: <span class="math">y = 1 + 4 = 5</span> y <span class="math">y = 4 + 4 = 8</span>.',
          'Comprueba en el chorro: <span class="math">−1 + 6 = 5</span> y <span class="math">−16 + 24 = 8</span>.'
        ],
        respuesta: 'Se cruzan en <span class="math">(1, 5)</span> y <span class="math">(4, 8)</span>.'
      },
      {
        titulo: 'Hallar k para que sea tangente',
        enunciado: '¿Para qué valor de <span class="math">k</span> la recta <span class="math">y = 4x + k</span> es tangente a la parábola <span class="math">y = x² − 2x + 3</span>? Halla el punto de tangencia.',
        pasos: [
          'Iguala: <span class="math">x² − 2x + 3 = 4x + k</span>, luego <span class="math">x² − 6x + (3 − k) = 0</span>.',
          'Tangente significa discriminante cero: <span class="math">Δ = 36 − 4(3 − k) = 24 + 4k = 0</span>.',
          'Entonces <span class="math">k = −6</span>.',
          'Con <span class="math">k = −6</span> la ecuación es <span class="math">x² − 6x + 9 = 0</span>, es decir <span class="math">(x − 3)² = 0</span>, así que <span class="math">x = 3</span>.',
          'Calcula <span class="math">y = 4(3) − 6 = 6</span>. Comprueba en la parábola: <span class="math">9 − 6 + 3 = 6</span>.'
        ],
        respuesta: '<span class="math">k = −6</span>; punto de tangencia <span class="math">(3, 6)</span>.'
      }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">y = x + 2<br>y = x²</span>.',
        pasos: ['Iguala: <span class="math">x² = x + 2</span>, así que <span class="math">x² − x − 2 = 0</span>.', 'Factoriza: <span class="math">(x − 2)(x + 1) = 0</span>, luego <span class="math">x = 2</span> o <span class="math">x = −1</span>.', 'Calcula y con la recta: <span class="math">y = 4</span> y <span class="math">y = 1</span>.', 'Comprueba: <span class="math">2² = 4</span> y <span class="math">(−1)² = 1</span>.'],
        respuesta: '<span class="math">(2, 4)</span> y <span class="math">(−1, 1)</span>.' },
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">y = 2x<br>y = x² − 3</span>.',
        pasos: ['Iguala: <span class="math">x² − 3 = 2x</span>, así que <span class="math">x² − 2x − 3 = 0</span>.', 'Factoriza: <span class="math">(x − 3)(x + 1) = 0</span>.', '<span class="math">x = 3</span> da <span class="math">y = 6</span>. <span class="math">x = −1</span> da <span class="math">y = −2</span>.', 'Comprueba: <span class="math">9 − 3 = 6</span> y <span class="math">1 − 3 = −2</span>.'],
        respuesta: '<span class="math">(3, 6)</span> y <span class="math">(−1, −2)</span>.' },
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">y = 4<br>y = x² − 5</span>.',
        pasos: ['Sustituye <span class="math">y = 4</span>: <span class="math">x² − 5 = 4</span>.', 'Entonces <span class="math">x² = 9</span>, así que <span class="math">x = ±3</span>.', 'La recta es horizontal, por eso ambos puntos tienen <span class="math">y = 4</span>.'],
        respuesta: '<span class="math">(3, 4)</span> y <span class="math">(−3, 4)</span>.' },
      { nivel: 'facil', enunciado: 'Resuelve <span class="math">x + y = 3<br>y = x² − 4x + 5</span>.',
        pasos: ['Despeja: <span class="math">y = 3 − x</span>.', 'Sustituye: <span class="math">3 − x = x² − 4x + 5</span>, así que <span class="math">0 = x² − 3x + 2</span>.', 'Factoriza: <span class="math">(x − 1)(x − 2) = 0</span>.', '<span class="math">x = 1</span> da <span class="math">y = 2</span>. <span class="math">x = 2</span> da <span class="math">y = 1</span>.', 'Comprueba: <span class="math">1 − 4 + 5 = 2</span> y <span class="math">4 − 8 + 5 = 1</span>.'],
        respuesta: '<span class="math">(1, 2)</span> y <span class="math">(2, 1)</span>.' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">3x + y = 1<br>y = 2x² − x − 3</span>.',
        pasos: ['Despeja: <span class="math">y = 1 − 3x</span>.', 'Sustituye: <span class="math">2x² − x − 3 = 1 − 3x</span>, así que <span class="math">2x² + 2x − 4 = 0</span>.', 'Divide entre 2: <span class="math">x² + x − 2 = 0</span>, o sea <span class="math">(x + 2)(x − 1) = 0</span>.', '<span class="math">x = 1</span> da <span class="math">y = −2</span>. <span class="math">x = −2</span> da <span class="math">y = 7</span>.', 'Comprueba: <span class="math">2 − 1 − 3 = −2</span> y <span class="math">8 + 2 − 3 = 7</span>.'],
        respuesta: '<span class="math">(1, −2)</span> y <span class="math">(−2, 7)</span>.' },
      { nivel: 'intermedio', enunciado: 'Resuelve <span class="math">x − y = 2<br>x² + y² = 20</span>.',
        pasos: ['Despeja: <span class="math">y = x − 2</span>.', 'Sustituye: <span class="math">x² + (x − 2)² = 20</span>, así que <span class="math">2x² − 4x + 4 = 20</span>.', 'Simplifica: <span class="math">x² − 2x − 8 = 0</span>, es decir <span class="math">(x − 4)(x + 2) = 0</span>.', '<span class="math">x = 4</span> da <span class="math">y = 2</span>. <span class="math">x = −2</span> da <span class="math">y = −4</span>.', 'Comprueba: <span class="math">16 + 4 = 20</span> y <span class="math">4 + 16 = 20</span>.'],
        respuesta: '<span class="math">(4, 2)</span> y <span class="math">(−2, −4)</span>.' },
      { nivel: 'intermedio', enunciado: 'Dos números suman 7 y su producto es 12. Plantea y resuelve el sistema <span class="math">x + y = 7<br>xy = 12</span>.',
        pasos: ['Despeja: <span class="math">y = 7 − x</span>.', 'Sustituye en el producto: <span class="math">x(7 − x) = 12</span>, es decir <span class="math">7x − x² = 12</span>.', 'Ordena: <span class="math">x² − 7x + 12 = 0</span>, o sea <span class="math">(x − 3)(x − 4) = 0</span>.', '<span class="math">x = 3</span> da <span class="math">y = 4</span>. <span class="math">x = 4</span> da <span class="math">y = 3</span>.', 'Son los mismos dos números, en orden distinto.'],
        respuesta: '<span class="math">(3, 4)</span> y <span class="math">(4, 3)</span>.' },
      { nivel: 'intermedio', enunciado: '¿Para qué valor de <span class="math">k</span> la recta <span class="math">y = −2x + k</span> es tangente a la parábola <span class="math">y = x² + 2x + 1</span>?',
        pasos: ['Iguala: <span class="math">x² + 2x + 1 = −2x + k</span>, luego <span class="math">x² + 4x + (1 − k) = 0</span>.', 'Tangente: <span class="math">Δ = 16 − 4(1 − k) = 12 + 4k = 0</span>.', 'Entonces <span class="math">k = −3</span>.', 'Punto de tangencia: <span class="math">x² + 4x + 4 = 0</span> da <span class="math">x = −2</span>, y <span class="math">y = −2(−2) − 3 = 1</span>. En la parábola: <span class="math">4 − 4 + 1 = 1</span>.'],
        respuesta: '<span class="math">k = −3</span>; tangencia en <span class="math">(−2, 1)</span>.' },
      { nivel: 'dificil', enunciado: 'Resuelve <span class="math">x + 2y = 5<br>x² + y² = 10</span>.',
        pasos: ['Despeja <span class="math">x</span> para evitar fracciones: <span class="math">x = 5 − 2y</span>.', 'Sustituye: <span class="math">(5 − 2y)² + y² = 10</span>, así que <span class="math">25 − 20y + 4y² + y² = 10</span>.', 'Ordena: <span class="math">5y² − 20y + 15 = 0</span>. Divide entre 5: <span class="math">y² − 4y + 3 = 0</span>, o sea <span class="math">(y − 1)(y − 3) = 0</span>.', '<span class="math">y = 1</span> da <span class="math">x = 3</span>. <span class="math">y = 3</span> da <span class="math">x = −1</span>.', 'Comprueba: <span class="math">9 + 1 = 10</span> y <span class="math">1 + 9 = 10</span>.'],
        respuesta: '<span class="math">(3, 1)</span> y <span class="math">(−1, 3)</span>.' },
      { nivel: 'dificil', enunciado: 'Analiza, según el valor de <span class="math">k</span>, cuántas soluciones reales tiene el sistema <span class="math">y = x²<br>y = 2x + k</span>.',
        pasos: ['Iguala: <span class="math">x² = 2x + k</span>, luego <span class="math">x² − 2x − k = 0</span>.', 'Discriminante: <span class="math">Δ = 4 + 4k</span>.', 'Si <span class="math">Δ > 0</span>, es decir <span class="math">k > −1</span>: dos soluciones (secante).', 'Si <span class="math">Δ = 0</span>, es decir <span class="math">k = −1</span>: una solución (tangente, en <span class="math">(1, 1)</span>).', 'Si <span class="math">Δ < 0</span>, es decir <span class="math">k < −1</span>: ninguna real (exterior).'],
        respuesta: '<span class="math">k > −1</span>: dos; <span class="math">k = −1</span>: una; <span class="math">k < −1</span>: ninguna.' },
      { nivel: 'dificil', enunciado: 'Resuelve <span class="math">x − 2y = −2<br>x² + 4y² = 8</span> (elipse). Da las soluciones exactas y aproximadas a 3 decimales.',
        pasos: ['Despeja: <span class="math">x = 2y − 2</span>.', 'Sustituye: <span class="math">(2y − 2)² + 4y² = 8</span>, es decir <span class="math">4y² − 8y + 4 + 4y² = 8</span>.', 'Ordena: <span class="math">8y² − 8y − 4 = 0</span>, y al dividir entre 4: <span class="math">2y² − 2y − 1 = 0</span>.', 'Fórmula: <span class="math">Δ = 4 + 8 = 12</span>, entonces <span class="math">y = (2 ± 2√3)/4 = (1 ± √3)/2</span>, es decir <span class="math">y ≈ 1.366</span> o <span class="math">y ≈ −0.366</span>.', 'Calcula x: <span class="math">x = 2y − 2 = ±√3 − 1</span>. Resulta <span class="math">x ≈ 0.732</span> y <span class="math">x ≈ −2.732</span>.', 'Comprueba: <span class="math">0.732² + 4(1.366)² ≈ 0.536 + 7.464 = 8</span>.'],
        respuesta: '<span class="math">(√3 − 1, (1 + √3)/2) ≈ (0.732, 1.366)</span> y <span class="math">(−√3 − 1, (1 − √3)/2) ≈ (−2.732, −0.366)</span>.' }
    ],
    teoricas: [
      { q: '¿Cuántas soluciones reales puede tener un sistema recta-parábola?', a: 'Como máximo 2, porque al sustituir queda una cuadrática. Puede haber 2, 1 (tangente, o recta vertical) o 0.' },
      { q: '¿Por qué el discriminante dice cuántas intersecciones hay?', a: 'Porque las soluciones reales de la ecuación resultante son justo las abscisas de los puntos de corte. <span class="math">Δ > 0</span> da dos, <span class="math">Δ = 0</span> una doble y <span class="math">Δ < 0</span> ninguna real.' },
      { q: '¿Por qué conviene regresar a la ecuación lineal para hallar la otra coordenada?', a: 'Porque cada x da una sola y en una recta. En la cuadrática (por ejemplo una circunferencia) podrían salir dos valores de y y uno sería falso.' },
      { q: 'La recta <span class="math">x = 2</span> corta a <span class="math">y = x²</span> en un solo punto. ¿Es tangente?', a: 'No. Es vertical y la corta de lado a lado, sin tocarla de manera tangente. Al sustituir, la ecuación se vuelve lineal, no cuadrática.' },
      { q: 'Si <span class="math">Δ < 0</span>, ¿el sistema tiene solución?', a: 'No tiene solución real (no hay puntos de corte en el plano). Sí tiene dos soluciones complejas, pero no se grafican.' },
      { q: '¿Qué significa que <span class="math">(3, −14)</span> sea solución de un sistema?', a: 'Que ese punto está en las dos curvas: al sustituir <span class="math">x = 3</span> e <span class="math">y = −14</span> se cumplen las dos ecuaciones.' },
      { q: '¿Puedes despejar <span class="math">x</span> en lugar de <span class="math">y</span> en la lineal?', a: 'Sí. Es válido y a veces mejor: si <span class="math">x</span> tiene coeficiente 1, evitas fracciones. El resultado final es el mismo.' },
      { q: '¿Qué ocurre si después de sustituir desaparece el término <span class="math">x²</span>?', a: 'La ecuación queda lineal y tiene una sola solución. Esa recta corta a la curva en un solo punto, pero no es tangente.' }
    ],
    errores: [
      'Hallar los valores de <span class="math">x</span> y detenerse. La respuesta de un sistema son parejas <span class="math">(x, y)</span>: falta sustituir en la lineal.',
      'Sustituir sin paréntesis: <span class="math">x² + 2x − 1²</span> en lugar de <span class="math">x² + (2x − 1)²</span>. El binomio debe elevarse completo: <span class="math">(2x − 1)² = 4x² − 4x + 1</span>.',
      'Sustituir la expresión despejada en la misma ecuación de donde se despejó. Resulta una identidad como <span class="math">0 = 0</span> y no avanzas. Sustituye en la <em>otra</em> ecuación.',
      'Pensar que una sola solución siempre significa tangente. Una recta vertical (o una ecuación que se vuelve lineal) también corta en un punto sin ser tangente. La tangencia exige <span class="math">Δ = 0</span>.'
    ],
    aplicacion: {
      titulo: 'Punto de equilibrio de una pupusería',
      html: `<p>Una pupusería vende <span class="math">x</span> cientos de pupusas al día. Su ingreso en dólares es <span class="math">R = −x² + 12x</span> (el precio baja si vende demasiado) y su costo es <span class="math">C = 4x + 12</span> (lo fijo más lo variable). ¿Con cuántas pupusas empata (ingreso igual a costo) y qué beneficio hay en medio?</p>
<p><strong>Sistema:</strong> <span class="math">y = −x² + 12x<br>y = 4x + 12</span>.</p>
<ol>
<li>Iguala: <span class="math">−x² + 12x = 4x + 12</span>, luego <span class="math">x² − 8x + 12 = 0</span>.</li>
<li>Factoriza: <span class="math">(x − 2)(x − 6) = 0</span>, entonces <span class="math">x = 2</span> o <span class="math">x = 6</span>.</li>
<li>Con la recta (costo): <span class="math">y = 4(2) + 12 = 20</span> y <span class="math">y = 4(6) + 12 = 36</span>.</li>
<li>Comprueba el ingreso: <span class="math">R(2) = −4 + 24 = 20</span> y <span class="math">R(6) = −36 + 72 = 36</span>.</li>
</ol>
<p>Los puntos de equilibrio son <span class="math">(2, 20)</span> y <span class="math">(6, 36)</span>: con 200 pupusas el ingreso y el costo valen $20, y con 600 valen $36. Entre 200 y 600 pupusas el ingreso supera al costo (hay ganancia); fuera de ese intervalo hay pérdida. Es una recta <strong>secante</strong> a la parábola de ingresos. Ejemplo del beneficio máximo: con 400 pupusas, <span class="math">R = −16 + 48 = 32</span> y <span class="math">C = 28</span>, ganancia de $4.</p>`
    },
    calc: 'sistema-lc',
    examen: [
      { tipo: 'par', q: 'Resuelve <span class="math">y = 2x − 1<br>y = x²</span>. Escribe el único punto de intersección (x, y).', r: [1, 1], tol: 0.01,
        pasos: ['Iguala: <span class="math">x² = 2x − 1</span>, así que <span class="math">x² − 2x + 1 = 0</span>.', '<span class="math">(x − 1)² = 0</span> da <span class="math">x = 1</span>.', '<span class="math">y = 2(1) − 1 = 1</span>.', 'Punto <span class="math">(1, 1)</span>: la recta es tangente.'] },
      { tipo: 'par', q: 'Resuelve <span class="math">y = 3x − 2<br>y = x²</span>. Escribe la intersección con <strong>mayor x</strong> como (x, y).', r: [2, 4], tol: 0.01,
        pasos: ['Iguala: <span class="math">x² = 3x − 2</span>, así que <span class="math">x² − 3x + 2 = 0</span>.', '<span class="math">(x − 1)(x − 2) = 0</span>, entonces <span class="math">x = 1</span> o <span class="math">x = 2</span>.', 'Para <span class="math">x = 1</span>: <span class="math">y = 1</span>. Para <span class="math">x = 2</span>: <span class="math">y = 4</span>.', 'La de mayor x es <span class="math">(2, 4)</span>.'] },
      { tipo: 'lista', q: 'Resuelve <span class="math">y = 2x + 3<br>y = x²</span>. Escribe los dos valores de <span class="math">x</span> de las soluciones, separados por comas.', r: [3, -1], tol: 0.01,
        pasos: ['Iguala: <span class="math">x² = 2x + 3</span>, así que <span class="math">x² − 2x − 3 = 0</span>.', 'Factoriza: <span class="math">(x − 3)(x + 1) = 0</span>.', 'Entonces <span class="math">x = 3</span> o <span class="math">x = −1</span>.', 'Los puntos son <span class="math">(3, 9)</span> y <span class="math">(−1, 1)</span>.'] },
      { tipo: 'num', q: 'Una tienda tiene ingreso <span class="math">R = −x² + 10x</span> y costo <span class="math">C = 2x + 7</span> (en miles de dólares, con <span class="math">x</span> en cientos de unidades). ¿Cuál es el mayor valor de <span class="math">x</span> en que el ingreso iguala al costo?', r: 7, tol: 0.01,
        pasos: ['Iguala: <span class="math">−x² + 10x = 2x + 7</span>.', 'Ordena: <span class="math">x² − 8x + 7 = 0</span>, es decir <span class="math">(x − 1)(x − 7) = 0</span>.', 'Las soluciones son <span class="math">x = 1</span> y <span class="math">x = 7</span>.', 'La mayor es 7.'] },
      { tipo: 'opt', q: '¿Cuántas soluciones reales tiene el sistema <span class="math">y = −x − 3<br>y = x²</span>?', opciones: ['Ninguna', 'Una', 'Dos', 'Infinitas'], correcta: 0,
        pasos: ['Iguala: <span class="math">x² = −x − 3</span>, luego <span class="math">x² + x + 3 = 0</span>.', 'Discriminante: <span class="math">Δ = 1 − 12 = −11 < 0</span>.', 'No hay puntos de corte reales: la recta es exterior a la parábola.'] },
      { tipo: 'num', q: 'Halla el valor de <span class="math">k</span> para que la recta <span class="math">y = 4x + k</span> sea tangente a la parábola <span class="math">y = x²</span>.', r: -4, tol: 0.01,
        pasos: ['Iguala: <span class="math">x² = 4x + k</span>, así que <span class="math">x² − 4x − k = 0</span>.', 'Tangente: <span class="math">Δ = 16 + 4k = 0</span>.', 'Entonces <span class="math">k = −4</span>.', 'Comprobación: <span class="math">x² − 4x + 4 = (x − 2)²</span>, tangencia en <span class="math">(2, 4)</span>.'] },
      { tipo: 'opt', q: 'Al sustituir en un sistema recta-parábola queda una ecuación cuadrática con <span class="math">Δ = 0</span>. La recta es:', opciones: ['Secante', 'Tangente', 'Exterior', 'Paralela al eje y'], correcta: 1,
        pasos: ['<span class="math">Δ = 0</span> significa una única solución (doble).', 'Un único punto de contacto sin cruzar: recta tangente.', 'Secante sería <span class="math">Δ > 0</span> y exterior <span class="math">Δ < 0</span>.'] },
      { tipo: 'lista', q: 'Resuelve <span class="math">y = x + 1<br>x² + y² = 25</span>. Escribe los dos valores de <span class="math">x</span>, separados por comas.', r: [3, -4], tol: 0.01,
        pasos: ['Sustituye: <span class="math">x² + (x + 1)² = 25</span>, así que <span class="math">2x² + 2x + 1 = 25</span>.', 'Ordena: <span class="math">2x² + 2x − 24 = 0</span>, y al dividir entre 2: <span class="math">x² + x − 12 = 0</span>.', 'Factoriza: <span class="math">(x + 4)(x − 3) = 0</span>, entonces <span class="math">x = 3</span> o <span class="math">x = −4</span>.', 'Puntos: <span class="math">(3, 4)</span> y <span class="math">(−4, −3)</span>.'] },
      { tipo: 'opt', q: 'Después de hallar los valores de <span class="math">x</span> al resolver un sistema lineal-cuadrático, ¿qué debes hacer?', opciones: ['Elevar al cuadrado cada x', 'Nada: ya terminaste', 'Sumar las dos soluciones', 'Sustituir cada x en la ecuación lineal para hallar y'], correcta: 3,
        pasos: ['La solución de un sistema es un punto <span class="math">(x, y)</span>.', 'Por eso falta calcular la y de cada x.', 'Se usa la ecuación lineal porque da un solo valor de y para cada x.'] },
      { tipo: 'par', q: 'Resuelve <span class="math">y = −3x + 1<br>y = x² − 3x − 3</span>. Escribe la solución con <strong>x negativa</strong> como (x, y).', r: [-2, 7], tol: 0.01,
        pasos: ['Iguala: <span class="math">x² − 3x − 3 = −3x + 1</span>, así que <span class="math">x² = 4</span> (los términos <span class="math">−3x</span> se cancelan).', 'Entonces <span class="math">x = 2</span> o <span class="math">x = −2</span>.', 'Con <span class="math">x = −2</span>: <span class="math">y = −3(−2) + 1 = 7</span>.', 'Comprueba en la parábola: <span class="math">4 + 6 − 3 = 7</span>.'] }
    ]
  };
})();

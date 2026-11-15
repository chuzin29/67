/* data-2a-u4.js — Unidad 4: Funciones trascendentales I */
(function () {
  var T = (window.CURSO_2A = window.CURSO_2A || { temas: {} }).temas;

  /* ====================================================================== */
  /* TEMA 1.11 — Propiedades de las potencias y operaciones con radicales   */
  /* ====================================================================== */
  T['1.11'] = {
    id: '1.11',
    unidad: 4,
    titulo: 'Propiedades de las potencias y operaciones con radicales',
    resumen: 'Domina exponentes enteros, negativos y fraccionarios, simplifica radicales y úsalos para calcular perímetros y áreas.',
    objetivos: [
      'Aplicar la definición de potencia, el exponente cero y el exponente negativo.',
      'Utilizar las propiedades de las potencias para simplificar expresiones con bases y exponentes iguales o distintos.',
      'Convertir entre exponentes fraccionarios y radicales, y determinar el signo de una potencia con base negativa.',
      'Simplificar, sumar, multiplicar y racionalizar radicales, y aplicarlos al cálculo de perímetros y áreas.'
    ],
    teoria: [
      {
        titulo: 'Base y exponente: qué significa una potencia',
        html: `<p>Una <strong>potencia</strong> es una forma corta de escribir una multiplicación repetida:</p>
<p><span class="math">aⁿ = a · a · a · … · a</span> (n factores iguales a <span class="math">a</span>).</p>
<ul>
<li>El número que se repite, <span class="math">a</span>, se llama <strong>base</strong>.</li>
<li>El número que dice cuántas veces se repite, <span class="math">n</span>, se llama <strong>exponente</strong>.</li>
<li>El resultado se llama <strong>potencia</strong>.</li>
</ul>
<p>Ejemplo: <span class="math">2⁵ = 2 · 2 · 2 · 2 · 2 = 32</span>. La base es 2, el exponente es 5 y la potencia vale 32.</p>
<p><strong>Ojo:</strong> <span class="math">2⁵</span> no es <span class="math">2 · 5 = 10</span>. El exponente cuenta factores, no se multiplica por la base.</p>
<p>Casos que conviene memorizar: <span class="math">a¹ = a</span>, <span class="math">1ⁿ = 1</span> y <span class="math">0ⁿ = 0</span> (con <span class="math">n &gt; 0</span>).</p>`
      },
      {
        titulo: 'Exponente cero y exponente negativo',
        html: `<p>¿Qué pasa cuando el exponente no es un número natural? Las definiciones se eligen para que las propiedades sigan funcionando.</p>
<p><strong>Exponente cero.</strong> Toda base distinta de cero elevada a cero vale 1: <span class="math">a⁰ = 1</span> (con <span class="math">a ≠ 0</span>).</p>
<p>¿Por qué? Porque <span class="math">a³ ÷ a³ = 1</span>, y por la regla de la división restamos exponentes: <span class="math">a<sup>3−3</sup> = a⁰</span>. Entonces <span class="math">a⁰</span> tiene que valer 1. La expresión <span class="math">0⁰</span> queda <strong>indefinida</strong>.</p>
<p><strong>Exponente negativo.</strong> Un exponente negativo <em>no vuelve negativo al número</em>: lo manda al otro lado de la fracción.</p>
<p><span class="math">a<sup>−n</sup> = 1/aⁿ</span> y también <span class="math">(a/b)<sup>−n</sup> = (b/a)ⁿ</span> (con <span class="math">a ≠ 0, b ≠ 0</span>).</p>
<p>Ejemplos: <span class="math">2<sup>−3</sup> = 1/2³ = 1/8</span>; <span class="math">(2/3)<sup>−2</sup> = (3/2)² = 9/4</span>.</p>
<p>Truco: cada vez que bajas un exponente en 1 divides entre la base. En 2: <span class="math">2³ = 8, 2² = 4, 2¹ = 2, 2⁰ = 1, 2<sup>−1</sup> = 1/2, 2<sup>−2</sup> = 1/4</span>...</p>`
      },
      {
        titulo: 'Propiedades de las potencias',
        html: `<p>Estas reglas valen para bases <span class="math">a, b</span> distintas de cero y exponentes enteros (y más adelante racionales):</p>
<table>
<tr><th>Propiedad</th><th>Regla</th><th>Ejemplo</th></tr>
<tr><td>Producto, misma base</td><td><span class="math">aᵐ · aⁿ = a<sup>m+n</sup></span></td><td><span class="math">3² · 3⁴ = 3⁶</span></td></tr>
<tr><td>Cociente, misma base</td><td><span class="math">aᵐ ÷ aⁿ = a<sup>m−n</sup></span></td><td><span class="math">5⁷ ÷ 5⁴ = 5³</span></td></tr>
<tr><td>Potencia de potencia</td><td><span class="math">(aᵐ)ⁿ = a<sup>m·n</sup></span></td><td><span class="math">(2³)² = 2⁶</span></td></tr>
<tr><td>Potencia de un producto</td><td><span class="math">(a·b)ⁿ = aⁿ · bⁿ</span></td><td><span class="math">(2x)³ = 8x³</span></td></tr>
<tr><td>Potencia de un cociente</td><td><span class="math">(a/b)ⁿ = aⁿ/bⁿ</span></td><td><span class="math">(x/3)² = x²/9</span></td></tr>
</table>
<p><strong>Mismo exponente, bases distintas:</strong> <span class="math">aⁿ · bⁿ = (a·b)ⁿ</span>. Por ejemplo <span class="math">2³ · 5³ = 10³ = 1000</span>.</p>
<p><strong>Distinta base y distinto exponente:</strong> no hay regla directa; se intenta escribir ambas con la misma base. Ejemplo: <span class="math">4² · 2³ = (2²)² · 2³ = 2⁴ · 2³ = 2⁷ = 128</span>.</p>
<p><strong>Estrategia:</strong> (1) aplica potencia de potencia y de producto, (2) junta las bases iguales, (3) suma o resta exponentes, (4) escribe el resultado sin exponentes negativos.</p>`
      },
      {
        titulo: 'El signo de una potencia con base negativa',
        html: `<p>Cuando la base es negativa, el <strong>paréntesis</strong> decide todo.</p>
<ul>
<li><span class="math">(−2)⁴ = (−2)(−2)(−2)(−2) = +16</span>: exponente <strong>par</strong> da resultado <strong>positivo</strong>.</li>
<li><span class="math">(−2)³ = (−2)(−2)(−2) = −8</span>: exponente <strong>impar</strong> da resultado <strong>negativo</strong>.</li>
<li><span class="math">−2⁴ = −(2⁴) = −16</span>: sin paréntesis, el exponente solo afecta al 2; el signo menos queda afuera.</li>
</ul>
<p>Regla práctica: cuenta los signos menos. Un número par de signos negativos multiplicados da positivo; un número impar da negativo.</p>
<p>Si la base negativa tiene exponente negativo, primero invierte y luego decide el signo: <span class="math">(−2)<sup>−3</sup> = 1/(−2)³ = −1/8</span>.</p>
<p><strong>Atención con las raíces:</strong> en los reales, <span class="math">√(−9)</span> no existe (ningún número real elevado al cuadrado da −9), pero la raíz cúbica de <span class="math">−8</span> sí existe y vale <span class="math">−2</span>, porque <span class="math">(−2)³ = −8</span>. Las raíces de índice par necesitan radicando no negativo.</p>`
      },
      {
        titulo: 'Exponentes fraccionarios y radicales',
        html: `<p>Un radical es otra forma de escribir un exponente fraccionario:</p>
<p><span class="math">a<sup>1/n</sup> = ⁿ√a</span> (la raíz n-ésima de <span class="math">a</span>) y <span class="math">a<sup>m/n</sup> = (ⁿ√a)ᵐ = ⁿ√(aᵐ)</span>.</p>
<p>El <strong>denominador</strong> del exponente es el <strong>índice</strong> de la raíz y el <strong>numerador</strong> es la potencia.</p>
<ul>
<li><span class="math">9<sup>1/2</sup> = √9 = 3</span></li>
<li><span class="math">8<sup>1/3</sup> =</span> raíz cúbica de 8 <span class="math">= 2</span></li>
<li><span class="math">27<sup>2/3</sup> = (raíz cúbica de 27)² = 3² = 9</span></li>
<li><span class="math">16<sup>−3/4</sup> = 1/16<sup>3/4</sup> = 1/2³ = 1/8</span></li>
</ul>
<p>Consejo: calcula <strong>primero la raíz</strong> (el número se hace pequeño) y <strong>después la potencia</strong>.</p>
<p>Con exponentes fraccionarios siguen valiendo todas las propiedades: <span class="math">x<sup>1/2</sup> · x<sup>1/3</sup> = x<sup>1/2+1/3</sup> = x<sup>5/6</sup></span>.</p>
<p>Dos propiedades de los radicales: <span class="math">√(a·b) = √a · √b</span> y <span class="math">√(a/b) = √a/√b</span> (con <span class="math">a, b ≥ 0</span>).  Pero <strong>cuidado</strong>: <span class="math">√(a+b) ≠ √a + √b</span>.</p>`
      },
      {
        titulo: 'Simplificación de radicales',
        html: `<p>Un radical está <strong>simplificado</strong> cuando el radicando no tiene factores que sean cuadrados perfectos (en raíz cuadrada) y no hay raíces en el denominador.</p>
<p><strong>Procedimiento para <span class="math">√n</span>:</strong></p>
<ol>
<li>Busca el cuadrado perfecto más grande que divide a <span class="math">n</span> (4, 9, 16, 25, 36, 49...).</li>
<li>Separa el producto: <span class="math">√(k² · m) = √(k²) · √m = k√m</span>.</li>
</ol>
<p>Ejemplos:</p>
<ul>
<li><span class="math">√72 = √(36 · 2) = 6√2</span></li>
<li><span class="math">√45 = √(9 · 5) = 3√5</span></li>
<li><span class="math">√(x⁵) = √(x⁴ · x) = x²√x</span> (con <span class="math">x ≥ 0</span>)</li>
</ul>
<p>Si no ves el cuadrado perfecto de golpe, factoriza en primos: <span class="math">72 = 2³ · 3²</span>. Cada pareja de factores iguales sale de la raíz como un solo factor: sale el 3, sale un 2 y queda un 2 adentro, por eso <span class="math">√72 = 3 · 2 · √2 = 6√2</span>.</p>
<p>Para escribir un número dentro de la raíz, se hace al revés: <span class="math">3√5 = √(9·5) = √45</span>.</p>`
      },
      {
        titulo: 'Operaciones con radicales: suma, resta, producto y cociente',
        html: `<p><strong>Suma y resta.</strong> Solo se pueden combinar <strong>radicales semejantes</strong> (mismo índice y mismo radicando), igual que sumas términos semejantes en álgebra: <span class="math">3√2 + 5√2 = 8√2</span>.</p>
<p>Si no parecen semejantes, primero simplifica cada radical: <span class="math">√50 + √18 = 5√2 + 3√2 = 8√2</span>.</p>
<p>Radicales distintos <strong>no</strong> se suman: <span class="math">√2 + √3</span> se queda así (vale ≈ 3.146, no √5 ≈ 2.236).</p>
<p><strong>Producto.</strong> Multiplica coeficientes con coeficientes y radicandos con radicandos: <span class="math">(2√3)(5√6) = 10√18 = 10 · 3√2 = 30√2</span>.</p>
<p>Productos notables también funcionan: <span class="math">(√a + √b)(√a − √b) = a − b</span> y <span class="math">(√a + b)² = a + 2b√a + b²</span>. Ejemplo: <span class="math">(√5 + 2)(√5 − 2) = 5 − 4 = 1</span>.</p>
<p><strong>Cociente.</strong> <span class="math">√48 ÷ √3 = √(48/3) = √16 = 4</span>.</p>
<p><strong>Resumen:</strong> simplifica → agrupa semejantes → opera.</p>`
      },
      {
        titulo: 'Racionalización y aplicaciones geométricas',
        html: `<p><strong>Racionalizar</strong> es quitar la raíz del denominador sin cambiar el valor de la fracción: se multiplica arriba y abajo por el mismo número.</p>
<p><strong>Caso 1: denominador <span class="math">√a</span>.</strong> Multiplica por <span class="math">√a</span>:</p>
<p><span class="math">6/√3 = (6·√3)/(√3·√3) = 6√3/3 = 2√3</span>.</p>
<p><strong>Caso 2: denominador binomial <span class="math">√a − b</span>.</strong> Multiplica por el <em>conjugado</em> (cambia el signo del medio) para usar la diferencia de cuadrados:</p>
<p><span class="math">4/(√5−1) = 4(√5+1)/((√5−1)(√5+1)) = 4(√5+1)/4 = √5+1</span>.</p>
<p><strong>Geometría con radicales.</strong> Los radicales aparecen en cuanto usas el teorema de Pitágoras o el área de un cuadrado:</p>
<ul>
<li>Un cuadrado de área <span class="math">A</span> tiene lado <span class="math">√A</span>. Si <span class="math">A = 50 m²</span>, el lado es <span class="math">5√2 ≈ 7.07 m</span>.</li>
<li>El <strong>perímetro</strong> suma lados: se necesitan radicales semejantes para dejarlo en una sola expresión.</li>
<li>El <strong>área</strong> de un rectángulo multiplica radicales: <span class="math">√a · √b = √(ab)</span>.</li>
</ul>
<p>Siempre deja la respuesta exacta (con radical) y, si te lo piden, añade la aproximación decimal. Practica con la calculadora de este tema.</p>`
      }
    ],
    formulas: [
      { label: 'Definición de potencia', html: 'aⁿ = a · a · … · a  (n factores)' },
      { label: 'Exponente cero y negativo', html: 'a⁰ = 1  ;  a<sup>−n</sup> = 1/aⁿ  (a ≠ 0)' },
      { label: 'Producto y cociente de bases iguales', html: 'aᵐ · aⁿ = a<sup>m+n</sup>  ;  aᵐ ÷ aⁿ = a<sup>m−n</sup>' },
      { label: 'Potencia de potencia', html: '(aᵐ)ⁿ = a<sup>m·n</sup>' },
      { label: 'Potencia de producto y de cociente', html: '(a·b)ⁿ = aⁿ · bⁿ  ;  (a/b)ⁿ = aⁿ/bⁿ' },
      { label: 'Exponente fraccionario', html: 'a<sup>m/n</sup> = (ⁿ√a)ᵐ  ;  a<sup>1/2</sup> = √a' },
      { label: 'Propiedades de la raíz cuadrada', html: '√(a·b) = √a · √b  ;  √(a/b) = √a/√b  ;  √(a+b) ≠ √a + √b' },
      { label: 'Racionalizar', html: 'a/√b = a√b/b  ;  c/(√a − b) = c(√a + b)/(a − b²)' }
    ],
    ejemplos: [
      {
        titulo: 'Exponente cero y exponente negativo',
        enunciado: `Calcula: <span class="math">5⁰</span>, <span class="math">(−7)⁰</span>, <span class="math">2<sup>−3</sup></span> y <span class="math">(1/3)<sup>−2</sup></span>.`,
        pasos: [
          `Cualquier base distinta de cero elevada a 0 vale 1: <span class="math">5⁰ = 1</span> y <span class="math">(−7)⁰ = 1</span>.`,
          `Exponente negativo: se invierte la base. <span class="math">2<sup>−3</sup> = 1/2³ = 1/8</span>.`,
          `Con una fracción como base, se invierte la fracción: <span class="math">(1/3)<sup>−2</sup> = (3/1)² = 3² = 9</span>.`
        ],
        respuesta: `<span class="math">5⁰ = 1</span>, <span class="math">(−7)⁰ = 1</span>, <span class="math">2<sup>−3</sup> = 1/8</span>, <span class="math">(1/3)<sup>−2</sup> = 9</span>.`
      },
      {
        titulo: 'El signo cuando la base es negativa',
        enunciado: `Calcula: <span class="math">(−3)⁴</span>, <span class="math">−3⁴</span>, <span class="math">(−2)⁵</span> y <span class="math">−(−2)⁴</span>.`,
        pasos: [
          `<span class="math">(−3)⁴</span>: la base es −3 (hay paréntesis) y el exponente es par, así que el resultado es positivo: <span class="math">(−3)(−3)(−3)(−3) = 81</span>.`,
          `<span class="math">−3⁴</span>: el exponente solo afecta al 3, entonces <span class="math">−3⁴ = −(3⁴) = −81</span>.`,
          `<span class="math">(−2)⁵</span>: exponente impar, el resultado es negativo: <span class="math">−(2⁵) = −32</span>.`,
          `<span class="math">−(−2)⁴</span>: primero <span class="math">(−2)⁴ = 16</span>; el menos de afuera lo cambia a <span class="math">−16</span>.`
        ],
        respuesta: `<span class="math">81</span>, <span class="math">−81</span>, <span class="math">−32</span> y <span class="math">−16</span>.`
      },
      {
        titulo: 'Simplificar con varias propiedades',
        enunciado: `Simplifica y deja sin exponentes negativos: <span class="math">(2a³b<sup>−2</sup>)² / (4ab<sup>−1</sup>)</span>.`,
        pasos: [
          `Numerador, potencia de un producto: <span class="math">(2a³b<sup>−2</sup>)² = 2² · (a³)² · (b<sup>−2</sup>)² = 4a⁶b<sup>−4</sup></span>.`,
          `Divide coeficientes: <span class="math">4 ÷ 4 = 1</span>.`,
          `Resta exponentes de <span class="math">a</span>: <span class="math">a<sup>6−1</sup> = a⁵</span>.`,
          `Resta exponentes de <span class="math">b</span>: <span class="math">b<sup>−4−(−1)</sup> = b<sup>−3</sup></span>.`,
          `Resultado: <span class="math">a⁵b<sup>−3</sup></span>; para quitar el exponente negativo, <span class="math">b<sup>−3</sup> = 1/b³</span>.`
        ],
        respuesta: `<span class="math">a⁵b<sup>−3</sup> = a⁵/b³</span>`
      },
      {
        titulo: 'Exponentes fraccionarios',
        enunciado: `Calcula: <span class="math">27<sup>2/3</sup></span>, <span class="math">16<sup>−3/4</sup></span> y <span class="math">(4/9)<sup>−1/2</sup></span>.`,
        pasos: [
          `<span class="math">27<sup>2/3</sup></span>: la raíz cúbica de 27 es 3, y luego se eleva al cuadrado: <span class="math">3² = 9</span>.`,
          `<span class="math">16<sup>−3/4</sup></span>: primero invierte, <span class="math">1/16<sup>3/4</sup></span>. La raíz cuarta de 16 es 2 (porque <span class="math">2⁴ = 16</span>), y <span class="math">2³ = 8</span>. Resultado: <span class="math">1/8</span>.`,
          `<span class="math">(4/9)<sup>−1/2</sup></span>: invierte la fracción, <span class="math">(9/4)<sup>1/2</sup> = √(9/4) = 3/2</span>.`
        ],
        respuesta: `<span class="math">27<sup>2/3</sup> = 9</span>, <span class="math">16<sup>−3/4</sup> = 1/8</span>, <span class="math">(4/9)<sup>−1/2</sup> = 3/2</span>.`
      },
      {
        titulo: 'Suma y producto de radicales',
        enunciado: `a) Simplifica <span class="math">√50 + √18 − √8</span>. b) Calcula <span class="math">(2√3)(5√6)</span>.`,
        pasos: [
          `Simplifica cada raíz: <span class="math">√50 = √(25·2) = 5√2</span>, <span class="math">√18 = √(9·2) = 3√2</span>, <span class="math">√8 = √(4·2) = 2√2</span>.`,
          `Ahora los tres son semejantes (todos con <span class="math">√2</span>): <span class="math">5√2 + 3√2 − 2√2 = (5 + 3 − 2)√2 = 6√2</span>.`,
          `b) Multiplica coeficientes y radicandos: <span class="math">2 · 5 = 10</span> y <span class="math">√3 · √6 = √18</span>.`,
          `Simplifica: <span class="math">√18 = 3√2</span>, así que <span class="math">10√18 = 10 · 3√2 = 30√2</span>.`
        ],
        respuesta: `a) <span class="math">6√2 ≈ 8.49</span>  b) <span class="math">30√2 ≈ 42.43</span>`
      },
      {
        titulo: 'Perímetro y área de un terreno en Santa Ana',
        enunciado: `Un terreno rectangular en Santa Ana mide <span class="math">√48</span> m de largo y <span class="math">√27</span> m de ancho. Calcula su perímetro y su área.`,
        pasos: [
          `Simplifica los lados: <span class="math">√48 = √(16·3) = 4√3</span> m y <span class="math">√27 = √(9·3) = 3√3</span> m.`,
          `Perímetro: <span class="math">P = 2(4√3 + 3√3) = 2(7√3) = 14√3</span> m. Se pudo sumar porque los radicales son semejantes.`,
          `Aproximación: <span class="math">14 · 1.7321 ≈ 24.25</span> m.`,
          `Área: <span class="math">A = (4√3)(3√3) = 12 · √3 · √3 = 12 · 3 = 36</span> m².`,
          `Comprobación: <span class="math">√48 · √27 = √1296 = 36</span>. Coincide.`
        ],
        respuesta: `Perímetro <span class="math">14√3 ≈ 24.25</span> m; área <span class="math">36</span> m².`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Calcula: <span class="math">2⁵</span>, <span class="math">(−4)²</span>, <span class="math">−4²</span> y <span class="math">9⁰</span>.`,
        pasos: [
          `<span class="math">2⁵ = 2·2·2·2·2 = 32</span>.`,
          `<span class="math">(−4)² = (−4)(−4) = 16</span> (exponente par, resultado positivo).`,
          `<span class="math">−4² = −(4·4) = −16</span> (sin paréntesis, el menos queda afuera).`,
          `<span class="math">9⁰ = 1</span>.`
        ],
        respuesta: `<span class="math">32, 16, −16, 1</span>`
      },
      {
        nivel: 'facil',
        enunciado: `Escribe sin exponente negativo y calcula: <span class="math">4<sup>−2</sup></span>, <span class="math">(2/5)<sup>−1</sup></span> y <span class="math">10<sup>−3</sup></span>.`,
        pasos: [
          `<span class="math">4<sup>−2</sup> = 1/4² = 1/16</span>.`,
          `<span class="math">(2/5)<sup>−1</sup> = 5/2</span> (se invierte la fracción).`,
          `<span class="math">10<sup>−3</sup> = 1/10³ = 1/1000 = 0.001</span>.`
        ],
        respuesta: `<span class="math">1/16, 5/2, 1/1000</span>`
      },
      {
        nivel: 'facil',
        enunciado: `Simplifica y calcula: <span class="math">(3⁵ · 3²) / 3⁴</span>.`,
        pasos: [
          `Producto de bases iguales: suma exponentes, <span class="math">3⁵ · 3² = 3<sup>5+2</sup> = 3⁷</span>.`,
          `Cociente de bases iguales: resta exponentes, <span class="math">3⁷/3⁴ = 3<sup>7−4</sup> = 3³</span>.`,
          `<span class="math">3³ = 27</span>.`
        ],
        respuesta: `<span class="math">3³ = 27</span>`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula: <span class="math">√144</span>, <span class="math">√(49/25)</span> y la raíz cúbica de 125.`,
        pasos: [
          `<span class="math">12 · 12 = 144</span>, así que <span class="math">√144 = 12</span>.`,
          `<span class="math">√(49/25) = √49/√25 = 7/5</span>.`,
          `<span class="math">5³ = 125</span>, entonces la raíz cúbica de 125 es 5.`
        ],
        respuesta: `<span class="math">12, 7/5, 5</span>`
      },
      {
        nivel: 'intermedio',
        enunciado: `Simplifica: <span class="math">(x⁴y³)² / (x³y⁵)</span>.`,
        pasos: [
          `Numerador: <span class="math">(x⁴y³)² = x⁸y⁶</span>.`,
          `Resta exponentes de <span class="math">x</span>: <span class="math">x<sup>8−3</sup> = x⁵</span>.`,
          `Resta exponentes de <span class="math">y</span>: <span class="math">y<sup>6−5</sup> = y¹ = y</span>.`
        ],
        respuesta: `<span class="math">x⁵y</span>`
      },
      {
        nivel: 'intermedio',
        enunciado: `Calcula: <span class="math">8<sup>2/3</sup> + 25<sup>1/2</sup> − 81<sup>1/4</sup></span>.`,
        pasos: [
          `<span class="math">8<sup>2/3</sup></span>: raíz cúbica de 8 es 2, luego <span class="math">2² = 4</span>.`,
          `<span class="math">25<sup>1/2</sup> = √25 = 5</span>.`,
          `<span class="math">81<sup>1/4</sup></span>: la raíz cuarta de 81 es 3 (porque <span class="math">3⁴ = 81</span>).`,
          `Suma y resta: <span class="math">4 + 5 − 3 = 6</span>.`
        ],
        respuesta: `<span class="math">6</span>`
      },
      {
        nivel: 'intermedio',
        enunciado: `Simplifica: <span class="math">√75 + √12 − √27</span>.`,
        pasos: [
          `<span class="math">√75 = √(25·3) = 5√3</span>.`,
          `<span class="math">√12 = √(4·3) = 2√3</span>.`,
          `<span class="math">√27 = √(9·3) = 3√3</span>.`,
          `Combina: <span class="math">5√3 + 2√3 − 3√3 = 4√3</span>.`
        ],
        respuesta: `<span class="math">4√3 ≈ 6.93</span>`
      },
      {
        nivel: 'intermedio',
        enunciado: `Racionaliza: <span class="math">12/√6</span>.`,
        pasos: [
          `Multiplica numerador y denominador por <span class="math">√6</span>: <span class="math">(12·√6)/(√6·√6)</span>.`,
          `Como <span class="math">√6 · √6 = 6</span>, queda <span class="math">12√6/6</span>.`,
          `Simplifica: <span class="math">12 ÷ 6 = 2</span>.`
        ],
        respuesta: `<span class="math">2√6 ≈ 4.90</span>`
      },
      {
        nivel: 'dificil',
        enunciado: `Simplifica y deja sin exponentes negativos: <span class="math">(a<sup>−2</sup>b³)<sup>−1</sup> · (ab<sup>−1</sup>)³</span>.`,
        pasos: [
          `Primer factor: <span class="math">(a<sup>−2</sup>b³)<sup>−1</sup> = a<sup>(−2)(−1)</sup> · b<sup>(3)(−1)</sup> = a²b<sup>−3</sup></span>.`,
          `Segundo factor: <span class="math">(ab<sup>−1</sup>)³ = a³b<sup>−3</sup></span>.`,
          `Multiplica sumando exponentes: <span class="math">a<sup>2+3</sup> · b<sup>−3+(−3)</sup> = a⁵b<sup>−6</sup></span>.`,
          `Quita el exponente negativo: <span class="math">a⁵/b⁶</span>.`
        ],
        respuesta: `<span class="math">a⁵b<sup>−6</sup> = a⁵/b⁶</span>`
      },
      {
        nivel: 'dificil',
        enunciado: `Calcula el valor exacto de <span class="math">(2<sup>−1</sup> + 3<sup>−1</sup>)<sup>−1</sup></span>.`,
        pasos: [
          `Escribe cada término: <span class="math">2<sup>−1</sup> = 1/2</span> y <span class="math">3<sup>−1</sup> = 1/3</span>.`,
          `Suma dentro del paréntesis: <span class="math">1/2 + 1/3 = 3/6 + 2/6 = 5/6</span>.`,
          `Aplica el exponente −1 (invertir): <span class="math">(5/6)<sup>−1</sup> = 6/5</span>.`,
          `Cuidado: no es <span class="math">2 + 3 = 5</span> con el exponente distribuido; la suma no se distribuye.`
        ],
        respuesta: `<span class="math">6/5</span>`
      },
      {
        nivel: 'dificil',
        enunciado: `Un triángulo rectángulo tiene catetos de <span class="math">2√5</span> cm y <span class="math">4√5</span> cm. Calcula la hipotenusa, el perímetro y el área.`,
        pasos: [
          `Pitágoras: <span class="math">h² = (2√5)² + (4√5)² = 4·5 + 16·5 = 20 + 80 = 100</span>.`,
          `Hipotenusa: <span class="math">h = √100 = 10</span> cm.`,
          `Perímetro: <span class="math">2√5 + 4√5 + 10 = 6√5 + 10 ≈ 6(2.2361) + 10 ≈ 23.42</span> cm.`,
          `Área: <span class="math">(1/2)(2√5)(4√5) = (1/2)(8)(5) = 20</span> cm².`
        ],
        respuesta: `<span class="math">h = 10</span> cm; <span class="math">P = 10 + 6√5 ≈ 23.42</span> cm; <span class="math">A = 20</span> cm².`
      },
      {
        nivel: 'dificil',
        enunciado: `Racionaliza: <span class="math">6/(√7 − √2)</span>.`,
        pasos: [
          `Multiplica arriba y abajo por el conjugado <span class="math">√7 + √2</span>.`,
          `Denominador, diferencia de cuadrados: <span class="math">(√7 − √2)(√7 + √2) = 7 − 2 = 5</span>.`,
          `Numerador: <span class="math">6(√7 + √2) = 6√7 + 6√2</span>.`,
          `Resultado: <span class="math">(6√7 + 6√2)/5</span>. Comprobación: <span class="math">6/(2.6458 − 1.4142) ≈ 4.87</span> y <span class="math">(15.875 + 8.485)/5 ≈ 4.87</span>.`
        ],
        respuesta: `<span class="math">(6√7 + 6√2)/5 ≈ 4.87</span>`
      }
    ],
    teoricas: [
      {
        q: `¿Por qué <span class="math">a⁰ = 1</span> y por qué <span class="math">0⁰</span> no se define?`,
        a: `Porque para que la regla del cociente funcione, <span class="math">a³ ÷ a³ = a<sup>3−3</sup> = a⁰</span>, y un número dividido entre sí mismo es 1. Eso exige <span class="math">a⁰ = 1</span>, pero solo si <span class="math">a ≠ 0</span>: con <span class="math">a = 0</span> tendríamos una división entre cero. Por eso <span class="math">0⁰</span> queda sin definir.`
      },
      {
        q: `¿Cuál es la diferencia entre <span class="math">(−2)⁴</span> y <span class="math">−2⁴</span>?`,
        a: `En <span class="math">(−2)⁴</span> la base es −2 y se multiplica cuatro veces: <span class="math">16</span>. En <span class="math">−2⁴</span> el exponente solo afecta al 2 y el signo menos es una operación posterior: <span class="math">−(16) = −16</span>.`
      },
      {
        q: `Un exponente negativo, ¿hace negativo al número?`,
        a: `No. <span class="math">2<sup>−3</sup> = 1/8</span> es positivo. El exponente negativo indica que se toma el inverso (el recíproco): <span class="math">a<sup>−n</sup> = 1/aⁿ</span>. El signo de la potencia depende solo del signo de la base y de si el exponente es par o impar.`
      },
      {
        q: `¿Por qué <span class="math">√(a+b)</span> no es igual a <span class="math">√a + √b</span>? Da un ejemplo.`,
        a: `La raíz se distribuye sobre productos y cocientes, no sobre sumas. Con <span class="math">a = 9</span> y <span class="math">b = 16</span>: <span class="math">√(9+16) = √25 = 5</span>, pero <span class="math">√9 + √16 = 3 + 4 = 7</span>. Son distintos.`
      },
      {
        q: `¿Qué significa <span class="math">a<sup>m/n</sup></span> y cómo se calcula con comodidad?`,
        a: `Significa <span class="math">(ⁿ√a)ᵐ</span>: el denominador <span class="math">n</span> es el índice de la raíz y el numerador <span class="math">m</span> la potencia. Conviene sacar primero la raíz (queda un número pequeño) y luego elevar: <span class="math">8<sup>2/3</sup> = 2² = 4</span>.`
      },
      {
        q: `¿Cuándo se pueden sumar dos radicales?`,
        a: `Cuando son semejantes: mismo índice y mismo radicando, como <span class="math">3√5 + 2√5 = 5√5</span>. Si no lo parecen, primero hay que simplificarlos, por ejemplo <span class="math">√12 + √27 = 2√3 + 3√3 = 5√3</span>. Si tras simplificar siguen distintos, la suma queda indicada.`
      },
      {
        q: `¿Para qué sirve racionalizar un denominador?`,
        a: `Para dejar la expresión en una forma estándar y más fácil de calcular o comparar: sin raíces en el denominador. Se logra multiplicando numerador y denominador por <span class="math">√a</span> o por el conjugado del denominador, sin cambiar el valor de la fracción.`
      },
      {
        q: `¿Existe en los reales <span class="math">√(−9)</span>? ¿Y la raíz cúbica de <span class="math">−8</span>?`,
        a: `<span class="math">√(−9)</span> no existe en los reales: ningún real elevado al cuadrado es negativo (da un número imaginario, tema de la unidad 1). La raíz cúbica de −8 sí existe y vale −2, porque <span class="math">(−2)³ = −8</span>. Regla: en índice par el radicando debe ser ≥ 0; en índice impar puede ser cualquier real.`
      }
    ],
    errores: [
      `Confundir <span class="math">−3²</span> con <span class="math">(−3)²</span>. El primero es −9 y el segundo es 9. Pon paréntesis cuando la base es negativa y fíjate si el signo menos está adentro o afuera.`,
      `Multiplicar exponentes cuando se multiplican potencias de la misma base: <span class="math">a² · a³ = a⁶</span> es falso; se <strong>suman</strong>: <span class="math">a² · a³ = a⁵</span>. Los exponentes se multiplican solo en potencia de potencia: <span class="math">(a²)³ = a⁶</span>.`,
      `Creer que un exponente negativo da un resultado negativo: <span class="math">2<sup>−3</sup> = −8</span> es falso. Lo correcto es <span class="math">2<sup>−3</sup> = 1/8</span>.`,
      `Distribuir la raíz o la potencia sobre una suma: <span class="math">√(a+b) = √a + √b</span> y <span class="math">(a+b)² = a² + b²</span> son falsas. Recuerda <span class="math">(a+b)² = a² + 2ab + b²</span> y que <span class="math">√(a+b)</span> no se separa.`
    ],
    aplicacion: {
      titulo: 'Notación científica y lados de un terreno cuadrado',
      html: `<p>Los exponentes negativos sirven para medir cosas muy pequeñas. El grosor de un cabello humano es de unos <span class="math">8 × 10<sup>−5</sup></span> m y el diámetro de un glóbulo rojo es de unos <span class="math">7 × 10<sup>−6</sup></span> m. ¿Cuántos glóbulos rojos, puestos en fila, caben en el grosor de un cabello?</p>
<p><strong>Paso 1.</strong> Divide: <span class="math">(8 × 10<sup>−5</sup>) / (7 × 10<sup>−6</sup>) = (8/7) · 10<sup>−5−(−6)</sup> = (8/7) · 10¹</span>.</p>
<p><strong>Paso 2.</strong> Calcula: <span class="math">(8/7) · 10 = 80/7 ≈ 11.43</span>.</p>
<p><strong>Respuesta:</strong> caben aproximadamente <strong>11 glóbulos rojos</strong> en el grosor de un cabello.</p>
<p>Ahora un caso con radicales: una familia compra un lote cuadrado de <span class="math">50</span> m² en Santa Ana y quiere cercarlo con alambre. El lado mide <span class="math">√50 = 5√2 ≈ 7.07</span> m, así que el perímetro es <span class="math">4 · 5√2 = 20√2 ≈ 28.28</span> m. Necesitan al menos 28.3 m de alambre, sin contar las vueltas extra.</p>`
    },
    calc: 'potencias',
    examen: [
      {
        tipo: 'num',
        q: `Calcula: <span class="math">2<sup>−3</sup> · 4²</span>.`,
        r: 2, tol: 0.01,
        pasos: [
          `<span class="math">2<sup>−3</sup> = 1/8</span> y <span class="math">4² = 16</span>.`,
          `Multiplica: <span class="math">(1/8)(16) = 2</span>.`,
          `También con la misma base: <span class="math">2<sup>−3</sup> · 2⁴ = 2<sup>1</sup> = 2</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula: <span class="math">(−2)⁴ − 2⁴ + (−2)³</span>.`,
        r: -8, tol: 0.01,
        pasos: [
          `<span class="math">(−2)⁴ = 16</span> (exponente par).`,
          `<span class="math">2⁴ = 16</span> y <span class="math">(−2)³ = −8</span> (exponente impar).`,
          `Suma: <span class="math">16 − 16 + (−8) = −8</span>.`
        ]
      },
      {
        tipo: 'lista',
        q: `Calcula los tres valores, separados por comas: <span class="math">36<sup>1/2</sup></span>, <span class="math">125<sup>1/3</sup></span> y <span class="math">81<sup>1/4</sup></span>.`,
        r: [6, 5, 3], tol: 0.01,
        pasos: [
          `<span class="math">36<sup>1/2</sup> = √36 = 6</span>.`,
          `<span class="math">125<sup>1/3</sup></span> es la raíz cúbica de 125: <span class="math">5³ = 125</span>, entonces vale 5.`,
          `<span class="math">81<sup>1/4</sup></span> es la raíz cuarta de 81: <span class="math">3⁴ = 81</span>, entonces vale 3.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula: <span class="math">27<sup>2/3</sup></span>.`,
        r: 9, tol: 0.01,
        pasos: [
          `El denominador 3 indica raíz cúbica: la raíz cúbica de 27 es 3.`,
          `El numerador 2 indica elevar al cuadrado: <span class="math">3² = 9</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula: <span class="math">16<sup>−3/4</sup></span>. (Puedes escribir 1/8 o 0.125.)`,
        r: 0.125, tol: 0.001,
        pasos: [
          `Exponente negativo: <span class="math">16<sup>−3/4</sup> = 1/16<sup>3/4</sup></span>.`,
          `La raíz cuarta de 16 es 2, y <span class="math">2³ = 8</span>.`,
          `Resultado: <span class="math">1/8 = 0.125</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Simplifica <span class="math">√48 + √12</span> y da el valor decimal redondeado a 2 decimales.`,
        r: 10.39, tol: 0.01,
        pasos: [
          `<span class="math">√48 = √(16·3) = 4√3</span> y <span class="math">√12 = √(4·3) = 2√3</span>.`,
          `Suma de semejantes: <span class="math">4√3 + 2√3 = 6√3</span>.`,
          `Aproxima: <span class="math">6 · 1.7321 ≈ 10.39</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Un terreno rectangular mide <span class="math">√12</span> m por <span class="math">√27</span> m. ¿Cuál es su área en m²?`,
        r: 18, tol: 0.01,
        pasos: [
          `Área = largo por ancho = <span class="math">√12 · √27 = √(12·27)</span>.`,
          `<span class="math">12 · 27 = 324</span> y <span class="math">√324 = 18</span>.`,
          `Comprobación con radicales simplificados: <span class="math">(2√3)(3√3) = 6 · 3 = 18</span>.`
        ]
      },
      {
        tipo: 'opt',
        q: `Al simplificar <span class="math">(a⁴ · a<sup>−1</sup>) / a²</span> se obtiene:`,
        opciones: [`<span class="math">a³</span>`, `<span class="math">a</span>`, `<span class="math">a⁵</span>`, `<span class="math">1</span>`],
        correcta: 1,
        pasos: [
          `Numerador, bases iguales: <span class="math">a<sup>4+(−1)</sup> = a³</span>.`,
          `Cociente: <span class="math">a³/a² = a<sup>3−2</sup> = a¹ = a</span>.`,
          `Error típico: quedarse con <span class="math">a³</span> sin dividir entre <span class="math">a²</span>.`
        ]
      },
      {
        tipo: 'opt',
        q: `¿Cuál de las siguientes igualdades es FALSA (para valores donde está definida)?`,
        opciones: [
          `<span class="math">(a·b)ⁿ = aⁿ · bⁿ</span>`,
          `<span class="math">a⁰ = 1</span> si <span class="math">a ≠ 0</span>`,
          `<span class="math">a<sup>−n</sup> = 1/aⁿ</span>`,
          `<span class="math">√(a+b) = √a + √b</span>`
        ],
        correcta: 3,
        pasos: [
          `Las tres primeras son propiedades válidas de las potencias.`,
          `La raíz no se distribuye sobre una suma: con <span class="math">a=9, b=16</span>, <span class="math">√25 = 5</span> pero <span class="math">√9 + √16 = 7</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Calcula el valor de <span class="math">(x³ · x<sup>−5</sup>)<sup>−2</sup></span> cuando <span class="math">x = 2</span>.`,
        r: 16, tol: 0.01,
        pasos: [
          `Dentro del paréntesis: <span class="math">x<sup>3+(−5)</sup> = x<sup>−2</sup></span>.`,
          `Potencia de potencia: <span class="math">(x<sup>−2</sup>)<sup>−2</sup> = x⁴</span>.`,
          `Con <span class="math">x = 2</span>: <span class="math">2⁴ = 16</span>.`
        ]
      }
    ]
  };

  /* ====================================================================== */
  /* TEMA 1.12 — Función exponencial y ecuaciones exponenciales             */
  /* ====================================================================== */
  T['1.12'] = {
    id: '1.12',
    unidad: 4,
    titulo: 'Función exponencial y ecuaciones exponenciales',
    resumen: 'Grafica f(x) = a<sup>x</sup>, aplica reflexiones y desplazamientos, resuelve ecuaciones exponenciales y modela crecimiento real.',
    objetivos: [
      'Reconocer cuándo una función exponencial es creciente o decreciente y determinar su dominio, rango, asíntota e intercepto.',
      'Trazar gráficas de funciones exponenciales con reflexiones y desplazamientos verticales y horizontales.',
      'Resolver ecuaciones exponenciales igualando bases y mediante cambio de variable.',
      'Plantear y resolver problemas de crecimiento y decaimiento: bacterias, depreciación e interés compuesto.'
    ],
    teoria: [
      {
        titulo: 'Qué es una función exponencial',
        html: `<p>Una <strong>función exponencial</strong> tiene la variable en el <em>exponente</em>:</p>
<p><span class="math">f(x) = a<sup>x</sup></span>, con <span class="math">a &gt; 0</span> y <span class="math">a ≠ 1</span>.</p>
<p>El número <span class="math">a</span> es la <strong>base</strong> y es constante; la variable es <span class="math">x</span>. No la confundas con una potencia <span class="math">xᵃ</span> (como <span class="math">x²</span>), donde la base es la variable y el exponente es constante.</p>
<ul>
<li><span class="math">f(x) = 2<sup>x</sup></span> y <span class="math">g(x) = (1/2)<sup>x</sup></span> son exponenciales.</li>
<li><span class="math">h(x) = x²</span> <strong>no</strong> lo es: es una parábola.</li>
</ul>
<p><strong>¿Por qué <span class="math">a &gt; 0</span> y <span class="math">a ≠ 1</span>?</strong> Si <span class="math">a = 1</span>, entonces <span class="math">1<sup>x</sup> = 1</span> siempre (una recta horizontal, no es exponencial). Si <span class="math">a &lt; 0</span>, valores como <span class="math">(−2)<sup>1/2</sup></span> no existen en los reales, y la función tendría huecos. Con <span class="math">a = 0</span> tampoco sirve.</p>
<p>Para evaluar: <span class="math">f(x) = 3<sup>x</sup></span> da <span class="math">f(2) = 9</span>, <span class="math">f(0) = 1</span> y <span class="math">f(−1) = 1/3</span>.</p>`
      },
      {
        titulo: 'Gráfica: función creciente y decreciente',
        html: `<p>La forma de la gráfica depende de la base:</p>
<table>
<tr><th>Condición</th><th>Comportamiento</th><th>Ejemplo</th></tr>
<tr><td><span class="math">a &gt; 1</span></td><td>Estrictamente <strong>creciente</strong>: sube cada vez más rápido hacia la derecha y se acerca a 0 hacia la izquierda.</td><td><span class="math">2<sup>x</sup>, 3<sup>x</sup>, (3/2)<sup>x</sup></span></td></tr>
<tr><td><span class="math">0 &lt; a &lt; 1</span></td><td>Estrictamente <strong>decreciente</strong>: baja hacia la derecha acercándose a 0 y sube mucho hacia la izquierda.</td><td><span class="math">(1/2)<sup>x</sup>, (0.9)<sup>x</sup></span></td></tr>
</table>
<p>Tabla de valores para comparar:</p>
<table>
<tr><th><span class="math">x</span></th><th>−2</th><th>−1</th><th>0</th><th>1</th><th>2</th><th>3</th></tr>
<tr><td><span class="math">2<sup>x</sup></span></td><td>1/4</td><td>1/2</td><td>1</td><td>2</td><td>4</td><td>8</td></tr>
<tr><td><span class="math">(1/2)<sup>x</sup></span></td><td>4</td><td>2</td><td>1</td><td>1/2</td><td>1/4</td><td>1/8</td></tr>
</table>
<p>Observa que la fila de <span class="math">(1/2)<sup>x</sup></span> es la de <span class="math">2<sup>x</sup></span> leída al revés: las dos gráficas son simétricas respecto al eje <span class="math">y</span>, pues <span class="math">(1/2)<sup>x</sup> = 2<sup>−x</sup></span>.</p>
<p>Cuanto mayor es la base (con <span class="math">a &gt; 1</span>), más rápido crece la gráfica. Dibuja siempre los puntos <span class="math">(0, 1)</span> y <span class="math">(1, a)</span>.</p>`
      },
      {
        titulo: 'Propiedades de f(x) = aˣ',
        html: `<p>Todas las exponenciales básicas comparten estas propiedades:</p>
<ul>
<li><strong>Dominio:</strong> todos los reales, <span class="math">ℝ</span>. Se puede evaluar para cualquier <span class="math">x</span>.</li>
<li><strong>Rango:</strong> <span class="math">]0, +∞[</span>. Los valores son siempre positivos, nunca llegan a 0 ni son negativos.</li>
<li><strong>Asíntota horizontal:</strong> <span class="math">y = 0</span> (el eje <span class="math">x</span>). La gráfica se acerca a ella sin tocarla: hacia la izquierda si <span class="math">a &gt; 1</span>, hacia la derecha si <span class="math">0 &lt; a &lt; 1</span>.</li>
<li><strong>Intercepto con el eje y:</strong> <span class="math">(0, 1)</span>, porque <span class="math">a⁰ = 1</span> para cualquier base.</li>
<li><strong>Intercepto con el eje x:</strong> no tiene, pues <span class="math">a<sup>x</sup> &gt; 0</span>.</li>
<li><strong>Inyectiva:</strong> a valores distintos de <span class="math">x</span> les corresponden valores distintos de <span class="math">y</span>. Por eso <span class="math">a<sup>r</sup> = a<sup>s</sup> ⇒ r = s</span>, la base de la resolución de ecuaciones exponenciales.</li>
</ul>
<p>Propiedades algebraicas, las mismas de las potencias: <span class="math">a<sup>x+y</sup> = a<sup>x</sup> · a<sup>y</sup></span> y <span class="math">a<sup>x−y</sup> = a<sup>x</sup>/a<sup>y</sup></span>.</p>`
      },
      {
        titulo: 'Reflexiones',
        html: `<p>Los signos menos cambian la gráfica de una forma muy visual:</p>
<ul>
<li><strong>Reflexión en el eje x:</strong> <span class="math">g(x) = −a<sup>x</sup></span>. Se multiplica toda la función por −1, entonces la gráfica "se voltea" hacia abajo. Rango: <span class="math">]−∞, 0[</span>. Intercepto: <span class="math">(0, −1)</span>. La asíntota sigue siendo <span class="math">y = 0</span>.</li>
<li><strong>Reflexión en el eje y:</strong> <span class="math">h(x) = a<sup>−x</sup></span>. Se cambia <span class="math">x</span> por <span class="math">−x</span>; la gráfica se voltea de izquierda a derecha. Como <span class="math">a<sup>−x</sup> = (1/a)<sup>x</sup></span>, una creciente se vuelve decreciente y viceversa. Rango sigue siendo <span class="math">]0, +∞[</span> e intercepto <span class="math">(0, 1)</span>.</li>
</ul>
<p>Ejemplo: <span class="math">f(x) = 2<sup>x</sup></span> pasa por <span class="math">(1, 2)</span>. Su reflexión en <span class="math">x</span> pasa por <span class="math">(1, −2)</span>; su reflexión en <span class="math">y</span> pasa por <span class="math">(−1, 2)</span>.</p>
<p>Regla para reconocerlas: el signo menos <strong>afuera</strong> voltea hacia abajo (eje x); el signo menos <strong>en el exponente</strong> voltea de lado (eje y).</p>`
      },
      {
        titulo: 'Desplazamientos vertical y horizontal',
        html: `<p>Para la forma general <span class="math">f(x) = a<sup>x−h</sup> + k</span>:</p>
<ul>
<li><strong>Vertical, <span class="math">+ k</span>:</strong> sube <span class="math">k</span> unidades si <span class="math">k &gt; 0</span> y baja si <span class="math">k &lt; 0</span>. <strong>La asíntota se mueve</strong> a <span class="math">y = k</span> y el rango pasa a <span class="math">]k, +∞[</span> (si la función es del tipo <span class="math">+a<sup>x</sup></span>).</li>
<li><strong>Horizontal, <span class="math">x − h</span>:</strong> se mueve <span class="math">h</span> unidades a la derecha si <span class="math">h &gt; 0</span> y a la izquierda si <span class="math">h &lt; 0</span>. Cuidado: en <span class="math">2<sup>x+3</sup></span> el desplazamiento es 3 a la <strong>izquierda</strong>. <strong>La asíntota no cambia</strong> y el rango tampoco.</li>
</ul>
<p>Ejemplo: <span class="math">f(x) = 2<sup>x+1</sup> − 4</span>.</p>
<ol>
<li>Parte de <span class="math">2<sup>x</sup></span>, muévela 1 a la izquierda y 4 hacia abajo.</li>
<li>Asíntota: <span class="math">y = −4</span>. Rango: <span class="math">]−4, +∞[</span>.</li>
<li>Intercepto con y: <span class="math">f(0) = 2 − 4 = −2</span>.</li>
<li>Intercepto con x: <span class="math">2<sup>x+1</sup> = 4 ⇒ x + 1 = 2 ⇒ x = 1</span>.</li>
</ol>
<p>Dominio siempre <span class="math">ℝ</span>. Si combinas todo, como en <span class="math">−2<sup>x−1</sup> + 5</span>, la asíntota es <span class="math">y = 5</span> y el rango es <span class="math">]−∞, 5[</span>, porque la reflexión voltea la gráfica hacia abajo desde la asíntota.</p>`
      },
      {
        titulo: 'Ecuaciones exponenciales: igualar bases',
        html: `<p>Una <strong>ecuación exponencial</strong> tiene la incógnita en el exponente. Como la función exponencial es inyectiva, se cumple:</p>
<p><span class="math">a<sup>r</sup> = a<sup>s</sup> ⇒ r = s</span> (con <span class="math">a &gt; 0, a ≠ 1</span>).</p>
<p><strong>Procedimiento:</strong></p>
<ol>
<li>Escribe ambos lados como potencia de una <strong>misma base</strong>, factorizando en primos (4 = 2², 8 = 2³, 27 = 3³, 1/4 = 2<sup>−2</sup>...).</li>
<li>Usa las propiedades de las potencias para dejar <strong>un solo exponente</strong> en cada lado.</li>
<li>Iguala los exponentes y resuelve la ecuación resultante.</li>
<li>Comprueba sustituyendo en la ecuación original.</li>
</ol>
<p>Ejemplo: <span class="math">4<sup>x</sup> = 8</span>. Como <span class="math">4 = 2²</span>, <span class="math">4<sup>x</sup> = (2²)<sup>x</sup> = 2<sup>2x</sup></span> y <span class="math">8 = 2³</span>. Entonces <span class="math">2<sup>2x</sup> = 2³ ⇒ 2x = 3 ⇒ x = 3/2</span>.</p>
<p>Ejemplo con fracciones: <span class="math">(1/2)<sup>x</sup> = 32</span>. Escribe <span class="math">1/2 = 2<sup>−1</sup></span>, así <span class="math">2<sup>−x</sup> = 2⁵ ⇒ x = −5</span>.</p>
<p>Si las bases no se pueden igualar (por ejemplo <span class="math">2<sup>x</sup> = 7</span>), se necesitan logaritmos, tema 1.15.</p>`
      },
      {
        titulo: 'Ecuaciones exponenciales con cambio de variable',
        html: `<p>A veces la ecuación tiene la forma de una cuadrática escondida. Por ejemplo, <span class="math">4<sup>x</sup> = (2²)<sup>x</sup> = (2<sup>x</sup>)²</span>.</p>
<p><strong>Procedimiento:</strong></p>
<ol>
<li>Reescribe todos los términos con la misma base elevada a <span class="math">x</span>: <span class="math">4<sup>x</sup> = (2<sup>x</sup>)²</span>.</li>
<li>Cambio de variable: <span class="math">y = 2<sup>x</sup></span>, con <span class="math">y &gt; 0</span> siempre.</li>
<li>Resuelve la ecuación cuadrática en <span class="math">y</span> (factorización o fórmula general).</li>
<li><strong>Descarta</strong> los valores de <span class="math">y ≤ 0</span>, porque <span class="math">2<sup>x</sup></span> nunca es cero ni negativo.</li>
<li>Regresa a <span class="math">x</span>: resuelve <span class="math">2<sup>x</sup> = y</span> igualando bases.</li>
</ol>
<p>Ejemplo: <span class="math">4<sup>x</sup> − 3 · 2<sup>x</sup> + 2 = 0</span>.</p>
<p>Con <span class="math">y = 2<sup>x</sup></span>: <span class="math">y² − 3y + 2 = 0 ⇒ (y − 1)(y − 2) = 0 ⇒ y = 1</span> o <span class="math">y = 2</span>. Entonces <span class="math">2<sup>x</sup> = 1 ⇒ x = 0</span> y <span class="math">2<sup>x</sup> = 2 ⇒ x = 1</span>.</p>
<p>Si en un caso aparece <span class="math">y = −2</span>, la ecuación <span class="math">2<sup>x</sup> = −2</span> no tiene solución real. Es el mismo estilo de las bicuadráticas del tema 1.1.</p>`
      },
      {
        titulo: 'Crecimiento y decaimiento: modelos reales',
        html: `<p>Muchas situaciones reales cambian por un <strong>factor constante</strong> en cada período. Se modelan así:</p>
<p><span class="math">A(t) = A₀ · b<sup>t</sup></span></p>
<ul>
<li><span class="math">A₀</span> es la cantidad inicial (en <span class="math">t = 0</span>).</li>
<li><span class="math">b</span> es el factor de cambio por período. Si <span class="math">b &gt; 1</span> hay <strong>crecimiento</strong>; si <span class="math">0 &lt; b &lt; 1</span> hay <strong>decaimiento</strong>.</li>
<li>Si la cantidad cambia un porcentaje <span class="math">r</span> por período, <span class="math">b = 1 + r</span> (crece) o <span class="math">b = 1 − r</span> (decrece).</li>
</ul>
<p><strong>Ejemplos:</strong></p>
<ul>
<li><strong>Bacterias que se duplican cada 3 horas:</strong> <span class="math">N(t) = N₀ · 2<sup>t/3</sup></span>.</li>
<li><strong>Depreciación del 15 % anual:</strong> <span class="math">V(t) = V₀ · (0.85)<sup>t</sup></span>, porque cada año conserva el 85 % del valor.</li>
<li><strong>Interés compuesto:</strong> un capital <span class="math">C</span> a tasa anual <span class="math">i</span> durante <span class="math">t</span> años se convierte en <span class="math">M = C(1 + i)<sup>t</sup></span>.</li>
</ul>
<p>Diferencia clave con el crecimiento lineal: el crecimiento exponencial suma un <em>porcentaje</em> de lo que ya hay, por eso al principio parece lento y después se acelera mucho. Prueba la calculadora del tema para ver cómo cambian las gráficas.</p>`
      }
    ],
    formulas: [
      { label: 'Función exponencial', html: 'f(x) = a<sup>x</sup>,  a &gt; 0,  a ≠ 1' },
      { label: 'Creciente o decreciente', html: 'a &gt; 1: creciente  ;  0 &lt; a &lt; 1: decreciente' },
      { label: 'Dominio y rango', html: 'Dom f = ℝ  ;  Rango f = ]0, +∞[' },
      { label: 'Asíntota e intercepto', html: 'Asíntota: y = 0  ;  intercepto con y: (0, 1)' },
      { label: 'Forma con transformaciones', html: 'f(x) = a<sup>x−h</sup> + k  →  asíntota y = k' },
      { label: 'Reflexiones', html: '−a<sup>x</sup> (eje x)  ;  a<sup>−x</sup> = (1/a)<sup>x</sup> (eje y)' },
      { label: 'Igualar bases', html: 'a<sup>r</sup> = a<sup>s</sup> ⇒ r = s' },
      { label: 'Modelos de crecimiento', html: 'A(t) = A₀ · b<sup>t</sup>  ;  M = C(1 + i)<sup>t</sup>' }
    ],
    ejemplos: [
      {
        titulo: 'Tabla de valores y tipo de función',
        enunciado: `Completa una tabla de valores para <span class="math">f(x) = 2<sup>x</sup></span> y <span class="math">g(x) = (1/2)<sup>x</sup></span> con <span class="math">x = −2, −1, 0, 1, 2, 3</span>. Indica cuál es creciente y cuál decreciente.`,
        pasos: [
          `Para <span class="math">f</span>: <span class="math">2<sup>−2</sup> = 1/4</span>, <span class="math">2<sup>−1</sup> = 1/2</span>, <span class="math">2⁰ = 1</span>, <span class="math">2¹ = 2</span>, <span class="math">2² = 4</span>, <span class="math">2³ = 8</span>.`,
          `Para <span class="math">g</span>: <span class="math">(1/2)<sup>−2</sup> = 4</span>, <span class="math">(1/2)<sup>−1</sup> = 2</span>, <span class="math">(1/2)⁰ = 1</span>, <span class="math">(1/2)¹ = 1/2</span>, <span class="math">(1/2)² = 1/4</span>, <span class="math">(1/2)³ = 1/8</span>.`,
          `En <span class="math">f</span> los valores de <span class="math">y</span> aumentan al aumentar <span class="math">x</span> (base 2 &gt; 1): es creciente. En <span class="math">g</span> disminuyen (base 1/2 entre 0 y 1): es decreciente.`,
          `Ambas pasan por <span class="math">(0, 1)</span> y nunca llegan a 0: la asíntota es <span class="math">y = 0</span>.`
        ],
        respuesta: `<span class="math">f(x) = 2<sup>x</sup></span> es creciente y <span class="math">g(x) = (1/2)<sup>x</sup></span> es decreciente; ambas pasan por <span class="math">(0, 1)</span>.`
      },
      {
        titulo: 'Dominio, rango, asíntota e interceptos con desplazamientos',
        enunciado: `Para <span class="math">f(x) = 2<sup>x+1</sup> − 4</span> halla dominio, rango, asíntota y los interceptos con los ejes.`,
        pasos: [
          `Se parte de <span class="math">2<sup>x</sup></span>, con desplazamiento horizontal de 1 unidad a la izquierda y vertical de 4 unidades hacia abajo.`,
          `Dominio: <span class="math">ℝ</span>. Asíntota: <span class="math">y = −4</span>. Rango: <span class="math">]−4, +∞[</span>.`,
          `Intercepto con y: <span class="math">f(0) = 2<sup>1</sup> − 4 = −2</span>, el punto <span class="math">(0, −2)</span>.`,
          `Intercepto con x: <span class="math">2<sup>x+1</sup> − 4 = 0 ⇒ 2<sup>x+1</sup> = 4 = 2² ⇒ x + 1 = 2 ⇒ x = 1</span>. El punto es <span class="math">(1, 0)</span>.`
        ],
        respuesta: `Dominio <span class="math">ℝ</span>; rango <span class="math">]−4, +∞[</span>; asíntota <span class="math">y = −4</span>; interceptos <span class="math">(0, −2)</span> y <span class="math">(1, 0)</span>.`
      },
      {
        titulo: 'Ecuación exponencial igualando bases',
        enunciado: `Resuelve: <span class="math">9<sup>x−1</sup> = 27<sup>x+2</sup></span>.`,
        pasos: [
          `Escribe ambas bases como potencias de 3: <span class="math">9 = 3²</span> y <span class="math">27 = 3³</span>.`,
          `Aplica potencia de potencia: <span class="math">(3²)<sup>x−1</sup> = 3<sup>2x−2</sup></span> y <span class="math">(3³)<sup>x+2</sup> = 3<sup>3x+6</sup></span>.`,
          `Iguala exponentes: <span class="math">2x − 2 = 3x + 6</span>.`,
          `Resuelve: <span class="math">−2 − 6 = 3x − 2x ⇒ x = −8</span>.`,
          `Comprobación: <span class="math">9<sup>−9</sup> = 3<sup>−18</sup></span> y <span class="math">27<sup>−6</sup> = 3<sup>−18</sup></span>. Coinciden.`
        ],
        respuesta: `<span class="math">x = −8</span>`
      },
      {
        titulo: 'Crecimiento de bacterias',
        enunciado: `Un cultivo tiene 500 bacterias y su número se duplica cada 3 horas, así que <span class="math">N(t) = 500 · 2<sup>t/3</sup></span> (t en horas). a) ¿Cuántas bacterias hay a las 9 horas? b) ¿En cuántas horas habrá 8000?`,
        pasos: [
          `a) Con <span class="math">t = 9</span>: <span class="math">N(9) = 500 · 2<sup>9/3</sup> = 500 · 2³ = 500 · 8 = 4000</span>.`,
          `b) Planteamos <span class="math">500 · 2<sup>t/3</sup> = 8000</span> y dividimos entre 500: <span class="math">2<sup>t/3</sup> = 16</span>.`,
          `Escribe <span class="math">16 = 2⁴</span>, entonces <span class="math">2<sup>t/3</sup> = 2⁴ ⇒ t/3 = 4</span>.`,
          `Despeja: <span class="math">t = 12</span> horas.`,
          `Comprobación: a las 12 h se han duplicado 4 veces: <span class="math">500 → 1000 → 2000 → 4000 → 8000</span>.`
        ],
        respuesta: `a) 4000 bacterias; b) a las 12 horas.`
      },
      {
        titulo: 'Cambio de variable: caso de factorización sencilla',
        enunciado: `Resuelve: <span class="math">4<sup>x</sup> − 3 · 2<sup>x</sup> + 2 = 0</span>.`,
        pasos: [
          `Escribe <span class="math">4<sup>x</sup> = (2²)<sup>x</sup> = (2<sup>x</sup>)²</span>.`,
          `Sea <span class="math">y = 2<sup>x</sup></span> (recuerda que <span class="math">y &gt; 0</span>). La ecuación queda <span class="math">y² − 3y + 2 = 0</span>.`,
          `Factoriza: <span class="math">(y − 1)(y − 2) = 0</span>, entonces <span class="math">y = 1</span> o <span class="math">y = 2</span>. Ambos son positivos, sirven.`,
          `Regresa a <span class="math">x</span>: <span class="math">2<sup>x</sup> = 1 = 2⁰ ⇒ x = 0</span>; <span class="math">2<sup>x</sup> = 2¹ ⇒ x = 1</span>.`,
          `Comprobación: <span class="math">x = 0</span>: <span class="math">1 − 3 + 2 = 0</span>. <span class="math">x = 1</span>: <span class="math">4 − 6 + 2 = 0</span>.`
        ],
        respuesta: `<span class="math">x = 0</span> y <span class="math">x = 1</span>`
      },
      {
        titulo: 'Cambio de variable con coeficiente en el término cuadrático',
        enunciado: `Resuelve: <span class="math">2 · 4<sup>x</sup> − 9 · 2<sup>x</sup> + 4 = 0</span>.`,
        pasos: [
          `Como <span class="math">4<sup>x</sup> = (2<sup>x</sup>)²</span>, el primer término es <span class="math">2(2<sup>x</sup>)²</span>.`,
          `Sea <span class="math">y = 2<sup>x</sup></span>: <span class="math">2y² − 9y + 4 = 0</span>.`,
          `Por tijeras: <span class="math">(2y − 1)(y − 4) = 0</span>; entonces <span class="math">y = 1/2</span> o <span class="math">y = 4</span>. Los dos son positivos.`,
          `Si <span class="math">2<sup>x</sup> = 1/2 = 2<sup>−1</sup></span>, entonces <span class="math">x = −1</span>. Si <span class="math">2<sup>x</sup> = 4 = 2²</span>, entonces <span class="math">x = 2</span>.`,
          `Comprobación: <span class="math">x = −1</span>: <span class="math">2(1/4) − 9(1/2) + 4 = 0.5 − 4.5 + 4 = 0</span>. <span class="math">x = 2</span>: <span class="math">2(16) − 9(4) + 4 = 32 − 36 + 4 = 0</span>.`
        ],
        respuesta: `<span class="math">x = −1</span> y <span class="math">x = 2</span>`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Evalúa <span class="math">f(x) = 3<sup>x</sup></span> en <span class="math">x = −1, 0, 2, 3</span>.`,
        pasos: [
          `<span class="math">f(−1) = 3<sup>−1</sup> = 1/3</span>.`,
          `<span class="math">f(0) = 3⁰ = 1</span>.`,
          `<span class="math">f(2) = 3² = 9</span>.`,
          `<span class="math">f(3) = 3³ = 27</span>.`
        ],
        respuesta: `<span class="math">1/3, 1, 9, 27</span>`
      },
      {
        nivel: 'facil',
        enunciado: `Indica si cada función es creciente o decreciente: <span class="math">5<sup>x</sup></span>, <span class="math">(1/4)<sup>x</sup></span>, <span class="math">(0.9)<sup>x</sup></span>, <span class="math">(3/2)<sup>x</sup></span>.`,
        pasos: [
          `Regla: si la base es mayor que 1, es creciente; si está entre 0 y 1, es decreciente.`,
          `<span class="math">5 &gt; 1</span>: creciente. <span class="math">1/4 = 0.25</span>, entre 0 y 1: decreciente.`,
          `<span class="math">0.9</span> está entre 0 y 1: decreciente. <span class="math">3/2 = 1.5 &gt; 1</span>: creciente.`
        ],
        respuesta: `<span class="math">5<sup>x</sup></span> creciente; <span class="math">(1/4)<sup>x</sup></span> decreciente; <span class="math">(0.9)<sup>x</sup></span> decreciente; <span class="math">(3/2)<sup>x</sup></span> creciente.`
      },
      {
        nivel: 'facil',
        enunciado: `Resuelve: <span class="math">5<sup>x</sup> = 125</span>.`,
        pasos: [
          `Escribe <span class="math">125 = 5³</span>.`,
          `La ecuación queda <span class="math">5<sup>x</sup> = 5³</span>.`,
          `Con bases iguales, los exponentes son iguales: <span class="math">x = 3</span>.`
        ],
        respuesta: `<span class="math">x = 3</span>`
      },
      {
        nivel: 'facil',
        enunciado: `Resuelve: <span class="math">2<sup>x+1</sup> = 32</span>.`,
        pasos: [
          `<span class="math">32 = 2⁵</span>, entonces <span class="math">2<sup>x+1</sup> = 2⁵</span>.`,
          `Iguala exponentes: <span class="math">x + 1 = 5</span>.`,
          `Despeja: <span class="math">x = 4</span>. Comprueba: <span class="math">2⁵ = 32</span>.`
        ],
        respuesta: `<span class="math">x = 4</span>`
      },
      {
        nivel: 'intermedio',
        enunciado: `Resuelve: <span class="math">8<sup>x</sup> = 1/4</span>.`,
        pasos: [
          `Base 2: <span class="math">8 = 2³</span>, así <span class="math">8<sup>x</sup> = 2<sup>3x</sup></span>.`,
          `Y <span class="math">1/4 = 2<sup>−2</sup></span>.`,
          `Iguala exponentes: <span class="math">3x = −2</span>.`,
          `Despeja: <span class="math">x = −2/3</span>.`
        ],
        respuesta: `<span class="math">x = −2/3</span>`
      },
      {
        nivel: 'intermedio',
        enunciado: `Para <span class="math">g(x) = 2<sup>x</sup> + 3</span> halla dominio, rango, asíntota e intercepto con el eje y.`,
        pasos: [
          `Es <span class="math">2<sup>x</sup></span> desplazada 3 unidades hacia arriba.`,
          `Dominio <span class="math">ℝ</span>. La asíntota sube de <span class="math">y = 0</span> a <span class="math">y = 3</span>.`,
          `Rango: <span class="math">]3, +∞[</span>, porque <span class="math">2<sup>x</sup> &gt; 0</span> y entonces <span class="math">g(x) &gt; 3</span>.`,
          `Intercepto: <span class="math">g(0) = 2⁰ + 3 = 4</span>, el punto <span class="math">(0, 4)</span>.`
        ],
        respuesta: `Dominio <span class="math">ℝ</span>; rango <span class="math">]3, +∞[</span>; asíntota <span class="math">y = 3</span>; intercepto <span class="math">(0, 4)</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Para <span class="math">h(x) = −2<sup>x−1</sup> + 5</span> halla dominio, rango, asíntota y calcula <span class="math">h(0)</span>, <span class="math">h(1)</span> y <span class="math">h(3)</span>.`,
        pasos: [
          `Transformaciones: reflexión en el eje x (el signo menos de afuera), 1 unidad a la derecha y 5 hacia arriba.`,
          `Asíntota: <span class="math">y = 5</span>. Como la gráfica está volteada, queda por debajo de la asíntota: rango <span class="math">]−∞, 5[</span>. Dominio <span class="math">ℝ</span>.`,
          `<span class="math">h(0) = −2<sup>−1</sup> + 5 = −1/2 + 5 = 4.5</span>.`,
          `<span class="math">h(1) = −2⁰ + 5 = −1 + 5 = 4</span> y <span class="math">h(3) = −2² + 5 = −4 + 5 = 1</span>.`
        ],
        respuesta: `Dominio <span class="math">ℝ</span>; rango <span class="math">]−∞, 5[</span>; asíntota <span class="math">y = 5</span>; <span class="math">h(0) = 4.5</span>, <span class="math">h(1) = 4</span>, <span class="math">h(3) = 1</span>.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Resuelve: <span class="math">4<sup>x+1</sup> = 8<sup>x−1</sup></span>.`,
        pasos: [
          `Base 2: <span class="math">4<sup>x+1</sup> = (2²)<sup>x+1</sup> = 2<sup>2x+2</sup></span>.`,
          `<span class="math">8<sup>x−1</sup> = (2³)<sup>x−1</sup> = 2<sup>3x−3</sup></span>.`,
          `Iguala exponentes: <span class="math">2x + 2 = 3x − 3</span>.`,
          `Despeja: <span class="math">5 = x</span>. Comprobación: <span class="math">4⁶ = 4096</span> y <span class="math">8⁴ = 4096</span>.`
        ],
        respuesta: `<span class="math">x = 5</span>`
      },
      {
        nivel: 'dificil',
        enunciado: `Resuelve: <span class="math">4<sup>x</sup> − 2<sup>x+1</sup> − 8 = 0</span>. Descarta las soluciones que no sirvan.`,
        pasos: [
          `Reescribe: <span class="math">4<sup>x</sup> = (2<sup>x</sup>)²</span> y <span class="math">2<sup>x+1</sup> = 2 · 2<sup>x</sup></span>.`,
          `Con <span class="math">y = 2<sup>x</sup></span>: <span class="math">y² − 2y − 8 = 0</span>.`,
          `Factoriza: <span class="math">(y − 4)(y + 2) = 0</span>, entonces <span class="math">y = 4</span> o <span class="math">y = −2</span>.`,
          `<span class="math">y = −2</span> se descarta: <span class="math">2<sup>x</sup></span> nunca es negativo.`,
          `<span class="math">2<sup>x</sup> = 4 = 2² ⇒ x = 2</span>. Comprobación: <span class="math">16 − 8 − 8 = 0</span>.`
        ],
        respuesta: `<span class="math">x = 2</span> (la solución <span class="math">y = −2</span> se descarta)`
      },
      {
        nivel: 'dificil',
        enunciado: `Resuelve: <span class="math">9<sup>x</sup> − 10 · 3<sup>x</sup> + 9 = 0</span>.`,
        pasos: [
          `<span class="math">9<sup>x</sup> = (3²)<sup>x</sup> = (3<sup>x</sup>)²</span>.`,
          `Con <span class="math">y = 3<sup>x</sup></span>: <span class="math">y² − 10y + 9 = 0</span>.`,
          `Factoriza: <span class="math">(y − 1)(y − 9) = 0</span>, entonces <span class="math">y = 1</span> o <span class="math">y = 9</span>.`,
          `<span class="math">3<sup>x</sup> = 1 = 3⁰ ⇒ x = 0</span>; <span class="math">3<sup>x</sup> = 9 = 3² ⇒ x = 2</span>.`,
          `Comprobación: <span class="math">x = 0</span>: <span class="math">1 − 10 + 9 = 0</span>. <span class="math">x = 2</span>: <span class="math">81 − 90 + 9 = 0</span>.`
        ],
        respuesta: `<span class="math">x = 0</span> y <span class="math">x = 2</span>`
      },
      {
        nivel: 'dificil',
        enunciado: `Una moto cuesta $4000 y pierde el 20 % de su valor cada año: <span class="math">V(t) = 4000 · (0.8)<sup>t</sup></span>. ¿Cuánto valdrá después de 3 años y cuánto habrá perdido en total?`,
        pasos: [
          `Cada año conserva el 80 % del valor, por eso el factor es <span class="math">0.8</span>.`,
          `<span class="math">V(3) = 4000 · (0.8)³ = 4000 · 0.512</span>.`,
          `<span class="math">4000 · 0.512 = 2048</span> dólares.`,
          `Pérdida total: <span class="math">4000 − 2048 = 1952</span> dólares (el 48.8 % del precio inicial, no el 60 %, porque la pérdida del 20 % se aplica sobre un valor cada vez menor).`
        ],
        respuesta: `Valdrá <span class="math">$2048</span> y habrá perdido <span class="math">$1952</span>.`
      },
      {
        nivel: 'dificil',
        enunciado: `Depositas $2500 en una cuenta con interés compuesto del 4 % anual. ¿Cuánto tendrás después de 3 años? (Usa <span class="math">M = C(1 + i)<sup>t</sup></span>.)`,
        pasos: [
          `Datos: <span class="math">C = 2500</span>, <span class="math">i = 0.04</span>, <span class="math">t = 3</span>.`,
          `Factor: <span class="math">1 + i = 1.04</span>.`,
          `<span class="math">(1.04)³ = 1.04 · 1.04 · 1.04 = 1.124864</span>.`,
          `<span class="math">M = 2500 · 1.124864 = 2812.16</span> dólares.`
        ],
        respuesta: `<span class="math">M = $2812.16</span>`
      }
    ],
    teoricas: [
      {
        q: `¿Por qué la base de una función exponencial debe cumplir <span class="math">a &gt; 0</span> y <span class="math">a ≠ 1</span>?`,
        a: `Con <span class="math">a = 1</span> se obtiene <span class="math">1<sup>x</sup> = 1</span>, una función constante (recta horizontal), que no tiene el comportamiento exponencial. Con <span class="math">a &lt; 0</span> los exponentes fraccionarios producirían raíces de números negativos (por ejemplo <span class="math">(−4)<sup>1/2</sup></span>) y la función no estaría definida para todo <span class="math">ℝ</span>. Con <span class="math">a = 0</span> tampoco sirve: <span class="math">0<sup>x</sup></span> daría 0 o quedaría indefinida.`
      },
      {
        q: `¿Por qué el rango de <span class="math">a<sup>x</sup></span> es <span class="math">]0, +∞[</span> y nunca incluye el 0?`,
        a: `Una base positiva elevada a cualquier exponente real da un número positivo. Además, la gráfica se acerca tanto como se quiera al eje <span class="math">x</span> (por ejemplo <span class="math">2<sup>−100</sup></span> es casi 0) pero nunca lo toca. Por eso <span class="math">y = 0</span> es una asíntota y el 0 queda excluido del rango.`
      },
      {
        q: `¿Cómo se relacionan las gráficas de <span class="math">a<sup>x</sup></span> y <span class="math">(1/a)<sup>x</sup></span>?`,
        a: `Son simétricas respecto al eje <span class="math">y</span>, porque <span class="math">(1/a)<sup>x</sup> = (a<sup>−1</sup>)<sup>x</sup> = a<sup>−x</sup></span>. Si una es creciente, la otra es decreciente. Ambas pasan por <span class="math">(0, 1)</span>.`
      },
      {
        q: `¿Qué efecto tiene sumar una constante <span class="math">k</span> fuera de la exponencial, como en <span class="math">a<sup>x</sup> + k</span>?`,
        a: `Desplaza la gráfica verticalmente <span class="math">k</span> unidades y, por eso, <strong>mueve la asíntota</strong> a <span class="math">y = k</span>. Si la función es de la forma <span class="math">+a<sup>x</sup></span>, el rango pasa a <span class="math">]k, +∞[</span>. El dominio sigue siendo <span class="math">ℝ</span>.`
      },
      {
        q: `¿Qué efecto tiene cambiar <span class="math">x</span> por <span class="math">x − h</span> en el exponente? ¿Cambia la asíntota?`,
        a: `Desplaza la gráfica <span class="math">h</span> unidades horizontalmente (a la derecha si <span class="math">h &gt; 0</span>, a la izquierda si <span class="math">h &lt; 0</span>). La asíntota horizontal <strong>no cambia</strong> y el rango tampoco, porque mover la curva de lado no cambia sus alturas posibles. Sí cambia el intercepto con el eje <span class="math">y</span>.`
      },
      {
        q: `¿Por qué todas las funciones <span class="math">a<sup>x</sup></span> pasan por el punto <span class="math">(0, 1)</span>?`,
        a: `Porque <span class="math">a⁰ = 1</span> para cualquier base <span class="math">a ≠ 0</span>. Con <span class="math">x = 0</span> siempre se obtiene <span class="math">y = 1</span>. Cuando la función tiene desplazamientos o un coeficiente (como <span class="math">3 · 2<sup>x</sup></span>), el intercepto cambia: en ese caso es <span class="math">(0, 3)</span>.`
      },
      {
        q: `Al resolver una ecuación con cambio de variable, ¿por qué debemos descartar valores de <span class="math">y ≤ 0</span>?`,
        a: `Porque <span class="math">y = a<sup>x</sup></span> y el rango de una exponencial es <span class="math">]0, +∞[</span>. La ecuación <span class="math">2<sup>x</sup> = −2</span> o <span class="math">2<sup>x</sup> = 0</span> no tiene solución real. Si no se descartan, se darían respuestas falsas.`
      },
      {
        q: `¿Por qué se pueden igualar los exponentes en <span class="math">a<sup>r</sup> = a<sup>s</sup></span> y cuándo NO se puede hacer?`,
        a: `Porque la función exponencial es estrictamente creciente o decreciente, así que es inyectiva: dos exponentes distintos darían valores distintos. Solo se puede si ambos lados tienen <strong>la misma base</strong> (positiva y distinta de 1). No se puede con <span class="math">2<sup>x</sup> = 3<sup>x</sup></span> o con sumas como <span class="math">2<sup>x</sup> + 2<sup>x+1</sup> = ...</span> sin transformar antes.`
      }
    ],
    errores: [
      `Confundir <span class="math">a<sup>x</sup></span> con <span class="math">xᵃ</span>. En <span class="math">2<sup>x</sup></span> la variable está en el exponente y la gráfica tiene una asíntota; en <span class="math">x²</span> es una parábola. Pregúntate siempre dónde está la <span class="math">x</span>.`,
      `Errores al igualar bases: escribir <span class="math">4<sup>x</sup> = 2<sup>x²</sup></span> o <span class="math">2 · 4<sup>x</sup> = 8<sup>x</sup></span>. Lo correcto es <span class="math">4<sup>x</sup> = (2²)<sup>x</sup> = 2<sup>2x</sup></span>; y un coeficiente que multiplica no se mete a la base (<span class="math">2 · 4<sup>x</sup> = 2<sup>2x+1</sup></span>).`,
      `En el cambio de variable, olvidar volver a <span class="math">x</span> (dejar la respuesta en <span class="math">y</span>) o no descartar valores negativos de <span class="math">y</span>. Siempre termina con <span class="math">2<sup>x</sup> = y</span> y comprueba en la ecuación original.`,
      `Pensar que el desplazamiento horizontal mueve la asíntota, o que <span class="math">−2<sup>x</sup></span> tiene rango positivo. La asíntota solo se mueve con el desplazamiento vertical <span class="math">k</span>; y la reflexión en el eje <span class="math">x</span> voltea el rango hacia abajo.`
    ],
    aplicacion: {
      titulo: 'Ahorro con interés compuesto frente a interés simple',
      html: `<p>Una familia de Santa Ana ahorra <strong>$800</strong> en una cooperativa que paga un <strong>6 % anual de interés compuesto</strong> (los intereses se suman al capital cada año y también generan interés). ¿Cuánto tendrán a los 5 años y cuánto más ganan respecto de un interés simple?</p>
<p><strong>Modelo.</strong> <span class="math">M(t) = 800 · (1.06)<sup>t</sup></span>. Es una exponencial con <span class="math">a = 1.06 &gt; 1</span>, creciente.</p>
<table>
<tr><th>Año</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
<tr><td>Saldo (dólares)</td><td>800.00</td><td>848.00</td><td>898.88</td><td>952.81</td><td>1009.98</td><td>1070.58</td></tr>
</table>
<p><strong>Paso 1.</strong> <span class="math">(1.06)⁵ ≈ 1.338226</span>.</p>
<p><strong>Paso 2.</strong> <span class="math">M(5) = 800 · 1.338226 ≈ 1070.58</span> dólares.</p>
<p><strong>Interés simple.</strong> Con el mismo 6 % pero sin reinvertir, ganarían <span class="math">800 · 0.06 · 5 = 240</span> y tendrían <span class="math">1040</span> dólares.</p>
<p><strong>Conclusión.</strong> El interés compuesto da <span class="math">1070.58 − 1040 = 30.58</span> dólares más. Con más años la diferencia crece muy rápido: eso es el crecimiento exponencial.</p>`
    },
    calc: 'exponencial',
    examen: [
      {
        tipo: 'num',
        q: `Resuelve: <span class="math">3<sup>x−1</sup> = 81</span>.`,
        r: 5, tol: 0.01,
        pasos: [
          `Escribe <span class="math">81 = 3⁴</span>.`,
          `Iguala exponentes: <span class="math">x − 1 = 4</span>.`,
          `Despeja: <span class="math">x = 5</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Resuelve <span class="math">8<sup>x</sup> = 16</span>. Redondea a 2 decimales (también puedes escribir una fracción).`,
        r: 1.33, tol: 0.01,
        pasos: [
          `Base 2: <span class="math">8 = 2³</span> y <span class="math">16 = 2⁴</span>.`,
          `<span class="math">2<sup>3x</sup> = 2⁴ ⇒ 3x = 4</span>.`,
          `<span class="math">x = 4/3 ≈ 1.33</span>.`
        ]
      },
      {
        tipo: 'lista',
        q: `Resuelve <span class="math">4<sup>x</sup> − 6 · 2<sup>x</sup> + 8 = 0</span>. Escribe las soluciones separadas por comas.`,
        r: [1, 2], tol: 0.01,
        pasos: [
          `Sea <span class="math">y = 2<sup>x</sup></span>; como <span class="math">4<sup>x</sup> = y²</span>, queda <span class="math">y² − 6y + 8 = 0</span>.`,
          `Factoriza: <span class="math">(y − 2)(y − 4) = 0</span>, entonces <span class="math">y = 2</span> o <span class="math">y = 4</span>.`,
          `<span class="math">2<sup>x</sup> = 2 ⇒ x = 1</span> y <span class="math">2<sup>x</sup> = 4 ⇒ x = 2</span>.`,
          `Comprobación: <span class="math">x = 1</span>: <span class="math">4 − 12 + 8 = 0</span>; <span class="math">x = 2</span>: <span class="math">16 − 24 + 8 = 0</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Si <span class="math">f(x) = 5 · (1/2)<sup>x</sup></span>, calcula <span class="math">f(3)</span>. (Puedes escribir una fracción o un decimal.)`,
        r: 0.625, tol: 0.001,
        pasos: [
          `<span class="math">f(3) = 5 · (1/2)³</span>.`,
          `<span class="math">(1/2)³ = 1/8</span>.`,
          `<span class="math">f(3) = 5/8 = 0.625</span>.`
        ]
      },
      {
        tipo: 'par',
        q: `Halla el punto donde la gráfica de <span class="math">f(x) = 4 · 3<sup>x</sup> − 7</span> corta al eje <span class="math">y</span>. Escribe el punto como (x, y).`,
        r: [0, -3], tol: 0.01,
        pasos: [
          `El intercepto con el eje <span class="math">y</span> se obtiene con <span class="math">x = 0</span>.`,
          `<span class="math">f(0) = 4 · 3⁰ − 7 = 4 · 1 − 7 = −3</span>.`,
          `El punto es <span class="math">(0, −3)</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `La gráfica de <span class="math">f(x) = 2<sup>x−3</sup> − 5</span> tiene una asíntota horizontal <span class="math">y = c</span>. ¿Cuánto vale <span class="math">c</span>?`,
        r: -5, tol: 0.01,
        pasos: [
          `La asíntota de <span class="math">a<sup>x−h</sup> + k</span> es <span class="math">y = k</span>.`,
          `Aquí <span class="math">k = −5</span> (el desplazamiento horizontal de 3 no la afecta).`,
          `Entonces <span class="math">c = −5</span>.`
        ]
      },
      {
        tipo: 'num',
        q: `Un cultivo comienza con 200 bacterias que se triplican cada hora: <span class="math">N(t) = 200 · 3<sup>t</sup></span>. ¿Cuántas bacterias hay después de 4 horas?`,
        r: 16200, tol: 0.5,
        pasos: [
          `<span class="math">N(4) = 200 · 3⁴</span>.`,
          `<span class="math">3⁴ = 81</span>.`,
          `<span class="math">N(4) = 200 · 81 = 16200</span> bacterias.`
        ]
      },
      {
        tipo: 'num',
        q: `Depositas $1000 al 5 % de interés compuesto anual. ¿Cuántos dólares tendrás después de 2 años? (<span class="math">M = C(1+i)<sup>t</sup></span>)`,
        r: 1102.5, tol: 0.01,
        pasos: [
          `Factor: <span class="math">1 + 0.05 = 1.05</span>.`,
          `<span class="math">(1.05)² = 1.1025</span>.`,
          `<span class="math">M = 1000 · 1.1025 = 1102.50</span> dólares.`
        ]
      },
      {
        tipo: 'opt',
        q: `¿Cuál de estas funciones es decreciente?`,
        opciones: [
          `<span class="math">f(x) = 3<sup>x</sup></span>`,
          `<span class="math">f(x) = (5/4)<sup>x</sup></span>`,
          `<span class="math">f(x) = (2/3)<sup>x</sup></span>`,
          `<span class="math">f(x) = 10<sup>x</sup></span>`
        ],
        correcta: 2,
        pasos: [
          `Una exponencial es decreciente cuando la base está entre 0 y 1.`,
          `<span class="math">3</span>, <span class="math">5/4 = 1.25</span> y <span class="math">10</span> son mayores que 1: crecientes.`,
          `<span class="math">2/3 ≈ 0.67</span> está entre 0 y 1: decreciente.`
        ]
      },
      {
        tipo: 'opt',
        q: `El rango de <span class="math">f(x) = 2<sup>x</sup> − 3</span> es:`,
        opciones: [
          `<span class="math">]−3, +∞[</span>`,
          `<span class="math">]0, +∞[</span>`,
          `<span class="math">]−∞, −3[</span>`,
          `<span class="math">ℝ</span>`
        ],
        correcta: 0,
        pasos: [
          `<span class="math">2<sup>x</sup> &gt; 0</span> para todo <span class="math">x</span>.`,
          `Restando 3: <span class="math">2<sup>x</sup> − 3 &gt; −3</span>.`,
          `La asíntota es <span class="math">y = −3</span> y la gráfica queda por encima: rango <span class="math">]−3, +∞[</span>.`
        ]
      }
    ]
  };
})();

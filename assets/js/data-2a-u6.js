/* data-2a-u6.js — Unidad 6: Sucesiones */
(function () {
  var T = (window.CURSO_2A = window.CURSO_2A || { temas: {} }).temas;

  /* ============================================================
     TEMA 1.17 — SUCESIONES ARITMÉTICAS
     ============================================================ */
  T['1.17'] = {
    id: '1.17',
    unidad: 6,
    titulo: 'Sucesiones aritméticas',
    resumen: 'Reconoce patrones de suma constante, halla cualquier término y suma los primeros n términos sin escribirlos todos.',
    objetivos: [
      'Identificar una sucesión aritmética y calcular su diferencia constante d.',
      'Aplicar aₙ = a₁ + d(n − 1) para hallar un término, la posición de un valor o los datos a₁ y d.',
      'Calcular la suma parcial Sₙ con las dos formas de la fórmula.',
      'Interpolar medios aritméticos y resolver problemas de ahorro, filas y escalones.'
    ],
    teoria: [
      {
        titulo: '¿Qué es una sucesión?',
        html: `<p>Una <strong>sucesión</strong> es una lista <em>ordenada</em> de números que siguen una regla. Cada número se llama <strong>término</strong> y se nombra con una letra y un subíndice que indica su <em>posición</em>:</p>
<p><span class="math">a₁, a₂, a₃, …, aₙ, …</span></p>
<p><span class="math">a₁</span> es el primer término, <span class="math">a₂</span> el segundo y <span class="math">aₙ</span> es el <strong>término general</strong>: el que ocupa la posición <span class="math">n</span>. Los puntos suspensivos significan que la lista puede seguir.</p>
<ul>
<li><span class="math">2, 4, 6, 8, …</span> (los números pares).</li>
<li><span class="math">1, 4, 9, 16, …</span> (los cuadrados).</li>
<li><span class="math">100, 50, 25, 12.5, …</span> (cada término es la mitad del anterior).</li>
</ul>
<p>El orden importa: <span class="math">1, 2, 3</span> y <span class="math">3, 2, 1</span> son sucesiones distintas. En el fondo, una sucesión es una función cuyo dominio son las posiciones 1, 2, 3, … y cuya imagen es el término de esa posición.</p>`
      },
      {
        titulo: 'Sucesión aritmética y diferencia constante',
        html: `<p>Una sucesión es <strong>aritmética</strong> cuando cada término se obtiene <em>sumando siempre el mismo número</em> al anterior. Ese número fijo se llama <strong>diferencia</strong> y se denota <span class="math">d</span>:</p>
<p><span class="math">d = aₙ − aₙ₋₁</span> (para cualquier posición n ≥ 2)</p>
<p>Ejemplo: <span class="math">5, 9, 13, 17, …</span> sube de 4 en 4, así que <span class="math">d = 4</span>.</p>
<ul>
<li>Si <span class="math">d &gt; 0</span> la sucesión es <strong>creciente</strong> (7, 10, 13, …).</li>
<li>Si <span class="math">d &lt; 0</span> es <strong>decreciente</strong> (20, 17, 14, …).</li>
<li>Si <span class="math">d = 0</span> es <strong>constante</strong> (6, 6, 6, …).</li>
</ul>
<p><strong>Cómo comprobar que es aritmética:</strong> resta cada término menos el anterior. Si <em>todas</em> las restas dan lo mismo, lo es. Con una sola resta no basta: <span class="math">1, 2, 4, …</span> tiene <span class="math">2 − 1 = 1</span> pero <span class="math">4 − 2 = 2</span>, así que no es aritmética.</p>`
      },
      {
        titulo: 'Término general: aₙ = a₁ + d(n − 1)',
        html: `<p>Para llegar al término de la posición <span class="math">n</span> partimos de <span class="math">a₁</span> y sumamos <span class="math">d</span> varias veces. Observa el patrón:</p>
<table>
<tr><th>Término</th><th>Cuántas veces sumamos d</th><th>Valor</th></tr>
<tr><td><span class="math">a₂</span></td><td>1</td><td><span class="math">a₁ + d</span></td></tr>
<tr><td><span class="math">a₃</span></td><td>2</td><td><span class="math">a₁ + 2d</span></td></tr>
<tr><td><span class="math">a₄</span></td><td>3</td><td><span class="math">a₁ + 3d</span></td></tr>
<tr><td><span class="math">aₙ</span></td><td>n − 1</td><td><span class="math">a₁ + d(n − 1)</span></td></tr>
</table>
<p>Siempre sumamos <em>una vez menos</em> que la posición, porque el primer término ya está dado. Por eso aparece <span class="math">n − 1</span> y no <span class="math">n</span>.</p>
<p><strong>Ejemplo rápido:</strong> en <span class="math">5, 9, 13, …</span> el término 10 es <span class="math">a₁₀ = 5 + 4(9) = 41</span>. Sin la fórmula tendrías que escribir diez números.</p>
<p>Más general: entre dos términos cualesquiera, <span class="math">aₘ = aₖ + d(m − k)</span>. Esto sirve cuando no conoces <span class="math">a₁</span>.</p>`
      },
      {
        titulo: 'Suma parcial Sₙ: la idea de Gauss',
        html: `<p>La <strong>suma parcial</strong> <span class="math">Sₙ = a₁ + a₂ + … + aₙ</span> suma los primeros <span class="math">n</span> términos.</p>
<p>Cuenta la historia que a Carl Gauss, de niño, le pidieron sumar <span class="math">1 + 2 + … + 100</span>. Notó que, si emparejas el primero con el último, el segundo con el penúltimo, etc., <em>todas las parejas suman lo mismo</em>: <span class="math">1 + 100 = 101</span>, <span class="math">2 + 99 = 101</span>, … Hay 50 parejas, así que la suma es <span class="math">50 · 101 = 5050</span>.</p>
<p>Lo mismo pasa en cualquier sucesión aritmética: la suma de los extremos <span class="math">a₁ + aₙ</span> se repite en <span class="math">n/2</span> parejas.</p>
<p><span class="math">Sₙ = n/2 · (a₁ + aₙ)</span></p>
<p>Si no conoces el último término, sustituye <span class="math">aₙ = a₁ + d(n − 1)</span> y obtienes la segunda forma:</p>
<p><span class="math">Sₙ = n/2 · (2a₁ + d(n − 1))</span></p>
<p>Elige la primera cuando conozcas <span class="math">a₁</span> y <span class="math">aₙ</span>, y la segunda cuando conozcas <span class="math">a₁</span> y <span class="math">d</span>.</p>`
      },
      {
        titulo: 'Hallar a₁ y d, y ubicar un valor en la sucesión',
        html: `<p><strong>Con dos términos conocidos</strong> (por ejemplo <span class="math">aₖ</span> y <span class="math">aₘ</span>):</p>
<ol>
<li>Resta: <span class="math">aₘ − aₖ = d(m − k)</span>, de donde <span class="math">d = (aₘ − aₖ)/(m − k)</span>.</li>
<li>Con <span class="math">d</span> en mano, retrocede: <span class="math">a₁ = aₖ − d(k − 1)</span>.</li>
<li>Comprueba que con esos datos obtienes el otro término.</li>
</ol>
<p><strong>¿Qué término vale tal número?</strong> Si te piden la posición de un valor <span class="math">v</span>, iguala <span class="math">aₙ = v</span> y despeja:</p>
<p><span class="math">n = (v − a₁)/d + 1</span></p>
<ul>
<li>Si <span class="math">n</span> sale un <strong>entero positivo</strong>, <span class="math">v</span> es el término de esa posición.</li>
<li>Si sale con decimales (por ejemplo 19.6) o negativo, <span class="math">v</span> <strong>no pertenece</strong> a la sucesión: las posiciones son números enteros.</li>
</ul>
<p>El mismo despeje cuenta cuántos términos tiene una lista que termina en un valor dado: <span class="math">3, 8, 13, …, 183</span> tiene <span class="math">n = (183 − 3)/5 + 1 = 37</span> términos.</p>`
      },
      {
        titulo: 'Interpolar medios aritméticos',
        html: `<p><strong>Interpolar</strong> <span class="math">k</span> medios aritméticos entre dos números <span class="math">a</span> y <span class="math">b</span> es colocar <span class="math">k</span> números entre ellos de modo que todo quede en sucesión aritmética.</p>
<p>La lista completa tiene <span class="math">k + 2</span> términos (los dos extremos y los <span class="math">k</span> medios), así que de <span class="math">a</span> a <span class="math">b</span> hay <span class="math">k + 1</span> «saltos» iguales:</p>
<p><span class="math">d = (b − a)/(k + 1)</span></p>
<p><strong>Ejemplo:</strong> 2 medios entre 10 y 25. Hay 3 saltos: <span class="math">d = (25 − 10)/3 = 5</span>. La lista es <span class="math">10, 15, 20, 25</span>.</p>
<p>Caso especial: <strong>un solo medio aritmético</strong> entre <span class="math">a</span> y <span class="math">b</span> es su promedio, <span class="math">(a + b)/2</span>. Por eso a cada término de una sucesión aritmética (excepto los extremos) se le llama el «promedio» de sus vecinos.</p>`
      },
      {
        titulo: 'Interpretación gráfica: puntos sobre una recta',
        html: `<p>Si representas los puntos <span class="math">(1, a₁), (2, a₂), (3, a₃), …</span> en el plano, <em>quedan alineados</em>. La fórmula <span class="math">aₙ = a₁ + d(n − 1)</span> es la de una recta:</p>
<ul>
<li>La <strong>pendiente</strong> de esa recta es la diferencia <span class="math">d</span>: cuánto sube (o baja) el término cuando la posición avanza 1.</li>
<li>Con <span class="math">d &gt; 0</span> la recta sube; con <span class="math">d &lt; 0</span> baja; con <span class="math">d = 0</span> es horizontal.</li>
<li>A diferencia de una recta continua, aquí solo existen los puntos de abscisa entera 1, 2, 3, …</li>
</ul>
<p>Es la misma idea de pendiente que viste en la Unidad 2: un cambio constante por cada paso. Por eso las sucesiones aritméticas modelan situaciones de <em>crecimiento lineal</em>: ahorrar una cantidad fija cada semana, subir escalones del mismo alto, pagar una cuota fija.</p>`
      },
      {
        titulo: 'Aritmética o geométrica: cómo distinguirlas',
        html: `<p>En la siguiente lección verás las sucesiones <strong>geométricas</strong>, donde cada término se obtiene <em>multiplicando</em> por un número fijo. Para decidir de cuál se trata, mira cómo pasas de un término al siguiente:</p>
<table>
<tr><th></th><th>Aritmética</th><th>Geométrica</th></tr>
<tr><td>Operación</td><td>se <strong>suma</strong> siempre lo mismo</td><td>se <strong>multiplica</strong> por lo mismo</td></tr>
<tr><td>Constante</td><td>diferencia <span class="math">d = aₙ − aₙ₋₁</span></td><td>razón <span class="math">r = (aₙ)/(aₙ₋₁)</span></td></tr>
<tr><td>Ejemplo</td><td><span class="math">3, 7, 11, 15, …</span></td><td><span class="math">3, 6, 12, 24, …</span></td></tr>
<tr><td>Gráfica</td><td>puntos en línea recta</td><td>curva que se dispara o se aplana</td></tr>
</table>
<p><strong>Prueba rápida:</strong> calcula primero las restas consecutivas; si no coinciden, calcula los cocientes. Hay sucesiones que no son ni una ni otra, como <span class="math">1, 4, 9, 16, …</span> (restas 3, 5, 7; cocientes 4, 2.25, …).</p>
<p>Si quieres comprobar tus resultados, prueba la calculadora de este tema.</p>`
      }
    ],
    formulas: [
      { label: 'Diferencia constante', html: '<span class="math">d = aₙ − aₙ₋₁</span>' },
      { label: 'Término general', html: '<span class="math">aₙ = a₁ + d(n − 1)</span>' },
      { label: 'Entre dos términos', html: '<span class="math">aₘ = aₖ + d(m − k)</span> o <span class="math">d = (aₘ − aₖ)/(m − k)</span>' },
      { label: 'Suma parcial (con extremos)', html: '<span class="math">Sₙ = n/2 · (a₁ + aₙ)</span>' },
      { label: 'Suma parcial (con d)', html: '<span class="math">Sₙ = n/2 · (2a₁ + d(n − 1))</span>' },
      { label: 'Posición de un valor v', html: '<span class="math">n = (v − a₁)/d + 1</span>' },
      { label: 'Interpolar k medios', html: '<span class="math">d = (b − a)/(k + 1)</span>' }
    ],
    ejemplos: [
      {
        titulo: 'Reconocer la sucesión y hallar un término',
        enunciado: 'Comprueba que <span class="math">5, 9, 13, 17, …</span> es aritmética y calcula su término <span class="math">a₁₅</span>.',
        pasos: [
          'Resta cada término menos el anterior: <span class="math">9 − 5 = 4</span>, <span class="math">13 − 9 = 4</span>, <span class="math">17 − 13 = 4</span>. Todas dan lo mismo, así que es aritmética con <span class="math">d = 4</span> y <span class="math">a₁ = 5</span>.',
          'Escribe la fórmula: <span class="math">a₁₅ = a₁ + d(15 − 1)</span>.',
          'Sustituye: <span class="math">a₁₅ = 5 + 4(14) = 5 + 56</span>.',
          'Resultado: <span class="math">a₁₅ = 61</span>.'
        ],
        respuesta: '<span class="math">d = 4</span> y <span class="math">a₁₅ = 61</span>.'
      },
      {
        titulo: 'Hallar a₁ y d con dos términos',
        enunciado: 'En una sucesión aritmética, <span class="math">a₃ = 11</span> y <span class="math">a₇ = 27</span>. Halla <span class="math">a₁</span>, <span class="math">d</span> y <span class="math">a₂₀</span>.',
        pasos: [
          'Entre las posiciones 3 y 7 hay <span class="math">7 − 3 = 4</span> saltos, y el valor aumentó <span class="math">27 − 11 = 16</span>.',
          'Entonces <span class="math">d = 16/4 = 4</span>.',
          'Retrocede desde <span class="math">a₃</span>: <span class="math">a₁ = a₃ − 2d = 11 − 8 = 3</span>.',
          'Comprueba: <span class="math">a₇ = 3 + 4(6) = 27</span>. Coincide.',
          'Ahora <span class="math">a₂₀ = 3 + 4(19) = 3 + 76 = 79</span>.'
        ],
        respuesta: '<span class="math">a₁ = 3</span>, <span class="math">d = 4</span> y <span class="math">a₂₀ = 79</span>.'
      },
      {
        titulo: '¿Pertenece el número a la sucesión?',
        enunciado: 'En <span class="math">7, 12, 17, 22, …</span>, ¿es 102 un término? ¿Y 100? Si lo es, indica su posición.',
        pasos: [
          'Aquí <span class="math">a₁ = 7</span> y <span class="math">d = 12 − 7 = 5</span>.',
          'Para 102: <span class="math">102 = 7 + 5(n − 1)</span>, luego <span class="math">95 = 5(n − 1)</span> y <span class="math">n − 1 = 19</span>, así que <span class="math">n = 20</span>. Es entero: 102 es el término número 20.',
          'Para 100: <span class="math">100 = 7 + 5(n − 1)</span>, luego <span class="math">93 = 5(n − 1)</span> y <span class="math">n − 1 = 18.6</span>, es decir <span class="math">n = 19.6</span>.',
          'La posición debe ser un entero, por lo tanto 100 no pertenece a la sucesión (los términos cercanos son 97 y 102).'
        ],
        respuesta: '102 es el término 20; 100 no pertenece a la sucesión.'
      },
      {
        titulo: 'Suma de los primeros 25 términos',
        enunciado: 'Calcula la suma de los primeros 25 términos de <span class="math">4, 7, 10, 13, …</span>',
        pasos: [
          'Datos: <span class="math">a₁ = 4</span>, <span class="math">d = 3</span>, <span class="math">n = 25</span>.',
          'Primero el último término: <span class="math">a₂₅ = 4 + 3(24) = 4 + 72 = 76</span>.',
          'Aplica <span class="math">Sₙ = n/2 · (a₁ + aₙ)</span>: <span class="math">S₂₅ = 25/2 · (4 + 76) = 25/2 · 80</span>.',
          '<span class="math">S₂₅ = 25 · 40 = 1000</span>.',
          'Verificación con la otra forma: <span class="math">25/2 · (2 · 4 + 3 · 24) = 25/2 · 80 = 1000</span>.'
        ],
        respuesta: '<span class="math">S₂₅ = 1000</span>.'
      },
      {
        titulo: 'Interpolar medios aritméticos',
        enunciado: 'Interpola 4 medios aritméticos entre 3 y 28.',
        pasos: [
          'La lista completa tendrá <span class="math">4 + 2 = 6</span> términos, con <span class="math">a₁ = 3</span> y <span class="math">a₆ = 28</span>. Hay <span class="math">k + 1 = 5</span> saltos.',
          '<span class="math">d = (28 − 3)/5 = 25/5 = 5</span>.',
          'Suma 5 repetidamente: <span class="math">3, 8, 13, 18, 23, 28</span>.',
          'Verifica el final: <span class="math">3 + 5 · 5 = 28</span>.'
        ],
        respuesta: 'Los medios son <span class="math">8, 13, 18, 23</span>.'
      },
      {
        titulo: 'Ahorro semanal (contexto real)',
        enunciado: 'Ana quiere comprar una bicicleta. La primera semana ahorra $5 y cada semana ahorra $3 más que la anterior. ¿Cuánto habrá ahorrado en total al cabo de 20 semanas?',
        pasos: [
          'Lo ahorrado cada semana es <span class="math">5, 8, 11, …</span>: sucesión aritmética con <span class="math">a₁ = 5</span> y <span class="math">d = 3</span>.',
          'Lo ahorrado en la semana 20: <span class="math">a₂₀ = 5 + 3(19) = 62</span> dólares.',
          'El total es la suma parcial: <span class="math">S₂₀ = 20/2 · (5 + 62) = 10 · 67</span>.',
          '<span class="math">S₂₀ = 670</span>.'
        ],
        respuesta: 'En 20 semanas habrá ahorrado $670 (en la semana 20 aportó $62).'
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: 'En <span class="math">2, 6, 10, 14, …</span> halla la diferencia y el término <span class="math">a₁₀</span>.',
        pasos: [
          '<span class="math">d = 6 − 2 = 4</span> (se comprueba: <span class="math">10 − 6 = 4</span>).',
          '<span class="math">a₁₀ = 2 + 4(9)</span>.',
          '<span class="math">a₁₀ = 2 + 36 = 38</span>.'
        ],
        respuesta: '<span class="math">d = 4</span> y <span class="math">a₁₀ = 38</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Una sucesión aritmética tiene <span class="math">a₁ = −3</span> y <span class="math">d = 5</span>. Calcula <span class="math">a₈</span>.',
        pasos: [
          '<span class="math">a₈ = a₁ + d(8 − 1)</span>.',
          '<span class="math">a₈ = −3 + 5(7) = −3 + 35</span>.',
          '<span class="math">a₈ = 32</span>.'
        ],
        respuesta: '<span class="math">a₈ = 32</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Halla el séptimo término de <span class="math">20, 17, 14, 11, …</span>',
        pasos: [
          '<span class="math">d = 17 − 20 = −3</span> (decreciente).',
          '<span class="math">a₇ = 20 + (−3)(6) = 20 − 18</span>.',
          '<span class="math">a₇ = 2</span>.'
        ],
        respuesta: '<span class="math">a₇ = 2</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Suma los primeros 10 números impares: <span class="math">1 + 3 + 5 + … + 19</span>.',
        pasos: [
          'Es aritmética con <span class="math">a₁ = 1</span>, <span class="math">d = 2</span> y <span class="math">a₁₀ = 1 + 2(9) = 19</span>.',
          '<span class="math">S₁₀ = 10/2 · (1 + 19) = 5 · 20</span>.',
          '<span class="math">S₁₀ = 100</span>. (Curiosidad: la suma de los primeros n impares siempre es n².)'
        ],
        respuesta: '<span class="math">S₁₀ = 100</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'En una sucesión aritmética <span class="math">a₅ = 17</span> y <span class="math">a₉ = 33</span>. Halla <span class="math">d</span>, <span class="math">a₁</span> y <span class="math">a₁₂</span>.',
        pasos: [
          '<span class="math">d = (33 − 17)/(9 − 5) = 16/4 = 4</span>.',
          '<span class="math">a₁ = a₅ − 4d = 17 − 16 = 1</span>.',
          '<span class="math">a₁₂ = 1 + 4(11) = 1 + 44 = 45</span>.',
          'Comprobación: <span class="math">a₉ = 1 + 4(8) = 33</span>. ✓'
        ],
        respuesta: '<span class="math">d = 4</span>, <span class="math">a₁ = 1</span> y <span class="math">a₁₂ = 45</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: '¿Cuántos términos tiene la sucesión <span class="math">6, 10, 14, …, 102</span>?',
        pasos: [
          '<span class="math">a₁ = 6</span>, <span class="math">d = 4</span>, último término <span class="math">aₙ = 102</span>.',
          '<span class="math">102 = 6 + 4(n − 1)</span>, luego <span class="math">96 = 4(n − 1)</span>.',
          '<span class="math">n − 1 = 24</span>, así que <span class="math">n = 25</span>.'
        ],
        respuesta: 'Tiene 25 términos.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Interpola 5 medios aritméticos entre 2 y 38.',
        pasos: [
          'Con <span class="math">k = 5</span> hay <span class="math">k + 1 = 6</span> saltos.',
          '<span class="math">d = (38 − 2)/6 = 36/6 = 6</span>.',
          'Suma 6 cada vez: <span class="math">2, 8, 14, 20, 26, 32, 38</span>.'
        ],
        respuesta: 'Los medios son <span class="math">8, 14, 20, 26, 32</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Un teatro de Santa Ana tiene 15 filas de butacas. La primera fila tiene 12 butacas y cada fila siguiente tiene 2 más que la anterior. ¿Cuántas butacas tiene el teatro?',
        pasos: [
          'Butacas por fila: <span class="math">12, 14, 16, …</span> con <span class="math">a₁ = 12</span>, <span class="math">d = 2</span>.',
          'Última fila: <span class="math">a₁₅ = 12 + 2(14) = 40</span>.',
          'Total: <span class="math">S₁₅ = 15/2 · (12 + 40) = 15/2 · 52</span>.',
          '<span class="math">S₁₅ = 15 · 26 = 390</span>.'
        ],
        respuesta: 'El teatro tiene 390 butacas (la última fila tiene 40).'
      },
      {
        nivel: 'dificil',
        enunciado: 'Calcula la suma de todos los múltiplos de 7 comprendidos entre 1 y 200.',
        pasos: [
          'Los múltiplos son <span class="math">7, 14, 21, …</span> y el mayor que no pasa de 200 es <span class="math">196</span> (porque <span class="math">7 · 28 = 196</span> y <span class="math">7 · 29 = 203</span>).',
          'Es aritmética con <span class="math">a₁ = 7</span>, <span class="math">d = 7</span>, <span class="math">aₙ = 196</span>. Cuenta los términos: <span class="math">n = (196 − 7)/7 + 1 = 27 + 1 = 28</span>.',
          '<span class="math">S₂₈ = 28/2 · (7 + 196) = 14 · 203</span>.',
          '<span class="math">S₂₈ = 2842</span>.'
        ],
        respuesta: 'La suma es 2842 (son 28 múltiplos).'
      },
      {
        nivel: 'dificil',
        enunciado: 'En una sucesión aritmética <span class="math">a₁ = 5</span> y la suma de los primeros 10 términos es 185. Halla la diferencia <span class="math">d</span> y el décimo término.',
        pasos: [
          'Usa la forma con <span class="math">d</span>: <span class="math">S₁₀ = 10/2 · (2 · 5 + d · 9) = 5(10 + 9d)</span>.',
          'Iguala a 185: <span class="math">5(10 + 9d) = 185</span>, luego <span class="math">10 + 9d = 37</span>.',
          '<span class="math">9d = 27</span> y <span class="math">d = 3</span>.',
          '<span class="math">a₁₀ = 5 + 3(9) = 32</span>. Comprueba: <span class="math">5 · (5 + 32) = 185</span>. ✓'
        ],
        respuesta: '<span class="math">d = 3</span> y <span class="math">a₁₀ = 32</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Tres números en sucesión aritmética suman 24 y su producto es 440. Hállalos.',
        pasos: [
          'Llama al término central <span class="math">x</span> y a la diferencia <span class="math">d</span>: los números son <span class="math">x − d</span>, <span class="math">x</span>, <span class="math">x + d</span>. Así la <em>d</em> se cancela al sumar.',
          'Suma: <span class="math">(x − d) + x + (x + d) = 3x = 24</span>, entonces <span class="math">x = 8</span>.',
          'Producto: <span class="math">(8 − d) · 8 · (8 + d) = 8(64 − d²) = 440</span>, luego <span class="math">64 − d² = 55</span> y <span class="math">d² = 9</span>.',
          'Por tanto <span class="math">d = 3</span> o <span class="math">d = −3</span>, y los números son <span class="math">5, 8, 11</span> (o en orden inverso <span class="math">11, 8, 5</span>).',
          'Comprobación: <span class="math">5 + 8 + 11 = 24</span> y <span class="math">5 · 8 · 11 = 440</span>. ✓'
        ],
        respuesta: 'Los números son 5, 8 y 11.'
      }
    ],
    teoricas: [
      {
        q: '¿Qué diferencia hay entre una sucesión y un conjunto de números?',
        a: 'En una sucesión el <strong>orden</strong> importa y los términos pueden repetirse (6, 6, 6, …). En un conjunto no importa el orden ni las repeticiones. Cada término de una sucesión está ligado a su posición: <span class="math">a₁, a₂, a₃, …</span>'
      },
      {
        q: '¿Por qué la fórmula del término general usa <span class="math">n − 1</span> y no <span class="math">n</span>?',
        a: 'Porque el primer término ya está dado: para llegar a la posición <span class="math">n</span> solo hay que dar <span class="math">n − 1</span> saltos de tamaño <span class="math">d</span>. Para <span class="math">n = 1</span> la fórmula da <span class="math">a₁ + 0 = a₁</span>, como debe ser.'
      },
      {
        q: '¿Qué le pasa a la sucesión si <span class="math">d &gt; 0</span>, si <span class="math">d &lt; 0</span> y si <span class="math">d = 0</span>?',
        a: 'Con <span class="math">d &gt; 0</span> es creciente, con <span class="math">d &lt; 0</span> es decreciente y con <span class="math">d = 0</span> es constante (todos los términos son iguales a <span class="math">a₁</span>).'
      },
      {
        q: 'Explica con tus palabras por qué <span class="math">Sₙ = n/2 · (a₁ + aₙ)</span>.',
        a: 'Al emparejar el primer término con el último, el segundo con el penúltimo, etc., cada pareja suma lo mismo que <span class="math">a₁ + aₙ</span>. Hay <span class="math">n/2</span> parejas, así que la suma total es <span class="math">n/2</span> veces <span class="math">(a₁ + aₙ)</span>. Si n es impar, el término del medio queda solo y es justo el promedio de los extremos, por lo que la fórmula sigue valiendo.'
      },
      {
        q: 'Al interpolar <span class="math">k</span> medios entre <span class="math">a</span> y <span class="math">b</span>, ¿por qué se divide entre <span class="math">k + 1</span>?',
        a: 'Porque entre los <span class="math">k + 2</span> términos de la lista completa hay <span class="math">k + 1</span> saltos iguales. Ejemplo: con 3 medios hay 5 términos y 4 saltos, no 3.'
      },
      {
        q: 'Al buscar la posición de un valor obtienes <span class="math">n = 12.5</span>. ¿Qué concluyes?',
        a: 'Que el valor <strong>no pertenece</strong> a la sucesión, porque las posiciones son enteros positivos. El valor quedaría «entre» los términos 12 y 13.'
      },
      {
        q: '¿Qué relación hay entre una sucesión aritmética y una función lineal?',
        a: 'La fórmula <span class="math">aₙ = dn + (a₁ − d)</span> es lineal en <span class="math">n</span>: los puntos <span class="math">(n, aₙ)</span> están sobre una recta de pendiente <span class="math">d</span>. La diferencia constante es la versión discreta de la pendiente.'
      },
      {
        q: 'Tienes una sucesión y no sabes si es aritmética o geométrica. ¿Qué haces?',
        a: 'Calculas las diferencias consecutivas <span class="math">aₙ − aₙ₋₁</span>. Si todas son iguales es aritmética. Si no, calculas los cocientes <span class="math">aₙ/aₙ₋₁</span>; si todos son iguales es geométrica. Si ninguna de las dos constantes aparece, no es ni una ni otra.'
      }
    ],
    errores: [
      'Usar <span class="math">n</span> en vez de <span class="math">n − 1</span>: escribir <span class="math">aₙ = a₁ + dn</span> corre todos los términos una posición. Comprueba siempre con <span class="math">n = 1</span>: debe dar <span class="math">a₁</span>.',
      'Al interpolar, dividir entre <span class="math">k</span> en lugar de entre <span class="math">k + 1</span>. Cuenta los saltos, no los números nuevos: con 4 medios son 5 saltos.',
      'Restar al revés: calcular <span class="math">d = aₙ₋₁ − aₙ</span> cambia el signo y convierte una sucesión creciente en decreciente. Resta siempre «el de adelante menos el de atrás».',
      'Dar por buena una posición no entera: si <span class="math">n = 19.6</span>, el número no es término de la sucesión. Tampoco confundas <span class="math">n/2</span> de la suma con la cantidad de términos: la cantidad es <span class="math">n</span>.'
    ],
    aplicacion: {
      titulo: 'Ahorro creciente para un viaje',
      html: `<p>Mario, estudiante de bachillerato en Santa Ana, abre una cuenta para ahorrar. El primer mes deposita $10 y cada mes aumenta su depósito en $5 (10, 15, 20, …).</p>
<p><strong>a) ¿Cuánto deposita el mes 24?</strong> Es aritmética con <span class="math">a₁ = 10</span> y <span class="math">d = 5</span>: <span class="math">a₂₄ = 10 + 5(23) = 125</span> dólares.</p>
<p><strong>b) ¿Cuánto lleva ahorrado en 2 años?</strong> <span class="math">S₂₄ = 24/2 · (10 + 125) = 12 · 135 = 1620</span> dólares.</p>
<p><strong>c) ¿En qué mes supera por primera vez los $500 ahorrados?</strong> Con la forma con <span class="math">d</span>: <span class="math">Sₙ = n/2 · (20 + 5(n − 1)) = (5n² + 15n)/2</span>. Compruebas valores cercanos: <span class="math">S₁₂ = 450</span> y <span class="math">S₁₃ = 520</span>. Es decir, al mes 13 ya supera los $500 (lleva $520).</p>
<p>La misma estructura sirve para filas de butacas, escalones de una escalera o cuotas que aumentan siempre en la misma cantidad.</p>`
    },
    calc: 'aritmetica',
    examen: [
      {
        tipo: 'num',
        q: 'Una sucesión aritmética tiene <span class="math">a₁ = 7</span> y <span class="math">d = 3</span>. Calcula <span class="math">a₂₀</span>.',
        r: 64, tol: 0.01,
        pasos: [
          'Usa <span class="math">aₙ = a₁ + d(n − 1)</span>.',
          '<span class="math">a₂₀ = 7 + 3(19) = 7 + 57</span>.',
          '<span class="math">a₂₀ = 64</span>.'
        ]
      },
      {
        tipo: 'num',
        q: 'En una sucesión aritmética <span class="math">a₄ = 14</span> y <span class="math">a₉ = 39</span>. Halla el primer término <span class="math">a₁</span>.',
        r: -1, tol: 0.01,
        pasos: [
          '<span class="math">d = (39 − 14)/(9 − 4) = 25/5 = 5</span>.',
          '<span class="math">a₁ = a₄ − 3d = 14 − 15</span>.',
          '<span class="math">a₁ = −1</span>. Comprobación: <span class="math">a₉ = −1 + 5(8) = 39</span>.'
        ]
      },
      {
        tipo: 'num',
        q: 'Calcula la suma de los primeros 12 términos de <span class="math">2, 5, 8, 11, …</span>',
        r: 222, tol: 0.01,
        pasos: [
          '<span class="math">a₁ = 2</span>, <span class="math">d = 3</span>, <span class="math">a₁₂ = 2 + 3(11) = 35</span>.',
          '<span class="math">S₁₂ = 12/2 · (2 + 35) = 6 · 37</span>.',
          '<span class="math">S₁₂ = 222</span>.'
        ]
      },
      {
        tipo: 'num',
        q: '¿Cuántos términos tiene la sucesión <span class="math">3, 8, 13, …, 183</span>?',
        r: 37, tol: 0.01,
        pasos: [
          '<span class="math">a₁ = 3</span>, <span class="math">d = 5</span>, <span class="math">aₙ = 183</span>.',
          '<span class="math">183 = 3 + 5(n − 1)</span>, luego <span class="math">180 = 5(n − 1)</span>.',
          '<span class="math">n − 1 = 36</span>, entonces <span class="math">n = 37</span>.'
        ]
      },
      {
        tipo: 'num',
        q: 'Se interpolan 4 medios aritméticos entre −5 y 20. ¿Cuál es el tercer medio (el tercero después de −5)?',
        r: 10, tol: 0.01,
        pasos: [
          'Hay <span class="math">4 + 1 = 5</span> saltos: <span class="math">d = (20 − (−5))/5 = 25/5 = 5</span>.',
          'La lista es <span class="math">−5, 0, 5, 10, 15, 20</span>.',
          'El tercer medio es <span class="math">10</span>.'
        ]
      },
      {
        tipo: 'lista',
        q: 'Interpola 3 medios aritméticos entre 10 y 34. Escribe los tres medios separados por comas.',
        r: [16, 22, 28], tol: 0.01,
        pasos: [
          'Con <span class="math">k = 3</span> hay 4 saltos.',
          '<span class="math">d = (34 − 10)/4 = 24/4 = 6</span>.',
          'La lista es <span class="math">10, 16, 22, 28, 34</span>; los medios son 16, 22 y 28.'
        ]
      },
      {
        tipo: 'par',
        q: 'En una sucesión aritmética <span class="math">a₃ = 1</span> y <span class="math">a₈ = −14</span>. Da el punto <span class="math">(a₁, d)</span>.',
        r: [7, -3], tol: 0.01,
        pasos: [
          '<span class="math">d = (−14 − 1)/(8 − 3) = −15/5 = −3</span>.',
          '<span class="math">a₁ = a₃ − 2d = 1 + 6 = 7</span>.',
          'Comprobación: <span class="math">a₈ = 7 + (−3)(7) = −14</span>. El punto es <span class="math">(7, −3)</span>.'
        ]
      },
      {
        tipo: 'opt',
        q: '¿Cuál de las siguientes sucesiones es aritmética?',
        opciones: [
          '<span class="math">2, 4, 8, 16, …</span>',
          '<span class="math">1, 4, 9, 16, …</span>',
          '<span class="math">10, 7, 4, 1, …</span>',
          '<span class="math">1, 1, 2, 3, …</span>'
        ],
        correcta: 2,
        pasos: [
          'Calcula las diferencias consecutivas de cada una.',
          '2, 4, 8, 16 tiene diferencias 2, 4, 8 (no constantes; es geométrica). 1, 4, 9, 16 tiene 3, 5, 7. 1, 1, 2, 3 tiene 0, 1, 1.',
          '10, 7, 4, 1 tiene siempre <span class="math">d = −3</span>: es aritmética.'
        ]
      },
      {
        tipo: 'opt',
        q: 'Una sucesión aritmética tiene <span class="math">a₁ = 50</span> y <span class="math">d = −4</span>. ¿Qué afirmación es verdadera?',
        opciones: [
          'Es creciente porque <span class="math">a₁</span> es positivo.',
          'Es decreciente porque <span class="math">d</span> es negativa.',
          'Es constante.',
          'Es geométrica con razón −4.'
        ],
        correcta: 1,
        pasos: [
          'Lo que decide si crece o decrece es el signo de <span class="math">d</span>, no el de <span class="math">a₁</span>.',
          'Con <span class="math">d = −4</span> cada término es 4 unidades menor: 50, 46, 42, …',
          'Es decreciente. Y la constante −4 se <em>suma</em>, no se multiplica, así que no es geométrica.'
        ]
      },
      {
        tipo: 'opt',
        q: 'Para interpolar 6 medios aritméticos entre dos números <span class="math">a</span> y <span class="math">b</span>, la diferencia es <span class="math">(b − a)</span> dividido entre…',
        opciones: ['5', '6', '8', '7'],
        correcta: 3,
        pasos: [
          'La lista completa tiene <span class="math">6 + 2 = 8</span> términos.',
          'Entre 8 términos hay 7 saltos iguales.',
          'Por eso <span class="math">d = (b − a)/(k + 1) = (b − a)/7</span>.'
        ]
      }
    ]
  };

  /* ============================================================
     TEMA 1.18 — SUCESIONES GEOMÉTRICAS
     ============================================================ */
  T['1.18'] = {
    id: '1.18',
    unidad: 6,
    titulo: 'Sucesiones geométricas',
    resumen: 'Aprende a trabajar con sucesiones donde se multiplica por una razón fija: términos, sumas, crecimiento y decaimiento.',
    objetivos: [
      'Reconocer una sucesión geométrica y calcular su razón r.',
      'Aplicar aₙ = a₁ · rⁿ⁻¹ para hallar términos, posiciones, a₁ y r.',
      'Calcular la suma parcial Sₙ y, como ampliación, la suma infinita cuando |r| < 1.',
      'Interpolar medios geométricos y modelar crecimiento y decaimiento (población, depreciación, interés compuesto).'
    ],
    teoria: [
      {
        titulo: 'Sucesión geométrica y razón',
        html: `<p>Una sucesión es <strong>geométrica</strong> cuando cada término se obtiene <em>multiplicando</em> el anterior por un número fijo, llamado <strong>razón</strong> y denotado <span class="math">r</span>:</p>
<p><span class="math">r = (aₙ)/(aₙ₋₁)</span> (para cualquier posición n ≥ 2)</p>
<p>Ejemplos:</p>
<ul>
<li><span class="math">3, 6, 12, 24, …</span> tiene <span class="math">r = 2</span> (se duplica).</li>
<li><span class="math">81, 27, 9, 3, …</span> tiene <span class="math">r = 1/3</span> (se reduce a la tercera parte).</li>
<li><span class="math">2, −6, 18, −54, …</span> tiene <span class="math">r = −3</span> (los signos se alternan).</li>
</ul>
<p><strong>Cómo comprobarlo:</strong> divide cada término entre el anterior. Si todos los cocientes coinciden, es geométrica. Se pide que <span class="math">a₁ ≠ 0</span> y <span class="math">r ≠ 0</span>; de lo contrario todos los términos serían 0 y no hay razón que calcular.</p>`
      },
      {
        titulo: 'Término general: aₙ = a₁ · rⁿ⁻¹',
        html: `<p>Igual que en las aritméticas, partimos de <span class="math">a₁</span>, pero ahora <em>multiplicamos</em> por <span class="math">r</span> varias veces:</p>
<table>
<tr><th>Término</th><th>Veces que multiplicamos por r</th><th>Valor</th></tr>
<tr><td><span class="math">a₂</span></td><td>1</td><td><span class="math">a₁ · r</span></td></tr>
<tr><td><span class="math">a₃</span></td><td>2</td><td><span class="math">a₁ · r²</span></td></tr>
<tr><td><span class="math">a₄</span></td><td>3</td><td><span class="math">a₁ · r³</span></td></tr>
<tr><td><span class="math">aₙ</span></td><td>n − 1</td><td><span class="math">a₁ · r<sup>n−1</sup></span></td></tr>
</table>
<p>Otra vez aparece <span class="math">n − 1</span>: el exponente es una unidad menos que la posición.</p>
<p><strong>Ejemplo:</strong> en <span class="math">3, 6, 12, …</span> el término 8 es <span class="math">a₈ = 3 · 2<sup>7</sup> = 3 · 128 = 384</span>.</p>
<p>Entre dos términos cualesquiera: <span class="math">aₘ = aₖ · r<sup>m−k</sup></span>. Para hallar <span class="math">r</span> divides <span class="math">aₘ</span> entre <span class="math">aₖ</span> y sacas la raíz de índice <span class="math">m − k</span>.</p>`
      },
      {
        titulo: 'Cómo se comporta según el valor de r',
        html: `<p>La razón controla toda la historia de la sucesión (supón <span class="math">a₁ &gt; 0</span>):</p>
<table>
<tr><th>Razón</th><th>Comportamiento</th><th>Ejemplo</th></tr>
<tr><td><span class="math">r &gt; 1</span></td><td>crece cada vez más rápido</td><td><span class="math">2, 6, 18, 54, …</span></td></tr>
<tr><td><span class="math">r = 1</span></td><td>constante</td><td><span class="math">5, 5, 5, …</span></td></tr>
<tr><td><span class="math">0 &lt; r &lt; 1</span></td><td>decrece y se acerca a 0</td><td><span class="math">80, 40, 20, 10, …</span></td></tr>
<tr><td><span class="math">r &lt; 0</span></td><td>los signos se <strong>alternan</strong></td><td><span class="math">4, −8, 16, −32, …</span></td></tr>
</table>
<p>Interpretación gráfica: los puntos <span class="math">(n, aₙ)</span> forman una <strong>curva exponencial</strong>, no una recta. Es la misma idea de la función <span class="math">f(x) = a<sup>x</sup></span> de la Unidad 4, pero evaluada solo en números naturales. Por eso <span class="math">aₙ = a₁ · r<sup>n−1</sup></span> modela cualquier cosa que cambia <em>en porcentaje constante</em>.</p>`
      },
      {
        titulo: 'Suma parcial Sₙ',
        html: `<p>Para sumar <span class="math">Sₙ = a₁ + a₁r + a₁r² + … + a₁r<sup>n−1</sup></span> usamos un truco: multiplicar por <span class="math">r</span> y restar.</p>
<ol>
<li><span class="math">Sₙ = a₁ + a₁r + a₁r² + … + a₁r<sup>n−1</sup></span></li>
<li><span class="math">r · Sₙ = a₁r + a₁r² + … + a₁r<sup>n−1</sup> + a₁rⁿ</span></li>
<li>Resta (2) − (1): casi todo se cancela y queda <span class="math">rSₙ − Sₙ = a₁rⁿ − a₁</span>.</li>
<li>Factoriza: <span class="math">Sₙ(r − 1) = a₁(rⁿ − 1)</span>.</li>
</ol>
<p>Despejando (para <span class="math">r ≠ 1</span>):</p>
<p><span class="math">Sₙ = a₁ · (rⁿ − 1)/(r − 1)</span></p>
<p>Equivale a <span class="math">a₁ · (1 − rⁿ)/(1 − r)</span>. Usa la primera cuando <span class="math">r &gt; 1</span> (todo queda positivo) y la segunda cuando <span class="math">r &lt; 1</span>.</p>
<p><strong>Caso especial:</strong> si <span class="math">r = 1</span> todos los términos valen <span class="math">a₁</span> y simplemente <span class="math">Sₙ = n · a₁</span> (la fórmula daría <span class="math">0/0</span>).</p>`
      },
      {
        titulo: 'Hallar a₁ y r, ubicar un valor e interpolar medios geométricos',
        html: `<p><strong>Con dos términos conocidos:</strong> divide: <span class="math">aₘ/aₖ = r<sup>m−k</sup></span>. Obtienes <span class="math">r</span> con una raíz y luego <span class="math">a₁ = aₖ/r<sup>k−1</sup></span>.</p>
<p>Ojo: si el índice <span class="math">m − k</span> es par, la raíz puede dar dos valores (<span class="math">±</span>), y hay dos sucesiones posibles salvo que el enunciado diga más (por ejemplo «términos positivos»).</p>
<p><strong>¿Qué término vale tal número?</strong> Resuelve <span class="math">a₁ · r<sup>n−1</sup> = v</span>: llega a una ecuación exponencial, que resuelves igualando bases (Unidad 4) o con logaritmos (Unidad 5).</p>
<p><strong>Interpolar <span class="math">k</span> medios geométricos entre <span class="math">a</span> y <span class="math">b</span>:</strong> la lista completa tiene <span class="math">k + 2</span> términos, es decir <span class="math">k + 1</span> saltos multiplicativos, entonces</p>
<p><span class="math">r<sup>k+1</sup> = b/a</span></p>
<p><strong>Ejemplo:</strong> 3 medios entre 2 y 32: <span class="math">r⁴ = 32/2 = 16</span>, así que <span class="math">r = 2</span> (o <span class="math">r = −2</span>). Con <span class="math">r = 2</span>: <span class="math">2, 4, 8, 16, 32</span>.</p>
<p>Un solo medio geométrico entre <span class="math">a</span> y <span class="math">b</span> es <span class="math">±√(ab)</span>.</p>`
      },
      {
        titulo: 'Crecimiento y decaimiento en la vida real',
        html: `<p>Siempre que algo aumenta o disminuye <strong>un porcentaje fijo</strong> en cada período, obtienes una sucesión geométrica. La razón se construye así:</p>
<ul>
<li><strong>Aumenta un p %:</strong> <span class="math">r = 1 + p/100</span>. Ejemplo: sube 5 % → <span class="math">r = 1.05</span>.</li>
<li><strong>Disminuye un p %:</strong> <span class="math">r = 1 − p/100</span>. Ejemplo: baja 20 % → <span class="math">r = 0.80</span> (se conserva el 80 %).</li>
</ul>
<p><strong>Interés compuesto.</strong> Si depositas un capital <span class="math">C</span> a una tasa anual <span class="math">i</span> (en forma decimal), después de <span class="math">t</span> años tienes <span class="math">C(1 + i)<sup>t</sup></span>. Es una sucesión geométrica de razón <span class="math">1 + i</span>.</p>
<p><strong>Población.</strong> Una ciudad que crece 3 % anual multiplica su población por 1.03 cada año.</p>
<p><strong>Depreciación.</strong> Un vehículo que pierde 15 % de su valor cada año se multiplica por 0.85.</p>
<p>Cuidado con el índice: si <span class="math">a₁</span> es el valor <em>al final del primer período</em>, el valor después de <span class="math">t</span> períodos es <span class="math">a<sub>t</sub> = a₁ · r<sup>t−1</sup></span>; si en cambio partes del valor inicial <span class="math">V₀</span> (período 0), el valor es <span class="math">V₀ · r<sup>t</sup></span>.</p>`
      },
      {
        titulo: 'Ampliación: suma de infinitos términos',
        html: `<p>¿Se puede sumar una cantidad infinita de términos y obtener un número finito? Sí, cuando los términos se hacen cada vez más pequeños, es decir cuando <span class="math">|r| &lt; 1</span>.</p>
<p>En <span class="math">Sₙ = a₁(1 − rⁿ)/(1 − r)</span>, si <span class="math">|r| &lt; 1</span> la potencia <span class="math">rⁿ</span> se acerca a 0 al hacer <span class="math">n</span> muy grande. Queda:</p>
<p><span class="math">S = a₁/(1 − r)</span> (solo si <span class="math">|r| &lt; 1</span>)</p>
<p><strong>Ejemplo:</strong> <span class="math">1 + 1/2 + 1/4 + 1/8 + …</span> tiene <span class="math">a₁ = 1</span>, <span class="math">r = 1/2</span>, y suma <span class="math">1/(1 − 1/2) = 2</span>. Imagina una barra de 2 metros: pones 1 m, luego medio metro, luego un cuarto… te acercas a los 2 m sin pasarte.</p>
<p>Si <span class="math">|r| ≥ 1</span> los términos no se hacen pequeños y la suma infinita <strong>no existe</strong> (crece sin límite o oscila).</p>
<p><strong>Aplicación curiosa:</strong> <span class="math">0.333… = 0.3 + 0.03 + 0.003 + …</span> es geométrica con <span class="math">a₁ = 0.3</span>, <span class="math">r = 0.1</span>, así que vale <span class="math">0.3/0.9 = 1/3</span>. Así se convierte un decimal periódico en fracción.</p>`
      },
      {
        titulo: 'Aritmética o geométrica: cómo distinguirlas',
        html: `<p>Observa cómo pasas de un término al siguiente:</p>
<table>
<tr><th></th><th>Aritmética</th><th>Geométrica</th></tr>
<tr><td>Operación</td><td>se <strong>suma</strong> siempre lo mismo</td><td>se <strong>multiplica</strong> por lo mismo</td></tr>
<tr><td>Constante</td><td><span class="math">d = aₙ − aₙ₋₁</span></td><td><span class="math">r = (aₙ)/(aₙ₋₁)</span></td></tr>
<tr><td>Término general</td><td><span class="math">a₁ + d(n − 1)</span></td><td><span class="math">a₁ · r<sup>n−1</sup></span></td></tr>
<tr><td>Crecimiento</td><td>lineal (recta)</td><td>exponencial (curva)</td></tr>
<tr><td>Ejemplo</td><td><span class="math">3, 7, 11, 15, …</span></td><td><span class="math">3, 6, 12, 24, …</span></td></tr>
</table>
<p><strong>Procedimiento:</strong> (1) calcula restas consecutivas; si son todas iguales, aritmética. (2) Si no, calcula divisiones consecutivas; si son todas iguales, geométrica. (3) Si no se cumple ninguna, no es ni una ni otra.</p>
<p>Una sucesión constante como <span class="math">4, 4, 4, …</span> es aritmética con <span class="math">d = 0</span> <em>y</em> geométrica con <span class="math">r = 1</span>: el único caso en que ambas coinciden. Puedes comprobar tus resultados con la calculadora de este tema.</p>`
      }
    ],
    formulas: [
      { label: 'Razón', html: '<span class="math">r = (aₙ)/(aₙ₋₁)</span>' },
      { label: 'Término general', html: '<span class="math">aₙ = a₁ · r<sup>n−1</sup></span>' },
      { label: 'Entre dos términos', html: '<span class="math">aₘ = aₖ · r<sup>m−k</sup></span>' },
      { label: 'Suma parcial (r ≠ 1)', html: '<span class="math">Sₙ = a₁ · (rⁿ − 1)/(r − 1)</span>' },
      { label: 'Suma parcial (r = 1)', html: '<span class="math">Sₙ = n · a₁</span>' },
      { label: 'Interpolar k medios', html: '<span class="math">r<sup>k+1</sup> = b/a</span>' },
      { label: 'Interés compuesto', html: '<span class="math">M = C(1 + i)<sup>t</sup></span>' },
      { label: 'Suma infinita (|r| < 1)', html: '<span class="math">S = a₁/(1 − r)</span>' }
    ],
    ejemplos: [
      {
        titulo: 'Razón y término general',
        enunciado: 'Comprueba que <span class="math">3, 6, 12, 24, …</span> es geométrica y calcula <span class="math">a₈</span>.',
        pasos: [
          'Divide cada término entre el anterior: <span class="math">6/3 = 2</span>, <span class="math">12/6 = 2</span>, <span class="math">24/12 = 2</span>. Siempre 2, así que <span class="math">r = 2</span>.',
          'Fórmula: <span class="math">a₈ = a₁ · r<sup>8−1</sup> = 3 · 2<sup>7</sup></span>.',
          '<span class="math">2<sup>7</sup> = 128</span>, entonces <span class="math">a₈ = 3 · 128 = 384</span>.'
        ],
        respuesta: '<span class="math">r = 2</span> y <span class="math">a₈ = 384</span>.'
      },
      {
        titulo: 'Razón fraccionaria',
        enunciado: 'Halla el sexto término de <span class="math">81, 27, 9, 3, …</span>',
        pasos: [
          '<span class="math">r = 27/81 = 1/3</span> (compruebo: <span class="math">9/27 = 1/3</span>).',
          '<span class="math">a₆ = 81 · (1/3)⁵</span>.',
          '<span class="math">(1/3)⁵ = 1/243</span>, así que <span class="math">a₆ = 81/243</span>.',
          'Simplifica dividiendo entre 81: <span class="math">a₆ = 1/3</span>.'
        ],
        respuesta: '<span class="math">a₆ = 1/3</span>.'
      },
      {
        titulo: 'Hallar r y a₁ con dos términos',
        enunciado: 'En una sucesión geométrica de términos positivos, <span class="math">a₂ = 6</span> y <span class="math">a₅ = 162</span>. Halla <span class="math">r</span>, <span class="math">a₁</span> y <span class="math">a₇</span>.',
        pasos: [
          'Divide: <span class="math">a₅/a₂ = r³</span>, es decir <span class="math">162/6 = 27 = r³</span>.',
          'Entonces <span class="math">r = 3</span> (la raíz cúbica de 27).',
          '<span class="math">a₁ = a₂/r = 6/3 = 2</span>.',
          '<span class="math">a₇ = 2 · 3⁶ = 2 · 729 = 1458</span>.',
          'Comprobación: <span class="math">a₅ = 2 · 3⁴ = 162</span>. ✓'
        ],
        respuesta: '<span class="math">r = 3</span>, <span class="math">a₁ = 2</span> y <span class="math">a₇ = 1458</span>.'
      },
      {
        titulo: 'Suma de los primeros términos',
        enunciado: 'Calcula la suma de los primeros 6 términos de <span class="math">2, 6, 18, 54, …</span>',
        pasos: [
          '<span class="math">a₁ = 2</span>, <span class="math">r = 6/2 = 3</span>, <span class="math">n = 6</span>.',
          'Como <span class="math">r &gt; 1</span>, usa <span class="math">Sₙ = a₁ · (rⁿ − 1)/(r − 1)</span>.',
          '<span class="math">S₆ = 2 · (3⁶ − 1)/(3 − 1) = 2 · (729 − 1)/2</span>.',
          '<span class="math">S₆ = 728</span>.',
          'Verifica sumando: <span class="math">2 + 6 + 18 + 54 + 162 + 486 = 728</span>. ✓'
        ],
        respuesta: '<span class="math">S₆ = 728</span>.'
      },
      {
        titulo: 'Interpolar medios geométricos',
        enunciado: 'Interpola 3 medios geométricos entre 2 y 32.',
        pasos: [
          'Hay <span class="math">k + 1 = 4</span> saltos, así que <span class="math">r⁴ = 32/2 = 16</span>.',
          'Entonces <span class="math">r = 2</span> o <span class="math">r = −2</span> (ambas elevadas a la 4 dan 16).',
          'Con <span class="math">r = 2</span>: <span class="math">2, 4, 8, 16, 32</span>.',
          'Con <span class="math">r = −2</span>: <span class="math">2, −4, 8, −16, 32</span>.'
        ],
        respuesta: 'Medios: <span class="math">4, 8, 16</span> (con <span class="math">r = 2</span>) o <span class="math">−4, 8, −16</span> (con <span class="math">r = −2</span>).'
      },
      {
        titulo: 'Depreciación de una moto (contexto real)',
        enunciado: 'Una moto nueva cuesta $2000 y pierde 20 % de su valor cada año. ¿Cuánto vale al cabo de 5 años?',
        pasos: [
          'Pierde 20 %, así que conserva 80 %: <span class="math">r = 0.8</span>.',
          'El valor al final del año 1 es <span class="math">a₁ = 2000 · 0.8 = 1600</span>.',
          'Al final del año 5: <span class="math">a₅ = 1600 · 0.8⁴</span>.',
          '<span class="math">0.8⁴ = 0.4096</span>, luego <span class="math">a₅ = 1600 · 0.4096 = 655.36</span>.',
          'Es lo mismo que <span class="math">2000 · 0.8⁵ = 655.36</span> (partiendo del valor inicial).'
        ],
        respuesta: 'Después de 5 años vale $655.36.'
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: 'En <span class="math">5, 10, 20, 40, …</span> halla la razón y el séptimo término.',
        pasos: [
          '<span class="math">r = 10/5 = 2</span>.',
          '<span class="math">a₇ = 5 · 2⁶ = 5 · 64</span>.',
          '<span class="math">a₇ = 320</span>.'
        ],
        respuesta: '<span class="math">r = 2</span> y <span class="math">a₇ = 320</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Una sucesión geométrica tiene <span class="math">a₁ = 3</span> y <span class="math">r = −2</span>. Calcula <span class="math">a₅</span>.',
        pasos: [
          '<span class="math">a₅ = 3 · (−2)⁴</span>.',
          '<span class="math">(−2)⁴ = 16</span> (exponente par: el resultado es positivo).',
          '<span class="math">a₅ = 3 · 16 = 48</span>.'
        ],
        respuesta: '<span class="math">a₅ = 48</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Halla el quinto término de <span class="math">1000, 100, 10, 1, …</span>',
        pasos: [
          '<span class="math">r = 100/1000 = 1/10</span>.',
          '<span class="math">a₅ = 1000 · (1/10)⁴ = 1000/10000</span>.',
          '<span class="math">a₅ = 0.1</span>. (Es lo natural: 1000, 100, 10, 1, 0.1.)'
        ],
        respuesta: '<span class="math">a₅ = 0.1</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Decide si <span class="math">4, 12, 36, 108, …</span> es aritmética o geométrica y escribe el siguiente término.',
        pasos: [
          'Restas: <span class="math">12 − 4 = 8</span>, <span class="math">36 − 12 = 24</span>. No son iguales, no es aritmética.',
          'Cocientes: <span class="math">12/4 = 3</span>, <span class="math">36/12 = 3</span>, <span class="math">108/36 = 3</span>. Es geométrica con <span class="math">r = 3</span>.',
          'El siguiente es <span class="math">108 · 3 = 324</span>.'
        ],
        respuesta: 'Es geométrica con <span class="math">r = 3</span>; el siguiente término es 324.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'En una sucesión geométrica <span class="math">a₃ = 12</span> y <span class="math">a₆ = 96</span>. Halla <span class="math">r</span>, <span class="math">a₁</span> y <span class="math">a₁₀</span>.',
        pasos: [
          '<span class="math">a₆/a₃ = r³ = 96/12 = 8</span>, entonces <span class="math">r = 2</span>.',
          '<span class="math">a₁ = a₃/r² = 12/4 = 3</span>.',
          '<span class="math">a₁₀ = 3 · 2⁹ = 3 · 512 = 1536</span>.'
        ],
        respuesta: '<span class="math">r = 2</span>, <span class="math">a₁ = 3</span> y <span class="math">a₁₀ = 1536</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Calcula la suma de los primeros 6 términos de la sucesión geométrica con <span class="math">a₁ = 5</span> y <span class="math">r = 3</span>.',
        pasos: [
          '<span class="math">S₆ = 5 · (3⁶ − 1)/(3 − 1)</span>.',
          '<span class="math">3⁶ = 729</span>, entonces <span class="math">S₆ = 5 · 728/2 = 5 · 364</span>.',
          '<span class="math">S₆ = 1820</span>.'
        ],
        respuesta: '<span class="math">S₆ = 1820</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: '¿Qué posición ocupa el número 768 en la sucesión <span class="math">3, 6, 12, 24, …</span>?',
        pasos: [
          '<span class="math">a₁ = 3</span> y <span class="math">r = 2</span>. Plantea <span class="math">3 · 2<sup>n−1</sup> = 768</span>.',
          'Divide entre 3: <span class="math">2<sup>n−1</sup> = 256</span>.',
          'Como <span class="math">256 = 2⁸</span>, igualando exponentes <span class="math">n − 1 = 8</span>.',
          '<span class="math">n = 9</span>.'
        ],
        respuesta: '768 es el noveno término.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Interpola 2 medios geométricos entre 5 y 135.',
        pasos: [
          'Hay <span class="math">k + 1 = 3</span> saltos: <span class="math">r³ = 135/5 = 27</span>.',
          '<span class="math">r = 3</span> (la raíz cúbica es única).',
          'La lista es <span class="math">5, 15, 45, 135</span>.'
        ],
        respuesta: 'Los medios son 15 y 45.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Convierte el decimal periódico <span class="math">0.777…</span> en fracción usando la suma de una serie geométrica infinita.',
        pasos: [
          'Escribe <span class="math">0.777… = 0.7 + 0.07 + 0.007 + …</span>',
          'Es geométrica con <span class="math">a₁ = 0.7</span> y <span class="math">r = 0.1</span>, y como <span class="math">|r| &lt; 1</span> la suma existe.',
          '<span class="math">S = a₁/(1 − r) = 0.7/0.9</span>.',
          '<span class="math">S = 7/9</span>. Comprobación: <span class="math">7 ÷ 9 = 0.777…</span>'
        ],
        respuesta: '<span class="math">0.777… = 7/9</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Una pelota se deja caer desde 8 m de altura. Cada vez que rebota sube 3/4 de la altura de la que cayó. ¿Qué distancia total recorre hasta detenerse (idealmente, con infinitos rebotes)?',
        pasos: [
          'Primero cae 8 m. Luego, en cada rebote sube y vuelve a caer la misma distancia.',
          'Alturas de subida: <span class="math">6, 4.5, 3.375, …</span> geométrica con <span class="math">a₁ = 6</span> y <span class="math">r = 3/4</span>.',
          'Suma de subidas: <span class="math">6/(1 − 3/4) = 6/(1/4) = 24</span> m.',
          'Cada subida tiene su bajada igual: <span class="math">2 · 24 = 48</span> m.',
          'Total: <span class="math">8 + 48 = 56</span> m.'
        ],
        respuesta: 'Recorre 56 m en total.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Tres números positivos en sucesión geométrica suman 14 y su producto es 64. Hállalos.',
        pasos: [
          'Escríbelos como <span class="math">x/r</span>, <span class="math">x</span> y <span class="math">xr</span>. El producto es <span class="math">x³ = 64</span>, así que <span class="math">x = 4</span>.',
          'La suma: <span class="math">4/r + 4 + 4r = 14</span>, luego <span class="math">4/r + 4r = 10</span>.',
          'Multiplica por <span class="math">r</span>: <span class="math">4 + 4r² = 10r</span>, es decir <span class="math">2r² − 5r + 2 = 0</span>.',
          'Factoriza: <span class="math">(2r − 1)(r − 2) = 0</span>, entonces <span class="math">r = 1/2</span> o <span class="math">r = 2</span>.',
          'Con <span class="math">r = 2</span>: <span class="math">2, 4, 8</span> (con <span class="math">r = 1/2</span> es la misma lista al revés). Comprueba: <span class="math">2 + 4 + 8 = 14</span> y <span class="math">2 · 4 · 8 = 64</span>.'
        ],
        respuesta: 'Los números son 2, 4 y 8.'
      }
    ],
    teoricas: [
      {
        q: '¿Cuál es la diferencia esencial entre una sucesión aritmética y una geométrica?',
        a: 'En la aritmética se <strong>suma</strong> una constante <span class="math">d</span> para pasar al siguiente término; en la geométrica se <strong>multiplica</strong> por una constante <span class="math">r</span>. La primera crece de forma lineal y la segunda de forma exponencial.'
      },
      {
        q: '¿Por qué no se permite <span class="math">r = 0</span> ni <span class="math">a₁ = 0</span>?',
        a: 'Si <span class="math">a₁ = 0</span> todos los términos son 0. Si <span class="math">r = 0</span>, a partir del segundo término todo es 0. En ambos casos no se puede calcular la razón dividiendo <span class="math">aₙ/aₙ₋₁</span> (habría división entre 0) y la sucesión no tiene un patrón útil.'
      },
      {
        q: '¿Qué ocurre con los términos cuando <span class="math">r &lt; 0</span>?',
        a: 'Los signos se alternan: positivo, negativo, positivo, … porque una potencia con base negativa cambia de signo según el exponente sea par o impar. El valor absoluto crece si <span class="math">|r| &gt; 1</span> y decrece si <span class="math">|r| &lt; 1</span>.'
      },
      {
        q: 'Explica cómo se deduce <span class="math">Sₙ = a₁(rⁿ − 1)/(r − 1)</span>.',
        a: 'Se escribe <span class="math">Sₙ</span> y <span class="math">rSₙ</span> una debajo de la otra: casi todos los términos coinciden y al restar solo sobreviven <span class="math">a₁rⁿ</span> y <span class="math">−a₁</span>. Queda <span class="math">Sₙ(r − 1) = a₁(rⁿ − 1)</span> y se despeja. Se necesita <span class="math">r ≠ 1</span> para poder dividir entre <span class="math">r − 1</span>.'
      },
      {
        q: '¿Qué pasa con la suma parcial si <span class="math">r = 1</span>?',
        a: 'Todos los términos valen <span class="math">a₁</span>, de modo que <span class="math">Sₙ = n · a₁</span>. La fórmula general no sirve porque daría <span class="math">0/0</span>.'
      },
      {
        q: '¿Cuándo existe la suma de infinitos términos y a qué valor tiende?',
        a: 'Existe solo si <span class="math">|r| &lt; 1</span>, porque entonces <span class="math">rⁿ</span> tiende a 0. Su valor es <span class="math">S = a₁/(1 − r)</span>. Con <span class="math">|r| ≥ 1</span> los términos no se hacen pequeños y la suma crece sin límite o no se estabiliza.'
      },
      {
        q: 'Un dato crece 6 % por año. ¿Cuál es la razón de la sucesión y por qué no es 0.06?',
        a: 'La razón es <span class="math">r = 1.06</span>. Crecer 6 % significa conservar el 100 % que ya había y agregar 6 %, o sea multiplicar por 1 + 0.06. Usar 0.06 equivaldría a quedarse solo con el 6 % del valor anterior.'
      },
      {
        q: 'Interpolas 1 medio geométrico entre 4 y 36 y obtienes dos respuestas. ¿Por qué?',
        a: 'Porque <span class="math">r² = 36/4 = 9</span> tiene dos soluciones, <span class="math">r = 3</span> y <span class="math">r = −3</span>. El medio es <span class="math">4 · 3 = 12</span> o <span class="math">4 · (−3) = −12</span>. Ambas listas, <span class="math">4, 12, 36</span> y <span class="math">4, −12, 36</span>, son geométricas.'
      }
    ],
    errores: [
      'Meter el primer término dentro de la potencia: escribir <span class="math">(a₁ · r)<sup>n−1</sup></span> en vez de <span class="math">a₁ · r<sup>n−1</sup></span>. Primero se calcula la potencia de <span class="math">r</span> y después se multiplica por <span class="math">a₁</span>.',
      'Usar la regla aritmética por costumbre: restar términos para hallar la razón. En una geométrica se <em>divide</em> (<span class="math">r = aₙ/aₙ₋₁</span>) y el exponente es <span class="math">n − 1</span>, no <span class="math">n</span>.',
      'Convertir mal los porcentajes: un descenso del 20 % es <span class="math">r = 0.8</span>, no 0.2; un aumento del 5 % es <span class="math">r = 1.05</span>, no 0.05.',
      'Aplicar <span class="math">S = a₁/(1 − r)</span> cuando <span class="math">|r| ≥ 1</span>, o perder soluciones al resolver <span class="math">r² = 9</span> (hay <span class="math">r = 3</span> y <span class="math">r = −3</span>) olvidando el signo ±.'
    ],
    aplicacion: {
      titulo: 'Interés compuesto en una cooperativa',
      html: `<p>Carmen deposita $1500 en una cooperativa de ahorro que paga 4 % de interés anual compuesto (los intereses se suman al capital cada año). Los saldos al final de cada año forman una sucesión geométrica con razón <span class="math">r = 1.04</span>.</p>
<p><strong>a) Saldo después de 10 años.</strong> <span class="math">M = 1500 · 1.04¹⁰</span>. Como <span class="math">1.04¹⁰ ≈ 1.480244</span>, resulta <span class="math">M ≈ 2220.37</span> dólares.</p>
<p><strong>b) Interés ganado:</strong> <span class="math">2220.37 − 1500 = 720.37</span> dólares.</p>
<p><strong>c) ¿Cuántos años tarda en duplicarse?</strong> Hay que cumplir <span class="math">1.04<sup>t</sup> ≥ 2</span>. Con logaritmos: <span class="math">t ≥ log 2/log 1.04 ≈ 17.67</span>. Como el interés se acredita por año completo, tarda <strong>18 años</strong> (en 17 años solo tendría <span class="math">1500 · 1.04¹⁷ ≈ 2922</span>, menos de $3000; en 18, <span class="math">≈ 3039</span>).</p>
<p>Observa la diferencia con el interés simple (aritmético): con 4 % simple ganaría $60 fijos cada año y tendría <span class="math">1500 + 60 · 10 = 2100</span> en 10 años. El crecimiento geométrico supera al lineal, y la diferencia se agranda con el tiempo.</p>`
    },
    calc: 'geometrica',
    examen: [
      {
        tipo: 'num',
        q: 'Una sucesión geométrica tiene <span class="math">a₁ = 2</span> y <span class="math">r = 3</span>. Calcula <span class="math">a₅</span>.',
        r: 162, tol: 0.01,
        pasos: [
          'Fórmula: <span class="math">aₙ = a₁ · r<sup>n−1</sup></span>.',
          '<span class="math">a₅ = 2 · 3⁴ = 2 · 81</span>.',
          '<span class="math">a₅ = 162</span>.'
        ]
      },
      {
        tipo: 'num',
        q: 'Calcula el noveno término de <span class="math">64, 32, 16, 8, …</span> (escríbelo como decimal).',
        r: 0.25, tol: 0.001,
        pasos: [
          '<span class="math">r = 32/64 = 1/2</span>.',
          '<span class="math">a₉ = 64 · (1/2)⁸ = 64/256</span>.',
          '<span class="math">a₉ = 1/4 = 0.25</span>.'
        ]
      },
      {
        tipo: 'num',
        q: 'En una sucesión geométrica de razón positiva, <span class="math">a₂ = 12</span> y <span class="math">a₄ = 48</span>. Calcula <span class="math">a₇</span>.',
        r: 384, tol: 0.01,
        pasos: [
          '<span class="math">a₄/a₂ = r² = 48/12 = 4</span>, y como <span class="math">r &gt; 0</span>, <span class="math">r = 2</span>.',
          '<span class="math">a₁ = a₂/r = 12/2 = 6</span>.',
          '<span class="math">a₇ = 6 · 2⁶ = 6 · 64 = 384</span>.'
        ]
      },
      {
        tipo: 'num',
        q: 'Calcula la suma de los primeros 5 términos de <span class="math">3, 6, 12, 24, …</span>',
        r: 93, tol: 0.01,
        pasos: [
          '<span class="math">a₁ = 3</span>, <span class="math">r = 2</span>, <span class="math">n = 5</span>.',
          '<span class="math">S₅ = 3 · (2⁵ − 1)/(2 − 1) = 3 · 31/1</span>.',
          '<span class="math">S₅ = 93</span>. (Verifica: 3 + 6 + 12 + 24 + 48 = 93.)'
        ]
      },
      {
        tipo: 'num',
        q: 'Se interpolan 2 medios geométricos entre 8 y 216. ¿Cuál es el segundo medio (el segundo después de 8)?',
        r: 72, tol: 0.01,
        pasos: [
          'Hay 3 saltos: <span class="math">r³ = 216/8 = 27</span>, luego <span class="math">r = 3</span>.',
          'La lista es <span class="math">8, 24, 72, 216</span>.',
          'El segundo medio es <span class="math">72</span>.'
        ]
      },
      {
        tipo: 'num',
        q: 'Calcula la suma infinita <span class="math">18 + 6 + 2 + 2/3 + …</span>',
        r: 27, tol: 0.01,
        pasos: [
          '<span class="math">a₁ = 18</span> y <span class="math">r = 6/18 = 1/3</span>. Como <span class="math">|r| &lt; 1</span>, la suma existe.',
          '<span class="math">S = a₁/(1 − r) = 18/(1 − 1/3) = 18/(2/3)</span>.',
          '<span class="math">S = 18 · 3/2 = 27</span>.'
        ]
      },
      {
        tipo: 'num',
        q: 'Un equipo de $5000 pierde 10 % de su valor cada año. ¿Cuántos dólares vale al cabo de 3 años?',
        r: 3645, tol: 0.01,
        pasos: [
          'Pierde 10 %, conserva 90 %: <span class="math">r = 0.9</span>.',
          'Valor después de 3 años: <span class="math">5000 · 0.9³</span>.',
          '<span class="math">0.9³ = 0.729</span>, entonces <span class="math">5000 · 0.729 = 3645</span>.'
        ]
      },
      {
        tipo: 'lista',
        q: 'Escribe los dos posibles valores de un medio geométrico entre 4 y 36, separados por coma.',
        r: [12, -12], tol: 0.01,
        pasos: [
          'Con un solo medio hay 2 saltos: <span class="math">r² = 36/4 = 9</span>.',
          'Entonces <span class="math">r = 3</span> o <span class="math">r = −3</span>.',
          'El medio es <span class="math">4 · 3 = 12</span> o <span class="math">4 · (−3) = −12</span>.'
        ]
      },
      {
        tipo: 'opt',
        q: '¿Cuál de las siguientes sucesiones es geométrica?',
        opciones: [
          '<span class="math">2, 5, 8, 11, …</span>',
          '<span class="math">3, 9, 27, 81, …</span>',
          '<span class="math">1, 2, 3, 4, …</span>',
          '<span class="math">10, 8, 6, 4, …</span>'
        ],
        correcta: 1,
        pasos: [
          'Calcula los cocientes consecutivos.',
          'Las demás tienen diferencia constante (3, 1 y −2): son aritméticas.',
          '3, 9, 27, 81 tiene <span class="math">9/3 = 27/9 = 81/27 = 3</span>: es geométrica con <span class="math">r = 3</span>.'
        ]
      },
      {
        tipo: 'opt',
        q: '¿Para cuál de estas razones existe la suma de infinitos términos de una sucesión geométrica?',
        opciones: ['<span class="math">r = −0.4</span>', '<span class="math">r = 1.5</span>', '<span class="math">r = −1</span>', '<span class="math">r = 2</span>'],
        correcta: 0,
        pasos: [
          'La suma infinita existe solo si <span class="math">|r| &lt; 1</span>.',
          '<span class="math">|1.5| &gt; 1</span>, <span class="math">|−1| = 1</span> y <span class="math">|2| &gt; 1</span> no cumplen.',
          '<span class="math">|−0.4| = 0.4 &lt; 1</span> sí cumple.'
        ]
      }
    ]
  };
})();

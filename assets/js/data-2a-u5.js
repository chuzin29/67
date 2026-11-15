/* data-2a-u5.js — Unidad 5: Funciones II */
(function () {
  var T = (window.CURSO_2A = window.CURSO_2A || { temas: {} }).temas;

  /* ====================================================================== */
  /* TEMA 1.13 — Clasificación de funciones                                 */
  /* ====================================================================== */
  T['1.13'] = {
    id: '1.13',
    unidad: 5,
    titulo: 'Clasificación de funciones: inyectiva, sobreyectiva y biyectiva',
    resumen: 'Distingue funciones inyectivas, sobreyectivas y biyectivas y aprende a restringir dominio y codominio para lograrlo.',
    objetivos: [
      'Identificar dominio, codominio y rango de una función a partir de su regla o de su gráfica.',
      'Determinar si una función es inyectiva usando la prueba de la recta horizontal y la demostración algebraica.',
      'Decidir si una función es sobreyectiva comparando su rango con el codominio.',
      'Convertir una función en biyectiva restringiendo su dominio y ajustando su codominio.'
    ],
    teoria: [
      {
        titulo: 'Repaso: dominio, codominio y rango',
        html: `<p>Una <strong>función</strong> <span class="math">f: A → B</span> asigna a <em>cada</em> elemento <span class="math">x</span> del conjunto <span class="math">A</span> exactamente un elemento <span class="math">f(x)</span> del conjunto <span class="math">B</span>.</p>
<ul>
<li><strong>Dominio</strong> (<span class="math">A</span>): los valores de <span class="math">x</span> que se pueden usar.</li>
<li><strong>Codominio</strong> (<span class="math">B</span>): el conjunto de "llegada" que declaramos al definir la función.</li>
<li><strong>Rango</strong> (<span class="math">R<sub>f</sub></span>): los valores de <span class="math">B</span> que <em>realmente</em> se alcanzan, es decir, <span class="math">R<sub>f</sub> = {f(x) : x ∈ A}</span>.</li>
</ul>
<p>Siempre ocurre que <span class="math">R<sub>f</sub> ⊆ B</span>. La diferencia entre codominio y rango es la clave de todo este tema.</p>
<p>Ejemplo: <span class="math">f(x) = x²</span> definida de <span class="math">ℝ</span> a <span class="math">ℝ</span>. El codominio es <span class="math">ℝ</span>, pero como un cuadrado nunca es negativo, el rango es <span class="math">[0, +∞[</span>.</p>
<p>Para encontrar el rango puedes despejar <span class="math">x</span> en <span class="math">y = f(x)</span> y ver qué valores de <span class="math">y</span> permiten que exista <span class="math">x</span> en el dominio.</p>`
      },
      {
        titulo: 'Función inyectiva (uno a uno)',
        html: `<p>Una función es <strong>inyectiva</strong> cuando a elementos distintos del dominio les corresponden imágenes distintas. Dicho de otro modo: <em>ninguna imagen se repite</em>.</p>
<p><span class="math">f</span> es inyectiva ⟺ si <span class="math">f(a) = f(b)</span>, entonces <span class="math">a = b</span>.</p>
<p>Equivalente: si <span class="math">a ≠ b</span>, entonces <span class="math">f(a) ≠ f(b)</span>.</p>
<p><strong>Prueba de la recta horizontal.</strong> Traza rectas horizontales sobre la gráfica. Si <em>alguna</em> recta horizontal corta la gráfica en dos o más puntos, hay dos valores de <span class="math">x</span> con la misma imagen y la función <strong>no</strong> es inyectiva. Si toda recta horizontal corta a lo sumo una vez, sí lo es.</p>
<p>No confundas esta prueba con la "recta vertical": la vertical sirve para saber si una gráfica es una función; la horizontal sirve para saber si esa función es inyectiva.</p>
<p>Ejemplos: <span class="math">f(x) = 2x + 1</span> es inyectiva; <span class="math">f(x) = x²</span> en <span class="math">ℝ</span> no lo es, porque <span class="math">f(2) = f(−2) = 4</span>.</p>`
      },
      {
        titulo: 'Función sobreyectiva (sobre)',
        html: `<p>Una función <span class="math">f: A → B</span> es <strong>sobreyectiva</strong> cuando <em>todo</em> elemento del codominio es imagen de al menos un elemento del dominio. Es decir:</p>
<p><span class="math">R<sub>f</sub> = B</span>.</p>
<p>Para comprobarlo, toma un <span class="math">y</span> cualquiera de <span class="math">B</span> e intenta resolver <span class="math">f(x) = y</span> para <span class="math">x</span>. Si siempre encuentras una <span class="math">x</span> dentro del dominio, es sobreyectiva. Si hay valores de <span class="math">y</span> para los que no existe solución, no lo es.</p>
<p>Gráficamente: toda recta horizontal <span class="math">y = k</span>, con <span class="math">k</span> en el codominio, debe cortar la gráfica <em>al menos una vez</em>.</p>
<p>Observa la diferencia con la inyectiva: inyectiva exige "<em>a lo sumo</em> un punto" por recta horizontal; sobreyectiva exige "<em>al menos</em> un punto".</p>
<p>Ejemplo: <span class="math">f(x) = x²</span> de <span class="math">ℝ</span> a <span class="math">ℝ</span> no es sobreyectiva (nadie llega a <span class="math">−4</span>), pero <span class="math">f(x) = x²</span> de <span class="math">ℝ</span> a <span class="math">[0, +∞[</span> sí lo es.</p>`
      },
      {
        titulo: 'Función biyectiva',
        html: `<p>Una función es <strong>biyectiva</strong> cuando es inyectiva <em>y</em> sobreyectiva a la vez. Significa que cada elemento del codominio recibe <em>exactamente una</em> flecha: ni se queda sin pareja, ni recibe dos.</p>
<table>
<tr><th>Tipo</th><th>Recta horizontal</th><th>Condición</th></tr>
<tr><td>Inyectiva</td><td>corta a lo sumo 1 vez</td><td>no se repiten imágenes</td></tr>
<tr><td>Sobreyectiva</td><td>corta al menos 1 vez</td><td><span class="math">R<sub>f</sub> = B</span></td></tr>
<tr><td>Biyectiva</td><td>corta exactamente 1 vez</td><td>ambas</td></tr>
</table>
<p>Las funciones biyectivas son importantes porque son las <strong>únicas que tienen función inversa</strong> (lo verás en el tema 1.14): si cada <span class="math">y</span> viene de una sola <span class="math">x</span>, puedes "regresar" de <span class="math">y</span> a <span class="math">x</span> sin ambigüedad.</p>
<p>Con conjuntos finitos, una biyección solo es posible si <span class="math">A</span> y <span class="math">B</span> tienen la misma cantidad de elementos.</p>`
      },
      {
        titulo: 'Cómo demostrar cada propiedad (procedimiento)',
        html: `<p><strong>Para demostrar que es inyectiva:</strong></p>
<ol>
<li>Supón que <span class="math">f(a) = f(b)</span>.</li>
<li>Desarrolla la igualdad con la regla de <span class="math">f</span>.</li>
<li>Simplifica hasta llegar a <span class="math">a = b</span>.</li>
</ol>
<p><strong>Para demostrar que NO es inyectiva:</strong> basta un <em>contraejemplo</em>: dos valores distintos <span class="math">a ≠ b</span> con <span class="math">f(a) = f(b)</span>.</p>
<p><strong>Para estudiar la sobreyectividad:</strong></p>
<ol>
<li>Escribe <span class="math">y = f(x)</span> y despeja <span class="math">x</span> en términos de <span class="math">y</span>.</li>
<li>Pregúntate: ¿para qué valores de <span class="math">y</span> la expresión tiene sentido y da una <span class="math">x</span> del dominio?</li>
<li>Esos valores de <span class="math">y</span> forman el rango. Compáralo con el codominio.</li>
</ol>
<p>Atajo útil: toda función <strong>estrictamente creciente</strong> o <strong>estrictamente decreciente</strong> en su dominio es inyectiva, porque nunca vuelve a pasar por una altura ya visitada.</p>`
      },
      {
        titulo: 'Restricción de dominio y codominio',
        html: `<p>Muchas funciones no son biyectivas "tal como vienen", pero se pueden <em>arreglar</em> cambiando los conjuntos, sin cambiar la regla:</p>
<ul>
<li><strong>Para lograr inyectividad:</strong> restringe el <em>dominio</em> a una parte donde la gráfica solo suba o solo baje.</li>
<li><strong>Para lograr sobreyectividad:</strong> reduce el <em>codominio</em> hasta que sea igual al rango.</li>
</ul>
<p>Ejemplo clásico: <span class="math">f(x) = x²</span>.</p>
<ul>
<li>En <span class="math">ℝ → ℝ</span>: ni inyectiva ni sobreyectiva.</li>
<li>Restringimos el dominio a <span class="math">[0, +∞[</span> (solo la rama derecha): ahora es inyectiva.</li>
<li>Ajustamos el codominio a <span class="math">[0, +∞[</span> (el rango): ahora es sobreyectiva.</li>
<li>Resultado: <span class="math">f: [0, +∞[ → [0, +∞[</span> es <strong>biyectiva</strong>.</li>
</ul>
<p>Para una parábola <span class="math">f(x) = ax² + bx + c</span> el punto de corte natural es el vértice, en <span class="math">x = −b/(2a)</span>: a la izquierda y a la derecha de ese valor la función es monótona. Hay <em>dos</em> restricciones posibles (la rama izquierda o la derecha).</p>`
      },
      {
        titulo: 'Catálogo de funciones conocidas',
        html: `<table>
<tr><th>Función (de <span class="math">ℝ</span> a <span class="math">ℝ</span>)</th><th>Inyectiva</th><th>Sobreyectiva</th><th>Rango</th></tr>
<tr><td><span class="math">f(x) = mx + b</span>, <span class="math">m ≠ 0</span></td><td>Sí</td><td>Sí</td><td><span class="math">ℝ</span></td></tr>
<tr><td><span class="math">f(x) = b</span> (constante)</td><td>No</td><td>No</td><td><span class="math">{b}</span></td></tr>
<tr><td><span class="math">f(x) = x²</span></td><td>No</td><td>No</td><td><span class="math">[0, +∞[</span></td></tr>
<tr><td><span class="math">f(x) = x³</span></td><td>Sí</td><td>Sí</td><td><span class="math">ℝ</span></td></tr>
<tr><td><span class="math">f(x) = |x|</span></td><td>No</td><td>No</td><td><span class="math">[0, +∞[</span></td></tr>
<tr><td><span class="math">f(x) = 2<sup>x</sup></span></td><td>Sí</td><td>No</td><td><span class="math">]0, +∞[</span></td></tr>
</table>
<p>Observa que la exponencial es inyectiva (siempre crece) pero no sobreyectiva sobre <span class="math">ℝ</span>, porque nunca toma valores negativos ni el cero. Si cambias el codominio a <span class="math">]0, +∞[</span> pasa a ser biyectiva; esa biyección es la que le da una inversa: el logaritmo (tema 1.15).</p>
<p>Usa la calculadora de este tema para probar la prueba de la recta horizontal con distintas funciones.</p>`
      }
    ],
    formulas: [
      { label: 'Inyectiva', html: 'f(a) = f(b) ⟹ a = b' },
      { label: 'Sobreyectiva', html: 'R<sub>f</sub> = B' },
      { label: 'Biyectiva', html: 'inyectiva + sobreyectiva' },
      { label: 'Prueba de la recta horizontal', html: 'inyectiva ⟺ cada recta y = k corta a lo sumo una vez' },
      { label: 'Función lineal', html: 'f(x) = mx + b es biyectiva si m ≠ 0' },
      { label: 'Vértice de la parábola', html: 'x<sub>v</sub> = −b/(2a),  y<sub>v</sub> = f(x<sub>v</sub>)' }
    ],
    ejemplos: [
      {
        titulo: 'Función lineal: biyectiva',
        enunciado: 'Demuestra que <span class="math">f: ℝ → ℝ</span>, <span class="math">f(x) = 3x − 5</span>, es inyectiva, sobreyectiva y, por tanto, biyectiva.',
        pasos: [
          'Inyectiva: supón <span class="math">f(a) = f(b)</span>, o sea <span class="math">3a − 5 = 3b − 5</span>.',
          'Suma 5 a ambos lados: <span class="math">3a = 3b</span>. Divide entre 3: <span class="math">a = b</span>. Entonces es inyectiva.',
          'Sobreyectiva: sea <span class="math">y ∈ ℝ</span> cualquiera. Resuelve <span class="math">3x − 5 = y</span>: <span class="math">x = (y + 5)/3</span>.',
          'Ese <span class="math">x</span> es un número real para todo <span class="math">y</span>, así que todo valor del codominio es alcanzado: <span class="math">R<sub>f</sub> = ℝ</span>.',
          'Como es inyectiva y sobreyectiva, es biyectiva.'
        ],
        respuesta: 'Es <strong>biyectiva</strong>.'
      },
      {
        titulo: 'La parábola básica y su restricción',
        enunciado: 'Clasifica <span class="math">f: ℝ → ℝ</span>, <span class="math">f(x) = x²</span>. Luego restríngela para que sea biyectiva.',
        pasos: [
          'Contraejemplo de inyectividad: <span class="math">f(2) = 4</span> y <span class="math">f(−2) = 4</span> con <span class="math">2 ≠ −2</span>. No es inyectiva (la recta <span class="math">y = 4</span> corta dos veces).',
          'Rango: un cuadrado real nunca es negativo, así que <span class="math">R<sub>f</sub> = [0, +∞[</span>. Como <span class="math">−1 ∈ ℝ</span> no es alcanzado, no es sobreyectiva.',
          'Restringe el dominio a <span class="math">[0, +∞[</span>: ahora cada <span class="math">y ≥ 0</span> viene de una sola <span class="math">x = √y</span>, o sea, inyectiva.',
          'Ajusta el codominio a <span class="math">[0, +∞[</span> para que coincida con el rango.'
        ],
        respuesta: 'En <span class="math">ℝ → ℝ</span> no es inyectiva ni sobreyectiva. La función <span class="math">f: [0, +∞[ → [0, +∞[</span>, <span class="math">f(x) = x²</span>, es biyectiva.'
      },
      {
        titulo: 'Parábola con vértice desplazado',
        enunciado: 'Sea <span class="math">f(x) = x² − 4x + 1</span> con dominio <span class="math">ℝ</span>. Halla su vértice y su rango, y da una restricción de dominio y de codominio que la haga biyectiva.',
        pasos: [
          'Vértice: <span class="math">x<sub>v</sub> = −(−4)/(2·1) = 2</span>, y <span class="math">f(2) = 4 − 8 + 1 = −3</span>. Vértice <span class="math">(2, −3)</span>.',
          'Como <span class="math">a = 1 &gt; 0</span> la parábola abre hacia arriba, así que el mínimo es <span class="math">−3</span>: rango <span class="math">[−3, +∞[</span>.',
          'En <span class="math">ℝ</span> no es inyectiva: <span class="math">f(0) = 1</span> y <span class="math">f(4) = 16 − 16 + 1 = 1</span> (simétricos respecto a <span class="math">x = 2</span>).',
          'Restringe el dominio a la rama derecha <span class="math">[2, +∞[</span>, donde la función solo crece, y el codominio a <span class="math">[−3, +∞[</span>.'
        ],
        respuesta: 'Vértice <span class="math">(2, −3)</span>, rango <span class="math">[−3, +∞[</span>. Es biyectiva como <span class="math">f: [2, +∞[ → [−3, +∞[</span> (también sirve <span class="math">]−∞, 2] → [−3, +∞[</span>).'
      },
      {
        titulo: 'Contexto real: pelota lanzada',
        enunciado: 'Una pelota lanzada hacia arriba en una cancha de Santa Ana tiene altura <span class="math">h(t) = 20t − 5t²</span> metros, para <span class="math">t</span> en <span class="math">[0, 4]</span> segundos. ¿Es inyectiva? Da un dominio donde sí lo sea y su rango.',
        pasos: [
          'Vértice: <span class="math">t<sub>v</sub> = −20/(2·(−5)) = 2</span>, <span class="math">h(2) = 40 − 20 = 20</span> m (altura máxima).',
          'Contraejemplo: <span class="math">h(1) = 20 − 5 = 15</span> y <span class="math">h(3) = 60 − 45 = 15</span>. La pelota pasa por 15 m al subir y al bajar: no es inyectiva.',
          'Restringe a la subida, <span class="math">[0, 2]</span>: allí <span class="math">h</span> es estrictamente creciente, y por tanto inyectiva.',
          'Rango en <span class="math">[0, 2]</span>: va de <span class="math">h(0) = 0</span> a <span class="math">h(2) = 20</span>.'
        ],
        respuesta: 'No es inyectiva en <span class="math">[0, 4]</span>. En <span class="math">[0, 2]</span> sí lo es, con rango <span class="math">[0, 20]</span>; así, <span class="math">h: [0, 2] → [0, 20]</span> es biyectiva.'
      },
      {
        titulo: 'La exponencial',
        enunciado: 'Clasifica <span class="math">f: ℝ → ℝ</span>, <span class="math">f(x) = 2<sup>x</sup> − 3</span>, y corrige el codominio si hace falta.',
        pasos: [
          'Inyectiva: <span class="math">2<sup>a</sup> − 3 = 2<sup>b</sup> − 3</span> implica <span class="math">2<sup>a</sup> = 2<sup>b</sup></span>, y como la base es 2, <span class="math">a = b</span>. Sí es inyectiva (siempre crece).',
          'Rango: <span class="math">2<sup>x</sup> &gt; 0</span> para todo <span class="math">x</span>, luego <span class="math">2<sup>x</sup> − 3 &gt; −3</span>. El rango es <span class="math">]−3, +∞[</span> (asíntota <span class="math">y = −3</span>).',
          'Como <span class="math">R<sub>f</sub> ≠ ℝ</span> (por ejemplo, <span class="math">−5</span> no se alcanza), no es sobreyectiva en <span class="math">ℝ</span>.',
          'Se arregla poniendo codominio <span class="math">]−3, +∞[</span>.'
        ],
        respuesta: 'Inyectiva, no sobreyectiva. Con codominio <span class="math">]−3, +∞[</span> es biyectiva.'
      },
      {
        titulo: 'Función racional',
        enunciado: 'Sea <span class="math">f(x) = (2x + 1)/(x − 3)</span> con dominio <span class="math">ℝ − {3}</span>. Demuestra que es inyectiva y halla su rango.',
        pasos: [
          'Supón <span class="math">f(a) = f(b)</span>: <span class="math">(2a + 1)/(a − 3) = (2b + 1)/(b − 3)</span>.',
          'Multiplica en cruz: <span class="math">(2a + 1)(b − 3) = (2b + 1)(a − 3)</span>, es decir <span class="math">2ab − 6a + b − 3 = 2ab − 6b + a − 3</span>.',
          'Cancela <span class="math">2ab</span> y <span class="math">−3</span>: <span class="math">−6a + b = −6b + a</span>, o sea <span class="math">7b = 7a</span>, de donde <span class="math">a = b</span>. Es inyectiva.',
          'Rango: de <span class="math">y = (2x + 1)/(x − 3)</span> sale <span class="math">yx − 3y = 2x + 1</span>, entonces <span class="math">x(y − 2) = 1 + 3y</span> y <span class="math">x = (1 + 3y)/(y − 2)</span>.',
          'Este <span class="math">x</span> existe siempre que <span class="math">y ≠ 2</span> (y entonces <span class="math">x ≠ 3</span>, pues <span class="math">x = 3</span> haría <span class="math">1 + 3y = 3y − 6</span>, imposible).'
        ],
        respuesta: 'Es inyectiva y su rango es <span class="math">ℝ − {2}</span>. Como función <span class="math">ℝ − {3} → ℝ − {2}</span> es biyectiva (la recta <span class="math">y = 2</span> es la asíntota horizontal).'
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: 'Sea <span class="math">A = {1, 2, 3}</span>, <span class="math">B = {a, b, c, d}</span> y <span class="math">f = {(1, a), (2, c), (3, d)}</span>. Clasifica <span class="math">f: A → B</span>.',
        pasos: [
          'Imágenes: <span class="math">f(1) = a</span>, <span class="math">f(2) = c</span>, <span class="math">f(3) = d</span>. Todas distintas, así que es inyectiva.',
          'Rango: <span class="math">{a, c, d}</span>. El codominio <span class="math">B</span> tiene también a <span class="math">b</span>, que nadie alcanza.',
          'Como <span class="math">R<sub>f</sub> ≠ B</span>, no es sobreyectiva (con 3 elementos en <span class="math">A</span> y 4 en <span class="math">B</span> es imposible).'
        ],
        respuesta: 'Inyectiva, no sobreyectiva, por tanto no biyectiva.'
      },
      {
        nivel: 'facil',
        enunciado: 'Demuestra que <span class="math">f: ℝ → ℝ</span>, <span class="math">f(x) = 2x + 7</span>, es biyectiva.',
        pasos: [
          'Si <span class="math">f(a) = f(b)</span>: <span class="math">2a + 7 = 2b + 7</span>, luego <span class="math">2a = 2b</span> y <span class="math">a = b</span>. Inyectiva.',
          'Para <span class="math">y ∈ ℝ</span>: <span class="math">2x + 7 = y</span> da <span class="math">x = (y − 7)/2 ∈ ℝ</span>. Sobreyectiva.',
          'Cumple ambas condiciones.'
        ],
        respuesta: 'Biyectiva.'
      },
      {
        nivel: 'facil',
        enunciado: 'Muestra que <span class="math">f: ℝ → ℝ</span>, <span class="math">f(x) = x² + 1</span>, no es inyectiva y halla su rango.',
        pasos: [
          'Contraejemplo: <span class="math">f(1) = 2</span> y <span class="math">f(−1) = 2</span>, con <span class="math">1 ≠ −1</span>.',
          'Como <span class="math">x² ≥ 0</span>, entonces <span class="math">x² + 1 ≥ 1</span>, y el valor 1 se alcanza en <span class="math">x = 0</span>.',
          'El rango es <span class="math">[1, +∞[</span>.'
        ],
        respuesta: 'No es inyectiva (<span class="math">f(1) = f(−1)</span>); rango <span class="math">[1, +∞[</span>, por lo que tampoco es sobreyectiva en <span class="math">ℝ</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Sea <span class="math">f: ℝ → [0, +∞[</span>, <span class="math">f(x) = |x|</span>. ¿Es inyectiva? ¿Es sobreyectiva?',
        pasos: [
          'Inyectiva: <span class="math">f(−3) = 3 = f(3)</span> con <span class="math">−3 ≠ 3</span>. No lo es.',
          'Sobreyectiva: dado <span class="math">y ≥ 0</span>, <span class="math">x = y</span> cumple <span class="math">|x| = y</span>. Entonces <span class="math">R<sub>f</sub> = [0, +∞[</span>, igual al codominio.'
        ],
        respuesta: 'No es inyectiva, pero sí es sobreyectiva.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Demuestra que <span class="math">f: ℝ → ℝ</span>, <span class="math">f(x) = x³</span>, es biyectiva.',
        pasos: [
          'Inyectiva: si <span class="math">a³ = b³</span>, al sacar raíz cúbica (que es única en los reales) queda <span class="math">a = b</span>.',
          'Sobreyectiva: dado <span class="math">y ∈ ℝ</span>, el número <span class="math">x = ∛y</span> existe en <span class="math">ℝ</span> (incluso para <span class="math">y &lt; 0</span>) y cumple <span class="math">x³ = y</span>.',
          'La gráfica pasa la prueba de la recta horizontal: sube siempre.'
        ],
        respuesta: 'Biyectiva.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Sea <span class="math">f(x) = x² − 6x + 5</span>. Halla vértice y rango; indica la restricción de dominio <span class="math">[h, +∞[</span> más amplia que la hace inyectiva y el codominio que la vuelve biyectiva.',
        pasos: [
          'Vértice: <span class="math">x<sub>v</sub> = 6/2 = 3</span>, <span class="math">f(3) = 9 − 18 + 5 = −4</span>.',
          'Parábola hacia arriba: rango <span class="math">[−4, +∞[</span>.',
          'A la derecha de <span class="math">x = 3</span> la función solo crece, así que <span class="math">h = 3</span>.',
          'Codominio igual al rango: <span class="math">[−4, +∞[</span>.'
        ],
        respuesta: 'Vértice <span class="math">(3, −4)</span>; <span class="math">f: [3, +∞[ → [−4, +∞[</span> es biyectiva.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Sea <span class="math">f(x) = √(x − 1)</span> con dominio <span class="math">[1, +∞[</span> y codominio <span class="math">ℝ</span>. Determina si es inyectiva y sobreyectiva; si hace falta, corrige el codominio.',
        pasos: [
          'Inyectiva: <span class="math">√(a − 1) = √(b − 1)</span>; al elevar al cuadrado, <span class="math">a − 1 = b − 1</span>, luego <span class="math">a = b</span>.',
          'Rango: una raíz cuadrada es siempre <span class="math">≥ 0</span> y llega a 0 en <span class="math">x = 1</span>; crece sin límite. Rango <span class="math">[0, +∞[</span>.',
          'Con codominio <span class="math">ℝ</span> no es sobreyectiva (los negativos no se alcanzan). Cambia el codominio a <span class="math">[0, +∞[</span>.'
        ],
        respuesta: 'Inyectiva; no es sobreyectiva en <span class="math">ℝ</span>, pero <span class="math">[1, +∞[ → [0, +∞[</span> es biyectiva.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Para <span class="math">f(x) = 3<sup>x</sup> − 2</span> con dominio <span class="math">ℝ</span>, halla el rango, la asíntota y el codominio que la hace biyectiva.',
        pasos: [
          'Como <span class="math">3<sup>x</sup> &gt; 0</span>, se cumple <span class="math">3<sup>x</sup> − 2 &gt; −2</span>.',
          'La gráfica se acerca a la recta <span class="math">y = −2</span> cuando <span class="math">x → −∞</span> sin tocarla: asíntota <span class="math">y = −2</span>.',
          'Es estrictamente creciente (base 3 &gt; 1), por lo tanto inyectiva.',
          'Para que sea sobreyectiva el codominio debe ser el rango.'
        ],
        respuesta: 'Rango <span class="math">]−2, +∞[</span>, asíntota <span class="math">y = −2</span>, y <span class="math">f: ℝ → ]−2, +∞[</span> es biyectiva.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Demuestra que <span class="math">f(x) = (x − 1)/(x + 4)</span>, con dominio <span class="math">ℝ − {−4}</span>, es inyectiva y halla su rango.',
        pasos: [
          'Si <span class="math">f(a) = f(b)</span>: <span class="math">(a − 1)(b + 4) = (b − 1)(a + 4)</span>.',
          'Desarrolla: <span class="math">ab + 4a − b − 4 = ab + 4b − a − 4</span>. Cancela <span class="math">ab</span> y <span class="math">−4</span>: <span class="math">4a − b = 4b − a</span>.',
          'Entonces <span class="math">5a = 5b</span> y <span class="math">a = b</span>: inyectiva.',
          'Rango: <span class="math">y(x + 4) = x − 1</span> da <span class="math">xy + 4y = x − 1</span>, es decir, <span class="math">x(y − 1) = −1 − 4y</span> y <span class="math">x = (−1 − 4y)/(y − 1)</span>.',
          'Existe siempre que <span class="math">y ≠ 1</span>.'
        ],
        respuesta: 'Inyectiva, con rango <span class="math">ℝ − {1}</span>; es biyectiva como <span class="math">ℝ − {−4} → ℝ − {1}</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Sea <span class="math">f(x) = x² − 2x</span>. (a) Halla el menor <span class="math">a</span> tal que <span class="math">f</span> sea inyectiva en <span class="math">[a, +∞[</span>. (b) Halla el mayor <span class="math">b</span> tal que lo sea en <span class="math">]−∞, b]</span>. (c) Da el rango en cada caso.',
        pasos: [
          'Vértice: <span class="math">x<sub>v</sub> = 2/2 = 1</span>, <span class="math">f(1) = 1 − 2 = −1</span>.',
          'A la derecha de <span class="math">x = 1</span> la función crece: la restricción más amplia es <span class="math">[1, +∞[</span>, luego <span class="math">a = 1</span>.',
          'A la izquierda decrece hasta <span class="math">x = 1</span>: <span class="math">b = 1</span>.',
          'En ambos casos se parte de <span class="math">f(1) = −1</span> y se crece sin límite: el rango es <span class="math">[−1, +∞[</span>.'
        ],
        respuesta: '<span class="math">a = 1</span>, <span class="math">b = 1</span>; en ambas restricciones el rango es <span class="math">[−1, +∞[</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Define <span class="math">f: ℝ → ℝ</span> por tramos: <span class="math">f(x) = 2x − 1</span> si <span class="math">x &lt; 1</span>, y <span class="math">f(x) = x²</span> si <span class="math">x ≥ 1</span>. Determina si es biyectiva.',
        pasos: [
          'Primer tramo (<span class="math">x &lt; 1</span>): <span class="math">2x − 1 &lt; 1</span>, y toma todos los valores de <span class="math">]−∞, 1[</span>; es creciente.',
          'Segundo tramo (<span class="math">x ≥ 1</span>): <span class="math">x² ≥ 1</span>, parte de <span class="math">f(1) = 1</span> y crece; toma todos los valores de <span class="math">[1, +∞[</span>.',
          'Los dos conjuntos de imágenes no se solapan (uno es <span class="math">&lt; 1</span> y el otro <span class="math">≥ 1</span>), así que ninguna imagen se repite: inyectiva.',
          'La unión <span class="math">]−∞, 1[ ∪ [1, +∞[ = ℝ</span>, luego el rango es todo <span class="math">ℝ</span>: sobreyectiva.'
        ],
        respuesta: 'Es <strong>biyectiva</strong>.'
      }
    ],
    teoricas: [
      {
        q: '¿Cuál es la diferencia entre codominio y rango?',
        a: 'El codominio es el conjunto de llegada que se declara al definir la función; el rango es el subconjunto de valores que realmente se alcanzan. Siempre <span class="math">R<sub>f</sub> ⊆ B</span>, y son iguales exactamente cuando la función es sobreyectiva.'
      },
      {
        q: '¿Cómo funciona la prueba de la recta horizontal y qué te dice?',
        a: 'Se trazan rectas horizontales sobre la gráfica. Si alguna la corta en dos o más puntos, hay dos entradas distintas con la misma salida y la función no es inyectiva. Si cada recta corta a lo sumo una vez, es inyectiva.'
      },
      {
        q: '¿Por qué <span class="math">f(x) = x²</span> no es inyectiva en <span class="math">ℝ</span> pero sí en <span class="math">[0, +∞[</span>?',
        a: 'En <span class="math">ℝ</span> los números opuestos tienen el mismo cuadrado (<span class="math">f(a) = f(−a)</span>). Al quitar los negativos del dominio ya no hay opuestos distintos, y la función solo crece, por lo que no repite valores.'
      },
      {
        q: 'Si una función es estrictamente creciente, ¿es inyectiva? ¿Es necesariamente sobreyectiva?',
        a: 'Es inyectiva, porque nunca vuelve a una altura ya usada. No necesariamente es sobreyectiva: <span class="math">2<sup>x</sup></span> crece siempre pero su rango es <span class="math">]0, +∞[</span> y no todo <span class="math">ℝ</span>.'
      },
      {
        q: '¿Puede una función ser sobreyectiva sin ser inyectiva? Da un ejemplo.',
        a: 'Sí. <span class="math">f: ℝ → [0, +∞[</span>, <span class="math">f(x) = |x|</span>, alcanza todos los valores del codominio, pero <span class="math">f(−2) = f(2)</span>.'
      },
      {
        q: '¿Cómo puedes volver sobreyectiva cualquier función sin cambiar su regla?',
        a: 'Cambiando el codominio para que sea igual al rango. Siempre es posible, porque el rango, por definición, es el conjunto de valores alcanzados.'
      },
      {
        q: '¿Por qué solo las funciones biyectivas tienen función inversa?',
        a: 'Para "regresar" de <span class="math">y</span> a <span class="math">x</span> necesitas que cada <span class="math">y</span> del codominio venga de una y solo una <span class="math">x</span>. Si dos <span class="math">x</span> dan la misma <span class="math">y</span> (no inyectiva) no sabrías a cuál volver; si alguna <span class="math">y</span> no viene de ninguna <span class="math">x</span> (no sobreyectiva) la inversa no estaría definida allí.'
      },
      {
        q: '¿Es inyectiva una función constante como <span class="math">f(x) = 5</span>?',
        a: 'No. Todas las entradas dan la misma salida: <span class="math">f(1) = f(2) = 5</span>. Tampoco es sobreyectiva sobre <span class="math">ℝ</span>, porque su rango es solo <span class="math">{5}</span>.'
      }
    ],
    errores: [
      'Confundir <em>rango</em> con <em>codominio</em>: decir que <span class="math">x²</span> es sobreyectiva "porque sale un número real". Compara siempre el rango real con el codominio declarado.',
      'Pensar que "cada <span class="math">x</span> tiene una sola imagen" significa inyectiva. Eso lo cumple toda función; inyectiva es que cada <span class="math">y</span> tenga una sola <span class="math">x</span>.',
      'Demostrar inyectividad con un solo ejemplo numérico. Un ejemplo sirve para refutar (contraejemplo), pero para demostrar hay que probar el caso general <span class="math">f(a) = f(b) ⟹ a = b</span>.',
      'Restringir el dominio y olvidarse de ajustar el codominio (o al revés). Para biyectiva se necesitan las dos correcciones; usa la recta vertical para el dominio y la recta horizontal para el codominio.'
    ],
    aplicacion: {
      titulo: 'Asignación de asientos en un microbús',
      html: `<p>Una ruta de microbús en Santa Ana sale con <strong>6 asientos libres</strong> y suben <strong>4 pasajeros</strong>. Cada pasajero elige un asiento distinto: eso es una función <span class="math">f</span> del conjunto de pasajeros <span class="math">P</span> al conjunto de asientos <span class="math">S</span>, y "dos pasajeros no comparten asiento" significa que <span class="math">f</span> es <strong>inyectiva</strong>.</p>
<p><strong>¿De cuántas maneras puede asignarse?</strong> El primer pasajero elige entre 6 asientos, el segundo entre 5, el tercero entre 4 y el cuarto entre 3:</p>
<p><span class="math">6 · 5 · 4 · 3 = 360</span> funciones inyectivas.</p>
<p><strong>¿Puede ser sobreyectiva?</strong> Sobreyectiva exigiría que todo asiento sea ocupado, pero hay 6 asientos y solo 4 pasajeros: el rango tiene como máximo 4 elementos, así que <em>no</em> puede ser sobreyectiva, y por tanto tampoco biyectiva.</p>
<p><strong>Si el microbús tuviera exactamente 4 asientos</strong> y subieran 4 pasajeros, toda asignación inyectiva sería biyectiva: <span class="math">4 · 3 · 2 · 1 = 24</span> formas. Regla general: entre conjuntos de <span class="math">n</span> elementos hay <span class="math">n!</span> biyecciones.</p>`
    },
    calc: 'inyectiva',
    examen: [
      { tipo: 'par', q: 'Halla el vértice <span class="math">(x, y)</span> de <span class="math">f(x) = x² − 4x + 1</span>.', r: [2, -3], tol: 0.01, pasos: [
        '<span class="math">x<sub>v</sub> = −b/(2a) = 4/2 = 2</span>.',
        '<span class="math">f(2) = 4 − 8 + 1 = −3</span>.',
        'Vértice <span class="math">(2, −3)</span>: ahí se parte la parábola en dos ramas inyectivas.'
      ] },
      { tipo: 'num', q: 'El rango de <span class="math">f(x) = −x² + 6x − 4</span> es <span class="math">]−∞, M]</span>. Halla <span class="math">M</span>.', r: 5, tol: 0.01, pasos: [
        'Como <span class="math">a = −1 &lt; 0</span>, la parábola abre hacia abajo y el rango termina en el valor del vértice.',
        '<span class="math">x<sub>v</sub> = −6/(2·(−1)) = 3</span>.',
        '<span class="math">M = f(3) = −9 + 18 − 4 = 5</span>.'
      ] },
      { tipo: 'num', q: 'La función <span class="math">f(x) = x² − 6x + 5</span> es inyectiva en <span class="math">[h, +∞[</span> para todo <span class="math">h ≥ h₀</span>. Halla el menor valor <span class="math">h₀</span>.', r: 3, tol: 0.01, pasos: [
        'La función es monótona a la derecha del vértice.',
        '<span class="math">x<sub>v</sub> = 6/2 = 3</span>.',
        'Para <span class="math">h ≥ 3</span> la restricción solo crece, así que <span class="math">h₀ = 3</span>.'
      ] },
      { tipo: 'lista', q: 'Resuelve <span class="math">f(x) = 7</span> para <span class="math">f(x) = x² − 9</span> (escribe las soluciones separadas por comas). Esto muestra que no es inyectiva.', r: [4, -4], tol: 0.01, pasos: [
        '<span class="math">x² − 9 = 7</span> implica <span class="math">x² = 16</span>.',
        '<span class="math">x = 4</span> o <span class="math">x = −4</span>.',
        'Dos entradas distintas con la misma salida: no es inyectiva.'
      ] },
      { tipo: 'num', q: '¿Cuántas funciones inyectivas existen de un conjunto de 3 elementos a uno de 5 elementos?', r: 60, tol: 0.01, pasos: [
        'El primer elemento tiene 5 opciones de imagen.',
        'El segundo, 4 (no puede repetir); el tercero, 3.',
        '<span class="math">5 · 4 · 3 = 60</span>.'
      ] },
      { tipo: 'num', q: '¿Cuántas funciones biyectivas hay de un conjunto de 4 elementos en otro de 4 elementos?', r: 24, tol: 0.01, pasos: [
        'Una biyección entre conjuntos del mismo tamaño es una función inyectiva (y sobreyectiva).',
        'Opciones: <span class="math">4 · 3 · 2 · 1</span>.',
        '<span class="math">4! = 24</span>.'
      ] },
      { tipo: 'num', q: 'El rango de <span class="math">f(x) = (2x + 1)/(x − 3)</span> es <span class="math">ℝ − {k}</span>. Halla <span class="math">k</span>.', r: 2, tol: 0.01, pasos: [
        'Despeja: <span class="math">y(x − 3) = 2x + 1</span> da <span class="math">x(y − 2) = 1 + 3y</span>.',
        '<span class="math">x = (1 + 3y)/(y − 2)</span> no existe si <span class="math">y = 2</span>.',
        'Entonces <span class="math">k = 2</span> (la asíntota horizontal).'
      ] },
      { tipo: 'opt', q: '¿Cuál de estas funciones de <span class="math">ℝ</span> a <span class="math">ℝ</span> es inyectiva?', opciones: ['<span class="math">f(x) = x²</span>', '<span class="math">f(x) = |x|</span>', '<span class="math">f(x) = x³</span>', '<span class="math">f(x) = 4</span>'], correcta: 2, pasos: [
        '<span class="math">x²</span> y <span class="math">|x|</span> repiten valores en opuestos (<span class="math">f(2) = f(−2)</span>).',
        'La constante repite siempre el mismo valor.',
        '<span class="math">x³</span> siempre crece, y pasa la prueba de la recta horizontal.'
      ] },
      { tipo: 'opt', q: '<span class="math">f: ℝ → ℝ</span>, <span class="math">f(x) = 2<sup>x</sup></span>, es:', opciones: ['biyectiva', 'inyectiva pero no sobreyectiva', 'sobreyectiva pero no inyectiva', 'ni inyectiva ni sobreyectiva'], correcta: 1, pasos: [
        'La exponencial de base 2 es estrictamente creciente, así que es inyectiva.',
        'Su rango es <span class="math">]0, +∞[</span>, que no es todo <span class="math">ℝ</span>.',
        'Por tanto no es sobreyectiva en <span class="math">ℝ</span>.'
      ] },
      { tipo: 'opt', q: 'Una pelota tiene <span class="math">h(t) = 20t − 5t²</span> para <span class="math">t ∈ [0, 2]</span> (hasta su altura máxima). ¿Cuál es el rango de <span class="math">h</span> en ese intervalo?', opciones: ['<span class="math">[0, 40]</span>', '<span class="math">[0, 15]</span>', '<span class="math">[15, 20]</span>', '<span class="math">[0, 20]</span>'], correcta: 3, pasos: [
        '<span class="math">h(0) = 0</span>.',
        'El vértice está en <span class="math">t = 2</span>: <span class="math">h(2) = 40 − 20 = 20</span>.',
        'En <span class="math">[0, 2]</span> la función crece de 0 a 20: rango <span class="math">[0, 20]</span>.'
      ] }
    ]
  };

  /* ====================================================================== */
  /* TEMA 1.14 — Composición de funciones y función inversa                 */
  /* ====================================================================== */
  T['1.14'] = {
    id: '1.14',
    unidad: 5,
    titulo: 'Composición de funciones y función inversa',
    resumen: 'Combina funciones en cadena, determina el dominio de la composición y encuentra la inversa de una función biyectiva.',
    objetivos: [
      'Calcular composiciones numéricas y algebraicas, y determinar su dominio.',
      'Reconocer que la composición no es conmutativa.',
      'Hallar la función inversa de una función biyectiva con el procedimiento algebraico.',
      'Verificar una inversa con la propiedad de identidad y relacionar su gráfica con la reflexión sobre la recta y = x.'
    ],
    teoria: [
      {
        titulo: 'Composición: funciones en cadena',
        html: `<p>Componer dos funciones es usar la salida de una como entrada de la otra, como una línea de producción: la primera máquina transforma la materia prima y su producto entra a la segunda.</p>
<p><span class="math">(f ∘ g)(x) = f(g(x))</span></p>
<p>Se lee "<span class="math">f</span> compuesta con <span class="math">g</span>" o "<span class="math">f</span> círculo <span class="math">g</span>". El orden importante: <strong>primero actúa <span class="math">g</span></strong> (la de más adentro) y después <span class="math">f</span>.</p>
<p>Ejemplo numérico: si <span class="math">f(x) = x + 2</span> y <span class="math">g(x) = 3x</span>, entonces <span class="math">(f ∘ g)(4) = f(g(4)) = f(12) = 14</span>.</p>
<p>Ejemplo algebraico: <span class="math">(f ∘ g)(x) = f(3x) = 3x + 2</span>. Fíjate que <em>donde <span class="math">f</span> tenía una <span class="math">x</span>, ahora escribes toda la expresión de <span class="math">g</span></em>, entre paréntesis.</p>`
      },
      {
        titulo: 'La composición no es conmutativa',
        html: `<p>En general <span class="math">f ∘ g ≠ g ∘ f</span>. Cambiar el orden cambia el resultado.</p>
<p>Con <span class="math">f(x) = x + 2</span> y <span class="math">g(x) = 3x</span>:</p>
<ul>
<li><span class="math">(f ∘ g)(x) = 3x + 2</span> (primero multiplicas, luego sumas).</li>
<li><span class="math">(g ∘ f)(x) = 3(x + 2) = 3x + 6</span> (primero sumas, luego multiplicas).</li>
</ul>
<p>Piensa en ponerte la media y luego el zapato: el orden no se puede invertir sin que cambie el resultado.</p>
<p>Lo que sí se cumple es la <strong>asociatividad</strong>: <span class="math">(f ∘ g) ∘ h = f ∘ (g ∘ h)</span>. Por eso se puede escribir <span class="math">f ∘ g ∘ h</span> sin paréntesis; se evalúa de adentro hacia afuera: primero <span class="math">h</span>, luego <span class="math">g</span>, luego <span class="math">f</span>.</p>
<p>Existe una función "neutra", la identidad <span class="math">I(x) = x</span>, que cumple <span class="math">f ∘ I = I ∘ f = f</span>.</p>`
      },
      {
        titulo: 'Dominio de una composición',
        html: `<p>Para que <span class="math">(f ∘ g)(x)</span> exista deben cumplirse <em>dos</em> condiciones:</p>
<ol>
<li><span class="math">x</span> debe estar en el dominio de <span class="math">g</span>.</li>
<li>El valor <span class="math">g(x)</span> debe estar en el dominio de <span class="math">f</span>.</li>
</ol>
<p><span class="math">Dom(f ∘ g) = {x ∈ Dom(g) : g(x) ∈ Dom(f)}</span></p>
<p>Ejemplo: <span class="math">f(x) = √x</span> (dominio <span class="math">[0, +∞[</span>) y <span class="math">g(x) = x − 4</span> (dominio <span class="math">ℝ</span>). Entonces <span class="math">(f ∘ g)(x) = √(x − 4)</span> y exige <span class="math">g(x) = x − 4 ≥ 0</span>, o sea <span class="math">x ≥ 4</span>.</p>
<p><strong>Cuidado:</strong> el dominio se determina <em>antes</em> de simplificar. Si <span class="math">f(x) = x²</span> y <span class="math">g(x) = √x</span>, la expresión simplificada <span class="math">(f ∘ g)(x) = x</span> parece valer para todo real, pero el dominio real de la composición es <span class="math">[0, +∞[</span>, porque <span class="math">g</span> no existe para <span class="math">x &lt; 0</span>.</p>`
      },
      {
        titulo: 'Función inversa: deshacer lo hecho',
        html: `<p>Si <span class="math">f</span> toma a <span class="math">x</span> y lo convierte en <span class="math">y</span>, la <strong>función inversa</strong> <span class="math">f<sup>−1</sup></span> toma <span class="math">y</span> y lo regresa a <span class="math">x</span>.</p>
<p><span class="math">f(a) = b ⟺ f<sup>−1</sup>(b) = a</span></p>
<ul>
<li>Solo existe si <span class="math">f</span> es <strong>biyectiva</strong> (tema 1.13): inyectiva para que el regreso no sea ambiguo y sobreyectiva para que esté definida en todo el codominio.</li>
<li>Los conjuntos se intercambian: <span class="math">Dom(f<sup>−1</sup>) = R<sub>f</sub></span> y <span class="math">R<sub>f<sup>−1</sup></sub> = Dom(f)</span>.</li>
<li>Los puntos se "voltean": si <span class="math">(a, b)</span> está en la gráfica de <span class="math">f</span>, entonces <span class="math">(b, a)</span> está en la de <span class="math">f<sup>−1</sup></span>.</li>
</ul>
<p><strong>Atención a la notación:</strong> <span class="math">f<sup>−1</sup>(x)</span> <em>no</em> significa <span class="math">1/f(x)</span>. El "−1" indica la función inversa, no un exponente.</p>
<p>Ejemplo con una tabla: si <span class="math">f(1) = 4</span>, <span class="math">f(2) = 7</span>, <span class="math">f(3) = 10</span>, entonces <span class="math">f<sup>−1</sup>(7) = 2</span>.</p>`
      },
      {
        titulo: 'Propiedad de identidad',
        html: `<p>Una función y su inversa se anulan mutuamente cuando se componen:</p>
<p><span class="math">(f ∘ f<sup>−1</sup>)(x) = x</span> para todo <span class="math">x</span> en <span class="math">Dom(f<sup>−1</sup>)</span>, y <span class="math">(f<sup>−1</sup> ∘ f)(x) = x</span> para todo <span class="math">x</span> en <span class="math">Dom(f)</span>.</p>
<p>Esta propiedad sirve de <strong>comprobación</strong>: tras calcular una inversa, compón las dos funciones; si el resultado no es exactamente <span class="math">x</span>, hubo un error.</p>
<p>Ejemplo: <span class="math">f(x) = 2x + 6</span> y <span class="math">f<sup>−1</sup>(x) = (x − 6)/2</span>.</p>
<p><span class="math">f(f<sup>−1</sup>(x)) = 2·(x − 6)/2 + 6 = x − 6 + 6 = x</span> ✓.</p>
<p>Intuición: ponerte el zapato y luego quitártelo te deja como estabas. Las operaciones inversas se aplican en orden contrario: si <span class="math">f</span> primero multiplica por 2 y después suma 6, <span class="math">f<sup>−1</sup></span> primero resta 6 y luego divide entre 2.</p>`
      },
      {
        titulo: 'Procedimiento para hallar la inversa',
        html: `<ol>
<li><strong>Verifica</strong> que <span class="math">f</span> sea biyectiva (restringe dominio y codominio si hace falta).</li>
<li>Escribe <span class="math">y = f(x)</span>.</li>
<li><strong>Despeja <span class="math">x</span></strong> en términos de <span class="math">y</span>.</li>
<li><strong>Intercambia</strong> los nombres: escribe <span class="math">y</span> donde dice <span class="math">x</span>, y <span class="math">x</span> donde dice <span class="math">y</span>. El resultado es <span class="math">f<sup>−1</sup>(x)</span>.</li>
<li>Escribe el dominio de <span class="math">f<sup>−1</sup></span> (el rango de <span class="math">f</span>) y <strong>comprueba</strong> con <span class="math">f(f<sup>−1</sup>(x)) = x</span>.</li>
</ol>
<p><strong>Interpretación geométrica:</strong> la gráfica de <span class="math">f<sup>−1</sup></span> es la reflexión (imagen en un espejo) de la gráfica de <span class="math">f</span> sobre la recta <span class="math">y = x</span>. Si ves la gráfica de <span class="math">f</span> y la recta diagonal, la inversa es "la misma curva girada sobre la diagonal".</p>
<p>Si <span class="math">f</span> y <span class="math">f<sup>−1</sup></span> se cortan, lo hacen sobre la recta <span class="math">y = x</span> (cuando se cortan en ese punto).</p>`
      },
      {
        titulo: 'Inversas de funciones comunes',
        html: `<table>
<tr><th><span class="math">f(x)</span></th><th><span class="math">f<sup>−1</sup>(x)</span></th><th>Observación</th></tr>
<tr><td><span class="math">mx + b</span></td><td><span class="math">(x − b)/m</span></td><td><span class="math">m ≠ 0</span></td></tr>
<tr><td><span class="math">x³</span></td><td><span class="math">∛x</span></td><td>todo <span class="math">ℝ</span></td></tr>
<tr><td><span class="math">x²</span>, con <span class="math">x ≥ 0</span></td><td><span class="math">√x</span></td><td>la rama <span class="math">x ≤ 0</span> daría <span class="math">−√x</span></td></tr>
<tr><td><span class="math">1/x</span></td><td><span class="math">1/x</span></td><td>es su propia inversa</td></tr>
<tr><td><span class="math">(ax + b)/(cx + d)</span></td><td><span class="math">(−dx + b)/(cx − a)</span></td><td>homográfica</td></tr>
<tr><td><span class="math">2<sup>x</sup></span></td><td><span class="math">log<sub>2</sub>(x)</span></td><td>tema 1.15</td></tr>
</table>
<p>Casos especiales: la función identidad y <span class="math">f(x) = 1/x</span> son <em>involutivas</em>: coinciden con su propia inversa. También lo es cualquier función cuya gráfica sea simétrica respecto a <span class="math">y = x</span>.</p>
<p>Cuando <span class="math">f(x) = x²</span> se restringe a <span class="math">x ≥ 0</span> la inversa es <span class="math">√x</span>; si se restringe a <span class="math">x ≤ 0</span> la inversa es <span class="math">−√x</span>. La restricción elegida decide cuál inversa obtienes.</p>
<p>Prueba la calculadora de este tema para componer funciones y obtener inversas paso a paso.</p>`
      }
    ],
    formulas: [
      { label: 'Composición', html: '(f ∘ g)(x) = f(g(x))' },
      { label: 'Dominio de f ∘ g', html: 'x ∈ Dom(g) y g(x) ∈ Dom(f)' },
      { label: 'Definición de inversa', html: 'f(a) = b ⟺ f<sup>−1</sup>(b) = a' },
      { label: 'Identidad', html: 'f(f<sup>−1</sup>(x)) = x   y   f<sup>−1</sup>(f(x)) = x' },
      { label: 'Dominio y rango de la inversa', html: 'Dom(f<sup>−1</sup>) = R<sub>f</sub>' },
      { label: 'Inversa de la función lineal', html: 'f(x) = mx + b  ⟹  f<sup>−1</sup>(x) = (x − b)/m' },
      { label: 'Inversa de la función homográfica', html: 'f(x) = (ax + b)/(cx + d)  ⟹  f<sup>−1</sup>(x) = (−dx + b)/(cx − a)' }
    ],
    ejemplos: [
      {
        titulo: 'Composición numérica y algebraica',
        enunciado: 'Sean <span class="math">f(x) = 2x + 3</span> y <span class="math">g(x) = x² − 1</span>. Halla <span class="math">(f ∘ g)(x)</span>, <span class="math">(g ∘ f)(x)</span> y evalúa ambas en <span class="math">x = 2</span>.',
        pasos: [
          '<span class="math">(f ∘ g)(x) = f(x² − 1) = 2(x² − 1) + 3 = 2x² + 1</span>.',
          '<span class="math">(g ∘ f)(x) = g(2x + 3) = (2x + 3)² − 1 = 4x² + 12x + 9 − 1 = 4x² + 12x + 8</span>.',
          'En <span class="math">x = 2</span>: <span class="math">(f ∘ g)(2) = 2·4 + 1 = 9</span> (comprobación: <span class="math">g(2) = 3</span>, <span class="math">f(3) = 9</span>).',
          '<span class="math">(g ∘ f)(2) = 16 + 24 + 8 = 48</span> (comprobación: <span class="math">f(2) = 7</span>, <span class="math">g(7) = 48</span>).'
        ],
        respuesta: '<span class="math">(f ∘ g)(x) = 2x² + 1</span> y <span class="math">(g ∘ f)(x) = 4x² + 12x + 8</span>; valen 9 y 48 en <span class="math">x = 2</span>. No son iguales.'
      },
      {
        titulo: 'Dominio de la composición',
        enunciado: 'Con <span class="math">f(x) = √x</span> y <span class="math">g(x) = x − 4</span>, halla <span class="math">f ∘ g</span> y <span class="math">g ∘ f</span> con sus dominios.',
        pasos: [
          '<span class="math">(f ∘ g)(x) = f(x − 4) = √(x − 4)</span>. Exige <span class="math">x − 4 ≥ 0</span>, o sea <span class="math">x ≥ 4</span>.',
          '<span class="math">(g ∘ f)(x) = g(√x) = √x − 4</span>. Solo exige que exista <span class="math">√x</span>, o sea <span class="math">x ≥ 0</span>.',
          'Las expresiones y los dominios son distintos: otra muestra de que el orden importa.'
        ],
        respuesta: '<span class="math">(f ∘ g)(x) = √(x − 4)</span> con dominio <span class="math">[4, +∞[</span>; <span class="math">(g ∘ f)(x) = √x − 4</span> con dominio <span class="math">[0, +∞[</span>.'
      },
      {
        titulo: 'Inversa de una función lineal',
        enunciado: 'Halla la inversa de <span class="math">f(x) = 3x − 7</span> y comprueba el resultado.',
        pasos: [
          'Escribe <span class="math">y = 3x − 7</span>.',
          'Despeja <span class="math">x</span>: <span class="math">y + 7 = 3x</span>, entonces <span class="math">x = (y + 7)/3</span>.',
          'Intercambia variables: <span class="math">f<sup>−1</sup>(x) = (x + 7)/3</span>.',
          'Comprobación: <span class="math">f(f<sup>−1</sup>(x)) = 3·(x + 7)/3 − 7 = x + 7 − 7 = x</span> ✓.'
        ],
        respuesta: '<span class="math">f<sup>−1</sup>(x) = (x + 7)/3</span>.'
      },
      {
        titulo: 'Contexto real: IVA y cupón de descuento',
        enunciado: 'Una tienda salvadoreña cobra IVA de 13 %: el total es <span class="math">P(x) = 1.13x</span>, con <span class="math">x</span> el precio base. Una familia tiene además un cupón de <span class="math">$5</span> que se resta al final: <span class="math">D(x) = x − 5</span>. (a) Halla <span class="math">(D ∘ P)(x)</span> y <span class="math">(P ∘ D)(x)</span> y evalúa en <span class="math">x = 50</span>. (b) Si el total pagado con IVA y cupón (en ese orden) es <span class="math">$62.80</span>, ¿cuál era el precio base?',
        pasos: [
          '<span class="math">(D ∘ P)(x) = D(1.13x) = 1.13x − 5</span>: primero el IVA, luego el cupón.',
          '<span class="math">(P ∘ D)(x) = P(x − 5) = 1.13(x − 5) = 1.13x − 5.65</span>: el cupón antes del IVA (el cupón vale menos).',
          'En <span class="math">x = 50</span>: <span class="math">1.13·50 − 5 = 51.50</span> y <span class="math">1.13·50 − 5.65 = 50.85</span>.',
          'Para el inciso (b), halla la inversa de <span class="math">T(x) = 1.13x − 5</span>: <span class="math">T = 1.13x − 5</span> da <span class="math">x = (T + 5)/1.13</span>.',
          'Con <span class="math">T = 62.80</span>: <span class="math">x = 67.80/1.13 = 60</span>.'
        ],
        respuesta: '(a) <span class="math">1.13x − 5</span> y <span class="math">1.13x − 5.65</span>; en 50 valen <span class="math">$51.50</span> y <span class="math">$50.85</span>. (b) El precio base era <span class="math">$60</span>.'
      },
      {
        titulo: 'Inversa con restricción de dominio',
        enunciado: 'Sea <span class="math">f(x) = x² + 2</span>. Halla la inversa si el dominio se restringe a <span class="math">x ≥ 0</span> y, por separado, si se restringe a <span class="math">x ≤ 0</span>. Indica sus dominios.',
        pasos: [
          'Rango de <span class="math">f</span> en cualquiera de las dos restricciones: <span class="math">[2, +∞[</span> (el mínimo es <span class="math">f(0) = 2</span>).',
          'Escribe <span class="math">y = x² + 2</span>, así que <span class="math">x² = y − 2</span> y <span class="math">x = ±√(y − 2)</span>.',
          'Si <span class="math">x ≥ 0</span>, se elige el signo <strong>más</strong>: <span class="math">x = √(y − 2)</span>. Intercambiando, <span class="math">f<sup>−1</sup>(x) = √(x − 2)</span>.',
          'Si <span class="math">x ≤ 0</span>, se elige el signo <strong>menos</strong>: <span class="math">f<sup>−1</sup>(x) = −√(x − 2)</span>.',
          'En ambos casos <span class="math">Dom(f<sup>−1</sup>) = R<sub>f</sub> = [2, +∞[</span>. Comprobación (primer caso): <span class="math">f(f<sup>−1</sup>(3)) = (√1)² + 2 = 3</span> ✓.'
        ],
        respuesta: 'Para <span class="math">x ≥ 0</span>: <span class="math">f<sup>−1</sup>(x) = √(x − 2)</span>. Para <span class="math">x ≤ 0</span>: <span class="math">f<sup>−1</sup>(x) = −√(x − 2)</span>. Dominio de ambas: <span class="math">[2, +∞[</span>.'
      },
      {
        titulo: 'Inversa de una función racional',
        enunciado: 'Halla la inversa de <span class="math">f(x) = (2x + 1)/(x − 3)</span> y comprueba con un valor.',
        pasos: [
          'Escribe <span class="math">y = (2x + 1)/(x − 3)</span> y multiplica: <span class="math">y(x − 3) = 2x + 1</span>.',
          'Distribuye: <span class="math">xy − 3y = 2x + 1</span>. Junta los términos con <span class="math">x</span>: <span class="math">xy − 2x = 1 + 3y</span>.',
          'Factoriza: <span class="math">x(y − 2) = 1 + 3y</span>, luego <span class="math">x = (1 + 3y)/(y − 2)</span>.',
          'Intercambia variables: <span class="math">f<sup>−1</sup>(x) = (3x + 1)/(x − 2)</span>, con dominio <span class="math">ℝ − {2}</span> (que es el rango de <span class="math">f</span>).',
          'Comprobación: <span class="math">f<sup>−1</sup>(5) = 16/3</span> y <span class="math">f(16/3) = (32/3 + 1)/(16/3 − 3) = (35/3)/(7/3) = 5</span> ✓.'
        ],
        respuesta: '<span class="math">f<sup>−1</sup>(x) = (3x + 1)/(x − 2)</span>, con <span class="math">x ≠ 2</span>.'
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: 'Con <span class="math">f(x) = x + 5</span> y <span class="math">g(x) = 3x</span>, halla <span class="math">(f ∘ g)(x)</span>, <span class="math">(g ∘ f)(x)</span> y sus valores en <span class="math">x = 2</span>.',
        pasos: [
          '<span class="math">(f ∘ g)(x) = f(3x) = 3x + 5</span>; en <span class="math">x = 2</span>: <span class="math">6 + 5 = 11</span>.',
          '<span class="math">(g ∘ f)(x) = g(x + 5) = 3(x + 5) = 3x + 15</span>; en <span class="math">x = 2</span>: <span class="math">6 + 15 = 21</span>.'
        ],
        respuesta: '<span class="math">3x + 5</span> (vale 11) y <span class="math">3x + 15</span> (vale 21).'
      },
      {
        nivel: 'facil',
        enunciado: 'Con <span class="math">f(x) = x²</span> y <span class="math">g(x) = x − 3</span>, calcula <span class="math">(f ∘ g)(4)</span> y <span class="math">(g ∘ f)(4)</span>.',
        pasos: [
          '<span class="math">(f ∘ g)(4) = f(g(4)) = f(1) = 1</span>.',
          '<span class="math">(g ∘ f)(4) = g(f(4)) = g(16) = 13</span>.'
        ],
        respuesta: '<span class="math">(f ∘ g)(4) = 1</span> y <span class="math">(g ∘ f)(4) = 13</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Halla la inversa de <span class="math">f(x) = 5x − 10</span>.',
        pasos: [
          'Escribe <span class="math">y = 5x − 10</span>.',
          'Despeja: <span class="math">y + 10 = 5x</span>, <span class="math">x = (y + 10)/5</span>.',
          'Intercambia: <span class="math">f<sup>−1</sup>(x) = (x + 10)/5</span>.'
        ],
        respuesta: '<span class="math">f<sup>−1</sup>(x) = (x + 10)/5 = x/5 + 2</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Halla la inversa de <span class="math">f(x) = x/2 + 4</span> y verifica con <span class="math">f(f<sup>−1</sup>(x))</span>.',
        pasos: [
          '<span class="math">y = x/2 + 4</span>, entonces <span class="math">y − 4 = x/2</span> y <span class="math">x = 2(y − 4)</span>.',
          'Intercambia: <span class="math">f<sup>−1</sup>(x) = 2x − 8</span>.',
          'Verificación: <span class="math">f(2x − 8) = (2x − 8)/2 + 4 = x − 4 + 4 = x</span> ✓.'
        ],
        respuesta: '<span class="math">f<sup>−1</sup>(x) = 2x − 8</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Sean <span class="math">f(x) = x² + 1</span> y <span class="math">g(x) = √(x − 1)</span>. Halla <span class="math">(f ∘ g)(x)</span> y <span class="math">(g ∘ f)(x)</span> con sus dominios.',
        pasos: [
          '<span class="math">(f ∘ g)(x) = (√(x − 1))² + 1 = (x − 1) + 1 = x</span>.',
          'Dominio: <span class="math">g</span> exige <span class="math">x ≥ 1</span>, y el resultado <span class="math">√(x − 1) ≥ 0</span> está en el dominio de <span class="math">f</span>. Dominio <span class="math">[1, +∞[</span>, aunque la expresión final sea <span class="math">x</span>.',
          '<span class="math">(g ∘ f)(x) = √((x² + 1) − 1) = √(x²) = |x|</span>. Siempre existe (<span class="math">x² + 1 ≥ 1</span>): dominio <span class="math">ℝ</span>.'
        ],
        respuesta: '<span class="math">(f ∘ g)(x) = x</span> con dominio <span class="math">[1, +∞[</span>; <span class="math">(g ∘ f)(x) = |x|</span> con dominio <span class="math">ℝ</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Halla la inversa de <span class="math">f(x) = x³ + 2</span>.',
        pasos: [
          '<span class="math">y = x³ + 2</span>, entonces <span class="math">x³ = y − 2</span>.',
          'Raíz cúbica (existe para cualquier real): <span class="math">x = ∛(y − 2)</span>.',
          'Intercambia: <span class="math">f<sup>−1</sup>(x) = ∛(x − 2)</span>.',
          'Verificación: <span class="math">f(∛(x − 2)) = (x − 2) + 2 = x</span> ✓.'
        ],
        respuesta: '<span class="math">f<sup>−1</sup>(x) = ∛(x − 2)</span>, dominio <span class="math">ℝ</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Halla la inversa de <span class="math">f(x) = 4/(x + 1)</span>, con <span class="math">x ≠ −1</span>, e indica su dominio.',
        pasos: [
          '<span class="math">y = 4/(x + 1)</span>, así que <span class="math">y(x + 1) = 4</span> y <span class="math">x + 1 = 4/y</span>.',
          '<span class="math">x = 4/y − 1 = (4 − y)/y</span>.',
          'Intercambia: <span class="math">f<sup>−1</sup>(x) = (4 − x)/x</span>.',
          'El rango de <span class="math">f</span> es <span class="math">ℝ − {0}</span> (la fracción nunca vale 0), así que <span class="math">x ≠ 0</span>.',
          'Verificación: <span class="math">f((4 − x)/x) = 4/((4 − x)/x + 1) = 4/(4/x) = x</span> ✓.'
        ],
        respuesta: '<span class="math">f<sup>−1</sup>(x) = (4 − x)/x</span>, con <span class="math">x ≠ 0</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Sea <span class="math">f(x) = √(x + 3)</span> con dominio <span class="math">[−3, +∞[</span>. Halla su inversa y su dominio.',
        pasos: [
          'Rango de <span class="math">f</span>: <span class="math">[0, +∞[</span> (la raíz es no negativa y vale 0 en <span class="math">x = −3</span>).',
          '<span class="math">y = √(x + 3)</span>; eleva al cuadrado: <span class="math">y² = x + 3</span>, y <span class="math">x = y² − 3</span>.',
          'Intercambia: <span class="math">f<sup>−1</sup>(x) = x² − 3</span>.',
          'El dominio de la inversa es el rango de <span class="math">f</span>: <span class="math">x ≥ 0</span> (sin esa restricción sería una parábola completa, que no es inversa).'
        ],
        respuesta: '<span class="math">f<sup>−1</sup>(x) = x² − 3</span> con <span class="math">x ≥ 0</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Halla la inversa de <span class="math">f(x) = (x + 2)/(3x − 1)</span> (dominio <span class="math">x ≠ 1/3</span>). ¿Qué observas?',
        pasos: [
          '<span class="math">y(3x − 1) = x + 2</span>, o sea <span class="math">3xy − y = x + 2</span>.',
          'Junta términos con <span class="math">x</span>: <span class="math">3xy − x = y + 2</span>, y factoriza <span class="math">x(3y − 1) = y + 2</span>.',
          '<span class="math">x = (y + 2)/(3y − 1)</span>. Intercambia variables: <span class="math">f<sup>−1</sup>(x) = (x + 2)/(3x − 1)</span>.',
          'Es exactamente la misma función: <span class="math">f<sup>−1</sup> = f</span>. Comprobación con la fórmula homográfica (<span class="math">a = 1, b = 2, c = 3, d = −1</span>): <span class="math">(−dx + b)/(cx − a) = (x + 2)/(3x − 1)</span> ✓.',
          'Su gráfica es simétrica respecto a la recta <span class="math">y = x</span>.'
        ],
        respuesta: '<span class="math">f<sup>−1</sup>(x) = (x + 2)/(3x − 1) = f(x)</span>: la función es su propia inversa (involutiva).'
      },
      {
        nivel: 'dificil',
        enunciado: 'Sea <span class="math">f(x) = x² − 4x + 7</span> con dominio <span class="math">[2, +∞[</span>. Halla <span class="math">f<sup>−1</sup>(x)</span>, su dominio y calcula <span class="math">f<sup>−1</sup>(7)</span>.',
        pasos: [
          'Completa cuadrados: <span class="math">f(x) = (x − 2)² + 3</span>; vértice <span class="math">(2, 3)</span>, así que el rango es <span class="math">[3, +∞[</span>.',
          '<span class="math">y = (x − 2)² + 3</span>, luego <span class="math">(x − 2)² = y − 3</span> y <span class="math">x − 2 = ±√(y − 3)</span>.',
          'Como <span class="math">x ≥ 2</span>, <span class="math">x − 2 ≥ 0</span> y se toma el signo más: <span class="math">x = 2 + √(y − 3)</span>.',
          'Intercambia: <span class="math">f<sup>−1</sup>(x) = 2 + √(x − 3)</span>, dominio <span class="math">[3, +∞[</span>.',
          '<span class="math">f<sup>−1</sup>(7) = 2 + √4 = 4</span>. Comprobación: <span class="math">f(4) = 16 − 16 + 7 = 7</span> ✓.'
        ],
        respuesta: '<span class="math">f<sup>−1</sup>(x) = 2 + √(x − 3)</span>, dominio <span class="math">[3, +∞[</span>, y <span class="math">f<sup>−1</sup>(7) = 4</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Sea <span class="math">f(x) = 2x + 1</span>. Halla la función <span class="math">g</span> tal que <span class="math">(g ∘ f)(x) = 4x² + 4x + 3</span>.',
        pasos: [
          'Llama <span class="math">u = 2x + 1</span>; entonces <span class="math">x = (u − 1)/2</span>.',
          'Reescribe el lado derecho con <span class="math">u</span>: <span class="math">4x² + 4x + 3 = (2x)² + 2(2x) + 3 = (u − 1)² + 2(u − 1) + 3</span>.',
          'Desarrolla: <span class="math">u² − 2u + 1 + 2u − 2 + 3 = u² + 2</span>.',
          'Entonces <span class="math">g(u) = u² + 2</span>. Comprobación: <span class="math">g(f(x)) = (2x + 1)² + 2 = 4x² + 4x + 3</span> ✓.'
        ],
        respuesta: '<span class="math">g(x) = x² + 2</span>.'
      }
    ],
    teoricas: [
      {
        q: 'En <span class="math">(f ∘ g)(x)</span>, ¿qué función actúa primero? ¿Por qué suele confundir?',
        a: 'Actúa primero <span class="math">g</span>, la de más adentro, porque <span class="math">(f ∘ g)(x) = f(g(x))</span>. Confunde porque al leer de izquierda a derecha parece que <span class="math">f</span> va primero; piensa siempre de adentro hacia afuera.'
      },
      {
        q: '¿Es cierto que <span class="math">f ∘ g = g ∘ f</span>? Da un ejemplo.',
        a: 'En general no. Con <span class="math">f(x) = x + 2</span> y <span class="math">g(x) = 3x</span>: <span class="math">(f ∘ g)(x) = 3x + 2</span>, pero <span class="math">(g ∘ f)(x) = 3x + 6</span>. Solo coinciden en casos particulares, como cuando una es la inversa de la otra.'
      },
      {
        q: '¿Qué condiciones debe cumplir <span class="math">x</span> para estar en el dominio de <span class="math">f ∘ g</span>?',
        a: 'Debe estar en el dominio de <span class="math">g</span>, y además <span class="math">g(x)</span> debe estar en el dominio de <span class="math">f</span>.'
      },
      {
        q: '¿Cuándo existe la función inversa y qué relación hay entre los conjuntos de <span class="math">f</span> y <span class="math">f<sup>−1</sup></span>?',
        a: 'Existe cuando <span class="math">f</span> es biyectiva (inyectiva y sobreyectiva). El dominio de <span class="math">f<sup>−1</sup></span> es el rango de <span class="math">f</span>, y el rango de <span class="math">f<sup>−1</sup></span> es el dominio de <span class="math">f</span>.'
      },
      {
        q: '¿Es <span class="math">f<sup>−1</sup>(x)</span> lo mismo que <span class="math">1/f(x)</span>?',
        a: 'No. <span class="math">f<sup>−1</sup></span> es la función que deshace a <span class="math">f</span>; <span class="math">1/f(x)</span> es el recíproco del valor. Con <span class="math">f(x) = 2x</span>: <span class="math">f<sup>−1</sup>(x) = x/2</span>, mientras que <span class="math">1/f(x) = 1/(2x)</span>.'
      },
      {
        q: '¿Cómo se relacionan geométricamente las gráficas de <span class="math">f</span> y <span class="math">f<sup>−1</sup></span>?',
        a: 'Son simétricas respecto a la recta <span class="math">y = x</span>: cada punto <span class="math">(a, b)</span> de <span class="math">f</span> corresponde al punto <span class="math">(b, a)</span> de <span class="math">f<sup>−1</sup></span>.'
      },
      {
        q: '¿Por qué hay que restringir el dominio de <span class="math">x²</span> para hallar su inversa?',
        a: 'Porque <span class="math">x²</span> no es inyectiva en <span class="math">ℝ</span>: dos números opuestos dan el mismo cuadrado, y la "vuelta" tendría dos valores posibles. Al restringir a <span class="math">x ≥ 0</span> (o a <span class="math">x ≤ 0</span>) se elige una sola rama y la inversa es <span class="math">√x</span> (o <span class="math">−√x</span>).'
      },
      {
        q: '¿Cómo compruebas que una función <span class="math">g</span> es de verdad la inversa de <span class="math">f</span>?',
        a: 'Compones en ambos sentidos: debe cumplirse <span class="math">f(g(x)) = x</span> en el dominio de <span class="math">g</span> y <span class="math">g(f(x)) = x</span> en el dominio de <span class="math">f</span>. Si una de las dos no da <span class="math">x</span>, hay un error.'
      }
    ],
    errores: [
      'Invertir el orden de la composición: calcular <span class="math">(f ∘ g)(x)</span> como si fuera <span class="math">g(f(x))</span>. Recuerda: de adentro hacia afuera, primero la función que está dentro del paréntesis.',
      'Creer que <span class="math">f<sup>−1</sup>(x) = 1/f(x)</span>. El exponente "−1" es notación de inversa; si <span class="math">f(x) = x + 3</span>, <span class="math">f<sup>−1</sup>(x) = x − 3</span>, no <span class="math">1/(x + 3)</span>.',
      'Olvidar intercambiar las variables (dejar la respuesta como <span class="math">x = (y + 7)/3</span>) o intercambiarlas antes de despejar. Despeja primero, y solo al final reemplaza <span class="math">y</span> por <span class="math">x</span>.',
      'Simplificar la composición y olvidar su dominio: <span class="math">(f ∘ g)(x) = x</span> no significa que valga para todo real. El dominio sale de la composición <em>sin simplificar</em> y de las restricciones de <span class="math">g</span>.'
    ],
    aplicacion: {
      titulo: 'Convertir temperaturas: Celsius, Fahrenheit y Kelvin',
      html: `<p>La temperatura de Santa Ana ronda los <span class="math">31 °C</span>. Muchos termómetros y recetas usan Fahrenheit con la función <span class="math">F(C) = 1.8C + 32</span>.</p>
<p><strong>1) Evaluar:</strong> <span class="math">F(31) = 1.8·31 + 32 = 55.8 + 32 = 87.8 °F</span>.</p>
<p><strong>2) Inversa:</strong> para pasar de Fahrenheit a Celsius necesitas <span class="math">F<sup>−1</sup></span>. Despeja: <span class="math">F = 1.8C + 32</span> da <span class="math">C = (F − 32)/1.8</span>. Como <span class="math">F</span> es lineal con pendiente distinta de 0, es biyectiva y la inversa existe. Si un termómetro marca <span class="math">95 °F</span>: <span class="math">C = (95 − 32)/1.8 = 63/1.8 = 35 °C</span>.</p>
<p><strong>3) Composición:</strong> la escala Kelvin se obtiene de Celsius con <span class="math">K(C) = C + 273.15</span>. Para ir de Fahrenheit a Kelvin compones: <span class="math">(K ∘ F<sup>−1</sup>)(F) = (F − 32)/1.8 + 273.15</span>.</p>
<p>Con <span class="math">95 °F</span>: <span class="math">35 + 273.15 = 308.15 K</span>.</p>
<p><strong>Comprobación con la propiedad de identidad:</strong> <span class="math">F(F<sup>−1</sup>(95)) = 1.8·35 + 32 = 63 + 32 = 95</span> ✓. Este es el patrón de las conversiones: cada cambio de unidades es una función biyectiva, y volver atrás es aplicar su inversa.</p>`
    },
    calc: 'inversa',
    examen: [
      { tipo: 'num', q: 'Sean <span class="math">f(x) = 2x − 1</span> y <span class="math">g(x) = x² + 1</span>. Calcula <span class="math">(f ∘ g)(3)</span>.', r: 19, tol: 0.01, pasos: [
        '<span class="math">g(3) = 9 + 1 = 10</span>.',
        '<span class="math">f(10) = 2·10 − 1 = 19</span>.',
        'Primero actúa <span class="math">g</span>, luego <span class="math">f</span>.'
      ] },
      { tipo: 'num', q: 'Sean <span class="math">f(x) = 3x + 1</span> y <span class="math">g(x) = x² − 4</span>. Calcula <span class="math">(g ∘ f)(−2)</span>.', r: 21, tol: 0.01, pasos: [
        '<span class="math">f(−2) = 3(−2) + 1 = −5</span>.',
        '<span class="math">g(−5) = 25 − 4 = 21</span>.',
        'Aquí actúa primero <span class="math">f</span>.'
      ] },
      { tipo: 'num', q: 'Si <span class="math">f(x) = 2x + 5</span>, calcula <span class="math">f<sup>−1</sup>(11)</span>.', r: 3, tol: 0.01, pasos: [
        'Inversa: <span class="math">y = 2x + 5</span> da <span class="math">x = (y − 5)/2</span>, es decir <span class="math">f<sup>−1</sup>(x) = (x − 5)/2</span>.',
        '<span class="math">f<sup>−1</sup>(11) = (11 − 5)/2 = 3</span>.',
        'Comprobación: <span class="math">f(3) = 11</span>.'
      ] },
      { tipo: 'num', q: 'Si <span class="math">f(x) = x³ − 1</span>, calcula <span class="math">f<sup>−1</sup>(26)</span>.', r: 3, tol: 0.01, pasos: [
        '<span class="math">f<sup>−1</sup>(x) = ∛(x + 1)</span>, pues <span class="math">y = x³ − 1</span> da <span class="math">x = ∛(y + 1)</span>.',
        '<span class="math">f<sup>−1</sup>(26) = ∛27 = 3</span>.',
        'Comprobación: <span class="math">3³ − 1 = 26</span>.'
      ] },
      { tipo: 'num', q: 'Si <span class="math">f(x) = 4/(x + 1)</span>, calcula <span class="math">f<sup>−1</sup>(2)</span>.', r: 1, tol: 0.01, pasos: [
        'Se busca <span class="math">x</span> con <span class="math">f(x) = 2</span>: <span class="math">4/(x + 1) = 2</span>.',
        '<span class="math">x + 1 = 2</span>, luego <span class="math">x = 1</span>.',
        'También sale de <span class="math">f<sup>−1</sup>(x) = (4 − x)/x</span>: <span class="math">(4 − 2)/2 = 1</span>.'
      ] },
      { tipo: 'lista', q: 'Con <span class="math">f(x) = x² − 3x</span> y <span class="math">g(x) = x + 1</span>, resuelve <span class="math">(f ∘ g)(x) = 0</span>. Escribe las soluciones separadas por comas.', r: [-1, 2], tol: 0.01, pasos: [
        '<span class="math">(f ∘ g)(x) = (x + 1)² − 3(x + 1)</span>.',
        'Factoriza <span class="math">(x + 1)</span>: <span class="math">(x + 1)[(x + 1) − 3] = (x + 1)(x − 2)</span>.',
        '<span class="math">(x + 1)(x − 2) = 0</span> da <span class="math">x = −1</span> o <span class="math">x = 2</span>.'
      ] },
      { tipo: 'par', q: 'Sea <span class="math">f(x) = x² + 1</span> con <span class="math">x ≥ 0</span>. Da el punto <span class="math">(x, y)</span> de la gráfica de <span class="math">f<sup>−1</sup></span> cuya abscisa es 10.', r: [10, 3], tol: 0.01, pasos: [
        'Hay que hallar <span class="math">a</span> con <span class="math">f(a) = 10</span>: <span class="math">a² + 1 = 10</span>, luego <span class="math">a = 3</span> (se toma <span class="math">a ≥ 0</span>).',
        'El punto <span class="math">(3, 10)</span> está en la gráfica de <span class="math">f</span>.',
        'Al intercambiar coordenadas, <span class="math">(10, 3)</span> está en la gráfica de <span class="math">f<sup>−1</sup></span> (equivale a <span class="math">f<sup>−1</sup>(x) = √(x − 1)</span> con <span class="math">x = 10</span>).'
      ] },
      { tipo: 'num', q: 'Sea <span class="math">f(x) = (x + 2)/(3x − 1)</span>. Calcula <span class="math">f(f(5))</span>.', r: 5, tol: 0.01, pasos: [
        '<span class="math">f(5) = 7/14 = 1/2</span>.',
        '<span class="math">f(1/2) = (5/2)/(1/2) = 5</span>.',
        'Esta función es su propia inversa, así que <span class="math">f(f(x)) = x</span>.'
      ] },
      { tipo: 'opt', q: '¿Cuál es la inversa de <span class="math">f(x) = (x − 1)/2</span>?', opciones: ['<span class="math">2x − 1</span>', '<span class="math">2x + 1</span>', '<span class="math">(x + 1)/2</span>', '<span class="math">2/(x − 1)</span>'], correcta: 1, pasos: [
        '<span class="math">y = (x − 1)/2</span> da <span class="math">2y = x − 1</span>.',
        '<span class="math">x = 2y + 1</span>.',
        'Intercambiando, <span class="math">f<sup>−1</sup>(x) = 2x + 1</span>. Comprobación: <span class="math">f(2x + 1) = 2x/2 = x</span>.'
      ] },
      { tipo: 'opt', q: 'Si <span class="math">f(x) = √x</span> y <span class="math">g(x) = x − 4</span>, el dominio de <span class="math">(f ∘ g)(x)</span> es:', opciones: ['<span class="math">]−∞, 4]</span>', '<span class="math">[0, +∞[</span>', '<span class="math">ℝ</span>', '<span class="math">[4, +∞[</span>'], correcta: 3, pasos: [
        '<span class="math">(f ∘ g)(x) = √(x − 4)</span>.',
        'Debe cumplirse <span class="math">g(x) ∈ Dom(f)</span>, es decir, <span class="math">x − 4 ≥ 0</span>.',
        'Entonces <span class="math">x ≥ 4</span>: dominio <span class="math">[4, +∞[</span>.'
      ] }
    ]
  };

  /* ====================================================================== */
  /* TEMA 1.15 — Definición, propiedades y ecuaciones logarítmicas          */
  /* ====================================================================== */
  T['1.15'] = {
    id: '1.15',
    unidad: 5,
    titulo: 'Logaritmos: definición, propiedades y ecuaciones',
    resumen: 'Entiende el logaritmo como un exponente, aplica sus propiedades y resuelve ecuaciones logarítmicas y exponenciales.',
    objetivos: [
      'Convertir entre la forma exponencial y la forma logarítmica y evaluar logaritmos sencillos.',
      'Aplicar las propiedades del producto, cociente, potencia y cambio de base para expandir, condensar y calcular.',
      'Resolver ecuaciones logarítmicas verificando siempre el dominio de las soluciones.',
      'Usar logaritmos para resolver ecuaciones exponenciales y problemas de crecimiento y decaimiento.'
    ],
    teoria: [
      {
        titulo: 'Definición: el logaritmo es un exponente',
        html: `<p>El logaritmo responde esta pregunta: <em>¿a qué exponente debo elevar la base <span class="math">a</span> para obtener <span class="math">b</span>?</em></p>
<p><span class="math">log<sub>a</sub>(b) = x ⟺ a<sup>x</sup> = b</span>, con <span class="math">a &gt; 0</span>, <span class="math">a ≠ 1</span> y <span class="math">b &gt; 0</span>.</p>
<p>Son dos maneras de escribir lo mismo: la forma <em>logarítmica</em> y la forma <em>exponencial</em>.</p>
<table>
<tr><th>Forma exponencial</th><th>Forma logarítmica</th></tr>
<tr><td><span class="math">2<sup>5</sup> = 32</span></td><td><span class="math">log<sub>2</sub>(32) = 5</span></td></tr>
<tr><td><span class="math">10<sup>3</sup> = 1000</span></td><td><span class="math">log<sub>10</sub>(1000) = 3</span></td></tr>
<tr><td><span class="math">3<sup>−2</sup> = 1/9</span></td><td><span class="math">log<sub>3</sub>(1/9) = −2</span></td></tr>
<tr><td><span class="math">9<sup>1/2</sup> = 3</span></td><td><span class="math">log<sub>9</sub>(3) = 1/2</span></td></tr>
</table>
<p><strong>Por qué esas restricciones:</strong> la base debe ser positiva y distinta de 1 (si fuera 1, <span class="math">1<sup>x</sup></span> siempre es 1 y no distingue exponentes). El argumento <span class="math">b</span> debe ser positivo, porque una base positiva elevada a cualquier exponente real nunca da cero ni un número negativo.</p>
<p>Truco para recordar: <strong>el logaritmo es el exponente</strong>. En <span class="math">log<sub>2</sub>(8) = 3</span>, el 3 es el exponente: <span class="math">2³ = 8</span>.</p>`
      },
      {
        titulo: 'Logaritmos especiales y valores clave',
        html: `<ul>
<li><strong>Logaritmo común</strong> (base 10): <span class="math">log(x)</span> significa <span class="math">log<sub>10</sub>(x)</span>. Es el que usan las calculadoras con la tecla "log".</li>
<li><strong>Logaritmo natural</strong> (base <span class="math">e ≈ 2.71828</span>): se escribe <span class="math">ln(x) = log<sub>e</sub>(x)</span>. Aparece en crecimiento continuo, finanzas y ciencias.</li>
</ul>
<p>Valores que siempre se cumplen, para cualquier base válida:</p>
<ul>
<li><span class="math">log<sub>a</sub>(1) = 0</span>, porque <span class="math">a⁰ = 1</span>.</li>
<li><span class="math">log<sub>a</sub>(a) = 1</span>, porque <span class="math">a¹ = a</span>.</li>
<li><span class="math">log<sub>a</sub>(a<sup>x</sup>) = x</span> y <span class="math">a<sup>log<sub>a</sub>(x)</sup> = x</span> (la exponencial y el logaritmo se "deshacen").</li>
</ul>
<p>Valores en base 10 para memorizar: <span class="math">log(0.01) = −2</span>, <span class="math">log(0.1) = −1</span>, <span class="math">log(1) = 0</span>, <span class="math">log(10) = 1</span>, <span class="math">log(100) = 2</span>.</p>
<p>Signo: con base <span class="math">a &gt; 1</span>, el logaritmo es negativo si el argumento está entre 0 y 1, cero en 1, y positivo si el argumento es mayor que 1. <span class="math">log(−5)</span> y <span class="math">log(0)</span> <strong>no existen</strong> en los reales.</p>`
      },
      {
        titulo: 'Propiedades de los logaritmos',
        html: `<p>Para <span class="math">M &gt; 0</span>, <span class="math">N &gt; 0</span> y cualquier base válida:</p>
<ol>
<li><strong>Producto:</strong> <span class="math">log<sub>a</sub>(M·N) = log<sub>a</sub>(M) + log<sub>a</sub>(N)</span> (un producto se vuelve suma).</li>
<li><strong>Cociente:</strong> <span class="math">log<sub>a</sub>(M/N) = log<sub>a</sub>(M) − log<sub>a</sub>(N)</span> (un cociente se vuelve resta).</li>
<li><strong>Potencia:</strong> <span class="math">log<sub>a</sub>(M<sup>b</sup>) = b·log<sub>a</sub>(M)</span> (el exponente baja multiplicando).</li>
<li><strong>Raíz</strong> (caso de la potencia): <span class="math">log<sub>a</sub>(√M) = (1/2)·log<sub>a</sub>(M)</span>.</li>
</ol>
<p>Por qué funcionan: vienen de las propiedades de los exponentes. Como <span class="math">a<sup>x</sup>·a<sup>y</sup> = a<sup>x+y</sup></span>, los logaritmos de un producto se suman.</p>
<p>Ejemplo: <span class="math">log<sub>2</sub>(8·4) = log<sub>2</sub>(8) + log<sub>2</sub>(4) = 3 + 2 = 5</span> y de hecho <span class="math">2⁵ = 32</span>.</p>
<p><strong>Lo que NO existe:</strong> no hay propiedad para la suma o resta de argumentos. <span class="math">log(M + N) ≠ log(M) + log(N)</span>. Prueba: <span class="math">log(10 + 10) = log(20) ≈ 1.301</span>, pero <span class="math">log(10) + log(10) = 2</span>.</p>`
      },
      {
        titulo: 'Cambio de base y uso de la calculadora',
        html: `<p>La calculadora solo tiene <span class="math">log</span> (base 10) y <span class="math">ln</span> (base <span class="math">e</span>). Para evaluar un logaritmo en otra base usa:</p>
<p><span class="math">log<sub>a</sub>(b) = log(b)/log(a) = ln(b)/ln(a)</span></p>
<p>Ejemplo: <span class="math">log<sub>2</sub>(7) = ln(7)/ln(2) ≈ 1.9459/0.6931 ≈ 2.807</span>. Comprobación: <span class="math">2<sup>2.807</sup> ≈ 7</span>.</p>
<p>Consecuencia útil: <span class="math">log<sub>a</sub>(b) = 1/log<sub>b</sub>(a)</span>.</p>
<p>Ojo: <span class="math">log(b)/log(a)</span> es un cociente de logaritmos y <em>no se puede simplificar</em> como <span class="math">log(b/a)</span>.</p>
<p>Con la calculadora de este tema puedes comprobar cualquier logaritmo de base arbitraria y revisar tus ecuaciones.</p>`
      },
      {
        titulo: 'La función logarítmica y su gráfica',
        html: `<p>La función <span class="math">f(x) = log<sub>a</sub>(x)</span> es la <strong>inversa</strong> de <span class="math">g(x) = a<sup>x</sup></span> (tema 1.14): su gráfica es la reflexión de la exponencial sobre la recta <span class="math">y = x</span>. Esto significa que cada propiedad de la exponencial tiene su versión "volteada":</p>
<table>
<tr><th>Propiedad</th><th><span class="math">a<sup>x</sup></span></th><th><span class="math">log<sub>a</sub>(x)</span></th></tr>
<tr><td>Dominio</td><td><span class="math">ℝ</span></td><td><span class="math">]0, +∞[</span></td></tr>
<tr><td>Rango</td><td><span class="math">]0, +∞[</span></td><td><span class="math">ℝ</span></td></tr>
<tr><td>Asíntota</td><td>horizontal <span class="math">y = 0</span></td><td>vertical <span class="math">x = 0</span></td></tr>
<tr><td>Punto fijo</td><td><span class="math">(0, 1)</span></td><td><span class="math">(1, 0)</span></td></tr>
<tr><td>Creciente si</td><td><span class="math">a &gt; 1</span></td><td><span class="math">a &gt; 1</span></td></tr>
<tr><td>Decreciente si</td><td><span class="math">0 &lt; a &lt; 1</span></td><td><span class="math">0 &lt; a &lt; 1</span></td></tr>
</table>
<p>También pasa por <span class="math">(a, 1)</span> y por <span class="math">(1/a, −1)</span>: sirven para dibujarla. Crece muy lentamente: <span class="math">log<sub>2</sub>(1024) = 10</span>.</p>
<p>Desplazamientos: <span class="math">log<sub>a</sub>(x − h) + k</span> mueve la gráfica <span class="math">h</span> a la derecha y <span class="math">k</span> arriba; la asíntota vertical pasa a ser <span class="math">x = h</span> y el dominio es <span class="math">x &gt; h</span>.</p>`
      },
      {
        titulo: 'Ecuaciones logarítmicas',
        html: `<p>Una ecuación logarítmica tiene la incógnita dentro de un logaritmo. Procedimiento:</p>
<ol>
<li><strong>Dominio:</strong> escribe las condiciones de que cada argumento sea positivo.</li>
<li><strong>Reduce</strong> a un solo logaritmo con las propiedades de producto, cociente y potencia.</li>
<li>Según el caso:
  <ul>
  <li><span class="math">log<sub>a</sub>(A) = k</span>: pasa a forma exponencial, <span class="math">A = a<sup>k</sup></span>.</li>
  <li><span class="math">log<sub>a</sub>(A) = log<sub>a</sub>(B)</span>: como el logaritmo es inyectivo, <span class="math">A = B</span>.</li>
  </ul>
</li>
<li>Resuelve la ecuación algebraica (lineal o cuadrática) que queda.</li>
<li><strong>Comprueba</strong> cada solución en el dominio original. Una solución que haga que algún argumento sea negativo o cero se <em>descarta</em>.</li>
</ol>
<p>Ese último paso es obligatorio porque, al juntar logaritmos con las propiedades, el dominio se agranda. Por ejemplo, <span class="math">log(x) + log(x − 3)</span> exige <span class="math">x &gt; 3</span>, pero <span class="math">log(x(x − 3))</span> aceptaría también <span class="math">x &lt; 0</span>.</p>
<p>Si en la ecuación aparece <span class="math">log<sub>a</sub>(x)</span> elevado al cuadrado, usa la sustitución <span class="math">u = log<sub>a</sub>(x)</span> para obtener una cuadrática en <span class="math">u</span>.</p>`
      },
      {
        titulo: 'Ecuaciones exponenciales y modelos de crecimiento',
        html: `<p>Cuando no puedes igualar las bases (tema 1.12), aplica logaritmo a ambos lados y baja el exponente:</p>
<p><span class="math">a<sup>x</sup> = b</span> implica <span class="math">x = log(b)/log(a)</span> (o con <span class="math">ln</span>).</p>
<p>Ejemplo: <span class="math">3<sup>x</sup> = 20</span> da <span class="math">x = ln(20)/ln(3) ≈ 3.0 / 1.0986 ≈ 2.727</span>.</p>
<p><strong>Modelo de eliminación de un medicamento.</strong> Si un paciente recibe 10 mg y el cuerpo elimina el 20 % cada hora, queda el 80 % de lo anterior: <span class="math">A(t) = 10·(0.8)<sup>t</sup></span> mg tras <span class="math">t</span> horas. Para saber cuándo quedan 5 mg se resuelve <span class="math">10·(0.8)<sup>t</sup> = 5</span>, o sea <span class="math">(0.8)<sup>t</sup> = 0.5</span>, y <span class="math">t = ln(0.5)/ln(0.8) ≈ 3.11</span> horas (la <em>vida media</em>).</p>
<p>La forma general es <span class="math">A(t) = A₀·b<sup>t</sup></span>: si <span class="math">b &gt; 1</span> hay crecimiento (por ejemplo, un depósito con interés compuesto) y si <span class="math">0 &lt; b &lt; 1</span>, decaimiento. El tiempo se obtiene siempre con un logaritmo.</p>`
      }
    ],
    formulas: [
      { label: 'Definición', html: 'log<sub>a</sub>(b) = x ⟺ a<sup>x</sup> = b' },
      { label: 'Producto', html: 'log<sub>a</sub>(M·N) = log<sub>a</sub>(M) + log<sub>a</sub>(N)' },
      { label: 'Cociente', html: 'log<sub>a</sub>(M/N) = log<sub>a</sub>(M) − log<sub>a</sub>(N)' },
      { label: 'Potencia', html: 'log<sub>a</sub>(M<sup>b</sup>) = b·log<sub>a</sub>(M)' },
      { label: 'Valores clave', html: 'log<sub>a</sub>(1) = 0,   log<sub>a</sub>(a) = 1' },
      { label: 'Cambio de base', html: 'log<sub>a</sub>(b) = ln(b)/ln(a)' },
      { label: 'Ecuación exponencial', html: 'a<sup>x</sup> = b ⟹ x = ln(b)/ln(a)' },
      { label: 'Decaimiento o crecimiento', html: 'A(t) = A₀·b<sup>t</sup>' }
    ],
    ejemplos: [
      {
        titulo: 'Evaluar logaritmos',
        enunciado: 'Calcula: (a) <span class="math">log<sub>2</sub>(32)</span>, (b) <span class="math">log<sub>3</sub>(1/9)</span>, (c) <span class="math">log<sub>1/2</sub>(8)</span>, (d) <span class="math">log<sub>25</sub>(5)</span>, (e) <span class="math">log(0.001)</span>.',
        pasos: [
          '(a) ¿A qué exponente se eleva 2 para dar 32? <span class="math">2⁵ = 32</span>, así que vale 5.',
          '(b) <span class="math">3<sup>x</sup> = 1/9 = 3<sup>−2</sup></span>, luego <span class="math">x = −2</span>.',
          '(c) <span class="math">(1/2)<sup>x</sup> = 8</span>. Como <span class="math">8 = 2³ = (1/2)<sup>−3</sup></span>, <span class="math">x = −3</span>.',
          '(d) <span class="math">25<sup>x</sup> = 5</span>. Como <span class="math">25<sup>1/2</sup> = 5</span>, <span class="math">x = 1/2</span>.',
          '(e) Base 10: <span class="math">10<sup>x</sup> = 0.001 = 10<sup>−3</sup></span>, entonces <span class="math">x = −3</span>.'
        ],
        respuesta: '(a) 5; (b) −2; (c) −3; (d) 1/2; (e) −3.'
      },
      {
        titulo: 'Expandir y condensar',
        enunciado: '(a) Expande <span class="math">log<sub>2</sub>(8x³/y)</span>. (b) Condensa <span class="math">2·log(5) + log(4) − log(2)</span> en un solo logaritmo y evalúalo. (c) Con <span class="math">log(2) ≈ 0.301</span> y <span class="math">log(3) ≈ 0.477</span>, calcula <span class="math">log(12)</span> y <span class="math">log(1.5)</span>.',
        pasos: [
          '(a) Cociente: <span class="math">log<sub>2</sub>(8x³) − log<sub>2</sub>(y)</span>. Producto: <span class="math">log<sub>2</sub>(8) + log<sub>2</sub>(x³) − log<sub>2</sub>(y)</span>. Potencia: <span class="math">3 + 3·log<sub>2</sub>(x) − log<sub>2</sub>(y)</span>.',
          '(b) Potencia: <span class="math">2·log(5) = log(25)</span>. Entonces <span class="math">log(25) + log(4) − log(2) = log(25·4/2) = log(50)</span>, que vale <span class="math">≈ 1.699</span>.',
          '(c) <span class="math">12 = 2²·3</span>, entonces <span class="math">log(12) = 2·0.301 + 0.477 = 1.079</span>.',
          '<span class="math">1.5 = 3/2</span>, entonces <span class="math">log(1.5) = 0.477 − 0.301 = 0.176</span>.'
        ],
        respuesta: '(a) <span class="math">3 + 3·log<sub>2</sub>(x) − log<sub>2</sub>(y)</span>; (b) <span class="math">log(50) ≈ 1.699</span>; (c) <span class="math">log(12) ≈ 1.079</span>, <span class="math">log(1.5) ≈ 0.176</span>.'
      },
      {
        titulo: 'Ecuación con dos logaritmos',
        enunciado: 'Resuelve <span class="math">log<sub>2</sub>(x) + log<sub>2</sub>(x − 1) = 1</span>.',
        pasos: [
          'Dominio: <span class="math">x &gt; 0</span> y <span class="math">x − 1 &gt; 0</span>, o sea <span class="math">x &gt; 1</span>.',
          'Producto: <span class="math">log<sub>2</sub>[x(x − 1)] = 1</span>.',
          'Forma exponencial: <span class="math">x(x − 1) = 2¹ = 2</span>, entonces <span class="math">x² − x − 2 = 0</span>.',
          'Factoriza: <span class="math">(x − 2)(x + 1) = 0</span>, así que <span class="math">x = 2</span> o <span class="math">x = −1</span>.',
          'Comprobación: <span class="math">x = −1</span> no está en el dominio (<span class="math">log<sub>2</sub>(−1)</span> no existe): se descarta. Para <span class="math">x = 2</span>: <span class="math">log<sub>2</sub>(2) + log<sub>2</sub>(1) = 1 + 0 = 1</span> ✓.'
        ],
        respuesta: '<span class="math">x = 2</span>.'
      },
      {
        titulo: 'Logaritmo igual a número y logaritmo igual a logaritmo',
        enunciado: 'Resuelve: (a) <span class="math">log<sub>5</sub>(3x − 2) = 2</span>; (b) <span class="math">ln(2x − 1) = ln(x + 4)</span>.',
        pasos: [
          '(a) Dominio: <span class="math">3x − 2 &gt; 0</span>. Forma exponencial: <span class="math">3x − 2 = 5² = 25</span>, entonces <span class="math">3x = 27</span> y <span class="math">x = 9</span>. Comprobación: <span class="math">3·9 − 2 = 25 &gt; 0</span> y <span class="math">log<sub>5</sub>(25) = 2</span> ✓.',
          '(b) Dominio: <span class="math">2x − 1 &gt; 0</span> y <span class="math">x + 4 &gt; 0</span>, o sea <span class="math">x &gt; 1/2</span>.',
          'Como ambos lados son <span class="math">ln</span> de algo, los argumentos son iguales: <span class="math">2x − 1 = x + 4</span>, de donde <span class="math">x = 5</span>.',
          'Comprobación: <span class="math">5 &gt; 1/2</span>; <span class="math">ln(9) = ln(9)</span> ✓.'
        ],
        respuesta: '(a) <span class="math">x = 9</span>; (b) <span class="math">x = 5</span>.'
      },
      {
        titulo: 'Contexto real: medicamento en el cuerpo',
        enunciado: 'Un paciente recibe 10 mg de un medicamento y la cantidad en sangre sigue <span class="math">A(t) = 10·(0.8)<sup>t</sup></span> mg, con <span class="math">t</span> en horas. (a) ¿Cuánto queda a las 3 horas? (b) ¿Cuándo quedarán 2.5 mg? (c) ¿Cuál es la vida media?',
        pasos: [
          '(a) <span class="math">A(3) = 10·0.8³ = 10·0.512 = 5.12</span> mg.',
          '(b) Resuelve <span class="math">10·(0.8)<sup>t</sup> = 2.5</span>: <span class="math">(0.8)<sup>t</sup> = 0.25</span>.',
          'Aplica logaritmo natural: <span class="math">t·ln(0.8) = ln(0.25)</span>, entonces <span class="math">t = ln(0.25)/ln(0.8) ≈ (−1.3863)/(−0.2231) ≈ 6.21</span> horas.',
          '(c) Vida media: cuando queda la mitad (5 mg), <span class="math">(0.8)<sup>t</sup> = 0.5</span>, así que <span class="math">t = ln(0.5)/ln(0.8) ≈ 3.11</span> horas.',
          'Revisa: 6.21 es casi el doble de 3.11, lo cual cuadra (para llegar a un cuarto se necesitan dos vidas medias).'
        ],
        respuesta: '(a) 5.12 mg; (b) aproximadamente 6.21 horas; (c) aproximadamente 3.11 horas.'
      },
      {
        titulo: 'Ecuación cuadrática en el logaritmo',
        enunciado: 'Resuelve <span class="math">(log<sub>2</sub>(x))² − 3·log<sub>2</sub>(x) + 2 = 0</span>.',
        pasos: [
          'Dominio: <span class="math">x &gt; 0</span>.',
          'Sustitución: <span class="math">u = log<sub>2</sub>(x)</span>. La ecuación queda <span class="math">u² − 3u + 2 = 0</span>.',
          'Factoriza: <span class="math">(u − 1)(u − 2) = 0</span>, entonces <span class="math">u = 1</span> o <span class="math">u = 2</span>.',
          'Regresa a <span class="math">x</span>: si <span class="math">log<sub>2</sub>(x) = 1</span>, <span class="math">x = 2¹ = 2</span>. Si <span class="math">log<sub>2</sub>(x) = 2</span>, <span class="math">x = 2² = 4</span>.',
          'Comprobación: ambos son positivos. Con <span class="math">x = 4</span>: <span class="math">2² − 3·2 + 2 = 0</span> ✓.'
        ],
        respuesta: '<span class="math">x = 2</span> o <span class="math">x = 4</span>.'
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: 'Calcula <span class="math">log<sub>3</sub>(81)</span>.',
        pasos: [
          'Busca el exponente: <span class="math">3<sup>x</sup> = 81</span>.',
          '<span class="math">81 = 3⁴</span>, entonces <span class="math">x = 4</span>.'
        ],
        respuesta: '4.'
      },
      {
        nivel: 'facil',
        enunciado: 'Calcula <span class="math">log<sub>5</sub>(1/25)</span>.',
        pasos: [
          '<span class="math">5<sup>x</sup> = 1/25</span>.',
          '<span class="math">1/25 = 1/5² = 5<sup>−2</sup></span>, luego <span class="math">x = −2</span>.'
        ],
        respuesta: '−2.'
      },
      {
        nivel: 'facil',
        enunciado: 'Escribe <span class="math">2⁶ = 64</span> en forma logarítmica y <span class="math">log<sub>9</sub>(3) = 1/2</span> en forma exponencial.',
        pasos: [
          'La base es 2, el exponente es 6 y la potencia es 64: <span class="math">log<sub>2</sub>(64) = 6</span>.',
          'La base es 9, el logaritmo (exponente) es 1/2 y el argumento es 3: <span class="math">9<sup>1/2</sup> = 3</span> (que es verdad: <span class="math">√9 = 3</span>).'
        ],
        respuesta: '<span class="math">log<sub>2</sub>(64) = 6</span>; <span class="math">9<sup>1/2</sup> = 3</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Resuelve <span class="math">log<sub>2</sub>(x) = 5</span>.',
        pasos: [
          'Dominio: <span class="math">x &gt; 0</span>.',
          'Forma exponencial: <span class="math">x = 2⁵ = 32</span>.',
          'Comprobación: <span class="math">log<sub>2</sub>(32) = 5</span> ✓.'
        ],
        respuesta: '<span class="math">x = 32</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Expande <span class="math">log<sub>3</sub>(9x²/√y)</span>.',
        pasos: [
          'Cociente: <span class="math">log<sub>3</sub>(9x²) − log<sub>3</sub>(√y)</span>.',
          'Producto: <span class="math">log<sub>3</sub>(9) + log<sub>3</sub>(x²) − log<sub>3</sub>(y<sup>1/2</sup>)</span>.',
          'Potencias: <span class="math">2 + 2·log<sub>3</sub>(x) − (1/2)·log<sub>3</sub>(y)</span>, pues <span class="math">log<sub>3</sub>(9) = 2</span>.'
        ],
        respuesta: '<span class="math">2 + 2·log<sub>3</sub>(x) − (1/2)·log<sub>3</sub>(y)</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Calcula <span class="math">log<sub>6</sub>(4) + log<sub>6</sub>(9)</span>.',
        pasos: [
          'Producto: <span class="math">log<sub>6</sub>(4) + log<sub>6</sub>(9) = log<sub>6</sub>(4·9) = log<sub>6</sub>(36)</span>.',
          '<span class="math">6<sup>x</sup> = 36</span> da <span class="math">x = 2</span>.'
        ],
        respuesta: '2.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Resuelve <span class="math">log<sub>2</sub>(x − 3) = 4</span>.',
        pasos: [
          'Dominio: <span class="math">x − 3 &gt; 0</span>, o sea <span class="math">x &gt; 3</span>.',
          'Forma exponencial: <span class="math">x − 3 = 2⁴ = 16</span>.',
          '<span class="math">x = 19</span>. Comprobación: <span class="math">19 &gt; 3</span> y <span class="math">log<sub>2</sub>(16) = 4</span> ✓.'
        ],
        respuesta: '<span class="math">x = 19</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Resuelve <span class="math">5<sup>x</sup> = 30</span> y redondea a 2 decimales.',
        pasos: [
          'No se pueden igualar bases. Aplica <span class="math">ln</span>: <span class="math">x·ln(5) = ln(30)</span>.',
          '<span class="math">x = ln(30)/ln(5) ≈ 3.4012/1.6094 ≈ 2.1133</span>.',
          'Comprobación: <span class="math">5<sup>2.11</sup> ≈ 29.9</span>, cercano a 30.'
        ],
        respuesta: '<span class="math">x ≈ 2.11</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Resuelve <span class="math">log(x) + log(x − 21) = 2</span> (logaritmo base 10).',
        pasos: [
          'Dominio: <span class="math">x &gt; 0</span> y <span class="math">x &gt; 21</span>, es decir <span class="math">x &gt; 21</span>.',
          'Producto: <span class="math">log[x(x − 21)] = 2</span>, así que <span class="math">x(x − 21) = 10² = 100</span>.',
          '<span class="math">x² − 21x − 100 = 0</span>. Factoriza: <span class="math">(x − 25)(x + 4) = 0</span>.',
          '<span class="math">x = 25</span> o <span class="math">x = −4</span>. Se descarta <span class="math">−4</span> (no cumple <span class="math">x &gt; 21</span>).',
          'Comprobación: <span class="math">log(25) + log(4) = log(100) = 2</span> ✓.'
        ],
        respuesta: '<span class="math">x = 25</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Resuelve <span class="math">2<sup>x+1</sup> = 3<sup>x</sup></span> y redondea a 2 decimales.',
        pasos: [
          'Aplica <span class="math">ln</span> a ambos lados: <span class="math">(x + 1)·ln(2) = x·ln(3)</span>.',
          'Distribuye: <span class="math">x·ln(2) + ln(2) = x·ln(3)</span>. Pasa los términos con <span class="math">x</span> a un lado: <span class="math">ln(2) = x·(ln(3) − ln(2))</span>.',
          '<span class="math">x = ln(2)/(ln(3) − ln(2)) = ln(2)/ln(1.5) ≈ 0.6931/0.4055 ≈ 1.7095</span>.',
          'Comprobación: <span class="math">2<sup>2.71</sup> ≈ 6.55</span> y <span class="math">3<sup>1.71</sup> ≈ 6.55</span> ✓.'
        ],
        respuesta: '<span class="math">x ≈ 1.71</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Una familia deposita <span class="math">$1000</span> en una cuenta de ahorro con interés compuesto anual de 5 %: <span class="math">M(t) = 1000·(1.05)<sup>t</sup></span>. ¿En cuántos años se duplica el dinero? Redondea a 2 decimales.',
        pasos: [
          'Se busca <span class="math">M(t) = 2000</span>: <span class="math">1000·(1.05)<sup>t</sup> = 2000</span>.',
          'Divide entre 1000: <span class="math">(1.05)<sup>t</sup> = 2</span>.',
          'Aplica <span class="math">ln</span>: <span class="math">t = ln(2)/ln(1.05) ≈ 0.6931/0.04879 ≈ 14.21</span>.',
          'Interpretación: tras unos 14 años y 2 meses el dinero se duplica (regla práctica del 72: <span class="math">72 ÷ 5 ≈ 14.4</span>).'
        ],
        respuesta: 'Aproximadamente 14.21 años.'
      }
    ],
    teoricas: [
      {
        q: '¿Qué es un logaritmo? Explícalo con tus palabras.',
        a: 'Es el exponente al que hay que elevar la base para obtener un número dado. Si <span class="math">2³ = 8</span>, entonces <span class="math">log<sub>2</sub>(8) = 3</span>. El logaritmo y la potencia son dos formas de escribir la misma relación.'
      },
      {
        q: '¿Por qué la base debe ser positiva y distinta de 1, y el argumento positivo?',
        a: 'Con base 1, <span class="math">1<sup>x</sup> = 1</span> siempre y el exponente no se podría determinar. Una base positiva elevada a cualquier exponente real da siempre un resultado positivo; por eso no existen logaritmos reales de 0 ni de números negativos.'
      },
      {
        q: '¿Por qué <span class="math">log<sub>a</sub>(1) = 0</span> y <span class="math">log<sub>a</sub>(a) = 1</span>?',
        a: 'Porque <span class="math">a⁰ = 1</span> y <span class="math">a¹ = a</span>. El logaritmo es el exponente que produce cada número.'
      },
      {
        q: '¿Es cierto que <span class="math">log(M + N) = log(M) + log(N)</span>?',
        a: 'No. La propiedad que existe es la del <em>producto</em>: <span class="math">log(M·N) = log(M) + log(N)</span>. Contraejemplo: <span class="math">log(10 + 10) = log(20) ≈ 1.301</span>, mientras que <span class="math">log(10) + log(10) = 2</span>.'
      },
      {
        q: '¿Por qué hay que comprobar las soluciones de una ecuación logarítmica?',
        a: 'Porque al resolver pueden aparecer valores que hacen negativo o cero el argumento de algún logaritmo de la ecuación original. Esos valores no son soluciones reales y se descartan, como <span class="math">x = −1</span> en <span class="math">log<sub>2</sub>(x) + log<sub>2</sub>(x − 1) = 1</span>.'
      },
      {
        q: '¿Qué relación hay entre la gráfica de <span class="math">a<sup>x</sup></span> y la de <span class="math">log<sub>a</sub>(x)</span>?',
        a: 'Son simétricas respecto a la recta <span class="math">y = x</span>, porque las funciones son inversas. La asíntota horizontal <span class="math">y = 0</span> de la exponencial se convierte en la asíntota vertical <span class="math">x = 0</span> del logaritmo, y el punto <span class="math">(0, 1)</span> pasa a <span class="math">(1, 0)</span>.'
      },
      {
        q: '¿Para qué sirve la fórmula de cambio de base?',
        a: 'Para calcular un logaritmo de cualquier base con una calculadora que solo tiene <span class="math">log</span> y <span class="math">ln</span>: <span class="math">log<sub>a</sub>(b) = ln(b)/ln(a)</span>. También se usa para resolver ecuaciones exponenciales cuando no se pueden igualar bases.'
      },
      {
        q: '¿Qué diferencia hay entre <span class="math">log</span> y <span class="math">ln</span>?',
        a: '<span class="math">log</span> es el logaritmo en base 10 y <span class="math">ln</span> es el logaritmo natural, en base <span class="math">e ≈ 2.71828</span>. Siguen las mismas propiedades; solo cambia la base.'
      }
    ],
    errores: [
      'Escribir <span class="math">log(M + N) = log(M) + log(N)</span> o <span class="math">log(M)/log(N) = log(M/N)</span>. Las propiedades solo convierten productos, cocientes y potencias <em>dentro</em> del logaritmo.',
      'No comprobar el dominio: dar como solución un valor que vuelve negativo un argumento. Escribe el dominio al empezar y verifícalo al terminar.',
      'Confundir <span class="math">(log M)<sup>b</sup></span> con <span class="math">log(M<sup>b</sup>)</span>: solo en el segundo el exponente baja multiplicando. <span class="math">log(M<sup>2</sup>) = 2·log(M)</span>, pero <span class="math">(log M)² ≠ 2·log M</span>.',
      'Leer mal la base: pensar que <span class="math">log<sub>2</sub>(8)</span> es "2 por 8" o dar <span class="math">log<sub>2</sub>(8) = 4</span> (que sería <span class="math">2·8/4</span>). La base es el número que se eleva; el resultado es el exponente: <span class="math">log<sub>2</sub>(8) = 3</span>.'
    ],
    aplicacion: {
      titulo: 'Magnitud de un terremoto (escala de Richter)',
      html: `<p>El Salvador es una zona sísmica y la fuerza de un terremoto se mide con una escala logarítmica. En la escala de Richter, la magnitud <span class="math">M</span> se relaciona con la amplitud <span class="math">A</span> de las ondas registradas, comparada con una amplitud de referencia <span class="math">A₀</span>:</p>
<p><span class="math">M = log(A/A₀)</span></p>
<p>Cada punto de magnitud significa que la amplitud se multiplica por 10. En enero de 2001 un sismo grande sacudió al país con magnitud cercana a <span class="math">7.7</span>, y en febrero otro, cercano a <span class="math">6.6</span> (valores aproximados).</p>
<p><strong>¿Cuántas veces mayor fue la amplitud del primero?</strong></p>
<p>De <span class="math">M = log(A/A₀)</span> se tiene <span class="math">A = A₀·10<sup>M</sup></span>, así que el cociente de amplitudes es</p>
<p><span class="math">A₁/A₂ = 10<sup>7.7</sup>/10<sup>6.6</sup> = 10<sup>7.7 − 6.6</sup> = 10<sup>1.1</sup> ≈ 12.6</span></p>
<p>La amplitud fue unas 12.6 veces mayor. En cuanto a la <em>energía</em> liberada, crece aproximadamente como <span class="math">10<sup>1.5·M</sup></span>: la razón es <span class="math">10<sup>1.5·1.1</sup> = 10<sup>1.65</sup> ≈ 44.7</span> veces más energía. Una diferencia de apenas 1.1 en magnitud significa mucho más que "un poquito más fuerte". Esto es lo que hace útil al logaritmo: comprime números enormes en una escala manejable.</p>`
    },
    calc: 'logaritmo',
    examen: [
      { tipo: 'num', q: 'Calcula <span class="math">log<sub>2</sub>(64)</span>.', r: 6, tol: 0.01, pasos: [
        'Se busca <span class="math">x</span> con <span class="math">2<sup>x</sup> = 64</span>.',
        '<span class="math">64 = 2⁶</span>.',
        'Entonces <span class="math">log<sub>2</sub>(64) = 6</span>.'
      ] },
      { tipo: 'num', q: 'Calcula <span class="math">log<sub>1/3</sub>(27)</span>.', r: -3, tol: 0.01, pasos: [
        '<span class="math">(1/3)<sup>x</sup> = 27</span>.',
        '<span class="math">27 = 3³ = (1/3)<sup>−3</sup></span>.',
        'Entonces <span class="math">x = −3</span>.'
      ] },
      { tipo: 'num', q: 'Resuelve <span class="math">log<sub>3</sub>(x) = 4</span>.', r: 81, tol: 0.01, pasos: [
        'Forma exponencial: <span class="math">x = 3⁴</span>.',
        '<span class="math">x = 81</span>.',
        'Es positivo, así que está en el dominio.'
      ] },
      { tipo: 'num', q: 'Resuelve <span class="math">log<sub>2</sub>(x + 1) = 5</span>.', r: 31, tol: 0.01, pasos: [
        'Forma exponencial: <span class="math">x + 1 = 2⁵ = 32</span>.',
        '<span class="math">x = 31</span>.',
        'Comprobación: <span class="math">31 + 1 = 32 &gt; 0</span> y <span class="math">log<sub>2</sub>(32) = 5</span>.'
      ] },
      { tipo: 'num', q: 'Resuelve <span class="math">7<sup>x</sup> = 50</span>. Redondea a 2 decimales.', r: 2.0104, tol: 0.01, pasos: [
        'Aplica <span class="math">ln</span>: <span class="math">x·ln(7) = ln(50)</span>.',
        '<span class="math">x = ln(50)/ln(7) ≈ 3.9120/1.9459</span>.',
        '<span class="math">x ≈ 2.01</span>.'
      ] },
      { tipo: 'num', q: 'Resuelve <span class="math">log(x) + log(x − 3) = 1</span> (base 10).', r: 5, tol: 0.01, pasos: [
        'Dominio: <span class="math">x &gt; 3</span>.',
        '<span class="math">log[x(x − 3)] = 1</span> da <span class="math">x(x − 3) = 10</span>, o sea <span class="math">x² − 3x − 10 = 0</span>.',
        '<span class="math">(x − 5)(x + 2) = 0</span>: <span class="math">x = 5</span> o <span class="math">x = −2</span>; se descarta <span class="math">−2</span>.'
      ] },
      { tipo: 'lista', q: 'Resuelve <span class="math">(log<sub>2</sub>(x))² − 5·log<sub>2</sub>(x) + 6 = 0</span>. Escribe las soluciones separadas por comas.', r: [4, 8], tol: 0.01, pasos: [
        'Sea <span class="math">u = log<sub>2</sub>(x)</span>: <span class="math">u² − 5u + 6 = 0</span>.',
        '<span class="math">(u − 2)(u − 3) = 0</span>, entonces <span class="math">u = 2</span> o <span class="math">u = 3</span>.',
        '<span class="math">x = 2² = 4</span> o <span class="math">x = 2³ = 8</span>; ambos son positivos.'
      ] },
      { tipo: 'num', q: 'Usa <span class="math">log(2) ≈ 0.3010</span> y <span class="math">log(3) ≈ 0.4771</span> para calcular <span class="math">log(18)</span>. Redondea a 2 decimales.', r: 1.2552, tol: 0.01, pasos: [
        '<span class="math">18 = 2·3²</span>.',
        '<span class="math">log(18) = log(2) + 2·log(3) = 0.3010 + 0.9542</span>.',
        '<span class="math">log(18) ≈ 1.2552 ≈ 1.26</span>.'
      ] },
      { tipo: 'opt', q: '¿Cuál de estas igualdades es CORRECTA para <span class="math">a, b &gt; 0</span>?', opciones: ['<span class="math">log(a + b) = log(a) + log(b)</span>', '<span class="math">log(a/b) = log(a) − log(b)</span>', '<span class="math">log(a·b) = log(a)·log(b)</span>', '<span class="math">log(a<sup>b</sup>) = (log a)<sup>b</sup></span>'], correcta: 1, pasos: [
        'Un cociente dentro del logaritmo se convierte en resta de logaritmos.',
        'La suma <span class="math">a + b</span> no tiene propiedad; el producto da suma, no producto, y la potencia baja el exponente: <span class="math">b·log(a)</span>.',
        'Solo la segunda es correcta.'
      ] },
      { tipo: 'opt', q: '¿Cuál es el dominio de <span class="math">f(x) = log<sub>3</sub>(x − 5)</span>?', opciones: ['<span class="math">x &lt; 5</span>', '<span class="math">x ≥ 5</span>', '<span class="math">x ≠ 5</span>', '<span class="math">x &gt; 5</span>'], correcta: 3, pasos: [
        'El argumento debe ser estrictamente positivo.',
        '<span class="math">x − 5 &gt; 0</span>.',
        'Entonces <span class="math">x &gt; 5</span>; en <span class="math">x = 5</span> el argumento sería 0 y no existe el logaritmo.'
      ] }
    ]
  };

  /* ====================================================================== */
  /* TEMA 1.16 — Trigonometría: razones, triángulos, leyes y funciones      */
  /* ====================================================================== */
  T['1.16'] = {
    id: '1.16',
    unidad: 5,
    titulo: 'Trigonometría: razones, triángulos notables, leyes y funciones',
    resumen: 'Usa las razones trigonométricas, los triángulos notables, las leyes del seno y del coseno y el círculo unitario para resolver triángulos.',
    objetivos: [
      'Calcular las seis razones trigonométricas de un ángulo agudo y resolver triángulos rectángulos.',
      'Aplicar los valores exactos de los ángulos notables de 30°, 45° y 60°.',
      'Resolver triángulos cualesquiera con la ley del seno y la ley del coseno.',
      'Interpretar el círculo unitario, convertir entre grados y radianes y analizar las gráficas de seno y coseno.'
    ],
    teoria: [
      {
        titulo: 'Las razones trigonométricas',
        html: `<p>En un triángulo rectángulo, para un ángulo agudo <span class="math">θ</span> se nombran los lados así: la <strong>hipotenusa</strong> (la más larga, opuesta al ángulo recto), el <strong>cateto opuesto</strong> (frente a <span class="math">θ</span>) y el <strong>cateto adyacente</strong> (el otro cateto, junto a <span class="math">θ</span>).</p>
<table>
<tr><th>Razón</th><th>Definición</th><th>Recíproca</th></tr>
<tr><td>seno</td><td><span class="math">sen θ = opuesto/hipotenusa</span></td><td><span class="math">csc θ = hipotenusa/opuesto</span></td></tr>
<tr><td>coseno</td><td><span class="math">cos θ = adyacente/hipotenusa</span></td><td><span class="math">sec θ = hipotenusa/adyacente</span></td></tr>
<tr><td>tangente</td><td><span class="math">tan θ = opuesto/adyacente</span></td><td><span class="math">cot θ = adyacente/opuesto</span></td></tr>
</table>
<p>Regla para recordar: <strong>SOH-CAH-TOA</strong> (Seno = Opuesto sobre Hipotenusa, Coseno = Adyacente sobre Hipotenusa, Tangente = Opuesto sobre Adyacente).</p>
<p>Las razones dependen <em>solo del ángulo</em>, no del tamaño del triángulo, porque los triángulos con los mismos ángulos son semejantes y sus lados son proporcionales. Además, <span class="math">tan θ = sen θ/cos θ</span>.</p>
<p>Como la hipotenusa es el lado mayor, <span class="math">sen θ</span> y <span class="math">cos θ</span> de un ángulo agudo siempre están entre 0 y 1.</p>`
      },
      {
        titulo: 'Teorema de Pitágoras y ángulos complementarios',
        html: `<p>En un triángulo rectángulo con catetos <span class="math">a</span> y <span class="math">b</span> e hipotenusa <span class="math">c</span>:</p>
<p><span class="math">a² + b² = c²</span></p>
<p>Sirve para hallar el lado que falta antes de calcular las razones. Ternas pitagóricas comunes: <span class="math">3-4-5</span>, <span class="math">5-12-13</span>, <span class="math">8-15-17</span> y sus múltiplos (<span class="math">6-8-10</span>, <span class="math">9-12-15</span>).</p>
<p>Los dos ángulos agudos <span class="math">α</span> y <span class="math">β</span> de un triángulo rectángulo suman <span class="math">90°</span> (son <strong>complementarios</strong>), y de eso salen las relaciones de cofunciones:</p>
<p><span class="math">sen α = cos(90° − α)</span>, <span class="math">tan α = cot(90° − α)</span>.</p>
<p>Ejemplo: <span class="math">sen 30° = cos 60° = 1/2</span>.</p>
<p>Identidad fundamental (sale de dividir Pitágoras entre <span class="math">c²</span>): <span class="math">sen²θ + cos²θ = 1</span>.</p>`
      },
      {
        titulo: 'Triángulos notables: 30°, 45° y 60°',
        html: `<p>Hay dos triángulos cuyas razones se conocen con valores exactos:</p>
<ul>
<li><strong>Triángulo 45°-45°-90°</strong> (mitad de un cuadrado): catetos iguales <span class="math">k</span> e hipotenusa <span class="math">k√2</span>.</li>
<li><strong>Triángulo 30°-60°-90°</strong> (mitad de un triángulo equilátero): lados <span class="math">k</span>, <span class="math">k√3</span> y <span class="math">2k</span>. El cateto menor (<span class="math">k</span>) está frente a 30°, el mayor (<span class="math">k√3</span>) frente a 60° y la hipotenusa es <span class="math">2k</span>.</li>
</ul>
<table>
<tr><th><span class="math">θ</span></th><th><span class="math">sen θ</span></th><th><span class="math">cos θ</span></th><th><span class="math">tan θ</span></th></tr>
<tr><td>30°</td><td><span class="math">1/2</span></td><td><span class="math">√3/2</span></td><td><span class="math">√3/3</span></td></tr>
<tr><td>45°</td><td><span class="math">√2/2</span></td><td><span class="math">√2/2</span></td><td><span class="math">1</span></td></tr>
<tr><td>60°</td><td><span class="math">√3/2</span></td><td><span class="math">1/2</span></td><td><span class="math">√3</span></td></tr>
</table>
<p>Truco: en seno van <span class="math">√1/2, √2/2, √3/2</span> (crecen) y en coseno el mismo orden pero al revés. Los valores extremos: <span class="math">sen 0° = 0</span>, <span class="math">cos 0° = 1</span>, <span class="math">sen 90° = 1</span>, <span class="math">cos 90° = 0</span>, y <span class="math">tan 90°</span> no está definida (división entre 0).</p>`
      },
      {
        titulo: 'Resolver triángulos rectángulos y ángulos de elevación',
        html: `<p>"Resolver" un triángulo es hallar todos sus lados y ángulos. En uno rectángulo basta conocer un lado y otro dato (un ángulo agudo u otro lado).</p>
<ol>
<li>Dibuja el triángulo y marca lo conocido y lo que buscas.</li>
<li>Elige la razón que relaciona un dato conocido con el desconocido.</li>
<li>Despeja. Para hallar un <em>ángulo</em> usa la función inversa: <span class="math">θ = sen<sup>−1</sup>(…)</span>, <span class="math">cos<sup>−1</sup>(…)</span> o <span class="math">tan<sup>−1</sup>(…)</span>.</li>
</ol>
<p>El <strong>ángulo de elevación</strong> es el que forma la línea de visión con la horizontal cuando miras <em>hacia arriba</em>; el <strong>ángulo de depresión</strong> se mide también desde la horizontal pero mirando <em>hacia abajo</em>. Los dos son ángulos con la horizontal, y el ángulo de depresión desde arriba es igual al de elevación desde abajo (ángulos alternos internos).</p>
<p>Ejemplo: te paras a 30 m de un poste y lo ves con elevación de 40°. Su altura sobre tus ojos es <span class="math">30·tan 40° ≈ 25.2</span> m.</p>
<p><strong>Calculadora:</strong> asegúrate de que esté en modo <em>grados</em> (DEG) para ángulos en grados y en <em>radianes</em> (RAD) para ángulos en radianes.</p>`
      },
      {
        titulo: 'Ley del seno',
        html: `<p>Para resolver triángulos que <em>no</em> son rectángulos se usan las leyes del seno y del coseno. En un triángulo con ángulos <span class="math">A, B, C</span> y lados opuestos <span class="math">a, b, c</span>:</p>
<p><span class="math">a/sen A = b/sen B = c/sen C</span></p>
<p><strong>Úsala cuando conozcas</strong> un lado y su ángulo opuesto, más otro dato:</p>
<ul>
<li><strong>AAS</strong> o <strong>ASA</strong> (dos ángulos y un lado): caso con solución única. Calcula primero el tercer ángulo: <span class="math">A + B + C = 180°</span>.</li>
<li><strong>LLA</strong> (dos lados y un ángulo no comprendido): puede tener <em>0, 1 o 2 soluciones</em> (caso ambiguo).</li>
</ul>
<p><strong>Caso ambiguo.</strong> Al despejar <span class="math">sen B</span>, el ángulo <span class="math">B</span> puede ser agudo o su suplemento <span class="math">180° − B</span> (porque <span class="math">sen B = sen(180° − B)</span>). Se acepta cada opción solo si el ángulo dado más ella suman menos de 180°. Si <span class="math">sen B &gt; 1</span> no hay triángulo.</p>
<p><strong>Área:</strong> con dos lados y el ángulo entre ellos, <span class="math">Área = (1/2)·a·b·sen C</span>.</p>`
      },
      {
        titulo: 'Ley del coseno',
        html: `<p>Generaliza el teorema de Pitágoras a cualquier triángulo:</p>
<p><span class="math">c² = a² + b² − 2ab·cos C</span></p>
<p>(y las versiones análogas para <span class="math">a²</span> y <span class="math">b²</span>). Úsala cuando conozcas:</p>
<ul>
<li><strong>LAL</strong>: dos lados y el ángulo <em>comprendido</em> entre ellos: halla el tercer lado.</li>
<li><strong>LLL</strong>: los tres lados: despeja un ángulo con <span class="math">cos C = (a² + b² − c²)/(2ab)</span>.</li>
</ul>
<p>Si <span class="math">C = 90°</span>, <span class="math">cos C = 0</span> y queda <span class="math">c² = a² + b²</span>: es Pitágoras. Si <span class="math">C</span> es obtuso, <span class="math">cos C &lt; 0</span> y el lado <span class="math">c</span> sale más largo que en el caso recto.</p>
<p>Tras hallar un lado o ángulo con la ley del coseno, puedes continuar con la ley del seno (con cuidado: al buscar ángulos con el seno puede aparecer ambigüedad; busca primero el ángulo más grande con el coseno o el opuesto al lado menor con el seno).</p>
<p>Con la calculadora del tema puedes verificar cualquier triángulo que resuelvas a mano.</p>`
      },
      {
        titulo: 'Círculo unitario y radianes',
        html: `<p>El <strong>círculo unitario</strong> es la circunferencia de radio 1 con centro en el origen. Si giras desde el eje <span class="math">x</span> positivo un ángulo <span class="math">θ</span> (positivo, en sentido contrario a las agujas del reloj), llegas al punto</p>
<p><span class="math">P(θ) = (cos θ, sen θ)</span>.</p>
<p>Así las definiciones valen para <em>cualquier</em> ángulo, no solo agudo. De <span class="math">x² + y² = 1</span> sale <span class="math">sen²θ + cos²θ = 1</span>, y <span class="math">tan θ = sen θ/cos θ</span>.</p>
<table>
<tr><th>Cuadrante</th><th>Ángulo</th><th><span class="math">sen</span></th><th><span class="math">cos</span></th><th><span class="math">tan</span></th></tr>
<tr><td>I</td><td>0° a 90°</td><td>+</td><td>+</td><td>+</td></tr>
<tr><td>II</td><td>90° a 180°</td><td>+</td><td>−</td><td>−</td></tr>
<tr><td>III</td><td>180° a 270°</td><td>−</td><td>−</td><td>+</td></tr>
<tr><td>IV</td><td>270° a 360°</td><td>−</td><td>+</td><td>−</td></tr>
</table>
<p><strong>Ángulo de referencia:</strong> el ángulo agudo que forma el lado terminal con el eje <span class="math">x</span>. Las razones de <span class="math">θ</span> tienen el mismo valor absoluto que las de su ángulo de referencia; el signo lo da el cuadrante. Ejemplo: <span class="math">sen 150° = +sen 30° = 1/2</span>.</p>
<p><strong>Radianes:</strong> <span class="math">π rad = 180°</span>. Para convertir: grados a radianes multiplica por <span class="math">π/180</span>; radianes a grados multiplica por <span class="math">180/π</span>. Por ejemplo <span class="math">60° = π/3</span>, <span class="math">90° = π/2</span>, <span class="math">360° = 2π</span>.</p>`
      },
      {
        titulo: 'Gráficas de seno y coseno',
        html: `<p>Al recorrer el círculo unitario, el valor de <span class="math">sen θ</span> (altura del punto) y de <span class="math">cos θ</span> (posición horizontal) se repiten cada vuelta: son funciones <strong>periódicas</strong>.</p>
<table>
<tr><th>Propiedad</th><th><span class="math">y = sen θ</span></th><th><span class="math">y = cos θ</span></th></tr>
<tr><td>Dominio</td><td><span class="math">ℝ</span></td><td><span class="math">ℝ</span></td></tr>
<tr><td>Rango</td><td><span class="math">[−1, 1]</span></td><td><span class="math">[−1, 1]</span></td></tr>
<tr><td>Período</td><td><span class="math">2π</span> (360°)</td><td><span class="math">2π</span> (360°)</td></tr>
<tr><td>Amplitud</td><td>1</td><td>1</td></tr>
<tr><td>Corta el eje <span class="math">y</span> en</td><td>0</td><td>1</td></tr>
<tr><td>Ceros en</td><td><span class="math">0, π, 2π, …</span></td><td><span class="math">π/2, 3π/2, …</span></td></tr>
</table>
<p>La gráfica de <span class="math">cos θ</span> es la de <span class="math">sen θ</span> desplazada <span class="math">π/2</span> hacia la izquierda.</p>
<p><strong>Transformaciones:</strong> para <span class="math">y = A·sen(Bθ)</span> (o <span class="math">cos</span>): la amplitud es <span class="math">|A|</span> y el período es <span class="math">2π/|B|</span>. Una <span class="math">A</span> negativa refleja la gráfica sobre el eje. Un <span class="math">B</span> mayor comprime horizontalmente la onda (más ciclos).</p>
<p>Ejemplo: <span class="math">y = 3·sen(2θ)</span> oscila entre −3 y 3 y se repite cada <span class="math">π</span>. Estas ondas modelan sonidos, corriente alterna y mareas.</p>`
      }
    ],
    formulas: [
      { label: 'Razones (SOH-CAH-TOA)', html: 'sen θ = op/hip,   cos θ = ady/hip,   tan θ = op/ady' },
      { label: 'Teorema de Pitágoras', html: 'a² + b² = c²' },
      { label: 'Identidad fundamental', html: 'sen²θ + cos²θ = 1' },
      { label: 'Ley del seno', html: 'a/sen A = b/sen B = c/sen C' },
      { label: 'Ley del coseno', html: 'c² = a² + b² − 2ab·cos C' },
      { label: 'Círculo unitario', html: 'P(θ) = (cos θ, sen θ)' },
      { label: 'Radianes', html: 'π rad = 180°' },
      { label: 'Amplitud y período', html: 'y = A·sen(Bθ):  amplitud |A|,  período 2π/|B|' },
      { label: 'Área con dos lados y ángulo', html: 'Área = (1/2)·a·b·sen C' }
    ],
    ejemplos: [
      {
        titulo: 'Las seis razones',
        enunciado: 'Un triángulo rectángulo tiene catetos 5 y 12. Para el ángulo <span class="math">θ</span> opuesto al cateto 5, halla las seis razones trigonométricas.',
        pasos: [
          'Hipotenusa: <span class="math">c = √(5² + 12²) = √169 = 13</span>.',
          'Opuesto = 5, adyacente = 12, hipotenusa = 13.',
          '<span class="math">sen θ = 5/13</span>, <span class="math">cos θ = 12/13</span>, <span class="math">tan θ = 5/12</span>.',
          'Recíprocas: <span class="math">csc θ = 13/5</span>, <span class="math">sec θ = 13/12</span>, <span class="math">cot θ = 12/5</span>.',
          'Comprobación con la identidad: <span class="math">(5/13)² + (12/13)² = 25/169 + 144/169 = 1</span> ✓.'
        ],
        respuesta: '<span class="math">sen θ = 5/13</span>, <span class="math">cos θ = 12/13</span>, <span class="math">tan θ = 5/12</span>, <span class="math">csc θ = 13/5</span>, <span class="math">sec θ = 13/12</span>, <span class="math">cot θ = 12/5</span>.'
      },
      {
        titulo: 'Triángulos notables',
        enunciado: '(a) Un triángulo 30°-60°-90° tiene hipotenusa 10. Halla sus catetos. (b) Un triángulo 45°-45°-90° tiene catetos de 6. Halla la hipotenusa.',
        pasos: [
          '(a) En el triángulo 30°-60°-90° los lados son <span class="math">k, k√3, 2k</span>. Hipotenusa <span class="math">2k = 10</span>, así que <span class="math">k = 5</span>.',
          'Cateto opuesto a 30°: <span class="math">5</span>. Cateto opuesto a 60°: <span class="math">5√3 ≈ 8.66</span>.',
          '(b) Catetos <span class="math">k = 6</span>: hipotenusa <span class="math">k√2 = 6√2</span>. En decimales, <span class="math">6·1.4142 ≈ 8.49</span>.',
          'Comprobación con Pitágoras: <span class="math">6² + 6² = 72 = (6√2)²</span> ✓.'
        ],
        respuesta: '(a) Catetos <span class="math">5</span> y <span class="math">5√3 ≈ 8.66</span>; (b) hipotenusa <span class="math">6√2 ≈ 8.49</span>.'
      },
      {
        titulo: 'Contexto real: altura de una torre',
        enunciado: 'Desde un punto del suelo a 40 m de la base de una torre de telecomunicaciones en Santa Ana, el ángulo de elevación a la punta es de 35°. ¿Qué altura tiene la torre (sobre el nivel del observador)?',
        pasos: [
          'El cateto adyacente es 40 m y se busca el cateto opuesto <span class="math">h</span>.',
          'La razón que une opuesto y adyacente es la tangente: <span class="math">tan 35° = h/40</span>.',
          'Despeja: <span class="math">h = 40·tan 35°</span>. Con la calculadora en grados, <span class="math">tan 35° ≈ 0.7002</span>.',
          '<span class="math">h ≈ 40·0.7002 ≈ 28.01</span> m.'
        ],
        respuesta: 'La torre mide aproximadamente <span class="math">28.01</span> m (sumando la altura de los ojos, si se desea la total).'
      },
      {
        titulo: 'Círculo unitario y cuadrantes',
        enunciado: 'Sea <span class="math">sen θ = 3/5</span> con <span class="math">θ</span> en el cuadrante II. Halla <span class="math">cos θ</span>, <span class="math">tan θ</span> y el ángulo <span class="math">θ</span>.',
        pasos: [
          'Identidad: <span class="math">cos²θ = 1 − sen²θ = 1 − 9/25 = 16/25</span>, entonces <span class="math">cos θ = ±4/5</span>.',
          'En el cuadrante II el coseno es negativo: <span class="math">cos θ = −4/5</span>.',
          '<span class="math">tan θ = sen θ/cos θ = (3/5)/(−4/5) = −3/4</span>.',
          'Ángulo de referencia: <span class="math">sen<sup>−1</sup>(3/5) ≈ 36.87°</span>. En el cuadrante II, <span class="math">θ = 180° − 36.87° ≈ 143.13°</span>.'
        ],
        respuesta: '<span class="math">cos θ = −4/5</span>, <span class="math">tan θ = −3/4</span> y <span class="math">θ ≈ 143.13°</span>.'
      },
      {
        titulo: 'Ley del seno: ancho de un río',
        enunciado: 'Para medir distancias a un árbol <span class="math">C</span> en la otra orilla de un río, se marcan dos puntos <span class="math">A</span> y <span class="math">B</span> en esta orilla, separados 100 m. Se mide <span class="math">∠A = 50°</span> y <span class="math">∠B = 70°</span>. Halla las distancias <span class="math">AC</span> y <span class="math">BC</span>.',
        pasos: [
          'Tercer ángulo: <span class="math">C = 180° − 50° − 70° = 60°</span>. El lado conocido <span class="math">AB = 100</span> es el opuesto a <span class="math">C</span>.',
          'Ley del seno: <span class="math">AC/sen 70° = 100/sen 60°</span> (el lado <span class="math">AC</span> es opuesto al ángulo <span class="math">B = 70°</span>).',
          '<span class="math">AC = 100·sen 70°/sen 60° ≈ 100·0.9397/0.8660 ≈ 108.51</span> m.',
          '<span class="math">BC</span> es opuesto al ángulo <span class="math">A = 50°</span>: <span class="math">BC = 100·sen 50°/sen 60° ≈ 100·0.7660/0.8660 ≈ 88.46</span> m.'
        ],
        respuesta: '<span class="math">AC ≈ 108.51</span> m y <span class="math">BC ≈ 88.46</span> m.'
      },
      {
        titulo: 'Ley del coseno: triángulo de lados conocidos',
        enunciado: 'Un triángulo tiene lados <span class="math">a = 7</span>, <span class="math">b = 8</span> y <span class="math">c = 9</span>. Halla sus tres ángulos.',
        pasos: [
          'Ángulo <span class="math">C</span> (opuesto al lado mayor): <span class="math">cos C = (a² + b² − c²)/(2ab) = (49 + 64 − 81)/(2·7·8) = 32/112 = 2/7 ≈ 0.2857</span>, así que <span class="math">C ≈ 73.40°</span>.',
          'Ángulo <span class="math">A</span>: <span class="math">cos A = (b² + c² − a²)/(2bc) = (64 + 81 − 49)/(2·8·9) = 96/144 = 2/3</span>, así que <span class="math">A ≈ 48.19°</span>.',
          'Ángulo <span class="math">B</span> con la suma de ángulos: <span class="math">B = 180° − 73.40° − 48.19° ≈ 58.41°</span>.',
          'Comprobación: por la ley del seno, <span class="math">a/sen A = 7/0.7454 ≈ 9.39</span> y <span class="math">b/sen B = 8/0.8528 ≈ 9.38</span> ✓.'
        ],
        respuesta: '<span class="math">A ≈ 48.19°</span>, <span class="math">B ≈ 58.41°</span>, <span class="math">C ≈ 73.40°</span>.'
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: 'Un triángulo rectángulo tiene catetos 8 y 15. Halla la hipotenusa y <span class="math">sen θ</span>, <span class="math">cos θ</span>, <span class="math">tan θ</span> del ángulo <span class="math">θ</span> opuesto al cateto 8.',
        pasos: [
          'Hipotenusa: <span class="math">√(8² + 15²) = √(64 + 225) = √289 = 17</span>.',
          '<span class="math">sen θ = 8/17</span>.',
          '<span class="math">cos θ = 15/17</span>.',
          '<span class="math">tan θ = 8/15</span>.'
        ],
        respuesta: 'Hipotenusa 17; <span class="math">sen θ = 8/17</span>, <span class="math">cos θ = 15/17</span>, <span class="math">tan θ = 8/15</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Calcula el valor exacto de <span class="math">sen 30°·cos 60° + tan 45°</span>.',
        pasos: [
          '<span class="math">sen 30° = 1/2</span>, <span class="math">cos 60° = 1/2</span> y <span class="math">tan 45° = 1</span>.',
          'Producto: <span class="math">1/2 · 1/2 = 1/4</span>.',
          'Suma: <span class="math">1/4 + 1 = 5/4</span>.'
        ],
        respuesta: '<span class="math">5/4</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Convierte <span class="math">150°</span> a radianes y <span class="math">3π/4</span> rad a grados.',
        pasos: [
          'Grados a radianes: <span class="math">150·π/180 = 5π/6</span>.',
          'Radianes a grados: <span class="math">(3π/4)·(180/π) = 3·45 = 135°</span>.'
        ],
        respuesta: '<span class="math">150° = 5π/6</span> rad y <span class="math">3π/4</span> rad <span class="math">= 135°</span>.'
      },
      {
        nivel: 'facil',
        enunciado: 'Un triángulo rectángulo tiene hipotenusa 20 y un ángulo de 30°. Halla los dos catetos.',
        pasos: [
          'Cateto opuesto a 30°: <span class="math">20·sen 30° = 20·(1/2) = 10</span>.',
          'Cateto adyacente: <span class="math">20·cos 30° = 20·√3/2 = 10√3 ≈ 17.32</span>.',
          'Comprobación: <span class="math">10² + (10√3)² = 100 + 300 = 400 = 20²</span> ✓.'
        ],
        respuesta: 'Catetos <span class="math">10</span> y <span class="math">10√3 ≈ 17.32</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Una escalera de 5 m se apoya en una pared formando 60° con el suelo. ¿A qué altura llega y a qué distancia de la pared está su base?',
        pasos: [
          'La escalera es la hipotenusa (5 m). La altura es el cateto opuesto al ángulo de 60° con el suelo.',
          'Altura: <span class="math">5·sen 60° = 5·√3/2 ≈ 4.33</span> m.',
          'Distancia de la base a la pared: <span class="math">5·cos 60° = 5·(1/2) = 2.5</span> m.'
        ],
        respuesta: 'Llega a unos <span class="math">4.33</span> m de altura y su base está a <span class="math">2.5</span> m de la pared.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'Desde un mirador a 120 m de altura se ve un punto en el suelo con un ángulo de depresión de 25°. ¿A qué distancia horizontal de la base del mirador está el punto?',
        pasos: [
          'El ángulo de depresión desde arriba es igual al de elevación desde el punto: 25° con la horizontal.',
          'La altura (120) es el cateto opuesto y la distancia <span class="math">d</span> es el adyacente: <span class="math">tan 25° = 120/d</span>.',
          '<span class="math">d = 120/tan 25° ≈ 120/0.4663 ≈ 257.34</span> m.'
        ],
        respuesta: 'Aproximadamente <span class="math">257.34</span> m.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'En un triángulo, <span class="math">a = 12</span>, <span class="math">A = 35°</span> y <span class="math">B = 75°</span>. Halla <span class="math">C</span> y los lados <span class="math">b</span> y <span class="math">c</span>.',
        pasos: [
          '<span class="math">C = 180° − 35° − 75° = 70°</span>.',
          'Ley del seno: <span class="math">12/sen 35° = b/sen 75°</span>, entonces <span class="math">b = 12·sen 75°/sen 35° ≈ 12·0.9659/0.5736 ≈ 20.21</span>.',
          '<span class="math">c = 12·sen 70°/sen 35° ≈ 12·0.9397/0.5736 ≈ 19.66</span>.'
        ],
        respuesta: '<span class="math">C = 70°</span>, <span class="math">b ≈ 20.21</span> y <span class="math">c ≈ 19.66</span>.'
      },
      {
        nivel: 'intermedio',
        enunciado: 'En un triángulo, <span class="math">a = 10</span>, <span class="math">b = 14</span> y el ángulo entre ellos es <span class="math">C = 60°</span>. Halla el lado <span class="math">c</span>.',
        pasos: [
          'Ley del coseno: <span class="math">c² = a² + b² − 2ab·cos C</span>.',
          '<span class="math">c² = 100 + 196 − 2·10·14·cos 60° = 296 − 280·(1/2) = 296 − 140 = 156</span>.',
          '<span class="math">c = √156 ≈ 12.49</span>.'
        ],
        respuesta: '<span class="math">c ≈ 12.49</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'En un triángulo, <span class="math">a = 8</span>, <span class="math">b = 10</span> y <span class="math">A = 30°</span>. Determina cuántos triángulos existen y resuélvelos.',
        pasos: [
          'Ley del seno: <span class="math">sen B = b·sen A/a = 10·(1/2)/8 = 0.625</span>. Como es menor que 1, hay solución.',
          'Dos ángulos posibles: <span class="math">B₁ = sen<sup>−1</sup>(0.625) ≈ 38.68°</span> y <span class="math">B₂ = 180° − 38.68° ≈ 141.32°</span>.',
          'Verifica que <span class="math">A + B &lt; 180°</span>: <span class="math">30° + 38.68° = 68.68°</span> y <span class="math">30° + 141.32° = 171.32°</span>: ambos sirven, hay dos triángulos.',
          'Triángulo 1: <span class="math">C₁ = 180° − 30° − 38.68° = 111.32°</span> y <span class="math">c₁ = 8·sen 111.32°/sen 30° ≈ 14.91</span>.',
          'Triángulo 2: <span class="math">C₂ = 180° − 30° − 141.32° = 8.68°</span> y <span class="math">c₂ = 8·sen 8.68°/sen 30° ≈ 2.41</span>.'
        ],
        respuesta: 'Hay dos triángulos: <span class="math">B ≈ 38.68°</span>, <span class="math">C ≈ 111.32°</span>, <span class="math">c ≈ 14.91</span>; y <span class="math">B ≈ 141.32°</span>, <span class="math">C ≈ 8.68°</span>, <span class="math">c ≈ 2.41</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Si <span class="math">cos θ = −5/13</span> y <span class="math">θ</span> está en el cuadrante III, halla <span class="math">sen θ</span>, <span class="math">tan θ</span> y <span class="math">θ</span> (en grados, a 2 decimales).',
        pasos: [
          '<span class="math">sen²θ = 1 − 25/169 = 144/169</span>, entonces <span class="math">sen θ = ±12/13</span>.',
          'En el cuadrante III el seno es negativo: <span class="math">sen θ = −12/13</span>.',
          '<span class="math">tan θ = (−12/13)/(−5/13) = 12/5</span> (positiva en el cuadrante III).',
          'Ángulo de referencia: <span class="math">cos<sup>−1</sup>(5/13) ≈ 67.38°</span>. En el cuadrante III, <span class="math">θ = 180° + 67.38° ≈ 247.38°</span>.'
        ],
        respuesta: '<span class="math">sen θ = −12/13</span>, <span class="math">tan θ = 12/5</span> y <span class="math">θ ≈ 247.38°</span>.'
      },
      {
        nivel: 'dificil',
        enunciado: 'Analiza <span class="math">y = 3·sen(2x)</span> para <span class="math">x</span> de 0 a <span class="math">π</span>: amplitud, período, ceros, máximo y mínimo.',
        pasos: [
          'Amplitud: <span class="math">|A| = 3</span>. Período: <span class="math">2π/B = 2π/2 = π</span>. En <span class="math">[0, π]</span> hay exactamente un ciclo.',
          'Ceros: <span class="math">sen(2x) = 0</span> cuando <span class="math">2x = 0, π, 2π</span>, o sea <span class="math">x = 0, π/2, π</span>.',
          'Máximo: <span class="math">sen(2x) = 1</span> cuando <span class="math">2x = π/2</span>, es decir <span class="math">x = π/4</span>, con <span class="math">y = 3</span>.',
          'Mínimo: <span class="math">sen(2x) = −1</span> cuando <span class="math">2x = 3π/2</span>, es decir <span class="math">x = 3π/4</span>, con <span class="math">y = −3</span>.'
        ],
        respuesta: 'Amplitud 3, período <span class="math">π</span>; ceros en <span class="math">0, π/2, π</span>; máximo <span class="math">(π/4, 3)</span> y mínimo <span class="math">(3π/4, −3)</span>.'
      }
    ],
    teoricas: [
      {
        q: '¿Por qué las razones trigonométricas dependen solo del ángulo y no del tamaño del triángulo?',
        a: 'Porque todos los triángulos rectángulos con el mismo ángulo agudo son semejantes: sus lados son proporcionales, así que los cocientes entre lados (las razones) no cambian.'
      },
      {
        q: '¿Por qué <span class="math">sen θ</span> y <span class="math">cos θ</span> nunca pueden ser mayores que 1?',
        a: 'En un triángulo rectángulo, los catetos son siempre menores que la hipotenusa. En el círculo unitario, <span class="math">cos θ</span> y <span class="math">sen θ</span> son coordenadas de un punto a distancia 1 del origen, y ninguna coordenada puede superar el radio.'
      },
      {
        q: '¿Cuándo uso la ley del seno y cuándo la ley del coseno?',
        a: 'Ley del seno si conoces un lado y su ángulo opuesto (casos AAS, ASA y LLA). Ley del coseno si conoces dos lados y el ángulo entre ellos (LAL) o los tres lados (LLL).'
      },
      {
        q: '¿Qué es el caso ambiguo (LLA) y por qué ocurre?',
        a: 'Con dos lados y un ángulo no comprendido puede haber 0, 1 o 2 triángulos, porque <span class="math">sen B = sen(180° − B)</span>: tanto un ángulo agudo como su suplemento obtuso dan el mismo seno. Se aceptan los que, sumados con el ángulo dado, dan menos de 180°.'
      },
      {
        q: '¿Por qué <span class="math">tan 90°</span> no está definida?',
        a: 'Porque <span class="math">tan θ = sen θ/cos θ</span> y <span class="math">cos 90° = 0</span>: se dividiría entre cero. Gráficamente, la tangente crece sin límite al acercarse a 90°.'
      },
      {
        q: '¿Qué es un radián?',
        a: 'Es el ángulo central que abarca un arco de longitud igual al radio. Una vuelta completa mide <span class="math">2π</span> radianes, así que <span class="math">π</span> radianes equivalen a 180°.'
      },
      {
        q: '¿De dónde sale la identidad <span class="math">sen²θ + cos²θ = 1</span>?',
        a: 'Del círculo unitario: el punto <span class="math">(cos θ, sen θ)</span> está sobre la circunferencia <span class="math">x² + y² = 1</span>. También del teorema de Pitágoras al dividir <span class="math">a² + b² = c²</span> entre <span class="math">c²</span>.'
      },
      {
        q: '¿Cómo se relaciona la ley del coseno con el teorema de Pitágoras?',
        a: 'Para <span class="math">C = 90°</span> se tiene <span class="math">cos C = 0</span>, el término <span class="math">−2ab·cos C</span> desaparece y queda <span class="math">c² = a² + b²</span>. La ley del coseno es el teorema de Pitágoras generalizado a cualquier ángulo.'
      }
    ],
    errores: [
      'Calcular con la calculadora en el modo equivocado: <span class="math">sen 30</span> da 0.5 en grados pero −0.988 en radianes. Revisa siempre el modo (DEG o RAD) antes de operar.',
      'Aplicar SOH-CAH-TOA (o el teorema de Pitágoras) a un triángulo que no es rectángulo. En triángulos cualesquiera se usan las leyes del seno y del coseno.',
      'Con la ley del seno en el caso LLA, olvidar el segundo ángulo posible <span class="math">180° − B</span>, o aceptarlo sin verificar que la suma de ángulos sea menor que 180°.',
      'Confundir <span class="math">sen(2x)</span> con <span class="math">2·sen x</span>, o dejar sin signo las razones de ángulos fuera del primer cuadrante. El factor dentro del seno cambia el período, no la amplitud; el cuadrante decide el signo.'
    ],
    aplicacion: {
      titulo: 'Altura de una antena con dos ángulos de elevación',
      html: `<p>Un topógrafo quiere conocer la altura de una antena de telecomunicaciones sobre un cerro cerca de Santa Ana, a la que no puede acercarse hasta su base. Desde un punto <span class="math">P</span> mide un ángulo de elevación de <span class="math">30°</span>; camina <span class="math">40</span> m en línea recta hacia la antena y desde el nuevo punto <span class="math">Q</span> mide <span class="math">45°</span>.</p>
<p>Sea <span class="math">h</span> la altura de la antena (sobre la altura de los ojos) y <span class="math">x</span> la distancia horizontal desde <span class="math">Q</span> hasta la base.</p>
<ol>
<li>Desde <span class="math">Q</span>: <span class="math">tan 45° = h/x</span>. Como <span class="math">tan 45° = 1</span>, resulta <span class="math">x = h</span>.</li>
<li>Desde <span class="math">P</span> (a distancia <span class="math">x + 40</span>): <span class="math">tan 30° = h/(x + 40)</span>, con <span class="math">tan 30° = √3/3</span>.</li>
<li>Sustituye <span class="math">x = h</span>: <span class="math">(√3/3)(h + 40) = h</span>, es decir <span class="math">√3(h + 40) = 3h</span>.</li>
<li>Desarrolla: <span class="math">√3·h + 40√3 = 3h</span>, entonces <span class="math">h(3 − √3) = 40√3</span> y <span class="math">h = 40√3/(3 − √3)</span>.</li>
<li>Racionaliza multiplicando por <span class="math">(3 + √3)</span>: <span class="math">h = 40√3(3 + √3)/6 = 20(√3 + 1)</span>.</li>
</ol>
<p>Numéricamente: <span class="math">h = 20(1.7321 + 1) ≈ 54.64</span> m.</p>
<p>Comprobación: <span class="math">x = h = 54.64</span> y <span class="math">tan 30° = 54.64/(54.64 + 40) = 54.64/94.64 ≈ 0.577</span>, que coincide con <span class="math">tan 30° = 0.577</span> ✓. Esta técnica de "doble observación" se usa en topografía para medir alturas inaccesibles de torres, cerros y volcanes.</p>`
    },
    calc: 'triangulo',
    examen: [
      { tipo: 'num', q: 'Un triángulo rectángulo tiene catetos 9 y 12. ¿Cuánto mide la hipotenusa?', r: 15, tol: 0.01, pasos: [
        'Pitágoras: <span class="math">c² = 9² + 12² = 81 + 144 = 225</span>.',
        '<span class="math">c = √225 = 15</span>.',
        'Es la terna 3-4-5 multiplicada por 3.'
      ] },
      { tipo: 'lista', q: 'Halla los ángulos <span class="math">θ</span>, con <span class="math">0° ≤ θ &lt; 360°</span>, que cumplen <span class="math">sen θ = 1/2</span>. Escribe los valores en grados separados por comas.', r: [30, 150], tol: 0.01, pasos: [
        'El ángulo de referencia es 30°, pues <span class="math">sen 30° = 1/2</span>.',
        'El seno es positivo en los cuadrantes I y II.',
        '<span class="math">θ = 30°</span> y <span class="math">θ = 180° − 30° = 150°</span>.'
      ] },
      { tipo: 'num', q: 'Una torre se ve con un ángulo de elevación de 40° desde un punto a 50 m de su base. ¿Qué altura tiene? Redondea a 2 decimales.', r: 41.955, tol: 0.01, pasos: [
        '<span class="math">tan 40° = h/50</span>.',
        '<span class="math">h = 50·tan 40° ≈ 50·0.8391</span>.',
        '<span class="math">h ≈ 41.95</span> m (con la calculadora en grados).'
      ] },
      { tipo: 'num', q: 'En un triángulo, <span class="math">A = 50°</span>, <span class="math">B = 70°</span> y <span class="math">a = 12</span>. Halla <span class="math">b</span> con la ley del seno (2 decimales).', r: 14.7202, tol: 0.01, pasos: [
        'Ley del seno: <span class="math">a/sen A = b/sen B</span>.',
        '<span class="math">b = 12·sen 70°/sen 50° ≈ 12·0.9397/0.7660</span>.',
        '<span class="math">b ≈ 14.72</span>.'
      ] },
      { tipo: 'num', q: 'En un triángulo, <span class="math">a = 5</span>, <span class="math">b = 7</span> y el ángulo entre ellos es <span class="math">C = 60°</span>. Halla el lado <span class="math">c</span> (2 decimales).', r: 6.245, tol: 0.01, pasos: [
        'Ley del coseno: <span class="math">c² = 25 + 49 − 2·5·7·cos 60°</span>.',
        '<span class="math">c² = 74 − 70·(1/2) = 74 − 35 = 39</span>.',
        '<span class="math">c = √39 ≈ 6.24</span>.'
      ] },
      { tipo: 'num', q: 'Un triángulo tiene lados 5, 6 y 7. Halla en grados el ángulo opuesto al lado 7 (2 decimales).', r: 78.463, tol: 0.01, pasos: [
        'Ley del coseno: <span class="math">cos θ = (5² + 6² − 7²)/(2·5·6)</span>.',
        '<span class="math">cos θ = (25 + 36 − 49)/60 = 12/60 = 0.2</span>.',
        '<span class="math">θ = cos<sup>−1</sup>(0.2) ≈ 78.46°</span>.'
      ] },
      { tipo: 'par', q: 'Halla el punto <span class="math">(x, y)</span> del círculo unitario que corresponde a <span class="math">θ = 120°</span> (2 decimales).', r: [-0.5, 0.866], tol: 0.01, pasos: [
        'Ángulo de referencia: <span class="math">180° − 120° = 60°</span>, en el cuadrante II.',
        '<span class="math">x = cos 120° = −cos 60° = −1/2</span>.',
        '<span class="math">y = sen 120° = sen 60° = √3/2 ≈ 0.87</span>. Punto <span class="math">(−0.5, 0.87)</span>.'
      ] },
      { tipo: 'num', q: '¿Cuál es el período (en radianes, a 2 decimales) de <span class="math">y = sen(4x)</span>?', r: 1.5708, tol: 0.01, pasos: [
        'Para <span class="math">y = A·sen(Bx)</span>, el período es <span class="math">2π/|B|</span>.',
        'Con <span class="math">B = 4</span>: <span class="math">2π/4 = π/2</span>.',
        '<span class="math">π/2 ≈ 1.57</span>.'
      ] },
      { tipo: 'opt', q: 'Un ángulo <span class="math">θ</span> está en el cuadrante III. ¿Qué signos tienen <span class="math">sen θ</span>, <span class="math">cos θ</span> y <span class="math">tan θ</span>?', opciones: ['seno +, coseno −, tangente −', 'seno −, coseno +, tangente −', 'seno −, coseno −, tangente +', 'seno +, coseno +, tangente +'], correcta: 2, pasos: [
        'En el cuadrante III, <span class="math">x &lt; 0</span> y <span class="math">y &lt; 0</span>.',
        'El coseno es la coordenada <span class="math">x</span> y el seno la coordenada <span class="math">y</span>: ambos negativos.',
        'La tangente es el cociente de dos negativos: positiva.'
      ] },
      { tipo: 'opt', q: 'Conoces dos lados de un triángulo y el ángulo comprendido entre ellos. ¿Qué herramienta usas primero para hallar el tercer lado?', opciones: ['La ley del seno', 'La ley del coseno', 'El teorema de Pitágoras directamente', 'La identidad <span class="math">sen²θ + cos²θ = 1</span>'], correcta: 1, pasos: [
        'Este es el caso LAL.',
        'La ley del seno necesita un lado y su ángulo opuesto, que aquí no se tienen juntos.',
        'La ley del coseno, <span class="math">c² = a² + b² − 2ab·cos C</span>, resuelve el caso directamente.'
      ] }
    ]
  };
})();

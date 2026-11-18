/* data-2a-u3.js — Unidad 3: Secciones cónicas */
(function () {
  var T = (window.CURSO_2A = window.CURSO_2A || { temas: {} }).temas;

  /* {{ ... }} -> <span class="math">...</span>   y   [[num|den]] -> fracción apilada (al final del archivo) */

  /* ===================================================================== */
  T['1.7'] = {
    id: '1.7',
    unidad: 3,
    titulo: 'La parábola',
    resumen: 'Descubre la parábola como lugar geométrico: foco, directriz, ecuaciones canónicas y desplazadas, tangentes y antenas.',
    objetivos: [
      'Identificar el vértice, el foco, la directriz, el eje y el lado recto de una parábola a partir de su ecuación.',
      'Escribir la ecuación de una parábola a partir de sus elementos, en forma canónica o desplazada con vértice (h, k).',
      'Convertir la ecuación general de una parábola a la forma ordinaria completando cuadrados.',
      'Determinar con el discriminante si una recta es secante, tangente o exterior a una parábola, y aplicar la parábola a problemas reales.'
    ],
    teoria: [
      {
        titulo: 'Qué es una parábola (lugar geométrico)',
        html: `<p>Imagina un punto fijo {{F}} (el <strong>foco</strong>) y una recta fija {{d}} (la <strong>directriz</strong>) que no pasa por {{F}}. La <strong>parábola</strong> es el conjunto de todos los puntos del plano que están <strong>a la misma distancia del foco y de la directriz</strong>.</p>
<p>Elementos principales:</p>
<ul>
<li><strong>Vértice {{V}}:</strong> el punto de la parábola más cercano a la directriz; está justo a la mitad entre el foco y la directriz.</li>
<li><strong>Eje de simetría:</strong> la recta perpendicular a la directriz que pasa por el foco y por el vértice. La parábola es simétrica respecto a ella.</li>
<li><strong>Parámetro {{p}}:</strong> distancia (con signo) del vértice al foco. La distancia del vértice a la directriz también es {{|p|}}, así que foco y directriz están separados {{2|p|}}.</li>
<li><strong>Lado recto {{LR}}:</strong> cuerda que pasa por el foco, perpendicular al eje. Su longitud es {{LR = 4|p|}}.</li>
</ul>
<p>Observa que {{p}} manda sobre la "abertura": si {{|p|}} es pequeño la parábola es angosta y cerrada; si {{|p|}} es grande, es ancha y abierta.</p>`
      },
      {
        titulo: 'Ecuaciones canónicas (vértice en el origen)',
        html: `<p>Si colocamos el vértice en {{(0, 0)}}, hay dos familias según la dirección del eje:</p>
<table>
<tr><th>Eje</th><th>Ecuación</th><th>Foco</th><th>Directriz</th><th>Abre hacia</th></tr>
<tr><td>Vertical (eje y)</td><td>{{x² = 4py}}</td><td>{{F(0, p)}}</td><td>{{y = −p}}</td><td>arriba si {{p > 0}}, abajo si {{p < 0}}</td></tr>
<tr><td>Horizontal (eje x)</td><td>{{y² = 4px}}</td><td>{{F(p, 0)}}</td><td>{{x = −p}}</td><td>derecha si {{p > 0}}, izquierda si {{p < 0}}</td></tr>
</table>
<p>Despejando, la primera queda {{y = [[1|4p]]·x²}} y la segunda {{x = [[1|4p]]·y²}}. Es la función cuadrática que ya conoces, con coeficiente {{a = [[1|4p]]}}. Por eso, <strong>el coeficiente de {{x²}} es el inverso de {{4p}}</strong>.</p>
<p>Truco para no confundirte: la variable que está <em>al cuadrado</em> indica la dirección del eje. Si {{x}} está al cuadrado, la parábola abre hacia arriba o abajo (eje vertical).</p>`
      },
      {
        titulo: 'Parábolas desplazadas: vértice en V(h, k)',
        html: `<p>Si trasladamos la parábola para que su vértice sea {{V(h, k)}}, sustituimos {{x}} por {{x − h}} y {{y}} por {{y − k}}:</p>
<table>
<tr><th>Eje</th><th>Ecuación ordinaria</th><th>Foco</th><th>Directriz</th></tr>
<tr><td>Vertical</td><td>{{(x − h)² = 4p(y − k)}}</td><td>{{F(h, k + p)}}</td><td>{{y = k − p}}</td></tr>
<tr><td>Horizontal</td><td>{{(y − k)² = 4p(x − h)}}</td><td>{{F(h + p, k)}}</td><td>{{x = h − p}}</td></tr>
</table>
<p>Cuidado con los signos: en {{(x + 3)² = 8(y − 2)}} el vértice es {{(−3, 2)}}, porque {{x + 3 = x − (−3)}}. El foco y la directriz se obtienen <strong>sumando o restando {{p}} a la coordenada que corresponde al eje</strong>.</p>
<p>En forma "función": {{y − k = [[1|4p]](x − h)²}}. Es la misma ecuación vista como {{y = a(x − h)² + k}}.</p>`
      },
      {
        titulo: 'Procedimiento: de los elementos a la ecuación y viceversa',
        html: `<p><strong>Para escribir la ecuación</strong> a partir de datos:</p>
<ol>
<li>Ubica el vértice (punto medio entre foco y directriz). Si te dan otros datos, deduce {{h}} y {{k}}.</li>
<li>Decide el eje: directriz horizontal ({{y = ...}}) significa eje vertical; directriz vertical ({{x = ...}}) significa eje horizontal.</li>
<li>Calcula {{p}} con su signo: positivo si la parábola abre hacia donde crecen {{x}} o {{y}}; negativo en caso contrario.</li>
<li>Sustituye en la forma ordinaria correspondiente.</li>
</ol>
<p><strong>Para leer los elementos</strong> de una ecuación: compara con la forma ordinaria, lee {{h}}, {{k}}, iguala el coeficiente a {{4p}} y calcula foco, directriz y lado recto. Los extremos del lado recto están a {{2|p|}} del foco hacia cada lado y ayudan a trazar la gráfica con precisión.</p>`
      },
      {
        titulo: 'Forma general y completar cuadrados',
        html: `<p>Una parábola con eje paralelo a un eje coordenado aparece en forma general como:</p>
<p>{{x² + Dx + Ey + F = 0}} (eje vertical) o {{y² + Dy + Ex + F = 0}} (eje horizontal).</p>
<p>Solo una de las variables aparece al cuadrado. Para pasarla a la forma ordinaria <strong>completas el cuadrado</strong> en esa variable y factorizas el resto:</p>
<ol>
<li>Agrupa los términos de la variable cuadrática a un lado y el resto al otro.</li>
<li>Suma {{([[coef|2]])²}} a ambos lados, donde "coef" es el coeficiente del término lineal de esa variable.</li>
<li>Factoriza el trinomio cuadrado perfecto y saca factor común en el otro lado para formar {{4p(y − k)}} o {{4p(x − h)}}.</li>
</ol>
<p>Atajo para {{y = ax² + bx + c}}: el vértice está en {{x<sub>v</sub> = [[−b|2a]]}} (sustituye ese valor para hallar {{y<sub>v</sub>}}) y {{p = [[1|4a]]}}.</p>`
      },
      {
        titulo: 'Recta y parábola: secante, tangente o exterior',
        html: `<p>Para saber cómo se relacionan una recta y una parábola, <strong>sustituye la ecuación de la recta en la de la parábola</strong>. Obtienes una ecuación cuadrática {{ax² + bx + c = 0}} y miras su discriminante {{Δ = b² − 4ac}}:</p>
<table>
<tr><th>Discriminante</th><th>Soluciones</th><th>Posición de la recta</th></tr>
<tr><td>{{Δ > 0}}</td><td>2 puntos</td><td>Secante (corta en dos puntos)</td></tr>
<tr><td>{{Δ = 0}}</td><td>1 punto</td><td>Tangente (toca en un solo punto)</td></tr>
<tr><td>{{Δ < 0}}</td><td>0 puntos reales</td><td>Exterior (no la corta)</td></tr>
</table>
<p>Es exactamente el método de sustitución de los sistemas lineal-cuadráticos del tema 1.3, ahora con significado geométrico.</p>
<p><strong>Aviso importante:</strong> una recta paralela al eje de simetría corta a la parábola en un solo punto, pero <em>no</em> es tangente. En ese caso la ecuación resultante es lineal (no hay término cuadrático), no hay discriminante. Una tangente verdadera siempre se obtiene con {{Δ = 0}}.</p>
<p>Extra: la tangente a {{x² = 4py}} en el punto {{(x₁, y₁)}} de la parábola es {{x₁x = 2p(y + y₁)}}.</p>`
      },
      {
        titulo: 'La propiedad reflectora y las antenas parabólicas',
        html: `<p>La parábola tiene una propiedad mágica: <strong>todo rayo que llega paralelo al eje se refleja y pasa por el foco</strong> (y al revés, todo rayo que sale del foco sale paralelo al eje).</p>
<p>Por eso las <strong>antenas parabólicas</strong> de televisión y satélite colocan el receptor en el foco: la señal que llega de un satélite lejano (casi paralela) se concentra en un solo punto. Por la misma razón, los faros de un carro tienen el foco en el bombillo para proyectar un haz paralelo, y las cocinas solares concentran el calor en el foco.</p>
<p>Para diseñar una antena basta conocer su diámetro y su profundidad: con eso se calcula {{p}} y se sabe a qué distancia del fondo debe ir el receptor.</p>
<p>Prueba la calculadora de esta página para ver cómo cambian el foco y la directriz al mover {{p}}, {{h}} y {{k}}.</p>`
      },
      {
        titulo: 'Casos especiales y conexión con otros temas',
        html: `<ul>
<li><strong>Parábola y función cuadrática:</strong> la gráfica de {{y = ax² + bx + c}} es una parábola con eje vertical; el signo de {{a}} es el signo de {{p}}.</li>
<li><strong>Identificar la cónica:</strong> en la ecuación general {{Ax² + Cy² + Dx + Ey + F = 0}}, si solo una de las variables está al cuadrado (es decir, {{A = 0}} o {{C = 0}}, pero no ambos), la cónica es una parábola.</li>
<li><strong>Comprobación de un punto:</strong> un punto está en la parábola si su distancia al foco coincide con su distancia a la directriz. Es una buena verificación final.</li>
<li><strong>Siguiente paso:</strong> con la circunferencia, la elipse y la hipérbola completarás la familia de las cónicas, todas obtenidas al cortar un cono con un plano.</li>
</ul>`
      }
    ],
    formulas: [
      { label: 'Canónica con eje vertical', html: '{{x² = 4py}}   ( y = [[1|4p]]·x² )   F(0, p),  directriz y = −p' },
      { label: 'Canónica con eje horizontal', html: '{{y² = 4px}}   ( x = [[1|4p]]·y² )   F(p, 0),  directriz x = −p' },
      { label: 'Ordinaria, eje vertical', html: '{{(x − h)² = 4p(y − k)}}   V(h, k),  F(h, k + p),  directriz y = k − p' },
      { label: 'Ordinaria, eje horizontal', html: '{{(y − k)² = 4p(x − h)}}   V(h, k),  F(h + p, k),  directriz x = h − p' },
      { label: 'Lado recto', html: '{{LR = 4|p|}}' },
      { label: 'Vértice de y = ax² + bx + c', html: '{{x<sub>v</sub> = [[−b|2a]]}},   {{p = [[1|4a]]}}' },
      { label: 'Recta y parábola', html: '{{Δ = b² − 4ac}}:   Δ > 0 secante,  Δ = 0 tangente,  Δ < 0 exterior' }
    ],
    ejemplos: [
      {
        titulo: 'Elementos de una parábola con vértice en el origen',
        enunciado: `Halla el vértice, el foco, la directriz y el lado recto de {{x² = 8y}}.`,
        pasos: [
          `Compara con {{x² = 4py}}: {{4p = 8}}, entonces {{p = 2}}.`,
          `Como {{p > 0}} y {{x}} está al cuadrado, abre hacia arriba. El vértice es {{V(0, 0)}}.`,
          `Foco: {{F(0, p) = (0, 2)}}. Directriz: {{y = −p = −2}}.`,
          `Lado recto: {{LR = 4p = 8}}. Sus extremos están en {{y = 2}}: {{x² = 8·2 = 16}}, así que {{x = ±4}}, o sea {{(−4, 2)}} y {{(4, 2)}}.`
        ],
        respuesta: `{{V(0, 0)}}, {{F(0, 2)}}, directriz {{y = −2}}, {{LR = 8}} con extremos {{(±4, 2)}}.`
      },
      {
        titulo: 'Ecuación a partir del foco y la directriz',
        enunciado: `Halla la ecuación de la parábola con foco {{F(3, 0)}} y directriz {{x = −3}}.`,
        pasos: [
          `El vértice es el punto medio entre el foco y la directriz: {{V(0, 0)}}.`,
          `La directriz es vertical, así que el eje es horizontal y la forma es {{y² = 4px}}.`,
          `El foco está a la derecha del vértice, entonces {{p = 3 > 0}} y abre hacia la derecha.`,
          `Sustituye: {{y² = 4(3)x = 12x}}.`,
          `Verificación con {{(3, 6)}}: {{36 = 12·3}}. Distancia al foco: 6; distancia a la directriz: {{3 − (−3) = 6}}.`
        ],
        respuesta: `{{y² = 12x}}`
      },
      {
        titulo: 'Parábola con vértice desplazado',
        enunciado: `Halla la ecuación y la directriz de la parábola con vértice {{V(2, −1)}} y foco {{F(2, 1)}}.`,
        pasos: [
          `Vértice y foco tienen la misma abscisa ({{x = 2}}): el eje es vertical y la forma es {{(x − h)² = 4p(y − k)}}.`,
          `{{p = 1 − (−1) = 2}}, positivo: abre hacia arriba.`,
          `Con {{h = 2}} y {{k = −1}}: {{(x − 2)² = 4(2)(y + 1) = 8(y + 1)}}.`,
          `Directriz: {{y = k − p = −1 − 2 = −3}}.`
        ],
        respuesta: `{{(x − 2)² = 8(y + 1)}}, directriz {{y = −3}}.`
      },
      {
        titulo: 'De la forma general a la ordinaria',
        enunciado: `Escribe {{y² − 6y − 8x + 17 = 0}} en forma ordinaria y halla vértice, foco y directriz.`,
        pasos: [
          `Solo {{y}} está al cuadrado: eje horizontal. Agrupa: {{y² − 6y = 8x − 17}}.`,
          `Completa el cuadrado: suma {{([[−6|2]])² = 9}} a ambos lados: {{y² − 6y + 9 = 8x − 17 + 9}}.`,
          `Factoriza: {{(y − 3)² = 8x − 8 = 8(x − 1)}}.`,
          `Compara con {{(y − k)² = 4p(x − h)}}: {{k = 3}}, {{h = 1}}, {{4p = 8}}, {{p = 2}}.`,
          `Vértice {{V(1, 3)}}; foco {{F(h + p, k) = (3, 3)}}; directriz {{x = h − p = −1}}.`
        ],
        respuesta: `{{(y − 3)² = 8(x − 1)}}; {{V(1, 3)}}, {{F(3, 3)}}, directriz {{x = −1}}.`
      },
      {
        titulo: 'Recta tangente a una parábola',
        enunciado: `¿Para qué valor de {{k}} la recta {{y = 2x + k}} es tangente a la parábola {{y = x² − 4x + 5}}? Halla el punto de tangencia.`,
        pasos: [
          `Iguala: {{x² − 4x + 5 = 2x + k}}, es decir {{x² − 6x + (5 − k) = 0}}.`,
          `Discriminante: {{Δ = 36 − 4(5 − k) = 16 + 4k}}.`,
          `Tangente significa un solo punto: {{Δ = 0}}, entonces {{16 + 4k = 0}} y {{k = −4}}.`,
          `La solución doble es {{x = [[6|2]] = 3}}; {{y = 2(3) − 4 = 2}}.`,
          `Comprobación en la parábola: {{9 − 12 + 5 = 2}}.`,
          `(Si {{k > −4}} la recta es secante; si {{k < −4}} es exterior.)`
        ],
        respuesta: `{{k = −4}}; punto de tangencia {{(3, 2)}}.`
      },
      {
        titulo: 'Dónde poner el receptor de una antena parabólica',
        enunciado: `Una antena parabólica de una casa en Santa Ana tiene 1.2 m de diámetro y 0.15 m de profundidad en el centro. ¿A qué distancia del fondo debe colocarse el receptor (el foco)? ¿Cuánto mide su lado recto?`,
        pasos: [
          `Coloca el vértice en el origen con el eje vertical: {{x² = 4py}}.`,
          `El borde de la antena es el punto {{(0.6, 0.15)}} (mitad del diámetro, profundidad).`,
          `Sustituye: {{0.6² = 4p(0.15)}} → {{0.36 = 0.6p}} → {{p = 0.6}} m.`,
          `El receptor va en el foco, a {{0.6 m = 60 cm}} del fondo.`,
          `Lado recto: {{LR = 4p = 2.4}} m. Ecuación de la antena: {{x² = 2.4y}}; con {{x = 0.6}} da {{y = 0.15}}.`
        ],
        respuesta: `El receptor se coloca a {{60 cm}} del vértice; {{LR = 2.4 m}}.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Para {{x² = 12y}} halla el foco, la directriz y el lado recto.`,
        pasos: [`{{4p = 12}} → {{p = 3}}.`, `Foco {{F(0, 3)}}.`, `Directriz {{y = −3}}.`, `{{LR = 4p = 12}}.`],
        respuesta: `{{F(0, 3)}}, directriz {{y = −3}}, {{LR = 12}}.`
      },
      {
        nivel: 'facil',
        enunciado: `Para {{y² = −16x}} indica hacia dónde abre y halla foco y directriz.`,
        pasos: [`{{4p = −16}} → {{p = −4}}.`, `{{y}} al cuadrado y {{p < 0}}: abre hacia la izquierda.`, `Foco {{F(p, 0) = (−4, 0)}}.`, `Directriz {{x = −p = 4}}. Lado recto {{4|p| = 16}}.`],
        respuesta: `Abre a la izquierda; {{F(−4, 0)}}; directriz {{x = 4}}.`
      },
      {
        nivel: 'facil',
        enunciado: `Escribe la ecuación de la parábola con vértice en el origen y foco {{F(0, −5)}}.`,
        pasos: [`El foco está sobre el eje y: forma {{x² = 4py}}.`, `{{p = −5}} (el foco está debajo del vértice).`, `{{x² = 4(−5)y}}.`],
        respuesta: `{{x² = −20y}}`
      },
      {
        nivel: 'facil',
        enunciado: `Halla los extremos del lado recto de {{y² = 12x}}.`,
        pasos: [`{{4p = 12}} → {{p = 3}}, foco {{F(3, 0)}}.`, `Los extremos tienen {{x = 3}}: {{y² = 12·3 = 36}}.`, `{{y = ±6}}.`],
        respuesta: `{{(3, 6)}} y {{(3, −6)}} (el lado recto mide 12).`
      },
      {
        nivel: 'intermedio',
        enunciado: `Para {{(x + 1)² = −12(y − 2)}} halla vértice, foco, directriz y hacia dónde abre.`,
        pasos: [`{{h = −1}}, {{k = 2}}, {{4p = −12}} → {{p = −3}}.`, `Vértice {{V(−1, 2)}}; como {{p < 0}} abre hacia abajo.`, `Foco {{F(h, k + p) = (−1, −1)}}.`, `Directriz {{y = k − p = 2 + 3 = 5}}.`],
        respuesta: `{{V(−1, 2)}}, {{F(−1, −1)}}, directriz {{y = 5}}, abre hacia abajo.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Para {{(y − 4)² = 6(x + 2)}} halla vértice, foco y directriz.`,
        pasos: [`{{k = 4}}, {{h = −2}}, {{4p = 6}} → {{p = [[3|2]]}}.`, `Vértice {{V(−2, 4)}}; abre hacia la derecha.`, `Foco {{F(h + p, k) = (−2 + 1.5, 4) = (−[[1|2]], 4)}}.`, `Directriz {{x = h − p = −2 − 1.5 = −[[7|2]]}}.`],
        respuesta: `{{V(−2, 4)}}, {{F(−0.5, 4)}}, directriz {{x = −3.5}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Pasa {{x² − 4x − 8y − 20 = 0}} a forma ordinaria y halla vértice, foco y directriz.`,
        pasos: [`Agrupa: {{x² − 4x = 8y + 20}}.`, `Suma {{([[−4|2]])² = 4}}: {{x² − 4x + 4 = 8y + 24}}.`, `{{(x − 2)² = 8(y + 3)}}.`, `{{h = 2}}, {{k = −3}}, {{p = 2}}: vértice {{(2, −3)}}, foco {{(2, −1)}}, directriz {{y = −5}}.`],
        respuesta: `{{(x − 2)² = 8(y + 3)}}; {{V(2, −3)}}, {{F(2, −1)}}, directriz {{y = −5}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Una parábola tiene vértice {{V(3, 1)}} y directriz {{x = 0}}. Halla su ecuación y su foco.`,
        pasos: [`Directriz vertical: eje horizontal, forma {{(y − k)² = 4p(x − h)}}.`, `Directriz {{x = h − p}}: {{0 = 3 − p}} → {{p = 3}}.`, `Ecuación: {{(y − 1)² = 12(x − 3)}}.`, `Foco {{F(h + p, k) = (6, 1)}}.`],
        respuesta: `{{(y − 1)² = 12(x − 3)}}, foco {{(6, 1)}}.`
      },
      {
        nivel: 'dificil',
        enunciado: `La parábola {{y = ax² + bx + c}} pasa por {{(0, 3)}}, {{(1, 0)}} y {{(3, 0)}}. Halla su ecuación, vértice, foco y directriz.`,
        pasos: [`Las raíces son 1 y 3: {{y = a(x − 1)(x − 3)}}.`, `Con {{(0, 3)}}: {{3 = a(−1)(−3) = 3a}} → {{a = 1}}. Entonces {{y = x² − 4x + 3}}.`, `Vértice: {{x<sub>v</sub> = [[4|2]] = 2}}, {{y<sub>v</sub> = 4 − 8 + 3 = −1}}: {{V(2, −1)}}.`, `{{p = [[1|4a]] = [[1|4]]}}: foco {{F(2, −1 + 0.25) = (2, −[[3|4]])}}.`, `Directriz {{y = −1 − 0.25 = −[[5|4]]}}. Forma ordinaria: {{(x − 2)² = y + 1}}.`],
        respuesta: `{{y = x² − 4x + 3}}; {{V(2, −1)}}, {{F(2, −0.75)}}, directriz {{y = −1.25}}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla los puntos de intersección de {{y² = 4x}} con la recta {{y = x − 3}} y la longitud de la cuerda que forman.`,
        pasos: [`Sustituye: {{(x − 3)² = 4x}} → {{x² − 6x + 9 = 4x}} → {{x² − 10x + 9 = 0}}.`, `Factoriza: {{(x − 1)(x − 9) = 0}} → {{x = 1}} o {{x = 9}}.`, `Con {{y = x − 3}}: {{(1, −2)}} y {{(9, 6)}}.`, `Comprobación: {{4 = 4·1}} y {{36 = 4·9}}.`, `Cuerda: {{√((9 − 1)² + (6 + 2)²) = √128 = 8√2 ≈ 11.31}}.`],
        respuesta: `{{(1, −2)}} y {{(9, 6)}}; longitud {{8√2 ≈ 11.31}}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla el valor de {{m}} para que la recta {{y = mx + 1}} sea tangente a {{y² = 4x}} y el punto de tangencia. Explica qué pasa con {{m = 0}}.`,
        pasos: [`Sustituye: {{(mx + 1)² = 4x}} → {{m²x² + (2m − 4)x + 1 = 0}}.`, `Discriminante: {{Δ = (2m − 4)² − 4m² = 16 − 16m}}.`, `Tangente: {{Δ = 0}} → {{m = 1}}.`, `Con {{m = 1}}: {{x² − 2x + 1 = 0}} → {{x = 1}}, {{y = 2}}. Punto {{(1, 2)}}.`, `Si {{m = 0}} la recta es {{y = 1}}, paralela al eje de la parábola: la corta en un solo punto ({{x = [[1|4]]}}), pero no es tangente (la ecuación pierde el término cuadrático).`],
        respuesta: `{{m = 1}}, punto de tangencia {{(1, 2)}}; {{m = 0}} da un solo punto pero no es tangente.`
      }
    ],
    teoricas: [
      { q: `¿Qué significa que la parábola sea un "lugar geométrico"?`, a: `Que está formada por <em>todos</em> los puntos que cumplen una misma condición: en este caso, estar a igual distancia de un punto fijo (el foco) y de una recta fija (la directriz).` },
      { q: `¿Qué indica el signo de {{p}}?`, a: `Indica hacia dónde abre. En {{x² = 4py}}: arriba si {{p > 0}}, abajo si {{p < 0}}. En {{y² = 4px}}: derecha si {{p > 0}}, izquierda si {{p < 0}}.` },
      { q: `¿Dónde está el vértice respecto al foco y a la directriz?`, a: `Exactamente a la mitad: dista {{|p|}} del foco y {{|p|}} de la directriz, sobre el eje de simetría.` },
      { q: `Si aumenta {{|p|}}, ¿la parábola se hace más abierta o más cerrada?`, a: `Más abierta (más ancha), porque el lado recto {{4|p|}} crece. Con {{|p|}} pequeño la parábola es angosta.` },
      { q: `¿Cómo sabes, mirando la ecuación general, que una cónica es una parábola?`, a: `Porque solo una de las variables aparece al cuadrado (la otra aparece solo de forma lineal).` },
      { q: `¿Qué significa {{Δ = 0}} al sustituir una recta en una parábola?`, a: `Que la recta y la parábola comparten un único punto con solución doble: la recta es tangente a la parábola.` },
      { q: `¿Por qué una recta paralela al eje corta a la parábola en un solo punto sin ser tangente?`, a: `Porque al sustituir se pierde el término cuadrático y queda una ecuación lineal con una única solución; no hay un contacto "rozando" la curva, sino que la recta la atraviesa.` },
      { q: `¿Por qué el receptor de una antena parabólica se coloca en el foco?`, a: `Porque los rayos que llegan paralelos al eje se reflejan en la superficie y todos pasan por el foco, concentrando la señal en el receptor.` }
    ],
    errores: [
      `Confundir {{p}} con {{4p}}: en {{x² = 8y}} se tiene {{4p = 8}}, entonces {{p = 2}} (y no 8). El foco está en {{(0, 2)}}. Evítalo escribiendo siempre "{{4p = ...}}" antes de continuar.`,
      `Leer mal los signos del vértice: en {{(x + 3)² = 8(y − 2)}} el vértice es {{(−3, 2)}}, no {{(3, 2)}}. Recuerda que la forma es {{x − h}}, así que cambia el signo que ves.`,
      `Sumar {{p}} a la coordenada equivocada: en una parábola vertical el foco es {{(h, k + p)}} (cambia {{y}}), y en una horizontal es {{(h + p, k)}} (cambia {{x}}). La directriz va al lado opuesto.`,
      `Decir que toda recta que corta una vez es tangente. Una recta paralela al eje corta una sola vez sin ser tangente. La tangente se comprueba con {{Δ = 0}} (con la ecuación cuadrática no degenerada).`
    ],
    aplicacion: {
      titulo: 'Un arco parabólico para un puente en la carretera',
      html: `<p>Un puente tiene un arco en forma de parábola. Mide 40 m de ancho en la base y 10 m de altura en el centro. ¿Pueden pasar por debajo camiones de 12 m de ancho y qué altura máxima pueden tener? ¿Cuál es la altura del arco a 10 m del centro?</p>
<ol>
<li><strong>Modelo:</strong> coloca el vértice en el punto más alto: {{V(0, 10)}}. El arco abre hacia abajo, así que {{(x − 0)² = 4p(y − 10)}} con {{p < 0}}.</li>
<li><strong>Dato en la base:</strong> el arco toca el suelo en {{(20, 0)}}: {{20² = 4p(0 − 10)}} → {{400 = 4p(−10) = −40p}}, así que {{p = −10}} y {{4p = −40}}.</li>
<li><strong>Ecuación:</strong> {{x² = −40(y − 10)}}, o bien {{y = 10 − [[x²|40]]}}.</li>
<li><strong>Camión de 12 m de ancho:</strong> a cada lado del centro hay {{x = 6}}: {{y = 10 − [[36|40]] = 9.1}} m. Altura máxima permitida: {{9.1 m}}.</li>
<li><strong>A 10 m del centro:</strong> {{y = 10 − [[100|40]] = 7.5}} m.</li>
<li><strong>Foco:</strong> {{p = −10}}, así que el foco está en {{(0, 0)}}, a nivel del suelo.</li>
</ol>
<p><strong>Respuesta:</strong> sí pasan; la altura máxima de un camión de 12 m de ancho es {{9.1 m}}; a 10 m del centro el arco mide {{7.5 m}}.</p>`
    },
    calc: 'parabola',
    examen: [
      { tipo: 'num', q: `En la parábola {{x² = 20y}}, ¿cuánto vale el parámetro {{p}}?`, r: 5, tol: 0.01, pasos: [`Compara con {{x² = 4py}}.`, `{{4p = 20}}.`, `{{p = 5}}.`] },
      { tipo: 'par', q: `Halla el foco de la parábola {{(x − 2)² = 12(y + 1)}}. Escribe el punto como (x, y).`, r: [2, 2], tol: 0.01, pasos: [`Vértice: {{(h, k) = (2, −1)}}.`, `{{4p = 12}} → {{p = 3}}.`, `Eje vertical: {{F(h, k + p) = (2, −1 + 3)}}.`, `{{F(2, 2)}}.`] },
      { tipo: 'num', q: `¿Cuánto mide el lado recto de la parábola {{y² = −24x}}?`, r: 24, tol: 0.01, pasos: [`{{4p = −24}}, entonces {{p = −6}}.`, `{{LR = 4|p|}}.`, `{{LR = 24}}.`] },
      { tipo: 'opt', q: `¿Hacia dónde abre la parábola {{y² = −8x}}?`, opciones: [`Hacia la derecha`, `Hacia la izquierda`, `Hacia arriba`, `Hacia abajo`], correcta: 1, pasos: [`Como {{y}} está al cuadrado, el eje es horizontal.`, `{{4p = −8}}, así que {{p < 0}}.`, `Abre hacia la izquierda.`] },
      { tipo: 'par', q: `Halla el vértice de la parábola {{y² − 4y − 12x − 8 = 0}}. Escribe el punto como (x, y).`, r: [-1, 2], tol: 0.01, pasos: [`Agrupa: {{y² − 4y = 12x + 8}}.`, `Suma 4: {{(y − 2)² = 12x + 12}}.`, `{{(y − 2)² = 12(x + 1)}}.`, `Vértice {{(−1, 2)}}.`] },
      { tipo: 'num', q: `Una antena parabólica de 3 m de diámetro tiene 0.45 m de profundidad. ¿A qué distancia del vértice (en metros) está el foco?`, r: 1.25, tol: 0.01, pasos: [`Modelo: {{x² = 4py}} con vértice en el origen.`, `Borde de la antena: {{(1.5, 0.45)}}.`, `{{2.25 = 4p(0.45) = 1.8p}}.`, `{{p = 1.25}} m.`] },
      { tipo: 'num', q: `¿Para qué valor de {{k}} la recta {{y = 4x + k}} es tangente a la parábola {{y = x²}}?`, r: -4, tol: 0.01, pasos: [`Iguala: {{x² = 4x + k}} → {{x² − 4x − k = 0}}.`, `{{Δ = 16 + 4k}}.`, `Tangente: {{Δ = 0}} → {{k = −4}}.`] },
      { tipo: 'lista', q: `Halla las abscisas (valores de {{x}}) de los puntos donde la recta {{y = x + 6}} corta a la parábola {{y = x²}}. Sepáralas con coma.`, r: [3, -2], tol: 0.01, pasos: [`Iguala: {{x² = x + 6}} → {{x² − x − 6 = 0}}.`, `Factoriza: {{(x − 3)(x + 2) = 0}}.`, `{{x = 3}} o {{x = −2}}.`] },
      { tipo: 'opt', q: `¿Cuál es la directriz de la parábola {{(y − 1)² = 8(x + 2)}}?`, opciones: [`{{x = 0}}`, `{{y = −1}}`, `{{x = −2}}`, `{{x = −4}}`], correcta: 3, pasos: [`Vértice {{(h, k) = (−2, 1)}}; {{4p = 8}}, {{p = 2}}.`, `Eje horizontal: directriz {{x = h − p}}.`, `{{x = −2 − 2 = −4}}.`] },
      { tipo: 'opt', q: `Al sustituir una recta en una parábola obtienes una cuadrática con discriminante negativo. ¿Qué concluyes?`, opciones: [`La recta es secante`, `La recta es tangente`, `La recta no corta a la parábola`, `La recta es paralela al eje`], correcta: 2, pasos: [`{{Δ < 0}} significa que no hay soluciones reales.`, `No hay puntos comunes.`, `La recta es exterior: no corta a la parábola.`] }
    ]
  };

  /* ===================================================================== */
  T['1.8'] = {
    id: '1.8',
    unidad: 3,
    titulo: 'La circunferencia',
    resumen: 'Domina la circunferencia: ecuación ordinaria y general, completar cuadrados, tres puntos y su posición respecto a una recta.',
    objetivos: [
      'Escribir la ecuación ordinaria de una circunferencia a partir de su centro y radio, o de otros datos geométricos.',
      'Convertir entre la forma ordinaria y la forma general completando cuadrados, y reconocer cuándo no representa una circunferencia real.',
      'Hallar la circunferencia que pasa por tres puntos y la que es tangente a una recta.',
      'Determinar la posición de una recta respecto a una circunferencia y aplicar la ecuación a problemas como sismos y fumigación.'
    ],
    teoria: [
      {
        titulo: 'Definición y elementos',
        html: `<p>La <strong>circunferencia</strong> es el lugar geométrico de los puntos {{P(x, y)}} del plano que están a una distancia constante {{r}} de un punto fijo {{C(h, k)}}.</p>
<ul>
<li><strong>Centro {{C(h, k)}}:</strong> el punto fijo.</li>
<li><strong>Radio {{r}}:</strong> la distancia constante ({{r > 0}}).</li>
<li><strong>Diámetro:</strong> {{2r}}, cuerda que pasa por el centro.</li>
<li><strong>Cuerda, secante y tangente:</strong> una cuerda une dos puntos de la curva; una secante la corta en dos puntos; una tangente la toca en uno solo y es perpendicular al radio en ese punto.</li>
</ul>
<p>Es la única cónica en la que todos los puntos están a la misma distancia de un único punto especial. Una circunferencia puede verse como una elipse "perfectamente redonda" (con {{a = b}}).</p>`
      },
      {
        titulo: 'Ecuación ordinaria (centro y radio)',
        html: `<p>Si {{P(x, y)}} está en la circunferencia, la fórmula de distancia dice {{√((x − h)² + (y − k)²) = r}}. Elevando al cuadrado:</p>
<p>{{(x − h)² + (y − k)² = r²}}</p>
<p>Si el centro es el origen, {{h = k = 0}}, y queda la forma canónica:</p>
<p>{{x² + y² = r²}}</p>
<p>Observa que se leen los signos al revés: en {{(x + 4)² + (y − 1)² = 25}} el centro es {{C(−4, 1)}} y el radio es {{r = √25 = 5}} (el lado derecho es {{r²}}, no {{r}}).</p>
<p>Un punto {{Q}} está <strong>sobre</strong>, <strong>dentro</strong> o <strong>fuera</strong> de la circunferencia según {{(x<sub>Q</sub> − h)² + (y<sub>Q</sub> − k)²}} sea igual, menor o mayor que {{r²}}.</p>`
      },
      {
        titulo: 'Ecuación general y completar cuadrados',
        html: `<p>Si desarrollas la ecuación ordinaria obtienes la <strong>forma general</strong>:</p>
<p>{{x² + y² + Dx + Ey + F = 0}}</p>
<p>con {{D = −2h}}, {{E = −2k}} y {{F = h² + k² − r²}}. (En otros libros se escribe con las letras {{C}}, {{D}}, {{E}}: es la misma idea.) Los coeficientes de {{x²}} y {{y²}} son iguales; si no lo son, divide entre el coeficiente común.</p>
<p><strong>Para pasar a la forma ordinaria</strong>, completa cuadrados:</p>
<ol>
<li>Divide la ecuación entre el coeficiente de {{x²}} (si no es 1).</li>
<li>Agrupa las {{x}} juntas, las {{y}} juntas, y pasa la constante al otro lado.</li>
<li>Suma a ambos lados {{([[D|2]])²}} y {{([[E|2]])²}}.</li>
<li>Factoriza dos trinomios cuadrados perfectos.</li>
</ol>
<p>Atajo directo: {{C(−[[D|2]], −[[E|2]])}} y {{r² = [[D²|4]] + [[E²|4]] − F}}.</p>`
      },
      {
        titulo: '¿Siempre es una circunferencia real?',
        html: `<p>Al completar cuadrados llegas a {{(x − h)² + (y − k)² = N}}. El valor de {{N}} decide:</p>
<table>
<tr><th>Valor de {{N}}</th><th>Qué representa</th></tr>
<tr><td>{{N > 0}}</td><td>Circunferencia de radio {{√N}}</td></tr>
<tr><td>{{N = 0}}</td><td>Un solo punto, {{(h, k)}} (circunferencia de radio cero)</td></tr>
<tr><td>{{N < 0}}</td><td>Ningún punto real (una suma de cuadrados no puede ser negativa)</td></tr>
</table>
<p>En la forma general, {{N = [[D²|4]] + [[E²|4]] − F}}. Antes de afirmar que una ecuación es una circunferencia, siempre calcula {{N}}.</p>
<p><strong>Identificar la cónica:</strong> en {{Ax² + Cy² + Dx + Ey + F = 0}}, si {{A = C}} (mismo signo y mismo valor) la cónica es una circunferencia (sin término {{xy}}).</p>`
      },
      {
        titulo: 'Circunferencia por tres puntos y por condiciones',
        html: `<p><strong>Tres puntos no alineados</strong> determinan una única circunferencia. Método:</p>
<ol>
<li>Parte de la forma general {{x² + y² + Dx + Ey + F = 0}}.</li>
<li>Sustituye cada punto: obtienes un sistema lineal de 3 ecuaciones con incógnitas {{D}}, {{E}}, {{F}}.</li>
<li>Resuelve el sistema y completa cuadrados para hallar centro y radio.</li>
</ol>
<p><strong>Otras condiciones frecuentes:</strong></p>
<ul>
<li><em>Diámetro dado por dos puntos {{A}} y {{B}}:</em> el centro es el punto medio de {{AB}} y el radio es la mitad de {{AB}}.</li>
<li><em>Centro dado y pasa por un punto:</em> el radio es la distancia del centro al punto.</li>
<li><em>Centro dado y tangente a una recta:</em> el radio es la distancia del centro a la recta (fórmula de la sección siguiente).</li>
</ul>`
      },
      {
        titulo: 'Recta y circunferencia: secante, tangente o exterior',
        html: `<p>Hay dos caminos para estudiar la posición de la recta {{Ax + By + C = 0}} respecto a la circunferencia de centro {{(h, k)}} y radio {{r}}.</p>
<p><strong>Camino 1: distancia del centro a la recta.</strong></p>
<p>{{d = [[&#124;Ah + Bk + C&#124;|√(A² + B²)]]}}</p>
<p>Si {{d < r}}: secante (2 puntos). Si {{d = r}}: tangente (1 punto). Si {{d > r}}: exterior (0 puntos).</p>
<p><strong>Camino 2: sustitución y discriminante.</strong> Despeja {{y}} de la recta y sustitúyela en la circunferencia; obtienes una cuadrática en {{x}} y analizas {{Δ = b² − 4ac}} igual que en la parábola ({{Δ > 0}}, {{= 0}}, {{< 0}}).</p>
<p><strong>Tangente en un punto {{(x₁, y₁)}} de {{x² + y² = r²}}:</strong> {{x₁x + y₁y = r²}}. En general, la tangente es perpendicular al radio que va al punto de tangencia: su pendiente es el opuesto del inverso de la pendiente del radio.</p>`
      },
      {
        titulo: 'Para qué sirve: sismos, fumigación y más',
        html: `<p>Cuando un fenómeno se propaga igual en todas direcciones desde un punto, su alcance es una circunferencia:</p>
<ul>
<li><strong>Sismos:</strong> el epicentro es el centro y la distancia a la que se siente el temblor es el radio. Con tres estaciones sismográficas se obtienen tres circunferencias que se cortan en el epicentro (triangulación).</li>
<li><strong>Fumigación o riego:</strong> un aspersor o avioneta que rocía en un radio fijo cubre un círculo; la ecuación dice qué puntos del terreno quedan cubiertos.</li>
<li><strong>Cobertura de antenas, alarmas y señales de radio:</strong> el alcance de un celular o una radio local es un círculo.</li>
</ul>
<p>Prueba la calculadora para ver cómo cambian la ecuación ordinaria y la general al mover el centro y el radio.</p>`
      }
    ],
    formulas: [
      { label: 'Ordinaria con centro en el origen', html: '{{x² + y² = r²}}' },
      { label: 'Ordinaria con centro C(h, k)', html: '{{(x − h)² + (y − k)² = r²}}' },
      { label: 'Forma general', html: '{{x² + y² + Dx + Ey + F = 0}}' },
      { label: 'Centro y radio desde la general', html: '{{C(−[[D|2]], −[[E|2]])}},   {{r² = [[D²|4]] + [[E²|4]] − F}}' },
      { label: 'Distancia de un punto a una recta', html: '{{d = [[&#124;Ah + Bk + C&#124;|√(A² + B²)]]}}   (tangente si d = r)' },
      { label: 'Tangente en (x₁, y₁) a x² + y² = r²', html: '{{x₁x + y₁y = r²}}' }
    ],
    ejemplos: [
      {
        titulo: 'Alcance de un sismo (centro en el origen)',
        enunciado: `Un sismo tiene su epicentro en el origen del mapa (coordenadas en km) y se siente hasta 30 km de distancia. Escribe la ecuación del alcance y di si se siente en los puntos {{(18, 24)}} y {{(25, 20)}}.`,
        pasos: [
          `Centro {{(0, 0)}}, radio 30: {{x² + y² = 900}}.`,
          `Punto {{(18, 24)}}: {{18² + 24² = 324 + 576 = 900}}. Es igual a {{r²}}: está justo en el borde (a 30 km).`,
          `Punto {{(25, 20)}}: {{625 + 400 = 1025 > 900}}. Está fuera (a {{√1025 ≈ 32.0}} km).`
        ],
        respuesta: `{{x² + y² = 900}}; en {{(18, 24)}} se siente justo en el límite; en {{(25, 20)}} no se siente.`
      },
      {
        titulo: 'Ecuación a partir de centro y radio',
        enunciado: `Escribe en forma ordinaria y en forma general la circunferencia de centro {{C(−2, 3)}} y radio 4.`,
        pasos: [
          `Ordinaria: {{(x − (−2))² + (y − 3)² = 4²}} → {{(x + 2)² + (y − 3)² = 16}}.`,
          `Desarrolla: {{x² + 4x + 4 + y² − 6y + 9 = 16}}.`,
          `Pasa todo a la izquierda: {{x² + y² + 4x − 6y + 13 − 16 = 0}}.`,
          `Simplifica: {{x² + y² + 4x − 6y − 3 = 0}}.`,
          `Comprobación con la fórmula: {{F = h² + k² − r² = 4 + 9 − 16 = −3}}.`
        ],
        respuesta: `{{(x + 2)² + (y − 3)² = 16}}; general: {{x² + y² + 4x − 6y − 3 = 0}}.`
      },
      {
        titulo: 'De la forma general a centro y radio',
        enunciado: `Halla el centro y el radio de {{x² + y² − 6x + 4y − 12 = 0}}.`,
        pasos: [
          `Agrupa: {{(x² − 6x) + (y² + 4y) = 12}}.`,
          `Completa: suma {{([[−6|2]])² = 9}} y {{([[4|2]])² = 4}} a ambos lados.`,
          `{{(x² − 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4 = 25}}.`,
          `Factoriza: {{(x − 3)² + (y + 2)² = 25}}.`,
          `Centro {{C(3, −2)}}; radio {{r = √25 = 5}}.`
        ],
        respuesta: `{{C(3, −2)}}, {{r = 5}}.`
      },
      {
        titulo: 'Circunferencia dado un diámetro',
        enunciado: `Los extremos de un diámetro son {{A(−1, 2)}} y {{B(5, 6)}}. Halla la ecuación de la circunferencia.`,
        pasos: [
          `Centro = punto medio de {{AB}}: {{C([[−1 + 5|2]], [[2 + 6|2]]) = (2, 4)}}.`,
          `Longitud del diámetro: {{AB = √((5 + 1)² + (6 − 2)²) = √(36 + 16) = √52}}.`,
          `Radio: {{r = [[√52|2]]}}, así que {{r² = [[52|4]] = 13}}.`,
          `Ecuación: {{(x − 2)² + (y − 4)² = 13}}.`,
          `Comprobación con {{A}}: {{(−3)² + (−2)² = 9 + 4 = 13}}.`
        ],
        respuesta: `{{(x − 2)² + (y − 4)² = 13}}`
      },
      {
        titulo: 'Circunferencia por tres puntos',
        enunciado: `Halla la circunferencia que pasa por {{(0, 0)}}, {{(6, 0)}} y {{(0, 8)}}.`,
        pasos: [
          `Forma general: {{x² + y² + Dx + Ey + F = 0}}.`,
          `Con {{(0, 0)}}: {{F = 0}}.`,
          `Con {{(6, 0)}}: {{36 + 6D = 0}} → {{D = −6}}.`,
          `Con {{(0, 8)}}: {{64 + 8E = 0}} → {{E = −8}}.`,
          `Ecuación: {{x² + y² − 6x − 8y = 0}} → {{(x − 3)² + (y − 4)² = 25}}.`,
          `Centro {{(3, 4)}}, radio 5. (Es el punto medio de la hipotenusa del triángulo rectángulo: la hipotenusa {{√(36 + 64) = 10}} es el diámetro.)`
        ],
        respuesta: `{{x² + y² − 6x − 8y = 0}}, centro {{(3, 4)}}, radio 5.`
      },
      {
        titulo: 'Recta secante a una circunferencia',
        enunciado: `Halla los puntos de intersección de {{x² + y² = 20}} con la recta {{y = x + 2}}, y decide cómo es la recta.`,
        pasos: [
          `Sustituye: {{x² + (x + 2)² = 20}} → {{2x² + 4x + 4 = 20}}.`,
          `Simplifica: {{2x² + 4x − 16 = 0}} → {{x² + 2x − 8 = 0}}.`,
          `Factoriza: {{(x + 4)(x − 2) = 0}} → {{x = −4}} o {{x = 2}}.`,
          `Con {{y = x + 2}}: {{(−4, −2)}} y {{(2, 4)}}.`,
          `Comprobación: {{16 + 4 = 20}} y {{4 + 16 = 20}}. Dos puntos: la recta es secante.`,
          `Por distancia: {{d = [[&#124;2&#124;|√2]] = √2 ≈ 1.41 < √20 ≈ 4.47}}, también secante.`
        ],
        respuesta: `{{(−4, −2)}} y {{(2, 4)}}; la recta es secante.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Para {{x² + y² = 49}} indica el centro, el radio y si el punto {{(5, 5)}} está dentro o fuera.`,
        pasos: [`Centro {{(0, 0)}}; {{r² = 49}} → {{r = 7}}.`, `Para {{(5, 5)}}: {{25 + 25 = 50}}.`, `{{50 > 49}}: está fuera de la circunferencia.`],
        respuesta: `{{C(0, 0)}}, {{r = 7}}; el punto {{(5, 5)}} está fuera.`
      },
      {
        nivel: 'facil',
        enunciado: `Escribe la ecuación de la circunferencia con centro {{C(1, −4)}} y radio 3.`,
        pasos: [`{{(x − h)² + (y − k)² = r²}}.`, `{{h = 1}}, {{k = −4}}, {{r² = 9}}.`, `{{(x − 1)² + (y + 4)² = 9}}.`],
        respuesta: `{{(x − 1)² + (y + 4)² = 9}}`
      },
      {
        nivel: 'facil',
        enunciado: `De {{(x − 5)² + (y + 1)² = 36}} halla el centro, el radio y la forma general.`,
        pasos: [`Centro {{(5, −1)}}, {{r = 6}}.`, `Desarrolla: {{x² − 10x + 25 + y² + 2y + 1 = 36}}.`, `{{x² + y² − 10x + 2y + 26 − 36 = 0}}.`, `{{x² + y² − 10x + 2y − 10 = 0}}.`],
        respuesta: `{{C(5, −1)}}, {{r = 6}}; {{x² + y² − 10x + 2y − 10 = 0}}.`
      },
      {
        nivel: 'facil',
        enunciado: `Halla la ecuación de la circunferencia con centro en el origen que pasa por {{(−6, 8)}}.`,
        pasos: [`Radio = distancia del centro al punto: {{r² = (−6)² + 8² = 36 + 64 = 100}}.`, `{{r = 10}}.`, `{{x² + y² = 100}}.`],
        respuesta: `{{x² + y² = 100}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla el centro y el radio de {{x² + y² + 8x − 10y + 5 = 0}}.`,
        pasos: [`Agrupa: {{(x² + 8x) + (y² − 10y) = −5}}.`, `Suma {{16}} y {{25}}: {{(x² + 8x + 16) + (y² − 10y + 25) = −5 + 16 + 25 = 36}}.`, `{{(x + 4)² + (y − 5)² = 36}}.`, `Centro {{(−4, 5)}}, radio 6.`],
        respuesta: `{{C(−4, 5)}}, {{r = 6}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla el centro y el radio de {{2x² + 2y² − 12x + 4y − 6 = 0}}.`,
        pasos: [`Divide entre 2: {{x² + y² − 6x + 2y − 3 = 0}}.`, `Agrupa: {{(x² − 6x) + (y² + 2y) = 3}}.`, `Suma 9 y 1: {{(x − 3)² + (y + 1)² = 3 + 9 + 1 = 13}}.`, `Centro {{(3, −1)}}, radio {{√13 ≈ 3.61}}.`],
        respuesta: `{{C(3, −1)}}, {{r = √13 ≈ 3.61}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla la ecuación de la circunferencia con centro {{(2, −1)}} que es tangente a la recta {{3x − 4y + 5 = 0}}.`,
        pasos: [`El radio es la distancia del centro a la recta.`, `{{d = [[&#124;3(2) − 4(−1) + 5&#124;|√(3² + 4²)]] = [[&#124;6 + 4 + 5&#124;|5]] = [[15|5]] = 3}}.`, `{{r = 3}}, {{r² = 9}}.`, `{{(x − 2)² + (y + 1)² = 9}}.`],
        respuesta: `{{(x − 2)² + (y + 1)² = 9}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `¿Representa una circunferencia real la ecuación {{x² + y² − 2x + 4y + 10 = 0}}? Justifica.`,
        pasos: [`Agrupa: {{(x² − 2x) + (y² + 4y) = −10}}.`, `Completa: {{(x − 1)² + (y + 2)² = −10 + 1 + 4 = −5}}.`, `Una suma de cuadrados no puede valer {{−5}}.`, `Con la fórmula: {{r² = 1 + 4 − 10 = −5 < 0}}.`],
        respuesta: `No: {{r² = −5 < 0}}, no hay ningún punto real que cumpla la ecuación.`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla la ecuación de la circunferencia que pasa por {{(1, 2)}}, {{(5, 2)}} y {{(3, 6)}}, y su centro y radio.`,
        pasos: [`General: {{x² + y² + Dx + Ey + F = 0}}.`, `{{(1, 2)}}: {{1 + 4 + D + 2E + F = 0}} → {{D + 2E + F = −5}}.`, `{{(5, 2)}}: {{25 + 4 + 5D + 2E + F = 0}} → {{5D + 2E + F = −29}}.`, `{{(3, 6)}}: {{9 + 36 + 3D + 6E + F = 0}} → {{3D + 6E + F = −45}}.`, `Resta las dos primeras: {{4D = −24}} → {{D = −6}}. Entonces {{2E + F = 1}} y {{6E + F = −27}} → {{4E = −28}}, {{E = −7}}, {{F = 15}}.`, `Ecuación: {{x² + y² − 6x − 7y + 15 = 0}}. Centro {{(3, 3.5)}}; {{r² = 9 + 12.25 − 15 = 6.25}}, {{r = 2.5}}.`],
        respuesta: `{{x² + y² − 6x − 7y + 15 = 0}}; centro {{(3, 3.5)}}, radio {{2.5}}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla los puntos de intersección de {{x² + y² = 25}} y la recta {{x + y = 7}}.`,
        pasos: [`Despeja {{y = 7 − x}} y sustituye: {{x² + (7 − x)² = 25}}.`, `{{2x² − 14x + 49 = 25}} → {{2x² − 14x + 24 = 0}} → {{x² − 7x + 12 = 0}}.`, `{{(x − 3)(x − 4) = 0}} → {{x = 3}} o {{x = 4}}.`, `Con {{y = 7 − x}}: {{(3, 4)}} y {{(4, 3)}}.`, `Comprobación: {{9 + 16 = 25}} y {{16 + 9 = 25}}.`],
        respuesta: `{{(3, 4)}} y {{(4, 3)}}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla la ecuación de la recta tangente a {{x² + y² = 25}} en el punto {{(3, −4)}}. Verifica que es perpendicular al radio.`,
        pasos: [`Pendiente del radio: {{m<sub>r</sub> = [[−4 − 0|3 − 0]] = −[[4|3]]}}.`, `La tangente es perpendicular: {{m<sub>t</sub> = [[3|4]]}}.`, `Punto-pendiente: {{y + 4 = [[3|4]](x − 3)}} → {{4y + 16 = 3x − 9}}.`, `{{3x − 4y − 25 = 0}}.`, `Con la fórmula {{x₁x + y₁y = 25}}: {{3x − 4y = 25}}. Y {{m<sub>r</sub> · m<sub>t</sub> = −[[4|3]]·[[3|4]] = −1}}.`],
        respuesta: `{{3x − 4y − 25 = 0}}`
      }
    ],
    teoricas: [
      { q: `¿Por qué en {{(x − h)² + (y − k)² = r²}} el lado derecho es {{r²}} y no {{r}}?`, a: `Porque viene de elevar al cuadrado la fórmula de distancia {{√((x − h)² + (y − k)²) = r}}. Para hallar el radio hay que sacar la raíz cuadrada del número del lado derecho.` },
      { q: `¿Cómo reconoces una circunferencia en la ecuación general?`, a: `Los coeficientes de {{x²}} y {{y²}} son iguales (mismo signo y valor) y no hay término {{xy}}. Además, al completar cuadrados el lado derecho debe quedar positivo.` },
      { q: `¿Qué pasa si al completar cuadrados el lado derecho es cero? ¿Y si es negativo?`, a: `Si es cero, la ecuación representa un único punto (el centro). Si es negativo, no hay ningún punto real que la cumpla.` },
      { q: `¿Cuántos puntos determinan una circunferencia? ¿Qué condición deben cumplir?`, a: `Tres puntos que no estén alineados. Si estuvieran en una recta no existiría una circunferencia que pase por ellos.` },
      { q: `Si la distancia del centro a una recta es menor que el radio, ¿cómo es la recta?`, a: `Es secante: corta a la circunferencia en dos puntos. Si {{d = r}} es tangente y si {{d > r}} es exterior.` },
      { q: `¿Qué relación tienen la recta tangente y el radio en el punto de tangencia?`, a: `Son perpendiculares. Por eso la pendiente de la tangente es el opuesto del inverso de la pendiente del radio.` },
      { q: `Si el diámetro de una circunferencia tiene extremos {{A}} y {{B}}, ¿cómo obtienes el centro y el radio?`, a: `El centro es el punto medio de {{AB}} y el radio es la mitad de la distancia {{AB}}.` },
      { q: `¿Por qué un sismo "se siente" dentro de una circunferencia centrada en el epicentro?`, a: `Porque las ondas sísmicas se propagan con aproximadamente la misma rapidez en todas direcciones, así que todos los puntos a una misma distancia del epicentro reciben la misma intensidad; el alcance es el conjunto de puntos a distancia menor o igual que un radio.` }
    ],
    errores: [
      `Tomar el signo del centro tal como aparece: en {{(x + 4)² + (y − 1)² = 25}} el centro es {{(−4, 1)}}, no {{(4, −1)}}. Recuerda que la fórmula es {{x − h}}.`,
      `Confundir {{r²}} con {{r}}: en {{(x − 1)² + (y + 2)² = 36}} el radio es 6, no 36. Y al escribir la ecuación, el lado derecho es {{r²}}.`,
      `Completar cuadrados sin sumar el mismo número en ambos lados, o sumar la mitad sin elevar al cuadrado. El número es {{([[coef|2]])²}} y se suma a los dos miembros.`,
      `Olvidar dividir entre el coeficiente común cuando la ecuación es {{2x² + 2y² + ... = 0}} antes de completar cuadrados, y no comprobar que {{r² > 0}}.`
    ],
    aplicacion: {
      titulo: 'Ubicando el epicentro de un sismo y el área de fumigación',
      html: `<p><strong>Sismo.</strong> Tres estaciones sismológicas (coordenadas en km) registran un temblor: la estación A en {{(0, 0)}} lo ubica a 25 km, la estación B en {{(25, 0)}} a 30 km y la estación C en {{(7, 50)}} a 26 km. ¿Dónde fue el epicentro?</p>
<ol>
<li>El epicentro está en la circunferencia de A: {{x² + y² = 625}} y en la de B: {{(x − 25)² + y² = 900}}.</li>
<li>Resta las dos ecuaciones: {{(x − 25)² − x² = 900 − 625}} → {{−50x + 625 = 275}} → {{x = 7}}.</li>
<li>Sustituye en A: {{49 + y² = 625}} → {{y² = 576}} → {{y = ±24}}. Quedan dos candidatos: {{(7, 24)}} y {{(7, −24)}}.</li>
<li>La estación C ({{(7, 50)}}, 26 km) decide: distancia a {{(7, 24)}} = {{|50 − 24| = 26}}; a {{(7, −24)}} sería 74. </li>
</ol>
<p><strong>Epicentro: {{(7, 24)}}.</strong> Esto es la triangulación: dos circunferencias dejan dos puntos posibles y la tercera elige uno.</p>
<p><strong>Fumigación.</strong> Un aspersor está en {{(10, 5)}} (en metros) y alcanza 12 m. Su zona cubierta es {{(x − 10)² + (y − 5)² = 144}} y su área es {{πr² = π(144) ≈ 452.39 m²}}. Un cultivo en {{(16, 15)}} queda a {{√(36 + 100) = √136 ≈ 11.66}} m: está dentro del alcance.</p>`
    },
    calc: 'circunferencia',
    examen: [
      { tipo: 'num', q: `Halla el radio de la circunferencia {{x² + y² − 4x + 6y − 12 = 0}}.`, r: 5, tol: 0.01, pasos: [`Agrupa: {{(x² − 4x) + (y² + 6y) = 12}}.`, `Suma 4 y 9: {{(x − 2)² + (y + 3)² = 25}}.`, `{{r = √25 = 5}}.`] },
      { tipo: 'par', q: `Halla el centro de {{x² + y² − 10x + 4y + 4 = 0}}. Escribe el punto como (x, y).`, r: [5, -2], tol: 0.01, pasos: [`{{C(−[[D|2]], −[[E|2]])}} con {{D = −10}}, {{E = 4}}.`, `{{h = 5}}, {{k = −2}}.`, `Centro {{(5, −2)}}.`] },
      { tipo: 'num', q: `Los extremos de un diámetro son {{A(1, 2)}} y {{B(13, 7)}}. ¿Cuánto mide el radio?`, r: 6.5, tol: 0.01, pasos: [`{{AB = √((13 − 1)² + (7 − 2)²)}}.`, `{{= √(144 + 25) = √169 = 13}}.`, `{{r = [[13|2]] = 6.5}}.`] },
      { tipo: 'num', q: `Una circunferencia tiene centro {{(1, 2)}} y es tangente a la recta {{5x + 12y − 3 = 0}}. ¿Cuánto mide su radio?`, r: 2, tol: 0.01, pasos: [`{{r = d = [[&#124;5(1) + 12(2) − 3&#124;|√(25 + 144)]]}}.`, `{{= [[&#124;26&#124;|13]]}}.`, `{{r = 2}}.`] },
      { tipo: 'lista', q: `Halla las abscisas de los puntos donde la recta {{y = x + 1}} corta a la circunferencia {{x² + y² = 13}}. Sepáralas con coma.`, r: [2, -3], tol: 0.01, pasos: [`Sustituye: {{x² + (x + 1)² = 13}} → {{2x² + 2x − 12 = 0}}.`, `{{x² + x − 6 = 0}} → {{(x + 3)(x − 2) = 0}}.`, `{{x = 2}} o {{x = −3}}.`] },
      { tipo: 'par', q: `Halla el centro de la circunferencia que pasa por {{(0, 0)}}, {{(8, 0)}} y {{(0, 6)}}. Escribe el punto como (x, y).`, r: [4, 3], tol: 0.01, pasos: [`{{x² + y² + Dx + Ey + F = 0}}; con {{(0, 0)}}: {{F = 0}}.`, `Con {{(8, 0)}}: {{64 + 8D = 0}} → {{D = −8}}. Con {{(0, 6)}}: {{36 + 6E = 0}} → {{E = −6}}.`, `Centro {{(−[[D|2]], −[[E|2]]) = (4, 3)}}.`] },
      { tipo: 'lista', q: `¿Para qué valores de {{k}} la recta {{y = x + k}} es tangente a la circunferencia {{x² + y² = 8}}? Escribe ambos valores separados por coma.`, r: [4, -4], tol: 0.01, pasos: [`Sustituye: {{x² + (x + k)² = 8}} → {{2x² + 2kx + k² − 8 = 0}}.`, `{{Δ = 4k² − 8(k² − 8) = −4k² + 64}}.`, `Tangente: {{Δ = 0}} → {{k² = 16}} → {{k = ±4}}.`] },
      { tipo: 'opt', q: `La ecuación {{x² + y² − 2x + 4y + 6 = 0}} representa:`, opciones: [`Una circunferencia de radio 1`, `Una circunferencia de radio {{√11}}`, `Un solo punto`, `Ningún punto real`], correcta: 3, pasos: [`Completa: {{(x − 1)² + (y + 2)² = −6 + 1 + 4}}.`, `El lado derecho es {{−1}}.`, `Una suma de cuadrados no puede ser negativa: no hay puntos reales.`] },
      { tipo: 'opt', q: `¿Cuál es la ecuación de la circunferencia de centro {{(−3, 2)}} y radio 4?`, opciones: [`{{(x − 3)² + (y + 2)² = 16}}`, `{{(x + 3)² + (y − 2)² = 16}}`, `{{(x + 3)² + (y − 2)² = 4}}`, `{{(x − 3)² + (y + 2)² = 4}}`], correcta: 1, pasos: [`Forma: {{(x − h)² + (y − k)² = r²}}.`, `{{h = −3}} → {{x − (−3) = x + 3}}; {{k = 2}} → {{y − 2}}.`, `{{r² = 16}}.`] },
      { tipo: 'num', q: `El epicentro de un sismo está en {{(0, 0)}} (km). ¿A qué distancia (en km) del epicentro queda el pueblo ubicado en {{(21, 20)}}?`, r: 29, tol: 0.01, pasos: [`Distancia al origen: {{√(21² + 20²)}}.`, `{{= √(441 + 400) = √841}}.`, `{{= 29}} km.`] }
    ]
  };

  /* ===================================================================== */
  T['1.9'] = {
    id: '1.9',
    unidad: 3,
    titulo: 'La elipse',
    resumen: 'Estudia la elipse: focos, ejes, vértices, excentricidad, ecuaciones horizontal y vertical, forma general y la litotricia.',
    objetivos: [
      'Identificar centro, vértices, focos, ejes, lado recto y excentricidad de una elipse a partir de su ecuación.',
      'Escribir la ecuación de una elipse horizontal o vertical a partir de sus elementos usando c² = a² − b².',
      'Convertir la ecuación general de una elipse a la forma ordinaria completando cuadrados.',
      'Resolver problemas de aplicación como túneles semielípticos y litotricia, e identificar una elipse en una ecuación general.'
    ],
    teoria: [
      {
        titulo: 'Qué es una elipse',
        html: `<p>Fija dos puntos {{F₁}} y {{F₂}} (los <strong>focos</strong>). La <strong>elipse</strong> es el conjunto de los puntos {{P}} cuya <strong>suma de distancias a los dos focos es constante</strong>:</p>
<p>{{PF₁ + PF₂ = 2a}}</p>
<p>Puedes dibujarla con un cordel: clava dos chinches en el papel (los focos), ata un cordel largo {{2a}} a ambas, tensa el cordel con un lápiz y gira alrededor. El lápiz traza una elipse. Mientras más separados estén los focos, más "aplastada" queda; si los dos focos coinciden, obtienes una circunferencia.</p>
<p>Para que exista la elipse, {{2a}} debe ser mayor que la distancia entre los focos {{2c}}.</p>`
      },
      {
        titulo: 'Elementos de la elipse y la relación fundamental',
        html: `<ul>
<li><strong>Centro {{C}}:</strong> punto medio entre los focos.</li>
<li><strong>Eje mayor ({{2a}}):</strong> segmento más largo, pasa por los focos; sus extremos son los <strong>vértices</strong>.</li>
<li><strong>Eje menor ({{2b}}):</strong> segmento perpendicular al mayor por el centro; sus extremos son los <strong>covértices</strong>.</li>
<li><strong>Distancia focal ({{2c}}):</strong> separación entre los focos; cada foco dista {{c}} del centro.</li>
<li><strong>Lado recto:</strong> cuerda perpendicular al eje mayor que pasa por un foco: {{LR = [[2b²|a]]}}.</li>
<li><strong>Excentricidad:</strong> {{e = [[c|a]]}}, con {{0 < e < 1}}; mide qué tan aplastada es la elipse (cerca de 0 es casi un círculo; cerca de 1 es muy alargada).</li>
</ul>
<p>Los números {{a}}, {{b}} y {{c}} forman un triángulo rectángulo (de un covértice a un foco hay distancia {{a}}), de donde sale la <strong>relación fundamental</strong>:</p>
<p>{{c² = a² − b²}}   (equivalente a {{a² = b² + c²}})</p>
<p>Siempre {{a}} es el semieje <em>mayor</em>: {{a > b}} y {{a > c}}.</p>`
      },
      {
        titulo: 'Ecuaciones canónicas: centro en el origen',
        html: `<table>
<tr><th>Eje mayor</th><th>Ecuación</th><th>Vértices</th><th>Covértices</th><th>Focos</th></tr>
<tr><td>Horizontal</td><td>{{[[x²|a²]] + [[y²|b²]] = 1}}</td><td>{{(±a, 0)}}</td><td>{{(0, ±b)}}</td><td>{{(±c, 0)}}</td></tr>
<tr><td>Vertical</td><td>{{[[x²|b²]] + [[y²|a²]] = 1}}</td><td>{{(0, ±a)}}</td><td>{{(±b, 0)}}</td><td>{{(0, ±c)}}</td></tr>
</table>
<p><strong>¿Cómo sé si es horizontal o vertical?</strong> Mira cuál denominador es <em>mayor</em>: ese número es {{a²}}. Si el mayor está debajo de {{x²}}, el eje mayor es horizontal; si está debajo de {{y²}}, es vertical. Los focos siempre están sobre el eje mayor.</p>
<p>Ejemplo rápido: en {{[[x²|9]] + [[y²|25]] = 1}} el 25 está bajo la {{y}}, así que {{a² = 25}}, {{b² = 9}} y el eje mayor es vertical.</p>`
      },
      {
        titulo: 'Elipse con centro en C(h, k)',
        html: `<p>Al trasladar el centro a {{(h, k)}} reemplazamos {{x}} por {{x − h}} y {{y}} por {{y − k}}:</p>
<table>
<tr><th>Eje mayor</th><th>Ecuación ordinaria</th><th>Vértices</th><th>Focos</th></tr>
<tr><td>Horizontal</td><td>{{[[(x − h)²|a²]] + [[(y − k)²|b²]] = 1}}</td><td>{{(h ± a, k)}}</td><td>{{(h ± c, k)}}</td></tr>
<tr><td>Vertical</td><td>{{[[(x − h)²|b²]] + [[(y − k)²|a²]] = 1}}</td><td>{{(h, k ± a)}}</td><td>{{(h, k ± c)}}</td></tr>
</table>
<p>Los covértices son {{(h, k ± b)}} en la horizontal y {{(h ± b, k)}} en la vertical. El procedimiento es siempre:</p>
<ol>
<li>Lee {{h}} y {{k}} (cambia el signo de lo que ves).</li>
<li>Identifica {{a²}} (el mayor denominador) y {{b²}}.</li>
<li>Calcula {{c = √(a² − b²)}}.</li>
<li>Ubica vértices, covértices y focos sumando y restando desde el centro, en la dirección del eje mayor.</li>
</ol>`
      },
      {
        titulo: 'Lado recto y excentricidad',
        html: `<p><strong>Lado recto.</strong> Es la cuerda que pasa por un foco, perpendicular al eje mayor. Su longitud es {{LR = [[2b²|a]]}}. Al trazarlo en cada foco, ayuda a dibujar la curva con más precisión cerca de los vértices.</p>
<p><strong>Excentricidad.</strong> {{e = [[c|a]]}}. Como {{c < a}}, siempre {{0 < e < 1}}.</p>
<table>
<tr><th>Excentricidad</th><th>Forma</th></tr>
<tr><td>{{e ≈ 0}}</td><td>Casi circular (focos muy juntos). Las órbitas de los planetas son así; la Tierra tiene {{e ≈ 0.017}}.</td></tr>
<tr><td>{{e ≈ 1}}</td><td>Muy alargada y aplastada (focos casi en los vértices).</td></tr>
</table>
<p>Si {{e = 0}}, entonces {{c = 0}}, {{a = b}} y la elipse es una circunferencia. Puedes usar {{e}} como dato: si te dan {{e}} y {{a}}, obtienes {{c = ea}} y luego {{b² = a² − c²}}.</p>`
      },
      {
        titulo: 'Forma general y completar cuadrados',
        html: `<p>Al desarrollar la ecuación ordinaria queda la <strong>forma general</strong>:</p>
<p>{{Ax² + Cy² + Dx + Ey + F = 0}},  con {{A}} y {{C}} del mismo signo y {{A ≠ C}}.</p>
<p>Para pasar a la ordinaria:</p>
<ol>
<li>Agrupa los términos en {{x}}, los términos en {{y}} y pasa la constante a la derecha.</li>
<li>Saca factor común {{A}} y {{C}}: {{A(x² + ...) + C(y² + ...)}}.</li>
<li>Completa cuadrados dentro de cada paréntesis. <strong>Cuidado:</strong> lo que sumas dentro del paréntesis queda multiplicado por {{A}} o {{C}}; súmalo multiplicado al lado derecho.</li>
<li>Divide todo entre el número de la derecha para que quede {{= 1}}.</li>
</ol>
<p>Si el número de la derecha resulta cero o negativo, no hay elipse real (un punto o ningún punto).</p>`
      },
      {
        titulo: 'Identificar la cónica desde la ecuación general',
        html: `<p>Para una ecuación {{Ax² + Cy² + Dx + Ey + F = 0}} (sin término {{xy}}), compara los coeficientes {{A}} y {{C}} de {{x²}} y {{y²}}:</p>
<table>
<tr><th>Condición</th><th>Cónica</th></tr>
<tr><td>{{A = 0}} o {{C = 0}} (pero no ambos)</td><td>Parábola</td></tr>
<tr><td>{{A = C}}</td><td>Circunferencia</td></tr>
<tr><td>{{A}} y {{C}} del mismo signo, {{A ≠ C}}</td><td>Elipse</td></tr>
<tr><td>{{A}} y {{C}} de signo contrario</td><td>Hipérbola</td></tr>
</table>
<p>Es un atajo rápido: por ejemplo, {{4x² + 9y² − 16x + 54y + 61 = 0}} tiene {{A = 4}}, {{C = 9}}, mismo signo y distintos: elipse. (Hay casos degenerados —un punto o ninguna curva— que solo se descubren al completar cuadrados.)</p>`
      },
      {
        titulo: 'Propiedad reflectora y litotricia',
        html: `<p>La elipse tiene una propiedad parecida a la de la parábola: <strong>todo rayo (u onda) que sale de un foco se refleja en la elipse y pasa por el otro foco</strong>. Además, todos esos caminos miden lo mismo: {{PF₁ + PF₂ = 2a}}, así que las ondas llegan al mismo tiempo.</p>
<p>Esta propiedad se usa en la <strong>litotricia</strong>, un tratamiento médico para romper cálculos renales (piedras en los riñones) sin cirugía: un generador de ondas de choque se coloca en un foco de un reflector elíptico y el paciente se ubica de modo que el cálculo quede en el otro foco; toda la energía se concentra en la piedra y la fragmenta.</p>
<p>También se aprovecha en las "galerías de los susurros": quien habla en un foco es escuchado claramente en el otro, aunque estén lejos. Y en la astronomía, los planetas giran en órbitas elípticas con el Sol en un foco.</p>`
      }
    ],
    formulas: [
      { label: 'Definición', html: '{{PF₁ + PF₂ = 2a}}' },
      { label: 'Relación fundamental', html: '{{c² = a² − b²}}   (a > b)' },
      { label: 'Elipse horizontal', html: '{{[[(x − h)²|a²]] + [[(y − k)²|b²]] = 1}}   vértices (h ± a, k),  focos (h ± c, k)' },
      { label: 'Elipse vertical', html: '{{[[(x − h)²|b²]] + [[(y − k)²|a²]] = 1}}   vértices (h, k ± a),  focos (h, k ± c)' },
      { label: 'Lado recto', html: '{{LR = [[2b²|a]]}}' },
      { label: 'Excentricidad', html: '{{e = [[c|a]]}},   0 < e < 1' },
      { label: 'Forma general', html: '{{Ax² + Cy² + Dx + Ey + F = 0}},  A y C del mismo signo y A ≠ C' }
    ],
    ejemplos: [
      {
        titulo: 'Elementos de una elipse horizontal',
        enunciado: `Para {{[[x²|25]] + [[y²|9]] = 1}} halla vértices, covértices, focos, excentricidad y lado recto.`,
        pasos: [
          `El mayor denominador (25) está bajo {{x²}}: eje mayor horizontal. {{a² = 25}} → {{a = 5}}; {{b² = 9}} → {{b = 3}}.`,
          `{{c² = a² − b² = 25 − 9 = 16}} → {{c = 4}}.`,
          `Vértices {{(±5, 0)}}; covértices {{(0, ±3)}}; focos {{(±4, 0)}}.`,
          `Excentricidad {{e = [[c|a]] = [[4|5]] = 0.8}}.`,
          `Lado recto {{LR = [[2b²|a]] = [[2·9|5]] = [[18|5]] = 3.6}}.`
        ],
        respuesta: `Vértices {{(±5, 0)}}, covértices {{(0, ±3)}}, focos {{(±4, 0)}}, {{e = 0.8}}, {{LR = 3.6}}.`
      },
      {
        titulo: 'Elipse vertical',
        enunciado: `Para {{[[x²|16]] + [[y²|25]] = 1}} halla los elementos y las longitudes de los ejes.`,
        pasos: [
          `El mayor denominador (25) está bajo {{y²}}: eje mayor vertical. {{a = 5}}, {{b = 4}}.`,
          `{{c² = 25 − 16 = 9}} → {{c = 3}}.`,
          `Vértices {{(0, ±5)}}; covértices {{(±4, 0)}}; focos {{(0, ±3)}}.`,
          `Eje mayor {{2a = 10}}; eje menor {{2b = 8}}; distancia focal {{2c = 6}}.`,
          `{{e = [[3|5]] = 0.6}}; {{LR = [[2·16|5]] = [[32|5]] = 6.4}}.`
        ],
        respuesta: `Vértices {{(0, ±5)}}, focos {{(0, ±3)}}, covértices {{(±4, 0)}}; ejes 10 y 8; {{e = 0.6}}.`
      },
      {
        titulo: 'Ecuación a partir de focos y vértices',
        enunciado: `Una elipse tiene vértices {{(−3, 2)}} y {{(7, 2)}} y uno de sus focos es {{(6, 2)}}. Halla su ecuación.`,
        pasos: [
          `Centro = punto medio de los vértices: {{C(2, 2)}}.`,
          `Los vértices tienen la misma ordenada: eje mayor horizontal. {{a}} = distancia centro-vértice = {{7 − 2 = 5}}.`,
          `{{c}} = distancia centro-foco = {{6 − 2 = 4}}.`,
          `{{b² = a² − c² = 25 − 16 = 9}}.`,
          `Ecuación: {{[[(x − 2)²|25]] + [[(y − 2)²|9]] = 1}}.`
        ],
        respuesta: `{{[[(x − 2)²|25]] + [[(y − 2)²|9]] = 1}}`
      },
      {
        titulo: 'De la forma general a la ordinaria',
        enunciado: `Convierte {{9x² + 16y² − 36x + 96y + 36 = 0}} a la forma ordinaria y halla centro, vértices, focos y excentricidad.`,
        pasos: [
          `Agrupa: {{9(x² − 4x) + 16(y² + 6y) = −36}}.`,
          `Completa: dentro de cada paréntesis suma 4 y 9. Al lado derecho suma {{9·4 = 36}} y {{16·9 = 144}}.`,
          `{{9(x − 2)² + 16(y + 3)² = −36 + 36 + 144 = 144}}.`,
          `Divide entre 144: {{[[(x − 2)²|16]] + [[(y + 3)²|9]] = 1}}.`,
          `Centro {{(2, −3)}}; {{a = 4}} (horizontal), {{b = 3}}; {{c = √(16 − 9) = √7 ≈ 2.65}}.`,
          `Vértices {{(−2, −3)}} y {{(6, −3)}}; focos {{(2 ± √7, −3)}}; {{e = [[√7|4]] ≈ 0.66}}.`
        ],
        respuesta: `{{[[(x − 2)²|16]] + [[(y + 3)²|9]] = 1}}; centro {{(2, −3)}}, vértices {{(−2, −3)}} y {{(6, −3)}}, focos {{(2 ± √7, −3)}}, {{e ≈ 0.66}}.`
      },
      {
        titulo: 'Ecuación a partir de la excentricidad',
        enunciado: `Una elipse con centro en el origen y eje mayor horizontal de longitud 20 tiene excentricidad {{e = [[3|5]]}}. Halla su ecuación y sus focos.`,
        pasos: [
          `Eje mayor {{2a = 20}} → {{a = 10}}.`,
          `{{e = [[c|a]]}} → {{c = ea = [[3|5]]·10 = 6}}.`,
          `{{b² = a² − c² = 100 − 36 = 64}} → {{b = 8}}.`,
          `Ecuación: {{[[x²|100]] + [[y²|64]] = 1}}.`,
          `Focos: {{(±6, 0)}}.`
        ],
        respuesta: `{{[[x²|100]] + [[y²|64]] = 1}}, focos {{(±6, 0)}}.`
      },
      {
        titulo: 'Un túnel semielíptico',
        enunciado: `La entrada de un túnel tiene forma de semielipse de 10 m de ancho en la base y 4 m de altura en el centro. ¿Qué altura tiene el túnel a 3 m del centro? ¿Cabe un camión de 6 m de ancho y 3.3 m de alto?`,
        pasos: [
          `Pon el centro en el origen: semieje horizontal {{a = 5}}, semieje vertical (altura) {{b = 4}}. Ecuación: {{[[x²|25]] + [[y²|16]] = 1}}, con {{y ≥ 0}}.`,
          `A {{x = 3}} m del centro: {{[[9|25]] + [[y²|16]] = 1}} → {{[[y²|16]] = [[16|25]]}} → {{y² = [[256|25]]}}.`,
          `{{y = [[16|5]] = 3.2}} m.`,
          `Un camión de 6 m de ancho ocupa {{x}} de {{−3}} a {{3}}; la parte más baja del túnel que debe pasar es en {{x = ±3}}, donde la altura es 3.2 m.`,
          `Como {{3.2 < 3.3}}, el camión no cabe.`
        ],
        respuesta: `A 3 m del centro la altura es {{3.2 m}}; el camión de 3.3 m de alto no cabe.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Para {{[[x²|100]] + [[y²|36]] = 1}} halla {{a}}, {{b}}, {{c}}, los vértices y los focos.`,
        pasos: [`Mayor denominador 100 bajo {{x²}}: eje horizontal; {{a = 10}}, {{b = 6}}.`, `{{c² = 100 − 36 = 64}} → {{c = 8}}.`, `Vértices {{(±10, 0)}}.`, `Focos {{(±8, 0)}}.`],
        respuesta: `{{a = 10}}, {{b = 6}}, {{c = 8}}; vértices {{(±10, 0)}}, focos {{(±8, 0)}}.`
      },
      {
        nivel: 'facil',
        enunciado: `Para {{[[x²|9]] + [[y²|25]] = 1}} halla los vértices, los focos y las longitudes del eje mayor y del eje menor.`,
        pasos: [`El 25 está bajo {{y²}}: eje vertical; {{a = 5}}, {{b = 3}}.`, `{{c² = 25 − 9 = 16}} → {{c = 4}}.`, `Vértices {{(0, ±5)}}; focos {{(0, ±4)}}.`, `Eje mayor {{2a = 10}}; eje menor {{2b = 6}}.`],
        respuesta: `Vértices {{(0, ±5)}}, focos {{(0, ±4)}}, eje mayor 10, eje menor 6.`
      },
      {
        nivel: 'facil',
        enunciado: `Escribe la ecuación de la elipse con centro en el origen, focos {{(±12, 0)}} y semieje mayor 13.`,
        pasos: [`Focos sobre el eje x: horizontal. {{c = 12}}, {{a = 13}}.`, `{{b² = a² − c² = 169 − 144 = 25}}.`, `{{[[x²|169]] + [[y²|25]] = 1}}.`],
        respuesta: `{{[[x²|169]] + [[y²|25]] = 1}}`
      },
      {
        nivel: 'facil',
        enunciado: `Halla la excentricidad y el lado recto de {{[[x²|25]] + [[y²|16]] = 1}}.`,
        pasos: [`{{a = 5}}, {{b = 4}}.`, `{{c = √(25 − 16) = 3}}.`, `{{e = [[3|5]] = 0.6}}.`, `{{LR = [[2·16|5]] = 6.4}}.`],
        respuesta: `{{e = 0.6}}, {{LR = 6.4}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Para {{[[(x − 3)²|16]] + [[(y + 1)²|7]] = 1}} halla el centro, vértices, focos y excentricidad.`,
        pasos: [`Centro {{(3, −1)}}. El mayor (16) bajo {{x}}: horizontal; {{a = 4}}, {{b = √7}}.`, `{{c² = 16 − 7 = 9}} → {{c = 3}}.`, `Vértices {{(3 ± 4, −1)}} = {{(−1, −1)}} y {{(7, −1)}}.`, `Focos {{(3 ± 3, −1)}} = {{(0, −1)}} y {{(6, −1)}}.`, `{{e = [[3|4]] = 0.75}}.`],
        respuesta: `Centro {{(3, −1)}}; vértices {{(−1, −1)}}, {{(7, −1)}}; focos {{(0, −1)}}, {{(6, −1)}}; {{e = 0.75}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Para {{[[(x + 2)²|9]] + [[(y − 1)²|25]] = 1}} halla centro, vértices, covértices y focos.`,
        pasos: [`Centro {{(−2, 1)}}. El 25 bajo {{y}}: vertical; {{a = 5}}, {{b = 3}}.`, `{{c = √(25 − 9) = 4}}.`, `Vértices {{(−2, 1 ± 5)}} = {{(−2, 6)}} y {{(−2, −4)}}.`, `Covértices {{(−2 ± 3, 1)}} = {{(1, 1)}} y {{(−5, 1)}}.`, `Focos {{(−2, 1 ± 4)}} = {{(−2, 5)}} y {{(−2, −3)}}.`],
        respuesta: `Centro {{(−2, 1)}}; vértices {{(−2, 6)}}, {{(−2, −4)}}; covértices {{(1, 1)}}, {{(−5, 1)}}; focos {{(−2, 5)}}, {{(−2, −3)}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Escribe la ecuación de la elipse con centro en el origen, focos {{(0, ±5)}} y eje menor de longitud 24.`,
        pasos: [`Focos en el eje y: vertical. {{c = 5}}.`, `Eje menor {{2b = 24}} → {{b = 12}}.`, `{{a² = b² + c² = 144 + 25 = 169}}.`, `{{[[x²|144]] + [[y²|169]] = 1}}.`],
        respuesta: `{{[[x²|144]] + [[y²|169]] = 1}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Pasa {{4x² + y² − 16x + 6y + 9 = 0}} a la forma ordinaria y halla centro, vértices y focos.`,
        pasos: [`Agrupa: {{4(x² − 4x) + (y² + 6y) = −9}}.`, `Completa: suma {{4·4 = 16}} y {{9}} al lado derecho: {{4(x − 2)² + (y + 3)² = −9 + 16 + 9 = 16}}.`, `Divide entre 16: {{[[(x − 2)²|4]] + [[(y + 3)²|16]] = 1}}.`, `Mayor (16) bajo {{y}}: vertical; {{a = 4}}, {{b = 2}}, {{c = √12 = 2√3 ≈ 3.46}}.`, `Centro {{(2, −3)}}; vértices {{(2, 1)}} y {{(2, −7)}}; focos {{(2, −3 ± 2√3)}}.`],
        respuesta: `{{[[(x − 2)²|4]] + [[(y + 3)²|16]] = 1}}; centro {{(2, −3)}}, vértices {{(2, 1)}}, {{(2, −7)}}, focos {{(2, −3 ± 2√3)}}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Una elipse tiene un vértice en {{(1, 8)}} y focos en {{(1, 5)}} y {{(1, −1)}}. Halla su ecuación.`,
        pasos: [`Los focos tienen la misma abscisa: eje mayor vertical. Centro = punto medio de los focos: {{(1, 2)}}.`, `{{c}} = distancia centro-foco = {{5 − 2 = 3}}.`, `{{a}} = distancia centro-vértice = {{8 − 2 = 6}}.`, `{{b² = a² − c² = 36 − 9 = 27}}.`, `Ecuación: {{[[(x − 1)²|27]] + [[(y − 2)²|36]] = 1}}.`],
        respuesta: `{{[[(x − 1)²|27]] + [[(y − 2)²|36]] = 1}}`
      },
      {
        nivel: 'dificil',
        enunciado: `Una elipse con centro en el origen, eje mayor horizontal y vértice {{(5, 0)}} pasa por el punto {{(3, [[12|5]])}}. Halla su ecuación y sus focos.`,
        pasos: [`Vértice {{(5, 0)}}: {{a = 5}}. Forma: {{[[x²|25]] + [[y²|b²]] = 1}}.`, `Sustituye el punto: {{[[9|25]] + [[(12/5)²|b²]] = 1}} → {{[[144/25|b²]] = 1 − [[9|25]] = [[16|25]]}}.`, `{{b² = [[144|25]]·[[25|16]] = 9}} → {{b = 3}}.`, `{{c = √(25 − 9) = 4}}.`, `Ecuación {{[[x²|25]] + [[y²|9]] = 1}}; focos {{(±4, 0)}}.`],
        respuesta: `{{[[x²|25]] + [[y²|9]] = 1}}, focos {{(±4, 0)}}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla los puntos donde la recta {{3x + 5y = 15}} corta a la elipse {{[[x²|25]] + [[y²|9]] = 1}}. ¿Qué elementos de la elipse son esos puntos?`,
        pasos: [`Multiplica la elipse por 225: {{9x² + 25y² = 225}}.`, `Despeja de la recta: {{5y = 15 − 3x}} → {{25y² = (15 − 3x)² = 225 − 90x + 9x²}}.`, `Sustituye: {{9x² + 225 − 90x + 9x² = 225}} → {{18x² − 90x = 0}}.`, `{{18x(x − 5) = 0}} → {{x = 0}} o {{x = 5}}.`, `Con la recta: {{x = 0}} → {{y = 3}}; {{x = 5}} → {{y = 0}}. Puntos {{(0, 3)}} y {{(5, 0)}}: un covértice y un vértice.`],
        respuesta: `{{(0, 3)}} y {{(5, 0)}}: son un covértice y un vértice.`
      }
    ],
    teoricas: [
      { q: `¿Por qué en la elipse se cumple {{a > b}} y {{a > c}}?`, a: `Porque {{a}} es el semieje mayor, el más largo. De {{c² = a² − b²}} se ve que {{c² < a²}}, así que {{c < a}}; y como {{b² = a² − c²}}, también {{b < a}}.` },
      { q: `¿Cómo decides si una elipse es horizontal o vertical mirando su ecuación?`, a: `Se mira cuál denominador es mayor. Si el mayor está bajo {{x²}} (o {{(x − h)²}}), el eje mayor es horizontal; si está bajo {{y²}}, es vertical.` },
      { q: `¿Qué ocurre con la elipse cuando la excentricidad tiende a 0? ¿Y cuando tiende a 1?`, a: `Cuando {{e → 0}}, los focos se acercan al centro y la elipse se parece a una circunferencia. Cuando {{e → 1}}, los focos se acercan a los vértices y la elipse se aplasta y alarga.` },
      { q: `¿Una circunferencia es una elipse? Explica.`, a: `Sí, es el caso particular con {{a = b}}: entonces {{c = 0}}, los dos focos coinciden en el centro y {{e = 0}}.` },
      { q: `¿Por qué la excentricidad de una elipse es siempre menor que 1?`, a: `Porque {{e = [[c|a]]}} y {{c < a}} (la distancia focal {{2c}} debe ser menor que la suma constante {{2a}} para que la curva exista).` },
      { q: `Si en una ecuación general {{Ax² + Cy² + ... = 0}} los coeficientes {{A}} y {{C}} tienen el mismo signo y son distintos, ¿qué cónica es? ¿Qué debes verificar al terminar?`, a: `Es una elipse. Debes verificar que, al completar cuadrados, el lado derecho sea positivo; si es cero se obtiene un punto y si es negativo no hay curva real.` },
      { q: `¿Qué propiedad de la elipse aprovecha la litotricia?`, a: `Que las ondas emitidas desde un foco se reflejan en la pared elíptica y convergen en el otro foco, de modo que toda la energía llega al cálculo renal ubicado allí.` },
      { q: `¿Qué es el lado recto y para qué sirve?`, a: `Es la cuerda que pasa por un foco, perpendicular al eje mayor, de longitud {{[[2b²|a]]}}. Sirve para graficar con más precisión la curva cerca de los vértices.` }
    ],
    errores: [
      `Llamar {{a²}} al primer denominador sin comparar: {{a²}} es siempre el <strong>mayor</strong>. En {{[[x²|9]] + [[y²|25]] = 1}} se tiene {{a² = 25}}, y el eje mayor es vertical.`,
      `Usar la relación de la hipérbola: en la elipse es {{c² = a² − b²}} (resta), no {{a² + b²}}. Recuerda: en la elipse {{c < a}}.`,
      `Al completar cuadrados con coeficientes ({{9x² + 16y² ...}}) sumar solo {{4}} o {{9}} al lado derecho. Hay que sumar {{9·4}} y {{16·9}}, porque los factores comunes multiplican lo que agregaste dentro del paréntesis.`,
      `Confundir {{a}} con {{a²}} al ubicar vértices: los vértices están a {{a}} del centro (no {{a²}}). En {{[[x²|25]] + [[y²|9]] = 1}} los vértices son {{(±5, 0)}}, no {{(±25, 0)}}.`
    ],
    aplicacion: {
      titulo: 'Litotricia: romper una piedra del riñón con una elipse',
      html: `<p>Un reflector de litotricia tiene forma de semielipse. Mide 25 cm desde el centro hasta el vértice (semieje mayor) y 7 cm de semieje menor. El generador de ondas de choque se coloca en un foco y el cálculo renal debe quedar en el otro. ¿A qué distancia deben estar el generador y el cálculo? ¿Cuál es la ecuación del reflector?</p>
<ol>
<li><strong>Datos:</strong> {{a = 25}} cm, {{b = 7}} cm.</li>
<li><strong>Distancia al centro:</strong> {{c² = a² − b² = 625 − 49 = 576}} → {{c = 24}} cm.</li>
<li><strong>Distancia entre focos:</strong> {{2c = 48}} cm. Es la distancia entre el generador y el cálculo.</li>
<li><strong>Ecuación</strong> (centro en el origen): {{[[x²|625]] + [[y²|49]] = 1}}.</li>
<li><strong>Excentricidad:</strong> {{e = [[24|25]] = 0.96}}: es una elipse muy alargada.</li>
<li><strong>Recorrido de la onda:</strong> sea cual sea el punto de rebote, la onda recorre {{2a = 50}} cm del generador al cálculo; todas las ondas llegan al mismo tiempo y se refuerzan.</li>
</ol>
<p><strong>Respuesta:</strong> generador y cálculo a {{48 cm}} de distancia, ecuación {{[[x²|625]] + [[y²|49]] = 1}}.</p>`
    },
    calc: 'elipse',
    examen: [
      { tipo: 'num', q: `En la elipse {{[[x²|169]] + [[y²|25]] = 1}}, ¿cuánto vale {{c}} (distancia del centro a cada foco)?`, r: 12, tol: 0.01, pasos: [`{{a² = 169}}, {{b² = 25}}.`, `{{c² = a² − b² = 169 − 25 = 144}}.`, `{{c = 12}}.`] },
      { tipo: 'par', q: `Halla el foco derecho de la elipse {{[[(x − 1)²|25]] + [[(y + 2)²|9]] = 1}}. Escribe el punto como (x, y).`, r: [5, -2], tol: 0.01, pasos: [`Centro {{(1, −2)}}; {{a = 5}}, {{b = 3}}: eje horizontal.`, `{{c = √(25 − 9) = 4}}.`, `Foco derecho {{(h + c, k) = (1 + 4, −2)}}.`, `{{(5, −2)}}.`] },
      { tipo: 'num', q: `Calcula el lado recto de la elipse {{[[x²|64]] + [[y²|16]] = 1}}.`, r: 4, tol: 0.01, pasos: [`{{a = 8}}, {{b² = 16}}.`, `{{LR = [[2b²|a]] = [[2·16|8]]}}.`, `{{LR = 4}}.`] },
      { tipo: 'num', q: `Halla la excentricidad de {{[[x²|169]] + [[y²|144]] = 1}}. Redondea a 2 decimales.`, r: 0.38, tol: 0.01, pasos: [`{{a = 13}}, {{b = 12}}.`, `{{c = √(169 − 144) = 5}}.`, `{{e = [[5|13]] ≈ 0.38}}.`] },
      { tipo: 'par', q: `Halla el centro de la elipse {{4x² + 9y² − 16x + 18y − 11 = 0}}. Escribe el punto como (x, y).`, r: [2, -1], tol: 0.01, pasos: [`Agrupa: {{4(x² − 4x) + 9(y² + 2y) = 11}}.`, `Completa: {{4(x − 2)² + 9(y + 1)² = 11 + 16 + 9 = 36}}.`, `{{[[(x − 2)²|9]] + [[(y + 1)²|4]] = 1}}.`, `Centro {{(2, −1)}}.`] },
      { tipo: 'lista', q: `Halla las abscisas de los puntos donde la recta {{y = x + 1}} corta a la elipse {{[[x²|4]] + y² = 1}}. Sepáralas con coma (redondea a 2 decimales).`, r: [0, -1.6], tol: 0.01, pasos: [`Multiplica por 4: {{x² + 4y² = 4}}.`, `Sustituye: {{x² + 4(x + 1)² = 4}} → {{5x² + 8x + 4 = 4}} → {{5x² + 8x = 0}}.`, `{{x(5x + 8) = 0}} → {{x = 0}} o {{x = −[[8|5]] = −1.6}}.`] },
      { tipo: 'num', q: `Para los puntos de la elipse {{[[x²|81]] + [[y²|45]] = 1}}, ¿cuánto vale la suma de las distancias a los dos focos?`, r: 18, tol: 0.01, pasos: [`La suma constante es {{2a}}.`, `{{a² = 81}} → {{a = 9}}.`, `{{2a = 18}}.`] },
      { tipo: 'num', q: `Una elipse tiene focos {{(±3, 0)}} y vértices {{(±5, 0)}}. ¿Cuánto mide su eje menor?`, r: 8, tol: 0.01, pasos: [`{{c = 3}}, {{a = 5}}.`, `{{b² = a² − c² = 25 − 9 = 16}} → {{b = 4}}.`, `Eje menor {{2b = 8}}.`] },
      { tipo: 'opt', q: `¿Cuál es la ecuación de la elipse con focos {{(0, ±3)}} y eje mayor de longitud 10?`, opciones: [`{{[[x²|25]] + [[y²|16]] = 1}}`, `{{[[x²|16]] + [[y²|25]] = 1}}`, `{{[[x²|9]] + [[y²|25]] = 1}}`, `{{[[x²|25]] + [[y²|9]] = 1}}`], correcta: 1, pasos: [`Focos en el eje y: eje mayor vertical.`, `{{2a = 10}} → {{a = 5}}; {{c = 3}}.`, `{{b² = 25 − 9 = 16}}. La ecuación es {{[[x²|16]] + [[y²|25]] = 1}}.`] },
      { tipo: 'opt', q: `¿Qué valores puede tomar la excentricidad de una elipse?`, opciones: [`{{0 < e < 1}}`, `{{e = 1}}`, `{{e > 1}}`, `{{e < 0}}`], correcta: 0, pasos: [`{{e = [[c|a]]}} y {{0 < c < a}}.`, `Por tanto {{0 < e < 1}}.`, `({{e = 0}} es la circunferencia; {{e = 1}} es la parábola; {{e > 1}} es la hipérbola.)`] }
    ]
  };

  /* ===================================================================== */
  T['1.10'] = {
    id: '1.10',
    unidad: 3,
    titulo: 'La hipérbola',
    resumen: 'Aprende la hipérbola: vértices, focos, asíntotas, ejes, excentricidad, ecuaciones horizontal y vertical y forma general.',
    objetivos: [
      'Identificar centro, vértices, focos, ejes transverso y conjugado y asíntotas de una hipérbola a partir de su ecuación.',
      'Escribir la ecuación de una hipérbola horizontal o vertical usando c² = a² + b².',
      'Convertir la forma general a la forma ordinaria completando cuadrados y calcular la excentricidad.',
      'Identificar si una ecuación general corresponde a parábola, circunferencia, elipse o hipérbola, y resolver aplicaciones.'
    ],
    teoria: [
      {
        titulo: 'Qué es una hipérbola',
        html: `<p>Fija dos puntos {{F₁}} y {{F₂}} (los <strong>focos</strong>). La <strong>hipérbola</strong> es el conjunto de puntos {{P}} cuya <strong>diferencia de distancias</strong> a los focos, en valor absoluto, es constante:</p>
<p>{{|PF₁ − PF₂| = 2a}}</p>
<p>Compara con la elipse: allí la <em>suma</em> es constante; aquí la <em>diferencia</em>. El resultado es una curva de <strong>dos ramas</strong> abiertas, cada una "abrazando" a un foco, que se alejan del centro acercándose cada vez más a dos rectas llamadas <strong>asíntotas</strong>.</p>
<p>Para que exista, {{2a}} debe ser menor que la distancia entre los focos {{2c}}.</p>`
      },
      {
        titulo: 'Elementos y relación fundamental',
        html: `<ul>
<li><strong>Centro {{C}}:</strong> punto medio de los focos.</li>
<li><strong>Vértices:</strong> puntos donde cada rama corta al eje que une los focos; distan {{a}} del centro.</li>
<li><strong>Eje transverso ({{2a}}):</strong> segmento entre los dos vértices (está sobre la recta de los focos).</li>
<li><strong>Eje conjugado ({{2b}}):</strong> segmento perpendicular al transverso, por el centro, de longitud {{2b}}.</li>
<li><strong>Focos:</strong> a distancia {{c}} del centro, sobre el eje transverso.</li>
<li><strong>Lado recto:</strong> {{LR = [[2b²|a]]}}.</li>
<li><strong>Excentricidad:</strong> {{e = [[c|a]]}}, con {{e > 1}}.</li>
</ul>
<p>Relación fundamental (¡cambia respecto a la elipse!):</p>
<p>{{c² = a² + b²}}</p>
<p>Aquí {{c}} es el mayor de los tres: {{c > a}} y {{c > b}}. Además, {{a}} <strong>no</strong> tiene que ser mayor que {{b}}; puede ser menor, igual o mayor.</p>`
      },
      {
        titulo: 'Ecuaciones canónicas (centro en el origen)',
        html: `<table>
<tr><th>Eje transverso</th><th>Ecuación</th><th>Vértices</th><th>Focos</th><th>Asíntotas</th></tr>
<tr><td>Horizontal</td><td>{{[[x²|a²]] − [[y²|b²]] = 1}}</td><td>{{(±a, 0)}}</td><td>{{(±c, 0)}}</td><td>{{y = ±[[b|a]]x}}</td></tr>
<tr><td>Vertical</td><td>{{[[y²|a²]] − [[x²|b²]] = 1}}</td><td>{{(0, ±a)}}</td><td>{{(0, ±c)}}</td><td>{{y = ±[[a|b]]x}}</td></tr>
</table>
<p><strong>¿Cómo sé la orientación?</strong> A diferencia de la elipse, aquí no importa cuál denominador es mayor: importa <strong>cuál término es positivo</strong>. Si {{x²}} es el positivo, las ramas se abren a izquierda y derecha (horizontal). Si {{y²}} es el positivo, se abren hacia arriba y abajo (vertical). El denominador del término positivo es siempre {{a²}}.</p>`
      },
      {
        titulo: 'Hipérbola con centro en C(h, k) y asíntotas',
        html: `<table>
<tr><th>Orientación</th><th>Ecuación ordinaria</th><th>Vértices</th><th>Focos</th><th>Asíntotas</th></tr>
<tr><td>Horizontal</td><td>{{[[(x − h)²|a²]] − [[(y − k)²|b²]] = 1}}</td><td>{{(h ± a, k)}}</td><td>{{(h ± c, k)}}</td><td>{{y − k = ±[[b|a]](x − h)}}</td></tr>
<tr><td>Vertical</td><td>{{[[(y − k)²|a²]] − [[(x − h)²|b²]] = 1}}</td><td>{{(h, k ± a)}}</td><td>{{(h, k ± c)}}</td><td>{{y − k = ±[[a|b]](x − h)}}</td></tr>
</table>
<p><strong>El rectángulo auxiliar.</strong> Dibuja un rectángulo centrado en {{(h, k)}} de ancho {{2a}} y alto {{2b}} (en la horizontal; si es vertical el transverso es el alto). Las <strong>diagonales extendidas</strong> son las asíntotas y los vértices tocan los puntos medios de dos lados. Así trazas la hipérbola sin calculadora: primero el rectángulo, luego las asíntotas, luego las ramas.</p>
<p><strong>Hipérbola equilátera:</strong> si {{a = b}}, las asíntotas son {{y − k = ±(x − h)}} (perpendiculares) y {{e = √2}}.</p>`
      },
      {
        titulo: 'Excentricidad y lado recto',
        html: `<p>{{e = [[c|a]]}}. Como {{c > a}}, siempre {{e > 1}}.</p>
<ul>
<li>Si {{e}} es cercana a 1, las ramas son angostas, "afiladas" (focos cerca de los vértices).</li>
<li>Si {{e}} es grande, las ramas son muy abiertas, casi planas (asíntotas muy separadas).</li>
</ul>
<p>El lado recto {{LR = [[2b²|a]]}} es la cuerda por un foco perpendicular al eje transverso. Útil para trazar la curva con precisión.</p>
<p><strong>Resumen de excentricidades:</strong> circunferencia {{e = 0}}; elipse {{0 < e < 1}}; parábola {{e = 1}}; hipérbola {{e > 1}}. Esta es la clave que unifica a todas las cónicas.</p>`
      },
      {
        titulo: 'Forma general y completar cuadrados',
        html: `<p>La forma general de una hipérbola con ejes paralelos a los coordenados es:</p>
<p>{{Ax² + Cy² + Dx + Ey + F = 0}},  con {{A}} y {{C}} de <strong>signos contrarios</strong>.</p>
<p>Procedimiento:</p>
<ol>
<li>Agrupa {{x}} con {{x}}, {{y}} con {{y}} y pasa la constante a la derecha.</li>
<li>Saca el factor común de cada grupo ({{A}} y {{C}}, uno de ellos negativo).</li>
<li>Completa cuadrados. Lo que sumas dentro de cada paréntesis queda multiplicado por su factor (incluyendo el signo negativo) al lado derecho.</li>
<li>Divide entre el número de la derecha para que quede {{= 1}}. Si es negativo, el término positivo es el que no esperabas (la orientación cambia).</li>
</ol>
<p>Una vez en forma ordinaria, lee {{h}}, {{k}}, {{a²}} (denominador del término positivo), {{b²}} y calcula {{c = √(a² + b²)}}.</p>`
      },
      {
        titulo: 'Identificar la cónica desde la ecuación general',
        html: `<p>Para {{Ax² + Cy² + Dx + Ey + F = 0}} (sin término {{xy}}), estudia los coeficientes {{A}} y {{C}}:</p>
<table>
<tr><th>Condición</th><th>Cónica</th><th>Ejemplo</th></tr>
<tr><td>{{A = 0}} o {{C = 0}}</td><td>Parábola</td><td>{{x² − 6x − 4y + 1 = 0}}</td></tr>
<tr><td>{{A = C}}</td><td>Circunferencia</td><td>{{2x² + 2y² − 8x + 12y + 5 = 0}}</td></tr>
<tr><td>{{A}}, {{C}} mismo signo, distintos</td><td>Elipse</td><td>{{4x² + 9y² − 16x + 54y + 61 = 0}}</td></tr>
<tr><td>{{A}}, {{C}} signo contrario</td><td>Hipérbola</td><td>{{x² − 4y² + 6x + 8y − 11 = 0}}</td></tr>
</table>
<p>Equivalentemente: mira el producto {{AC}}: si {{AC = 0}} es parábola; si {{AC > 0}} es elipse o circunferencia; si {{AC < 0}} es hipérbola. Para confirmar y hallar sus elementos, completa cuadrados. Si aparece un término {{xy}}, la cónica está girada y se usa otro método (que verás más adelante).</p>`
      },
      {
        titulo: 'Para qué sirve la hipérbola',
        html: `<ul>
<li><strong>Navegación y localización (tipo LORAN o GPS antiguos):</strong> dos estaciones emiten una señal; la diferencia de tiempos de llegada fija una diferencia de distancias constante, es decir, la posición está en una rama de una hipérbola. Con otro par de estaciones se obtiene una segunda hipérbola, y la intersección da el punto exacto.</li>
<li><strong>Torres de enfriamiento</strong> de centrales eléctricas y térmicas: su forma hiperbólica de revolución es muy resistente al viento con poco material.</li>
<li><strong>Telescopios reflectores:</strong> un espejo secundario hiperbólico refleja la luz hacia el ocular.</li>
<li><strong>Estampido sónico:</strong> un avión supersónico produce una onda que corta el suelo en una hipérbola.</li>
</ul>
<p>Prueba la calculadora para ver cómo se mueven las asíntotas y los focos al cambiar {{a}} y {{b}}.</p>`
      }
    ],
    formulas: [
      { label: 'Definición', html: '{{|PF₁ − PF₂| = 2a}}' },
      { label: 'Relación fundamental', html: '{{c² = a² + b²}}' },
      { label: 'Hipérbola horizontal', html: '{{[[(x − h)²|a²]] − [[(y − k)²|b²]] = 1}}   vértices (h ± a, k),  focos (h ± c, k),  asíntotas y − k = ±[[b|a]](x − h)' },
      { label: 'Hipérbola vertical', html: '{{[[(y − k)²|a²]] − [[(x − h)²|b²]] = 1}}   vértices (h, k ± a),  focos (h, k ± c),  asíntotas y − k = ±[[a|b]](x − h)' },
      { label: 'Excentricidad', html: '{{e = [[c|a]]}},   e > 1' },
      { label: 'Lado recto', html: '{{LR = [[2b²|a]]}}' },
      { label: 'Forma general', html: '{{Ax² + Cy² + Dx + Ey + F = 0}},  A y C de signos contrarios' }
    ],
    ejemplos: [
      {
        titulo: 'Elementos de una hipérbola horizontal',
        enunciado: `Para {{[[x²|16]] − [[y²|9]] = 1}} halla vértices, focos, asíntotas, excentricidad y lado recto.`,
        pasos: [
          `El término positivo es {{x²}}: eje transverso horizontal. {{a² = 16}} → {{a = 4}}; {{b² = 9}} → {{b = 3}}.`,
          `{{c² = a² + b² = 16 + 9 = 25}} → {{c = 5}}.`,
          `Vértices {{(±4, 0)}}; focos {{(±5, 0)}}.`,
          `Asíntotas: {{y = ±[[b|a]]x = ±[[3|4]]x}}.`,
          `{{e = [[5|4]] = 1.25}}; {{LR = [[2·9|4]] = [[9|2]] = 4.5}}.`
        ],
        respuesta: `Vértices {{(±4, 0)}}, focos {{(±5, 0)}}, asíntotas {{y = ±[[3|4]]x}}, {{e = 1.25}}, {{LR = 4.5}}.`
      },
      {
        titulo: 'Hipérbola vertical',
        enunciado: `Para {{[[y²|16]] − [[x²|9]] = 1}} halla vértices, focos, asíntotas y las longitudes de los ejes.`,
        pasos: [
          `El término positivo es {{y²}}: eje transverso vertical. {{a = 4}}, {{b = 3}}.`,
          `{{c = √(16 + 9) = 5}}.`,
          `Vértices {{(0, ±4)}}; focos {{(0, ±5)}}.`,
          `Asíntotas verticales: {{y = ±[[a|b]]x = ±[[4|3]]x}}.`,
          `Eje transverso {{2a = 8}}; eje conjugado {{2b = 6}}.`
        ],
        respuesta: `Vértices {{(0, ±4)}}, focos {{(0, ±5)}}, asíntotas {{y = ±[[4|3]]x}}, ejes 8 y 6.`
      },
      {
        titulo: 'Ecuación a partir de vértices y focos',
        enunciado: `Una hipérbola tiene vértices {{(1, 1)}} y {{(5, 1)}} y focos {{(0, 1)}} y {{(6, 1)}}. Halla su ecuación y sus asíntotas.`,
        pasos: [
          `Centro = punto medio de los vértices: {{(3, 1)}}. Eje transverso horizontal (misma ordenada).`,
          `{{a}} = distancia centro-vértice = {{5 − 3 = 2}}; {{c}} = distancia centro-foco = {{6 − 3 = 3}}.`,
          `{{b² = c² − a² = 9 − 4 = 5}}.`,
          `Ecuación: {{[[(x − 3)²|4]] − [[(y − 1)²|5]] = 1}}.`,
          `Asíntotas: {{y − 1 = ±[[√5|2]](x − 3)}}.`
        ],
        respuesta: `{{[[(x − 3)²|4]] − [[(y − 1)²|5]] = 1}}; asíntotas {{y − 1 = ±[[√5|2]](x − 3)}}.`
      },
      {
        titulo: 'De la forma general a la ordinaria',
        enunciado: `Convierte {{16x² − 9y² − 64x − 54y − 161 = 0}} a la forma ordinaria y halla centro, vértices, focos y asíntotas.`,
        pasos: [
          `Agrupa: {{16(x² − 4x) − 9(y² + 6y) = 161}}.`,
          `Completa: suma 4 y 9 dentro de los paréntesis. Al lado derecho: {{16·4 = 64}} y {{−9·9 = −81}}.`,
          `{{16(x − 2)² − 9(y + 3)² = 161 + 64 − 81 = 144}}.`,
          `Divide entre 144: {{[[(x − 2)²|9]] − [[(y + 3)²|16]] = 1}}.`,
          `Centro {{(2, −3)}}; {{a = 3}}, {{b = 4}}, {{c = 5}}.`,
          `Vértices {{(−1, −3)}} y {{(5, −3)}}; focos {{(−3, −3)}} y {{(7, −3)}}; asíntotas {{y + 3 = ±[[4|3]](x − 2)}}.`
        ],
        respuesta: `{{[[(x − 2)²|9]] − [[(y + 3)²|16]] = 1}}; centro {{(2, −3)}}, vértices {{(−1, −3)}}, {{(5, −3)}}, focos {{(−3, −3)}}, {{(7, −3)}}, asíntotas {{y + 3 = ±[[4|3]](x − 2)}}.`
      },
      {
        titulo: 'Ecuación a partir de un vértice y las asíntotas',
        enunciado: `Una hipérbola con centro en el origen tiene un vértice en {{(0, 4)}} y asíntotas {{y = ±2x}}. Halla su ecuación y sus focos.`,
        pasos: [
          `El vértice está sobre el eje y: transverso vertical, {{a = 4}}.`,
          `Para la vertical las asíntotas son {{y = ±[[a|b]]x}}: {{[[4|b]] = 2}} → {{b = 2}}.`,
          `{{c² = a² + b² = 16 + 4 = 20}} → {{c = 2√5 ≈ 4.47}}.`,
          `Ecuación: {{[[y²|16]] − [[x²|4]] = 1}}.`,
          `Focos: {{(0, ±2√5)}}.`
        ],
        respuesta: `{{[[y²|16]] − [[x²|4]] = 1}}, focos {{(0, ±2√5)}}.`
      },
      {
        titulo: 'Localización con dos estaciones de radio',
        enunciado: `Dos estaciones de radio están en {{A(−5, 0)}} y {{B(5, 0)}} (coordenadas en km). Un barco recibe las señales y determina que está 6 km más cerca de {{B}} que de {{A}}. Halla la ecuación de la curva donde puede estar el barco. Si el barco está a 8 km al norte del eje x, ¿cuál es su abscisa?`,
        pasos: [
          `Diferencia de distancias constante: {{|PA − PB| = 6 = 2a}} → {{a = 3}}.`,
          `Los focos son las estaciones: {{c = 5}}.`,
          `{{b² = c² − a² = 25 − 9 = 16}}.`,
          `Curva: {{[[x²|9]] − [[y²|16]] = 1}}. Como está más cerca de {{B}}, está en la rama derecha ({{x > 0}}).`,
          `Con {{y = 8}}: {{[[x²|9]] = 1 + [[64|16]] = 5}} → {{x² = 45}} → {{x = 3√5 ≈ 6.71}}.`,
          `Comprobación: {{PA = √(11.71² + 64) ≈ 14.18}}, {{PB = √(1.71² + 64) ≈ 8.18}}; diferencia 6.00.`
        ],
        respuesta: `{{[[x²|9]] − [[y²|16]] = 1}} (rama derecha); abscisa {{x = 3√5 ≈ 6.71 km}}.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Para {{[[x²|25]] − [[y²|144]] = 1}} halla {{a}}, {{b}}, {{c}}, los vértices, los focos y las asíntotas.`,
        pasos: [`Positivo {{x²}}: horizontal. {{a = 5}}, {{b = 12}}.`, `{{c² = 25 + 144 = 169}} → {{c = 13}}.`, `Vértices {{(±5, 0)}}; focos {{(±13, 0)}}.`, `Asíntotas {{y = ±[[12|5]]x}}.`],
        respuesta: `{{a = 5}}, {{b = 12}}, {{c = 13}}; vértices {{(±5, 0)}}, focos {{(±13, 0)}}, asíntotas {{y = ±[[12|5]]x}}.`
      },
      {
        nivel: 'facil',
        enunciado: `Para {{[[y²|9]] − [[x²|16]] = 1}} halla los vértices, los focos y las asíntotas.`,
        pasos: [`Positivo {{y²}}: vertical. {{a = 3}}, {{b = 4}}.`, `{{c = √(9 + 16) = 5}}.`, `Vértices {{(0, ±3)}}; focos {{(0, ±5)}}.`, `Asíntotas {{y = ±[[a|b]]x = ±[[3|4]]x}}.`],
        respuesta: `Vértices {{(0, ±3)}}, focos {{(0, ±5)}}, asíntotas {{y = ±[[3|4]]x}}.`
      },
      {
        nivel: 'facil',
        enunciado: `Escribe la ecuación de la hipérbola con centro en el origen, vértices {{(±6, 0)}} y focos {{(±10, 0)}}.`,
        pasos: [`Horizontal; {{a = 6}}, {{c = 10}}.`, `{{b² = c² − a² = 100 − 36 = 64}}.`, `{{[[x²|36]] − [[y²|64]] = 1}}.`],
        respuesta: `{{[[x²|36]] − [[y²|64]] = 1}}`
      },
      {
        nivel: 'facil',
        enunciado: `Halla la excentricidad y el lado recto de {{[[x²|9]] − [[y²|16]] = 1}}.`,
        pasos: [`{{a = 3}}, {{b = 4}}, {{c = √(9 + 16) = 5}}.`, `{{e = [[5|3]] ≈ 1.67}}.`, `{{LR = [[2b²|a]] = [[2·16|3]] = [[32|3]] ≈ 10.67}}.`],
        respuesta: `{{e = [[5|3]] ≈ 1.67}}, {{LR = [[32|3]] ≈ 10.67}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Para {{[[(x + 1)²|9]] − [[(y − 2)²|16]] = 1}} halla centro, vértices, focos y asíntotas.`,
        pasos: [`Centro {{(−1, 2)}}; positivo {{x}}: horizontal; {{a = 3}}, {{b = 4}}, {{c = 5}}.`, `Vértices {{(−1 ± 3, 2)}} = {{(−4, 2)}} y {{(2, 2)}}.`, `Focos {{(−1 ± 5, 2)}} = {{(−6, 2)}} y {{(4, 2)}}.`, `Asíntotas {{y − 2 = ±[[4|3]](x + 1)}}.`],
        respuesta: `Centro {{(−1, 2)}}; vértices {{(−4, 2)}}, {{(2, 2)}}; focos {{(−6, 2)}}, {{(4, 2)}}; asíntotas {{y − 2 = ±[[4|3]](x + 1)}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Para {{[[(y − 3)²|9]] − [[(x + 2)²|16]] = 1}} halla centro, vértices, focos y asíntotas.`,
        pasos: [`Centro {{(−2, 3)}}; positivo {{y}}: vertical; {{a = 3}}, {{b = 4}}, {{c = 5}}.`, `Vértices {{(−2, 3 ± 3)}} = {{(−2, 6)}} y {{(−2, 0)}}.`, `Focos {{(−2, 3 ± 5)}} = {{(−2, 8)}} y {{(−2, −2)}}.`, `Asíntotas {{y − 3 = ±[[3|4]](x + 2)}}.`],
        respuesta: `Centro {{(−2, 3)}}; vértices {{(−2, 6)}}, {{(−2, 0)}}; focos {{(−2, 8)}}, {{(−2, −2)}}; asíntotas {{y − 3 = ±[[3|4]](x + 2)}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Pasa {{9x² − 4y² + 18x + 16y − 43 = 0}} a la forma ordinaria y halla centro, vértices y focos.`,
        pasos: [`Agrupa: {{9(x² + 2x) − 4(y² − 4y) = 43}}.`, `Completa: suma 1 y 4 dentro; al lado derecho {{9·1 = 9}} y {{−4·4 = −16}}.`, `{{9(x + 1)² − 4(y − 2)² = 43 + 9 − 16 = 36}}.`, `Divide entre 36: {{[[(x + 1)²|4]] − [[(y − 2)²|9]] = 1}}.`, `Centro {{(−1, 2)}}; {{a = 2}}, {{b = 3}}, {{c = √13 ≈ 3.61}}. Vértices {{(−3, 2)}} y {{(1, 2)}}; focos {{(−1 ± √13, 2)}}.`],
        respuesta: `{{[[(x + 1)²|4]] − [[(y − 2)²|9]] = 1}}; centro {{(−1, 2)}}, vértices {{(−3, 2)}}, {{(1, 2)}}, focos {{(−1 ± √13, 2)}}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Clasifica cada ecuación como parábola, circunferencia, elipse o hipérbola:<br>a) {{2x² + 2y² − 8x + 12y + 5 = 0}}<br>b) {{x² − 6x − 4y + 1 = 0}}<br>c) {{4x² + 9y² − 16x + 54y + 61 = 0}}<br>d) {{x² − 4y² + 6x + 8y − 11 = 0}}<br>e) {{5y² + 20x − 10y + 3 = 0}}`,
        pasos: [`a) {{A = C = 2}}: coeficientes iguales → circunferencia.`, `b) Solo aparece {{x²}} ({{C = 0}}) → parábola.`, `c) {{A = 4}}, {{C = 9}}: mismo signo, distintos → elipse. (Al completar: {{4(x − 2)² + 9(y + 3)² = 36}} real.)`, `d) {{A = 1}}, {{C = −4}}: signos contrarios → hipérbola. (Al completar: {{(x + 3)² − 4(y − 1)² = 16}}.)`, `e) Solo aparece {{y²}} ({{A = 0}}) → parábola horizontal.`],
        respuesta: `a) circunferencia; b) parábola; c) elipse; d) hipérbola; e) parábola.`
      },
      {
        nivel: 'dificil',
        enunciado: `Una hipérbola tiene vértices {{(2, −3)}} y {{(2, 5)}} y focos {{(2, −4)}} y {{(2, 6)}}. Halla su ecuación y sus asíntotas.`,
        pasos: [`Misma abscisa: transverso vertical. Centro (punto medio): {{(2, 1)}}.`, `{{a = 5 − 1 = 4}} (centro a vértice); {{c = 6 − 1 = 5}} (centro a foco).`, `{{b² = c² − a² = 25 − 16 = 9}} → {{b = 3}}.`, `Ecuación: {{[[(y − 1)²|16]] − [[(x − 2)²|9]] = 1}}.`, `Asíntotas: {{y − 1 = ±[[a|b]](x − 2) = ±[[4|3]](x − 2)}}.`],
        respuesta: `{{[[(y − 1)²|16]] − [[(x − 2)²|9]] = 1}}; asíntotas {{y − 1 = ±[[4|3]](x − 2)}}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Una hipérbola con centro en el origen, eje transverso horizontal y vértice {{(2, 0)}} pasa por {{(4, 3√3)}}. Halla su ecuación y sus asíntotas.`,
        pasos: [`{{a = 2}}: {{[[x²|4]] − [[y²|b²]] = 1}}.`, `Sustituye el punto: {{[[16|4]] − [[27|b²]] = 1}} → {{4 − [[27|b²]] = 1}} → {{[[27|b²]] = 3}}.`, `{{b² = 9}} → {{b = 3}}.`, `Ecuación: {{[[x²|4]] − [[y²|9]] = 1}}.`, `Asíntotas: {{y = ±[[3|2]]x}}.`],
        respuesta: `{{[[x²|4]] − [[y²|9]] = 1}}; asíntotas {{y = ±[[3|2]]x}}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla los puntos de intersección de {{[[x²|4]] − [[y²|9]] = 1}} con la recta {{y = [[3|2]]x − 3}}. ¿Por qué hay solo uno?`,
        pasos: [`Multiplica la hipérbola por 36: {{9x² − 4y² = 36}}.`, `Sustituye {{y = [[3|2]]x − 3}}: {{4y² = 4([[9|4]]x² − 9x + 9) = 9x² − 36x + 36}}.`, `{{9x² − (9x² − 36x + 36) = 36}} → {{36x − 36 = 36}}.`, `{{x = 2}}; {{y = [[3|2]](2) − 3 = 0}}. Punto {{(2, 0)}}, un vértice.`, `La recta tiene pendiente {{[[3|2]] = [[b|a]]}}: es paralela a una asíntota, y una recta paralela a una asíntota corta a la hipérbola en un solo punto.`],
        respuesta: `Solo {{(2, 0)}}: la recta es paralela a la asíntota {{y = [[3|2]]x}}.`
      }
    ],
    teoricas: [
      { q: `¿En qué se parecen y en qué se diferencian la elipse y la hipérbola en su definición?`, a: `Ambas tienen dos focos. En la elipse la <em>suma</em> de distancias a los focos es constante ({{2a}}); en la hipérbola la <em>diferencia</em> (en valor absoluto) es constante ({{2a}}).` },
      { q: `¿Cómo se determina si una hipérbola es horizontal o vertical?`, a: `Por el signo: el término positivo indica el eje transverso. Si {{x²}} es positivo, las ramas abren a los lados (horizontal); si {{y²}} es positivo, abren hacia arriba y abajo (vertical).` },
      { q: `¿Por qué {{c}} es el mayor de los tres números {{a}}, {{b}}, {{c}} en una hipérbola?`, a: `Porque {{c² = a² + b²}}, así que {{c² > a²}} y {{c² > b²}}. Los focos están más lejos del centro que los vértices.` },
      { q: `¿Qué son las asíntotas y cómo se obtienen rápido?`, a: `Son las rectas a las que se acercan las ramas sin tocarlas. Se obtienen con las diagonales del rectángulo auxiliar de lados {{2a}} y {{2b}} centrado en el centro, o con la fórmula {{y − k = ±[[b|a]](x − h)}} (horizontal).` },
      { q: `¿Puede ser {{a < b}} en una hipérbola? ¿Y en una elipse?`, a: `En una hipérbola sí: no hay restricción entre {{a}} y {{b}}. En una elipse no: {{a}} es siempre el mayor semieje y {{a > b}}.` },
      { q: `¿Qué es una hipérbola equilátera?`, a: `Es la que tiene {{a = b}}. Sus asíntotas son perpendiculares ({{y − k = ±(x − h)}}) y su excentricidad es {{√2}}.` },
      { q: `¿Qué valores puede tomar la excentricidad de una hipérbola y qué indica?`, a: `{{e > 1}}. Si es cercana a 1 las ramas son angostas; si es grande, son muy abiertas.` },
      { q: `En {{Ax² + Cy² + Dx + Ey + F = 0}}, ¿cómo sabes que es hipérbola?`, a: `Cuando {{A}} y {{C}} tienen signos contrarios (es decir, {{AC < 0}}), y al completar cuadrados el lado derecho no es cero (si fuera cero se obtendrían dos rectas que se cruzan).` }
    ],
    errores: [
      `Usar {{c² = a² − b²}} (la de la elipse) en lugar de {{c² = a² + b²}}. En la hipérbola siempre se <strong>suma</strong>, y {{c}} es el mayor.`,
      `Decidir la orientación por el denominador mayor, como en la elipse. En la hipérbola se decide por el <strong>signo</strong>: el término positivo es el del eje transverso, y su denominador es {{a²}} aunque sea el menor.`,
      `Confundir las asíntotas de la vertical: son {{y − k = ±[[a|b]](x − h)}} (a sobre b), no {{[[b|a]]}}. Para no equivocarte, dibuja el rectángulo auxiliar y traza sus diagonales.`,
      `Al completar cuadrados con un coeficiente negativo ({{−9(y² + 6y)}}), sumar {{+81}} en lugar de {{−81}} al lado derecho. Lo que sumas dentro del paréntesis se multiplica por el coeficiente que está fuera, con su signo.`
    ],
    aplicacion: {
      titulo: 'Torre de enfriamiento hiperbólica',
      html: `<p>La sección de una torre de enfriamiento de una central eléctrica es una hipérbola con ecuación {{[[x²|400]] − [[y²|1600]] = 1}}, donde {{x}} es el radio (m) y {{y}} la altura (m) medida desde la "garganta" (la parte más angosta). ¿Cuál es el radio de la garganta? ¿Y el radio a 15 m sobre la garganta? Si la base está a 30 m bajo la garganta, ¿qué radio tiene la base? ¿Cuáles son las asíntotas?</p>
<ol>
<li><strong>Garganta ({{y = 0}}):</strong> {{x² = 400}} → radio {{a = 20}} m (es el vértice).</li>
<li><strong>A 15 m sobre la garganta:</strong> {{x² = 400(1 + [[225|1600]]) = 400 + 56.25 = 456.25}} → {{x ≈ 21.36}} m.</li>
<li><strong>Base ({{y = −30}}):</strong> {{x² = 400(1 + [[900|1600]]) = 400 + 225 = 625}} → {{x = 25}} m.</li>
<li><strong>Asíntotas:</strong> {{b = 40}}, {{a = 20}}: {{y = ±[[b|a]]x = ±2x}}.</li>
<li><strong>Focos:</strong> {{c² = 400 + 1600 = 2000}} → {{c ≈ 44.72}} m.</li>
</ol>
<p><strong>Respuesta:</strong> garganta de 20 m de radio; a 15 m sobre ella, {{≈ 21.36 m}}; la base mide {{25 m}} de radio; asíntotas {{y = ±2x}}.</p>`
    },
    calc: 'hiperbola',
    examen: [
      { tipo: 'num', q: `En la hipérbola {{[[x²|64]] − [[y²|36]] = 1}}, ¿cuánto vale {{c}}?`, r: 10, tol: 0.01, pasos: [`{{a² = 64}}, {{b² = 36}}.`, `{{c² = a² + b² = 100}}.`, `{{c = 10}}.`] },
      { tipo: 'par', q: `Halla el foco superior de {{[[(y − 2)²|9]] − [[(x + 1)²|16]] = 1}}. Escribe el punto como (x, y).`, r: [-1, 7], tol: 0.01, pasos: [`Centro {{(−1, 2)}}; transverso vertical ({{y}} positivo).`, `{{a = 3}}, {{b = 4}}, {{c = 5}}.`, `Foco superior {{(h, k + c) = (−1, 2 + 5)}}.`, `{{(−1, 7)}}.`] },
      { tipo: 'num', q: `Halla la excentricidad de {{[[x²|144]] − [[y²|25]] = 1}}. Redondea a 2 decimales.`, r: 1.08, tol: 0.01, pasos: [`{{a = 12}}, {{b = 5}}.`, `{{c = √(144 + 25) = 13}}.`, `{{e = [[13|12]] ≈ 1.08}}.`] },
      { tipo: 'num', q: `¿Cuál es la pendiente positiva de las asíntotas de {{[[x²|25]] − [[y²|49]] = 1}}?`, r: 1.4, tol: 0.01, pasos: [`Horizontal: {{y = ±[[b|a]]x}}.`, `{{a = 5}}, {{b = 7}}.`, `Pendiente {{[[7|5]] = 1.4}}.`] },
      { tipo: 'par', q: `Halla el centro de la hipérbola {{9x² − 16y² − 54x − 64y − 127 = 0}}. Escribe el punto como (x, y).`, r: [3, -2], tol: 0.01, pasos: [`Agrupa: {{9(x² − 6x) − 16(y² + 4y) = 127}}.`, `Completa: {{9(x − 3)² − 16(y + 2)² = 127 + 81 − 64 = 144}}.`, `{{[[(x − 3)²|16]] − [[(y + 2)²|9]] = 1}}.`, `Centro {{(3, −2)}}.`] },
      { tipo: 'num', q: `Calcula el lado recto de {{[[x²|9]] − [[y²|16]] = 1}}. Redondea a 2 decimales.`, r: 10.67, tol: 0.01, pasos: [`{{a = 3}}, {{b² = 16}}.`, `{{LR = [[2b²|a]] = [[32|3]]}}.`, `{{LR ≈ 10.67}}.`] },
      { tipo: 'lista', q: `Halla las abscisas de los puntos de {{[[x²|9]] − [[y²|16]] = 1}} que están a la altura {{y = 4}}. Redondea a 2 decimales y sepáralas con coma.`, r: [4.24, -4.24], tol: 0.01, pasos: [`Sustituye {{y = 4}}: {{[[x²|9]] − [[16|16]] = 1}}.`, `{{[[x²|9]] = 2}} → {{x² = 18}}.`, `{{x = ±√18 = ±3√2 ≈ ±4.24}}.`] },
      { tipo: 'opt', q: `La ecuación {{5x² − 3y² + 10x − 12y − 2 = 0}} representa:`, opciones: [`Una circunferencia`, `Una elipse`, `Una hipérbola`, `Una parábola`], correcta: 2, pasos: [`{{A = 5}} y {{C = −3}}.`, `Signos contrarios ({{AC < 0}}).`, `Es una hipérbola.`] },
      { tipo: 'opt', q: `¿Cuáles son las asíntotas de {{[[(y − 1)²|4]] − [[(x − 3)²|9]] = 1}}?`, opciones: [`{{y − 1 = ±[[3|2]](x − 3)}}`, `{{y + 1 = ±[[2|3]](x + 3)}}`, `{{y − 1 = ±[[4|9]](x − 3)}}`, `{{y − 1 = ±[[2|3]](x − 3)}}`], correcta: 3, pasos: [`Centro {{(3, 1)}}; transverso vertical: {{a = 2}}, {{b = 3}}.`, `Asíntotas verticales: {{y − k = ±[[a|b]](x − h)}}.`, `{{y − 1 = ±[[2|3]](x − 3)}}.`] },
      { tipo: 'opt', q: `¿Qué relación cumple la hipérbola entre {{a}}, {{b}} y {{c}}?`, opciones: [`{{c² = a² + b²}}`, `{{c² = a² − b²}}`, `{{c² = b² − a²}}`, `{{c = a + b}}`], correcta: 0, pasos: [`En la hipérbola, los focos están más lejos del centro que los vértices.`, `Por eso {{c}} es el mayor y se cumple {{c² = a² + b²}}.`, `({{c² = a² − b²}} es la relación de la elipse.)`] }
    ]
  };

  /* ---- Conversión de marcas: [[num|den]] -> fracción; {{ }} -> <span class="math"> ---- */
  function conv(v) {
    if (typeof v === 'string') {
      return v
        .replace(/\[\[([^\]|]*)\|([^\]]*)\]\]/g, function (_, n, d) {
          return '<span class="frac"><span class="num">' + n + '</span><span class="den">' + d + '</span></span>';
        })
        .replace(/\{\{([\s\S]*?)\}\}/g, function (_, s) { return '<span class="math">' + s + '</span>'; });
    }
    if (Array.isArray(v)) { for (var i = 0; i < v.length; i++) v[i] = conv(v[i]); return v; }
    if (v && typeof v === 'object') { for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k)) v[k] = conv(v[k]); return v; }
    return v;
  }
  ['1.7', '1.8', '1.9', '1.10'].forEach(function (id) { conv(T[id]); });
})();

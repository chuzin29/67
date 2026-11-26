/* data-1a-u4.js — Unidad 4: Vectores y números complejos */
window.CURSO_1A = window.CURSO_1A || { temas: {} };
(function () {
  var T = window.CURSO_1A.temas;

  T['1.12'] = {
    id: '1.12',
    unidad: 4,
    titulo: 'Álgebra vectorial en R²',
    resumen: 'Operarás con vectores en el plano: suma, multiplicación por escalar, norma, paralelismo y ortogonalidad.',
    objetivos: [
      'Representar un vector mediante sus componentes cartesianas u = (u1, u2).',
      'Calcular la norma de un vector y reconocer vectores unitarios.',
      'Sumar vectores y multiplicarlos por un escalar, interpretando el efecto geométrico del signo y el tamaño del escalar.',
      'Determinar si dos vectores son paralelos u ortogonales.'
    ],
    teoria: [
      { titulo: 'Segmento dirigido y vector', html: '<p>Un <strong>segmento dirigido</strong> es un trazo de recta con un punto inicial A y un punto final B, señalado con una flecha. Un <strong>vector</strong> es el conjunto de todos los segmentos dirigidos que comparten la misma magnitud (norma), dirección (inclinación de la recta) y sentido (hacia dónde apunta la flecha).</p><p>Se denota con una letra minúscula y flecha, u, y en componentes cartesianas se escribe <span class="math">u = (u1, u2)</span>, o bien a partir de sus puntos como AB.</p>' },
      { titulo: 'Norma o magnitud', html: '<p>La <strong>norma</strong> ||u|| de un vector es la longitud del segmento. Si <span class="math">u = (u1, u2)</span>, entonces:</p><p><span class="math">||u|| = √(u1<sup>2</sup> + u2<sup>2</sup>)</span></p><p>Un <strong>vector unitario</strong> es aquel cuya norma es exactamente 1 (||u|| = 1).</p>' },
      { titulo: 'Vectores iguales, dirección y sentido', html: '<p>Dos vectores son <strong>iguales</strong> si tienen la misma magnitud, la misma dirección y el mismo sentido, sin importar dónde estén dibujados en el plano. Es un error común confundir la <em>dirección</em> (la inclinación de la recta que lo contiene) con el <em>sentido</em> (hacia cuál de los dos extremos apunta la flecha): dos vectores opuestos comparten dirección pero tienen sentido contrario.</p>' },
      { titulo: 'Ángulo entre vectores y ortogonalidad', html: '<p>El <strong>ángulo entre dos vectores</strong> se mide uniéndolos por su punto inicial, y siempre está entre 0° y 180°. Dos vectores u y v son <strong>ortogonales</strong> cuando ese ángulo es exactamente 90°. Una forma práctica de verificarlo es con el producto escalar: si <span class="math">u1·v1 + u2·v2 = 0</span>, los vectores son ortogonales.</p>' },
      { titulo: 'Suma de vectores', html: '<p>La suma se hace componente a componente:</p><p><span class="math">u + v = (u1 + v1, u2 + v2)</span></p><p>Gráficamente, se coloca el punto inicial de v en el punto final de u; el vector resultante va desde el inicio de u hasta el final de v.</p>' },
      { titulo: 'Multiplicación por un escalar', html: '<p>Si r es un número real:</p><p><span class="math">r·u = (r·u1, r·u2)</span>, con <span class="math">||r·u|| = |r|·||u||</span></p><p>El efecto depende del escalar r: si r > 1, el vector se alarga (amplifica su norma); si 0 < r < 1, se acorta (reduce su norma); si r < 0, además de cambiar el tamaño, el vector invierte su sentido (apunta al lado contrario).</p>' },
      { titulo: 'Base ortonormal i, j', html: '<p>Los vectores <span class="math">i = (1, 0)</span> y <span class="math">j = (0, 1)</span> forman una <strong>base ortonormal</strong>: ambos son unitarios (norma 1) y ortogonales entre sí. Cualquier vector del plano se puede escribir como combinación de ellos: <span class="math">v = (v1, v2) = v1·i + v2·j</span>.</p>' },
      { titulo: 'Paralelismo entre vectores', html: '<p>Dos vectores u y v son <strong>paralelos</strong> si existe un escalar real r ≠ 0 tal que <span class="math">v = r·u</span>, es decir, <span class="math">(v1, v2) = (r·u1, r·u2)</span>. Para comprobarlo, se verifica que el cociente entre componentes correspondientes sea el mismo número r.</p>' }
    ],
    formulas: [
      { label: 'Vector cartesiano', html: '<span class="math">u = (u1, u2)</span>' },
      { label: 'Norma o magnitud', html: '<span class="math">||u|| = √(u1<sup>2</sup> + u2<sup>2</sup>)</span>' },
      { label: 'Suma analítica', html: '<span class="math">u + v = (u1 + v1, u2 + v2)</span>' },
      { label: 'Escalar por vector', html: '<span class="math">r·u = (r·u1, r·u2)</span>, <span class="math">||r·u|| = |r|·||u||</span>' },
      { label: 'Paralelismo', html: '<span class="math">v = r·u</span> ⇒ <span class="math">(v1, v2) = (r·u1, r·u2)</span>' },
      { label: 'Ortogonalidad (producto escalar cero)', html: '<span class="math">u1·v1 + u2·v2 = 0</span>' },
      { label: 'Base ortonormal', html: '<span class="math">i = (1, 0)</span>, <span class="math">j = (0, 1)</span>' }
    ],
    ejemplos: [
      { titulo: 'Suma de vectores con escalares',
        enunciado: 'Dados u = (3, -4) y v = (1, 2), calcula el vector resultante de 2u + 3v.',
        pasos: [
          'Calcula 2u = 2(3, -4) = (6, -8).',
          'Calcula 3v = 3(1, 2) = (3, 6).',
          'Suma componente a componente: (6 + 3, -8 + 6) = (9, -2).'
        ],
        respuesta: 'Vector resultante = (9, -2)' },
      { titulo: 'Norma de un vector',
        enunciado: 'Calcula la norma del vector v = (-5, 12).',
        pasos: [
          'Aplica la fórmula ||v|| = √(v1<sup>2</sup> + v2<sup>2</sup>).',
          'Eleva componentes al cuadrado: (-5)<sup>2</sup> + (12)<sup>2</sup> = 25 + 144 = 169.',
          'Extrae la raíz cuadrada: ||v|| = √(169) = 13.'
        ],
        respuesta: '||v|| = 13' },
      { titulo: 'Producto por escalar negativo',
        enunciado: 'Si u = (-2, 6), calcula el vector resultante de r·u con el escalar r = -3.',
        pasos: [
          'Multiplica cada componente por r = -3: -3·(-2) y -3·6.',
          'Opera signos: (-3)(-2) = 6; (-3)(6) = -18.'
        ],
        respuesta: 'Vector resultante = (6, -18)' },
      { titulo: 'Combinación con radicales',
        enunciado: 'Dados a = (3, -7), d = (√2, -5) y k = 3, calcula k·a + d.',
        pasos: [
          'Multiplica k·a: 3(3, -7) = (9, -21).',
          'Suma el vector d: (9 + √2, -21 + (-5)).',
          'Opera algebraicamente: (9 + √2, -26).'
        ],
        respuesta: '(9 + √2, -26)' },
      { titulo: 'Norma de una combinación lineal',
        enunciado: 'Dados e = (-√3, 5/2), b = (-4.5, 2.8) y n = 2, calcula la norma ||n·e - b||.',
        pasos: [
          'Calcula n·e = 2(-√3, 5/2) = (-2√3, 5).',
          'Resta el vector b: (-2√3 - (-4.5), 5 - 2.8) = (4.5 - 2√3, 2.2).',
          'Convierte a valor decimal: 4.5 - 2(1.73205) = 4.5 - 3.4641 ≈ 1.0359.',
          'Calcula la norma: √[(1.0359)<sup>2</sup> + (2.2)<sup>2</sup>] = √(1.0731 + 4.84) = √(5.9131) ≈ 2.4317.'
        ],
        respuesta: 'Norma ≈ 2.4317' },
      { titulo: 'Vector unitario en una dirección dada',
        enunciado: 'Halla un vector unitario en la misma dirección de v = (5, 12).',
        pasos: [
          'Calcula la norma ||v|| = √(5<sup>2</sup> + 12<sup>2</sup>) = √169 = 13.',
          'Divide cada componente entre la norma: u = (5/13, 12/13).'
        ],
        respuesta: 'Vector unitario u = (5/13, 12/13)' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Dados u = (4, -2) y v = (-1, 5), halla u + v.',
        pasos: ['Suma componente a componente: (4 + (-1), -2 + 5).', 'Opera: (3, 3).'],
        respuesta: '(3, 3)' },
      { nivel: 'facil', enunciado: 'Calcula la norma del vector u = (3, 4).',
        pasos: ['||u|| = √(3<sup>2</sup> + 4<sup>2</sup>) = √(9 + 16).', '= √25 = 5.'],
        respuesta: '||u|| = 5' },
      { nivel: 'facil', enunciado: 'Si v = (6, -8), halla el vector opuesto -v.',
        pasos: ['Multiplica por r = -1: -v = (-1)(6, -8).', '= (-6, 8).'],
        respuesta: '(-6, 8)' },
      { nivel: 'facil', enunciado: 'Expresa el vector v = (4, 3) en la base ortonormal (i, j).',
        pasos: ['Recuerda que i = (1, 0) y j = (0, 1).', 'v = 4i + 3j.'],
        respuesta: '4i + 3j' },
      { nivel: 'intermedio', enunciado: 'Halla n·h - k para h = (√7, -√11), k = (-2.25, -√10) y n = 2.',
        pasos: ['2h = (2√7, -2√11).', 'Resta k: (2√7 - (-2.25), -2√11 - (-√10)) = (2.25 + 2√7, √10 - 2√11).'],
        respuesta: '(2.25 + 2√7, √10 - 2√11)' },
      { nivel: 'intermedio', enunciado: 'Determina si u = (2, -3) y v = (6, -9) son paralelos.',
        pasos: ['Verifica si v = r·u: (6, -9) = r(2, -3).', 'De la primera componente r = 3; de la segunda, -9/-3 = 3 también.', 'Como r = 3 es el mismo en ambas, sí son paralelos.'],
        respuesta: 'Sí son paralelos (r = 3)' },
      { nivel: 'intermedio', enunciado: 'Determina si u = (3, 2) y v = (-2, 3) son ortogonales.',
        pasos: ['Calcula el producto u1·v1 + u2·v2 = 3(-2) + 2(3).', '= -6 + 6 = 0.', 'Como el producto es cero, sí son ortogonales.'],
        respuesta: 'Sí son ortogonales (ángulo de 90°)' },
      { nivel: 'intermedio', enunciado: 'Calcula 3·i + l para i = (-7/5, 3.14) y l = (4/3, -0.9).',
        pasos: ['3i = (-21/5, 9.42) = (-4.2, 9.42).', 'Suma l: (-4.2 + 1.333, 9.42 - 0.9).', '= (-2.867, 8.52).'],
        respuesta: '(-2.867, 8.52)' },
      { nivel: 'dificil', enunciado: 'Halla un vector unitario en la misma dirección de v = (5, 12).',
        pasos: ['Calcula la norma ||v|| = √(5<sup>2</sup> + 12<sup>2</sup>) = 13.', 'Divide cada componente entre la norma: u = (5/13, 12/13).'],
        respuesta: 'u = (5/13, 12/13)' },
      { nivel: 'dificil', enunciado: 'Dados c = (1/2, -3/4), f = (0.75, -1.2), g = (-8, 2/3), k1 = 2 y k2 = 4, halla k1·c - k2·f + g.',
        pasos: ['k1·c = 2(1/2, -3/4) = (1, -1.5).', 'k2·f = 4(0.75, -1.2) = (3, -4.8).', 'Resta y suma: (1 - 3 - 8, -1.5 - (-4.8) + 2/3) = (-10, 3.967).'],
        respuesta: '(-10, 3.967)' },
      { nivel: 'dificil', enunciado: 'Dados e = (-√3, 5/2), b = (-4.5, 2.8) y n = 2, calcula la norma ||n·e - b||.',
        pasos: ['n·e = 2(-√3, 5/2) = (-2√3, 5).', 'Resta b: (4.5 - 2√3, 2.2) ≈ (1.0359, 2.2).', 'Norma: √(1.0359<sup>2</sup> + 2.2<sup>2</sup>) ≈ √5.9131 ≈ 2.4317.'],
        respuesta: '≈ 2.4317' },
      { nivel: 'dificil', enunciado: 'Dados a = (3, -7) y d = (√2, -5), calcula ||3a + d||.',
        pasos: ['3a = (9, -21).', 'Suma d: (9 + √2, -26) ≈ (10.414, -26).', 'Norma: √(10.414<sup>2</sup> + 26<sup>2</sup>) ≈ √(108.5 + 676) ≈ √784.5 ≈ 28.01.'],
        respuesta: '≈ 28.01' }
    ],
    teoricas: [
      { q: '¿Cómo se define un segmento dirigido?', a: 'Es un segmento de recta que posee un punto inicial A y un punto final B señalado con una flecha.' },
      { q: '¿Qué características definen formalmente a un vector?', a: 'Un vector se define por tres elementos: magnitud o norma (longitud), dirección (inclinación) y sentido (hacia dónde apunta).' },
      { q: '¿Qué representa la norma o magnitud de un vector?', a: 'Representa la longitud del segmento entre el punto inicial y el punto final del vector.' },
      { q: '¿Cuándo se dice que dos vectores son ortogonales?', a: 'Cuando el ángulo comprendido entre ellos, al unirlos por sus puntos iniciales, es exactamente de 90°.' },
      { q: '¿Qué efectos produce multiplicar un vector por un escalar r negativo?', a: 'Invierte el sentido del vector (apunta en dirección opuesta) y multiplica su magnitud por el valor absoluto |r|.' },
      { q: '¿Qué es una base ortonormal en el plano R²?', a: 'Es una base vectorial formada por dos vectores que son perpendiculares entre sí (ortogonales) y cuya norma es igual a 1 (unitarios), como i = (1,0) y j = (0,1).' },
      { q: '¿Cómo se interpreta analíticamente el paralelismo entre dos vectores?', a: 'Dos vectores u y v son paralelos si uno es un múltiplo escalar del otro, es decir, v = r·u para algún r ≠ 0.' },
      { q: '¿Cómo se interpreta gráficamente la suma de dos vectores?', a: 'Se une el punto final del primer vector con el punto inicial del segundo; la suma es el vector que va desde el origen inicial hasta el extremo final del segundo.' }
    ],
    errores: [
      'Confundir la dirección (inclinación de la recta) con el sentido (hacia dónde apunta la flecha).',
      'Calcular la norma sumando las componentes sin elevarlas al cuadrado o sin extraer la raíz al final.',
      'Olvidar que al multiplicar por un escalar negativo el vector cambia de sentido, no solo de tamaño.',
      'Confundir vectores paralelos con vectores iguales: ser paralelos solo exige que uno sea múltiplo escalar del otro.'
    ],
    aplicacion: {
      titulo: 'Desplazamiento de un dron',
      html: '<p>Un dron parte del origen y realiza dos desplazamientos sucesivos: primero vuela según el vector <span class="math">u = (120, 50)</span> metros (este-norte) y luego según <span class="math">v = (-40, 90)</span> metros.</p><p>El desplazamiento total es la suma <span class="math">u + v = (120 - 40, 50 + 90) = (80, 140)</span> metros.</p><p>La distancia en línea recta desde el punto de partida es la norma de ese vector: <span class="math">||u + v|| = √(80<sup>2</sup> + 140<sup>2</sup>) = √(6400 + 19600) = √26000 ≈ 161.2</span> metros. Así, los pilotos de drones usan la suma y la norma de vectores para calcular rutas y distancias reales sin necesidad de medir sobre un mapa.</p>'
    },
    calc: 'vector2',
    examen: [
      { tipo: 'par', q: 'Dados u = (5, -3) y v = (-2, 4), calcula u + v.', r: [3, 1], tol: 0.01, pasos: ['Suma componente a componente: (5 + (-2), -3 + 4).', '= (3, 1).'] },
      { tipo: 'num', q: 'Calcula la norma del vector w = (6, 8).', r: 10, tol: 0.01, pasos: ['||w|| = √(6<sup>2</sup> + 8<sup>2</sup>) = √(36 + 64).', '= √100 = 10.'] },
      { tipo: 'par', q: 'Si u = (-3, 5), calcula el vector 2u.', r: [-6, 10], tol: 0.01, pasos: ['Multiplica cada componente por 2.', '2(-3) = -6; 2(5) = 10.'] },
      { tipo: 'opt', q: '¿Qué le ocurre al vector u al multiplicarlo por un escalar r = -2?', opciones: ['Solo se alarga', 'Se alarga y cambia de sentido', 'No cambia', 'Se reduce a la mitad sin cambiar sentido'], correcta: 1, pasos: ['Como |r| = 2 > 1, la norma se duplica.', 'Como r < 0, el vector invierte su sentido.'] },
      { tipo: 'num', q: '¿Es cero el producto u1·v1 + u2·v2 para u = (4, 6) y v = (3, -2)? Da el valor del producto.', r: 0, tol: 0.01, pasos: ['Calcula 4(3) + 6(-2) = 12 - 12.', '= 0, por lo tanto son ortogonales.'] },
      { tipo: 'par', q: 'Dados u = (2, -5) y v = (-1, 3), calcula 2u - v.', r: [5, -13], tol: 0.01, pasos: ['2u = (4, -10).', 'Resta v: (4 - (-1), -10 - 3) = (5, -13).'] },
      { tipo: 'opt', q: '¿Cuál es la condición para que u y v sean paralelos?', opciones: ['u1 = v1', '||u|| = ||v||', 'v = r·u para algún r ≠ 0', 'u1·v1 + u2·v2 = 0'], correcta: 2, pasos: ['El paralelismo se define por un múltiplo escalar.', 'Si existe r real distinto de cero tal que v = r·u, son paralelos.'] },
      { tipo: 'num', q: 'Calcula la norma del vector resultante de u = (1, 0) + 5·(0, 1).', r: 5.0990, tol: 0.01, pasos: ['5(0,1) = (0, 5).', 'Suma: (1, 0) + (0, 5) = (1, 5).', 'Norma: √(1<sup>2</sup> + 5<sup>2</sup>) = √26 ≈ 5.099.'] },
      { tipo: 'par', q: 'Halla un vector unitario en la dirección de v = (3, 4).', r: [0.6, 0.8], tol: 0.01, pasos: ['Norma ||v|| = √(9+16) = 5.', 'Divide cada componente: (3/5, 4/5) = (0.6, 0.8).'] },
      { tipo: 'num', q: 'Dados a = (2, -3) y b = (-6, 9), si b = r·a, ¿cuánto vale r?', r: -3, tol: 0.01, pasos: ['Compara componentes: -6/2 = -3 y 9/-3 = -3.', 'El escalar es el mismo en ambas: r = -3.'] }
    ]
  };

  T['1.13'] = {
    id: '1.13',
    unidad: 4,
    titulo: 'Números complejos y teorema de Moivre',
    resumen: 'Operarás con números complejos en forma binomial y aplicarás el teorema de Moivre para calcular potencias.',
    objetivos: [
      'Identificar la parte real e imaginaria de un número complejo y clasificarlo como real puro o imaginario puro.',
      'Sumar, restar, multiplicar y dividir números complejos en forma binomial.',
      'Calcular el conjugado y el módulo de un número complejo.',
      'Aplicar el teorema de Moivre para elevar un número complejo a una potencia entera.'
    ],
    teoria: [
      { titulo: 'El conjunto de los números complejos', html: '<p>El conjunto <strong>C</strong> de los números complejos está formado por números que tienen una parte real y una parte imaginaria. La <strong>unidad imaginaria</strong> i se define como <span class="math">i = √(-1)</span>, de donde <span class="math">i<sup>2</sup> = -1</span>.</p><p>En <strong>forma binomial</strong>, un número complejo se escribe <span class="math">z = a + bi</span>, donde a = Re(z) es la parte real y b = Im(z) es la parte imaginaria. También puede representarse como par ordenado (a, b) en el plano complejo de Argand (forma cartesiana).</p>' },
      { titulo: 'Clasificación: real puro e imaginario puro', html: '<p>Un complejo es <strong>real puro</strong> cuando su parte imaginaria es cero (b = 0, z = a). Es <strong>imaginario puro</strong> cuando su parte real es cero y la imaginaria no lo es (a = 0, b ≠ 0, z = bi). Cuando a ≠ 0 y b ≠ 0, el complejo tiene ambas partes presentes.</p>' },
      { titulo: 'Conjugado de un número complejo', html: '<p>El <strong>conjugado</strong> de <span class="math">z = a + bi</span> es <span class="math">z̄ = a - bi</span>: se invierte únicamente el signo de la parte imaginaria, la parte real se mantiene igual. El conjugado se usa, entre otras cosas, para dividir complejos.</p>' },
      { titulo: 'Módulo o norma de un complejo', html: '<p>El <strong>módulo</strong> |z| representa la distancia desde el origen hasta el punto (a, b) en el plano de Argand:</p><p><span class="math">|z| = √(a<sup>2</sup> + b<sup>2</sup>)</span></p><p>Un error común es meter la i dentro del radical; recuerda que se usan los valores de a y b (números reales), nunca bi al cuadrado dentro de la raíz.</p>' },
      { titulo: 'Suma, resta y multiplicación', html: '<p>Para <strong>sumar o restar</strong> complejos se operan por separado las partes reales entre sí y las imaginarias entre sí: <span class="math">(a + bi) ± (c + di) = (a ± c) + (b ± d)i</span>.</p><p>Para <strong>multiplicar</strong>, se aplica la propiedad distributiva y se sustituye <span class="math">i<sup>2</sup> = -1</span> donde aparezca: <span class="math">(a + bi)(c + di) = (ac - bd) + (ad + bc)i</span>.</p>' },
      { titulo: 'División de complejos', html: '<p>Para <strong>dividir</strong> dos complejos, se multiplica el numerador y el denominador por el conjugado del denominador, de modo que el denominador se convierte en un número real (su módulo al cuadrado):</p><p><span class="math">(a + bi)/(c + di) = [(a + bi)(c - di)]/(c<sup>2</sup> + d<sup>2</sup>)</span></p>' },
      { titulo: 'Forma trigonométrica o polar', html: '<p>Todo complejo <span class="math">z = a + bi</span> también se escribe en <strong>forma trigonométrica</strong> como <span class="math">z = r(cos θ + i sen θ)</span>, donde r = |z| es el módulo y θ es el argumento (ángulo que forma con el eje real positivo). Para hallar θ se usa <span class="math">tan θ = b/a</span>, cuidando el cuadrante donde está (a, b).</p>' },
      { titulo: 'Teorema de Moivre', html: '<p>El <strong>teorema de Moivre</strong> permite elevar un complejo en forma trigonométrica a una potencia entera n sin multiplicar repetidamente:</p><p><span class="math">z<sup>n</sup> = [r(cos θ + i sen θ)]<sup>n</sup> = r<sup>n</sup>[cos(n·θ) + i sen(n·θ)]</span></p><p>Es decir: se eleva el módulo a la potencia n y se multiplica el argumento por n. Luego se evalúan el coseno y el seno del nuevo ángulo (reduciéndolo módulo 360° si hace falta) y se regresa a la forma binomial.</p>' }
    ],
    formulas: [
      { label: 'Unidad imaginaria', html: '<span class="math">i = √(-1)</span>, <span class="math">i<sup>2</sup> = -1</span>' },
      { label: 'Forma binomial', html: '<span class="math">z = a + bi</span>' },
      { label: 'Conjugado', html: '<span class="math">z̄ = a - bi</span>' },
      { label: 'Módulo', html: '<span class="math">|z| = √(a<sup>2</sup> + b<sup>2</sup>)</span>' },
      { label: 'Forma trigonométrica', html: '<span class="math">z = r(cos θ + i sen θ)</span>' },
      { label: 'Teorema de Moivre', html: '<span class="math">z<sup>n</sup> = r<sup>n</sup>[cos(n·θ) + i sen(n·θ)]</span>' }
    ],
    ejemplos: [
      { titulo: 'Suma y resta de complejos',
        enunciado: 'Dados z1 = 4 - 3i y z2 = 2 + 5i, calcula z1 + z2 y z1 - z2.',
        pasos: [
          'Para la suma, agrupa partes reales e imaginarias: (4 + 2) + (-3 + 5)i = 6 + 2i.',
          'Para la resta: (4 - 2) + (-3 - 5)i = 2 - 8i.'
        ],
        respuesta: 'z1 + z2 = 6 + 2i; z1 - z2 = 2 - 8i' },
      { titulo: 'Conjugado y módulo',
        enunciado: 'Para z = 3 - 4i, halla su conjugado z̄ y su módulo |z|.',
        pasos: [
          'Conjugado: cambia el signo de la parte imaginaria: z̄ = 3 + 4i.',
          'Módulo: |z| = √(3<sup>2</sup> + (-4)<sup>2</sup>) = √(9 + 16) = √25 = 5.'
        ],
        respuesta: 'Conjugado z̄ = 3 + 4i; Módulo |z| = 5' },
      { titulo: 'Multiplicación de complejos',
        enunciado: 'Calcula el producto z1·z2 para z1 = 2 + 3i y z2 = 1 - 4i.',
        pasos: [
          'Aplica la propiedad distributiva: (2)(1) + (2)(-4i) + (3i)(1) + (3i)(-4i).',
          'Opera términos: 2 - 8i + 3i - 12i<sup>2</sup>.',
          'Sustituye i<sup>2</sup> por -1: 2 - 5i + 12 = 14 - 5i.'
        ],
        respuesta: 'Producto = 14 - 5i' },
      { titulo: 'División entre un número real',
        enunciado: 'Simplifica el cociente de dividir z = 3 + i entre el número real 2.',
        pasos: [
          'Cuando el divisor es real, basta dividir cada parte del numerador entre él.',
          'Distribuye el denominador real entre ambas partes: (3/2) + (1/2)i.'
        ],
        respuesta: '3/2 + (1/2)i' },
      { titulo: 'Teorema de Moivre',
        enunciado: 'Calcula z = (√3 + i)<sup>6</sup> utilizando la fórmula de Moivre.',
        pasos: [
          'Calcula el módulo r: r = √[(√3)<sup>2</sup> + 1<sup>2</sup>] = √(3 + 1) = √4 = 2.',
          'Calcula el argumento θ: tan θ = 1/√3 ⇒ θ = 30° (Cuadrante I).',
          'Expresa en forma trigonométrica: 2[cos 30° + i sen 30°].',
          'Aplica Moivre: z<sup>6</sup> = 2<sup>6</sup>[cos(6·30°) + i sen(6·30°)] = 64[cos 180° + i sen 180°].',
          'Evalúa: cos 180° = -1, sen 180° = 0; z = 64(-1 + 0i) = -64.'
        ],
        respuesta: 'z = -64' },
      { titulo: 'División de complejos entre complejos',
        enunciado: 'Divide (3 + 2i) entre (1 - i).',
        pasos: [
          'Multiplica numerador y denominador por el conjugado (1 + i).',
          '[(3 + 2i)(1 + i)] / [(1 - i)(1 + i)] = (3 + 5i - 2) / (1 + 1).',
          '= (1 + 5i)/2 = 1/2 + (5/2)i.'
        ],
        respuesta: '1/2 + (5/2)i' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Dados z1 = 5 - 3i y z4 = √2 + 7i, halla 2·z1 - z4.',
        pasos: ['2(5 - 3i) = 10 - 6i.', 'Resta z4: (10 - √2) + (-6 - 7)i = (10 - √2) - 13i.'],
        respuesta: '(10 - √2) - 13i' },
      { nivel: 'facil', enunciado: 'Determina el conjugado de z = -6 - 7i.',
        pasos: ['Invierte el signo de la parte imaginaria.', 'z̄ = -6 + 7i.'],
        respuesta: 'Conjugado z̄ = -6 + 7i' },
      { nivel: 'facil', enunciado: 'Calcula la norma o módulo de z = 5 - 12i.',
        pasos: ['|z| = √(5<sup>2</sup> + (-12)<sup>2</sup>) = √(25 + 144).', '= √169 = 13.'],
        respuesta: 'Módulo |z| = 13' },
      { nivel: 'facil', enunciado: 'Dados z1 = 8 - 2i y z2 = 3 + 4i, efectúa z1 - z2.',
        pasos: ['Resta partes reales e imaginarias por separado.', '(8 - 3) + (-2 - 4)i = 5 - 6i.'],
        respuesta: '5 - 6i' },
      { nivel: 'intermedio', enunciado: 'Resuelve el producto z2·z5 con z2 = -2.4 + 6.1i y z5 = -√5 - (2/3)i.',
        pasos: ['Distribuye: (-2.4)(-√5) + (-2.4)(-2/3 i) + (6.1i)(-√5) + (6.1i)(-2/3 i).', 'Opera cada término: 5.366 + 1.6i - 13.64i + 4.067.', 'Agrupa: (5.366 + 4.067) + (1.6 - 13.64)i = 9.433 - 12.04i.'],
        respuesta: '9.433 - 12.04i' },
      { nivel: 'intermedio', enunciado: 'Divide (3 + 2i) entre (1 - i).',
        pasos: ['Multiplica por el conjugado (1 + i) arriba y abajo.', '[(3+2i)(1+i)]/[(1-i)(1+i)] = (1 + 5i)/2.'],
        respuesta: '1/2 + (5/2)i' },
      { nivel: 'intermedio', enunciado: 'Calcula mediante el teorema de Moivre z = (1 + i)<sup>8</sup>.',
        pasos: ['r = √(1<sup>2</sup> + 1<sup>2</sup>) = √2; θ = 45°.', 'z<sup>8</sup> = (√2)<sup>8</sup>[cos(8·45°) + i sen(8·45°)] = 16[cos 360° + i sen 360°].', 'cos 360° = 1, sen 360° = 0; z = 16.'],
        respuesta: 'z = 16' },
      { nivel: 'intermedio', enunciado: 'Calcula el producto z1·z2 para z1 = -2 + i y z2 = 3 - i.',
        pasos: ['Distribuye: (-2)(3) + (-2)(-i) + (i)(3) + (i)(-i).', '= -6 + 2i + 3i - i<sup>2</sup> = -6 + 5i + 1.', '= -5 + 5i.'],
        respuesta: '-5 + 5i' },
      { nivel: 'dificil', enunciado: 'Calcula z = (1 - √3 i)<sup>7</sup> usando la fórmula de Moivre.',
        pasos: ['r = √(1 + 3) = 2; θ = 300° (Cuadrante IV).', 'z<sup>7</sup> = 2<sup>7</sup>[cos(7·300°) + i sen(7·300°)] = 128[cos 2100° + i sen 2100°].', 'Reduce 2100° mod 360° = 300°; cos 300° = 1/2, sen 300° = -√3/2.', 'Resultado: 128[1/2 - √3/2 i] = 64 - 64√3 i.'],
        respuesta: '64 - 64√3 i' },
      { nivel: 'dificil', enunciado: 'Calcula z = (-1 + i)<sup>9</sup> aplicando Moivre.',
        pasos: ['r = √2, θ = 135°.', 'z<sup>9</sup> = (√2)<sup>9</sup>[cos(9·135°) + i sen(9·135°)] = 16√2[cos 1215° + i sen 1215°].', '1215° mod 360° = 135°; cos 135° = -√2/2, sen 135° = √2/2.', 'Resultado: 16√2[-√2/2 + √2/2 i] = -16 + 16i.'],
        respuesta: '-16 + 16i' },
      { nivel: 'dificil', enunciado: 'Dado z = (2 + 2i)<sup>6</sup>, determina su valor por Moivre.',
        pasos: ['r = √(4 + 4) = √8; θ = 45°.', 'z<sup>6</sup> = (√8)<sup>6</sup>[cos(6·45°) + i sen(6·45°)] = 512[cos 270° + i sen 270°].', 'cos 270° = 0, sen 270° = -1.', 'Resultado: 512(0 - i) = -512i.'],
        respuesta: '-512i (número imaginario puro)' },
      { nivel: 'dificil', enunciado: 'Calcula el módulo de z = (3 - 4i)(1 + 2i) sin desarrollar completamente el producto.',
        pasos: ['Usa que |z1·z2| = |z1|·|z2|.', '|3 - 4i| = √(9+16) = 5; |1 + 2i| = √(1+4) = √5.', 'Módulo del producto: 5·√5 ≈ 11.18.'],
        respuesta: '≈ 11.18' }
    ],
    teoricas: [
      { q: '¿Cómo se define formalmente la unidad imaginaria i?', a: 'Es el número definido por la propiedad matemática i = √(-1), por lo cual i² = -1.' },
      { q: '¿Cuándo un número complejo se clasifica como real puro?', a: 'Cuando su parte imaginaria es exactamente igual a cero (b = 0).' },
      { q: '¿Cuál es la diferencia entre un número imaginario general y un imaginario puro?', a: 'En el imaginario puro la parte real es estrictamente cero (a = 0, b ≠ 0); en el imaginario general la parte real puede ser distinta de cero.' },
      { q: '¿En qué consiste la forma binomial de un número complejo?', a: 'En expresarlo como la suma algebraica z = a + bi, donde a es la parte real y b la parte imaginaria.' },
      { q: '¿Qué relación existe entre un número complejo z y su conjugado z̄?', a: 'Tienen la misma parte real y sus partes imaginarias son de igual magnitud pero signo opuesto (z = a + bi, z̄ = a - bi).' },
      { q: '¿Qué representa geométricamente el módulo |z| de un número complejo?', a: 'Representa la distancia euclidiana desde el origen hasta el punto (a, b) en el plano complejo de Argand.' },
      { q: '¿Qué establece el teorema de Moivre para la potencia n-ésima de un complejo?', a: 'Que la potencia n-ésima de un complejo en forma polar r(cos θ + i sen θ) se obtiene elevando el módulo a la potencia n y multiplicando el argumento por n: rⁿ[cos(nθ) + i sen(nθ)].' },
      { q: '¿Cómo se interpreta el producto de dos complejos en forma trigonométrica?', a: 'Se interpreta multiplicando sus módulos y sumando sus argumentos angulares.' }
    ],
    errores: [
      'Escribir el módulo como |z| = √(a² + (bi)²) en lugar de √(a² + b²), olvidando que b es un número real, no bi.',
      'Olvidar cambiar i² por -1 al multiplicar dos complejos.',
      'Dividir complejos sin multiplicar antes por el conjugado del denominador.',
      'Al aplicar Moivre, olvidar reducir el ángulo final módulo 360° antes de evaluar seno y coseno.'
    ],
    aplicacion: {
      titulo: 'Análisis de corriente alterna en electrónica',
      html: '<p>En circuitos de corriente alterna, la impedancia (resistencia total al paso de la corriente) se representa como un número complejo <span class="math">Z = R + Xi</span>, donde R es la resistencia y X la reactancia.</p><p>Si un circuito tiene una impedancia <span class="math">Z = 6 + 8i</span> ohmios, su módulo <span class="math">|Z| = √(6<sup>2</sup> + 8<sup>2</sup>) = √100 = 10</span> ohmios representa la magnitud efectiva de oposición al paso de corriente, independientemente de los desfases internos. Los ingenieros usan el conjugado para calcular la potencia transferida y el teorema de Moivre para analizar cómo se comportan los circuitos ante múltiples ciclos de oscilación de la corriente.</p>'
    },
    calc: 'complejo',
    examen: [
      { tipo: 'par', q: 'Dados z1 = 7 - 2i y z2 = -3 + 5i, calcula z1 + z2 (da parte real e imaginaria).', r: [4, 3], tol: 0.01, pasos: ['Suma partes reales: 7 + (-3) = 4.', 'Suma partes imaginarias: -2 + 5 = 3.'] },
      { tipo: 'num', q: 'Calcula el módulo de z = 8 - 6i.', r: 10, tol: 0.01, pasos: ['|z| = √(8<sup>2</sup> + (-6)<sup>2</sup>) = √(64 + 36).', '= √100 = 10.'] },
      { tipo: 'par', q: 'Halla el conjugado de z = 9 + 4i (da sus partes real e imaginaria).', r: [9, -4], tol: 0.01, pasos: ['Se invierte solo el signo de la parte imaginaria.', 'z̄ = 9 - 4i.'] },
      { tipo: 'opt', q: '¿Cuánto vale i<sup>2</sup>?', opciones: ['1', '-1', 'i', '0'], correcta: 1, pasos: ['Por definición i = √(-1).', 'Elevando al cuadrado: i² = -1.'] },
      { tipo: 'num', q: 'Calcula la parte real del producto (2 + i)(2 - i).', r: 5, tol: 0.01, pasos: ['Distribuye: 4 - 2i + 2i - i<sup>2</sup>.', 'Sustituye i² = -1: 4 + 1 = 5.'] },
      { tipo: 'par', q: 'Calcula el resultado de dividir (4 + 2i) entre 2 (da parte real e imaginaria).', r: [2, 1], tol: 0.01, pasos: ['Divide cada parte entre el denominador real.', '(4/2) + (2/2)i = 2 + i.'] },
      { tipo: 'opt', q: 'Según el teorema de Moivre, al calcular z<sup>n</sup> con z = r(cos θ + i sen θ), ¿qué le ocurre al argumento θ?', opciones: ['Se divide entre n', 'Se multiplica por n', 'No cambia', 'Se eleva a la potencia n'], correcta: 1, pasos: ['El teorema establece zⁿ = rⁿ[cos(nθ) + i sen(nθ)].', 'El argumento se multiplica por n; el módulo se eleva a la potencia n.'] },
      { tipo: 'num', q: 'Calcula el módulo de z = (1 + i)<sup>4</sup> usando que |z1·z2| = |z1||z2|.', r: 4, tol: 0.01, pasos: ['|1 + i| = √2.', 'Elevado a la cuarta: (√2)<sup>4</sup> = 4.'] },
      { tipo: 'par', q: 'Calcula z = i<sup>4</sup>·(2 + 3i) (da parte real e imaginaria).', r: [2, 3], tol: 0.01, pasos: ['i<sup>4</sup> = (i<sup>2</sup>)<sup>2</sup> = (-1)<sup>2</sup> = 1.', 'Multiplica: 1·(2 + 3i) = 2 + 3i.'] },
      { tipo: 'num', q: 'Usando Moivre, calcula z = (√2(cos 90° + i sen 90°))<sup>2</sup> y da su parte real.', r: -2, tol: 0.01, pasos: ['Módulo al cuadrado: (√2)<sup>2</sup> = 2.', 'Ángulo: 2·90° = 180°.', 'z = 2[cos 180° + i sen 180°] = 2(-1 + 0i) = -2; parte real = -2.'] }
    ]
  };
})();

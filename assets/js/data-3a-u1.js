/* data-3a-u1.js — Unidad 1: Límites y continuidad */
(function () {
  var T = (window.CURSO_3A = window.CURSO_3A || { temas: {} }).temas;

  T['1.1'] = {
    id: '1.1',
    unidad: 1,
    titulo: 'Idea intuitiva de límite',
    resumen: 'Entenderás qué significa que f(x) se acerque a un valor L cuando x se acerca a a, usando tablas, gráficas y notación.',
    objetivos: [
      'Interpretar la notación <span class="math">lím<sub>x→a</sub> f(x) = L</span> como "f(x) se acerca a L cuando x se acerca a a".',
      'Estimar límites construyendo tablas de valores con x acercándose a a por ambos lados.',
      'Leer límites en una gráfica y distinguir el límite del valor f(a).',
      'Reconocer situaciones en las que el límite no existe y explicar por qué.'
    ],
    teoria: [
      { titulo: 'La idea de "acercarse"', html: '<p>Mucho antes de las fórmulas, el cálculo nace de una pregunta sencilla: <em>¿hacia dónde va f(x) cuando x se acerca a un número a, sin tener que llegar a él?</em> Piensa en un bus que frena al llegar a una parada: su velocidad se acerca a 0 km por hora cada vez más, y nos interesa a qué valor tiende, no solo lo que pasa en el instante exacto.</p><p>Esta idea es la base de todo el curso: la derivada será un límite, la integral definida será un límite y la continuidad se define con límites.</p>' },
      { titulo: 'Notación y definición informal', html: '<p>Escribimos</p><p><span class="math">lím<sub>x→a</sub> f(x) = L</span></p><p>y leemos "el límite de f(x) cuando x tiende a a es L". Significa que podemos hacer que f(x) quede tan cerca de L como queramos, con solo tomar x suficientemente cerca de a, <strong>pero distinto de a</strong>.</p><p>La parte "distinto de a" es esencial: el límite describe el comportamiento de f <em>alrededor</em> de a, no en a. Por eso f(a) puede valer otra cosa o ni siquiera existir.</p>' },
      { titulo: 'Estimar un límite con una tabla', html: '<p>Procedimiento:</p><ol><li>Elige valores de x que se acerquen a a <strong>por la izquierda</strong> (x < a), por ejemplo a − 0.1, a − 0.01, a − 0.001.</li><li>Elige valores que se acerquen <strong>por la derecha</strong> (x > a): a + 0.1, a + 0.01, a + 0.001.</li><li>Calcula f(x) en cada uno.</li><li>Si los valores de ambos lados se acercan al mismo número L, estima que el límite es L.</li></ol><p>Ejemplo para <span class="math">f(x) = 2x + 1</span> con x→3:</p><table><tr><th>x</th><th>2.9</th><th>2.99</th><th>2.999</th><th>3.001</th><th>3.01</th><th>3.1</th></tr><tr><td>f(x)</td><td>6.8</td><td>6.98</td><td>6.998</td><td>7.002</td><td>7.02</td><td>7.2</td></tr></table><p>Los valores se acercan a 7, así que <span class="math">lím<sub>x→3</sub> (2x + 1) = 7</span>.</p>' },
      { titulo: 'Leer un límite en una gráfica', html: '<p>En una gráfica, el límite en a se lee siguiendo la curva con el dedo desde la izquierda y desde la derecha hacia x = a, y observando la altura a la que se dirigen.</p><ul><li>Si ambas ramas llegan a la misma altura L, el límite es L.</li><li>Un <strong>hueco</strong> (círculo vacío) en (a, L) no impide que el límite sea L.</li><li>Un punto aislado en (a, M) con M ≠ L tampoco cambia el límite: sigue siendo L.</li><li>Si las dos ramas llegan a alturas distintas (un <strong>salto</strong>), el límite no existe.</li></ul><p>Conclusión: <span class="math">lím<sub>x→a</sub> f(x)</span> y <span class="math">f(a)</span> son dos datos independientes.</p>' },
      { titulo: 'Cuando el límite no existe', html: '<p>El límite de f en a <strong>no existe</strong> en estos casos típicos:</p><ul><li><strong>Salto:</strong> los valores por la izquierda y por la derecha tienden a números distintos. Ejemplo: <span class="math">|x|/x</span> en x = 0 vale −1 a la izquierda y 1 a la derecha.</li><li><strong>Crecimiento sin cota:</strong> f(x) se hace tan grande (positiva o negativa) como quieras. Ejemplo: <span class="math">1/x²</span> cerca de 0. Se escribe <span class="math">lím<sub>x→0</sub> 1/x² = ∞</span>, pero ∞ no es un número: decimos que el límite no existe como número real.</li><li><strong>Oscilación:</strong> f(x) sube y baja sin acercarse a nada. Ejemplo: <span class="math">sen(π/x)</span> cerca de 0.</li></ul>' },
      { titulo: 'Cuidado con las tablas', html: '<p>Una tabla da una <em>estimación</em>, no una demostración. Dos riesgos:</p><ul><li>Elegir valores "demasiado bonitos". Para <span class="math">f(x) = sen(π/x)</span>, los valores x = 1, 0.1, 0.01 dan siempre 0, pero la función oscila entre −1 y 1 cerca de 0.</li><li>Mirar un solo lado. Siempre revisa izquierda y derecha.</li></ul><p>En el tema 1.3 aprenderás técnicas algebraicas que calculan el límite exacto; la tabla sirve para entender y comprobar.</p>' },
      { titulo: 'Por qué importa: velocidad instantánea', html: '<p>La velocidad media de un móvil entre t y t + h es <span class="math">(s(t + h) − s(t))/h</span>. Pero un velocímetro marca la velocidad en un <em>instante</em>, y en un instante h = 0 daría <span class="math">0/0</span>. La salida es el límite:</p><p><span class="math">v(t) = lím<sub>h→0</sub> (s(t + h) − s(t))/h</span></p><p>Este es el germen de la derivada (unidad 3). Todo ese concepto depende de entender bien qué significa "acercarse" sin llegar.</p>' },
      { titulo: 'Definición precisa (para curiosos)', html: '<p>La versión rigurosa (ε-δ) dice: <span class="math">lím<sub>x→a</sub> f(x) = L</span> si para cada ε > 0 existe δ > 0 tal que, si <span class="math">0 < |x − a| < δ</span>, entonces <span class="math">|f(x) − L| < ε</span>.</p><p>Traducción: ε es la "tolerancia" que aceptas para el error en f(x); δ es qué tan cerca debes estar de a para garantizarla. La condición <span class="math">0 < |x − a|</span> expresa que x ≠ a.</p>' }
    ],
    formulas: [
      { label: 'Notación de límite', html: '<span class="math">lím<sub>x→a</sub> f(x) = L</span>' },
      { label: 'El límite no depende de f(a)', html: '<span class="math">lím<sub>x→a</sub> f(x)</span> puede ser distinto de <span class="math">f(a)</span> (o f(a) no existir)' },
      { label: 'Límite de una constante', html: '<span class="math">lím<sub>x→a</sub> c = c</span>' },
      { label: 'Límite de la identidad', html: '<span class="math">lím<sub>x→a</sub> x = a</span>' },
      { label: 'Límite de una recta', html: '<span class="math">lím<sub>x→a</sub> (mx + b) = ma + b</span>' },
      { label: 'Velocidad instantánea', html: '<span class="math">v(t) = lím<sub>h→0</sub> (s(t + h) − s(t))/h</span>' }
    ],
    ejemplos: [
      { titulo: 'Estimar con tabla una función lineal',
        enunciado: 'Estima <span class="math">lím<sub>x→2</sub> (3x + 1)</span> con una tabla.',
        pasos: [
          'Elegimos valores por la izquierda: 1.9, 1.99, 1.999, y por la derecha: 2.001, 2.01, 2.1.',
          'Calculamos <span class="math">f(x) = 3x + 1</span>: f(1.9) = 6.7; f(1.99) = 6.97; f(1.999) = 6.997; f(2.001) = 7.003; f(2.01) = 7.03; f(2.1) = 7.3.',
          'Ambos lados se acercan a 7.'
        ],
        respuesta: '<span class="math">lím<sub>x→2</sub> (3x + 1) = 7</span>' },
      { titulo: 'Límite donde la función no está definida',
        enunciado: 'Estima <span class="math">lím<sub>x→3</sub> (x² − 9)/(x − 3)</span>. Observa que f(3) = <span class="math">0/0</span> no existe.',
        pasos: [
          'Evaluamos cerca de 3: f(2.9) = 5.9; f(2.99) = 5.99; f(2.999) = 5.999.',
          'Por la derecha: f(3.001) = 6.001; f(3.01) = 6.01; f(3.1) = 6.1.',
          'Los valores se acercan a 6 desde ambos lados, aunque f(3) no esté definida.',
          'Comprobación algebraica: para x ≠ 3, <span class="math">(x² − 9)/(x − 3) = x + 3</span>, que tiende a 6.'
        ],
        respuesta: '<span class="math">lím<sub>x→3</sub> (x² − 9)/(x − 3) = 6</span>' },
      { titulo: 'El límite no es f(a)',
        enunciado: 'Sea <span class="math">f(x) = x + 1</span> para x ≠ 2 y <span class="math">f(2) = 5</span>. Halla <span class="math">lím<sub>x→2</sub> f(x)</span> y compáralo con f(2).',
        pasos: [
          'El límite solo mira valores de x cercanos a 2 pero distintos de 2, donde f(x) = x + 1.',
          'Cuando x se acerca a 2, x + 1 se acerca a 3.',
          'El valor en el punto es f(2) = 5, que es un dato aparte.'
        ],
        respuesta: '<span class="math">lím<sub>x→2</sub> f(x) = 3</span>, mientras que <span class="math">f(2) = 5</span>. Son distintos.' },
      { titulo: 'Un límite que no existe: salto',
        enunciado: 'Analiza <span class="math">lím<sub>x→0</sub> |x|/x</span> con una tabla.',
        pasos: [
          'Para x > 0, |x| = x, así que |x|/x = 1: f(0.1) = f(0.01) = 1.',
          'Para x < 0, |x| = −x, así que |x|/x = −1: f(−0.1) = f(−0.01) = −1.',
          'Los valores por la izquierda se acercan a −1 y por la derecha a 1: no coinciden.'
        ],
        respuesta: 'El límite no existe (salto: −1 a la izquierda, 1 a la derecha).' },
      { titulo: 'Velocidad instantánea de un bus',
        enunciado: 'Un microbús arranca y su posición es <span class="math">s(t) = 1.5t²</span> metros, con t en segundos. Estima su velocidad instantánea en t = 4 s.',
        pasos: [
          'Velocidad media entre t = 4 y t = 4 + h: <span class="math">(s(4 + h) − s(4))/h = (1.5(4 + h)² − 24)/h = 12 + 1.5h</span>.',
          'Tabla: h = 1 → 13.5; h = 0.1 → 12.15; h = 0.01 → 12.015; h = 0.001 → 12.0015.',
          'Cuando h → 0, la velocidad media se acerca a 12.',
          'En km por hora: 12 m por segundo × 3.6 = 43.2 km por hora.'
        ],
        respuesta: 'v(4) = 12 m por segundo (43.2 km por hora)' },
      { titulo: 'Una raíz con tabla de ambos lados',
        enunciado: 'Estima <span class="math">lím<sub>x→0</sub> (√(x + 4) − 2)/x</span> y verifica con un ajuste de la expresión.',
        pasos: [
          'Por la derecha: f(0.1) ≈ 0.24846; f(0.01) ≈ 0.24984; f(0.001) ≈ 0.24998.',
          'Por la izquierda: f(−0.1) ≈ 0.25158; f(−0.01) ≈ 0.25016; f(−0.001) ≈ 0.25002.',
          'Los valores de ambos lados se acercan a 0.25 = <span class="math">1/4</span>.',
          'Se confirmará algebraicamente en el tema 1.3 (racionalizando): el límite exacto es <span class="math">1/4</span>.'
        ],
        respuesta: '<span class="math">lím<sub>x→0</sub> (√(x + 4) − 2)/x = 1/4 = 0.25</span>' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Estima con una tabla <span class="math">lím<sub>x→1</sub> (2x + 5)</span>.',
        pasos: ['Izquierda: f(0.9) = 6.8; f(0.99) = 6.98; f(0.999) = 6.998.', 'Derecha: f(1.001) = 7.002; f(1.01) = 7.02; f(1.1) = 7.2.', 'Ambos lados tienden a 7.'],
        respuesta: '7' },
      { nivel: 'facil', enunciado: 'Estima <span class="math">lím<sub>x→3</sub> (x² + 1)</span> con una tabla.',
        pasos: ['f(2.9) = 9.41; f(2.99) = 9.9401; f(2.999) ≈ 9.994.', 'f(3.001) ≈ 10.006; f(3.01) = 10.0601; f(3.1) = 10.61.', 'Los valores se acercan a 10 por ambos lados.'],
        respuesta: '10' },
      { nivel: 'facil', enunciado: 'Sea <span class="math">f(x) = x²</span> para x ≠ 1 y <span class="math">f(1) = 5</span>. ¿Cuánto vale <span class="math">lím<sub>x→1</sub> f(x)</span>?',
        pasos: ['El límite ignora el valor en x = 1.', 'Cerca de 1, f(x) = x², que se acerca a 1² = 1.', 'El valor f(1) = 5 no influye.'],
        respuesta: '1' },
      { nivel: 'facil', enunciado: 'Estima con una tabla <span class="math">lím<sub>x→4</sub> √x</span>.',
        pasos: ['Izquierda: f(3.9) ≈ 1.9748; f(3.99) ≈ 1.9975; f(3.999) ≈ 1.99975.', 'Derecha: f(4.001) ≈ 2.00025; f(4.01) ≈ 2.0025; f(4.1) ≈ 2.0248.', 'Los valores se acercan a 2.'],
        respuesta: '2' },
      { nivel: 'intermedio', enunciado: 'Estima <span class="math">lím<sub>x→1</sub> (x² − 1)/(x − 1)</span> con una tabla y comprueba el resultado simplificando.',
        pasos: ['f(0.9) = 1.9; f(0.99) = 1.99; f(0.999) = 1.999.', 'f(1.001) = 2.001; f(1.01) = 2.01; f(1.1) = 2.1.', 'Los valores se acercan a 2.', 'Comprobación: para x ≠ 1, <span class="math">(x² − 1)/(x − 1) = x + 1</span>, que tiende a 2.'],
        respuesta: '2' },
      { nivel: 'intermedio', enunciado: 'Estima <span class="math">lím<sub>x→3</sub> (x² − x − 6)/(x − 3)</span>.',
        pasos: ['Factoriza: <span class="math">x² − x − 6 = (x − 3)(x + 2)</span>.', 'Para x ≠ 3, el cociente es x + 2.', 'Tabla: f(2.99) = 4.99; f(3.01) = 5.01.', 'El valor al que se acerca es 3 + 2 = 5.'],
        respuesta: '5' },
      { nivel: 'intermedio', enunciado: 'Estima <span class="math">lím<sub>x→0</sub> (x² + 3x)/x</span>.',
        pasos: ['Para x ≠ 0, <span class="math">(x² + 3x)/x = x + 3</span>.', 'Tabla: f(0.1) = 3.1; f(0.01) = 3.01; f(−0.01) = 2.99; f(−0.1) = 2.9.', 'Los valores se acercan a 3 desde ambos lados.'],
        respuesta: '3' },
      { nivel: 'intermedio', enunciado: 'Analiza con una tabla <span class="math">lím<sub>x→2</sub> |x − 2|/(x − 2)</span>.',
        pasos: ['Si x > 2, |x − 2| = x − 2 y el cociente vale 1: f(2.1) = f(2.01) = 1.', 'Si x < 2, |x − 2| = −(x − 2) y el cociente vale −1: f(1.9) = f(1.99) = −1.', 'Los valores de los dos lados son diferentes.'],
        respuesta: 'El límite no existe (−1 por la izquierda, 1 por la derecha).' },
      { nivel: 'dificil', enunciado: 'Estima <span class="math">lím<sub>x→0</sub> (√(x + 9) − 3)/x</span> con una tabla de ambos lados. Da el valor como fracción.',
        pasos: ['Derecha: f(0.1) ≈ 0.16621; f(0.01) ≈ 0.16662; f(0.001) ≈ 0.16666.', 'Izquierda: f(−0.1) ≈ 0.16713; f(−0.01) ≈ 0.16671; f(−0.001) ≈ 0.16667.', 'Los valores se acercan a 0.1666... = <span class="math">1/6</span>.'],
        respuesta: '<span class="math">1/6</span> ≈ 0.1667' },
      { nivel: 'dificil', enunciado: 'Estima <span class="math">lím<sub>h→0</sub> (1/(2 + h) − 1/2)/h</span> (es la velocidad de cambio de <span class="math">1/x</span> en x = 2).',
        pasos: ['Simplifica: <span class="math">1/(2 + h) − 1/2 = (2 − (2 + h))/(2(2 + h)) = −h/(2(2 + h))</span>.', 'Dividiendo entre h (con h ≠ 0): <span class="math">−1/(2(2 + h))</span>.', 'Tabla: h = 0.1 → −0.2381; h = 0.01 → −0.2488; h = −0.01 → −0.2513.', 'Cuando h → 0, el valor se acerca a <span class="math">−1/4</span>.'],
        respuesta: '<span class="math">−1/4</span> = −0.25' },
      { nivel: 'dificil', enunciado: 'La posición de un ascensor de carga es <span class="math">s(t) = 5t²</span> metros (t en segundos). Calcula su velocidad instantánea en t = 3 s.',
        pasos: ['Velocidad media en [3, 3 + h]: <span class="math">(5(3 + h)² − 45)/h</span>.', 'Desarrolla: <span class="math">5(9 + 6h + h²) − 45 = 30h + 5h²</span>.', 'Divide entre h: <span class="math">30 + 5h</span>.', 'Cuando h → 0 se obtiene 30.'],
        respuesta: '30 m por segundo' }
    ],
    teoricas: [
      { q: '¿Qué significa en palabras <span class="math">lím<sub>x→a</sub> f(x) = L</span>?', a: 'Que f(x) puede acercarse a L tanto como queramos, con solo tomar x suficientemente cerca de a (y distinto de a). Describe lo que hace f cerca de a, no en a.' },
      { q: '¿Es necesario que f(a) exista para que exista el límite en a?', a: 'No. El límite solo usa valores de x cercanos a a pero distintos de a. Por ejemplo, <span class="math">(x² − 9)/(x − 3)</span> no está definida en 3 y su límite en 3 es 6.' },
      { q: '¿Puede existir el límite en a y ser diferente de f(a)?', a: 'Sí. Si f(x) = x + 1 para x ≠ 2 y f(2) = 5, el límite en 2 es 3 pero f(2) = 5. La gráfica tiene un punto "fuera de lugar".' },
      { q: 'Menciona tres formas en que el límite puede no existir.', a: '(1) Salto: los valores por izquierda y derecha tienden a números distintos. (2) Crecimiento sin cota: f(x) tiende a ∞ o −∞. (3) Oscilación: f(x) sube y baja sin acercarse a un valor.' },
      { q: '¿Por qué una tabla de valores no es una demostración?', a: 'Porque solo prueba unos pocos puntos. Una función como sen(π/x) da 0 en x = 1, 0.1, 0.01, pero oscila entre −1 y 1 cerca de 0. La tabla da una estimación que luego se confirma algebraicamente.' },
      { q: 'Si <span class="math">lím<sub>x→0</sub> 1/x² = ∞</span>, ¿existe el límite?', a: 'Como número real no existe, porque ∞ no es un número. Escribir ∞ da información extra: f(x) crece sin cota. Se dice que el límite es infinito.' },
      { q: '¿Qué relación hay entre límites y velocidad instantánea?', a: 'La velocidad instantánea es el límite de la velocidad media (s(t + h) − s(t))/h cuando h → 0. Sin límites, ese cociente sería <span class="math">0/0</span> en h = 0.' },
      { q: '¿Por qué hay que acercarse a a por ambos lados?', a: 'Porque x puede acercarse a a desde valores menores y mayores. Si las dos aproximaciones dan resultados distintos, el límite no existe. Mirar un solo lado puede engañar.' }
    ],
    errores: [
      'Pensar que <span class="math">lím<sub>x→a</sub> f(x)</span> siempre es f(a). Solo es cierto si f es continua en a (tema 1.5); cuando sale <span class="math">0/0</span> hay que trabajar más.',
      'Estimar con valores de un solo lado. Revisa siempre x < a y x > a; por ejemplo, <span class="math">|x|/x</span> engaña si solo miras valores positivos.',
      'Confundir "x tiende a a" con "x = a". El límite nunca evalúa en el punto: se acerca sin llegar.',
      'Concluir de una tabla corta. Toma al menos tres valores por lado cada vez más cercanos y verifica con álgebra cuando puedas.'
    ],
    aplicacion: {
      titulo: 'Caudal instantáneo de llenado de un tanque',
      html: '<p>Un tanque de agua se llena y el volumen (en litros) después de t minutos es <span class="math">V(t) = 200t − 5t²</span>. ¿Con qué rapidez entra el agua exactamente en t = 4 minutos?</p><p>La tasa media entre t = 4 y t = 4 + h es <span class="math">(V(4 + h) − V(4))/h</span>. Calculamos V(4) = 800 − 80 = 720 y</p><p><span class="math">V(4 + h) = 200(4 + h) − 5(4 + h)² = 720 + 160h − 5h²</span>,</p><p>luego la tasa media es <span class="math">160 − 5h</span> litros por minuto. Tabla: h = 1 → 155; h = 0.1 → 159.5; h = 0.01 → 159.95.</p><p>Al hacer h → 0, la tasa se acerca a <strong>160 L por minuto</strong>. Esa es la rapidez instantánea del llenado en t = 4; observa que es menor que los 200 L por minuto iniciales porque el tanque va ganando presión contraria. Prueba la calculadora con distintos h.</p>'
    },
    calc: 'limite-tabla',
    examen: [
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→3</sub> (4x − 5)</span>.', r: 7, tol: 0.01, pasos: ['La función es continua (lineal): basta evaluar.', '4·3 − 5 = 12 − 5 = 7.', 'Tabla: f(2.99) = 6.96; f(3.01) = 7.04; tienden a 7.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→5</sub> (x² − 25)/(x − 5)</span>.', r: 10, tol: 0.01, pasos: ['Para x ≠ 5: <span class="math">(x² − 25)/(x − 5) = x + 5</span>.', 'Cuando x → 5, x + 5 → 10.', 'Tabla: f(4.99) = 9.99; f(5.01) = 10.01.'] },
      { tipo: 'opt', q: '¿Qué ocurre con <span class="math">lím<sub>x→2</sub> |x − 2|/(x − 2)</span>?', opciones: ['Vale 1', 'Vale −1', 'No existe', 'Vale 0'], correcta: 2, pasos: ['Para x > 2 el cociente es 1.', 'Para x < 2 el cociente es −1.', 'Los valores de los dos lados difieren: el límite no existe.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→2</sub> (x² + x − 6)/(x − 2)</span>.', r: 5, tol: 0.01, pasos: ['Factoriza: <span class="math">x² + x − 6 = (x + 3)(x − 2)</span>.', 'Para x ≠ 2 el cociente es x + 3.', 'Cuando x → 2: 2 + 3 = 5.'] },
      { tipo: 'opt', q: 'Sea <span class="math">f(x) = x + 3</span> para x ≠ 1 y <span class="math">f(1) = 9</span>. ¿Cuánto vale <span class="math">lím<sub>x→1</sub> f(x)</span>?', opciones: ['9', '4', '13', 'No existe'], correcta: 1, pasos: ['El límite ignora el valor en x = 1.', 'Cerca de 1, f(x) = x + 3 → 4.', 'El valor f(1) = 9 no cambia el límite.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→0</sub> (√(x + 1) − 1)/x</span> (da el valor decimal).', r: 0.5, tol: 0.01, pasos: ['Tabla: f(0.01) ≈ 0.49876; f(0.001) ≈ 0.49988.', 'Por la izquierda: f(−0.01) ≈ 0.50126; f(−0.001) ≈ 0.50013.', 'Los valores tienden a 0.5 = <span class="math">1/2</span>.'] },
      { tipo: 'num', q: 'La posición de un vehículo es <span class="math">s(t) = 3t² + t</span> metros (t en segundos). ¿Cuál es su velocidad instantánea (m por segundo) en t = 2?', r: 13, tol: 0.01, pasos: ['Velocidad media: <span class="math">(s(2 + h) − s(2))/h</span> con s(2) = 14.', '<span class="math">s(2 + h) = 3(4 + 4h + h²) + 2 + h = 14 + 13h + 3h²</span>.', 'El cociente es 13 + 3h; cuando h → 0 vale 13.'] },
      { tipo: 'opt', q: 'Una tabla de <span class="math">f(x)</span> muestra: f(1.9) = 3.61; f(1.99) = 3.9601; f(2.01) = 4.0401; f(2.1) = 4.41. ¿Cuál es la estimación de <span class="math">lím<sub>x→2</sub> f(x)</span>?', opciones: ['3.9', '2', 'No existe', '4'], correcta: 3, pasos: ['Por la izquierda los valores se acercan a 4: 3.61, 3.9601...', 'Por la derecha también: 4.41, 4.0401...', 'Ambos lados coinciden, así que el límite estimado es 4 (f(x) = x²).'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→1</sub> (x³ − 1)/(x − 1)</span>.', r: 3, tol: 0.01, pasos: ['Factoriza: <span class="math">x³ − 1 = (x − 1)(x² + x + 1)</span>.', 'Para x ≠ 1 el cociente es x² + x + 1.', 'Cuando x → 1: 1 + 1 + 1 = 3.'] },
      { tipo: 'par', q: 'La gráfica de <span class="math">f(x) = (x² − 4)/(x − 2)</span> tiene un hueco. Escribe sus coordenadas (x, y).', r: [2, 4], tol: 0.01, pasos: ['f no está definida en x = 2: ahí está el hueco.', 'Para x ≠ 2: f(x) = x + 2.', 'Cuando x → 2, f(x) → 4. El hueco está en (2, 4).'] }
    ]
  };

  T['1.2'] = {
    id: '1.2',
    unidad: 1,
    titulo: 'Límites laterales',
    resumen: 'Aprenderás a calcular límites por la izquierda y por la derecha y a usarlos para decidir si un límite existe.',
    objetivos: [
      'Definir e interpretar los límites laterales <span class="math">lím<sub>x→a<sup>−</sup></sub> f(x)</span> y <span class="math">lím<sub>x→a<sup>+</sup></sub> f(x)</span>.',
      'Aplicar el teorema: el límite existe si y solo si los dos laterales existen y son iguales.',
      'Calcular límites laterales de funciones por partes, con valor absoluto y con parte entera.',
      'Determinar parámetros que hacen que el límite de una función por partes exista.'
    ],
    teoria: [
      { titulo: 'Acercarse por un solo lado', html: '<p>En 1.1 vimos que x puede acercarse a a desde dos lados. A veces solo uno de los dos lados tiene sentido (por ejemplo en el borde del dominio) o las dos aproximaciones dan resultados distintos. Por eso definimos:</p><ul><li><strong>Límite por la izquierda:</strong> <span class="math">lím<sub>x→a<sup>−</sup></sub> f(x) = L</span> cuando f(x) se acerca a L con x < a.</li><li><strong>Límite por la derecha:</strong> <span class="math">lím<sub>x→a<sup>+</sup></sub> f(x) = R</span> cuando f(x) se acerca a R con x > a.</li></ul><p>Cuidado con la notación: <span class="math">2<sup>−</sup></span> <em>no</em> es el número −2; el signo es una "etiqueta" que indica de qué lado nos acercamos al 2.</p>' },
      { titulo: 'Teorema de existencia', html: '<p><strong>Teorema.</strong> <span class="math">lím<sub>x→a</sub> f(x) = L</span> si y solo si <span class="math">lím<sub>x→a<sup>−</sup></sub> f(x) = L</span> y <span class="math">lím<sub>x→a<sup>+</sup></sub> f(x) = L</span>.</p><p>Consecuencias prácticas:</p><ul><li>Si los laterales existen y son distintos, el límite <strong>no existe</strong> (hay un salto).</li><li>Si uno de los laterales no existe (o es infinito), el límite no existe.</li><li>Si ambos existen y son iguales, ese valor común es el límite, sin importar el valor f(a).</li></ul>' },
      { titulo: 'Funciones por partes', html: '<p>Una función por partes tiene reglas distintas en intervalos distintos, por ejemplo</p><p><span class="math">f(x) = x + 1 si x < 2; 5 − x si x ≥ 2</span>.</p><p>Regla de oro: para <span class="math">x→a<sup>−</sup></span> usa la fórmula que vale <em>a la izquierda</em> de a (donde x < a); para <span class="math">x→a<sup>+</sup></span> usa la que vale a la derecha. Así, <span class="math">lím<sub>x→2<sup>−</sup></sub> f(x) = 2 + 1 = 3</span> y <span class="math">lím<sub>x→2<sup>+</sup></sub> f(x) = 5 − 2 = 3</span>. Como coinciden, <span class="math">lím<sub>x→2</sub> f(x) = 3</span>.</p><p>El valor f(2) (aquí 3) pertenece a la regla con "≥", pero el límite no lo necesita.</p>' },
      { titulo: 'Valor absoluto', html: '<p>El valor absoluto es una función por partes: <span class="math">|u| = u si u ≥ 0; −u si u < 0</span>. Para límites con <span class="math">|x − a|</span>:</p><ul><li>si x > a, <span class="math">|x − a| = x − a</span> (el cociente <span class="math">|x − a|/(x − a)</span> vale 1);</li><li>si x < a, <span class="math">|x − a| = −(x − a)</span> (el cociente vale −1).</li></ul><p>Por eso <span class="math">|x − a|/(x − a)</span> siempre tiene un salto de −1 a 1 en x = a y su límite en a no existe.</p>' },
      { titulo: 'Parte entera y funciones escalonadas', html: '<p>La función <strong>parte entera</strong> <span class="math">⌊x⌋</span> es el mayor entero menor o igual que x: ⌊2.7⌋ = 2, ⌊−1.2⌋ = −2, ⌊3⌋ = 3. La función <strong>techo</strong> <span class="math">⌈x⌉</span> es el menor entero mayor o igual que x: ⌈2.1⌉ = 3, ⌈3⌉ = 3.</p><p>En cada entero n, <span class="math">lím<sub>x→n<sup>−</sup></sub> ⌊x⌋ = n − 1</span> y <span class="math">lím<sub>x→n<sup>+</sup></sub> ⌊x⌋ = n</span>: la gráfica "salta" 1 unidad. Muchas tarifas (parqueo, taxi, envíos) se modelan así.</p>' },
      { titulo: 'Procedimiento para decidir si el límite existe', html: '<ol><li>Identifica si la expresión cambia de regla en x = a (por partes, valor absoluto, parte entera).</li><li>Calcula el límite lateral izquierdo con la regla de la izquierda.</li><li>Calcula el límite lateral derecho con la regla de la derecha.</li><li>Compara: iguales → el límite existe y vale ese número; distintos → no existe.</li><li>Si hay forma indeterminada <span class="math">0/0</span> en algún lado, simplifica antes (tema 1.3).</li></ol>' },
      { titulo: 'Laterales infinitos y bordes del dominio', html: '<p>Para <span class="math">f(x) = 1/x</span>: si x → 0⁺, f(x) crece sin cota (<span class="math">lím<sub>x→0<sup>+</sup></sub> 1/x = ∞</span>); si x → 0⁻, f(x) decrece sin cota (<span class="math">lím<sub>x→0<sup>−</sup></sub> 1/x = −∞</span>). Los laterales son infinitos y distintos, por lo que el límite no existe. (En el tema 1.4 se estudian las asíntotas verticales).</p><p>En el borde de un dominio solo hay un lado: <span class="math">f(x) = √x</span> está definida solo para x ≥ 0, así que en a = 0 únicamente existe el límite por la derecha: <span class="math">lím<sub>x→0<sup>+</sup></sub> √x = 0</span>.</p>' },
      { titulo: 'Conexión con la continuidad', html: '<p>Una función es continua en a cuando <span class="math">lím<sub>x→a<sup>−</sup></sub> f(x) = lím<sub>x→a<sup>+</sup></sub> f(x) = f(a)</span>. Un salto es precisamente un desacuerdo entre los laterales; en el tema 1.5 clasificaremos las discontinuidades con esta herramienta, y en la unidad 3 veremos que una función con salto o pico no tiene derivada ahí.</p>' }
    ],
    formulas: [
      { label: 'Límite por la izquierda', html: '<span class="math">lím<sub>x→a<sup>−</sup></sub> f(x)</span> (usa x < a)' },
      { label: 'Límite por la derecha', html: '<span class="math">lím<sub>x→a<sup>+</sup></sub> f(x)</span> (usa x > a)' },
      { label: 'Teorema de existencia', html: '<span class="math">lím<sub>x→a</sub> f(x) = L ⇔ lím<sub>x→a<sup>−</sup></sub> f(x) = lím<sub>x→a<sup>+</sup></sub> f(x) = L</span>' },
      { label: 'Valor absoluto', html: '<span class="math">|x − a|/(x − a) = 1 si x > a; −1 si x < a</span>' },
      { label: 'Parte entera en un entero n', html: '<span class="math">lím<sub>x→n<sup>−</sup></sub> ⌊x⌋ = n − 1</span> y <span class="math">lím<sub>x→n<sup>+</sup></sub> ⌊x⌋ = n</span>' },
      { label: 'Salto de una función', html: '<span class="math">salto = lím<sub>x→a<sup>+</sup></sub> f(x) − lím<sub>x→a<sup>−</sup></sub> f(x)</span>' }
    ],
    ejemplos: [
      { titulo: 'Laterales que coinciden',
        enunciado: 'Sea <span class="math">f(x) = x + 1</span> si x < 2 y <span class="math">f(x) = 5 − x</span> si x ≥ 2. Calcula <span class="math">lím<sub>x→2</sub> f(x)</span>.',
        pasos: ['Izquierda (x < 2): <span class="math">lím<sub>x→2<sup>−</sup></sub> (x + 1) = 3</span>.', 'Derecha (x > 2): <span class="math">lím<sub>x→2<sup>+</sup></sub> (5 − x) = 3</span>.', 'Los laterales son iguales a 3.'],
        respuesta: '<span class="math">lím<sub>x→2</sub> f(x) = 3</span>' },
      { titulo: 'Laterales distintos: salto',
        enunciado: 'Sea <span class="math">g(x) = x²</span> si x < 1 y <span class="math">g(x) = 3 − x</span> si x ≥ 1. Estudia <span class="math">lím<sub>x→1</sub> g(x)</span>.',
        pasos: ['Izquierda: <span class="math">lím<sub>x→1<sup>−</sup></sub> x² = 1</span>.', 'Derecha: <span class="math">lím<sub>x→1<sup>+</sup></sub> (3 − x) = 2</span>.', '1 ≠ 2, luego hay un salto de 1 unidad.', 'Observa que g(1) = 2, pero eso no cambia la conclusión.'],
        respuesta: 'El límite no existe (izquierda 1, derecha 2).' },
      { titulo: 'Valor absoluto',
        enunciado: 'Calcula los laterales de <span class="math">|x − 3|/(x − 3)</span> en x = 3.',
        pasos: ['Si x → 3⁺, x − 3 > 0, entonces |x − 3| = x − 3 y el cociente vale 1.', 'Si x → 3⁻, x − 3 < 0, entonces |x − 3| = −(x − 3) y el cociente vale −1.', 'Los laterales son 1 y −1.'],
        respuesta: '<span class="math">lím<sub>x→3<sup>+</sup></sub> = 1</span>, <span class="math">lím<sub>x→3<sup>−</sup></sub> = −1</span>; el límite no existe.' },
      { titulo: 'Tarifa de parqueo',
        enunciado: 'Un parqueo cobra $1.50 por hora o fracción: <span class="math">C(t) = 1.5⌈t⌉</span> dólares para t horas. Halla los laterales de C en t = 2 e interpreta.',
        pasos: ['Si t se acerca a 2 por la izquierda (por ejemplo 1.99 h), ⌈t⌉ = 2, así que C = 3.00.', 'Si t se acerca a 2 por la derecha (por ejemplo 2.01 h), ⌈t⌉ = 3, así que C = 4.50.', 'Los laterales son 3 y 4.5; difieren en 1.50.'],
        respuesta: '<span class="math">lím<sub>t→2<sup>−</sup></sub> C = 3</span>, <span class="math">lím<sub>t→2<sup>+</sup></sub> C = 4.5</span>. El límite no existe: el cobro "salta" $1.50 al pasar de 2 horas.' },
      { titulo: 'Hallar un parámetro',
        enunciado: 'Halla k para que exista <span class="math">lím<sub>x→2</sub> f(x)</span>, con <span class="math">f(x) = kx + 1</span> si x < 2 y <span class="math">f(x) = x² − k</span> si x ≥ 2. ¿Cuánto vale el límite?',
        pasos: ['Izquierda: <span class="math">lím<sub>x→2<sup>−</sup></sub> (kx + 1) = 2k + 1</span>.', 'Derecha: <span class="math">lím<sub>x→2<sup>+</sup></sub> (x² − k) = 4 − k</span>.', 'Igualamos: <span class="math">2k + 1 = 4 − k</span>, de donde <span class="math">3k = 3</span> y <span class="math">k = 1</span>.', 'Valor del límite: 2(1) + 1 = 3 (y 4 − 1 = 3).'],
        respuesta: 'k = 1 y el límite vale 3.' },
      { titulo: 'Laterales infinitos',
        enunciado: 'Estudia <span class="math">lím<sub>x→1</sub> 1/(x − 1)</span> por la izquierda y por la derecha.',
        pasos: ['Derecha: x = 1.1 → 10; x = 1.01 → 100; x = 1.001 → 1000. Crece sin cota: <span class="math">lím<sub>x→1<sup>+</sup></sub> 1/(x − 1) = ∞</span>.', 'Izquierda: x = 0.9 → −10; x = 0.99 → −100; x = 0.999 → −1000. Decrece sin cota: <span class="math">lím<sub>x→1<sup>−</sup></sub> 1/(x − 1) = −∞</span>.', 'Los laterales no son números y son opuestos: el límite no existe.'],
        respuesta: 'Laterales: ∞ por la derecha, −∞ por la izquierda; el límite no existe.' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Sea <span class="math">f(x) = 2x + 1</span> si x < 1 y <span class="math">f(x) = x + 2</span> si x ≥ 1. Calcula <span class="math">lím<sub>x→1</sub> f(x)</span>.',
        pasos: ['Izquierda: 2(1) + 1 = 3.', 'Derecha: 1 + 2 = 3.', 'Los laterales coinciden.'], respuesta: '3' },
      { nivel: 'facil', enunciado: 'Calcula <span class="math">lím<sub>x→0<sup>−</sup></sub> |x|/x</span> y <span class="math">lím<sub>x→0<sup>+</sup></sub> |x|/x</span>.',
        pasos: ['Si x < 0, |x| = −x y el cociente es −1.', 'Si x > 0, |x| = x y el cociente es 1.'], respuesta: 'Izquierda −1, derecha 1 (el límite bilateral no existe).' },
      { nivel: 'facil', enunciado: 'Una tabla de f da: f(1.9) = 2.9, f(1.99) = 2.99, f(2.01) = 5.01, f(2.1) = 5.1. Estima los laterales en x = 2 y decide si el límite existe.',
        pasos: ['Por la izquierda los valores se acercan a 3.', 'Por la derecha se acercan a 5.', '3 ≠ 5.'], respuesta: 'Izquierda 3, derecha 5; el límite no existe.' },
      { nivel: 'facil', enunciado: 'Calcula <span class="math">lím<sub>x→3<sup>−</sup></sub> (x² − 2)</span> y <span class="math">lím<sub>x→3<sup>+</sup></sub> (x² − 2)</span>.',
        pasos: ['La función es polinomial: ambos laterales se obtienen evaluando.', '3² − 2 = 7.'], respuesta: 'Ambos valen 7; <span class="math">lím<sub>x→3</sub> (x² − 2) = 7</span>.' },
      { nivel: 'intermedio', enunciado: 'Sea <span class="math">f(x) = x²</span> si x ≤ 2 y <span class="math">f(x) = 8 − 2x</span> si x > 2. ¿Existe <span class="math">lím<sub>x→2</sub> f(x)</span>?',
        pasos: ['Izquierda: <span class="math">lím<sub>x→2<sup>−</sup></sub> x² = 4</span>.', 'Derecha: <span class="math">lím<sub>x→2<sup>+</sup></sub> (8 − 2x) = 8 − 4 = 4</span>.', 'Coinciden.'], respuesta: 'Sí existe y vale 4.' },
      { nivel: 'intermedio', enunciado: 'Sea <span class="math">f(x) = 2x − 3</span> si x < 3 y <span class="math">f(x) = 10 − x²</span> si x ≥ 3. ¿Existe <span class="math">lím<sub>x→3</sub> f(x)</span>?',
        pasos: ['Izquierda: 2(3) − 3 = 3.', 'Derecha: 10 − 9 = 1.', '3 ≠ 1.'], respuesta: 'No existe (izquierda 3, derecha 1).' },
      { nivel: 'intermedio', enunciado: 'Calcula <span class="math">lím<sub>x→3<sup>−</sup></sub> ⌊x⌋</span> y <span class="math">lím<sub>x→3<sup>+</sup></sub> ⌊x⌋</span> (⌊x⌋ es la parte entera).',
        pasos: ['Si x = 2.99, ⌊x⌋ = 2.', 'Si x = 3.01, ⌊x⌋ = 3.'], respuesta: 'Izquierda 2, derecha 3; el límite no existe.' },
      { nivel: 'intermedio', enunciado: 'Analiza <span class="math">lím<sub>x→5<sup>+</sup></sub> √(x − 5)</span>, <span class="math">lím<sub>x→5<sup>−</sup></sub> √(x − 5)</span> y <span class="math">lím<sub>x→5</sub> √(x − 5)</span>.',
        pasos: ['Para x > 5, x − 5 > 0 y √(x − 5) → 0.', 'Para x < 5, x − 5 < 0 y la raíz no es real: no hay valores a la izquierda.', 'Sin lateral izquierdo, el límite bilateral no está definido.'], respuesta: 'Derecha: 0. Izquierda: no definido. El límite bilateral no existe.' },
      { nivel: 'dificil', enunciado: 'Halla k para que exista <span class="math">lím<sub>x→1</sub> f(x)</span> si <span class="math">f(x) = 3x + k</span> para x < 1 y <span class="math">f(x) = x² + 2k</span> para x ≥ 1. Da también el valor del límite.',
        pasos: ['Izquierda: 3(1) + k = 3 + k.', 'Derecha: 1 + 2k.', 'Igualamos: 3 + k = 1 + 2k, de donde k = 2.', 'Límite: 3 + 2 = 5 (y 1 + 4 = 5).'], respuesta: 'k = 2; el límite vale 5.' },
      { nivel: 'dificil', enunciado: 'Calcula <span class="math">lím<sub>x→2<sup>+</sup></sub> (x² − 4)/|x − 2|</span> y <span class="math">lím<sub>x→2<sup>−</sup></sub> (x² − 4)/|x − 2|</span>. ¿Existe el límite en 2?',
        pasos: ['Factoriza: <span class="math">x² − 4 = (x − 2)(x + 2)</span>.', 'Si x > 2: |x − 2| = x − 2, el cociente es x + 2 → 4.', 'Si x < 2: |x − 2| = −(x − 2), el cociente es −(x + 2) → −4.', '4 ≠ −4.'], respuesta: 'Derecha 4, izquierda −4; el límite no existe.' },
      { nivel: 'dificil', enunciado: 'El costo en dólares de producir q piezas es <span class="math">C(q) = 2q</span> si 0 ≤ q ≤ 100 y <span class="math">C(q) = 1.8q + 20</span> si q > 100. ¿Existe <span class="math">lím<sub>q→100</sub> C(q)</span>? Interpreta.',
        pasos: ['Izquierda: 2(100) = 200.', 'Derecha: 1.8(100) + 20 = 180 + 20 = 200.', 'Coinciden y además C(100) = 200.'], respuesta: 'Sí, vale 200 dólares: el costo no tiene saltos en q = 100 (solo cambia la pendiente).' }
    ],
    teoricas: [
      { q: '¿Qué indica el signo en <span class="math">x→2<sup>+</sup></span> y <span class="math">x→2<sup>−</sup></span>?', a: 'Indica el lado desde el que x se acerca a 2: el signo + significa valores mayores que 2 (por la derecha) y el signo − valores menores que 2 (por la izquierda). No significa 2 ni −2.' },
      { q: 'Enuncia el teorema que relaciona el límite con los límites laterales.', a: 'El límite de f en a existe y vale L si y solo si el límite por la izquierda y el límite por la derecha existen y ambos valen L.' },
      { q: '¿Pueden existir los dos límites laterales y aun así no existir el límite?', a: 'Sí, cuando son distintos. Por ejemplo, <span class="math">|x|/x</span> tiene laterales −1 y 1 en x = 0, y el límite no existe.' },
      { q: 'Si los dos laterales valen 4 pero f(a) = 7, ¿cuánto vale el límite?', a: 'Vale 4. Los laterales coinciden, y el límite no depende del valor en el punto. La gráfica tendrá un punto aislado en (a, 7).' },
      { q: '¿Por qué <span class="math">lím<sub>x→0</sub> √x</span> no se puede calcular como límite bilateral en los reales?', a: 'Porque √x no está definida para x < 0; no hay valores a la izquierda de 0. Solo tiene sentido el límite por la derecha, que es 0.' },
      { q: '¿Qué es un salto de una función y cómo se mide?', a: 'Es una discontinuidad donde los dos laterales existen pero son distintos. Su tamaño es la diferencia entre el lateral derecho y el izquierdo.' },
      { q: 'Al calcular <span class="math">lím<sub>x→a<sup>−</sup></sub></span> de una función por partes, ¿qué rama debes usar?', a: 'La rama que está definida para x menores que a (justo a la izquierda de a). Para el lateral derecho se usa la rama de los x mayores que a.' },
      { q: 'Si <span class="math">lím<sub>x→0<sup>+</sup></sub> f(x) = ∞</span> y <span class="math">lím<sub>x→0<sup>−</sup></sub> f(x) = −∞</span>, ¿existe el límite en 0?', a: 'No. Los laterales no son números reales y además son distintos. Gráficamente hay una asíntota vertical con ramas que se separan hacia arriba y hacia abajo.' }
    ],
    errores: [
      'Usar la rama equivocada. Para x → a⁻ hay que usar la fórmula válida con x < a; para x → a⁺, la de x > a. Subraya la desigualdad antes de sustituir.',
      'Creer que el límite bilateral es f(a). Los laterales deciden el límite; f(a) solo sirve para hablar de continuidad.',
      'Perder el signo con el valor absoluto. Si x < a, |x − a| = −(x − a): un menos que cambia el signo del resultado.',
      'Confundir <span class="math">2<sup>−</sup></span> con −2. El superíndice "−" indica el lado de aproximación, no el número.'
    ],
    aplicacion: {
      titulo: 'Descuento por volumen en una ferretería',
      html: '<p>Un depósito de materiales vende bolsas de cemento a $8 cada una. Si el cliente compra <strong>más de 50</strong> bolsas, el precio baja a $7 por bolsa, pero para <em>todas</em> las bolsas. El costo total es</p><p><span class="math">C(q) = 8q si q ≤ 50; 7q si q > 50</span>.</p><p>Laterales en q = 50: <span class="math">lím<sub>q→50<sup>−</sup></sub> C(q) = 8(50) = 400</span> y <span class="math">lím<sub>q→50<sup>+</sup></sub> C(q) = 7(50) = 350</span>. El límite no existe y el salto es 350 − 400 = −50 dólares.</p><p>Consecuencia práctica: C(50) = $400 pero C(51) = $357. ¡Comprar 51 bolsas cuesta menos que comprar 50! Un ingeniero residente que necesita 50 bolsas ahorra dinero comprando 51 y regalando la sobrante. Los saltos del costo detectados con límites laterales revelan decisiones de compra óptimas.</p>'
    },
    calc: 'limite-lateral',
    examen: [
      { tipo: 'num', q: 'Sea <span class="math">f(x) = 2x + 3</span> si x < 1 y <span class="math">f(x) = x² + 4</span> si x ≥ 1. Calcula <span class="math">lím<sub>x→1<sup>−</sup></sub> f(x)</span>.', r: 5, tol: 0.01, pasos: ['Para x < 1 se usa 2x + 3.', 'Evaluamos en 1: 2(1) + 3 = 5.', 'Nota: el lateral derecho también es 1 + 4 = 5, y el límite existe.'] },
      { tipo: 'num', q: 'Sea <span class="math">g(x) = 7 − x</span> si x ≤ 4 y <span class="math">g(x) = x² − 13</span> si x > 4. Calcula <span class="math">lím<sub>x→4<sup>+</sup></sub> g(x)</span>.', r: 3, tol: 0.01, pasos: ['Para x > 4 se usa x² − 13.', 'Evaluamos en 4: 16 − 13 = 3.', 'El lateral izquierdo es 7 − 4 = 3: el límite existe.'] },
      { tipo: 'opt', q: '¿Qué sucede con <span class="math">lím<sub>x→0</sub> |x|/x</span>?', opciones: ['No existe', '1', '−1', '0'], correcta: 0, pasos: ['Para x > 0 el cociente es 1.', 'Para x < 0 el cociente es −1.', 'Los laterales difieren, así que el límite no existe.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→2<sup>−</sup></sub> ⌊x⌋</span>, donde ⌊x⌋ es la parte entera (mayor entero menor o igual que x).', r: 1, tol: 0.01, pasos: ['Para x = 1.99, ⌊x⌋ = 1.', 'Para cualquier x en [1, 2), ⌊x⌋ = 1.', 'Por tanto el lateral izquierdo vale 1 (el derecho vale 2).'] },
      { tipo: 'num', q: 'Halla k para que exista <span class="math">lím<sub>x→3</sub> f(x)</span> con <span class="math">f(x) = kx + 2</span> si x < 3 y <span class="math">f(x) = x² − 1</span> si x ≥ 3.', r: 2, tol: 0.01, pasos: ['Izquierda: 3k + 2.', 'Derecha: 9 − 1 = 8.', 'Igualamos: 3k + 2 = 8, de donde k = 2.'] },
      { tipo: 'opt', q: 'Respecto a <span class="math">√(x − 5)</span> cerca de x = 5, ¿cuál afirmación es correcta?', opciones: ['Ambos laterales valen 0', 'El lateral derecho vale 0 y el izquierdo no está definido', 'El lateral izquierdo vale 0 y el derecho no está definido', 'Ambos laterales no existen'], correcta: 1, pasos: ['Para x > 5, x − 5 > 0 y la raíz tiende a 0.', 'Para x < 5 el radicando es negativo: no hay valores reales a la izquierda.', 'Solo existe el lateral derecho.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→2<sup>+</sup></sub> (x² − 4)/|x − 2|</span>.', r: 4, tol: 0.01, pasos: ['Para x > 2, |x − 2| = x − 2.', 'Factoriza: <span class="math">(x − 2)(x + 2)/(x − 2) = x + 2</span>.', 'Cuando x → 2⁺: 2 + 2 = 4.'] },
      { tipo: 'par', q: 'Para <span class="math">f(x) = x + 1</span> si x < 2 y <span class="math">f(x) = x + 3</span> si x > 2, escribe el par (lateral izquierdo, lateral derecho) en x = 2.', r: [3, 5], tol: 0.01, pasos: ['Izquierda: 2 + 1 = 3.', 'Derecha: 2 + 3 = 5.', 'El par es (3, 5): hay un salto de 2.'] },
      { tipo: 'opt', q: 'Una tabla da: f(0.9) = 1.8, f(0.99) = 1.98, f(1.01) = 3.02, f(1.1) = 3.2. ¿Cuál es la conclusión sobre <span class="math">lím<sub>x→1</sub> f(x)</span>?', opciones: ['Vale 2', 'Vale 3', 'Vale 2.5', 'No existe'], correcta: 3, pasos: ['Por la izquierda los valores se acercan a 2.', 'Por la derecha se acercan a 3.', 'Como 2 ≠ 3, el límite no existe.'] },
      { tipo: 'num', q: 'Un parqueo cobra $1.50 por hora o fracción: <span class="math">C(t) = 1.5⌈t⌉</span> (⌈t⌉ es el menor entero mayor o igual que t). Calcula <span class="math">lím<sub>t→3<sup>+</sup></sub> C(t)</span> en dólares.', r: 6, tol: 0.01, pasos: ['Para t un poco mayor que 3 (por ejemplo 3.01), ⌈t⌉ = 4.', 'C = 1.5 × 4 = 6.', 'El lateral izquierdo es 1.5 × 3 = 4.5: hay un salto de $1.50.'] }
    ]
  };

  T['1.3'] = {
    id: '1.3',
    unidad: 1,
    titulo: 'Cálculo de límites',
    resumen: 'Calcularás límites con propiedades, sustitución directa, factorización y racionalización para resolver formas <span class="math">0/0</span>.',
    objetivos: [
      'Aplicar las propiedades de los límites (suma, producto, cociente, potencia, raíz).',
      'Calcular límites por sustitución directa cuando la función lo permite.',
      'Resolver indeterminaciones <span class="math">0/0</span> mediante factorización, racionalización y fracciones complejas.',
      'Decidir qué técnica usar según la forma de la expresión y reconocer cuando el límite no existe.'
    ],
    teoria: [
      { titulo: 'Propiedades de los límites', html: '<p>Si <span class="math">lím<sub>x→a</sub> f(x) = L</span> y <span class="math">lím<sub>x→a</sub> g(x) = M</span> existen (son números reales) y c es una constante, entonces:</p><ul><li>Suma y resta: <span class="math">lím (f ± g) = L ± M</span>.</li><li>Constante por función: <span class="math">lím c·f(x) = c·L</span>.</li><li>Producto: <span class="math">lím f(x)·g(x) = L·M</span>.</li><li>Cociente: <span class="math">lím f(x)/g(x) = L/M</span> si M ≠ 0.</li><li>Potencia: <span class="math">lím [f(x)]ⁿ = Lⁿ</span>.</li><li>Raíz: <span class="math">lím ⁿ√f(x) = ⁿ√L</span> (si L ≥ 0 cuando n es par).</li></ul><p>Estas reglas permiten "romper" un límite complicado en límites sencillos. Se prueban con la definición ε-δ; aquí las usaremos como herramienta.</p>' },
      { titulo: 'Sustitución directa', html: '<p>Para polinomios, funciones racionales (donde el denominador no se anula), raíces, y en general combinaciones de funciones continuas, basta <strong>sustituir x = a</strong>:</p><p><span class="math">lím<sub>x→a</sub> f(x) = f(a)</span>.</p><p>Ejemplo: <span class="math">lím<sub>x→2</sub> (3x² − x + 4) = 3(4) − 2 + 4 = 14</span>. Es siempre el primer paso: sustituye y mira qué sale.</p><p>Tres resultados posibles: (1) un número: ese es el límite; (2) <span class="math">k/0</span> con k ≠ 0: no hay límite finito (revisa laterales y asíntotas, tema 1.4); (3) <strong><span class="math">0/0</span></strong>: forma indeterminada, hay que trabajar la expresión.</p>' },
      { titulo: 'Forma indeterminada <span class="math">0/0</span>', html: '<p>Si al sustituir queda <span class="math">0/0</span>, no se puede concluir nada todavía: el límite puede ser cualquier número, o no existir. Ejemplos: <span class="math">(x² − 9)/(x − 3)</span> tiende a 6, <span class="math">x/x²</span> no tiene límite finito en 0.</p><p>La idea: el numerador y el denominador comparten un factor (x − a) que vale 0 en x = a. Si lo <strong>cancelamos</strong> (podemos, porque x ≠ a en el límite), el problema desaparece. Los métodos para lograrlo son factorizar, racionalizar y combinar fracciones.</p>' },
      { titulo: 'Método 1: factorización', html: '<p>Factoriza numerador y denominador para extraer (x − a), cancela y sustituye. Fórmulas útiles:</p><ul><li>Trinomio: <span class="math">x² + (p + q)x + pq = (x + p)(x + q)</span>; en general usa fórmula cuadrática o agrupación.</li><li>Diferencia de cuadrados: <span class="math">x² − a² = (x − a)(x + a)</span>.</li><li>Diferencia de cubos: <span class="math">x³ − a³ = (x − a)(x² + ax + a²)</span>.</li><li>Suma de cubos: <span class="math">x³ + a³ = (x + a)(x² − ax + a²)</span>.</li><li>Factor común y división sintética (Ruffini) para grados mayores.</li></ul><p>Ejemplo: <span class="math">lím<sub>x→2</sub> (x² − 5x + 6)/(x − 2) = lím (x − 2)(x − 3)/(x − 2) = lím (x − 3) = −1</span>.</p>' },
      { titulo: 'Método 2: racionalización', html: '<p>Cuando hay raíces, multiplica numerador y denominador por el <strong>conjugado</strong> de la expresión con raíz. Recuerda: <span class="math">(A − B)(A + B) = A² − B²</span>, que elimina la raíz.</p><p>Ejemplo: <span class="math">lím<sub>x→4</sub> (√(x + 5) − 3)/(x − 4)</span>. Multiplica por <span class="math">(√(x + 5) + 3)</span>:</p><p><span class="math">((x + 5) − 9)/((x − 4)(√(x + 5) + 3)) = (x − 4)/((x − 4)(√(x + 5) + 3)) = 1/(√(x + 5) + 3)</span>,</p><p>que tiende a <span class="math">1/6</span>. Si la raíz está en el denominador, multiplica por su conjugado de la misma manera.</p>' },
      { titulo: 'Método 3: fracciones complejas', html: '<p>Si el numerador (o denominador) contiene fracciones, combínalas con un denominador común y simplifica.</p><p>Ejemplo: <span class="math">lím<sub>x→3</sub> (1/x − 1/3)/(x − 3)</span>. El numerador es <span class="math">(3 − x)/(3x)</span>, que es <span class="math">−(x − 3)/(3x)</span>. Entonces el cociente es <span class="math">−1/(3x)</span>, que tiende a <span class="math">−1/9</span>.</p><p>Este tipo de cálculo aparecerá al derivar funciones como 1/x con la definición (tema 1.10).</p>' },
      { titulo: 'Método 4: cambio de variable', html: '<p>Para raíces de índice mayor que 2 o expresiones con potencias fraccionarias, sustituye una nueva variable que las vuelva polinomios. Ejemplo: <span class="math">lím<sub>x→1</sub> (∛x − 1)/(x − 1)</span>. Con <span class="math">u = ∛x</span> tenemos <span class="math">x = u³</span> y <span class="math">x → 1 ⇒ u → 1</span>:</p><p><span class="math">(u − 1)/(u³ − 1) = (u − 1)/((u − 1)(u² + u + 1)) = 1/(u² + u + 1) → 1/3</span>.</p>' },
      { titulo: 'Cuando no es <span class="math">0/0</span> y estrategia general', html: '<p><strong>Denominador 0 y numerador distinto de 0.</strong> Si f(x) = P(x)/Q(x) con Q(a) = 0 y P(a) ≠ 0, el límite no es finito: investiga los laterales (tema 1.2); suelen ser ∞ o −∞ (asíntota vertical).</p><p><strong>Estrategia:</strong> (1) sustituye; (2) si <span class="math">0/0</span>, elige: polinomios → factoriza; raíz cuadrada → conjugado; fracciones dentro → denominador común; raíz cúbica o mayor → cambio de variable; (3) simplifica, cancela y sustituye otra vez; (4) comprueba con una tabla (tema 1.1).</p>' }
    ],
    formulas: [
      { label: 'Suma, producto y cociente', html: '<span class="math">lím (f ± g) = L ± M,  lím f·g = L·M,  lím f/g = L/M (M ≠ 0)</span>' },
      { label: 'Potencia y raíz', html: '<span class="math">lím [f(x)]ⁿ = Lⁿ,  lím ⁿ√f(x) = ⁿ√L</span>' },
      { label: 'Sustitución directa', html: '<span class="math">lím<sub>x→a</sub> f(x) = f(a)</span> si f es polinomio o racional con denominador ≠ 0' },
      { label: 'Diferencia de cuadrados', html: '<span class="math">x² − a² = (x − a)(x + a)</span>' },
      { label: 'Diferencia de cubos', html: '<span class="math">x³ − a³ = (x − a)(x² + ax + a²)</span>' },
      { label: 'Conjugado', html: '<span class="math">(√A − √B)(√A + √B) = A − B</span>' },
      { label: 'Forma <span class="math">0/0</span>', html: 'Factoriza, racionaliza o combina fracciones, cancela (x − a) y sustituye' }
    ],
    ejemplos: [
      { titulo: 'Sustitución directa',
        enunciado: 'Calcula <span class="math">lím<sub>x→2</sub> (3x² − x + 4)</span>.',
        pasos: ['Es un polinomio: se puede sustituir.', '3(2)² − 2 + 4 = 12 − 2 + 4 = 14.'],
        respuesta: '14' },
      { titulo: 'Factorización simple',
        enunciado: 'Calcula <span class="math">lím<sub>x→2</sub> (x² − 5x + 6)/(x − 2)</span>.',
        pasos: ['Sustituyendo: (4 − 10 + 6)/0 = <span class="math">0/0</span>, indeterminado.', 'Factoriza el numerador: <span class="math">x² − 5x + 6 = (x − 2)(x − 3)</span>.', 'Cancela (x − 2): queda <span class="math">x − 3</span>.', 'Sustituye: 2 − 3 = −1.'],
        respuesta: '−1' },
      { titulo: 'Diferencia de cubos en un tanque',
        enunciado: 'El volumen de un tanque cúbico de arista x metros es <span class="math">V = x³</span>. Calcula la razón de cambio promedio cerca de x = 3: <span class="math">lím<sub>x→3</sub> (x³ − 27)/(x − 3)</span>, en m³ por metro de arista.',
        pasos: ['Sustituir da <span class="math">0/0</span>.', 'Diferencia de cubos: <span class="math">x³ − 27 = (x − 3)(x² + 3x + 9)</span>.', 'Cancela (x − 3): queda <span class="math">x² + 3x + 9</span>.', 'En x = 3: 9 + 9 + 9 = 27.'],
        respuesta: '27 m³ por metro: al aumentar un poco la arista cerca de 3 m, el volumen crece unos 27 m³ por cada metro de arista.' },
      { titulo: 'Racionalización',
        enunciado: 'Calcula <span class="math">lím<sub>x→4</sub> (√(x + 5) − 3)/(x − 4)</span>.',
        pasos: ['Sustituir: (3 − 3)/0 = <span class="math">0/0</span>.', 'Multiplica numerador y denominador por el conjugado <span class="math">√(x + 5) + 3</span>.', 'Numerador: <span class="math">(x + 5) − 9 = x − 4</span>.', 'Queda <span class="math">(x − 4)/((x − 4)(√(x + 5) + 3)) = 1/(√(x + 5) + 3)</span>.', 'Sustituye x = 4: <span class="math">1/(3 + 3) = 1/6</span>.'],
        respuesta: '<span class="math">1/6</span>' },
      { titulo: 'Fracción compleja',
        enunciado: 'Calcula <span class="math">lím<sub>x→3</sub> (1/x − 1/3)/(x − 3)</span>.',
        pasos: ['Sustituir da <span class="math">0/0</span>.', 'Denominador común en el numerador: <span class="math">1/x − 1/3 = (3 − x)/(3x) = −(x − 3)/(3x)</span>.', 'El cociente es <span class="math">−(x − 3)/(3x(x − 3)) = −1/(3x)</span>.', 'Sustituye x = 3: <span class="math">−1/9</span>.'],
        respuesta: '<span class="math">−1/9</span>' },
      { titulo: 'Cambio de variable',
        enunciado: 'Calcula <span class="math">lím<sub>x→1</sub> (∛x − 1)/(x − 1)</span>.',
        pasos: ['Sea <span class="math">u = ∛x</span>; entonces <span class="math">x = u³</span> y cuando x → 1, u → 1.', 'El límite se convierte en <span class="math">lím<sub>u→1</sub> (u − 1)/(u³ − 1)</span>.', 'Diferencia de cubos: <span class="math">u³ − 1 = (u − 1)(u² + u + 1)</span>.', 'Cancela (u − 1): queda <span class="math">1/(u² + u + 1)</span>.', 'En u = 1: <span class="math">1/3</span>.'],
        respuesta: '<span class="math">1/3</span>' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Calcula <span class="math">lím<sub>x→−1</sub> (x³ + 2x − 5)</span>.',
        pasos: ['Es un polinomio: sustituimos.', '(−1)³ + 2(−1) − 5 = −1 − 2 − 5 = −8.'], respuesta: '−8' },
      { nivel: 'facil', enunciado: 'Calcula <span class="math">lím<sub>x→4</sub> √(2x + 1)</span>.',
        pasos: ['La raíz es continua en x = 4 (radicando positivo).', '√(2·4 + 1) = √9 = 3.'], respuesta: '3' },
      { nivel: 'facil', enunciado: 'Calcula <span class="math">lím<sub>x→−3</sub> (x² − 9)/(x + 3)</span>.',
        pasos: ['Sustituir da <span class="math">0/0</span>.', 'Factoriza: <span class="math">x² − 9 = (x − 3)(x + 3)</span>.', 'Cancela (x + 3): queda x − 3.', 'En x = −3: −6.'], respuesta: '−6' },
      { nivel: 'facil', enunciado: 'Calcula <span class="math">lím<sub>x→2</sub> (x² + 1)/(x + 3)</span>.',
        pasos: ['El denominador en x = 2 vale 5 (no es 0).', 'Sustituye: <span class="math">(4 + 1)/(2 + 3) = 5/5 = 1</span>.'], respuesta: '1' },
      { nivel: 'intermedio', enunciado: 'Calcula <span class="math">lím<sub>x→4</sub> (x² − x − 12)/(x − 4)</span>.',
        pasos: ['Sustituir da <span class="math">0/0</span>.', 'Factoriza: <span class="math">x² − x − 12 = (x − 4)(x + 3)</span>.', 'Cancela (x − 4): queda x + 3.', 'En x = 4: 7.'], respuesta: '7' },
      { nivel: 'intermedio', enunciado: 'Calcula <span class="math">lím<sub>x→3</sub> (2x² − 5x − 3)/(x − 3)</span>.',
        pasos: ['Sustituir: (18 − 15 − 3)/0 = <span class="math">0/0</span>.', 'Factoriza: <span class="math">2x² − 5x − 3 = (2x + 1)(x − 3)</span>.', 'Cancela (x − 3): queda 2x + 1.', 'En x = 3: 7.'], respuesta: '7' },
      { nivel: 'intermedio', enunciado: 'Calcula <span class="math">lím<sub>x→3</sub> (√(x + 1) − 2)/(x − 3)</span>.',
        pasos: ['Sustituir da <span class="math">0/0</span>.', 'Multiplica por el conjugado <span class="math">√(x + 1) + 2</span>.', 'Numerador: <span class="math">(x + 1) − 4 = x − 3</span>.', 'Queda <span class="math">1/(√(x + 1) + 2)</span>.', 'En x = 3: <span class="math">1/(2 + 2) = 1/4</span>.'], respuesta: '<span class="math">1/4</span>' },
      { nivel: 'intermedio', enunciado: 'Calcula <span class="math">lím<sub>x→−2</sub> (x³ + 8)/(x + 2)</span>.',
        pasos: ['Sustituir da <span class="math">0/0</span>.', 'Suma de cubos: <span class="math">x³ + 8 = (x + 2)(x² − 2x + 4)</span>.', 'Cancela (x + 2): queda <span class="math">x² − 2x + 4</span>.', 'En x = −2: 4 + 4 + 4 = 12.'], respuesta: '12' },
      { nivel: 'dificil', enunciado: 'Calcula <span class="math">lím<sub>x→0</sub> (√(1 + x) − √(1 − x))/x</span>.',
        pasos: ['Sustituir da <span class="math">0/0</span>.', 'Multiplica por el conjugado <span class="math">√(1 + x) + √(1 − x)</span>.', 'Numerador: <span class="math">(1 + x) − (1 − x) = 2x</span>.', 'Queda <span class="math">2x/(x(√(1 + x) + √(1 − x))) = 2/(√(1 + x) + √(1 − x))</span>.', 'En x = 0: <span class="math">2/(1 + 1) = 1</span>.'], respuesta: '1' },
      { nivel: 'dificil', enunciado: 'Calcula <span class="math">lím<sub>x→2</sub> (1/(x + 2) − 1/4)/(x − 2)</span>.',
        pasos: ['Sustituir da <span class="math">0/0</span>.', 'Numerador con denominador común: <span class="math">(4 − (x + 2))/(4(x + 2)) = (2 − x)/(4(x + 2)) = −(x − 2)/(4(x + 2))</span>.', 'El cociente es <span class="math">−1/(4(x + 2))</span> (tras cancelar x − 2).', 'En x = 2: <span class="math">−1/(4·4) = −1/16</span>.'], respuesta: '<span class="math">−1/16</span>' },
      { nivel: 'dificil', enunciado: 'Calcula <span class="math">lím<sub>x→2</sub> (x⁴ − 16)/(x² − x − 2)</span>.',
        pasos: ['Sustituir: (16 − 16)/(4 − 2 − 2) = <span class="math">0/0</span>.', 'Numerador: <span class="math">x⁴ − 16 = (x² − 4)(x² + 4) = (x − 2)(x + 2)(x² + 4)</span>.', 'Denominador: <span class="math">x² − x − 2 = (x − 2)(x + 1)</span>.', 'Cancela (x − 2): queda <span class="math">(x + 2)(x² + 4)/(x + 1)</span>.', 'En x = 2: <span class="math">(4)(8)/3 = 32/3</span>.'], respuesta: '<span class="math">32/3</span> ≈ 10.67' }
    ],
    teoricas: [
      { q: '¿Qué es una forma indeterminada y por qué <span class="math">0/0</span> lo es?', a: 'Es una expresión cuyo valor no queda determinado por los límites de sus partes. En <span class="math">0/0</span> el numerador y el denominador tienden a 0 a distintas "velocidades", así que el cociente puede tender a cualquier número (por ejemplo, <span class="math">x/x → 1</span>, <span class="math">2x/x → 2</span>) o a ningún número.' },
      { q: '¿Por qué se puede cancelar el factor (x − a) en un límite cuando x → a?', a: 'Porque en un límite x es distinto de a, de modo que x − a ≠ 0 y la cancelación es válida. Las dos funciones (antes y después de cancelar) coinciden para x ≠ a y por tanto tienen el mismo límite.' },
      { q: '¿Un límite <span class="math">0/0</span> siempre da un número?', a: 'No. Ejemplo: <span class="math">lím<sub>x→0</sub> x/x²</span> es <span class="math">0/0</span> pero equivale a <span class="math">1/x</span>, que no tiene límite finito. Por eso hay que simplificar y volver a evaluar.' },
      { q: '¿Cuándo conviene racionalizar?', a: 'Cuando la expresión tiene raíces cuadradas que producen <span class="math">0/0</span> al sustituir, normalmente de la forma <span class="math">√A − B</span> o <span class="math">√A − √B</span>. El conjugado convierte la resta en diferencia de cuadrados y revela el factor común.' },
      { q: 'Si al sustituir resulta <span class="math">5/0</span>, ¿qué se concluye?', a: 'El límite no es un número finito. Se analizan los laterales: pueden ser ∞ y también −∞ (asíntota vertical). Si son opuestos, el límite no existe; si ambos son ∞ (o ambos −∞) se escribe lím = ∞ (o −∞).' },
      { q: '¿Se cumple lím(f + g) = lím f + lím g cuando uno de los límites no existe?', a: 'La propiedad exige que ambos límites existan. Si uno no existe, el límite de la suma puede existir o no: <span class="math">(1/x) + (−1/x) = 0</span> tiene límite 0 aunque ninguno de los dos sumandos lo tenga en 0.' },
      { q: '¿Qué relación hay entre sustitución directa y continuidad?', a: 'La sustitución directa funciona exactamente cuando f es continua en a. Los polinomios y las funciones racionales (donde están definidas) son continuas, por eso basta sustituir.' },
      { q: 'Si al cancelar queda una función g(x), ¿por qué el límite de f es g(a) aunque f(a) no exista?', a: 'Porque f(x) = g(x) para x ≠ a y el límite no mira x = a. La gráfica de f es la de g con un hueco en x = a, y el límite es la altura de ese hueco.' }
    ],
    errores: [
      'Cancelar términos en lugar de factores: <span class="math">(x² − 9)/(x − 3)</span> no se simplifica tachando "x" o "3". Primero factoriza y cancela solo factores completos.',
      'Concluir que <span class="math">0/0</span> es 0 (o 1). Es una indeterminación; hay que simplificar y sustituir de nuevo.',
      'Errores de signo al racionalizar o al sacar factor −1 (por ejemplo <span class="math">3 − x = −(x − 3)</span>). Escribe cada paso y comprueba con una tabla.',
      'Aplicar la propiedad del cociente cuando el límite del denominador es 0. Solo vale si M ≠ 0.'
    ],
    aplicacion: {
      titulo: 'Razón de cambio del área de una tubería',
      html: '<p>Una tubería de drenaje tiene sección circular de radio r centímetros y área <span class="math">A(r) = πr²</span>. Un ingeniero necesita saber con qué rapidez crece el área cuando el radio está cerca de 5 cm: <span class="math">lím<sub>r→5</sub> (A(r) − A(5))/(r − 5)</span>.</p><p>Sustituyendo, <span class="math">0/0</span>. Factorizamos: <span class="math">πr² − 25π = π(r − 5)(r + 5)</span>, y al cancelar (r − 5) queda <span class="math">π(r + 5)</span>. En r = 5: <span class="math">10π ≈ 31.42</span>.</p><p><strong>Interpretación:</strong> cerca de r = 5 cm, el área aumenta aproximadamente 31.42 cm² por cada centímetro adicional de radio. Por ejemplo, de r = 5 a 5.1 cm el área sube de 78.54 a 81.71 cm², un aumento de 3.17 cm², muy cercano a 31.42 × 0.1 = 3.14. Prueba la calculadora para comprobar otros radios.</p>'
    },
    calc: 'limite-algebraico',
    examen: [
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→2</sub> (x³ − 3x + 1)</span>.', r: 3, tol: 0.01, pasos: ['Es polinomio: sustituimos x = 2.', '8 − 6 + 1 = 3.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→5</sub> (x² − 7x + 10)/(x − 5)</span>.', r: 3, tol: 0.01, pasos: ['Sustituir da <span class="math">0/0</span>.', 'Factoriza: <span class="math">x² − 7x + 10 = (x − 5)(x − 2)</span>.', 'Cancela y sustituye: 5 − 2 = 3.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→2</sub> (√(x + 7) − 3)/(x − 2)</span>. Redondea a 2 decimales.', r: 0.1667, tol: 0.01, pasos: ['Sustituir da <span class="math">0/0</span>.', 'Conjugado <span class="math">√(x + 7) + 3</span>: numerador <span class="math">(x + 7) − 9 = x − 2</span>.', 'Queda <span class="math">1/(√(x + 7) + 3)</span>.', 'En x = 2: <span class="math">1/6 ≈ 0.17</span>.'] },
      { tipo: 'opt', q: 'Para <span class="math">lím<sub>x→1</sub> (√(x + 3) − 2)/(x − 1)</span>, que da <span class="math">0/0</span>, ¿cuál es la técnica más adecuada?', opciones: ['Sustituir directamente otra vez', 'Multiplicar por el conjugado <span class="math">√(x + 3) + 2</span>', 'Dividir entre x', 'Concluir que no existe'], correcta: 1, pasos: ['La expresión tiene una raíz cuadrada y da <span class="math">0/0</span>.', 'El conjugado transforma el numerador en <span class="math">(x + 3) − 4 = x − 1</span>.', 'Así aparece el factor (x − 1) y se cancela. El límite es <span class="math">1/4</span>.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→−2</sub> (2x² + x − 6)/(x + 2)</span>.', r: -7, tol: 0.01, pasos: ['Sustituir da <span class="math">0/0</span>.', 'Factoriza: <span class="math">2x² + x − 6 = (2x − 3)(x + 2)</span>.', 'Cancela (x + 2): queda 2x − 3.', 'En x = −2: −4 − 3 = −7.'] },
      { tipo: 'lista', q: 'Calcula <span class="math">lím<sub>x→3</sub> (x² − 9)/(x − 3)</span> y <span class="math">lím<sub>x→−3</sub> (x² − 9)/(x + 3)</span>. Escribe los dos valores separados por coma.', r: [6, -6], tol: 0.01, pasos: ['Primero: <span class="math">(x − 3)(x + 3)/(x − 3) = x + 3</span>, que en x = 3 vale 6.', 'Segundo: <span class="math">(x − 3)(x + 3)/(x + 3) = x − 3</span>, que en x = −3 vale −6.', 'Los valores son 6 y −6.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→5</sub> (1/x − 1/5)/(x − 5)</span>. Da el valor decimal.', r: -0.04, tol: 0.005, pasos: ['Numerador: <span class="math">1/x − 1/5 = (5 − x)/(5x) = −(x − 5)/(5x)</span>.', 'El cociente es <span class="math">−1/(5x)</span> para x ≠ 5.', 'En x = 5: <span class="math">−1/25 = −0.04</span>.'] },
      { tipo: 'opt', q: 'Al calcular <span class="math">lím<sub>x→2</sub> (x + 1)/(x − 2)</span>, el numerador tiende a 3 y el denominador a 0. ¿Qué se concluye?', opciones: ['El límite es 0', 'El límite es 3', 'No existe límite finito (hay que ver los laterales)', 'El límite es <span class="math">3/2</span>'], correcta: 2, pasos: ['El numerador tiende a 3 ≠ 0 y el denominador a 0: no es <span class="math">0/0</span>.', 'El valor absoluto del cociente crece sin cota.', 'Laterales: ∞ por la derecha y −∞ por la izquierda; no hay límite finito.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→2</sub> (x³ − 8)/(x² − 4)</span>.', r: 3, tol: 0.01, pasos: ['Sustituir da <span class="math">0/0</span>.', 'Numerador: <span class="math">(x − 2)(x² + 2x + 4)</span>; denominador: <span class="math">(x − 2)(x + 2)</span>.', 'Cancela: <span class="math">(x² + 2x + 4)/(x + 2)</span>.', 'En x = 2: <span class="math">12/4</span> = 3.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→1</sub> (x⁴ − 1)/(x − 1)</span>.', r: 4, tol: 0.01, pasos: ['Sustituir da <span class="math">0/0</span>.', 'Factoriza: <span class="math">x⁴ − 1 = (x − 1)(x³ + x² + x + 1)</span>.', 'Cancela (x − 1): queda <span class="math">x³ + x² + x + 1</span>.', 'En x = 1: 1 + 1 + 1 + 1 = 4.'] }
    ]
  };

  T['1.4'] = {
    id: '1.4',
    unidad: 1,
    titulo: 'Límites al infinito y asíntotas',
    resumen: 'Estudiarás el comportamiento de funciones cuando x crece sin cota y hallarás asíntotas horizontales, verticales y oblicuas.',
    objetivos: [
      'Calcular límites cuando x → ∞ y x → −∞ de funciones racionales y con raíces.',
      'Resolver las formas indeterminadas ∞/∞ y ∞ − ∞.',
      'Determinar asíntotas horizontales, verticales y oblicuas de una función.',
      'Interpretar un límite al infinito como comportamiento a largo plazo en un problema real.'
    ],
    teoria: [
      { titulo: 'Dos ideas distintas con el símbolo ∞', html: '<p>El símbolo ∞ aparece de dos maneras que conviene separar:</p><ul><li><strong>x → ∞ (o −∞):</strong> la variable crece (o decrece) sin cota. Se pregunta hacia dónde va f(x). Ejemplo: <span class="math">lím<sub>x→∞</sub> 1/x = 0</span>.</li><li><strong>lím f(x) = ∞:</strong> el <em>valor</em> de f crece sin cota cuando x se acerca a un número o al infinito. Ejemplo: <span class="math">lím<sub>x→0<sup>+</sup></sub> 1/x = ∞</span>.</li></ul><p>Ambas pueden ocurrir a la vez: <span class="math">lím<sub>x→∞</sub> x² = ∞</span>. Recuerda que ∞ <strong>no es un número real</strong>; es una forma de describir un comportamiento.</p>' },
      { titulo: 'Límites básicos', html: '<p>Para n entero positivo:</p><ul><li><span class="math">lím<sub>x→∞</sub> 1/xⁿ = 0</span> y <span class="math">lím<sub>x→−∞</sub> 1/xⁿ = 0</span> (también con constantes: <span class="math">c/xⁿ → 0</span>).</li><li><span class="math">lím<sub>x→∞</sub> xⁿ = ∞</span>.</li><li><span class="math">lím<sub>x→−∞</sub> xⁿ = ∞</span> si n es par, y <span class="math">−∞</span> si n es impar.</li></ul><p>Estas "piezas" y las propiedades de 1.3 permiten calcular casi todos los límites al infinito de polinomios y funciones racionales.</p>' },
      { titulo: 'Funciones racionales: comparar grados', html: '<p>Sea <span class="math">f(x) = P(x)/Q(x)</span> con P de grado m y Q de grado n, y coeficientes principales a y b. Cuando x → ±∞ solo importan los términos de mayor grado:</p><ul><li>Si m < n: el límite es 0.</li><li>Si m = n: el límite es <span class="math">a/b</span>.</li><li>Si m > n: el límite es ±∞ (el signo se determina con los términos principales).</li></ul><p>Método: divide numerador y denominador entre la mayor potencia de x que aparece en el denominador. Ejemplo: <span class="math">lím<sub>x→∞</sub> (3x² − 5x + 1)/(2x² + 7)</span>: dividiendo entre x² queda <span class="math">(3 − 5/x + 1/x²)/(2 + 7/x²) → 3/2</span>.</p>' },
      { titulo: 'Raíces y signo cuando x → −∞', html: '<p>Con raíces cuadradas hay una trampa: <span class="math">√(x²) = |x|</span>, no x. Si x → ∞, |x| = x; si x → −∞, |x| = −x.</p><p>Ejemplo: <span class="math">lím<sub>x→−∞</sub> 3x/√(x² + 4)</span>. Dividimos numerador y denominador entre |x| = −x (x < 0): el numerador queda <span class="math">3x/(−x) = −3</span> y el denominador <span class="math">√(1 + 4/x²) → 1</span>. El límite es −3.</p><p>Mientras que para x → +∞ el mismo cociente tiende a +3. Siempre revisa a qué infinito vas.</p>' },
      { titulo: 'Forma ∞ − ∞', html: '<p>Una resta de dos expresiones que crecen no se puede resolver "a ojo". Si hay raíces, multiplica por el conjugado:</p><p><span class="math">lím<sub>x→∞</sub> (√(x² + 3x) − x)</span> = <span class="math">lím (x² + 3x − x²)/(√(x² + 3x) + x)</span> = <span class="math">lím 3x/(√(x² + 3x) + x)</span>.</p><p>Divide entre x: <span class="math">3/(√(1 + 3/x) + 1) → 3/2</span>. Si hay fracciones, combínalas con denominador común. La forma ∞/∞ se resuelve dividiendo entre la mayor potencia, como arriba.</p>' },
      { titulo: 'Asíntotas horizontales', html: '<p>La recta <strong>y = L</strong> es una asíntota horizontal de f si <span class="math">lím<sub>x→∞</sub> f(x) = L</span> o <span class="math">lím<sub>x→−∞</sub> f(x) = L</span>.</p><p>Una función tiene como máximo dos asíntotas horizontales (una hacia cada lado). Las racionales tienen la misma en ambos lados. Una gráfica sí puede cruzar su asíntota horizontal en algún punto; lo que no puede es "alejarse" de ella al ir hacia el infinito.</p>' },
      { titulo: 'Asíntotas verticales', html: '<p>La recta <strong>x = a</strong> es una asíntota vertical si al menos uno de los laterales <span class="math">lím<sub>x→a<sup>−</sup></sub> f(x)</span>, <span class="math">lím<sub>x→a<sup>+</sup></sub> f(x)</span> es ∞ o −∞.</p><p>En una función racional <span class="math">P(x)/Q(x)</span> simplificada (sin factores comunes), las asíntotas verticales están en los ceros de Q. Si hay un factor común (x − a), en x = a hay un <em>hueco</em> (discontinuidad removible), no una asíntota.</p><p>Para saber hacia dónde va cada rama, analiza el signo del cociente a cada lado de a. Por ejemplo, <span class="math">f(x) = (2x + 1)/(x − 3)</span>: cerca de 3, el numerador es ≈ 7 > 0; el denominador es pequeño y positivo si x > 3 y pequeño y negativo si x < 3. Entonces el lateral derecho es ∞ y el izquierdo −∞.</p>' },
      { titulo: 'Asíntotas oblicuas', html: '<p>Si <span class="math">lím<sub>x→∞</sub> (f(x) − (mx + b)) = 0</span> con m ≠ 0, la recta <span class="math">y = mx + b</span> es una asíntota oblicua. Se obtiene con</p><p><span class="math">m = lím<sub>x→∞</sub> f(x)/x</span> y <span class="math">b = lím<sub>x→∞</sub> (f(x) − mx)</span>.</p><p>En una función racional ocurre cuando el grado del numerador es exactamente uno más que el del denominador; entonces basta <strong>dividir los polinomios</strong>: el cociente es mx + b y el resto sobre el denominador tiende a 0. Ejemplo: <span class="math">(x² + 3x + 1)/(x − 1) = x + 4 + 5/(x − 1)</span>, así que y = x + 4 es la asíntota oblicua.</p>' }
    ],
    formulas: [
      { label: 'Límite básico', html: '<span class="math">lím<sub>x→±∞</sub> c/xⁿ = 0</span> (n > 0)' },
      { label: 'Racional con grados iguales', html: '<span class="math">lím<sub>x→±∞</sub> P(x)/Q(x) = a/b</span> (a, b coeficientes principales)' },
      { label: 'Asíntota horizontal', html: '<span class="math">y = L si lím<sub>x→±∞</sub> f(x) = L</span>' },
      { label: 'Asíntota vertical', html: '<span class="math">x = a si lím<sub>x→a<sup>+</sup></sub> f(x) = ±∞ o lím<sub>x→a<sup>−</sup></sub> f(x) = ±∞</span>' },
      { label: 'Asíntota oblicua', html: '<span class="math">y = mx + b, m = lím f(x)/x, b = lím (f(x) − mx)</span>' },
      { label: 'Raíz y valor absoluto', html: '<span class="math">√(x²) = |x|</span> (vale −x si x < 0)' },
      { label: 'Conjugado para ∞ − ∞', html: '<span class="math">√A − x = (A − x²)/(√A + x)</span>' }
    ],
    ejemplos: [
      { titulo: 'Grados iguales',
        enunciado: 'Calcula <span class="math">lím<sub>x→∞</sub> (3x² − 5x + 1)/(2x² + 7)</span>.',
        pasos: ['Es ∞/∞: dividimos numerador y denominador entre x².', 'Queda <span class="math">(3 − 5/x + 1/x²)/(2 + 7/x²)</span>.', 'Cuando x → ∞, los términos 5/x, 1/x² y 7/x² tienden a 0.', 'El límite es <span class="math">3/2</span>.'],
        respuesta: '<span class="math">3/2</span> (asíntota horizontal y = <span class="math">3/2</span>)' },
      { titulo: 'Grado del numerador menor',
        enunciado: 'Calcula <span class="math">lím<sub>x→∞</sub> (4x + 1)/(x² − 3)</span>.',
        pasos: ['Dividimos entre x²: <span class="math">(4/x + 1/x²)/(1 − 3/x²)</span>.', 'Numerador → 0, denominador → 1.', 'El cociente tiende a 0.'],
        respuesta: '0 (asíntota horizontal y = 0)' },
      { titulo: 'Velocidad límite de un bus',
        enunciado: 'Un autobús parte del reposo y su velocidad (km por hora) después de t segundos de aceleración es <span class="math">v(t) = 80t/(t + 2)</span>. ¿Qué velocidad alcanzaría "a largo plazo"?',
        pasos: ['Calculamos <span class="math">lím<sub>t→∞</sub> 80t/(t + 2)</span>.', 'Dividimos entre t: <span class="math">80/(1 + 2/t)</span>.', 'Cuando t → ∞, 2/t → 0.', 'El límite es 80.', 'Por ejemplo v(10) ≈ 66.7, v(100) ≈ 78.4: se acerca a 80 sin alcanzarla.'],
        respuesta: '80 km por hora (asíntota horizontal v = 80)' },
      { titulo: 'Asíntotas vertical y horizontal',
        enunciado: 'Halla las asíntotas de <span class="math">f(x) = (2x + 1)/(x − 3)</span> y el comportamiento cerca de la vertical.',
        pasos: ['Vertical: el denominador se anula en x = 3 y el numerador vale 7 ≠ 0; hay asíntota x = 3.', 'Lateral derecho: x → 3⁺ → numerador ≈ 7 > 0 y denominador ≈ 0⁺, luego f → ∞.', 'Lateral izquierdo: x → 3⁻ → denominador ≈ 0⁻, luego f → −∞.', 'Horizontal: <span class="math">lím<sub>x→±∞</sub> (2x + 1)/(x − 3) = 2/1 = 2</span>.'],
        respuesta: 'Asíntota vertical x = 3 y horizontal y = 2.' },
      { titulo: 'Forma ∞ − ∞',
        enunciado: 'Calcula <span class="math">lím<sub>x→∞</sub> (√(x² + 3x) − x)</span>.',
        pasos: ['Sustituir da ∞ − ∞. Multiplicamos por el conjugado <span class="math">(√(x² + 3x) + x)</span>.', 'Numerador: <span class="math">(x² + 3x) − x² = 3x</span>.', 'Queda <span class="math">3x/(√(x² + 3x) + x)</span>.', 'Dividimos entre x (x > 0): <span class="math">3/(√(1 + 3/x) + 1)</span>.', 'Cuando x → ∞: <span class="math">3/(1 + 1) = 3/2</span>.'],
        respuesta: '<span class="math">3/2</span>' },
      { titulo: 'Asíntota oblicua',
        enunciado: 'Halla la asíntota oblicua de <span class="math">f(x) = (x² + 3x + 1)/(x − 1)</span>.',
        pasos: ['El grado del numerador (2) es uno más que el del denominador (1): puede haber oblicua.', 'Divide: <span class="math">x² + 3x + 1 = (x − 1)(x + 4) + 5</span>, porque <span class="math">(x − 1)(x + 4) = x² + 3x − 4</span>.', 'Entonces <span class="math">f(x) = x + 4 + 5/(x − 1)</span> y el último término tiende a 0.', 'La asíntota oblicua es y = x + 4. (Además hay asíntota vertical x = 1).'],
        respuesta: 'y = x + 4' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Calcula <span class="math">lím<sub>x→∞</sub> (7x + 2)/(3x − 1)</span>.',
        pasos: ['Grados iguales: dividimos entre x.', '<span class="math">(7 + 2/x)/(3 − 1/x)</span> → <span class="math">7/3</span>.'], respuesta: '<span class="math">7/3</span>' },
      { nivel: 'facil', enunciado: 'Calcula <span class="math">lím<sub>x→∞</sub> (x² + 1)/(2x² − x)</span>.',
        pasos: ['Dividimos entre x²: <span class="math">(1 + 1/x²)/(2 − 1/x)</span>.', 'Los términos con 1/x tienden a 0.', 'Queda <span class="math">1/2</span>.'], respuesta: '<span class="math">1/2</span>' },
      { nivel: 'facil', enunciado: 'Calcula <span class="math">lím<sub>x→∞</sub> (5x − 2)/(x² + 4)</span>.',
        pasos: ['Grado del numerador 1 < grado del denominador 2.', 'Dividiendo entre x²: <span class="math">(5/x − 2/x²)/(1 + 4/x²) → 0/1</span>.'], respuesta: '0' },
      { nivel: 'facil', enunciado: 'Halla la asíntota horizontal de <span class="math">f(x) = (6x² + 1)/(3x² − 2)</span>.',
        pasos: ['Grados iguales: el límite es el cociente de coeficientes principales.', '<span class="math">6/3 = 2</span>.'], respuesta: 'y = 2' },
      { nivel: 'intermedio', enunciado: 'Calcula <span class="math">lím<sub>x→∞</sub> (x³ + 2x)/(4x³ − 5)</span>.',
        pasos: ['Dividimos entre x³: <span class="math">(1 + 2/x²)/(4 − 5/x³)</span>.', 'Los términos con x en el denominador tienden a 0.', 'Queda <span class="math">1/4</span>.'], respuesta: '<span class="math">1/4</span>' },
      { nivel: 'intermedio', enunciado: 'Calcula <span class="math">lím<sub>x→−∞</sub> (3x + 1)/√(x² + 4)</span>.',
        pasos: ['Para x < 0, <span class="math">√(x²) = |x| = −x</span>. Dividimos numerador y denominador entre |x| = −x.', 'Numerador: <span class="math">(3x + 1)/(−x) = −3 − 1/x → −3</span>.', 'Denominador: <span class="math">√(x² + 4)/|x| = √(1 + 4/x²) → 1</span>.', 'El límite es −<span class="math">3/1</span> = −3.'], respuesta: '−3' },
      { nivel: 'intermedio', enunciado: 'Halla las asíntotas verticales y horizontales de <span class="math">f(x) = (x + 2)/(x² − x − 6)</span> e indica dónde hay un hueco.',
        pasos: ['Factoriza el denominador: <span class="math">x² − x − 6 = (x − 3)(x + 2)</span>.', 'Simplifica: <span class="math">f(x) = 1/(x − 3)</span> para x ≠ −2.', 'En x = 3 hay asíntota vertical; en x = −2 hay un hueco con altura <span class="math">1/(−2 − 3) = −1/5</span>.', 'Horizontal: grado numerador 1 < grado denominador 2, entonces y = 0.'], respuesta: 'AV: x = 3; AH: y = 0; hueco en (−2, −<span class="math">1/5</span>).' },
      { nivel: 'intermedio', enunciado: 'Calcula <span class="math">lím<sub>x→∞</sub> (5x⁴ − x)/(x³ + 2x)</span>.',
        pasos: ['Dividimos entre x³: <span class="math">(5x − 1/x²)/(1 + 2/x²)</span>.', 'El numerador crece sin cota y el denominador tiende a 1.', 'El límite es ∞ (grado numerador > grado denominador).'], respuesta: '∞ (crece sin cota)' },
      { nivel: 'dificil', enunciado: 'Calcula <span class="math">lím<sub>x→∞</sub> (√(x² + 5x) − x)</span>.',
        pasos: ['Multiplica por el conjugado: <span class="math">(x² + 5x − x²)/(√(x² + 5x) + x) = 5x/(√(x² + 5x) + x)</span>.', 'Divide entre x: <span class="math">5/(√(1 + 5/x) + 1)</span>.', 'Cuando x → ∞: <span class="math">5/(1 + 1) = 5/2</span>.'], respuesta: '<span class="math">5/2</span>' },
      { nivel: 'dificil', enunciado: 'Halla la asíntota oblicua de <span class="math">f(x) = (2x² − 3x + 5)/(x + 1)</span>.',
        pasos: ['Divide: <span class="math">(x + 1)(2x − 5) = 2x² − 3x − 5</span>.', 'Entonces <span class="math">2x² − 3x + 5 = (x + 1)(2x − 5) + 10</span>.', 'Luego <span class="math">f(x) = 2x − 5 + 10/(x + 1)</span> y el último término → 0.', 'Comprobación: m = 2 y b = lím (f(x) − 2x) = −5.'], respuesta: 'y = 2x − 5' },
      { nivel: 'dificil', enunciado: 'Halla todas las asíntotas de <span class="math">f(x) = x²/(x² − 4)</span> y el signo de cada lateral en las verticales.',
        pasos: ['Factoriza: <span class="math">x² − 4 = (x − 2)(x + 2)</span>; el numerador no se anula en ±2: hay AV en x = 2 y x = −2.', 'Horizontal: grados iguales, <span class="math">1/1 = 1</span>, entonces y = 1.', 'En x → 2⁺: numerador ≈ 4, denominador ≈ 0⁺ → ∞. En x → 2⁻: denominador ≈ 0⁻ → −∞.', 'En x → −2⁻: (x − 2)(x + 2) = (−)(−) = +, luego → ∞. En x → −2⁺: (−)(+) = −, luego → −∞.'], respuesta: 'AV: x = 2 y x = −2; AH: y = 1. Laterales: 2⁺ → ∞, 2⁻ → −∞, (−2)⁻ → ∞, (−2)⁺ → −∞.' }
    ],
    teoricas: [
      { q: '¿Qué significa que la recta y = L sea asíntota horizontal de f?', a: 'Que f(x) se acerca a L cuando x → ∞ o cuando x → −∞. La gráfica se "pega" a esa recta lejos del origen.' },
      { q: '¿Cuál es la diferencia entre <span class="math">lím<sub>x→∞</sub> f(x) = L</span> y <span class="math">lím<sub>x→a</sub> f(x) = ∞</span>?', a: 'En el primero x crece sin cota y f(x) se estabiliza en un número L (asíntota horizontal). En el segundo x se acerca a un número a y f(x) crece sin cota (asíntota vertical).' },
      { q: '¿Por qué ∞/∞ y ∞ − ∞ son indeterminaciones?', a: 'Porque el resultado depende de qué tan rápido crece cada parte: <span class="math">x/x → 1</span>, <span class="math">2x/x → 2</span>, <span class="math">x²/x → ∞</span>, <span class="math">x/x² → 0</span> y todos son del tipo ∞/∞. Se resuelven dividiendo entre la mayor potencia o racionalizando.' },
      { q: '¿Puede la gráfica de una función cruzar su asíntota horizontal? ¿Y la vertical?', a: 'La horizontal sí puede cruzarse (por ejemplo <span class="math">sen x/x</span> cruza y = 0 infinitas veces); lo que importa es el comportamiento en el infinito. La vertical no se cruza, porque la función no está definida o no es finita en x = a.' },
      { q: '¿Cuántas asíntotas horizontales puede tener una función?', a: 'Como máximo dos: una cuando x → ∞ y otra cuando x → −∞. Una racional tiene como máximo una; funciones como la arco tangente tienen dos distintas.' },
      { q: 'En una función racional, ¿cómo saber qué ocurre al comparar los grados m (numerador) y n (denominador)?', a: 'Si m < n: AH y = 0. Si m = n: AH y = cociente de coeficientes principales. Si m = n + 1: asíntota oblicua. Si m > n + 1: crece como un polinomio, sin asíntota recta.' },
      { q: '¿Por qué hay que tener cuidado al calcular <span class="math">lím<sub>x→−∞</sub></span> con raíces cuadradas?', a: 'Porque <span class="math">√(x²) = |x| = −x</span> cuando x < 0. Si se toma <span class="math">√(x²) = x</span> por descuido, se obtiene el signo equivocado en el resultado.' },
      { q: '¿Cómo distinguir una asíntota vertical de un hueco en una racional?', a: 'Si al simplificar el factor (x − a) desaparece del denominador, hay un hueco en x = a; si el factor persiste en el denominador, hay asíntota vertical. Comprueba con el numerador evaluado en a.' }
    ],
    errores: [
      'Tratar ∞ como un número: escribir ∞/∞ = 1 o ∞ − ∞ = 0. Son formas indeterminadas que exigen simplificar.',
      'Olvidar el signo en x → −∞ con raíces: <span class="math">√(x²) = −x</span> cuando x < 0. Un resultado cambia de +3 a −3.',
      'Declarar asíntota vertical en cada cero del denominador sin simplificar. Si el factor se cancela, es un hueco.',
      'Dividir solo el numerador entre la mayor potencia. Debes dividir numerador y denominador entre la misma potencia de x.'
    ],
    aplicacion: {
      titulo: 'Costo promedio por unidad en una fábrica',
      html: '<p>Una planta de bloques de concreto tiene un costo fijo de $500 al mes y un costo de $8 por bloque. El costo total de producir x bloques es <span class="math">C(x) = 500 + 8x</span> y el costo promedio por bloque es</p><p><span class="math">c(x) = (500 + 8x)/x = 8 + 500/x</span>.</p><p>Calcula: c(100) = $13.00; c(1000) = $8.50; c(10000) = $8.05.</p><p>Límite: <span class="math">lím<sub>x→∞</sub> c(x) = lím (8 + 500/x) = 8</span>. La recta <span class="math">y = 8</span> es una asíntota horizontal: por mucho que se produzca, el costo por bloque nunca baja de $8 (el costo variable), pero se acerca a ese piso. Con x → 0⁺, c(x) → ∞: producir muy poco es carísimo por unidad (asíntota vertical en x = 0). Prueba la calculadora con distintos costos fijos.</p>'
    },
    calc: 'limite-infinito',
    examen: [
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→∞</sub> (6x² − x)/(3x² + 5)</span>.', r: 2, tol: 0.01, pasos: ['Grados iguales; dividimos entre x²: <span class="math">(6 − 1/x)/(3 + 5/x²)</span>.', 'Los términos con x en el denominador tienden a 0.', 'El límite es <span class="math">6/3</span> = 2.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→∞</sub> (4x + 3)/(2x − 7)</span>.', r: 2, tol: 0.01, pasos: ['Dividimos entre x: <span class="math">(4 + 3/x)/(2 − 7/x)</span>.', '3/x y 7/x tienden a 0.', 'El límite es <span class="math">4/2</span> = 2.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→∞</sub> (x² + 1)/(x³ − x)</span>.', r: 0, tol: 0.01, pasos: ['Grado del numerador 2 < grado del denominador 3.', 'Dividiendo entre x³: <span class="math">(1/x + 1/x³)/(1 − 1/x²)</span> → <span class="math">0/1</span>.', 'El límite es 0.'] },
      { tipo: 'num', q: '¿Cuál es el valor de a en la asíntota vertical x = a de <span class="math">f(x) = 3x/(x − 5)</span>?', r: 5, tol: 0.01, pasos: ['El denominador se anula en x = 5.', 'El numerador en x = 5 vale 15 ≠ 0.', 'No hay cancelación: x = 5 es asíntota vertical.'] },
      { tipo: 'opt', q: 'Calcula <span class="math">lím<sub>x→∞</sub> (2x³ + 1)/(x² + 4)</span>.', opciones: ['0', '2', '<span class="math">1/2</span>', '+∞ (crece sin cota)'], correcta: 3, pasos: ['Grado del numerador (3) > grado del denominador (2).', 'Dividiendo entre x²: <span class="math">(2x + 1/x²)/(1 + 4/x²)</span>.', 'El numerador crece sin cota y el denominador tiende a 1: el límite es +∞.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→∞</sub> (√(x² + 6x) − x)</span>.', r: 3, tol: 0.01, pasos: ['Multiplica por el conjugado: <span class="math">6x/(√(x² + 6x) + x)</span>.', 'Divide entre x: <span class="math">6/(√(1 + 6/x) + 1)</span>.', 'Cuando x → ∞: 6/(1 + 1) = 3.'] },
      { tipo: 'par', q: 'Para <span class="math">f(x) = (5x + 2)/(x − 1)</span> escribe el par (a, L), donde x = a es la asíntota vertical y y = L es la horizontal.', r: [1, 5], tol: 0.01, pasos: ['Vertical: x − 1 = 0 → x = 1 (el numerador 7 ≠ 0).', 'Horizontal: <span class="math">lím (5x + 2)/(x − 1) = 5/1 = 5</span>.', 'El par es (1, 5).'] },
      { tipo: 'lista', q: 'La asíntota oblicua de <span class="math">f(x) = (x² + 2x + 3)/(x − 2)</span> es y = mx + b. Escribe m y b separados por coma.', r: [1, 4], tol: 0.01, pasos: ['Divide: <span class="math">(x − 2)(x + 4) = x² + 2x − 8</span>.', 'Entonces <span class="math">x² + 2x + 3 = (x − 2)(x + 4) + 11</span>.', 'Luego <span class="math">f(x) = x + 4 + 11/(x − 2)</span>, con resto → 0.', 'Así m = 1 y b = 4.'] },
      { tipo: 'opt', q: 'Calcula <span class="math">lím<sub>x→−∞</sub> 2x/√(x² + 1)</span>.', opciones: ['−2', '2', '0', 'No existe'], correcta: 0, pasos: ['Para x < 0, <span class="math">√(x²) = |x| = −x</span>.', 'Dividimos numerador y denominador entre |x|: <span class="math">2x/|x| = −2</span> y <span class="math">√(1 + 1/x²) → 1</span>.', 'El límite es −2.'] },
      { tipo: 'num', q: 'Calcula <span class="math">lím<sub>x→−∞</sub> (4 − x²)/(2x² + x)</span>. Da el valor decimal.', r: -0.5, tol: 0.01, pasos: ['Grados iguales (2).', 'Coeficientes principales: −1 en el numerador y 2 en el denominador.', 'El límite es −<span class="math">1/2</span> = −0.5.'] }
    ]
  };

  T['1.5'] = {
    id: '1.5',
    unidad: 1,
    titulo: 'Continuidad',
    resumen: 'Definirás la continuidad con límites, clasificarás discontinuidades y aplicarás el Teorema del Valor Intermedio.',
    objetivos: [
      'Verificar la continuidad de una función en un punto con las tres condiciones de la definición.',
      'Clasificar discontinuidades como removibles, de salto o infinitas.',
      'Determinar parámetros que hacen continua una función definida por partes.',
      'Aplicar el Teorema del Valor Intermedio para probar que una ecuación tiene solución y aproximarla por bisección.'
    ],
    teoria: [
      { titulo: 'La idea de continuidad', html: '<p>Intuitivamente, una función es continua si su gráfica se puede trazar <em>sin levantar el lápiz</em>. Matemáticamente, el valor de f no da "saltos" ni "huecos" ni "se escapa al infinito". Casi todas las magnitudes físicas (temperatura, posición, nivel de un embalse como el de la represa 5 de Noviembre) cambian de manera continua, y esa propiedad permite conclusiones poderosas, como el Teorema del Valor Intermedio.</p>' },
      { titulo: 'Definición en un punto', html: '<p>Una función f es <strong>continua en x = a</strong> si se cumplen las tres condiciones:</p><ol><li>f(a) está definida;</li><li><span class="math">lím<sub>x→a</sub> f(x)</span> existe (los dos laterales existen y son iguales);</li><li><span class="math">lím<sub>x→a</sub> f(x) = f(a)</span>.</li></ol><p>En palabras: el límite coincide con el valor. Si alguna condición falla, f es <strong>discontinua</strong> en a. Una función es continua en un intervalo si lo es en todos sus puntos; en los extremos de un intervalo cerrado [a, b] se pide continuidad lateral: <span class="math">lím<sub>x→a<sup>+</sup></sub> f(x) = f(a)</span> y <span class="math">lím<sub>x→b<sup>−</sup></sub> f(x) = f(b)</span>.</p>' },
      { titulo: 'Tipos de discontinuidad', html: '<ul><li><strong>Removible (evitable):</strong> el límite existe pero f(a) no está definida o es distinta del límite. Se "repara" redefiniendo f(a) = L. Ejemplo: <span class="math">(x² − 4)/(x − 2)</span> en x = 2.</li><li><strong>De salto:</strong> los dos laterales existen y son finitos pero distintos. Ejemplo: la parte entera <span class="math">⌊x⌋</span> en cada entero.</li><li><strong>Infinita (asíntota vertical):</strong> al menos un lateral es ∞ o −∞. Ejemplo: <span class="math">1/(x − 1)</span> en x = 1.</li><li><strong>Oscilante:</strong> f oscila sin límite lateral (por ejemplo <span class="math">sen(1/x)</span> en 0).</li></ul><p>Las removibles son las únicas que se pueden eliminar; las de salto e infinitas se llaman <em>esenciales</em>.</p>' },
      { titulo: 'Funciones continuas conocidas', html: '<p>Son continuas en todo su dominio: polinomios, funciones racionales (donde el denominador no es 0), raíces <span class="math">ⁿ√x</span>, valor absoluto, seno y coseno, exponenciales y logaritmos (en x > 0).</p><p>Además, si f y g son continuas en a, también lo son <span class="math">f ± g</span>, <span class="math">f·g</span>, <span class="math">f/g</span> (con g(a) ≠ 0) y la composición <span class="math">f(g(x))</span> cuando f es continua en g(a). Esto justifica la sustitución directa del tema 1.3: <span class="math">lím<sub>x→a</sub> f(g(x)) = f(lím g(x))</span> si f es continua.</p>' },
      { titulo: 'Funciones por partes y parámetros', html: '<p>Para que una función por partes sea continua en un punto de unión a:</p><ol><li>Calcula el lateral izquierdo con la regla de la izquierda.</li><li>Calcula el lateral derecho con la regla de la derecha.</li><li>Impón que sean iguales entre sí y a f(a). Esto da una ecuación en los parámetros.</li></ol><p>Con dos puntos de unión se obtienen dos ecuaciones (sistema lineal) para dos parámetros. Dentro de cada pedazo la función es continua si la fórmula lo es; solo hay que revisar las uniones y los puntos donde la fórmula no está definida.</p>' },
      { titulo: 'Teorema del Valor Intermedio (TVI)', html: '<p><strong>Teorema.</strong> Si f es continua en [a, b] y N es un número entre f(a) y f(b), existe al menos un c en (a, b) tal que <span class="math">f(c) = N</span>.</p><p>Caso especial muy útil (<strong>teorema de Bolzano</strong>): si f es continua en [a, b] y <span class="math">f(a)</span> y <span class="math">f(b)</span> tienen signos opuestos, existe c en (a, b) con <span class="math">f(c) = 0</span>. Interpretación: si la temperatura de un horno sube de 20 °C a 180 °C de manera continua, en algún instante pasó exactamente por 100 °C.</p><p>Las hipótesis importan: sin continuidad la conclusión falla (<span class="math">1/x</span> en [−1, 1] cambia de signo y no tiene ceros). Y el teorema asegura que existe c, pero no dice cuántos hay ni cuánto valen.</p>' },
      { titulo: 'Cómo usar el TVI y el método de bisección', html: '<p><strong>Para probar que una ecuación tiene solución:</strong> (1) escribe la ecuación como <span class="math">f(x) = 0</span>; (2) verifica que f es continua (polinomio, etc.); (3) encuentra a y b con f(a) y f(b) de signos opuestos; (4) concluye que hay una raíz en (a, b).</p><p><strong>Bisección:</strong> toma el punto medio m = (a + b)/2, calcula f(m) y conserva la mitad del intervalo en la que el signo cambia. Cada paso reduce a la mitad el intervalo que contiene la raíz; con 10 pasos se gana unas tres cifras decimales.</p>' },
      { titulo: 'Continuidad, límites y derivadas', html: '<p>La continuidad conecta toda la unidad: se define con límites (1.1 a 1.3), el análisis de saltos usa laterales (1.2) y las asíntotas verticales son discontinuidades infinitas (1.4).</p><p>Hacia adelante: toda función <strong>derivable</strong> en un punto es continua ahí (tema 1.10), pero no al revés: <span class="math">|x|</span> es continua en 0 y no tiene derivada. Además, la integral definida existe para funciones continuas (tema 1.19).</p>' }
    ],
    formulas: [
      { label: 'Continuidad en a', html: '<span class="math">lím<sub>x→a</sub> f(x) = f(a)</span>' },
      { label: 'Discontinuidad removible', html: '<span class="math">lím<sub>x→a</sub> f(x) = L</span> existe, pero f(a) no existe o ≠ L' },
      { label: 'Discontinuidad de salto', html: '<span class="math">lím<sub>x→a<sup>−</sup></sub> f(x) ≠ lím<sub>x→a<sup>+</sup></sub> f(x)</span> (ambos finitos)' },
      { label: 'Discontinuidad infinita', html: '<span class="math">lím<sub>x→a@±</sub> f(x) = ±∞</span>' },
      { label: 'Teorema del Valor Intermedio', html: '<span class="math">f continua en [a, b], N entre f(a) y f(b) ⇒ ∃ c ∈ (a, b): f(c) = N</span>' },
      { label: 'Teorema de Bolzano', html: '<span class="math">f(a)·f(b) < 0 ⇒ ∃ c ∈ (a, b): f(c) = 0</span>' },
      { label: 'Punto medio (bisección)', html: '<span class="math">m = (a + b)/2</span>' }
    ],
    ejemplos: [
      { titulo: 'Verificar continuidad en un punto',
        enunciado: 'Demuestra que <span class="math">f(x) = x² − 3x + 1</span> es continua en x = 2.',
        pasos: ['f(2) = 4 − 6 + 1 = −1: está definida.', '<span class="math">lím<sub>x→2</sub> (x² − 3x + 1) = 4 − 6 + 1 = −1</span> (polinomio, sustitución directa).', 'El límite existe y es igual a f(2).'],
        respuesta: 'f es continua en x = 2 (cumple las tres condiciones).' },
      { titulo: 'Discontinuidad removible',
        enunciado: 'Sea <span class="math">f(x) = (x² − 4)/(x − 2)</span> para x ≠ 2 y <span class="math">f(2) = 3</span>. Estudia la continuidad en x = 2.',
        pasos: ['f(2) = 3 está definida.', 'Para x ≠ 2: <span class="math">(x − 2)(x + 2)/(x − 2) = x + 2</span>, luego <span class="math">lím<sub>x→2</sub> f(x) = 4</span>.', 'Como 4 ≠ 3, la condición 3 falla.', 'El límite existe: la discontinuidad es removible. Se repara con f(2) = 4.'],
        respuesta: 'Discontinuidad removible en x = 2; se elimina definiendo f(2) = 4.' },
      { titulo: 'Discontinuidad de salto',
        enunciado: 'Clasifica la discontinuidad de <span class="math">f(x) = x + 1</span> si x < 0 y <span class="math">f(x) = x² + 2</span> si x ≥ 0, en x = 0.',
        pasos: ['Izquierda: <span class="math">lím<sub>x→0<sup>−</sup></sub> (x + 1) = 1</span>.', 'Derecha: <span class="math">lím<sub>x→0<sup>+</sup></sub> (x² + 2) = 2</span>.', 'Ambos son finitos pero distintos (1 ≠ 2).', 'El salto mide 2 − 1 = 1.'],
        respuesta: 'Discontinuidad de salto de tamaño 1 en x = 0.' },
      { titulo: 'Discontinuidad infinita',
        enunciado: 'Clasifica la discontinuidad de <span class="math">f(x) = 1/(x − 1)²</span> en x = 1.',
        pasos: ['f(1) no está definida.', 'Cerca de 1, el denominador es positivo y pequeño por ambos lados.', '<span class="math">lím<sub>x→1<sup>−</sup></sub> f(x) = ∞</span> y <span class="math">lím<sub>x→1<sup>+</sup></sub> f(x) = ∞</span>.', 'Los límites son infinitos: asíntota vertical.'],
        respuesta: 'Discontinuidad infinita en x = 1 (asíntota vertical x = 1).' },
      { titulo: 'Tarifa de agua continua',
        enunciado: 'Una tarifa de agua cobra <span class="math">C(x) = 0.8x</span> dólares por x m³ si 0 ≤ x ≤ 20 y <span class="math">C(x) = 1.2x + b</span> si x > 20 (consumo alto). ¿Qué valor de b hace que el costo no tenga saltos en x = 20?',
        pasos: ['Izquierda: <span class="math">lím<sub>x→20<sup>−</sup></sub> 0.8x = 16</span> y C(20) = 16.', 'Derecha: <span class="math">lím<sub>x→20<sup>+</sup></sub> (1.2x + b) = 24 + b</span>.', 'Continuidad: <span class="math">24 + b = 16</span>.', 'De donde b = −8.'],
        respuesta: 'b = −8 (un crédito de $8 aplicado a la parte de alto consumo).' },
      { titulo: 'Teorema del Valor Intermedio y bisección',
        enunciado: 'Demuestra que <span class="math">x³ + x − 3 = 0</span> tiene una solución en [1, 2] y aproxímala con tres pasos de bisección.',
        pasos: ['<span class="math">f(x) = x³ + x − 3</span> es polinomio, luego continua. f(1) = −1 < 0 y f(2) = 7 > 0.', 'Por el TVI (Bolzano) existe c en (1, 2) con f(c) = 0.', 'Punto medio 1.5: f(1.5) = 3.375 + 1.5 − 3 = 1.875 > 0 → la raíz está en [1, 1.5].', 'Punto medio 1.25: f(1.25) ≈ 0.2031 > 0 → raíz en [1, 1.25].', 'Punto medio 1.125: f(1.125) ≈ −0.4512 < 0 → raíz en [1.125, 1.25].', 'Estimación: punto medio ≈ 1.19 (el valor real es 1.2134).'],
        respuesta: 'Existe una raíz en (1, 2); tras tres pasos está en [1.125, 1.25] (≈ 1.21).' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: '¿Es continua <span class="math">f(x) = 2x + 5</span> en x = 3?',
        pasos: ['f(3) = 11.', '<span class="math">lím<sub>x→3</sub> (2x + 5) = 11</span>.', 'Coinciden.'], respuesta: 'Sí, es continua en x = 3.' },
      { nivel: 'facil', enunciado: 'Halla los puntos de discontinuidad de <span class="math">f(x) = (x + 1)/(x − 2)</span> y clasifícalos.',
        pasos: ['f no está definida en x = 2.', 'El numerador en 2 vale 3 ≠ 0: no hay cancelación.', 'Los laterales en 2 son ∞ y −∞.'], respuesta: 'Discontinuidad infinita en x = 2.' },
      { nivel: 'facil', enunciado: '¿Es continua en x = 1 la función <span class="math">f(x) = x² + 1</span> si x < 1 y <span class="math">f(x) = 3 − x</span> si x ≥ 1?',
        pasos: ['Izquierda: 1 + 1 = 2.', 'Derecha: 3 − 1 = 2.', 'f(1) = 2.', 'Los tres valores coinciden.'], respuesta: 'Sí, es continua en x = 1.' },
      { nivel: 'facil', enunciado: '¿En qué intervalo es continua <span class="math">f(x) = √(x − 4)</span>?',
        pasos: ['El dominio es x ≥ 4.', 'La raíz es continua en su dominio; en x = 4 es continua por la derecha.'], respuesta: 'Continua en [4, ∞).' },
      { nivel: 'intermedio', enunciado: 'Sea <span class="math">f(x) = (x² − x − 6)/(x − 3)</span> para x ≠ 3 y <span class="math">f(3) = 2</span>. Clasifica la discontinuidad en x = 3 y repárala si es posible.',
        pasos: ['Factoriza: <span class="math">x² − x − 6 = (x − 3)(x + 2)</span>.', 'Para x ≠ 3: f(x) = x + 2, entonces el límite en 3 es 5.', 'f(3) = 2 ≠ 5.', 'Discontinuidad removible; se repara con f(3) = 5.'], respuesta: 'Removible; se redefine f(3) = 5.' },
      { nivel: 'intermedio', enunciado: 'Halla k para que <span class="math">f(x) = kx + 3</span> si x < 2 y <span class="math">f(x) = x² + 1</span> si x ≥ 2 sea continua en x = 2.',
        pasos: ['Izquierda: 2k + 3.', 'Derecha y valor: 4 + 1 = 5.', 'Igualamos: 2k + 3 = 5, entonces k = 1.'], respuesta: 'k = 1' },
      { nivel: 'intermedio', enunciado: 'Clasifica las discontinuidades de <span class="math">f(x) = (x − 1)/(x² − 1)</span>.',
        pasos: ['Factoriza: <span class="math">x² − 1 = (x − 1)(x + 1)</span>; f no está definida en x = 1 y x = −1.', 'Para x ≠ 1: <span class="math">f(x) = 1/(x + 1)</span>. En x = 1 el límite es <span class="math">1/2</span>: removible.', 'En x = −1, el denominador simplificado se anula y el numerador es 1: laterales infinitos, discontinuidad infinita.'], respuesta: 'x = 1: removible (límite <span class="math">1/2</span>). x = −1: infinita.' },
      { nivel: 'intermedio', enunciado: 'Clasifica la discontinuidad de la parte entera <span class="math">f(x) = ⌊x⌋</span> en x = 2 y mide el salto.',
        pasos: ['Izquierda: <span class="math">lím<sub>x→2<sup>−</sup></sub> ⌊x⌋ = 1</span>.', 'Derecha: <span class="math">lím<sub>x→2<sup>+</sup></sub> ⌊x⌋ = 2</span>.', 'Salto: 2 − 1 = 1.'], respuesta: 'Discontinuidad de salto de tamaño 1.' },
      { nivel: 'dificil', enunciado: 'Halla a y b para que sea continua: <span class="math">f(x) = −2</span> si x ≤ −1; <span class="math">f(x) = ax + b</span> si −1 < x < 3; <span class="math">f(x) = 4</span> si x ≥ 3.',
        pasos: ['En x = −1: <span class="math">−a + b = −2</span>.', 'En x = 3: <span class="math">3a + b = 4</span>.', 'Resta las ecuaciones: <span class="math">4a = 6</span>, entonces a = <span class="math">3/2</span>.', 'Entonces b = −2 + a = −<span class="math">1/2</span>.', 'Verificación: 3(<span class="math">3/2</span>) − <span class="math">1/2</span> = 4.'], respuesta: 'a = <span class="math">3/2</span> y b = −<span class="math">1/2</span>' },
      { nivel: 'dificil', enunciado: 'Demuestra que <span class="math">x³ − 4x + 2 = 0</span> tiene al menos tres soluciones reales, ubicando un intervalo para cada una.',
        pasos: ['<span class="math">f(x) = x³ − 4x + 2</span> es continua (polinomio).', 'f(−3) = −27 + 12 + 2 = −13 < 0 y f(−2) = −8 + 8 + 2 = 2 > 0: raíz en (−3, −2).', 'f(0) = 2 > 0 y f(1) = 1 − 4 + 2 = −1 < 0: raíz en (0, 1).', 'f(1) = −1 < 0 y f(2) = 8 − 8 + 2 = 2 > 0: raíz en (1, 2).', 'Los tres intervalos no se solapan: hay tres raíces distintas (y un polinomio cúbico no puede tener más).'], respuesta: 'Raíces en (−3, −2), (0, 1) y (1, 2).' },
      { nivel: 'dificil', enunciado: 'Halla k para que <span class="math">f(x) = (√(x + 3) − 2)/(x − 1)</span> si x ≠ 1 y <span class="math">f(1) = k</span> sea continua en x = 1.',
        pasos: ['Se necesita <span class="math">k = lím<sub>x→1</sub> f(x)</span>, que es <span class="math">0/0</span>.', 'Multiplica por el conjugado <span class="math">√(x + 3) + 2</span>: numerador <span class="math">(x + 3) − 4 = x − 1</span>.', 'Queda <span class="math">1/(√(x + 3) + 2)</span>.', 'En x = 1: <span class="math">1/(2 + 2) = 1/4</span>.'], respuesta: 'k = <span class="math">1/4</span>' }
    ],
    teoricas: [
      { q: '¿Cuáles son las tres condiciones para que f sea continua en a?', a: '(1) f(a) existe; (2) el límite de f(x) cuando x → a existe; (3) ese límite es igual a f(a).' },
      { q: '¿Qué significa que f sea continua en un intervalo cerrado [a, b]?', a: 'Que es continua en cada punto del interior (a, b), continua por la derecha en a y continua por la izquierda en b.' },
      { q: '¿En qué se diferencian las discontinuidades removible, de salto e infinita?', a: 'Removible: el límite existe pero no coincide con el valor (o no hay valor). Salto: los laterales son finitos y distintos. Infinita: algún lateral tiende a ∞ o −∞.' },
      { q: '¿Son continuos los polinomios y las funciones racionales?', a: 'Los polinomios son continuos en todos los reales. Una función racional es continua en todos los puntos donde el denominador no se anula, es decir, en su dominio.' },
      { q: 'Enuncia el Teorema del Valor Intermedio y menciona qué hipótesis es indispensable.', a: 'Si f es continua en [a, b] y N está entre f(a) y f(b), existe c en (a, b) con f(c) = N. La continuidad en todo el intervalo es indispensable.' },
      { q: 'Si f(−1) = −1 y f(1) = 1, ¿se puede asegurar que f tiene un cero en (−1, 1)?', a: 'Solo si f es continua en [−1, 1]. Con f(x) = 1/x los signos cambian pero no hay ceros, porque f no es continua en 0.' },
      { q: 'Si f(a) y f(b) tienen el mismo signo, ¿se concluye que no hay raíces en (a, b)?', a: 'No. El TVI solo garantiza raíces cuando hay cambio de signo; con el mismo signo puede haber cero o un número par de raíces (por ejemplo x² − 1 en [−2, 2] tiene dos).' },
      { q: '¿Toda función continua es derivable? ¿Toda derivable es continua?', a: 'No toda continua es derivable (|x| en 0 tiene un pico). Pero toda función derivable es continua, como veremos en el tema 1.10.' }
    ],
    errores: [
      'Verificar solo el límite y olvidar que f(a) debe existir y coincidir. Revisa siempre las tres condiciones.',
      'Pensar que una discontinuidad removible "no es discontinuidad". Lo es, aunque se pueda reparar redefiniendo un solo punto.',
      'Aplicar el TVI sin comprobar que f es continua en todo el intervalo, o concluir "no hay raíz" cuando f(a) y f(b) tienen el mismo signo.',
      'Igualar mal los laterales en una función por partes (usar la fórmula equivocada en un lado). Marca qué regla corresponde a x < a y cuál a x ≥ a.'
    ],
    aplicacion: {
      titulo: 'Dimensionar una cisterna con el Teorema del Valor Intermedio',
      html: '<p>Una cisterna tiene base cuadrada de lado x metros y altura (x + 2) metros. Debe almacenar 40 m³. El volumen es <span class="math">x²(x + 2) = x³ + 2x²</span>, así que hay que resolver <span class="math">f(x) = x³ + 2x² − 40 = 0</span>.</p><p>f es un polinomio (continua). f(2) = 8 + 8 − 40 = −24 < 0 y f(3) = 27 + 18 − 40 = 5 > 0, por lo que existe una solución en (2, 3).</p><p>Bisección: m = 2.5 → f = −11.875 < 0 → [2.5, 3]; m = 2.75 → f ≈ −4.078 < 0 → [2.75, 3]; m = 2.875 → f ≈ 0.2949 > 0 → [2.75, 2.875]; m = 2.8125 → f ≈ −1.932 < 0 → [2.8125, 2.875].</p><p>La solución está en [2.8125, 2.875], es decir x ≈ 2.84 m con error menor que 0.04 m (el valor exacto es 2.867 m). Un albañil puede construir un lado de unos 2.87 m y altura 4.87 m. Con más pasos la calculadora refina la aproximación.</p>'
    },
    calc: 'continuidad',
    examen: [
      { tipo: 'num', q: '¿Qué valor de k hace continua en x = 3 la función <span class="math">f(x) = (x² − 9)/(x − 3)</span> para x ≠ 3, <span class="math">f(3) = k</span>?', r: 6, tol: 0.01, pasos: ['Se necesita <span class="math">k = lím<sub>x→3</sub> f(x)</span>.', 'Para x ≠ 3: <span class="math">(x − 3)(x + 3)/(x − 3) = x + 3</span>.', 'El límite es 6, entonces k = 6.'] },
      { tipo: 'num', q: 'Halla a para que <span class="math">f(x) = ax + 1</span> si x ≤ 2 y <span class="math">f(x) = x² − a</span> si x > 2 sea continua en x = 2.', r: 1, tol: 0.01, pasos: ['Izquierda y valor: 2a + 1.', 'Derecha: 4 − a.', 'Igualamos: 2a + 1 = 4 − a, entonces 3a = 3 y a = 1.'] },
      { tipo: 'opt', q: 'La función <span class="math">f(x) = (x² − 1)/(x − 1)</span> en x = 1 tiene una discontinuidad:', opciones: ['De salto', 'Infinita', 'Continua en x = 1', 'Removible'], correcta: 3, pasos: ['Para x ≠ 1: f(x) = x + 1, luego el límite en 1 es 2.', 'f(1) no está definida (<span class="math">0/0</span>).', 'El límite existe pero f(1) no: es removible (se repara con f(1) = 2).'] },
      { tipo: 'num', q: 'Para eliminar la discontinuidad de <span class="math">f(x) = (x² − 4)/(x + 2)</span> en x = −2, ¿qué valor se debe asignar a f(−2)?', r: -4, tol: 0.01, pasos: ['Para x ≠ −2: <span class="math">(x − 2)(x + 2)/(x + 2) = x − 2</span>.', 'El límite en −2 es −4.', 'Se define f(−2) = −4.'] },
      { tipo: 'num', q: 'Sea <span class="math">f(x) = x − 1</span> si x < 0 y <span class="math">f(x) = x² + 3</span> si x ≥ 0. Calcula el tamaño del salto en x = 0 (límite derecho menos límite izquierdo).', r: 4, tol: 0.01, pasos: ['Izquierda: 0 − 1 = −1.', 'Derecha: 0 + 3 = 3.', 'Salto: 3 − (−1) = 4.'] },
      { tipo: 'lista', q: 'Halla a y b para que sea continua: <span class="math">f(x) = −2</span> si x ≤ −1; <span class="math">f(x) = ax + b</span> si −1 < x < 3; <span class="math">f(x) = 4</span> si x ≥ 3. Escribe a, b separados por coma.', r: [1.5, -0.5], tol: 0.01, pasos: ['En x = −1: −a + b = −2.', 'En x = 3: 3a + b = 4.', 'Restando: 4a = 6, entonces a = 1.5.', 'Entonces b = −2 + 1.5 = −0.5.'] },
      { tipo: 'opt', q: 'Sea <span class="math">f(x) = 1/x</span>. Como f(−1) = −1 < 0 < 1 = f(1), ¿se puede asegurar que existe c en (−1, 1) con f(c) = 0?', opciones: ['Sí, por el Teorema del Valor Intermedio', 'No: no se puede aplicar el TVI porque f no es continua en x = 0', 'Sí, c = 0', 'No, porque f(1) es positivo'], correcta: 1, pasos: ['El TVI exige continuidad en todo [−1, 1].', 'f no está definida en x = 0, así que no es continua en [−1, 1].', 'No se puede concluir nada (de hecho 1/x nunca vale 0).'] },
      { tipo: 'num', q: 'Para aproximar una raíz de <span class="math">f(x) = x³ − x − 1</span> en [1, 2] por bisección, se evalúa f(1.5). Como f(1.5) > 0, ¿cuál es el siguiente punto medio que se evalúa?', r: 1.25, tol: 0.01, pasos: ['f(1.5) = 3.375 − 1.5 − 1 = 0.875 > 0.', 'Como f(1) = −1 < 0, la raíz está en [1, 1.5].', 'Nuevo punto medio: (1 + 1.5)/2 = 1.25.'] },
      { tipo: 'num', q: 'Halla k para que <span class="math">f(x) = (√(x + 3) − 2)/(x − 1)</span> si x ≠ 1 y <span class="math">f(1) = k</span> sea continua en x = 1. Da el valor decimal.', r: 0.25, tol: 0.01, pasos: ['Conjugado <span class="math">√(x + 3) + 2</span>: numerador <span class="math">(x + 3) − 4 = x − 1</span>.', 'Queda <span class="math">1/(√(x + 3) + 2)</span>.', 'En x = 1: <span class="math">1/4</span> = 0.25.'] },
      { tipo: 'par', q: 'La gráfica de <span class="math">f(x) = (x² − x − 6)/(x − 3)</span> tiene un hueco. Escribe sus coordenadas (x, y).', r: [3, 5], tol: 0.01, pasos: ['Factoriza: <span class="math">(x − 3)(x + 2)/(x − 3) = x + 2</span> para x ≠ 3.', 'f no está definida en x = 3.', 'El límite es 3 + 2 = 5: el hueco está en (3, 5).'] }
    ]
  };

})();

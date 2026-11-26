/* data-1a-u6d.js — Tema 1.18: Producto escalar de vectores (Unidad 7, lección 2 MINED).
   Formato compacto: `…` = matemática, "|" separa pasos. */
window.CURSO_1A = window.CURSO_1A || { temas: {} };
(function () {
  var T = window.CURSO_1A.temas;
  function m(s) { return String(s).replace(/`([^`]+)`/g, '<span class="math">$1</span>'); }
  function pasos(s) { return s.split('|').map(m); }
  function tema(id, o) {
    T[id] = {
      id: id, unidad: 4, titulo: o.titulo, resumen: o.resumen, objetivos: o.objetivos,
      teoria: o.teoria.map(function (x) { return { titulo: x[0], html: '<p>' + m(x[1]) + '</p>' }; }),
      formulas: o.formulas.map(function (x) { return { label: x[0], html: x[1] }; }),
      ejemplos: o.ejemplos.map(function (x) { return { titulo: x[0], enunciado: m(x[1]), pasos: pasos(x[2]), respuesta: m(x[3]) }; }),
      ejercicios: o.ejercicios.map(function (x) { return { nivel: { f: 'facil', i: 'intermedio', d: 'dificil' }[x[0]], enunciado: m(x[1]), pasos: pasos(x[2]), respuesta: m(x[3]) }; }),
      teoricas: o.teoricas.map(function (x) { return { q: x[0], a: m(x[1]) }; }),
      errores: o.errores.map(m), aplicacion: { titulo: o.aplicacion[0], html: '<p>' + m(o.aplicacion[1]) + '</p>' }, calc: o.calc,
      /* [pregunta, número, pasos]  o  [pregunta, [4 opciones], correcta, pasos] */
      examen: o.examen.map(function (x) {
        return Array.isArray(x[1]) ? { tipo: 'opt', q: m(x[0]), opciones: x[1].map(m), correcta: x[2], pasos: pasos(x[3]) }
          : { tipo: 'num', q: m(x[0]), r: x[1], tol: 0.01, pasos: pasos(x[2]) };
      })
    };
  }

  tema('1.18', {
    titulo: 'Producto escalar de vectores', calc: 'vector2',
    resumen: 'Multiplicarás dos vectores para obtener un número: ángulo entre ellos, perpendicularidad, proyecciones y el trabajo de una fuerza.',
    objetivos: ['Calcular el producto escalar en componentes y con la definición geométrica.', 'Hallar el ángulo entre dos vectores.', 'Reconocer vectores ortogonales con a·b = 0.', 'Calcular proyecciones escalar y vectorial, y el trabajo W = F·d.'],
    teoria: [
      ['¿Qué es el producto escalar?', 'Es una operación que toma <strong>dos vectores</strong> y devuelve <strong>un número</strong> (un escalar, no un vector). Se escribe `a·b`. Sirve para medir cuánto "apuntan hacia el mismo lado" dos vectores.'],
      ['Definición geométrica', 'Si `θ` es el ángulo entre `a` y `b` (con `0° ≤ θ ≤ 180°`), entonces `a·b = ‖a‖·‖b‖·cos θ`. Si el ángulo es agudo el resultado es positivo; si es obtuso, negativo.'],
      ['En componentes', 'Para `a = (a₁, a₂)` y `b = (b₁, b₂)`: `a·b = a₁b₁ + a₂b₂`. Se multiplican las primeras componentes, luego las segundas, y se suman. Ejemplo: `(3, 4)·(2, −1) = 6 − 4 = 2`.'],
      ['Propiedades', 'Conmutativa: `a·b = b·a`. Distributiva: `a·(b + c) = a·b + a·c`. Con escalares: `(r·a)·b = r·(a·b)`. Consigo mismo: `a·a = ‖a‖²`, de donde `‖a‖ = √(a·a)`.'],
      ['Ángulo entre vectores', 'Despejando de la definición: `cos θ = (a·b) / (‖a‖·‖b‖)`. Se calcula el producto escalar y las dos normas, se divide, y con la calculadora se halla `θ = cos⁻¹(…)`.'],
      ['Ortogonalidad', 'Dos vectores no nulos son <strong>ortogonales</strong> (perpendiculares) si y solo si `a·b = 0`, porque `cos 90° = 0`. Es la prueba más rápida de una escuadra entre vectores.'],
      ['Proyección escalar', 'La <strong>proyección escalar</strong> de `a` sobre `b` es la longitud con signo de la "sombra" de `a` sobre la recta de `b`: `comp_b a = (a·b) / ‖b‖`. Es negativa si el ángulo es obtuso.'],
      ['Proyección vectorial', 'Es esa sombra como vector, con la dirección de `b`: `proy_b a = ((a·b) / ‖b‖²)·b`. Lo que sobra, `a − proy_b a`, es ortogonal a `b`.'],
      ['Trabajo de una fuerza', 'Si una fuerza `F` mueve un objeto un desplazamiento `d`, el trabajo es `W = F·d = ‖F‖·‖d‖·cos θ`. Solo cuenta la parte de la fuerza que va en la dirección del movimiento.']
    ],
    formulas: [
      ['Definición geométrica', 'a·b = ‖a‖‖b‖cos θ'],
      ['En componentes', 'a·b = a₁b₁ + a₂b₂'],
      ['Norma desde el producto', '‖a‖ = √(a·a)'],
      ['Ángulo entre vectores', 'cos θ = (a·b) / (‖a‖‖b‖)'],
      ['Ortogonales', 'a ⊥ b  ⇔  a·b = 0'],
      ['Proyección escalar de a sobre b', 'comp_b a = (a·b) / ‖b‖'],
      ['Proyección vectorial de a sobre b', 'proy_b a = ((a·b) / ‖b‖²) b'],
      ['Trabajo', 'W = F·d = ‖F‖‖d‖cos θ']
    ],
    ejemplos: [
      ['Producto en componentes', 'Calcula `a·b` si `a = (3, 4)` y `b = (2, −1)`.', 'Primeras componentes: `3·2 = 6`.|Segundas componentes: `4·(−1) = −4`.|Suma: `6 + (−4) = 2`.', '`a·b = 2`'],
      ['Definición geométrica', 'Si `‖a‖ = 4`, `‖b‖ = 5` y el ángulo entre ellos es 60°, halla `a·b`. ¿Y si el ángulo fuera 120°?', 'Con 60°: `4·5·cos 60° = 20·(1/2) = 10`.|Con 120°: `cos 120° = −1/2`, así que `20·(−1/2) = −10`.|El ángulo obtuso da producto negativo.', '10 y −10'],
      ['Ángulo entre dos vectores', 'Halla el ángulo entre `a = (1, 2)` y `b = (3, 1)`.', '`a·b = 3 + 2 = 5`.|`‖a‖ = √5` y `‖b‖ = √10`, así que `‖a‖‖b‖ = √50`.|`cos θ = 5/√50 = 1/√2 ≈ 0.7071`.|`θ = cos⁻¹(0.7071) = 45°`.', '`θ = 45°`'],
      ['Valor de k para ortogonalidad', 'Halla `k` para que `a = (k, 3)` y `b = (6, −4)` sean perpendiculares.', 'Perpendiculares: `a·b = 0`.|`6k + 3(−4) = 6k − 12`.|`6k − 12 = 0`, luego `k = 2`.', '`k = 2`'],
      ['Proyecciones', 'Proyecta `a = (2, 4)` sobre `b = (6, 2)`.', '`a·b = 12 + 8 = 20`.|`‖b‖² = 36 + 4 = 40`, `‖b‖ = √40 ≈ 6.325`.|Escalar: `20/√40 ≈ 3.162`.|Vectorial: `(20/40)·(6, 2) = (3, 1)`.|Comprobación: `a − (3, 1) = (−1, 3)` y `(−1, 3)·(6, 2) = 0`.', 'Escalar ≈ 3.162; vectorial `(3, 1)`'],
      ['Trabajo de una fuerza', 'Una fuerza `F = (6, 8)` N mueve un objeto el desplazamiento `d = (5, 2)` m. Halla el trabajo.', '`W = F·d`.|`6·5 + 8·2 = 30 + 16`.|`W = 46`; la unidad es el joule (N·m).', '`W = 46 J`']
    ],
    ejercicios: [
      ['f', 'Calcula `(2, 3)·(4, 1)`.', '`2·4 = 8` y `3·1 = 3`.|`8 + 3 = 11`.', '11'],
      ['f', 'Calcula `(−1, 5)·(3, 2)`.', '`(−1)(3) = −3` y `5·2 = 10`.|`−3 + 10 = 7`.', '7'],
      ['f', 'Si `‖a‖ = 8`, `‖b‖ = 5` y `θ = 60°`, halla `a·b`.', '`8·5·cos 60°`.|`40·(1/2) = 20`.', '20'],
      ['f', 'Halla `a·a` si `a = (3, −4)`. ¿Qué representa?', '`9 + 16 = 25`.|Es `‖a‖²`, así que `‖a‖ = 5`.', '`25 = ‖a‖²`'],
      ['f', '¿Son ortogonales `(2, 3)` y `(−3, 2)`?', '`2(−3) + 3·2 = −6 + 6`.|Da 0, luego sí son perpendiculares.', 'Sí, `a·b = 0`'],
      ['i', 'Halla el ángulo entre `(2, 0)` y `(1, 1)`.', '`a·b = 2`, `‖a‖ = 2`, `‖b‖ = √2`.|`cos θ = 2/(2√2) = 1/√2`.|`θ = 45°`.', '45°'],
      ['i', 'Halla `k` para que `(k, 4)` y `(3, −6)` sean ortogonales.', '`3k + 4(−6) = 3k − 24`.|`3k − 24 = 0`.|`k = 8`.', '`k = 8`'],
      ['i', 'Halla el ángulo entre `(1, √3)` y `(−1, 0)`.', '`a·b = −1`; `‖a‖ = 2`; `‖b‖ = 1`.|`cos θ = −1/2`.|`θ = 120°` (obtuso, como el producto negativo).', '120°'],
      ['i', 'Halla la proyección escalar de `a = (2, 5)` sobre `b = (3, 4)`.', '`a·b = 6 + 20 = 26`.|`‖b‖ = 5`.|`26/5 = 5.2`.', '5.2'],
      ['d', 'Halla `proy_b a` y la parte ortogonal si `a = (1, 7)` y `b = (1, 1)`.', '`a·b = 8` y `‖b‖² = 2`.|`proy = (8/2)(1, 1) = (4, 4)`.|Parte ortogonal: `(1, 7) − (4, 4) = (−3, 3)`.|Comprobación: `(−3, 3)·(1, 1) = 0`.', '`(4, 4)` y `(−3, 3)`'],
      ['d', 'Dados `A(1, 1)`, `B(4, 1)` y `C(2, 4)`, halla el ángulo en `A` del triángulo.', '`AB = (3, 0)` y `AC = (1, 3)`.|`AB·AC = 3`; `‖AB‖ = 3`; `‖AC‖ = √10`.|`cos A = 3/(3√10) = 1/√10 ≈ 0.3162`.|`A ≈ 71.57°`.', '≈ 71.57°'],
      ['d', 'Si `‖a‖ = 3`, `‖b‖ = 4` y `a·b = 6`, halla el ángulo y `(a + b)·(a − b)`.', '`cos θ = 6/12 = 1/2`, así que `θ = 60°`.|`(a + b)·(a − b) = a·a − b·b`.|`= 9 − 16 = −7`.', '`θ = 60°` y −7']
    ],
    teoricas: [
      ['¿El producto escalar da un vector o un número?', 'Un número (escalar). Por eso se llama producto escalar.'],
      ['¿Qué indica que `a·b` sea negativo?', 'Que el ángulo entre los vectores es obtuso (mayor que 90°).'],
      ['Si `a·b = 0`, ¿los vectores siempre son perpendiculares?', 'Si ninguno es el vector nulo, sí. Si alguno es `(0, 0)`, el producto también es 0.'],
      ['¿Importa el orden: `a·b` o `b·a`?', 'No, el producto escalar es conmutativo. Pero la proyección de a sobre b es distinta de la de b sobre a.'],
      ['¿Por qué `a·a = ‖a‖²`?', 'Porque el ángulo de a consigo mismo es 0° y `cos 0° = 1`. En componentes, `a₁² + a₂²`.'],
      ['¿Cuándo es máximo `a·b` con normas fijas?', 'Cuando los vectores son paralelos y del mismo sentido, pues `cos θ = 1`.'],
      ['¿Por qué una fuerza perpendicular al movimiento no hace trabajo?', 'Porque `cos 90° = 0`, entonces `W = F·d = 0`: nada de la fuerza ayuda a avanzar.'],
      ['¿La proyección escalar puede ser negativa?', 'Sí, si el ángulo es obtuso: la sombra cae en sentido contrario a b.']
    ],
    errores: ['Multiplicar y dejar un vector, como `(a₁b₁, a₂b₂)`, en vez de sumar para obtener un número.', 'Olvidar dividir entre `‖a‖‖b‖` al calcular `cos θ`, o dividir entre una sola norma.', 'Confundir `‖b‖` con `‖b‖²` en la proyección vectorial (la escalar usa `‖b‖`; la vectorial, `‖b‖²`).', 'Dar un ángulo en radianes con la calculadora en grados (o al revés).'],
    aplicacion: ['Trabajo de una fuerza', 'Al empujar un carrito con una cuerda inclinada, solo la parte de la fuerza en la dirección del movimiento cuenta: `W = ‖F‖‖d‖cos θ`. Con `‖F‖ = 20` N, `‖d‖ = 5` m y `θ = 60°`: `W = 20·5·0.5 = 50` J.'],
    examen: [
      ['Calcula `(3, −2)·(4, 5)`.', 2, '`12 − 10`.|Resultado: 2.'],
      ['Si `‖a‖ = 5`, `‖b‖ = 2` y `θ = 60°`, halla `a·b`.', 5, '`5·2·cos 60°`.|`10·0.5 = 5`.'],
      ['Halla `k` para que `(k, 2)` y `(3, −6)` sean perpendiculares.', 4, '`3k − 12 = 0`.|`k = 4`.'],
      ['Halla el ángulo, en grados, entre `(1, 0)` y `(1, 1)`.', 45, '`a·b = 1`, `‖a‖ = 1`, `‖b‖ = √2`.|`cos θ = 1/√2`, `θ = 45°`.'],
      ['Halla la proyección escalar de `(3, 4)` sobre `(0, 5)`.', 4, '`a·b = 20`.|`‖b‖ = 5`, `20/5 = 4`.'],
      ['Una fuerza `F = (2, 3)` N produce el desplazamiento `d = (5, 4)` m. Halla el trabajo en J.', 22, '`2·5 + 3·4`.|`10 + 12 = 22`.'],
      ['Halla `cos θ` entre `(3, 4)` y `(4, 3)`.', 0.96, '`a·b = 24` y `‖a‖‖b‖ = 25`.|`24/25 = 0.96`.'],
      ['Si `a·b < 0`, el ángulo entre a y b es…', ['Agudo', 'Recto', 'Obtuso', 'Nulo'], 2, '`cos θ < 0`.|Eso ocurre cuando `90° < θ ≤ 180°`: obtuso.'],
      ['¿Cuál es la condición de perpendicularidad?', ['`a·b = 1`', '`a·b = 0`', '`‖a‖ = ‖b‖`', '`a = r·b`'], 1, '`cos 90° = 0`.|Por eso `a·b = 0`.'],
      ['¿Qué es verdad del producto escalar?', ['Da un vector', 'No es conmutativo', 'a·a = ‖a‖²', 'Siempre es positivo'], 2, 'Da un número, es conmutativo y puede ser negativo.|Sí se cumple `a·a = ‖a‖²`.']
    ]
  });

})();

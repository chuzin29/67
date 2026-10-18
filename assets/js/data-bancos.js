window.BANCO_PRACTICOS = [
  {
    id: 1,
    tema: 'Ley de Senos',
    titulo: 'Lado a con Ley de Senos',
    enunciado: 'En un triángulo ABC, se conoce que el ángulo A = 45°, el ángulo C = 60° y el lado c = 10 cm. Calcula la longitud del lado a.',
    respuesta: 'a = 10√6/3 ≈ 8.165 cm',
    pasos: [
      'La Ley de Senos relaciona lados y ángulos opuestos: <span class="math">a/sen A = c/sen C</span>.',
      'Sustituye los valores conocidos: <span class="math">a/sen 45° = 10/sen 60°</span>.',
      'Despeja el lado buscado: <span class="math">a = 10 · sen 45°/sen 60°</span>.',
      'Sustituye <span class="math">sen 45° = √2/2</span> y <span class="math">sen 60° = √3/2</span>: <span class="math">a = 10√2/√3</span>.',
      'Racionaliza y calcula: <span class="math">a = 10√6/3 ≈ 8.165 cm</span>.'
    ]
  },
  {
    id: 2,
    tema: 'Ley del Coseno',
    titulo: 'Tercer lado con Ley del Coseno',
    enunciado: 'Dado un triángulo con lados a = 7 cm, b = 5 cm y el ángulo comprendido C = 60°, determina la longitud del tercer lado c.',
    respuesta: 'c = √39 ≈ 6.245 cm',
    pasos: [
      'Aplica la Ley del Coseno: <span class="math">c² = a² + b² − 2ab · cos C</span>.',
      'Sustituye los datos: <span class="math">c² = 7² + 5² − 2 · 7 · 5 · cos 60°</span>.',
      'Como <span class="math">cos 60° = 1/2</span>, queda <span class="math">c² = 49 + 25 − 35 = 39</span>.',
      'Extrae la raíz positiva: <span class="math">c = √39 ≈ 6.245 cm</span>.'
    ]
  },
  {
    id: 3,
    tema: 'Vectores',
    titulo: 'Combinación lineal 2u + 3v',
    enunciado: 'Dados los vectores u = (3, −4) y v = (1, 2), determina el vector resultante de la operación 2u + 3v.',
    respuesta: '(9, −2)',
    pasos: [
      'Multiplica cada vector por su escalar: <span class="math">2u = 2(3, −4) = (6, −8)</span> y <span class="math">3v = 3(1, 2) = (3, 6)</span>.',
      'Suma componente a componente: <span class="math">2u + 3v = (6 + 3, −8 + 6)</span>.',
      'Simplifica: <span class="math">2u + 3v = (9, −2)</span>.'
    ]
  },
  {
    id: 4,
    tema: 'Números Complejos',
    titulo: 'Suma de complejos en forma binomial',
    enunciado: 'Dados los números complejos z₁ = 4 − 3i y z₂ = 2 + 5i, calcula la suma z₁ + z₂.',
    respuesta: '6 + 2i',
    pasos: [
      'Suma por separado las partes reales y las imaginarias: <span class="math">(4 + 2) + (−3 + 5)i</span>.',
      'Opera cada parte: <span class="math">6 + 2i</span>.',
      'Por lo tanto, <span class="math">z₁ + z₂ = 6 + 2i</span>.'
    ]
  },
  {
    id: 5,
    tema: 'Números Complejos',
    titulo: 'Producto de números complejos',
    enunciado: 'Calcula el producto de los números complejos z₁ = 2 + 3i y z₂ = 1 − 4i.',
    respuesta: '14 − 5i',
    pasos: [
      'Aplica la propiedad distributiva: <span class="math">(2 + 3i)(1 − 4i) = 2(1 − 4i) + 3i(1 − 4i)</span>.',
      'Desarrolla: <span class="math">= 2 − 8i + 3i − 12i²</span>.',
      'Usa <span class="math">i² = −1</span>: <span class="math">= 2 − 5i + 12</span>.',
      'Agrupa los términos y obtén <span class="math">14 − 5i</span>.'
    ]
  },
  {
    id: 6,
    tema: 'Identidades Trigonométricas',
    titulo: 'Coseno desde el seno en el Cuadrante I',
    enunciado: 'Si se sabe que sen θ = 3/5 y que el ángulo θ se encuentra en el Cuadrante I, calcula el valor exacto de cos θ.',
    respuesta: 'cos θ = 4/5',
    pasos: [
      'Usa la identidad pitagórica: <span class="math">sen² θ + cos² θ = 1</span>.',
      'Despeja: <span class="math">cos² θ = 1 − (3/5)² = 1 − 9/25 = 16/25</span>.',
      'Extrae la raíz: <span class="math">|cos θ| = 4/5</span>.',
      'En el Cuadrante I el coseno es positivo, así que <span class="math">cos θ = 4/5</span>.'
    ]
  },
  {
    id: 7,
    tema: 'Estadística',
    titulo: 'Media aritmética de calificaciones',
    enunciado: 'Encuentra la media aritmética del siguiente conjunto de calificaciones de un examen de Precálculo: 7.0, 8.5, 9.0, 6.0 y 7.5.',
    respuesta: '7.6',
    pasos: [
      'Suma todas las calificaciones: <span class="math">7.0 + 8.5 + 9.0 + 6.0 + 7.5 = 38</span>.',
      'Cuenta los datos: <span class="math">n = 5</span>.',
      'Divide la suma entre el número de datos: <span class="math">x̄ = 38/5 = 7.6</span>.'
    ]
  },
  {
    id: 8,
    tema: 'Estadística',
    titulo: 'Mediana de un conjunto par',
    enunciado: 'Determina la mediana del conjunto de datos ordenados: 4, 6, 8, 10, 12, 15.',
    respuesta: '9',
    pasos: [
      'Verifica el orden: <span class="math">4, 6, 8, 10, 12, 15</span>.',
      'Como hay seis datos, toma los dos centrales: <span class="math">8</span> y <span class="math">10</span>.',
      'Calcula su promedio: <span class="math">(8 + 10)/2 = 9</span>.',
      'Por lo tanto, la mediana es <span class="math">9</span>.'
    ]
  },
  {
    id: 9,
    tema: 'Estadística',
    titulo: 'Moda de un registro de notas',
    enunciado: 'Halla la moda en el siguiente registro de notas de estudiantes: 6, 7, 8, 8, 9, 8, 10, 7.',
    respuesta: '8',
    pasos: [
      'Cuenta las frecuencias: <span class="math">6:1, 7:2, 8:3, 9:1, 10:1</span>.',
      'El valor con mayor frecuencia es <span class="math">8</span>, que aparece tres veces.',
      'Por lo tanto, la moda es <span class="math">8</span>.'
    ]
  },
  {
    id: 10,
    tema: 'Ley de Senos',
    titulo: 'Caso ambiguo: valor de sen B',
    enunciado: 'Dado un triángulo con a = 5, b = 8 y A = 30°, utiliza la Ley del Seno para determinar el valor de sen B.',
    respuesta: 'sen B = 0.8 (B ≈ 53.13° o B ≈ 126.87°)',
    pasos: [
      'Plantea la Ley de Senos: <span class="math">sen B/b = sen A/a</span>.',
      'Despeja: <span class="math">sen B = b · sen A/a = 8 · sen 30°/5</span>.',
      'Sustituye <span class="math">sen 30° = 1/2</span>: <span class="math">sen B = 8 · (1/2)/5 = 4/5 = 0.8</span>.',
      'El ángulo principal es <span class="math">B = arcsen(0.8) ≈ 53.13°</span>.',
      'El caso ambiguo admite el suplemento: <span class="math">B ≈ 180° − 53.13° = 126.87°</span>; por tanto, <span class="math">sen B = 0.8</span> con <span class="math">B ≈ 53.13°</span> o <span class="math">B ≈ 126.87°</span>.'
    ]
  },
  {
    id: 11,
    tema: 'Ley del Coseno',
    titulo: 'Ángulo desde tres lados (LLL)',
    enunciado: 'En un triángulo con lados a = 5, b = 7 y c = 8, calcula el valor del coseno del ángulo C.',
    respuesta: 'cos C = 1/7',
    pasos: [
      'Despeja el coseno en la Ley del Coseno: <span class="math">cos C = (a² + b² − c²)/(2ab)</span>.',
      'Sustituye los lados: <span class="math">cos C = (5² + 7² − 8²)/(2 · 5 · 7)</span>.',
      'Opera el numerador y el denominador: <span class="math">cos C = (25 + 49 − 64)/70 = 10/70</span>.',
      'Simplifica: <span class="math">cos C = 1/7</span>.'
    ]
  },
  {
    id: 12,
    tema: 'Vectores',
    titulo: 'Norma de un vector en el plano',
    enunciado: 'Calcula la norma (magnitud) del vector v = (−5, 12).',
    respuesta: '‖v‖ = 13',
    pasos: [
      'Usa la fórmula de la norma: <span class="math">‖v‖ = √(x² + y²)</span>.',
      'Sustituye las componentes: <span class="math">‖v‖ = √((−5)² + 12²)</span>.',
      'Calcula los cuadrados: <span class="math">‖v‖ = √(25 + 144) = √169</span>.',
      'Obtén la raíz: <span class="math">‖v‖ = 13</span>.'
    ]
  },
  {
    id: 13,
    tema: 'Números Complejos',
    titulo: 'Conjugado de un número complejo',
    enunciado: 'Determina el conjugado del número complejo z = −6 − 7i.',
    respuesta: 'z̄ = −6 + 7i',
    pasos: [
      'El conjugado de <span class="math">z = a + bi</span> es <span class="math">z̄ = a − bi</span>.',
      'Con <span class="math">a = −6</span> y <span class="math">b = −7</span>, cambia el signo de la parte imaginaria: <span class="math">z̄ = −6 + 7i</span>.',
      'Por lo tanto, <span class="math">z̄ = −6 + 7i</span>.'
    ]
  },
  {
    id: 14,
    tema: 'Números Complejos',
    titulo: 'Módulo de un número complejo',
    enunciado: 'Calcula el módulo o norma del número complejo z = 3 − 4i.',
    respuesta: '|z| = 5',
    pasos: [
      'Usa la fórmula del módulo: <span class="math">|z| = √(a² + b²)</span>.',
      'Sustituye <span class="math">a = 3</span> y <span class="math">b = −4</span>: <span class="math">|z| = √(3² + (−4)²)</span>.',
      'Calcula: <span class="math">|z| = √(9 + 16) = √25</span>.',
      'Obtén el resultado: <span class="math">|z| = 5</span>.'
    ]
  },
  {
    id: 15,
    tema: 'Identidades Trigonométricas',
    titulo: 'Tangente en el Cuadrante II',
    enunciado: 'Si cos θ = −4/5 y el ángulo θ pertenece al Cuadrante II, calcula el valor de tan θ.',
    respuesta: 'tan θ = −3/4',
    pasos: [
      'En el Cuadrante II el seno es positivo y el coseno es negativo.',
      'Calcula el seno: <span class="math">sen² θ = 1 − (−4/5)² = 9/25</span>, de modo que <span class="math">sen θ = 3/5</span>.',
      'Usa <span class="math">tan θ = sen θ/cos θ</span>: <span class="math">tan θ = (3/5)/(−4/5)</span>.',
      'Simplifica: <span class="math">tan θ = −3/4</span>.'
    ]
  },
  {
    id: 16,
    tema: 'Estadística',
    titulo: 'Media de cinco datos',
    enunciado: 'Calcula la media de los datos: 12, 15, 18, 20, 25.',
    respuesta: '18',
    pasos: [
      'Suma los datos: <span class="math">12 + 15 + 18 + 20 + 25 = 90</span>.',
      'Como hay cinco datos, divide la suma entre 5: <span class="math">x̄ = 90/5</span>.',
      'La media es <span class="math">18</span>.'
    ]
  },
  {
    id: 17,
    tema: 'Estadística',
    titulo: 'Mediana después de ordenar',
    enunciado: 'Halla la mediana del conjunto de datos: 3, 11, 7, 2, 9, 5 (recuerda ordenarlos previamente).',
    respuesta: '6',
    pasos: [
      'Ordena los datos de menor a mayor: <span class="math">2, 3, 5, 7, 9, 11</span>.',
      'Hay seis datos, así que toma los dos centrales: <span class="math">5</span> y <span class="math">7</span>.',
      'Calcula el promedio de los centrales: <span class="math">(5 + 7)/2 = 6</span>.',
      'Por lo tanto, la mediana es <span class="math">6</span>.'
    ]
  },
  {
    id: 18,
    tema: 'Estadística',
    titulo: 'Moda de un conjunto de datos',
    enunciado: 'Identifica la moda del conjunto de datos: 22, 25, 22, 30, 28, 25, 22, 35.',
    respuesta: '22',
    pasos: [
      'Cuenta las frecuencias: <span class="math">22:3, 25:2, 28:1, 30:1, 35:1</span>.',
      'El valor con mayor frecuencia es <span class="math">22</span>, que aparece tres veces.',
      'Por lo tanto, la moda es <span class="math">22</span>.'
    ]
  },
  {
    id: 19,
    tema: 'Vectores',
    titulo: 'Producto de un vector por un escalar',
    enunciado: 'Si u = (−2, 6), calcula el vector resultante de multiplicar por el escalar r = −3.',
    respuesta: '(6, −18)',
    pasos: [
      'Multiplica cada componente por <span class="math">r = −3</span>: <span class="math">r u = −3 · (−2, 6)</span>.',
      'Calcula: <span class="math">(−3 · (−2), −3 · 6) = (6, −18)</span>.',
      'El resultado es <span class="math">(6, −18)</span>.'
    ]
  },
  {
    id: 20,
    tema: 'Números Complejos',
    titulo: 'Resta de números complejos',
    enunciado: 'Dados z₁ = 8 − 2i y z₂ = 3 + 4i, efectúa la operación z₁ − z₂.',
    respuesta: '5 − 6i',
    pasos: [
      'Resta las partes reales e imaginarias: <span class="math">(8 − 3) + (−2 − 4)i</span>.',
      'Opera: <span class="math">5 − 6i</span>.',
      'Por lo tanto, <span class="math">z₁ − z₂ = 5 − 6i</span>.'
    ]
  },
  {
    id: 21,
    tema: 'Ley de Senos',
    titulo: 'Lado b con Ley de Senos',
    enunciado: 'En un triángulo ABC, si a = 12, A = 30° y B = 45°, calcula el lado b.',
    respuesta: 'b = 12√2 ≈ 16.97',
    pasos: [
      'Plantea la Ley de Senos: <span class="math">b/sen B = a/sen A</span>.',
      'Despeja <span class="math">b = a · sen B/sen A = 12 · sen 45°/sen 30°</span>.',
      'Sustituye <span class="math">sen 45° = √2/2</span> y <span class="math">sen 30° = 1/2</span>: <span class="math">b = 12√2</span>.',
      'Calcula el valor aproximado: <span class="math">b = 12√2 ≈ 16.97</span>.'
    ]
  },
  {
    id: 22,
    tema: 'Identidades Trigonométricas',
    titulo: 'Cotangente por identidad recíproca',
    enunciado: 'Sabiendo que tan θ = 2 en el Cuadrante I, calcula el valor de la cotangente de θ usando identidades recíprocas.',
    respuesta: 'cot θ = 1/2',
    pasos: [
      'La cotangente es la recíproca de la tangente: <span class="math">cot θ = 1/tan θ</span>.',
      'Sustituye <span class="math">tan θ = 2</span>: <span class="math">cot θ = 1/2</span>.',
      'El resultado es <span class="math">cot θ = 1/2</span>.'
    ]
  },
  {
    id: 23,
    tema: 'Estadística',
    titulo: 'Media aritmética de estaturas',
    enunciado: 'Si las estaturas de cuatro estudiantes en metros son 1.65, 1.70, 1.60 y 1.75, ¿cuál es su media aritmética?',
    respuesta: '1.675 m',
    pasos: [
      'Suma las estaturas: <span class="math">1.65 + 1.70 + 1.60 + 1.75 = 6.70</span>.',
      'Cuenta los datos: <span class="math">n = 4</span>.',
      'Divide la suma entre cuatro: <span class="math">x̄ = 6.70/4 = 1.675</span>.',
      'La media es <span class="math">1.675 m</span>.'
    ]
  },
  {
    id: 24,
    tema: 'Números Complejos',
    titulo: 'División entre un número real',
    enunciado: 'Simplifica el cociente de dividir el número complejo 3 + i entre el número real 2 (expresándolo en su forma binomial).',
    respuesta: '3/2 + 1/2 i',
    pasos: [
      'Divide cada término entre 2: <span class="math">(3 + i)/2 = 3/2 + i/2</span>.',
      'Escribe la parte imaginaria con el coeficiente fraccionario: <span class="math">3/2 + (1/2)i</span>.',
      'El resultado en forma binomial es <span class="math">3/2 + 1/2 i</span>.'
    ]
  }
];

window.BANCO_MOIVRE = [
  {
    id: 1,
    enunciado: 'Calcula <span class="math">z = (√3 + i)<sup>6</sup></span>.',
    formaPolar: 'r = 2, θ = 30°',
    respuesta: 'z = −64',
    pasos: [
      'Calcula el módulo con el teorema de Pitágoras: <span class="math">r = √((√3)² + 1²) = √(3 + 1) = 2</span>.',
      'Calcula el argumento con la arcotangente: <span class="math">θ = arctan(1/√3) = 30°</span>; así, <span class="math">z = 2(cos 30° + i sen 30°)</span>.',
      'Aplica la fórmula de Moivre con <span class="math">n = 6</span>: <span class="math">z⁶ = 2⁶(cos(6 · 30°) + i sen(6 · 30°))</span>.',
      'Multiplica el ángulo: <span class="math">z⁶ = 64(cos 180° + i sen 180°)</span>.',
      'Evalúa las razones trigonométricas: <span class="math">z⁶ = 64(−1 + 0i) = −64</span>.'
    ]
  },
  {
    id: 2,
    enunciado: 'Determina <span class="math">z = (1 + i)<sup>8</sup></span>.',
    formaPolar: 'r = √2, θ = 45°',
    respuesta: 'z = 16',
    pasos: [
      'Calcula el módulo con el teorema de Pitágoras: <span class="math">r = √(1² + 1²) = √2</span>.',
      'Calcula el argumento con la arcotangente: <span class="math">θ = arctan(1/1) = 45°</span>; así, <span class="math">z = √2(cos 45° + i sen 45°)</span>.',
      'Aplica la fórmula de Moivre con <span class="math">n = 8</span>: <span class="math">z⁸ = (√2)⁸(cos(8 · 45°) + i sen(8 · 45°))</span>.',
      'Multiplica el ángulo y la potencia: <span class="math">z⁸ = 16(cos 360° + i sen 360°)</span>.',
      'Evalúa: <span class="math">z⁸ = 16(1 + 0i) = 16</span>.'
    ]
  },
  {
    id: 3,
    enunciado: 'Calcula <span class="math">z = (1 − √3 i)<sup>7</sup></span>.',
    formaPolar: 'r = 2, θ = −60°',
    respuesta: 'z = 64 − 64√3 i',
    pasos: [
      'Calcula el módulo con el teorema de Pitágoras: <span class="math">r = √(1² + (−√3)²) = √(1 + 3) = 2</span>.',
      'Calcula el argumento con la arcotangente: <span class="math">θ = arctan(−√3) = −60°</span> (Cuadrante IV). Recuerda que <span class="math">sen(−60°) = −√3/2 ≈ −0.8660</span>; así, <span class="math">z = 2(cos(−60°) + i sen(−60°))</span>.',
      'Aplica la fórmula de Moivre con <span class="math">n = 7</span>: <span class="math">z⁷ = 2⁷(cos(7 · (−60°)) + i sen(7 · (−60°))) = 128(cos(−420°) + i sen(−420°))</span>.',
      'Reduce el ángulo sumando 360°: <span class="math">−420° + 360° = −60°</span>, entonces <span class="math">z⁷ = 128(cos(−60°) + i sen(−60°))</span>.',
      'Evalúa con <span class="math">cos(−60°) = 1/2</span> y <span class="math">sen(−60°) = −√3/2 ≈ −0.8660</span>: <span class="math">z⁷ = 128(1/2 − (√3/2)i) = 64 − 64√3 i</span>.'
    ]
  },
  {
    id: 4,
    enunciado: 'Determina <span class="math">z = (−1 + i)<sup>9</sup></span>.',
    formaPolar: 'r = √2, θ = 135°',
    respuesta: 'z = −16 + 16i',
    pasos: [
      'Calcula el módulo con el teorema de Pitágoras: <span class="math">r = √((−1)² + 1²) = √2</span>.',
      'Calcula el argumento con la arcotangente y ubícalo en el Cuadrante II: <span class="math">θ = 180° − arctan(1/1) = 135°</span>; así, <span class="math">z = √2(cos 135° + i sen 135°)</span>.',
      'Aplica la fórmula de Moivre con <span class="math">n = 9</span>: <span class="math">z⁹ = (√2)⁹(cos(9 · 135°) + i sen(9 · 135°)) = 16√2(cos 1215° + i sen 1215°)</span>.',
      'Reduce el ángulo: <span class="math">1215° = 3 · 360° + 135°</span>, por lo que <span class="math">1215° ≡ 135°</span> y <span class="math">z⁹ = 16√2(cos 135° + i sen 135°)</span>.',
      'Evalúa: <span class="math">z⁹ = 16√2(−√2/2 + (√2/2)i) = −16 + 16i</span>.'
    ]
  },
  {
    id: 5,
    enunciado: 'Calcula <span class="math">z = (√3 + i)<sup>8</sup></span>.',
    formaPolar: 'r = 2, θ = 30°',
    respuesta: 'z = −128 − 128√3 i',
    pasos: [
      'Calcula el módulo con el teorema de Pitágoras: <span class="math">r = √((√3)² + 1²) = √(3 + 1) = 2</span>.',
      'Calcula el argumento con la arcotangente: <span class="math">θ = arctan(1/√3) = 30°</span>; así, <span class="math">z = 2(cos 30° + i sen 30°)</span>.',
      'Aplica la fórmula de Moivre con <span class="math">n = 8</span>: <span class="math">z⁸ = 2⁸(cos(8 · 30°) + i sen(8 · 30°))</span>.',
      'Multiplica el ángulo y la potencia: <span class="math">z⁸ = 256(cos 240° + i sen 240°)</span>.',
      'Evalúa: <span class="math">z⁸ = 256(−1/2 − (√3/2)i) = −128 − 128√3 i</span>.'
    ]
  },
  {
    id: 6,
    enunciado: 'Determina <span class="math">z = (2 + 2i)<sup>6</sup></span>.',
    formaPolar: 'r = 2√2, θ = 45°',
    respuesta: 'z = −512i',
    pasos: [
      'Calcula el módulo con el teorema de Pitágoras: <span class="math">r = √(2² + 2²) = √8 = 2√2</span>.',
      'Calcula el argumento con la arcotangente: <span class="math">θ = arctan(2/2) = 45°</span>; así, <span class="math">z = 2√2(cos 45° + i sen 45°)</span>.',
      'Aplica la fórmula de Moivre con <span class="math">n = 6</span>: <span class="math">z⁶ = (2√2)⁶(cos(6 · 45°) + i sen(6 · 45°))</span>.',
      'Calcula la potencia y el ángulo: <span class="math">(2√2)⁶ = 512</span> y <span class="math">6 · 45° = 270°</span>, entonces <span class="math">z⁶ = 512(cos 270° + i sen 270°)</span>.',
      'Evalúa: <span class="math">z⁶ = 512(0 − i) = −512i</span>.'
    ]
  },
  {
    id: 7,
    enunciado: 'Calcula <span class="math">z = (−1 − √3 i)<sup>7</sup></span>.',
    formaPolar: 'r = 2, θ = 240°',
    respuesta: 'z = −64 − 64√3 i',
    pasos: [
      'Calcula el módulo con el teorema de Pitágoras: <span class="math">r = √((−1)² + (−√3)²) = √(1 + 3) = 2</span>.',
      'Calcula el argumento con la arcotangente y ubícalo en el Cuadrante III: <span class="math">θ = 180° + arctan(√3/1) = 240°</span>; así, <span class="math">z = 2(cos 240° + i sen 240°)</span>.',
      'Aplica la fórmula de Moivre con <span class="math">n = 7</span>: <span class="math">z⁷ = 2⁷(cos(7 · 240°) + i sen(7 · 240°)) = 128(cos 1680° + i sen 1680°)</span>.',
      'Reduce el ángulo: <span class="math">1680° = 4 · 360° + 240°</span>, por lo que <span class="math">1680° ≡ 240°</span> y <span class="math">z⁷ = 128(cos 240° + i sen 240°)</span>.',
      'Evalúa: <span class="math">z⁷ = 128(−1/2 − (√3/2)i) = −64 − 64√3 i</span>.'
    ]
  },
  {
    id: 8,
    enunciado: 'Determina <span class="math">z = (√2 + √2 i)<sup>8</sup></span>.',
    formaPolar: 'r = 2, θ = 45°',
    respuesta: 'z = 256',
    pasos: [
      'Calcula el módulo con el teorema de Pitágoras: <span class="math">r = √((√2)² + (√2)²) = √(2 + 2) = 2</span>.',
      'Calcula el argumento con la arcotangente: <span class="math">θ = arctan(√2/√2) = 45°</span>; así, <span class="math">z = 2(cos 45° + i sen 45°)</span>.',
      'Aplica la fórmula de Moivre con <span class="math">n = 8</span>: <span class="math">z⁸ = 2⁸(cos(8 · 45°) + i sen(8 · 45°))</span>.',
      'Multiplica el ángulo y la potencia: <span class="math">z⁸ = 256(cos 360° + i sen 360°)</span>.',
      'Evalúa: <span class="math">z⁸ = 256(1 + 0i) = 256</span>.'
    ]
  }
];

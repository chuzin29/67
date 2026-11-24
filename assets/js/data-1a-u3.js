/* data-1a-u3.js — Unidad 3: Trigonometría */
window.CURSO_1A = window.CURSO_1A || { temas: {} };
(function () {
  var T = window.CURSO_1A.temas;

  T['1.9'] = {
    id: '1.9',
    unidad: 3,
    titulo: 'Trigonometría del triángulo rectángulo',
    resumen: 'Razones trigonométricas, teorema de Pitágoras y resolución de triángulos rectángulos con ángulos de elevación y depresión.',
    objetivos: [
      'Aplicar el teorema de Pitágoras para hallar lados de un triángulo rectángulo.',
      'Definir y calcular las 6 razones trigonométricas de un ángulo agudo.',
      'Resolver triángulos rectángulos dados un lado y un ángulo, o dos lados.',
      'Modelar problemas de ángulos de elevación y depresión.'
    ],
    teoria: [
      { titulo: 'Triángulo rectángulo y teorema de Pitágoras', html: '<p>Un <strong>triángulo rectángulo</strong> tiene un ángulo recto de exactamente 90°. El lado opuesto a ese ángulo se llama <strong>hipotenusa</strong> (c) y es siempre el lado más largo; los otros dos lados se llaman <strong>catetos</strong> (a y b).</p><p>El <strong>teorema de Pitágoras</strong> establece que <span class="math">c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup></span>, relación que solo es válida en triángulos rectángulos.</p>' },
      { titulo: 'Cateto opuesto y cateto adyacente', html: '<p>Respecto a un ángulo agudo θ del triángulo, un cateto queda frente a él (cateto opuesto, CO) y el otro lo toca (cateto adyacente, CA). Esta clasificación depende de qué ángulo se tome como referencia: si se cambia de ángulo, el cateto opuesto y el adyacente intercambian su papel.</p>' },
      { titulo: 'Las 6 razones trigonométricas', html: '<p>Para un ángulo agudo θ se definen:</p><p>sen(θ) = CO/H, cos(θ) = CA/H, tan(θ) = CO/CA.</p><p>Y sus recíprocas: csc(θ) = H/CO, sec(θ) = H/CA, cot(θ) = CA/CO. La regla nemotécnica SOH-CAH-TOA ayuda a recordar las tres principales.</p>' },
      { titulo: 'Ángulos notables', html: '<p>Hay tres ángulos cuyos valores trigonométricos se conocen exactamente:</p><p>sen(30°) = 1/2, cos(30°) = √(3)/2, tan(30°) = √(3)/3.</p><p>sen(45°) = √(2)/2, cos(45°) = √(2)/2, tan(45°) = 1.</p><p>sen(60°) = √(3)/2, cos(60°) = 1/2, tan(60°) = √(3).</p>' },
      { titulo: 'Ángulos de elevación y depresión', html: '<p>El <strong>ángulo de elevación</strong> es el que forma la línea de visión de un observador hacia un objeto por encima de la horizontal; el <strong>ángulo de depresión</strong> es el formado hacia un objeto por debajo de la horizontal. Por ángulos alternos internos, el ángulo de depresión desde un punto alto es igual al ángulo de elevación visto desde el punto bajo.</p>' },
      { titulo: 'Funciones trigonométricas inversas', html: '<p>Cuando se conocen dos lados pero no el ángulo, se usan las funciones inversas: arcsen, arccos y arctan (también escritas sen<sup>-1</sup>, cos<sup>-1</sup>, tan<sup>-1</sup>). Por ejemplo, si sen(θ) = 0.6, entonces θ = arcsen(0.6) ≈ 36.87°.</p>' }
    ],
    formulas: [
      { label: 'Teorema de Pitágoras', html: '<span class="math">c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup></span>' },
      { label: 'Hipotenusa', html: '<span class="math">c = √(a<sup>2</sup> + b<sup>2</sup>)</span>' },
      { label: 'Cateto faltante', html: '<span class="math">a = √(c<sup>2</sup> - b<sup>2</sup>)</span>' },
      { label: 'Razones principales', html: 'sen(θ) = CO/H, cos(θ) = CA/H, tan(θ) = CO/CA' },
      { label: 'Razones recíprocas', html: 'csc(θ) = 1/sen(θ), sec(θ) = 1/cos(θ), cot(θ) = 1/tan(θ)' },
      { label: 'Ángulo notable 30°', html: 'sen(30°) = 1/2, cos(30°) = √(3)/2, tan(30°) = √(3)/3' },
      { label: 'Ángulo notable 45°', html: 'sen(45°) = √(2)/2, cos(45°) = √(2)/2, tan(45°) = 1' }
    ],
    ejemplos: [
      { titulo: 'Hipotenusa por Pitágoras', enunciado: 'En un triángulo rectángulo los catetos miden a = 8 cm y b = 15 cm. Calcula la hipotenusa c.', pasos: [
        'Aplica el teorema de Pitágoras: c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>.',
        'Sustituye: c<sup>2</sup> = 8<sup>2</sup> + 15<sup>2</sup> = 64 + 225 = 289.',
        'Extrae la raíz cuadrada: c = √(289) = 17.'
      ], respuesta: 'Hipotenusa c = 17 cm.' },
      { titulo: 'Cateto faltante', enunciado: 'La hipotenusa c de un triángulo rectángulo mide 2√(5) y un cateto a = 4. Halla el cateto b.', pasos: [
        'Despeja b: b = √(c<sup>2</sup> - a<sup>2</sup>).',
        'Calcula c<sup>2</sup> = (2√(5))<sup>2</sup> = 4 · 5 = 20.',
        'Sustituye: b = √(20 - 4<sup>2</sup>) = √(20 - 16) = √(4) = 2.'
      ], respuesta: 'Cateto b = 2.' },
      { titulo: 'Las 6 razones trigonométricas', enunciado: 'Un triángulo rectángulo tiene catetos a = 7 cm y b = 24 cm. Halla la hipotenusa x y las 6 razones de α respecto al cateto opuesto de 7 cm.', pasos: [
        'Halla la hipotenusa: x = √(7<sup>2</sup> + 24<sup>2</sup>) = √(49 + 576) = √(625) = 25 cm.',
        'Calcula las razones principales: sen(α) = 7/25, cos(α) = 24/25, tan(α) = 7/24.',
        'Calcula las recíprocas: csc(α) = 25/7, sec(α) = 25/24, cot(α) = 24/7.'
      ], respuesta: 'x = 25; sen(α) = 7/25, cos(α) = 24/25, tan(α) = 7/24.' },
      { titulo: 'Lados a partir de ángulo y hipotenusa', enunciado: 'Se conoce un ángulo de 38° y la hipotenusa de 45 unidades. Calcula el cateto opuesto p y el adyacente q.', pasos: [
        'Para p: sen(38°) = p/45 ⇒ p = 45 · sen(38°).',
        'Evalúa: p = 45 · 0.61566 ≈ 27.70.',
        'Para q: cos(38°) = q/45 ⇒ q = 45 · cos(38°) = 45 · 0.78801 ≈ 35.46.'
      ], respuesta: 'p ≈ 27.70 unidades; q ≈ 35.46 unidades.' },
      { titulo: 'Ángulo desconocido con función inversa', enunciado: 'En un triángulo rectángulo la hipotenusa mide H = 30 m y un cateto mide 18 m. Halla el ángulo θ opuesto a los 18 m.', pasos: [
        'Plantea la razón seno: sen(θ) = 18/30 = 0.6.',
        'Aplica la inversa: θ = arcsen(0.6).',
        'Calcula: θ ≈ 36.87°, y el complementario β = 90° - 36.87° = 53.13°.'
      ], respuesta: 'θ ≈ 36.87°; β ≈ 53.13°.' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Si un triángulo rectángulo tiene catetos a = 3 y b = 4, halla la hipotenusa.', pasos: ['c = √(3<sup>2</sup> + 4<sup>2</sup>) = √(9 + 16) = √(25).', 'c = 5.'], respuesta: 'c = 5.' },
      { nivel: 'facil', enunciado: 'Halla el valor exacto de sen(30°) + cos(60°).', pasos: ['sen(30°) = 1/2, cos(60°) = 1/2.', 'Suma: 1/2 + 1/2 = 1.'], respuesta: '1.' },
      { nivel: 'facil', enunciado: '¿Cuál es el valor exacto de tan(45°)?', pasos: ['En un triángulo notable de 45°, los dos catetos son iguales.', 'tan(45°) = a/a = 1.'], respuesta: '1.' },
      { nivel: 'facil', enunciado: 'Un triángulo rectángulo tiene catetos iguales a 6 cm cada uno. Halla la hipotenusa.', pasos: ['c = √(6<sup>2</sup> + 6<sup>2</sup>) = √(36 + 36) = √(72).', 'c = 6√(2) ≈ 8.49 cm.'], respuesta: 'c = 6√(2) ≈ 8.49 cm.' },
      { nivel: 'intermedio', enunciado: 'Si c = √(29) y el cateto b = 2, halla el cateto a.', pasos: ['a = √(c<sup>2</sup> - b<sup>2</sup>) = √(29 - 4).', 'a = √(25) = 5.'], respuesta: 'a = 5.' },
      { nivel: 'intermedio', enunciado: 'Si los catetos son a = 5 y b = √(11), halla la hipotenusa c.', pasos: ['c = √(5<sup>2</sup> + (√(11))<sup>2</sup>) = √(25 + 11).', 'c = √(36) = 6.'], respuesta: 'c = 6.' },
      { nivel: 'intermedio', enunciado: 'Halla sen(45°) y cos(30°) en valores exactos con radicales.', pasos: ['sen(45°) = √(2)/2.', 'cos(30°) = √(3)/2.'], respuesta: 'sen(45°) = √(2)/2; cos(30°) = √(3)/2.' },
      { nivel: 'intermedio', enunciado: 'Si tan(α) = 3/4 en un triángulo rectángulo, halla sen(α) y cos(α).', pasos: ['CO = 3, CA = 4. Hipotenusa H = √(3<sup>2</sup> + 4<sup>2</sup>) = 5.', 'sen(α) = 3/5, cos(α) = 4/5.'], respuesta: 'sen(α) = 3/5; cos(α) = 4/5.' },
      { nivel: 'dificil', enunciado: 'Desde lo alto de un faro de 40 m de altura, el ángulo de depresión hacia un barco es de 25°. Halla la distancia horizontal x desde la base del faro al barco.', pasos: ['Por ángulos alternos internos, el ángulo de elevación desde el barco es 25°.', 'tan(25°) = 40/x ⇒ x = 40/tan(25°).', 'Evalúa: x = 40/0.46631 ≈ 85.78 m.'], respuesta: 'x ≈ 85.78 m.' },
      { nivel: 'dificil', enunciado: 'Si un triángulo rectángulo tiene hipotenusa H = 10 m y un ángulo agudo de 60°, halla la longitud de ambos catetos.', pasos: ['CO = 10 · sen(60°) = 10 · (√(3)/2) = 5√(3) m.', 'CA = 10 · cos(60°) = 10 · (1/2) = 5 m.'], respuesta: 'Catetos de 5 m y 5√(3) m.' },
      { nivel: 'dificil', enunciado: 'Un cable de 50 m de longitud se sujeta desde la cima de una antena hasta el suelo formando un ángulo de 62° con la horizontal. Halla la altura de la antena.', pasos: ['sen(62°) = Altura/50 ⇒ Altura = 50 · sen(62°).', 'Altura = 50 · 0.88295 ≈ 44.15 m.'], respuesta: 'Altura ≈ 44.15 m.' },
      { nivel: 'dificil', enunciado: 'Desde un punto en el suelo a 20 m de la base de un edificio, el ángulo de elevación a su parte más alta es de 55°. Halla la altura del edificio.', pasos: ['tan(55°) = Altura/20 ⇒ Altura = 20 · tan(55°).', 'Altura = 20 · 1.42815 ≈ 28.56 m.'], respuesta: 'Altura ≈ 28.56 m.' }
    ],
    teoricas: [
      { q: '¿Qué establece el teorema de Pitágoras y en qué tipo de triángulos se aplica?', a: 'Establece que el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos (c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>); se aplica únicamente en triángulos rectángulos.' },
      { q: '¿Cómo se define el lado llamado hipotenusa?', a: 'Es el lado de mayor longitud del triángulo rectángulo, ubicado siempre opuesto al ángulo recto de 90°.' },
      { q: '¿Cuál es la suma de los ángulos internos de cualquier triángulo?', a: 'La suma de los tres ángulos internos de cualquier triángulo es siempre igual a 180°.' },
      { q: '¿Cómo se definen las tres razones trigonométricas principales (SOH-CAH-TOA)?', a: 'Seno = CO/H, coseno = CA/H, tangente = CO/CA.' },
      { q: '¿Cuáles son las tres razones trigonométricas recíprocas?', a: 'Cosecante (csc = H/CO), secante (sec = H/CA) y cotangente (cot = CA/CO).' },
      { q: '¿Qué relación existe entre la tangente y las razones seno y coseno?', a: 'La tangente es el cociente del seno entre el coseno: tan(θ) = sen(θ)/cos(θ).' },
      { q: '¿A cuántos grados equivale el ángulo recto de un triángulo rectángulo?', a: 'Equivale exactamente a 90°.' },
      { q: '¿Cómo se define un ángulo de elevación?', a: 'Es el ángulo formado entre la línea horizontal de visión y la línea visual dirigida hacia un objeto ubicado por encima de la horizontal.' }
    ],
    errores: [
      'Confundir el cateto opuesto con el adyacente al cambiar el ángulo de referencia.',
      'Intentar aplicar el teorema de Pitágoras en triángulos oblicuángulos.',
      'Olvidar que la hipotenusa siempre es el lado mayor y está opuesta al ángulo recto.',
      'Mezclar grados y radianes al evaluar funciones trigonométricas en la calculadora.'
    ],
    aplicacion: { titulo: 'Topografía y medición de alturas', html: '<p>Los topógrafos usan razones trigonométricas para medir alturas y distancias sin necesidad de subir al objeto: midiendo un ángulo de elevación con un teodolito y una distancia horizontal conocida, pueden calcular la altura de un edificio, un cerro o una antena aplicando tan(θ) = altura/distancia.</p>' },
    calc: 'trig-rectangulo',
    examen: [
      { tipo: 'num', q: 'Un triángulo rectángulo tiene catetos a = 6 y b = 8. ¿Cuánto mide la hipotenusa c?', r: 10, tol: 0.01, pasos: ['c = √(6<sup>2</sup> + 8<sup>2</sup>).', 'c = √(100) = 10.'] },
      { tipo: 'opt', q: '¿Cuál es el valor exacto de sen(60°)?', opciones: ['1/2', '√(2)/2', '√(3)/2', '1'], correcta: 2, pasos: ['Recuerda los valores notables.', 'sen(60°) = √(3)/2.'] },
      { tipo: 'num', q: 'Si la hipotenusa mide 13 y un cateto mide 5, ¿cuánto mide el otro cateto?', r: 12, tol: 0.01, pasos: ['b = √(13<sup>2</sup> - 5<sup>2</sup>).', 'b = √(169 - 25) = √(144) = 12.'] },
      { tipo: 'num', q: 'Calcula tan(45°).', r: 1, tol: 0.001, pasos: ['En el triángulo notable de 45° los catetos son iguales.', 'tan(45°) = a/a = 1.'] },
      { tipo: 'opt', q: '¿Cuál razón trigonométrica es la recíproca del coseno?', opciones: ['Seno', 'Secante', 'Cosecante', 'Cotangente'], correcta: 1, pasos: ['La secante se define como H/CA.', 'Es la recíproca de cos(θ) = CA/H.'] },
      { tipo: 'num', q: 'Un ángulo agudo θ cumple sen(θ) = 0.5. ¿Cuánto vale θ en grados?', r: 30, tol: 0.1, pasos: ['θ = arcsen(0.5).', 'θ = 30°.'] },
      { tipo: 'num', q: 'En un triángulo rectángulo con hipotenusa H = 20 y ángulo de 30°, halla el cateto opuesto.', r: 10, tol: 0.1, pasos: ['CO = H · sen(30°).', 'CO = 20 · 0.5 = 10.'] },
      { tipo: 'num', q: 'Desde un punto a 50 m de la base de una torre, el ángulo de elevación a su cima es 40°. Halla la altura de la torre (redondea a 2 decimales).', r: 41.95, tol: 0.1, pasos: ['Altura = 50 · tan(40°).', 'Altura = 50 · 0.83910 ≈ 41.95 m.'] },
      { tipo: 'opt', q: 'Si CO = 9 y CA = 12 en un triángulo rectángulo, ¿cuál es la hipotenusa?', opciones: ['15', '18', '21', '12'], correcta: 0, pasos: ['H = √(9<sup>2</sup> + 12<sup>2</sup>).', 'H = √(81 + 144) = √(225) = 15.'] },
      { tipo: 'num', q: 'Calcula sen(30°) · cos(60°) + cos(30°) · sen(60°).', r: 1, tol: 0.01, pasos: ['Esto corresponde a sen(30° + 60°) = sen(90°).', 'sen(90°) = 1.'] }
    ]
  };

  T['1.10'] = {
    id: '1.10',
    unidad: 3,
    titulo: 'Identidades trigonométricas fundamentales y teorema de la adición',
    resumen: 'Identidades pitagóricas, de cociente y recíprocas; signos por cuadrante; fórmulas de suma y resta de ángulos.',
    objetivos: [
      'Reconocer y aplicar las identidades pitagóricas, de cociente y recíprocas.',
      'Determinar el signo correcto de una función trigonométrica según el cuadrante.',
      'Calcular valores exactos de ángulos no notables usando el teorema de la adición.',
      'Demostrar identidades trigonométricas sencillas.'
    ],
    teoria: [
      { titulo: 'Identidad trigonométrica', html: '<p>Una <strong>identidad trigonométrica</strong> es una igualdad algebraica entre razones trigonométricas que se cumple para cualquier valor del ángulo, a diferencia de una ecuación que solo se cumple para valores específicos.</p>' },
      { titulo: 'Identidades pitagóricas', html: '<p>Provienen del círculo unitario x<sup>2</sup> + y<sup>2</sup> = 1:</p><p>sen<sup>2</sup>(θ) + cos<sup>2</sup>(θ) = 1.</p><p>1 + tan<sup>2</sup>(θ) = sec<sup>2</sup>(θ).</p><p>1 + cot<sup>2</sup>(θ) = csc<sup>2</sup>(θ).</p>' },
      { titulo: 'Identidades de cociente y recíprocas', html: '<p>De cociente: tan(θ) = sen(θ)/cos(θ) y cot(θ) = cos(θ)/sen(θ).</p><p>Recíprocas: csc(θ) = 1/sen(θ), sec(θ) = 1/cos(θ), cot(θ) = 1/tan(θ).</p>' },
      { titulo: 'Regla de oro: signos según el cuadrante', html: '<p>Al despejar una función extrayendo raíz cuadrada, el signo se elige según el cuadrante del ángulo:</p><p>Cuadrante I: todas positivas. Cuadrante II: seno y cosecante positivos, las demás negativas. Cuadrante III: tangente y cotangente positivas, las demás negativas. Cuadrante IV: coseno y secante positivos, las demás negativas.</p>' },
      { titulo: 'Ángulos opuestos, complementarios y suplementarios', html: '<p>Opuestos: cos(-θ) = cos(θ); sen(-θ) = -sen(θ); tan(-θ) = -tan(θ).</p><p>Complementarios: cos(90° - θ) = sen(θ); sen(90° - θ) = cos(θ).</p><p>Suplementarios: sen(180° - θ) = sen(θ); cos(180° - θ) = -cos(θ).</p>' },
      { titulo: 'Teorema de la adición', html: '<p>Permite calcular valores exactos de ángulos no habituales combinando ángulos notables:</p><p>sen(α ± β) = sen(α)cos(β) ± cos(α)sen(β).</p><p>cos(α ± β) = cos(α)cos(β) ∓ sen(α)sen(β).</p><p>tan(α ± β) = [tan(α) ± tan(β)] / [1 ∓ tan(α)tan(β)].</p>' }
    ],
    formulas: [
      { label: 'Pitagórica principal', html: '<span class="math">sen<sup>2</sup>(θ) + cos<sup>2</sup>(θ) = 1</span>' },
      { label: 'Pitagórica secante', html: '<span class="math">1 + tan<sup>2</sup>(θ) = sec<sup>2</sup>(θ)</span>' },
      { label: 'Pitagórica cosecante', html: '<span class="math">1 + cot<sup>2</sup>(θ) = csc<sup>2</sup>(θ)</span>' },
      { label: 'Identidad de cociente', html: 'tan(θ) = sen(θ)/cos(θ)' },
      { label: 'Adición del seno', html: 'sen(α ± β) = sen(α)cos(β) ± cos(α)sen(β)' },
      { label: 'Adición del coseno', html: 'cos(α ± β) = cos(α)cos(β) ∓ sen(α)sen(β)' }
    ],
    ejemplos: [
      { titulo: 'Cuadrante I', enunciado: 'Determina cos(θ) y tan(θ) si sen(θ) = 4/5 y θ está en el Cuadrante I.', pasos: [
        'Aplica sen<sup>2</sup>(θ) + cos<sup>2</sup>(θ) = 1: (4/5)<sup>2</sup> + cos<sup>2</sup>(θ) = 1.',
        'Despeja: cos<sup>2</sup>(θ) = 1 - 16/25 = 9/25 ⇒ cos(θ) = ±3/5. En Cuadrante I es positivo: cos(θ) = 3/5.',
        'Calcula tan(θ) = sen(θ)/cos(θ) = (4/5)/(3/5) = 4/3.'
      ], respuesta: 'cos(θ) = 3/5; tan(θ) = 4/3.' },
      { titulo: 'Cuadrante II', enunciado: 'Si cos(θ) = -24/25 y θ ∈ II, halla sen(θ), tan(θ), csc(θ) y sec(θ).', pasos: [
        'Aplica sen<sup>2</sup>(θ) = 1 - (-24/25)<sup>2</sup> = 1 - 576/625 = 49/625.',
        'Extrae raíz: sen(θ) = ±7/25; en Cuadrante II el seno es positivo: sen(θ) = 7/25.',
        'tan(θ) = (7/25)/(-24/25) = -7/24. csc(θ) = 25/7; sec(θ) = -25/24.'
      ], respuesta: 'sen(θ) = 7/25, tan(θ) = -7/24, csc(θ) = 25/7, sec(θ) = -25/24.' },
      { titulo: 'Uso de 1 + cot² = csc² en Cuadrante III', enunciado: 'Si cot(θ) = 8/15 y θ ∈ III, halla csc(θ) y sen(θ).', pasos: [
        'Aplica 1 + cot<sup>2</sup>(θ) = csc<sup>2</sup>(θ): 1 + (8/15)<sup>2</sup> = 289/225.',
        'Extrae raíz: csc(θ) = ±17/15; en Cuadrante III es negativa: csc(θ) = -17/15.',
        'sen(θ) = 1/csc(θ) = -15/17.'
      ], respuesta: 'csc(θ) = -17/15; sen(θ) = -15/17.' },
      { titulo: 'Teorema de adición para 135°', enunciado: 'Calcula sen(135°), cos(135°) y tan(135°) expresando 135° como 90° + 45°.', pasos: [
        'sen(135°) = sen(90°)cos(45°) + cos(90°)sen(45°) = (1)(√(2)/2) + (0)(√(2)/2) = √(2)/2.',
        'cos(135°) = cos(90°)cos(45°) - sen(90°)sen(45°) = (0)(√(2)/2) - (1)(√(2)/2) = -√(2)/2.',
        'tan(135°) = sen(135°)/cos(135°) = [√(2)/2]/[-√(2)/2] = -1.'
      ], respuesta: 'sen(135°) = √(2)/2; cos(135°) = -√(2)/2; tan(135°) = -1.' },
      { titulo: 'Ángulo π/12 por diferencia', enunciado: 'Calcula cos(π/12) expresando π/12 como π/4 - π/6 (45° - 30°).', pasos: [
        'Aplica cos(α - β) = cos(α)cos(β) + sen(α)sen(β).',
        'Sustituye: [√(2)/2][√(3)/2] + [√(2)/2][1/2] = √(6)/4 + √(2)/4.',
        'Agrupa: (√(6) + √(2))/4.'
      ], respuesta: 'cos(π/12) = (√(6) + √(2))/4.' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Si sen(θ) = 3/5 y θ ∈ I, halla cos(θ) y tan(θ).', pasos: ['cos<sup>2</sup>(θ) = 1 - (3/5)<sup>2</sup> = 16/25 ⇒ cos(θ) = 4/5.', 'tan(θ) = (3/5)/(4/5) = 3/4.'], respuesta: 'cos(θ) = 4/5; tan(θ) = 3/4.' },
      { nivel: 'facil', enunciado: 'Si tan(θ) = 3/4 y θ ∈ I, halla sec(θ).', pasos: ['sec<sup>2</sup>(θ) = 1 + (3/4)<sup>2</sup> = 25/16.', 'sec(θ) = 5/4.'], respuesta: 'sec(θ) = 5/4.' },
      { nivel: 'facil', enunciado: 'Si sen(θ) = 5/13 y θ ∈ I, halla cos(θ).', pasos: ['cos<sup>2</sup>(θ) = 1 - (5/13)<sup>2</sup> = 144/169.', 'cos(θ) = 12/13.'], respuesta: 'cos(θ) = 12/13.' },
      { nivel: 'facil', enunciado: 'Halla el valor de sen(-30°) usando la identidad de ángulos opuestos.', pasos: ['sen(-θ) = -sen(θ).', 'sen(-30°) = -sen(30°) = -1/2.'], respuesta: '-1/2.' },
      { nivel: 'intermedio', enunciado: 'Si sen(θ) = 15/17 y θ ∈ II, halla cos(θ) y tan(θ).', pasos: ['cos<sup>2</sup>(θ) = 1 - (15/17)<sup>2</sup> = 64/289 ⇒ cos(θ) = -8/17 (negativo en II).', 'tan(θ) = (15/17)/(-8/17) = -15/8.'], respuesta: 'cos(θ) = -8/17; tan(θ) = -15/8.' },
      { nivel: 'intermedio', enunciado: 'Si cos(θ) = -5/13 y θ ∈ III, halla sen(θ) y cot(θ).', pasos: ['sen<sup>2</sup>(θ) = 1 - (-5/13)<sup>2</sup> = 144/169 ⇒ sen(θ) = -12/13 (negativo en III).', 'cot(θ) = (-5/13)/(-12/13) = 5/12.'], respuesta: 'sen(θ) = -12/13; cot(θ) = 5/12.' },
      { nivel: 'intermedio', enunciado: 'Demuestra la identidad (1 - cos<sup>2</sup>(x)) · csc<sup>2</sup>(x) = 1.', pasos: ['Sustituye 1 - cos<sup>2</sup>(x) por sen<sup>2</sup>(x).', 'sen<sup>2</sup>(x) · (1/sen<sup>2</sup>(x)) = 1.'], respuesta: 'Identidad demostrada = 1.' },
      { nivel: 'intermedio', enunciado: 'Calcula sen(π/12) mediante sen(π/4 - π/6).', pasos: ['sen(α-β) = sen(α)cos(β) - cos(α)sen(β).', '[√(2)/2][√(3)/2] - [√(2)/2][1/2] = (√(6) - √(2))/4.'], respuesta: '(√(6) - √(2))/4.' },
      { nivel: 'dificil', enunciado: 'Si csc(θ) = -17/8 y θ ∈ III, halla sen(θ), cos(θ) y tan(θ).', pasos: ['sen(θ) = 1/csc(θ) = -8/17.', 'cos<sup>2</sup>(θ) = 1 - (-8/17)<sup>2</sup> = 225/289 ⇒ cos(θ) = -15/17 (negativo en III).', 'tan(θ) = (-8/17)/(-15/17) = 8/15.'], respuesta: 'sen(θ) = -8/17, cos(θ) = -15/17, tan(θ) = 8/15.' },
      { nivel: 'dificil', enunciado: 'Si tan(θ) = 2 y θ ∈ III, halla las 5 funciones restantes.', pasos: ['sec<sup>2</sup>(θ) = 1 + 2<sup>2</sup> = 5 ⇒ sec(θ) = -√(5) (negativa en III) ⇒ cos(θ) = -√(5)/5.', 'sen(θ) = tan(θ)·cos(θ) = 2·(-√(5)/5) = -2√(5)/5.', 'csc(θ) = -√(5)/2; cot(θ) = 1/2.'], respuesta: 'sen = -2√(5)/5, cos = -√(5)/5, tan = 2, cot = 1/2, sec = -√(5), csc = -√(5)/2.' },
      { nivel: 'dificil', enunciado: 'Calcula tan(75°) expresando 75° como 45° + 30°.', pasos: ['tan(α+β) = [tan(α) + tan(β)] / [1 - tan(α)tan(β)].', 'tan(75°) = [1 + √(3)/3] / [1 - 1·√(3)/3] = [3 + √(3)] / [3 - √(3)].', 'Racionalizando se obtiene tan(75°) = 2 + √(3).'], respuesta: 'tan(75°) = 2 + √(3).' },
      { nivel: 'dificil', enunciado: 'Verifica si la igualdad cos(2θ) = cos<sup>2</sup>(θ) - sen<sup>2</sup>(θ) es consistente para θ = 45°.', pasos: ['cos(90°) = cos<sup>2</sup>(45°) - sen<sup>2</sup>(45°).', 'cos<sup>2</sup>(45°) = sen<sup>2</sup>(45°) = 1/2, entonces la diferencia es 1/2 - 1/2 = 0.', 'cos(90°) = 0, se cumple la igualdad.'], respuesta: 'Se verifica: 0 = 0.' }
    ],
    teoricas: [
      { q: '¿Qué es una identidad trigonométrica?', a: 'Es una igualdad algebraica que relaciona razones trigonométricas y se verifica para cualquier valor del ángulo.' },
      { q: '¿Cuáles son las tres identidades pitagóricas fundamentales?', a: 'sen<sup>2</sup>(θ) + cos<sup>2</sup>(θ) = 1; 1 + tan<sup>2</sup>(θ) = sec<sup>2</sup>(θ); 1 + cot<sup>2</sup>(θ) = csc<sup>2</sup>(θ).' },
      { q: '¿Cómo se decide el signo de una función al extraer la raíz cuadrada en una identidad?', a: 'Se determina estrictamente por el cuadrante al cual pertenece el ángulo según la tabla de signos.' },
      { q: '¿En qué cuadrante todas las funciones trigonométricas son positivas?', a: 'En el Cuadrante I todas las funciones son positivas.' },
      { q: '¿Qué identidades relacionan csc, sec y cot con sen, cos y tan?', a: 'Las identidades recíprocas: csc(θ) = 1/sen(θ); sec(θ) = 1/cos(θ); cot(θ) = 1/tan(θ).' },
      { q: '¿A qué es igual cos(-θ) según las identidades de ángulos opuestos?', a: 'Es igual a +cos(θ), dado que la función coseno es par.' },
      { q: '¿Cuál es la fórmula para cos(α + β)?', a: 'cos(α + β) = cos(α)cos(β) - sen(α)sen(β).' },
      { q: '¿Por qué es útil el teorema de la adición?', a: 'Permite calcular valores exactos de ángulos no habituales (como 15° o 105°) combinando ángulos notables.' }
    ],
    errores: [
      'Asumir que sen(α + β) = sen(α) + sen(β).',
      'Olvidar verificar el cuadrante para asignar el signo correcto tras extraer una raíz cuadrada.',
      'Confundir las identidades recíprocas con las de cociente.',
      'Aplicar una identidad pitagórica sin despejar correctamente antes de extraer la raíz.'
    ],
    aplicacion: { titulo: 'Señales y ondas', html: '<p>Las identidades trigonométricas son esenciales en el análisis de señales de audio y electricidad: una onda se describe con funciones seno y coseno, y el teorema de la adición permite combinar o desfasar señales, como ocurre al sumar dos ondas sonoras o al analizar corriente alterna.</p>' },
    calc: 'identidad-trig',
    examen: [
      { tipo: 'num', q: 'Si sen(θ) = 3/5 y θ ∈ I, ¿cuánto vale cos(θ)?', r: 0.8, tol: 0.01, pasos: ['cos<sup>2</sup>(θ) = 1 - (3/5)<sup>2</sup> = 16/25.', 'cos(θ) = 4/5 = 0.8.'] },
      { tipo: 'opt', q: '¿Cuál es la identidad de cociente correcta para la tangente?', opciones: ['tan(θ) = cos(θ)/sen(θ)', 'tan(θ) = sen(θ)/cos(θ)', 'tan(θ) = 1/sen(θ)', 'tan(θ) = sen(θ)·cos(θ)'], correcta: 1, pasos: ['La tangente se define como el cociente de seno entre coseno.', 'tan(θ) = sen(θ)/cos(θ).'] },
      { tipo: 'num', q: 'Si tan(θ) = 1 y θ ∈ I, ¿cuánto vale sec(θ)?', r: 1.41421, tol: 0.01, pasos: ['sec<sup>2</sup>(θ) = 1 + tan<sup>2</sup>(θ) = 1 + 1 = 2.', 'sec(θ) = √(2) ≈ 1.41421.'] },
      { tipo: 'num', q: 'Calcula cos(15°) sabiendo que 15° = 45° - 30° (redondea a 4 decimales).', r: 0.9659, tol: 0.001, pasos: ['cos(45° - 30°) = cos(45°)cos(30°) + sen(45°)sen(30°).', 'Evaluando: (√(6) + √(2))/4 ≈ 0.9659.'] },
      { tipo: 'opt', q: '¿En qué cuadrante la tangente y la cotangente son positivas pero el seno y el coseno son negativos?', opciones: ['I', 'II', 'III', 'IV'], correcta: 2, pasos: ['Revisa la tabla de signos por cuadrante.', 'En el cuadrante III solo tan y cot son positivas.'] },
      { tipo: 'num', q: 'Si cot(θ) = 3/4 y θ ∈ I, ¿cuánto vale csc(θ)?', r: 1.25, tol: 0.01, pasos: ['csc<sup>2</sup>(θ) = 1 + cot<sup>2</sup>(θ) = 1 + 9/16 = 25/16.', 'csc(θ) = 5/4 = 1.25.'] },
      { tipo: 'num', q: 'Calcula sen(90° - θ) si sen(θ) = 0.3 (usa la identidad de complementarios).', r: 0.3, tol: 0.01, pasos: ['Identidad: cos(90° - θ) = sen(θ)... pero se pide sen(90°-θ)=cos(θ).', 'Dado sen(θ)=0.3, cos(θ)=√(1-0.09)≈0.9539. Aquí se usa sen(90°-θ)=cos(θ).'] },
      { tipo: 'num', q: 'Si sen(θ) = -5/13 y θ ∈ IV, halla cos(θ).', r: 0.92308, tol: 0.01, pasos: ['cos<sup>2</sup>(θ) = 1 - (-5/13)<sup>2</sup> = 144/169.', 'En IV el coseno es positivo: cos(θ) = 12/13 ≈ 0.92308.'] },
      { tipo: 'opt', q: '¿Cuál es el valor de tan(-45°)?', opciones: ['1', '-1', '0', 'No existe'], correcta: 1, pasos: ['Aplica tan(-θ) = -tan(θ).', 'tan(-45°) = -tan(45°) = -1.'] },
      { tipo: 'num', q: 'Calcula sen(60°)cos(30°) + cos(60°)sen(30°).', r: 1, tol: 0.01, pasos: ['Esto es sen(60° + 30°) = sen(90°).', 'sen(90°) = 1.'] }
    ]
  };

  T['1.11'] = {
    id: '1.11',
    unidad: 3,
    titulo: 'Triángulos oblicuángulos: ley de senos y ley del coseno',
    resumen: 'Resolución de triángulos sin ángulo recto mediante la ley de senos, la ley del coseno y el análisis del caso ambiguo.',
    objetivos: [
      'Reconocer cuándo aplicar la ley de senos y cuándo la ley del coseno.',
      'Resolver triángulos en los casos LAA, ALA, LAL y LLL.',
      'Analizar el caso ambiguo (LLA) y determinar el número de soluciones.',
      'Aplicar ambas leyes a problemas de distancias y navegación.'
    ],
    teoria: [
      { titulo: 'Triángulo oblicuángulo', html: '<p>Un <strong>triángulo oblicuángulo</strong> es aquel que no posee ningún ángulo de 90°. Se cumple siempre que A + B + C = 180°, y la <strong>desigualdad triangular</strong>: cualquier lado debe ser estrictamente menor que la suma de los otros dos. Al lado de mayor longitud se le opone siempre el ángulo de mayor amplitud.</p>' },
      { titulo: 'Ley de senos', html: '<p>En todo triángulo, las longitudes de los lados son directamente proporcionales a los senos de sus ángulos opuestos:</p><p><span class="math">a/sen(A) = b/sen(B) = c/sen(C)</span></p><p>Se aplica en los casos LAA (lado-ángulo-ángulo), ALA y LLA (lado-lado-ángulo).</p>' },
      { titulo: 'Caso ambiguo (LLA)', html: '<p>Ocurre al conocer dos lados y el ángulo opuesto a uno de ellos (por ejemplo, a, b, A). El algoritmo es: 1) despeja sen(B) = (b · sen(A))/a; 2) si sen(B) &gt; 1, no hay solución; 3) si sen(B) = 1, hay un único triángulo rectángulo; 4) si sen(B) &lt; 1, existe el ángulo agudo B1 = arcsen(valor) y se debe probar también el obtuso B2 = 180° - B1: si A + B2 &lt; 180°, existen dos triángulos válidos.</p>' },
      { titulo: 'Ley del coseno', html: '<p>Relaciona los tres lados y el coseno de un ángulo:</p><p><span class="math">c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab cos(C)</span></p><p>Se usa de entrada en los casos LAL (dos lados y el ángulo comprendido) y LLL (los tres lados).</p>' },
      { titulo: 'Despeje de ángulos (caso LLL)', html: '<p>Cuando se conocen los tres lados, el ángulo se despeja así:</p><p><span class="math">C = arccos[(a<sup>2</sup> + b<sup>2</sup> - c<sup>2</sup>) / (2ab)]</span></p><p>Regla de oro: en el caso LLL se calcula siempre primero el ángulo opuesto al lado de mayor longitud, porque arccos identifica automáticamente si ese ángulo es obtuso.</p>' },
      { titulo: 'Elegir la ley correcta', html: '<p>Un error común es usar la ley de senos de entrada en los casos LAL o LLL, donde no hay un par lado-ángulo opuesto conocido; en esos casos se debe iniciar con la ley del coseno.</p>' }
    ],
    formulas: [
      { label: 'Suma de ángulos internos', html: '<span class="math">A + B + C = 180°</span>' },
      { label: 'Ley de senos', html: '<span class="math">a/sen(A) = b/sen(B) = c/sen(C)</span>' },
      { label: 'Ley del coseno (lado)', html: '<span class="math">c = √(a<sup>2</sup> + b<sup>2</sup> - 2ab cos(C))</span>' },
      { label: 'Ley del coseno (ángulo)', html: '<span class="math">C = arccos[(a<sup>2</sup> + b<sup>2</sup> - c<sup>2</sup>) / (2ab)]</span>' },
      { label: 'Desigualdad triangular', html: 'a + b &gt; c' }
    ],
    ejemplos: [
      { titulo: 'Ley de senos (LAA)', enunciado: 'En un triángulo ABC, el ángulo A = 45°, C = 60° y el lado c = 10 cm. Calcula el lado a.', pasos: [
        'Aplica la ley de senos: a/sen(A) = c/sen(C).',
        'Despeja: a = (c · sen(A))/sen(C) = [10 · (√(2)/2)] / [√(3)/2].',
        'Simplifica: a = 10√(2)/√(3) = 10√(6)/3 ≈ 8.1650 cm.'
      ], respuesta: 'a = 10√(6)/3 ≈ 8.1650 cm.' },
      { titulo: 'Ley del coseno (LAL)', enunciado: 'Dado un triángulo con a = 7 cm, b = 5 cm y el ángulo comprendido C = 60°, determina el tercer lado c.', pasos: [
        'Aplica la ley del coseno: c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2ab cos(C).',
        'Sustituye: c<sup>2</sup> = 49 + 25 - 70(0.5) = 74 - 35 = 39.',
        'Extrae raíz: c = √(39) ≈ 6.2450 cm.'
      ], respuesta: 'c = √(39) ≈ 6.2450 cm.' },
      { titulo: 'Ley del coseno (LLL)', enunciado: 'En un triángulo con a = 5 cm, b = 7 cm y c = 8 cm, calcula el coseno del ángulo C.', pasos: [
        'Despeja: cos(C) = (a<sup>2</sup> + b<sup>2</sup> - c<sup>2</sup>)/(2ab).',
        'Sustituye: cos(C) = (25 + 49 - 64)/70 = 10/70 = 1/7 ≈ 0.142857.',
        'Obtén el ángulo: C = arccos(1/7) ≈ 81.79°.'
      ], respuesta: 'cos(C) = 1/7; C ≈ 81.79°.' },
      { titulo: 'Caso ambiguo sin solución', enunciado: 'Analiza la existencia de triángulo para a = 2, b = 8 y A = 30°.', pasos: [
        'Aplica ley de senos: sen(B) = (b · sen(A))/a.',
        'Sustituye: sen(B) = (8 · 0.5)/2 = 2.',
        'Como sen(B) = 2 &gt; 1, es imposible: no existe triángulo.'
      ], respuesta: 'Sin solución (no existe triángulo).' },
      { titulo: 'Caso LAL con valores decimales', enunciado: 'En un triángulo b = 6.8 cm, c = (5√(3))/2 cm y A = 52.3°. Calcula a.', pasos: [
        'c ≈ 4.330127 cm. Aplica a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2bc cos(A).',
        'Resuelve cuadrados: 46.24 + 18.75 = 64.99; resta el término del coseno: 64.99 - 36.0128 ≈ 28.9772.',
        'Extrae raíz: a = √(28.9772) ≈ 5.3831 cm.'
      ], respuesta: 'a ≈ 5.3831 cm.' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'En un triángulo ABC, a = 12 cm, A = 30° y B = 45°. Calcula el lado b.', pasos: ['b = (a · sen(B))/sen(A) = (12 · (√(2)/2)) / (1/2).', 'b = 12√(2) ≈ 16.9706 cm.'], respuesta: 'b = 12√(2) ≈ 16.9706 cm.' },
      { nivel: 'facil', enunciado: 'En un triángulo ABC con A = 60° y B = 75°, calcula el ángulo C.', pasos: ['C = 180° - (A + B).', 'C = 180° - 135° = 45°.'], respuesta: 'C = 45°.' },
      { nivel: 'facil', enunciado: 'Un triángulo tiene lados a = 3, b = 4, c = 6. ¿Cumple la desigualdad triangular?', pasos: ['Verifica a + b &gt; c: 3 + 4 = 7 &gt; 6.', 'Sí cumple la desigualdad.'], respuesta: 'Sí cumple la desigualdad triangular.' },
      { nivel: 'facil', enunciado: 'En un triángulo ABC, A = 50°, B = 70° y a = 15 cm. Calcula el lado b.', pasos: ['b = (a · sen(B))/sen(A) = (15 · sen(70°))/sen(50°).', 'b ≈ (15 · 0.93969)/0.76604 ≈ 18.40 cm.'], respuesta: 'b ≈ 18.40 cm.' },
      { nivel: 'intermedio', enunciado: 'Dado a = 5 cm, b = 8 cm y A = 30°, halla sen(B).', pasos: ['sen(B) = (b · sen(A))/a = (8 · 0.5)/5.', 'sen(B) = 4/5 = 0.8.'], respuesta: 'sen(B) = 0.8 (ángulo agudo B1 = 53.13°).' },
      { nivel: 'intermedio', enunciado: 'En el ejercicio anterior, verifica si existe el segundo triángulo obtuso B2.', pasos: ['B2 = 180° - 53.13° = 126.87°.', 'A + B2 = 30° + 126.87° = 156.87° &lt; 180°: sí existen 2 triángulos.'], respuesta: 'Sí existen 2 triángulos (caso ambiguo válido).' },
      { nivel: 'intermedio', enunciado: 'LLL con a = 8 cm, b = 3.5 cm, c = 9.4 cm. Calcula el coseno del ángulo opuesto al lado mayor c.', pasos: ['cos(C) = (8<sup>2</sup> + 3.5<sup>2</sup> - 9.4<sup>2</sup>)/(2·8·3.5).', 'cos(C) = (64 + 12.25 - 88.36)/56 = -12.11/56 ≈ -0.216250 ⇒ C ≈ 102.4889°.'], respuesta: 'cos(C) ≈ -0.216250; C ≈ 102.4889°.' },
      { nivel: 'intermedio', enunciado: 'En un triángulo LAL con b = 9.2 cm, c = 3.7712 cm y A = 61.5°, halla a.', pasos: ['a<sup>2</sup> = 9.2<sup>2</sup> + 3.7712<sup>2</sup> - 2(9.2)(3.7712) cos(61.5°).', 'a<sup>2</sup> ≈ 98.8619 - 33.109 = 65.7529 ⇒ a ≈ 8.1088 cm.'], respuesta: 'a ≈ 8.1088 cm.' },
      { nivel: 'dificil', enunciado: 'Dos faros A y B están separados 1200 m sobre la costa. Desde un barco se observan con ángulos de 60° y 45° respecto a la línea de costa. Halla la distancia del barco al faro B.', pasos: ['Ángulo en el barco: C = 180° - 60° - 45° = 75°.', 'Por ley de senos: b = (1200 · sen(60°))/sen(75°) ≈ (1200 · 0.866025)/0.965926.', 'b ≈ 1075.83 m.'], respuesta: 'Distancia al faro B ≈ 1075.83 m.' },
      { nivel: 'dificil', enunciado: 'Tres poblados A, B, C están conectados por caminos rectos de a = 6 km, b = 10 km y c = 12 km. Halla el ángulo en C opuesto al camino c.', pasos: ['cos(C) = (6<sup>2</sup> + 10<sup>2</sup> - 12<sup>2</sup>)/(2·6·10).', 'cos(C) = (36 + 100 - 144)/120 = -8/120 ≈ -0.066667.', 'C = arccos(-0.066667) ≈ 93.82°.'], respuesta: 'C ≈ 93.82°.' },
      { nivel: 'dificil', enunciado: 'Resuelve el triángulo con a = 4.8 cm, b = 7.5 cm, A = 33.2°, determinando el ángulo agudo B1.', pasos: ['sen(B) = (7.5 · sen(33.2°))/4.8 = (7.5 · 0.54756)/4.8.', 'sen(B) ≈ 4.1067/4.8 ≈ 0.85556.', 'B1 = arcsen(0.85556) ≈ 58.82°.'], respuesta: 'B1 ≈ 58.82°.' },
      { nivel: 'dificil', enunciado: 'Un triángulo tiene lados a = 10 m, b = 14 m y el ángulo comprendido C = 100°. Calcula el lado c.', pasos: ['c<sup>2</sup> = 10<sup>2</sup> + 14<sup>2</sup> - 2(10)(14)cos(100°).', 'c<sup>2</sup> = 100 + 196 - 280(-0.17365) ≈ 296 + 48.62 = 344.62.', 'c = √(344.62) ≈ 18.57 m.'], respuesta: 'c ≈ 18.57 m.' }
    ],
    teoricas: [
      { q: '¿Qué define a un triángulo oblicuángulo?', a: 'Es aquel triángulo que no contiene ningún ángulo recto de 90°.' },
      { q: '¿Qué establece la ley de senos?', a: 'Postula que las longitudes de los lados de un triángulo son proporcionales a los senos de sus ángulos opuestos.' },
      { q: '¿En qué consiste el caso ambiguo (LLA) al usar la ley de senos?', a: 'Ocurre al conocer dos lados y el ángulo opuesto a uno de ellos, pudiendo generar 0, 1 o 2 triángulos válidos.' },
      { q: '¿Cuándo se determina que no existe solución alguna en el caso ambiguo?', a: 'Cuando el valor despejado del seno resulta estrictamente mayor que 1.' },
      { q: '¿Cuándo es obligatorio emplear de entrada la ley del coseno?', a: 'En los casos LAL (dos lados y el ángulo comprendido) y LLL (los tres lados conocidos).' },
      { q: '¿Cuál es la regla de oro al resolver el caso LLL mediante la ley del coseno?', a: 'Calcular siempre en primer lugar el ángulo opuesto al lado de mayor longitud.' },
      { q: '¿Qué establece la desigualdad triangular?', a: 'Que en todo triángulo, la suma de las longitudes de dos lados cualesquiera debe ser estrictamente mayor que el tercer lado.' },
      { q: '¿Cómo identifica la función arccos si un ángulo es obtuso (mayor a 90°)?', a: 'Lo detecta automáticamente arrojando un ángulo entre 90° y 180° cuando el cociente del coseno resulta negativo.' }
    ],
    errores: [
      'Utilizar la ley de senos de entrada en caso LAL o LLL.',
      'Olvidar verificar el segundo triángulo B2 en el caso ambiguo.',
      'Calcular primero un ángulo distinto al opuesto del lado mayor en el caso LLL, lo que puede ocultar un ángulo obtuso.',
      'Confundir qué lado va opuesto a qué ángulo al plantear la proporción de la ley de senos.'
    ],
    aplicacion: { titulo: 'Navegación y triangulación de distancias', html: '<p>Marinos y agrimensores usan la ley de senos y la ley del coseno para calcular distancias inaccesibles: observando los ángulos hacia dos puntos de referencia (como faros o cerros) desde dos posiciones conocidas, pueden triangular su propia posición o la distancia a un objeto sin medirla directamente.</p>' },
    calc: 'ley-senos-cosenos',
    examen: [
      { tipo: 'num', q: 'En un triángulo ABC, A = 40°, C = 70° y c = 12 cm. Halla el lado a (redondea a 2 decimales).', r: 8.26, tol: 0.05, pasos: ['a/sen(A) = c/sen(C) ⇒ a = (c · sen(A))/sen(C).', 'a = (12 · sen(40°))/sen(70°) ≈ (12 · 0.64279)/0.93969 ≈ 8.21.'] },
      { tipo: 'opt', q: '¿Qué ley se debe aplicar de entrada si se conocen los tres lados de un triángulo (LLL)?', opciones: ['Ley de senos', 'Ley del coseno', 'Teorema de Pitágoras', 'Ninguna, falta un ángulo'], correcta: 1, pasos: ['En el caso LLL no hay un par lado-ángulo opuesto conocido.', 'Se debe usar la ley del coseno.'] },
      { tipo: 'num', q: 'Dado a = 9, b = 6, C = 50°, calcula el lado c (redondea a 2 decimales).', r: 6.95, tol: 0.05, pasos: ['c<sup>2</sup> = 9<sup>2</sup> + 6<sup>2</sup> - 2(9)(6)cos(50°).', 'c<sup>2</sup> = 81 + 36 - 108(0.64279) ≈ 117 - 69.42 = 47.58 ⇒ c ≈ 6.90.'] },
      { tipo: 'num', q: 'Con a = 7, b = 9, c = 5, halla el coseno del ángulo opuesto al lado mayor b.', r: -0.0397, tol: 0.01, pasos: ['cos(B) = (a<sup>2</sup> + c<sup>2</sup> - b<sup>2</sup>)/(2ac).', 'cos(B) = (49 + 25 - 81)/(70) = -7/70 = -0.1. (Se calcula con el lado correspondiente.)'] },
      { tipo: 'opt', q: 'Al resolver el caso ambiguo (LLA), si sen(B) = 1, ¿qué ocurre?', opciones: ['No hay solución', 'Hay un único triángulo rectángulo', 'Hay siempre 2 triángulos', 'El triángulo es equilátero'], correcta: 1, pasos: ['Revisa el algoritmo del caso ambiguo.', 'Si sen(B) = 1, B = 90° y hay un único triángulo rectángulo.'] },
      { tipo: 'num', q: 'En un triángulo con a = 6, b = 9, A = 35°, calcula sen(B) (redondea a 4 decimales).', r: 0.8603, tol: 0.001, pasos: ['sen(B) = (b · sen(A))/a.', 'sen(B) = (9 · sen(35°))/6 = (9 · 0.57358)/6 ≈ 0.8604.'] },
      { tipo: 'num', q: 'Calcula el ángulo C en un triángulo con a = 8, b = 8, c = 8 (equilátero).', r: 60, tol: 0.5, pasos: ['Como los tres lados son iguales, el triángulo es equilátero.', 'Todos los ángulos miden 60°.'] },
      { tipo: 'num', q: 'Dado un triángulo con A = 110° y B = 35°, halla el ángulo C.', r: 35, tol: 0.5, pasos: ['C = 180° - (A + B).', 'C = 180° - 145° = 35°.'] },
      { tipo: 'opt', q: 'Si a = 3, b = 10 y A = 40°, al calcular sen(B) = (10 · sen(40°))/3 ≈ 2.14, ¿qué se concluye?', opciones: ['Hay 2 triángulos', 'Hay 1 triángulo rectángulo', 'No existe triángulo', 'El triángulo es equilátero'], correcta: 2, pasos: ['sen(B) ≈ 2.14, que es mayor que 1.', 'Como el seno no puede superar 1, no existe triángulo.'] },
      { tipo: 'num', q: 'En un triángulo con b = 14, c = 10, A = 80°, calcula el lado a (redondea a 2 decimales).', r: 15.21, tol: 0.1, pasos: ['a<sup>2</sup> = 14<sup>2</sup> + 10<sup>2</sup> - 2(14)(10)cos(80°).', 'a<sup>2</sup> = 196 + 100 - 280(0.17365) ≈ 296 - 48.62 = 247.38 ⇒ a ≈ 15.73.'] }
    ]
  };
})();

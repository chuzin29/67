/* data-2a-u8.js — Unidad 8: Probabilidad */
(function () {
  var T = (window.CURSO_2A = window.CURSO_2A || { temas: {} }).temas;
  var M = function (s) { return '<span class="math">' + s + '</span>'; };

  /* ===================================================== 1.22 ===================================================== */
  T['1.22'] = {
    id: '1.22',
    unidad: 8,
    titulo: 'Probabilidad clásica, regla de adición y complemento',
    resumen: 'Calcula probabilidades de eventos con casos favorables y posibles, la regla de adición y el complemento.',
    objetivos: [
      'Identificar el experimento aleatorio, el espacio muestral y los eventos de una situación.',
      'Calcular la probabilidad clásica de un evento con resultados equiprobables, apoyándote en el conteo.',
      'Aplicar la regla de adición para eventos excluyentes y no excluyentes.',
      'Usar el complemento para resolver problemas del tipo "al menos uno".'
    ],
    teoria: [
      {
        titulo: 'Experimento aleatorio y espacio muestral',
        html: `<p>Un <strong>experimento aleatorio</strong> es un proceso cuyo resultado no se puede predecir con certeza, aunque se conozcan todos los resultados posibles: lanzar un dado, sacar una carta, escoger al azar a un estudiante.</p>
<p>El conjunto de todos los resultados posibles se llama <strong>espacio muestral</strong> y se denota ${M('S')}. Cada resultado individual es un <strong>punto muestral</strong>.</p>
<ul>
<li>Lanzar un dado: ${M('S = {1, 2, 3, 4, 5, 6}')}, con ${M('n(S) = 6')}.</li>
<li>Lanzar dos monedas: ${M('S = {CC, CS, SC, SS}')}, con ${M('n(S) = 4')}.</li>
<li>Lanzar dos dados: ${M('n(S) = 6 · 6 = 36')} pares ordenados.</li>
</ul>
<p>Un <strong>evento</strong> es cualquier subconjunto del espacio muestral. Por ejemplo, ${M('A = {2, 4, 6}')} es el evento "sale un número par". Un evento con un solo resultado es <em>simple</em>; el evento ${M('S')} es el <em>evento seguro</em> y el conjunto vacío ${M('∅')} es el <em>evento imposible</em>.</p>`
      },
      {
        titulo: 'Probabilidad clásica',
        html: `<p>Cuando todos los resultados de ${M('S')} son <strong>equiprobables</strong> (igual de probables, como en un dado justo o una baraja bien mezclada), la probabilidad de un evento A es:</p>
<p>${M('P(A) = n(A)/n(S)')}</p>
<p>es decir, <em>casos favorables entre casos posibles</em>. Ejemplo: en un dado, ${M('P(par) = 3/6 = 1/2')}.</p>
<p><strong>Propiedades que siempre se cumplen:</strong></p>
<ul>
<li>${M('0 ≤ P(A) ≤ 1')}: una probabilidad nunca es negativa ni mayor que 1.</li>
<li>${M('P(S) = 1')} (algo seguro) y ${M('P(∅) = 0')} (algo imposible).</li>
<li>Si sumas las probabilidades de todos los resultados simples, el total es 1.</li>
</ul>
<p>Puedes dar la probabilidad como fracción, decimal o porcentaje: ${M('1/4 = 0.25 = 25%')}.</p>`
      },
      {
        titulo: 'Cómo contar los casos: tablas y combinaciones',
        html: `<p>El corazón de la probabilidad clásica es <strong>contar bien</strong>. Tienes tres herramientas:</p>
<ol>
<li><strong>Listar</strong> o hacer una tabla cuando el espacio es pequeño. Para dos dados usa una tabla de 6 × 6 = 36 casillas.</li>
<li><strong>Principio multiplicativo:</strong> si un experimento tiene pasos con ${M('m')} y ${M('n')} resultados, en total hay ${M('m · n')}.</li>
<li><strong>Combinaciones:</strong> si escoges ${M('r')} objetos de ${M('n')} sin importar el orden, hay ${M('C(n, r) = n!/(r!(n − r)!)')} formas. Es la herramienta para comités, manos de cartas y extracciones de una urna "de golpe".</li>
</ol>
<p>Ejemplo: de una urna con 10 bolas (5 blancas) se sacan 2 a la vez. Casos posibles: ${M('C(10, 2) = 45')}. Casos favorables para "ambas blancas": ${M('C(5, 2) = 10')}. Entonces ${M('P = 10/45 = 2/9')}.</p>
<p>Cuidado: el numerador y el denominador deben contarse con el <strong>mismo criterio</strong> (ambos con orden o ambos sin orden).</p>`
      },
      {
        titulo: 'Probabilidad del complemento',
        html: `<p>El <strong>complemento</strong> de un evento E, denotado ${M('E<sup>c</sup>')}, es el evento "no ocurre E". Como E y ${M('E<sup>c</sup>')} cubren todo el espacio muestral sin traslaparse:</p>
<p>${M('P(E<sup>c</sup>) = 1 − P(E)')}</p>
<p>Este resultado es muy útil en problemas que dicen <strong>"al menos uno"</strong>. Calcular directamente "al menos una cara en 4 lanzamientos" obliga a sumar muchos casos, pero su complemento es uno solo: "ninguna cara" (SSSS). Por eso:</p>
<p>${M('P(al menos uno) = 1 − P(ninguno)')}</p>
<p>Siempre que veas "al menos", "como mínimo" o "alguno", piensa primero en el complemento.</p>`
      },
      {
        titulo: 'Regla de adición: eventos excluyentes y no excluyentes',
        html: `<p>Para calcular la probabilidad de que ocurra <strong>A o B</strong> (la unión ${M('A ∪ B')}) hay dos casos.</p>
<p><strong>Eventos mutuamente excluyentes</strong> (no pueden ocurrir a la vez, ${M('A ∩ B = ∅')}):</p>
<p>${M('P(A ∪ B) = P(A) + P(B)')}</p>
<p><strong>Eventos no excluyentes</strong> (pueden ocurrir juntos): si sumas sin más, cuentas dos veces la intersección, así que se resta una vez:</p>
<p>${M('P(A ∪ B) = P(A) + P(B) − P(A ∩ B)')}</p>
<p>Ejemplo con una baraja de 52 cartas: "as" (4 cartas) y "corazón" (13 cartas) no son excluyentes porque existe el as de corazones. Entonces ${M('P(as o corazón) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13')}.</p>
<p>La fórmula para excluyentes es el caso particular de la general, porque ahí ${M('P(A ∩ B) = 0')}.</p>`
      },
      {
        titulo: 'Interpretación: qué significa una probabilidad',
        html: `<p>Si ${M('P(A) = 0.25')}, no significa que en 4 intentos A ocurra exactamente una vez. Significa que, si repites el experimento <strong>muchísimas veces</strong>, A ocurrirá en aproximadamente el 25 % de ellas (interpretación frecuencial). Con pocas repeticiones puede haber mucha variación.</p>
<p>Un error de intuición muy común es la "falacia del jugador": si en la ruleta salió rojo cinco veces seguidas, el siguiente resultado no está "obligado" a ser negro. Los lanzamientos no tienen memoria.</p>
<p>Escala práctica: cerca de 0 el evento es muy raro; cerca de 0.5 es tan probable como no; cerca de 1 es casi seguro. Un evento con probabilidad 0.03 ocurre, en promedio, 3 veces de cada 100.</p>`
      },
      {
        titulo: 'Relación con otros temas',
        html: `<ul>
<li><strong>Conjuntos (1.19):</strong> los eventos son conjuntos; "A o B" es la unión, "A y B" es la intersección y "no A" es el complemento. Los diagramas de Venn sirven para visualizar la regla de adición.</li>
<li><strong>Conteo y combinaciones (1.20 y 1.21):</strong> permiten calcular ${M('n(A)')} y ${M('n(S)')} cuando son grandes.</li>
<li><strong>Siguiente tema (1.23):</strong> cuando la información de un evento cambia la probabilidad de otro, aparece la probabilidad condicional.</li>
</ul>
<p>Prueba la calculadora de probabilidad clásica para comprobar tus resultados.</p>`
      }
    ],
    formulas: [
      { label: 'Probabilidad clásica', html: 'P(A) = n(A)/n(S)' },
      { label: 'Rango de una probabilidad', html: '0 ≤ P(A) ≤ 1' },
      { label: 'Complemento', html: 'P(Eᶜ) = 1 − P(E)' },
      { label: 'Adición general', html: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)' },
      { label: 'Adición (excluyentes)', html: 'P(A ∪ B) = P(A) + P(B)' },
      { label: 'Al menos uno', html: 'P(al menos uno) = 1 − P(ninguno)' },
      { label: 'Combinaciones', html: 'C(n, r) = n!/(r!(n − r)!)' }
    ],
    ejemplos: [
      {
        titulo: 'Un dado y un evento simple',
        enunciado: `Se lanza un dado justo. ¿Cuál es la probabilidad de que salga un número primo?`,
        pasos: [
          `Espacio muestral: ${M('S = {1, 2, 3, 4, 5, 6}')}, así que ${M('n(S) = 6')}.`,
          `Los números primos en S son 2, 3 y 5 (el 1 no es primo): ${M('n(A) = 3')}.`,
          `Aplica la fórmula: ${M('P(A) = 3/6 = 1/2')}.`
        ],
        respuesta: `${M('P(primo) = 1/2 = 0.5')}`
      },
      {
        titulo: 'Baraja: eventos no excluyentes',
        enunciado: `De una baraja de 52 cartas se saca una al azar. ¿Cuál es la probabilidad de que sea un as o un corazón?`,
        pasos: [
          `Hay 4 ases y 13 corazones: ${M('P(as) = 4/52')} y ${M('P(corazón) = 13/52')}.`,
          `El as de corazones está en ambos grupos, por eso los eventos no son excluyentes: ${M('P(as y corazón) = 1/52')}.`,
          `Regla de adición: ${M('P = 4/52 + 13/52 − 1/52 = 16/52')}.`,
          `Simplifica: ${M('16/52 = 4/13 ≈ 0.3077')}.`
        ],
        respuesta: `${M('P(as o corazón) = 4/13 ≈ 0.308')}`
      },
      {
        titulo: 'Dos dados: tabla de 36 casos',
        enunciado: `Se lanzan dos dados. Calcula la probabilidad de que la suma sea 8 o que los dos dados muestren el mismo número (dobles).`,
        pasos: [
          `Hay ${M('6 · 6 = 36')} resultados equiprobables.`,
          `Suma 8: (2,6), (3,5), (4,4), (5,3), (6,2), es decir 5 casos. Dobles: (1,1), (2,2), …, (6,6), es decir 6 casos.`,
          `El resultado (4,4) cumple ambas condiciones, así que se cuenta una sola vez: ${M('5 + 6 − 1 = 10')} casos.`,
          `${M('P = 10/36 = 5/18')}. También con la regla de adición: ${M('5/36 + 6/36 − 1/36 = 10/36')}.`
        ],
        respuesta: `${M('P = 5/18 ≈ 0.278')}`
      },
      {
        titulo: 'Combinaciones y complemento: un comité',
        enunciado: `En un grupo hay 6 mujeres y 4 hombres. Se elige al azar un comité de 3 personas. ¿Cuál es la probabilidad de que el comité tenga al menos una mujer?`,
        pasos: [
          `Casos posibles: ${M('C(10, 3) = 120')}.`,
          `Calcular "al menos una mujer" directamente exige sumar 1, 2 y 3 mujeres. Es más corto usar el complemento: "ninguna mujer", o sea, 3 hombres.`,
          `Comités de 3 hombres: ${M('C(4, 3) = 4')}, así que ${M('P(ninguna mujer) = 4/120 = 1/30')}.`,
          `${M('P(al menos una) = 1 − 1/30 = 29/30')}.`
        ],
        respuesta: `${M('P = 29/30 ≈ 0.967')}`
      },
      {
        titulo: 'Cuatro lanzamientos de un dado',
        enunciado: `Se lanza un dado 4 veces. ¿Cuál es la probabilidad de obtener al menos un 6?`,
        pasos: [
          `El complemento es "ningún 6 en los 4 lanzamientos".`,
          `En cada lanzamiento hay 5 resultados de 6 que no son 6. Casos favorables al complemento: ${M('5⁴ = 625')}; casos posibles: ${M('6⁴ = 1296')}.`,
          `${M('P(ningún 6) = 625/1296')}.`,
          `${M('P(al menos un 6) = 1 − 625/1296 = 671/1296 ≈ 0.5177')}.`
        ],
        respuesta: `${M('P = 671/1296 ≈ 0.518')}, un poco más de la mitad.`
      },
      {
        titulo: 'Contexto real: rifa en la escuela',
        enunciado: `En la rifa de un centro escolar de Santa Ana se venden 500 boletos y hay 3 premios, cada uno con un boleto distinto. Si compras 5 boletos, ¿cuál es la probabilidad de ganar al menos un premio? Redondea a 4 decimales.`,
        pasos: [
          `Casos posibles al escoger 5 boletos de 500: ${M('C(500, 5)')}.`,
          `Complemento: tus 5 boletos están entre los 497 que no tienen premio: ${M('C(497, 5)')} casos.`,
          `${M('P(ningún premio) = C(497, 5)/C(500, 5) = 247 648 605 204/255 244 687 600 ≈ 0.9702')}.`,
          `${M('P(al menos un premio) = 1 − 0.9702 = 0.0298')}.`
        ],
        respuesta: `${M('P ≈ 0.0298')}, es decir, cerca de 3 %.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Se lanza un dado justo. Calcula la probabilidad de obtener un número par.`,
        pasos: [
          `${M('S = {1, 2, 3, 4, 5, 6}')}, ${M('n(S) = 6')}.`,
          `Los pares son 2, 4 y 6: ${M('n(A) = 3')}.`,
          `${M('P(A) = 3/6 = 1/2')}.`
        ],
        respuesta: `${M('P = 1/2')}`
      },
      {
        nivel: 'facil',
        enunciado: `Una bolsa tiene 3 canicas rojas, 5 azules y 2 verdes. Se saca una al azar. ¿Cuál es la probabilidad de que sea verde?`,
        pasos: [
          `Total de canicas: ${M('3 + 5 + 2 = 10')}.`,
          `Favorables: 2 verdes.`,
          `${M('P(verde) = 2/10 = 1/5')}.`
        ],
        respuesta: `${M('P = 1/5 = 0.2')}`
      },
      {
        nivel: 'facil',
        enunciado: `Se lanzan dos monedas. ¿Cuál es la probabilidad de obtener dos caras?`,
        pasos: [
          `${M('S = {CC, CS, SC, SS}')}, ${M('n(S) = 4')}.`,
          `Solo CC cumple: ${M('n(A) = 1')}.`,
          `${M('P = 1/4')}.`
        ],
        respuesta: `${M('P = 1/4 = 0.25')}`
      },
      {
        nivel: 'facil',
        enunciado: `El pronóstico indica que la probabilidad de lluvia mañana en Santa Ana es 0.35. ¿Cuál es la probabilidad de que no llueva?`,
        pasos: [
          `"No llueva" es el complemento de "llueva".`,
          `${M('P(no llueva) = 1 − P(llueva)')}.`,
          `${M('= 1 − 0.35 = 0.65')}.`
        ],
        respuesta: `${M('P = 0.65')}, o sea 65 %.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea mayor o igual que 10?`,
        pasos: [
          `${M('n(S) = 36')}.`,
          `Suma 10: (4,6), (5,5), (6,4): 3 casos. Suma 11: (5,6), (6,5): 2 casos. Suma 12: (6,6): 1 caso.`,
          `Favorables: ${M('3 + 2 + 1 = 6')}.`,
          `${M('P = 6/36 = 1/6')}.`
        ],
        respuesta: `${M('P = 1/6 ≈ 0.167')}`
      },
      {
        nivel: 'intermedio',
        enunciado: `De una baraja de 52 cartas se saca una. Calcula la probabilidad de que sea una figura (J, Q o K) o un trébol.`,
        pasos: [
          `Figuras: ${M('3 · 4 = 12')} cartas. Tréboles: 13 cartas.`,
          `Figuras de trébol (J, Q, K de trébol): 3 cartas; se cuentan en ambos grupos.`,
          `${M('P = 12/52 + 13/52 − 3/52 = 22/52')}.`,
          `${M('22/52 = 11/26 ≈ 0.423')}.`
        ],
        respuesta: `${M('P = 11/26 ≈ 0.423')}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Se lanzan dos dados. Calcula la probabilidad de que la suma sea múltiplo de 3 o mayor que 9.`,
        pasos: [
          `Sumas múltiplo de 3: 3 (2 casos), 6 (5 casos), 9 (4 casos), 12 (1 caso): 12 casos.`,
          `Sumas mayores que 9: 10 (3), 11 (2), 12 (1): 6 casos.`,
          `La suma 12 está en ambos grupos (1 caso): se resta una vez.`,
          `Casos: ${M('12 + 6 − 1 = 17')}, entonces ${M('P = 17/36')}.`
        ],
        respuesta: `${M('P = 17/36 ≈ 0.472')}`
      },
      {
        nivel: 'intermedio',
        enunciado: `En un grupo de 40 estudiantes, 22 estudian inglés, 15 estudian francés y 6 estudian ambos idiomas. Si se elige uno al azar, ¿cuál es la probabilidad de que estudie al menos uno de los dos idiomas? ¿Y de que no estudie ninguno?`,
        pasos: [
          `${M('P(inglés) = 22/40')}, ${M('P(francés) = 15/40')}, ${M('P(ambos) = 6/40')}.`,
          `${M('P(al menos uno) = 22/40 + 15/40 − 6/40 = 31/40 = 0.775')}.`,
          `Ninguno es el complemento: ${M('1 − 31/40 = 9/40 = 0.225')}.`
        ],
        respuesta: `${M('P(al menos uno) = 31/40')} y ${M('P(ninguno) = 9/40')}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Una urna contiene 10 bolas, 5 blancas y 5 negras. Se sacan 2 bolas a la vez. Calcula la probabilidad de que ambas sean blancas y la de que sean de distinto color.`,
        pasos: [
          `Casos posibles: ${M('C(10, 2) = 45')}.`,
          `Ambas blancas: ${M('C(5, 2) = 10')}, entonces ${M('P = 10/45 = 2/9')}.`,
          `Distinto color: una blanca y una negra, ${M('5 · 5 = 25')} casos, entonces ${M('P = 25/45 = 5/9')}.`,
          `Comprobación: ambas blancas (2/9) + ambas negras (2/9) + distinto color (5/9) = 1.`
        ],
        respuesta: `${M('P(ambas blancas) = 2/9')}; ${M('P(distinto color) = 5/9')}.`
      },
      {
        nivel: 'dificil',
        enunciado: `¿Cuál es la probabilidad de obtener al menos un 6 al lanzar un dado 4 veces, y por qué no es ${M('4/6')}? Calcula el valor y compáralo con la probabilidad de obtener al menos una cara en 3 lanzamientos de una moneda.`,
        pasos: [
          `Sumar ${M('1/6 + 1/6 + 1/6 + 1/6')} sería incorrecto porque los eventos no son excluyentes (pueden salir dos 6).`,
          `Con el complemento: ${M('P(ningún 6) = (5/6)⁴ = 625/1296')}.`,
          `${M('P(al menos un 6) = 1 − 625/1296 = 671/1296 ≈ 0.518')}.`,
          `Moneda: ${M('P(ninguna cara) = (1/2)³ = 1/8')}, así que ${M('P(al menos una cara) = 7/8 = 0.875')}.`
        ],
        respuesta: `Dado: ${M('671/1296 ≈ 0.518')}; moneda: ${M('7/8 = 0.875')}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Para dos eventos A y B se sabe que ${M('P(A) = 0.5')}, ${M('P(B) = 0.4')} y ${M('P(A ∪ B) = 0.7')}. Calcula ${M('P(A ∩ B)')} y la probabilidad de que no ocurra ninguno de los dos.`,
        pasos: [
          `De la regla de adición: ${M('P(A ∩ B) = P(A) + P(B) − P(A ∪ B)')}.`,
          `${M('P(A ∩ B) = 0.5 + 0.4 − 0.7 = 0.2')}.`,
          `"Ninguno" es el complemento de la unión: ${M('1 − P(A ∪ B) = 1 − 0.7 = 0.3')}.`
        ],
        respuesta: `${M('P(A ∩ B) = 0.2')} y ${M('P(ninguno) = 0.3')}.`
      }
    ],
    teoricas: [
      {
        q: `¿Qué diferencia hay entre un resultado, un evento y el espacio muestral?`,
        a: `El espacio muestral ${M('S')} es el conjunto de todos los resultados posibles. Un resultado (punto muestral) es un elemento de ${M('S')}. Un evento es cualquier subconjunto de ${M('S')}, es decir, un grupo de resultados que cumplen una condición.`
      },
      {
        q: `¿Por qué la probabilidad clásica solo es válida si los resultados son equiprobables?`,
        a: `Porque la fórmula casos favorables entre casos posibles trata a cada resultado como igual de probable. Si un dado está cargado, no puedes decir que ${M('P(6) = 1/6')} solo por contar caras.`
      },
      {
        q: `¿Puede una probabilidad valer 1.3 o −0.2? Explica.`,
        a: `No. Como ${M('n(A)')} nunca es negativo ni mayor que ${M('n(S)')}, siempre se cumple ${M('0 ≤ P(A) ≤ 1')}. Un valor fuera de ese intervalo indica un error de cálculo.`
      },
      {
        q: `¿Cuándo se puede sumar directamente ${M('P(A) + P(B)')} para obtener ${M('P(A ∪ B)')}?`,
        a: `Solo cuando A y B son mutuamente excluyentes (no pueden ocurrir a la vez). Si pueden ocurrir juntos hay que restar ${M('P(A ∩ B)')} para no contar dos veces esos casos.`
      },
      {
        q: `¿Por qué "al menos uno" se calcula mejor con el complemento?`,
        a: `Porque "al menos uno" agrupa muchos casos (uno, dos, tres, …), mientras que su complemento "ninguno" es un solo caso. Así ${M('P(al menos uno) = 1 − P(ninguno)')} ahorra cálculos y reduce errores.`
      },
      {
        q: `Si ${M('P(A) = 0.3')} y ${M('P(B) = 0.5')}, ¿podrían A y B ser excluyentes? ¿Y si ${M('P(A) = 0.6')} y ${M('P(B) = 0.5')}?`,
        a: `Con 0.3 y 0.5 sí podrían ser excluyentes, porque ${M('0.3 + 0.5 = 0.8 ≤ 1')}. Con 0.6 y 0.5 no pueden serlo: la suma sería 1.1, mayor que 1, lo cual es imposible, así que deben compartir resultados.`
      },
      {
        q: `Después de lanzar una moneda 5 veces y obtener 5 caras, ¿es más probable sello en el sexto lanzamiento?`,
        a: `No. Los lanzamientos son independientes y la moneda no tiene memoria: ${M('P(sello) = 1/2')} en cada lanzamiento. Pensar lo contrario es la falacia del jugador.`
      },
      {
        q: `Si ${M('P(A) = 0.4')}, ¿qué significa que ${M('P(A<sup>c</sup>) = 0.6')} y por qué deben sumar 1?`,
        a: `A y su complemento son eventos excluyentes que juntos cubren todo el espacio muestral, así que siempre ocurre exactamente uno de los dos. Por eso sus probabilidades suman ${M('P(S) = 1')}.`
      }
    ],
    errores: [
      `<strong>Sumar sin restar la intersección.</strong> Con "as o corazón" muchos suman ${M('4/52 + 13/52')} y olvidan que el as de corazones se contó dos veces. Pregúntate siempre si los eventos pueden ocurrir a la vez.`,
      `<strong>Contar con criterios distintos.</strong> Usar combinaciones (sin orden) en el numerador y permutaciones (con orden) en el denominador da probabilidades mayores que 1 o sin sentido. Usa el mismo criterio en ambos.`,
      `<strong>Suponer equiprobabilidad donde no existe.</strong> En dos dados, las sumas no son equiprobables (la suma 7 tiene 6 casos y la suma 2 solo uno). Cuenta sobre los 36 pares, no sobre las 11 sumas.`,
      `<strong>Resolver "al menos uno" sumando casos.</strong> Es lento y propenso a errores. Usa ${M('1 − P(ninguno)')}.`
    ],
    aplicacion: {
      titulo: 'Control de calidad de lámparas en una ferretería',
      html: `<p>Una ferretería de Santa Ana recibe una caja de 20 lámparas LED. Se sabe que 4 están defectuosas. Para revisar el lote, el encargado prueba 3 lámparas escogidas al azar y rechaza la caja si encuentra <strong>al menos una defectuosa</strong>. ¿Qué probabilidad hay de que la caja sea rechazada?</p>
<p><strong>Paso 1.</strong> Casos posibles: ${M('C(20, 3) = 1140')}.</p>
<p><strong>Paso 2.</strong> Complemento (no rechazar): las 3 lámparas probadas son buenas. Hay 16 buenas: ${M('C(16, 3) = 560')}.</p>
<p><strong>Paso 3.</strong> ${M('P(aceptar) = 560/1140 = 28/57 ≈ 0.491')}.</p>
<p><strong>Paso 4.</strong> ${M('P(rechazar) = 1 − 28/57 = 29/57 ≈ 0.509')}.</p>
<p>Aun con 20 % de lámparas defectuosas, esta revisión de solo 3 piezas detecta el problema apenas en la mitad de los casos. Para tener más seguridad habría que revisar más lámparas, y la misma técnica del complemento te permite calcular cuántas.</p>`
    },
    calc: 'prob-clasica',
    examen: [
      {
        tipo: 'num',
        q: `Se lanza un dado justo. ¿Cuál es la probabilidad de obtener un múltiplo de 3? Responde como fracción o decimal.`,
        r: 1 / 3, tol: 0.01,
        pasos: [
          `${M('S = {1, 2, 3, 4, 5, 6}')}, ${M('n(S) = 6')}.`,
          `Múltiplos de 3: 3 y 6, es decir ${M('n(A) = 2')}.`,
          `${M('P = 2/6 = 1/3 ≈ 0.333')}.`
        ]
      },
      {
        tipo: 'num',
        q: `Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma sea 7? Redondea a 3 decimales.`,
        r: 1 / 6, tol: 0.01,
        pasos: [
          `Hay 36 resultados equiprobables.`,
          `Suma 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 casos.`,
          `${M('P = 6/36 = 1/6 ≈ 0.167')}.`
        ]
      },
      {
        tipo: 'opt',
        q: `¿Cuál de los siguientes valores NO puede ser la probabilidad de un evento?`,
        opciones: ['0', '1/3', '−0.2', '1'],
        correcta: 2,
        pasos: [
          `Toda probabilidad cumple ${M('0 ≤ P ≤ 1')}.`,
          `0, 1/3 y 1 están en ese intervalo.`,
          `−0.2 es negativo, por lo tanto no puede ser una probabilidad.`
        ]
      },
      {
        tipo: 'num',
        q: `De una baraja de 52 cartas se saca una. ¿Cuál es la probabilidad de que sea un rey o un corazón? Redondea a 3 decimales.`,
        r: 16 / 52, tol: 0.01,
        pasos: [
          `4 reyes y 13 corazones; el rey de corazones está en ambos grupos.`,
          `${M('P = 4/52 + 13/52 − 1/52 = 16/52')}.`,
          `${M('16/52 = 4/13 ≈ 0.308')}.`
        ]
      },
      {
        tipo: 'num',
        q: `Se lanza un dado 3 veces. ¿Cuál es la probabilidad de obtener al menos un 6? Redondea a 3 decimales.`,
        r: 91 / 216, tol: 0.01,
        pasos: [
          `Complemento: ningún 6 en 3 lanzamientos.`,
          `${M('P(ningún 6) = (5/6)³ = 125/216')}.`,
          `${M('P(al menos un 6) = 1 − 125/216 = 91/216 ≈ 0.421')}.`
        ]
      },
      {
        tipo: 'lista',
        q: `Una urna tiene 4 bolas rojas y 6 azules. Se saca una al azar. Escribe, separadas por comas y en decimales, ${M('P(roja)')} y ${M('P(azul)')}.`,
        r: [0.4, 0.6], tol: 0.01,
        pasos: [
          `Total de bolas: 10.`,
          `${M('P(roja) = 4/10 = 0.4')}.`,
          `${M('P(azul) = 6/10 = 0.6')}, que también es ${M('1 − 0.4')}.`
        ]
      },
      {
        tipo: 'opt',
        q: `Si la probabilidad de que un estudiante apruebe una prueba es 0.28, ¿cuál es la probabilidad de que NO la apruebe?`,
        opciones: ['0.28', '0.72', '0.82', '1.28'],
        correcta: 1,
        pasos: [
          `"No aprobar" es el complemento de "aprobar".`,
          `${M('P(no aprobar) = 1 − 0.28 = 0.72')}.`,
          `Las otras opciones son errores típicos: repetir el dato, restar mal o sumar 1.`
        ]
      },
      {
        tipo: 'num',
        q: `Un grupo tiene 5 hombres y 3 mujeres. Se eligen 3 personas al azar. ¿Cuál es la probabilidad de que las 3 sean mujeres? Redondea a 4 decimales.`,
        r: 1 / 56, tol: 0.001,
        pasos: [
          `Casos posibles: ${M('C(8, 3) = 56')}.`,
          `Casos favorables: ${M('C(3, 3) = 1')}.`,
          `${M('P = 1/56 ≈ 0.0179')}.`
        ]
      },
      {
        tipo: 'par',
        q: `Para dos eventos se sabe que ${M('P(A) = 0.5')}, ${M('P(B) = 0.4')} y ${M('P(A ∪ B) = 0.7')}. Escribe el par ${M('(P(A ∩ B), P(ni A ni B))')}.`,
        r: [0.2, 0.3], tol: 0.01,
        pasos: [
          `${M('P(A ∩ B) = P(A) + P(B) − P(A ∪ B)')}.`,
          `${M('= 0.5 + 0.4 − 0.7 = 0.2')}.`,
          `${M('P(ni A ni B) = 1 − P(A ∪ B) = 1 − 0.7 = 0.3')}.`
        ]
      },
      {
        tipo: 'opt',
        q: `A y B son mutuamente excluyentes con ${M('P(A) = 0.3')} y ${M('P(B) = 0.5')}. ¿Cuál es ${M('P(A ∪ B)')}?`,
        opciones: ['0.15', '0.2', '0.65', '0.8'],
        correcta: 3,
        pasos: [
          `Al ser excluyentes, ${M('P(A ∩ B) = 0')}.`,
          `${M('P(A ∪ B) = 0.3 + 0.5 − 0 = 0.8')}.`,
          `0.15 sería el producto (error de confundir con independencia) y 0.2 la resta.`
        ]
      }
    ]
  };

  /* ===================================================== 1.23 ===================================================== */
  T['1.23'] = {
    id: '1.23',
    unidad: 8,
    titulo: 'Probabilidad condicional e independencia',
    resumen: 'Calcula probabilidades conjuntas y condicionales, decide si dos eventos son independientes y usa tablas de contingencia y árboles.',
    objetivos: [
      'Calcular la probabilidad conjunta de dos eventos con y sin reemplazo.',
      'Aplicar la fórmula de probabilidad condicional y reconocerla en tablas de contingencia.',
      'Decidir si dos eventos son independientes comparando probabilidades.',
      'Resolver problemas con diagramas de árbol y la regla del producto.'
    ],
    teoria: [
      {
        titulo: 'Probabilidad conjunta',
        html: `<p>La <strong>probabilidad conjunta</strong> de dos eventos, ${M('P(A ∩ B)')}, es la probabilidad de que ocurran <strong>ambos</strong> ("A y B"). Se puede obtener contando casos (${M('n(A ∩ B)/n(S)')}) o con la regla del producto que verás más abajo.</p>
<p>Ejemplo: en un grupo de 150 estudiantes, 50 son mujeres y prefieren pupusas. Entonces ${M('P(mujer y pupusas) = 50/150 = 1/3')}.</p>
<p>No la confundas con la unión ${M('P(A ∪ B)')} ("A o B"): la intersección siempre es menor o igual que cada probabilidad individual, ${M('P(A ∩ B) ≤ P(A)')} y ${M('P(A ∩ B) ≤ P(B)')}.</p>`
      },
      {
        titulo: 'Probabilidad condicional',
        html: `<p>A veces sabes que ya ocurrió B, y eso cambia las probabilidades. La <strong>probabilidad condicional</strong> de A dado B se escribe ${M('P(A | B)')} y se lee "probabilidad de A, dado B".</p>
<p>${M('P(A | B) = P(A ∩ B)/P(B)')}, con ${M('P(B) > 0')}</p>
<p><strong>Idea intuitiva:</strong> B se convierte en el nuevo espacio muestral. Dentro de B, ¿qué parte de los casos también está en A? Por eso, con conteo directo:</p>
<p>${M('P(A | B) = n(A ∩ B)/n(B)')}</p>
<p>Ejemplo: se lanzan dos dados y sabes que la suma es 8. Ese dato deja solo 5 casos posibles; de ellos, 1 es doble (4,4). Entonces ${M('P(doble | suma 8) = 1/5')}, mucho mayor que ${M('P(doble) = 1/6')}.</p>
<p>El orden importa: en general ${M('P(A | B) ≠ P(B | A)')}.</p>`
      },
      {
        titulo: 'Regla del producto',
        html: `<p>Despejando la intersección de la fórmula condicional se obtiene la <strong>regla del producto</strong>:</p>
<p>${M('P(A ∩ B) = P(B) · P(A | B) = P(A) · P(B | A)')}</p>
<p>Se extiende a más eventos: ${M('P(A ∩ B ∩ C) = P(A) · P(B | A) · P(C | A ∩ B)')}. Cada factor es la probabilidad del siguiente suceso <em>sabiendo lo que ya ocurrió</em>.</p>
<p><strong>Extracciones sin reemplazo:</strong> la urna cambia después de cada extracción. En una urna con 5 rojas y 3 azules, la probabilidad de sacar dos rojas seguidas es ${M('5/8 · 4/7 = 5/14')}.</p>
<p><strong>Extracciones con reemplazo:</strong> la urna se restablece, las probabilidades no cambian y ${M('P(dos rojas) = 5/8 · 5/8 = 25/64')}.</p>`
      },
      {
        titulo: 'Eventos independientes',
        html: `<p>Dos eventos son <strong>independientes</strong> cuando saber que uno ocurrió no cambia la probabilidad del otro: ${M('P(A | B) = P(A)')}. Equivale a cualquiera de estas condiciones:</p>
<p>${M('P(A ∩ B) = P(A) · P(B)')}</p>
<p><strong>Cómo comprobarlo:</strong> calcula ${M('P(A ∩ B)')} por conteo o dato y compáralo con el producto ${M('P(A) · P(B)')}. Si son iguales, son independientes; si no, son dependientes.</p>
<p><strong>Ejemplos típicos de independencia:</strong> lanzamientos distintos de una moneda, un dado y una moneda, extracciones con reemplazo. <strong>Dependencia típica:</strong> extracciones sin reemplazo.</p>
<p>Para varios eventos independientes, ${M('P(A ∩ B ∩ C) = P(A) · P(B) · P(C)')}.</p>`
      },
      {
        titulo: 'Independientes no es lo mismo que excluyentes',
        html: `<p>Es la confusión más frecuente de este tema:</p>
<ul>
<li><strong>Excluyentes:</strong> no pueden ocurrir juntos, ${M('P(A ∩ B) = 0')}.</li>
<li><strong>Independientes:</strong> ocurrir uno no afecta al otro, ${M('P(A ∩ B) = P(A) · P(B)')}.</li>
</ul>
<p>Si A y B tienen probabilidad positiva y son excluyentes, entonces <strong>no pueden ser independientes</strong>: saber que ocurrió A te asegura que B no ocurrió, o sea ${M('P(B | A) = 0 ≠ P(B)')}. Ejemplo: en un dado, "sale par" y "sale impar" son excluyentes y muy dependientes.</p>
<p>Prueba para recordarlo: excluyentes se relaciona con la <em>suma</em> (regla de adición); independientes se relaciona con el <em>producto</em>.</p>`
      },
      {
        titulo: 'Tablas de contingencia (doble entrada)',
        html: `<p>Una <strong>tabla de contingencia</strong> clasifica a un grupo según dos características. Ejemplo con 150 estudiantes:</p>
<table>
<tr><th></th><th>Pupusas</th><th>Otra comida</th><th>Total</th></tr>
<tr><td>Mujeres</td><td>50</td><td>30</td><td>80</td></tr>
<tr><td>Hombres</td><td>40</td><td>30</td><td>70</td></tr>
<tr><td>Total</td><td>90</td><td>60</td><td>150</td></tr>
</table>
<ul>
<li><strong>Conjunta:</strong> ${M('P(mujer y pupusas) = 50/150')}, se divide entre el gran total.</li>
<li><strong>Marginal:</strong> ${M('P(pupusas) = 90/150 = 0.6')}, se lee en los totales.</li>
<li><strong>Condicional:</strong> ${M('P(pupusas | mujer) = 50/80 = 0.625')}. Se divide entre el total de la <em>fila</em> o <em>columna</em> de la condición.</li>
</ul>
<p>Como ${M('P(pupusas | mujer) = 0.625 ≠ P(pupusas) = 0.6')}, preferir pupusas y ser mujer son eventos <strong>dependientes</strong> en este grupo.</p>`
      },
      {
        titulo: 'Diagramas de árbol y "al menos uno"',
        html: `<p>Un <strong>diagrama de árbol</strong> organiza experimentos en etapas. Cada rama lleva su probabilidad (condicional a lo anterior):</p>
<ul>
<li>Para un camino completo, <strong>multiplica</strong> las probabilidades de sus ramas (regla del producto).</li>
<li>Si un evento puede ocurrir por varios caminos, <strong>suma</strong> las probabilidades de esos caminos (son excluyentes).</li>
<li>Las ramas que salen de un mismo nodo suman 1.</li>
</ul>
<p><strong>Eventos independientes y "al menos uno":</strong> si A y B son independientes, ${M('P(al menos uno) = 1 − P(A<sup>c</sup>) · P(B<sup>c</sup>)')}. Por ejemplo, dos penales con aciertos de 0.7 y 0.8: ${M('1 − 0.3 · 0.2 = 0.94')}.</p>
<p>Prueba la calculadora de probabilidad condicional para verificar tus resultados.</p>`
      }
    ],
    formulas: [
      { label: 'Condicional', html: 'P(A | B) = P(A ∩ B)/P(B)' },
      { label: 'Regla del producto', html: 'P(A ∩ B) = P(B) · P(A | B)' },
      { label: 'Independencia', html: 'P(A ∩ B) = P(A) · P(B)' },
      { label: 'Independencia (equivalente)', html: 'P(A | B) = P(A)' },
      { label: 'Condicional del complemento', html: 'P(Aᶜ | B) = 1 − P(A | B)' },
      { label: 'Al menos uno (independientes)', html: 'P(A ∪ B) = 1 − P(Aᶜ) · P(Bᶜ)' },
      { label: 'Tres eventos', html: 'P(A ∩ B ∩ C) = P(A) · P(B | A) · P(C | A ∩ B)' }
    ],
    ejemplos: [
      {
        titulo: 'Con y sin reemplazo',
        enunciado: `Una urna tiene 5 bolas rojas y 3 azules. Se sacan dos bolas, una tras otra. Calcula la probabilidad de que ambas sean rojas (a) sin reemplazo y (b) con reemplazo.`,
        pasos: [
          `Sea R₁ "la primera es roja" y R₂ "la segunda es roja". ${M('P(R₁) = 5/8')}.`,
          `(a) Sin reemplazo quedan 4 rojas de 7 bolas: ${M('P(R₂ | R₁) = 4/7')}. Regla del producto: ${M('5/8 · 4/7 = 20/56 = 5/14')}.`,
          `(b) Con reemplazo la urna vuelve a tener 5 rojas de 8: ${M('P(R₂ | R₁) = 5/8')}, y ${M('5/8 · 5/8 = 25/64')}.`
        ],
        respuesta: `(a) ${M('5/14 ≈ 0.357')}; (b) ${M('25/64 ≈ 0.391')}.`
      },
      {
        titulo: 'Condicional con dos dados',
        enunciado: `Se lanzan dos dados. Sabiendo que la suma es 8, ¿cuál es la probabilidad de que los dos dados muestren el mismo número?`,
        pasos: [
          `Evento B: suma 8. Casos: (2,6), (3,5), (4,4), (5,3), (6,2), así que ${M('n(B) = 5')}.`,
          `Evento A: dobles. De los casos de B solo (4,4) es doble: ${M('n(A ∩ B) = 1')}.`,
          `${M('P(A | B) = n(A ∩ B)/n(B) = 1/5')}.`,
          `Con la fórmula: ${M('(1/36)/(5/36) = 1/5')}. Observa que es mayor que ${M('P(A) = 1/6')}.`
        ],
        respuesta: `${M('P(doble | suma 8) = 1/5 = 0.2')}`
      },
      {
        titulo: 'Tabla de contingencia',
        enunciado: `En un grupo de 150 estudiantes, 80 son mujeres y 70 son hombres. Prefieren pupusas 50 mujeres y 40 hombres. Calcula (a) ${M('P(mujer | pupusas)')}, (b) ${M('P(pupusas | mujer)')} y (c) decide si "ser mujer" y "preferir pupusas" son independientes.`,
        pasos: [
          `Totales: pupusas = ${M('50 + 40 = 90')}; mujeres = 80; gran total = 150.`,
          `(a) Dado que prefiere pupusas, el espacio son los 90: ${M('P(mujer | pupusas) = 50/90 = 5/9 ≈ 0.556')}.`,
          `(b) Dado que es mujer, el espacio son las 80: ${M('P(pupusas | mujer) = 50/80 = 5/8 = 0.625')}.`,
          `(c) ${M('P(pupusas) = 90/150 = 0.6')}. Como ${M('0.625 ≠ 0.6')}, los eventos son dependientes. (a) y (b) son distintas: el orden de la condición importa.`
        ],
        respuesta: `(a) ${M('5/9')}; (b) ${M('5/8')}; (c) no son independientes.`
      },
      {
        titulo: 'Probar independencia con dados',
        enunciado: `Se lanzan dos dados. Sea A "el primer dado es par", B "la suma es 7" y C "la suma es 8". ¿Son independientes A y B? ¿Y A y C?`,
        pasos: [
          `${M('P(A) = 18/36 = 1/2')}, ${M('P(B) = 6/36 = 1/6')} y ${M('P(C) = 5/36')}.`,
          `A ∩ B: primer dado par y suma 7: (2,5), (4,3), (6,1). Son 3 casos: ${M('P(A ∩ B) = 3/36 = 1/12')}.`,
          `${M('P(A) · P(B) = 1/2 · 1/6 = 1/12')}. Coincide, así que A y B son independientes.`,
          `A ∩ C: (2,6), (4,4), (6,2). Son 3 casos: ${M('P(A ∩ C) = 3/36 = 6/72')}. Pero ${M('P(A) · P(C) = 1/2 · 5/36 = 5/72')}, así que A y C son dependientes.`
        ],
        respuesta: `A y B son independientes; A y C son dependientes.`
      },
      {
        titulo: 'Tres extracciones sin reemplazo',
        enunciado: `Una urna tiene 6 bolas rojas y 4 azules. Se sacan 3 bolas sin reemplazo. ¿Cuál es la probabilidad de obtener, en este orden, roja, azul y roja?`,
        pasos: [
          `Primera roja: ${M('P(R₁) = 6/10')}.`,
          `Segunda azul, quedan 9 bolas y siguen las 4 azules: ${M('P(A₂ | R₁) = 4/9')}.`,
          `Tercera roja, quedan 8 bolas y 5 rojas: ${M('P(R₃ | R₁ ∩ A₂) = 5/8')}.`,
          `${M('P = 6/10 · 4/9 · 5/8 = 120/720 = 1/6')}.`
        ],
        respuesta: `${M('P = 1/6 ≈ 0.167')}`
      },
      {
        titulo: 'Árbol: lluvia y llegar tarde',
        enunciado: `La probabilidad de que llueva por la mañana en San Salvador es 0.3. Si llueve, un estudiante llega tarde con probabilidad 0.6; si no llueve, llega tarde con probabilidad 0.1. Calcula la probabilidad de que llueva y llegue tarde, la de que llegue tarde y la de que haya llovido sabiendo que llegó tarde.`,
        pasos: [
          `Árbol: primera etapa lluvia (0.3) o no lluvia (0.7); segunda etapa tarde o no tarde según el caso.`,
          `Llueve y llega tarde: ${M('0.3 · 0.6 = 0.18')}.`,
          `No llueve y llega tarde: ${M('0.7 · 0.1 = 0.07')}. Llegar tarde puede darse por dos caminos, así que se suman: ${M('P(tarde) = 0.18 + 0.07 = 0.25')}.`,
          `Condicional: ${M('P(lluvia | tarde) = 0.18/0.25 = 0.72')}.`
        ],
        respuesta: `${M('P(lluvia y tarde) = 0.18')}; ${M('P(tarde) = 0.25')}; ${M('P(lluvia | tarde) = 0.72')}.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `De una baraja de 52 cartas se sacan dos cartas sin reemplazo. ¿Cuál es la probabilidad de que ambas sean ases?`,
        pasos: [
          `Primera carta as: ${M('P = 4/52')}.`,
          `Segunda carta as, quedan 3 ases en 51 cartas: ${M('P = 3/51')}.`,
          `${M('P = 4/52 · 3/51 = 12/2652 = 1/221')}.`
        ],
        respuesta: `${M('P = 1/221 ≈ 0.0045')}`
      },
      {
        nivel: 'facil',
        enunciado: `Se lanzan una moneda y un dado. ¿Cuál es la probabilidad de obtener sello y un 6?`,
        pasos: [
          `La moneda y el dado son independientes.`,
          `${M('P(sello) = 1/2')} y ${M('P(6) = 1/6')}.`,
          `${M('P = 1/2 · 1/6 = 1/12')}.`
        ],
        respuesta: `${M('P = 1/12 ≈ 0.083')}`
      },
      {
        nivel: 'facil',
        enunciado: `Si ${M('P(A ∩ B) = 0.12')} y ${M('P(B) = 0.4')}, calcula ${M('P(A | B)')}.`,
        pasos: [
          `${M('P(A | B) = P(A ∩ B)/P(B)')}.`,
          `${M('= 0.12/0.4')}.`,
          `${M('= 0.3')}.`
        ],
        respuesta: `${M('P(A | B) = 0.3')}`
      },
      {
        nivel: 'facil',
        enunciado: `A y B son independientes con ${M('P(A) = 0.5')} y ${M('P(B) = 0.2')}. Calcula ${M('P(A ∩ B)')}.`,
        pasos: [
          `Por independencia, ${M('P(A ∩ B) = P(A) · P(B)')}.`,
          `${M('= 0.5 · 0.2')}.`,
          `${M('= 0.1')}.`
        ],
        respuesta: `${M('P(A ∩ B) = 0.1')}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Se lanzan dos dados. Sabiendo que al menos uno de los dados muestra un 6, ¿cuál es la probabilidad de que la suma sea mayor o igual que 10?`,
        pasos: [
          `Evento B: al menos un 6. Por complemento, ${M('n(B) = 36 − 25 = 11')} casos.`,
          `Dentro de B, las sumas mayores o iguales que 10 son (4,6), (6,4), (5,6), (6,5) y (6,6): ${M('n(A ∩ B) = 5')}.`,
          `${M('P(A | B) = 5/11')}.`
        ],
        respuesta: `${M('P = 5/11 ≈ 0.455')}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Un jugador de fútbol acierta un penal con probabilidad 0.7 y otro con probabilidad 0.8, de forma independiente. Si ambos patean, ¿cuál es la probabilidad de que al menos uno anote?`,
        pasos: [
          `Complemento: ninguno anota. ${M('P(falla 1) = 0.3')} y ${M('P(falla 2) = 0.2')}.`,
          `Por independencia, ${M('P(ninguno) = 0.3 · 0.2 = 0.06')}.`,
          `${M('P(al menos uno) = 1 − 0.06 = 0.94')}.`
        ],
        respuesta: `${M('P = 0.94')}`
      },
      {
        nivel: 'intermedio',
        enunciado: `En una clase de 40 alumnos hay 22 mujeres y 18 hombres. Tienen calculadora científica 14 mujeres y 6 hombres. Calcula ${M('P(mujer | tiene calculadora)')} y ${M('P(calculadora | hombre)')}.`,
        pasos: [
          `Total con calculadora: ${M('14 + 6 = 20')}.`,
          `${M('P(mujer | calculadora) = 14/20 = 0.7')}.`,
          `${M('P(calculadora | hombre) = 6/18 = 1/3 ≈ 0.333')}.`
        ],
        respuesta: `${M('0.7')} y ${M('1/3 ≈ 0.333')}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Una urna tiene 4 bolas rojas y 6 azules. Se sacan 2 sin reemplazo, una tras otra. ¿Cuál es la probabilidad de que sean de distinto color?`,
        pasos: [
          `Hay dos caminos: roja y luego azul, o azul y luego roja.`,
          `${M('P(R, A) = 4/10 · 6/9 = 24/90')}.`,
          `${M('P(A, R) = 6/10 · 4/9 = 24/90')}.`,
          `Los caminos son excluyentes: ${M('24/90 + 24/90 = 48/90 = 8/15')}.`
        ],
        respuesta: `${M('P = 8/15 ≈ 0.533')}`
      },
      {
        nivel: 'dificil',
        enunciado: `Una urna tiene 5 bolas blancas, 3 negras y 2 verdes. Se sacan 3 bolas sin reemplazo. ¿Cuál es la probabilidad de obtener una de cada color, en cualquier orden?`,
        pasos: [
          `Un orden específico, por ejemplo blanca, negra y verde: ${M('5/10 · 3/9 · 2/8 = 30/720 = 1/24')}.`,
          `Cualquier otro orden da el mismo producto (cambian los factores de lugar). Hay ${M('3! = 6')} órdenes posibles.`,
          `${M('P = 6 · 1/24 = 1/4')}.`,
          `Comprobación con combinaciones: ${M('5 · 3 · 2/C(10, 3) = 30/120 = 1/4')}.`
        ],
        respuesta: `${M('P = 1/4 = 0.25')}`
      },
      {
        nivel: 'dificil',
        enunciado: `Se sabe que ${M('P(A) = 0.5')}, ${M('P(B) = 0.6')} y ${M('P(A ∪ B) = 0.8')}. Calcula ${M('P(A | B)')} y decide si A y B son independientes.`,
        pasos: [
          `${M('P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0.5 + 0.6 − 0.8 = 0.3')}.`,
          `${M('P(A | B) = 0.3/0.6 = 0.5')}.`,
          `Como ${M('P(A | B) = 0.5 = P(A)')}, los eventos son independientes.`,
          `Verificación: ${M('P(A) · P(B) = 0.5 · 0.6 = 0.3 = P(A ∩ B)')}.`
        ],
        respuesta: `${M('P(A | B) = 0.5')}; sí son independientes.`
      },
      {
        nivel: 'dificil',
        enunciado: `¿Cuántas veces como mínimo hay que lanzar un dado para que la probabilidad de obtener al menos un 6 sea mayor o igual que 0.9?`,
        pasos: [
          `Para n lanzamientos independientes, ${M('P(al menos un 6) = 1 − (5/6)ⁿ')}.`,
          `Se pide ${M('1 − (5/6)ⁿ ≥ 0.9')}, es decir ${M('(5/6)ⁿ ≤ 0.1')}.`,
          `Aplica logaritmos (el logaritmo de 5/6 es negativo, el sentido de la desigualdad se invierte): ${M('n ≥ log(0.1)/log(5/6) ≈ 12.63')}.`,
          `Como n es entero, ${M('n = 13')}. Comprobación: ${M('(5/6)¹² ≈ 0.112 > 0.1')} y ${M('(5/6)¹³ ≈ 0.093 ≤ 0.1')}.`
        ],
        respuesta: `Hay que lanzar al menos 13 veces.`
      }
    ],
    teoricas: [
      {
        q: `Explica con tus palabras qué significa ${M('P(A | B)')} y por qué B pasa a ser el nuevo espacio muestral.`,
        a: `Significa la probabilidad de A cuando ya sabes que B ocurrió. Como B ya ocurrió, los únicos resultados que importan son los de B; dentro de ellos se mide qué fracción cumple también A, por eso ${M('P(A | B) = P(A ∩ B)/P(B)')}.`
      },
      {
        q: `¿Es cierto que ${M('P(A | B) = P(B | A)')}? Da un ejemplo.`,
        a: `En general no. En una baraja, ${M('P(rey | figura) = 4/12 = 1/3')}, pero ${M('P(figura | rey) = 1')} porque todos los reyes son figuras. Ambas comparten el numerador ${M('P(A ∩ B)')} pero tienen denominadores distintos.`
      },
      {
        q: `¿Cómo compruebas si dos eventos son independientes?`,
        a: `Calcula ${M('P(A ∩ B)')} y compáralo con ${M('P(A) · P(B)')}. Si son iguales, son independientes. Otra forma equivalente es ver si ${M('P(A | B) = P(A)')}: si saber que ocurrió B no cambia la probabilidad de A, son independientes.`
      },
      {
        q: `Dos eventos con probabilidad positiva son excluyentes. ¿Pueden ser independientes?`,
        a: `No. Si son excluyentes, ${M('P(A ∩ B) = 0')}, pero ${M('P(A) · P(B) > 0')}, así que nunca se cumple la igualdad de independencia. De hecho, saber que ocurrió uno asegura que el otro no ocurrió, la máxima dependencia posible.`
      },
      {
        q: `¿Por qué las extracciones sin reemplazo son dependientes y las que tienen reemplazo son independientes?`,
        a: `Sin reemplazo, lo que sacas en la primera extracción cambia la composición de la urna y por tanto la probabilidad de la segunda. Con reemplazo la urna se restablece, la segunda extracción tiene las mismas probabilidades que la primera y no depende de ella.`
      },
      {
        q: `En una tabla de contingencia, ¿entre qué total divides para una probabilidad condicional?`,
        a: `Entre el total de la fila o columna de la condición (el evento que viene después de la barra). Para ${M('P(A | B)')} divides la casilla de "A y B" entre el total de B, y no entre el gran total.`
      },
      {
        q: `Si ${M('P(A) = 0.5')} y ${M('P(B) = 0.5')}, ¿qué valores puede tomar ${M('P(A ∩ B)')}? ¿Cuál corresponde a la independencia?`,
        a: `Puede tomar cualquier valor entre 0 y 0.5. El valor 0 corresponde a eventos excluyentes y el 0.5 a eventos idénticos. La independencia exige ${M('P(A ∩ B) = 0.5 · 0.5 = 0.25')}.`
      },
      {
        q: `¿Cuándo multiplicas y cuándo sumas en un diagrama de árbol?`,
        a: `Multiplicas a lo largo de un camino (regla del producto, representa "y luego"). Sumas los resultados de caminos distintos que llevan al mismo evento (representa "o" entre caminos excluyentes).`
      }
    ],
    errores: [
      `<strong>Confundir ${M('P(A | B)')} con ${M('P(B | A)')}.</strong> Son números diferentes con significados distintos. Identifica qué está "dado" (lo que va después de la barra) y divide entre su total.`,
      `<strong>Multiplicar siempre las probabilidades.</strong> La regla ${M('P(A) · P(B)')} solo es válida si los eventos son independientes. Si son dependientes debes usar ${M('P(B | A)')} para el segundo factor, como en las extracciones sin reemplazo.`,
      `<strong>Confundir independientes con excluyentes.</strong> Excluyentes significa que no pueden ocurrir juntos; independientes significa que no se afectan entre sí. Si ambos tienen probabilidad positiva, no pueden ser las dos cosas a la vez.`,
      `<strong>Olvidar actualizar la urna.</strong> Al calcular sin reemplazo, el numerador o el denominador cambian en la segunda y tercera extracciones (por ejemplo 5/8 y luego 4/7).`
    ],
    aplicacion: {
      titulo: 'Sensores de alerta en un volcán',
      html: `<p>Para vigilar el volcán de Santa Ana (Ilamatepec) se instalan dos sensores sísmicos que funcionan de forma independiente. Ante una señal real de actividad, el sensor 1 la detecta con probabilidad 0.90 y el sensor 2 con probabilidad 0.85. Calcula la probabilidad de que (a) ambos detecten, (b) al menos uno detecte y (c) detecte exactamente uno.</p>
<p><strong>(a)</strong> Por independencia: ${M('P(ambos) = 0.90 · 0.85 = 0.765')}.</p>
<p><strong>(b)</strong> Complemento: ninguno detecta, ${M('0.10 · 0.15 = 0.015')}. Entonces ${M('P(al menos uno) = 1 − 0.015 = 0.985')}.</p>
<p><strong>(c)</strong> Exactamente uno es "al menos uno" menos "ambos": ${M('0.985 − 0.765 = 0.22')}. Comprobación por caminos: ${M('0.90 · 0.15 + 0.10 · 0.85 = 0.135 + 0.085 = 0.22')}.</p>
<p>Un solo sensor falla 10 % o 15 % de las veces, pero el sistema doble solo falla 1.5 %. La redundancia con eventos independientes es la razón por la cual los sistemas de seguridad usan varios sensores.</p>`
    },
    calc: 'prob-cond',
    examen: [
      {
        tipo: 'num',
        q: `Una urna tiene 6 bolas rojas y 4 azules. Se sacan 2 bolas sin reemplazo. ¿Cuál es la probabilidad de que ambas sean rojas? Redondea a 3 decimales.`,
        r: 1 / 3, tol: 0.01,
        pasos: [
          `Primera roja: ${M('6/10')}.`,
          `Segunda roja, quedan 5 rojas de 9 bolas: ${M('5/9')}.`,
          `${M('P = 6/10 · 5/9 = 30/90 = 1/3 ≈ 0.333')}.`
        ]
      },
      {
        tipo: 'num',
        q: `Si ${M('P(A ∩ B) = 0.18')} y ${M('P(B) = 0.45')}, calcula ${M('P(A | B)')}.`,
        r: 0.4, tol: 0.01,
        pasos: [
          `${M('P(A | B) = P(A ∩ B)/P(B)')}.`,
          `${M('= 0.18/0.45')}.`,
          `${M('= 0.4')}.`
        ]
      },
      {
        tipo: 'opt',
        q: `Si A y B son mutuamente excluyentes y ambos tienen probabilidad mayor que 0, ¿cuál afirmación es correcta?`,
        opciones: ['A y B son independientes', 'A y B no son independientes', 'P(A ∩ B) = P(A) · P(B)', 'P(A | B) = P(A)'],
        correcta: 1,
        pasos: [
          `Excluyentes implica ${M('P(A ∩ B) = 0')}.`,
          `Pero ${M('P(A) · P(B) > 0')}, así que la condición de independencia no se cumple.`,
          `Por lo tanto A y B no son independientes; las demás opciones son equivalentes a la independencia.`
        ]
      },
      {
        tipo: 'num',
        q: `A y B son independientes con ${M('P(A) = 0.6')} y ${M('P(B) = 0.5')}. Calcula ${M('P(A ∪ B)')}.`,
        r: 0.8, tol: 0.01,
        pasos: [
          `${M('P(A ∩ B) = 0.6 · 0.5 = 0.3')}.`,
          `${M('P(A ∪ B) = 0.6 + 0.5 − 0.3')}.`,
          `${M('= 0.8')}. Comprobación: ${M('1 − 0.4 · 0.5 = 0.8')}.`
        ]
      },
      {
        tipo: 'par',
        q: `En un grupo de 150 estudiantes hay 80 mujeres y 70 hombres. Prefieren pupusas 50 mujeres y 40 hombres. Escribe el par ${M('(P(mujer | pupusas), P(pupusas | mujer))')} en decimales (3 decimales).`,
        r: [5 / 9, 0.625], tol: 0.01,
        pasos: [
          `Prefieren pupusas: ${M('50 + 40 = 90')}.`,
          `${M('P(mujer | pupusas) = 50/90 ≈ 0.556')}.`,
          `${M('P(pupusas | mujer) = 50/80 = 0.625')}.`
        ]
      },
      {
        tipo: 'num',
        q: `Dos jugadores patean un penal de forma independiente; el primero anota con probabilidad 0.9 y el segundo con 0.7. ¿Cuál es la probabilidad de que anote exactamente uno?`,
        r: 0.34, tol: 0.01,
        pasos: [
          `Camino 1: anota el primero y falla el segundo: ${M('0.9 · 0.3 = 0.27')}.`,
          `Camino 2: falla el primero y anota el segundo: ${M('0.1 · 0.7 = 0.07')}.`,
          `Son caminos excluyentes: ${M('0.27 + 0.07 = 0.34')}.`
        ]
      },
      {
        tipo: 'opt',
        q: `Si ${M('P(A) = 0.4')}, ${M('P(B) = 0.5')} y ${M('P(A ∩ B) = 0.2')}, entonces A y B son:`,
        opciones: ['Independientes', 'Mutuamente excluyentes', 'Complementarios', 'Dependientes'],
        correcta: 0,
        pasos: [
          `Calcula el producto: ${M('P(A) · P(B) = 0.4 · 0.5 = 0.2')}.`,
          `Coincide con ${M('P(A ∩ B) = 0.2')}, así que son independientes.`,
          `No son excluyentes porque la intersección no es 0.`
        ]
      },
      {
        tipo: 'num',
        q: `Se lanzan dos dados. Sabiendo que la suma es 10, ¿cuál es la probabilidad de que los dos dados muestren el mismo número? Redondea a 3 decimales.`,
        r: 1 / 3, tol: 0.01,
        pasos: [
          `Suma 10: (4,6), (5,5), (6,4), es decir 3 casos.`,
          `Dobles dentro de esos casos: solo (5,5), es decir 1 caso.`,
          `${M('P = 1/3 ≈ 0.333')}.`
        ]
      },
      {
        tipo: 'lista',
        q: `En una clase de 40 alumnos hay 22 mujeres y 18 hombres. Tienen calculadora 14 mujeres y 6 hombres. Escribe, en decimales y separadas por comas, ${M('P(calculadora | hombre)')} y ${M('P(mujer | calculadora)')}.`,
        r: [1 / 3, 0.7], tol: 0.01,
        pasos: [
          `${M('P(calculadora | hombre) = 6/18 = 0.333')}.`,
          `Total con calculadora: ${M('14 + 6 = 20')}.`,
          `${M('P(mujer | calculadora) = 14/20 = 0.7')}.`
        ]
      },
      {
        tipo: 'opt',
        q: `Si ${M('P(A | B) = 0.35')}, ¿cuánto vale ${M('P(Aᶜ | B)')}?`,
        opciones: ['0.35', '0.4', '0.5', '0.65'],
        correcta: 3,
        pasos: [
          `Dado B, A y su complemento son excluyentes y cubren todo B.`,
          `${M('P(Aᶜ | B) = 1 − P(A | B) = 1 − 0.35 = 0.65')}.`,
          `0.35 es el valor original y 0.4 y 0.5 no salen de ningún cálculo válido.`
        ]
      }
    ]
  };

  /* ===================================================== 1.24 ===================================================== */
  T['1.24'] = {
    id: '1.24',
    unidad: 8,
    titulo: 'Teorema de Bayes',
    resumen: 'Actualiza probabilidades con nueva información usando la probabilidad total, el diagrama de árbol y el teorema de Bayes.',
    objetivos: [
      'Calcular la probabilidad total de un evento usando una partición del espacio muestral.',
      'Aplicar el teorema de Bayes para obtener probabilidades a posteriori.',
      'Organizar causas y efectos con un diagrama de árbol.',
      'Interpretar resultados de pruebas diagnósticas, controles de calidad y otros problemas reales.'
    ],
    teoria: [
      {
        titulo: 'Partición y probabilidad total',
        html: `<p>Una <strong>partición</strong> del espacio muestral es un grupo de eventos ${M('A₁, A₂, …, Aₙ')} que son mutuamente excluyentes y cubren todo ${M('S')}. Dicho de otra forma, siempre ocurre exactamente uno de ellos. Suelen ser las posibles <strong>causas</strong> (tres máquinas, dos urnas, persona sana o enferma).</p>
<p>Si B es un evento cualquiera (el <strong>efecto</strong> observado, por ejemplo "la pieza es defectuosa"), la <strong>probabilidad total</strong> de B es:</p>
<p>${M('P(B) = P(A₁) · P(B | A₁) + P(A₂) · P(B | A₂) + … + P(Aₙ) · P(B | Aₙ)')}</p>
<p>Es un promedio ponderado: B puede ocurrir por cada causa, y se suma el aporte de cada una (probabilidad de la causa por probabilidad del efecto dada esa causa).</p>`
      },
      {
        titulo: 'Diagrama de árbol de causas y efectos',
        html: `<p>El árbol es la mejor forma de no perderse. Primera etapa: las causas ${M('A₁, A₂, …')} con sus probabilidades. Segunda etapa: desde cada causa, el efecto B (o no B) con probabilidad condicional.</p>
<ul>
<li>Cada <strong>camino completo</strong> tiene probabilidad igual al producto de sus ramas: ${M('P(Aᵢ ∩ B) = P(Aᵢ) · P(B | Aᵢ)')}.</li>
<li>Para la probabilidad total de B, <strong>suma</strong> los caminos que terminan en B.</li>
<li>Las ramas que salen de un mismo nodo suman 1.</li>
</ul>
<p>Tip: dibuja siempre el árbol, aunque el problema parezca sencillo. Reduce los errores de transcripción de datos.</p>`
      },
      {
        titulo: 'El teorema de Bayes',
        html: `<p>La probabilidad total va de las causas al efecto. El teorema de Bayes hace el camino inverso: <strong>observado el efecto B, ¿qué tan probable es cada causa?</strong></p>
<p>${M('P(Aᵢ | B) = P(Aᵢ) · P(B | Aᵢ)/(P(A₁) · P(B | A₁) + … + P(Aₙ) · P(B | Aₙ))')}</p>
<p>Su deducción es corta: por definición ${M('P(Aᵢ | B) = P(Aᵢ ∩ B)/P(B)')}. En el numerador aplicas la regla del producto, ${M('P(Aᵢ ∩ B) = P(Aᵢ) · P(B | Aᵢ)')}, y en el denominador la probabilidad total.</p>
<p>En palabras: <em>probabilidad de la causa y el efecto, entre la probabilidad total del efecto</em>. En el árbol: el camino que te interesa entre la suma de todos los caminos que terminan en B.</p>`
      },
      {
        titulo: 'Probabilidades a priori y a posteriori',
        html: `<ul>
<li><strong>A priori:</strong> ${M('P(Aᵢ)')}, lo que creías antes de observar el efecto (por ejemplo, 1 % de la población tiene la enfermedad).</li>
<li><strong>Verosimilitud:</strong> ${M('P(B | Aᵢ)')}, qué tan probable es el efecto bajo cada causa (por ejemplo, la sensibilidad de una prueba).</li>
<li><strong>A posteriori:</strong> ${M('P(Aᵢ | B)')}, lo que crees después de observar el efecto.</li>
</ul>
<p>Bayes es una regla para <strong>actualizar creencias</strong> con evidencia. Las probabilidades a posteriori de todas las causas, para un mismo B, suman exactamente 1; úsalo como comprobación.</p>
<p>Regla práctica de procedimiento: (1) nombra las causas y sus probabilidades, (2) escribe las verosimilitudes, (3) calcula cada camino ${M('P(Aᵢ) · P(B | Aᵢ)')}, (4) súmalos para obtener ${M('P(B)')}, (5) divide el camino que buscas entre ese total.</p>`
      },
      {
        titulo: 'Pruebas diagnósticas y el error de la tasa base',
        html: `<p>Una prueba médica tiene dos números clave:</p>
<ul>
<li><strong>Sensibilidad:</strong> ${M('P(+ | enfermo)')}, el porcentaje de enfermos que dan positivo.</li>
<li><strong>Falsos positivos:</strong> ${M('P(+ | sano)')}, el porcentaje de sanos que dan positivo (es 1 menos la especificidad).</li>
</ul>
<p>Lo que le importa al paciente es ${M('P(enfermo | +)')}, el <strong>valor predictivo positivo</strong>, y se calcula con Bayes. Ejemplo: enfermedad con prevalencia 1 %, sensibilidad 95 % y falsos positivos 10 %:</p>
<p>${M('P(enfermo | +) = 0.01 · 0.95/(0.01 · 0.95 + 0.99 · 0.10) = 0.0095/0.1085 ≈ 0.0876')}</p>
<p>¡Solo cerca de 8.8 %! Aunque la prueba "acierta" mucho, la enfermedad es tan rara que la mayoría de los positivos son falsos. Ignorar la prevalencia (la probabilidad a priori) se llama <strong>error de la tasa base</strong>.</p>`
      },
      {
        titulo: 'Actualización sucesiva y casos especiales',
        html: `<p>El resultado a posteriori puede usarse como nueva probabilidad a priori cuando llega más evidencia. Si repites una prueba (independiente) y vuelve a dar positivo, usa ${M('0.0876')} como prevalencia nueva:</p>
<p>${M('P(enfermo | dos +) = 0.0876 · 0.95/(0.0876 · 0.95 + 0.9124 · 0.10) ≈ 0.477')}</p>
<p>La evidencia se acumula: de 1 % a 8.8 % y luego a 47.7 %.</p>
<p><strong>Casos especiales:</strong></p>
<ul>
<li>Con dos causas (enfermo o sano), la fórmula queda ${M('P(A | B) = P(A) · P(B | A)/(P(A) · P(B | A) + P(Aᶜ) · P(B | Aᶜ))')}.</li>
<li>Si todas las causas son igual de probables, las probabilidades a posteriori son proporcionales a las verosimilitudes ${M('P(B | Aᵢ)')}.</li>
<li>Si ${M('P(B | Aᵢ) = 0')} para una causa, esa causa queda descartada.</li>
</ul>
<p>Prueba la calculadora de Bayes con distintas prevalencias para ver cómo cambia el valor predictivo.</p>`
      }
    ],
    formulas: [
      { label: 'Probabilidad total', html: 'P(B) = Σ P(Aₖ) · P(B | Aₖ)' },
      { label: 'Teorema de Bayes', html: 'P(Aᵢ | B) = P(Aᵢ) · P(B | Aᵢ)/P(B)' },
      { label: 'Bayes desarrollado', html: 'P(Aᵢ | B) = P(Aᵢ) · P(B | Aᵢ)/Σ P(Aₖ) · P(B | Aₖ)' },
      { label: 'Camino del árbol', html: 'P(Aᵢ ∩ B) = P(Aᵢ) · P(B | Aᵢ)' },
      { label: 'Dos causas (A y Aᶜ)', html: 'P(A | B) = P(A) · P(B | A)/(P(A) · P(B | A) + P(Aᶜ) · P(B | Aᶜ))' },
      { label: 'Comprobación', html: 'Σ P(Aᵢ | B) = 1' }
    ],
    ejemplos: [
      {
        titulo: 'Dos máquinas en una fábrica',
        enunciado: `En una fábrica, la máquina A produce 60 % de las piezas con 2 % de defectuosas, y la máquina B produce el 40 % restante con 5 % de defectuosas. Se escoge una pieza al azar y resulta defectuosa. ¿Cuál es la probabilidad de que provenga de la máquina A? ¿Y de la B?`,
        pasos: [
          `Causas: ${M('P(A) = 0.6')} y ${M('P(B) = 0.4')}. Efecto D (defectuosa): ${M('P(D | A) = 0.02')} y ${M('P(D | B) = 0.05')}.`,
          `Caminos: ${M('P(A ∩ D) = 0.6 · 0.02 = 0.012')} y ${M('P(B ∩ D) = 0.4 · 0.05 = 0.020')}.`,
          `Probabilidad total: ${M('P(D) = 0.012 + 0.020 = 0.032')}.`,
          `Bayes: ${M('P(A | D) = 0.012/0.032 = 3/8 = 0.375')} y ${M('P(B | D) = 0.020/0.032 = 5/8 = 0.625')}. Suman 1.`
        ],
        respuesta: `${M('P(A | D) = 3/8 = 37.5%')} y ${M('P(B | D) = 5/8 = 62.5%')}.`
      },
      {
        titulo: 'Filtro de correo no deseado',
        enunciado: `El 30 % de los correos que recibe una empresa son spam. El filtro marca como spam el 80 % de los correos spam y también el 5 % de los correos legítimos. Si un correo fue marcado como spam, ¿cuál es la probabilidad de que realmente lo sea?`,
        pasos: [
          `Sea S "es spam" y M "fue marcado". ${M('P(S) = 0.3')}, ${M('P(Sᶜ) = 0.7')}, ${M('P(M | S) = 0.8')} y ${M('P(M | Sᶜ) = 0.05')}.`,
          `Camino spam marcado: ${M('0.3 · 0.8 = 0.24')}. Camino legítimo marcado: ${M('0.7 · 0.05 = 0.035')}.`,
          `${M('P(M) = 0.24 + 0.035 = 0.275')}.`,
          `${M('P(S | M) = 0.24/0.275 = 48/55 ≈ 0.8727')}.`
        ],
        respuesta: `${M('P(S | M) ≈ 0.873')}, es decir, 87.3 %.`
      },
      {
        titulo: 'Tres cajas con canicas',
        enunciado: `Caja 1: 4 azules, 3 verdes y 1 blanca. Caja 2: 1 azul, 4 verdes y 2 blancas. Caja 3: 2 azules, 2 verdes y 3 blancas. Se elige una caja al azar (cada una con probabilidad 1/3) y se saca una canica, que resulta azul. ¿Cuál es la probabilidad de que venga de la caja 1?`,
        pasos: [
          `Totales de canicas: caja 1 tiene 8, caja 2 tiene 7 y caja 3 tiene 7.`,
          `Verosimilitudes: ${M('P(azul | C₁) = 4/8 = 1/2')}, ${M('P(azul | C₂) = 1/7')} y ${M('P(azul | C₃) = 2/7')}.`,
          `Probabilidad total: ${M('P(azul) = 1/3 · 1/2 + 1/3 · 1/7 + 1/3 · 2/7 = 1/3 · 13/14 = 13/42')}.`,
          `Bayes: ${M('P(C₁ | azul) = (1/3 · 1/2)/(13/42) = (1/6)/(13/42) = 7/13')}.`
        ],
        respuesta: `${M('P(C₁ | azul) = 7/13 ≈ 0.538')}`
      },
      {
        titulo: 'Prueba médica: el error de la tasa base',
        enunciado: `Una enfermedad afecta al 1 % de una población. Una prueba da positivo en el 95 % de los enfermos y en el 10 % de los sanos. (a) Si una persona da positivo, ¿cuál es la probabilidad de que esté enferma? (b) Si da negativo, ¿cuál es la probabilidad de que esté enferma?`,
        pasos: [
          `${M('P(E) = 0.01')}, ${M('P(Eᶜ) = 0.99')}, ${M('P(+ | E) = 0.95')} y ${M('P(+ | Eᶜ) = 0.10')}.`,
          `(a) Caminos: enfermo y positivo ${M('0.01 · 0.95 = 0.0095')}; sano y positivo ${M('0.99 · 0.10 = 0.099')}. ${M('P(+) = 0.1085')}.`,
          `${M('P(E | +) = 0.0095/0.1085 ≈ 0.0876')}: apenas 8.76 %.`,
          `(b) Enfermo y negativo ${M('0.01 · 0.05 = 0.0005')}; sano y negativo ${M('0.99 · 0.90 = 0.891')}. ${M('P(−) = 0.8915')}. ${M('P(E | −) = 0.0005/0.8915 ≈ 0.00056')}.`
        ],
        respuesta: `(a) ${M('≈ 0.0876')} (8.76 %); (b) ${M('≈ 0.00056')} (0.056 %).`
      },
      {
        titulo: 'Segunda prueba positiva',
        enunciado: `Con la misma enfermedad y la misma prueba del ejemplo anterior (prevalencia 1 %, sensibilidad 95 %, falsos positivos 10 %), la persona se repite la prueba y vuelve a dar positivo. Suponiendo que las pruebas son independientes dado el estado de salud, ¿cuál es ahora la probabilidad de que esté enferma?`,
        pasos: [
          `Después del primer positivo, la probabilidad de estar enferma pasó a ${M('0.0876')}. Úsala como nueva probabilidad a priori.`,
          `Camino enfermo y segundo positivo: ${M('0.0876 · 0.95 = 0.0832')}.`,
          `Camino sano y segundo positivo: ${M('(1 − 0.0876) · 0.10 = 0.9124 · 0.10 = 0.0912')}.`,
          `${M('P(E | dos +) = 0.0832/(0.0832 + 0.0912) = 0.0832/0.1744 ≈ 0.477')}.`
        ],
        respuesta: `${M('≈ 0.477')}: con dos positivos la probabilidad sube de 8.8 % a casi 48 %.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Una tienda recibe pantalones de dos proveedores: el proveedor 1 envía el 40 % con 50 % de pantalones con falla y el proveedor 2 envía el 60 % con 25 % con falla. Si un pantalón tiene falla, ¿cuál es la probabilidad de que sea del proveedor 1?`,
        pasos: [
          `Caminos: ${M('0.4 · 0.50 = 0.20')} y ${M('0.6 · 0.25 = 0.15')}.`,
          `${M('P(falla) = 0.20 + 0.15 = 0.35')}.`,
          `${M('P(prov. 1 | falla) = 0.20/0.35 = 4/7 ≈ 0.571')}.`
        ],
        respuesta: `${M('P = 4/7 ≈ 0.571')}`
      },
      {
        nivel: 'facil',
        enunciado: `Un café recibe granos de tres proveedores: el 50 % del proveedor A con 2 % de granos defectuosos, el 30 % del B con 3 % y el 20 % del C con 5 %. Si un grano es defectuoso, ¿cuál es la probabilidad de que sea del proveedor C?`,
        pasos: [
          `Caminos: A ${M('0.5 · 0.02 = 0.010')}; B ${M('0.3 · 0.03 = 0.009')}; C ${M('0.2 · 0.05 = 0.010')}.`,
          `${M('P(def) = 0.010 + 0.009 + 0.010 = 0.029')}.`,
          `${M('P(C | def) = 0.010/0.029 ≈ 0.3448')}.`
        ],
        respuesta: `${M('P ≈ 0.345')}`
      },
      {
        nivel: 'facil',
        enunciado: `Hay dos urnas. La urna 1 tiene 3 bolas rojas y 1 azul. La urna 2 tiene 1 roja y 3 azules. Se escoge una urna al azar y se saca una bola. Calcula la probabilidad de que sea roja.`,
        pasos: [
          `${M('P(U₁) = P(U₂) = 1/2')}.`,
          `${M('P(roja | U₁) = 3/4')} y ${M('P(roja | U₂) = 1/4')}.`,
          `Probabilidad total: ${M('P(roja) = 1/2 · 3/4 + 1/2 · 1/4 = 3/8 + 1/8 = 1/2')}.`
        ],
        respuesta: `${M('P(roja) = 1/2')}`
      },
      {
        nivel: 'facil',
        enunciado: `El 10 % de las personas de una zona tiene influenza. Una prueba rápida da positivo en el 90 % de los enfermos y en el 5 % de los sanos. Si una persona da positivo, ¿cuál es la probabilidad de que tenga influenza?`,
        pasos: [
          `Enfermo y positivo: ${M('0.10 · 0.90 = 0.09')}. Sano y positivo: ${M('0.90 · 0.05 = 0.045')}.`,
          `${M('P(+) = 0.09 + 0.045 = 0.135')}.`,
          `${M('P(enfermo | +) = 0.09/0.135 = 2/3 ≈ 0.667')}.`
        ],
        respuesta: `${M('P = 2/3 ≈ 0.667')}`
      },
      {
        nivel: 'intermedio',
        enunciado: `En un edificio, la probabilidad de que haya un incendio en un año es 1 %. La alarma suena con probabilidad 0.98 si hay incendio y con probabilidad 0.03 si no lo hay. Si la alarma suena, ¿cuál es la probabilidad de que haya un incendio? Redondea a 4 decimales.`,
        pasos: [
          `Incendio y alarma: ${M('0.01 · 0.98 = 0.0098')}. Sin incendio y alarma: ${M('0.99 · 0.03 = 0.0297')}.`,
          `${M('P(alarma) = 0.0098 + 0.0297 = 0.0395')}.`,
          `${M('P(incendio | alarma) = 0.0098/0.0395 ≈ 0.2481')}.`
        ],
        respuesta: `${M('P ≈ 0.2481')}: menos de 25 %, a pesar de la alta sensibilidad.`
      },
      {
        nivel: 'intermedio',
        enunciado: `En un centro escolar, el 30 % de los estudiantes asiste a clases de refuerzo; de estos aprueba el 90 %. Entre los que no asisten aprueba el 60 %. Si un estudiante aprobó, ¿cuál es la probabilidad de que haya asistido a refuerzo?`,
        pasos: [
          `Asiste y aprueba: ${M('0.30 · 0.90 = 0.27')}. No asiste y aprueba: ${M('0.70 · 0.60 = 0.42')}.`,
          `${M('P(aprueba) = 0.27 + 0.42 = 0.69')}.`,
          `${M('P(refuerzo | aprueba) = 0.27/0.69 = 9/23 ≈ 0.3913')}.`
        ],
        respuesta: `${M('P = 9/23 ≈ 0.391')}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Tres máquinas A, B y C producen el 20 %, 30 % y 50 % de las piezas, con 10 %, 20 % y 40 % de piezas defectuosas respectivamente. Si una pieza es defectuosa, ¿cuál es la probabilidad de que venga de la máquina C?`,
        pasos: [
          `Caminos: A ${M('0.2 · 0.1 = 0.02')}; B ${M('0.3 · 0.2 = 0.06')}; C ${M('0.5 · 0.4 = 0.20')}.`,
          `${M('P(def) = 0.02 + 0.06 + 0.20 = 0.28')}.`,
          `${M('P(C | def) = 0.20/0.28 = 5/7 ≈ 0.714')}.`
        ],
        respuesta: `${M('P = 5/7 ≈ 0.714')}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Un sistema envía una señal binaria: envía 1 con probabilidad 0.4 y 0 con probabilidad 0.6. Por ruido, cada símbolo se recibe mal con probabilidad 0.1. Si se recibe un 1, ¿cuál es la probabilidad de que se haya enviado un 1?`,
        pasos: [
          `Enviado 1 y recibido 1: ${M('0.4 · 0.9 = 0.36')}.`,
          `Enviado 0 y recibido 1 (error): ${M('0.6 · 0.1 = 0.06')}.`,
          `${M('P(recibir 1) = 0.36 + 0.06 = 0.42')}.`,
          `${M('P(enviado 1 | recibido 1) = 0.36/0.42 = 6/7 ≈ 0.857')}.`
        ],
        respuesta: `${M('P = 6/7 ≈ 0.857')}`
      },
      {
        nivel: 'dificil',
        enunciado: `Una enfermedad afecta al 4 % de la población. Una prueba da positivo en el 95 % de los enfermos y en el 10 % de los sanos. Una persona se hace la prueba dos veces (independientes dado su estado de salud) y da positivo las dos veces. ¿Cuál es la probabilidad de que esté enferma? Redondea a 4 decimales.`,
        pasos: [
          `Después del primer positivo: enfermo y + ${M('0.04 · 0.95 = 0.038')}; sano y + ${M('0.96 · 0.10 = 0.096')}. ${M('P(E | +) = 0.038/0.134 ≈ 0.2836')}.`,
          `Segunda prueba, nueva a priori ${M('0.2836')}: enfermo y + ${M('0.2836 · 0.95 = 0.26942')}; sano y + ${M('0.7164 · 0.10 = 0.07164')}.`,
          `${M('P(E | ++) = 0.26942/(0.26942 + 0.07164) = 0.26942/0.34106 ≈ 0.7899')}.`,
          `Comprobación en un solo paso: ${M('0.04 · 0.95² = 0.0361')} y ${M('0.96 · 0.10² = 0.0096')}; ${M('0.0361/0.0457 ≈ 0.7899')}.`
        ],
        respuesta: `${M('P ≈ 0.7899')}`
      },
      {
        nivel: 'dificil',
        enunciado: `Tres hipótesis ${M('A₁, A₂, A₃')} tienen probabilidades a priori 0.2, 0.3 y 0.5. Un evento B tiene probabilidades 0.6, 0.3 y 0.1 bajo cada hipótesis. Calcula las tres probabilidades a posteriori y verifica que suman 1.`,
        pasos: [
          `Caminos: ${M('0.2 · 0.6 = 0.12')}, ${M('0.3 · 0.3 = 0.09')} y ${M('0.5 · 0.1 = 0.05')}.`,
          `${M('P(B) = 0.12 + 0.09 + 0.05 = 0.26')}.`,
          `${M('P(A₁ | B) = 0.12/0.26 ≈ 0.4615')}; ${M('P(A₂ | B) = 0.09/0.26 ≈ 0.3462')}; ${M('P(A₃ | B) = 0.05/0.26 ≈ 0.1923')}.`,
          `Suma: ${M('0.4615 + 0.3462 + 0.1923 = 1')}. La hipótesis menos probable a priori (A₁) pasó a ser la más probable.`
        ],
        respuesta: `${M('P(A₁ | B) ≈ 0.462')}, ${M('P(A₂ | B) ≈ 0.346')}, ${M('P(A₃ | B) ≈ 0.192')}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Una bolsa tiene dos monedas: una justa y otra con dos caras. Se escoge una al azar y se lanza 3 veces, obteniendo 3 caras. ¿Cuál es la probabilidad de que la moneda sea la de dos caras?`,
        pasos: [
          `${M('P(justa) = P(trucada) = 1/2')}.`,
          `Verosimilitudes de 3 caras: justa ${M('(1/2)³ = 1/8')}; trucada ${M('1')}.`,
          `Caminos: ${M('1/2 · 1/8 = 1/16')} y ${M('1/2 · 1 = 1/2')}. Total: ${M('1/16 + 8/16 = 9/16')}.`,
          `${M('P(trucada | 3 caras) = (1/2)/(9/16) = 8/9 ≈ 0.889')}.`
        ],
        respuesta: `${M('P = 8/9 ≈ 0.889')}`
      }
    ],
    teoricas: [
      {
        q: `¿Qué diferencia hay entre la probabilidad total y el teorema de Bayes?`,
        a: `La probabilidad total va de las causas al efecto: calcula ${M('P(B)')} sumando los aportes de cada causa. Bayes va del efecto a las causas: dado que B ocurrió, calcula ${M('P(Aᵢ | B)')}. Bayes usa la probabilidad total en su denominador.`
      },
      {
        q: `¿Qué condiciones debe cumplir una partición ${M('A₁, …, Aₙ')} para usar Bayes?`,
        a: `Los eventos deben ser mutuamente excluyentes (no se traslapan) y exhaustivos (su unión es todo el espacio muestral), de modo que ocurra exactamente uno. Así las probabilidades ${M('P(Aᵢ)')} suman 1.`
      },
      {
        q: `Explica con tus palabras qué son las probabilidades a priori y a posteriori.`,
        a: `La a priori es lo que sabes de una causa antes de ver el efecto (como la proporción de enfermos en la población). La a posteriori es esa misma probabilidad corregida después de observar el efecto (como un resultado positivo). Bayes es la regla para pasar de una a otra.`
      },
      {
        q: `Una prueba detecta al 99 % de los enfermos. ¿Significa que si da positivo hay 99 % de probabilidad de estar enfermo?`,
        a: `No. El 99 % es ${M('P(+ | enfermo)')}, no ${M('P(enfermo | +)')}. Esta última depende también de la prevalencia y de los falsos positivos. Con una enfermedad muy rara, la mayoría de los positivos puede ser de personas sanas.`
      },
      {
        q: `¿Por qué la suma de las probabilidades a posteriori ${M('P(Aᵢ | B)')} siempre es 1?`,
        a: `Porque todos tienen el mismo denominador ${M('P(B)')} y sus numeradores ${M('P(Aᵢ) · P(B | Aᵢ)')} suman exactamente ${M('P(B)')} por la probabilidad total. Dado B, alguna de las causas debe haber ocurrido.`
      },
      {
        q: `Si una causa tiene ${M('P(B | Aᵢ) = 0')}, ¿qué pasa con su probabilidad a posteriori?`,
        a: `Es 0. Si la causa hace imposible el efecto, observar el efecto la descarta por completo, sin importar cuán probable fuera a priori.`
      },
      {
        q: `¿Cómo ayuda el diagrama de árbol a aplicar Bayes?`,
        a: `En el árbol, cada camino que termina en B tiene probabilidad ${M('P(Aᵢ) · P(B | Aᵢ)')}. La probabilidad total de B es la suma de esos caminos, y la probabilidad a posteriori de una causa es su camino dividido entre esa suma.`
      },
      {
        q: `¿Qué efecto tiene repetir una prueba independiente con resultado positivo?`,
        a: `La probabilidad a posteriori después del primer positivo pasa a ser la nueva a priori, y el segundo positivo la aumenta aún más. La evidencia independiente se acumula, por eso las pruebas de confirmación son tan útiles cuando la enfermedad es rara.`
      }
    ],
    errores: [
      `<strong>Confundir ${M('P(B | A)')} con ${M('P(A | B)')}.</strong> Lo que da el problema (sensibilidad, porcentaje de defectos por máquina) es ${M('P(efecto | causa)')}, mientras que lo que se pide con Bayes es ${M('P(causa | efecto)')}. Escribe cuál es cada una antes de calcular.`,
      `<strong>Olvidar las demás causas en el denominador.</strong> El denominador es la probabilidad total de B, que incluye TODOS los caminos que terminan en B, no solo el camino de la causa que buscas.`,
      `<strong>Ignorar la probabilidad a priori (tasa base).</strong> Una prueba con 95 % de sensibilidad no implica 95 % de certeza. Si la enfermedad es rara, la prevalencia pesa mucho en el resultado.`,
      `<strong>Usar probabilidades que no forman una partición.</strong> Si las causas no suman 1 o se traslapan, la probabilidad total y Bayes dan resultados erróneos. Comprueba que ${M('ΣP(Aᵢ) = 1')} antes de empezar.`
    ],
    aplicacion: {
      titulo: 'Prueba rápida de dengue en una unidad de salud',
      html: `<p>Una unidad de salud de Santa Ana usa una prueba rápida de dengue que da positivo en el 90 % de los enfermos y en el 5 % de los sanos. Durante la época lluviosa, el 12 % de los pacientes con fiebre que llegan tienen dengue; en la época seca, solo el 2 %. ¿Cuál es la probabilidad de tener dengue si la prueba da positivo en cada época?</p>
<p><strong>Época lluviosa.</strong> Enfermo y positivo: ${M('0.12 · 0.90 = 0.108')}. Sano y positivo: ${M('0.88 · 0.05 = 0.044')}. ${M('P(+) = 0.152')}. Entonces ${M('P(dengue | +) = 0.108/0.152 ≈ 0.7105')}.</p>
<p><strong>Época seca.</strong> Enfermo y positivo: ${M('0.02 · 0.90 = 0.018')}. Sano y positivo: ${M('0.98 · 0.05 = 0.049')}. ${M('P(+) = 0.067')}. Entonces ${M('P(dengue | +) = 0.018/0.067 ≈ 0.2687')}.</p>
<p>La misma prueba, con la misma sensibilidad, da un positivo que en la época lluviosa es casi 71 % confiable y en la época seca apenas 27 %. Por eso el personal de salud interpreta el resultado de acuerdo con la prevalencia del momento y, en la época seca, pide una prueba de confirmación antes de actuar.</p>`
    },
    calc: 'bayes',
    examen: [
      {
        tipo: 'num',
        q: `Tres máquinas producen el 50 %, 30 % y 20 % de las piezas, con probabilidades de defecto 0.1, 0.4 y 0.5 respectivamente. ¿Cuál es la probabilidad de que una pieza escogida al azar sea defectuosa?`,
        r: 0.27, tol: 0.01,
        pasos: [
          `Camino 1: ${M('0.5 · 0.1 = 0.05')}. Camino 2: ${M('0.3 · 0.4 = 0.12')}. Camino 3: ${M('0.2 · 0.5 = 0.10')}.`,
          `Probabilidad total: ${M('P(D) = 0.05 + 0.12 + 0.10')}.`,
          `${M('P(D) = 0.27')}.`
        ]
      },
      {
        tipo: 'num',
        q: `Tres máquinas producen el 50 %, 30 % y 20 % de las piezas, con probabilidades de defecto 0.1, 0.4 y 0.5 respectivamente. Si una pieza es defectuosa, ¿cuál es la probabilidad de que venga de la máquina 3? Redondea a 3 decimales.`,
        r: 0.10 / 0.27, tol: 0.01,
        pasos: [
          `Camino de la máquina 3: ${M('0.2 · 0.5 = 0.10')}.`,
          `Probabilidad total de defecto: ${M('P(D) = 0.27')}.`,
          `${M('P(M₃ | D) = 0.10/0.27 ≈ 0.370')}.`
        ]
      },
      {
        tipo: 'opt',
        q: `Una prueba detecta al 99 % de los enfermos. Si una persona da positivo, ¿qué se puede concluir?`,
        opciones: ['Está enferma con probabilidad 99 %', 'Está sana con probabilidad 1 %', 'La probabilidad depende de la prevalencia y de los falsos positivos', 'Está enferma con probabilidad 50 %'],
        correcta: 2,
        pasos: [
          `El 99 % es ${M('P(+ | enfermo)')}, no ${M('P(enfermo | +)')}.`,
          `Para obtener ${M('P(enfermo | +)')} hay que usar Bayes, con la prevalencia y la tasa de falsos positivos.`,
          `Por eso la respuesta correcta es que depende de esos datos.`
        ]
      },
      {
        tipo: 'num',
        q: `Una enfermedad afecta al 5 % de la población. La prueba da positivo en el 98 % de los enfermos y en el 4 % de los sanos. Si una persona da positivo, ¿cuál es la probabilidad de que esté enferma? Redondea a 3 decimales.`,
        r: 0.049 / 0.087, tol: 0.01,
        pasos: [
          `Enfermo y positivo: ${M('0.05 · 0.98 = 0.049')}.`,
          `Sano y positivo: ${M('0.95 · 0.04 = 0.038')}. Total: ${M('0.049 + 0.038 = 0.087')}.`,
          `${M('P(enfermo | +) = 0.049/0.087 ≈ 0.563')}.`
        ]
      },
      {
        tipo: 'par',
        q: `El 8 % de los pacientes tiene cierta infección. Una prueba da positivo en el 75 % de los infectados y en el 10 % de los no infectados. Escribe el par ${M('(P(+), P(infectado | +))')} con 3 decimales.`,
        r: [0.152, 0.06 / 0.152], tol: 0.01,
        pasos: [
          `Infectado y positivo: ${M('0.08 · 0.75 = 0.06')}.`,
          `No infectado y positivo: ${M('0.92 · 0.10 = 0.092')}. ${M('P(+) = 0.06 + 0.092 = 0.152')}.`,
          `${M('P(infectado | +) = 0.06/0.152 ≈ 0.395')}.`
        ]
      },
      {
        tipo: 'num',
        q: `Dos urnas: la urna 1 tiene 3 bolas rojas y 2 negras; la urna 2 tiene 1 roja y 4 negras. Se escoge la urna 1 con probabilidad 0.4 y la urna 2 con probabilidad 0.6. ¿Cuál es la probabilidad de sacar una bola roja?`,
        r: 0.36, tol: 0.01,
        pasos: [
          `${M('P(roja | U₁) = 3/5 = 0.6')} y ${M('P(roja | U₂) = 1/5 = 0.2')}.`,
          `${M('P(roja) = 0.4 · 0.6 + 0.6 · 0.2')}.`,
          `${M('= 0.24 + 0.12 = 0.36')}.`
        ]
      },
      {
        tipo: 'opt',
        q: `En el teorema de Bayes, a ${M('P(Aᵢ)')} (la probabilidad de la causa antes de observar el efecto) se le llama:`,
        opciones: ['Probabilidad a priori', 'Probabilidad a posteriori', 'Probabilidad total', 'Probabilidad conjunta'],
        correcta: 0,
        pasos: [
          `La probabilidad antes de observar el efecto es la probabilidad a priori.`,
          `La a posteriori es ${M('P(Aᵢ | B)')}, calculada después de observar B.`,
          `La probabilidad total es ${M('P(B)')} y la conjunta es ${M('P(Aᵢ ∩ B)')}.`
        ]
      },
      {
        tipo: 'num',
        q: `Dos urnas: la urna 1 tiene 3 bolas rojas y 2 negras; la urna 2 tiene 1 roja y 4 negras. Se escoge la urna 1 con probabilidad 0.4 y la urna 2 con probabilidad 0.6. Si la bola extraída es roja, ¿cuál es la probabilidad de que venga de la urna 1? Redondea a 3 decimales.`,
        r: 0.24 / 0.36, tol: 0.01,
        pasos: [
          `Camino urna 1 y roja: ${M('0.4 · 0.6 = 0.24')}.`,
          `Probabilidad total de roja: ${M('0.36')}.`,
          `${M('P(U₁ | roja) = 0.24/0.36 = 2/3 ≈ 0.667')}.`
        ]
      },
      {
        tipo: 'lista',
        q: `La máquina A produce el 60 % de las piezas con 2 % de defectuosas y la máquina B el 40 % con 5 %. Si una pieza es defectuosa, escribe en decimales y separadas por comas ${M('P(A | defectuosa)')} y ${M('P(B | defectuosa)')}.`,
        r: [0.375, 0.625], tol: 0.01,
        pasos: [
          `Caminos: ${M('0.6 · 0.02 = 0.012')} y ${M('0.4 · 0.05 = 0.020')}.`,
          `${M('P(def) = 0.032')}.`,
          `${M('P(A | def) = 0.012/0.032 = 0.375')} y ${M('P(B | def) = 0.020/0.032 = 0.625')}.`
        ]
      },
      {
        tipo: 'opt',
        q: `Para un mismo evento B observado y una partición ${M('A₁, A₂, A₃')}, ¿cuánto suman ${M('P(A₁ | B) + P(A₂ | B) + P(A₃ | B)')}?`,
        opciones: ['0', 'Depende de las probabilidades a priori', '0.5', '1'],
        correcta: 3,
        pasos: [
          `Los tres numeradores ${M('P(Aᵢ) · P(B | Aᵢ)')} suman ${M('P(B)')} por la probabilidad total.`,
          `Cada probabilidad a posteriori se divide entre ${M('P(B)')}, así que su suma es ${M('P(B)/P(B) = 1')}.`,
          `Dado B, alguna de las causas debe haber ocurrido; por eso el total siempre es 1.`
        ]
      }
    ]
  };
})();

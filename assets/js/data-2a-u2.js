/* data-2a-u2.js — Unidad 2: Geometría analítica de la línea recta */
(function () {
  var T = (window.CURSO_2A = window.CURSO_2A || { temas: {} }).temas;

  /* {{ ... }} se convierte en <span class="math">...</span> al final del archivo */

  /* ===================================================================== */
  T['1.4'] = {
    id: '1.4',
    unidad: 2,
    titulo: 'Pendiente y ecuación de la línea recta',
    resumen: 'Mide qué tan inclinada es una recta y aprende a escribir su ecuación en forma punto-pendiente, pendiente-intercepto y general.',
    objetivos: [
      'Calcular la pendiente de una recta a partir de dos puntos e interpretar su signo (positiva, negativa, cero o indefinida).',
      'Escribir la ecuación de una recta usando la forma punto-pendiente y la forma por dos puntos.',
      'Convertir una ecuación entre las formas pendiente-intercepto y general Ax + By + C = 0.',
      'Aplicar la pendiente como razón de cambio en situaciones reales.'
    ],
    teoria: [
      {
        titulo: 'Qué es la pendiente',
        html: `<p>La <strong>pendiente</strong> de una recta mide qué tan inclinada está. Es la misma idea de la inclinación de una calle: cuántos metros sube (o baja) por cada metro que avanzas en horizontal.</p>
<p>Se representa con la letra {{m}} y se define como <em>cambio vertical entre cambio horizontal</em>:</p>
<p>{{m = (y₂ − y₁)/(x₂ − x₁)}}</p>
<p>En palabras: <strong>m = subida entre avance</strong>. Tomas dos puntos cualesquiera {{P₁(x₁, y₁)}} y {{P₂(x₂, y₂)}} de la recta; no importa cuáles elijas, el resultado es el mismo porque la recta tiene siempre la misma inclinación.</p>`
      },
      {
        titulo: 'Signo de la pendiente: cuatro casos',
        html: `<p>Al recorrer la recta de izquierda a derecha, observa si sube, baja o se mantiene:</p>
<table>
<tr><th>Pendiente</th><th>Qué hace la recta</th><th>Ejemplo</th></tr>
<tr><td>{{m > 0}}</td><td>Sube (creciente)</td><td>{{y = 2x + 1}}</td></tr>
<tr><td>{{m < 0}}</td><td>Baja (decreciente)</td><td>{{y = −3x + 4}}</td></tr>
<tr><td>{{m = 0}}</td><td>Horizontal: no sube ni baja</td><td>{{y = 5}}</td></tr>
<tr><td>Indefinida</td><td>Vertical: el denominador {{x₂ − x₁}} es 0</td><td>{{x = 3}}</td></tr>
</table>
<p>Mientras mayor sea el valor absoluto de {{m}}, más empinada es la recta. Una recta con {{m = 5}} es mucho más empinada que una con {{m = 1/2}}.</p>`
      },
      {
        titulo: 'Ecuación punto-pendiente',
        html: `<p>Si conoces la pendiente {{m}} y un punto {{P₁(x₁, y₁)}} de la recta, cualquier otro punto {{(x, y)}} de ella cumple que la pendiente entre {{P₁}} y {{(x, y)}} vale {{m}}:</p>
<p>{{(y − y₁)/(x − x₁) = m}} &nbsp;⟹&nbsp; {{y − y₁ = m(x − x₁)}}</p>
<p><strong>Procedimiento:</strong></p>
<ol><li>Identifica {{m}} y el punto {{(x₁, y₁)}}.</li><li>Sustituye en {{y − y₁ = m(x − x₁)}} cuidando los signos (si {{x₁ = −2}}, queda {{x + 2}}).</li><li>Si te lo piden, despeja {{y}} o pasa todo a un lado.</li></ol>`
      },
      {
        titulo: 'Recta que pasa por dos puntos',
        html: `<p>Si te dan dos puntos {{P₁(x₁, y₁)}} y {{P₂(x₂, y₂)}}, primero calculas la pendiente y luego usas punto-pendiente con cualquiera de los dos puntos:</p>
<p>{{y − y₁ = [(y₂ − y₁)/(x₂ − x₁)](x − x₁)}}</p>
<p><strong>Tip de comprobación:</strong> al final sustituye el otro punto en tu ecuación; si la iguala, todo está bien.</p>`
      },
      {
        titulo: 'Forma pendiente-intercepto: y = mx + b',
        html: `<p>Al despejar {{y}} de la ecuación punto-pendiente obtienes la forma más cómoda para graficar:</p>
<p>{{y = mx + b}}</p>
<ul><li>{{m}} es la pendiente.</li><li>{{b}} es el <strong>intercepto con el eje y</strong>: la recta corta al eje vertical en el punto {{(0, b)}}.</li></ul>
<p><strong>Graficar con ella:</strong> marca {{(0, b)}}; desde ahí avanza 1 a la derecha y sube {{m}} unidades (o baja si {{m}} es negativa); une los puntos.</p>`
      },
      {
        titulo: 'Forma general: Ax + By + C = 0',
        html: `<p>Toda recta se puede escribir como {{Ax + By + C = 0}}, con {{A}} y {{B}} no ambos cero. Por convención se busca que {{A}}, {{B}}, {{C}} sean enteros y {{A}} positivo.</p>
<p>De la forma general se leen directamente:</p>
<p>{{m = −A/B}} &nbsp;&nbsp; y &nbsp;&nbsp; {{b = −C/B}} &nbsp; (si {{B ≠ 0}})</p>
<p><strong>De y = mx + b a general:</strong> multiplica por el denominador para quitar fracciones y pasa todos los términos al lado izquierdo. Ejemplo: {{y = (2/3)x − 1}} → {{3y = 2x − 3}} → {{2x − 3y − 3 = 0}}.</p>`
      },
      {
        titulo: 'Rectas horizontales y verticales',
        html: `<p><strong>Horizontal:</strong> todos sus puntos tienen la misma {{y}}. Ecuación {{y = k}}, pendiente {{0}}.</p>
<p><strong>Vertical:</strong> todos sus puntos tienen la misma {{x}}. Ecuación {{x = h}}, y su pendiente <em>no existe</em> (indefinida): no se puede dividir entre cero. Una recta vertical no se escribe como {{y = mx + b}}.</p>
<p>Al calcular {{m}} con dos puntos, si las {{x}} son iguales sabes de inmediato que la recta es vertical; si las {{y}} son iguales, es horizontal.</p>`
      },
      {
        titulo: 'La pendiente como razón de cambio',
        html: `<p>En problemas reales, la pendiente es la <strong>rapidez con que cambia una cantidad</strong> respecto a otra: dólares por hora, grados por minuto, metros de altura por metro recorrido. Si dos magnitudes se relacionan de forma lineal, su gráfica es una recta, la pendiente es la tasa de cambio y el intercepto {{b}} es el valor inicial (el costo fijo, la lectura de partida, etc.).</p>`
      }
    ],
    formulas: [
      { label: 'Pendiente', html: '{{m = (y₂ − y₁)/(x₂ − x₁)}}' },
      { label: 'Punto-pendiente', html: '{{y − y₁ = m(x − x₁)}}' },
      { label: 'Por dos puntos', html: '{{y − y₁ = [(y₂ − y₁)/(x₂ − x₁)](x − x₁)}}' },
      { label: 'Pendiente-intercepto', html: '{{y = mx + b}}' },
      { label: 'Forma general', html: '{{Ax + By + C = 0}}' },
      { label: 'Pendiente e intercepto desde la general', html: '{{m = −A/B,  b = −C/B}}' },
      { label: 'Horizontal y vertical', html: '{{y = k  (m = 0),  x = h  (m indefinida)}}' }
    ],
    ejemplos: [
      {
        titulo: 'Calcular una pendiente',
        enunciado: `Halla la pendiente de la recta que pasa por {{A(2, 3)}} y {{B(6, 11)}}.`,
        pasos: [
          `Identifica: {{x₁ = 2, y₁ = 3, x₂ = 6, y₂ = 11}}.`,
          `Aplica la fórmula: {{m = (11 − 3)/(6 − 2)}}.`,
          `Opera: {{m = 8/4 = 2}}. Como es positiva, la recta sube: por cada unidad a la derecha, sube 2.`
        ],
        respuesta: `{{m = 2}}`
      },
      {
        titulo: 'Punto-pendiente y paso a la forma general',
        enunciado: `Escribe la ecuación de la recta de pendiente {{−3}} que pasa por {{(−1, 4)}}. Exprésala en forma {{y = mx + b}} y general.`,
        pasos: [
          `Sustituye en {{y − y₁ = m(x − x₁)}}: {{y − 4 = −3(x − (−1))}}, es decir {{y − 4 = −3(x + 1)}}.`,
          `Distribuye: {{y − 4 = −3x − 3}}.`,
          `Despeja {{y}}: {{y = −3x + 1}} (pendiente −3, intercepto 1).`,
          `Pasa todo a la izquierda: {{3x + y − 1 = 0}}.`,
          `Comprueba con el punto: {{3(−1) + 4 − 1 = 0}} ✓.`
        ],
        respuesta: `{{y = −3x + 1}}, o en forma general {{3x + y − 1 = 0}}`
      },
      {
        titulo: 'Recta por dos puntos',
        enunciado: `Halla la ecuación de la recta que pasa por {{(1, −2)}} y {{(5, 6)}}.`,
        pasos: [
          `Pendiente: {{m = (6 − (−2))/(5 − 1) = 8/4 = 2}}.`,
          `Punto-pendiente con {{(1, −2)}}: {{y + 2 = 2(x − 1)}}.`,
          `Distribuye y despeja: {{y + 2 = 2x − 2}} ⟹ {{y = 2x − 4}}.`,
          `Forma general: {{2x − y − 4 = 0}}.`,
          `Verifica con el otro punto: {{2(5) − 6 − 4 = 0}} ✓.`
        ],
        respuesta: `{{y = 2x − 4}} (general: {{2x − y − 4 = 0}})`
      },
      {
        titulo: 'Rectas horizontal y vertical',
        enunciado: `Determina la pendiente y la ecuación de la recta que pasa por (a) {{(3, 5)}} y {{(3, −2)}}; (b) {{(−4, 2)}} y {{(7, 2)}}.`,
        pasos: [
          `(a) {{m = (−2 − 5)/(3 − 3) = −7/0}}: división entre cero, la pendiente es indefinida. Las dos {{x}} valen 3, así que la recta es vertical: {{x = 3}}.`,
          `(b) {{m = (2 − 2)/(7 − (−4)) = 0/11 = 0}}. Las dos {{y}} valen 2, así que la recta es horizontal: {{y = 2}}.`
        ],
        respuesta: `(a) pendiente indefinida, {{x = 3}}; (b) {{m = 0}}, {{y = 2}}`
      },
      {
        titulo: 'Contexto real: alquiler de bicicletas en Santa Ana',
        enunciado: `Una tienda cobra {{$7}} por alquilar una bicicleta 2 horas y {{$13}} por 5 horas. Si el costo {{C}} es lineal respecto al tiempo {{t}} (en horas), halla la ecuación y el costo de 8 horas.`,
        pasos: [
          `Puntos {{(t, C)}}: {{(2, 7)}} y {{(5, 13)}}.`,
          `Pendiente: {{m = (13 − 7)/(5 − 2) = 6/3 = 2}}. Significa {{$2}} por cada hora adicional.`,
          `Punto-pendiente: {{C − 7 = 2(t − 2)}} ⟹ {{C = 2t + 3}}. El intercepto {{3}} es un cargo fijo de {{$3}}.`,
          `Para {{t = 8}}: {{C = 2(8) + 3 = 19}}.`
        ],
        respuesta: `{{C = 2t + 3}}; 8 horas cuestan {{$19}}`
      },
      {
        titulo: 'De la forma general a pendiente e intercepto',
        enunciado: `Dada la recta {{4x − 6y + 9 = 0}}, halla su pendiente, su intercepto con el eje {{y}} y escríbela como {{y = mx + b}}.`,
        pasos: [
          `Identifica {{A = 4, B = −6, C = 9}}.`,
          `Pendiente: {{m = −A/B = −4/(−6) = 2/3}}.`,
          `Intercepto: {{b = −C/B = −9/(−6) = 3/2}}.`,
          `Comprobación despejando: {{6y = 4x + 9}} ⟹ {{y = (2/3)x + 3/2}} ✓.`
        ],
        respuesta: `{{m = 2/3}}, {{b = 3/2}}; {{y = (2/3)x + 3/2}}`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Halla la pendiente de la recta que pasa por {{(−2, 5)}} y {{(4, −1)}}.`,
        pasos: [`{{m = (−1 − 5)/(4 − (−2))}}.`, `{{m = −6/6 = −1}}. La recta baja una unidad por cada unidad que avanza.`],
        respuesta: `{{m = −1}}`
      },
      {
        nivel: 'facil',
        enunciado: `Halla la pendiente de la recta que pasa por {{(3, −4)}} y {{(−5, 0)}}.`,
        pasos: [`{{m = (0 − (−4))/(−5 − 3)}}.`, `{{m = 4/(−8) = −1/2}}.`],
        respuesta: `{{m = −1/2}}`
      },
      {
        nivel: 'facil',
        enunciado: `Escribe la ecuación de la recta de pendiente {{4}} que corta al eje {{y}} en {{(0, −3)}}.`,
        pasos: [`Como se da el intercepto, usa {{y = mx + b}} con {{m = 4}} y {{b = −3}}.`, `Queda {{y = 4x − 3}}; en forma general {{4x − y − 3 = 0}}.`],
        respuesta: `{{y = 4x − 3}}`
      },
      {
        nivel: 'facil',
        enunciado: `Halla la ecuación de la recta con pendiente {{1/2}} que pasa por {{(4, 1)}} y escríbela como {{y = mx + b}}.`,
        pasos: [`Punto-pendiente: {{y − 1 = (1/2)(x − 4)}}.`, `Distribuye: {{y − 1 = (1/2)x − 2}}.`, `Despeja: {{y = (1/2)x − 1}}.`],
        respuesta: `{{y = (1/2)x − 1}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla la ecuación general de la recta que pasa por {{(−3, 2)}} y {{(1, −6)}}.`,
        pasos: [`Pendiente: {{m = (−6 − 2)/(1 − (−3)) = −8/4 = −2}}.`, `Punto-pendiente con {{(−3, 2)}}: {{y − 2 = −2(x + 3)}}.`, `Distribuye: {{y − 2 = −2x − 6}} ⟹ {{y = −2x − 4}}.`, `Forma general: {{2x + y + 4 = 0}}. Verifica con {{(1, −6)}}: {{2 − 6 + 4 = 0}} ✓.`],
        respuesta: `{{2x + y + 4 = 0}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `De la recta {{5x + 2y − 10 = 0}} halla la pendiente y el intercepto con el eje {{y}}.`,
        pasos: [`{{A = 5, B = 2, C = −10}}.`, `{{m = −A/B = −5/2}}.`, `{{b = −C/B = 10/2 = 5}}.`, `Comprobación: {{2y = −5x + 10}} ⟹ {{y = −(5/2)x + 5}} ✓.`],
        respuesta: `{{m = −5/2}}, {{b = 5}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Determina la ecuación de (a) la recta que pasa por {{(2, −1)}} y {{(2, 7)}}; (b) la que pasa por {{(−3, 4)}} y {{(5, 4)}}.`,
        pasos: [`(a) Las dos {{x}} son iguales a 2: recta vertical, pendiente indefinida. Ecuación {{x = 2}}.`, `(b) Las dos {{y}} son iguales a 4: {{m = 0/8 = 0}}. Recta horizontal {{y = 4}}.`],
        respuesta: `(a) {{x = 2}}; (b) {{y = 4}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `¿Son colineales (están sobre una misma recta) los puntos {{A(1, 2)}}, {{B(3, 8)}} y {{C(6, 17)}}?`,
        pasos: [`{{m<sub>AB</sub> = (8 − 2)/(3 − 1) = 6/2 = 3}}.`, `{{m<sub>BC</sub> = (17 − 8)/(6 − 3) = 9/3 = 3}}.`, `Las pendientes son iguales y comparten el punto {{B}}, por lo tanto están en la misma recta.`],
        respuesta: `Sí, son colineales (ambas pendientes valen 3)`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla el valor de {{k}} para que la recta que pasa por {{A(k, 3)}} y {{B(5, k + 1)}} tenga pendiente {{2}}.`,
        pasos: [`{{m = ((k + 1) − 3)/(5 − k) = (k − 2)/(5 − k)}}.`, `Iguala a 2: {{(k − 2)/(5 − k) = 2}} ⟹ {{k − 2 = 10 − 2k}}.`, `{{3k = 12}} ⟹ {{k = 4}}.`, `Verifica: {{A(4, 3)}}, {{B(5, 5)}}, {{m = 2/1 = 2}} ✓.`],
        respuesta: `{{k = 4}}`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla la ecuación general de la recta que pasa por el punto medio de {{A(−2, 4)}} y {{B(6, 8)}} y tiene la misma pendiente que {{3x − 2y + 5 = 0}}.`,
        pasos: [`Punto medio: {{((−2 + 6)/2, (4 + 8)/2) = (2, 6)}}.`, `Pendiente de {{3x − 2y + 5 = 0}}: {{m = −3/(−2) = 3/2}}.`, `Punto-pendiente: {{y − 6 = (3/2)(x − 2)}}. Multiplica por 2: {{2y − 12 = 3x − 6}}.`, `Pasa todo a un lado: {{3x − 2y + 6 = 0}}. Verifica con {{(2, 6)}}: {{6 − 12 + 6 = 0}} ✓.`],
        respuesta: `{{3x − 2y + 6 = 0}}`
      },
      {
        nivel: 'dificil',
        enunciado: `La escala Celsius y la Fahrenheit se relacionan linealmente: {{0 °C}} equivale a {{32 °F}} y {{100 °C}} a {{212 °F}}. Halla {{F}} en función de {{C}} y calcula cuántos °F son {{37 °C}} (temperatura corporal).`,
        pasos: [`Puntos {{(C, F)}}: {{(0, 32)}} y {{(100, 212)}}.`, `Pendiente: {{m = (212 − 32)/(100 − 0) = 180/100 = 9/5}}.`, `Intercepto: {{b = 32}}, así que {{F = (9/5)C + 32}}.`, `Para {{C = 37}}: {{F = (9/5)(37) + 32 = 66.6 + 32 = 98.6}}.`],
        respuesta: `{{F = (9/5)C + 32}}; {{37 °C = 98.6 °F}}`
      }
    ],
    teoricas: [
      { q: `¿Por qué la pendiente no depende de cuáles dos puntos de la recta elijas?`, a: `Porque en una recta la razón entre el cambio vertical y el horizontal es constante: al agrandar o achicar el "triángulo de pendiente" se mantienen proporcionales sus lados (triángulos semejantes).` },
      { q: `¿Qué significa que una recta tenga pendiente negativa? Da un ejemplo.`, a: `Que baja al recorrerla de izquierda a derecha: al aumentar {{x}}, {{y}} disminuye. Por ejemplo {{y = −3x + 4}}: por cada unidad que avanzas, bajas 3.` },
      { q: `¿Por qué la pendiente de una recta vertical es indefinida y no cero?`, a: `Porque en una recta vertical {{x₂ − x₁ = 0}} y no se puede dividir entre cero. La pendiente cero corresponde a la recta horizontal ({{y₂ − y₁ = 0}}), que es otra cosa.` },
      { q: `¿Qué representan {{m}} y {{b}} en {{y = mx + b}}?`, a: `{{m}} es la pendiente (cuánto cambia {{y}} por cada unidad de {{x}}) y {{b}} es el intercepto con el eje {{y}}, es decir, el valor de {{y}} cuando {{x = 0}}.` },
      { q: `¿Cuál es la diferencia entre la forma punto-pendiente y la forma pendiente-intercepto?`, a: `La punto-pendiente {{y − y₁ = m(x − x₁)}} se usa con cualquier punto conocido; la pendiente-intercepto {{y = mx + b}} es el caso particular en que el punto es {{(0, b)}}. Ambas describen la misma recta.` },
      { q: `Si en la forma general {{Ax + By + C = 0}} resulta {{B = 0}}, ¿qué tipo de recta es?`, a: `Una recta vertical: queda {{Ax + C = 0}}, o sea {{x = −C/A}}. Su pendiente no existe.` },
      { q: `Dos rectas tienen pendientes 2 y 5. ¿Cuál es más empinada?`, a: `La de pendiente 5, porque su valor absoluto es mayor: sube 5 unidades por cada unidad horizontal, frente a 2 de la otra.` },
      { q: `En un modelo de costo lineal {{C = 0.15q + 40}}, ¿qué significan 0.15 y 40?`, a: `0.15 es la pendiente: el costo de cada unidad adicional (tasa de cambio). 40 es el intercepto: el costo fijo cuando se producen 0 unidades.` }
    ],
    errores: [
      `Invertir el orden en solo uno de los dos restos: calcular {{(y₂ − y₁)/(x₁ − x₂)}}. Si restas arriba en cierto orden, debes restar abajo en el mismo orden; de lo contrario el signo de {{m}} sale al revés.`,
      `Perder el signo al sustituir en punto-pendiente: con {{x₁ = −2}} la expresión es {{x − (−2) = x + 2}}, no {{x − 2}}. Escribe siempre el paréntesis antes de simplificar.`,
      `Escribir la pendiente de una recta vertical como 0 (o la de una horizontal como "indefinida"). Recuerda: horizontal tiene {{m = 0}}; vertical no tiene pendiente.`,
      `Leer mal la forma general: la pendiente es {{−A/B}}, no {{A/B}}; olvidar el signo menos es el error más frecuente al pasar de {{Ax + By + C = 0}} a {{y = mx + b}}.`
    ],
    aplicacion: {
      titulo: 'Costo de producción de una pupusería',
      html: `<p>Una pupusería en Santa Ana registra que producir 100 pupusas en un día le cuesta {{$55}} y producir 300 le cuesta {{$85}}. Suponiendo costo lineal, ¿cuánto cuesta producir 500?</p>
<ol>
<li>Puntos {{(q, C)}}: {{(100, 55)}} y {{(300, 85)}}.</li>
<li>Pendiente: {{m = (85 − 55)/(300 − 100) = 30/200 = 0.15}}. Cada pupusa adicional cuesta {{$0.15}} (ingredientes, gas).</li>
<li>Punto-pendiente: {{C − 55 = 0.15(q − 100)}} ⟹ {{C = 0.15q + 40}}.</li>
<li>El intercepto {{40}} es el costo fijo diario (alquiler, luz), aun si no se vende nada.</li>
<li>Para {{q = 500}}: {{C = 0.15(500) + 40 = 115}}.</li>
</ol>
<p><strong>Respuesta:</strong> producir 500 pupusas cuesta {{$115}}.</p>`
    },
    calc: 'recta',
    examen: [
      { tipo: 'num', q: `Halla la pendiente de la recta que pasa por {{(2, −3)}} y {{(7, 12)}}.`, r: 3, tol: 0.01, pasos: [`{{m = (12 − (−3))/(7 − 2)}}.`, `{{m = 15/5 = 3}}.`] },
      { tipo: 'num', q: `Halla la pendiente de la recta que pasa por {{(−4, 6)}} y {{(8, −3)}}. Escríbela como decimal o fracción.`, r: -0.75, tol: 0.01, pasos: [`{{m = (−3 − 6)/(8 − (−4))}}.`, `{{m = −9/12 = −3/4 = −0.75}}.`] },
      { tipo: 'opt', q: `La pendiente de la recta {{x = 5}} es:`, opciones: [`0`, `5`, `Indefinida (no existe)`, `1`], correcta: 2, pasos: [`{{x = 5}} es una recta vertical.`, `En una recta vertical {{x₂ − x₁ = 0}}, así que la división entre cero hace que la pendiente no exista.`] },
      { tipo: 'num', q: `Una recta de pendiente {{−2}} pasa por {{(3, 1)}}. Escrita como {{y = mx + b}}, ¿cuánto vale {{b}}?`, r: 7, tol: 0.01, pasos: [`{{y − 1 = −2(x − 3)}}.`, `{{y − 1 = −2x + 6}} ⟹ {{y = −2x + 7}}.`, `Por tanto {{b = 7}}.`] },
      { tipo: 'num', q: `¿Cuál es la pendiente de la recta {{6x − 3y + 12 = 0}}?`, r: 2, tol: 0.01, pasos: [`{{A = 6, B = −3}}.`, `{{m = −A/B = −6/(−3) = 2}}.`] },
      { tipo: 'par', q: `La recta {{y = 2x − 1}} pasa por un punto cuya abscisa es {{x = 4}}. Da ese punto {{(x, y)}}.`, r: [4, 7], tol: 0.01, pasos: [`Sustituye {{x = 4}}: {{y = 2(4) − 1}}.`, `{{y = 7}}, así que el punto es {{(4, 7)}}.`] },
      { tipo: 'num', q: `La recta que pasa por {{(1, k)}} y {{(3, 7)}} tiene pendiente {{2}}. Halla {{k}}.`, r: 3, tol: 0.01, pasos: [`{{(7 − k)/(3 − 1) = 2}}.`, `{{7 − k = 4}}.`, `{{k = 3}}. Verifica: {{(7 − 3)/2 = 2}} ✓.`] },
      { tipo: 'opt', q: `¿Cuál de estas rectas tiene pendiente negativa?`, opciones: [`{{2x − y + 1 = 0}}`, `{{x + 2y − 4 = 0}}`, `{{y = 5}}`, `{{x = −3}}`], correcta: 1, pasos: [`{{2x − y + 1 = 0}}: {{m = −2/(−1) = 2}} (positiva).`, `{{x + 2y − 4 = 0}}: {{m = −1/2}} (negativa).`, `{{y = 5}} tiene {{m = 0}} y {{x = −3}} no tiene pendiente.`] },
      { tipo: 'num', q: `Con el modelo de costo {{C = 0.15q + 40}} (dólares), ¿cuánto cuesta producir {{q = 500}} unidades?`, r: 115, tol: 0.01, pasos: [`Sustituye {{q = 500}}.`, `{{C = 0.15(500) + 40 = 75 + 40}}.`, `{{C = 115}} dólares.`] },
      { tipo: 'opt', q: `La ecuación de la recta que pasa por {{(0, 4)}} y {{(2, 0)}} es:`, opciones: [`{{2x − y + 4 = 0}}`, `{{x + 2y − 4 = 0}}`, `{{2x + y + 4 = 0}}`, `{{2x + y − 4 = 0}}`], correcta: 3, pasos: [`{{m = (0 − 4)/(2 − 0) = −2}} y el intercepto es {{b = 4}}.`, `{{y = −2x + 4}}.`, `Pasa todo a la izquierda: {{2x + y − 4 = 0}}. Verifica con {{(2, 0)}}: {{4 + 0 − 4 = 0}} ✓.`] }
    ]
  };

  /* ===================================================================== */
  T['1.5'] = {
    id: '1.5',
    unidad: 2,
    titulo: 'Intersección con los ejes y posiciones relativas',
    resumen: 'Encuentra dónde una recta corta los ejes y decide si dos rectas son paralelas, perpendiculares o se cortan, y en qué punto.',
    objetivos: [
      'Hallar los interceptos de una recta con los ejes x e y y usarlos para graficarla.',
      'Reconocer rectas paralelas, coincidentes y perpendiculares comparando pendientes.',
      'Escribir la ecuación de una recta paralela o perpendicular a otra que pase por un punto dado.',
      'Calcular el punto de intersección de dos rectas resolviendo un sistema de ecuaciones.'
    ],
    teoria: [
      {
        titulo: 'Interceptos con los ejes',
        html: `<p>Los <strong>interceptos</strong> son los puntos donde la recta corta a los ejes coordenados:</p>
<ul>
<li><strong>Intercepto con el eje y:</strong> ocurre cuando {{x = 0}}. Sustituye {{x = 0}} y despeja {{y}}: punto {{(0, b)}}.</li>
<li><strong>Intercepto con el eje x:</strong> ocurre cuando {{y = 0}}. Sustituye {{y = 0}} y despeja {{x}}: punto {{(a, 0)}}.</li>
</ul>
<p>Ejemplo con {{3x + 4y − 12 = 0}}: con {{x = 0}}, {{4y = 12}} y {{y = 3}}; con {{y = 0}}, {{3x = 12}} y {{x = 4}}. Interceptos: {{(0, 3)}} y {{(4, 0)}}.</p>`
      },
      {
        titulo: 'Graficar con dos interceptos',
        html: `<p>Dos puntos bastan para trazar una recta. Los interceptos son los más fáciles de calcular, así que el método es:</p>
<ol><li>Calcula el intercepto con el eje {{x}} (haz {{y = 0}}).</li><li>Calcula el intercepto con el eje {{y}} (haz {{x = 0}}).</li><li>Marca ambos puntos y únelos con una regla, prolongando la recta.</li></ol>
<p><strong>Atención:</strong> si la recta pasa por el origen, ambos interceptos coinciden en {{(0, 0)}} y necesitas un segundo punto distinto. Las rectas horizontales no cortan el eje {{x}} (salvo {{y = 0}}) y las verticales no cortan el eje {{y}} (salvo {{x = 0}}).</p>`
      },
      {
        titulo: 'Forma simétrica o de interceptos',
        html: `<p>Si una recta corta al eje {{x}} en {{(a, 0)}} y al eje {{y}} en {{(0, b)}} (con {{a}} y {{b}} distintos de cero), su ecuación se puede escribir como:</p>
<p>{{x/a + y/b = 1}}</p>
<p>Por ejemplo, {{x/3 + y/6 = 1}} corta los ejes en 3 y en 6. Para pasar de {{Ax + By = D}} a esta forma, divide toda la ecuación entre {{D}}.</p>`
      },
      {
        titulo: 'Rectas paralelas',
        html: `<p>Dos rectas son <strong>paralelas</strong> si nunca se cortan; tienen la misma inclinación:</p>
<p>{{m₁ = m₂}} &nbsp;(y distinto intercepto {{b₁ ≠ b₂}})</p>
<ul><li>Si además {{b₁ = b₂}}, las rectas son la misma: son <strong>coincidentes</strong>.</li><li>Dos rectas verticales ({{x = h₁}}, {{x = h₂}}) son paralelas aunque no tengan pendiente.</li><li>Desde la forma general: {{A₁x + B₁y + C₁ = 0}} y {{A₂x + B₂y + C₂ = 0}} son paralelas cuando {{A₁/A₂ = B₁/B₂ ≠ C₁/C₂}}.</li></ul>`
      },
      {
        titulo: 'Rectas perpendiculares',
        html: `<p>Dos rectas son <strong>perpendiculares</strong> si forman un ángulo de {{90°}}. Sus pendientes cumplen:</p>
<p>{{m₁ · m₂ = −1}} &nbsp;⟺&nbsp; {{m₂ = −1/m₁}}</p>
<p>Es decir, una pendiente es la <em>recíproca con signo contrario</em> de la otra: {{2}} y {{−1/2}}; {{−3/4}} y {{4/3}}. Caso especial: una recta horizontal ({{y = k}}) es perpendicular a una vertical ({{x = h}}), aunque ahí no se pueda multiplicar las pendientes.</p>`
      },
      {
        titulo: 'Recta paralela o perpendicular que pasa por un punto',
        html: `<p><strong>Procedimiento:</strong></p>
<ol>
<li>Halla la pendiente {{m}} de la recta dada (despeja {{y}} o usa {{−A/B}}).</li>
<li>Determina la pendiente buscada: la <em>misma</em> {{m}} si es paralela, o {{−1/m}} si es perpendicular.</li>
<li>Usa punto-pendiente con el punto que te dan: {{y − y₁ = m'(x − x₁)}}.</li>
<li>Presenta la respuesta en la forma pedida.</li>
</ol>`
      },
      {
        titulo: 'Intersección de dos rectas',
        html: `<p>El punto donde se cruzan dos rectas satisface ambas ecuaciones a la vez; por eso se halla resolviendo el <strong>sistema</strong>:</p>
<p><span class="math">A₁x + B₁y + C₁ = 0<br>A₂x + B₂y + C₂ = 0</span></p>
<p>Puedes usar sustitución, igualación o eliminación. Hay tres posibilidades:</p>
<ul><li><strong>Un solo punto:</strong> las pendientes son distintas (se cortan).</li><li><strong>Ninguna solución:</strong> son paralelas distintas.</li><li><strong>Infinitas soluciones:</strong> son la misma recta (coincidentes).</li></ul>
<p>Prueba la calculadora para verificar tus resultados.</p>`
      }
    ],
    formulas: [
      { label: 'Intercepto con el eje x', html: '{{y = 0  ⟹  (a, 0)}}' },
      { label: 'Intercepto con el eje y', html: '{{x = 0  ⟹  (0, b)}}' },
      { label: 'Forma simétrica', html: '{{x/a + y/b = 1}}' },
      { label: 'Paralelas', html: '{{m₁ = m₂}}' },
      { label: 'Perpendiculares', html: '{{m₁ · m₂ = −1}}' },
      { label: 'Intersección', html: 'Resolver el sistema de las dos ecuaciones' }
    ],
    ejemplos: [
      {
        titulo: 'Interceptos y gráfica',
        enunciado: `Halla los interceptos de {{3x + 4y − 12 = 0}}.`,
        pasos: [
          `Eje {{x}} ({{y = 0}}): {{3x − 12 = 0}} ⟹ {{x = 4}}. Punto {{(4, 0)}}.`,
          `Eje {{y}} ({{x = 0}}): {{4y − 12 = 0}} ⟹ {{y = 3}}. Punto {{(0, 3)}}.`,
          `Para graficarla, une {{(4, 0)}} con {{(0, 3)}}. Pendiente: {{m = (3 − 0)/(0 − 4) = −3/4}} (baja de izquierda a derecha, coherente).`
        ],
        respuesta: `{{(4, 0)}} y {{(0, 3)}}`
      },
      {
        titulo: 'Interceptos y forma simétrica',
        enunciado: `Halla los interceptos de {{5x − 2y = 10}} y escribe la ecuación en forma simétrica.`,
        pasos: [
          `Con {{y = 0}}: {{5x = 10}} ⟹ {{x = 2}}. Punto {{(2, 0)}}.`,
          `Con {{x = 0}}: {{−2y = 10}} ⟹ {{y = −5}}. Punto {{(0, −5)}}.`,
          `Divide la ecuación entre 10: {{5x/10 − 2y/10 = 1}} ⟹ {{x/2 + y/(−5) = 1}}.`
        ],
        respuesta: `{{(2, 0)}} y {{(0, −5)}}; {{x/2 + y/(−5) = 1}}`
      },
      {
        titulo: 'Recta paralela por un punto',
        enunciado: `Halla la ecuación de la recta que pasa por {{(3, −1)}} y es paralela a {{2x − 3y + 6 = 0}}.`,
        pasos: [
          `Pendiente de la dada: {{m = −2/(−3) = 2/3}}.`,
          `Paralela ⟹ misma pendiente {{2/3}}.`,
          `Punto-pendiente: {{y + 1 = (2/3)(x − 3)}} ⟹ {{3y + 3 = 2x − 6}}.`,
          `Forma general: {{2x − 3y − 9 = 0}}. Verifica con {{(3, −1)}}: {{6 + 3 − 9 = 0}} ✓.`
        ],
        respuesta: `{{2x − 3y − 9 = 0}}`
      },
      {
        titulo: 'Recta perpendicular por un punto',
        enunciado: `Halla la ecuación de la recta que pasa por {{(2, 5)}} y es perpendicular a {{3x + y − 7 = 0}}.`,
        pasos: [
          `Pendiente de la dada: {{m₁ = −3/1 = −3}}.`,
          `Perpendicular: {{m₂ = −1/m₁ = −1/(−3) = 1/3}}.`,
          `Punto-pendiente: {{y − 5 = (1/3)(x − 2)}} ⟹ {{3y − 15 = x − 2}}.`,
          `Forma general: {{x − 3y + 13 = 0}}. Verifica con {{(2, 5)}}: {{2 − 15 + 13 = 0}} ✓.`
        ],
        respuesta: `{{x − 3y + 13 = 0}}`
      },
      {
        titulo: 'Intersección de dos rectas',
        enunciado: `Halla el punto donde se cortan {{2x + y = 7}} y {{x − y = −1}}.`,
        pasos: [
          `Suma las dos ecuaciones para eliminar {{y}}: {{3x = 6}} ⟹ {{x = 2}}.`,
          `Sustituye en {{x − y = −1}}: {{2 − y = −1}} ⟹ {{y = 3}}.`,
          `Comprueba en la primera: {{2(2) + 3 = 7}} ✓.`
        ],
        respuesta: `{{(2, 3)}}`
      },
      {
        titulo: 'Triángulo rectángulo con pendientes',
        enunciado: `Demuestra que el triángulo con vértices {{A(1, 2)}}, {{B(5, 4)}} y {{C(3, −2)}} es rectángulo e indica en qué vértice está el ángulo recto.`,
        pasos: [
          `{{m<sub>AB</sub> = (4 − 2)/(5 − 1) = 2/4 = 1/2}}.`,
          `{{m<sub>AC</sub> = (−2 − 2)/(3 − 1) = −4/2 = −2}}.`,
          `{{m<sub>BC</sub> = (−2 − 4)/(3 − 5) = −6/(−2) = 3}}.`,
          `Producto {{m<sub>AB</sub> · m<sub>AC</sub> = (1/2)(−2) = −1}}: los lados {{AB}} y {{AC}} son perpendiculares.`,
          `Los otros productos no valen −1 ({{(1/2)(3) = 3/2}}, {{(−2)(3) = −6}}), así que el único ángulo recto está en {{A}}.`
        ],
        respuesta: `Es rectángulo, con el ángulo recto en {{A}}`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Halla los interceptos con los ejes de {{2x + 3y = 12}}.`,
        pasos: [`Con {{y = 0}}: {{2x = 12}} ⟹ {{x = 6}}.`, `Con {{x = 0}}: {{3y = 12}} ⟹ {{y = 4}}.`],
        respuesta: `{{(6, 0)}} y {{(0, 4)}}`
      },
      {
        nivel: 'facil',
        enunciado: `Halla los interceptos de {{y = x − 5}}.`,
        pasos: [`Con {{x = 0}}: {{y = −5}}.`, `Con {{y = 0}}: {{0 = x − 5}} ⟹ {{x = 5}}.`],
        respuesta: `{{(5, 0)}} y {{(0, −5)}}`
      },
      {
        nivel: 'facil',
        enunciado: `Determina si {{y = 3x + 1}} y {{6x − 2y + 5 = 0}} son paralelas, coincidentes o se cortan.`,
        pasos: [`La primera tiene {{m = 3}}, {{b = 1}}.`, `La segunda: {{m = −6/(−2) = 3}}, {{b = −5/(−2) = 5/2}}.`, `Misma pendiente e interceptos distintos ({{1 ≠ 5/2}}): son paralelas distintas.`],
        respuesta: `Paralelas (no coincidentes)`
      },
      {
        nivel: 'facil',
        enunciado: `¿Son perpendiculares {{y = 2x − 3}} y {{x + 2y − 8 = 0}}?`,
        pasos: [`{{m₁ = 2}}.`, `Segunda: {{m₂ = −1/2}}.`, `{{m₁ · m₂ = 2(−1/2) = −1}}. Sí son perpendiculares.`],
        respuesta: `Sí, son perpendiculares`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla la ecuación de la recta paralela a {{y = −4x + 2}} que pasa por {{(1, 3)}}.`,
        pasos: [`Pendiente buscada: {{−4}} (paralela).`, `{{y − 3 = −4(x − 1)}}.`, `{{y − 3 = −4x + 4}} ⟹ {{y = −4x + 7}}.`],
        respuesta: `{{y = −4x + 7}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla la ecuación general de la recta perpendicular a {{5x − 2y + 3 = 0}} que pasa por {{(−2, 4)}}.`,
        pasos: [`Pendiente de la dada: {{m = −5/(−2) = 5/2}}.`, `Perpendicular: {{m' = −2/5}}.`, `{{y − 4 = −(2/5)(x + 2)}}. Multiplica por 5: {{5y − 20 = −2x − 4}}.`, `General: {{2x + 5y − 16 = 0}}. Verifica con {{(−2, 4)}}: {{−4 + 20 − 16 = 0}} ✓.`],
        respuesta: `{{2x + 5y − 16 = 0}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla el punto de intersección de {{3x − 2y = 4}} y {{x + 4y = 6}}.`,
        pasos: [`Multiplica la primera por 2: {{6x − 4y = 8}}.`, `Suma con la segunda: {{7x = 14}} ⟹ {{x = 2}}.`, `En {{x + 4y = 6}}: {{2 + 4y = 6}} ⟹ {{y = 1}}.`, `Verifica en la primera: {{6 − 2 = 4}} ✓.`],
        respuesta: `{{(2, 1)}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla {{k}} para que {{kx + 3y − 1 = 0}} sea (a) paralela y (b) perpendicular a {{2x − y + 5 = 0}}.`,
        pasos: [`Pendiente de {{2x − y + 5 = 0}}: {{m₂ = −2/(−1) = 2}}.`, `Pendiente de {{kx + 3y − 1 = 0}}: {{m₁ = −k/3}}.`, `(a) Paralela: {{−k/3 = 2}} ⟹ {{k = −6}}.`, `(b) Perpendicular: {{(−k/3)(2) = −1}} ⟹ {{−2k = −3}} ⟹ {{k = 3/2}}.`],
        respuesta: `(a) {{k = −6}}; (b) {{k = 3/2}}`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla la ecuación general de la mediatriz del segmento de extremos {{A(−1, 2)}} y {{B(5, 6)}} (la recta perpendicular al segmento por su punto medio).`,
        pasos: [`Punto medio: {{((−1 + 5)/2, (2 + 6)/2) = (2, 4)}}.`, `Pendiente de {{AB}}: {{(6 − 2)/(5 − (−1)) = 4/6 = 2/3}}.`, `Mediatriz: {{m = −3/2}}. {{y − 4 = −(3/2)(x − 2)}}.`, `Multiplica por 2: {{2y − 8 = −3x + 6}} ⟹ {{3x + 2y − 14 = 0}}. Verifica con {{(2, 4)}}: {{6 + 8 − 14 = 0}} ✓.`],
        respuesta: `{{3x + 2y − 14 = 0}}`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla el pie de la perpendicular trazada desde {{P(0, 6)}} a la recta {{x + y = 4}} y la distancia de {{P}} a la recta.`,
        pasos: [`Pendiente de {{x + y = 4}}: {{−1}}. La perpendicular tiene {{m = 1}}.`, `Perpendicular por {{P(0, 6)}}: {{y = x + 6}}.`, `Intersección: {{x + (x + 6) = 4}} ⟹ {{2x = −2}} ⟹ {{x = −1}}, {{y = 5}}. Pie: {{(−1, 5)}} (está en la recta: {{−1 + 5 = 4}} ✓).`, `Distancia: {{√((0 − (−1))² + (6 − 5)²) = √2 ≈ 1.41}}.`],
        respuesta: `Pie {{(−1, 5)}}; distancia {{√2 ≈ 1.41}}`
      },
      {
        nivel: 'dificil',
        enunciado: `Demuestra que {{A(0, 0)}}, {{B(4, 1)}}, {{C(5, 4)}}, {{D(1, 3)}} forman un paralelogramo y decide si es un rectángulo.`,
        pasos: [`{{m<sub>AB</sub> = 1/4}}; {{m<sub>DC</sub> = (4 − 3)/(5 − 1) = 1/4}}. Entonces {{AB ∥ DC}}.`, `{{m<sub>AD</sub> = 3/1 = 3}}; {{m<sub>BC</sub> = (4 − 1)/(5 − 4) = 3}}. Entonces {{AD ∥ BC}}.`, `Los dos pares de lados opuestos son paralelos: es un paralelogramo.`, `Para ser rectángulo se necesitaría {{m<sub>AB</sub> · m<sub>AD</sub> = −1}}, pero {{(1/4)(3) = 3/4 ≠ −1}}.`],
        respuesta: `Es un paralelogramo, pero no es un rectángulo`
      }
    ],
    teoricas: [
      { q: `¿Por qué para hallar el intercepto con el eje x se hace {{y = 0}}?`, a: `Porque todo punto del eje {{x}} tiene ordenada cero. Al imponer {{y = 0}} buscas el punto de la recta que está sobre ese eje.` },
      { q: `¿Qué condición cumplen las pendientes de dos rectas paralelas? ¿Y si además tienen el mismo intercepto?`, a: `Son iguales: {{m₁ = m₂}}. Si además tienen el mismo intercepto con el eje {{y}}, son la misma recta (coincidentes).` },
      { q: `Explica por qué {{m₁ · m₂ = −1}} caracteriza a las rectas perpendiculares.`, a: `Al girar una recta 90°, el avance y la subida se intercambian y uno de ellos cambia de signo: si una sube {{a}} por cada {{b}} de avance ({{m = a/b}}), la perpendicular sube {{−b}} por cada {{a}} ({{m = −b/a}}). El producto es {{−1}}.` },
      { q: `Una recta tiene pendiente 0. ¿Cuál es la pendiente de las rectas perpendiculares a ella?`, a: `Ninguna: las perpendiculares a una recta horizontal son verticales y no tienen pendiente definida. Aquí no se puede usar {{−1/m}} porque dividiría entre cero.` },
      { q: `¿Cuántos puntos de intersección pueden tener dos rectas distintas del plano?`, a: `Cero (paralelas) o uno (se cortan). Dos rectas distintas nunca se cortan en más de un punto. Si tienen infinitos puntos comunes, son la misma recta.` },
      { q: `Al resolver un sistema de dos ecuaciones lineales obtienes {{0 = 5}}. ¿Qué significa geométricamente?`, a: `Que no hay solución: las rectas son paralelas distintas y nunca se cortan.` },
      { q: `¿Qué ocurre con los interceptos de una recta que pasa por el origen?`, a: `Ambos coinciden en {{(0, 0)}}, así que para graficarla necesitas calcular otro punto con un valor de {{x}} distinto de cero.` },
      { q: `En un modelo económico con costo {{C}} e ingreso {{I}} lineales, ¿qué representa el punto de intersección de sus rectas?`, a: `El punto de equilibrio: la cantidad en la que ingreso y costo son iguales, es decir, no hay ganancia ni pérdida.` }
    ],
    errores: [
      `Confundir qué variable se hace cero: para el intercepto con el eje {{x}} se hace {{y = 0}} (no {{x = 0}}), y viceversa. Un truco: el nombre del eje es la variable que se despeja.`,
      `Usar solo el cambio de signo o solo la recíproca para la pendiente perpendicular. Se necesitan las dos cosas: la pendiente {{2/3}} pasa a {{−3/2}}, no a {{−2/3}} ni a {{3/2}}.`,
      `Decir que dos rectas son paralelas por tener "pendientes parecidas". Deben ser exactamente iguales, y los interceptos distintos; si no, son coincidentes.`,
      `Al resolver el sistema, hallar {{x}} y olvidar {{y}} (o al revés). El punto de intersección tiene dos coordenadas: sustituye siempre para obtener la segunda y verifica en ambas ecuaciones.`
    ],
    aplicacion: {
      titulo: 'Punto de equilibrio de una pupusería',
      html: `<p>La pupusería tiene un costo diario {{C = 0.15q + 40}} (dólares) para {{q}} pupusas. Si vende cada pupusa a {{$0.55}}, su ingreso es {{I = 0.55q}}. ¿Cuántas pupusas debe vender al día para no perder dinero?</p>
<ol>
<li>El costo corta el eje vertical en {{(0, 40)}}: ese es el costo fijo aun sin vender. El ingreso parte de {{(0, 0)}}.</li>
<li>El punto de equilibrio es la intersección de las dos rectas: {{0.55q = 0.15q + 40}}.</li>
<li>Resta: {{0.40q = 40}} ⟹ {{q = 100}}.</li>
<li>Costo (o ingreso) en ese punto: {{I = 0.55(100) = 55}}.</li>
</ol>
<p><strong>Respuesta:</strong> el equilibrio está en {{(100, 55)}}: con 100 pupusas diarias el ingreso iguala al costo ({{$55}}). Desde la pupusa 101 hay ganancia, porque la recta del ingreso (pendiente 0.55) sube más rápido que la del costo (pendiente 0.15).</p>`
    },
    calc: 'recta-pos',
    examen: [
      { tipo: 'num', q: `¿En qué valor de {{x}} corta la recta {{3x + 5y − 15 = 0}} al eje {{x}}?`, r: 5, tol: 0.01, pasos: [`Haz {{y = 0}}: {{3x − 15 = 0}}.`, `{{x = 5}}. El intercepto es {{(5, 0)}}.`] },
      { tipo: 'num', q: `¿En qué valor de {{y}} corta la recta {{2x − 4y + 8 = 0}} al eje {{y}}?`, r: 2, tol: 0.01, pasos: [`Haz {{x = 0}}: {{−4y + 8 = 0}}.`, `{{y = 2}}. El intercepto es {{(0, 2)}}.`] },
      { tipo: 'par', q: `Halla el punto de intersección de {{x + y = 10}} y {{x − y = 2}}.`, r: [6, 4], tol: 0.01, pasos: [`Suma: {{2x = 12}} ⟹ {{x = 6}}.`, `{{6 + y = 10}} ⟹ {{y = 4}}.`, `Verifica: {{6 − 4 = 2}} ✓.`] },
      { tipo: 'num', q: `¿Cuál es la pendiente de una recta perpendicular a {{2x − 5y + 1 = 0}}? Escríbela como decimal o fracción.`, r: -2.5, tol: 0.01, pasos: [`Pendiente de la dada: {{m = −2/(−5) = 2/5}}.`, `Perpendicular: {{m' = −1/(2/5) = −5/2}}.`, `{{−5/2 = −2.5}}.`] },
      { tipo: 'opt', q: `¿Cuál de estas rectas es paralela a {{y = 3x − 7}}?`, opciones: [`{{y = −(1/3)x + 1}}`, `{{3x + y = 2}}`, `{{6x − 2y + 9 = 0}}`, `{{x − 3y = 0}}`], correcta: 2, pasos: [`Buscamos pendiente {{3}}.`, `{{3x + y = 2}} tiene {{m = −3}}; {{x − 3y = 0}} tiene {{m = 1/3}}; la primera tiene {{−1/3}}.`, `{{6x − 2y + 9 = 0}}: {{m = −6/(−2) = 3}} ✓.`] },
      { tipo: 'num', q: `Halla {{k}} para que {{kx + 2y = 5}} sea paralela a {{3x − y = 1}}.`, r: -6, tol: 0.01, pasos: [`{{kx + 2y = 5}}: {{m₁ = −k/2}}.`, `{{3x − y = 1}}: {{m₂ = 3}}.`, `Paralelas: {{−k/2 = 3}} ⟹ {{k = −6}}.`] },
      { tipo: 'par', q: `Halla el punto de intersección de {{2x − y = 3}} y {{x + 2y = 14}}.`, r: [4, 5], tol: 0.01, pasos: [`De la primera: {{y = 2x − 3}}.`, `Sustituye: {{x + 2(2x − 3) = 14}} ⟹ {{5x = 20}} ⟹ {{x = 4}}.`, `{{y = 2(4) − 3 = 5}}. Punto {{(4, 5)}}.`] },
      { tipo: 'opt', q: `Las rectas {{y = 2x + 1}} y {{y = 2x − 3}}:`, opciones: [`Se cortan en un solo punto`, `Son paralelas y no tienen punto en común`, `Son coincidentes`, `Son perpendiculares`], correcta: 1, pasos: [`Ambas tienen pendiente {{2}}, así que son paralelas.`, `Sus interceptos ({{1}} y {{−3}}) son distintos: no coinciden y no hay solución al sistema.`] },
      { tipo: 'num', q: `Halla {{k}} para que {{kx + y − 4 = 0}} sea perpendicular a {{x − 2y + 6 = 0}}.`, r: 2, tol: 0.01, pasos: [`{{kx + y − 4 = 0}}: {{m₁ = −k}}.`, `{{x − 2y + 6 = 0}}: {{m₂ = −1/(−2) = 1/2}}.`, `{{m₁ · m₂ = −1}}: {{−k · (1/2) = −1}} ⟹ {{k = 2}}.`] },
      { tipo: 'lista', q: `Para {{3x − 4y − 12 = 0}}, escribe los dos interceptos como números: primero el intercepto con el eje {{x}} y luego el valor de {{y}} del intercepto con el eje {{y}} (separados por coma).`, r: [4, -3], tol: 0.01, pasos: [`Con {{y = 0}}: {{3x = 12}} ⟹ {{x = 4}}.`, `Con {{x = 0}}: {{−4y = 12}} ⟹ {{y = −3}}.`, `Respuesta: 4 y −3.`] }
    ]
  };

  /* ===================================================================== */
  T['1.6'] = {
    id: '1.6',
    unidad: 2,
    titulo: 'Ángulo de inclinación y ángulo entre dos rectas',
    resumen: 'Convierte pendientes en ángulos con la tangente y calcula el ángulo que forman dos rectas que se cortan.',
    objetivos: [
      'Calcular el ángulo de inclinación de una recta a partir de su pendiente, cuidando el cuadrante cuando m es negativa.',
      'Hallar la pendiente de una recta conociendo su ángulo de inclinación.',
      'Calcular el ángulo entre dos rectas con la fórmula de la tangente.',
      'Resolver problemas con triángulos y situaciones reales que involucran inclinaciones.'
    ],
    teoria: [
      {
        titulo: 'Ángulo de inclinación',
        html: `<p>El <strong>ángulo de inclinación</strong> {{θ}} de una recta es el ángulo que ella forma con el eje {{x}}, medido desde el semieje {{x}} positivo hacia la recta, en sentido contrario a las manecillas del reloj. Siempre cumple:</p>
<p>{{0° ≤ θ < 180°}}</p>
<p>Una recta horizontal tiene {{θ = 0°}}; una vertical, {{θ = 90°}}. Entre más empinada sube la recta, mayor es {{θ}} (hasta llegar a 90°); si baja, {{θ}} está entre 90° y 180°.</p>`
      },
      {
        titulo: 'Relación entre pendiente y ángulo: tan θ = m',
        html: `<p>En el triángulo rectángulo formado por la subida y el avance, la tangente del ángulo es cateto opuesto entre cateto adyacente, que es justo la pendiente:</p>
<p>{{tan(θ) = m}} &nbsp;⟹&nbsp; {{θ = arctan(m)}}</p>
<p>Así, la pendiente y el ángulo cuentan la misma historia: {{m = 1}} equivale a 45°, {{m = √3}} a 60°, {{m = 1/√3}} a 30°. Recuerda que arctan es la tecla {{tan⁻¹}} de la calculadora, que debe estar en <strong>modo grados</strong>.</p>`
      },
      {
        titulo: 'Cuidado con el cuadrante: pendiente negativa',
        html: `<p>La calculadora devuelve {{arctan(m)}} entre {{−90°}} y {{90°}}. Pero un ángulo de inclinación nunca es negativo, así que:</p>
<table>
<tr><th>Pendiente</th><th>Ángulo de inclinación</th></tr>
<tr><td>{{m > 0}}</td><td>{{θ = arctan(m)}} (agudo, entre 0° y 90°)</td></tr>
<tr><td>{{m = 0}}</td><td>{{θ = 0°}}</td></tr>
<tr><td>{{m < 0}}</td><td>{{θ = 180° + arctan(m)}}, que es lo mismo que {{180° − arctan(|m|)}} (obtuso)</td></tr>
<tr><td>Indefinida</td><td>{{θ = 90°}}</td></tr>
</table>
<p>Ejemplo: {{m = −1}}; la calculadora da {{−45°}}, y el ángulo de inclinación es {{180° − 45° = 135°}}.</p>`
      },
      {
        titulo: 'De ángulo a pendiente',
        html: `<p>También puedes ir al revés: si conoces {{θ}}, la pendiente es {{m = tan(θ)}}, y con ella armas la ecuación usando un punto.</p>
<ul><li>{{θ = 45°}} ⟹ {{m = 1}}</li><li>{{θ = 120°}} ⟹ {{m = tan 120° = −√3 ≈ −1.73}}</li><li>{{θ = 135°}} ⟹ {{m = −1}}</li><li>{{θ = 90°}} ⟹ la tangente no existe (recta vertical)</li></ul>
<p>La calculadora acepta ángulos mayores de 90° directamente: {{tan(120°) = −1.732...}}.</p>`
      },
      {
        titulo: 'Ángulo entre dos rectas',
        html: `<p>Si dos rectas con pendientes {{m₁}} y {{m₂}} se cortan, forman cuatro ángulos: dos agudos iguales y dos obtusos iguales (suplementarios). Para calcularlos:</p>
<p>{{tan(α) = (m₂ − m₁)/(1 + m₁m₂)}}</p>
<p>donde {{α}} es el ángulo que hay que girar la recta 1 para llegar a la recta 2. Para obtener el <strong>ángulo agudo</strong>, toma el valor absoluto: {{tan(α) = |(m₂ − m₁)/(1 + m₁m₂)|}}.</p>
<p>El ángulo obtuso es {{180° − α}}.</p>`
      },
      {
        titulo: 'De dónde sale la fórmula',
        html: `<p>Sea {{θ₁}} la inclinación de la recta 1 y {{θ₂}} la de la recta 2. El ángulo entre ellas es {{α = θ₂ − θ₁}}. Por la identidad de la tangente de una diferencia:</p>
<p>{{tan(θ₂ − θ₁) = (tan θ₂ − tan θ₁)/(1 + tan θ₁ · tan θ₂)}}</p>
<p>Como {{tan θ₁ = m₁}} y {{tan θ₂ = m₂}}, se obtiene la fórmula. Observa el denominador: si {{1 + m₁m₂ = 0}}, la tangente no existe y {{α = 90°}}, que es el caso de las perpendiculares ya conocido.</p>`
      },
      {
        titulo: 'Casos especiales y procedimiento',
        html: `<ul>
<li><strong>Paralelas:</strong> {{m₁ = m₂}} ⟹ numerador 0 ⟹ {{α = 0°}}.</li>
<li><strong>Perpendiculares:</strong> {{m₁m₂ = −1}} ⟹ {{α = 90°}}.</li>
<li><strong>Una recta vertical:</strong> no se puede usar la fórmula; calcula la inclinación de la otra recta y resta de 90°.</li>
</ul>
<p><strong>Procedimiento:</strong> (1) obtén {{m₁}} y {{m₂}}; (2) sustituye en la fórmula; (3) toma el valor absoluto para el ángulo agudo; (4) aplica arctan en modo grados; (5) el obtuso es {{180° − α}}.</p>`
      },
      {
        titulo: 'Ángulos de un triángulo en el plano',
        html: `<p>Con las pendientes de los lados puedes calcular los ángulos interiores de un triángulo dados sus vértices: aplicas la fórmula en cada vértice usando las pendientes de los dos lados que concurren allí. Comprueba que los tres sumen {{180°}}; es una excelente verificación de tu trabajo.</p>
<p>Ten cuidado: la fórmula puede darte el ángulo agudo mientras el ángulo interior sea obtuso. Fíjate en la figura (o en el signo del resultado sin valor absoluto) para decidir.</p>`
      }
    ],
    formulas: [
      { label: 'Ángulo de inclinación', html: '{{tan(θ) = m,  0° ≤ θ < 180°}}' },
      { label: 'Si m es negativa', html: '{{θ = 180° + arctan(m)}}' },
      { label: 'Pendiente desde el ángulo', html: '{{m = tan(θ)}}' },
      { label: 'Ángulo entre dos rectas', html: '{{tan(α) = (m₂ − m₁)/(1 + m₁m₂)}}' },
      { label: 'Ángulo agudo', html: '{{tan(α) = |(m₂ − m₁)/(1 + m₁m₂)|}}' },
      { label: 'Ángulo obtuso', html: '{{180° − α}}' },
      { label: 'Perpendiculares y paralelas', html: '{{1 + m₁m₂ = 0  ⟹  α = 90°;  m₁ = m₂  ⟹  α = 0°}}' }
    ],
    ejemplos: [
      {
        titulo: 'Ángulo de inclinación con pendiente positiva',
        enunciado: `Halla el ángulo de inclinación de la recta que pasa por {{(1, 2)}} y {{(4, 8)}}.`,
        pasos: [
          `Pendiente: {{m = (8 − 2)/(4 − 1) = 6/3 = 2}}.`,
          `Como {{m > 0}}: {{θ = arctan(2)}}.`,
          `Con la calculadora en grados: {{θ ≈ 63.43°}}.`
        ],
        respuesta: `{{θ ≈ 63.43°}}`
      },
      {
        titulo: 'Pendiente negativa y cuadrante',
        enunciado: `Halla el ángulo de inclinación de una recta de pendiente {{−3/4}}.`,
        pasos: [
          `La calculadora da {{arctan(−3/4) ≈ −36.87°}}, que no es un ángulo de inclinación válido.`,
          `Como {{m < 0}}, suma 180°: {{θ = 180° + (−36.87°) = 143.13°}}.`,
          `Comprobación: {{tan(143.13°) ≈ −0.75}} ✓. El ángulo es obtuso, coherente con una recta que baja.`
        ],
        respuesta: `{{θ ≈ 143.13°}}`
      },
      {
        titulo: 'Ángulo entre dos rectas',
        enunciado: `Halla el ángulo agudo entre {{y = (1/3)x + 2}} y {{y = 2x − 5}}.`,
        pasos: [
          `{{m₁ = 1/3}}, {{m₂ = 2}}.`,
          `{{tan(α) = (2 − 1/3)/(1 + (1/3)(2)) = (5/3)/(5/3) = 1}}.`,
          `{{α = arctan(1) = 45°}}.`
        ],
        respuesta: `{{α = 45°}}`
      },
      {
        titulo: 'Rectas en forma general',
        enunciado: `Halla el ángulo agudo entre {{3x − y + 2 = 0}} y {{x + 2y − 4 = 0}}.`,
        pasos: [
          `Pendientes: {{m₁ = −3/(−1) = 3}} y {{m₂ = −1/2}}.`,
          `{{tan(α) = (−1/2 − 3)/(1 + 3(−1/2)) = (−7/2)/(−1/2) = 7}}.`,
          `Resultado positivo, así que {{α = arctan(7) ≈ 81.87°}}. El ángulo obtuso es {{180° − 81.87° = 98.13°}}.`
        ],
        respuesta: `Ángulo agudo {{≈ 81.87°}} (obtuso {{≈ 98.13°}})`
      },
      {
        titulo: 'Ángulos interiores de un triángulo',
        enunciado: `Halla los ángulos interiores del triángulo {{A(0, 0)}}, {{B(4, 0)}}, {{C(1, 3)}}.`,
        pasos: [
          `Pendientes: {{m<sub>AB</sub> = 0}}, {{m<sub>AC</sub> = 3/1 = 3}}, {{m<sub>BC</sub> = (3 − 0)/(1 − 4) = −1}}.`,
          `En {{A}}: lados {{AB}} (horizontal) y {{AC}}: {{tan A = |3 − 0|/(1 + 0) = 3}} ⟹ {{A ≈ 71.57°}}.`,
          `En {{B}}: {{BC}} tiene inclinación 135° y {{BA}} mira hacia la izquierda; el interior es {{180° − 135° = 45°}} (con la fórmula: {{|−1 − 0|/(1 + 0) = 1}} ⟹ 45°).`,
          `En {{C}}: {{180° − 71.57° − 45° = 63.43°}}. Verifica con la fórmula entre {{CA}} (m = 3) y {{CB}} (m = −1): {{|(−1 − 3)/(1 − 3)| = 2}} ⟹ {{arctan 2 ≈ 63.43°}} ✓.`
        ],
        respuesta: `{{A ≈ 71.57°}}, {{B = 45°}}, {{C ≈ 63.43°}}`
      },
      {
        titulo: 'Contexto real: pendiente de una calle',
        enunciado: `Una calle de Santa Tecla tiene una pendiente del 12 % (sube 12 m por cada 100 m horizontales). ¿Qué ángulo forma con la horizontal?`,
        pasos: [
          `Una pendiente del 12 % significa {{m = 12/100 = 0.12}}.`,
          `{{θ = arctan(0.12)}}.`,
          `Con la calculadora: {{θ ≈ 6.84°}}. Aunque 12 % suena mucho, el ángulo real es pequeño.`
        ],
        respuesta: `{{θ ≈ 6.84°}}`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Halla el ángulo de inclinación de una recta de pendiente {{√3}}.`,
        pasos: [`{{tan θ = √3}}.`, `Recuerda el ángulo notable: {{tan 60° = √3}}.`],
        respuesta: `{{θ = 60°}}`
      },
      {
        nivel: 'facil',
        enunciado: `Halla el ángulo de inclinación de una recta de pendiente {{0.5}}. Redondea a 2 decimales.`,
        pasos: [`{{m > 0}}, así que {{θ = arctan(0.5)}}.`, `{{θ ≈ 26.57°}}.`],
        respuesta: `{{θ ≈ 26.57°}}`
      },
      {
        nivel: 'facil',
        enunciado: `Halla el ángulo de inclinación de una recta de pendiente {{−1}}.`,
        pasos: [`{{arctan(−1) = −45°}}.`, `Como {{m < 0}}: {{θ = 180° − 45° = 135°}}.`],
        respuesta: `{{θ = 135°}}`
      },
      {
        nivel: 'facil',
        enunciado: `Una recta tiene ángulo de inclinación de {{120°}}. ¿Cuál es su pendiente? (da el valor exacto y el aproximado)`,
        pasos: [`{{m = tan 120°}}.`, `{{tan 120° = −tan 60° = −√3}}.`, `Aproximadamente {{−1.73}}.`],
        respuesta: `{{m = −√3 ≈ −1.73}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla el ángulo de inclinación de la recta {{2x + 3y − 6 = 0}}.`,
        pasos: [`{{m = −2/3}}.`, `{{arctan(−2/3) ≈ −33.69°}}.`, `Como {{m < 0}}: {{θ = 180° − 33.69° = 146.31°}}.`],
        respuesta: `{{θ ≈ 146.31°}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla el ángulo entre las rectas {{y = 3x − 1}} y {{y = −2x + 4}}.`,
        pasos: [`{{m₁ = 3}}, {{m₂ = −2}}.`, `{{tan α = (−2 − 3)/(1 + 3(−2)) = −5/(−5) = 1}}.`, `{{α = 45°}}.`],
        respuesta: `{{α = 45°}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla el ángulo agudo entre {{x − y + 1 = 0}} y {{4x − y − 7 = 0}}. Redondea a 2 decimales.`,
        pasos: [`{{m₁ = 1}}, {{m₂ = 4}}.`, `{{tan α = (4 − 1)/(1 + 4) = 3/5 = 0.6}}.`, `{{α = arctan(0.6) ≈ 30.96°}}.`],
        respuesta: `{{α ≈ 30.96°}}`
      },
      {
        nivel: 'intermedio',
        enunciado: `Halla los ángulos interiores del triángulo {{A(1, 1)}}, {{B(5, 1)}}, {{C(5, 4)}}.`,
        pasos: [`{{AB}} es horizontal y {{BC}} es vertical: el ángulo en {{B}} es {{90°}}.`, `{{m<sub>AC</sub> = (4 − 1)/(5 − 1) = 3/4}}, y {{AB}} es horizontal ({{m = 0}}): {{A = arctan(3/4) ≈ 36.87°}}.`, `{{C = 180° − 90° − 36.87° = 53.13°}}.`],
        respuesta: `{{A ≈ 36.87°}}, {{B = 90°}}, {{C ≈ 53.13°}}`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla las ecuaciones de las rectas que pasan por {{(2, 1)}} y forman un ángulo de {{45°}} con la recta {{y = 2x}}.`,
        pasos: [`Sea {{m}} la pendiente buscada; {{m₂ = 2}}. Se exige {{|(m − 2)/(1 + 2m)| = tan 45° = 1}}.`, `Caso 1: {{(m − 2)/(1 + 2m) = 1}} ⟹ {{m − 2 = 1 + 2m}} ⟹ {{m = −3}}.`, `Caso 2: {{(m − 2)/(1 + 2m) = −1}} ⟹ {{m − 2 = −1 − 2m}} ⟹ {{3m = 1}} ⟹ {{m = 1/3}}.`, `Rectas por {{(2, 1)}}: {{y − 1 = −3(x − 2)}} ⟹ {{y = −3x + 7}}; {{y − 1 = (1/3)(x − 2)}} ⟹ {{x − 3y + 1 = 0}}.`],
        respuesta: `{{y = −3x + 7}} y {{x − 3y + 1 = 0}}`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla el ángulo agudo y el obtuso entre {{4x + y − 2 = 0}} y {{x − y + 3 = 0}}. Redondea a 2 decimales.`,
        pasos: [`{{m₁ = −4}}, {{m₂ = 1}}.`, `{{tan α = (1 − (−4))/(1 + (−4)(1)) = 5/(−3) = −5/3}}.`, `Negativo: el ángulo obtenido es obtuso. El agudo se obtiene con el valor absoluto: {{arctan(5/3) ≈ 59.04°}}.`, `Obtuso: {{180° − 59.04° = 120.96°}}.`],
        respuesta: `Agudo {{≈ 59.04°}}; obtuso {{≈ 120.96°}}`
      },
      {
        nivel: 'dificil',
        enunciado: `Halla la ecuación de la recta que pasa por {{(0, 2)}} con ángulo de inclinación {{150°}}.`,
        pasos: [`{{m = tan 150° = −tan 30° = −1/√3 = −√3/3}}.`, `Aproximadamente {{m ≈ −0.5774}}.`, `Como pasa por {{(0, 2)}}, el intercepto es {{b = 2}}.`, `Ecuación: {{y = −(√3/3)x + 2 ≈ −0.5774x + 2}}.`],
        respuesta: `{{y = −(√3/3)x + 2}} (aprox. {{y = −0.5774x + 2}})`
      }
    ],
    teoricas: [
      { q: `¿Entre qué valores puede estar el ángulo de inclinación de una recta y por qué?`, a: `Entre {{0°}} y {{180°}} (sin incluir 180°). Se mide siempre desde el eje {{x}} positivo en sentido contrario a las manecillas del reloj, y a 180° la recta vuelve a ser la horizontal de 0°.` },
      { q: `¿Qué significa que {{tan θ = m}}? Interprétalo con un triángulo.`, a: `Que la pendiente es la tangente del ángulo: en el triángulo rectángulo, el cateto opuesto es la subida, el adyacente es el avance, y su cociente es tanto {{tan θ}} como {{m}}.` },
      { q: `Si {{m < 0}}, ¿por qué no basta con escribir {{θ = arctan(m)}}?`, a: `Porque la calculadora devuelve un ángulo negativo (entre −90° y 0°), y el ángulo de inclinación no puede ser negativo. Hay que sumar 180°: {{θ = 180° + arctan(m)}}, que da un ángulo obtuso.` },
      { q: `¿Qué ángulo de inclinación tiene una recta horizontal? ¿Y una vertical?`, a: `La horizontal tiene {{θ = 0°}} (pendiente 0) y la vertical {{θ = 90°}} (la tangente no está definida, igual que su pendiente).` },
      { q: `¿Qué indica que el denominador {{1 + m₁m₂}} valga cero en la fórmula del ángulo entre rectas?`, a: `Que {{m₁m₂ = −1}}, es decir, las rectas son perpendiculares; la tangente no existe porque el ángulo es de 90°.` },
      { q: `¿Por qué se usa valor absoluto cuando se busca el ángulo agudo entre dos rectas?`, a: `Porque el signo de {{tan α}} depende del orden en que numeres las rectas. Con el valor absoluto obtienes siempre el agudo; el obtuso es su suplemento ({{180° − α}}).` },
      { q: `Dos rectas tienen ángulos de inclinación de 20° y 80°. ¿Cuál es el ángulo agudo entre ellas, sin usar la fórmula?`, a: `{{80° − 20° = 60°}}: el ángulo entre rectas es la diferencia de sus ángulos de inclinación.` },
      { q: `¿Qué ángulo forman dos rectas paralelas? ¿Cómo lo muestra la fórmula?`, a: `{{0°}}. Con {{m₁ = m₂}} el numerador {{m₂ − m₁}} vale 0, así que {{tan α = 0}} y {{α = 0°}}.` }
    ],
    errores: [
      `Dejar el ángulo negativo (por ejemplo {{−45°}}) cuando {{m < 0}}. El ángulo de inclinación se corrige sumando 180°: es {{135°}}.`,
      `Calcular con la calculadora en radianes. Si {{arctan(1)}} no te da {{45}}, cambia el modo a grados (DEG).`,
      `Escribir mal la fórmula: poner {{1 − m₁m₂}} en el denominador, o restar las pendientes en el orden contrario sin cuidar el signo. Usa siempre {{(m₂ − m₁)/(1 + m₁m₂)}} y toma valor absoluto para el agudo.`,
      `Aplicar la fórmula cuando una de las rectas es vertical (no tiene {{m}}). En ese caso halla el ángulo de inclinación de la otra recta y compáralo con 90°.`
    ],
    aplicacion: {
      titulo: 'Rampa de acceso para sillas de ruedas',
      html: `<p>Una norma de accesibilidad recomienda que las rampas tengan una pendiente máxima de {{1/12}} (sube 1 m por cada 12 m horizontales). Un escalón de entrada a una clínica en San Salvador mide {{0.75 m}} de altura. ¿Cuál es la longitud horizontal mínima de la rampa y qué ángulo forma con el suelo?</p>
<ol>
<li>Pendiente máxima: {{m = 1/12 ≈ 0.0833}}.</li>
<li>Longitud horizontal: {{0.75/x = 1/12}} ⟹ {{x = 0.75 × 12 = 9}} m.</li>
<li>Ángulo con el suelo: {{θ = arctan(1/12) ≈ 4.76°}}.</li>
<li>Longitud real de la superficie de la rampa: {{√(9² + 0.75²) = √81.5625 ≈ 9.03}} m.</li>
</ol>
<p><strong>Respuesta:</strong> la rampa necesita al menos {{9 m}} de recorrido horizontal y forma {{≈ 4.76°}} con el suelo. Un ángulo tan pequeño parece "plano", pero es el máximo cómodo para empujar una silla de ruedas.</p>`
    },
    calc: 'angulo-rectas',
    examen: [
      { tipo: 'num', q: `Halla el ángulo de inclinación (en grados) de una recta de pendiente {{1}}.`, r: 45, tol: 0.01, pasos: [`{{tan θ = 1}}.`, `{{θ = arctan(1) = 45°}}.`] },
      { tipo: 'num', q: `Halla el ángulo de inclinación (en grados) de una recta con pendiente {{√3}}.`, r: 60, tol: 0.01, pasos: [`{{tan θ = √3}}.`, `Ángulo notable: {{θ = 60°}}.`] },
      { tipo: 'num', q: `Halla el ángulo de inclinación (en grados) de una recta de pendiente {{−1}}.`, r: 135, tol: 0.01, pasos: [`{{arctan(−1) = −45°}}.`, `Como {{m < 0}}: {{θ = 180° − 45°}}.`, `{{θ = 135°}}.`] },
      { tipo: 'num', q: `Halla el ángulo de inclinación (en grados) de una recta de pendiente {{3}}. Redondea a 2 decimales.`, r: 71.57, tol: 0.01, pasos: [`{{m > 0}}: {{θ = arctan(3)}}.`, `{{θ ≈ 71.57°}}.`] },
      { tipo: 'num', q: `Una recta tiene ángulo de inclinación de {{135°}}. ¿Cuál es su pendiente?`, r: -1, tol: 0.01, pasos: [`{{m = tan 135°}}.`, `{{tan 135° = −tan 45° = −1}}.`] },
      { tipo: 'num', q: `Halla el ángulo agudo (en grados) entre dos rectas de pendientes {{1/3}} y {{2}}.`, r: 45, tol: 0.01, pasos: [`{{tan α = (2 − 1/3)/(1 + (1/3)(2))}}.`, `{{= (5/3)/(5/3) = 1}}.`, `{{α = 45°}}.`] },
      { tipo: 'num', q: `Halla el ángulo agudo (en grados) entre dos rectas de pendientes {{1}} y {{4}}. Redondea a 2 decimales.`, r: 30.96, tol: 0.01, pasos: [`{{tan α = |(4 − 1)/(1 + 4)|}}.`, `{{= 3/5 = 0.6}}.`, `{{α = arctan(0.6) ≈ 30.96°}}.`] },
      { tipo: 'opt', q: `¿Qué ángulo forman dos rectas perpendiculares?`, opciones: [`0°`, `45°`, `90°`, `180°`], correcta: 2, pasos: [`Perpendiculares cumplen {{m₁m₂ = −1}}.`, `Entonces {{1 + m₁m₂ = 0}} y {{tan α}} no existe, lo que ocurre solo con {{α = 90°}}.`] },
      { tipo: 'opt', q: `El ángulo de inclinación de una recta de pendiente {{−2}} es:`, opciones: [`{{63.43°}}`, `{{−63.43°}}`, `{{153.43°}}`, `{{116.57°}}`], correcta: 3, pasos: [`{{arctan(−2) ≈ −63.43°}}.`, `Como {{m < 0}}, suma 180°: {{180° − 63.43° = 116.57°}}.`, `Comprobación: {{tan(116.57°) ≈ −2}} ✓.`] },
      { tipo: 'lista', q: `Entre dos rectas de pendientes {{−4}} y {{1}}, escribe el ángulo agudo y el ángulo obtuso que forman (en grados, redondeados a 2 decimales, separados por coma).`, r: [59.04, 120.96], tol: 0.01, pasos: [`{{tan α = |(1 − (−4))/(1 + (−4)(1))| = |5/(−3)| = 5/3}}.`, `Agudo: {{arctan(5/3) ≈ 59.04°}}.`, `Obtuso: {{180° − 59.04° = 120.96°}}.`] }
    ]
  };

  /* ---- Conversión {{ }} → <span class="math"> ---- */
  function conv(v) {
    if (typeof v === 'string') {
      return v.replace(/\{\{([\s\S]*?)\}\}/g, function (_, s) { return '<span class="math">' + s + '</span>'; });
    }
    if (Array.isArray(v)) { for (var i = 0; i < v.length; i++) v[i] = conv(v[i]); return v; }
    if (v && typeof v === 'object') { for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k)) v[k] = conv(v[k]); return v; }
    return v;
  }
  ['1.4', '1.5', '1.6'].forEach(function (id) { conv(T[id]); });
})();

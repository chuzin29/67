/* data-2a-u7.js — Unidad 7: Teoría de conjuntos y técnicas de conteo */
(function () {
  var T = (window.CURSO_2A = window.CURSO_2A || { temas: {} }).temas;
  var M = function (s) { return '<span class="math">' + s + '</span>'; };

  /* ===================================================== 1.19 ===================================================== */
  T['1.19'] = {
    id: '1.19',
    unidad: 7,
    titulo: 'Operaciones con conjuntos e intervalos',
    resumen: 'Domina la notación de conjuntos, los intervalos en R, los diagramas de Venn y las operaciones de unión, intersección, diferencia y complemento.',
    objetivos: [
      'Describir conjuntos por extensión y por comprensión, y calcular su cardinal n(A).',
      'Escribir desigualdades como intervalos y representarlos en la recta numérica.',
      'Calcular unión, intersección, diferencia y complemento de conjuntos y de intervalos.',
      'Resolver problemas con diagramas de Venn de dos y tres conjuntos usando el principio de inclusión y exclusión.'
    ],
    teoria: [
      {
        titulo: 'Notación y cardinal',
        html: `<p>Un <strong>conjunto</strong> es una colección bien definida de objetos, llamados <strong>elementos</strong>. Se nombran con letras mayúsculas y sus elementos se escriben entre llaves. Hay dos maneras de describirlos:</p>
<ul>
<li><strong>Por extensión:</strong> se listan todos los elementos. Ejemplo: ${M('A = {2, 4, 6, 8}')}.</li>
<li><strong>Por comprensión:</strong> se da una propiedad que cumplen. Ejemplo: A es el conjunto de los números pares positivos menores que 10.</li>
</ul>
<p>Para decir que un elemento pertenece a un conjunto usamos ${M('∈')}; si no pertenece, ${M('∉')}. Así, ${M('4 ∈ A')} y ${M('5 ∉ A')}.</p>
<p>El <strong>cardinal</strong> ${M('n(A)')} es el número de elementos de un conjunto finito. En el ejemplo, ${M('n(A) = 4')}. Los elementos no se repiten y el orden en que se listan no importa: ${M('{1, 2, 3} = {3, 1, 2}')}.</p>`
      },
      {
        titulo: 'Tipos de conjuntos y subconjuntos',
        html: `<ul>
<li><strong>Finito:</strong> se pueden contar sus elementos. <strong>Infinito:</strong> no se terminan (los números naturales).</li>
<li><strong>Vacío</strong> ${M('∅')} o ${M('{ }')}: no tiene elementos, ${M('n(∅) = 0')}. Ojo: ${M('{0}')} NO es vacío, tiene un elemento.</li>
<li><strong>Unitario:</strong> tiene exactamente un elemento.</li>
<li><strong>Universal</strong> U: el conjunto que contiene todos los elementos que se están considerando en un problema.</li>
</ul>
<p><strong>Subconjunto.</strong> A es subconjunto de B (${M('A ⊂ B')}) si todo elemento de A está también en B. Siempre se cumple que ${M('∅ ⊂ A')} y ${M('A ⊂ A')}. Dos conjuntos son iguales si tienen exactamente los mismos elementos.</p>
<p><strong>Cuántos subconjuntos hay.</strong> Un conjunto con n elementos tiene ${M('2ⁿ')} subconjuntos (cada elemento está o no está). De ellos, ${M('2ⁿ − 1')} son subconjuntos propios (todos menos el propio A). Por ejemplo, ${M('{a, b, c}')} tiene ${M('2³ = 8')} subconjuntos.</p>`
      },
      {
        titulo: 'Intervalos en R',
        html: `<p>Un <strong>intervalo</strong> es un conjunto infinito de números reales entre dos extremos. En El Salvador se escribe con corchetes invertidos para los extremos que NO se incluyen: ${M(']a, b[')} es lo mismo que ${M('(a, b)')} en otros libros. Un corchete que mira hacia el número (cerrado) incluye el extremo; uno que mira hacia afuera (abierto) lo excluye.</p>
<table>
<tr><th>Desigualdad</th><th>Intervalo</th><th>Tipo</th></tr>
<tr><td>${M('a < x < b')}</td><td>${M(']a, b[')}</td><td>abierto</td></tr>
<tr><td>${M('a ≤ x ≤ b')}</td><td>${M('[a, b]')}</td><td>cerrado</td></tr>
<tr><td>${M('a ≤ x < b')}</td><td>${M('[a, b[')}</td><td>semiabierto</td></tr>
<tr><td>${M('a < x ≤ b')}</td><td>${M(']a, b]')}</td><td>semiabierto</td></tr>
<tr><td>${M('x > a')}</td><td>${M(']a, +∞[')}</td><td>infinito</td></tr>
<tr><td>${M('x ≥ a')}</td><td>${M('[a, +∞[')}</td><td>infinito</td></tr>
<tr><td>${M('x < b')}</td><td>${M(']−∞, b[')}</td><td>infinito</td></tr>
<tr><td>${M('x ≤ b')}</td><td>${M(']−∞, b]')}</td><td>infinito</td></tr>
</table>
<p>Todos los reales: ${M(']−∞, +∞[ = R')}. Los símbolos ${M('+∞')} y ${M('−∞')} nunca son números, por eso siempre van con corchete abierto.</p>`
      },
      {
        titulo: 'Diagramas de Venn y operaciones',
        html: `<p>Un <strong>diagrama de Venn</strong> dibuja el universo U como un rectángulo y cada conjunto como una región (un círculo) dentro de él. Las cuatro operaciones básicas son:</p>
<ul>
<li><strong>Unión</strong> ${M('A ∪ B')}: elementos que están en A <em>o</em> en B (o en ambos).</li>
<li><strong>Intersección</strong> ${M('A ∩ B')}: elementos que están en A <em>y</em> en B a la vez. Si ${M('A ∩ B = ∅')}, los conjuntos son <em>disjuntos</em>.</li>
<li><strong>Diferencia</strong> ${M('A − B')}: elementos de A que no están en B. En general ${M('A − B ≠ B − A')}.</li>
<li><strong>Complemento</strong> A<sup>c</sup>: elementos de U que no están en A. Con él, la diferencia se escribe ${M('A − B = A ∩ ')}B<sup>c</sup>.</li>
</ul>
<p>Observa los dos casos extremos: si ${M('A ⊂ B')}, entonces ${M('A ∪ B = B')} y ${M('A ∩ B = A')}. Y siempre ${M('A ∪ A')}<sup>c</sup> ${M('= U')} y ${M('A ∩ A')}<sup>c</sup> ${M('= ∅')}.</p>`
      },
      {
        titulo: 'Propiedades y principio de inclusión y exclusión',
        html: `<p>Las operaciones cumplen propiedades parecidas a las del álgebra:</p>
<ul>
<li><strong>Conmutativa:</strong> ${M('A ∪ B = B ∪ A')}, ${M('A ∩ B = B ∩ A')}.</li>
<li><strong>Asociativa:</strong> ${M('(A ∪ B) ∪ C = A ∪ (B ∪ C)')}.</li>
<li><strong>Distributiva:</strong> ${M('A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)')}.</li>
<li><strong>Leyes de De Morgan:</strong> el complemento de una unión es la intersección de los complementos, y el complemento de una intersección es la unión de los complementos.</li>
</ul>
<p><strong>Cardinal de la unión.</strong> Si sumas ${M('n(A) + n(B)')} cuentas dos veces los elementos de la intersección; hay que restarlos una vez:</p>
<p>${M('n(A ∪ B) = n(A) + n(B) − n(A ∩ B)')}</p>
<p>Para tres conjuntos:</p>
<p>${M('n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)')}</p>
<p>Y para el complemento, ${M('n(A')}<sup>c</sup>${M(') = n(U) − n(A)')}.</p>`
      },
      {
        titulo: 'Operaciones con intervalos',
        html: `<p>Para operar intervalos, dibuja cada uno en una recta numérica (una sobre otra, alineadas) y observa:</p>
<ol>
<li>Marca los extremos con un círculo vacío si no se incluyen y lleno si se incluyen.</li>
<li><strong>Intersección:</strong> la zona donde ambos están sombreados.</li>
<li><strong>Unión:</strong> toda la zona sombreada por al menos uno.</li>
<li><strong>Diferencia</strong> ${M('A − B')}: sombrea A y quita lo que B cubre.</li>
<li><strong>Cuidado con los extremos:</strong> un extremo está en la intersección solo si pertenece a los dos intervalos; está en la unión si pertenece a alguno.</li>
</ol>
<p>Cuando quitas un trozo que incluye su extremo, el extremo que queda del otro lado pasa a ser abierto, y al revés. Por ejemplo, ${M('[0, 5] − [2, 3] = [0, 2[ ∪ ]3, 5]')}.</p>
<p>El complemento de un intervalo se toma respecto a R: el complemento de ${M('[a, b[')} es ${M(']−∞, a[ ∪ [b, +∞[')}.</p>`
      },
      {
        titulo: 'Cómo resolver problemas con diagramas de Venn',
        html: `<p>Los problemas de encuestas se resuelven llenando el diagrama <strong>de adentro hacia afuera</strong>:</p>
<ol>
<li>Dibuja el rectángulo U y los círculos que se solapan.</li>
<li>Escribe primero la región central (la intersección de todos los conjuntos).</li>
<li>Calcula las regiones de solo dos conjuntos: intersección de dos menos lo que ya está en el centro.</li>
<li>Calcula las regiones de un solo conjunto: total del conjunto menos lo ya escrito.</li>
<li>La región de afuera (ninguno) es ${M('n(U)')} menos la suma de todo lo de adentro.</li>
<li>Comprueba que la suma de todas las regiones sea ${M('n(U)')}.</li>
</ol>
<p>La frase "A <em>y</em> B" es intersección; "A <em>o</em> B" es unión; "solo A" es ${M('A − B')}; "ninguno" es el complemento de la unión; "exactamente uno" suma las regiones de un solo conjunto.</p>
<p>Prueba la calculadora de esta página para comprobar tus operaciones con conjuntos.</p>`
      }
    ],
    formulas: [
      { label: 'Subconjuntos de un conjunto con n elementos', html: '2ⁿ' },
      { label: 'Unión de dos conjuntos', html: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)' },
      { label: 'Unión de tres conjuntos', html: 'n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)' },
      { label: 'Cardinal del complemento', html: 'n(A<sup>c</sup>) = n(U) − n(A)' },
      { label: 'Diferencia con el complemento', html: 'A − B = A ∩ B<sup>c</sup>' },
      { label: 'De Morgan', html: '(A ∪ B)<sup>c</sup> = A<sup>c</sup> ∩ B<sup>c</sup>     (A ∩ B)<sup>c</sup> = A<sup>c</sup> ∪ B<sup>c</sup>' },
      { label: 'Intervalo abierto y cerrado', html: ']a, b[ : a < x < b     [a, b] : a ≤ x ≤ b' }
    ],
    ejemplos: [
      {
        titulo: 'Operaciones básicas con listas',
        enunciado: `Sean ${M('A = {2, 4, 6, 8}')} (pares de 2 a 8) y ${M('B = {3, 6, 9, 12, 15, 18}')} (múltiplos de 3 menores que 20). Halla ${M('A ∪ B')}, ${M('A ∩ B')}, ${M('A − B')}, ${M('B − A')} y verifica la fórmula del cardinal de la unión.`,
        pasos: [
          `Cardinales: ${M('n(A) = 4')} y ${M('n(B) = 6')}.`,
          `Intersección: el único elemento común es 6, así que ${M('A ∩ B = {6}')} y ${M('n(A ∩ B) = 1')}.`,
          `Unión: escribe todos sin repetir: ${M('A ∪ B = {2, 3, 4, 6, 8, 9, 12, 15, 18}')}.`,
          `Diferencias: ${M('A − B = {2, 4, 8}')} (quitamos el 6) y ${M('B − A = {3, 9, 12, 15, 18}')}.`,
          `Verificación: ${M('n(A ∪ B) = 4 + 6 − 1 = 9')}, que coincide con los 9 elementos de la unión.`
        ],
        respuesta: `${M('A ∪ B = {2, 3, 4, 6, 8, 9, 12, 15, 18}')}, ${M('A ∩ B = {6}')}, ${M('A − B = {2, 4, 8}')}, ${M('B − A = {3, 9, 12, 15, 18}')}.`
      },
      {
        titulo: 'Complemento y leyes de De Morgan',
        enunciado: `Sea ${M('U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}')}, ${M('A = {1, 3, 5, 7, 9}')} y ${M('B = {1, 2, 3, 4, 5}')}. Halla ${M('(A ∪ B)')}<sup>c</sup> y ${M('A')}<sup>c</sup> ${M('∩ B')}<sup>c</sup>, y comprueba que son iguales.`,
        pasos: [
          `Unión: ${M('A ∪ B = {1, 2, 3, 4, 5, 7, 9}')}.`,
          `Complemento de la unión: lo que le falta a U, es decir ${M('(A ∪ B)')}<sup>c</sup> ${M('= {6, 8, 10}')}.`,
          `Complementos por separado: A<sup>c</sup> ${M('= {2, 4, 6, 8, 10}')} y B<sup>c</sup> ${M('= {6, 7, 8, 9, 10}')}.`,
          `Intersección de los complementos: los comunes son 6, 8 y 10, o sea A<sup>c</sup> ${M('∩ B')}<sup>c</sup> ${M('= {6, 8, 10}')}.`,
          `Los dos resultados coinciden: se cumple la ley de De Morgan.`
        ],
        respuesta: `Ambos conjuntos son ${M('{6, 8, 10}')}.`
      },
      {
        titulo: 'Operaciones con intervalos',
        enunciado: `Sean ${M('A = ]−3, 5]')} y ${M('B = [1, 8[')}. Calcula ${M('A ∩ B')}, ${M('A ∪ B')}, ${M('A − B')}, ${M('B − A')} y el complemento de A en R.`,
        pasos: [
          `Dibuja ambos: A va de −3 (excluido) a 5 (incluido); B va de 1 (incluido) a 8 (excluido).`,
          `Intersección: empieza en 1 (está en B, y 1 está dentro de A) y termina en 5 (está en A y dentro de B): ${M('A ∩ B = [1, 5]')}.`,
          `Unión: desde −3 (excluido, solo A lo cubre) hasta 8 (excluido, solo B lo cubre) sin huecos: ${M('A ∪ B = ]−3, 8[')}.`,
          `A − B: de A quitamos ${M('[1, 5]')}; queda ${M(']−3, 1[')} (el 1 sale porque B lo contiene).`,
          `B − A: de B quitamos ${M('[1, 5]')}; queda ${M(']5, 8[')} (el 5 sale porque A lo contiene).`,
          `Complemento de A: lo que no está en ${M(']−3, 5]')}, es decir ${M(']−∞, −3] ∪ ]5, +∞[')}.`
        ],
        respuesta: `${M('A ∩ B = [1, 5]')}; ${M('A ∪ B = ]−3, 8[')}; ${M('A − B = ]−3, 1[')}; ${M('B − A = ]5, 8[')}; A<sup>c</sup> ${M('= ]−∞, −3] ∪ ]5, +∞[')}.`
      },
      {
        titulo: 'Encuesta en una pupusería',
        enunciado: `En una pupusería de Santa Ana se encuestó a 60 clientes: 35 pidieron pupusas de queso, 28 pidieron revueltas y 10 pidieron de ambas. ¿Cuántos pidieron solo queso, cuántos solo revueltas y cuántos no pidieron ninguna de las dos?`,
        pasos: [
          `Sea Q = queso y R = revueltas: ${M('n(Q) = 35')}, ${M('n(R) = 28')}, ${M('n(Q ∩ R) = 10')}, ${M('n(U) = 60')}.`,
          `Solo queso: ${M('35 − 10 = 25')}. Solo revueltas: ${M('28 − 10 = 18')}.`,
          `Pidieron al menos una: ${M('n(Q ∪ R) = 35 + 28 − 10 = 53')}.`,
          `Ninguna: ${M('60 − 53 = 7')}.`,
          `Comprobación: ${M('25 + 10 + 18 + 7 = 60')}.`
        ],
        respuesta: `Solo queso: 25; solo revueltas: 18; ninguna: 7.`
      },
      {
        titulo: 'Tres conjuntos: actividades de un bachillerato',
        enunciado: `De 80 estudiantes, 40 practican fútbol (F), 30 están en el club de música (M) y 25 en el de ciencias (C). Además, 12 están en F y M, 10 en F y C, 8 en M y C, y 5 en las tres actividades. ¿Cuántos no participan en ninguna? ¿Cuántos participan en exactamente una?`,
        pasos: [
          `Centro: ${M('n(F ∩ M ∩ C) = 5')}.`,
          `Solo dos: F y M solamente: ${M('12 − 5 = 7')}; F y C solamente: ${M('10 − 5 = 5')}; M y C solamente: ${M('8 − 5 = 3')}.`,
          `Solo uno: solo F ${M('= 40 − 7 − 5 − 5 = 23')}; solo M ${M('= 30 − 7 − 3 − 5 = 15')}; solo C ${M('= 25 − 5 − 3 − 5 = 12')}.`,
          `Participan en alguna actividad: ${M('23 + 15 + 12 + 7 + 5 + 3 + 5 = 70')}. También sale con la fórmula: ${M('40 + 30 + 25 − 12 − 10 − 8 + 5 = 70')}.`,
          `Ninguna actividad: ${M('80 − 70 = 10')}.`,
          `Exactamente una: ${M('23 + 15 + 12 = 50')}.`
        ],
        respuesta: `10 estudiantes no participan en ninguna; 50 participan en exactamente una.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Sea A el conjunto de los enteros positivos menores que 7 y ${M('B = {2, 4, 6, 8, 10}')}. Halla ${M('A ∩ B')}, ${M('A ∪ B')} y ${M('n(A ∪ B)')}.`,
        pasos: [
          `Por extensión: ${M('A = {1, 2, 3, 4, 5, 6}')}.`,
          `Intersección: comunes ${M('A ∩ B = {2, 4, 6}')}.`,
          `Unión: ${M('A ∪ B = {1, 2, 3, 4, 5, 6, 8, 10}')}.`,
          `Cardinal: ${M('n(A ∪ B) = 6 + 5 − 3 = 8')}.`
        ],
        respuesta: `${M('A ∩ B = {2, 4, 6}')}; ${M('A ∪ B = {1, 2, 3, 4, 5, 6, 8, 10}')}; ${M('n(A ∪ B) = 8')}.`
      },
      {
        nivel: 'facil',
        enunciado: `Sea ${M('C = {a, e, i, o, u}')}. ¿Cuántos subconjuntos tiene C? ¿Cuántos son propios?`,
        pasos: [
          `C tiene ${M('n = 5')} elementos.`,
          `Número de subconjuntos: ${M('2⁵ = 32')}.`,
          `Subconjuntos propios: todos menos C mismo, ${M('32 − 1 = 31')}.`
        ],
        respuesta: `32 subconjuntos, de los cuales 31 son propios.`
      },
      {
        nivel: 'facil',
        enunciado: `Escribe como intervalo: (a) ${M('−2 ≤ x < 7')}; (b) ${M('x > 4')}; (c) ${M('x ≤ 0')}.`,
        pasos: [
          `(a) El −2 se incluye y el 7 no: ${M('[−2, 7[')}.`,
          `(b) Sin extremo superior y 4 no incluido: ${M(']4, +∞[')}.`,
          `(c) Sin extremo inferior y 0 sí incluido: ${M(']−∞, 0]')}.`
        ],
        respuesta: `(a) ${M('[−2, 7[')}; (b) ${M(']4, +∞[')}; (c) ${M(']−∞, 0]')}.`
      },
      {
        nivel: 'facil',
        enunciado: `Sea ${M('U = {1, 2, 3, 4, 5, 6, 7, 8}')}, ${M('A = {2, 4, 6, 8}')} y ${M('B = {1, 2, 3, 4}')}. Halla A<sup>c</sup>, ${M('B − A')} y ${M('(A ∩ B)')}<sup>c</sup>.`,
        pasos: [
          `Complemento: A<sup>c</sup> son los de U que no están en A: ${M('{1, 3, 5, 7}')}.`,
          `Diferencia: de B quitamos los pares 2 y 4: ${M('B − A = {1, 3}')}.`,
          `Intersección: ${M('A ∩ B = {2, 4}')}.`,
          `Su complemento: ${M('(A ∩ B)')}<sup>c</sup> ${M('= {1, 3, 5, 6, 7, 8}')}.`
        ],
        respuesta: `A<sup>c</sup> ${M('= {1, 3, 5, 7}')}; ${M('B − A = {1, 3}')}; ${M('(A ∩ B)')}<sup>c</sup> ${M('= {1, 3, 5, 6, 7, 8}')}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Dados ${M('A = [−4, 2[')} y ${M('B = ]−1, 6]')}, halla ${M('A ∪ B')}, ${M('A ∩ B')}, ${M('A − B')} y ${M('B − A')}.`,
        pasos: [
          `Dibuja ambos intervalos sobre la misma recta.`,
          `Unión: se traslapan, sin huecos, desde −4 (incluido) hasta 6 (incluido): ${M('[−4, 6]')}.`,
          `Intersección: de −1 (excluido) a 2 (excluido): ${M(']−1, 2[')}.`,
          `A − B: a A le quitamos ${M(']−1, 2[')}; queda ${M('[−4, −1]')} (el −1 sí queda, B no lo incluye).`,
          `B − A: a B le quitamos ${M(']−1, 2[')}; queda ${M('[2, 6]')} (el 2 sí queda, A no lo incluye).`
        ],
        respuesta: `${M('A ∪ B = [−4, 6]')}; ${M('A ∩ B = ]−1, 2[')}; ${M('A − B = [−4, −1]')}; ${M('B − A = [2, 6]')}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `De 120 personas encuestadas en San Miguel, 70 ven fútbol, 55 ven telenovelas y 25 ven ambos. ¿Cuántas ven al menos uno, cuántas ninguno y cuántas exactamente uno?`,
        pasos: [
          `${M('n(A) = 70')}, ${M('n(B) = 55')}, ${M('n(A ∩ B) = 25')}.`,
          `Al menos uno: ${M('70 + 55 − 25 = 100')}.`,
          `Ninguno: ${M('120 − 100 = 20')}.`,
          `Exactamente uno: solo fútbol ${M('70 − 25 = 45')} y solo telenovelas ${M('55 − 25 = 30')}; total ${M('45 + 30 = 75')}.`
        ],
        respuesta: `Al menos uno: 100; ninguno: 20; exactamente uno: 75.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Se sabe que ${M('n(A) = 18')}, ${M('n(B) = 14')} y ${M('n(A ∪ B) = 25')}. Halla ${M('n(A ∩ B)')}, ${M('n(A − B)')} y ${M('n(B − A)')}.`,
        pasos: [
          `Despeja de la fórmula: ${M('n(A ∩ B) = n(A) + n(B) − n(A ∪ B) = 18 + 14 − 25 = 7')}.`,
          `${M('n(A − B) = n(A) − n(A ∩ B) = 18 − 7 = 11')}.`,
          `${M('n(B − A) = 14 − 7 = 7')}.`,
          `Comprobación: ${M('11 + 7 + 7 = 25')}.`
        ],
        respuesta: `${M('n(A ∩ B) = 7')}, ${M('n(A − B) = 11')}, ${M('n(B − A) = 7')}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Sean ${M('A = ]−∞, 3[')} y ${M('B = [−2, +∞[')}. Halla ${M('A ∩ B')}, ${M('A ∪ B')}, A<sup>c</sup> y B<sup>c</sup>, y luego ${M('(A ∩ B)')}<sup>c</sup>.`,
        pasos: [
          `Intersección: números que son menores que 3 y también mayores o iguales que −2: ${M('[−2, 3[')}.`,
          `Unión: cualquier real cumple al menos una condición, así que ${M('A ∪ B = R')}.`,
          `Complementos: A<sup>c</sup> ${M('= [3, +∞[')} y B<sup>c</sup> ${M('= ]−∞, −2[')}.`,
          `Complemento de la intersección: ${M('(A ∩ B)')}<sup>c</sup> ${M('= ]−∞, −2[ ∪ [3, +∞[')}.`,
          `Esto coincide con A<sup>c</sup> ${M('∪ B')}<sup>c</sup>, como dice De Morgan.`
        ],
        respuesta: `${M('A ∩ B = [−2, 3[')}; ${M('A ∪ B = R')}; A<sup>c</sup> ${M('= [3, +∞[')}; B<sup>c</sup> ${M('= ]−∞, −2[')}; ${M('(A ∩ B)')}<sup>c</sup> ${M('= ]−∞, −2[ ∪ [3, +∞[')}.`
      },
      {
        nivel: 'dificil',
        enunciado: `De 200 turistas que visitaron Occidente, 90 fueron al volcán de Santa Ana (A), 80 a Suchitoto (B) y 70 a la Costa del Sol (C). Además, 30 fueron a A y B, 25 a A y C, 20 a B y C, y 10 a los tres. ¿Cuántos no visitaron ninguno? ¿Cuántos visitaron exactamente uno? ¿Cuántos al menos dos?`,
        pasos: [
          `Unión por inclusión y exclusión: ${M('90 + 80 + 70 − 30 − 25 − 20 + 10 = 175')}.`,
          `Ninguno: ${M('200 − 175 = 25')}.`,
          `Solo A ${M('= 90 − 30 − 25 + 10 = 45')}; solo B ${M('= 80 − 30 − 20 + 10 = 40')}; solo C ${M('= 70 − 25 − 20 + 10 = 35')}.`,
          `Exactamente uno: ${M('45 + 40 + 35 = 120')}.`,
          `Al menos dos: ${M('175 − 120 = 55')}. Comprobación directa: solo dos ${M('(20 + 15 + 10) = 45')} más los tres ${M('10')} da 55.`
        ],
        respuesta: `Ninguno: 25; exactamente uno: 120; al menos dos: 55.`
      },
      {
        nivel: 'dificil',
        enunciado: `Sean ${M('A = [−3, 5[')}, ${M('B = ]0, 9]')} y ${M('C = ]−∞, 2]')}. Halla ${M('(A ∩ B) − C')} y ${M('(A ∪ B) ∩ C')}<sup>c</sup>.`,
        pasos: [
          `Primero ${M('A ∩ B = ]0, 5[')}.`,
          `Restamos C: quitamos todo lo que sea menor o igual que 2. Queda ${M('(A ∩ B) − C = ]2, 5[')}.`,
          `Unión: ${M('A ∪ B = [−3, 9]')}.`,
          `Complemento de C: C<sup>c</sup> ${M('= ]2, +∞[')}.`,
          `Intersección: ${M('[−3, 9] ∩ ]2, +∞[ = ]2, 9]')}.`
        ],
        respuesta: `${M('(A ∩ B) − C = ]2, 5[')} y ${M('(A ∪ B) ∩ C')}<sup>c</sup> ${M('= ]2, 9]')}.`
      },
      {
        nivel: 'dificil',
        enunciado: `Para dos conjuntos A y B se sabe que ${M('n(A) = 3x')}, ${M('n(B) = 2x + 4')}, ${M('n(A ∩ B) = x − 1')} y ${M('n(A ∪ B) = 41')}. Halla x y luego ${M('n(A − B)')}.`,
        pasos: [
          `Aplica la fórmula: ${M('n(A ∪ B) = n(A) + n(B) − n(A ∩ B)')}, así que ${M('41 = 3x + (2x + 4) − (x − 1)')}.`,
          `Simplifica: ${M('41 = 4x + 5')}, luego ${M('4x = 36')} y ${M('x = 9')}.`,
          `Entonces ${M('n(A) = 27')}, ${M('n(B) = 22')} y ${M('n(A ∩ B) = 8')}. Comprobación: ${M('27 + 22 − 8 = 41')}.`,
          `${M('n(A − B) = n(A) − n(A ∩ B) = 27 − 8 = 19')}.`
        ],
        respuesta: `${M('x = 9')} y ${M('n(A − B) = 19')}.`
      }
    ],
    teoricas: [
      { q: `¿Por qué ${M('{0}')} no es el conjunto vacío?`, a: `Porque tiene un elemento (el número cero). El conjunto vacío no tiene ningún elemento; su cardinal es 0, mientras que ${M('n({0}) = 1')}.` },
      { q: `¿Cuántos subconjuntos tiene un conjunto de n elementos y por qué?`, a: `Tiene ${M('2ⁿ')}. Para formar un subconjunto decides, para cada elemento, si entra o no entra; son dos opciones por elemento y por el principio de la multiplicación resulta ${M('2 · 2 · … · 2 = 2ⁿ')}.` },
      { q: `¿Qué diferencia hay entre un extremo abierto y uno cerrado en un intervalo?`, a: `En el extremo cerrado el número está incluido (se usa ≤ o ≥); en el abierto no lo está (< o >). Por ejemplo ${M('[1, 3[')} contiene al 1 pero no al 3.` },
      { q: `¿Por qué se resta ${M('n(A ∩ B)')} al calcular ${M('n(A ∪ B)')}?`, a: `Porque al sumar ${M('n(A) + n(B)')} los elementos comunes se cuentan dos veces; al restarlos una vez quedan contados exactamente una vez.` },
      { q: `¿Es cierto que ${M('A − B = B − A')} siempre? Da un ejemplo.`, a: `No. Con ${M('A = {1, 2, 3}')} y ${M('B = {3, 4}')} se tiene ${M('A − B = {1, 2}')} y ${M('B − A = {4}')}. Solo son iguales si ambos son vacíos, es decir, si A = B.` },
      { q: `Si ${M('A ⊂ B')}, ¿cuánto valen ${M('A ∪ B')} y ${M('A ∩ B')}?`, a: `${M('A ∪ B = B')} (B ya contiene a A) y ${M('A ∩ B = A')} (lo común es todo A).` },
      { q: `¿Por qué ${M('+∞')} siempre lleva corchete abierto?`, a: `Porque el infinito no es un número real, así que no puede pertenecer al intervalo. Solo indica que el intervalo continúa sin límite.` },
      { q: `Enuncia las leyes de De Morgan con tus palabras.`, a: `Lo que no está en A ni en B es lo que está fuera de A y fuera de B: ${M('(A ∪ B)')}<sup>c</sup> ${M('= A')}<sup>c</sup> ${M('∩ B')}<sup>c</sup>. Lo que no está en ambos a la vez es lo que falta en A o falta en B: ${M('(A ∩ B)')}<sup>c</sup> ${M('= A')}<sup>c</sup> ${M('∪ B')}<sup>c</sup>.` }
    ],
    errores: [
      `Escribir los elementos repetidos o pensar que el orden cambia el conjunto. ${M('{1, 2, 2, 3}')} es el conjunto ${M('{1, 2, 3}')}, de cardinal 3. Lista cada elemento una sola vez.`,
      `Poner corchete cerrado junto a ${M('∞')}. Siempre se escribe ${M(']a, +∞[')}, nunca ${M('[a, +∞]')}.`,
      `Al calcular ${M('n(A ∪ B)')}, olvidar restar la intersección y obtener ${M('n(A) + n(B)')}. Antes de sumar pregúntate si los conjuntos tienen elementos comunes.`,
      `En los problemas de Venn, escribir el total de un conjunto (por ejemplo 35) en la región de "solo A". Ese total incluye la intersección; primero llena el centro y resta.`
    ],
    aplicacion: {
      titulo: 'Clubes de un instituto de Santa Ana',
      html: `<p>En un instituto de Santa Ana hay 240 estudiantes de bachillerato. El club de ciencias (C) tiene 150 miembros, el de arte (A) tiene 120 y 60 pertenecen a ambos. La dirección quiere saber cuántos estudiantes no están en ningún club para invitarlos a una actividad nueva.</p>
<ol>
<li>Datos: ${M('n(U) = 240')}, ${M('n(C) = 150')}, ${M('n(A) = 120')}, ${M('n(C ∩ A) = 60')}.</li>
<li>Estudiantes en al menos un club: ${M('n(C ∪ A) = 150 + 120 − 60 = 210')}.</li>
<li>Sin club: ${M('240 − 210 = 30')} estudiantes.</li>
<li>Solo ciencias: ${M('150 − 60 = 90')}; solo arte: ${M('120 − 60 = 60')}.</li>
</ol>
<p>Comprobación: ${M('90 + 60 + 60 + 30 = 240')}. La actividad nueva debe llegar a los 30 estudiantes sin club, que son el ${M('30/240 = 12.5')}% del total.</p>`
    },
    calc: 'conjuntos',
    examen: [
      { tipo: 'num', q: `Si ${M('n(A) = 25')}, ${M('n(B) = 18')} y ${M('n(A ∩ B) = 7')}, ¿cuánto vale ${M('n(A ∪ B)')}?`, r: 36, tol: 0.01, pasos: [`Fórmula: ${M('n(A ∪ B) = n(A) + n(B) − n(A ∩ B)')}.`, `Sustituye: ${M('25 + 18 − 7')}.`, `Resultado: 36.`] },
      { tipo: 'opt', q: `¿Cuál es el resultado de ${M(']−2, 5] ∩ [3, 9[')}?`, opciones: [`${M(']3, 5[')}`, `${M('[3, 5]')}`, `${M(']−2, 9[')}`, `${M('[3, 5[')}`], correcta: 1, pasos: [`La intersección empieza en 3: está en el segundo intervalo (cerrado) y dentro del primero, así que se incluye.`, `Termina en 5: está en el primero (cerrado) y dentro del segundo, así que se incluye.`, `Resultado: ${M('[3, 5]')}.`] },
      { tipo: 'num', q: `¿Cuántos subconjuntos tiene un conjunto de 6 elementos?`, r: 64, tol: 0.01, pasos: [`Un conjunto de n elementos tiene ${M('2ⁿ')} subconjuntos.`, `Con n = 6: ${M('2⁶ = 64')}.`] },
      { tipo: 'lista', q: `Escribe los elementos del conjunto de los enteros x con ${M('−3 < x ≤ 2')}, separados por comas.`, r: [-2, -1, 0, 1, 2], tol: 0.01, pasos: [`El −3 no se incluye porque la desigualdad es estricta.`, `El 2 sí se incluye.`, `Los enteros son −2, −1, 0, 1 y 2.`] },
      { tipo: 'num', q: `En un universo de 50 elementos, ${M('n(A) = 28')}, ${M('n(B) = 20')} y ${M('n(A ∩ B) = 8')}. ¿Cuántos elementos no están ni en A ni en B?`, r: 10, tol: 0.01, pasos: [`${M('n(A ∪ B) = 28 + 20 − 8 = 40')}.`, `Los que no están en ninguno: ${M('50 − 40 = 10')}.`] },
      { tipo: 'num', q: `En un grupo, ${M('n(A) = 20')}, ${M('n(B) = 15')}, ${M('n(C) = 10')}, ${M('n(A ∩ B) = 6')}, ${M('n(A ∩ C) = 4')}, ${M('n(B ∩ C) = 3')} y ${M('n(A ∩ B ∩ C) = 2')}. Halla ${M('n(A ∪ B ∪ C)')}.`, r: 34, tol: 0.01, pasos: [`Suma los tres cardinales: ${M('20 + 15 + 10 = 45')}.`, `Resta las intersecciones de a dos: ${M('45 − 6 − 4 − 3 = 32')}.`, `Suma la triple: ${M('32 + 2 = 34')}.`] },
      { tipo: 'opt', q: `Según las leyes de De Morgan, ${M('(A ∪ B)')}<sup>c</sup> es igual a:`, opciones: [`A<sup>c</sup> ${M('∪ B')}<sup>c</sup>`, `${M('A ∩ B')}`, `${M('(A ∩ B)')}<sup>c</sup>`, `A<sup>c</sup> ${M('∩ B')}<sup>c</sup>`], correcta: 3, pasos: [`Lo que no está en la unión es lo que no está en A y tampoco en B.`, `"Y" significa intersección: ${M('(A ∪ B)')}<sup>c</sup> ${M('= A')}<sup>c</sup> ${M('∩ B')}<sup>c</sup>.`, `Las otras opciones mezclan la unión o no complementan.`] },
      { tipo: 'lista', q: `Si ${M('A = [−1, 4[')} y ${M('B = ]2, 7]')}, escribe los dos extremos del intervalo ${M('A ∩ B')} (en cualquier orden).`, r: [2, 4], tol: 0.01, pasos: [`A llega hasta 4 (excluido) y B empieza en 2 (excluido).`, `La zona común es ${M(']2, 4[')}.`, `Los extremos son 2 y 4.`] },
      { tipo: 'num', q: `Si ${M('n(A ∪ B) = 50')}, ${M('n(B) = 32')} y ${M('n(A ∩ B) = 10')}, ¿cuánto vale ${M('n(A − B)')}?`, r: 18, tol: 0.01, pasos: [`Despeja ${M('n(A) = n(A ∪ B) − n(B) + n(A ∩ B) = 50 − 32 + 10 = 28')}.`, `${M('n(A − B) = n(A) − n(A ∩ B) = 28 − 10')}.`, `Resultado: 18. Otra vía: ${M('n(A ∪ B) − n(B) = 50 − 32 = 18')}.`] },
      { tipo: 'opt', q: `¿Cuál de las siguientes afirmaciones es verdadera?`, opciones: [`El conjunto vacío es subconjunto de todo conjunto.`, `${M('{0}')} es el conjunto vacío.`, `${M('A − B = B − A')} siempre.`, `Un conjunto de 3 elementos tiene 6 subconjuntos.`], correcta: 0, pasos: [`${M('{0}')} tiene un elemento, así que no es vacío.`, `La diferencia no es conmutativa en general, y 3 elementos dan ${M('2³ = 8')} subconjuntos, no 6.`, `Es verdadera: ${M('∅ ⊂ A')} para cualquier A, porque no tiene ningún elemento que falte en A.`] }
    ]
  };

  /* ===================================================== 1.20 ===================================================== */
  T['1.20'] = {
    id: '1.20',
    unidad: 7,
    titulo: 'Conteo: principios, factorial y permutaciones',
    resumen: 'Aprende a contar sin listar: principios de la suma y la multiplicación, factorial, permutaciones simples y con repetición.',
    objetivos: [
      'Aplicar los principios de la suma y de la multiplicación y representarlos con un diagrama de árbol.',
      'Calcular factoriales y simplificar cocientes de factoriales.',
      'Resolver problemas de permutaciones simples, con repetición y con restricciones.',
      'Distinguir cuándo el orden importa y cuándo se permite repetir elementos.'
    ],
    teoria: [
      {
        titulo: 'Para qué sirve contar',
        html: `<p>Las <strong>técnicas de conteo</strong> permiten saber cuántas formas hay de hacer algo sin escribirlas todas. Sirven para contar contraseñas, placas, filas, horarios y, más adelante, para calcular probabilidades.</p>
<p>Antes de contar, hazte tres preguntas:</p>
<ol>
<li>¿El <strong>orden</strong> importa? (la fila ABC es distinta de CBA)</li>
<li>¿Se pueden <strong>repetir</strong> elementos? (un PIN puede repetir dígitos; un podio no repite corredores)</li>
<li>¿Hago varias cosas <strong>seguidas</strong> (multiplicar) o elijo <strong>una de varias</strong> alternativas (sumar)?</li>
</ol>`
      },
      {
        titulo: 'Principio de la multiplicación y diagrama de árbol',
        html: `<p>Si una tarea se hace en pasos sucesivos y el paso 1 se puede hacer de ${M('m<sub>1</sub>')} maneras, el paso 2 de ${M('m<sub>2</sub>')} maneras, y así hasta el último, entonces el total de formas es:</p>
<p>${M('m<sub>1</sub> · m<sub>2</sub> · … · m<sub>k</sub>')}</p>
<p>Un <strong>diagrama de árbol</strong> lo muestra: de un punto inicial salen ramas por cada opción del primer paso; de cada rama salen nuevas ramas para el segundo paso, etc. Cada camino de la raíz a un extremo es un resultado. Contar los extremos equivale a multiplicar.</p>
<p>Ejemplo: elegir camisa (3 colores) y luego pantalón (2 colores) da un árbol con 3 ramas, cada una con 2 sub-ramas: ${M('3 · 2 = 6')} atuendos.</p>`
      },
      {
        titulo: 'Principio de la suma',
        html: `<p>Si una tarea se puede hacer eligiendo <strong>una</strong> entre varias alternativas que no pueden ocurrir a la vez, con ${M('m')} formas en la primera y ${M('n')} en la segunda, entonces hay ${M('m + n')} formas en total.</p>
<p><strong>Regla práctica:</strong> la palabra "y" (hago esto y luego aquello) multiplica; la palabra "o" (hago esto o aquello) suma. Las alternativas deben ser <em>excluyentes</em>: si hay casos que se repiten en ambas, hay que restar el traslape (como en la unión de conjuntos).</p>
<p>Los dos principios se combinan: primero separas en casos (suma) y dentro de cada caso cuentas con pasos (multiplicación).</p>`
      },
      {
        titulo: 'Factorial',
        html: `<p>El <strong>factorial</strong> de un entero ${M('n ≥ 1')} es el producto de todos los enteros de 1 a n:</p>
<p>${M('n! = n · (n − 1) · (n − 2) · … · 2 · 1')}</p>
<p>Por definición ${M('0! = 1')}. Algunos valores: ${M('1! = 1')}, ${M('2! = 2')}, ${M('3! = 6')}, ${M('4! = 24')}, ${M('5! = 120')}, ${M('6! = 720')}, ${M('7! = 5040')}.</p>
<p><strong>Propiedad útil:</strong> ${M('n! = n · (n − 1)!')}. Con ella simplificas cocientes sin calcular números enormes: ${M('8!/6! = (8 · 7 · 6!)/6! = 8 · 7 = 56')}.</p>
<p>Cuidado: el factorial no es lineal. ${M('(a + b)! ≠ a! + b!')} y ${M('(2n)! ≠ 2 · n!')}.</p>`
      },
      {
        titulo: 'Permutaciones simples',
        html: `<p>Una <strong>permutación</strong> es una forma de ordenar elementos distintos. Si tienes n elementos y los ordenas todos, hay ${M('n!')} maneras (n opciones para el primer lugar, ${M('n − 1')} para el segundo, etc.).</p>
<p>Si solo ordenas r de los n elementos (por ejemplo, el podio de 3 entre 8 corredores), el número de permutaciones es:</p>
<p>${M('P(n, r) = n!/(n − r)! = n · (n − 1) · … · (n − r + 1)')}</p>
<p>En muchos libros se escribe <sub>n</sub>P<sub>r</sub> en vez de ${M('P(n, r)')}; es lo mismo: son <em>r</em> factores que empiezan en n y bajan de uno en uno. Se usa cuando <strong>el orden importa</strong> y <strong>no se repite</strong> ningún elemento. Caso especial: ${M('P(n, n) = n!')}.</p>`
      },
      {
        titulo: 'Con repetición, con elementos repetidos y circulares',
        html: `<ul>
<li><strong>Arreglos con repetición permitida:</strong> elegir r elementos de n con orden y pudiendo repetirlos: ${M('n<sup>r</sup>')}. Ejemplo: un PIN de 4 dígitos tiene ${M('10⁴')} posibilidades.</li>
<li><strong>Permutaciones con elementos repetidos:</strong> si de n objetos hay ${M('n<sub>1</sub>')} iguales de un tipo, ${M('n<sub>2</sub>')} de otro, etc., el número de ordenamientos distintos es ${M('n!/(n<sub>1</sub>! · n<sub>2</sub>! · …)')}. Se divide para no contar como distintos los cambios entre objetos idénticos. Ejemplo: las letras de "PUPUSA" (P y U repetidas dos veces) dan ${M('6!/(2! · 2!) = 180')} ordenamientos.</li>
<li><strong>Permutaciones circulares:</strong> n personas alrededor de una mesa, donde solo importa quién está junto a quién (no dónde empieza la ronda): ${M('(n − 1)!')}.</li>
</ul>`
      },
      {
        titulo: 'Restricciones: elementos juntos, extremos y cifras',
        html: `<p>Cuando el enunciado pone condiciones, <strong>cuenta primero lo restringido</strong>:</p>
<ul>
<li><strong>Dos o más elementos que deben ir juntos:</strong> tómalos como un solo bloque, ordena los bloques y luego ordena el interior de cada bloque.</li>
<li><strong>Posiciones fijas o con condición</strong> (número par, primer dígito distinto de cero): llena primero la posición más restringida y luego las demás.</li>
<li><strong>Elementos que no pueden ir juntos:</strong> total menos los casos en que sí van juntos.</li>
<li><strong>Alternados:</strong> fija el patrón (H M H M …) y multiplica los ordenamientos de cada grupo.</li>
</ul>
<p>Prueba la calculadora de esta página para comprobar factoriales y permutaciones.</p>`
      }
    ],
    formulas: [
      { label: 'Principio de la multiplicación', html: 'm<sub>1</sub> · m<sub>2</sub> · … · m<sub>k</sub>' },
      { label: 'Principio de la suma', html: 'm + n' },
      { label: 'Factorial', html: 'n! = n · (n − 1) · … · 2 · 1,   0! = 1' },
      { label: 'Permutaciones simples', html: 'P(n, r) = n!/(n − r)!' },
      { label: 'Ordenar todos los elementos', html: 'P(n, n) = n!' },
      { label: 'Con repetición permitida', html: 'n<sup>r</sup>' },
      { label: 'Con elementos repetidos', html: 'n!/(n<sub>1</sub>! · n<sub>2</sub>! · … · n<sub>k</sub>!)' },
      { label: 'Permutaciones circulares', html: '(n − 1)!' }
    ],
    ejemplos: [
      {
        titulo: 'Principio de la multiplicación',
        enunciado: `Un estudiante tiene 3 camisas, 4 pantalones y 2 pares de zapatos para el uniforme de educación física. ¿De cuántas maneras distintas puede vestirse?`,
        pasos: [
          `Son tres decisiones sucesivas: camisa, pantalón y zapatos.`,
          `Camisa: 3 opciones. Pantalón: 4 opciones. Zapatos: 2 opciones.`,
          `Se multiplican: ${M('3 · 4 · 2 = 24')}.`
        ],
        respuesta: `24 maneras distintas.`
      },
      {
        titulo: 'Suma y multiplicación juntas',
        enunciado: `Para ir de San Salvador a Santa Ana hay 3 rutas de bus o 2 de microbús. Desde Santa Ana a Ahuachapán hay 4 opciones de transporte. (a) ¿Cuántas formas hay de ir de San Salvador a Santa Ana? (b) ¿Cuántas de ir de San Salvador a Ahuachapán pasando por Santa Ana?`,
        pasos: [
          `(a) Se elige bus o microbús, alternativas excluyentes: ${M('3 + 2 = 5')}.`,
          `(b) Primero se llega a Santa Ana (5 formas) y después se continúa (4 formas): son pasos sucesivos.`,
          `Se multiplica: ${M('5 · 4 = 20')}.`
        ],
        respuesta: `(a) 5 formas; (b) 20 formas.`
      },
      {
        titulo: 'Factorial y permutaciones simples',
        enunciado: `En una carrera participan 8 corredores. (a) ¿De cuántas formas pueden ocupar el podio (primero, segundo y tercer lugar)? (b) ¿De cuántas formas se pueden alinear 5 personas en fila?`,
        pasos: [
          `(a) El orden importa y no hay repeticiones: ${M('P(8, 3) = 8!/5!')}.`,
          `Simplifica: ${M('8!/5! = 8 · 7 · 6 = 336')}.`,
          `(b) Se ordenan todos: ${M('5! = 5 · 4 · 3 · 2 · 1 = 120')}.`
        ],
        respuesta: `(a) 336 podios; (b) 120 filas.`
      },
      {
        titulo: 'Contraseñas con y sin repetición',
        enunciado: `Un candado tiene un código de 4 dígitos (del 0 al 9). ¿Cuántos códigos hay si (a) se permiten dígitos repetidos? (b) no se permite repetir dígitos? (c) no se repiten y el primer dígito no es 0?`,
        pasos: [
          `(a) Cada una de las 4 posiciones tiene 10 opciones: ${M('10⁴ = 10 000')}.`,
          `(b) Sin repetir: ${M('P(10, 4) = 10 · 9 · 8 · 7 = 5040')}.`,
          `(c) Llena primero la posición restringida: el primer dígito tiene 9 opciones (1 a 9). Quedan 9 dígitos disponibles (incluyendo el 0) para la segunda posición, 8 para la tercera y 7 para la cuarta.`,
          `${M('9 · 9 · 8 · 7 = 4536')}.`
        ],
        respuesta: `(a) 10 000; (b) 5040; (c) 4536.`
      },
      {
        titulo: 'Permutaciones con elementos repetidos',
        enunciado: `¿Cuántas "palabras" distintas (con o sin sentido) se pueden formar con todas las letras de (a) SALVADOR y (b) PUPUSA?`,
        pasos: [
          `(a) SALVADOR tiene 8 letras y la A se repite 2 veces; las demás son distintas.`,
          `${M('8!/2! = 40 320/2 = 20 160')}.`,
          `(b) PUPUSA tiene 6 letras: P dos veces, U dos veces, S una vez, A una vez.`,
          `${M('6!/(2! · 2!) = 720/4 = 180')}.`
        ],
        respuesta: `(a) 20 160 palabras; (b) 180 palabras.`
      },
      {
        titulo: 'Restricciones: personas juntas y alternadas',
        enunciado: `Cuatro hombres y tres mujeres se sientan en una fila de 7 sillas. ¿De cuántas formas pueden sentarse (a) sin condiciones? (b) con las tres mujeres juntas? (c) alternados, hombre y mujer?`,
        pasos: [
          `(a) Se ordenan 7 personas: ${M('7! = 5040')}.`,
          `(b) Las 3 mujeres forman un bloque. Hay 4 hombres + 1 bloque = 5 "objetos": ${M('5! = 120')} órdenes. Dentro del bloque las mujeres se ordenan de ${M('3! = 6')} maneras. Total ${M('120 · 6 = 720')}.`,
          `(c) Con 4 hombres y 3 mujeres solo se puede alternar empezando y terminando con hombre: H M H M H M H.`,
          `Los hombres ocupan las 4 posiciones de hombre: ${M('4! = 24')}. Las mujeres ocupan las 3 posiciones de mujer: ${M('3! = 6')}. Total ${M('24 · 6 = 144')}.`
        ],
        respuesta: `(a) 5040; (b) 720; (c) 144.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Calcula: (a) ${M('6!')}; (b) ${M('7!/5!')}; (c) ${M('10!/(8! · 2!)')}.`,
        pasos: [
          `(a) ${M('6! = 6 · 5 · 4 · 3 · 2 · 1 = 720')}.`,
          `(b) ${M('7!/5! = (7 · 6 · 5!)/5! = 7 · 6 = 42')}.`,
          `(c) ${M('10!/(8! · 2!) = (10 · 9 · 8!)/(8! · 2) = 90/2 = 45')}.`
        ],
        respuesta: `(a) 720; (b) 42; (c) 45.`
      },
      {
        nivel: 'facil',
        enunciado: `Un restaurante ofrece 4 entradas, 5 platos fuertes y 3 postres. ¿Cuántos menús de tres tiempos (uno de cada tipo) se pueden armar?`,
        pasos: [
          `Son tres elecciones sucesivas, una de cada tipo.`,
          `Multiplica: ${M('4 · 5 · 3 = 60')}.`
        ],
        respuesta: `60 menús distintos.`
      },
      {
        nivel: 'facil',
        enunciado: `Calcula ${M('P(6, 2)')}.`,
        pasos: [
          `${M('P(6, 2) = 6!/(6 − 2)! = 6!/4!')}.`,
          `${M('6!/4! = 6 · 5 = 30')}.`
        ],
        respuesta: `30.`
      },
      {
        nivel: 'facil',
        enunciado: `¿Cuántos números de 3 cifras distintas se pueden formar con los dígitos 1, 2, 3, 4 y 5?`,
        pasos: [
          `El orden importa y no se repiten cifras: ${M('P(5, 3)')}.`,
          `${M('5 · 4 · 3 = 60')}.`
        ],
        respuesta: `60 números.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Una clave consta de 3 letras (de 26) seguidas de 2 dígitos (de 0 a 9), pudiendo repetir letras y dígitos. ¿Cuántas claves hay?`,
        pasos: [
          `Letras: ${M('26 · 26 · 26 = 26³ = 17 576')}.`,
          `Dígitos: ${M('10 · 10 = 10² = 100')}.`,
          `Se multiplican las dos partes: ${M('17 576 · 100 = 1 757 600')}.`
        ],
        respuesta: `1 757 600 claves.`
      },
      {
        nivel: 'intermedio',
        enunciado: `¿Cuántas ordenaciones distintas tienen las letras de la palabra MATEMATICA?`,
        pasos: [
          `Cuenta las letras: M(2), A(3), T(2), E(1), I(1), C(1); en total 10.`,
          `Fórmula: ${M('10!/(2! · 3! · 2!)')}.`,
          `${M('3 628 800/(2 · 6 · 2) = 3 628 800/24 = 151 200')}.`
        ],
        respuesta: `151 200 ordenaciones.`
      },
      {
        nivel: 'intermedio',
        enunciado: `En una banca de 4 asientos se van a sentar 4 de 7 personas. ¿De cuántas formas se pueden acomodar?`,
        pasos: [
          `El orden importa y no hay repeticiones: ${M('P(7, 4)')}.`,
          `${M('7 · 6 · 5 · 4 = 840')}.`
        ],
        respuesta: `840 formas.`
      },
      {
        nivel: 'intermedio',
        enunciado: `¿Cuántos números pares de 3 cifras distintas se pueden formar con los dígitos 1, 2, 3, 4, 5 y 6?`,
        pasos: [
          `Posición restringida: la última cifra debe ser par (2, 4 o 6): 3 opciones.`,
          `Quedan 5 dígitos para la primera cifra: 5 opciones; para la segunda quedan 4.`,
          `Total: ${M('3 · 5 · 4 = 60')}.`
        ],
        respuesta: `60 números.`
      },
      {
        nivel: 'dificil',
        enunciado: `¿Cuántos números de 4 cifras distintas mayores que 5000 se pueden formar con los dígitos del 0 al 9?`,
        pasos: [
          `Para que el número sea mayor que 5000 la primera cifra debe ser 5, 6, 7, 8 o 9: 5 opciones. (El 5000 mismo no cuenta porque repite cifras.)`,
          `Las otras tres cifras salen de los 9 dígitos restantes (ahora sí puede entrar el 0) sin repetir: ${M('9 · 8 · 7 = 504')}.`,
          `Total: ${M('5 · 504 = 2520')}.`
        ],
        respuesta: `2520 números.`
      },
      {
        nivel: 'dificil',
        enunciado: `Se acomodan en un estante 5 libros distintos: 3 de matemática y 2 de física. ¿De cuántas formas si (a) los 3 de matemática deben estar juntos? (b) los de matemática deben estar juntos y los de física también?`,
        pasos: [
          `(a) El bloque de matemática cuenta como un objeto; con los 2 libros de física son 3 objetos: ${M('3! = 6')} órdenes.`,
          `Dentro del bloque: ${M('3! = 6')}. Total ${M('6 · 6 = 36')}.`,
          `(b) Hay dos bloques: ${M('2! = 2')} órdenes de bloques.`,
          `Dentro de matemática ${M('3! = 6')} y dentro de física ${M('2! = 2')}: ${M('2 · 6 · 2 = 24')}.`
        ],
        respuesta: `(a) 36 formas; (b) 24 formas.`
      },
      {
        nivel: 'dificil',
        enunciado: `Seis personas se sientan alrededor de una mesa redonda. ¿De cuántas formas pueden hacerlo si (a) no hay condiciones? (b) dos de ellas, Ana y Luis, deben estar juntas?`,
        pasos: [
          `(a) Circular: ${M('(6 − 1)! = 5! = 120')}.`,
          `(b) Ana y Luis forman un bloque; ahora son 5 "objetos" en círculo: ${M('(5 − 1)! = 4! = 24')}.`,
          `Dentro del bloque se pueden intercambiar: ${M('2! = 2')}.`,
          `Total ${M('24 · 2 = 48')}.`
        ],
        respuesta: `(a) 120 formas; (b) 48 formas.`
      }
    ],
    teoricas: [
      { q: `¿Cómo decides entre sumar y multiplicar al contar?`, a: `Si haces pasos sucesivos (esto <em>y</em> luego aquello) multiplicas. Si eliges una alternativa entre varias que no ocurren a la vez (esto <em>o</em> aquello) sumas.` },
      { q: `¿Por qué ${M('0! = 1')}?`, a: `Es una definición que mantiene coherentes las fórmulas: hay exactamente una forma de ordenar cero objetos (no hacer nada). Además permite que ${M('P(n, n) = n!/0! = n!')} funcione.` },
      { q: `¿Qué diferencia hay entre ${M('P(n, r)')} y ${M('n<sup>r</sup>')}?`, a: `${M('P(n, r)')} cuenta ordenaciones sin repetir elementos (n, ${M('n − 1')}, ${M('n − 2')}, ...). ${M('n<sup>r</sup>')} cuenta ordenaciones donde cada posición puede repetir cualquiera de los n elementos.` },
      { q: `¿Por qué se divide entre factoriales cuando hay objetos repetidos?`, a: `Porque intercambiar dos objetos idénticos no produce un ordenamiento nuevo. Cada ordenamiento real se contó ${M('n<sub>1</sub>!')} veces por los objetos del primer tipo, ${M('n<sub>2</sub>!')} por los del segundo, etc.; dividir elimina esos conteos repetidos.` },
      { q: `¿Es ${M('(a + b)! = a! + b!')}? Muestra un ejemplo.`, a: `No. Con a = 2 y b = 3: ${M('(2 + 3)! = 120')}, pero ${M('2! + 3! = 2 + 6 = 8')}. El factorial no es lineal.` },
      { q: `¿Por qué en las permutaciones circulares se usa ${M('(n − 1)!')} y no ${M('n!')}?`, a: `Porque girar a todos un lugar produce la misma disposición alrededor de la mesa. Hay n giros equivalentes de cada disposición, así que ${M('n!/n = (n − 1)!')}.` },
      { q: `Para contar números de 4 cifras con restricciones, ¿por dónde conviene empezar?`, a: `Por la posición más restringida (por ejemplo, la primera cifra que no puede ser 0, o la última cifra que debe ser par). Así los pasos posteriores no dependen de casos.` },
      { q: `Explica la diferencia entre un podio de 3 corredores y una selección de 3 corredores.`, a: `En el podio el orden importa (oro, plata, bronce son distintos): se usa ${M('P(n, 3)')}. En una simple selección el orden no importa y se usarán combinaciones, que dan ${M('3! = 6')} veces menos resultados.` }
    ],
    errores: [
      `Sumar donde hay que multiplicar (o al revés). Si haces varias elecciones una tras otra, multiplica; sumar es solo para alternativas excluyentes.`,
      `Cancelar mal los factoriales, por ejemplo ${M('8!/6! = 8/6')}. Hay que expandir: ${M('8!/6! = 8 · 7 = 56')}.`,
      `Ignorar la restricción al contar cifras: permitir que el primer dígito sea 0 en un número de 4 cifras. Cuenta primero la posición con la condición.`,
      `Olvidar dividir entre los factoriales de las letras repetidas, o dividir de más cuando las letras son distintas. Cuenta cuántas veces aparece cada letra.`
    ],
    aplicacion: {
      titulo: 'Contraseñas y placas vehiculares',
      html: `<p>Supón que un municipio inventa una placa con 3 letras (de 26) seguidas de 3 dígitos (0 a 9), pudiendo repetir. ¿Cuántas placas se pueden emitir y cuánto tardaría alguien en probar todas si prueba una por segundo?</p>
<ol>
<li>Letras: ${M('26³ = 17 576')}.</li>
<li>Dígitos: ${M('10³ = 1000')}.</li>
<li>Placas posibles: ${M('17 576 · 1000 = 17 576 000')}.</li>
<li>Probándolas a una por segundo: ${M('17 576 000')} segundos, que son aproximadamente ${M('17 576 000/86 400 ≈ 203')} días.</li>
</ol>
<p>Compara con un PIN de 4 dígitos: tiene solo ${M('10⁴ = 10 000')} posibilidades y se prueba en menos de 3 horas a una por segundo. Por eso los bancos piden claves más largas y que mezclen letras y dígitos: el número de posibilidades crece de forma exponencial con la longitud.</p>`
    },
    calc: 'conteo',
    examen: [
      { tipo: 'num', q: `Calcula ${M('P(9, 3)')}.`, r: 504, tol: 0.01, pasos: [`${M('P(9, 3) = 9!/6!')}.`, `${M('9 · 8 · 7 = 504')}.`] },
      { tipo: 'opt', q: `¿De cuántas formas se pueden ordenar 5 personas en una fila?`, opciones: ['25', '120', '60', '24'], correcta: 1, pasos: [`Se ordenan todas, así que son ${M('5!')}.`, `${M('5! = 5 · 4 · 3 · 2 · 1 = 120')}.`, `El 25 sería ${M('5²')} (error común) y el 24 sería ${M('4!')}.`] },
      { tipo: 'num', q: `¿Cuántas ordenaciones distintas tienen las letras de la palabra BANANA?`, r: 60, tol: 0.01, pasos: [`BANANA tiene 6 letras: B(1), A(3), N(2).`, `${M('6!/(3! · 2!) = 720/12')}.`, `Resultado: 60.`] },
      { tipo: 'num', q: `Un joven tiene 5 camisetas, 4 pantalones y 3 gorras. ¿Cuántas combinaciones de camiseta, pantalón y gorra puede usar?`, r: 60, tol: 0.01, pasos: [`Son tres elecciones sucesivas.`, `${M('5 · 4 · 3 = 60')}.`] },
      { tipo: 'num', q: `Una clave tiene 2 letras (de 26) seguidas de 3 dígitos (0 a 9), con repetición permitida. ¿Cuántas claves hay?`, r: 676000, tol: 0.01, pasos: [`Letras: ${M('26² = 676')}.`, `Dígitos: ${M('10³ = 1000')}.`, `Total: ${M('676 · 1000 = 676 000')}.`] },
      { tipo: 'num', q: `Seis personas se forman en fila y Ana y Beto deben quedar juntos (en cualquier orden entre ellos). ¿De cuántas formas?`, r: 240, tol: 0.01, pasos: [`Ana y Beto forman un bloque: con las otras 4 personas hay 5 objetos, ${M('5! = 120')} órdenes.`, `Dentro del bloque se pueden intercambiar: ${M('2! = 2')}.`, `Total: ${M('120 · 2 = 240')}.`] },
      { tipo: 'opt', q: `Para ir a una fiesta puedes tomar 3 rutas de bus o 2 de taxi (alternativas excluyentes). ¿Cuántas formas hay de ir?`, opciones: ['6', '5', '9', '1'], correcta: 1, pasos: [`Se elige una alternativa o la otra, no ambas: se suma.`, `${M('3 + 2 = 5')}.`, `Multiplicar (6) sería correcto solo si hicieras ambos trayectos sucesivos.`] },
      { tipo: 'num', q: `Si ${M('P(n, 2) = 72')}, ¿cuánto vale n?`, r: 9, tol: 0.01, pasos: [`${M('P(n, 2) = n(n − 1) = 72')}.`, `${M('n² − n − 72 = 0')}, que factoriza como ${M('(n − 9)(n + 8) = 0')}.`, `Como n debe ser positivo, ${M('n = 9')}.`] },
      { tipo: 'opt', q: `¿Cuánto vale ${M('0!')}?`, opciones: ['0', 'No existe', '1', '−1'], correcta: 2, pasos: [`Por definición, ${M('0! = 1')}.`, `Hay una sola forma de ordenar cero objetos.`, `Esta definición hace que ${M('P(n, n) = n!/0! = n!')}.`] },
      { tipo: 'lista', q: `Calcula ${M('3!')}, ${M('4!')} y ${M('5!')} y escríbelos separados por comas.`, r: [6, 24, 120], tol: 0.01, pasos: [`${M('3! = 3 · 2 · 1 = 6')}.`, `${M('4! = 4 · 3! = 24')}.`, `${M('5! = 5 · 4! = 120')}.`] }
    ]
  };

  /* ===================================================== 1.21 ===================================================== */
  T['1.21'] = {
    id: '1.21',
    unidad: 7,
    titulo: 'Combinaciones',
    resumen: 'Cuenta selecciones donde el orden no importa: la fórmula de combinaciones, sus propiedades y comités con condiciones.',
    objetivos: [
      'Distinguir permutaciones de combinaciones según importe o no el orden.',
      'Calcular combinaciones con la fórmula y con sus propiedades de simetría.',
      'Resolver problemas de comités con condiciones, usando multiplicación, suma y complemento.',
      'Aplicar las combinaciones a contar manos de cartas, sorteos y figuras geométricas.'
    ],
    teoria: [
      {
        titulo: 'Qué es una combinación',
        html: `<p>Una <strong>combinación</strong> es una selección de elementos en la que <strong>el orden NO importa</strong>. Elegir a Ana, Beto y Carla para un comité es lo mismo que elegir a Carla, Ana y Beto: es un solo grupo.</p>
<p>Compara:</p>
<ul>
<li>Elegir presidente, secretario y tesorero entre 5 personas: el orden importa (cada cargo es distinto) → permutaciones.</li>
<li>Elegir un comité de 3 entre 5 personas: el orden no importa → combinaciones.</li>
</ul>
<p>Pregunta clave: <em>si cambio el orden de los elegidos, ¿obtengo algo distinto?</em> Si la respuesta es no, son combinaciones.</p>`
      },
      {
        titulo: 'La fórmula',
        html: `<p>El número de combinaciones de n elementos tomados de r en r es:</p>
<p>${M('C(n, r) = n!/(r! · (n − r)!)')}</p>
<p>También se escribe <sub>n</sub>C<sub>r</sub> y se lee "n sobre r". ¿De dónde sale? Si el orden importara, habría ${M('P(n, r)')} resultados; pero cada grupo de r elementos se ha contado ${M('r!')} veces (todos sus ordenamientos). Entonces:</p>
<p>${M('C(n, r) = P(n, r)/r!')}</p>
<p><strong>Procedimiento práctico:</strong> escribe r factores desde n hacia abajo en el numerador y ${M('r!')} en el denominador, y simplifica antes de multiplicar. Ejemplo: ${M('C(8, 3) = (8 · 7 · 6)/(3 · 2 · 1) = 56')}.</p>`
      },
      {
        titulo: 'Propiedades',
        html: `<ul>
<li><strong>Casos extremos:</strong> ${M('C(n, 0) = 1')} (hay una sola forma de no elegir nada), ${M('C(n, n) = 1')}, ${M('C(n, 1) = n')}.</li>
<li><strong>Simetría:</strong> ${M('C(n, r) = C(n, n − r)')}. Elegir los r que entran es lo mismo que elegir los ${M('n − r')} que se quedan fuera. Útil para simplificar: ${M('C(15, 13) = C(15, 2) = 105')}.</li>
<li><strong>Regla de Pascal:</strong> ${M('C(n, r) = C(n − 1, r − 1) + C(n − 1, r)')}. (Una persona concreta está en el comité o no lo está.)</li>
<li><strong>Total de subconjuntos:</strong> ${M('C(n, 0) + C(n, 1) + … + C(n, n) = 2ⁿ')}, que concuerda con lo visto en conjuntos.</li>
</ul>
<p>Estos números forman el <em>triángulo de Pascal</em>: cada número es la suma de los dos que tiene encima.</p>`
      },
      {
        titulo: 'Comités con condiciones',
        html: `<p>Cuando hay varios grupos (hombres y mujeres, matemáticos y físicos), se elige de cada grupo con combinaciones y se <strong>multiplican</strong> los resultados:</p>
<p>${M('C(6, 2) · C(5, 2)')} cuenta comités de 2 hombres (de 6) y 2 mujeres (de 5).</p>
<p>Si hay varios casos posibles (por ejemplo "2 de A y 3 de B" o "3 de A y 2 de B"), se calcula cada caso y se <strong>suman</strong>: son alternativas excluyentes.</p>
<p>La estructura es la del tema anterior: "y" multiplica, "o" suma. La diferencia es que ahora, dentro de cada grupo, el orden no importa.</p>`
      },
      {
        titulo: 'Al menos, a lo más y complemento',
        html: `<p>Las condiciones "al menos uno" suelen resolverse más rápido por <strong>complemento</strong>:</p>
<p>${M('al menos uno = total − ninguno')}</p>
<p>Ejemplo: de un grupo con 7 mujeres y 5 hombres se eligen 4 personas con al menos una mujer. Total: ${M('C(12, 4) = 495')}. Casos sin ninguna mujer (todos hombres): ${M('C(5, 4) = 5')}. Respuesta: ${M('495 − 5 = 490')}.</p>
<p>Si prefieres contar directo, tendrías que sumar los casos de 1, 2, 3 y 4 mujeres; el resultado es el mismo pero con más cálculos. "A lo más k" significa 0, 1, …, k: también conviene el complemento si k es grande.</p>
<p><strong>Personas obligadas o prohibidas:</strong> si una persona debe estar, ya está elegida y se eligen las restantes de las que quedan; si no puede estar, se quita del grupo. Si dos personas no pueden ir juntas, resta del total los comités donde sí van juntas.</p>`
      },
      {
        titulo: 'Otras aplicaciones: cartas, sorteos y geometría',
        html: `<ul>
<li><strong>Cartas:</strong> una mano de 5 cartas de una baraja de 52 es una combinación: ${M('C(52, 5) = 2 598 960')}.</li>
<li><strong>Sorteos y loterías:</strong> escoger k números de n sin importar el orden: ${M('C(n, k)')}.</li>
<li><strong>Segmentos y triángulos:</strong> con n puntos del plano sin tres alineados, cada pareja determina un segmento (${M('C(n, 2)')}) y cada trío un triángulo (${M('C(n, 3)')}).</li>
<li><strong>Diagonales de un polígono de n lados:</strong> se unen pares de vértices, pero los n lados no son diagonales: ${M('C(n, 2) − n')}.</li>
<li><strong>Apretones de mano o partidos:</strong> n personas que se saludan todas con todas: ${M('C(n, 2)')}.</li>
</ul>
<p>Usa la calculadora de esta página para comparar permutaciones y combinaciones con los mismos datos.</p>`
      }
    ],
    formulas: [
      { label: 'Combinaciones', html: 'C(n, r) = n!/(r! · (n − r)!)' },
      { label: 'Relación con permutaciones', html: 'C(n, r) = P(n, r)/r!' },
      { label: 'Simetría', html: 'C(n, r) = C(n, n − r)' },
      { label: 'Casos extremos', html: 'C(n, 0) = C(n, n) = 1,   C(n, 1) = n' },
      { label: 'Regla de Pascal', html: 'C(n, r) = C(n − 1, r − 1) + C(n − 1, r)' },
      { label: 'Suma de combinaciones', html: 'C(n, 0) + C(n, 1) + … + C(n, n) = 2ⁿ' },
      { label: 'Al menos uno', html: 'total − ninguno' }
    ],
    ejemplos: [
      {
        titulo: 'Un comité simple',
        enunciado: `En un grupo de 10 estudiantes se formará un comité de 3 personas, sin cargos distintos. ¿Cuántos comités son posibles?`,
        pasos: [
          `El orden no importa, así que es una combinación: ${M('C(10, 3)')}.`,
          `${M('C(10, 3) = (10 · 9 · 8)/(3 · 2 · 1)')}.`,
          `${M('720/6 = 120')}.`
        ],
        respuesta: `120 comités.`
      },
      {
        titulo: 'Partidos de un torneo',
        enunciado: `En un torneo participan 8 equipos de fútbol de Santa Ana y cada pareja de equipos juega un solo partido. ¿Cuántos partidos se juegan? Si se contara ida y vuelta, ¿cuántos serían?`,
        pasos: [
          `Cada partido es una pareja sin orden: ${M('C(8, 2)')}.`,
          `${M('C(8, 2) = (8 · 7)/2 = 28')}.`,
          `Con ida y vuelta se duplica: ${M('2 · 28 = 56')}, que es ${M('P(8, 2)')} (aquí el orden indica quién es local).`
        ],
        respuesta: `28 partidos; 56 con ida y vuelta.`
      },
      {
        titulo: 'Comité con composición exacta',
        enunciado: `Un club tiene 6 hombres y 5 mujeres. ¿Cuántos comités de 4 personas con exactamente 2 hombres y 2 mujeres se pueden formar?`,
        pasos: [
          `Hombres: ${M('C(6, 2) = (6 · 5)/2 = 15')}.`,
          `Mujeres: ${M('C(5, 2) = (5 · 4)/2 = 10')}.`,
          `Se eligen hombres y mujeres, así que se multiplica: ${M('15 · 10 = 150')}.`
        ],
        respuesta: `150 comités.`
      },
      {
        titulo: 'Al menos una por complemento',
        enunciado: `De un grupo de 12 estudiantes (7 chicas y 5 chicos) se escogen 4 para representar al instituto. ¿De cuántas formas si debe haber al menos una chica?`,
        pasos: [
          `Total sin condición: ${M('C(12, 4) = (12 · 11 · 10 · 9)/24 = 495')}.`,
          `Casos que no cumplen (cero chicas, es decir, 4 chicos): ${M('C(5, 4) = 5')}.`,
          `Por complemento: ${M('495 − 5 = 490')}.`
        ],
        respuesta: `490 formas.`
      },
      {
        titulo: 'Una rifa de números',
        enunciado: `En una rifa escolar cada boleto lleva 5 números distintos elegidos del 1 al 30, sin importar el orden. ¿Cuántos boletos distintos pueden existir? ¿Qué probabilidad tiene un boleto de ganar?`,
        pasos: [
          `${M('C(30, 5) = (30 · 29 · 28 · 27 · 26)/(5 · 4 · 3 · 2 · 1)')}.`,
          `Simplifica: ${M('30/(5 · 3 · 2) = 1')}, ${M('28/4 = 7')}: queda ${M('29 · 7 · 27 · 26 = 142 506')}.`,
          `Solo un boleto coincide con la combinación ganadora: probabilidad ${M('1/142 506')}, aproximadamente 0.0007 %.`
        ],
        respuesta: `142 506 boletos; la probabilidad de ganar es ${M('1/142 506')}.`
      },
      {
        titulo: 'Comité con varios casos',
        enunciado: `Se forma un comité de 5 personas entre 6 matemáticos y 4 físicos, con al menos 2 de cada especialidad. ¿Cuántos comités hay?`,
        pasos: [
          `Con 5 personas y mínimo 2 de cada una, las composiciones posibles son: (2 matemáticos, 3 físicos) o (3 matemáticos, 2 físicos). Con 4 matemáticos habría solo 1 físico, y con 1 matemático habría 4 físicos: no cumplen.`,
          `Caso A: ${M('C(6, 2) · C(4, 3) = 15 · 4 = 60')}.`,
          `Caso B: ${M('C(6, 3) · C(4, 2) = 20 · 6 = 120')}.`,
          `Los casos son excluyentes: se suman. ${M('60 + 120 = 180')}.`
        ],
        respuesta: `180 comités.`
      }
    ],
    ejercicios: [
      {
        nivel: 'facil',
        enunciado: `Calcula: (a) ${M('C(7, 2)')}; (b) ${M('C(9, 0)')}; (c) ${M('C(6, 6)')}; (d) ${M('C(10, 8)')}.`,
        pasos: [
          `(a) ${M('C(7, 2) = (7 · 6)/2 = 21')}.`,
          `(b) ${M('C(9, 0) = 1')}.`,
          `(c) ${M('C(6, 6) = 1')}.`,
          `(d) Por simetría ${M('C(10, 8) = C(10, 2) = (10 · 9)/2 = 45')}.`
        ],
        respuesta: `(a) 21; (b) 1; (c) 1; (d) 45.`
      },
      {
        nivel: 'facil',
        enunciado: `¿De cuántas maneras se pueden elegir 3 frutas distintas entre 5 (mango, jocote, nance, marañón y papaya) para una ensalada?`,
        pasos: [
          `El orden no importa en una ensalada: ${M('C(5, 3)')}.`,
          `${M('C(5, 3) = C(5, 2) = (5 · 4)/2 = 10')}.`
        ],
        respuesta: `10 ensaladas.`
      },
      {
        nivel: 'facil',
        enunciado: `Un equipo tiene 12 jugadores. ¿Cuántos quintetos iniciales distintos se pueden formar?`,
        pasos: [
          `No importa el orden de los 5 elegidos: ${M('C(12, 5)')}.`,
          `${M('(12 · 11 · 10 · 9 · 8)/(5 · 4 · 3 · 2 · 1) = 95 040/120')}.`,
          `${M('95 040/120 = 792')}.`
        ],
        respuesta: `792 quintetos.`
      },
      {
        nivel: 'facil',
        enunciado: `Una pizzería ofrece 8 ingredientes. ¿Cuántas pizzas distintas de 3 ingredientes se pueden pedir?`,
        pasos: [
          `Elegir ingredientes no depende del orden: ${M('C(8, 3)')}.`,
          `${M('(8 · 7 · 6)/6 = 56')}.`
        ],
        respuesta: `56 pizzas.`
      },
      {
        nivel: 'intermedio',
        enunciado: `¿Cuántas manos de 5 cartas se pueden repartir de una baraja de 52 cartas?`,
        pasos: [
          `El orden en que llegan las cartas no importa: ${M('C(52, 5)')}.`,
          `${M('C(52, 5) = (52 · 51 · 50 · 49 · 48)/(5 · 4 · 3 · 2 · 1)')}.`,
          `Numerador ${M('311 875 200')}; denominador 120.`,
          `${M('311 875 200/120 = 2 598 960')}.`
        ],
        respuesta: `2 598 960 manos.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Si ${M('C(n, 2) = 45')}, halla n.`,
        pasos: [
          `${M('C(n, 2) = n(n − 1)/2 = 45')}, luego ${M('n(n − 1) = 90')}.`,
          `${M('n² − n − 90 = 0')}, que factoriza como ${M('(n − 10)(n + 9) = 0')}.`,
          `Como n es positivo, ${M('n = 10')}. Comprobación: ${M('C(10, 2) = 45')}.`
        ],
        respuesta: `${M('n = 10')}.`
      },
      {
        nivel: 'intermedio',
        enunciado: `De 7 hombres y 4 mujeres se forma un comité de 3 personas. ¿Cuántos comités tienen (a) exactamente una mujer? (b) al menos una mujer?`,
        pasos: [
          `(a) Una mujer y dos hombres: ${M('C(4, 1) · C(7, 2) = 4 · 21 = 84')}.`,
          `(b) Total: ${M('C(11, 3) = 165')}. Sin mujeres: ${M('C(7, 3) = 35')}.`,
          `Al menos una: ${M('165 − 35 = 130')}.`
        ],
        respuesta: `(a) 84 comités; (b) 130 comités.`
      },
      {
        nivel: 'intermedio',
        enunciado: `Hay 10 puntos en un plano y no hay tres alineados. ¿Cuántos segmentos y cuántos triángulos se pueden formar con ellos como vértices?`,
        pasos: [
          `Cada segmento queda determinado por 2 puntos: ${M('C(10, 2) = 45')}.`,
          `Cada triángulo, por 3 puntos (que nunca están alineados): ${M('C(10, 3) = (10 · 9 · 8)/6 = 120')}.`
        ],
        respuesta: `45 segmentos y 120 triángulos.`
      },
      {
        nivel: 'dificil',
        enunciado: `Se forma un comité de 4 personas entre 10 candidatos. Ana y Beto no pueden estar juntos en el comité. ¿Cuántos comités son posibles?`,
        pasos: [
          `Total sin restricción: ${M('C(10, 4) = 210')}.`,
          `Comités donde sí están Ana y Beto: ya están elegidos; faltan 2 de los otros 8: ${M('C(8, 2) = 28')}.`,
          `Comités válidos: ${M('210 − 28 = 182')}.`
        ],
        respuesta: `182 comités.`
      },
      {
        nivel: 'dificil',
        enunciado: `¿Cuántas manos de 5 cartas de una baraja de 52 contienen exactamente 2 corazones? (Hay 13 corazones y 39 cartas de otros palos).`,
        pasos: [
          `Elige 2 corazones de 13: ${M('C(13, 2) = 78')}.`,
          `Elige las otras 3 cartas entre las 39 que no son corazones: ${M('C(39, 3) = (39 · 38 · 37)/6 = 9139')}.`,
          `Se multiplican: ${M('78 · 9139 = 712 842')}.`
        ],
        respuesta: `712 842 manos.`
      },
      {
        nivel: 'dificil',
        enunciado: `¿Cuántas diagonales tiene un polígono de 12 lados?`,
        pasos: [
          `Cada pareja de vértices determina un segmento: ${M('C(12, 2) = 66')}.`,
          `De esos 66 segmentos, 12 son lados del polígono, no diagonales.`,
          `Diagonales: ${M('66 − 12 = 54')}.`
        ],
        respuesta: `54 diagonales.`
      }
    ],
    teoricas: [
      { q: `¿Cómo sabes si un problema usa permutaciones o combinaciones?`, a: `Pregúntate si al cambiar el orden de los elegidos obtienes una situación distinta. Si sí (cargos, podio, números), son permutaciones; si no (comité, mano de cartas, grupo), son combinaciones.` },
      { q: `¿Por qué ${M('C(n, r) = P(n, r)/r!')}?`, a: `Porque ${M('P(n, r)')} cuenta cada grupo de r elementos tantas veces como formas hay de ordenarlo, es decir ${M('r!')}. Dividir entre ${M('r!')} deja un conteo por grupo.` },
      { q: `Explica por qué ${M('C(n, r) = C(n, n − r)')}.`, a: `Elegir los r elementos que entran en el grupo determina exactamente cuáles ${M('n − r')} se quedan fuera, y viceversa. Hay la misma cantidad de ambas elecciones.` },
      { q: `¿Cuánto valen ${M('C(n, 0)')} y ${M('C(n, n)')}, y por qué?`, a: `Ambos valen 1. Hay una sola manera de no elegir nada (el grupo vacío) y una sola de elegirlo todo.` },
      { q: `Al contar comités de "2 hombres y 2 mujeres", ¿por qué se multiplican las combinaciones?`, a: `Porque se hacen dos elecciones sucesivas e independientes (los hombres y las mujeres): cada comité de hombres se puede combinar con cada comité de mujeres, y eso es el principio de la multiplicación.` },
      { q: `¿Cuándo conviene el método del complemento?`, a: `En condiciones como "al menos uno": es más corto restar al total los casos que no cumplen (ninguno) que sumar muchos casos que sí cumplen.` },
      { q: `¿Cuántos apretones de mano hay si 6 personas se saludan todas entre sí una vez?`, a: `Cada apretón es una pareja sin orden: ${M('C(6, 2) = 15')}. Es un error pensar ${M('6 · 5 = 30')}, porque eso cuenta cada apretón dos veces.` },
      { q: `¿Qué relación hay entre la suma de todas las combinaciones de n y el número de subconjuntos?`, a: `${M('C(n, 0) + C(n, 1) + … + C(n, n) = 2ⁿ')}: cada término cuenta los subconjuntos con k elementos, y juntos son todos los subconjuntos de un conjunto de n elementos.` }
    ],
    errores: [
      `Usar permutaciones cuando el orden no importa. Si calculas ${M('P(10, 3) = 720')} para un comité de 3, cada comité queda contado 6 veces; la respuesta correcta es ${M('C(10, 3) = 120')}.`,
      `Olvidar dividir entre ${M('r!')} o dividir entre ${M('n!')} por error. Revisa que el denominador sea ${M('r! · (n − r)!')}.`,
      `Sumar en lugar de multiplicar las elecciones de grupos distintos (${M('C(6, 2) + C(5, 2)')} en vez de ${M('C(6, 2) · C(5, 2)')}). Si eliges de ambos grupos a la vez, multiplica.`,
      `Contar el mismo comité dos veces al resolver "al menos" sumando casos que se traslapan. Usa casos excluyentes o el complemento.`
    ],
    aplicacion: {
      titulo: 'Selección de brigada de gestión de riesgos',
      html: `<p>En una comunidad cerca del volcán de San Miguel se forma una brigada de 5 personas para el plan de emergencia. Se postularon 8 adultos y 6 jóvenes, y el reglamento pide <strong>al menos 2 jóvenes</strong>. ¿Cuántas brigadas son posibles?</p>
<ol>
<li>Total sin restricción: ${M('C(14, 5) = 2002')}.</li>
<li>No cumplen: 0 jóvenes (${M('C(8, 5) = 56')}) o 1 joven (${M('C(6, 1) · C(8, 4) = 6 · 70 = 420')}).</li>
<li>Brigadas válidas: ${M('2002 − 56 − 420 = 1526')}.</li>
</ol>
<p>Comprobación contando directo: 2 jóvenes ${M('C(6, 2) · C(8, 3) = 15 · 56 = 840')}; 3 jóvenes ${M('C(6, 3) · C(8, 2) = 20 · 28 = 560')}; 4 jóvenes ${M('C(6, 4) · C(8, 1) = 15 · 8 = 120')}; 5 jóvenes ${M('C(6, 5) = 6')}. Suma: ${M('840 + 560 + 120 + 6 = 1526')}.</p>`
    },
    calc: 'combinaciones',
    examen: [
      { tipo: 'num', q: `Calcula ${M('C(8, 3)')}.`, r: 56, tol: 0.01, pasos: [`${M('C(8, 3) = (8 · 7 · 6)/(3 · 2 · 1)')}.`, `${M('336/6 = 56')}.`] },
      { tipo: 'opt', q: `Se eligen 2 delegados iguales (sin cargos) entre 5 personas. ¿Cuántas elecciones hay?`, opciones: ['20', '25', '5', '10'], correcta: 3, pasos: [`No hay cargos, así que el orden no importa: ${M('C(5, 2)')}.`, `${M('C(5, 2) = (5 · 4)/2 = 10')}.`, `El 20 sería ${M('P(5, 2)')}, que cuenta cada pareja dos veces.`] },
      { tipo: 'num', q: `Calcula ${M('C(15, 13)')}.`, r: 105, tol: 0.01, pasos: [`Simetría: ${M('C(15, 13) = C(15, 2)')}.`, `${M('(15 · 14)/2 = 105')}.`] },
      { tipo: 'num', q: `De 5 hombres y 4 mujeres se forma un comité de 3 con exactamente 2 hombres y 1 mujer. ¿Cuántos hay?`, r: 40, tol: 0.01, pasos: [`Hombres: ${M('C(5, 2) = 10')}.`, `Mujeres: ${M('C(4, 1) = 4')}.`, `Se multiplican: ${M('10 · 4 = 40')}.`] },
      { tipo: 'num', q: `De 10 estudiantes (6 chicos y 4 chicas) se eligen 4. ¿De cuántas formas hay al menos una chica?`, r: 195, tol: 0.01, pasos: [`Total: ${M('C(10, 4) = 210')}.`, `Sin chicas: ${M('C(6, 4) = 15')}.`, `Al menos una: ${M('210 − 15 = 195')}.`] },
      { tipo: 'num', q: `Si ${M('C(n, 2) = 36')}, ¿cuánto vale n?`, r: 9, tol: 0.01, pasos: [`${M('n(n − 1)/2 = 36')}, luego ${M('n(n − 1) = 72')}.`, `${M('n² − n − 72 = 0')} se factoriza como ${M('(n − 9)(n + 8) = 0')}.`, `La solución positiva es ${M('n = 9')}.`] },
      { tipo: 'opt', q: `¿Cuál expresión es igual a ${M('C(12, 9)')}?`, opciones: [`${M('C(12, 4)')}`, `${M('C(9, 3)')}`, `${M('C(12, 6)')}`, `${M('C(12, 3)')}`], correcta: 3, pasos: [`Propiedad de simetría: ${M('C(n, r) = C(n, n − r)')}.`, `${M('C(12, 9) = C(12, 12 − 9) = C(12, 3)')}.`, `Ambos valen 220.`] },
      { tipo: 'lista', q: `Calcula ${M('C(6, 0)')}, ${M('C(6, 1)')} y ${M('C(6, 2)')} y escríbelos separados por comas.`, r: [1, 6, 15], tol: 0.01, pasos: [`${M('C(6, 0) = 1')}.`, `${M('C(6, 1) = 6')}.`, `${M('C(6, 2) = (6 · 5)/2 = 15')}.`] },
      { tipo: 'opt', q: `¿En cuál de las situaciones se usan combinaciones y no permutaciones?`, opciones: [`Asignar oro, plata y bronce a 3 de 8 atletas.`, `Formar números de 3 cifras distintas.`, `Elegir 3 representantes iguales entre 8 estudiantes.`, `Sentar a 3 de 8 personas en una banca.`], correcta: 2, pasos: [`En el podio, los números y las bancas el orden produce resultados distintos.`, `En elegir representantes iguales, el grupo {A, B, C} es el mismo en cualquier orden.`, `Por tanto la tercera opción es una combinación: ${M('C(8, 3) = 56')}.`] },
      { tipo: 'num', q: `¿Cuántas diagonales tiene un octágono (polígono de 8 lados)?`, r: 20, tol: 0.01, pasos: [`Segmentos entre vértices: ${M('C(8, 2) = 28')}.`, `Restamos los 8 lados.`, `${M('28 − 8 = 20')}.`] }
    ]
  };
})();

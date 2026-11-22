/* pizarra-2a-2.js — Métodos en pizarra, 2.º año, temas 1.2 a 1.5 */
window.PIZARRA_2A = window.PIZARRA_2A || {};
(function (PZ) {
  var P = window.PIZARRA_2A;
  var COL = { w: '#f4f6ef', y: '#ffe27a', p: '#ff9fc4', b: '#8fd0ff', g: '#9af0b0', r: '#ff8a80' };

  /* ---- plano cartesiano de tiza (SVG). o: {W,H,ox,oy,s,x0,x1,y0,y1,build(X,Y,h)} ---- */
  function plano(o) {
    var X = function (x) { return +(o.ox + o.s * x).toFixed(1); }, Y = function (y) { return +(o.oy - o.s * y).toFixed(1); };
    var h = '<svg viewBox="0 0 ' + o.W + ' ' + o.H + '" role="img" aria-label="' + (o.alt || 'Plano cartesiano') + '" style="width:min(100%,' + (o.maxw || 360) + 'px);height:auto;display:block;margin:.5rem auto;font-family:\'Patrick Hand\',\'Segoe Print\',cursive">';
    h += '<g stroke="' + COL.w + '" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="' + X(o.x0) + '" y1="' + Y(0) + '" x2="' + X(o.x1) + '" y2="' + Y(0) + '"/><line x1="' + X(0) + '" y1="' + Y(o.y0) + '" x2="' + X(0) + '" y2="' + Y(o.y1) + '"/>' +
      '<path d="M' + (X(o.x1) - 7) + ' ' + (Y(0) - 4) + 'L' + X(o.x1) + ' ' + Y(0) + 'L' + (X(o.x1) - 7) + ' ' + (Y(0) + 4) + '"/>' +
      '<path d="M' + (X(0) - 4) + ' ' + (Y(o.y1) + 7) + 'L' + X(0) + ' ' + Y(o.y1) + 'L' + (X(0) + 4) + ' ' + (Y(o.y1) + 7) + '"/></g>';
    h += '<g stroke="' + COL.w + '" stroke-opacity=".35" stroke-width="1" stroke-dasharray="2 5">';
    var i;
    for (i = Math.ceil(o.x0); i <= Math.floor(o.x1 - 1); i++) if (i) h += '<line x1="' + X(i) + '" y1="' + Y(o.y0) + '" x2="' + X(i) + '" y2="' + Y(o.y1 - 0.6) + '"/>';
    for (i = Math.ceil(o.y0); i <= Math.floor(o.y1 - 1); i++) if (i) h += '<line x1="' + X(o.x0) + '" y1="' + Y(i) + '" x2="' + X(o.x1 - 0.6) + '" y2="' + Y(i) + '"/>';
    h += '</g><g fill="' + COL.w + '" font-size="13" text-anchor="middle">';
    for (i = Math.ceil(o.x0); i <= Math.floor(o.x1 - 1); i++) if (i && (!o.step || i % o.step === 0)) h += '<text x="' + X(i) + '" y="' + (Y(0) + 15) + '">' + String(i).replace('-', '−') + '</text>';
    for (i = Math.ceil(o.y0); i <= Math.floor(o.y1 - 1); i++) if (i && (!o.step || i % o.step === 0)) h += '<text x="' + (X(0) - 9) + '" y="' + (Y(i) + 4) + '" text-anchor="end">' + String(i).replace('-', '−') + '</text>';
    h += '<text x="' + (X(o.x1) - 2) + '" y="' + (Y(0) - 9) + '" font-size="16" font-style="italic">x</text><text x="' + (X(0) + 11) + '" y="' + (Y(o.y1) + 10) + '" font-size="16" font-style="italic">y</text></g>';
    h += o.build(X, Y);
    return h + '</svg>';
  }
  function linea(X, Y, xa, ya, xb, yb, col, w) { return '<line x1="' + X(xa) + '" y1="' + Y(ya) + '" x2="' + X(xb) + '" y2="' + Y(yb) + '" stroke="' + COL[col] + '" stroke-width="' + (w || 2.8) + '" stroke-linecap="round"/>'; }
  function punto(X, Y, x, y, col, lab, dx, dy) {
    return '<circle cx="' + X(x) + '" cy="' + Y(y) + '" r="5" fill="' + COL[col] + '"/>' + (lab ? '<text x="' + (X(x) + (dx || 8)) + '" y="' + (Y(y) + (dy || -8)) + '" font-size="15" fill="' + COL[col] + '">' + lab + '</text>' : '');
  }
  function curva(X, Y, f, xa, xb, col) {
    var d = '', n = 60, k, x;
    for (k = 0; k <= n; k++) { x = xa + (xb - xa) * k / n; d += (k ? 'L' : 'M') + X(x) + ' ' + Y(f(x)); }
    return '<path d="' + d + '" fill="none" stroke="' + COL[col] + '" stroke-width="2.8" stroke-linecap="round"/>';
  }
  function etq(X, Y, x, y, txt, col) { return '<text x="' + X(x) + '" y="' + Y(y) + '" font-size="15" fill="' + COL[col] + '">' + txt + '</text>'; }
  var c = PZ.c, row = PZ.row, f = PZ.f, sp = ' &nbsp; ', ar = ' &nbsp;⇒&nbsp; ';

  /* ============================ 1.2 ECUACIONES RADICALES ============================ */
  P['1.2'] = [
    {
      titulo: 'Un radical y una solución extraña',
      intro: 'Resolver √(x + 7) = x + 1: aislar, elevar al cuadrado y comprobar.',
      pasos: [
        { nota: 'La incógnita está dentro de una raíz. Para sacarla necesitamos la operación contraria: elevar al cuadrado. Aquí la raíz ya está sola a la izquierda.', html: row('√(x + 7) = x + 1') },
        { nota: 'Elevamos al cuadrado los <b>dos lados completos</b>, como si lo hiciéramos con una balanza: lo que haces a un lado lo haces al otro. La raíz y el cuadrado se anulan.', html: PZ.ambos('( )²', 'y') + row('(√(x + 7))² = (x + 1)²', '', 'y') },
        { nota: 'A la izquierda quedó solo x + 7. A la derecha cuidado: (x + 1)² NO es x² + 1. Es un binomio al cuadrado: x² + 2·x·1 + 1.', html: row('x + 7 = ' + c('p', 'x² + 2x + 1'), 'binomio al cuadrado', 'p') },
        { nota: 'Pasamos todo a un lado para que quede igual a cero: restamos x y restamos 7 a los dos lados.', html: PZ.ambos('− x − 7', 'g') + row('0 = x² + x − 6') },
        { nota: 'Es una ecuación de segundo grado. Se factoriza buscando dos números que multipliquen −6 y sumen 1: son 3 y −2.', html: row('(x + 3)(x − 2) = 0') + row(c('y', 'x = −3') + sp + 'ó' + sp + c('g', 'x = 2'), 'dos candidatos', 'w') },
        { nota: '<b>Todavía no hemos terminado.</b> Al elevar al cuadrado se pueden colar soluciones falsas. Probamos cada candidato en la ecuación ORIGINAL. Empezamos con x = 2.', html: row(c('g', 'x = 2') + ':  √(2 + 7) = 2 + 1', 'probamos', 'g') + row('√9 = 3' + sp + '3 = 3 ✓', '', 'g') },
        { nota: 'Ahora x = −3. Mira: la raíz da +2 pero el otro lado da −2. Una raíz nunca es negativa, así que esta solución es falsa (extraña).', html: row(c('y', 'x = −3') + ':  √(−3 + 7) = −3 + 1', 'probamos', 'y') + row('√4 = −2' + sp + PZ.tach('2 = −2'), 'no sirve', 'r') },
        { nota: 'Nos quedamos solo con la que pasó la prueba. Por eso siempre se comprueba.', html: PZ.say(PZ.box('x = 2'), 'g') + PZ.say('(x = −3 es extraña, se descarta)', 'r') }
      ]
    },
    {
      titulo: 'Con coeficiente y número sumando',
      intro: 'Resolver 2√(x + 3) − 4 = 6: primero se aísla la raíz, después se eleva.',
      pasos: [
        { nota: 'Antes de elevar al cuadrado, la raíz tiene que quedar <b>sola</b>. Ahora tiene un 2 pegado y un −4 al lado.', html: row('2√(x + 3) − 4 = 6') },
        { nota: 'Primero quitamos el −4: sumamos 4 a los dos lados.', html: PZ.ambos('+ 4', 'y') + row('2√(x + 3) = 10', 'queda con el 2 pegado', 'y') },
        { nota: 'Ahora quitamos el 2 que multiplica: dividimos los dos lados entre 2. La raíz ya está sola.', html: PZ.ambos('÷ 2', 'p') + row(c('g', '√(x + 3)') + ' = 5', 'raíz sola', 'g') },
        { nota: 'Recién ahora elevamos al cuadrado los dos lados. 5² = 25.', html: PZ.ambos('( )²', 'b') + row('x + 3 = 25') },
        { nota: 'Restamos 3 a los dos lados y despejamos x.', html: PZ.ambos('− 3', 'y') + row(c('g', 'x = 22')) },
        { nota: 'Comprobamos en la ecuación original: √25 = 5, luego 2·5 − 4 = 6 ✓. Sí funciona.', html: row('2√(22 + 3) − 4 = 2 · 5 − 4 = 6 ✓', 'comprobación', 'g') + PZ.say(PZ.box('x = 22'), 'g') }
      ]
    },
    {
      titulo: 'Dos radicales',
      intro: 'Resolver √(x + 5) = 5 − √x. Hay que elevar dos veces.',
      pasos: [
        { nota: 'Hay dos raíces. No se pueden quitar las dos a la vez. Dejamos una raíz de cada lado (ya está así) y elevamos.', html: row('√(x + 5) = 5 − √x') },
        { nota: 'Elevamos al cuadrado todo. Derecha: (5 − √x)² = 25 − 2·5·√x + x. Aparece un término con raíz que no se fue.', html: PZ.ambos('( )²', 'y') + row('x + 5 = 25 − ' + c('p', '10√x') + ' + x') },
        { nota: 'Qué bueno: la x aparece a los dos lados y se cancela. Restamos x a los dos lados.', html: PZ.ambos('− x', 'g') + row(PZ.tach('x') + ' + 5 = 25 − 10√x + ' + PZ.tach('x')) + row('5 = 25 − 10√x') },
        { nota: 'Ahora aislamos la raíz que quedó. Restamos 25 y luego dividimos entre −10.', html: PZ.ambos('− 25', 'y') + row('−20 = −10√x') + PZ.ambos('÷ (−10)', 'p') + row(c('g', '2 = √x')) },
        { nota: 'Elevamos otra vez al cuadrado: el 2 se vuelve 4.', html: PZ.ambos('( )²', 'b') + row(c('g', 'x = 4')) },
        { nota: 'Comprobamos en la original: √(4 + 5) = 3 y 5 − √4 = 5 − 2 = 3. Son iguales ✓.', html: row('√9 = 3' + sp + '5 − √4 = 3' + sp + '✓', 'comprobación', 'g') + PZ.say(PZ.box('x = 4'), 'g') }
      ]
    }
  ];

  /* ============================ 1.3 SISTEMAS LINEAL-CUADRÁTICO ============================ */
  P['1.3'] = [
    {
      titulo: 'Recta y parábola por sustitución',
      intro: 'Resolver y = x + 2 con y = x² − 4: buscamos los puntos donde se cruzan.',
      pasos: [
        { nota: 'Tenemos una recta y una parábola. Una solución es un punto (x, y) que cumple las dos ecuaciones a la vez.', html: PZ.say(PZ.llave(['y = x + 2', 'y = x² − 4'])) },
        { nota: 'Como las dos "y" valen lo mismo, igualamos lo que está al otro lado. Es sustituir la recta dentro de la parábola.', html: PZ.flecha('sustituir', 'y') + row('x + 2 = x² − 4') },
        { nota: 'Pasamos todo a un lado para que quede igual a cero: restamos x y restamos 2 a los dos lados.', html: PZ.ambos('− x − 2', 'g') + row('0 = x² − x − 6') },
        { nota: 'Factorizamos: dos números que multipliquen −6 y sumen −1: −3 y 2.', html: row('(x − 3)(x + 2) = 0') + row(c('y', 'x = 3') + sp + 'ó' + sp + c('p', 'x = −2'), 'valores de x', 'w') },
        { nota: '<b>Ojo:</b> aún faltan las y. Cada x se mete en la ecuación de la RECTA (la más fácil) para hallar su pareja.', html: row(c('y', 'x = 3') + ':  y = 3 + 2 = ' + c('y', '5'), 'en la recta', 'y') + row(c('p', 'x = −2') + ':  y = −2 + 2 = ' + c('p', '0'), 'en la recta', 'p') },
        { nota: 'Comprobamos uno en la parábola: x = 3 → 9 − 4 = 5 ✓ y x = −2 → 4 − 4 = 0 ✓.', html: PZ.say('Soluciones (puntos de cruce):') + PZ.say(PZ.box(c('y', '(3, 5)') + ' &nbsp; y &nbsp; ' + c('p', '(−2, 0)')), 'g') },
        {
          nota: 'En el dibujo se ve: la recta corta a la parábola en dos puntos. Dos soluciones, dos cruces.', html: plano({
            W: 340, H: 250, ox: 130, oy: 150, s: 26, x0: -4.6, x1: 5.3, y0: -4.5, y1: 6.2, alt: 'Recta y parábola que se cortan en dos puntos',
            build: function (X, Y) {
              return curva(X, Y, function (x) { return x * x - 4; }, -3.1, 3.1, 'b') + linea(X, Y, -3.2, -1.2, 3.4, 5.4, 'y') + punto(X, Y, 3, 5, 'g', '(3, 5)', -62, -2) + punto(X, Y, -2, 0, 'p', '(−2, 0)', -64, -8) + etq(X, Y, 3.4, 5.3, 'y = x² − 4', 'b').replace('x="' + X(3.4), 'x="' + (X(3.4) - 92)) + etq(X, Y, 3.5, 4.2, 'y = x + 2', 'y').replace('y="' + Y(4.2), 'y="' + (Y(4.2) + 36));
            }
          })
        }
      ]
    },
    {
      titulo: 'Recta y circunferencia',
      intro: 'Resolver x² + y² = 25 con x + y = 7.',
      pasos: [
        { nota: 'La circunferencia tiene radio 5. La recta puede cortarla en dos puntos, rozarla o pasar de largo. Vamos a ver cuál.', html: PZ.say(PZ.llave(['x² + y² = 25', 'x + y = 7'])) },
        { nota: 'Despejamos una letra en la ecuación de la recta (la lineal siempre es la fácil). Restamos x a los dos lados.', html: PZ.ambos('− x', 'y') + row('y = 7 − x') },
        { nota: 'Reemplazamos y por (7 − x) en la circunferencia. Usa paréntesis, porque todo el paréntesis se eleva al cuadrado.', html: PZ.flecha('sustituir', 'y') + row('x² + ' + c('p', '(7 − x)²') + ' = 25') },
        { nota: 'Desarrollamos el binomio: (7 − x)² = 49 − 14x + x². Luego juntamos términos iguales.', html: row('x² + 49 − 14x + x² = 25') + row('2x² − 14x + 49 = 25') },
        { nota: 'Restamos 25 para que quede igual a cero, y dividimos todo entre 2 para trabajar con números más pequeños.', html: PZ.ambos('− 25', 'y') + row('2x² − 14x + 24 = 0') + PZ.ambos('÷ 2', 'p') + row('x² − 7x + 12 = 0') },
        { nota: 'Factorizamos: dos números que multipliquen 12 y sumen −7: −3 y −4.', html: row('(x − 3)(x − 4) = 0') + row(c('y', 'x = 3') + sp + 'ó' + sp + c('p', 'x = 4')) },
        { nota: 'Regresamos a la RECTA para las y. Si usáramos la circunferencia saldrían dos valores de y y uno sería falso.', html: row(c('y', 'x = 3') + ':  y = 7 − 3 = ' + c('y', '4')) + row(c('p', 'x = 4') + ':  y = 7 − 4 = ' + c('p', '3')) },
        { nota: 'Comprobamos: 3² + 4² = 9 + 16 = 25 ✓ y 4² + 3² = 25 ✓. La recta corta la circunferencia en dos puntos.', html: PZ.say(PZ.box(c('y', '(3, 4)') + ' &nbsp; y &nbsp; ' + c('p', '(4, 3)')), 'g') }
      ]
    },
    {
      titulo: 'El discriminante: ¿tangente?',
      intro: 'Hallar k para que la recta y = 2x + k solo toque la parábola y = x² − 4x + 8 en un punto.',
      pasos: [
        { nota: 'Si la recta solo toca a la parábola en un punto, decimos que es tangente: la ecuación que sale al igualar debe tener una sola solución.', html: row('x² − 4x + 8 = 2x + k', 'igualamos', 'y') },
        { nota: 'Pasamos todo a un lado: restamos 2x y restamos k. Juntamos los términos en x.', html: PZ.ambos('− 2x − k', 'g') + row('x² − 6x + (8 − k) = 0', 'a = 1,  b = −6,  c = 8 − k', 'p') },
        { nota: 'El discriminante Δ = b² − 4ac nos dice cuántas soluciones hay. Una sola solución significa Δ = 0.', html: PZ.tabla(['Δ', 'puntos', 'la recta es'], [['Δ &gt; 0', '2', 'secante'], ['Δ = 0', '1', 'tangente'], ['Δ &lt; 0', '0', 'exterior']], 1) },
        { nota: 'Escribimos Δ con nuestros números: (−6)² = 36 y 4·1·(8 − k) = 32 − 4k.', html: row('Δ = (−6)² − 4(1)(8 − k)') + row('Δ = 36 − 32 + 4k = 4 + 4k') },
        { nota: 'Igualamos Δ a cero y despejamos k: 4 + 4k = 0 → k = −1.', html: row('4 + 4k = 0', '', 'y') + PZ.ambos('− 4  y  ÷ 4', 'y') + row(c('g', 'k = −1')) },
        { nota: 'Comprobamos: con k = −1 queda x² − 6x + 9 = 0, es decir (x − 3)² = 0, solo x = 3, y = 2·3 − 1 = 5. Un solo punto (3, 5).', html: row('x² − 6x + 9 = (x − 3)² = 0' + ar + 'x = 3', '', 'g') + PZ.say(PZ.box('k = −1  →  tangente en (3, 5)'), 'g') }
      ]
    }
  ];

  /* ============================ 1.4 PENDIENTE Y RECTA ============================ */
  P['1.4'] = [
    {
      titulo: 'La pendiente: subida entre avance',
      intro: 'Calcular la pendiente de la recta que pasa por A(2, 1) y B(6, 4).',
      pasos: [
        { nota: 'La pendiente dice cuánto sube la recta por cada cosa que avanza hacia la derecha. Es como la inclinación de una calle. Marcamos los dos puntos.', html: row('A(2, 1)' + sp + 'B(6, 4)') },
        {
          nota: 'Dibujamos la recta y un escalón: de A vamos hacia la derecha (avance) y luego hacia arriba (subida) hasta llegar a B.', html: plano({
            W: 330, H: 220, ox: 40, oy: 185, s: 34, x0: -0.8, x1: 8.8, y0: -0.8, y1: 5.2, alt: 'Recta con escalón entre A y B',
            build: function (X, Y) { return linea(X, Y, 0.5, -0.1, 8, 5.9 - 0.6, 'w', 2.4) + punto(X, Y, 2, 1, 'y', 'A', -20, -6) + punto(X, Y, 6, 4, 'y', 'B', 8, -8); }
          })
        },
        { nota: 'Avance (horizontal): de x = 2 a x = 6 son 4 pasos. Subida (vertical): de y = 1 a y = 4 son 3 pasos. Los pintamos con colores distintos.', html: row(c('b', 'avance') + ' = 6 − 2 = ' + c('b', '4'), 'horizontal', 'b') + row(c('g', 'subida') + ' = 4 − 1 = ' + c('g', '3'), 'vertical', 'g') },
        { nota: 'La pendiente es subida entre avance: m = (y₂ − y₁)/(x₂ − x₁). Siempre restamos en el mismo orden arriba y abajo.', html: row('m = ' + f(c('g', 'y₂ − y₁'), c('b', 'x₂ − x₁')) + ' = ' + f(c('g', '4 − 1'), c('b', '6 − 2')) + ' = ' + f(c('g', '3'), c('b', '4'))) },
        { nota: 'Significa que por cada 4 pasos a la derecha, la recta sube 3. Como es positiva, la recta sube.', html: PZ.say(PZ.box('m = ' + f('3', '4')), 'g') },
        { nota: 'Truco: si inviertes el orden en los dos lados, sale lo mismo: (1 − 4)/(2 − 6) = (−3)/(−4) = 3/4. Lo que no debes hacer es cambiar el orden en uno solo.', html: row('' + f('1 − 4', '2 − 6') + ' = ' + f('−3', '−4') + ' = ' + f('3', '4') + ' ✓', 'mismo resultado', 'g') }
      ]
    },
    {
      titulo: 'Ecuación de la recta por dos puntos',
      intro: 'Hallar la recta que pasa por P(−1, 5) y Q(3, −3), en forma y = mx + b y general.',
      pasos: [
        { nota: 'Siempre empezamos igual: primero la pendiente. Ponemos los dos puntos y restamos en el mismo orden.', html: row('P(−1, 5)' + sp + 'Q(3, −3)') },
        { nota: 'Restamos las y arriba y las x abajo. Cuidado con los dos negativos: 3 − (−1) = 4.', html: row('m = ' + f('−3 − 5', '3 − (−1)') + ' = ' + f('−8', '4') + ' = ' + c('y', '−2'), 'la recta baja', 'y') },
        { nota: 'Usamos la fórmula punto-pendiente con un punto cualquiera, por ejemplo P(−1, 5): y − y₁ = m(x − x₁).', html: row('y − 5 = −2(x − (−1))', 'sustituimos', 'y') + row('y − 5 = −2(x + 1)', 'x − (−1) = x + 1', 'p') },
        { nota: 'Repartimos el −2 en el paréntesis: −2·x = −2x y −2·1 = −2.', html: row('y − 5 = ' + c('p', '−2x − 2')) },
        { nota: 'Sumamos 5 a los dos lados para dejar la y sola. Esta es la forma pendiente-intercepto y = mx + b.', html: PZ.ambos('+ 5', 'g') + row(c('g', 'y = −2x + 3'), 'm = −2 y b = 3', 'g') },
        { nota: 'Para la forma general, pasamos todo a un lado: sumamos 2x y restamos 3 a los dos lados.', html: PZ.ambos('+ 2x − 3', 'y') + row(c('y', '2x + y − 3 = 0'), 'forma general', 'y') },
        { nota: 'Comprobación con el otro punto Q(3, −3): −2·3 + 3 = −6 + 3 = −3 ✓. Pasa por Q, todo está bien.', html: row('y = −2(3) + 3 = −3 ✓', 'comprobamos Q', 'g') + PZ.say(PZ.box('y = −2x + 3'), 'g') }
      ]
    },
    {
      titulo: 'De forma general a y = mx + b y graficar',
      intro: 'Dada 2x − 3y − 3 = 0, hallar m y b y dibujar la recta.',
      pasos: [
        { nota: 'Está en forma general. Para ver la pendiente conviene despejar la y (dejarla sola a un lado).', html: row('2x − 3y − 3 = 0') },
        { nota: 'Pasamos 2x y −3 al otro lado cambiándoles el signo (restar 2x y sumar 3 a los dos lados).', html: PZ.ambos('− 2x + 3', 'y') + row('−3y = −2x + 3') },
        { nota: 'Dividimos todo entre −3. Cada término se divide: el signo menos se va.', html: PZ.ambos('÷ (−3)', 'p') + row(c('g', 'y = ' + f('2', '3') + 'x − 1')) },
        { nota: 'Ahora se lee directo: la pendiente m = 2/3 (el número que multiplica a x) y el intercepto b = −1 (donde corta al eje y).', html: row('m = ' + c('y', f('2', '3')) + sp + 'b = ' + c('p', '−1')) },
        { nota: 'Para graficar: empezamos en (0, −1). Cada 3 a la derecha, subimos 2. Armamos una tabla.', html: PZ.tabla(['x', 'y'], [['0', '−1'], ['3', '1'], ['6', '3']]) },
        {
          nota: 'Marcamos los puntos y los unimos con una regla. La recta sube suavemente porque m es positiva pero pequeña.', html: plano({
            W: 330, H: 230, ox: 60, oy: 150, s: 30, x0: -1.8, x1: 8.8, y0: -2.2, y1: 4.2, alt: 'Recta y = 2x/3 − 1',
            build: function (X, Y) { return linea(X, Y, -1.5, -2, 8, 4.33, 'g') + punto(X, Y, 0, -1, 'y', '(0, −1)', 8, 18) + punto(X, Y, 3, 1, 'y', '(3, 1)', 8, 18) + punto(X, Y, 6, 3, 'y', '(6, 3)', -22, -10); }
          })
        }
      ]
    }
  ];

  /* ============================ 1.5 INTERCEPTOS Y POSICIONES RELATIVAS ============================ */
  P['1.5'] = [
    {
      titulo: 'Interceptos con los ejes',
      intro: 'Graficar 3x + 4y − 12 = 0 con sus dos interceptos.',
      pasos: [
        { nota: 'Los interceptos son los puntos donde la recta cruza los ejes. Con dos puntos ya se dibuja una recta.', html: row('3x + 4y − 12 = 0') },
        { nota: 'Eje y: ahí x vale 0. Reemplazamos x = 0 y despejamos y: 4y − 12 = 0, 4y = 12.', html: row('x = 0:' + sp + '4y − 12 = 0', 'x es cero en el eje y', 'y') + PZ.ambos('+ 12  y  ÷ 4', 'y') + row(c('y', 'y = 3') + sp + '→' + sp + c('y', '(0, 3)')) },
        { nota: 'Eje x: ahí y vale 0. Reemplazamos y = 0 y despejamos x: 3x − 12 = 0, 3x = 12.', html: row('y = 0:' + sp + '3x − 12 = 0', 'y es cero en el eje x', 'p') + PZ.ambos('+ 12  y  ÷ 3', 'p') + row(c('p', 'x = 4') + sp + '→' + sp + c('p', '(4, 0)')) },
        { nota: 'Tabla de los dos puntos: uno tiene x = 0, el otro tiene y = 0.', html: PZ.tabla(['punto', 'x', 'y'], [['eje y', '0', '3'], ['eje x', '4', '0']]) },
        {
          nota: 'Los marcamos en los ejes y los unimos con una regla, prolongando la recta a ambos lados.', html: plano({
            W: 330, H: 230, ox: 80, oy: 160, s: 38, x0: -2, x1: 6.2, y0: -1.6, y1: 4.5, alt: 'Recta que corta a los ejes en (4,0) y (0,3)',
            build: function (X, Y) { return linea(X, Y, -1.5, 4.125, 5.5, -0.125, 'w', 2.2).replace(/stroke="#f4f6ef"/, 'stroke="' + COL.g + '"') + punto(X, Y, 0, 3, 'y', '(0, 3)', 10, -4) + punto(X, Y, 4, 0, 'p', '(4, 0)', 4, -12); }
          })
        },
        { nota: 'Atención: si la recta pasa por el origen, los dos interceptos coinciden en (0, 0) y necesitas otro punto.', html: PZ.say(PZ.box('(0, 3)' + sp + '(4, 0)'), 'g') }
      ]
    },
    {
      titulo: 'Paralela y perpendicular por un punto',
      intro: 'Dada 2x − 3y + 6 = 0 y el punto (3, −1), hallar la paralela y la perpendicular que pasan por él.',
      pasos: [
        { nota: 'Primero necesitamos la pendiente de la recta dada. Despejamos y.', html: row('2x − 3y + 6 = 0') + PZ.ambos('− 2x − 6  y  ÷ (−3)', 'y') + row('y = ' + f('2', '3') + 'x + 2') },
        { nota: 'La pendiente es m = 2/3. Ya tenemos lo que hacía falta. Ahora hay dos casos.', html: row('m = ' + c('y', f('2', '3'))) },
        { nota: '<b>Paralela:</b> tiene la misma inclinación, la misma pendiente. Entonces m = 2/3. Usamos punto-pendiente con (3, −1).', html: row(c('g', 'Paralela') + ':  m = ' + f('2', '3')) + row('y − (−1) = ' + f('2', '3') + '(x − 3)', 'y − y₁ = m(x − x₁)', 'g') + row('y + 1 = ' + f('2', '3') + 'x − 2') },
        { nota: 'Restamos 1 a los dos lados: y = (2/3)x − 3. Multiplicando por 3 y ordenando: 2x − 3y − 9 = 0.', html: row(c('g', 'y = ' + f('2', '3') + 'x − 3')) + row(c('g', '2x − 3y − 9 = 0')) },
        { nota: '<b>Perpendicular:</b> forma un ángulo recto. Su pendiente es la <i>recíproca con signo cambiado</i>: damos vuelta la fracción y cambiamos el signo.', html: row(c('p', 'Perpendicular') + ':  m = ' + f('2', '3') + ' → ' + f('3', '2') + ' → ' + c('p', '−' + f('3', '2')), 'dar vuelta y cambiar signo', 'p') },
        { nota: 'Usamos punto-pendiente otra vez con el mismo punto (3, −1).', html: row('y + 1 = −' + f('3', '2') + '(x − 3)') + row('y + 1 = −' + f('3', '2') + 'x + ' + f('9', '2')) },
        { nota: 'Restamos 1 (que es 2/2): 9/2 − 2/2 = 7/2. Para la general multiplicamos por 2 y pasamos todo a un lado.', html: row(c('p', 'y = −' + f('3', '2') + 'x + ' + f('7', '2'))) + row(c('p', '3x + 2y − 7 = 0')) },
        { nota: 'Comprobamos que las dos pasan por (3, −1): 2(3) − 3(−1) − 9 = 6 + 3 − 9 = 0 ✓ y 3(3) + 2(−1) − 7 = 9 − 2 − 7 = 0 ✓. Además (2/3)·(−3/2) = −1.', html: PZ.say(PZ.box(c('g', '2x − 3y − 9 = 0') + sp + c('p', '3x + 2y − 7 = 0')), 'w') }
      ]
    },
    {
      titulo: 'Posición de dos rectas y punto de corte',
      intro: 'Rectas 2x + y = 7 y x − y = −1: ¿paralelas, perpendiculares o secantes? ¿Dónde se cortan?',
      pasos: [
        { nota: 'Para saber cómo están colocadas, comparamos las pendientes. Despejamos y en cada una.', html: row('2x + y = 7' + ar + c('y', 'y = −2x + 7'), 'm₁ = −2', 'y') + row('x − y = −1' + ar + c('p', 'y = x + 1'), 'm₂ = 1', 'p') },
        { nota: 'Miramos la tabla de decisión: iguales es paralela, producto −1 es perpendicular, cualquier otro caso las rectas se cortan.', html: PZ.tabla(['si las pendientes...', 'las rectas son'], [['son iguales', 'paralelas'], ['multiplican −1', 'perpendiculares'], ['son distintas', 'secantes (se cortan)']]) },
        { nota: 'Aquí −2 ≠ 1, y −2 · 1 = −2 que no es −1. Así que simplemente se cortan en un punto. Vamos a hallarlo.', html: row('m₁ ≠ m₂' + sp + 'm₁ · m₂ = −2 ≠ −1') + PZ.say('→ se cortan en un punto', 'g') },
        { nota: 'El punto de corte cumple las dos ecuaciones: es la solución del sistema. Las y tienen signos opuestos, así que sumamos las dos ecuaciones y la y desaparece.', html: PZ.say(PZ.llave(['2x + y = 7', 'x − y = −1'])) + PZ.say('sumamos las dos', 'y') + row('3x = 6') },
        { nota: 'Dividimos entre 3 para hallar x.', html: PZ.ambos('÷ 3', 'y') + row(c('y', 'x = 2')) },
        { nota: 'Para la y, sustituimos x = 2 en cualquiera de las dos. En la primera: 2·2 + y = 7, así que y = 3.', html: row('2(2) + y = 7' + ar + c('p', 'y = 3')) },
        { nota: 'Comprobamos en la otra: 2 − 3 = −1 ✓. Las rectas se cortan en (2, 3).', html: PZ.say(PZ.box('(2, 3)'), 'g') }
      ]
    }
  ];
})(window.PZ);

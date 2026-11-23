/* pizarra-3a-3.js — Métodos en pizarra, 3.er año, temas 1.12 a 1.16 */
window.PIZARRA_3A = window.PIZARRA_3A || {};
(function (PZ) { var P = window.PIZARRA_3A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, fl = PZ.flecha;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', D = '#f4f6ef66';

  /* mini-ayudante de figuras (coordenadas matemáticas) */
  function fg(cx, cy, u, label) {
    var s = '';
    function X(x) { return +(210 + (x - cx) * u).toFixed(1); }
    function Yp(y) { return +(130 - (y - cy) * u).toFixed(1); }
    var o = {
      ax: function (x0, x1, y0, y1) {
        var ox = X(0), oy = Yp(0);
        s += '<path d="M' + X(x0) + ' ' + oy + 'H' + X(x1) + 'M' + (X(x1) - 8) + ' ' + (oy - 5) + 'L' + X(x1) + ' ' + oy + 'L' + (X(x1) - 8) + ' ' + (oy + 5) + '" stroke="' + D + '" stroke-width="2" fill="none"/>';
        s += '<path d="M' + ox + ' ' + Yp(y0) + 'V' + Yp(y1) + 'M' + (ox - 5) + ' ' + (Yp(y1) + 8) + 'L' + ox + ' ' + Yp(y1) + 'L' + (ox + 5) + ' ' + (Yp(y1) + 8) + '" stroke="' + D + '" stroke-width="2" fill="none"/>';
        s += '<text x="' + (X(x1) - 4) + '" y="' + (oy - 9) + '" fill="' + W + '" font-size="15" opacity=".8">x</text><text x="' + (ox + 8) + '" y="' + (Yp(y1) + 12) + '" fill="' + W + '" font-size="15" opacity=".8">y</text>';
        return o;
      },
      ln: function (x1, y1, x2, y2, col, dash) {
        s += '<line x1="' + X(x1) + '" y1="' + Yp(y1) + '" x2="' + X(x2) + '" y2="' + Yp(y2) + '" stroke="' + (col || W) + '" stroke-width="2.6" stroke-linecap="round"' + (dash ? ' stroke-dasharray="7 6"' : '') + '/>';
        return o;
      },
      pt: function (x, y, col, lab, dx, dy, anc) {
        s += '<circle cx="' + X(x) + '" cy="' + Yp(y) + '" r="4.8" fill="' + (col || Y) + '"/>';
        if (lab) o.t(x, y, lab, col, dx == null ? 8 : dx, dy == null ? -8 : dy, anc);
        return o;
      },
      t: function (x, y, str, col, dx, dy, anc) {
        s += '<text x="' + (X(x) + (dx || 0)) + '" y="' + (Yp(y) + (dy || 0)) + '" fill="' + (col || W) + '" font-size="16"' + (anc ? ' text-anchor="' + anc + '"' : '') + '>' + str + '</text>';
        return o;
      },
      cur: function (fn, t0, t1, col, n) {
        var d = '', i, t; n = n || 100;
        for (i = 0; i <= n; i++) { t = t0 + (t1 - t0) * i / n; d += (i ? 'L' : 'M') + X(fn(t)[0]) + ' ' + Yp(fn(t)[1]); }
        s += '<path d="' + d + '" fill="none" stroke="' + (col || W) + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
        return o;
      },
      raw: function (h) { s += h; return o; },
      out: function () {
        return '<svg viewBox="0 0 420 260" style="width:min(100%,440px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'figura') + '"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">' + s + '</g></svg>';
      }
    };
    return o;
  }
  function graf(fn, a, b) { return function (t) { return [t, fn(t)]; }; }

  /* ===================== 1.12 Regla de la cadena ===================== */
  P['1.12'] = [
    {
      titulo: 'Derivar (3x² − 5)⁴: fuera y dentro',
      intro: 'La regla de la cadena: se deriva "lo de afuera" y se multiplica por la derivada "de lo de adentro".',
      pasos: [
        { nota: 'Mira esta función: una potencia 4 de algo más complicado que x. No es una potencia simple: hay una función metida dentro de otra.', html: row('y = (3x² − 5)⁴') },
        { nota: 'Separamos las dos capas. Lo de <b>adentro</b> lo llamamos u (la caja rosa), y lo de <b>afuera</b> es la potencia 4 de esa caja.', html: row(c('p', 'u = 3x² − 5'), 'lo de adentro', 'p') + row('y = ' + c('y', 'u⁴'), 'lo de afuera', 'y') },
        { nota: 'Primero derivamos lo de afuera como si u fuera una x normal: bajamos el 4 y restamos 1 al exponente. Lo de adentro se deja <b>igual</b>, sin tocarlo.', html: row(c('y', '4(3x² − 5)³'), 'afuera derivado, adentro intacto', 'y') },
        { nota: 'Ahora derivamos lo de adentro: 3x² pasa a 6x y el −5 desaparece.', html: row(c('p', 'u′ = (3x² − 5)′ = 6x'), 'derivada de adentro', 'p') },
        { nota: 'La regla dice que se <b>multiplican</b> las dos partes. Esta es la cadena: un eslabón por el otro.', html: fl('multiplicar', 'g') + row('y′ = ' + c('y', '4(3x² − 5)³') + ' · ' + c('p', '6x')) },
        { nota: 'Ordenamos: 4 · 6 = 24. Dejamos la x adelante y listo.', html: row('y′ = ' + box('24x(3x² − 5)³'), '', 'g') + say('Olvidar el 6x es el error más común.', 'r') }
      ]
    },
    {
      titulo: 'Derivar √(x² + 1)',
      intro: 'Una raíz es una potencia ½: se aplica la misma idea de fuera y dentro.',
      pasos: [
        { nota: 'Hay una raíz que envuelve a x² + 1. Lo primero es recordar que una raíz es una potencia.', html: row('y = √(x² + 1)') },
        { nota: 'Escribimos la raíz como potencia ½. Así ya vemos "algo elevado a un exponente".', html: row('y = (x² + 1)<sup>1/2</sup>', 'raíz = potencia ½', 'y') },
        { nota: 'Lo de afuera: bajamos el ½ y restamos 1 al exponente: ½ − 1 = −½. Lo de adentro queda igual.', html: row('y′ = ' + c('y', f('1', '2') + '(x² + 1)<sup>−1/2</sup>')) },
        { nota: 'Multiplicamos por la derivada de lo de adentro: (x² + 1)′ = 2x.', html: fl('× derivada de adentro', 'p') + row('y′ = ' + f('1', '2') + '(x² + 1)<sup>−1/2</sup> · ' + c('p', '2x')) },
        { nota: 'El ½ y el 2 se cancelan. El exponente negativo manda la expresión abajo, y vuelve a ser raíz.', html: row('y′ = ' + box(f('x', '√(x² + 1)')), '', 'g') }
      ]
    },
    {
      titulo: 'Producto con cadena: x²(x + 1)³',
      intro: 'Cuando se juntan la regla del producto y la de la cadena.',
      pasos: [
        { nota: 'Aquí hay dos factores multiplicándose: x² y (x + 1)³. Usaremos la regla del producto, y el segundo factor además necesita cadena.', html: row('y = x² · (x + 1)³') },
        { nota: 'Regla del producto: derivada del primero por el segundo, más el primero por la derivada del segundo.', html: row('y′ = ' + c('y', '(x²)′') + '(x + 1)³ + x² ' + c('p', '[(x + 1)³]′')) },
        { nota: 'El primero es fácil: (x²)′ = 2x. El segundo lleva cadena: 3(x + 1)² · 1.', html: row(c('y', '(x²)′ = 2x')) + row(c('p', '[(x + 1)³]′ = 3(x + 1)²'), 'cadena: la de adentro vale 1', 'p') },
        { nota: 'Sustituimos todo en la regla del producto.', html: row('y′ = ' + c('y', '2x') + '(x + 1)³ + x² · ' + c('p', '3(x + 1)²')) },
        { nota: 'Para limpiar, sacamos factor común x(x + 1)² en los dos términos.', html: fl('factor común', 'g') + row('y′ = x(x + 1)²[2(x + 1) + 3x]') },
        { nota: 'Adentro del corchete: 2x + 2 + 3x = 5x + 2.', html: row('y′ = ' + box('x(x + 1)²(5x + 2)'), '', 'g') }
      ]
    }
  ];

  /* ===================== 1.13 Trig, exp, log ===================== */
  P['1.13'] = [
    {
      titulo: 'Seno con cadena: sen(3x²)',
      intro: 'La derivada del seno es el coseno, pero se multiplica por la derivada del ángulo.',
      pasos: [
        { nota: 'El seno no está solo: adentro lleva 3x². Tenemos fuera y dentro otra vez.', html: row('y = sen(3x²)') },
        { nota: 'Recordamos la tabla: la derivada de sen es cos. El ángulo de adentro se copia igual.', html: row(c('y', '(sen u)′ = cos u'), 'fórmula de la tabla', 'y') },
        { nota: 'Derivamos lo de afuera: seno pasa a coseno, con el mismo 3x² adentro.', html: row(c('y', 'cos(3x²)')) },
        { nota: 'Derivamos lo de adentro: (3x²)′ = 6x.', html: row(c('p', '(3x²)′ = 6x'), 'derivada del ángulo', 'p') },
        { nota: 'Multiplicamos las dos piezas y ordenamos.', html: row('y′ = ' + c('y', 'cos(3x²)') + ' · ' + c('p', '6x')) + row('y′ = ' + box('6x cos(3x²)'), '', 'g') }
      ]
    },
    {
      titulo: 'Exponencial por polinomio: x²e³ˣ',
      intro: 'Producto de dos factores; la exponencial lleva cadena.',
      pasos: [
        { nota: 'Dos factores multiplicados: x² y e<sup>3x</sup>. Toca regla del producto.', html: row('y = x² · e<sup>3x</sup>') },
        { nota: 'Derivada de e a la algo: es la misma exponencial multiplicada por la derivada de ese algo. Aquí el algo es 3x, que deriva 3.', html: row(c('y', '(e<sup>3x</sup>)′ = e<sup>3x</sup> · 3'), 'la exponencial se repite', 'y') },
        { nota: 'Aplicamos el producto: derivada del primero por el segundo, más primero por derivada del segundo.', html: row('y′ = ' + c('p', '2x') + ' e<sup>3x</sup> + x² · ' + c('y', '3e<sup>3x</sup>')) },
        { nota: 'Los dos términos tienen e<sup>3x</sup> y una x: sacamos factor común x e<sup>3x</sup>.', html: fl('factor común', 'g') + row('y′ = ' + c('g', 'x e<sup>3x</sup>') + '(2 + 3x)') },
        { nota: 'Esa es la respuesta final.', html: row('y′ = ' + box('x e<sup>3x</sup>(2 + 3x)'), '', 'g') }
      ]
    },
    {
      titulo: 'Logaritmo: ln(x² + 1)',
      intro: 'La derivada de ln u es "u′ sobre u": la derivada de adentro dividida entre lo de adentro.',
      pasos: [
        { nota: 'Un logaritmo natural con x² + 1 adentro.', html: row('y = ln(x² + 1)') },
        { nota: 'La fórmula del ln: se pone 1 sobre lo de adentro y se multiplica por la derivada de lo de adentro.', html: row('(ln u)′ = ' + f('u′', 'u'), 'fórmula de la tabla', 'y') },
        { nota: 'Identificamos u y calculamos u′.', html: row(c('p', 'u = x² + 1')) + row(c('y', 'u′ = 2x')) },
        { nota: 'Escribimos u′ arriba y u abajo.', html: row('y′ = ' + f(c('y', '2x'), c('p', 'x² + 1'))) },
        { nota: 'No se simplifica más: x² + 1 nunca se factoriza con números reales.', html: row('y′ = ' + box(f('2x', 'x² + 1')), '', 'g') }
      ]
    }
  ];

  /* ===================== 1.14 Implícita ===================== */
  function circ(stage) {
    var g = fg(0, 0, 22, 'circunferencia y su tangente');
    g.ax(-6, 6, -5.6, 5.6);
    g.cur(function (a) { return [5 * Math.cos(a), 5 * Math.sin(a)]; }, 0, 2 * Math.PI, W, 120);
    g.pt(3, 4, Y, '(3, 4)', 8, -6);
    if (stage > 1) g.ln(1, 5.5, 6, 1.75, K);
    if (stage > 1) g.t(5.3, 2.9, 'pend. −3/4', K, 0, 0);
    return g.out();
  }
  P['1.14'] = [
    {
      titulo: 'Circunferencia x² + y² = 25',
      intro: 'No podemos despejar y fácil. Derivamos toda la ecuación tratando y como "función escondida" de x.',
      pasos: [
        { nota: 'Esta ecuación dibuja un círculo. La y no está despejada, pero igual podemos hallar la pendiente en un punto.', html: row('x² + y² = 25') },
        { nota: 'Derivamos <b>los dos lados</b> respecto a x. Lo importante: cada vez que derivamos algo con y, ponemos y′ al final (es la cadena).', html: row('(x²)′ + (y²)′ = (25)′') },
        { nota: 'Derivamos cada pieza. (x²)′ = 2x. (y²)′ = 2y·y′, porque y depende de x. Y la constante da 0.', html: row(c('y', '2x') + ' + ' + c('p', '2y · y′') + ' = 0', 'la y siempre trae y′', 'p') },
        { nota: 'Despejamos y′ como en una ecuación normal: pasamos 2x al otro lado y dividimos entre 2y.', html: fl('despejar y′', 'g') + row('2y · y′ = −2x') + row('y′ = ' + f('−2x', '2y') + ' = ' + c('g', f('−x', 'y'))) },
        { nota: 'En el punto (3, 4) sustituimos x = 3 y y = 4.', html: row('y′(3, 4) = ' + f('−3', '4') + ' = ' + box('−3/4'), 'pendiente', 'g') },
        { nota: 'Mira: la recta con esa pendiente apenas roza el círculo en (3, 4). Es la tangente.', html: circ(2) }
      ]
    },
    {
      titulo: 'Con producto: x² + xy + y² = 7',
      intro: 'Aquí el término xy es un producto de x con y: regla del producto más y′.',
      pasos: [
        { nota: 'Queremos la pendiente en el punto (1, 2). Comprobamos que está en la curva: 1 + 2 + 4 = 7. ¡Sí!', html: row('x² + xy + y² = 7') + row('(1, 2): 1 + 2 + 4 = 7 ✓', '', 'g') },
        { nota: 'Derivamos todo respecto a x. El término xy necesita regla del producto: (x)′·y + x·(y)′ = y + x·y′.', html: row('2x + ' + c('y', '(y + x · y′)') + ' + ' + c('p', '2y · y′') + ' = 0') },
        { nota: 'Juntamos los términos con y′ a un lado y los demás al otro.', html: row('x · y′ + 2y · y′ = −2x − y') },
        { nota: 'Sacamos y′ como factor común.', html: fl('factor común y′', 'g') + row('y′(x + 2y) = −(2x + y)') },
        { nota: 'Dividimos entre (x + 2y) y tenemos la fórmula de la pendiente.', html: row('y′ = ' + c('g', f('−(2x + y)', 'x + 2y'))) },
        { nota: 'Sustituimos x = 1 y y = 2: arriba −(2 + 2) = −4, abajo 1 + 4 = 5.', html: row('y′(1, 2) = ' + f('−4', '5') + ' = ' + box('−4/5'), '', 'g') }
      ]
    },
    {
      titulo: 'Derivadas sucesivas',
      intro: 'Derivar la derivada: primera, segunda, tercera... Cada una describe algo distinto.',
      pasos: [
        { nota: 'Tomamos un polinomio. La derivada de la derivada se llama segunda derivada.', html: row('y = x⁴ − 2x³ + 5x') },
        { nota: 'Primera derivada: bajamos cada exponente y restamos 1. El 5x pasa a 5.', html: row(c('y', 'y′ = 4x³ − 6x² + 5')) },
        { nota: 'Segunda derivada: derivamos el resultado anterior.', html: fl('derivar otra vez', 'y') + row(c('p', 'y″ = 12x² − 12x')) },
        { nota: 'Tercera derivada: una vez más.', html: fl('otra vez', 'y') + row(c('g', 'y‴ = 24x − 12')) },
        { nota: 'Si x fuera el tiempo y y la posición: y′ es la velocidad, y″ la aceleración.', html: PZ.tabla(['derivada', 'significa'], [['y′', 'velocidad'], ['y″', 'aceleración']]) }
      ]
    }
  ];

  /* ===================== 1.15 Tangente, normal, razones ===================== */
  function parab(stage) {
    var g = fg(2, 2.5, 26, 'parábola con tangente y normal');
    g.ax(-1.2, 5, -2.6, 7.6);
    g.cur(graf(function (x) { return x * x - 2 * x + 2; }), -0.6, 3.5, W, 80);
    if (stage > 1) g.ln(0.5, -1, 3.3, 4.6, Y);
    if (stage > 2) g.ln(-0.2, 3.1, 4.5, 0.75, K);
    g.pt(2, 2, G, '(2, 2)', 8, 18);
    if (stage > 1) g.t(3.3, 4.5, 'tangente', Y, 4, 14);
    if (stage > 2) g.t(4.4, 0.8, 'normal', K, 0, -8, 'end');
    return g.out();
  }
  function escalera(stage) {
    var o = 40, ox = 70, oy = 232, s = '';
    function X(x) { return ox + x * o; } function Y2(y) { return oy - y * o; }
    s += '<path d="M' + ox + ' ' + oy + 'H400 M' + ox + ' ' + oy + 'V10" stroke="' + D + '" stroke-width="3" fill="none"/>';
    s += '<line x1="' + X(3) + '" y1="' + Y2(0) + '" x2="' + X(0) + '" y2="' + Y2(4) + '" stroke="' + Y + '" stroke-width="4"/>';
    s += '<text x="' + (X(1.5) + 10) + '" y="' + (Y2(2) - 4) + '" fill="' + Y + '" font-size="18">5 m</text>';
    s += '<text x="' + (X(1.5) - 8) + '" y="' + (Y2(0) + 20) + '" fill="' + B + '" font-size="18">x = 3</text>';
    s += '<text x="' + (ox + 8) + '" y="' + (Y2(2.2)) + '" fill="' + K + '" font-size="18">y = 4</text>';
    if (stage > 1) s += '<path d="M' + X(3) + ' ' + (oy - 10) + 'H' + X(4.2) + 'M' + (X(4.2) - 8) + ' ' + (oy - 15) + 'L' + X(4.2) + ' ' + (oy - 10) + 'L' + (X(4.2) - 8) + ' ' + (oy - 5) + '" stroke="' + B + '" stroke-width="2.6" fill="none"/><text x="' + (X(3) + 4) + '" y="' + (oy - 20) + '" fill="' + B + '" font-size="16">se aleja 0,5 m/s</text>';
    if (stage > 1) s += '<path d="M' + (ox - 20) + ' ' + Y2(4) + 'V' + (Y2(4) + 36) + 'M' + (ox - 25) + ' ' + (Y2(4) + 28) + 'L' + (ox - 20) + ' ' + (Y2(4) + 36) + 'L' + (ox - 15) + ' ' + (Y2(4) + 28) + '" stroke="' + K + '" stroke-width="2.6" fill="none"/><text x="' + (ox + 20) + '" y="' + (Y2(4) + 24) + '" fill="' + K + '" font-size="16">¿cuánto baja?</text>';
    return '<svg viewBox="0 0 420 260" style="width:min(100%,440px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="escalera apoyada en una pared"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">' + s + '</g></svg>';
  }
  P['1.15'] = [
    {
      titulo: 'Tangente y normal de y = x² − 2x + 2',
      intro: 'La pendiente de la tangente es la derivada. La normal es la recta perpendicular a la tangente.',
      pasos: [
        { nota: 'Queremos la recta que roza la parábola en x = 2. Primero necesitamos el punto: sustituimos x = 2.', html: row('y = x² − 2x + 2') + row('y(2) = 4 − 4 + 2 = ' + c('g', '2'), 'punto (2, 2)', 'g') },
        { nota: 'La derivada nos da la pendiente de la tangente en cualquier x.', html: row('y′ = 2x − 2') },
        { nota: 'Evaluamos en x = 2: esa es la pendiente <b>m</b> de la tangente.', html: row('m = y′(2) = 2(2) − 2 = ' + c('y', '2')) },
        { nota: 'Usamos la fórmula punto-pendiente con el punto (2, 2) y m = 2.', html: row('y − 2 = 2(x − 2)') + row('y = ' + box('2x − 2'), 'tangente', 'y') },
        { nota: 'La normal es perpendicular: su pendiente es la <b>inversa con signo cambiado</b> (−1 dividido entre m): −1/2.', html: row('m<sub>n</sub> = ' + f('−1', '2')) },
        { nota: 'Otra vez punto-pendiente con el mismo punto (2, 2).', html: row('y − 2 = ' + f('−1', '2') + '(x − 2)') + row('y = ' + box('−x/2 + 3'), 'normal', 'p') },
        { nota: 'Las dos rectas se cruzan formando una esquina recta en el punto.', html: parab(2) }
      ]
    },
    {
      titulo: 'La escalera que resbala',
      intro: 'Razones relacionadas: dos cantidades cambian con el tiempo y están ligadas por una ecuación.',
      pasos: [
        { nota: 'Una escalera de 5 m está apoyada en una pared. El pie se aleja a 0,5 m/s. Queremos saber qué tan rápido baja la parte de arriba cuando el pie está a 3 m.', html: escalera(0) },
        { nota: 'Primero buscamos la ecuación que liga x (pie) y y (altura): Pitágoras, porque forman un triángulo rectángulo.', html: row('x² + y² = 25', 'Pitágoras', 'y') },
        { nota: 'Cuando x = 3, la altura sale de 9 + y² = 25, o sea y = 4.', html: row('9 + y² = 25 ⇒ ' + c('p', 'y = 4')) },
        { nota: 'Ahora derivamos <b>respecto al tiempo t</b>. x y y cambian con t, así que cada una lleva su derivada (cadena).', html: row('2x · ' + c('b', 'dx/dt') + ' + 2y · ' + c('p', 'dy/dt') + ' = 0') },
        { nota: 'Los datos: x = 3, y = 4, y dx/dt = 0,5 m/s. Sustituimos.', html: row('2(3)(' + c('b', '0,5') + ') + 2(4) · ' + c('p', 'dy/dt') + ' = 0') + row('3 + 8 · dy/dt = 0') },
        { nota: 'Despejamos dy/dt. Sale negativo, que significa que la altura <b>baja</b>.', html: row('dy/dt = ' + f('−3', '8') + ' = ' + box('−0,375 m/s'), 'baja', 'g') },
        { nota: 'La parte de arriba baja a 0,375 m/s, más lento de lo que se aleja el pie.', html: say('Arriba baja 0,375 m/s', 'g') }
      ]
    }
  ];

  /* ===================== 1.16 Máximos, mínimos, optimización ===================== */
  function cubica(stage) {
    var g = fg(1, -1, 34, 'gráfica de x³ − 3x²');
    g.ax(-1.5, 3.6, -4.6, 2.6);
    g.cur(graf(function (x) { return x * x * x - 3 * x * x; }), -0.95, 3.15, W, 100);
    if (stage > 0) { g.pt(0, 0, G, 'máx (0, 0)', 8, -10); g.pt(2, -4, K, 'mín (2, −4)', 8, 20); }
    return g.out();
  }
  function corral(stage) {
    var s = '';
    s += '<rect x="30" y="20" width="360" height="26" fill="' + B + '" fill-opacity=".25"/><text x="210" y="39" fill="' + B + '" font-size="17" text-anchor="middle">río (sin cerca)</text>';
    s += '<path d="M100 46V210H320V46" fill="none" stroke="' + Y + '" stroke-width="4" stroke-linejoin="round"/>';
    s += '<text x="82" y="132" fill="' + K + '" font-size="18" text-anchor="end">x</text><text x="338" y="132" fill="' + K + '" font-size="18">x</text>';
    s += '<text x="210" y="234" fill="' + G + '" font-size="18" text-anchor="middle">y</text>';
    if (stage > 0) s += '<text x="210" y="130" fill="' + W + '" font-size="18" text-anchor="middle">Área = x · y</text>';
    return '<svg viewBox="0 0 420 260" style="width:min(100%,440px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="corral rectangular junto al río"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">' + s + '</g></svg>';
  }
  P['1.16'] = [
    {
      titulo: 'Máximos y mínimos de f(x) = x³ − 3x²',
      intro: 'Los picos y valles ocurren donde la tangente es horizontal: pendiente cero. La segunda derivada dice cuál es cuál.',
      pasos: [
        { nota: 'Buscamos los puntos más altos y más bajos "locales" de esta curva.', html: row('f(x) = x³ − 3x²') },
        { nota: 'En un pico o un valle la tangente es horizontal, o sea pendiente 0. Entonces derivamos.', html: row('f′(x) = 3x² − 6x') },
        { nota: 'Igualamos a cero y factorizamos. Para que un producto sea cero, un factor debe serlo.', html: row('3x(x − 2) = 0') + row(c('y', 'x = 0') + ' &nbsp;&nbsp; ' + c('p', 'x = 2'), 'puntos críticos', 'y') },
        { nota: 'Para saber si es pico o valle derivamos otra vez y miramos el signo. Si f″ es negativa, curva hacia abajo (pico); si es positiva, valle.', html: row('f″(x) = 6x − 6') },
        { nota: 'Evaluamos f″ en cada punto crítico.', html: PZ.tabla(['x', 'f″', 'resultado'], [['0', '6(0) − 6 = −6', c('g', 'máximo')], ['2', '6(2) − 6 = 6', c('p', 'mínimo')]]) },
        { nota: 'Falta la altura: f(0) = 0 y f(2) = 8 − 12 = −4.', html: row('f(0) = 0 &nbsp; ⇒ &nbsp; ' + c('g', 'máx (0, 0)')) + row('f(2) = −4 &nbsp; ⇒ &nbsp; ' + c('p', 'mín (2, −4)')) },
        { nota: 'En la gráfica se ve: un pico en (0, 0) y un valle en (2, −4).', html: cubica(1) }
      ]
    },
    {
      titulo: 'Optimización: el corral junto al río',
      intro: 'Tenemos 100 m de cerca para 3 lados (el río cubre el cuarto). ¿Qué medidas dan más área?',
      pasos: [
        { nota: 'Dibujamos el problema. El lado del río no necesita cerca, así que la cerca cubre dos lados x y un lado y.', html: corral(0) },
        { nota: 'Primera ecuación (la restricción): lo que gastamos de cerca es 100 m.', html: row('2x + y = 100', 'la cerca', 'y') },
        { nota: 'Segunda ecuación: lo que queremos hacer lo más grande posible, el área.', html: row('A = x · y', 'lo que queremos maximizar', 'p') },
        { nota: 'Para derivar necesitamos una sola variable. Despejamos y de la primera: y = 100 − 2x, y lo metemos en el área.', html: fl('sustituir', 'g') + row('A(x) = x(100 − 2x) = 100x − 2x²') },
        { nota: 'Derivamos e igualamos a cero: ahí está el máximo.', html: row('A′(x) = 100 − 4x = 0') + row('x = ' + c('y', '25 m')) },
        { nota: 'Comprobamos con la segunda derivada: A″ = −4 es negativa, así que es un máximo.', html: row('A″ = −4 < 0 &nbsp; ✓ máximo', '', 'g') },
        { nota: 'Volvemos al dibujo para hallar y y el área máxima.', html: row('y = 100 − 2(25) = ' + c('g', '50 m')) + row('A = 25 · 50 = ' + box('1250 m²'), '', 'g') },
        { nota: 'El corral mide 25 m de ancho y 50 m de largo.', html: say('Ancho 25 m, largo 50 m', 'g') }
      ]
    }
  ];
})(window.PZ);

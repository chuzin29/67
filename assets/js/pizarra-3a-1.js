/* pizarra-3a-1.js — Métodos en pizarra, 3.er año, temas 1.1 a 1.5 */
window.PIZARRA_3A = window.PIZARRA_3A || {};
(function (PZ) { var P = window.PIZARRA_3A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, tach = PZ.tach, tabla = PZ.tabla, flecha = PZ.flecha;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', D = '#f4f6ef66', BG = '#1f4136';
  var LIM = function (a) { return 'lím<sub>x→' + a + '</sub>'; };

  /* ---------- mini-ayudante de figuras (coordenadas matemáticas) ---------- */
  function fg(cx, cy, u, label) {
    var s = '';
    function X(x) { return +(210 + (x - cx) * u).toFixed(1); }
    function Yp(y) { return +(130 - (y - cy) * u).toFixed(1); }
    function n(i) { return String(i).replace('-', '−'); }
    var o = {
      ax: function (st) {
        var ox = X(0), oy = Yp(0), i, x0 = Math.ceil(cx - 205 / u), x1 = Math.floor(cx + 205 / u), y0 = Math.ceil(cy - 125 / u), y1 = Math.floor(cy + 125 / u);
        st = st || 1;
        if (oy > 8 && oy < 252) {
          s += '<path d="M4 ' + oy + 'H414 M406 ' + (oy - 5) + 'L414 ' + oy + 'L406 ' + (oy + 5) + '" stroke="' + D + '" stroke-width="2" fill="none"/><text x="404" y="' + (oy - 9) + '" fill="' + W + '" font-size="15" opacity=".8">x</text>';
          for (i = x0; i <= x1; i++) if (i !== 0 && i % st === 0) s += '<line x1="' + X(i) + '" y1="' + (oy - 3) + '" x2="' + X(i) + '" y2="' + (oy + 3) + '" stroke="' + D + '"/><text x="' + X(i) + '" y="' + (oy + 15) + '" fill="' + W + '" fill-opacity=".55" font-size="11" text-anchor="middle">' + n(i) + '</text>';
        }
        if (ox > 8 && ox < 412) {
          s += '<path d="M' + ox + ' 256V6 M' + (ox - 5) + ' 14L' + ox + ' 6L' + (ox + 5) + ' 14" stroke="' + D + '" stroke-width="2" fill="none"/><text x="' + (ox + 8) + '" y="16" fill="' + W + '" font-size="15" opacity=".8">y</text>';
          for (i = y0; i <= y1; i++) if (i !== 0 && i % st === 0) s += '<line x1="' + (ox - 3) + '" y1="' + Yp(i) + '" x2="' + (ox + 3) + '" y2="' + Yp(i) + '" stroke="' + D + '"/><text x="' + (ox - 7) + '" y="' + (Yp(i) + 4) + '" fill="' + W + '" fill-opacity=".55" font-size="11" text-anchor="end">' + n(i) + '</text>';
        }
        return o;
      },
      ln: function (x1, y1, x2, y2, col, dash, w) {
        s += '<line x1="' + X(x1) + '" y1="' + Yp(y1) + '" x2="' + X(x2) + '" y2="' + Yp(y2) + '" stroke="' + (col || W) + '" stroke-width="' + (w || 2.4) + '" stroke-linecap="round"' + (dash ? ' stroke-dasharray="7 6"' : '') + '/>';
        return o;
      },
      fn: function (fx, x0, x1, col, num) {
        var d = '', i, x; num = num || 80;
        for (i = 0; i <= num; i++) { x = x0 + (x1 - x0) * i / num; d += (i ? 'L' : 'M') + X(x) + ' ' + Yp(fx(x)); }
        s += '<path d="' + d + '" fill="none" stroke="' + (col || W) + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
        return o;
      },
      pt: function (x, y, col, lab, dx, dy, anc) {
        s += '<circle cx="' + X(x) + '" cy="' + Yp(y) + '" r="4.8" fill="' + (col || Y) + '"/>';
        if (lab) o.t(x, y, lab, col || Y, dx == null ? 9 : dx, dy == null ? -9 : dy, anc);
        return o;
      },
      hole: function (x, y, col, lab, dx, dy, anc) {
        s += '<circle cx="' + X(x) + '" cy="' + Yp(y) + '" r="5" fill="' + BG + '" stroke="' + (col || Y) + '" stroke-width="2.6"/>';
        if (lab) o.t(x, y, lab, col || Y, dx == null ? 9 : dx, dy == null ? -9 : dy, anc);
        return o;
      },
      t: function (x, y, str, col, dx, dy, anc, sz) {
        s += '<text x="' + (X(x) + (dx || 0)) + '" y="' + (Yp(y) + (dy || 0)) + '" fill="' + (col || W) + '" font-size="' + (sz || 16) + '"' + (anc ? ' text-anchor="' + anc + '"' : '') + '>' + str + '</text>';
        return o;
      },
      out: function () {
        return '<svg viewBox="0 0 420 260" style="width:min(100%,460px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'figura') + '"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">' + s + '</g></svg>';
      }
    };
    return o;
  }
  /* "f(x) = {…}" con llave */
  function pw(a, b) { return row('f(x) = ' + PZ.llave([a, b])); }

  /* ============================================================
     1.1  Idea intuitiva de límite
     ============================================================ */
  function g111(stage) {
    var g = fg(3, 6, 30, 'recta con un hueco en (3, 6)').ax(1).fn(function (x) { return x + 3; }, -1, 7, W);
    g.hole(3, 6, Y);
    if (stage > 0) g.ln(3, 0, 3, 6, K, true, 2).ln(0, 6, 3, 6, K, true, 2).t(0, 6, '6', K, 8, -6).t(3, 0, '3', K, 6, 20);
    if (stage > 1) g.t(3, 6, 'hueco', Y, 12, -12, null, 15);
    return g.out();
  }
  function g112() {
    var g = fg(2, 3, 30, 'recta con hueco en (2, 3) y punto suelto en (2, 5)').ax(1).fn(function (x) { return x + 1; }, -1.2, 6, W);
    g.hole(3 - 1, 3, Y).pt(2, 5, K, 'f(2) = 5', 10, 4).ln(0, 3, 2, 3, Y, true, 2).t(0, 3, '3', Y, 8, -6);
    return g.out();
  }
  P['1.1'] = [
    {
      titulo: 'Tabla de valores cuando f(a) no existe',
      intro: 'Estimar ' + LIM('3') + ' (x² − 9)/(x − 3) acercándonos a 3 por los dos lados.',
      pasos: [
        { nota: 'Nos piden el límite cuando x se acerca a 3. "Se acerca" quiere decir: tan cerca como quieras, pero sin llegar a ser 3.', html: row(LIM('3') + ' ' + f('x² − 9', 'x − 3')) },
        { nota: 'Primero probamos poner x = 3 directo. Sale 0/0, que no significa nada. Pero eso no quiere decir que no haya límite: solo que hay que mirar de cerca.', html: row(f('3² − 9', '3 − 3') + ' = ' + f('0', '0') + ' ' + c('r', '?!'), 'no se puede dividir entre 0', 'r') },
        { nota: 'Hacemos una tabla acercándonos a 3 desde la <b>izquierda</b> (números un poquito menores que 3). Mira a qué número se acerca f(x).', html: say('Por la izquierda', 'y') + tabla(['x', '2.9', '2.99', '2.999'], [['f(x)', '5.9', '5.99', '5.999']]) },
        { nota: 'Ahora desde la <b>derecha</b> (un poquito mayores que 3). Los valores también se van acercando al mismo número.', html: say('Por la derecha', 'p') + tabla(['x', '3.1', '3.01', '3.001'], [['f(x)', '6.1', '6.01', '6.001']]) },
        { nota: 'Por los dos lados f(x) se pega a <b>6</b>. Entonces decimos que el límite es 6, aunque f(3) no exista.', html: row(c('y', '5.999 → ') + c('g', '6') + c('p', ' ← 6.001'), 'los dos lados coinciden', 'g') },
        { nota: 'Así se ve en el dibujo: la gráfica es una recta con un huequito en x = 3. La altura a la que "apunta" es 6.', html: g111(0) },
        { nota: 'Marcamos la altura 6 con las líneas punteadas. El hueco indica que ahí la función no está definida, pero el límite sí se lee.', reemplaza: true, html: g111(2) },
        { nota: 'Respuesta. (Truco: x² − 9 = (x − 3)(x + 3), y para x ≠ 3 la fracción es x + 3, que en x = 3 vale 6.)', html: say(LIM('3') + ' ' + f('x² − 9', 'x − 3') + ' = ' + box('6'), 'g') }
      ]
    },
    {
      titulo: 'El límite no es lo mismo que f(a)',
      intro: 'Una función con x + 1 y un punto "suelto" en x = 2.',
      pasos: [
        { nota: 'Esta función vale x + 1 en casi todos lados, pero en x = 2 el profe decidió que valga 5 (¡un valor raro!).', html: pw('x + 1   si x ≠ 2', '5   si x = 2') },
        { nota: 'Para el límite solo importa lo que pasa <b>cerca</b> de 2, no exactamente en 2. Hacemos la tabla.', html: tabla(['x', '1.9', '1.99', '2.01', '2.1'], [['f(x)', '2.9', '2.99', '3.01', '3.1']]) },
        { nota: 'Los valores se acercan a 3 por los dos lados.', html: row(c('g', LIM('2') + ' f(x) = 3')) },
        { nota: 'Dibujamos: la recta x + 1 con un hueco en (2, 3), y arriba, el punto suelto (2, 5). La función "salta" a 5 en ese punto.', html: g112() },
        { nota: 'Lo importante: el límite (3) y el valor de la función (5) son cosas distintas. El límite mira alrededor; f(2) mira solo el punto.', html: row(c('g', LIM('2') + ' f(x) = 3') + ' &nbsp; ≠ &nbsp; ' + c('p', 'f(2) = 5')) + say(box('el límite NO es f(2)'), 'y') }
      ]
    }
  ];

  /* ============================================================
     1.2  Límites laterales
     ============================================================ */
  function g121() {
    var g = fg(1, 3, 30, 'salto en x = 1: por la izquierda llega a 2, por la derecha sale de 4').ax(1);
    g.fn(function (x) { return 2 * x; }, -0.6, 1, B).fn(function (x) { return x + 3; }, 1, 4, K);
    g.hole(1, 2, B, '2', -16, 16).pt(1, 4, K, '4', 10, -8);
    g.ln(1, 0, 1, 4, D, true, 1.5);
    return g.out();
  }
  function g122() {
    var g = fg(1, 1.5, 40, 'parábola y recta que se juntan en (1, 1)').ax(1);
    g.fn(function (x) { return x * x; }, -1.5, 1, B).fn(function (x) { return 2 - x; }, 1, 3, K);
    g.pt(1, 1, G, '1', 10, -10);
    return g.out();
  }
  P['1.2'] = [
    {
      titulo: 'Límites laterales: cuando el límite NO existe',
      intro: 'Una función con un salto en x = 1. Miramos por separado izquierda y derecha.',
      pasos: [
        { nota: 'La función cambia de regla en x = 1: a la izquierda usa 2x, a la derecha usa x + 3. Queremos el límite cuando x → 1.', html: pw('2x   si x < 1', 'x + 3   si x ≥ 1') },
        { nota: '<b>Izquierda</b> (x → 1 con el signo −, o sea x menor que 1): ahí manda la regla 2x. Metemos x = 1 en esa regla.', html: row(c('b', 'lím<sub>x→1⁻</sub> 2x = 2·1 = ') + c('b', '2'), 'solo miramos valores menores que 1', 'b') },
        { nota: '<b>Derecha</b> (x → 1 con el signo +, o sea x mayor que 1): ahí manda x + 3.', html: row(c('p', 'lím<sub>x→1⁺</sub> (x + 3) = 1 + 3 = ') + c('p', '4'), 'solo miramos valores mayores que 1', 'p') },
        { nota: 'Comparamos los dos lados. Si fueran iguales, el límite existiría. Aquí uno llega a 2 y el otro a 4.', html: row(c('b', '2') + ' &nbsp; ≠ &nbsp; ' + c('p', '4'), 'no coinciden', 'r') },
        { nota: 'Se ve el salto en la gráfica: por la izquierda la curva llega a la altura 2 (hueco azul) y por la derecha arranca en 4 (punto rosa).', html: g121() },
        { nota: 'Regla: el límite existe solo si los dos laterales existen y son iguales. Aquí no lo son.', html: say(LIM('1') + ' f(x) ' + box('no existe'), 'r') }
      ]
    },
    {
      titulo: 'Laterales iguales: el límite sí existe',
      intro: 'Una parábola que se pega con una recta.',
      pasos: [
        { nota: 'Otra función con dos reglas. Esta vez las dos se encuentran en x = 1. ¿Existe el límite?', html: pw('x²   si x < 1', '2 − x   si x ≥ 1') },
        { nota: 'Por la izquierda usamos x²: sustituimos x = 1.', html: row(c('b', 'lím<sub>x→1⁻</sub> x² = 1² = 1')) },
        { nota: 'Por la derecha usamos 2 − x.', html: row(c('p', 'lím<sub>x→1⁺</sub> (2 − x) = 2 − 1 = 1')) },
        { nota: '¡Los dos laterales dan 1! Los trenes llegan a la misma estación.', html: row(c('b', '1') + ' &nbsp; = &nbsp; ' + c('p', '1'), 'coinciden', 'g') },
        { nota: 'En la gráfica las dos ramas se tocan en el punto (1, 1): no hay salto ni hueco.', html: g122() },
        { nota: 'Como los laterales son iguales, el límite existe y vale ese número.', html: say(LIM('1') + ' f(x) = ' + box('1'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.3  Cálculo de límites
     ============================================================ */
  P['1.3'] = [
    {
      titulo: 'Sustitución directa (propiedades)',
      intro: 'Si al sustituir no sale 0 abajo, basta con reemplazar x.',
      pasos: [
        { nota: 'Calculemos este límite. Las propiedades dicen que el límite de una suma, producto o cociente es la suma, producto o cociente de los límites.', html: row(LIM('3') + ' ' + f('2x² − 3x + 1', 'x + 1')) },
        { nota: 'Probamos sustituir x = 3 en el denominador primero: 3 + 1 = 4. No da cero, así que se puede.', html: row('x + 1 → 3 + 1 = 4 ' + c('g', '✓'), 'el denominador no es 0', 'g') },
        { nota: 'Sustituimos x = 3 en todo, con cuidado con la potencia: 3² = 9.', html: row(f('2·3² − 3·3 + 1', '3 + 1')) },
        { nota: 'Hacemos las cuentas del numerador: 2·9 = 18; 18 − 9 + 1 = 10.', html: row('= ' + f('18 − 9 + 1', '4') + ' = ' + f('10', '4')) },
        { nota: 'Simplificamos la fracción dividiendo entre 2.', html: say(LIM('3') + ' ' + f('2x² − 3x + 1', 'x + 1') + ' = ' + box(f('5', '2')), 'g') }
      ]
    },
    {
      titulo: 'Forma 0/0 con factorización',
      intro: 'Calcular ' + LIM('3') + ' (x² − x − 6)/(x − 3).',
      pasos: [
        { nota: 'Empezamos siempre sustituyendo. Si sale un número, listo. Probemos.', html: row(LIM('3') + ' ' + f('x² − x − 6', 'x − 3')) },
        { nota: 'Sale 0/0: una indeterminación. No es la respuesta, es una señal de que hay un factor (x − 3) escondido arriba y abajo.', html: row(f('3² − 3 − 6', '3 − 3') + ' = ' + f('0', '0'), 'indeterminado: hay que factorizar', 'r') },
        { nota: 'Factorizamos el numerador. Buscamos dos números que multipliquen −6 y sumen −1: son −3 y 2.', html: row('x² − x − 6 = ' + c('y', '(x − 3)') + '(x + 2)', 'porque (−3)(2) = −6 y −3 + 2 = −1', 'y') },
        { nota: 'Reescribimos la fracción con el numerador factorizado.', html: row(f(c('y', '(x − 3)') + '(x + 2)', c('y', '(x − 3)'))) },
        { nota: 'Como x se acerca a 3 pero no es 3, (x − 3) no es cero y se puede <b>cancelar</b>. Tachamos.', html: row(f(tach('(x − 3)') + '(x + 2)', tach('(x − 3)')) + ' = x + 2', 'se cancelan', 'r') },
        { nota: 'Ahora sí sustituimos x = 3 en lo que quedó.', html: row(LIM('3') + ' (x + 2) = 3 + 2') },
        { nota: 'Respuesta. Recuerda: 0/0 se resuelve factorizando y cancelando.', html: say(box('5'), 'g') }
      ]
    },
    {
      titulo: 'Forma 0/0 con racionalización',
      intro: 'Cuando hay una raíz: multiplicamos por el conjugado. ' + LIM('0') + ' (√(x + 4) − 2)/x.',
      pasos: [
        { nota: 'Aquí no se puede factorizar fácil porque hay una raíz. Sustituimos x = 0 para ver qué pasa.', html: row(LIM('0') + ' ' + f('√(x + 4) − 2', 'x')) },
        { nota: 'Sale 0/0 otra vez (√4 − 2 = 0). Usamos el truco del <b>conjugado</b>: el mismo binomio con el signo del medio cambiado.', html: row(f('√4 − 2', '0') + ' = ' + f('0', '0'), 'indeterminado', 'r') + row('conjugado de ' + c('y', '√(x + 4) − 2') + ' es ' + c('p', '√(x + 4) + 2')) },
        { nota: 'Multiplicamos arriba y abajo por el conjugado. Es como multiplicar por 1, no cambia el valor.', html: row(f('√(x + 4) − 2', 'x') + ' · ' + c('p', f('√(x + 4) + 2', '√(x + 4) + 2')), 'multiplicamos por 1', 'p') },
        { nota: 'Arriba tenemos (a − b)(a + b) = a² − b². Aquí a² = x + 4 y b² = 4.', html: row(f('(x + 4) − 4', 'x(√(x + 4) + 2)')) },
        { nota: 'Arriba queda x + 4 − 4 = x. ¡Ya apareció una x arriba!', html: row(f(c('y', 'x'), 'x(√(x + 4) + 2)')) },
        { nota: 'Cancelamos la x de arriba con la x de abajo.', html: row(f(tach('x'), tach('x') + '(√(x + 4) + 2)') + ' = ' + f('1', '√(x + 4) + 2'), 'se cancela', 'r') },
        { nota: 'Ahora sustituimos x = 0: √4 = 2, y 2 + 2 = 4.', html: row(LIM('0') + ' ' + f('1', '√(0 + 4) + 2') + ' = ' + f('1', '2 + 2')) },
        { nota: 'Respuesta final.', html: say(box(f('1', '4')), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.4  Límites al infinito y asíntotas
     ============================================================ */
  function g141(stage) {
    var h = function (x) { return 2 + 3 / (x - 1); };
    var g = fg(1, 2, 30, 'hipérbola con asíntotas x = 1 y y = 2').ax(1);
    if (stage > 0) g.ln(1, -2.3, 1, 6.3, Y, true, 2.2).t(1, 6.3, 'x = 1', Y, 8, 2, null, 15);
    if (stage > 1) g.ln(-6, 2, 8, 2, G, true, 2.2).t(8, 2, 'y = 2', G, -4, -8, 'end', 15);
    g.fn(h, -6, 0.3, W, 60).fn(h, 1.7, 8, W, 60);
    return g.out();
  }
  function g143() {
    var h = function (x) { return x + 1 / x; };
    var g = fg(0, 0, 30, 'curva y = x + 1/x con asíntota oblicua y = x').ax(1);
    g.ln(-4.2, -4.2, 4.2, 4.2, G, true, 2.2).t(4, 4, 'y = x', G, -8, 22, 'end', 15).ln(0, -4.3, 0, 4.3, Y, true, 2.2);
    g.fn(h, 0.24, 4.2, W, 60).fn(h, -4.2, -0.24, W, 60);
    return g.out();
  }
  P['1.4'] = [
    {
      titulo: 'Límite al infinito: dividir entre la mayor potencia',
      intro: 'Calcular ' + LIM('∞') + ' (3x² + 2x)/(x² − 5).',
      pasos: [
        { nota: 'Ahora x se hace gigante (1000, un millón...). Si sustituimos "infinito" sale ∞/∞, que no se puede resolver así.', html: row(LIM('∞') + ' ' + f('3x² + 2x', 'x² − 5') + ' = ' + f('∞', '∞') + ' ' + c('r', '?!'), 'indeterminado', 'r') },
        { nota: 'El truco: dividimos <b>cada término</b> de arriba y de abajo entre la mayor potencia de x que aparece. Aquí es x².', html: row(f('3x² + 2x', 'x² − 5')) + flecha('÷ x² todo', 'y') },
        { nota: 'Cada término se divide por x²: 3x²/x² = 3; 2x/x² = 2/x; x²/x² = 1; 5/x².', html: row(f('3 + ' + f('2', 'x'), '1 − ' + f('5', 'x²'))) },
        { nota: 'Cuando x es enorme, 2/x y 5/x² se hacen casi 0 (un número fijo repartido entre algo gigante).', html: row(LIM('∞') + ' ' + f('2', 'x') + ' = 0 &nbsp;&nbsp; ' + LIM('∞') + ' ' + f('5', 'x²') + ' = 0', 'se hacen cero', 'g') },
        { nota: 'Lo comprobamos con números: mira cómo f(x) se pega a 3 cuando x crece.', html: tabla(['x', '10', '100', '1000'], [['f(x)', '3.37', '3.02', '3.002']]) },
        { nota: 'Sustituimos esos ceros y nos queda 3 entre 1.', html: row(f('3 + ' + c('g', '0'), '1 − ' + c('g', '0')) + ' = ' + f('3', '1')) },
        { nota: 'Respuesta. (Regla rápida: si arriba y abajo tienen el mismo grado, el límite es el cociente de los coeficientes mayores: 3/1.)', html: say(box('3'), 'g') }
      ]
    },
    {
      titulo: 'Asíntotas vertical y horizontal',
      intro: 'Hallar las asíntotas de f(x) = (2x + 1)/(x − 1).',
      pasos: [
        { nota: 'Una asíntota es una recta a la que la gráfica se acerca cada vez más sin tocarla. Buscamos las verticales y las horizontales.', html: row('f(x) = ' + f('2x + 1', 'x − 1')) },
        { nota: '<b>Vertical:</b> miramos dónde el denominador vale 0. x − 1 = 0 cuando x = 1. Arriba vale 2·1 + 1 = 3, que no es 0, así que ahí la función se dispara.', html: row('x − 1 = 0 ⇒ ' + c('y', 'x = 1'), 'asíntota vertical', 'y') },
        { nota: 'Para confirmarlo: cerca de x = 1 el denominador es casi 0 y el resultado es enorme.', html: row(LIM('1⁺') + ' ' + f('2x + 1', 'x − 1') + ' = +∞ &nbsp;&nbsp; ' + LIM('1⁻') + ' ' + f('2x + 1', 'x − 1') + ' = −∞') },
        { nota: '<b>Horizontal:</b> vemos qué pasa cuando x → ∞. Mismo grado arriba y abajo: dividimos los coeficientes mayores, 2 entre 1.', html: row(LIM('∞') + ' ' + f('2x + 1', 'x − 1') + ' = ' + f('2 + ' + f('1', 'x'), '1 − ' + f('1', 'x')) + ' → ' + c('g', '2'), 'asíntota horizontal', 'g') },
        { nota: 'Dibujamos la curva con la asíntota vertical x = 1 (línea amarilla punteada). La gráfica se pega a ella hacia arriba y hacia abajo.', html: g141(1) },
        { nota: 'Agregamos la horizontal y = 2 (verde). A la izquierda y a la derecha la curva se acerca a esa altura.', reemplaza: true, html: g141(2) },
        { nota: 'Resumen de la lección.', html: say(c('y', 'vertical: x = 1') + ' &nbsp;&nbsp; ' + c('g', 'horizontal: y = 2'), 'w') }
      ]
    },
    {
      titulo: 'Asíntota oblicua',
      intro: 'Cuando el grado de arriba es uno más que el de abajo: f(x) = (x² + 1)/x.',
      pasos: [
        { nota: 'Arriba hay x² y abajo x: el de arriba es un grado mayor. Eso avisa de una asíntota <b>oblicua</b> (inclinada).', html: row('f(x) = ' + f('x² + 1', 'x')) },
        { nota: 'Hacemos la división: separamos cada término del numerador entre x.', html: row(f('x² + 1', 'x') + ' = ' + f('x²', 'x') + ' + ' + f('1', 'x') + ' = ' + c('g', 'x') + ' + ' + c('p', f('1', 'x'))) },
        { nota: 'Cuando x es gigante, 1/x se vuelve casi 0, así que f(x) se parece cada vez más a x.', html: row(LIM('∞') + ' ' + f('1', 'x') + ' = 0 ⇒ f(x) ≈ x', 'el sobrante desaparece', 'p') },
        { nota: 'La asíntota oblicua es la recta y = x (la parte "grande" de la división).', html: row(box('y = x'), 'asíntota oblicua', 'g') },
        { nota: 'En la gráfica, la curva se pega a la diagonal verde cuando x es grande, y al eje y (x = 0) también es asíntota vertical.', html: g143() }
      ]
    }
  ];

  /* ============================================================
     1.5  Continuidad
     ============================================================ */
  function g151(stage) {
    var g = fg(2, 4, 30, 'recta con hueco en (2, 4) y punto en (2, 3)').ax(1).fn(function (x) { return x + 2; }, -1.5, 5.5, W);
    g.hole(2, 4, Y, '4', -16, -6);
    g.pt(2, 3, K, 'f(2) = 3', 10, 16);
    if (stage > 0) { g.ln(2, 3, 2, 4, G, true, 2.4); }
    return g.out();
  }
  function g152() {
    var g = fg(2, 3, 28, 'recta x + 1 que se une con la parábola x² − 1 en (2, 3)').ax(1);
    g.fn(function (x) { return x + 1; }, -0.3, 2, B).fn(function (x) { return x * x - 1; }, 2, 2.85, K, 40);
    g.pt(2, 3, G, '(2, 3)', 10, 18);
    return g.out();
  }
  function g153() {
    var h = function (x) { return x * x * x - x - 1; };
    var g = fg(1.4, 2, 22, 'curva x³ − x − 1 que cruza el eje x entre 1 y 2').ax(1).fn(h, 0.3, 2.2, W, 70);
    g.pt(1, -1, B, 'f(1) = −1', -10, 22, 'end').pt(2, 5, K, 'f(2) = 5', -10, -6, 'end');
    g.pt(1.3247, 0, G, 'raíz', 8, 20);
    return g.out();
  }
  P['1.5'] = [
    {
      titulo: 'Las tres condiciones de continuidad',
      intro: 'Revisar si f es continua en x = 2, donde f(x) = (x² − 4)/(x − 2) si x ≠ 2 y f(2) = 3.',
      pasos: [
        { nota: 'Continua significa que puedes dibujar la gráfica sin levantar la tiza. Para comprobarlo en x = 2 revisamos tres cosas.', html: pw(f('x² − 4', 'x − 2') + '   si x ≠ 2', '3   si x = 2') },
        { nota: '<b>Condición 1:</b> ¿existe f(2)? Sí, el enunciado dice que vale 3.', html: row(c('y', 'f(2) = 3') + ' ' + c('g', '✓'), 'sí existe', 'g') },
        { nota: '<b>Condición 2:</b> ¿existe el límite? Factorizamos x² − 4 = (x − 2)(x + 2), cancelamos (x − 2) y sustituimos.', html: row(LIM('2') + ' ' + f('(x − 2)(x + 2)', 'x − 2') + ' = ' + LIM('2') + ' (x + 2) = ' + c('p', '4') + ' ' + c('g', '✓'), 'sí existe', 'g') },
        { nota: '<b>Condición 3:</b> el límite y el valor de la función deben ser iguales. Comparamos 4 con 3.', html: row(c('p', '4') + ' ≠ ' + c('y', '3') + ' ' + c('r', '✗'), 'no son iguales', 'r') },
        { nota: 'En la gráfica: la recta pasa por un hueco en (2, 4), pero la función vale 3 en x = 2. Hay que "levantar la tiza".', html: g151(0) },
        { nota: 'Al faltar la condición 3, no es continua. Como el límite existe, es una discontinuidad <b>removible</b>: se arregla definiendo f(2) = 4.', reemplaza: true, html: g151(1) + say('no es continua en x = 2: ' + box('removible'), 'r') + say('se repara con ' + c('g', 'f(2) = 4'), 'g') }
      ]
    },
    {
      titulo: 'Hallar k para que sea continua',
      intro: 'f(x) = kx + 1 si x < 2 y f(x) = x² − 1 si x ≥ 2.',
      pasos: [
        { nota: 'Queremos que las dos reglas se unan sin saltos en x = 2. El truco: que lo que llega por la izquierda sea igual a lo que llega por la derecha.', html: pw('kx + 1   si x < 2', 'x² − 1   si x ≥ 2') },
        { nota: 'Límite por la izquierda: usamos kx + 1 con x = 2.', html: row(c('b', 'lím<sub>x→2⁻</sub> (kx + 1) = 2k + 1')) },
        { nota: 'Límite por la derecha (y valor de la función): usamos x² − 1 con x = 2.', html: row(c('p', 'lím<sub>x→2⁺</sub> (x² − 1) = 4 − 1 = 3')) },
        { nota: 'Para que sean continua, igualamos los dos.', html: row(c('b', '2k + 1') + ' = ' + c('p', '3'), 'laterales iguales', 'g') },
        { nota: 'Resolvemos: restamos 1 a los dos lados, luego dividimos entre 2.', html: row('2k = 2') + row('k = ' + f('2', '2') + ' = ' + c('g', '1')) },
        { nota: 'Comprobamos con k = 1: queda x + 1 a la izquierda, que en x = 2 llega a 3, igual que la parábola. La gráfica se une.', html: say('k = ' + box('1'), 'g') + g152() }
      ]
    },
    {
      titulo: 'Teorema del Valor Intermedio',
      intro: 'Demostrar que x³ − x − 1 = 0 tiene una solución entre 1 y 2.',
      pasos: [
        { nota: 'No vamos a resolver la ecuación: solo queremos asegurar que hay una solución en [1, 2]. Llamamos f(x) a la expresión.', html: row('f(x) = x³ − x − 1') },
        { nota: 'f es un polinomio, así que es continua en todos lados (no tiene saltos ni huecos).', html: row('polinomio ⇒ ' + c('g', 'continua en [1, 2]'), 'condición del teorema', 'g') },
        { nota: 'Evaluamos en los extremos del intervalo.', html: row('f(1) = 1 − 1 − 1 = ' + c('b', '−1')) + row('f(2) = 8 − 2 − 1 = ' + c('p', '5')) },
        { nota: 'En x = 1 la función está debajo del eje (−1) y en x = 2 está arriba (5). Como no tiene saltos, al subir tiene que cruzar la altura 0.', html: row(c('b', '−1') + ' &nbsp; < &nbsp; ' + c('y', '0') + ' &nbsp; < &nbsp; ' + c('p', '5'), 'el 0 está en medio', 'y') },
        { nota: 'Así se ve: la curva sale por debajo del eje x y sube por encima, así que cruza el eje en algún punto verde.', html: g153() },
        { nota: 'Conclusión por el Teorema del Valor Intermedio: existe un c entre 1 y 2 con f(c) = 0.', html: say(box('hay una raíz en (1, 2)'), 'g') },
        { nota: 'Para afinar: f(1.5) = 3.375 − 1.5 − 1 = 0.875 > 0. Como f(1) < 0, la raíz está entre 1 y 1.5.', html: row('f(1.5) = ' + c('p', '0.875') + ' ⇒ raíz en (1, 1.5)', 'la solución real es ≈ 1.32', 'g') }
      ]
    }
  ];
})(window.PZ);

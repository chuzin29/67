/* pizarra-1a-6c.js — Métodos en pizarra, 1.er año, tema 1.17 */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, tabla = PZ.tabla;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', R = '#ff8a80';
  function svg(inner, h) { return '<svg viewBox="0 0 420 ' + (h || 190) + '" class="pz-tij" role="img" aria-hidden="true">' + inner + '</svg>'; }
  function t(x, y, s, col, sz, anc) { return '<text x="' + x + '" y="' + y + '" fill="' + (col || W) + '" font-size="' + (sz || 15) + '" text-anchor="' + (anc || 'middle') + '" style="font-family:\'Patrick Hand\',cursive">' + s + '</text>'; }

  /* circunferencia unitaria con puntos. pts: [{a, col, lab, dx, dy, anc}]; guia: 'h' (recta y = k) o 'v' (recta x = k) */
  function circulo(pts, guia, tit) {
    var cx = 210, cy = 95, r = 70, s = '';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + W + '" stroke-opacity=".7" stroke-width="2"/>';
    s += '<path d="M115 95H305M210 10V180" stroke="' + W + '" stroke-opacity=".6" stroke-width="2"/>';
    s += t(312, 99, 'x', W, 14, 'start') + t(215, 14, 'y', W, 14, 'start');
    s += t(cx + r + 4, cy + 14, '1', W, 12, 'start') + t(cx - r - 4, cy + 14, '−1', W, 12, 'end');
    if (guia) {
      if (guia.tipo === 'h') {
        var gy = cy - r * guia.k;
        s += '<line x1="115" y1="' + gy.toFixed(1) + '" x2="305" y2="' + gy.toFixed(1) + '" stroke="' + B + '" stroke-width="2" stroke-dasharray="6 5"/>';
        s += t(310, (gy + 4).toFixed(1), guia.lab, B, 13, 'start');
      } else {
        var gx = cx + r * guia.k;
        s += '<line x1="' + gx.toFixed(1) + '" y1="10" x2="' + gx.toFixed(1) + '" y2="180" stroke="' + B + '" stroke-width="2" stroke-dasharray="6 5"/>';
        s += t(gx.toFixed(1), 8, guia.lab, B, 13, 'middle');
      }
    }
    (pts || []).forEach(function (p) {
      var rad = p.a * Math.PI / 180, px = cx + r * Math.cos(rad), py = cy - r * Math.sin(rad);
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + px.toFixed(1) + '" y2="' + py.toFixed(1) + '" stroke="' + p.col + '" stroke-width="3"/>';
      s += '<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="5" fill="' + p.col + '"/>';
      s += t((px + (p.dx || 0)).toFixed(1), (py + (p.dy || 0)).toFixed(1), p.lab, p.col, 14, p.anc || 'middle');
    });
    return svg(s, 190);
  }

  P['1.17'] = [
    {
      titulo: 'sen x = 1/2 en [0°, 360°)',
      intro: 'Buscamos todos los ángulos de una vuelta cuyo seno vale 1/2.',
      pasos: [
        { nota: 'Primero el ángulo agudo que conocemos: el seno de 30° es 1/2.', html: row('sen x = ' + f('1', '2')) + row(c('y', 'sen 30° = ' + f('1', '2'))) },
        { nota: 'El seno es la altura y del punto. La recta y = 1/2 corta la circunferencia en dos puntos.', html: row('seno = altura y') + circulo([], { tipo: 'h', k: 0.5, lab: 'y = 1/2' }) },
        { nota: 'Un punto está en el cuadrante I (30°) y el otro en el II (150°), porque allí el seno también es positivo.', reemplaza: true, html: row(c('y', '30°') + ' &nbsp; ' + c('p', '150°')) + circulo([{ a: 30, col: Y, lab: '30°', dx: 8, dy: -8, anc: 'start' }, { a: 150, col: K, lab: '150°', dx: -8, dy: -8, anc: 'end' }], { tipo: 'h', k: 0.5, lab: 'y = 1/2' }) },
        { nota: 'En el cuadrante II la referencia es 30°: 180° − 30° = 150°.', html: row(c('y', 'x = 30°')) + row(c('p', 'x = 180° − 30° = 150°')) },
        { nota: 'Comprobamos: sen 150° = 1/2. Ambas sirven.', html: say(box('x = 30° o x = 150°'), 'g') }
      ]
    },
    {
      titulo: 'cos x = −√2/2',
      intro: 'El coseno negativo nos manda a los cuadrantes II y III.',
      pasos: [
        { nota: 'Ignoramos el signo y buscamos la referencia: cos 45° = √2/2, así que α = 45°.', html: row('cos x = −' + f('√2', '2')) + row(c('y', 'α = 45°')) },
        { nota: 'El coseno es la coordenada x. La recta x = −√2/2 queda a la izquierda y corta la circunferencia dos veces.', html: row('coseno = posición x') + circulo([], { tipo: 'v', k: -Math.SQRT1_2, lab: 'x = −√2/2' }) },
        { nota: 'Coseno negativo: cuadrantes II y III. Los dos puntos se ven en la figura.', reemplaza: true, html: row(c('p', '135°') + ' &nbsp; ' + c('y', '225°')) + circulo([{ a: 135, col: K, lab: '135°', dx: -8, dy: -6, anc: 'end' }, { a: 225, col: Y, lab: '225°', dx: -8, dy: 14, anc: 'end' }], { tipo: 'v', k: -Math.SQRT1_2, lab: 'x = −√2/2' }) },
        { nota: 'Cuadrante II: 180° − 45°. Cuadrante III: 180° + 45°.', html: row(c('p', 'x = 180° − 45° = 135°')) + row(c('y', 'x = 180° + 45° = 225°')) },
        { nota: 'Las dos soluciones en [0°, 360°).', html: say(box('x = 135° o x = 225°'), 'g') }
      ]
    },
    {
      titulo: '2sen²x − sen x = 0 por factorización',
      intro: 'No dividimos entre sen x: sacamos factor común para no perder soluciones.',
      pasos: [
        { nota: 'Las dos partes tienen sen x. Lo sacamos como factor común.', html: row('2sen²x − sen x = 0') + PZ.flecha('factor común') + row('sen x (2sen x − 1) = 0') },
        { nota: 'Si un producto vale 0, algún factor vale 0. Salen dos ecuaciones sencillas.', html: row(c('b', 'sen x = 0') + ' &nbsp; o &nbsp; ' + c('y', '2sen x − 1 = 0')) },
        { nota: 'Resolvemos cada una. La segunda: 2sen x = 1, así que sen x = 1/2.', html: row(c('b', 'sen x = 0') + ' → x = 0°, 180°') + row(c('y', 'sen x = ' + f('1', '2'))) + row(c('y', '→ x = 30°, 150°')) },
        { nota: 'Juntamos todo en una tabla.', html: tabla(['ecuación', 'soluciones'], [['sen x = 0', '0°, 180°'], ['sen x = 1/2', '30°, 150°']]) },
        { nota: 'Cuatro soluciones en [0°, 360°).', html: say(box('x = 0°, 30°, 150°, 180°'), 'g') }
      ]
    },
    {
      titulo: '2cos²x + sen x − 1 = 0',
      intro: 'Mezcla seno y coseno: usamos la identidad para dejar solo seno.',
      pasos: [
        { nota: 'Hay cos² y sen. Reemplazamos cos²x por 1 − sen²x para tener una sola razón.', html: row('2cos²x + sen x − 1 = 0') + row(c('b', 'cos²x = 1 − sen²x')) },
        { nota: 'Sustituimos y desarrollamos: 2 − 2sen²x + sen x − 1 = 0.', html: row('2(1 − sen²x) + sen x − 1 = 0') + row('−2sen²x + sen x + 1 = 0') },
        { nota: 'Multiplicamos por −1 para que quede una cuadrática en sen x.', html: row(c('y', '2sen²x − sen x − 1 = 0')) + PZ.flecha('factorizamos') + row('(2sen x + 1)(sen x − 1) = 0') },
        { nota: 'Cada factor da un valor del seno.', html: row(c('y', 'sen x = 1') + ' &nbsp; o &nbsp; ' + c('p', 'sen x = −' + f('1', '2'))) },
        { nota: 'sen x = 1 ocurre solo en 90°. sen x = −1/2 tiene referencia 30° en los cuadrantes III y IV: 180° + 30° y 360° − 30°.', html: tabla(['sen x', 'soluciones'], [['1', '90°'], ['−1/2', '210°, 330°']]) },
        { nota: 'Tres soluciones en [0°, 360°).', html: say(box('x = 90°, 210°, 330°'), 'g') }
      ]
    }
  ];

})(window.PZ);

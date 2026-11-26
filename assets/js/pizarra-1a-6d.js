/* pizarra-1a-6d.js — Métodos en pizarra, 1.er año, tema 1.18 */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', D = '#f4f6ef66';
  var RAD = Math.PI / 180;

  function fg(cx, cy, u, label) {
    var s = '';
    function X(x) { return +(210 + (x - cx) * u).toFixed(1); }
    function Yp(y) { return +(130 - (y - cy) * u).toFixed(1); }
    var o = {
      grid: function () {
        var x0 = Math.ceil(cx - 210 / u), x1 = Math.floor(cx + 210 / u), y0 = Math.ceil(cy - 130 / u), y1 = Math.floor(cy + 130 / u), i;
        for (i = x0; i <= x1; i++) s += '<line x1="' + X(i) + '" y1="0" x2="' + X(i) + '" y2="260" stroke="#f4f6ef" stroke-opacity=".08"/>';
        for (i = y0; i <= y1; i++) s += '<line x1="0" y1="' + Yp(i) + '" x2="420" y2="' + Yp(i) + '" stroke="#f4f6ef" stroke-opacity=".08"/>';
        return o;
      },
      ax: function (st, xlab, ylab) {
        var ox = X(0), oy = Yp(0), i, x0 = Math.ceil(cx - 205 / u), x1 = Math.floor(cx + 205 / u), y0 = Math.ceil(cy - 125 / u), y1 = Math.floor(cy + 125 / u);
        st = st || 1;
        if (oy > 8 && oy < 252) {
          s += '<path d="M4 ' + oy + 'H414 M406 ' + (oy - 5) + 'L414 ' + oy + 'L406 ' + (oy + 5) + '" stroke="' + D + '" stroke-width="2" fill="none"/><text x="404" y="' + (oy - 9) + '" fill="' + W + '" font-size="15" opacity=".8">' + (xlab || 'x') + '</text>';
          for (i = x0; i <= x1; i++) if (i !== 0 && i % st === 0) s += '<line x1="' + X(i) + '" y1="' + (oy - 3) + '" x2="' + X(i) + '" y2="' + (oy + 3) + '" stroke="' + D + '"/><text x="' + X(i) + '" y="' + (oy + 15) + '" fill="' + W + '" fill-opacity=".5" font-size="11" text-anchor="middle">' + String(i).replace('-', '−') + '</text>';
        }
        if (ox > 8 && ox < 412) {
          s += '<path d="M' + ox + ' 256V6 M' + (ox - 5) + ' 14L' + ox + ' 6L' + (ox + 5) + ' 14" stroke="' + D + '" stroke-width="2" fill="none"/><text x="' + (ox + 8) + '" y="16" fill="' + W + '" font-size="15" opacity=".8">' + (ylab || 'y') + '</text>';
          for (i = y0; i <= y1; i++) if (i !== 0 && i % st === 0) s += '<line x1="' + (ox - 3) + '" y1="' + Yp(i) + '" x2="' + (ox + 3) + '" y2="' + Yp(i) + '" stroke="' + D + '"/><text x="' + (ox - 7) + '" y="' + (Yp(i) + 4) + '" fill="' + W + '" fill-opacity=".5" font-size="11" text-anchor="end">' + String(i).replace('-', '−') + '</text>';
        }
        return o;
      },
      ln: function (x1, y1, x2, y2, col, dash, w) {
        s += '<line x1="' + X(x1) + '" y1="' + Yp(y1) + '" x2="' + X(x2) + '" y2="' + Yp(y2) + '" stroke="' + (col || W) + '" stroke-width="' + (w || 2.6) + '" stroke-linecap="round"' + (dash ? ' stroke-dasharray="7 6"' : '') + '/>';
        return o;
      },
      /* vector con punta de flecha, desde (x1,y1) hasta (x2,y2) */
      vec: function (x1, y1, x2, y2, col, lab, dx, dy, anc) {
        col = col || W;
        var ax1 = X(x1), ay1 = Yp(y1), ax2 = X(x2), ay2 = Yp(y2);
        var ang = Math.atan2(ay2 - ay1, ax2 - ax1);
        var p1x = ax2 - 10 * Math.cos(ang - 0.42), p1y = ay2 - 10 * Math.sin(ang - 0.42);
        var p2x = ax2 - 10 * Math.cos(ang + 0.42), p2y = ay2 - 10 * Math.sin(ang + 0.42);
        s += '<line x1="' + ax1 + '" y1="' + ay1 + '" x2="' + ax2 + '" y2="' + ay2 + '" stroke="' + col + '" stroke-width="3" stroke-linecap="round"/>';
        s += '<path d="M' + p1x + ' ' + p1y + 'L' + ax2 + ' ' + ay2 + 'L' + p2x + ' ' + p2y + '" stroke="' + col + '" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
        if (lab) o.t(x2, y2, lab, col, dx == null ? 8 : dx, dy == null ? -8 : dy, anc);
        return o;
      },
      pt: function (x, y, col, lab, dx, dy, anc) {
        s += '<circle cx="' + X(x) + '" cy="' + Yp(y) + '" r="4.5" fill="' + (col || Y) + '"/>';
        if (lab) o.t(x, y, lab, col || Y, dx == null ? 8 : dx, dy == null ? -8 : dy, anc);
        return o;
      },
      t: function (x, y, str, col, dx, dy, anc, sz) {
        s += '<text x="' + (X(x) + (dx || 0)) + '" y="' + (Yp(y) + (dy || 0)) + '" fill="' + (col || W) + '" font-size="' + (sz || 15) + '"' + (anc ? ' text-anchor="' + anc + '"' : '') + '>' + str + '</text>';
        return o;
      },
      cur: function (fn, t0, t1, col, n, dash, w) {
        var d = '', i, p, t; n = n || 120;
        for (i = 0; i <= n; i++) { t = t0 + (t1 - t0) * i / n; p = fn(t); d += (i ? 'L' : 'M') + X(p[0]) + ' ' + Yp(p[1]); }
        s += '<path d="' + d + '" fill="none" stroke="' + (col || W) + '" stroke-width="' + (w || 3) + '" stroke-linecap="round" stroke-linejoin="round"' + (dash ? ' stroke-dasharray="7 6"' : '') + '/>';
        return o;
      },
      arc: function (x, y, r, a1, a2, col) {
        return o.cur(function (a) { return [x + r * Math.cos(a * RAD), y + r * Math.sin(a * RAD)]; }, a1, a2, col, 40, false, 2.6);
      },
      out: function () {
        return '<svg viewBox="0 0 420 260" style="width:min(100%,470px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'figura') + '"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">' + s + '</g></svg>';
      }
    };
    return o;
  }


  function fa() { return fg(1, 1, 40, 'vectores a y b desde el origen').grid().ax(1).vec(0, 0, 2, 3, Y, 'a(2, 3)', 6, -6).vec(0, 0, 4, -1, B, 'b(4, −1)', 6, 14).out(); }
  function fb() {
    var g = fg(1.5, 1, 55, 'ángulo de 45° entre a y b').grid().ax(1);
    g.vec(0, 0, 1, 2, Y, 'a(1, 2)', 6, -6).vec(0, 0, 3, 1, B, 'b(3, 1)', 6, -4);
    g.arc(0, 0, 0.9, Math.atan2(1, 3) / RAD, Math.atan2(2, 1) / RAD, G).t(0.75, 0.6, 'θ = 45°', G, 0, 0);
    return g.out();
  }
  function fc() {
    var g = fg(0, 0, 40, 'vectores perpendiculares').grid().ax(1);
    g.vec(0, 0, 6, 3, Y, '', 0, 0).vec(0, 0, 2, -4, B, '(2, −4)', 6, 12);
    g.ln(0.9, 0.45, 1.3, -0.35, G, false, 2).ln(1.3, -0.35, 0.4, -0.8, G, false, 2);
    g.t(6, 3, '(6, 3)', Y, 6, -6).t(1.1, 0.1, '90°', G, 6, 4);
    return g.out();
  }
  function fd(n) {
    var g = fg(1.5, 1, 55, 'proyección de a sobre b').grid().ax(1);
    g.vec(0, 0, 1, 0, B, 'b(1, 0)', 0, 18);
    g.vec(0, 0, 3, 4, Y, 'a(3, 4)', 6, -6);
    if (n >= 1) g.ln(3, 4, 3, 0, D, true, 2).ln(2.75, 0, 2.75, 0.25, G, false, 2).ln(2.75, 0.25, 3, 0.25, G, false, 2);
    if (n >= 2) g.vec(0, 0, 3, 0, G, 'proy = (3, 0)', -30, 18);
    return g.out();
  }

  P['1.18'] = [
    {
      titulo: 'Producto escalar en componentes',
      intro: 'Calcular a·b con a = (2, 3) y b = (4, −1).',
      pasos: [
        { nota: 'Dos vectores en el plano. Queremos un solo número que los combine.', html: row('a = (2, 3) &nbsp;&nbsp; b = (4, −1)') + fa() },
        { nota: 'Regla: multiplicamos primera con primera y segunda con segunda.', html: row(c('y', 'a·b = a₁b₁ + a₂b₂')) },
        { nota: 'Sustituimos los números. Ojo con el signo de −1.', html: row(c('b', 'a·b = 2·4 + 3·(−1)')) },
        { nota: 'Resolvemos cada producto: 8 y −3.', html: row('a·b = 8 − 3') },
        { nota: 'El resultado es un número, no un vector. Como es positivo, el ángulo es agudo.', html: say(box('a·b = 5'), 'g') }
      ]
    },
    {
      titulo: 'Ángulo entre dos vectores',
      intro: 'Hallar el ángulo θ entre a = (1, 2) y b = (3, 1).',
      pasos: [
        { nota: 'Dibujamos los vectores: parece un ángulo pequeño entre ellos.', html: row('a = (1, 2) &nbsp;&nbsp; b = (3, 1)') + fb() },
        { nota: 'Usamos la fórmula del coseno con el producto escalar y las longitudes.', html: row(c('y', 'cos θ = ' + f('a·b', '‖a‖·‖b‖'))) },
        { nota: 'Producto escalar: 1·3 + 2·1 = 5.', html: row(c('b', 'a·b = 3 + 2 = 5')) },
        { nota: 'Longitudes: ‖a‖ = √5 y ‖b‖ = √10.', html: row('‖a‖ = √(1 + 4) = √5 &nbsp;&nbsp; ‖b‖ = √(9 + 1) = √10') },
        { nota: 'Sustituimos y simplificamos: √5·√10 = √50 = 5√2.', html: row('cos θ = ' + f('5', '√5·√10') + ' = ' + f('5', '5√2') + ' = ' + f('1', '√2')) },
        { nota: 'El ángulo cuyo coseno es 1/√2 vale 45°.', html: say(box('θ = 45°'), 'g') }
      ]
    },
    {
      titulo: 'Ortogonalidad: hallar k',
      intro: '¿Para qué valor de k son perpendiculares (k, 3) y (2, −4)?',
      pasos: [
        { nota: 'Perpendiculares significa ángulo de 90°, y cos 90° = 0.', html: row('(k, 3) ⟂ (2, −4)') },
        { nota: 'Por eso su producto escalar debe ser cero.', html: row(c('y', 'a·b = 0')) },
        { nota: 'Planteamos el producto escalar en componentes.', html: row(c('b', 'k·2 + 3·(−4) = 0')) },
        { nota: 'Simplificamos: 2k − 12 = 0.', html: row('2k − 12 = 0') },
        { nota: 'Despejamos k: 2k = 12.', html: row(c('g', 'k = 6')) },
        { nota: 'Comprobamos: (6, 3)·(2, −4) = 12 − 12 = 0. En la figura forman un ángulo recto.', reemplaza: true, html: say(box('k = 6'), 'g') + fc() }
      ]
    },
    {
      titulo: 'Proyección de a sobre b',
      intro: 'Proyectar a = (3, 4) sobre b = (1, 0).',
      pasos: [
        { nota: 'Imaginamos la sombra de a sobre la recta de b, con una luz desde arriba.', html: row('a = (3, 4) &nbsp;&nbsp; b = (1, 0)') + fd(0) },
        { nota: 'Proyección escalar: a·b dividido entre la longitud de b.', html: row(c('y', 'proy escalar = ' + f('a·b', '‖b‖'))) },
        { nota: 'a·b = 3·1 + 4·0 = 3 y ‖b‖ = 1.', html: row(c('b', f('3', '1') + ' = 3')) },
        { nota: 'La línea punteada baja en vertical y toca b formando un ángulo recto.', reemplaza: true, html: fd(1) },
        { nota: 'Proyección vectorial: el escalar por el vector unitario de b: 3·(1, 0).', html: row(c('g', 'proy = 3·(1, 0) = (3, 0)')) },
        { nota: 'Es la sombra de a sobre el eje x.', reemplaza: true, html: say(box('escalar = 3 &nbsp; vector = (3, 0)'), 'g') + fd(2) }
      ]
    }
  ];
})(window.PZ);

/* pizarra-1a-4.js — Métodos en pizarra, 1.er año, temas 1.12 a 1.13 */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', D = '#f4f6ef66';
  var RAD = Math.PI / 180;

  /* ---------- mini-ayudante para dibujar figuras con tiza (coordenadas matemáticas) ---------- */
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

  /* ============================================================
     1.12  Álgebra vectorial en R²
     ============================================================ */

  /* --- Lección 1: suma con escalares, 2u + 3v --- */
  function v1a() {
    var g = fg(1, -1, 16, 'vectores u y v desde el origen').grid().ax(2);
    g.vec(0, 0, 3, -4, Y, 'u(3, −4)', 8, 4).vec(0, 0, 1, 2, B, 'v(1, 2)', 8, -6);
    return g.out();
  }
  function v1b() {
    var g = fg(1, -1, 16, '2u y 3v, más largos y con el mismo sentido').grid().ax(2);
    g.vec(0, 0, 3, -4, Y, '', 0, 0).vec(0, 0, 1, 2, B, '', 0, 0);
    g.vec(0, 0, 6, -8, Y, '2u(6, −8)', 8, 4).vec(0, 0, 3, 6, B, '3v(3, 6)', 8, -6);
    return g.out();
  }
  function v1c() {
    var g = fg(1, -1, 16, 'suma punta-cola de 2u y 3v').grid().ax(2);
    g.vec(0, 0, 6, -8, Y, '2u', -10, 10, 'end');
    g.vec(6, -8, 9, -2, B, '3v', 8, -2);
    g.vec(0, 0, 9, -2, G, '2u + 3v = (9, −2)', 10, 6);
    return g.out();
  }

  P['1.12'] = [
    {
      titulo: 'Suma de vectores con escalares',
      intro: 'Dados u = (3, −4) y v = (1, 2), calcular el vector resultante de 2u + 3v.',
      pasos: [
        { nota: 'Tenemos dos vectores en componentes. Antes de operar, los dibujamos desde el origen para ver su tamaño y dirección.', html: row('u = (3, −4) &nbsp;&nbsp; v = (1, 2)') + v1a() },
        { nota: 'Multiplicar por un escalar multiplica cada componente. Como 2 > 1, el vector 2u conserva su sentido pero se alarga al doble.', html: row(c('y', '2u = 2(3, −4) = (6, −8)')) },
        { nota: 'Lo mismo con v: cada componente se multiplica por 3. 3v también conserva su sentido, solo que ahora mide el triple.', html: row(c('b', '3v = 3(1, 2) = (3, 6)')) },
        { nota: 'Así se ven los nuevos vectores: más largos que u y v, pero apuntando hacia el mismo lado que ellos.', reemplaza: true, html: v1b() },
        { nota: 'Para sumar, se opera componente a componente: las primeras componentes entre sí, y las segundas entre sí.', html: row(c('g', '2u + 3v = (6 + 3, −8 + 6)')) },
        { nota: 'Geométricamente es la regla punta-cola: dibujamos 3v comenzando justo donde termina 2u; el vector resultante (verde) va del origen a esa punta final.', reemplaza: true, html: v1c() },
        { nota: 'Comprobamos la aritmética: 6 + 3 = 9 y −8 + 6 = −2. Coincide con lo que mide el vector verde en la figura.', html: say(box('2u + 3v = (9, −2)'), 'g') }
      ]
    },
    {
      titulo: 'Norma y vector unitario',
      intro: 'Dado v = (5, 12), hallar su norma ||v|| y un vector unitario en su misma dirección.',
      pasos: [
        { nota: 'La norma es la longitud del vector: se calcula con el teorema de Pitágoras sobre sus componentes.', html: row('v = (5, 12)') + fg(2.5, 6, 18, 'vector v = (5, 12)').grid().ax(2).vec(0, 0, 5, 12, Y, 'v(5, 12)', -10, 0, 'end').out() },
        { nota: 'La fórmula de la norma es la raíz de la suma de los cuadrados de las componentes.', html: row(c('y', '||v|| = √(v1² + v2²)')) },
        { nota: 'Sustituimos v1 = 5 y v2 = 12, elevamos al cuadrado y sumamos adentro de la raíz.', html: row(c('y', '||v|| = √(5² + 12²) = √(25 + 144)')) },
        { nota: 'Sumamos y extraemos la raíz: 169 es un cuadrado perfecto.', html: row(c('y', '= √169 = ') + c('g', '13')) },
        { nota: 'Un vector unitario tiene norma 1, exactamente la misma dirección y sentido. Para conseguirlo, dividimos cada componente entre la norma original.', html: row(c('p', 'u = ') + f('v', '||v||') + c('p', ' = ') + f('(5, 12)', '13')) },
        { nota: 'Repartimos la división entre las dos componentes por separado.', html: row(c('p', 'u = (' + f('5', '13') + ', ' + f('12', '13') + ')')) },
        { nota: 'El vector unitario apunta exactamente igual que v, pero su "flecha" llega apenas hasta distancia 1 del origen (mucho más corto, porque 13 es grande).', reemplaza: true, html: fg(0.6, 1.4, 18, 'v y su vector unitario u').grid().ax(2).vec(0, 0, 5, 12, Y, 'v', -10, 0, 'end').vec(0, 0, 5 / 13, 12 / 13, G, 'u', 10, 4).out() },
        { nota: 'Un vector unitario sirve para describir solo la dirección de v, sin importar su tamaño.', html: say(box('u = (5/13, 12/13),  ||u|| = 1'), 'g') }
      ]
    },
    {
      titulo: 'Paralelismo y ortogonalidad',
      intro: 'Determinar si u = (2, −3) y v = (6, −9) son paralelos, y si u = (3, 2) y v = (−2, 3) son ortogonales.',
      pasos: [
        { nota: 'Dos vectores son paralelos si uno es un múltiplo escalar del otro: v = r·u, con el mismo número r en ambas componentes.', html: row('u = (2, −3) &nbsp;&nbsp; v = (6, −9)') + fg(2, -3, 22, 'u y v sobre la misma recta').grid().ax(2).vec(0, 0, 2, -3, Y, 'u', 8, 6).vec(0, 0, 6, -9, B, 'v', 8, -8).out() },
        { nota: 'Dividimos cada componente de v entre la componente correspondiente de u. Si el cociente sale igual en las dos, hay un único r y son paralelos.', html: row(c('y', '6 ÷ 2 = 3') + ' &nbsp;&nbsp; ' + c('b', '−9 ÷ (−3) = 3')) },
        { nota: 'Como el mismo r = 3 funciona en ambas componentes, v es exactamente 3 veces más largo que u, con el mismo sentido: son paralelos.', html: say(box('v = 3u  →  sí son paralelos'), 'g') },
        { nota: 'Ahora otro par distinto: u = (3, 2) y v = (−2, 3). Para la ortogonalidad (ángulo de 90°) usamos el producto escalar, no un cociente.', reemplaza: true, html: row('u = (3, 2) &nbsp;&nbsp; v = (−2, 3)') + fg(0.5, 2.5, 26, 'u y v, posiblemente perpendiculares').grid().ax(2).vec(0, 0, 3, 2, Y, 'u', 8, 4).vec(0, 0, -2, 3, B, 'v', -8, -6, 'end').out() },
        { nota: 'El producto escalar multiplica las primeras componentes entre sí, las segundas entre sí, y suma los resultados.', html: row(c('y', 'u1·v1 + u2·v2 = 3(−2) + 2(3)')) },
        { nota: 'Operamos los dos productos y luego sumamos.', html: row(c('y', '= −6 + 6 = ') + c('g', '0')) },
        { nota: 'Cuando el producto escalar da exactamente cero, el ángulo entre los vectores es de 90°: son ortogonales. Así se ve, formando una escuadra.', reemplaza: true, html: fg(0.5, 2.5, 26, 'u y v perpendiculares').grid().ax(2).vec(0, 0, 3, 2, Y, 'u', 8, 4).vec(0, 0, -2, 3, B, 'v', -8, -6, 'end').arc(0, 0, 1.1, 33.69, 123.69, G).out() },
        { nota: 'Resumen: para paralelismo comparamos cocientes (v = r·u); para ortogonalidad usamos el producto escalar igualado a cero.', html: PZ.tabla(['Comprobar', 'Condición'], [['Paralelos', 'v = r·u (mismo r en cada componente)'], ['Ortogonales', 'u1·v1 + u2·v2 = 0']]) }
      ]
    }
  ];

  /* ============================================================
     1.13  Números complejos y teorema de Moivre
     ============================================================ */

  function cx1() {
    var g = fg(1, 0, 24, 'z1 y z2 en el plano de Argand').grid().ax(2, 'Re', 'Im');
    g.vec(0, 0, 4, -3, Y, 'z1(4, −3i)', 8, 10).vec(0, 0, 2, 5, B, 'z2(2, 5i)', 8, -6);
    return g.out();
  }
  function cx2() {
    var g = fg(2, 0, 20, 'suma y resta de z1 y z2').grid().ax(2, 'Re', 'Im');
    g.vec(0, 0, 4, -3, Y, 'z1', 6, 10).vec(0, 0, 2, 5, B, 'z2', 8, -4);
    g.pt(6, 2, G, 'z1+z2 (6, 2i)', 8, -6).pt(2, -8, K, 'z1−z2 (2, −8i)', 8, 4);
    return g.out();
  }
  function cx3(stage) {
    var g = fg(0, 0, 32, 'z y su conjugado z̄').grid().ax(1, 'Re', 'Im');
    g.pt(3, -4, Y, 'z(3, −4i)', 8, 6);
    if (stage === 'conj') { g.ln(3, -4, 3, 4, D, true, 2); g.pt(3, 4, G, 'z̄(3, 4i)', 8, -6); }
    if (stage === 'mod') g.ln(0, 0, 3, -4, K, false, 2.8);
    return g.out();
  }

  P['1.13'] = [
    {
      titulo: 'Suma y resta de complejos en el plano de Argand',
      intro: 'Dados z1 = 4 − 3i y z2 = 2 + 5i, calcular z1 + z2 y z1 − z2.',
      pasos: [
        { nota: 'Un número complejo a + bi se ubica como el punto (a, b) en el plano de Argand: a en el eje real, b en el eje imaginario. Los dibujamos como vectores desde el origen.', html: row('z1 = 4 − 3i &nbsp;&nbsp; z2 = 2 + 5i') + cx1() },
        { nota: 'Para sumar o restar complejos, se operan por separado las partes reales entre sí y las imaginarias entre sí; no se mezclan.', html: row(c('y', '(a + bi) ± (c + di) = (a ± c) + (b ± d)i')) },
        { nota: 'Para la suma: sumamos las partes reales (4 y 2) y, aparte, las imaginarias (−3 y 5).', html: row(c('g', 'z1 + z2 = (4 + 2) + (−3 + 5)i = 6 + 2i')) },
        { nota: 'Para la resta: restamos las partes reales y, aparte, las imaginarias, respetando el orden.', html: row(c('p', 'z1 − z2 = (4 − 2) + (−3 − 5)i = 2 − 8i')) },
        { nota: 'Así quedan los dos resultados en el plano: el punto verde es la suma, el rosa es la resta.', reemplaza: true, html: cx2() },
        { nota: 'Comprobación rápida: en la suma, partes reales 4+2=6 ✓ e imaginarias −3+5=2 ✓.', html: say(box('z1 + z2 = 6 + 2i  ·  z1 − z2 = 2 − 8i'), 'g') }
      ]
    },
    {
      titulo: 'Conjugado, módulo y producto',
      intro: 'Para z = 3 − 4i, hallar su conjugado y su módulo; luego multiplicar z1 = 2 + 3i por z2 = 1 − 4i.',
      pasos: [
        { nota: 'Ubicamos z = 3 − 4i en el plano. Su conjugado z̄ se obtiene invirtiendo únicamente el signo de la parte imaginaria.', html: row('z = 3 − 4i') + cx3('base') },
        { nota: 'Cambiamos el signo de −4 a 4; la parte real (3) no se toca. Geométricamente, z̄ es el reflejo de z sobre el eje real.', reemplaza: true, html: row(c('g', 'z̄ = 3 + 4i')) + cx3('conj') },
        { nota: 'El módulo |z| es la distancia del origen al punto (a, b): se calcula igual que la norma de un vector, con a y b reales (nunca con bi al cuadrado).', reemplaza: true, html: row(c('y', '|z| = √(a² + b²)')) + cx3('mod') },
        { nota: 'Sustituimos a = 3, b = −4, elevamos al cuadrado y sumamos.', html: row(c('y', '|z| = √(3² + (−4)²) = √(9 + 16) = √25')) },
        { nota: 'Extraemos la raíz: 25 es un cuadrado perfecto.', html: say(box('|z| = 5'), 'g') },
        { nota: 'Ahora un producto: z1 = 2 + 3i y z2 = 1 − 4i. Se multiplica como un binomio por binomio (propiedad distributiva), con cuatro productos.', html: row('z1 = 2 + 3i &nbsp;&nbsp; z2 = 1 − 4i') + row(c('b', '(2)(1) + (2)(−4i) + (3i)(1) + (3i)(−4i)')) },
        { nota: 'Operamos cada producto por separado, dejando i² sin tocar todavía.', html: row(c('b', '= 2 − 8i + 3i − 12i²')) },
        { nota: 'El paso clave: sustituimos i² por −1, así −12i² se vuelve +12. Luego juntamos partes reales y partes imaginarias.', html: row(c('b', '= 2 − 8i + 3i + 12 = ') + c('g', '14 − 5i')) + say(box('z1 · z2 = 14 − 5i'), 'g') }
      ]
    },
    {
      titulo: 'Teorema de Moivre: potencia de un complejo',
      intro: 'Calcular z = (√3 + i)⁶ usando la forma trigonométrica y el teorema de Moivre.',
      pasos: [
        { nota: 'Elevar un complejo a la sexta potencia multiplicando una y otra vez sería muy largo. El teorema de Moivre lo resuelve pasando primero z a su forma trigonométrica r(cos θ + i sen θ).', html: row(c('y', 'z = √3 + i')) },
        { nota: 'El módulo r es la distancia al origen, igual que siempre: raíz de la suma de los cuadrados de a y b.', html: row(c('y', 'r = √((√3)² + 1²) = √(3 + 1) = √4')) },
        { nota: 'Simplificamos la raíz.', html: row(c('y', 'r = ') + c('g', '2')) },
        { nota: 'El argumento θ es el ángulo que forma z con el eje real positivo. Se halla con tan θ = b/a, fijándonos en qué cuadrante cae el punto (a, b).', html: row(c('p', 'tan θ = ') + f('1', '√3') + c('p', ', y (√3, 1) está en el cuadrante I')) + fg(1.5, 0.6, 50, 'z = √3 + i, módulo 2 y ángulo 30°').grid().ax(1, 'Re', 'Im').vec(0, 0, 1.732, 1, Y, 'z', 10, 2).arc(0, 0, 0.7, 0, 30, G).t(0.55, 0.25, '30°', G, 10, 6).out() },
        { nota: 'La calculadora da tan⁻¹(1/√3) = 30°. Con r = 2 y θ = 30°, ya tenemos la forma trigonométrica de z.', html: row(c('g', 'θ = 30°')) + say(box('z = 2(cos 30° + i sen 30°)'), 'w') },
        { nota: 'El teorema de Moivre dice: para elevar a la potencia n, el módulo se eleva a n y el argumento se multiplica por n (nunca se eleva el ángulo, solo el módulo).', html: row(c('y', 'zⁿ = rⁿ[cos(n·θ) + i sen(n·θ)]')) },
        { nota: 'Sustituimos n = 6: el módulo 2 se eleva a la sexta, y el ángulo 30° se multiplica por 6.', html: row(c('y', 'z⁶ = 2⁶[cos(6·30°) + i sen(6·30°)]')) },
        { nota: 'Calculamos ambas partes por separado: 2⁶ = 64, y 6 · 30° = 180°. Si el ángulo pasara de 360°, se le restarían vueltas completas antes de evaluar.', html: row(c('y', 'z⁶ = 64[cos 180° + i sen 180°]')) },
        { nota: 'Evaluamos el coseno y el seno de 180°: el punto cae justo sobre el eje real negativo.', html: row('cos 180° = −1 &nbsp;&nbsp; sen 180° = 0') + row(c('g', 'z⁶ = 64(−1 + 0i) = −64')) + say(box('z⁶ = −64 (real puro)'), 'g') }
      ]
    }
  ];
})(window.PZ);

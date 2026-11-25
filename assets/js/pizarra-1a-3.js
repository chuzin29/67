/* pizarra-1a-3.js — Métodos en pizarra, 1.er año, temas 1.9 a 1.11 */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', D = '#f4f6ef66';

  /* ---------- mini-ayudante para triángulos rectángulos con tiza ---------- */
  function rt(ax, ay, bx, by, cx, cy, label) {
    return '<svg viewBox="0 0 420 260" style="width:min(100%,460px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'triángulo') + '"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round" stroke-linejoin="round">' +
      '<polygon points="' + ax + ',' + ay + ' ' + bx + ',' + by + ' ' + cx + ',' + cy + '" fill="none" stroke="' + W + '" stroke-width="3"/>' +
      '</g></svg>';
  }

  /* ============================================================
     1.9  Trigonometría del triángulo rectángulo (SOH-CAH-TOA)
     ============================================================ */
  function tri1(stage) {
    /* catetos a=8 (vertical), b=15 (horizontal), hipotenusa c=17 */
    var Ax = 95, Ay = 220, Bx = 95, By = 70, Cx = 335, Cy = 220; /* ángulo recto en A */
    var s = '<svg viewBox="0 0 420 260" style="width:min(100%,440px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="triángulo rectángulo 8-15-17">' +
      '<g font-family="\'Patrick Hand\',cursive" stroke-linecap="round" stroke-linejoin="round">' +
      '<polygon points="' + Ax + ',' + Ay + ' ' + Bx + ',' + By + ' ' + Cx + ',' + Cy + '" fill="none" stroke="' + W + '" stroke-width="3"/>' +
      '<rect x="' + Ax + '" y="' + (Ay - 16) + '" width="16" height="16" fill="none" stroke="' + W + '" stroke-width="2"/>' +
      '<text x="' + (Ax - 10) + '" y="' + ((Ay + By) / 2 + 6) + '" fill="' + Y + '" font-size="19" text-anchor="end">a = 8</text>' +
      '<text x="' + ((Ax + Cx) / 2) + '" y="' + (Ay + 26) + '" fill="' + G + '" font-size="19" text-anchor="middle">b = 15</text>' +
      '<text x="' + ((Bx + Cx) / 2 + 20) + '" y="' + ((By + Cy) / 2 - 10) + '" fill="' + K + '" font-size="19" text-anchor="middle">c = ?</text>';
    if (stage === 'ang') s += '<path d="M' + (Cx - 34) + ' ' + Cy + ' A34 34 0 0 1 ' + Cx + ' ' + (Cy - 34) + '" fill="none" stroke="' + B + '" stroke-width="2.4"/><text x="' + (Cx - 26) + '" y="' + (Cy - 14) + '" fill="' + B + '" font-size="19">α</text>';
    s += '</g></svg>';
    return s;
  }
  function tri2(stage) {
    /* ejemplo elevación: observador en O, torre vertical, ángulo 38 en O */
    var Ox = 50, Oy = 220, Px = 50, Py = 60, Qx = 330, Qy = 220;
    var s = '<svg viewBox="0 0 420 260" style="width:min(100%,460px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="ángulo de elevación">' +
      '<g font-family="\'Patrick Hand\',cursive" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="' + Ox + '" y1="' + Oy + '" x2="' + Qx + '" y2="' + Qy + '" stroke="' + D + '" stroke-width="2"/>' +
      '<line x1="' + Ox + '" y1="' + Oy + '" x2="' + Px + '" y2="' + Py + '" stroke="' + G + '" stroke-width="3"/>' +
      '<line x1="' + Ox + '" y1="' + Oy + '" x2="' + Qx + '" y2="' + Qy + '" stroke="none"/>' +
      '<line x1="' + Px + '" y1="' + Py + '" x2="' + Qx + '" y2="' + Qy + '" stroke="' + K + '" stroke-width="3" stroke-dasharray="7 6"/>' +
      '<path d="M' + (Ox + 40) + ' ' + Oy + ' A40 40 0 0 1 ' + (Ox + 40 * Math.cos(38 * Math.PI / 180)) + ' ' + (Oy - 40 * Math.sin(38 * Math.PI / 180)) + '" fill="none" stroke="' + B + '" stroke-width="2.2"/>' +
      '<text x="' + (Ox + 50) + '" y="' + (Oy - 14) + '" fill="' + B + '" font-size="18">38°</text>' +
      '<text x="' + (Ox - 6) + '" y="' + (Oy + 20) + '" fill="' + W + '" font-size="17" text-anchor="middle">O</text>' +
      '<text x="' + (Px - 14) + '" y="' + (Py + 6) + '" fill="' + G + '" font-size="17" text-anchor="end">q</text>' +
      '<text x="' + ((Px + Qx) / 2) + '" y="' + ((Py + Qy) / 2 - 10) + '" fill="' + K + '" font-size="19" text-anchor="middle">45 (hipotenusa)</text>' +
      '<text x="' + ((Ox + Qx) / 2) + '" y="' + (Oy + 24) + '" fill="' + Y + '" font-size="17" text-anchor="middle">p</text>' +
      '</g></svg>';
    return s;
  }

  P['1.9'] = [
    {
      titulo: 'Pitágoras y las 6 razones (SOH-CAH-TOA)',
      intro: 'Un triángulo rectángulo tiene catetos a = 7 cm y b = 24 cm. Hallar la hipotenusa y las 6 razones de α (el ángulo que ve al cateto de 7 como opuesto).',
      pasos: [
        { nota: 'Dibujamos el triángulo. El ángulo recto va marcado con el cuadradito; el lado de enfrente de ese cuadradito siempre es la <b>hipotenusa</b>, el más largo.', html: tri1('base').replace('a = 8', 'a = 7').replace('b = 15', 'b = 24') },
        { nota: 'Para la hipotenusa usamos <b>Pitágoras</b>: el cuadrado de la hipotenusa es la suma de los cuadrados de los catetos.', html: row(c('y', 'c² = a² + b²')) },
        { nota: 'Sustituimos y sumamos con calma: 7² = 49, 24² = 576.', html: row('c² = 7² + 24² = 49 + 576 = 625') },
        { nota: 'Sacamos raíz cuadrada. 625 es un cuadrado perfecto: 25² = 625.', html: PZ.flecha('√', 'y') + row(c('g', 'c = √625 = 25')) },
        { nota: 'Ya tenemos los 3 lados. Ahora identificamos, respecto al ángulo α, cuál cateto es <b>opuesto</b> (frente a α, el 7) y cuál es <b>adyacente</b> (toca a α, el 24).', reemplaza: true, html: tri1('ang').replace('a = 8', 'CO = 7').replace('b = 15', 'CA = 24').replace('c = ?', 'H = 25') },
        { nota: 'La regla SOH-CAH-TOA: Seno = Opuesto/Hipotenusa, Coseno = Adyacente/Hipotenusa, Tangente = Opuesto/Adyacente. Armamos las tres.', html: row(c('y', 'sen(α) = ' + f('7', '25')) + ' &nbsp;&nbsp; ' + c('b', 'cos(α) = ' + f('24', '25')) + ' &nbsp;&nbsp; ' + c('p', 'tan(α) = ' + f('7', '24'))) },
        { nota: 'Las otras tres son las <b>recíprocas</b>: cada una es "1 entre" la de arriba, lo que en la práctica es voltear la fracción.', html: row(c('y', 'csc(α) = ' + f('25', '7')) + ' &nbsp;&nbsp; ' + c('b', 'sec(α) = ' + f('25', '24')) + ' &nbsp;&nbsp; ' + c('p', 'cot(α) = ' + f('24', '7'))) },
        { nota: 'Truco para no confundirse: csc, sec y cot son las que "no tienen H" en el nombre de SOH-CAH-TOA — por eso son al revés de sen, cos y tan en ese orden.', html: PZ.tabla(['Razón', 'Fórmula', 'Valor'], [['sen', f('CO', 'H'), f('7', '25')], ['cos', f('CA', 'H'), f('24', '25')], ['tan', f('CO', 'CA'), f('7', '24')], ['csc', f('H', 'CO'), f('25', '7')], ['sec', f('H', 'CA'), f('25', '24')], ['cot', f('CA', 'CO'), f('24', '7')]]) }
      ]
    },
    {
      titulo: 'Hallar lados con un ángulo y la hipotenusa',
      intro: 'Se conoce un ángulo de 38° y la hipotenusa de 45 unidades. Calcular el cateto opuesto p y el adyacente q.',
      pasos: [
        { nota: 'Dibujamos: el observador mira con un ángulo de 38°, el lado inclinado (la línea punteada) mide 45 — esa es la hipotenusa. Buscamos los dos catetos.', html: tri2('base') },
        { nota: 'Para el cateto <b>opuesto</b> p (vertical) usamos SOH: seno = opuesto/hipotenusa. Despejamos p multiplicando cruzado.', html: row(c('y', 'sen(38°) = ' + f('p', '45'))) },
        { nota: 'Multiplicamos ambos lados por 45 para dejar p solo.', html: PZ.ambos('× 45', 'y') + row(c('y', 'p = 45 · sen(38°)')) },
        { nota: 'Con calculadora en modo grados: sen(38°) ≈ 0.61566. Multiplicamos.', html: row('p = 45 · 0.61566 ≈ ' + c('g', '27.70')) },
        { nota: 'Para el cateto <b>adyacente</b> q (horizontal) usamos CAH: coseno = adyacente/hipotenusa. Mismo procedimiento.', html: row(c('p', 'cos(38°) = ' + f('q', '45')) + ' &nbsp;⇒&nbsp; ' + c('p', 'q = 45 · cos(38°)')) },
        { nota: 'cos(38°) ≈ 0.78801. Multiplicamos.', html: row('q = 45 · 0.78801 ≈ ' + c('g', '35.46')) },
        { nota: 'Comprobamos con Pitágoras: p² + q² debe dar cerca de 45².', html: say(box('p ≈ 27.70 &nbsp;&nbsp; q ≈ 35.46'), 'g') + row('27.70² + 35.46² ≈ 767.3 + 1257.4 = 2024.7 ≈ 45² = 2025 ✓', 'comprobación', 'g') }
      ]
    },
    {
      titulo: 'Ángulo desconocido con función inversa',
      intro: 'En un triángulo rectángulo la hipotenusa mide H = 30 m y un cateto mide 18 m. Hallar el ángulo θ opuesto a los 18 m.',
      pasos: [
        { nota: 'Aquí ya tenemos dos lados (el cateto y la hipotenusa) pero nos falta el ángulo. Planteamos la razón que los relaciona: SOH, porque tenemos opuesto e hipotenusa.', html: row(c('y', 'sen(θ) = ' + f('CO', 'H') + ' = ' + f('18', '30'))) },
        { nota: 'Simplificamos la fracción dividiendo entre 6.', html: row(c('y', 'sen(θ) = 0.6')) },
        { nota: 'El problema es que θ está "atrapado" dentro del seno. Para liberarlo usamos la función <b>inversa</b>: arcsen (o sen⁻¹), que deshace al seno.', html: PZ.flecha('arcsen', 'p') + row('θ = arcsen(0.6)') },
        { nota: 'Tecleamos sen⁻¹(0.6) en la calculadora, en modo grados.', html: say(box('θ ≈ 36.87°'), 'g') },
        { nota: 'Como los dos ángulos agudos de un triángulo rectángulo suman 90° (son complementarios), el otro ángulo β sale restando.', html: row('β = 90° − θ = 90° − 36.87°') + row(c('g', 'β ≈ 53.13°')) },
        { nota: 'Comprobación rápida: A + B + 90° = 180°, entonces 36.87° + 53.13° + 90° = 180° ✓.', html: row('36.87° + 53.13° + 90° = 180°', '✓', 'g') }
      ]
    }
  ];

  /* ============================================================
     1.10  Identidades trigonométricas fundamentales y adición
     ============================================================ */
  function circU(stage, ang, col) {
    var g = '<svg viewBox="0 0 420 260" style="width:min(100%,380px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="círculo unitario">' +
      '<g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">';
    var cx = 160, cy = 130, r = 95;
    g += '<line x1="' + (cx - 130) + '" y1="' + cy + '" x2="' + (cx + 220) + '" y2="' + cy + '" stroke="' + D + '" stroke-width="2"/>';
    g += '<line x1="' + cx + '" y1="' + (cy - 120) + '" x2="' + cx + '" y2="' + (cy + 120) + '" stroke="' + D + '" stroke-width="2"/>';
    g += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + W + '" stroke-width="2.6"/>';
    var a = (ang || 37) * Math.PI / 180;
    var px = cx + r * Math.cos(a), py = cy - r * Math.sin(a);
    g += '<line x1="' + cx + '" y1="' + cy + '" x2="' + px + '" y2="' + py + '" stroke="' + (col || Y) + '" stroke-width="2.6"/>';
    g += '<line x1="' + px + '" y1="' + py + '" x2="' + px + '" y2="' + cy + '" stroke="' + G + '" stroke-width="2.6" stroke-dasharray="6 5"/>';
    g += '<line x1="' + cx + '" y1="' + cy + '" x2="' + px + '" y2="' + cy + '" stroke="' + B + '" stroke-width="2.6" stroke-dasharray="6 5"/>';
    g += '<circle cx="' + px + '" cy="' + py + '" r="4" fill="' + (col || Y) + '"/>';
    g += '<text x="' + (px + 8) + '" y="' + (py - 10) + '" fill="' + (col || Y) + '" font-size="16">P(cos θ, sen θ)</text>';
    g += '<text x="' + ((cx + px) / 2 + 6) + '" y="' + (cy + 18) + '" fill="' + B + '" font-size="15">cos θ</text>';
    g += '<text x="' + (px + 10) + '" y="' + ((cy + py) / 2) + '" fill="' + G + '" font-size="15">sen θ</text>';
    g += '<text x="' + (cx + 30) + '" y="' + (cy - 16) + '" fill="' + W + '" font-size="15">θ</text>';
    g += '<text x="' + (cx + 234) + '" y="' + (cy + 4) + '" fill="' + W + '" font-size="14">x</text><text x="' + (cx - 6) + '" y="' + (cy - 128) + '" fill="' + W + '" font-size="14">y</text>';
    g += '</g></svg>';
    return g;
  }
  function quadFig(q) {
    var cx = 160, cy = 130, L = 110;
    var g = '<svg viewBox="0 0 420 260" style="width:min(100%,340px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="cuadrantes">' +
      '<g font-family="\'Patrick Hand\',cursive">';
    g += '<line x1="' + (cx - L) + '" y1="' + cy + '" x2="' + (cx + L) + '" y2="' + cy + '" stroke="' + D + '" stroke-width="2"/>';
    g += '<line x1="' + cx + '" y1="' + (cy - L) + '" x2="' + cx + '" y2="' + (cy + L) + '" stroke="' + D + '" stroke-width="2"/>';
    var labels = [['I', cx + 55, cy - 55, G], ['II', cx - 60, cy - 55, Y], ['III', cx - 65, cy + 65, K], ['IV', cx + 50, cy + 65, B]];
    labels.forEach(function (l) { g += '<text x="' + l[1] + '" y="' + l[2] + '" fill="' + l[3] + '" font-size="18" text-anchor="middle">' + l[0] + '</text>'; });
    if (q) {
      var qi = { I: [cx + 30, cy - 30], II: [cx - 30, cy - 30], III: [cx - 30, cy + 30], IV: [cx + 30, cy + 30] }[q];
      g += '<circle cx="' + qi[0] + '" cy="' + qi[1] + '" r="46" fill="' + W + '" fill-opacity=".08" stroke="' + W + '" stroke-width="2" stroke-dasharray="5 4"/>';
    }
    g += '</g></svg>';
    return g;
  }

  P['1.10'] = [
    {
      titulo: 'Identidades pitagóricas y el signo del cuadrante',
      intro: 'Si cos(θ) = −24/25 y θ está en el Cuadrante II, hallar sen(θ), tan(θ), csc(θ) y sec(θ).',
      pasos: [
        { nota: 'Todo sale del círculo unitario: el punto sobre la circunferencia tiene como coordenadas (cos θ, sen θ). Por eso siempre se cumple sen²θ + cos²θ = 1 (es el radio al cuadrado, que vale 1).', html: circU('base', 150, Y) },
        { nota: 'Nos ubicamos: Cuadrante II (arriba-izquierda). Ahí la x es negativa (coseno negativo, como nos dicen) pero la y es positiva (seno positivo).', html: quadFig('II') },
        { nota: 'Partimos de la identidad pitagórica principal y despejamos sen²(θ).', html: row(c('y', 'sen²(θ) + cos²(θ) = 1')) + row('sen²(θ) = 1 − cos²(θ) = 1 − (−24/25)²') },
        { nota: 'Cuidado: al elevar al cuadrado, el signo negativo desaparece. (−24/25)² = 576/625.', html: row('sen²(θ) = 1 − ' + f('576', '625') + ' = ' + f('49', '625')) },
        { nota: 'Sacamos raíz cuadrada: salen dos posibilidades, ±7/25. Aquí decide el <b>cuadrante</b>: en el II el seno es positivo.', html: PZ.flecha('√ , elige signo por cuadrante', 'p') + row(c('g', 'sen(θ) = +7/25')) },
        { nota: 'Con seno y coseno ya resueltos, tan(θ) = sen/cos (identidad de cociente). Las recíprocas csc y sec son 1 sobre sen y 1 sobre cos.', html: row(c('b', 'tan(θ) = ' + f('7/25', '−24/25') + ' = −' + f('7', '24'))) + row(c('p', 'csc(θ) = ' + f('25', '7')) + ' &nbsp;&nbsp; ' + c('p', 'sec(θ) = −' + f('25', '24'))) },
        { nota: 'Resumen con signos: en II solo seno y cosecante quedan positivos; todo lo demás, negativo — tal como salió aquí.', html: say(box('sen = 7/25, tan = −7/24, csc = 25/7, sec = −25/24'), 'g') }
      ]
    },
    {
      titulo: 'Regla de signos por cuadrante',
      intro: 'Memo visual: ¿qué razones son positivas en cada cuadrante?',
      pasos: [
        { nota: 'En el círculo unitario, el signo de sen(θ) es el signo de la altura y, y el signo de cos(θ) es el signo de la base x. Vamos cuadrante por cuadrante.', html: quadFig() },
        { nota: 'Cuadrante I: x positiva, y positiva. Las 6 razones son combinaciones de sen y cos, así que <b>todas</b> salen positivas.', reemplaza: true, html: quadFig('I') + row(c('g', 'Cuadrante I: todas positivas')) },
        { nota: 'Cuadrante II: x negativa, y positiva. Solo sen (y su recíproca csc) quedan positivas.', reemplaza: true, html: quadFig('II') + row(c('y', 'Cuadrante II: sen y csc positivas')) },
        { nota: 'Cuadrante III: x negativa, y negativa. tan = y/x es negativo entre negativo: positivo. Por eso tan y cot son las positivas aquí.', reemplaza: true, html: quadFig('III') + row(c('p', 'Cuadrante III: tan y cot positivas')) },
        { nota: 'Cuadrante IV: x positiva, y negativa. Solo cos (y su recíproca sec) quedan positivas.', reemplaza: true, html: quadFig('IV') + row(c('b', 'Cuadrante IV: cos y sec positivas')) },
        { nota: 'Frase para recordar el orden I-II-III-IV: "Todas, Seno, Tangente, Coseno" (regla ASTC). Úsala cada vez que extraigas una raíz cuadrada y tengas que elegir el signo.', html: PZ.tabla(['Cuadrante', 'Positivas'], [['I', 'todas'], ['II', 'sen, csc'], ['III', 'tan, cot'], ['IV', 'cos, sec']]) }
      ]
    },
    {
      titulo: 'Teorema de la adición: ángulos que no son notables',
      intro: 'Calcular sen(135°) y cos(135°) expresando 135° como 90° + 45°, combinando dos ángulos notables.',
      pasos: [
        { nota: '135° no es un ángulo notable (30°, 45°, 60°), pero lo podemos armar sumando dos que sí conocemos: 90° + 45°.', html: row(c('y', '135° = 90° + 45°')) },
        { nota: 'Usamos la fórmula de la suma del seno. Hay que memorizarla en este orden: seno del primero por coseno del segundo, más coseno del primero por seno del segundo.', html: row(c('p', 'sen(α + β) = sen(α)cos(β) + cos(α)sen(β)'))},
        { nota: 'Sustituimos α = 90°, β = 45° con sus valores notables: sen(90°)=1, cos(90°)=0, sen(45°)=cos(45°)=√2/2.', html: row('sen(135°) = sen(90°)cos(45°) + cos(90°)sen(45°)') + row('sen(135°) = (1)(' + f('√2', '2') + ') + (0)(' + f('√2', '2') + ')') },
        { nota: 'El segundo término se anula por el 0. Queda solo el primero.', html: row(c('g', 'sen(135°) = ' + f('√2', '2'))) },
        { nota: 'Repetimos con la fórmula de la suma del coseno: coseno por coseno, <b>menos</b> seno por seno (signo contrario al del seno).', html: row(c('b', 'cos(α + β) = cos(α)cos(β) − sen(α)sen(β)')) + row('cos(135°) = (0)(' + f('√2', '2') + ') − (1)(' + f('√2', '2') + ')') },
        { nota: 'El primer término se anula; queda negativo el segundo.', html: row(c('g', 'cos(135°) = −' + f('√2', '2'))) },
        { nota: 'Comprobamos con tan = sen/cos y con el cuadrante: 135° está en el II, donde el seno es positivo y el coseno negativo — ¡justo lo que salió!', html: say(box('sen(135°) = √2/2 &nbsp;&nbsp; cos(135°) = −√2/2 &nbsp;&nbsp; tan(135°) = −1'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.11  Triángulos oblicuángulos: ley de senos y ley del coseno
     ============================================================ */
  function obl(labels, stage) {
    var Ax = 70, Ay = 210, Bx = 300, By = 210, Cx = 190, Cy = 55;
    var s = '<svg viewBox="0 0 420 260" style="width:min(100%,440px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="triángulo oblicuángulo">' +
      '<g font-family="\'Patrick Hand\',cursive" stroke-linecap="round" stroke-linejoin="round">' +
      '<polygon points="' + Ax + ',' + Ay + ' ' + Bx + ',' + By + ' ' + Cx + ',' + Cy + '" fill="none" stroke="' + W + '" stroke-width="3"/>' +
      '<text x="' + (Ax - 14) + '" y="' + (Ay + 18) + '" fill="' + W + '" font-size="18" text-anchor="middle">A</text>' +
      '<text x="' + (Bx + 14) + '" y="' + (By + 18) + '" fill="' + W + '" font-size="18" text-anchor="middle">B</text>' +
      '<text x="' + Cx + '" y="' + (Cy - 10) + '" fill="' + W + '" font-size="18" text-anchor="middle">C</text>' +
      '<text x="' + ((Bx + Cx) / 2 + 18) + '" y="' + ((By + Cy) / 2) + '" fill="' + Y + '" font-size="18" text-anchor="middle">' + (labels.a || 'a') + '</text>' +
      '<text x="' + ((Ax + Cx) / 2 - 18) + '" y="' + ((Ay + Cy) / 2) + '" fill="' + G + '" font-size="18" text-anchor="middle">' + (labels.b || 'b') + '</text>' +
      '<text x="' + ((Ax + Bx) / 2) + '" y="' + (Ay + 24) + '" fill="' + K + '" font-size="18" text-anchor="middle">' + (labels.c || 'c') + '</text>';
    if (stage === 'angA') s += '<path d="M' + (Ax + 34) + ' ' + Ay + ' A34 34 0 0 1 ' + (Ax + 34 * Math.cos(45 * Math.PI / 180)) + ' ' + (Ay - 34 * Math.sin(45 * Math.PI / 180)) + '" fill="none" stroke="' + B + '" stroke-width="2.2"/><text x="' + (Ax + 42) + '" y="' + (Ay - 16) + '" fill="' + B + '" font-size="16">A=45°</text>';
    if (stage === 'angC') s += '<path d="M' + (Cx - 26) + ' ' + (Cy + 30) + ' A32 32 0 0 1 ' + (Cx + 26) + ' ' + (Cy + 30) + '" fill="none" stroke="' + B + '" stroke-width="2.2"/><text x="' + Cx + '" y="' + (Cy + 46) + '" fill="' + B + '" font-size="16" text-anchor="middle">C=60°</text>';
    s += '</g></svg>';
    return s;
  }

  P['1.11'] = [
    {
      titulo: 'Ley de senos: caso LAA',
      intro: 'En un triángulo ABC, A = 45°, C = 60° y el lado c = 10 cm. Calcular el lado a.',
      pasos: [
        { nota: 'No hay ángulo recto, así que SOH-CAH-TOA no sirve aquí. Como conocemos dos ángulos y el lado opuesto a uno de ellos (c), usamos la <b>ley de senos</b>.', html: obl({ c: 'c=10' }) },
        { nota: 'La ley de senos dice que cada lado entre el seno de su ángulo opuesto da siempre el mismo número. Elegimos el par que conocemos completo (c, C) y el que buscamos (a, A).', html: row(c('y', f('a', 'sen(A)') + ' = ' + f('c', 'sen(C)'))) },
        { nota: 'Marcamos los ángulos conocidos en la figura para no perdernos: A = 45° está junto al lado a (que buscamos) y C = 60° junto al lado c = 10 (que conocemos).', reemplaza: true, html: obl({ c: 'c=10' }, 'angA') },
        { nota: 'Despejamos a multiplicando cruzado: a = (c · sen A) / sen C.', html: row('a = ' + f('c · sen(A)', 'sen(C)') + ' = ' + f('10 · sen(45°)', 'sen(60°)')) },
        { nota: 'Sustituimos los valores notables: sen(45°) = √2/2, sen(60°) = √3/2.', html: row('a = ' + f('10 · (√2/2)', '√3/2')) },
        { nota: 'Los "/2" se cancelan (uno arriba, uno abajo), y queda una fracción de raíces.', html: row(c('g', 'a = ' + f('10√2', '√3'))) },
        { nota: 'Racionalizamos multiplicando por √3/√3 para quitar la raíz del denominador: 10√2·√3 = 10√6, y √3·√3 = 3.', html: PZ.flecha('× √3/√3', 'p') + row(c('g', 'a = ' + f('10√6', '3') + ' ≈ 8.1650 cm')) },
        { nota: 'Comprobación de sentido: el ángulo A (45°) es menor que C (60°), así que su lado opuesto a debe ser menor que c = 10. En efecto, 8.165 < 10 ✓.', html: say(box('a = 10√6/3 ≈ 8.1650 cm'), 'g') }
      ]
    },
    {
      titulo: 'Ley del coseno: caso LAL',
      intro: 'Un triángulo tiene a = 7 cm, b = 5 cm y el ángulo comprendido C = 60°. Hallar el lado c.',
      pasos: [
        { nota: 'Aquí tenemos dos lados y el ángulo <b>entre</b> ellos (comprendido). No hay ningún par lado-ángulo opuesto conocido, así que la ley de senos no arranca: usamos la <b>ley del coseno</b>.', html: obl({ a: 'a=7', b: 'b=5' }, 'angC') },
        { nota: 'La ley del coseno es como Pitágoras pero con una corrección por el ángulo. Si C no fuera 90°, el término extra "−2ab cos(C)" desaparecería y quedaría Pitágoras puro.', html: row(c('y', 'c² = a² + b² − 2ab cos(C)')) },
        { nota: 'Sustituimos a = 7, b = 5, C = 60°.', html: row('c² = 7² + 5² − 2(7)(5) cos(60°)') },
        { nota: 'Calculamos cada pedazo por separado: los cuadrados, el producto 2ab, y cos(60°) = 0.5 (ángulo notable).', html: row('7² + 5² = 49 + 25 = ' + c('b', '74')) + row('2(7)(5)(0.5) = 70(0.5) = ' + c('p', '35')) },
        { nota: 'Restamos: 74 menos 35.', html: row(c('g', 'c² = 74 − 35 = 39')) },
        { nota: 'Sacamos raíz cuadrada. 39 no es cuadrado perfecto, así que dejamos la raíz o damos el decimal.', html: PZ.flecha('√', 'y') + row(c('g', 'c = √39 ≈ 6.2450 cm')) },
        { nota: 'Sentido: el ángulo C = 60° no es ni muy grande ni muy pequeño, y c sale entre a y b... en realidad algo menor que ambos, razonable para un ángulo agudo moderado.', html: say(box('c = √39 ≈ 6.2450 cm'), 'g') }
      ]
    },
    {
      titulo: 'Ley del coseno: caso LLL (despejar un ángulo)',
      intro: 'Un triángulo tiene a = 5 cm, b = 7 cm y c = 8 cm. Hallar el ángulo C, opuesto al lado mayor.',
      pasos: [
        { nota: 'Conocemos los <b>tres lados</b> y ningún ángulo: tampoco sirve la ley de senos de entrada. Partimos otra vez de la ley del coseno, pero ahora para despejar un ángulo.', html: obl({ a: 'a=5', b: 'b=7', c: 'c=8' }) },
        { nota: 'Regla de oro: siempre se despeja primero el ángulo opuesto al lado <b>más largo</b> (aquí c = 8), porque el coseno "sabe" automáticamente si ese ángulo es obtuso.', html: row(c('y', 'c² = a² + b² − 2ab cos(C)')) },
        { nota: 'Despejamos cos(C): pasamos a² + b² restando y 2ab dividiendo.', html: row(c('p', 'cos(C) = ' + f('a² + b² − c²', '2ab'))) },
        { nota: 'Sustituimos los tres lados.', html: row('cos(C) = ' + f('5² + 7² − 8²', '2(5)(7)')) },
        { nota: 'Arriba: 25 + 49 − 64. Abajo: 70.', html: row('cos(C) = ' + f('25 + 49 − 64', '70') + ' = ' + f('10', '70')) },
        { nota: 'Simplificamos la fracción dividiendo entre 10.', html: row(c('g', 'cos(C) = ' + f('1', '7') + ' ≈ 0.142857')) },
        { nota: 'Para sacar C "deshacemos" el coseno con su inversa, arccos.', html: PZ.flecha('arccos', 'p') + row('C = arccos(0.142857)') },
        { nota: 'Como cos(C) salió positivo (menor que 1 pero no negativo), C es agudo. Tecleamos en la calculadora.', html: say(box('C ≈ 81.79°'), 'g') }
      ]
    },
    {
      titulo: 'Caso ambiguo (LLA): ¿cuántos triángulos hay?',
      intro: 'Con a = 5 cm, b = 8 cm y el ángulo A = 30° (opuesto a a), decidir cuántos triángulos existen.',
      pasos: [
        { nota: 'LLA es el único caso donde hay que tener cuidado: a veces hay 0, 1 o 2 triángulos posibles. Conocemos a, b y A (A opuesto a a, NO al lado comprendido).', html: row('a = 5 &nbsp; b = 8 &nbsp; A = 30°') },
        { nota: 'El algoritmo empieza con la ley de senos para despejar sen(B).', html: row(c('y', f('a', 'sen(A)') + ' = ' + f('b', 'sen(B)') + ' &nbsp;⇒&nbsp; sen(B) = ' + f('b · sen(A)', 'a'))) },
        { nota: 'Sustituimos: b = 8, sen(30°) = 1/2, a = 5.', html: row('sen(B) = ' + f('8 · (1/2)', '5') + ' = ' + f('4', '5') + ' = 0.8') },
        { nota: 'Paso clave del algoritmo: miramos el valor de sen(B). Si fuera mayor que 1, sería imposible; aquí 0.8 < 1, así que sí hay triángulo(s). Sacamos el ángulo agudo con arcsen.', html: row(c('g', 'sen(B) = 0.8') + ' &nbsp;(< 1, sí hay solución)') + row('B₁ = arcsen(0.8) ≈ ' + c('g', '53.13°')) },
        { nota: 'Pero el seno también es positivo en el cuadrante II: hay que probar el ángulo <b>obtuso</b> B₂ = 180° − B₁, y revisar si todavía cabe en el triángulo.', html: row(c('p', 'B₂ = 180° − 53.13° = 126.87°')) },
        { nota: 'Lo que decide es si A + B₂ no se pasa de 180° (si ya los ángulos conocidos suman 180° o más, ese segundo triángulo no cabe).', html: row('A + B₂ = 30° + 126.87° = ' + c('y', '156.87°') + ' &nbsp;< 180°') },
        { nota: 'Como sí cabe, existen <b>dos</b> triángulos distintos: uno con B agudo (53.13°) y otro con B obtuso (126.87°), ambos válidos con los mismos a, b, A dados.', html: say(box('Dos triángulos: B ≈ 53.13° o B ≈ 126.87°'), 'g') },
        { nota: 'Para comparar: si en vez de b = 8 tuviéramos b = 8 y A = 30° pero a = 2 (más chico), sen(B) = (8·0.5)/2 = 2 > 1: imposible, cero triángulos. El tamaño de a frente a b es justo lo que cambia el resultado.', html: PZ.tabla(['sen(B)', 'Triángulos'], [['> 1', '0 (ninguno)'], ['= 1', '1 (rectángulo)'], ['< 1, y A+B₂ < 180°', '2 (ambiguo)'], ['< 1, y A+B₂ ≥ 180°', '1 (solo el agudo)']]) }
      ]
    }
  ];
})(window.PZ);

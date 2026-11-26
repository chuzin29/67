/* pizarra-1a-6b.js — Métodos en pizarra, 1.er año, tema 1.16 */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, tabla = PZ.tabla;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', R = '#ff8a80';
  function svg(inner, h) { return '<svg viewBox="0 0 420 ' + (h || 150) + '" class="pz-tij" role="img" aria-hidden="true">' + inner + '</svg>'; }
  function t(x, y, s, col, sz, anc) { return '<text x="' + x + '" y="' + y + '" fill="' + (col || W) + '" font-size="' + (sz || 15) + '" text-anchor="' + (anc || 'middle') + '" style="font-family:\'Patrick Hand\',cursive">' + s + '</text>'; }

  /* circunferencia unitaria: nivel 0 = ejes, 1 = signos, 2 = ángulo 150° y referencia */
  function circulo(nivel) {
    var cx = 210, cy = 95, r = 70, s = '';
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + W + '" stroke-opacity=".7" stroke-width="2"/>';
    s += '<path d="M115 95H305M210 10V180" stroke="' + W + '" stroke-opacity=".6" stroke-width="2"/>';
    s += t(312, 99, 'x', W, 14, 'start') + t(215, 14, 'y', W, 14, 'start');
    s += t(cx + r + 4, cy + 14, '1', W, 12, 'start') + t(cx - r - 4, cy + 14, '−1', W, 12, 'end');
    s += t(300, 62, 'I', B, 16) + t(120, 62, 'II', B, 16) + t(120, 142, 'III', B, 16) + t(300, 142, 'IV', B, 16);
    if (nivel >= 1) {
      s += t(262, 48, 'cos +  sen +', G, 13) + t(158, 36, 'cos −  sen +', Y, 13);
      s += t(158, 160, 'cos −  sen −', K, 13) + t(262, 160, 'cos +  sen −', Y, 13);
    }
    if (nivel >= 2) {
      var px = cx + r * Math.cos(150 * Math.PI / 180), py = cy - r * Math.sin(150 * Math.PI / 180);
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + px.toFixed(1) + '" y2="' + py.toFixed(1) + '" stroke="' + Y + '" stroke-width="3"/>';
      s += '<circle cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="5" fill="' + Y + '"/>';
      s += '<path d="M' + (cx + 26) + ' ' + cy + 'A26 26 0 0 0 ' + (cx + 26 * Math.cos(150 * Math.PI / 180)).toFixed(1) + ' ' + (cy - 26 * Math.sin(150 * Math.PI / 180)).toFixed(1) + '" fill="none" stroke="' + Y + '" stroke-width="2"/>';
      s += '<path d="M' + (cx - 28) + ' ' + cy + 'A28 28 0 0 1 ' + (cx + 28 * Math.cos(150 * Math.PI / 180)).toFixed(1) + ' ' + (cy - 28 * Math.sin(150 * Math.PI / 180)).toFixed(1) + '" fill="none" stroke="' + R + '" stroke-width="2.5"/>';
      s += t(cx + 42, cy - 8, 'θ = 150°', Y, 13, 'start') + t(cx - 40, cy - 12, 'α = 30°', R, 13, 'end');
    }
    return svg(s, 190);
  }

  P['1.16'] = [
    {
      titulo: 'Circunferencia unitaria, cuadrantes y signos',
      intro: 'Un ángulo gira desde el eje x. ¿Dónde cae y qué signo tienen sus razones?',
      pasos: [
        { nota: 'Dibujamos la circunferencia de radio 1 con los ejes. Los ejes la dividen en cuatro cuadrantes: I, II, III y IV, contados al revés de las agujas del reloj.', html: row('Circunferencia de radio 1') + circulo(0) },
        { nota: 'Un punto de la circunferencia es (x, y). Definimos: coseno = x, seno = y. Entonces el signo depende del cuadrante.', html: row(c('b', 'cos θ = x') + ' &nbsp; ' + c('y', 'sen θ = y')) + row('tan θ = ' + f('y', 'x')) },
        { nota: 'Anotamos los signos en cada cuadrante. Truco: Todas, Seno, Tangente, Coseno (I, II, III, IV).', reemplaza: true, html: row('Signos por cuadrante') + circulo(1) },
        { nota: 'Resumen: en I todas son positivas, en II solo el seno, en III solo la tangente y en IV solo el coseno.', html: tabla(['cuadrante', 'sen', 'cos', 'tan'], [['I', '+', '+', '+'], ['II', '+', '−', '−'], ['III', '−', '−', '+'], ['IV', '−', '+', '−']]) }
      ]
    },
    {
      titulo: 'Ángulo de referencia: caso 150°',
      intro: 'Queremos sen 150°, cos 150° y tan 150°.',
      pasos: [
        { nota: 'Ubicamos 150°: pasa de 90° pero no llega a 180°, así que está en el cuadrante II.', html: row('150° está entre 90° y 180°') + circulo(1) },
        { nota: 'Dibujamos el lado final. El ángulo de referencia α es el agudo que forma con el eje x (en rojo).', reemplaza: true, html: row(c('y', 'θ = 150°') + ' &nbsp; ' + c('p', 'α = ?')) + circulo(2) },
        { nota: 'En el cuadrante II, la referencia es lo que le falta a θ para llegar a 180°.', html: row(c('p', 'α = 180° − 150° = 30°')) },
        { nota: 'Usamos los valores de 30° y le ponemos el signo del cuadrante II (seno +, coseno −, tangente −).', html: row('sen 150° = ' + c('g', f('1', '2'))) + row('cos 150° = ' + c('p', '−' + f('√3', '2'))) + row('tan 150° = ' + c('p', '−' + f('√3', '3'))) },
        { nota: 'Receta: 1) cuadrante, 2) referencia, 3) valor del agudo, 4) signo.', html: say(box('cuadrante → α → valor → signo'), 'g') }
      ]
    },
    {
      titulo: 'Tabla de valores exactos',
      intro: 'Todos los ángulos notables salen de 30°, 45° y 60° más el signo.',
      pasos: [
        { nota: 'Partimos de los agudos que ya conocemos.', html: tabla(['ángulo', 'sen', 'cos'], [['30°', '1/2', '√3/2'], ['45°', '√2/2', '√2/2'], ['60°', '√3/2', '1/2']]) },
        { nota: 'Segundo cuadrante: referencia 60°, 45°, 30°. El seno se queda positivo y el coseno cambia a negativo.', html: tabla(['ángulo', 'ref', 'sen', 'cos'], [['120°', '60°', '√3/2', '−1/2'], ['135°', '45°', '√2/2', '−√2/2'], ['150°', '30°', '1/2', '−√3/2']]) },
        { nota: 'Tercer cuadrante: seno y coseno negativos.', html: tabla(['ángulo', 'ref', 'sen', 'cos'], [['210°', '30°', '−1/2', '−√3/2'], ['225°', '45°', '−√2/2', '−√2/2'], ['240°', '60°', '−√3/2', '−1/2']]) },
        { nota: 'Cuarto cuadrante: seno negativo y coseno positivo.', html: tabla(['ángulo', 'ref', 'sen', 'cos'], [['300°', '60°', '−√3/2', '1/2'], ['315°', '45°', '−√2/2', '√2/2'], ['330°', '30°', '−1/2', '√3/2']]) },
        { nota: 'Los ejes: el punto es (1,0), (0,1), (−1,0), (0,−1). La tangente no existe donde x = 0.', html: tabla(['ángulo', 'sen', 'cos'], [['0°', '0', '1'], ['90°', '1', '0'], ['180°', '0', '−1'], ['270°', '−1', '0']]) }
      ]
    },
    {
      titulo: 'Coterminales y radianes',
      intro: 'Reducir 780° y pasar 135° a radianes.',
      pasos: [
        { nota: 'Una vuelta son 360°. Si un ángulo pasa de 360°, restamos vueltas completas y el lado final no cambia.', html: row(c('y', '780° − 360° = 420°')) + row(c('y', '420° − 360° = 60°')) },
        { nota: 'Son coterminales, así que tienen las mismas razones.', html: say(box('sen 780° = sen 60° = √3/2'), 'g') },
        { nota: 'Radianes: media vuelta, 180°, equivale a π radianes. Es la regla de conversión.', html: row(c('b', '180° = π rad')) + row('factor: ' + f('π', '180°')) },
        { nota: 'Multiplicamos 135° por π/180 y simplificamos dividiendo entre 45.', html: row('135° · ' + f('π', '180') + ' = ' + f('135π', '180') + ' = ' + c('g', f('3π', '4'))) },
        { nota: 'Los básicos conviene memorizarlos.', html: tabla(['grados', '30°', '45°', '60°', '90°', '180°', '360°'], [['radianes', 'π/6', 'π/4', 'π/3', 'π/2', 'π', '2π']]) }
      ]
    }
  ];

})(window.PZ);

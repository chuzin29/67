/* pizarra-2a-6.js — Métodos en pizarra, 2.º año, temas 1.21 a 1.24 */
window.PIZARRA_2A = window.PIZARRA_2A || {};
(function (PZ) { var P = window.PIZARRA_2A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, tach = PZ.tach;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', R = '#ff8a80';
  var FF = "font-family=\"'Patrick Hand',cursive\"";
  /* tabla de tiza con encabezado en celdas normales (legible sobre la pizarra) */
  function tb(heads, rows, hl) {
    return '<table class="pz-tabla"><tbody><tr>' + heads.map(function (h) { return '<td>' + c('y', h) + '</td>'; }).join('') + '</tr>' +
      rows.map(function (r, i) { return '<tr' + (hl === i ? ' class="pz-hl"' : '') + '>' + r.map(function (x) { return '<td>' + x + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
  }
  function svg(inner, h, label) {
    return '<svg viewBox="0 0 450 ' + (h || 260) + '" style="width:min(100%,470px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'figura') + '"><g ' + FF + ' stroke-linecap="round" stroke-linejoin="round">' + inner + '</g></svg>';
  }
  function tx(x, y, s, col, sz, anc) {
    return '<text x="' + x + '" y="' + y + '" fill="' + (col || W) + '" font-size="' + (sz || 16) + '"' + (anc ? ' text-anchor="' + anc + '"' : '') + '>' + s + '</text>';
  }
  function ln(x1, y1, x2, y2, col, w) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (col || W) + '" stroke-width="' + (w || 2.4) + '"/>';
  }

  /* ---------- personas (círculos) ---------- */
  function people(rowsDef, h) {
    var s = '';
    rowsDef.forEach(function (r, ri) {
      var y = 62 + ri * 80;
      s += tx(20, y - 28, r.label, r.col, 17);
      for (var i = 0; i < r.n; i++) {
        var sel = i < r.sel, x = 34 + i * 33;
        s += '<circle cx="' + x + '" cy="' + y + '" r="12" fill="' + (sel ? r.col : 'none') + '" fill-opacity="' + (sel ? '.85' : '0') + '" stroke="' + r.col + '" stroke-width="' + (sel ? 3 : 2) + '"/>';
      }
    });
    return svg(s, h || 190, 'personas del grupo');
  }

  /* ---------- árbol de probabilidades ---------- */
  function tree(cfg, st, hl) {
    var s = '', ys = [40, 100, 160, 220], rx = 22, ry = 130, ax = 150, lx = 262, px = 292, li = 0;
    s += '<circle cx="' + rx + '" cy="' + ry + '" r="5" fill="' + W + '"/>';
    cfg.a.forEach(function (br, i) {
      var k0 = ys[i * 2], k1 = ys[i * 2 + 1], ay = (k0 + k1) / 2, up = i === 0;
      if (st >= 1) {
        s += ln(rx, ry, ax, ay, Y, 2.6);
        s += tx((rx + ax) / 2 + (up ? -4 : -4), (ry + ay) / 2 + (up ? -9 : 20), br.p, Y, 16, 'middle');
        s += '<circle cx="' + ax + '" cy="' + ay + '" r="17" fill="#1d2a24" stroke="' + Y + '" stroke-width="2.4"/>' + tx(ax, ay + 6, br.n, Y, 17, 'middle');
      }
      br.k.forEach(function (kd, j) {
        var ky = ys[i * 2 + j], isHl = hl && hl.indexOf(li) !== -1; li++;
        if (st >= 2) {
          s += ln(ax + 17, ay, lx - 6, ky, isHl ? K : B, isHl ? 3.2 : 2.4);
          s += tx((ax + lx) / 2 + 4, (ay + ky) / 2 + (j === 0 ? -9 : 20), kd.p, B, 15, 'middle');
          s += tx(lx, ky + 6, kd.n, B, 17);
        }
        if (st >= 3) {
          s += tx(px + 18, ky + 6, kd.r, isHl ? K : G, 15);
          if (isHl) s += '<rect x="' + (px + 10) + '" y="' + (ky - 18) + '" width="' + (kd.w || 140) + '" height="34" rx="9" fill="none" stroke="' + K + '" stroke-width="2.4"/>';
        }
      });
    });
    if (cfg.title) s += tx(rx - 12, 18, cfg.title, W, 15);
    return svg(s, 260, 'diagrama de árbol');
  }

  /* ============================================================
     1.21 Combinaciones
     ============================================================ */
  P['1.21'] = [
    {
      titulo: 'Comité de 3 entre 10: C(10, 3)',
      intro: 'Elegir un grupo sin cargos, donde el orden no importa, y simplificar la fórmula tachando.',
      pasos: [
        { nota: 'Hay 10 estudiantes y vamos a elegir un comité de 3, todos con el mismo papel. Nadie es presidente ni secretario.', html: row('10 estudiantes') + row('comité de ' + c('y', '3') + ' personas', 'sin cargos', 'y') },
        { nota: 'Pregunta clave: si cambio el orden de los elegidos, ¿es otro comité? Ana-Beto-Carla es el mismo grupo que Carla-Ana-Beto. Entonces el orden NO importa y usamos combinaciones.', html: row(c('p', 'Ana, Beto, Carla') + ' = ' + c('p', 'Carla, Ana, Beto')) + say('¡es el mismo comité!', 'g') },
        { nota: 'Un grupo de 3 se puede ordenar de 3 · 2 · 1 = 6 maneras. Si contáramos con orden, cada comité aparecería 6 veces, así que hay que dividir entre 6.', html: row(c('y', 'ABC  ACB  BAC  BCA  CAB  CBA')) + flechaTxt() + row(box('3! = 3 · 2 · 1 = 6') + ' &nbsp;maneras de ordenar', '', 'y') },
        { nota: 'Escribimos 3 factores que empiezan en 10 y van bajando (arriba), y 3! abajo. Eso es C(10, 3).', html: row('C(10, 3) = ' + f(c('y', '10 · 9 · 8'), c('p', '3 · 2 · 1'))) },
        { nota: 'Antes de multiplicar, simplificamos: 9 entre 3 da 3, y 8 entre 2 da 4. Tachamos con rojo lo que cancelamos.', html: row('= ' + f(c('y', '10') + ' · ' + tach('9') + ' · ' + tach('8'), tach('3') + ' · ' + tach('2') + ' · 1')) + row(c('g', '9 ÷ 3 = 3'), '', 'g') + row(c('g', '8 ÷ 2 = 4'), '', 'g') },
        { nota: 'Lo que queda arriba lo multiplicamos: 10 · 3 · 4 = 120.', html: row('= 10 · ' + c('g', '3') + ' · ' + c('g', '4')) + say(box('120 comités'), 'g') }
      ]
    },
    {
      titulo: 'Comité con hombres y mujeres',
      intro: 'Un club con 6 hombres y 5 mujeres: comités de 2 hombres y 2 mujeres. Se elige en cada grupo y se multiplica.',
      pasos: [
        { nota: 'Tenemos dos grupos separados. Dibujamos a las personas: azul los 6 hombres, rosa las 5 mujeres.', html: people([{ label: 'Hombres: 6', col: B, n: 6, sel: 0 }, { label: 'Mujeres: 5', col: K, n: 5, sel: 0 }]) },
        { nota: 'Queremos exactamente 2 hombres y 2 mujeres. Primero elegimos a los hombres (rellenos), sin importar el orden.', reemplaza: true, html: people([{ label: 'Hombres: elijo 2 de 6', col: B, n: 6, sel: 2 }, { label: 'Mujeres: 5', col: K, n: 5, sel: 0 }]) },
        { nota: 'C(6, 2): dos factores desde 6 arriba, 2! abajo. Cancelamos el 6 con el 2 y queda 3 · 5.', reemplaza: true, html: people([{ label: 'Hombres: elijo 2 de 6', col: B, n: 6, sel: 2 }, { label: 'Mujeres: 5', col: K, n: 5, sel: 0 }]) + row(c('b', 'C(6, 2)') + ' = ' + f('6 · 5', '2 · 1') + ' = ' + f(tach('6') + ' · 5', tach('2')) + ' = 3 · 5 = ' + box('15')) },
        { nota: 'Ahora las mujeres: elegimos 2 de 5, igual de fácil.', reemplaza: true, html: people([{ label: 'Hombres: elijo 2 de 6', col: B, n: 6, sel: 2 }, { label: 'Mujeres: elijo 2 de 5', col: K, n: 5, sel: 2 }]) + row(c('b', 'C(6, 2) = 15')) },
        { nota: 'C(5, 2) = (5 · 4)/2. El 4 entre 2 da 2, así que queda 5 · 2 = 10.', html: row(c('p', 'C(5, 2)') + ' = ' + f('5 · 4', '2 · 1') + ' = ' + f('5 · ' + tach('4'), tach('2')) + ' = 5 · 2 = ' + box('10')) },
        { nota: 'Por cada forma de elegir hombres hay 10 formas de elegir mujeres. "Hombres Y mujeres" significa multiplicar: 15 · 10.', html: row(c('b', '15') + ' · ' + c('p', '10') + ' = ' + box('150'), 'y se multiplica', 'y') + say('150 comités', 'g') }
      ]
    },
    {
      titulo: '"Al menos una" por complemento',
      intro: '12 estudiantes (7 chicas y 5 chicos): elegir 4 con al menos una chica. Se cuenta el total y se quita lo que no sirve.',
      pasos: [
        { nota: 'Hay 7 chicas (rosa) y 5 chicos (azul). Elegimos 4 personas y exigimos que haya al menos una chica.', html: people([{ label: 'Chicas: 7', col: K, n: 7, sel: 0 }, { label: 'Chicos: 5', col: B, n: 5, sel: 0 }]) },
        { nota: 'Contar "1 chica, 2 chicas, 3 chicas, 4 chicas" son muchos casos. Mejor truco: al menos una = TODOS − ninguna.', html: row(c('y', 'al menos una') + ' = ' + c('g', 'total') + ' − ' + c('r', 'ninguna chica')) },
        { nota: 'Total: elegimos 4 de las 12 personas. Cancelamos: 12 entre 4·3 = 1, y 10 entre 2 da 5, así que 11 · 5 · 9 = 495.', html: row(c('g', 'Total') + ' = C(12, 4) = ' + f('12 · 11 · 10 · 9', '4 · 3 · 2 · 1') + ' = ' + f(tach('12') + ' · 11 · ' + tach('10') + ' · 9', tach('4 · 3') + ' · ' + tach('2') + ' · 1')) + row('= 11 · 5 · 9 = ' + box('495')) },
        { nota: 'Ahora los comités "malos": ninguna chica, o sea los 4 son chicos. Solo hay 5 chicos y elegimos 4.', reemplaza: false, html: people([{ label: 'Chicas: 7', col: K, n: 7, sel: 0 }, { label: 'Chicos: elijo los 4', col: B, n: 5, sel: 4 }]) },
        { nota: 'C(5, 4) = 5. (Es lo mismo que decidir qué único chico se queda fuera.)', html: row(c('r', 'Ninguna chica') + ' = C(5, 4) = ' + f('5 · 4 · 3 · 2', '4 · 3 · 2 · 1') + ' = ' + box('5')) },
        { nota: 'Restamos: del total quitamos los comités sin chicas.', html: row(c('g', '495') + ' − ' + c('r', '5') + ' = ' + box('490')) + say('490 comités con al menos una chica', 'g') }
      ]
    }
  ];

  function flechaTxt() { return PZ.flecha('cada comité se repite 6 veces', 'r'); }

  /* ============================================================
     1.22 Probabilidad clásica
     ============================================================ */
  function dados(stage) {
    var s = '', x0 = 110, y0 = 52, cs = 34, i, j;
    s += tx(x0 + 3 * cs, 18, 'segundo dado', B, 15, 'middle');
    s += tx(58, y0 + 3 * cs + 4, '1.º dado', Y, 15, 'middle');
    for (i = 0; i < 6; i++) {
      s += tx(x0 + i * cs + cs / 2, 42, i + 1, B, 16, 'middle');
      s += tx(94, y0 + i * cs + cs / 2 + 5, i + 1, Y, 16, 'middle');
    }
    if (stage >= 1) for (i = 0; i < 6; i++) for (j = 0; j < 6; j++) {
      var hit = i + j + 2 === 7;
      if (stage >= 2 && hit) s += '<rect x="' + (x0 + j * cs + 2) + '" y="' + (y0 + i * cs + 2) + '" width="' + (cs - 4) + '" height="' + (cs - 4) + '" rx="7" fill="' + G + '" fill-opacity=".28" stroke="' + G + '" stroke-width="2.2"/>';
      s += tx(x0 + j * cs + cs / 2, y0 + i * cs + cs / 2 + 5, i + j + 2, stage >= 2 && !hit ? '#f4f6ef66' : (hit && stage >= 2 ? G : W), 15, 'middle');
    }
    for (i = 0; i <= 6; i++) {
      s += ln(x0, y0 + i * cs, x0 + 6 * cs, y0 + i * cs, '#f4f6ef55', 1.4);
      s += ln(x0 + i * cs, y0, x0 + i * cs, y0 + 6 * cs, '#f4f6ef55', 1.4);
    }
    return svg(s, 266, 'tabla de dos dados');
  }
  function venn(stage) {
    var s = '<rect x="12" y="12" width="426" height="236" rx="14" fill="none" stroke="' + W + '" stroke-width="2.2"/>' + tx(26, 34, 'S = 52 cartas', W, 15);
    s += '<circle cx="150" cy="140" r="62" fill="' + Y + '" fill-opacity=".14" stroke="' + Y + '" stroke-width="2.6"/>';
    s += '<circle cx="262" cy="140" r="84" fill="' + K + '" fill-opacity=".14" stroke="' + K + '" stroke-width="2.6"/>';
    s += tx(130, 66, 'As', Y, 18, 'middle') + tx(262, 46, 'Corazón', K, 18, 'middle');
    if (stage === 1) {
      s += tx(128, 146, '4', Y, 24, 'middle') + tx(290, 146, '13', K, 24, 'middle') + tx(380, 220, '', W);
    } else {
      s += tx(122, 148, '3', Y, 24, 'middle') + tx(198, 148, '1', G, 24, 'middle') + tx(275, 148, '12', K, 24, 'middle') + tx(385, 220, '36', W, 22, 'middle') + tx(385, 200, 'ninguna', W, 14, 'middle');
    }
    return svg(s, 260, 'diagrama de Venn: as y corazón');
  }

  P['1.22'] = [
    {
      titulo: 'Dos dados: que sumen 7',
      intro: 'Probabilidad clásica = casos favorables entre casos posibles, contando con una tabla.',
      pasos: [
        { nota: 'Lanzamos dos dados y queremos que la suma sea 7. Para no perdernos, hacemos una tabla: un dado en las filas, el otro en las columnas.', html: dados(0) },
        { nota: 'Cada casilla es un resultado posible y escribimos su suma. Son 6 filas por 6 columnas.', reemplaza: true, html: dados(1) },
        { nota: 'Contamos los casos POSIBLES: todas las casillas de la tabla.', reemplaza: true, html: dados(1) + row('casos posibles = 6 · 6 = ' + c('y', '36'), 'toda la tabla', 'y') },
        { nota: 'Ahora pintamos las casillas donde la suma es 7. Fíjate: forman una diagonal. Son los casos FAVORABLES.', reemplaza: true, html: dados(2) + row('casos posibles = ' + c('y', '36'), '', 'y') + row('casos favorables = ' + c('g', '6'), 'las casillas verdes', 'g') },
        { nota: 'La probabilidad es favorables entre posibles. Siempre abajo va el total, arriba lo que buscamos.', html: row('P(suma 7) = ' + f(c('g', 'favorables'), c('y', 'posibles')) + ' = ' + f(c('g', '6'), c('y', '36'))) },
        { nota: 'Simplificamos dividiendo arriba y abajo entre 6.', html: row('= ' + f('6 ÷ 6', '36 ÷ 6') + ' = ' + box(f('1', '6')), '≈ 0.167 = 16.7 %', 'g') },
        { nota: 'Comprobación: una probabilidad siempre está entre 0 y 1. Aquí 1/6 está bien. Es la suma más probable de dos dados.', html: say('0 ≤ ' + f('1', '6') + ' ≤ 1 &nbsp;✓', 'g') }
      ]
    },
    {
      titulo: 'Regla de adición: as o corazón',
      intro: 'Una carta de una baraja de 52. ¿Probabilidad de que sea as o corazón? Cuidado con contar dos veces.',
      pasos: [
        { nota: 'Sacamos una carta al azar. Queremos que sea un as O un corazón (basta con una de las dos cosas).', html: venn(1) },
        { nota: 'Hay 4 ases y 13 corazones. Pero ojo: ¡el as de corazones está en los dos círculos!', reemplaza: true, html: venn(1) + row(c('y', 'P(as)') + ' = ' + f('4', '52') + ' &nbsp;&nbsp; ' + c('p', 'P(corazón)') + ' = ' + f('13', '52')) },
        { nota: 'Si sumamos 4 + 13 = 17 contamos esa carta dos veces. Tenemos que quitar una vez la que se repite.', reemplaza: true, html: venn(1) + row(c('y', 'P(as)') + ' = ' + f('4', '52') + ' &nbsp;&nbsp; ' + c('p', 'P(corazón)') + ' = ' + f('13', '52')) + row(c('r', '4 + 13 = 17 ✗'), 'el as de corazones sale 2 veces', 'r') },
        { nota: 'Separamos por zonas: 3 ases que no son corazón, 1 as de corazones, y 12 corazones que no son as.', reemplaza: true, html: venn(2) + row(c('y', 'P(as)') + ' = ' + f('4', '52') + ' &nbsp;&nbsp; ' + c('p', 'P(corazón)') + ' = ' + f('13', '52')) + row(c('r', '4 + 13 = 17 ✗'), 'el as de corazones sale 2 veces', 'r') },
        { nota: 'Regla de adición: P(A o B) = P(A) + P(B) − P(A y B). Restamos lo que se contó doble.', html: row('P(as o corazón) = ' + f('4', '52') + ' + ' + f('13', '52') + ' − ' + c('r', f('1', '52'))) },
        { nota: 'Ya con el mismo denominador, operamos solo los de arriba: 4 + 13 − 1 = 16.', html: row('= ' + f('4 + 13 − 1', '52') + ' = ' + f('16', '52') + ' = ' + box(f('4', '13')), '≈ 0.308', 'g') },
        { nota: 'Si los eventos no se pueden dar a la vez (por ejemplo, as y rey), no hay nada que restar: solo se suman.', html: say('excluyentes: solo sumar', 'y') + say('no excluyentes: sumar y restar la parte común', 'y') }
      ]
    },
    {
      titulo: 'Complemento: al menos una cara',
      intro: 'Se lanza una moneda 3 veces. ¿Probabilidad de que salga al menos una cara? Es más fácil contar lo contrario.',
      pasos: [
        { nota: 'Lanzamos 3 veces una moneda (C = cara, S = sello). Queremos al menos una cara. Escribimos todos los resultados posibles.', html: row(c('w', 'CCC &nbsp; CCS &nbsp; CSC &nbsp; CSS')) + row(c('w', 'SCC &nbsp; SCS &nbsp; SSC &nbsp; SSS')) + row('2 · 2 · 2 = ' + c('y', '8') + ' resultados', 'casos posibles', 'y') },
        { nota: 'Contar los que tienen una, dos o tres caras es largo. Fíjate: el único que NO sirve es el que no tiene ninguna cara.', html: row(c('g', 'CCC &nbsp; CCS &nbsp; CSC &nbsp; CSS') ) + row(c('g', 'SCC &nbsp; SCS &nbsp; SSC') + ' &nbsp; ' + c('r', tach('SSS'))) },
        { nota: 'Calculamos el "no deseado": solo SSS, es 1 caso de 8.', html: row(c('r', 'P(ninguna cara)') + ' = ' + f('1', '8')) },
        { nota: 'Lo que pasa y lo que no pasa suman 1 (100 %). Así que el complemento es 1 menos lo que no queremos.', html: row('P(al menos una) = ' + c('y', '1') + ' − ' + c('r', 'P(ninguna)'), 'complemento', 'y') },
        { nota: 'Hacemos la resta: 1 = 8/8, entonces 8/8 − 1/8 = 7/8.', html: row('= 1 − ' + f('1', '8') + ' = ' + f('8', '8') + ' − ' + f('1', '8') + ' = ' + box(f('7', '8')), '= 0.875 = 87.5 %', 'g') },
        { nota: 'Siempre que veas "al menos uno", piensa: 1 − P(ninguno). Ahorra muchísimo trabajo.', html: say('al menos uno = 1 − ninguno', 'y') }
      ]
    }
  ];

  /* ============================================================
     1.23 Condicional e independencia
     ============================================================ */
  var T = {
    tree: {
      a: [
        { n: 'R', p: '5/8', k: [{ n: 'R', p: '4/7', r: '5/8 · 4/7 = 20/56', w: 118 }, { n: 'A', p: '3/7', r: '5/8 · 3/7 = 15/56', w: 118 }] },
        { n: 'A', p: '3/8', k: [{ n: 'R', p: '5/7', r: '3/8 · 5/7 = 15/56', w: 118 }, { n: 'A', p: '2/7', r: '3/8 · 2/7 = 6/56', w: 118 }] }
      ]
    }
  };

  P['1.23'] = [
    {
      titulo: 'Tabla de doble entrada',
      intro: '160 estudiantes y su comida favorita. La probabilidad condicional se lee mirando solo una fila o una columna.',
      pasos: [
        { nota: 'Preguntamos a 160 estudiantes si prefieren pupusas o pizza. Anotamos cuántas mujeres y hombres eligieron cada una.', html: tb(['', 'Pupusas', 'Pizza'], [['Mujeres', '50', '40'], ['Hombres', '30', '40']]) },
        { nota: 'Agregamos los totales por fila, por columna y el total general. Esas cifras serán nuestros denominadores.', reemplaza: true, html: tb(['', 'Pupusas', 'Pizza', 'Total'], [['Mujeres', '50', '40', c('y', '90')], ['Hombres', '30', '40', c('y', '70')], ['Total', c('b', '80'), c('b', '80'), c('g', '160')]]) },
        { nota: 'Probabilidad conjunta: "mujer Y pupusas" es una casilla, 50, entre los 160 de todos.', reemplaza: true, html: tb(['', 'Pupusas', 'Pizza', 'Total'], [['Mujeres', '50', '40', c('y', '90')], ['Hombres', '30', '40', c('y', '70')], ['Total', c('b', '80'), c('b', '80'), c('g', '160')]]) + row('P(mujer y pupusas) = ' + f('50', '160') + ' = ' + c('g', f('5', '16')), 'se divide entre TODOS', 'g') },
        { nota: 'Condicional: "sabiendo que prefiere pupusas, ¿cuál es la probabilidad de que sea mujer?". Solo miramos la columna de pupusas, y el total pasa a ser 80.', reemplaza: true, html: tb(['', 'Pupusas', 'Pizza', 'Total'], [['Mujeres', c('p', '50'), '40', '90'], ['Hombres', '30', '40', '70'], ['Total', c('b', '80'), '80', '160']], 0) + row('P(mujer y pupusas) = ' + f('50', '160') + ' = ' + c('g', f('5', '16')), 'se divide entre TODOS', 'g') + row('P(mujer | pupusas) = ' + f(c('p', '50'), c('b', '80')) + ' = ' + box(f('5', '8')), 'el total cambia a 80', 'b') },
        { nota: 'Ojo al orden. Ahora al revés: sabiendo que es mujer, ¿que prefiera pupusas? Miramos solo la fila de mujeres: total 90.', html: row('P(pupusas | mujer) = ' + f(c('p', '50'), c('y', '90')) + ' = ' + box(f('5', '9')), 'fila de mujeres', 'y') },
        { nota: '5/8 y 5/9 NO son iguales. P(A | B) no es lo mismo que P(B | A): lo que va después de la barra es el "dato que ya sabemos" y es el denominador.', html: say('P(A | B) ≠ P(B | A)', 'r') + row('P(A | B) = ' + f('P(A y B)', 'P(B)'), 'fórmula', 'y') }
      ]
    },
    {
      titulo: 'Árbol sin reemplazo',
      intro: 'Una urna con 5 bolas rojas y 3 azules; se sacan 2 bolas, una tras otra, sin devolverlas.',
      pasos: [
        { nota: 'La urna tiene 8 bolas: 5 rojas (R) y 3 azules (A). Sacamos una, la dejamos fuera y sacamos otra.', html: row('Urna: ' + c('r', '5 rojas') + ' y ' + c('b', '3 azules')) + row('sacamos 2 bolas, ' + c('y', 'sin devolver'), '', 'y') },
        { nota: 'Primera extracción: salen R con 5/8 o A con 3/8. Dibujamos las dos ramas.', html: tree(T.tree, 1) },
        { nota: 'Segunda extracción: ahora quedan 7 bolas y cambian los números. Si salió R, quedan 4 R y 3 A: 4/7 y 3/7. Si salió A, quedan 5 R y 2 A: 5/7 y 2/7.', reemplaza: true, html: tree(T.tree, 2) },
        { nota: 'Para cada camino completo MULTIPLICAMOS las ramas (regla del producto): la probabilidad de la 1.ª y luego la de la 2.ª sabiendo lo anterior.', reemplaza: true, html: tree(T.tree, 3) },
        { nota: 'Comprobación: todos los caminos juntos deben sumar 1. (20 + 15 + 15 + 6 = 56.)', html: row(f('20', '56') + ' + ' + f('15', '56') + ' + ' + f('15', '56') + ' + ' + f('6', '56') + ' = ' + f('56', '56') + ' = ' + c('g', '1 ✓')) },
        { nota: 'Pregunta: ¿probabilidad de sacar una de cada color? Marcamos los dos caminos que sirven (R y luego A, o A y luego R).', reemplaza: true, html: tree(T.tree, 3, [1, 2]) + row(f('20', '56') + ' + ' + f('15', '56') + ' + ' + f('15', '56') + ' + ' + f('6', '56') + ' = ' + f('56', '56') + ' = ' + c('g', '1 ✓')) },
        { nota: 'Son caminos distintos que no pueden ocurrir a la vez, así que sumamos: "o" suma, "y" multiplica.', html: row('P(una de cada color) = ' + f('15', '56') + ' + ' + f('15', '56') + ' = ' + f('30', '56') + ' = ' + box(f('15', '28'))) }
      ]
    },
    {
      titulo: '¿Son independientes?',
      intro: 'Dos dados: A = "el primer dado es par". Probamos con B = "suma 7" y con C = "suma 8".',
      pasos: [
        { nota: 'Dos eventos son independientes si saber uno NO cambia la probabilidad del otro. La prueba: P(A y B) debe ser igual a P(A) · P(B).', html: row('independientes si &nbsp; ' + box('P(A y B) = P(A) · P(B)')) },
        { nota: 'Primero las probabilidades sencillas con dos dados (36 casos). El primer dado es par en 3 de 6 caras.', html: row(c('y', 'P(A)') + ' = ' + f('18', '36') + ' = ' + f('1', '2')) + row(c('b', 'P(B)') + ' = P(suma 7) = ' + f('6', '36') + ' = ' + f('1', '6')) },
        { nota: 'Ahora la intersección: primer dado par Y suma 7. Solo sirven (2,5), (4,3) y (6,1): 3 casos.', html: row(c('g', 'P(A y B)') + ' = ' + f('3', '36') + ' = ' + f('1', '12')) },
        { nota: 'Comparamos: multiplicamos P(A) · P(B).', html: row(c('y', f('1', '2')) + ' · ' + c('b', f('1', '6')) + ' = ' + f('1', '12'), 'producto', 'y') + row(f('1', '12') + ' = ' + f('1', '12') + ' &nbsp;' + c('g', '✓ iguales'), '', 'g') },
        { nota: 'Son iguales, así que A y B son INDEPENDIENTES: saber que el primer dado es par no cambia la probabilidad de sumar 7.', html: say(box('A y B son independientes'), 'g') },
        { nota: 'Probemos con C = suma 8. P(C) = 5/36. Con primer dado par sirven (2,6), (4,4), (6,2): 3 casos, o sea P(A y C) = 3/36.', html: row(c('b', 'P(C)') + ' = ' + f('5', '36') + ' &nbsp;&nbsp; ' + c('g', 'P(A y C)') + ' = ' + f('3', '36')) },
        { nota: 'El producto P(A) · P(C) = 1/2 · 5/36 = 5/72, y 3/36 = 6/72. Son distintos, así que A y C NO son independientes.', html: row(f('1', '2') + ' · ' + f('5', '36') + ' = ' + f('5', '72') + ' &nbsp; ≠ &nbsp; ' + f('6', '72') + ' = ' + f('3', '36')) + say(c('r', 'A y C son dependientes'), 'r') }
      ]
    }
  ];

  /* ============================================================
     1.24 Teorema de Bayes
     ============================================================ */
  var MQ = {
    a: [
      { n: 'A', p: '0.6', k: [{ n: 'D', p: '0.02', r: '0.6 · 0.02 = 0.012', w: 128 }, { n: 'no D', p: '0.98', r: '0.6 · 0.98 = 0.588', w: 128 }] },
      { n: 'B', p: '0.4', k: [{ n: 'D', p: '0.05', r: '0.4 · 0.05 = 0.020', w: 128 }, { n: 'no D', p: '0.95', r: '0.4 · 0.95 = 0.380', w: 128 }] }
    ]
  };
  var PR = {
    a: [
      { n: 'E', p: '0.01', k: [{ n: '+', p: '0.95', r: '0.01 · 0.95 = 0.0095', w: 140 }, { n: '−', p: '0.05', r: '0.01 · 0.05 = 0.0005', w: 140 }] },
      { n: 'S', p: '0.99', k: [{ n: '+', p: '0.05', r: '0.99 · 0.05 = 0.0495', w: 140 }, { n: '−', p: '0.95', r: '0.99 · 0.95 = 0.9405', w: 140 }] }
    ]
  };

  P['1.24'] = [
    {
      titulo: 'Dos máquinas y una pieza defectuosa',
      intro: 'Vemos el efecto (pieza defectuosa) y preguntamos por la causa (¿de qué máquina vino?).',
      pasos: [
        { nota: 'Una fábrica tiene dos máquinas. La A hace el 60 % de las piezas y el 2 % le salen defectuosas. La B hace el 40 % y el 5 % le salen defectuosas.', html: tb(['Máquina', 'Hace', 'Defectuosas'], [['A', '60 %', '2 %'], ['B', '40 %', '5 %']]) },
        { nota: 'Sacamos una pieza al azar y está defectuosa (D). Pregunta: ¿qué probabilidad hay de que venga de la máquina A?', html: say('Pieza defectuosa (D). ¿De qué máquina vino?', 'y') + row(c('p', 'P(A | D)') + ' = ?', 'va del efecto a la causa', 'p') },
        { nota: 'Dibujamos el árbol. Primero las causas: pieza de A (0.6) o de B (0.4). Las ramas de un mismo nodo suman 1.', html: tree(MQ, 1) },
        { nota: 'Desde cada máquina, la pieza sale defectuosa (D) o buena (no D). Con A: 0.02 y 0.98. Con B: 0.05 y 0.95.', reemplaza: true, html: tree(MQ, 2) },
        { nota: 'Multiplicamos las ramas de cada camino para tener la probabilidad de cada final. Todos juntos suman 1.', reemplaza: true, html: tree(MQ, 3) },
        { nota: 'Probabilidad total de D: sumamos solo los caminos que terminan en D (los dos rosados).', reemplaza: true, html: tree(MQ, 3, [0, 2]) + row('P(D) = ' + c('p', '0.012') + ' + ' + c('p', '0.020') + ' = ' + box('0.032')) },
        { nota: 'Bayes: el camino de A que termina en D, dividido entre todos los caminos que terminan en D.', html: row('P(A | D) = ' + f(c('p', '0.012'), '0.032') + ' = ' + f('12', '32') + ' = ' + box(f('3', '8')), '= 0.375', 'g') },
        { nota: 'Comprobación: la causa B sería 0.020/0.032 = 5/8, y 3/8 + 5/8 = 1. Aunque A produce más, B es más probable porque falla más.', html: row('P(B | D) = ' + f('0.020', '0.032') + ' = ' + f('5', '8')) + row(f('3', '8') + ' + ' + f('5', '8') + ' = ' + c('g', '1 ✓')) }
      ]
    },
    {
      titulo: 'Prueba médica: ¿realmente estoy enfermo?',
      intro: 'Una enfermedad rara, una prueba bastante buena... y un resultado que sorprende. Mismo árbol, mismo método.',
      pasos: [
        { nota: 'Datos: el 1 % de la gente tiene la enfermedad. La prueba da positivo en el 95 % de los enfermos y también en el 5 % de los sanos (falsos positivos).', html: row(c('y', '1 %') + ' enfermos (E), ' + c('b', '99 %') + ' sanos (S)') + row('prueba + : ' + c('y', '95 %') + ' de los E, &nbsp;' + c('b', '5 %') + ' de los S') },
        { nota: 'Alguien sale positivo. ¿Qué tan probable es que de verdad esté enfermo? Mucha gente diría que 95 %... vamos a ver.', html: say(c('p', 'P(E | +)') + ' = ?', 'w') },
        { nota: 'Árbol: primero enfermo (0.01) o sano (0.99); luego la prueba sale + o −.', html: tree(PR, 2) },
        { nota: 'Multiplicamos cada camino. Los positivos son dos: enfermo y +, y sano y +.', reemplaza: true, html: tree(PR, 3, [0, 2]) },
        { nota: 'Total de positivos: sumamos los dos caminos. Casi todos los positivos vienen de gente sana, porque hay muchísima más gente sana.', html: row('P(+) = ' + c('p', '0.0095') + ' + ' + c('p', '0.0495') + ' = ' + box('0.059')) },
        { nota: 'Bayes: el camino "enfermo y +" entre el total de positivos.', html: row('P(E | +) = ' + f(c('p', '0.0095'), '0.059') + ' = ' + f('95', '590') + ' = ' + box(f('19', '118')), '≈ 0.161', 'g') },
        { nota: 'Solo cerca del 16 %. Para verlo fácil: de 10 000 personas, 100 están enfermas (95 dan +) y 9 900 sanas (495 dan +). De 590 positivos, solo 95 están enfermos.', html: row('enfermas: 100 → ' + c('g', '95') + ' dan +') + row('sanas: 9 900 → ' + c('r', '495') + ' dan +') + row(f('95', '95 + 495') + ' = ' + f('95', '590') + ' ≈ ' + c('g', '16 %')) }
      ]
    }
  ];
})(window.PZ);

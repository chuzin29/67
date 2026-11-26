/* pizarra-1a-6e.js — Métodos en pizarra, 1.er año, tema 1.19 Muestreo */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, tabla = PZ.tabla;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0';
  function svg(inner, h) { return '<svg viewBox="0 0 420 ' + (h || 150) + '" class="pz-tij" role="img" aria-hidden="true">' + inner + '</svg>'; }
  function t(x, y, s, col, sz, anc) { return '<text x="' + x + '" y="' + y + '" fill="' + (col || W) + '" font-size="' + (sz || 15) + '" text-anchor="' + (anc || 'middle') + '" style="font-family:\'Patrick Hand\',cursive">' + s + '</text>'; }

  /* población: 4 filas x 10 puntos; marcados = muestra */
  function poblacion(marca) {
    var s = '<rect x="20" y="28" width="380" height="104" rx="12" fill="none" stroke="' + W + '" stroke-opacity=".6" stroke-width="2"/>' + t(210, 20, 'Población (N = 40)', W, 14), i, r, k, x, y;
    for (r = 0; r < 4; r++) for (k = 0; k < 10; k++) {
      i = r * 10 + k + 1; x = 50 + k * 36; y = 50 + r * 26;
      if (marca && marca.indexOf(i) !== -1) s += '<circle cx="' + x + '" cy="' + y + '" r="9" fill="' + Y + '"/>';
      else s += '<circle cx="' + x + '" cy="' + y + '" r="7" fill="none" stroke="' + B + '" stroke-width="2"/>';
    }
    if (marca) s += t(210, 148, 'Muestra (n = ' + marca.length + ') = puntos amarillos', Y, 14);
    return svg(s, 156);
  }
  /* sistemático: 20 elementos, k = 4, inicio 3 */
  function sistem() {
    var s = '', i, x;
    for (i = 1; i <= 20; i++) {
      x = 24 + (i - 1) * 19;
      s += (i % 4 === 3) ? '<circle cx="' + x + '" cy="70" r="8" fill="' + Y + '"/>' : '<circle cx="' + x + '" cy="70" r="6" fill="none" stroke="' + B + '" stroke-width="2"/>';
      s += t(x, 98, i, W, 9);
    }
    s += '<path d="M43 46Q62 28 81 46" fill="none" stroke="' + K + '" stroke-width="2.5"/>' + t(62, 24, '+4', K, 14);
    s += '<path d="M119 46Q138 28 157 46" fill="none" stroke="' + K + '" stroke-width="2.5"/>' + t(138, 24, '+4', K, 14);
    s += t(210, 130, 'N = 20, n = 5, k = 4, inicio 3: 3, 7, 11, 15, 19', G, 14);
    return svg(s, 144);
  }

  P['1.19'] = [
    {
      titulo: 'Tipos de muestreo',
      intro: 'Una población de 40 elementos y una muestra de 8: cuatro formas de elegirla.',
      pasos: [
        { nota: 'La población son todos los elementos que queremos estudiar. Aquí N = 40.', html: poblacion(null) },
        { nota: 'Muestra: una parte de la población. Aquí n = 8 puntos elegidos, marcados en amarillo.', html: poblacion([3, 9, 14, 20, 22, 27, 33, 38]) },
        { nota: 'Aleatorio simple: sorteamos números del 1 al 40, sin repetir. Todos tienen la misma probabilidad.', html: row(c('y', 'Aleatorio simple') + ': sorteo') + row('fracción de muestreo ' + f('n', 'N') + ' = ' + f('8', '40') + ' = ' + c('g', '0,2')) },
        { nota: 'Sistemático: un inicio al azar y luego un elemento cada k = N/n = 5 lugares.', html: row(c('b', 'Sistemático') + ': k = ' + f('40', '8') + ' = 5') },
        { nota: 'Estratificado: se divide en grupos distintos (estratos) y se muestrea en cada uno, en proporción a su tamaño.', html: row(c('p', 'Estratificado') + ': un poco de cada grupo') },
        { nota: 'Conglomerados: se sortean grupos naturales completos y se estudia a todos sus elementos.', html: say(box('Conglomerados: grupos enteros'), 'g') }
      ]
    },
    {
      titulo: 'Muestreo sistemático con k',
      intro: 'Una lista de 20 elementos y una muestra de 5. Calculamos el intervalo k.',
      pasos: [
        { nota: 'Datos: N = 20 elementos y n = 5 en la muestra.', html: row('N = ' + c('b', '20') + ',   n = ' + c('y', '5')) },
        { nota: 'El intervalo de muestreo es k = N/n.', html: row('k = ' + f('N', 'n') + ' = ' + f('20', '5') + ' = ' + c('g', '4')) },
        { nota: 'Elegimos al azar el inicio entre 1 y k. Supongamos que sale 3.', html: row('inicio ' + c('p', 'a = 3')) },
        { nota: 'Sumamos k una y otra vez: 3, 7, 11, 15, 19. Mira los puntos amarillos.', html: sistem() },
        { nota: 'Comprobación: salieron 5 elementos, igual que n. El último es a + (n − 1)k = 3 + 4·4 = 19.', html: say(box('3, 7, 11, 15, 19'), 'g') }
      ]
    },
    {
      titulo: 'Muestreo estratificado con tabla',
      intro: 'Un colegio de 1 000 alumnos: 400 de 1.º, 350 de 2.º y 250 de 3.º. Muestra de 80.',
      pasos: [
        { nota: 'Cada grado es un estrato. Anotamos su tamaño Nᵢ.', html: tabla(['estrato', 'Nᵢ'], [['1.º', '400'], ['2.º', '350'], ['3.º', '250'], ['total', '1000']]) },
        { nota: 'La asignación proporcional usa nᵢ = n · Nᵢ/N con n = 80 y N = 1000.', html: row('n' + 'ᵢ = 80 · ' + f('Nᵢ', '1000')) + row('factor = ' + f('80', '1000') + ' = ' + c('y', '0,08')) },
        { nota: 'Multiplicamos cada Nᵢ por 0,08.', html: row('1.º: 400 · 0,08 = ' + c('g', '32')) + row('2.º: 350 · 0,08 = ' + c('g', '28')) + row('3.º: 250 · 0,08 = ' + c('g', '20')) },
        { nota: 'Resumen en la tabla. Dentro de cada grado se elige con sorteo.', html: tabla(['estrato', 'Nᵢ', 'nᵢ'], [['1.º', '400', c('g', '32')], ['2.º', '350', c('g', '28')], ['3.º', '250', c('g', '20')], ['total', '1000', c('y', '80')]]) },
        { nota: 'Comprobamos: 32 + 28 + 20 = 80, justo el tamaño de la muestra.', html: say(box('32 + 28 + 20 = 80'), 'g') }
      ]
    },
    {
      titulo: 'Parámetro vs estadístico',
      intro: 'Un colegio de 800 estudiantes: se sortean 40 y 12 viajan en bus.',
      pasos: [
        { nota: 'La población son los 800 estudiantes. La muestra son los 40 sorteados.', html: row('N = ' + c('b', '800') + ',   n = ' + c('y', '40')) },
        { nota: 'El estadístico se calcula con la muestra: la proporción muestral p̂ = x/n.', html: row(c('y', 'estadístico') + ': p̂ = ' + f('12', '40') + ' = ' + c('g', '0,3')) },
        { nota: 'El parámetro es la proporción de los 800, que no conocemos. El estadístico lo estima.', html: row(c('p', 'parámetro') + ': p = ?   (de los 800)') },
        { nota: 'Si luego se supiera que el parámetro es 0,28, el error sería estadístico − parámetro.', html: row('error = 0,3 − 0,28 = ' + c('g', '0,02')) },
        { nota: 'Recuerda: el parámetro es fijo y de la población; el estadístico cambia con cada muestra.', html: say(box('parámetro: población · estadístico: muestra'), 'g') }
      ]
    }
  ];

})(window.PZ);

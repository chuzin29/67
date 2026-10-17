/* ============================================================
   data-core.js - Banco base de ejercicios (5 juegos x 6)
   Extraido del sitio original y conservado intacto.
   Requiere format.js (helpers vec, sqrt, conj, abs).
   ============================================================ */

window.EJERCICIOS = [
  // JUEGO 1 - VECTORES
  {
    id: 'j1v1', juego: 1, parte: 'vectores', nivel: 'facil',
    titulo: 'Ejercicio 1: Multiplicación por escalar y suma',
    datos: { a: [3, -7], d: [Math.sqrt(2), -5], k: 3 },
    formula: 'k·' + vec('a') + ' + ' + vec('d'),
    pasos: [
      'k·' + vec('a') + ' = 3·(3, −7) = (9, −21)',
      'k·' + vec('a') + ' + ' + vec('d') + ' = (9, −21) + (' + sqrt('2') + ', −5)',
      '= (9+' + sqrt('2') + ', −21−5) = (9+' + sqrt('2') + ', −26)',
      'Resultado: (9+' + sqrt('2') + ', −26) ≈ (10.41, −26)'
    ],
    respuesta: [10.414213562373096, -26],
    tipo: 'vector'
  },
  {
    id: 'j1v2', juego: 1, parte: 'vectores', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Norma de una combinación lineal',
    datos: { e: [-Math.sqrt(3), 2.5], b: [-4.5, 2.8], n: 2 },
    formula: '‖n·' + vec('e') + ' − ' + vec('b') + '‖',
    pasos: [
      'n·' + vec('e') + ' = 2·(−' + sqrt('3') + ', 5/2) = (−2' + sqrt('3') + ', 5)',
      'n·' + vec('e') + ' − ' + vec('b') + ' = (−2' + sqrt('3') + ', 5) − (−4.5, 2.8)',
      '= (−2' + sqrt('3') + '+4.5, 5−2.8) = (−2' + sqrt('3') + '+4.5, 2.2)',
      '‖n·' + vec('e') + ' − ' + vec('b') + '‖ = ' + sqrt('(−2' + sqrt('3') + '+4.5)² + 2.2²') + ' = ' + sqrt('1.036 + 4.84') + ' = ' + sqrt('5.876') + ' ≈ 2.43'
    ],
    respuesta: 2.43168366852274,
    tipo: 'escalar'
  },
  {
    id: 'j1v3', juego: 1, parte: 'vectores', nivel: 'dificil',
    titulo: 'Ejercicio 3: Norma de combinación lineal con tres vectores',
    datos: { c: [0.5, -0.75], f: [0.75, -1.2], g: [-8, 2/3], k1: 2, k2: 4 },
    formula: '‖k₁·' + vec('c') + ' − k₂·' + vec('f') + ' + ' + vec('g') + '‖',
    pasos: [
      'k₁·' + vec('c') + ' = 2·(1/2, −3/4) = (1, −1.5)',
      'k₂·' + vec('f') + ' = 4·(0.75, −1.2) = (3, −4.8)',
      'k₁·' + vec('c') + ' − k₂·' + vec('f') + ' = (1−3, −1.5+4.8) = (−2, 3.3)',
      'k₁·' + vec('c') + ' − k₂·' + vec('f') + ' + ' + vec('g') + ' = (−2, 3.3) + (−8, 2/3)',
      '= (−2−8, 3.3+2/3) = (−10, 3.967)',
      '‖...‖ = ' + sqrt('100 + 15.73') + ' = ' + sqrt('115.73') + ' ≈ 10.76'
    ],
    respuesta: 10.757994443410187,
    tipo: 'escalar'
  },
  // JUEGO 1 - COMPLEJOS
  {
    id: 'j1c1', juego: 1, parte: 'complejos', nivel: 'facil',
    titulo: 'Ejercicio 1: Conjugado y multiplicación por escalar',
    datos: { z1: [5, -3], z4: [Math.sqrt(2), 7], n: 2 },
    formula: 'n·' + conj('z₁') + ' − z₄',
    pasos: [
      conj('z₁') + ' = 5+3i',
      'n·' + conj('z₁') + ' = 2·(5+3i) = (10, 6i)',
      'n·' + conj('z₁') + ' − z₄ = (10, 6) − (' + sqrt('2') + ', 7)',
      '= (10−' + sqrt('2') + ', 6i−7i) = (10−' + sqrt('2') + ', −i)',
      'Resultado: (10−' + sqrt('2') + ', −i) ≈ (8.59, −1i)'
    ],
    respuesta: [8.585786437626904, -1],
    tipo: 'vector'
  },
  {
    id: 'j1c2', juego: 1, parte: 'complejos', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Producto de conjugado por complejo',
    datos: { z2: [-2.4, 6.1], z5: [-Math.sqrt(5), -2/3] },
    formula: conj('z₂') + '·z₅',
    pasos: [
      conj('z₂') + ' = −2.4−6.1i',
      conj('z₂') + '·z₅ = (−2.4−6.1i)·(−' + sqrt('5') + '−2/3i)',
      '= (−2.4)(−' + sqrt('5') + ') + (−2.4)(−2/3)i + (−6.1i)(−' + sqrt('5') + ') + (−6.1i)(−2/3)i',
      '= 2.4' + sqrt('5') + ' + 1.6i + 6.1' + sqrt('5') + '·i + 4.067i²',
      '= (2.4' + sqrt('5') + ' − 4.067) + (1.6 + 6.1' + sqrt('5') + ')i',
      '≈ (1.30, 15.24)'
    ],
    respuesta: [1.299896479332829, 15.240014662748717],
    tipo: 'vector'
  },
  {
    id: 'j1c3', juego: 1, parte: 'complejos', nivel: 'dificil',
    titulo: 'Ejercicio 3: Módulo de combinación lineal',
    datos: { z3: [0.75, -0.5], z6: [0.8, -Math.sqrt(3)], k: 3 },
    formula: abs('k·' + conj('z₃') + ' + z₆'),
    pasos: [
      conj('z₃') + ' = 3/4+1/2i',
      'k·' + conj('z₃') + ' = 3·(3/4+1/2i) = (9/4, 3/2i)',
      'k·' + conj('z₃') + ' + z₆ = (9/4, 3/2) + (0.8, −' + sqrt('3') + ')',
      '= (9/4+0.8, 3/2i−' + sqrt('3') + 'i) = (3.05, −0.232i)',
      abs('...') + ' = ' + sqrt('3.05² + (−0.232)²') + ' = ' + sqrt('9.3025 + 0.054') + ' = ' + sqrt('9.356') + ' ≈ 3.06'
    ],
    respuesta: 3.0588147340584992,
    tipo: 'escalar'
  },
  // JUEGO 2 - VECTORES
  {
    id: 'j2v1', juego: 2, parte: 'vectores', nivel: 'facil',
    titulo: 'Ejercicio 1: Multiplicación por escalar y resta',
    datos: { h: [Math.sqrt(7), -Math.sqrt(11)], kv: [-2.25, -Math.sqrt(10)], k: 2 },
    formula: 'k·' + vec('h') + ' − ' + vec('k'),
    pasos: [
      'k·' + vec('h') + ' = 2·(' + sqrt('7') + ', −' + sqrt('11') + ') = (2' + sqrt('7') + ', −2' + sqrt('11') + ')',
      'k·' + vec('h') + ' − ' + vec('k') + ' = (2' + sqrt('7') + ', −2' + sqrt('11') + ') − (−2.25, −' + sqrt('10') + ')',
      '= (2' + sqrt('7') + '+2.25, −2' + sqrt('11') + '+' + sqrt('10') + ')',
      'Resultado: (2' + sqrt('7') + '+2.25, −2' + sqrt('11') + '+' + sqrt('10') + ') ≈ (7.54, −3.47)'
    ],
    respuesta: [7.541502622129181, -3.47097192054242],
    tipo: 'vector'
  },
  {
    id: 'j2v2', juego: 2, parte: 'vectores', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Norma de combinación lineal',
    datos: { i: [-1.4, 3.14], l: [4/3, -0.9], n: 3 },
    formula: '‖n·' + vec('i') + ' + ' + vec('l') + '‖',
    pasos: [
      'n·' + vec('i') + ' = 3·(−7/5, 3.14) = (−21/5, 9.42)',
      'n·' + vec('i') + ' + ' + vec('l') + ' = (−21/5, 9.42) + (4/3, −0.9)',
      '= (−21/5+4/3, 9.42−0.9) = (−2.867, 8.52)',
      '‖n·' + vec('i') + ' + ' + vec('l') + '‖ = ' + sqrt('(−2.867)² + 8.52²') + ' = ' + sqrt('8.22 + 72.59') + ' = ' + sqrt('80.81') + ' ≈ 8.99'
    ],
    respuesta: 8.989336893107176,
    tipo: 'escalar'
  },
  {
    id: 'j2v3', juego: 2, parte: 'vectores', nivel: 'dificil',
    titulo: 'Ejercicio 3: Norma de combinación lineal con tres vectores',
    datos: { j: [6, -Math.sqrt(6)], m: [15, -11/4], n: [-Math.sqrt(5), 0.6], k1: 3, k2: 2 },
    formula: '‖k₁·' + vec('j') + ' − k₂·' + vec('m') + ' − ' + vec('n') + '‖',
    pasos: [
      'k₁·' + vec('j') + ' = 3·(6, −' + sqrt('6') + ') = (18, −3' + sqrt('6') + ')',
      'k₂·' + vec('m') + ' = 2·(15, −11/4) = (30, −5.5)',
      'k₁·' + vec('j') + ' − k₂·' + vec('m') + ' = (−12, −3' + sqrt('6') + '+5.5)',
      'k₁·' + vec('j') + ' − k₂·' + vec('m') + ' − ' + vec('n') + ' = (−12, −3' + sqrt('6') + '+5.5) − (−' + sqrt('5') + ', 0.6)',
      '= (−12+' + sqrt('5') + ', −3' + sqrt('6') + '+5.5−0.6) = (−9.764, −2.449)',
      '‖...‖ = ' + sqrt('(−9.764)² + (−2.449)²') + ' = ' + sqrt('95.33 + 6.00') + ' = ' + sqrt('101.33') + ' ≈ 10.07'
    ],
    respuesta: 10.066249058223207,
    tipo: 'escalar'
  },
  // JUEGO 2 - COMPLEJOS
  {
    id: 'j2c1', juego: 2, parte: 'complejos', nivel: 'facil',
    titulo: 'Ejercicio 1: Multiplicación por escalar y suma de conjugado',
    datos: { z7: [-9, 5/8], z9: [7/3, Math.sqrt(7)], n: 4 },
    formula: 'n·z₇ + ' + conj('z₉'),
    pasos: [
      'n·z₇ = 4·(−9+5/8i) = (−36, 2.5i)',
      conj('z₉') + ' = 7/3−' + sqrt('7') + 'i',
      'n·z₇ + ' + conj('z₉') + ' = (−36, 2.5) + (7/3, −' + sqrt('7') + ')',
      '= (−36+7/3, 2.5i−' + sqrt('7') + 'i) = (−33.667, −0.146i)',
      'Resultado: (−33.667, −0.146i)'
    ],
    respuesta: [-33.666666666666664, -0.14575131106459072],
    tipo: 'vector'
  },
  {
    id: 'j2c2', juego: 2, parte: 'complejos', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Producto de complejo por conjugado',
    datos: { z8: [-3.15, -4.2], z10: [Math.sqrt(11), -0.5] },
    formula: 'z₈·' + conj('z₁₀'),
    pasos: [
      conj('z₁₀') + ' = ' + sqrt('11') + '+0.5i',
      'z₈·' + conj('z₁₀') + ' = (−3.15−4.2i)·(' + sqrt('11') + '+0.5i)',
      '= (−3.15)(' + sqrt('11') + ') + (−3.15)(0.5)i + (−4.2i)(' + sqrt('11') + ') + (−4.2i)(0.5)i',
      '= −3.15' + sqrt('11') + ' − 1.575i − 4.2' + sqrt('11') + '·i − 2.1i²',
      '= (−3.15' + sqrt('11') + ' + 2.1) + (−1.575 − 4.2' + sqrt('11') + ')i',
      '≈ (−8.35, −15.50)'
    ],
    respuesta: [-8.34736808961951, -15.50482411949268],
    tipo: 'vector'
  },
  {
    id: 'j2c3', juego: 2, parte: 'complejos', nivel: 'dificil',
    titulo: 'Ejercicio 3: Módulo de combinación lineal',
    datos: { z11: [-12, -4/5], z12: [4.6, Math.sqrt(6)], k: 2 },
    formula: abs('k·' + conj('z₁₁') + ' − z₁₂'),
    pasos: [
      conj('z₁₁') + ' = −12+4/5i',
      'k·' + conj('z₁₁') + ' = 2·(−12+4/5i) = (−24, 1.6i)',
      'k·' + conj('z₁₁') + ' − z₁₂ = (−24, 1.6) − (4.6, ' + sqrt('6') + ')',
      '= (−24−4.6, 1.6i−' + sqrt('6') + 'i) = (−28.6, −0.849i)',
      abs('...') + ' = ' + sqrt('(−28.6)² + (−0.849)²') + ' = ' + sqrt('817.96 + 0.72') + ' = ' + sqrt('818.68') + ' ≈ 28.61'
    ],
    respuesta: 28.612613177112884,
    tipo: 'escalar'
  },
  // JUEGO 3 - VECTORES
  {
    id: 'j3v1', juego: 3, parte: 'vectores', nivel: 'facil',
    titulo: 'Ejercicio 1: Suma de vector con multiplicación por escalar',
    datos: { o: [4.5, -Math.sqrt(3)], r: [-Math.sqrt(17), 3/8], k: 4 },
    formula: vec('o') + ' + k·' + vec('r'),
    pasos: [
      'k·' + vec('r') + ' = 4·(−' + sqrt('17') + ', 3/8) = (−4' + sqrt('17') + ', 1.5)',
      vec('o') + ' + k·' + vec('r') + ' = (4.5, −' + sqrt('3') + ') + (−4' + sqrt('17') + ', 1.5)',
      '= (4.5−4' + sqrt('17') + ', −' + sqrt('3') + '+1.5)',
      'Resultado: (4.5−4' + sqrt('17') + ', −' + sqrt('3') + '+1.5) ≈ (−11.99, −0.23)'
    ],
    respuesta: [-11.992422502470642, -0.2320508075688772],
    tipo: 'vector'
  },
  {
    id: 'j3v2', juego: 3, parte: 'vectores', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Norma de combinación lineal',
    datos: { p: [-1.5, -5/6], s: [0, -7/3], n: 2 },
    formula: '‖n·' + vec('p') + ' − ' + vec('s') + '‖',
    pasos: [
      'n·' + vec('p') + ' = 2·(−1.5, −5/6) = (−3, −5/3)',
      'n·' + vec('p') + ' − ' + vec('s') + ' = (−3, −5/3) − (0, −7/3)',
      '= (−3−0, −5/3+7/3) = (−3, 2/3)',
      '‖n·' + vec('p') + ' − ' + vec('s') + '‖ = ' + sqrt('(−3)² + (2/3)²') + ' = ' + sqrt('9 + 0.444') + ' = ' + sqrt('9.444') + ' ≈ 3.07'
    ],
    respuesta: 3.073181485764296,
    tipo: 'escalar'
  },
  {
    id: 'j3v3', juego: 3, parte: 'vectores', nivel: 'dificil',
    titulo: 'Ejercicio 3: Norma de combinación lineal con tres vectores',
    datos: { q: [10, -0.01], t: [-4.8, Math.sqrt(15)], u: [0.1, -3.5], k1: 2, k2: 3 },
    formula: '‖k₁·' + vec('q') + ' + k₂·' + vec('t') + ' − ' + vec('u') + '‖',
    pasos: [
      'k₁·' + vec('q') + ' = 2·(10, −0.01) = (20, −0.02)',
      'k₂·' + vec('t') + ' = 3·(−4.8, ' + sqrt('15') + ') = (−14.4, 3' + sqrt('15') + ')',
      'k₁·' + vec('q') + ' + k₂·' + vec('t') + ' = (20, −0.02) + (−14.4, 3' + sqrt('15') + ')',
      '= (20−14.4, −0.02+3' + sqrt('15') + ') = (5.6, −0.02+3' + sqrt('15') + ')',
      'k₁·' + vec('q') + ' + k₂·' + vec('t') + ' − ' + vec('u') + ' = (5.6−0.1, −0.02+3' + sqrt('15') + '+3.5) = (5.5, 15.099)',
      '‖...‖ = ' + sqrt('5.5² + 15.099²') + ' = ' + sqrt('30.25 + 227.98') + ' = ' + sqrt('258.23') + ' ≈ 16.07'
    ],
    respuesta: 16.06948326079003,
    tipo: 'escalar'
  },
  // JUEGO 3 - COMPLEJOS
  {
    id: 'j3c1', juego: 3, parte: 'complejos', nivel: 'facil',
    titulo: 'Ejercicio 1: Resta con multiplicación de conjugado',
    datos: { z13: [-1/6, -8], z15: [11/2, -3/7], n: 3 },
    formula: 'z₁₃ − n·' + conj('z₁₅'),
    pasos: [
      conj('z₁₅') + ' = 11/2+3/7i',
      'n·' + conj('z₁₅') + ' = 3·(11/2+3/7i) = (33/2, 9/7i)',
      'z₁₃ − n·' + conj('z₁₅') + ' = (−1/6, −8) − (33/2, 9/7)',
      '= (−1/6−33/2, −8i−9/7i) = (−16.667, −9.286i)',
      'Resultado: (−16.667, −9.286i)'
    ],
    respuesta: [-16.666666666666668, -9.285714285714285],
    tipo: 'vector'
  },
  {
    id: 'j3c2', juego: 3, parte: 'complejos', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Producto de conjugado por complejo',
    datos: { z14: [-Math.sqrt(10), 2.7], z16: [15, Math.sqrt(13)] },
    formula: conj('z₁₄') + '·z₁₆',
    pasos: [
      conj('z₁₄') + ' = −' + sqrt('10') + '−2.7i',
      conj('z₁₄') + '·z₁₆ = (−' + sqrt('10') + '−2.7i)·(15+' + sqrt('13') + 'i)',
      '= (−' + sqrt('10') + ')(15) + (−' + sqrt('10') + ')(' + sqrt('13') + 'i) + (−2.7i)(15) + (−2.7i)(' + sqrt('13') + 'i)',
      '= −15' + sqrt('10') + ' − ' + sqrt('130') + '·i − 40.5i − 2.7' + sqrt('13') + '·i²',
      '= (−15' + sqrt('10') + ' + 2.7' + sqrt('13') + ') + (−' + sqrt('130') + ' − 40.5)i',
      '≈ (−37.70, −51.90)'
    ],
    respuesta: [-37.699176458772925, -51.90175425099138],
    tipo: 'vector'
  },
  {
    id: 'j3c3', juego: 3, parte: 'complejos', nivel: 'dificil',
    titulo: 'Ejercicio 3: Módulo de combinación lineal',
    datos: { z17: [-0.04, -9/4], z18: [Math.sqrt(15), -Math.sqrt(2)], k: 4 },
    formula: abs('k·' + conj('z₁₇') + ' − z₁₈'),
    pasos: [
      conj('z₁₇') + ' = −0.04+9/4i',
      'k·' + conj('z₁₇') + ' = 4·(−0.04+9/4i) = (−0.16, 9i)',
      'k·' + conj('z₁₇') + ' − z₁₈ = (−0.16, 9) − (' + sqrt('15') + ', −' + sqrt('2') + ')',
      '= (−0.16−' + sqrt('15') + ', 9i+' + sqrt('2') + 'i) = (−4.033, 10.414i)',
      abs('...') + ' = ' + sqrt('(−4.033)² + 10.414²') + ' = ' + sqrt('16.27 + 108.45') + ' = ' + sqrt('124.72') + ' ≈ 11.17'
    ],
    respuesta: 11.167846649802375,
    tipo: 'escalar'
  },
  // JUEGO 4 - VECTORES
  {
    id: 'j4v1', juego: 4, parte: 'vectores', nivel: 'facil',
    titulo: 'Ejercicio 1: Multiplicación por escalar y resta',
    datos: { v: [-12, Math.sqrt(3)], x: [-Math.sqrt(23), 1.8], k: 2 },
    formula: 'k·' + vec('v') + ' − ' + vec('x'),
    pasos: [
      'k·' + vec('v') + ' = 2·(−12, ' + sqrt('3') + ') = (−24, 2' + sqrt('3') + ')',
      'k·' + vec('v') + ' − ' + vec('x') + ' = (−24, 2' + sqrt('3') + ') − (−' + sqrt('23') + ', 1.8)',
      '= (−24+' + sqrt('23') + ', 2' + sqrt('3') + '−1.8)',
      'Resultado: (−24+' + sqrt('23') + ', 2' + sqrt('3') + '−1.8) ≈ (−19.20, 1.66)'
    ],
    respuesta: [-19.20416847668728, 1.6641016151377543],
    tipo: 'vector'
  },
  {
    id: 'j4v2', juego: 4, parte: 'vectores', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Norma de combinación lineal',
    datos: { w: [5.4, -13/3], y: [8/7, -Math.sqrt(7)], n: 3 },
    formula: '‖n·' + vec('w') + ' + ' + vec('y') + '‖',
    pasos: [
      'n·' + vec('w') + ' = 3·(5.4, −13/3) = (16.2, −13)',
      'n·' + vec('w') + ' + ' + vec('y') + ' = (16.2, −13) + (8/7, −' + sqrt('7') + ')',
      '= (16.2+8/7, −13−' + sqrt('7') + ') = (17.343, −15.646)',
      '‖n·' + vec('w') + ' + ' + vec('y') + '‖ = ' + sqrt('17.343² + (−15.646)²') + ' = ' + sqrt('300.78 + 244.80') + ' = ' + sqrt('545.58') + ' ≈ 23.36'
    ],
    respuesta: 23.35731636907867,
    tipo: 'escalar'
  },
  {
    id: 'j4v3', juego: 4, parte: 'vectores', nivel: 'dificil',
    titulo: 'Ejercicio 3: Norma de combinación lineal con tres vectores',
    datos: { z: [-14, -1/6], a: [3, -7], c: [0.5, -0.75], k1: 3, k2: 2 },
    formula: '‖k₁·' + vec('z') + ' − k₂·' + vec('a') + ' + ' + vec('c') + '‖',
    pasos: [
      'k₁·' + vec('z') + ' = 3·(−14, −1/6) = (−42, −0.5)',
      'k₂·' + vec('a') + ' = 2·(3, −7) = (6, −14)',
      'k₁·' + vec('z') + ' − k₂·' + vec('a') + ' = (−48, 13.5)',
      'k₁·' + vec('z') + ' − k₂·' + vec('a') + ' + ' + vec('c') + ' = (−48, 13.5) + (1/2, −3/4)',
      '= (−48+1/2, 13.5−3/4) = (−47.5, 12.75)',
      '‖...‖ = ' + sqrt('(−47.5)² + 12.75²') + ' = ' + sqrt('2256.25 + 162.56') + ' = ' + sqrt('2418.81') + ' ≈ 49.18'
    ],
    respuesta: 49.18142433887006,
    tipo: 'escalar'
  },
  // JUEGO 4 - COMPLEJOS
  {
    id: 'j4c1', juego: 4, parte: 'complejos', nivel: 'facil',
    titulo: 'Ejercicio 1: Multiplicación de conjugado por escalar y suma',
    datos: { z19: [-13/5, 6.3], z21: [-7.2, -11], n: 2 },
    formula: 'n·' + conj('z₁₉') + ' + z₂₁',
    pasos: [
      conj('z₁₉') + ' = −13/5−6.3i',
      'n·' + conj('z₁₉') + ' = 2·(−13/5−6.3i) = (−26/5, −12.6i)',
      'n·' + conj('z₁₉') + ' + z₂₁ = (−26/5, −12.6) + (−7.2, −11)',
      '= (−26/5−7.2, −12.6i−11i) = (−12.4, −23.6i)',
      'Resultado: (−12.4, −23.6i)'
    ],
    respuesta: [-12.4, -23.6],
    tipo: 'vector'
  },
  {
    id: 'j4c2', juego: 4, parte: 'complejos', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Producto de complejo por conjugado',
    datos: { z20: [8, -Math.sqrt(17)], z22: [5/9, 7/2] },
    formula: 'z₂₀·' + conj('z₂₂'),
    pasos: [
      conj('z₂₂') + ' = 5/9−7/2i',
      'z₂₀·' + conj('z₂₂') + ' = (8−' + sqrt('17') + 'i)·(5/9−7/2i)',
      '= (8)(5/9) + (8)(−7/2)i + (−' + sqrt('17') + 'i)(5/9) + (−' + sqrt('17') + 'i)(−7/2)i',
      '= 40/9 − 28i − 5' + sqrt('17') + '/9·i + 7' + sqrt('17') + '/2·i²',
      '= (40/9 − 7' + sqrt('17') + '/2) + (−28 − 5' + sqrt('17') + '/9)i',
      '≈ (−9.99, −30.29)'
    ],
    respuesta: [-9.986425245217367, -30.290614236454257],
    tipo: 'vector'
  },
  {
    id: 'j4c3', juego: 4, parte: 'complejos', nivel: 'dificil',
    titulo: 'Ejercicio 3: Módulo de combinación lineal',
    datos: { z23: [-Math.sqrt(19), 1/3], z25: [-16, 0.9], k: 3 },
    formula: abs('k·' + conj('z₂₃') + ' − z₂₅'),
    pasos: [
      conj('z₂₃') + ' = −' + sqrt('19') + '−1/3i',
      'k·' + conj('z₂₃') + ' = 3·(−' + sqrt('19') + '−1/3i) = (−3' + sqrt('19') + ', −i)',
      'k·' + conj('z₂₃') + ' − z₂₅ = (−3' + sqrt('19') + ', −1) − (−16, 0.9)',
      '= (−3' + sqrt('19') + '+16, −i−0.9i) = (2.923, −1.9i)',
      abs('...') + ' = ' + sqrt('2.923² + (−1.9)²') + ' = ' + sqrt('8.54 + 3.61') + ' = ' + sqrt('12.15') + ' ≈ 3.49'
    ],
    respuesta: 3.4865027491879776,
    tipo: 'escalar'
  },
  // JUEGO 5 - VECTORES
  {
    id: 'j5v1', juego: 5, parte: 'vectores', nivel: 'facil',
    titulo: 'Ejercicio 1: Multiplicación por escalar y suma',
    datos: { b: [-4.5, 2.8], g: [-8, 2/3], k: 3 },
    formula: 'k·' + vec('b') + ' + ' + vec('g'),
    pasos: [
      'k·' + vec('b') + ' = 3·(−4.5, 2.8) = (−13.5, 8.4)',
      'k·' + vec('b') + ' + ' + vec('g') + ' = (−13.5, 8.4) + (−8, 2/3)',
      '= (−13.5−8, 8.4+2/3) = (−21.5, 9.067)',
      'Resultado: (−21.5, 9.067)'
    ],
    respuesta: [-21.5, 9.066666666666665],
    tipo: 'vector'
  },
  {
    id: 'j5v2', juego: 5, parte: 'vectores', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Norma de combinación lineal',
    datos: { d: [Math.sqrt(2), -5], h: [Math.sqrt(7), -Math.sqrt(11)], n: 2 },
    formula: '‖n·' + vec('d') + ' − ' + vec('h') + '‖',
    pasos: [
      'n·' + vec('d') + ' = 2·(' + sqrt('2') + ', −5) = (2' + sqrt('2') + ', −10)',
      'n·' + vec('d') + ' − ' + vec('h') + ' = (2' + sqrt('2') + ', −10) − (' + sqrt('7') + ', −' + sqrt('11') + ')',
      '= (2' + sqrt('2') + '−' + sqrt('7') + ', −10+' + sqrt('11') + ') = (0.183, −6.683)',
      '‖n·' + vec('d') + ' − ' + vec('h') + '‖ = ' + sqrt('0.183² + (−6.683)²') + ' = ' + sqrt('0.033 + 44.66') + ' = ' + sqrt('44.69') + ' ≈ 6.69'
    ],
    respuesta: 6.6858712705074,
    tipo: 'escalar'
  },
  {
    id: 'j5v3', juego: 5, parte: 'vectores', nivel: 'dificil',
    titulo: 'Ejercicio 3: Norma de combinación lineal con tres vectores',
    datos: { e: [-Math.sqrt(3), 2.5], i: [-1.4, 3.14], k: [-2.25, -Math.sqrt(10)], k1: 2, k2: 2 },
    formula: '‖k₁·' + vec('e') + ' − k₂·' + vec('i') + ' + ' + vec('k') + '‖',
    pasos: [
      'k₁·' + vec('e') + ' = 2·(−' + sqrt('3') + ', 5/2) = (−2' + sqrt('3') + ', 5)',
      'k₂·' + vec('i') + ' = 2·(−7/5, 3.14) = (−14/5, 6.28)',
      'k₁·' + vec('e') + ' − k₂·' + vec('i') + ' = (−2' + sqrt('3') + '+14/5, 5−6.28)',
      'k₁·' + vec('e') + ' − k₂·' + vec('i') + ' + ' + vec('k') + ' = (−2' + sqrt('3') + '+14/5, 5−6.28) + (−2.25, −' + sqrt('10') + ')',
      '= (−2' + sqrt('3') + '+14/5−2.25, 5−6.28−' + sqrt('10') + ') = (−2.914, −4.442)',
      '‖...‖ = ' + sqrt('(−2.914)² + (−4.442)²') + ' = ' + sqrt('8.49 + 19.73') + ' = ' + sqrt('28.22') + ' ≈ 5.31'
    ],
    respuesta: 5.312797665390573,
    tipo: 'escalar'
  },
  // JUEGO 5 - COMPLEJOS
  {
    id: 'j5c1', juego: 5, parte: 'complejos', nivel: 'facil',
    titulo: 'Ejercicio 1: Multiplicación por escalar y resta de conjugado',
    datos: { z24: [3.33, -Math.sqrt(5)], z26: [17/4, -Math.sqrt(23)], n: 3 },
    formula: 'n·z₂₄ − ' + conj('z₂₆'),
    pasos: [
      'n·z₂₄ = 3·(3.33−' + sqrt('5') + 'i) = (9.99, −3' + sqrt('5') + 'i)',
      conj('z₂₆') + ' = 17/4+' + sqrt('23') + 'i',
      'n·z₂₄ − ' + conj('z₂₆') + ' = (9.99, −3' + sqrt('5') + ') − (17/4, ' + sqrt('23') + ')',
      '= (9.99−17/4, −3' + sqrt('5') + 'i−' + sqrt('23') + 'i) = (5.74, −11.504i)',
      'Resultado: (5.74, −11.504i)'
    ],
    respuesta: [5.74, -11.504035455812089],
    tipo: 'vector'
  },
  {
    id: 'j5c2', juego: 5, parte: 'complejos', nivel: 'intermedio',
    titulo: 'Ejercicio 2: Producto de conjugado por complejo',
    datos: { z27: [-Math.sqrt(21), -8/3], z29: [-2/7, -5.5] },
    formula: conj('z₂₇') + '·z₂₉',
    pasos: [
      conj('z₂₇') + ' = −' + sqrt('21') + '+8/3i',
      conj('z₂₇') + '·z₂₉ = (−' + sqrt('21') + '+8/3i)·(−2/7−5.5i)',
      '= (−' + sqrt('21') + ')(−2/7) + (−' + sqrt('21') + ')(−5.5)i + (8/3i)(−2/7) + (8/3i)(−5.5)i',
      '= 2' + sqrt('21') + '/7 + 5.5' + sqrt('21') + '·i − 16/21·i − 44/3·i²',
      '= (2' + sqrt('21') + '/7 + 44/3) + (5.5' + sqrt('21') + ' − 16/21)i',
      '≈ (15.98, 24.44)'
    ],
    respuesta: [15.97597400808262, 24.442261560352357],
    tipo: 'vector'
  },
  {
    id: 'j5c3', juego: 5, parte: 'complejos', nivel: 'dificil',
    titulo: 'Ejercicio 3: Módulo de combinación lineal',
    datos: { z28: [0.12, 14], z30: [Math.sqrt(29), 10/3], k: 2 },
    formula: abs('k·' + conj('z₂₈') + ' + z₃₀'),
    pasos: [
      conj('z₂₈') + ' = 0.12−14i',
      'k·' + conj('z₂₈') + ' = 2·(0.12−14i) = (0.24, −28i)',
      'k·' + conj('z₂₈') + ' + z₃₀ = (0.24, −28) + (' + sqrt('29') + ', 10/3)',
      '= (0.24+' + sqrt('29') + ', −28i+10/3i) = (5.625, −24.667i)',
      abs('...') + ' = ' + sqrt('5.625² + (−24.667)²') + ' = ' + sqrt('31.64 + 608.46') + ' = ' + sqrt('640.10') + ' ≈ 25.30'
    ],
    respuesta: 25.299939200556768,
    tipo: 'escalar'
  }

];

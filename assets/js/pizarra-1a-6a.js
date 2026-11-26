/* pizarra-1a-6a.js — Métodos en pizarra, 1.er año, tema 1.15 */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, tabla = PZ.tabla;

  P['1.15'] = [
    {
      titulo: 'Fórmula general paso a paso',
      intro: 'Resolvamos 2x² − 3x − 2 = 0 con la fórmula general.',
      pasos: [
        { nota: 'Primero identificamos los coeficientes, con su signo. Ojo: b es negativo.', html: row('2x² − 3x − 2 = 0') + row(c('b', 'a = 2') + ', ' + c('y', 'b = −3') + ', ' + c('p', 'c = −2')) },
        { nota: 'Escribimos la fórmula completa para no olvidar nada.', html: row('x = ' + f('−b ± √(b² − 4ac)', '2a')) },
        { nota: 'Sustituimos con paréntesis. Así el signo de b no se pierde.', html: row('x = ' + f('−(' + c('y', '−3') + ') ± √((' + c('y', '−3') + ')² − 4·' + c('b', '2') + '·(' + c('p', '−2') + '))', '2·' + c('b', '2'))) },
        { nota: 'Calculamos dentro de la raíz: 9 + 16 = 25. Y −(−3) = 3.', html: row('x = ' + f('3 ± √25', '4')) + row('x = ' + f('3 ± 5', '4')) },
        { nota: 'Separamos en dos casos: con + y con −.', html: row(c('g', 'x₁ = ' + f('3 + 5', '4') + ' = 2')) + row(c('g', 'x₂ = ' + f('3 − 5', '4') + ' = −' + f('1', '2'))) },
        { nota: 'Comprobamos con suma y producto: suma = 3/2 = −b/a y producto = −1 = c/a. ¡Coincide!', html: say(box('x = 2   o   x = −1/2'), 'g') }
      ]
    },
    {
      titulo: 'El discriminante: tres casos',
      intro: 'D = b² − 4ac nos dice cuántas raíces reales hay antes de resolver.',
      pasos: [
        { nota: 'Es la parte que está dentro de la raíz de la fórmula general. La llamamos D.', html: row(c('y', 'D = b² − 4ac')) },
        { nota: 'Según su signo hay tres casos. Mira la tabla.', html: tabla(['D', 'raíces', 'ejemplo'], [[c('g', 'D > 0'), 'dos reales distintas', 'x² − 5x + 6'], [c('y', 'D = 0'), 'una real doble', 'x² − 6x + 9'], [c('p', 'D < 0'), 'dos complejas conjugadas', 'x² + 2x + 5']]) },
        { nota: 'Caso D > 0: en x² − 5x + 6, D = 25 − 24 = 1, y la raíz de 1 es real: salen 2 y 3.', html: row('D = 25 − 24 = ' + c('g', '1 > 0')) },
        { nota: 'Caso D = 0: en x² − 6x + 9, D = 36 − 36 = 0. La raíz de 0 es 0, así que ambas raíces valen 3.', html: row('D = 36 − 36 = ' + c('y', '0')) + row('x = ' + f('6 ± 0', '2') + ' = 3') },
        { nota: 'Caso D < 0: en x² + 2x + 5, D = 4 − 20 = −16. No hay raíz real de un negativo: usamos i.', html: say(box('D = −16 < 0'), 'p') }
      ]
    },
    {
      titulo: 'Completando cuadrados',
      intro: 'Resolvamos x² + 6x − 7 = 0 armando un cuadrado perfecto.',
      pasos: [
        { nota: 'Dejamos los términos con x a un lado y el número al otro.', html: row('x² + 6x − 7 = 0') + row('x² + 6x = ' + c('y', '7')) },
        { nota: 'Tomamos la mitad de 6, que es 3, y la elevamos al cuadrado: 9. Lo sumamos en los dos lados.', html: row('x² + 6x + ' + c('b', '9') + ' = 7 + ' + c('b', '9')) },
        { nota: 'El lado izquierdo ahora es un cuadrado perfecto: (x + 3)².', html: row('(x + ' + c('g', '3') + ')² = 16') },
        { nota: 'Sacamos raíz cuadrada a los dos lados. No olvides el ±.', html: row('x + 3 = ±4') },
        { nota: 'Despejamos x en los dos casos.', html: row(c('g', 'x = −3 + 4 = 1')) + row(c('g', 'x = −3 − 4 = −7')) }
      ]
    },
    {
      titulo: 'Raíces complejas cuando D < 0',
      intro: 'Resolvamos x² − 2x + 5 = 0. Aparece la unidad imaginaria i.',
      pasos: [
        { nota: 'Primero el discriminante: a = 1, b = −2, c = 5.', html: row('D = (−2)² − 4·1·5 = 4 − 20 = ' + c('p', '−16')) },
        { nota: 'D es negativo: no hay raíces reales. Usamos i, donde i² = −1, para escribir √(−16) = 4i.', html: row('√(−16) = √16 · √(−1) = ' + c('y', '4i')) },
        { nota: 'Sustituimos en la fórmula general.', html: row('x = ' + f('2 ± 4i', '2')) },
        { nota: 'Dividimos cada término entre 2: queda la parte real 1 y la parte imaginaria 2i.', html: row('x = 1 ± 2i') },
        { nota: 'Son dos raíces conjugadas: misma parte real, partes imaginarias opuestas.', html: row(c('g', 'x₁ = 1 + 2i')) + row(c('g', 'x₂ = 1 − 2i')) },
        { nota: 'Comprobación: la suma es 2 = −b/a y el producto es 1 + 4 = 5 = c/a.', html: say(box('x = 1 ± 2i'), 'g') }
      ]
    }
  ];

})(window.PZ);

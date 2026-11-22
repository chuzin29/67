/* pizarra-2a-1.js — Métodos en pizarra, 2.º año, temas 1.1 a 1.4 */
window.PIZARRA_2A = window.PIZARRA_2A || {};
(function (PZ) {
  var P = window.PIZARRA_2A;

  P['1.1'] = [
    {
      titulo: 'Tijeras en una bicuadrática',
      intro: 'Resolver 4x⁴ − 13x² + 9 = 0 factorizando con tijeras, sin fórmula general.',
      pasos: [
        { nota: 'Esta es una bicuadrática: solo tiene x⁴, x² y un número. Fíjate que x⁴ es lo mismo que (x²)². La vamos a tratar como un trinomio normal.', html: PZ.row('4x⁴ − 13x² + 9 = 0') },
        { nota: 'Abrimos las tijeras. Al primer término, <b>4x⁴</b>, lo partimos en <b>4x²</b> y <b>x²</b> (columna izquierda). Al último, <b>9</b>, lo partimos en <b>−9</b> y <b>−1</b> (columna derecha). Los dos negativos dan +9.', html: PZ.tijeras({ l1: '4x²', l2: 'x²', r1: '−9', r2: '−1' }), reemplaza: false },
        { nota: 'Ahora multiplicamos en cruz, como unas tijeras: <b>4x² · (−1) = −4x²</b> (amarillo) y <b>x² · (−9) = −9x²</b> (rosa).', reemplaza: true, html: PZ.tijeras({ l1: '4x²', l2: 'x²', r1: '−9', r2: '−1', p1: '−4x²', p2: '−9x²' }) },
        { nota: 'Sumamos los dos productos: −4x² − 9x² = <b>−13x²</b>. ¡Es justo el término del medio! Entonces estas tijeras sí sirven. (Si no coincidiera, probamos otros números.)', reemplaza: true, html: PZ.tijeras({ l1: '4x²', l2: 'x²', r1: '−9', r2: '−1', p1: '−4x²', p2: '−9x²', sum: '−13x²', ok: true }) },
        { nota: 'Los números de cada fila forman un paréntesis: arriba <b>4x² − 9</b>, abajo <b>x² − 1</b>. Escribimos el producto de los dos.', html: PZ.row('(4x² − 9)(x² − 1) = 0') },
        { nota: 'Si un producto es cero, alguno de los factores es cero. Igualamos cada paréntesis a cero.', html: PZ.row('4x² − 9 = 0', 'primer factor', 'y') + PZ.row('x² − 1 = 0', 'segundo factor', 'p') },
        { nota: 'Despejamos: x² = 9/4 y x² = 1. Cada una tiene dos soluciones, la positiva y la negativa (por eso salen 4 en total).', html: PZ.row(PZ.c('y', 'x² = ' + PZ.f('9', '4')) + ' &nbsp; ⇒ &nbsp; ' + PZ.c('y', 'x = ±' + PZ.f('3', '2'))) + PZ.row(PZ.c('p', 'x² = 1') + ' &nbsp; ⇒ &nbsp; ' + PZ.c('p', 'x = ±1')) },
        { nota: 'Solución final: cuatro valores. Siempre comprueba al menos uno: x = 1 → 4 − 13 + 9 = 0 ✓.', html: PZ.say(PZ.box('x = −3/2,  −1,  1,  3/2'), 'g') }
      ]
    },
    {
      titulo: 'Cambio de variable (y = x²)',
      intro: 'Otra forma: cambiar x² por una letra nueva para ver una ecuación de segundo grado normal.',
      pasos: [
        { nota: 'Partimos de la misma ecuación. La idea es que x² se repite, así que le ponemos un nombre más sencillo.', html: PZ.row('4x⁴ − 13x² + 9 = 0') },
        { nota: 'Hacemos <b>y = x²</b>. Entonces x⁴ = (x²)² = y².', html: PZ.row('y = x²', 'cambio de variable', 'y') },
        { nota: 'Reescribimos la ecuación con y: ahora es una cuadrática de toda la vida.', html: PZ.row('4y² − 13y + 9 = 0') },
        { nota: 'La resolvemos (por tijeras o fórmula general) y obtenemos y = 1 o y = 9/4.', html: PZ.row(PZ.c('y', 'y = 1') + ' &nbsp;&nbsp; ' + PZ.c('p', 'y = ' + PZ.f('9', '4'))) },
        { nota: 'Todavía no hemos terminado: nos piden x, no y. <b>Regresamos</b> con x² = y. Este es el paso que más se olvida.', html: PZ.flecha('regresar a x', 'r') + PZ.row(PZ.c('y', 'x² = 1') + ' &nbsp;&nbsp; ' + PZ.c('p', 'x² = ' + PZ.f('9', '4'))) },
        { nota: 'Sacamos raíz cuadrada (positiva y negativa) en cada una.', html: PZ.row(PZ.c('y', 'x = ±1') + ' &nbsp;&nbsp; ' + PZ.c('p', 'x = ±' + PZ.f('3', '2'))) }
      ]
    }
  ];
})(window.PZ);

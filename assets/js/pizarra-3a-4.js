/* pizarra-3a-4.js — Métodos en pizarra, 3.er año, temas 1.17 a 1.21 */
window.PIZARRA_3A = window.PIZARRA_3A || {};
(function (PZ) { var P = window.PIZARRA_3A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box;
  var W = '#f4f6ef', Y = '#ffe27a', K = '#ff9fc4', B = '#8fd0ff', G = '#9af0b0', D = '#f4f6ef66';

  /* ayudante de figuras: ventana matemática [x0,x1]x[y0,y1] -> viewBox 420x260 */
  function fig(x0, x1, y0, y1, label) {
    var s = '', mx = 28, my = 22;
    function X(x) { return +(mx + (x - x0) / (x1 - x0) * (420 - 2 * mx)).toFixed(1); }
    function Yp(y) { return +(260 - my - (y - y0) / (y1 - y0) * (260 - 2 * my)).toFixed(1); }
    var o = {
      raw: function (h) { s += h; return o; },
      ax: function (xt, yt) {
        var i, ox = X(0), oy = Yp(0);
        s += '<path d="M6 ' + oy + 'H414 M406 ' + (oy - 5) + 'L414 ' + oy + 'L406 ' + (oy + 5) + '" stroke="' + D + '" stroke-width="2" fill="none"/>';
        s += '<path d="M' + ox + ' 256V6 M' + (ox - 5) + ' 14L' + ox + ' 6L' + (ox + 5) + ' 14" stroke="' + D + '" stroke-width="2" fill="none"/>';
        (xt || []).forEach(function (v) { if (v !== 0) s += '<line x1="' + X(v) + '" y1="' + (oy - 3) + '" x2="' + X(v) + '" y2="' + (oy + 3) + '" stroke="' + D + '"/><text x="' + X(v) + '" y="' + (oy + 16) + '" fill="' + W + '" fill-opacity=".6" font-size="13" text-anchor="middle">' + String(v).replace('-', '−') + '</text>'; });
        (yt || []).forEach(function (v) { if (v !== 0) s += '<line x1="' + (ox - 3) + '" y1="' + Yp(v) + '" x2="' + (ox + 3) + '" y2="' + Yp(v) + '" stroke="' + D + '"/><text x="' + (ox - 7) + '" y="' + (Yp(v) + 4) + '" fill="' + W + '" fill-opacity=".6" font-size="13" text-anchor="end">' + String(v).replace('-', '−') + '</text>'; });
        return o;
      },
      cur: function (fn, a, b, col, w) {
        var d = '', i, t, n = 80;
        for (i = 0; i <= n; i++) { t = a + (b - a) * i / n; d += (i ? 'L' : 'M') + X(t) + ' ' + Yp(fn(t)); }
        s += '<path d="' + d + '" fill="none" stroke="' + (col || W) + '" stroke-width="' + (w || 3) + '" stroke-linecap="round" stroke-linejoin="round"/>';
        return o;
      },
      /* región entre g (abajo) y h (arriba) en [a,b] */
      reg: function (g, h, a, b, col, op) {
        var d = '', i, t, n = 60;
        for (i = 0; i <= n; i++) { t = a + (b - a) * i / n; d += (i ? 'L' : 'M') + X(t) + ' ' + Yp(h(t)); }
        for (i = n; i >= 0; i--) { t = a + (b - a) * i / n; d += 'L' + X(t) + ' ' + Yp(g(t)); }
        s += '<path d="' + d + 'Z" fill="' + col + '" fill-opacity="' + (op || 0.3) + '" stroke="none"/>';
        return o;
      },
      ln: function (xa, ya, xb, yb, col, dash) {
        s += '<line x1="' + X(xa) + '" y1="' + Yp(ya) + '" x2="' + X(xb) + '" y2="' + Yp(yb) + '" stroke="' + (col || W) + '" stroke-width="2.4" stroke-linecap="round"' + (dash ? ' stroke-dasharray="6 5"' : '') + '/>';
        return o;
      },
      pt: function (x, y, col) { s += '<circle cx="' + X(x) + '" cy="' + Yp(y) + '" r="5" fill="' + (col || Y) + '"/>'; return o; },
      t: function (x, y, str, col, dx, dy, anc, sz) {
        s += '<text x="' + (X(x) + (dx || 0)) + '" y="' + (Yp(y) + (dy || 0)) + '" fill="' + (col || W) + '" font-size="' + (sz || 16) + '"' + (anc ? ' text-anchor="' + anc + '"' : '') + '>' + str + '</text>';
        return o;
      },
      out: function () {
        return '<svg viewBox="0 0 420 260" style="width:min(100%,440px);height:auto;display:block;margin:.3rem auto" role="img" aria-label="' + (label || 'figura') + '"><g font-family="\'Patrick Hand\',cursive" stroke-linecap="round">' + s + '</g></svg>';
      }
    };
    return o;
  }
  var I = function (a, b) { return '∫<sub>' + a + '</sub><sup>' + b + '</sup>'; };

  /* ================= 1.17 Antiderivadas ================= */
  /* familia y = x² + C  (derivada 2x) */
  function famFig(stage) {
    var g = fig(-2.4, 2.4, -2.5, 6.5, 'familia de curvas y = x² + C').ax([-2, -1, 1, 2], [2, 4, 6]);
    g.cur(function (x) { return x * x - 2; }, -2.2, 2.2, B, 2.6).cur(function (x) { return x * x; }, -2.4, 2.4, K, 2.6);
    g.cur(function (x) { return x * x + 2; }, -2.1, 2.1, G, 2.6);
    g.t(1.9, -0.1, 'C = −2', B, 6, 14).t(-1.2, 2.6, 'C = 0', K, -4, 0, 'end').t(1.4, 5, 'C = 2', G, 8, 0);
    if (stage === 'pt') {
      g.cur(function (x) { return x * x + 2; }, -2.1, 2.1, Y, 4.2).pt(1, 3, Y).t(1, 3, '(1, 3)', Y, 10, 20);
      g.t(-2.3, 6.2, 'la que pasa por (1, 3): C = 2', Y, 0, 0, 'start', 15);
    }
    return g.out();
  }
  P['1.17'] = [
    { titulo: 'Integrar un polinomio y comprobar',
      intro: 'Calcular ∫(6x² − 4x + 5) dx término a término y verificar derivando.',
      pasos: [
        { nota: 'Integrar es lo contrario de derivar: buscamos una función cuya derivada sea lo que está dentro. Como es una suma, vamos término por término.', html: row('∫(6x² − 4x + 5) dx') },
        { nota: 'Separamos en tres integrales sencillas y sacamos los números que multiplican, porque se pueden dejar afuera.', html: row('= ' + c('y', '6') + '∫x² dx ' + c('p', '− 4') + '∫x dx ' + c('b', '+ 5') + '∫1 dx', 'separar y sacar números', 'y') },
        { nota: 'Regla de la potencia: al exponente le <b>sumas 1</b> y luego <b>divides entre el nuevo exponente</b>. Para x²: sube a x³ y se divide entre 3.', html: row(c('y', '∫x² dx = ' + f('x³', '3'))) + row('exponente 2 → 3, divido entre 3', '', 'y') },
        { nota: 'Igual con x (que es x¹): sube a x² y se divide entre 2. Y la constante 1 es x⁰: sube a x y se divide entre 1.', html: row(c('p', '∫x dx = ' + f('x²', '2')) + ' &nbsp;&nbsp; ' + c('b', '∫1 dx = x')) },
        { nota: 'Juntamos todo y simplificamos: 6/3 = 2 y 4/2 = 2.', html: row('= ' + c('y', '6·' + f('x³', '3')) + c('p', ' − 4·' + f('x²', '2')) + c('b', ' + 5x')) + row('= 2x³ − 2x² + 5x') },
        { nota: '¡No olvides la constante C! Al derivar, cualquier número suelto desaparece, así que al volver atrás no sabemos cuál era. Por eso ponemos "+ C".', html: say(box('2x³ − 2x² + 5x + C'), 'g') },
        { nota: 'Comprobación: derivamos el resultado. 2x³ → 6x², −2x² → −4x, 5x → 5 y C → 0. Salió el integrando original, ¡está bien!', html: row('(2x³ − 2x² + 5x + C)′ = 6x² − 4x + 5 ✓', 'derivar para comprobar', 'g') }
      ] },
    { titulo: 'La constante C y la condición inicial',
      intro: 'Hallar la antiderivada de f(x) = 2x cuya gráfica pasa por el punto (1, 3).',
      pasos: [
        { nota: 'Buscamos una función cuya derivada (la pendiente) sea 2x. Integramos con la regla de la potencia.', html: row('∫2x dx = x² + C') },
        { nota: 'Cada valor de C da una curva distinta, pero todas son la misma parábola subida o bajada. Todas tienen la misma pendiente en cada x.', html: famFig('fam') },
        { nota: 'Para elegir una sola, necesitamos un dato: la curva debe pasar por (1, 3). Es decir, cuando x = 1, y vale 3.', reemplaza: true, html: famFig('pt') },
        { nota: 'Sustituimos x = 1 y y = 3 en la fórmula.', html: row('y = x² + C') + flecha3() },
        { nota: 'Despejamos C: 3 = 1 + C, entonces C = 2.', html: row('3 = 1² + C', '', 'y') + row('C = 3 − 1 = ' + c('g', '2')) },
        { nota: 'Reemplazamos C en la familia y tenemos la respuesta única. Comprobamos: en x = 1, 1 + 2 = 3 ✓.', html: say(box('y = x² + 2'), 'g') }
      ] }
  ];
  function flecha3() { return PZ.flecha('x = 1, y = 3', 'y'); }

  /* ================= 1.18 Sustitución ================= */
  P['1.18'] = [
    { titulo: 'Sustitución con ajuste de constante',
      intro: 'Resolver ∫x(x² + 1)⁵ dx cambiando el bloque x² + 1 por una letra u.',
      pasos: [
        { nota: 'Esta integral se ve fea: tendríamos que desarrollar una potencia a la quinta. Mejor buscamos un "bloque" cuya derivada también aparezca.', html: row('∫x(x² + 1)⁵ dx') },
        { nota: 'El bloque es lo que está dentro del paréntesis: x² + 1. Lo bautizamos con la letra u.', html: row(c('y', 'u = x² + 1'), 'elijo el bloque', 'y') },
        { nota: 'Ahora derivamos u. La derivada de x² + 1 es 2x, y el dx se convierte en du.', html: row(c('p', 'du = 2x dx'), 'derivo u', 'p') },
        { nota: 'En la integral tenemos x dx, pero no 2x dx: nos falta el 2. Despejamos: x dx es la mitad de du.', html: row(c('p', 'x dx = ' + f('1', '2') + ' du')) },
        { nota: 'Sustituimos: (x² + 1)⁵ pasa a ser u⁵ y x dx pasa a ser ½ du. ¡Ya no queda ninguna x!', html: row('= ' + c('y', f('1', '2')) + ' ∫' + c('y', 'u⁵') + c('p', ' du')) },
        { nota: 'Ahora sí, regla de la potencia: u⁵ sube a u⁶ y se divide entre 6. Guardamos el ½ que está multiplicando.', html: row('= ' + f('1', '2') + ' · ' + f('u⁶', '6') + ' + C = ' + f('u⁶', '12') + ' + C') },
        { nota: 'Último paso, el que más se olvida: <b>regresar a x</b>, porque la pregunta venía en x. Cambiamos u por x² + 1.', html: PZ.flecha('u = x² + 1', 'r') + say(box(f('(x² + 1)⁶', '12') + ' + C'), 'g') },
        { nota: 'Comprobación rápida: derivamos. 6(x²+1)⁵·2x / 12 = x(x²+1)⁵ ✓.', html: row('derivada = ' + f('6(x² + 1)⁵·2x', '12') + ' = x(x² + 1)⁵ ✓', '', 'g') }
      ] },
    { titulo: 'Sustitución en una exponencial',
      intro: 'Resolver ∫e³ˣ dx. El "bloque" es el exponente 3x.',
      pasos: [
        { nota: 'Sabemos que ∫eˣ dx = eˣ + C, pero aquí el exponente es 3x, no solo x. Hay que ajustar.', html: row('∫e³ˣ dx') },
        { nota: 'Llamamos u al exponente, el bloque de adentro.', html: row(c('y', 'u = 3x')) },
        { nota: 'Derivamos: du = 3 dx. Como en la integral solo hay dx, despejamos dx = du/3.', html: row(c('p', 'du = 3 dx')) + row(c('p', 'dx = ' + f('du', '3'))) },
        { nota: 'Sustituimos. El 1/3 es un número, así que sale de la integral.', html: row('= ∫' + c('y', 'eᵘ') + ' · ' + c('p', f('du', '3')) + ' = ' + f('1', '3') + '∫eᵘ du') },
        { nota: 'La integral de eᵘ es eᵘ. Regresamos a x con u = 3x.', html: row('= ' + f('1', '3') + 'eᵘ + C') + PZ.flecha('u = 3x', 'r') },
        { nota: 'Respuesta. Comprueba: derivar e³ˣ/3 da 3e³ˣ/3 = e³ˣ ✓.', html: say(box(f('e³ˣ', '3') + ' + C'), 'g') }
      ] }
  ];

  /* ================= 1.19 Integral definida y TFC ================= */
  function barFig(stage) {
    var g = fig(-0.6, 3.6, -1.5, 11, 'área bajo y = x² + 1 entre 0 y 3').ax([1, 2, 3], [2, 4, 6, 8, 10]);
    var fx = function (x) { return x * x + 1; };
    if (stage === 'area') g.reg(function () { return 0; }, fx, 0, 3, Y, 0.3).ln(0, 0, 0, 1, Y).ln(3, 0, 3, 10, Y, true).t(1.5, 3, 'A = ?', Y, 0, 0, 'middle', 22);
    g.cur(fx, -0.5, 3.4, B, 3).t(2.6, 9.6, 'y = x² + 1', B, 0, 0, 'start', 16);
    if (stage === 'area') g.t(0, 0, 'a = 0', W, 0, 30, 'middle', 14).t(3, 0, 'b = 3', W, 0, 30, 'middle', 14);
    return g.out();
  }
  P['1.19'] = [
    { titulo: 'Calcular un área con la Regla de Barrow',
      intro: 'Hallar el área bajo y = x² + 1 entre x = 0 y x = 3.',
      pasos: [
        { nota: 'Queremos el área de la zona entre la curva y el eje x, desde x = 0 hasta x = 3. Eso es exactamente lo que mide la integral definida.', html: barFig('curva') },
        { nota: 'Sombreamos la región. Los números 0 y 3 son los "límites": abajo va donde empieza y arriba donde termina.', reemplaza: true, html: barFig('area') },
        { nota: 'Se escribe así. El 0 va abajo de la ∫ y el 3 arriba.', html: row('A = ' + I('0', '3') + ' (x² + 1) dx') },
        { nota: 'Paso 1: buscar una antiderivada, sin la C (en las definidas se cancela). x² sube a x³/3 y el 1 pasa a x.', html: row('F(x) = ' + c('y', f('x³', '3') + ' + x'), 'antiderivada', 'y') },
        { nota: 'Paso 2: se escribe entre corchetes con los límites, y se evalúa arriba menos abajo: F(3) − F(0).', html: row('= [ ' + f('x³', '3') + ' + x ]<sub>0</sub><sup>3</sup> = ' + c('g', 'F(3)') + ' − ' + c('p', 'F(0)')) },
        { nota: 'Evaluamos arriba: 27/3 + 3 = 9 + 3 = 12. Y abajo: todo es 0.', html: row(c('g', 'F(3) = ' + f('27', '3') + ' + 3 = 12')) + row(c('p', 'F(0) = 0 + 0 = 0')) },
        { nota: 'Restamos y listo. Son 12 unidades cuadradas. Mirando la figura tiene sentido: la altura va de 1 a 10 sobre un ancho de 3.', html: say(box('A = 12 − 0 = 12 u²'), 'g') }
      ] },
    { titulo: 'Derivar una integral (TFC, parte 1)',
      intro: 'Calcular la derivada de G(x) = ∫ de 1 a x³ de √(1 + t²) dt, sin integrar.',
      pasos: [
        { nota: 'Nos piden la derivada de una integral. Lo bueno: el teorema fundamental dice que derivar e integrar se cancelan, así que no hay que integrar.', html: row('G(x) = ' + I('1', 'x³') + ' √(1 + t²) dt') },
        { nota: 'Regla: se toma lo de adentro, f(t), y se cambia t por el límite de arriba. Aquí el límite de arriba es x³.', html: row(c('y', 'f(t) = √(1 + t²)')) + row(c('p', 'límite de arriba: g(x) = x³')) },
        { nota: 'Cambiamos t por x³ dentro de la raíz: (x³)² = x⁶.', html: row(c('y', 'f(x³) = √(1 + x⁶)'), 'sustituyo t = x³', 'y') },
        { nota: 'Como el límite no es solo x, sino x³, hay que multiplicar por su derivada (regla de la cadena): (x³)′ = 3x².', html: row(c('p', 'g′(x) = 3x²'), 'derivada del límite', 'p') },
        { nota: 'Unimos las dos piezas.', html: say(box('G′(x) = √(1 + x⁶) · 3x²'), 'g') }
      ] }
  ];

  /* ================= 1.20 Área entre curvas ================= */
  var parab = function (x) { return x * x; }, rec = function (x) { return x + 2; };
  function areaFig(stage) {
    var g = fig(-1.7, 2.9, -0.8, 5.2, 'recta y = x + 2 y parábola y = x²').ax([-1, 1, 2], [1, 2, 3, 4]);
    if (stage >= 2) g.reg(parab, rec, -1, 2, Y, 0.28);
    g.cur(rec, -1.6, 2.8, B, 3).cur(parab, -1.7, 2.25, K, 3);
    g.t(2.3, 4.4, 'y = x + 2', B, 0, 0, 'start', 16).t(-1.6, 2.6, 'y = x²', K, 0, 0, 'start', 16);
    if (stage >= 1) {
      g.pt(-1, 1, G).pt(2, 4, G).t(-1, 1, '(−1, 1)', G, 8, 24, 'start', 15).t(2, 4, '(2, 4)', G, -8, 22, 'end', 15);
      g.ln(-1, 0, -1, 1, G, true).ln(2, 0, 2, 4, G, true);
    }
    if (stage >= 2) g.t(0.5, 2.4, 'Área', Y, 0, 0, 'middle', 18);
    return g.out();
  }
  P['1.20'] = [
    { titulo: 'Área entre una recta y una parábola',
      intro: 'Hallar el área encerrada entre y = x + 2 y y = x².',
      pasos: [
        { nota: 'Dibujamos las dos curvas: una recta y una parábola que se cruzan. La región encerrada entre ellas es la que queremos medir.', html: areaFig(0) },
        { nota: 'Primero, ¿dónde se cruzan? Ahí las dos alturas son iguales, así que igualamos las ecuaciones.', html: row('x² = x + 2') + row('x² − x − 2 = 0', 'paso todo a un lado', 'y') },
        { nota: 'Factorizamos: (x − 2)(x + 1) = 0. Los cruces están en x = −1 y x = 2. Estos serán los límites de la integral.', html: row('(x − 2)(x + 1) = 0') + row(c('g', 'x = −1') + ' &nbsp; y &nbsp; ' + c('g', 'x = 2')) },
        { nota: 'Marcamos los puntos de cruce: (−1, 1) y (2, 4).', reemplaza: true, html: areaFig(1) },
        { nota: 'Ahora sombreamos. Entre −1 y 2, la recta va por <b>arriba</b> de la parábola. La regla es: <b>curva de arriba menos curva de abajo</b>.', reemplaza: true, html: areaFig(2) },
        { nota: 'Armamos la integral con los límites −1 y 2.', html: row('A = ' + I('−1', '2') + ' [ ' + c('b', '(x + 2)') + ' − ' + c('p', 'x²') + ' ] dx') },
        { nota: 'Antiderivada de x + 2 − x²: queda x²/2 + 2x − x³/3. La evaluamos arriba y abajo.', html: row('= [ ' + f('x²', '2') + ' + 2x − ' + f('x³', '3') + ' ]<sub>−1</sub><sup>2</sup>') },
        { nota: 'En x = 2: 2 + 4 − 8/3 = 10/3. En x = −1: 1/2 − 2 + 1/3 = −7/6. Restamos: 10/3 + 7/6 = 20/6 + 7/6.', html: row(c('g', 'F(2) = ' + f('10', '3')) + ' &nbsp;&nbsp; ' + c('p', 'F(−1) = −' + f('7', '6'))) + row(f('10', '3') + ' + ' + f('7', '6') + ' = ' + f('27', '6')) },
        { nota: 'Simplificamos 27/6 = 9/2. El área vale 4.5 unidades cuadradas.', html: say(box('A = ' + f('9', '2') + ' = 4.5 u²'), 'g') }
      ] },
    { titulo: 'Curvas que se cruzan en medio',
      intro: 'Área entre y = x y y = x³ de x = −1 a x = 1. Aquí la curva de arriba cambia.',
      pasos: [
        { nota: 'Si en el intervalo la curva de arriba cambia, no podemos restar siempre igual. Hay que partir la región. Primero buscamos los cruces.', html: row('x³ = x ⇒ x³ − x = 0') + row('x(x − 1)(x + 1) = 0', 'factorizo', 'y') },
        { nota: 'Se cruzan en x = −1, 0 y 1. Entonces hay dos regiones: de −1 a 0 y de 0 a 1.', html: row(c('g', 'x = −1,  0,  1')) },
        { nota: 'De 0 a 1 la recta x está arriba de x³ (por ejemplo, en 0.5: 0.5 contra 0.125). De −1 a 0 pasa al revés: x³ está arriba.', html: row('[0, 1]: ' + c('b', 'x') + ' arriba de ' + c('p', 'x³')) + row('[−1, 0]: ' + c('p', 'x³') + ' arriba de ' + c('b', 'x')) },
        { nota: 'Calculamos la región de 0 a 1: integral de (x − x³) = x²/2 − x⁴/4. En 1 vale 1/2 − 1/4 = 1/4; en 0 vale 0.', html: row('A₁ = ' + I('0', '1') + '(x − x³) dx = [ ' + f('x²', '2') + ' − ' + f('x⁴', '4') + ' ]<sub>0</sub><sup>1</sup> = ' + f('1', '4')) },
        { nota: 'La figura es simétrica respecto al origen (las dos funciones son impares), así que la otra región mide lo mismo: 1/4.', html: row('A₂ = ' + f('1', '4'), 'por simetría', 'y') },
        { nota: 'Sumamos las dos áreas. Nunca se restan: un área no puede ser negativa.', html: say(box('A = ' + f('1', '4') + ' + ' + f('1', '4') + ' = ' + f('1', '2') + ' u²'), 'g') }
      ] }
  ];

  /* ================= 1.21 Por partes ================= */
  P['1.21'] = [
    { titulo: 'Por partes: ∫x eˣ dx',
      intro: 'Cuando hay un producto de dos funciones distintas, usamos la fórmula ∫u dv = uv − ∫v du.',
      pasos: [
        { nota: 'Es un producto de x y eˣ. No hay sustitución que funcione, así que usamos "por partes", que viene de la regla del producto al revés.', html: row('∫x eˣ dx') + row('fórmula:  ∫u dv = u·v − ∫v du', '', 'y') },
        { nota: 'Hay que repartir: una parte será u (la que vamos a derivar) y la otra dv (la que vamos a integrar). Truco LIATE: entre una algebraica (x) y una exponencial, u es la algebraica.', html: row(c('y', 'u = x') + ' &nbsp;&nbsp; ' + c('p', 'dv = eˣ dx'), 'elijo con LIATE', 'y') },
        { nota: 'Ahora hacemos lo que dice cada letra: derivamos u para sacar du, e integramos dv para sacar v.', html: row(c('y', 'du = dx') + ' &nbsp;&nbsp; ' + c('p', 'v = eˣ')) + row('derivo u &nbsp; · &nbsp; integro dv', '', 'w') },
        { nota: 'Armamos con la fórmula: u por v, menos la integral de v por du.', html: row('∫x eˣ dx = ' + c('y', 'x') + c('p', 'eˣ') + ' − ∫' + c('p', 'eˣ') + c('y', ' dx')) },
        { nota: 'La integral nueva, ∫eˣ dx, es facilísima: es eˣ. Por eso valió la pena: el producto se volvió algo simple.', html: row('= x eˣ − eˣ + C') },
        { nota: 'Factorizamos eˣ para presentarlo bonito. Comprobación: derivar da eˣ + x eˣ − eˣ = x eˣ ✓.', html: say(box('eˣ (x − 1) + C'), 'g') }
      ] },
    { titulo: 'Por partes con logaritmo: ∫x ln x dx',
      intro: 'Aquí el logaritmo manda: siempre se elige como u.',
      pasos: [
        { nota: 'De nuevo un producto. Pero ojo: no sabemos integrar ln x directamente, y sí sabemos derivarlo. Por eso ln x será u.', html: row('∫x ln x dx') },
        { nota: 'LIATE: la "L" de logaritmo va primero. Entonces u = ln x y lo que sobra es dv.', html: row(c('y', 'u = ln x') + ' &nbsp;&nbsp; ' + c('p', 'dv = x dx')) },
        { nota: 'Derivamos u: la derivada de ln x es 1/x. Integramos dv: x sube a x²/2.', html: row(c('y', 'du = ' + f('1', 'x') + ' dx') + ' &nbsp;&nbsp; ' + c('p', 'v = ' + f('x²', '2'))) },
        { nota: 'Aplicamos la fórmula u·v − ∫v du.', html: row('= ' + c('y', 'ln x') + ' · ' + c('p', f('x²', '2')) + ' − ∫' + c('p', f('x²', '2')) + ' · ' + c('y', f('1', 'x')) + ' dx') },
        { nota: 'Simplificamos dentro de la integral: x²/x = x, así que queda x/2. ¡La x del logaritmo ayudó a bajar la potencia!', html: row('= ' + f('x² ln x', '2') + ' − ∫' + f('x', '2') + ' dx') },
        { nota: 'Integramos x/2 = x²/4 y listo.', html: say(box(f('x² ln x', '2') + ' − ' + f('x²', '4') + ' + C'), 'g') }
      ] },
    { titulo: 'Por partes en integral definida',
      intro: 'Calcular de 0 a π la integral de x sen x dx.',
      pasos: [
        { nota: 'Producto de x y sen x. La algebraica va primero en LIATE, así que u = x.', html: row(I('0', 'π') + ' x sen x dx') + row(c('y', 'u = x') + ' &nbsp;&nbsp; ' + c('p', 'dv = sen x dx')) },
        { nota: 'du = dx. Y la integral de sen x es −cos x, así que v = −cos x (cuidado con el signo menos).', html: row(c('y', 'du = dx') + ' &nbsp;&nbsp; ' + c('p', 'v = −cos x')) },
        { nota: 'Aplicamos la fórmula con los límites: el término u·v se evalúa de 0 a π, y se resta la integral de v du.', html: row('= [ −x cos x ]<sub>0</sub><sup>π</sup> − ' + I('0', 'π') + '(−cos x) dx') },
        { nota: 'Evaluamos el primer término. En π: −π·cos π = −π·(−1) = π. En 0: 0. Y el menos con el menos de la integral da +∫cos x.', html: row(c('g', '[ −x cos x ] = π − 0 = π')) + row('= π + ' + I('0', 'π') + ' cos x dx') },
        { nota: 'La integral de cos x es sen x. Evaluamos: sen π − sen 0 = 0 − 0 = 0.', html: row(I('0', 'π') + ' cos x dx = [ sen x ]<sub>0</sub><sup>π</sup> = 0') },
        { nota: 'Sumamos las dos partes: π + 0.', html: say(box('= π ≈ 3.14'), 'g') }
      ] }
  ];
})(window.PZ);

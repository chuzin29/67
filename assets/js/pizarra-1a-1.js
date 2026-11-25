/* pizarra-1a-1.js — Métodos en pizarra, 1.er año, temas 1.1 a 1.5 */
window.PIZARRA_1A = window.PIZARRA_1A || {};
(function (PZ) {
  var P = window.PIZARRA_1A;
  var f = PZ.f, c = PZ.c, row = PZ.row, say = PZ.say, box = PZ.box, flecha = PZ.flecha, tabla = PZ.tabla;

  /* ============================================================
     mini-ayudante para la recta numérica (desigualdades)
     ============================================================ */
  function recta(pts, shades, lab) {
    // pts: [{x, open, col}]  mapea x en [-7,7] -> 20..400
    function X(x) { return 20 + (x + 7) * (400 - 20) / 14; }
    var s = '<svg viewBox="0 0 420 110" role="img" aria-label="' + (lab || 'recta numérica') + '">' +
      '<line x1="10" y1="55" x2="410" y2="55" stroke="#f4f6ef" stroke-width="2.4" stroke-linecap="round"/>' +
      '<path d="M403 49l7 6l-7 6" fill="none" stroke="#f4f6ef" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>';
    (shades || []).forEach(function (sh) {
      s += '<line x1="' + X(sh.a) + '" y1="55" x2="' + X(sh.b) + '" y2="55" stroke="' + sh.col + '" stroke-width="6" stroke-linecap="round"/>';
    });
    for (var i = -6; i <= 6; i++) s += '<line x1="' + X(i) + '" y1="51" x2="' + X(i) + '" y2="59" stroke="#f4f6ef" stroke-opacity=".35"/>';
    (pts || []).forEach(function (p) {
      s += '<circle cx="' + X(p.x) + '" cy="55" r="7" fill="' + (p.open ? '#17241c' : p.col) + '" stroke="' + p.col + '" stroke-width="3"/>';
      s += '<text x="' + X(p.x) + '" y="86" fill="' + p.col + '" font-size="17" text-anchor="middle" font-family="\'Patrick Hand\',cursive">' + p.lab + '</text>';
    });
    s += '</g></svg>';
    return s.replace('</g></svg>', '</svg>');
  }

  /* ============================================================
     1.1  Operaciones con radicales y racionalización
     ============================================================ */
  P['1.1'] = [
    {
      titulo: 'Suma y resta de radicales (simplificar primero)',
      intro: 'Simplifica y opera √50 − √18 + √8.',
      pasos: [
        { nota: 'Estos tres radicales se VEN distintos, pero antes de sumar o restar hay que simplificarlos. Solo se pueden combinar radicales que tengan el mismo índice y el mismo radicando.', html: row('√50 − √18 + √8') },
        { nota: 'Buscamos en cada radicando el mayor factor que sea cuadrado perfecto. 50 = 25·2, 18 = 9·2, 8 = 4·2. ¡Los tres esconden un 2!', html: row('50 = ' + c('y', '25') + '·2 &nbsp;&nbsp; 18 = ' + c('y', '9') + '·2 &nbsp;&nbsp; 8 = ' + c('y', '4') + '·2') },
        { nota: 'La raíz se reparte en un producto (no en una suma): √(25·2) = √25 · √2. Sacamos la raíz exacta de cada cuadrado perfecto y dejamos el 2 adentro.', html: row(c('y', '√50 = 5√2')) + row(c('y', '√18 = 3√2')) + row(c('y', '√8 = 2√2')) },
        { nota: 'Ahora sí son radicales SEMEJANTES: los tres tienen √2. Reescribimos la operación con las raíces ya simplificadas.', html: row('5√2 − 3√2 + 2√2') },
        { nota: 'Igual que con "5 manzanas − 3 manzanas + 2 manzanas": solo operamos los números de enfrente (los coeficientes) y el √2 lo dejamos quieto, como si fuera la "manzana".', html: row(c('g', '(5 − 3 + 2)') + '√2') },
        { nota: 'Sumamos: 5 − 3 + 2 = 4.', html: say(box('4√2'), 'g') },
        { nota: 'Regla de oro: NUNCA se suman los radicandos. √50 + √18 no es √68; hay que simplificar primero y comparar la parte radical, no los números de adentro.', html: row(PZ.tach('√50 + √18 = √68'), 'esto está mal', 'r') }
      ]
    },
    {
      titulo: 'Racionalizar con denominador monomio',
      intro: 'Racionaliza la fracción 6/√2 (quitar la raíz de abajo).',
      pasos: [
        { nota: 'No nos gusta dejar una raíz en el denominador. "Racionalizar" es multiplicar por una forma de 1 para que el denominador se vuelva un número entero.', html: row(f('6', '√2')) },
        { nota: 'El factor racionalizante es el mismo radical de abajo, porque √2 · √2 = 2 (la raíz se "cancela" consigo misma). Multiplicamos arriba y abajo por √2.', html: row(f('6', '√2') + ' · ' + c('y', f('√2', '√2'))) },
        { nota: 'Multiplicamos el numerador: 6 · √2 = 6√2. Multiplicamos el denominador: √2 · √2 = 2.', html: row(f('6√2', '2')) },
        { nota: 'Simplificamos dividiendo 6 entre 2.', html: row(f(c('g', '6'), c('g', '2')) + '√2 = ' + c('g', '3') + '√2') },
        { nota: 'Ya no queda ninguna raíz abajo: el denominador es un número entero.', html: say(box('3√2'), 'g') }
      ]
    },
    {
      titulo: 'Racionalizar con el conjugado (denominador binomio)',
      intro: 'Racionaliza 5/(√3 − 1) multiplicando por el conjugado.',
      pasos: [
        { nota: 'Aquí el denominador tiene DOS términos con una raíz: √3 − 1. Ya no sirve multiplicar solo por √3; necesitamos el "conjugado".', html: row(f('5', '√3 − 1')) },
        { nota: 'El conjugado cambia solo el signo de en medio: de √3 − 1 pasamos a √3 + 1. Al multiplicarlos se forma una diferencia de cuadrados, que elimina la raíz.', html: row(c('p', '√3 − 1') + ' &nbsp;→ conjugado →&nbsp; ' + c('p', '√3 + 1')) },
        { nota: 'Multiplicamos arriba y abajo por ese conjugado. Nunca se multiplica solo abajo: hay que hacerlo también arriba para no cambiar el valor de la fracción.', html: row(f('5', '√3 − 1') + ' · ' + c('p', f('√3 + 1', '√3 + 1'))) },
        { nota: 'Arriba: 5 · (√3 + 1) = 5√3 + 5. Abajo usamos (a − b)(a + b) = a² − b²: (√3)² − (1)² = 3 − 1 = 2.', html: row(f('5√3 + 5', '3 − 1')) },
        { nota: 'El denominador ya quedó entero.', html: row(f('5√3 + 5', c('g', '2')))},
        { nota: 'Esa es la forma racionalizada (no se puede simplificar más porque 5 no divide a 2).', html: say(box(f('5√3 + 5', '2')), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.2  Productos notables
     ============================================================ */
  P['1.2'] = [
    {
      titulo: 'Cuadrado de un binomio (el "molde" de 3 términos)',
      intro: 'Desarrolla (3x + 2y)² sin multiplicar término a término.',
      pasos: [
        { nota: 'Elevar un binomio al cuadrado tiene un molde fijo: cuadrado del primero, más el doble del primero por el segundo, más el cuadrado del segundo. Vamos a identificar el primer y el segundo término.', html: row('(' + c('b', '3x') + ' + ' + c('p', '2y') + ')²') },
        { nota: 'Elevamos al cuadrado el primer término: (3x)² = 9x².', html: row(c('b', '(3x)²') + ' = ' + c('b', '9x²')) },
        { nota: 'El término de en medio es el DOBLE producto de los dos términos: 2 · (3x) · (2y).', html: row('2 · ' + c('b', '3x') + ' · ' + c('p', '2y') + ' = ' + c('g', '12xy')) },
        { nota: 'Elevamos al cuadrado el segundo término: (2y)² = 4y².', html: row(c('p', '(2y)²') + ' = ' + c('p', '4y²')) },
        { nota: 'Juntamos los tres pedazos en el orden del molde. Como el binomio original tiene +, todos los signos quedan +.', html: row(c('b', '9x²') + ' + ' + c('g', '12xy') + ' + ' + c('p', '4y²')) },
        { nota: 'Ese es el resultado, sin haber multiplicado (3x + 2y)(3x + 2y) término a término.', html: say(box('9x² + 12xy + 4y²'), 'g') },
        { nota: 'El error más común es olvidar el término de en medio y escribir solo 9x² + 4y². ¡Siempre hay que escribir los TRES términos!', html: row(PZ.tach('9x² + 4y²'), 'falta el doble producto', 'r') }
      ]
    },
    {
      titulo: 'Suma por diferencia = diferencia de cuadrados',
      intro: 'Desarrolla (2x + 5)(2x − 5): mismos términos, signo distinto.',
      pasos: [
        { nota: 'Fíjate: los dos binomios tienen EXACTAMENTE los mismos términos (2x y 5), solo cambia el signo de en medio. Eso es una pista clarísima.', html: row('(' + c('b', '2x') + ' + ' + c('p', '5') + ')(' + c('b', '2x') + ' − ' + c('p', '5') + ')') },
        { nota: 'Cuando pasa eso, todo el término de en medio se cancela (uno suma, el otro resta la misma cantidad) y solo sobreviven los dos cuadrados.', html: row('cuadrado del primero menos cuadrado del segundo', '', 'y') },
        { nota: 'Elevamos al cuadrado cada término por separado: (2x)² = 4x² y (5)² = 25.', html: row(c('b', '(2x)²') + ' = ' + c('b', '4x²') + ' &nbsp;&nbsp; ' + c('p', '(5)²') + ' = ' + c('p', '25')) },
        { nota: 'Escribimos el primero menos el segundo. ¡Mucho más rápido que multiplicar los cuatro productos!', html: row(c('b', '4x²') + ' − ' + c('p', '25')) },
        { nota: 'Ese es el resultado final.', html: say(box('4x² − 25'), 'g') }
      ]
    },
    {
      titulo: 'Binomios con término común (x + a)(x + b)',
      intro: 'Desarrolla (x + 3)(x + 10) por inspección, sin multiplicar todo.',
      pasos: [
        { nota: 'Los dos binomios comparten la misma x. Ese es el "término común". Los otros dos números, 3 y 10, son los "no comunes".', html: row('(x + ' + c('b', '3') + ')(x + ' + c('p', '10') + ')') },
        { nota: 'Primer pedazo del molde: el término común al cuadrado.', html: row('x²') },
        { nota: 'Segundo pedazo: sumamos los no comunes y los multiplicamos por x. 3 + 10 = 13.', html: row('(' + c('b', '3') + ' + ' + c('p', '10') + ')x = ' + c('g', '13x')) },
        { nota: 'Tercer pedazo: multiplicamos los no comunes entre sí. 3 · 10 = 30.', html: row(c('b', '3') + ' · ' + c('p', '10') + ' = ' + c('g', '30')) },
        { nota: 'Juntamos los tres pedazos en orden: x², luego el término en x, luego el número solo.', html: row('x² + ' + c('g', '13x') + ' + ' + c('g', '30')) },
        { nota: 'Resultado final, obtenido sin multiplicar los cuatro productos uno por uno.', html: say(box('x² + 13x + 30'), 'g') }
      ]
    },
    {
      titulo: 'Cubo de un binomio (4 términos, signos alternados)',
      intro: 'Desarrolla (x − 2)³ usando el molde del cubo de una resta.',
      pasos: [
        { nota: 'El cubo de un binomio tiene CUATRO términos. Para la resta, los signos se alternan: +, −, +, −. Identificamos a = x y b = 2.', html: row('(' + c('b', 'x') + ' − ' + c('p', '2') + ')³') },
        { nota: 'Término 1: a³ = x³.', html: row(c('b', 'x³')) },
        { nota: 'Término 2: 3a²b, con signo negativo (porque el binomio es una resta): −3(x²)(2) = −6x².', html: row('−3' + c('b', 'x²') + c('p', '(2)') + ' = ' + c('g', '−6x²')) },
        { nota: 'Término 3: 3ab², con signo positivo: 3(x)(2²) = 3(x)(4) = 12x.', html: row('+3' + c('b', 'x') + c('p', '(2²)') + ' = ' + c('g', '+12x')) },
        { nota: 'Término 4: b³, con signo negativo: −(2)³ = −8.', html: row(c('p', '−(2)³') + ' = ' + c('p', '−8')) },
        { nota: 'Juntamos los cuatro términos en orden, respetando los signos alternados +, −, +, −.', html: row('x³ − 6x² + 12x − 8') },
        { nota: 'Resultado final.', html: say(box('x³ − 6x² + 12x − 8'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.3  Factorización de polinomios
     ============================================================ */
  P['1.3'] = [
    {
      titulo: 'Caso I: factor común (monomio)',
      intro: 'Factoriza 12x²y⁵ + 16x⁷y³ − 8x⁴y buscando lo que se repite en todos los términos.',
      pasos: [
        { nota: 'Primero miramos los tres términos juntos: ¿qué número y qué letras se repiten en TODOS, con el menor exponente posible?', html: row('12x²y⁵ + 16x⁷y³ − 8x⁴y') },
        { nota: 'Números: 12, 16 y 8. El mayor número que divide a los tres exactamente (el MCD) es 4.', html: row('MCD(12, 16, 8) = ' + c('y', '4')) },
        { nota: 'Letras: x aparece como x², x⁷ y x⁴ → el menor exponente es 2. La y aparece como y⁵, y³ y y¹ → el menor exponente es 1.', html: row(c('y', 'x²') + ' (el menor exponente de x) &nbsp;&nbsp; ' + c('y', 'y') + ' (el menor exponente de y)') },
        { nota: 'El factor común es 4x²y. Lo "sacamos" de cada término, es decir, dividimos cada término entre 4x²y.', html: row('12x²y⁵ ÷ 4x²y = 3y⁴') + row('16x⁷y³ ÷ 4x²y = 4x⁵y²') + row('−8x⁴y ÷ 4x²y = −2x²') },
        { nota: 'Escribimos el factor común afuera y lo que quedó de cada división adentro de un paréntesis.', html: row(c('y', '4x²y') + '(3y⁴ + 4x⁵y² − 2x²)') },
        { nota: 'Para comprobar: si multiplicas 4x²y por cada término de adentro, debes recuperar la expresión original.', html: say(box('4x²y(3y⁴ + 4x⁵y² − 2x²)'), 'g') }
      ]
    },
    {
      titulo: 'Caso II: factor común por agrupación',
      intro: 'Factoriza mn − 4m + 3n − 12 (cuatro términos, sin factor común global).',
      pasos: [
        { nota: 'Aquí no hay un número ni una letra que se repita en los CUATRO términos a la vez. Cuando pasa eso con 4 términos, probamos a agruparlos en parejas.', html: row('mn − 4m + 3n − 12') },
        { nota: 'Formamos dos parejas, cada una con su propio factor común parcial. Dejamos un espacio entre ellas.', html: row('(mn − 4m)', '', 'b') + row('+ (3n − 12)', '', 'p') },
        { nota: 'En la primera pareja, m se repite: sacamos m. En la segunda, 3 se repite: sacamos 3.', html: row(c('b', 'm(n − 4)') + ' + ' + c('p', '3(n − 4)')) },
        { nota: '¡Mira! Las dos parejas dejaron el MISMO paréntesis (n − 4). Eso confirma que agrupamos bien. Ahora (n − 4) es el nuevo factor común, esta vez un binomio completo.', html: row(c('g', '(n − 4)') + ' se repite', '', 'g') },
        { nota: 'Sacamos (n − 4) como si fuera una sola pieza, y adentro del otro paréntesis dejamos lo que multiplicaba a cada uno: m y 3.', html: row(c('g', '(n − 4)') + '(m + 3)') },
        { nota: 'Si al agrupar los paréntesis NO coinciden, se puede intentar cambiar el orden de los términos antes de agrupar.', html: say(box('(n − 4)(m + 3)'), 'g') }
      ]
    },
    {
      titulo: 'Caso III: trinomio cuadrado perfecto (TCP)',
      intro: 'Factoriza 4x² − 20xy + 25y² verificando si es un cuadrado perfecto.',
      pasos: [
        { nota: 'Para que un trinomio sea "cuadrado perfecto" (el cuadrado de un binomio), el primer y el último término deben ser cuadrados perfectos.', html: row('4x² − 20xy + 25y²') },
        { nota: 'Sacamos la raíz cuadrada del primer término: √(4x²) = 2x. Sacamos la raíz del último: √(25y²) = 5y.', html: row('√(4x²) = ' + c('b', '2x') + ' &nbsp;&nbsp; √(25y²) = ' + c('p', '5y')) },
        { nota: 'Ahora el paso que NO podemos saltarnos: comprobamos que el término de en medio sea el doble producto de esas dos raíces.', html: row('2 · ' + c('b', '2x') + ' · ' + c('p', '5y') + ' = ' + c('g', '20xy')) },
        { nota: '¡Coincide exactamente con el término central (20xy)! Eso confirma que SÍ es un trinomio cuadrado perfecto.', html: row(c('g', '20xy = 20xy'), '✓ coincide', 'g') },
        { nota: 'Como el término central original es negativo (−20xy), el binomio que lo forma también lleva signo menos entre sus dos raíces.', html: row('(' + c('b', '2x') + ' − ' + c('p', '5y') + ')²') },
        { nota: 'Resultado: el trinomio es el cuadrado de ese binomio.', html: say(box('(2x − 5y)²'), 'g') }
      ]
    },
    {
      titulo: 'Caso IV: diferencia de cuadrados',
      intro: 'Factoriza 9x² − 16: dos términos, signo menos, ambos cuadrados perfectos.',
      pasos: [
        { nota: 'Solo hay DOS términos, con un signo menos entre ellos, y ambos son cuadrados perfectos. Esa es la señal de "diferencia de cuadrados".', html: row('9x² − 16') },
        { nota: 'Sacamos la raíz cuadrada de cada término por separado.', html: row('√(9x²) = ' + c('b', '3x') + ' &nbsp;&nbsp; √(16) = ' + c('p', '4')) },
        { nota: 'Se factoriza como el producto de la suma de esas raíces por la diferencia de esas raíces: (a + b)(a − b).', html: row('(' + c('b', '3x') + ' + ' + c('p', '4') + ')(' + c('b', '3x') + ' − ' + c('p', '4') + ')') },
        { nota: 'Así queda factorizado, en dos binomios conjugados.', html: say(box('(3x + 4)(3x − 4)'), 'g') },
        { nota: 'Ojo: una SUMA de cuadrados, como 9x² + 16, NO se puede factorizar con este método; se queda como está.', html: row(PZ.tach('9x² + 16 = (3x+4)(3x−4)'), 'esto no existe: la suma de cuadrados no se factoriza así', 'r') }
      ]
    },
    {
      titulo: 'Caso V: trinomio ax² + bx + c con a ≠ 1 (tijeras)',
      intro: 'Factoriza 6x² − 7x − 3 con el método de las tijeras.',
      pasos: [
        { nota: 'Cuando el coeficiente de x² no es 1, usamos las tijeras: partimos el primer término y el último en dos factores cada uno, y probamos hasta que el cruce dé el término del medio.', html: row('6x² − 7x − 3') },
        { nota: 'Abrimos las tijeras. Partimos 6x² en 3x y 2x (columna izquierda). Partimos −3 en −3 y +1 (columna derecha). Probamos estos números primero.', html: PZ.tijeras({ l1: '3x', l2: '2x', r1: '−3', r2: '1' }) },
        { nota: 'Multiplicamos en cruz: 3x · 1 = 3x (amarillo) y 2x · (−3) = −6x (rosa).', reemplaza: true, html: PZ.tijeras({ l1: '3x', l2: '2x', r1: '−3', r2: '1', p1: '3x', p2: '−6x' }) },
        { nota: 'Sumamos los productos cruzados: 3x + (−6x) = −3x. Pero necesitamos −7x... ¡no coincide! Hay que probar otra combinación de números.', reemplaza: true, html: PZ.tijeras({ l1: '3x', l2: '2x', r1: '−3', r2: '1', p1: '3x', p2: '−6x', sum: '−3x (no sirve)' }) },
        { nota: 'Probamos de nuevo: partimos −3 en −9 y... no, mejor intercambiamos el orden de la derecha: −1 arriba y 3 abajo. Multiplicamos en cruz otra vez.', reemplaza: true, html: PZ.tijeras({ l1: '3x', l2: '2x', r1: '−1', r2: '3' }) },
        { nota: 'Cruz: 3x · 3 = 9x (amarillo) y 2x · (−1) = −2x (rosa). Sumamos: 9x − 2x = 7x. Nos falta el signo: necesitamos −7x, así que cambiamos los signos de la columna derecha: 1 arriba y −3 abajo.', reemplaza: true, html: PZ.tijeras({ l1: '3x', l2: '2x', r1: '1', r2: '−3', p1: '−9x', p2: '2x', sum: '−7x', ok: true }) },
        { nota: 'Sumamos: −9x + 2x = −7x. ¡Coincide con el término del medio! Las filas forman los binomios: arriba 3x + 1, abajo 2x − 3.', html: row('(3x + 1)(2x − 3)') },
        { nota: 'Comprobación rápida: multiplica los primeros (3x)(2x) = 6x² ✓ y los últimos (1)(−3) = −3 ✓.', html: say(box('(3x + 1)(2x − 3)'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.4  División algebraica y división sintética (Ruffini)
     ============================================================ */
  P['1.4'] = [
    {
      titulo: 'División tradicional de polinomios',
      intro: 'Divide 3x² + 2x − 8 entre x + 2, paso por paso.',
      pasos: [
        { nota: 'Ordenamos dividendo y divisor por el grado de x. No falta ningún término intermedio, así que empezamos directo.', html: row('(3x² + 2x − 8) ÷ (x + 2)') },
        { nota: 'Dividimos el primer término del dividendo entre el primero del divisor: 3x² ÷ x = 3x. Ese es el primer término del cociente.', html: row('3x² ÷ x = ' + c('y', '3x'), 'primer término del cociente', 'y') },
        { nota: 'Multiplicamos 3x por TODO el divisor (x + 2): 3x² + 6x. Lo restamos del dividendo, es decir, le cambiamos el signo y sumamos.', html: row('3x(x + 2) = 3x² + 6x') + row('(3x² + 2x) − (3x² + 6x) = ' + c('g', '−4x')) },
        { nota: 'Bajamos el −8 que faltaba. El nuevo resto parcial es −4x − 8. Repetimos el proceso: dividimos −4x entre x.', html: row(c('g', '−4x') + ' − 8') + row('−4x ÷ x = ' + c('y', '−4')) },
        { nota: 'Multiplicamos −4 por todo el divisor: −4(x + 2) = −4x − 8. Restamos de nuevo.', html: row('−4(x + 2) = −4x − 8') + row('(−4x − 8) − (−4x − 8) = 0') },
        { nota: 'El resto dio 0: la división es exacta. El cociente son los términos que fuimos encontrando: 3x y −4.', html: say(box('Cociente: 3x − 4 &nbsp;&nbsp; Residuo: 0'), 'g') }
      ]
    },
    {
      titulo: 'Teorema del Residuo (evaluar sin dividir)',
      intro: 'Halla el residuo de dividir x³ + 2x² − 4x + 3 entre (x − 1), sin hacer la división completa.',
      pasos: [
        { nota: 'El Teorema del Residuo dice algo muy útil: para saber el residuo de dividir P(x) entre (x − a), basta con evaluar P(a). ¡No hace falta dividir nada!', html: row(c('y', 'R = P(a)'), 'el truco', 'y') },
        { nota: 'Nuestro divisor es (x − 1), así que a = 1 (el número que hace que x − a sea cero).', html: row('P(x) = x³ + 2x² − 4x + 3') + row('divisor x − 1 &nbsp;⇒&nbsp; a = ' + c('p', '1')) },
        { nota: 'Sustituimos x por 1 en todo el polinomio, con cuidado.', html: row('P(1) = (1)³ + 2(1)² − 4(1) + 3') },
        { nota: 'Resolvemos cada potencia: 1³ = 1, 2(1)² = 2, −4(1) = −4.', html: row('P(1) = 1 + 2 − 4 + 3') },
        { nota: 'Sumamos todo de izquierda a derecha: 1 + 2 = 3; 3 − 4 = −1; −1 + 3 = 2.', html: row('P(1) = ' + c('g', '2')) },
        { nota: 'Ese 2 es el residuo de la división, sin haber dividido ni un solo término.', html: say(box('R = 2'), 'g') }
      ]
    },
    {
      titulo: 'División sintética (Ruffini)',
      intro: 'Halla cociente y residuo de (x³ − 5x² + 3x + 14) ÷ (x − 3) con el esquema de Ruffini.',
      pasos: [
        { nota: 'La división sintética es un atajo para dividir entre (x − a): solo trabajamos con los números (coeficientes), sin escribir las x.', html: row('(x³ − 5x² + 3x + 14) ÷ (x − 3)') },
        { nota: 'Escribimos los coeficientes del dividendo en orden: 1, −5, 3, 14. El divisor es x − 3, así que a = 3 va aparte, a la izquierda.', html: PZ.ruffini(['1', '−5', '3', '14'], '3', ['', '', '', ''], ['', '', '', '']) },
        { nota: '"Bajamos" el primer coeficiente tal cual, sin tocarlo: es el primer número del cociente.', reemplaza: true, html: PZ.ruffini(['1', '−5', '3', '14'], '3', ['', '', '', ''], ['1', '', '', '']) },
        { nota: 'Multiplicamos ese 1 por a = 3, nos da 3. Lo escribimos debajo del siguiente coeficiente (−5) y sumamos: −5 + 3 = −2.', reemplaza: true, html: PZ.ruffini(['1', '−5', '3', '14'], '3', ['', '3', '', ''], ['1', '−2', '', '']) },
        { nota: 'Repetimos: −2 × 3 = −6. Lo sumamos al siguiente coeficiente: 3 + (−6) = −3.', reemplaza: true, html: PZ.ruffini(['1', '−5', '3', '14'], '3', ['', '3', '−6', ''], ['1', '−2', '−3', '']) },
        { nota: 'Una vez más: −3 × 3 = −9. Lo sumamos al último coeficiente: 14 + (−9) = 5. Este último valor es el RESIDUO.', reemplaza: true, html: PZ.ruffini(['1', '−5', '3', '14'], '3', ['', '3', '−6', '−9'], ['1', '−2', '−3', '5']) },
        { nota: 'Los números antes del residuo son los coeficientes del cociente, con un grado menos que el dividendo (empezó en x³, el cociente empieza en x²).', html: say(box('Cociente: x² − 2x − 3 &nbsp;&nbsp; Residuo: 5'), 'g') }
      ]
    }
  ];

  /* ============================================================
     1.5  Desigualdades lineales y racionales
     ============================================================ */
  P['1.5'] = [
    {
      titulo: 'Desigualdad lineal: cuidado al dividir entre negativo',
      intro: 'Resuelve −5x + 2 ≤ 7 y exprésalo en notación de intervalo.',
      pasos: [
        { nota: 'Una desigualdad se resuelve igual que una ecuación: lo que le hagas a un lado, se lo haces al otro. Pero hay UNA regla especial que no existe en las ecuaciones.', html: row('−5x + 2 ≤ 7') },
        { nota: 'Restamos 2 a ambos lados, como siempre.', html: PZ.ambos('− 2', 'y') + row('−5x ≤ 5') },
        { nota: 'Ahora hay que dividir entre −5 para despejar x. Aquí está la regla de oro: al multiplicar o dividir por un número NEGATIVO, la desigualdad se voltea.', html: row('÷ (−5)', 'el signo ≤ se voltea a ≥', 'r') },
        { nota: 'Dividimos 5 entre −5 y volteamos el símbolo: de ≤ pasa a ≥.', html: row(c('y', 'x ≥ ') + c('y', f('5', '−5')) + ' = ' + c('y', '−1')) },
        { nota: 'La solución es x ≥ −1. Lo dibujamos en la recta: el punto −1 se RELLENA (círculo cerrado) porque el símbolo incluye el igual, y la flecha apunta a la derecha.', html: recta([{ x: -1, open: false, col: '#ffe27a', lab: '−1' }], [{ a: -1, b: 6, col: '#ffe27a' }], 'x ≥ −1') },
        { nota: 'En notación de intervalo: corchete en −1 (porque se incluye) y siempre paréntesis en el infinito, porque el infinito nunca se "alcanza".', html: say(box('[−1, +∞)'), 'g') }
      ]
    },
    {
      titulo: 'Desigualdad doble',
      intro: 'Resuelve −1 < 2x + 3 ≤ 9 de una sola vez, en los tres miembros.',
      pasos: [
        { nota: 'Una desigualdad doble tiene tres partes. La idea es despejar x en el medio, haciendo la MISMA operación en los TRES miembros a la vez.', html: row('−1 < 2x + 3 ≤ 9') },
        { nota: 'Restamos 3 en los tres lados para empezar a aislar la x.', html: row('− 3', '', 'y') + row('−1 − 3 < 2x + 3 − 3 ≤ 9 − 3') },
        { nota: 'Simplificamos cada lado.', html: row(c('y', '−4') + ' < 2x ≤ ' + c('y', '6')) },
        { nota: 'Dividimos los tres miembros entre 2. Como 2 es POSITIVO, ningún símbolo se voltea.', html: row('÷ 2 (positivo, no cambia nada)', '', 'g') + row(c('g', '−2') + ' < x ≤ ' + c('g', '3')) },
        { nota: 'La solución queda entre −2 (sin incluir, por el <) y 3 (incluido, por el ≤). La dibujamos: círculo vacío en −2, círculo relleno en 3.', html: recta([{ x: -2, open: true, col: '#8fd0ff', lab: '−2' }, { x: 3, open: false, col: '#8fd0ff', lab: '3' }], [{ a: -2, b: 3, col: '#8fd0ff' }], '−2 < x ≤ 3') },
        { nota: 'En notación de intervalo: paréntesis donde no se incluye, corchete donde sí.', html: say(box('(−2, 3]'), 'g') }
      ]
    },
    {
      titulo: 'Desigualdad racional con tabla de signos',
      intro: 'Resuelve (x − 4)/(x + 1) ≤ 0 usando puntos críticos y tabla de signos.',
      pasos: [
        { nota: 'Esto NO es lineal: hay una x arriba y otra abajo. Aquí no podemos "despejar x" directamente; usamos puntos críticos y una tabla de signos.', html: row(f('x − 4', 'x + 1') + ' ≤ 0') },
        { nota: 'Puntos críticos: donde cada factor se hace cero. Numerador: x − 4 = 0 → x = 4. Denominador: x + 1 = 0 → x = −1.', html: row(c('g', 'x − 4 = 0 → x = 4'), 'numerador', 'g') + row(c('p', 'x + 1 = 0 → x = −1'), 'denominador', 'p') },
        { nota: 'Esos dos puntos dividen la recta en TRES tramos. Elegimos un número de prueba cómodo dentro de cada tramo para ver el signo del cociente ahí.', html: tabla(['Intervalo', 'Prueba', 'x − 4', 'x + 1', 'Cociente'], [['(−∞, −1)', 'x = −2', '−', '−', '+'], ['(−1, 4)', 'x = 0', '−', '+', '−'], ['(4, +∞)', 'x = 5', '+', '+', '+']], 1) },
        { nota: 'Queremos donde el cociente sea ≤ 0, es decir negativo (o cero). Mirando la tabla, eso pasa en el tramo de en medio: (−1, 4).', html: tabla(['Intervalo', 'Prueba', 'x − 4', 'x + 1', 'Cociente'], [['(−∞, −1)', 'x = −2', '−', '−', '+'], ['(−1, 4)', 'x = 0', '−', '+', PZ.box('−')], ['(4, +∞)', 'x = 5', '+', '+', '+']], 1) },
        { nota: 'Decidimos los extremos: x = 4 viene del numerador y SÍ puede incluirse (ahí el cociente vale 0, y el símbolo es ≤). x = −1 viene del denominador y NUNCA se incluye, porque dividir entre 0 no existe.', html: recta([{ x: -1, open: true, col: '#ff9fc4', lab: '−1' }, { x: 4, open: false, col: '#9af0b0', lab: '4' }], [{ a: -1, b: 4, col: '#9af0b0' }], '(−1, 4]') },
        { nota: 'Por eso −1 lleva paréntesis (abierto, aunque la desigualdad sea ≤) y 4 lleva corchete (cerrado).', html: say(box('(−1, 4]'), 'g') }
      ]
    }
  ];
})(window.PZ);

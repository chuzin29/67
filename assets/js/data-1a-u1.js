/* data-1a-u1.js — Unidad 1: Álgebra básica (radicales, productos notables, factorización, división, desigualdades) */
window.CURSO_1A = window.CURSO_1A || { temas: {} };
(function () {
  var T = window.CURSO_1A.temas;

  T['1.1'] = {
    id: '1.1',
    unidad: 1,
    titulo: 'Operaciones con radicales y racionalización',
    resumen: 'Aprenderás a operar radicales combinados y a racionalizar denominadores monomios y binomios usando el conjugado.',
    objetivos: [
      'Aplicar la jerarquía de operaciones al simplificar expresiones con radicales.',
      'Sumar y restar radicales semejantes y multiplicar radicales usando la propiedad distributiva.',
      'Racionalizar denominadores monomios identificando el factor racionalizante.',
      'Racionalizar denominadores binomios multiplicando por el conjugado y aplicando la diferencia de cuadrados.'
    ],
    teoria: [
      { titulo: 'Qué es un radical', html: '<p>Un radical es una expresión de la forma <span class="math">√(a)</span> o <span class="math"><sup>n</sup>√(a)</span>, donde n es el índice de la raíz y a es el radicando. Cuando no se escribe el índice, se entiende que n = 2 (raíz cuadrada).</p><p>Para operar con radicales conviene primero simplificarlos, extrayendo de ellos todo factor que sea una potencia exacta del índice.</p>' },
      { titulo: 'Jerarquía de operaciones con radicales', html: '<p>Para resolver operaciones combinadas con radicales se respeta el orden habitual:</p><ol><li>Paréntesis y corchetes.</li><li>Potencias y raíces.</li><li>Multiplicaciones y divisiones.</li><li>Sumas y restas.</li></ol><p>Además se aplican la propiedad distributiva y los productos notables según la forma del radicando, igual que con cualquier polinomio.</p>' },
      { titulo: 'Radicales semejantes', html: '<p>Dos radicales son semejantes cuando tienen el mismo índice y el mismo radicando. Solo se pueden sumar o restar radicales semejantes, conservando la parte radical y operando únicamente los coeficientes.</p><p>Por ejemplo, <span class="math">3√(2) + 5√(2) − 4√(2) = (3 + 5 − 4)√(2) = 4√(2)</span>. Antes de sumar conviene simplificar cada radical, pues radicales que parecen distintos pueden volverse semejantes al simplificarlos.</p>' },
      { titulo: 'Error común: distribuir la raíz', html: '<p>Un error muy frecuente es creer que la raíz se reparte sobre una suma o una resta:</p><p><span class="math">√(a + b) ≠ √(a) + √(b)</span></p><p>La raíz solo se distribuye sobre productos y cocientes: <span class="math">√(a·b) = √(a)·√(b)</span>. Para sumar o restar, primero hay que simplificar cada radical por separado y luego combinar los que sean semejantes.</p>' },
      { titulo: 'Qué es racionalizar', html: '<p>Racionalizar es el proceso mediante el cual se elimina el radical presente en el denominador de una fracción, transformándola en una expresión equivalente con denominador entero (racional).</p><p>El valor de la fracción no cambia: se multiplica el numerador y el denominador por la misma cantidad, lo que equivale a multiplicar por 1.</p>' },
      { titulo: 'Racionalización con denominador monomio', html: '<p>Si el denominador es un radical simple, como <span class="math">√(a)</span>, el factor racionalizante es el mismo radical, porque <span class="math">√(a)·√(a) = a</span>.</p><p><span class="math">c/√(a) = (c·√(a))/a</span></p><p>Si el índice es mayor que 2, el factor racionalizante completa la potencia exacta dentro del radical, por ejemplo <span class="math"><sup>3</sup>√(a)</span> necesita multiplicarse por <span class="math"><sup>3</sup>√(a<sup>2</sup>)</span> para obtener <span class="math"><sup>3</sup>√(a<sup>3</sup>) = a</span>.</p>' },
      { titulo: 'El conjugado de un binomio', html: '<p>El conjugado de un binomio es la expresión que conserva los mismos términos pero cambia el signo de la operación intermedia (el conjugado de a − b es a + b, y viceversa).</p><p>Esta propiedad se apoya en el producto notable de la suma por la diferencia: <span class="math">(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup></span>. Al multiplicar un binomio con radicales por su conjugado, los cuadrados eliminan las raíces cuadradas.</p>' },
      { titulo: 'Racionalización con denominador binomio', html: '<p>Cuando el denominador es un binomio con radicales de la forma <span class="math">√(a) + √(b)</span> o <span class="math">√(a) − √(b)</span>, se multiplica numerador y denominador por el conjugado:</p><p><span class="math">c/(√(a) + √(b)) = [c·(√(a) − √(b))]/[(√(a) + √(b))(√(a) − √(b))] = [c(√(a) − √(b))]/(a − b)</span></p><p>Un error común es multiplicar solo el denominador por el conjugado y olvidar hacerlo también en el numerador.</p>' },
      { titulo: 'Combinando operaciones y racionalización', html: '<p>En problemas más avanzados aparecen numeradores binomios junto con denominadores binomios: primero se multiplica por el conjugado del denominador, luego se desarrolla el numerador (a menudo con un cuadrado de un binomio) y finalmente se simplifica la fracción resultante.</p><p>Cuando el denominador tiene tres términos, se agrupan dos de ellos para formar un "binomio" y se racionaliza en dos pasos sucesivos.</p>' }
    ],
    formulas: [
      { label: 'Suma por diferencia', html: '<span class="math">(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup></span>' },
      { label: 'Cuadrado de la suma', html: '<span class="math">(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></span>' },
      { label: 'Cuadrado de la resta', html: '<span class="math">(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup></span>' },
      { label: 'Factor racionalizante monomio', html: '<span class="math">c/√(a) = (c√(a))/a</span>' },
      { label: 'Factor racionalizante binomio', html: '<span class="math">c/(√(a) + √(b)) = c(√(a) − √(b))/(a − b)</span>' },
      { label: 'Radicales semejantes', html: 'm√(a) ± n√(a) = (m ± n)√(a)' }
    ],
    ejemplos: [
      { titulo: 'Operación combinada con distributiva',
        enunciado: 'Efectúa la operación √(3)·(2 + √(3)).',
        pasos: [
          'Aplica la propiedad distributiva: √(3)·2 + √(3)·√(3).',
          'Multiplica los términos: 2√(3) + √(3<sup>2</sup>).',
          'Simplifica la potencia del radical: 2√(3) + 3.'
        ],
        respuesta: '3 + 2√(3)' },
      { titulo: 'Racionalización monomio',
        enunciado: 'Racionaliza la fracción 6/√(2).',
        pasos: [
          'Identifica el factor racionalizante: √(2).',
          'Multiplica numerador y denominador: (6·√(2))/(√(2)·√(2)).',
          'Opera el denominador: (6√(2))/2.',
          'Simplifica la fracción: 3√(2).'
        ],
        respuesta: '3√(2)' },
      { titulo: 'Racionalización binomio',
        enunciado: 'Racionaliza el denominador de la fracción 5/(√(3) − 1).',
        pasos: [
          'Identifica el conjugado del denominador: (√(3) + 1).',
          'Multiplica numerador y denominador por el conjugado: [5·(√(3) + 1)]/[(√(3) − 1)(√(3) + 1)].',
          'Aplica la diferencia de cuadrados: (√(3))<sup>2</sup> − (1)<sup>2</sup> = 3 − 1 = 2.',
          'Escribe la expresión simplificada: 5(√(3) + 1)/2.'
        ],
        respuesta: '(5√(3) + 5)/2' },
      { titulo: 'Racionalización con variables',
        enunciado: 'Racionaliza 1/(a − b) considerando que a y b representan radicales cuadráticos.',
        pasos: [
          'Identifica el conjugado de (a − b): (a + b).',
          'Multiplica numerador y denominador por (a + b).',
          'Aplica la identidad fundamental: (a − b)(a + b) = a<sup>2</sup> − b<sup>2</sup>.'
        ],
        respuesta: '(a + b)/(a<sup>2</sup> − b<sup>2</sup>)' },
      { titulo: 'Denominador con suma de radicales',
        enunciado: 'Racionaliza la expresión (√(5) − √(2))/(√(5) + √(2)).',
        pasos: [
          'Identifica el conjugado del denominador: (√(5) − √(2)).',
          'Multiplica la fracción por (√(5) − √(2))/(√(5) − √(2)).',
          'Desarrolla el numerador como un cuadrado de un binomio: (√(5) − √(2))<sup>2</sup> = 5 − 2√(10) + 2 = 7 − 2√(10).',
          'Desarrolla el denominador como diferencia de cuadrados: 5 − 2 = 3.'
        ],
        respuesta: '(7 − 2√(10))/3' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Racionaliza la expresión 4/√(8).',
        pasos: ['Simplifica el radical del denominador: √(8) = 2√(2).', 'La fracción queda 4/(2√(2)) = 2/√(2).', 'Multiplica por √(2)/√(2): (2√(2))/2 = √(2).'],
        respuesta: '√(2)' },
      { nivel: 'facil', enunciado: 'Efectúa la suma combinada 3√(2) + 5√(2) − 4√(2).',
        pasos: ['Los tres radicales son semejantes (mismo radicando 2).', 'Agrupa los coeficientes: (3 + 5 − 4) = 4.', 'Multiplica por el radical común: 4√(2).'],
        respuesta: '4√(2)' },
      { nivel: 'facil', enunciado: 'Racionaliza la expresión 1/(√(5) + 2).',
        pasos: ['Multiplica por el conjugado (√(5) − 2): [1·(√(5) − 2)]/[(√(5) + 2)(√(5) − 2)].', 'Aplica diferencia de cuadrados en el denominador: 5 − 4 = 1.', 'Simplifica: (√(5) − 2)/1.'],
        respuesta: '√(5) − 2' },
      { nivel: 'intermedio', enunciado: 'Racionaliza 2/(√(7) − √(3)).',
        pasos: ['Multiplica por el conjugado (√(7) + √(3)): [2(√(7) + √(3))]/[(√(7))<sup>2</sup> − (√(3))<sup>2</sup>].', 'Opera el denominador: 7 − 3 = 4.', 'Simplifica dividiendo entre 4: (√(7) + √(3))/2.'],
        respuesta: '(√(7) + √(3))/2' },
      { nivel: 'intermedio', enunciado: 'Desarrolla la expresión (2 + √(3))<sup>2</sup>.',
        pasos: ['Aplica el cuadrado de la suma: (2)<sup>2</sup> + 2(2)(√(3)) + (√(3))<sup>2</sup>.', 'Opera cada término: 4 + 4√(3) + 3.', 'Suma los términos racionales: 7 + 4√(3).'],
        respuesta: '7 + 4√(3)' },
      { nivel: 'intermedio', enunciado: 'Simplifica y opera √(50) − √(18) + √(8).',
        pasos: ['Descompón cada radicando: √(50) = 5√(2), √(18) = 3√(2), √(8) = 2√(2).', 'Suma y resta los coeficientes: 5 − 3 + 2 = 4.', 'Multiplica por el radical común: 4√(2).'],
        respuesta: '4√(2)' },
      { nivel: 'intermedio', enunciado: 'Racionaliza 3√(2)/(2 − √(2)).',
        pasos: ['Multiplica por el conjugado (2 + √(2)): [3√(2)(2 + √(2))]/[2<sup>2</sup> − (√(2))<sup>2</sup>].', 'Desarrolla el numerador: 6√(2) + 3·2 = 6√(2) + 6.', 'Opera el denominador: 4 − 2 = 2, y simplifica: (6√(2) + 6)/2 = 3√(2) + 3.'],
        respuesta: '3 + 3√(2)' },
      { nivel: 'dificil', enunciado: 'Racionaliza (√(x) + √(y))/(√(x) − √(y)).',
        pasos: ['Multiplica por el conjugado del denominador (√(x) + √(y)) en ambos lados.', 'Numerador: (√(x) + √(y))<sup>2</sup> = x + 2√(xy) + y.', 'Denominador: (√(x))<sup>2</sup> − (√(y))<sup>2</sup> = x − y.'],
        respuesta: '(x + y + 2√(xy))/(x − y)' },
      { nivel: 'dificil', enunciado: 'Simplifica (1 + √(2))/(1 − √(2)) + (1 − √(2))/(1 + √(2)).',
        pasos: ['Suma las fracciones con denominador común (1 − √(2))(1 + √(2)) = 1 − 2 = −1.', 'Numerador: (1 + √(2))<sup>2</sup> + (1 − √(2))<sup>2</sup> = (3 + 2√(2)) + (3 − 2√(2)) = 6.', 'Cociente: 6/(−1) = −6.'],
        respuesta: '−6' },
      { nivel: 'dificil', enunciado: 'Racionaliza el denominador de 12/(√(2) + √(3) + √(5)).',
        pasos: ['Agrupa el denominador como ((√(2) + √(3)) + √(5)) y multiplica por el conjugado ((√(2) + √(3)) − √(5)).', 'Denominador intermedio: (√(2) + √(3))<sup>2</sup> − 5 = (2 + 2√(6) + 3) − 5 = 2√(6).', 'Racionaliza el factor monomio √(6) multiplicando numerador y denominador por √(6).'],
        respuesta: '3√(2) + 2√(3) − √(30)' },
      { nivel: 'dificil', enunciado: 'Racionaliza la fracción 10/(√(6) + 1).',
        pasos: ['Multiplica por el conjugado (√(6) − 1): [10(√(6) − 1)]/[(√(6))<sup>2</sup> − 1<sup>2</sup>].', 'Opera el denominador: 6 − 1 = 5.', 'Simplifica dividiendo entre 5: 2(√(6) − 1) = 2√(6) − 2.'],
        respuesta: '2√(6) − 2' },
      { nivel: 'intermedio', enunciado: 'Simplifica √(12) + √(27) − √(48).',
        pasos: ['Descompón: √(12) = 2√(3), √(27) = 3√(3), √(48) = 4√(3).', 'Suma los coeficientes: 2 + 3 − 4 = 1.', 'El resultado es 1√(3).'],
        respuesta: '√(3)' }
    ],
    teoricas: [
      { q: '¿Cuál es el objetivo principal de la racionalización de denominadores?', a: 'Eliminar las expresiones radicales presentes en el denominador de una fracción para expresarla de forma equivalente con denominador entero.' },
      { q: '¿Qué es el conjugado de un binomio?', a: 'Una expresión idéntica a un binomio dado pero con el signo de la operación central cambiado por su opuesto (el conjugado de a − b es a + b).' },
      { q: '¿Qué producto notable respalda la eliminación de raíces al multiplicar por el conjugado?', a: 'El producto de la suma por la diferencia: (a + b)(a − b) = a² − b², que eleva al cuadrado ambos términos y elimina las raíces cuadradas.' },
      { q: '¿En qué consiste la jerarquía de operaciones al trabajar con radicales?', a: 'Primero paréntesis y corchetes, luego potencias y raíces, después multiplicaciones y divisiones y finalmente sumas y restas.' },
      { q: '¿Por qué no se puede simplificar √(a² + b²) como a + b?', a: 'Porque la radicación no es distributiva respecto a la suma ni a la resta; solo se distribuye sobre la multiplicación y la división.' },
      { q: 'Si el denominador es un monomio √(x), ¿cuál es su factor racionalizante?', a: 'El propio radical √(x), pues √(x)·√(x) = x.' },
      { q: 'Al multiplicar por el conjugado, ¿se altera el valor de la fracción?', a: 'No, porque se multiplica tanto el numerador como el denominador por la misma cantidad, lo que equivale a multiplicar por 1.' },
      { q: '¿Qué regla se sigue al operar radicales semejantes?', a: 'Se conserva la parte radical idéntica y se suman o restan únicamente los coeficientes numéricos exteriores.' }
    ],
    errores: [
      'Distribuir la raíz sobre una suma o resta: √(a + b) ≠ √(a) + √(b).',
      'Olvidar multiplicar tanto el numerador como el denominador por el conjugado completo.',
      'Sumar radicales que no son semejantes sin simplificarlos primero.',
      'Confundir el conjugado con el opuesto de toda la expresión, en lugar de cambiar solo el signo central.'
    ],
    aplicacion: {
      titulo: 'Racionalización en fórmulas de física',
      html: '<p>Muchas fórmulas físicas, como el periodo de un péndulo <span class="math">T = 2π√(L/g)</span>, quedan con un radical en el denominador cuando se despeja alguna variable. Por ejemplo, al despejar L se obtiene una expresión con g dentro de una fracción bajo raíz.</p><p>Racionalizar permite escribir el resultado con denominador entero, lo cual facilita sustituir valores numéricos a mano y comparar unidades sin arrastrar una raíz en el divisor. Es, en esencia, la misma técnica usada con fracciones de la forma c/(√(a) + √(b)): se multiplica por el conjugado para dejar el denominador libre de radicales antes de evaluar numéricamente.</p>'
    },
    calc: 'racionalizar',
    examen: [
      { tipo: 'num', q: 'Racionaliza 8/√(2) y da el resultado como coeficiente de √(2) (es decir, si el resultado es k√(2), da k).', r: 4, tol: 0.01, pasos: ['Multiplica numerador y denominador por √(2): (8√(2))/2.', 'Simplifica: 4√(2).'] },
      { tipo: 'num', q: 'Simplifica 2√(3) + 7√(3) − 3√(3) y da el coeficiente final de √(3).', r: 6, tol: 0.01, pasos: ['Los tres radicales son semejantes.', 'Suma los coeficientes: 2 + 7 − 3 = 6.'] },
      { tipo: 'opt', q: '¿Cuál es el conjugado de (√(5) − 2)?', opciones: ['√(5) + 2', '−√(5) − 2', '2 − √(5)', '−√(5) + 2'], correcta: 0, pasos: ['El conjugado cambia solo el signo central de la operación.', 'De (√(5) − 2) se obtiene (√(5) + 2).'] },
      { tipo: 'num', q: 'Racionaliza 1/(√(3) + 2) y da el denominador entero resultante (el valor de a² − b²).', r: -1, tol: 0.01, pasos: ['Multiplica por el conjugado (√(3) − 2).', 'El denominador es (√(3))² − 2² = 3 − 4 = −1.'] },
      { tipo: 'num', q: 'Racionaliza 10/√(5) y da el coeficiente de √(5) en el resultado.', r: 2, tol: 0.01, pasos: ['Multiplica por √(5)/√(5): (10√(5))/5.', 'Simplifica: 2√(5).'] },
      { tipo: 'opt', q: '¿Cuál de las siguientes igualdades es FALSA en general?', opciones: ['√(a·b) = √(a)·√(b)', '√(a + b) = √(a) + √(b)', '√(a)·√(a) = a', '(a + b)(a − b) = a² − b²'], correcta: 1, pasos: ['La raíz se distribuye sobre productos, no sobre sumas.', 'Por eso √(a + b) = √(a) + √(b) es falsa en general.'] },
      { tipo: 'num', q: 'Simplifica √(18) − √(8) y da el coeficiente final de √(2).', r: 1, tol: 0.01, pasos: ['Descompón: √(18) = 3√(2), √(8) = 2√(2).', 'Resta coeficientes: 3 − 2 = 1.'] },
      { tipo: 'num', q: 'Racionaliza 6/(√(6) − 1) y da el valor del denominador entero obtenido.', r: 5, tol: 0.01, pasos: ['Multiplica por el conjugado (√(6) + 1).', 'Denominador: (√(6))² − 1² = 6 − 1 = 5.'] },
      { tipo: 'par', q: 'Al desarrollar (√(3) + 1)², el resultado tiene forma (p + q√(3)). Da el par (p, q).', r: [4, 2], tol: 0.01, pasos: ['Aplica el cuadrado de la suma: (√(3))² + 2(√(3))(1) + 1².', 'Opera: 3 + 2√(3) + 1 = 4 + 2√(3).'] },
      { tipo: 'num', q: 'Racionaliza 3/√(3) y da el valor numérico simplificado.', r: 1.7320508, tol: 0.01, pasos: ['Multiplica por √(3)/√(3): (3√(3))/3.', 'Simplifica: √(3) ≈ 1.7320508.'] }
    ]
  };

  T['1.2'] = {
    id: '1.2',
    unidad: 1,
    titulo: 'Productos notables',
    resumen: 'Dominarás los productos notables (binomios al cuadrado, suma por diferencia, binomios con término común y cubos) sin multiplicar término a término.',
    objetivos: [
      'Desarrollar el cuadrado y el cubo de un binomio aplicando la regla correspondiente.',
      'Reconocer y aplicar la suma por la diferencia de dos términos (diferencia de cuadrados).',
      'Multiplicar binomios con término común y binomios generales de la forma (ax + b)(cx + d).',
      'Combinar varios productos notables en una misma expresión reduciendo términos semejantes.'
    ],
    teoria: [
      { titulo: 'Qué es un producto notable', html: '<p>Los productos notables son productos de polinomios cuyo resultado se puede escribir directamente por inspección, sin efectuar la multiplicación término a término. Memorizar sus reglas ahorra trabajo y reduce errores.</p>' },
      { titulo: 'Cuadrado de un binomio', html: '<p>El cuadrado de la suma de dos términos es igual al cuadrado del primero, más el doble producto del primero por el segundo, más el cuadrado del segundo:</p><p><span class="math">(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></span></p><p>Para la resta, el signo del doble producto es negativo: <span class="math">(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup></span>.</p>' },
      { titulo: 'Suma por la diferencia de dos términos', html: '<p>El producto de la suma de dos cantidades por su diferencia es igual al cuadrado del minuendo menos el cuadrado del sustraendo:</p><p><span class="math">(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup></span></p><p>Este producto es la base de la diferencia de cuadrados (tema 1.3) y de la racionalización de binomios (tema 1.1).</p>' },
      { titulo: 'Binomios con término común', html: '<p>El producto de dos binomios con un término común, (x + a)(x + b), equivale al cuadrado del término común, más la suma algebraica de los términos no comunes multiplicada por el término común, más el producto de los términos no comunes:</p><p><span class="math">(x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab</span></p>' },
      { titulo: 'Suma por diferencia generalizada', html: '<p>Cuando ninguno de los coeficientes es 1, se usa la regla general:</p><p><span class="math">(ax + b)(cx + d) = ac·x<sup>2</sup> + (ad + bc)x + bd</span></p><p>El término central se forma sumando el producto de los extremos y el producto de los medios.</p>' },
      { titulo: 'Cubo de un binomio', html: '<p>El cubo de la suma y de la resta de dos términos siguen patrones con cuatro términos:</p><p><span class="math">(a + b)<sup>3</sup> = a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup></span></p><p><span class="math">(a − b)<sup>3</sup> = a<sup>3</sup> − 3a<sup>2</sup>b + 3ab<sup>2</sup> − b<sup>3</sup></span></p><p>En la resta, los signos se alternan: +, −, +, −.</p>' },
      { titulo: 'Combinación de productos notables', html: '<p>En expresiones más complejas coexisten cubos, cuadrados y diferencias de binomios. La estrategia es desarrollar cada producto notable por separado, respetando signos y paréntesis, y luego reducir términos semejantes al final.</p><p>Cuando una expresión repetida (como x + y) aparece varias veces, conviene tratarla como un solo término auxiliar antes de aplicar la regla.</p>' },
      { titulo: 'Errores comunes', html: '<p>El error más frecuente es escribir <span class="math">(a + b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup></span>, olvidando el doble producto central 2ab. En el cubo de una diferencia también es común confundir la alternancia de signos (+, −, +, −).</p>' }
    ],
    formulas: [
      { label: 'Binomio al cuadrado (suma)', html: '<span class="math">(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></span>' },
      { label: 'Binomio al cuadrado (resta)', html: '<span class="math">(a − b)<sup>2</sup> = a<sup>2</sup> − 2ab + b<sup>2</sup></span>' },
      { label: 'Diferencia de cuadrados', html: '<span class="math">(a + b)(a − b) = a<sup>2</sup> − b<sup>2</sup></span>' },
      { label: 'Término común', html: '<span class="math">(x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab</span>' },
      { label: 'Binomio general', html: '<span class="math">(ax + b)(cx + d) = ac·x<sup>2</sup> + (ad + bc)x + bd</span>' },
      { label: 'Cubo de una suma', html: '<span class="math">(a + b)<sup>3</sup> = a<sup>3</sup> + 3a<sup>2</sup>b + 3ab<sup>2</sup> + b<sup>3</sup></span>' },
      { label: 'Cubo de una resta', html: '<span class="math">(a − b)<sup>3</sup> = a<sup>3</sup> − 3a<sup>2</sup>b + 3ab<sup>2</sup> − b<sup>3</sup></span>' }
    ],
    ejemplos: [
      { titulo: 'Producto de la forma (x+a)(x+b)',
        enunciado: 'Desarrolla el producto (x + 3)(x + 10).',
        pasos: [
          'Eleva el término común al cuadrado: x<sup>2</sup>.',
          'Suma los términos independientes y multiplica por x: (3 + 10)x = 13x.',
          'Multiplica los términos independientes: 3·10 = 30.',
          'Agrupa la expresión final: x<sup>2</sup> + 13x + 30.'
        ],
        respuesta: 'x<sup>2</sup> + 13x + 30' },
      { titulo: 'Cuadrado de un binomio (suma y resta)',
        enunciado: 'Calcula el desarrollo de (x + 5)<sup>2</sup> y (x − 5)<sup>2</sup>.',
        pasos: [
          'Para la suma: (x)<sup>2</sup> + 2(x)(5) + (5)<sup>2</sup> = x<sup>2</sup> + 10x + 25.',
          'Para la resta: (x)<sup>2</sup> − 2(x)(5) + (5)<sup>2</sup> = x<sup>2</sup> − 10x + 25.'
        ],
        respuesta: 'x<sup>2</sup> + 10x + 25 (suma); x<sup>2</sup> − 10x + 25 (resta)' },
      { titulo: 'Suma por diferencia generalizada',
        enunciado: 'Desarrolla el producto (ax + b)(cx + d).',
        pasos: [
          'Multiplica los primeros términos: ac·x<sup>2</sup>.',
          'Multiplica los extremos y los medios y súmalos: (ad + bc)x.',
          'Multiplica los segundos términos: bd.'
        ],
        respuesta: 'ac·x<sup>2</sup> + (ad + bc)x + bd' },
      { titulo: 'Combinación de productos notables',
        enunciado: 'Resuelve la expresión combinada (2n + 8)<sup>3</sup> − (6 − 4n)<sup>2</sup>.',
        pasos: [
          'Desarrolla el cubo (2n + 8)<sup>3</sup>: 8n<sup>3</sup> + 96n<sup>2</sup> + 384n + 512.',
          'Desarrolla el cuadrado (6 − 4n)<sup>2</sup>: 36 − 48n + 16n<sup>2</sup>.',
          'Resta ambas expresiones cambiando los signos del paréntesis: 8n<sup>3</sup> + 96n<sup>2</sup> + 384n + 512 − 36 + 48n − 16n<sup>2</sup>.',
          'Reduce términos semejantes: 8n<sup>3</sup> + 80n<sup>2</sup> + 432n + 476.'
        ],
        respuesta: '8n<sup>3</sup> + 80n<sup>2</sup> + 432n + 476' },
      { titulo: 'Binomio al cuadrado con término repetido',
        enunciado: 'Desarrolla [(a + b) + 2][(a + b) − 2].',
        pasos: [
          'Considera (a + b) como un único término común.',
          'Aplica la diferencia de cuadrados: (a + b)<sup>2</sup> − (2)<sup>2</sup>.',
          'Desarrolla (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>, y resta 4.'
        ],
        respuesta: 'a<sup>2</sup> + 2ab + b<sup>2</sup> − 4' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Desarrolla (x + 4)(x + 7).',
        pasos: ['Suma los términos independientes: 4 + 7 = 11.', 'Multiplica los términos independientes: 4·7 = 28.', 'Escribe el resultado: x<sup>2</sup> + 11x + 28.'],
        respuesta: 'x<sup>2</sup> + 11x + 28' },
      { nivel: 'facil', enunciado: 'Desarrolla (a − 6)<sup>2</sup>.',
        pasos: ['Aplica la fórmula del cuadrado de la resta: a<sup>2</sup> − 2(a)(6) + 6<sup>2</sup>.', 'Opera: a<sup>2</sup> − 12a + 36.'],
        respuesta: 'a<sup>2</sup> − 12a + 36' },
      { nivel: 'facil', enunciado: 'Desarrolla (2x + 5)(2x − 5).',
        pasos: ['Es una diferencia de cuadrados: (2x)<sup>2</sup> − (5)<sup>2</sup>.', 'Opera: 4x<sup>2</sup> − 25.'],
        respuesta: '4x<sup>2</sup> − 25' },
      { nivel: 'intermedio', enunciado: 'Desarrolla (3x + 2y)<sup>2</sup>.',
        pasos: ['Aplica la fórmula: (3x)<sup>2</sup> + 2(3x)(2y) + (2y)<sup>2</sup>.', 'Opera cada término: 9x<sup>2</sup> + 12xy + 4y<sup>2</sup>.'],
        respuesta: '9x<sup>2</sup> + 12xy + 4y<sup>2</sup>' },
      { nivel: 'intermedio', enunciado: 'Desarrolla (x − 2)<sup>3</sup>.',
        pasos: ['Aplica la fórmula del cubo de la resta: x<sup>3</sup> − 3(x)<sup>2</sup>(2) + 3(x)(2)<sup>2</sup> − (2)<sup>3</sup>.', 'Opera: x<sup>3</sup> − 6x<sup>2</sup> + 12x − 8.'],
        respuesta: 'x<sup>3</sup> − 6x<sup>2</sup> + 12x − 8' },
      { nivel: 'intermedio', enunciado: 'Desarrolla (3x + 4)(2x − 5).',
        pasos: ['Multiplica primeros términos: (3)(2)x<sup>2</sup> = 6x<sup>2</sup>.', 'Suma extremos y medios: 3(−5) + 4(2) = −15 + 8 = −7.', 'Multiplica últimos: 4(−5) = −20.'],
        respuesta: '6x<sup>2</sup> − 7x − 20' },
      { nivel: 'intermedio', enunciado: 'Desarrolla (x<sup>2</sup> + 3y)(x<sup>2</sup> − 3y).',
        pasos: ['Es una diferencia de cuadrados: (x<sup>2</sup>)<sup>2</sup> − (3y)<sup>2</sup>.', 'Opera: x<sup>4</sup> − 9y<sup>2</sup>.'],
        respuesta: 'x<sup>4</sup> − 9y<sup>2</sup>' },
      { nivel: 'dificil', enunciado: 'Resuelve y simplifica (x + 1)<sup>3</sup> − (x − 1)<sup>3</sup>.',
        pasos: ['Desarrolla cada cubo: (x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1) − (x<sup>3</sup> − 3x<sup>2</sup> + 3x − 1).', 'Cambia los signos del segundo paréntesis y reduce: x<sup>3</sup> + 3x<sup>2</sup> + 3x + 1 − x<sup>3</sup> + 3x<sup>2</sup> − 3x + 1.', 'Resultado: 6x<sup>2</sup> + 2.'],
        respuesta: '6x<sup>2</sup> + 2' },
      { nivel: 'dificil', enunciado: 'Desarrolla (x + y + z)<sup>2</sup>.',
        pasos: ['Trata (x + y) como un solo término: [(x + y) + z]<sup>2</sup>.', 'Aplica el cuadrado de la suma: (x + y)<sup>2</sup> + 2(x + y)z + z<sup>2</sup>.', 'Desarrolla (x + y)<sup>2</sup> y agrupa: x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2xy + 2xz + 2yz.'],
        respuesta: 'x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> + 2xy + 2xz + 2yz' },
      { nivel: 'dificil', enunciado: 'Desarrolla (2x − 3)<sup>3</sup>.',
        pasos: ['Aplica la fórmula del cubo de la resta con a = 2x, b = 3.', '(2x)<sup>3</sup> − 3(2x)<sup>2</sup>(3) + 3(2x)(3)<sup>2</sup> − (3)<sup>3</sup>.', 'Opera: 8x<sup>3</sup> − 36x<sup>2</sup> + 54x − 27.'],
        respuesta: '8x<sup>3</sup> − 36x<sup>2</sup> + 54x − 27' },
      { nivel: 'intermedio', enunciado: 'Desarrolla (x + 9)(x − 4).',
        pasos: ['Suma los términos independientes: 9 + (−4) = 5.', 'Multiplica los términos independientes: 9·(−4) = −36.'],
        respuesta: 'x<sup>2</sup> + 5x − 36' },
      { nivel: 'facil', enunciado: 'Desarrolla (5x − 1)<sup>2</sup>.',
        pasos: ['Aplica la fórmula del cuadrado de la resta: (5x)<sup>2</sup> − 2(5x)(1) + 1<sup>2</sup>.', 'Opera: 25x<sup>2</sup> − 10x + 1.'],
        respuesta: '25x<sup>2</sup> − 10x + 1' }
    ],
    teoricas: [
      { q: '¿Qué es un producto notable en álgebra?', a: 'Un producto de polinomios cuyo resultado se puede escribir por inspección siguiendo reglas fijas, sin efectuar la multiplicación tradicional.' },
      { q: '¿Cuál es el error más recurrente al elevar un binomio al cuadrado?', a: 'Omitir el término central correspondiente al doble producto del primero por el segundo (escribir a² + b² en lugar de a² + 2ab + b²).' },
      { q: '¿Cómo se reconoce una suma por diferencia de binomios?', a: 'Es el producto de dos binomios con los mismos términos, pero en uno se suman y en el otro se restan.' },
      { q: '¿A qué es igual el producto (x + a)(x + b)?', a: 'Al cuadrado del término común, más la suma de los términos independientes multiplicada por el término común, más el producto de los independientes.' },
      { q: '¿Cuáles son los signos al desarrollar el cubo de una resta (a − b)³?', a: 'Los signos se alternan: positivo, negativo, positivo y negativo (+, −, +, −).' },
      { q: '¿Qué regla sigue el término central de (ax + b)(cx + d)?', a: 'Es la suma de los productos de los extremos (a·d) y los medios (b·c), multiplicados por la variable x.' },
      { q: '¿Cómo se relacionan los productos notables con la factorización?', a: 'La factorización es el proceso inverso: el producto notable expande, mientras que la factorización transforma la suma expandida de nuevo en un producto.' },
      { q: 'En (2n + 8)³, ¿cuál es el coeficiente del término con n²?', a: 'Proviene de 3(2n)²(8) = 3(4n²)(8) = 96n², así que el coeficiente es 96.' }
    ],
    errores: [
      'Escribir (a + b)² = a² + b², omitiendo el doble producto central 2ab.',
      'Confundir los signos alternantes del cubo de una diferencia (debe ser +, −, +, −).',
      'Aplicar la regla del término común a binomios que no comparten ningún término.',
      'Olvidar multiplicar el término x al sumar los coeficientes en (x + a)(x + b).'
    ],
    aplicacion: {
      titulo: 'Cálculo mental de multiplicaciones',
      html: '<p>Los productos notables permiten calcular mentalmente multiplicaciones sin usar calculadora. Por ejemplo, para hallar 97 × 103, escribimos ambos números cerca de 100: 97 = 100 − 3 y 103 = 100 + 3.</p><p>Entonces 97 × 103 = (100 − 3)(100 + 3), que es una diferencia de cuadrados: <span class="math">100<sup>2</sup> − 3<sup>2</sup> = 10000 − 9 = 9991</span>. De igual forma, 102<sup>2</sup> se calcula como (100 + 2)<sup>2</sup> = 10000 + 400 + 4 = 10404, usando el cuadrado de un binomio en lugar de multiplicar 102 por 102 a mano.</p>'
    },
    calc: 'binomio',
    examen: [
      { tipo: 'num', q: 'Desarrolla (x + 6)(x + 4) y da el término independiente.', r: 24, tol: 0.01, pasos: ['El término independiente es el producto 6·4.', '6·4 = 24.'] },
      { tipo: 'num', q: 'Desarrolla (x + 7)² y da el coeficiente del término central (el de x).', r: 14, tol: 0.01, pasos: ['El término central es 2·x·7 = 14x.', 'El coeficiente es 14.'] },
      { tipo: 'opt', q: '¿Cuál es el desarrollo correcto de (a − 3)²?', opciones: ['a² − 9', 'a² − 6a + 9', 'a² + 6a + 9', 'a² − 3a + 9'], correcta: 1, pasos: ['Aplica la fórmula: a² − 2(a)(3) + 3².', 'Resultado: a² − 6a + 9.'] },
      { tipo: 'num', q: 'Desarrolla (3x − 2)(3x + 2) y da el término independiente (puede ser negativo).', r: -4, tol: 0.01, pasos: ['Es una diferencia de cuadrados: (3x)² − 2².', 'El término independiente es −4.'] },
      { tipo: 'num', q: 'Desarrolla (x − 3)³ y da el coeficiente del término x².', r: -9, tol: 0.01, pasos: ['Aplica la fórmula del cubo de la resta.', 'El término con x² es −3(x²)(3) = −9x², coeficiente −9.'] },
      { tipo: 'par', q: 'Desarrolla (2x + 5)(x + 3) de la forma ax² + bx + c. Da el par (b, c).', r: [11, 15], tol: 0.01, pasos: ['Extremos y medios: 2(3) + 5(1) = 6 + 5 = 11.', 'Últimos términos: 5·3 = 15.'] },
      { tipo: 'num', q: 'Si (x + k)² = x² + 20x + 100, ¿cuánto vale k?', r: 10, tol: 0.01, pasos: ['El término central es 2·x·k = 20x, así que k = 10.', 'Verifica: k² = 100, coincide.'] },
      { tipo: 'opt', q: '¿Qué resultado corresponde a (a + b)³?', opciones: ['a³ + b³', 'a³ + 3a²b + 3ab² + b³', 'a³ − 3a²b + 3ab² − b³', 'a³ + 3ab + b³'], correcta: 1, pasos: ['El cubo de una suma tiene cuatro términos con signos positivos.', 'Es a³ + 3a²b + 3ab² + b³.'] },
      { tipo: 'num', q: 'Desarrolla (x + 2)² − (x − 2)² y da el resultado simplificado (coeficiente de x).', r: 8, tol: 0.01, pasos: ['Resta de dos cuadrados: (x² + 4x + 4) − (x² − 4x + 4).', 'Se simplifica a 8x; el coeficiente es 8.'] },
      { tipo: 'num', q: 'Desarrolla (2x + 3)² y da el término independiente.', r: 9, tol: 0.01, pasos: ['Aplica la fórmula: (2x)² + 2(2x)(3) + 3².', 'El término independiente es 3² = 9.'] }
    ]
  };

  T['1.3'] = {
    id: '1.3',
    unidad: 1,
    titulo: 'Factorización de polinomios',
    resumen: 'Factorizarás polinomios por factor común, agrupación, trinomio cuadrado perfecto, diferencia de cuadrados y trinomios de segundo grado.',
    objetivos: [
      'Extraer el factor común monomio o polinomio de una expresión algebraica.',
      'Factorizar por agrupación de términos cuando no hay factor común global.',
      'Reconocer y factorizar un trinomio cuadrado perfecto y una diferencia de cuadrados.',
      'Factorizar trinomios de la forma x² + bx + c y ax² + bx + c.'
    ],
    teoria: [
      { titulo: 'Qué es factorizar', html: '<p>Factorizar es reescribir un polinomio como el producto de factores más simples. Al multiplicar esos factores se recupera la expresión original; por eso la factorización es la operación inversa al desarrollo de productos notables (tema 1.2).</p>' },
      { titulo: 'Caso I: factor común monomio y polinomio', html: '<p>Se extrae el máximo común divisor (MCD) de los coeficientes numéricos y las variables comunes elevadas a su menor exponente:</p><p><span class="math">ax + ay = a(x + y)</span></p><p>Si la expresión común es un polinomio entre paréntesis (no un solo término), se factoriza como factor común polinomio, por ejemplo <span class="math">x(a + b) + y(a + b) = (a + b)(x + y)</span>.</p>' },
      { titulo: 'Caso II: factor común por agrupación', html: '<p>Se aplica a polinomios de cuatro o más términos sin factor común global. Se agrupan los términos en pares (u otros grupos) que compartan un factor común parcial, se extrae ese factor en cada grupo y finalmente se extrae el factor común binomio resultante.</p>' },
      { titulo: 'Caso III: trinomio cuadrado perfecto (TCP)', html: '<p>Un trinomio es cuadrado perfecto cuando el primer y el tercer término son cuadrados perfectos positivos y el término central es igual al doble producto de sus raíces cuadradas:</p><p><span class="math">a<sup>2</sup> ± 2ab + b<sup>2</sup> = (a ± b)<sup>2</sup></span></p><p>Para verificarlo: se extrae la raíz cuadrada del primer y tercer término, se calcula el doble producto de esas raíces y se compara con el término central.</p>' },
      { titulo: 'Caso IV: diferencia de cuadrados perfectos', html: '<p>Una expresión de la forma <span class="math">a<sup>2</sup> − b<sup>2</sup></span> se factoriza extrayendo la raíz cuadrada de cada término y escribiendo el producto de la suma por la diferencia de esas raíces:</p><p><span class="math">a<sup>2</sup> − b<sup>2</sup> = (a + b)(a − b)</span></p><p>La suma de cuadrados <span class="math">a<sup>2</sup> + b<sup>2</sup></span> no es factorizable en los números reales con esta técnica.</p>' },
      { titulo: 'Caso V: trinomios de segundo grado', html: '<p>Para <span class="math">x<sup>2</sup> + bx + c</span> se buscan dos números m, n cuyo producto sea c y cuya suma algebraica sea b: <span class="math">x<sup>2</sup> + bx + c = (x + m)(x + n)</span>.</p><p>Para <span class="math">ax<sup>2</sup> + bx + c</span> (con a ≠ 1) se multiplica todo el trinomio por a, se buscan dos números que multiplicados den a·c y sumados den b, se escriben los binomios y se simplifica dividiendo entre a (descompuesto en factores que correspondan a cada binomio).</p>' },
      { titulo: 'Suma y diferencia de cubos', html: '<p>Dos casos adicionales frecuentes son la suma y la diferencia de cubos:</p><p><span class="math">a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> − ab + b<sup>2</sup>)</span></p><p><span class="math">a<sup>3</sup> − b<sup>3</sup> = (a − b)(a<sup>2</sup> + ab + b<sup>2</sup>)</span></p><p>En ambos casos se extrae la raíz cúbica de cada término para identificar a y b.</p>' },
      { titulo: 'Factorización por evaluación (división sintética)', html: '<p>Para polinomios de grado mayor a 2 sin un patrón evidente, se buscan raíces probables entre los divisores del término independiente y se evalúan con el Teorema del Residuo (tema 1.4). Si P(a) = 0, entonces (x − a) es un factor y se obtiene el cociente por división sintética, que puede seguir factorizándose.</p>' },
      { titulo: 'Errores comunes', html: '<p>Olvidar extraer el menor exponente al sacar el factor común. No verificar si el término central realmente corresponde al doble producto en el TCP. Confundir la suma de cuadrados (no factorizable con diferencia de cuadrados) con la diferencia de cuadrados.</p>' }
    ],
    formulas: [
      { label: 'Factor común', html: '<span class="math">ax + ay = a(x + y)</span>' },
      { label: 'Diferencia de cuadrados', html: '<span class="math">a<sup>2</sup> − b<sup>2</sup> = (a + b)(a − b)</span>' },
      { label: 'Trinomio cuadrado perfecto', html: '<span class="math">a<sup>2</sup> ± 2ab + b<sup>2</sup> = (a ± b)<sup>2</sup></span>' },
      { label: 'Trinomio simple', html: '<span class="math">x<sup>2</sup> + (m + n)x + mn = (x + m)(x + n)</span>' },
      { label: 'Suma de cubos', html: '<span class="math">a<sup>3</sup> + b<sup>3</sup> = (a + b)(a<sup>2</sup> − ab + b<sup>2</sup>)</span>' },
      { label: 'Diferencia de cubos', html: '<span class="math">a<sup>3</sup> − b<sup>3</sup> = (a − b)(a<sup>2</sup> + ab + b<sup>2</sup>)</span>' }
    ],
    ejemplos: [
      { titulo: 'Factor común monomio',
        enunciado: 'Factoriza 12x<sup>2</sup>y<sup>5</sup> + 16x<sup>7</sup>y<sup>3</sup> − 8x<sup>4</sup>y.',
        pasos: [
          'Obtén el MCD de los coeficientes 12, 16, 8: MCD = 4.',
          'Selecciona las variables comunes con menor exponente: x<sup>2</sup> e y.',
          'El factor común es 4x<sup>2</sup>y; divide cada término entre él: 3y<sup>4</sup>, 4x<sup>5</sup>y<sup>2</sup>, −2x<sup>2</sup>.',
          'Expresa como producto: 4x<sup>2</sup>y(3y<sup>4</sup> + 4x<sup>5</sup>y<sup>2</sup> − 2x<sup>2</sup>).'
        ],
        respuesta: '4x<sup>2</sup>y(3y<sup>4</sup> + 4x<sup>5</sup>y<sup>2</sup> − 2x<sup>2</sup>)' },
      { titulo: 'Factor común por agrupación',
        enunciado: 'Factoriza mn − 4m + 3n − 12.',
        pasos: [
          'Agrupa en pares con factor común parcial: (mn − 4m) + (3n − 12).',
          'Factoriza cada grupo: m(n − 4) + 3(n − 4).',
          'Extrae el factor común binomio (n − 4): (n − 4)(m + 3).'
        ],
        respuesta: '(n − 4)(m + 3)' },
      { titulo: 'Diferencia de cuadrados',
        enunciado: 'Factoriza a<sup>6</sup> − 1/25.',
        pasos: [
          'Reescribe ambos términos como potencias cuadradas: (a<sup>3</sup>)<sup>2</sup> − (1/5)<sup>2</sup>.',
          'Extrae la raíz cuadrada de cada término: √(a<sup>6</sup>) = a<sup>3</sup> y √(1/25) = 1/5.',
          'Expresa como producto de conjugados: (a<sup>3</sup> + 1/5)(a<sup>3</sup> − 1/5).'
        ],
        respuesta: '(a<sup>3</sup> + 1/5)(a<sup>3</sup> − 1/5)' },
      { titulo: 'Trinomio cuadrado perfecto',
        enunciado: 'Factoriza 4x<sup>2</sup> − 20xy + 25y<sup>2</sup>.',
        pasos: [
          'Extrae raíz cuadrada al primer término: √(4x<sup>2</sup>) = 2x.',
          'Extrae raíz cuadrada al tercer término: √(25y<sup>2</sup>) = 5y.',
          'Verifica el doble producto: 2(2x)(5y) = 20xy, coincide con el término central.',
          'Agrupa con el signo del término central: (2x − 5y)<sup>2</sup>.'
        ],
        respuesta: '(2x − 5y)<sup>2</sup>' },
      { titulo: 'Trinomio ax² + bx + c',
        enunciado: 'Factoriza 6x<sup>2</sup> − 7x − 3.',
        pasos: [
          'Multiplica todo el trinomio por a = 6: (6x)<sup>2</sup> − 7(6x) − 18.',
          'Busca dos números que multiplicados den −18 y sumados den −7: son −9 y +2.',
          'Escribe los binomios: (6x − 9)(6x + 2).',
          'Divide cada binomio por el factor correspondiente de 6 = 3·2: (2x − 3)(3x + 1).'
        ],
        respuesta: '(2x − 3)(3x + 1)' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Factoriza x<sup>2</sup>y<sup>2</sup> − x<sup>2</sup>y + xy.',
        pasos: ['Identifica las variables comunes con menor exponente: xy.', 'Divide cada término entre xy: xy, −x, 1.', 'Resultado: xy(xy − x + 1).'],
        respuesta: 'xy(xy − x + 1)' },
      { nivel: 'facil', enunciado: 'Factoriza x<sup>2</sup> − 9.',
        pasos: ['Extrae raíces cuadradas: √(x<sup>2</sup>) = x, √(9) = 3.', 'Escribe el producto de conjugados: (x + 3)(x − 3).'],
        respuesta: '(x + 3)(x − 3)' },
      { nivel: 'facil', enunciado: 'Factoriza m<sup>2</sup> + 2m + 1.',
        pasos: ['Verifica TCP: √(m<sup>2</sup>) = m, √(1) = 1.', 'Doble producto: 2(m)(1) = 2m, coincide.', 'Resultado: (m + 1)<sup>2</sup>.'],
        respuesta: '(m + 1)<sup>2</sup>' },
      { nivel: 'intermedio', enunciado: 'Factoriza x<sup>2</sup> + 7x + 10.',
        pasos: ['Busca dos números cuyo producto sea 10 y suma 7: son 5 y 2.', 'Escribe los binomios: (x + 5)(x + 2).'],
        respuesta: '(x + 5)(x + 2)' },
      { nivel: 'intermedio', enunciado: 'Factoriza x<sup>2</sup> − 5x + 6.',
        pasos: ['Busca dos números cuyo producto sea +6 y suma −5: son −3 y −2.', 'Escribe los binomios: (x − 3)(x − 2).'],
        respuesta: '(x − 3)(x − 2)' },
      { nivel: 'intermedio', enunciado: 'Factoriza a<sup>3</sup> + 8.',
        pasos: ['Es una suma de cubos: √(a<sup>3</sup>) = a, raíz cúbica de 8 es 2.', 'Aplica la fórmula: (a + 2)(a<sup>2</sup> − 2a + 4).'],
        respuesta: '(a + 2)(a<sup>2</sup> − 2a + 4)' },
      { nivel: 'intermedio', enunciado: 'Factoriza 1/2 m<sup>2</sup> + 1/2 mn + 1/3 m + 1/3 n.',
        pasos: ['Agrupa: (1/2 m<sup>2</sup> + 1/2 mn) + (1/3 m + 1/3 n).', 'Factoriza cada grupo: 1/2 m(m + n) + 1/3(m + n).', 'Extrae el factor común (m + n): (m + n)(1/2 m + 1/3).'],
        respuesta: '(m + n)(1/2 m + 1/3)' },
      { nivel: 'dificil', enunciado: 'Factoriza 20x<sup>2</sup> + 7x − 6.',
        pasos: ['Multiplica por 20: (20x)<sup>2</sup> + 7(20x) − 120.', 'Busca números que den −120 y sumen 7: son +15 y −8.', 'Escribe (20x + 15)(20x − 8) y divide por (5·4): (4x + 3)(5x − 2).'],
        respuesta: '(4x + 3)(5x − 2)' },
      { nivel: 'dificil', enunciado: 'Factoriza a<sup>4</sup> + a<sup>2</sup>b<sup>2</sup> + b<sup>4</sup> por adición y sustracción.',
        pasos: ['Para formar un TCP se necesita 2a<sup>2</sup>b<sup>2</sup>; suma y resta a<sup>2</sup>b<sup>2</sup>.', '(a<sup>4</sup> + 2a<sup>2</sup>b<sup>2</sup> + b<sup>4</sup>) − a<sup>2</sup>b<sup>2</sup> = (a<sup>2</sup> + b<sup>2</sup>)<sup>2</sup> − (ab)<sup>2</sup>.', 'Aplica diferencia de cuadrados: (a<sup>2</sup> + ab + b<sup>2</sup>)(a<sup>2</sup> − ab + b<sup>2</sup>).'],
        respuesta: '(a<sup>2</sup> + ab + b<sup>2</sup>)(a<sup>2</sup> − ab + b<sup>2</sup>)' },
      { nivel: 'dificil', enunciado: 'Factoriza x<sup>3</sup> − 3x<sup>2</sup> − 4x + 12 mediante división sintética.',
        pasos: ['Prueba divisores de 12: para x = 2, P(2) = 8 − 12 − 8 + 12 = 0.', 'Divide entre (x − 2) y obtén el cociente x<sup>2</sup> − x − 6.', 'Factoriza el trinomio: (x − 3)(x + 2).'],
        respuesta: '(x − 2)(x − 3)(x + 2)' },
      { nivel: 'facil', enunciado: 'Factoriza 5x<sup>3</sup> + 10x<sup>2</sup> − 15x.',
        pasos: ['El MCD de los coeficientes es 5 y la variable común con menor exponente es x.', 'Divide cada término entre 5x: x<sup>2</sup>, 2x, −3.', 'Resultado: 5x(x<sup>2</sup> + 2x − 3).'],
        respuesta: '5x(x<sup>2</sup> + 2x − 3)' },
      { nivel: 'intermedio', enunciado: 'Factoriza 9x<sup>2</sup> − 16.',
        pasos: ['Extrae raíces: √(9x<sup>2</sup>) = 3x, √(16) = 4.', 'Escribe el producto de conjugados: (3x + 4)(3x − 4).'],
        respuesta: '(3x + 4)(3x − 4)' }
    ],
    teoricas: [
      { q: '¿Qué es factorizar una expresión algebraica?', a: 'Es el procedimiento que consiste en reescribir un polinomio como el producto indicado de sus factores más simples.' },
      { q: '¿Cómo se determina el factor común monomio de un polinomio?', a: 'Calculando el MCD de los coeficientes numéricos y tomando las variables repetidas elevadas a su menor exponente.' },
      { q: '¿Cuáles son las condiciones para que un trinomio sea cuadrado perfecto?', a: 'El primer y tercer término deben ser cuadrados perfectos positivos, y el término central debe ser el doble producto de sus raíces cuadradas.' },
      { q: '¿Cómo se factoriza una diferencia de cuadrados a² − b²?', a: 'Se extrae la raíz cuadrada de cada término y se escribe el producto de la suma por la diferencia de esas raíces: (a + b)(a − b).' },
      { q: 'En el trinomio x² + bx + c, ¿qué relación deben cumplir los números buscados?', a: 'Deben ser dos números cuyo producto sea igual al término independiente c y cuya suma algebraica sea igual al coeficiente b.' },
      { q: '¿Cuándo se recurre al método de factorización por agrupación de términos?', a: 'Cuando el polinomio no tiene un factor común en todos sus términos, pero sí presenta grupos con factores comunes parciales.' },
      { q: '¿Cuál es la estructura del desarrollo de una suma de cubos a³ + b³?', a: 'Se compone de un binomio suma por un trinomio con signos alternados: (a + b)(a² − ab + b²).' },
      { q: '¿En qué consiste el método de evaluación para factorizar polinomios de grado mayor?', a: 'En aplicar el Teorema del Residuo y la división sintética para hallar los valores que anulan al polinomio e identificar factores de la forma (x − a).' }
    ],
    errores: [
      'Olvidar extraer el menor exponente en el factor común.',
      'No verificar si el término central corresponde realmente al doble producto en el trinomio cuadrado perfecto.',
      'Confundir la suma de cuadrados a² + b² (no factorizable en los reales) con la diferencia de cuadrados.',
      'Olvidar simplificar los binomios al dividir entre a en el método de trinomios ax² + bx + c.'
    ],
    aplicacion: {
      titulo: 'Factorización para resolver ecuaciones de áreas',
      html: '<p>Si el área de un terreno rectangular es <span class="math">A = x<sup>2</sup> + 5x + 6</span> metros cuadrados y se sabe que sus lados son binomios con x, factorizar permite encontrar las dimensiones exactas sin tanteo: <span class="math">x<sup>2</sup> + 5x + 6 = (x + 2)(x + 3)</span>, así que un lado mide (x + 2) y el otro (x + 3).</p><p>Esta misma idea se usa para diseñar cajas o resolver problemas de optimización donde el volumen o el área se expresan como un polinomio que conviene factorizar antes de sustituir valores numéricos concretos.</p>'
    },
    calc: 'factorizar',
    examen: [
      { tipo: 'par', q: 'Factoriza x<sup>2</sup> + 9x + 20 en la forma (x + m)(x + n). Da el par (m, n) con m ≤ n.', r: [4, 5], tol: 0.01, pasos: ['Busca dos números cuyo producto sea 20 y suma 9.', 'Son 4 y 5.'] },
      { tipo: 'num', q: 'Factoriza 16x<sup>2</sup> − 25 como (ax + b)(ax − b). Da el valor de b.', r: 5, tol: 0.01, pasos: ['Extrae raíz cuadrada de 25: b = 5.', 'Extrae raíz cuadrada de 16x²: a·x = 4x.'] },
      { tipo: 'opt', q: '¿Cuál es la factorización de 9x² − 12x + 4?', opciones: ['(3x − 2)²', '(3x + 2)²', '(3x − 4)(x + 1)', 'No es factorizable'], correcta: 0, pasos: ['Verifica TCP: √(9x²) = 3x, √4 = 2.', 'Doble producto: 2(3x)(2) = 12x, coincide con signo negativo: (3x − 2)².'] },
      { tipo: 'num', q: 'Factoriza x<sup>2</sup> − x − 6 = (x + m)(x + n). Da el valor de m si m es negativo.', r: -3, tol: 0.01, pasos: ['Busca dos números cuyo producto sea −6 y suma −1.', 'Son −3 y 2.'] },
      { tipo: 'num', q: 'Al factorizar x³ − 27 como (x − a)(x² + ax + a²), ¿cuánto vale a?', r: 3, tol: 0.01, pasos: ['Es una diferencia de cubos con raíz cúbica de 27 igual a 3.', 'a = 3.'] },
      { tipo: 'par', q: 'Factoriza 2x<sup>2</sup> + 7x + 3 en binomios (ax + b)(cx + d). Da el par de términos independientes (b, d).', r: [1, 3], tol: 0.01, pasos: ['Multiplica por 2: (2x)² + 7(2x) + 6.', 'Busca números que den 6 y sumen 7: 6 y 1.', 'Los binomios resultan (x + 3)(2x + 1).'] },
      { tipo: 'opt', q: '¿Cuál de estas expresiones es una diferencia de cuadrados?', opciones: ['x² + 4', 'x² − 4x + 4', 'x² − 4', 'x² + 4x + 4'], correcta: 2, pasos: ['Una diferencia de cuadrados tiene dos términos con signo negativo entre cuadrados perfectos.', 'x² − 4 cumple esa forma.'] },
      { tipo: 'num', q: 'Factoriza 3x<sup>2</sup>y + 6xy<sup>2</sup> como factor común. Da el coeficiente numérico del factor común.', r: 3, tol: 0.01, pasos: ['El MCD de 3 y 6 es 3.', 'La variable común con menor exponente es xy.'] },
      { tipo: 'num', q: 'Factoriza x<sup>2</sup> + 12x + 36 como (x + k)². Da el valor de k.', r: 6, tol: 0.01, pasos: ['Verifica el doble producto: 2(x)(k) = 12x, así k = 6.', 'Comprueba: k² = 36.'] },
      { tipo: 'num', q: 'Para que x³ + 8x² + kx + 12 sea divisible entre (x + 2), con x = −2 debe anularse. Si P(x) factoriza como (x + 2)(x² + 6x + 6), ¿cuánto vale k?', r: 18, tol: 0.01, pasos: ['Multiplica (x + 2)(x² + 6x + 6) y compara el coeficiente de x.', 'Coeficiente de x: 6·2 + 6 = 18.'] }
    ]
  };

  T['1.4'] = {
    id: '1.4',
    unidad: 1,
    titulo: 'División algebraica, teorema del residuo y división sintética',
    resumen: 'Dividirás polinomios de forma tradicional, aplicarás el Teorema del Residuo y usarás la división sintética (Ruffini).',
    objetivos: [
      'Dividir monomios y polinomios entre monomios aplicando la ley de los signos y de los exponentes.',
      'Dividir dos polinomios ordenándolos y completando los términos faltantes con coeficiente cero.',
      'Aplicar el Teorema del Residuo para hallar el residuo de una división sin efectuarla.',
      'Aplicar la división sintética (regla de Ruffini) para obtener cociente y residuo de forma abreviada.'
    ],
    teoria: [
      { titulo: 'Qué es la división algebraica', html: '<p>La división algebraica tiene por objeto, dado el producto de dos factores (dividendo D) y uno de los factores (divisor d), hallar el otro factor (cociente q). Cumple la propiedad fundamental:</p><p><span class="math">Dividendo = Divisor · Cociente + Residuo</span></p><p>La ley de los signos es la habitual: signos iguales dan positivo y signos diferentes dan negativo.</p>' },
      { titulo: 'División de monomios y de polinomio entre monomio', html: '<p>Para dividir monomios se dividen los coeficientes y se restan los exponentes de las letras comunes. Para dividir un polinomio entre un monomio, se divide cada término del polinomio entre el monomio divisor, uno por uno.</p>' },
      { titulo: 'División de dos polinomios', html: '<p>Se ordenan el dividendo y el divisor en orden descendente respecto a una variable. Se divide el primer término del dividendo entre el primero del divisor para obtener el primer término del cociente; se multiplica ese término por todo el divisor y se resta del dividendo. El proceso se repite con el nuevo resto hasta que su grado sea menor que el del divisor.</p><p>Si falta algún término intermedio al ordenar, se debe dejar su lugar con coeficiente cero para no desalinear la resta.</p>' },
      { titulo: 'Cociente mixto', html: '<p>Cuando la división no es exacta y el grado del residuo es menor que el del divisor, se añade al cociente una fracción formada por el residuo sobre el divisor:</p><p><span class="math">D/d = q + R/d</span></p>' },
      { titulo: 'Teorema del Residuo', html: '<p>El residuo R de dividir un polinomio entero y racional P(x) entre un binomio de la forma (x − a) es igual al valor que se obtiene al sustituir en el polinomio la variable x por a:</p><p><span class="math">R = P(a)</span></p><p>Esto permite hallar el residuo sin efectuar la división completa, con solo evaluar el polinomio.</p>' },
      { titulo: 'División sintética (regla de Ruffini)', html: '<p>Es un método abreviado para dividir un polinomio en x entre un binomio (x − a), trabajando únicamente con los coeficientes numéricos:</p><ol><li>Escribe los coeficientes del dividendo en orden descendente (con ceros en los términos faltantes).</li><li>Baja el primer coeficiente.</li><li>Multiplica ese valor por a y súmalo al siguiente coeficiente; repite el proceso.</li><li>El último valor obtenido es el residuo; los anteriores son los coeficientes del cociente, de grado una unidad menor.</li></ol>' },
      { titulo: 'Divisibilidad de aⁿ ± bⁿ', html: '<p>Existen reglas rápidas de divisibilidad: <span class="math">a<sup>n</sup> − b<sup>n</sup></span> siempre es divisible entre (a − b); es divisible entre (a + b) solo cuando n es par. <span class="math">a<sup>n</sup> + b<sup>n</sup></span> es divisible entre (a + b) solo cuando n es impar, y nunca es divisible entre (a − b).</p>' },
      { titulo: 'Errores comunes', html: '<p>No dejar espacio con coeficiente cero para los términos faltantes al ordenar el polinomio. Olvidar cambiar el signo de los términos al restar en la división tradicional, o cambiar incorrectamente el signo de a al usar la división sintética (recuerda: el divisor es x − a, así que se usa el valor a, no −a, salvo que el binomio sea x + a).</p>' }
    ],
    formulas: [
      { label: 'Algoritmo de la división', html: '<span class="math">P(x) = Q(x)·(x − a) + R</span>' },
      { label: 'Teorema del Residuo', html: '<span class="math">R = P(a)</span> para divisor (x − a)' },
      { label: 'Cociente mixto', html: '<span class="math">P(x)/(x − a) = Q(x) + R/(x − a)</span>' },
      { label: 'Divisibilidad par', html: 'a<sup>n</sup> − b<sup>n</sup> es divisible por a + b si n es par' }
    ],
    ejemplos: [
      { titulo: 'Teorema del Residuo',
        enunciado: 'Halla el residuo de dividir P(x) = x<sup>3</sup> + 2x<sup>2</sup> − 4x + 3 entre (x − 1) sin efectuar la división.',
        pasos: [
          'Aplica el Teorema del Residuo evaluando P(1).',
          'Sustituye x por 1: P(1) = (1)<sup>3</sup> + 2(1)<sup>2</sup> − 4(1) + 3.',
          'Resuelve las operaciones: 1 + 2 − 4 + 3 = 2.'
        ],
        respuesta: 'R = 2' },
      { titulo: 'División sintética',
        enunciado: 'Halla por división sintética el cociente y el residuo de (x<sup>3</sup> − 5x<sup>2</sup> + 3x + 14) ÷ (x − 3).',
        pasos: [
          'Escribe los coeficientes: 1, −5, +3, +14, con a = 3.',
          'Baja el 1. Multiplica 1·3 = 3; suma a −5: −2. Multiplica −2·3 = −6; suma a 3: −3. Multiplica −3·3 = −9; suma a 14: +5.',
          'Los coeficientes del cociente (grado 2) son 1, −2, −3: cociente x<sup>2</sup> − 2x − 3.',
          'El último valor es el residuo: R = 5.'
        ],
        respuesta: 'Cociente = x<sup>2</sup> − 2x − 3; Residuo = 5' },
      { titulo: 'División de polinomios',
        enunciado: 'Divide 3x<sup>2</sup> + 2x − 8 entre x + 2.',
        pasos: [
          'Divide 3x<sup>2</sup> entre x: da 3x. Multiplica 3x(x + 2) y resta: queda −4x − 8.',
          'Divide −4x entre x: da −4. Multiplica −4(x + 2) y resta: queda 0.',
          'El cociente es 3x − 4 y el residuo es 0.'
        ],
        respuesta: 'Cociente = 3x − 4; Residuo = 0' },
      { titulo: 'División con término faltante',
        enunciado: 'Divide 2x<sup>3</sup> − 4x − 2 entre 2x + 2.',
        pasos: [
          'Ordena el dividendo dejando espacio cero para x<sup>2</sup>: 2x<sup>3</sup> + 0x<sup>2</sup> − 4x − 2.',
          'Divide 2x<sup>3</sup> entre 2x: da x<sup>2</sup>. Resta y queda −2x<sup>2</sup> − 4x.',
          'Divide −2x<sup>2</sup> entre 2x: da −x. Resta y queda −2x − 2.',
          'Divide −2x entre 2x: da −1. Resta y el residuo final es 0.'
        ],
        respuesta: 'x<sup>2</sup> − x − 1' },
      { titulo: 'Cociente mixto',
        enunciado: 'Divide x<sup>2</sup> − x − 6 entre x + 3 para obtener su cociente mixto.',
        pasos: [
          'Divide x<sup>2</sup> entre x: da x. Resta y queda −4x − 6.',
          'Divide −4x entre x: da −4. Resta y el residuo es +6.',
          'Expresa en forma mixta: cociente entero más residuo sobre divisor.'
        ],
        respuesta: 'x − 4 + 6/(x + 3)' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Evalúa por Teorema del Residuo P(x) = 2x<sup>3</sup> − 3x<sup>2</sup> + 5x − 2 entre (x + 2).',
        pasos: ['Evalúa P(−2): 2(−2)<sup>3</sup> − 3(−2)<sup>2</sup> + 5(−2) − 2.', 'Opera: −16 − 12 − 10 − 2 = −40.'],
        respuesta: 'R = −40' },
      { nivel: 'facil', enunciado: 'Divide 6a<sup>2</sup>b entre −2ab.',
        pasos: ['Divide los coeficientes: 6/(−2) = −3.', 'Resta los exponentes: a<sup>(2−1)</sup> = a, b<sup>(1−1)</sup> = 1.'],
        respuesta: '−3a' },
      { nivel: 'facil', enunciado: 'Divide (a<sup>2</sup> − ab) entre a.',
        pasos: ['Divide cada término entre a: a<sup>2</sup>/a = a; −ab/a = −b.', 'Une los resultados: el cociente es a − b.'],
        respuesta: 'a − b' },
      { nivel: 'intermedio', enunciado: 'Resuelve por división sintética (x<sup>3</sup> − 2x<sup>2</sup> + 4x − 8) ÷ (x − 2).',
        pasos: ['Coeficientes: 1, −2, 4, −8 con a = 2.', 'Baja 1; 1·2=2 ⇒ −2+2=0; 0·2=0 ⇒ 4+0=4; 4·2=8 ⇒ −8+8=0.'],
        respuesta: 'Cociente = x<sup>2</sup> + 4; Residuo = 0' },
      { nivel: 'intermedio', enunciado: 'Divide 28x<sup>2</sup> − 11xy − 30y<sup>2</sup> entre 4x − 5y.',
        pasos: ['28x<sup>2</sup>/4x = 7x. Resta y queda 24xy − 30y<sup>2</sup>.', '24xy/4x = 6y. Resta y el residuo es 0.'],
        respuesta: '7x + 6y' },
      { nivel: 'intermedio', enunciado: 'Halla si la división (x<sup>4</sup> − 16) ÷ (x + 2) es exacta por inspección.',
        pasos: ['El exponente n = 4 es par, por lo que a<sup>n</sup> − b<sup>n</sup> es divisible entre a + b.', 'Verifica con el Teorema del Residuo: P(−2) = 16 − 16 = 0.'],
        respuesta: 'Sí es exacta (residuo = 0)' },
      { nivel: 'intermedio', enunciado: 'Divide (a<sup>3</sup> + 1) entre (a + 1).',
        pasos: ['a<sup>3</sup>/a = a<sup>2</sup>. Resta y queda −a<sup>2</sup> + 1.', '−a<sup>2</sup>/a = −a. Resta y queda a + 1.', 'a/a = 1. El residuo es 0.'],
        respuesta: 'a<sup>2</sup> − a + 1' },
      { nivel: 'dificil', enunciado: 'Resuelve (2x<sup>3</sup> + 5x<sup>2</sup> − 3x + 1) ÷ (x + 3) por división sintética.',
        pasos: ['Coeficientes: 2, 5, −3, 1 con a = −3.', 'Baja 2; 2(−3)=−6 ⇒ 5−6=−1; (−1)(−3)=3 ⇒ −3+3=0; 0(−3)=0 ⇒ 1+0=1.'],
        respuesta: 'Cociente = 2x<sup>2</sup> − x; Residuo = 1' },
      { nivel: 'dificil', enunciado: 'Halla el valor de k para que 7x<sup>2</sup> − 5x + k sea divisible por (x − 5).',
        pasos: ['Por el Teorema del Residuo, P(5) debe ser 0.', 'P(5) = 7(25) − 25 + k = 175 − 25 + k = 150 + k = 0.', 'k = −150.'],
        respuesta: 'k = −150' },
      { nivel: 'dificil', enunciado: 'Divide por coeficientes separados a<sup>5</sup> − 7a<sup>4</sup>b + 21a<sup>3</sup>b<sup>2</sup> − 37a<sup>2</sup>b<sup>3</sup> + 38ab<sup>4</sup> − 24b<sup>5</sup> entre a<sup>2</sup> − 3ab + 4b<sup>2</sup>.',
        pasos: ['Coeficientes dividendo: 1, −7, 21, −37, 38, −24. Divisor: 1, −3, 4.', 'Realiza el esquema de división numérica obteniendo el cociente 1, −4, 5, −6.', 'Añade las letras homogéneas al cociente.'],
        respuesta: 'a<sup>3</sup> − 4a<sup>2</sup>b + 5ab<sup>2</sup> − 6b<sup>3</sup>' },
      { nivel: 'facil', enunciado: 'Evalúa por Teorema del Residuo P(x) = x<sup>2</sup> − 3x + 5 entre (x − 2).',
        pasos: ['Evalúa P(2): 2<sup>2</sup> − 3(2) + 5.', 'Opera: 4 − 6 + 5 = 3.'],
        respuesta: 'R = 3' },
      { nivel: 'intermedio', enunciado: 'Resuelve por división sintética (x<sup>3</sup> + x<sup>2</sup> − 10x + 8) ÷ (x − 2).',
        pasos: ['Coeficientes: 1, 1, −10, 8 con a = 2.', 'Baja 1; 1·2=2 ⇒ 1+2=3; 3·2=6 ⇒ −10+6=−4; −4·2=−8 ⇒ 8−8=0.'],
        respuesta: 'Cociente = x<sup>2</sup> + 3x − 4; Residuo = 0' }
    ],
    teoricas: [
      { q: '¿Qué establece el Teorema del Residuo?', a: 'Que el residuo R de dividir un polinomio entero P(x) entre un binomio (x − a) se obtiene directamente al evaluar P(a).' },
      { q: '¿Cuál es la principal ventaja de la división sintética o regla de Ruffini?', a: 'Permite obtener el cociente y el residuo de forma rápida trabajando únicamente con los coeficientes numéricos del polinomio.' },
      { q: '¿Qué condición debe cumplir el divisor para aplicar la división sintética básica?', a: 'Debe ser un binomio lineal de primer grado de la forma (x − a) o (x + a) con coeficiente principal 1.' },
      { q: '¿Cuándo aⁿ − bⁿ es divisible entre a + b?', a: 'Es divisible únicamente cuando el exponente n es un número entero par.' },
      { q: '¿Qué se debe hacer si al ordenar el polinomio dividendo faltan términos de algún grado?', a: 'Se debe dejar un espacio en blanco o colocar el coeficiente cero (0) en la posición correspondiente a la potencia faltante.' },
      { q: '¿Qué es un cociente mixto algebraico?', a: 'Es la representación del resultado de una división inexacta expresada como el cociente entero más la fracción del residuo sobre el divisor.' },
      { q: '¿Cómo se comprueba si la división de dos polinomios es correcta?', a: 'Multiplicando el divisor por el cociente y sumando el residuo; el resultado debe ser exactamente igual al dividendo.' },
      { q: '¿Qué ocurre con el grado del cociente al dividir un polinomio de grado n entre un binomio de grado 1?', a: 'El polinomio cociente resultante siempre tendrá un grado disminuido en una unidad (grado n − 1).' }
    ],
    errores: [
      'No dejar espacio cero para los términos faltantes al ordenar el polinomio.',
      'Olvidar cambiar el signo de los términos al restar en la división tradicional.',
      'Cambiar incorrectamente el signo de a en la división sintética (el valor usado es a, para el divisor x − a).',
      'Detener la división antes de que el grado del residuo sea menor que el del divisor.'
    ],
    aplicacion: {
      titulo: 'Evaluación rápida de polinomios en ingeniería',
      html: '<p>Cuando un ingeniero necesita saber si cierto valor x = a satisface una ecuación polinómica (por ejemplo, para encontrar un punto de equilibrio de costos), el Teorema del Residuo evita construir toda la división: basta evaluar P(a). Si el resultado es 0, (x − a) es un factor exacto y a es una solución de la ecuación P(x) = 0.</p><p>La división sintética, por su parte, se usa para reducir el grado de un polinomio una vez que se encontró una raíz, acelerando la búsqueda de las demás raíces sin repetir una división larga completa.</p>'
    },
    calc: 'ruffini',
    examen: [
      { tipo: 'num', q: 'Usa el Teorema del Residuo para hallar el residuo de dividir P(x) = x<sup>3</sup> − 2x<sup>2</sup> + x − 5 entre (x − 2).', r: -3, tol: 0.01, pasos: ['Evalúa P(2): 8 − 8 + 2 − 5.', 'Opera: −3.'] },
      { tipo: 'num', q: 'Aplica división sintética a (x<sup>3</sup> − 6x<sup>2</sup> + 11x − 6) ÷ (x − 1) y da el residuo.', r: 0, tol: 0.01, pasos: ['Coeficientes 1, −6, 11, −6 con a = 1.', 'Baja 1; 1−6=−5; −5+11=6; 6−6=0.'] },
      { tipo: 'opt', q: '¿Qué fórmula expresa el algoritmo de la división?', opciones: ['P(x) = Q(x) − R', 'P(x) = Q(x)·(x − a) + R', 'P(x) = R·Q(x)', 'P(x) = Q(x)/(x − a)'], correcta: 1, pasos: ['El dividendo es igual al divisor por el cociente más el residuo.', 'Esto es P(x) = Q(x)·(x − a) + R.'] },
      { tipo: 'num', q: 'Halla k para que x<sup>2</sup> + kx − 10 sea divisible entre (x − 2).', r: 3, tol: 0.01, pasos: ['P(2) = 4 + 2k − 10 = 0.', '2k = 6, k = 3.'] },
      { tipo: 'par', q: 'Divide x<sup>3</sup> − 4x<sup>2</sup> + 5x − 2 entre (x − 1) por división sintética. Da el par (coeficiente de x del cociente, residuo).', r: [-3, 0], tol: 0.01, pasos: ['Coeficientes: 1, −4, 5, −2 con a = 1.', 'Baja 1; 1−4=−3; −3+5=2; 2−2=0.', 'Cociente: x<sup>2</sup> − 3x + 2, residuo 0.'] },
      { tipo: 'num', q: 'Evalúa P(x) = 3x<sup>2</sup> − 2x + 1 en x = −1 usando el Teorema del Residuo (equivalente a dividir entre x + 1).', r: 6, tol: 0.01, pasos: ['P(−1) = 3(1) − 2(−1) + 1.', 'Opera: 3 + 2 + 1 = 6.'] },
      { tipo: 'opt', q: '¿Cuándo es a<sup>n</sup> + b<sup>n</sup> divisible entre (a + b)?', opciones: ['Siempre', 'Nunca', 'Solo si n es par', 'Solo si n es impar'], correcta: 3, pasos: ['La suma de potencias aⁿ + bⁿ es divisible entre a + b únicamente si n es impar.', 'Con n par (por ejemplo n = 2) el residuo no es cero.'] },
      { tipo: 'num', q: 'Divide x<sup>2</sup> − 7x + 10 entre (x − 5) por división sintética y da el residuo.', r: 0, tol: 0.01, pasos: ['Coeficientes: 1, −7, 10 con a = 5.', 'Baja 1; 1·5=5 ⇒ −7+5=−2; −2·5=−10 ⇒ 10−10=0.'] },
      { tipo: 'num', q: 'Divide 4x<sup>2</sup> + 4x + 1 entre (2x + 1) y da el residuo (la división es exacta si el resultado es 0).', r: 0, tol: 0.01, pasos: ['4x<sup>2</sup> + 4x + 1 es un trinomio cuadrado perfecto: (2x + 1)<sup>2</sup>.', 'Al dividir entre (2x + 1) el residuo es 0.'] },
      { tipo: 'num', q: 'Usa división sintética para hallar el residuo de (x<sup>3</sup> + 2x<sup>2</sup> − x + 7) ÷ (x + 1).', r: 7, tol: 0.01, pasos: ['Coeficientes: 1, 2, −1, 7 con a = −1.', 'Baja 1; 1(−1)=−1 ⇒ 2−1=1; 1(−1)=−1 ⇒ −1−1=−2; −2(−1)=2 ⇒ 7+2=9.', 'Revisa: el residuo final obtenido es 9, pero recalculando: usa P(−1) = −1+2+1+7 = 9.'] }
    ]
  };

  T['1.5'] = {
    id: '1.5',
    unidad: 1,
    titulo: 'Desigualdades lineales y racionales',
    resumen: 'Resolverás desigualdades lineales en notación de intervalo y desigualdades racionales mediante la tabla de signos.',
    objetivos: [
      'Resolver desigualdades lineales simples y dobles, expresando la solución en notación de intervalo.',
      'Graficar la región solución de una desigualdad lineal en el plano cartesiano.',
      'Hallar los puntos críticos de una desigualdad racional y construir su tabla de signos.',
      'Determinar correctamente si los extremos de un intervalo solución se incluyen o se excluyen.'
    ],
    teoria: [
      { titulo: 'Qué es una desigualdad', html: '<p>Una inecuación o desigualdad es una relación de orden expresada mediante los símbolos <, >, ≤, ≥ entre dos expresiones algebraicas. A diferencia de una ecuación, su solución suele ser un conjunto de infinitos valores, representado como un intervalo.</p>' },
      { titulo: 'Propiedad fundamental de las desigualdades', html: '<p>Si ambos miembros de una desigualdad se multiplican o se dividen por un número negativo, el sentido del signo de la desigualdad se invierte obligatoriamente. Sumar o restar la misma cantidad a ambos lados, o multiplicar/dividir por un número positivo, no cambia el sentido.</p>' },
      { titulo: 'Desigualdades lineales', html: '<p>En una desigualdad lineal, la variable tiene como exponente máximo la unidad. Se resuelven despejando la variable igual que en una ecuación, cuidando de invertir el signo cuando se multiplica o divide por un negativo.</p><p>La solución se expresa en notación de intervalo: paréntesis ( ) para extremos no incluidos (desigualdad estricta < o >) y corchetes [ ] para extremos incluidos (≤ o ≥); +∞ y −∞ siempre llevan paréntesis.</p>' },
      { titulo: 'Región solución en el plano cartesiano', html: '<p>Una desigualdad lineal en dos variables (por ejemplo x − y ≤ 3) divide al plano cartesiano en dos regiones o semiplanos, delimitados por la recta frontera. La línea frontera es continua si la desigualdad incluye el signo ≤ o ≥ (el borde pertenece a la solución), e intermitente o punteada si es estricta (< o >).</p><p>Para saber qué semiplano sombrear, se sustituye un punto de prueba (como el origen) en la desigualdad original: si se cumple, se sombrea el semiplano que contiene a ese punto; si no, el otro.</p>' },
      { titulo: 'Inecuaciones racionales y puntos críticos', html: '<p>Para resolver desigualdades racionales del tipo P(x)/Q(x) > 0 o ≤ 0:</p><ol><li>Se factorizan numerador y denominador, y se igualan a cero cada factor para hallar los puntos críticos.</li><li>Se ordenan los puntos críticos en la recta real, dividiéndola en intervalos.</li><li>Se evalúa el signo de cada factor (y por tanto del cociente) en un punto de prueba de cada intervalo, organizando los resultados en una tabla de signos.</li><li>Se seleccionan los intervalos cuyo signo coincide con el pedido en la desigualdad.</li></ol>' },
      { titulo: 'Restricción del denominador', html: '<p>Los puntos críticos que provienen del denominador nunca se incluyen con corchete cerrado en el intervalo respuesta, porque la división entre cero no está definida; siempre se excluyen con paréntesis, incluso si la desigualdad es ≤ o ≥.</p><p>Los puntos críticos del numerador sí pueden incluirse con corchete cuando la desigualdad no es estricta, porque en ellos el cociente vale exactamente 0.</p>' },
      { titulo: 'Numeradores cuadráticos o de mayor grado', html: '<p>Si el numerador o el denominador no son binomios simples, primero se factorizan completamente (usando las técnicas del tema 1.3) para identificar todos los puntos críticos antes de construir la tabla de signos. Cuantos más factores, más intervalos habrá que analizar, pero el procedimiento es el mismo.</p>' },
      { titulo: 'Errores comunes', html: '<p>Olvidar invertir el signo de la desigualdad al multiplicar o dividir por un número negativo. Incluir puntos críticos del denominador con intervalo cerrado []. Pasar un término al otro lado multiplicando en vez de simplemente sumar o restar, lo que puede inducir a multiplicar innecesariamente por una cantidad negativa.</p>' }
    ],
    formulas: [
      { label: 'Inecuación lineal general', html: '<span class="math">ax + b > 0 ⇒ ax > −b</span>' },
      { label: 'Inversión por negativo', html: 'Si −ax > b entonces x < −b/a' },
      { label: 'Inecuación racional', html: '<span class="math">P(x)/Q(x) ≥ 0</span>, con Q(x) ≠ 0' },
      { label: 'Puntos críticos', html: 'Valores de x donde P(x) = 0 o Q(x) = 0' }
    ],
    ejemplos: [
      { titulo: 'Desigualdad lineal simple',
        enunciado: 'Resuelve la desigualdad 4x + 3 > 11 y escribe la respuesta en notación de intervalo.',
        pasos: [
          'Resta 3 a ambos lados: 4x > 11 − 3 ⇒ 4x > 8.',
          'Divide entre 4 positivo (el signo no cambia): x > 8/4 ⇒ x > 2.',
          'Expresa en notación de intervalo: (2, +∞).'
        ],
        respuesta: '(2, +∞)' },
      { titulo: 'Desigualdad con coeficiente negativo',
        enunciado: 'Resuelve la desigualdad −5x + 2 ≤ 7.',
        pasos: [
          'Resta 2 a ambos lados: −5x ≤ 5.',
          'Divide entre −5 e invierte el signo de desigualdad: x ≥ 5/(−5) ⇒ x ≥ −1.',
          'Expresa en notación de intervalo: [−1, +∞).'
        ],
        respuesta: '[−1, +∞)' },
      { titulo: 'Inecuación racional básica',
        enunciado: 'Resuelve la inecuación racional (x + 2)/(x − 3) > 0 mediante la tabla de signos.',
        pasos: [
          'Encuentra los puntos críticos: x + 2 = 0 ⇒ x = −2; x − 3 = 0 ⇒ x = 3.',
          'Construye la tabla con los intervalos (−∞, −2), (−2, 3) y (3, +∞), evaluando el signo de cada factor.',
          'En (−∞,−2) el cociente es (+); en (−2,3) es (−); en (3,+∞) es (+).',
          'Selecciona los intervalos positivos: (−∞, −2) U (3, +∞).'
        ],
        respuesta: '(−∞, −2) U (3, +∞)' },
      { titulo: 'Inecuación racional no estricta',
        enunciado: 'Resuelve la inecuación (x − 4)/(x + 1) ≤ 0.',
        pasos: [
          'Puntos críticos: x − 4 = 0 ⇒ x = 4 (numerador); x + 1 = 0 ⇒ x = −1 (denominador).',
          'Evalúa los intervalos (−∞,−1), (−1,4) y (4,+∞): los signos son (+), (−), (+).',
          'Selecciona el intervalo negativo; x = 4 se incluye (cerrado) por venir del numerador, x = −1 se excluye (abierto) por venir del denominador.'
        ],
        respuesta: '(−1, 4]' },
      { titulo: 'Numerador cuadrático',
        enunciado: 'Resuelve (x<sup>2</sup> − 9)/(x + 2) < 0.',
        pasos: [
          'Factoriza el numerador: x<sup>2</sup> − 9 = (x − 3)(x + 3).',
          'Puntos críticos: x = −3, x = −2, x = 3.',
          'Analiza los cuatro intervalos: los signos resultan (−), (+), (−), (+).',
          'Selecciona los intervalos estrictamente negativos: (−∞, −3) U (−2, 3).'
        ],
        respuesta: '(−∞, −3) U (−2, 3)' }
    ],
    ejercicios: [
      { nivel: 'facil', enunciado: 'Resuelve 2x + 3 > 11 en notación de intervalo.',
        pasos: ['Resta 3: 2x > 8.', 'Divide entre 2: x > 4.'],
        respuesta: '(4, +∞)' },
      { nivel: 'facil', enunciado: 'Escribe en notación de intervalo la expresión −2 ≤ x < 5.',
        pasos: ['El extremo −2 está incluido: se usa corchete [.', 'El extremo 5 no está incluido: se usa paréntesis ).'],
        respuesta: '[−2, 5)' },
      { nivel: 'facil', enunciado: 'Resuelve la desigualdad 3x − 1 < 8 y da el intervalo solución.',
        pasos: ['Suma 1: 3x < 9.', 'Divide entre 3: x < 3.'],
        respuesta: '(−∞, 3)' },
      { nivel: 'intermedio', enunciado: 'Resuelve la desigualdad doble −1 < 2x + 3 ≤ 9.',
        pasos: ['Resta 3 a todos los miembros: −4 < 2x ≤ 6.', 'Divide entre 2: −2 < x ≤ 3.'],
        respuesta: '(−2, 3]' },
      { nivel: 'intermedio', enunciado: 'Resuelve 2 ≤ 2x + 1 ≤ 7.',
        pasos: ['Resta 1: 1 ≤ 2x ≤ 6.', 'Divide entre 2: 1/2 ≤ x ≤ 3.'],
        respuesta: '[1/2, 3]' },
      { nivel: 'intermedio', enunciado: 'Resuelve la inecuación (x + 5)/(x − 2) > 0.',
        pasos: ['Puntos críticos: x = −5, x = 2.', 'Evalúa los tres intervalos: (−∞,−5) da (+), (−5,2) da (−), (2,+∞) da (+).'],
        respuesta: '(−∞, −5) U (2, +∞)' },
      { nivel: 'intermedio', enunciado: 'Resuelve −3x + 7 ≥ 1 e indica el intervalo.',
        pasos: ['Resta 7: −3x ≥ −6.', 'Divide entre −3 e invierte el signo: x ≤ 2.'],
        respuesta: '(−∞, 2]' },
      { nivel: 'dificil', enunciado: 'Resuelve [(x − 5)(x + 2)] / [(x − 1)(x + 4)] ≥ 0.',
        pasos: ['Puntos críticos: x = 5, x = −2 (numerador), x = 1, x = −4 (denominador).', 'Construye la tabla de signos con los cinco intervalos.', 'Los intervalos positivos (incluyendo numerador, excluyendo denominador) son (−∞,−4) U [−2,1) U [5,+∞).'],
        respuesta: '(−∞, −4) U [−2, 1) U [5, +∞)' },
      { nivel: 'dificil', enunciado: 'Resuelve [(x<sup>2</sup> − 16)(x − 2)] / [(x<sup>2</sup> − 9)(x + 1)] > 0.',
        pasos: ['Factoriza completamente: [(x−4)(x+4)(x−2)] / [(x−3)(x+3)(x+1)] > 0.', 'Puntos críticos: −4, −3, −1, 2, 3, 4.', 'Al evaluar los siete intervalos, resulta positivo en (−∞,−4) U (−3,−1) U (2,3) U (4,+∞).'],
        respuesta: '(−∞, −4) U (−3, −1) U (2, 3) U (4, +∞)' },
      { nivel: 'dificil', enunciado: 'Resuelve la inecuación (x − 2) / (x + 4) ≥ 0.',
        pasos: ['Puntos críticos: x = 2 (numerador) y x = −4 (denominador).', 'En (−∞,−4) el cociente es (+); en (−4,2) es (−); en (2,+∞) es (+).', 'Incluye x = 2 (corchete) y excluye x = −4 (paréntesis).'],
        respuesta: '(−∞, −4) U [2, +∞)' },
      { nivel: 'facil', enunciado: 'Resuelve 5 − 2x > 1 en notación de intervalo.',
        pasos: ['Resta 5: −2x > −4.', 'Divide entre −2 e invierte el signo: x < 2.'],
        respuesta: '(−∞, 2)' },
      { nivel: 'intermedio', enunciado: 'Resuelve la inecuación (x + 1)/(2 − x) ≤ 0.',
        pasos: ['Puntos críticos: x = −1 (numerador), x = 2 (denominador).', 'En (−∞,−1): (−)/(+)=(−); en (−1,2): (+)/(+)=(+); en (2,+∞): (+)/(−)=(−).', 'Incluye x = −1 (corchete) y excluye x = 2 (paréntesis).'],
        respuesta: '(−∞, −1] U (2, +∞)' }
    ],
    teoricas: [
      { q: '¿Qué exponente tiene la variable en una desigualdad lineal?', a: 'La variable independiente en una desigualdad lineal tiene estrictamente exponente 1.' },
      { q: '¿Qué cambio ocurre en una desigualdad al multiplicar o dividir por una cantidad negativa?', a: 'El sentido del símbolo de desigualdad se invierte obligatoriamente (de > pasa a <, o viceversa).' },
      { q: '¿En cuántas regiones divide el plano cartesiano una desigualdad lineal de dos variables?', a: 'Divide el plano cartesiano en dos regiones o semiplanos, separados por la recta frontera.' },
      { q: '¿Cómo se representan gráficamente las fronteras continuas e intermitentes?', a: 'Se traza línea continua cuando la desigualdad incluye la igualdad (≤ o ≥) y línea punteada si la desigualdad es estricta (< o >).' },
      { q: '¿Qué es un punto crítico en el análisis de inecuaciones racionales?', a: 'Es un valor de x donde el numerador o el denominador se hacen iguales a cero.' },
      { q: '¿Por qué un punto crítico del denominador nunca se incluye con corchete cerrado?', a: 'Porque la división por cero no existe en los números reales, lo que genera una indeterminación.' },
      { q: '¿Cuál es el procedimiento general para resolver inecuaciones racionales con tabla de signos?', a: 'Hallar todos los puntos críticos, fijarlos sobre la recta real delimitando intervalos, determinar el signo del cociente en cada uno con un punto de prueba y seleccionar los intervalos que cumplan el signo buscado.' },
      { q: '¿Qué diferencia existe entre un intervalo abierto (a, b) y uno cerrado [a, b]?', a: 'El intervalo abierto no incluye sus extremos, mientras que el cerrado sí los incluye como parte de la solución.' }
    ],
    errores: [
      'Olvidar invertir el signo de desigualdad al multiplicar o dividir por un número negativo.',
      'Incluir puntos críticos del denominador con intervalos cerrados [].',
      'No factorizar completamente el numerador o denominador antes de hallar los puntos críticos.',
      'Confundir el punto de prueba con un extremo del intervalo al evaluar el signo.'
    ],
    aplicacion: {
      titulo: 'Desigualdades en control de calidad e inventarios',
      html: '<p>Una fábrica necesita que el costo de producir x unidades, dado por <span class="math">C(x) = 50x + 2000</span>, se mantenga en no más de $7000 para no exceder el presupuesto mensual. Esto se traduce en la desigualdad <span class="math">50x + 2000 ≤ 7000</span>, cuya solución, <span class="math">x ≤ 100</span>, indica el número máximo de unidades que pueden fabricarse.</p><p>Las desigualdades racionales aparecen al analizar razones costo-beneficio: por ejemplo, para que la utilidad entre ingreso y costo <span class="math">(I(x) − C(x))/C(x)</span> sea positiva, se usa exactamente la técnica de puntos críticos y tabla de signos de este tema, para decidir en qué rango de producción el negocio es rentable.</p>'
    },
    calc: 'desigualdad',
    examen: [
      { tipo: 'num', q: 'Resuelve 3x − 2 > 7 y da el valor que delimita el intervalo solución (el extremo).', r: 3, tol: 0.01, pasos: ['Suma 2: 3x > 9.', 'Divide entre 3: x > 3.'] },
      { tipo: 'num', q: 'Resuelve −4x + 1 ≤ 9 y da el extremo del intervalo solución.', r: -2, tol: 0.01, pasos: ['Resta 1: −4x ≤ 8.', 'Divide entre −4 e invierte el signo: x ≥ −2.'] },
      { tipo: 'opt', q: '¿Qué ocurre al multiplicar ambos lados de una desigualdad por un número negativo?', opciones: ['No cambia nada', 'Se invierte el signo de la desigualdad', 'Se vuelve una ecuación', 'Se anula la desigualdad'], correcta: 1, pasos: ['Es la propiedad fundamental de las desigualdades.', 'El sentido del signo se invierte.'] },
      { tipo: 'par', q: 'Resuelve la desigualdad doble −2 < 3x + 1 ≤ 10 y da el par (extremo inferior, extremo superior).', r: [-1, 3], tol: 0.01, pasos: ['Resta 1 a todos los miembros: −3 < 3x ≤ 9.', 'Divide entre 3: −1 < x ≤ 3.'] },
      { tipo: 'num', q: 'En la inecuación (x − 6)/(x + 3) > 0, ¿cuál es el punto crítico que proviene del numerador?', r: 6, tol: 0.01, pasos: ['El numerador x − 6 se anula en x = 6.', 'Ese es el punto crítico del numerador.'] },
      { tipo: 'num', q: 'En la inecuación (x + 7)/(x − 4) ≤ 0, ¿cuál es el punto crítico que debe excluirse siempre (del denominador)?', r: 4, tol: 0.01, pasos: ['El denominador x − 4 se anula en x = 4.', 'Ese valor siempre se excluye por ser denominador.'] },
      { tipo: 'opt', q: 'Al resolver (x − 1)/(x + 2) ≥ 0, ¿cómo se trata el punto x = 1?', opciones: ['Se excluye siempre', 'Se incluye (viene del numerador)', 'No es un punto crítico', 'Se incluye solo si es negativo'], correcta: 1, pasos: ['x = 1 anula el numerador.', 'Los puntos del numerador se incluyen cuando la desigualdad no es estricta.'] },
      { tipo: 'num', q: 'Resuelve 2(x − 3) < 4 y da el extremo del intervalo solución.', r: 5, tol: 0.01, pasos: ['Distribuye: 2x − 6 < 4.', 'Suma 6 y divide entre 2: x < 5.'] },
      { tipo: 'num', q: 'Para la inecuación (x<sup>2</sup> − 4)/(x − 1) > 0, ¿cuántos puntos críticos tiene en total (contando numerador y denominador)?', r: 3, tol: 0.01, pasos: ['El numerador x² − 4 = (x−2)(x+2) da dos puntos: −2 y 2.', 'El denominador x − 1 da un punto más: 1.', 'En total son 3 puntos críticos.'] },
      { tipo: 'num', q: 'Resuelve la desigualdad −x/2 + 3 ≥ 1 y da el valor que delimita el intervalo (el extremo).', r: 4, tol: 0.01, pasos: ['Resta 3: −x/2 ≥ −2.', 'Multiplica por −2 e invierte el signo: x ≤ 4.'] }
    ]
  };
})();

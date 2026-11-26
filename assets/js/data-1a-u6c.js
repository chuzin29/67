/* data-1a-u6c.js — Unidad 6 (lección 2): Ecuaciones trigonométricas (1.17).
   Formato compacto: `…` = matemática, "|" separa pasos. */
window.CURSO_1A = window.CURSO_1A || { temas: {} };
(function () {
  var T = window.CURSO_1A.temas;
  function m(s) { return String(s).replace(/`([^`]+)`/g, '<span class="math">$1</span>'); }
  function pasos(s) { return s.split('|').map(m); }
  function tema(id, o) {
    T[id] = {
      id: id, unidad: 3, titulo: o.titulo, resumen: o.resumen, objetivos: o.objetivos,
      teoria: o.teoria.map(function (x) { return { titulo: x[0], html: '<p>' + m(x[1]) + '</p>' }; }),
      formulas: o.formulas.map(function (x) { return { label: x[0], html: x[1] }; }),
      ejemplos: o.ejemplos.map(function (x) { return { titulo: x[0], enunciado: m(x[1]), pasos: pasos(x[2]), respuesta: m(x[3]) }; }),
      ejercicios: o.ejercicios.map(function (x) { return { nivel: { f: 'facil', i: 'intermedio', d: 'dificil' }[x[0]], enunciado: m(x[1]), pasos: pasos(x[2]), respuesta: m(x[3]) }; }),
      teoricas: o.teoricas.map(function (x) { return { q: x[0], a: m(x[1]) }; }),
      errores: o.errores.map(m), aplicacion: { titulo: o.aplicacion[0], html: '<p>' + m(o.aplicacion[1]) + '</p>' }, calc: o.calc,
      /* [pregunta, número, pasos]  o  [pregunta, [4 opciones], correcta, pasos] */
      examen: o.examen.map(function (x) {
        return Array.isArray(x[1]) ? { tipo: 'opt', q: m(x[0]), opciones: x[1].map(m), correcta: x[2], pasos: pasos(x[3]) }
          : { tipo: 'num', q: m(x[0]), r: x[1], tol: 0.01, pasos: pasos(x[2]) };
      })
    };
  }

  tema('1.17', {
    titulo: 'Ecuaciones trigonométricas', calc: 'identidad-trig',
    resumen: 'Resolverás ecuaciones con seno, coseno y tangente usando el ángulo de referencia, la factorización y las identidades, en [0°, 360°).',
    objetivos: ['Resolver sen x = k, cos x = k y tan x = k en [0°, 360°) y en [0, 2π).', 'Resolver ecuaciones por factorización y por identidades pitagóricas.', 'Usar sen 2x = 2 sen x cos x y descartar soluciones imposibles.', 'Escribir la solución general sumando 360°·k.'],
    teoria: [
      ['¿Qué es una ecuación trigonométrica?', 'Es una ecuación donde la incógnita está dentro de una razón trigonométrica, como `sen x = 1/2`. Resolverla es hallar los ángulos que la cumplen. Como las funciones se repiten cada 360°, hay infinitas soluciones; por eso pedimos las que están en el primer giro, <strong>[0°, 360°)</strong>, o en radianes <strong>[0, 2π)</strong>.'],
      ['Ecuación sen x = k', 'Si `|k| ≤ 1`, busca el <strong>ángulo de referencia</strong> α (el agudo con `sen α = |k|`). El seno es positivo en los cuadrantes I y II, así que para `k > 0`: `x = α` y `x = 180° − α`. Es negativo en III y IV, así que para `k < 0`: `x = 180° + α` y `x = 360° − α`. Si `k = 1` o `k = −1` hay una sola solución (90° o 270°). Si `|k| > 1` no hay solución.'],
      ['Ecuación cos x = k', 'El coseno es positivo en I y IV: para `k > 0`, `x = α` y `x = 360° − α`. Es negativo en II y III: para `k < 0`, `x = 180° − α` y `x = 180° + α`. Con `cos x = 1` solo `x = 0°`; con `cos x = −1` solo `x = 180°`.'],
      ['Ecuación tan x = k', 'La tangente es positiva en I y III: para `k > 0`, `x = α` y `x = 180° + α`. Es negativa en II y IV: para `k < 0`, `x = 180° − α` y `x = 360° − α`. Aquí siempre hay dos soluciones, porque la tangente toma todos los valores reales.'],
      ['Resolver por factorización', 'Pasa todo al lado izquierdo para que el derecho sea 0, saca factor común o factoriza, y usa que <strong>si un producto es 0, algún factor es 0</strong>. Por ejemplo `2sen²x − sen x = 0` se escribe `sen x (2 sen x − 1) = 0`. ¡Nunca dividas entre `sen x`: perderías las soluciones donde vale 0!'],
      ['Resolver con identidades', 'Si la ecuación mezcla seno y coseno, usa `sen²x + cos²x = 1` para dejar una sola razón. Por ejemplo, cambia `cos²x` por `1 − sen²x`: queda una <strong>ecuación cuadrática en sen x</strong>. Resuélvela con factorización o fórmula general y luego resuelve cada `sen x = k`.'],
      ['Ángulo doble', 'La identidad `sen 2x = 2 sen x cos x` convierte el ángulo doble en un producto de razones de x. Entonces `sen 2x = cos x` se vuelve `2 sen x cos x − cos x = 0`, o sea `cos x (2 sen x − 1) = 0`. Si en cambio resuelves `sen 2x = k` directamente, ojo: 2x recorre [0°, 720°), así que debes hallar los ángulos 2x en dos vueltas y luego dividir entre 2.'],
      ['Soluciones extrañas y solución general', 'Después de resolver una cuadrática en una razón, <strong>descarta</strong> los valores fuera de [−1, 1] (por ejemplo `cos x = 2` es imposible). Comprueba también que no hagas cero un denominador (como `tan x` en 90°). Para dar todas las soluciones, suma vueltas completas: `x = 30° + 360°k` con k entero (en radianes, `π/6 + 2πk`). Para la tangente basta sumar `180°k`.']
    ],
    formulas: [
      ['Seno igual a k', 'sen x = k  →  x = α, 180° − α (k > 0);  180° + α, 360° − α (k < 0)'],
      ['Coseno igual a k', 'cos x = k  →  x = α, 360° − α (k > 0);  180° − α, 180° + α (k < 0)'],
      ['Tangente igual a k', 'tan x = k  →  x = α, 180° + α (k > 0);  180° − α, 360° − α (k < 0)'],
      ['Identidad pitagórica', 'sen²x + cos²x = 1'],
      ['Seno del ángulo doble', 'sen 2x = 2 sen x cos x'],
      ['Producto nulo', 'A · B = 0  ⇒  A = 0  o  B = 0'],
      ['Solución general', 'x = x₀ + 360°·k  (k entero);  en radianes x₀ + 2πk'],
      ['Valores útiles', 'sen 30° = 1/2, sen 45° = √2/2, sen 60° = √3/2; cos es el contrario']
    ],
    ejemplos: [
      ['Ecuación básica con seno', 'Resuelve `sen x = 1/2` en [0°, 360°).', 'Ángulo de referencia: `sen 30° = 1/2`, así que `α = 30°`.|El seno es positivo en los cuadrantes I y II.|`x = 30°` y `x = 180° − 30° = 150°`.|Comprobación: `sen 150° = 1/2`.', '`x = 30°` y `x = 150°`'],
      ['Ecuación con coseno', 'Resuelve `2cos x − √3 = 0` en [0°, 360°).', 'Despeja: `2cos x = √3`, luego `cos x = √3/2`.|Referencia: `α = 30°`.|El coseno positivo está en I y IV: `x = 30°` y `x = 360° − 30° = 330°`.', '`x = 30°` y `x = 330°`'],
      ['Por factorización', 'Resuelve `2sen²x − sen x = 0` en [0°, 360°).', 'Factor común: `sen x (2 sen x − 1) = 0`.|Primer factor: `sen x = 0`, así que `x = 0°` y `x = 180°`.|Segundo factor: `2 sen x − 1 = 0`, o sea `sen x = 1/2`, así que `x = 30°` y `x = 150°`.', '`x = 0°, 30°, 150°, 180°`'],
      ['Con identidad pitagórica', 'Resuelve `2cos²x + sen x − 1 = 0` en [0°, 360°).', 'Cambia `cos²x = 1 − sen²x`: `2(1 − sen²x) + sen x − 1 = 0`.|Simplifica: `−2sen²x + sen x + 1 = 0`, es decir `2sen²x − sen x − 1 = 0`.|Factoriza: `(2 sen x + 1)(sen x − 1) = 0`, así que `sen x = −1/2` o `sen x = 1`.|`sen x = −1/2` da `x = 210°` y `x = 330°`; `sen x = 1` da `x = 90°`.', '`x = 90°, 210°, 330°`'],
      ['Con ángulo doble', 'Resuelve `sen 2x = cos x` en [0°, 360°).', 'Sustituye `sen 2x = 2 sen x cos x`: `2 sen x cos x − cos x = 0`.|Factor común: `cos x (2 sen x − 1) = 0`.|`cos x = 0` da `x = 90°` y `x = 270°`.|`sen x = 1/2` da `x = 30°` y `x = 150°`.', '`x = 30°, 90°, 150°, 270°`']
    ],
    ejercicios: [
      ['f', 'Resuelve `sen x = √3/2` en [0°, 360°).', 'Referencia `α = 60°`.|Seno positivo: cuadrantes I y II.|`x = 60°` y `180° − 60° = 120°`.', '`x = 60°, 120°`'],
      ['f', 'Resuelve `cos x = 1/2` en [0°, 360°).', 'Referencia `α = 60°`.|Coseno positivo: I y IV.|`x = 60°` y `360° − 60° = 300°`.', '`x = 60°, 300°`'],
      ['f', 'Resuelve `tan x = 1` en [0°, 360°).', 'Referencia `α = 45°`.|Tangente positiva: I y III.|`x = 45°` y `180° + 45° = 225°`.', '`x = 45°, 225°`'],
      ['f', 'Resuelve `2 sen x = −1` en [0°, 360°).', 'Despeja: `sen x = −1/2`; referencia `α = 30°`.|Seno negativo: III y IV.|`x = 180° + 30° = 210°` y `x = 360° − 30° = 330°`.', '`x = 210°, 330°`'],
      ['i', 'Resuelve `tan x = −√3` en [0°, 360°).', 'Referencia `α = 60°`.|Tangente negativa: II y IV.|`x = 180° − 60° = 120°` y `x = 360° − 60° = 300°`.', '`x = 120°, 300°`'],
      ['i', 'Resuelve `cos x = −√2/2` en [0°, 360°).', 'Referencia `α = 45°`.|Coseno negativo: II y III.|`x = 180° − 45° = 135°` y `x = 180° + 45° = 225°`.', '`x = 135°, 225°`'],
      ['i', 'Resuelve `2cos²x − cos x = 0` en [0°, 360°).', 'Factor común: `cos x (2 cos x − 1) = 0`.|`cos x = 0` da `90°` y `270°`.|`cos x = 1/2` da `60°` y `300°`.', '`x = 60°, 90°, 270°, 300°`'],
      ['i', 'Resuelve `sen²x = 1/4` en [0°, 360°).', 'Raíz: `sen x = 1/2` o `sen x = −1/2`.|Para `1/2`: `30°` y `150°`.|Para `−1/2`: `210°` y `330°`.', '`x = 30°, 150°, 210°, 330°`'],
      ['i', 'Resuelve `tan²x = 3` en [0°, 360°).', 'Raíz: `tan x = √3` o `tan x = −√3`.|Para `√3`: `60°` y `240°`.|Para `−√3`: `120°` y `300°`.', '`x = 60°, 120°, 240°, 300°`'],
      ['d', 'Resuelve `2sen²x + 3cos x = 0` en [0°, 360°). Descarta las soluciones extrañas.', 'Cambia `sen²x = 1 − cos²x`: `2 − 2cos²x + 3cos x = 0`.|Ordena: `2cos²x − 3cos x − 2 = 0`, que factoriza como `(2 cos x + 1)(cos x − 2) = 0`.|`cos x = 2` es imposible (descartar). Queda `cos x = −1/2`.|`x = 180° − 60° = 120°` y `x = 180° + 60° = 240°`.', '`x = 120°, 240°`'],
      ['d', 'Resuelve `tan x = 2 sen x` en [0°, 360°).', 'Escribe `tan x = sen x / cos x` (con `cos x ≠ 0`) y pasa todo a un lado: `sen x / cos x − 2 sen x = 0`.|Factor común: `sen x (1/cos x − 2) = 0`.|`sen x = 0` da `0°` y `180°`. Y `1/cos x = 2` da `cos x = 1/2`, o sea `60°` y `300°`.|Ninguna solución anula `cos x`, así que ninguna es extraña.', '`x = 0°, 60°, 180°, 300°`'],
      ['d', 'Resuelve `sen 2x = √3/2` en [0°, 360°).', 'Si x está en [0°, 360°), entonces 2x está en [0°, 720°): dos vueltas.|`sen 2x = √3/2` da `2x = 60°, 120°` en la primera vuelta y `2x = 420°, 480°` en la segunda.|Divide entre 2: `x = 30°, 60°, 210°, 240°`.', '`x = 30°, 60°, 210°, 240°`']
    ],
    teoricas: [
      ['¿Por qué una ecuación como sen x = 1/2 tiene dos soluciones en [0°, 360°)?', 'Porque el seno vale lo mismo en dos cuadrantes (I y II): dos ángulos distintos tienen la misma altura en la circunferencia unitaria.'],
      ['¿Cuántas soluciones tiene sen x = 1 en [0°, 360°)?', 'Una sola: `x = 90°`, porque el punto más alto de la circunferencia se toca una vez.'],
      ['¿Qué pasa con sen x = 2?', 'No tiene solución real, pues el seno siempre está entre −1 y 1.'],
      ['¿Por qué no se debe dividir entre sen x en 2sen²x = sen x?', 'Porque se pierde la solución `sen x = 0` (0° y 180°). Hay que pasar todo a un lado y factorizar.'],
      ['¿Qué es una solución extraña?', 'Un valor que sale del procedimiento pero no cumple la ecuación original (o no existe), como `cos x = 2`. Se descarta al verificar.'],
      ['¿Cómo se escribe la solución general de sen x = 1/2?', '`x = 30° + 360°k` y `x = 150° + 360°k`, con k entero.'],
      ['¿Por qué en tan x = k basta sumar 180°k?', 'Porque la tangente se repite cada 180°, no cada 360°.'],
      ['¿Qué ángulos debes pedir para sen 2x = k en [0°, 360°)?', 'Los de 2x en [0°, 720°), es decir dos vueltas, y luego dividir cada uno entre 2.']
    ],
    errores: ['Dar solo el ángulo de la calculadora y olvidar el segundo del otro cuadrante.', 'Dividir entre sen x o cos x y perder soluciones; hay que factorizar.', 'No descartar valores como `cos x = 2` o `sen x = −3`, que son imposibles.', 'En sen 2x = k, olvidar la segunda vuelta de 2x y dar solo la mitad de las soluciones.'],
    aplicacion: ['La noria', 'La altura de un asiento de una noria es `h = 10 + 8 sen θ` (en metros). ¿Cuándo está a 14 m? Resuelves `10 + 8 sen θ = 14`, o sea `sen θ = 1/2`, y el asiento pasa por esa altura a los 30° y a los 150° de cada vuelta. Las mareas, el sonido y la corriente alterna se resuelven igual.'],
    examen: [
      ['Halla la menor solución positiva (en grados) de `2 sen x = 1`.', 30, 'Despeja `sen x = 1/2`.|`α = 30°` y la otra es 150°.|La menor es 30.'],
      ['Suma (en grados) las soluciones de `sen x = √3/2` en [0°, 360°).', 180, 'Referencia 60°.|Soluciones: 60° y 120°.|`60 + 120 = 180`.'],
      ['¿Cuántas soluciones tiene `2sen²x − sen x = 0` en [0°, 360°)?', 4, 'Factoriza: `sen x (2 sen x − 1) = 0`.|`sen x = 0`: 0° y 180°; `sen x = 1/2`: 30° y 150°.|Son 4.'],
      ['Suma (en grados) las soluciones de `cos x = −1/2` en [0°, 360°).', 360, 'Referencia 60°; coseno negativo en II y III.|Soluciones: 120° y 240°.|`120 + 240 = 360`.'],
      ['Halla la mayor solución (en grados) de `tan x = −1` en [0°, 360°).', 315, 'Referencia 45°; tangente negativa en II y IV.|Soluciones: 135° y 315°.|La mayor es 315.'],
      ['¿Cuántas soluciones tiene `sen 2x = 1` en [0°, 360°)?', 2, '2x está en [0°, 720°).|`2x = 90°` o `2x = 450°`.|`x = 45°` y `x = 225°`: son 2.'],
      ['Suma (en grados) las soluciones de `2cos²x + sen x − 1 = 0` en [0°, 360°).', 630, 'Con `cos²x = 1 − sen²x`: `(2 sen x + 1)(sen x − 1) = 0`.|`sen x = −1/2`: 210° y 330°; `sen x = 1`: 90°.|`90 + 210 + 330 = 630`.'],
      ['Halla la mayor solución (en grados) de `tan x = √3` en [0°, 360°).', 240, 'Referencia 60°; tangente positiva en I y III.|Soluciones: 60° y 240°.|La mayor es 240.'],
      ['¿Cuál es el conjunto de soluciones de `sen x = −2`?', ['`30°` y `150°`', '`210°` y `330°`', 'No tiene solución', 'Infinitas en [0°, 360°)'], 2, 'El seno está entre −1 y 1.|−2 queda fuera de ese rango, así que no hay solución.'],
      ['Soluciones de `cos x = 1/2` en [0, 2π) (radianes).', ['`π/6` y `11π/6`', '`π/3` y `5π/3`', '`π/3` y `2π/3`', '`2π/3` y `4π/3`'], 1, '`cos x = 1/2` da 60° y 300° (I y IV).|En radianes: `π/3` y `5π/3`.']
    ]
  });

})();

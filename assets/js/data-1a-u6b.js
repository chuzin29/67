/* data-1a-u6b.js — Unidad 5 (programa): Razones trigonométricas de ángulos no agudos (1.16).
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
      teoricas: o.teoricas.map(function (x) { return { q: m(x[0]), a: m(x[1]) }; }),
      errores: o.errores.map(m), aplicacion: { titulo: o.aplicacion[0], html: '<p>' + m(o.aplicacion[1]) + '</p>' }, calc: o.calc,
      examen: o.examen.map(function (x) {
        return Array.isArray(x[1]) ? { tipo: 'opt', q: m(x[0]), opciones: x[1].map(m), correcta: x[2], pasos: pasos(x[3]) }
          : { tipo: 'num', q: m(x[0]), r: x[1], tol: 0.01, pasos: pasos(x[2]) };
      })
    };
  }

  tema('1.16', {
    titulo: 'Razones trigonométricas de ángulos no agudos', calc: 'trig-rectangulo',
    resumen: 'Extenderás seno, coseno y tangente a cualquier ángulo con la circunferencia unitaria, los cuadrantes y el ángulo de referencia.',
    objetivos: ['Ubicar un ángulo en posición estándar y decir su cuadrante.', 'Hallar el ángulo de referencia y el signo de cada razón.', 'Calcular valores exactos de 0°, 90°, 120°, 135°, 150°, 180°, 210° … 330°.', 'Hallar ángulos coterminales y pasar entre grados y radianes.'],
    teoria: [
      ['Ángulo en posición estándar', 'Un ángulo está en <strong>posición estándar</strong> si su vértice está en el origen y su lado inicial va sobre el eje x positivo. Se mide en sentido contrario a las agujas del reloj (positivo) o a favor (negativo). El lado final indica en qué <strong>cuadrante</strong> cae: I (0° a 90°), II (90° a 180°), III (180° a 270°) y IV (270° a 360°).'],
      ['Circunferencia unitaria', 'Es la circunferencia de radio 1 con centro en el origen. Si el lado final del ángulo `θ` corta la circunferencia en el punto `(x, y)`, entonces `cos θ = x`, `sen θ = y` y `tan θ = y/x` (con `x ≠ 0`). Así las razones sirven para cualquier ángulo, no solo para los agudos.'],
      ['Signos por cuadrante', 'Como `cos θ` es la coordenada x y `sen θ` la y, el signo depende del cuadrante. En I todas son positivas; en II solo el seno; en III solo la tangente; en IV solo el coseno. Regla para recordar: <strong>Todas, Seno, Tangente, Coseno</strong> (I, II, III, IV).'],
      ['Ángulo de referencia', 'El <strong>ángulo de referencia</strong> `α` es el ángulo agudo entre el lado final y el eje x. En II: `α = 180° − θ`. En III: `α = θ − 180°`. En IV: `α = 360° − θ`. Entonces `|sen θ| = sen α`, `|cos θ| = cos α` y `|tan θ| = tan α`; el signo lo pone el cuadrante.'],
      ['Valores exactos de los ángulos notables', 'Con referencia 30°, 45° o 60° usamos `sen 30° = 1/2`, `sen 45° = √2/2`, `sen 60° = √3/2` (y los cosenos al revés), y luego ponemos el signo. Ejemplo: `sen 120°`: referencia 60°, cuadrante II (seno +), así `sen 120° = √3/2`.'],
      ['Ángulos de los ejes', 'En 0°, 90°, 180°, 270° el punto está sobre un eje: `(1, 0)`, `(0, 1)`, `(−1, 0)`, `(0, −1)`. Por eso `sen 0° = 0`, `cos 0° = 1`; `sen 90° = 1`, `cos 90° = 0`; `sen 180° = 0`, `cos 180° = −1`; `sen 270° = −1`, `cos 270° = 0`. La tangente no existe en 90° ni en 270° (división entre 0).'],
      ['Ángulos coterminales', 'Dos ángulos son <strong>coterminales</strong> si tienen el mismo lado final: se diferencian en un múltiplo de 360°. Es decir, `θ` y `θ + 360°·k` (k entero) tienen las mismas razones. Para reducir un ángulo grande, resta 360° las veces necesarias.'],
      ['Radianes básicos', 'Un <strong>radián</strong> es el ángulo cuyo arco mide lo mismo que el radio. Una vuelta completa mide `2π` rad, así que `180° = π` rad. Para convertir: grados a radianes multiplica por `π/180`; radianes a grados multiplica por `180/π`. Ejemplos: `30° = π/6`, `45° = π/4`, `60° = π/3`, `90° = π/2`.']
    ],
    formulas: [
      ['Circunferencia unitaria', 'cos θ = x, &nbsp; sen θ = y, &nbsp; tan θ = y / x'],
      ['Referencia en II', 'α = 180° − θ'],
      ['Referencia en III', 'α = θ − 180°'],
      ['Referencia en IV', 'α = 360° − θ'],
      ['Signos (TSTC)', 'I: todas + · II: sen + · III: tan + · IV: cos +'],
      ['Coterminales', 'θ y θ + 360°·k tienen las mismas razones'],
      ['Grados a radianes', 'rad = grados · π / 180']
    ],
    ejemplos: [
      ['Cuadrante y referencia de 150°', 'Halla el cuadrante, el ángulo de referencia y `sen 150°`.', '150° está entre 90° y 180°: cuadrante II.|Referencia: `180° − 150° = 30°`.|En II el seno es positivo: `sen 150° = sen 30° = 1/2`.', 'II, referencia 30°, `sen 150° = 1/2`'],
      ['Coseno de 225°', 'Calcula `cos 225°`.', '225° está en el cuadrante III.|Referencia: `225° − 180° = 45°`.|En III el coseno es negativo: `cos 225° = −cos 45° = −√2/2`.', '`−√2/2 ≈ −0.707`'],
      ['Tangente de 300°', 'Calcula `tan 300°`.', 'Cuadrante IV; referencia `360° − 300° = 60°`.|`tan 60° = √3`.|En IV la tangente es negativa.', '`tan 300° = −√3 ≈ −1.732`'],
      ['Ángulo coterminal', 'Reduce 780° a un ángulo entre 0° y 360° y calcula su seno.', '`780° − 360° = 420°`, todavía mayor; `420° − 360° = 60°`.|Son coterminales: `sen 780° = sen 60°`.', '60°, `sen 780° = √3/2 ≈ 0.866`'],
      ['Grados y radianes', 'Convierte 135° a radianes.', 'Multiplica por `π/180`: `135π/180`.|Simplifica dividiendo entre 45: `3π/4`.', '`3π/4`'],
      ['Hallar coseno con el cuadrante', 'Si `sen θ = 3/5` y `θ` está en el cuadrante II, halla `cos θ`.', 'Usa `sen² θ + cos² θ = 1`: `cos² θ = 1 − 9/25 = 16/25`.|Entonces `cos θ = ±4/5`.|En II el coseno es negativo.', '`cos θ = −4/5`']
    ],
    ejercicios: [
      ['f', '¿En qué cuadrante está 200°?', 'Compara con 180° y 270°.|200° está entre ambos.', 'Cuadrante III'],
      ['f', 'Halla el ángulo de referencia de 120°.', 'Está en el cuadrante II.|`180° − 120° = 60°`.', '60°'],
      ['f', 'Calcula `sen 90°` y `cos 180°`.', 'Punto en 90°: `(0, 1)`.|Punto en 180°: `(−1, 0)`.', '`sen 90° = 1`, `cos 180° = −1`'],
      ['f', 'Calcula `cos 135°`.', 'Cuadrante II, referencia 45°.|El coseno es negativo en II.', '`−√2/2 ≈ −0.707`'],
      ['i', 'Calcula `tan 225°`.', 'Cuadrante III, referencia 45°.|`tan 45° = 1` y la tangente es positiva en III.', '1'],
      ['i', 'Calcula `cos 240°`.', 'Cuadrante III, referencia `240° − 180° = 60°`.|`cos 60° = 1/2` y el coseno es negativo en III.', '`−1/2`'],
      ['i', 'Convierte `5π/6` rad a grados.', 'Multiplica por `180/π`.|`5·180/6 = 150`.', '150°'],
      ['i', 'Halla el ángulo entre 0° y 360° coterminal con −60°.', 'Suma 360°.|`−60° + 360° = 300°`.', '300°'],
      ['d', 'Si `sen θ = −5/13` y `cos θ > 0`, halla `cos θ` y `tan θ`.', 'Seno negativo y coseno positivo: cuadrante IV.|`cos² θ = 1 − 25/169 = 144/169`, así `cos θ = 12/13`.|`tan θ = (−5/13)/(12/13) = −5/12`.', '`cos θ = 12/13`, `tan θ = −5/12`'],
      ['d', 'Calcula `sen 150°·cos 300° + tan 225°`.', '`sen 150° = 1/2`.|`cos 300° = 1/2`.|`tan 225° = 1`.|`1/2·1/2 + 1 = 1/4 + 1`.', '`5/4 = 1.25`'],
      ['d', 'Calcula `sen 840°` (reduce primero el ángulo).', '`840° − 720° = 120°`.|120° está en II con referencia 60°.|El seno es positivo en II.', '`√3/2 ≈ 0.866`']
    ],
    teoricas: [
      ['¿Qué significa que un ángulo esté en posición estándar?', 'Que su vértice está en el origen y su lado inicial sobre el eje x positivo.'],
      ['¿Por qué el seno es negativo en los cuadrantes III y IV?', 'Porque el seno es la coordenada y, y en esos cuadrantes y es negativa.'],
      ['¿Qué es el ángulo de referencia?', 'El ángulo agudo que forma el lado final con el eje x.'],
      ['¿Por qué no existe `tan 90°`?', 'Porque `tan θ = y/x` y en 90° se tiene `x = 0`, división entre cero.'],
      ['¿Qué tienen en común dos ángulos coterminales?', 'El mismo lado final y, por tanto, las mismas razones trigonométricas.'],
      ['¿Cuántos radianes mide una vuelta completa?', '`2π` rad, equivalente a 360°.'],
      ['¿Entre qué valores puede estar `sen θ` o `cos θ`?', 'Entre −1 y 1, porque son coordenadas de un punto de la circunferencia de radio 1.'],
      ['¿Cuándo es positiva la tangente?', 'En los cuadrantes I y III, donde x e y tienen el mismo signo.']
    ],
    errores: ['Olvidar el signo del cuadrante y dejar siempre el valor del ángulo agudo.', 'Calcular mal el ángulo de referencia (restar al revés, por ejemplo `150° − 180°`).', 'Escribir `tan 90°` o `tan 270°` como un número: no existen.', 'Convertir grados a radianes multiplicando por `180/π` en lugar de `π/180`.'],
    aplicacion: ['Ruedas, relojes y ondas', 'Cualquier giro (una rueda, las manecillas de un reloj, un péndulo) se describe con ángulos mayores de 90°. La circunferencia unitaria permite calcular la posición del punto que gira y es la base de las ondas de sonido y de la corriente eléctrica.'],
    examen: [
      ['Calcula `sen 150°`.', 0.5, 'Cuadrante II, referencia 30°.|`sen 30° = 0.5`, positivo en II.'],
      ['Calcula `cos 120°`.', -0.5, 'Cuadrante II, referencia 60°.|`cos 60° = 0.5` y en II el coseno es negativo.'],
      ['Calcula `tan 135°`.', -1, 'Referencia 45° en el cuadrante II.|`tan 45° = 1`, negativa en II.'],
      ['Calcula `sen 240°` con dos decimales.', -0.87, 'Referencia 60° en el cuadrante III.|`sen 60° ≈ 0.866`, negativo en III.'],
      ['Halla el ángulo de referencia de 330°.', 30, 'Cuadrante IV.|`360° − 330° = 30°`.'],
      ['Halla el ángulo entre 0° y 360° coterminal con −30°.', 330, 'Suma 360°.|`−30° + 360° = 330°`.'],
      ['Calcula `cos 90° + sen 270°`.', -1, '`cos 90° = 0`.|`sen 270° = −1`.|Suma: −1.'],
      ['Convierte 300° a radianes (con dos decimales).', 5.24, '`300π/180 = 5π/3`.|`5π/3 ≈ 5.236`.'],
      ['¿En qué cuadrante la tangente es positiva y el seno negativo?', ['I', 'II', 'III', 'IV'], 2, 'Seno negativo: III o IV.|Tangente positiva: I o III.|Coinciden en III.'],
      ['¿En qué cuadrante está 315° y qué signo tiene su coseno?', ['IV, positivo', 'IV, negativo', 'III, positivo', 'III, negativo'], 0, '315° está entre 270° y 360°: cuadrante IV.|En IV el coseno es positivo.']
    ]
  });

})();

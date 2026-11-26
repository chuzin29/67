/* data-1a-u6e.js — Tema 1.19 Muestreo, estadísticos y parámetros.
   Formato compacto: `…` = matemática, "|" separa pasos. */
window.CURSO_1A = window.CURSO_1A || { temas: {} };
(function () {
  var T = window.CURSO_1A.temas;
  function m(s) { return String(s).replace(/`([^`]+)`/g, '<span class="math">$1</span>'); }
  function pasos(s) { return s.split('|').map(m); }
  function tema(id, o) {
    T[id] = {
      id: id, unidad: 5, titulo: o.titulo, resumen: o.resumen, objetivos: o.objetivos,
      teoria: o.teoria.map(function (x) { return { titulo: x[0], html: '<p>' + m(x[1]) + '</p>' }; }),
      formulas: o.formulas.map(function (x) { return { label: x[0], html: x[1] }; }),
      ejemplos: o.ejemplos.map(function (x) { return { titulo: x[0], enunciado: m(x[1]), pasos: pasos(x[2]), respuesta: m(x[3]) }; }),
      ejercicios: o.ejercicios.map(function (x) { return { nivel: { f: 'facil', i: 'intermedio', d: 'dificil' }[x[0]], enunciado: m(x[1]), pasos: pasos(x[2]), respuesta: m(x[3]) }; }),
      teoricas: o.teoricas.map(function (x) { return { q: x[0], a: m(x[1]) }; }),
      errores: o.errores.map(m), aplicacion: { titulo: o.aplicacion[0], html: '<p>' + m(o.aplicacion[1]) + '</p>' }, calc: o.calc,
      examen: o.examen.map(function (x) {
        return Array.isArray(x[1]) ? { tipo: 'opt', q: m(x[0]), opciones: x[1].map(m), correcta: x[2], pasos: pasos(x[3]) }
          : { tipo: 'num', q: m(x[0]), r: x[1], tol: 0.01, pasos: pasos(x[2]) };
      })
    };
  }

  tema('1.19', {
    titulo: 'Muestreo, estadísticos y parámetros', calc: 'estadistica',
    resumen: 'Distinguirás población y muestra, parámetro y estadístico; aplicarás muestreo aleatorio, sistemático, estratificado y por conglomerados, y detectarás sesgos.',
    objetivos: ['Distinguir población, muestra, parámetro y estadístico en un estudio.', 'Clasificar variables cualitativas y cuantitativas y organizarlas en tablas de frecuencias.', 'Seleccionar muestras con los métodos aleatorio simple, sistemático, estratificado y por conglomerados.', 'Reconocer fuentes de sesgo y calcular tamaños de muestra por estrato y el error de muestreo.'],
    teoria: [
      ['Población y muestra', 'La <strong>población</strong> es el conjunto completo de elementos que se quiere estudiar, de tamaño `N`. La <strong>muestra</strong> es una parte de la población, de tamaño `n`, que se observa para sacar conclusiones. Casi siempre `n < N`, porque estudiar a todos cuesta tiempo y dinero.'],
      ['Parámetro y estadístico', 'Un <strong>parámetro</strong> es un número que describe a toda la población (por ejemplo la media poblacional μ) y casi siempre es desconocido. Un <strong>estadístico</strong> es un número calculado con los datos de la muestra (por ejemplo la media muestral) y sirve para estimar el parámetro. El parámetro es fijo; el estadístico cambia de una muestra a otra.'],
      ['Variables', 'Una variable es la característica que se observa. Es <strong>cualitativa</strong> si sus valores son categorías (color, sexo, municipio) y <strong>cuantitativa</strong> si son números (edad, estatura). La cuantitativa es <em>discreta</em> si cuenta (número de hermanos) y <em>continua</em> si mide (estatura).'],
      ['Tabla de frecuencias', 'Organiza los datos de una variable: la frecuencia absoluta `f` es cuántas veces aparece cada valor, la relativa `fr = f/n` es la proporción y el porcentaje es `fr · 100`. La suma de las absolutas es `n` y la de las relativas es 1.'],
      ['Muestreo aleatorio simple', 'Todos los elementos tienen la misma probabilidad de ser elegidos. Se numera la población de 1 a `N` y se eligen `n` números con una tabla de números aleatorios, calculadora o sorteo. Se descartan los números fuera de rango y los repetidos.'],
      ['Muestreo sistemático', 'Se calcula el intervalo `k = N/n`. Se elige al azar un inicio entre 1 y `k` y luego se toma un elemento cada `k` lugares: `a, a + k, a + 2k, …`. Es rápido, pero puede fallar si la lista tiene un patrón que se repite cada `k`.'],
      ['Muestreo estratificado', 'La población se divide en grupos homogéneos llamados <strong>estratos</strong> (por grado, zona, sexo) y de cada uno se toma una muestra. En la asignación proporcional, el estrato `i` aporta `nᵢ = n · Nᵢ/N` elementos, así cada grupo queda representado en su justa medida.'],
      ['Muestreo por conglomerados', 'La población se divide en grupos naturales que se parecen entre sí (aulas, cantones, cuadras). Se sortean algunos conglomerados completos y se estudian todos sus elementos. Es barato cuando la población está dispersa, pero menos preciso si los conglomerados son distintos entre sí.'],
      ['Sesgo y tamaño de muestra', 'Hay <strong>sesgo</strong> cuando el método favorece a ciertos elementos y la muestra no representa a la población: encuestar solo a voluntarios, a quienes están cerca o a quienes tienen teléfono. Una muestra grande no corrige un mal método; una buena muestra es aleatoria y suficientemente grande. La diferencia `error = estadístico − parámetro` mide cuánto se equivoca la muestra.']
    ],
    formulas: [
      ['Fracción de muestreo', '<span class="math">f = n/N</span>'],
      ['Intervalo de muestreo sistemático', '<span class="math">k = N/n</span>'],
      ['Elementos elegidos en el sistemático', '<span class="math">a, a + k, a + 2k, …, a + (n − 1)k</span>'],
      ['Asignación proporcional', '<span class="math">nᵢ = n · Nᵢ/N</span>'],
      ['Error de muestreo', '<span class="math">error = estadístico − parámetro</span>'],
      ['Frecuencia relativa', '<span class="math">fr = f/n, porcentaje = fr · 100</span>'],
      ['Proporción muestral', '<span class="math">p̂ = x/n (x = casos favorables)</span>']
    ],
    ejemplos: [
      ['Parámetro y estadístico', 'En un colegio con 800 estudiantes se sortean 40 y 12 dicen que viajan en bus. Halla la proporción muestral e identifica población, muestra y estadístico.', 'Población: los 800 estudiantes (`N = 800`). Muestra: los 40 sorteados (`n = 40`).|Estadístico: proporción muestral `p̂ = 12/40 = 0,3`.|El parámetro sería la proporción de los 800 que viajan en bus; es desconocido y `0,3` lo estima.', '`p̂ = 0,3` (30 %)'],
      ['Muestreo sistemático', 'Una lista tiene `N = 360` clientes y se quiere una muestra de `n = 30` con inicio aleatorio 5. ¿Cuáles son los primeros cuatro elegidos?', 'Intervalo: `k = 360/30 = 12`.|Inicio: `a = 5`.|Se suman 12 cada vez: `5, 17, 29, 41`.', '`5, 17, 29, 41` (k = 12)'],
      ['Asignación proporcional', 'Un colegio tiene 400 alumnos de 1.º, 350 de 2.º y 250 de 3.º (N = 1 000). Se quiere una muestra estratificada de 80. ¿Cuántos de cada grado?', 'Factor `n/N = 80/1000 = 0,08`.|1.º: `80 · 400/1000 = 32`. 2.º: `80 · 350/1000 = 28`. 3.º: `80 · 250/1000 = 20`.|Comprueba: `32 + 28 + 20 = 80`.', '32 de 1.º, 28 de 2.º y 20 de 3.º'],
      ['Números aleatorios', 'La población se numera del 01 al 60. Se quiere una muestra aleatoria simple de 5 con la lista: 83 14 07 52 91 14 33 60 27. ¿Qué números se eligen?', 'Lee de izquierda a derecha y descarta los mayores que 60: 83 y 91 no sirven.|El segundo 14 es repetido: se descarta.|Quedan en orden: `14, 07, 52, 33, 60`.', 'Muestra: 14, 07, 52, 33, 60'],
      ['Tabla de frecuencias', 'Se preguntó el medio de transporte a 20 personas: bus 8, moto 6, a pie 4, carro 2. Completa la frecuencia relativa y el porcentaje.', 'La variable es cualitativa y `n = 20`.|Relativas: `8/20 = 0,40`, `6/20 = 0,30`, `4/20 = 0,20`, `2/20 = 0,10`.|Porcentajes: 40 %, 30 %, 20 % y 10 %; las relativas suman 1.', 'Bus 40 %, moto 30 %, a pie 20 %, carro 10 %'],
      ['Error de muestreo', 'El peso medio de todos los estudiantes de un colegio (parámetro) es 65 kg. Una muestra dio una media de 67,2 kg. Calcula el error.', 'Estadístico: 67,2 kg. Parámetro: 65 kg.|`error = 67,2 − 65 = 2,2`.|El positivo indica que la muestra sobrestimó el parámetro.', '`error = 2,2 kg`']
    ],
    ejercicios: [
      ['f', 'Se encuesta a 50 de los 1 200 estudiantes de un colegio. Indica `N` y `n`.', 'La población son todos los estudiantes: `N = 1200`.|La muestra son los encuestados: `n = 50`.', '`N = 1200`, `n = 50`'],
      ['f', 'Clasifica: color de ojos, número de hermanos y estatura.', 'Color de ojos: categorías, cualitativa.|Número de hermanos: cuantitativa discreta (se cuenta).|Estatura: cuantitativa continua (se mide).', 'Cualitativa, cuantitativa discreta y cuantitativa continua'],
      ['f', 'Calcula la fracción de muestreo si `N = 1500` y `n = 75`.', '`f = n/N = 75/1500`.|Simplifica: `75/1500 = 0,05`, es decir 5 %.', '`f = 0,05` (5 %)'],
      ['f', 'Una lista tiene 800 elementos y se quiere una muestra sistemática de 50. Halla `k`.', '`k = N/n = 800/50`.|`k = 16`.', '`k = 16`'],
      ['i', 'Con `N = 250`, `n = 25` e inicio 3, escribe los cuatro primeros elementos de la muestra sistemática.', '`k = 250/25 = 10`.|Se suman 10 a partir de 3: `3, 13, 23, 33`.', '`3, 13, 23, 33`'],
      ['i', 'En una población de 2 000 hay 800 urbanos y 1 200 rurales. Con `n = 100`, ¿cuántos de cada zona en un muestreo estratificado proporcional?', 'Urbanos: `100 · 800/2000 = 40`.|Rurales: `100 · 1200/2000 = 60`.|`40 + 60 = 100`.', '40 urbanos y 60 rurales'],
      ['i', 'Un colegio tiene 12 secciones de 40 alumnos. Se sortean 3 secciones y se encuesta a todos. ¿Qué tipo de muestreo es y cuántos alumnos entran?', 'Se eligen grupos completos: muestreo por conglomerados.|Alumnos: `3 · 40 = 120`.', 'Por conglomerados; 120 alumnos'],
      ['i', 'La nota media de toda la población es 6,2 y la de una muestra es 5,9. Calcula el error de muestreo.', '`error = estadístico − parámetro`.|`error = 5,9 − 6,2 = −0,3`.|El negativo indica que la muestra subestimó.', '`error = −0,3`'],
      ['d', 'Un municipio tiene 1 250 familias en tres zonas de 500, 450 y 300. Con una muestra proporcional de 100, ¿cuántas por zona?', '`n/N = 100/1250 = 0,08`.|Zona 1: `500 · 0,08 = 40`. Zona 2: `450 · 0,08 = 36`. Zona 3: `300 · 0,08 = 24`.|Suma: `40 + 36 + 24 = 100`.', '40, 36 y 24 familias'],
      ['d', 'En un muestreo sistemático con `N = 4800` se usa `k = 30`. ¿Qué tamaño tiene la muestra?', 'De `k = N/n` se despeja `n = N/k`.|`n = 4800/30 = 160`.', '`n = 160`'],
      ['d', 'Para estudiar el gasto en transporte se llama por teléfono fijo a las 10 a. m. de un día laboral. Explica un sesgo y cómo corregirlo.', 'Solo contestan quienes tienen teléfono fijo y están en casa a esa hora; se excluye a quienes trabajan o no tienen teléfono.|La muestra no representa a toda la población: hay sesgo de selección.|Corrección: sortear los elementos de una lista completa de la población y usar varios medios y horarios de contacto.', 'Sesgo de selección; se corrige con un sorteo sobre una lista completa']
    ],
    teoricas: [
      ['¿Por qué se usa una muestra y no toda la población?', 'Porque estudiar a todos suele ser caro, lento o imposible; una muestra bien elegida da buenas estimaciones.'],
      ['¿Cuál es la diferencia entre parámetro y estadístico?', 'El parámetro describe a la población y es fijo (casi siempre desconocido); el estadístico se calcula con la muestra y cambia de muestra en muestra.'],
      ['¿Qué significa que una muestra sea representativa?', 'Que reproduce las características de la población; se logra con selección aleatoria y tamaño suficiente.'],
      ['¿Cuándo conviene el muestreo estratificado?', 'Cuando la población tiene grupos distintos entre sí pero homogéneos por dentro, y se quiere que todos estén representados.'],
      ['¿En qué se diferencian estratos y conglomerados?', 'Los estratos son distintos entre sí y se muestrea dentro de cada uno; los conglomerados se parecen entre sí y se eligen algunos completos.'],
      ['¿Una muestra más grande elimina el sesgo?', 'No. Si el método favorece a ciertos elementos, aumentar `n` repite el mismo error; el sesgo se corrige cambiando el método.'],
      ['¿Por qué se descartan los números repetidos en el muestreo aleatorio simple?', 'Porque cada elemento puede aparecer una sola vez en la muestra; repetirlo daría menos de `n` elementos distintos.'],
      ['¿Por qué el inicio del sistemático se elige al azar?', 'Para que todos los elementos tengan oportunidad de ser elegidos y no se favorezca a los del principio de la lista.']
    ],
    errores: ['Confundir parámetro con estadístico: la media de la muestra es estadístico, no parámetro.', 'Calcular `k = n/N` en lugar de `k = N/n` en el muestreo sistemático.', 'No redondear bien la asignación proporcional y que la suma de los `nᵢ` no dé `n`.', 'Creer que una muestra grande, pero elegida por conveniencia o voluntarios, es representativa.'],
    aplicacion: ['Encuesta en el colegio', 'Se quiere saber cuántos de los 1 000 estudiantes usan transporte público. Un muestreo estratificado por grado con `n = 80` toma 32, 28 y 20 alumnos de 1.º, 2.º y 3.º. Si 36 de los 80 usan transporte público, el estadístico es `p̂ = 36/80 = 0,45` y se estima que cerca del 45 % de todo el colegio lo usa.'],
    examen: [
      ['Una lista tiene 2 400 elementos y se toma una muestra sistemática de 120. Halla `k`.', 20, '`k = N/n`.|`k = 2400/120 = 20`.'],
      ['Con `N = 1200`, un estrato tiene 480 elementos. Para `n = 150` proporcional, ¿cuántos elementos aporta ese estrato?', 60, '`nᵢ = n · Nᵢ/N`.|`nᵢ = 150 · 480/1200 = 60`.'],
      ['La media muestral es 7,4 y la media poblacional es 7,1. Calcula el error de muestreo.', 0.3, '`error = estadístico − parámetro`.|`error = 7,4 − 7,1 = 0,3`.'],
      ['Con `N = 500` y `n = 25`, ¿qué porcentaje de la población se muestrea?', 5, '`f = 25/500 = 0,05`.|Como porcentaje: 5 %.'],
      ['En un muestreo sistemático con `N = 900`, `n = 45` e inicio 7, ¿qué número tiene el 4.º elemento elegido?', 67, '`k = 900/45 = 20`.|4.º elemento: `7 + 3·20 = 67`.'],
      ['Hay 40 aulas de 35 alumnos y se sortean 6 aulas completas. ¿Cuántos alumnos tiene la muestra?', 210, 'Cada aula tiene 35 alumnos.|`6 · 35 = 210`.'],
      ['De una muestra de 60 personas, 18 prefieren una marca. Halla la proporción muestral.', 0.3, '`p̂ = x/n = 18/60`.|`p̂ = 0,3`.'],
      ['Hay 600 hombres y 400 mujeres. Con `n = 50` estratificada proporcional, ¿cuántas mujeres se eligen?', 20, '`nᵢ = 50 · 400/1000`.|`nᵢ = 20`.'],
      ['La estatura de los estudiantes es una variable:', ['Cualitativa', 'Cuantitativa discreta', 'Cuantitativa continua', 'Nominal'], 2, 'La estatura es numérica, por lo que es cuantitativa.|Se mide y puede tomar cualquier valor en un intervalo: es continua.'],
      ['Para conocer la opinión de los alumnos se encuesta solo a quienes se ofrecen como voluntarios. Esto produce:', ['Una muestra aleatoria simple', 'Una muestra sesgada', 'Un muestreo estratificado', 'Un parámetro'], 1, 'Los voluntarios no representan a toda la población.|Eso es un sesgo de selección: la muestra es sesgada.']
    ]
  });

})();

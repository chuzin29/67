/* data-1a-u5.js — Unidad 5: temas complementarios de 1.er año (1.14–1.18).
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
      /* [pregunta, número, pasos]  o  [pregunta, [4 opciones], correcta, pasos] */
      examen: o.examen.map(function (x) {
        return Array.isArray(x[1]) ? { tipo: 'opt', q: m(x[0]), opciones: x[1].map(m), correcta: x[2], pasos: pasos(x[3]) }
          : { tipo: 'num', q: m(x[0]), r: x[1], tol: 0.01, pasos: pasos(x[2]) };
      })
    };
  }

  tema('1.14', {
    titulo: 'Estadística descriptiva', calc: 'estadistica',
    resumen: 'Resumirás datos con medidas de centro, posición y dispersión, y leerás histogramas y diagramas de caja.',
    objetivos: ['Calcular media, mediana y moda.', 'Hallar cuartiles y el rango intercuartílico.', 'Calcular varianza y desviación estándar.', 'Interpretar histogramas y diagramas de caja.'],
    teoria: [
      ['Población, muestra y variables', 'La <strong>población</strong> es el total de individuos de interés y la <strong>muestra</strong> es una parte de ella. Una variable es <strong>cualitativa</strong> si describe una cualidad y <strong>cuantitativa</strong> si se mide o se cuenta (discreta o continua).'],
      ['Medidas de centro', 'La <strong>media</strong> es la suma de los datos entre la cantidad de datos. La <strong>mediana</strong> es el valor central de los datos ordenados (si son pares, el promedio de los dos centrales). La <strong>moda</strong> es el valor más repetido.'],
      ['Cuartiles y percentiles', 'Los cuartiles dividen los datos ordenados en cuatro partes. En esta página, `Q2` es la mediana, `Q1` es la mediana de la mitad inferior y `Q3` la de la mitad superior (si n es impar se excluye el dato central). Otros libros usan métodos algo distintos. El <strong>percentil</strong> k deja aproximadamente el k % de los datos por debajo.'],
      ['Dispersión', 'El <strong>rango</strong> es máximo menos mínimo y el <strong>rango intercuartílico</strong> es `RIC = Q3 − Q1`. La <strong>varianza poblacional</strong> promedia los cuadrados de las distancias a la media; la <strong>muestral</strong> divide entre n − 1. La <strong>desviación estándar</strong> es su raíz cuadrada.'],
      ['Gráficos', 'Un <strong>histograma</strong> muestra frecuencias por intervalos con barras contiguas. Un <strong>diagrama de caja</strong> dibuja mínimo, `Q1`, mediana, `Q3` y máximo; suele marcarse como atípico lo que queda a más de 1.5·RIC de la caja.']
    ],
    formulas: [['Media', 'x̄ = Σx / n'], ['Varianza poblacional', 'σ² = Σ(x − x̄)² / n'], ['Varianza muestral', 's² = Σ(x − x̄)² / (n − 1)'], ['Desviación estándar', 'σ = √(σ²)'], ['Rango intercuartílico', 'RIC = Q3 − Q1']],
    ejemplos: [
      ['Media, mediana y moda', 'Datos: 4, 7, 7, 9, 13.', 'Suma: 40; media `40/5 = 8`.|Ordenados, el dato central es 7.|El 7 se repite más.', 'Media 8, mediana 7, moda 7'],
      ['Varianza poblacional', 'Datos: 2, 4, 6, 8.', 'Media `5`.|Cuadrados de las distancias: 9, 1, 1, 9; suman 20.|`σ² = 20/4 = 5`.', '`σ² = 5`, `σ ≈ 2.236`'],
      ['Cuartiles', 'Datos: 1, 3, 5, 7, 9, 11, 13, 15.', 'Mediana: `(7 + 9)/2 = 8`.|Mitad inferior 1, 3, 5, 7: `Q1 = 4`.|Mitad superior 9, 11, 13, 15: `Q3 = 12`.', '`Q1 = 4`, `Q3 = 12`, `RIC = 8`'],
      ['Datos agrupados en tabla', 'El valor 1 aparece 2 veces, el 2 aparece 5 veces y el 3 aparece 3 veces. Halla la media.', 'Suma ponderada: `1·2 + 2·5 + 3·3 = 21`.|Total de datos: 10.|`21/10 = 2.1`.', 'Media 2.1']
    ],
    ejercicios: [
      ['f', 'Halla la media de 6, 8, 10, 12.', 'Suma 36.|`36/4 = 9`.', '9'],
      ['f', 'Halla la mediana de 9, 2, 5, 11, 4.', 'Ordena: 2, 4, 5, 9, 11.|Toma el central.', '5'],
      ['f', 'Halla la moda de 3, 5, 5, 6, 5, 3.', 'Cuenta cada valor.|El 5 aparece tres veces.', '5'],
      ['f', 'Halla el rango de 14, 3, 21, 8.', 'Máximo 21 y mínimo 3.|`21 − 3 = 18`.', '18'],
      ['i', 'Halla la mediana de 12, 7, 3, 9, 15, 4.', 'Ordena: 3, 4, 7, 9, 12, 15.|`(7 + 9)/2 = 8`.', '8'],
      ['i', 'Varianza poblacional de 1, 3, 5.', 'Media 3.|Cuadrados: 4, 0, 4.|`8/3`.', '`8/3 ≈ 2.667`'],
      ['i', 'Cuatro notas tienen media 7. Tres son 6, 8 y 5. Halla la cuarta.', 'Suma total `4·7 = 28`.|`28 − 19 = 9`.', '9'],
      ['i', 'Halla el RIC de 2, 4, 6, 8, 10, 12, 14.', 'Mediana 8, que se excluye.|`Q1 = 4`, `Q3 = 12`.', '8'],
      ['d', 'Desviación estándar muestral de 2, 4, 9.', 'Media 5.|Cuadrados: 9, 1, 16; suman 26.|`s² = 26/2 = 13`.', '`√13 ≈ 3.606`'],
      ['d', 'Un grupo de 20 tiene media 6 y otro de 30 tiene media 8. Halla la media conjunta.', 'Sumas: 120 y 240.|`360/50`.', '7.2']
    ],
    teoricas: [
      ['¿En qué se diferencian población y muestra?', 'La población es el total; la muestra es una parte usada para estudiarlo.'],
      ['¿Cuándo conviene la mediana en vez de la media?', 'Cuando hay valores extremos, porque la mediana les afecta menos.'],
      ['¿Puede haber más de una moda?', 'Sí; los datos pueden ser bimodales o multimodales.'],
      ['¿Qué indica una desviación estándar de cero?', 'Que todos los datos son iguales.'],
      ['¿Qué representa la caja del diagrama de caja?', 'El tramo entre Q1 y Q3, donde está aproximadamente la mitad central de los datos.'],
      ['¿Por qué la varianza muestral divide entre n − 1?', 'Para corregir la tendencia a subestimar la variabilidad de la población.'],
      ['¿Qué significa estar en el percentil 90?', 'Que aproximadamente el 90 % de los datos queda por debajo.']
    ],
    errores: ['Calcular la mediana sin ordenar los datos.', 'Confundir varianza con desviación estándar.', 'Usar n cuando se pide la varianza muestral (es n − 1).', 'Promediar dos medias sin considerar el tamaño de cada grupo.'],
    aplicacion: ['Notas de un grupo', 'La media resume el rendimiento y la desviación estándar muestra si las notas se parecen entre sí o están muy dispersas.'],
    examen: [
      ['Media de 5, 9, 10.', 8, 'Suma 24.|`24/3 = 8`.'],
      ['Mediana de 8, 1, 6, 3.', 4.5, 'Ordena: 1, 3, 6, 8.|`(3 + 6)/2`.'],
      ['Moda de 2, 7, 7, 4.', 7, 'Cuenta.|El 7 se repite.'],
      ['Rango de 30, 12, 25.', 18, 'Máximo menos mínimo.|`30 − 12`.'],
      ['Varianza poblacional de 3, 7.', 4, 'Media 5.|`(4 + 4)/2`.'],
      ['Desviación estándar poblacional de 3, 7.', 2, 'Varianza 4.|Raíz: 2.'],
      ['Si `Q1 = 10` y `Q3 = 18`, halla el RIC.', 8, 'Resta.|`18 − 10`.'],
      ['La media de 3 datos es 10. Dos son 7 y 11. Halla el tercero.', 12, 'Suma total 30.|`30 − 18`.'],
      ['¿Qué medida resiste mejor un valor extremo?', ['Media', 'Mediana', 'Rango', 'Varianza'], 1, 'Depende de la posición.|Es la mediana.'],
      ['¿Qué gráfico usa barras contiguas por intervalos?', ['Histograma', 'Diagrama de caja', 'Gráfico circular', 'Diagrama de árbol'], 0, 'Frecuencias por intervalos.|Es el histograma.']
    ]
  });

  tema('1.15', {
    titulo: 'Secciones cónicas', calc: 'conica',
    resumen: 'Reconocerás circunferencia, parábola, elipse e hipérbola y obtendrás sus elementos a partir de la ecuación.',
    objetivos: ['Hallar centro y radio de una circunferencia.', 'Ubicar foco y directriz de una parábola.', 'Obtener los elementos de una elipse.', 'Reconocer una hipérbola y sus asíntotas.'],
    teoria: [
      ['¿Qué es una cónica?', 'Es una curva que resulta de cortar un cono con un plano: circunferencia, elipse, parábola o hipérbola.'],
      ['Circunferencia', 'Puntos a distancia r del centro (h, k): `(x − h)² + (y − k)² = r²`. Si está desarrollada, se completan cuadrados.'],
      ['Parábola', 'Puntos que equidistan de un foco y una directriz. Con vértice en el origen, `x² = 4py` tiene foco (0, p) y directriz y = −p; `y² = 4px` tiene foco (p, 0) y directriz x = −p.'],
      ['Elipse', 'La suma de distancias a dos focos es constante (2a). En `x²/a² + y²/b² = 1` con a &gt; b, los vértices son (±a, 0), los focos (±c, 0) y `c² = a² − b²`.'],
      ['Hipérbola', 'La diferencia (en valor absoluto) de las distancias a dos focos es constante. En `x²/a² − y²/b² = 1`, `c² = a² + b²` y las asíntotas son `y = ±(b/a)x`.']
    ],
    formulas: [['Circunferencia', '(x − h)² + (y − k)² = r²'], ['Parábola vertical', 'x² = 4py'], ['Elipse', 'x²/a² + y²/b² = 1,  c² = a² − b²'], ['Hipérbola', 'x²/a² − y²/b² = 1,  c² = a² + b²'], ['Asíntotas', 'y = ±(b/a)x']],
    ejemplos: [
      ['Centro y radio', 'Analiza `(x − 2)² + (y + 3)² = 16`.', 'Compara con la forma estándar.|`h = 2`, `k = −3`, `r² = 16`.', 'Centro (2, −3), radio 4'],
      ['Completar cuadrados', 'Analiza `x² + y² − 6x + 4y − 12 = 0`.', 'Agrupa: `(x² − 6x) + (y² + 4y) = 12`.|Suma 9 y 4 a ambos lados.|`(x − 3)² + (y + 2)² = 25`.', 'Centro (3, −2), radio 5'],
      ['Foco de una parábola', 'Analiza `x² = 12y`.', '`4p = 12`.|`p = 3`.', 'Foco (0, 3), directriz y = −3'],
      ['Elipse', 'Analiza `x²/25 + y²/9 = 1`.', '`a = 5`, `b = 3`.|`c² = 25 − 9 = 16`.', 'Vértices (±5, 0), focos (±4, 0)']
    ],
    ejercicios: [
      ['f', 'Radio de `x² + y² = 49`.', '`r² = 49`.|Raíz positiva.', '7'],
      ['f', 'Centro de `(x + 1)² + (y − 5)² = 4`.', '`x + 1 = x − (−1)`.|Lee k = 5.', '(−1, 5)'],
      ['f', 'Escribe la circunferencia de centro (0, 2) y radio 3.', 'Sustituye en la forma estándar.|`r² = 9`.', '`x² + (y − 2)² = 9`'],
      ['f', 'Foco de `y² = 8x`.', '`4p = 8`.|`p = 2` sobre el eje x.', '(2, 0)'],
      ['i', 'Directriz de `x² = −16y`.', '`4p = −16`, `p = −4`.|Directriz y = −p.', 'y = 4'],
      ['i', 'Focos de `x²/169 + y²/25 = 1`.', '`c² = 169 − 25 = 144`.|`c = 12`.', '(±12, 0)'],
      ['i', 'Focos de `x²/9 − y²/16 = 1`.', '`c² = 9 + 16 = 25`.|`c = 5`.', '(±5, 0)'],
      ['i', 'Asíntotas de `x²/4 − y²/36 = 1`.', '`a = 2`, `b = 6`.|Pendiente `6/2 = 3`.', 'y = ±3x'],
      ['d', 'Centro y radio de `x² + y² + 8x − 2y + 8 = 0`.', '`(x + 4)² + (y − 1)² = −8 + 16 + 1`.|El lado derecho es 9.', 'Centro (−4, 1), radio 3'],
      ['d', 'Elipse centrada en el origen con vértices (±10, 0) y focos (±6, 0).', '`a = 10`, `c = 6`.|`b² = 100 − 36 = 64`.', '`x²/100 + y²/64 = 1`']
    ],
    teoricas: [
      ['¿Cuáles son las cuatro cónicas?', 'Circunferencia, elipse, parábola e hipérbola.'],
      ['¿Qué define a una circunferencia?', 'Todos sus puntos están a la misma distancia del centro.'],
      ['¿Qué define a una parábola?', 'Cada punto equidista del foco y de la directriz.'],
      ['¿En qué se diferencian las ecuaciones de elipse e hipérbola?', 'La elipse suma los términos cuadráticos y la hipérbola los resta.'],
      ['¿Cómo se relacionan a, b y c en la elipse?', '`c² = a² − b²`.'],
      ['¿Qué es una asíntota de la hipérbola?', 'Una recta a la que las ramas se acercan al alejarse.'],
      ['¿Para qué se completan cuadrados?', 'Para pasar de la ecuación general a la forma estándar.']
    ],
    errores: ['Tomar r² como si fuera el radio.', 'Equivocar los signos del centro.', 'Usar c² = a² − b² en la hipérbola.', 'Olvidar sumar a ambos lados al completar cuadrados.'],
    aplicacion: ['Antenas y órbitas', 'Las antenas parabólicas concentran señales en el foco, y las órbitas de los planetas son aproximadamente elípticas.'],
    examen: [
      ['Radio de `x² + y² = 81`.', 9, 'r² = 81.|r = 9.'],
      ['Abscisa del centro de `(x − 7)² + y² = 1`.', 7, 'Lee h.|h = 7.'],
      ['Valor de p en `x² = 20y`.', 5, '4p = 20.|p = 5.'],
      ['Valor de c en `x²/100 + y²/36 = 1`.', 8, 'c² = 100 − 36.|c = 8.'],
      ['Valor de c en `x²/36 − y²/64 = 1`.', 10, 'c² = 36 + 64.|c = 10.'],
      ['Radio de `x² + y² − 4x − 5 = 0`.', 3, '(x − 2)² + y² = 9.|r = 3.'],
      ['Longitud del eje mayor de `x²/49 + y²/4 = 1`.', 14, 'a = 7.|2a = 14.'],
      ['Pendiente positiva de las asíntotas de `x²/25 − y²/100 = 1`.', 2, 'a = 5, b = 10.|b/a = 2.'],
      ['¿Qué cónica es `x²/9 + y²/4 = 1`?', ['Circunferencia', 'Elipse', 'Parábola', 'Hipérbola'], 1, 'Suma con denominadores distintos.|Elipse.'],
      ['Directriz de `y² = 4x`.', ['x = −1', 'x = 1', 'y = −1', 'y = 1'], 0, 'p = 1.|x = −p.']
    ]
  });

  tema('1.16', {
    titulo: 'Funciones exponenciales y logarítmicas', calc: 'exponencial',
    resumen: 'Estudiarás las funciones exponencial y logarítmica, sus propiedades y cómo resolver sus ecuaciones.',
    objetivos: ['Reconocer crecimiento y decrecimiento exponencial.', 'Pasar entre forma exponencial y logarítmica.', 'Aplicar las propiedades de los logaritmos.', 'Resolver ecuaciones verificando el dominio.'],
    teoria: [
      ['Función exponencial', '`f(x) = a<sup>x</sup>` con a &gt; 0 y a ≠ 1. Dominio: todos los reales; rango: positivos. Pasa por (0, 1), crece si a &gt; 1 y decrece si 0 &lt; a &lt; 1.'],
      ['Logaritmo', '`log<sub>a</sub>(x) = y` equivale a `a<sup>y</sup> = x`, con x &gt; 0, a &gt; 0 y a ≠ 1. `log` suele indicar base 10 y `ln` base e ≈ 2.718.'],
      ['Función logarítmica', 'Es la inversa de la exponencial. Dominio: x &gt; 0; rango: todos los reales; pasa por (1, 0) y tiene asíntota vertical x = 0.'],
      ['Propiedades', 'El logaritmo de un producto es la suma de logaritmos, el de un cociente es la resta y el exponente de una potencia baja multiplicando.'],
      ['Ecuaciones', 'Si ambos lados pueden escribirse con la misma base, se igualan exponentes. Si no, se aplica logaritmo. En ecuaciones logarítmicas hay que descartar soluciones fuera del dominio.']
    ],
    formulas: [['Definición', 'log<sub>a</sub>(x) = y ⇔ a<sup>y</sup> = x'], ['Producto', 'log(MN) = log M + log N'], ['Cociente', 'log(M/N) = log M − log N'], ['Potencia', 'log(M<sup>k</sup>) = k·log M'], ['Cambio de base', 'log<sub>a</sub>(x) = ln x / ln a']],
    ejemplos: [
      ['Evaluar un logaritmo', 'Calcula `log<sub>2</sub>(32)`.', 'Pregunta: ¿2 a qué potencia da 32?|`2<sup>5</sup> = 32`.', '5'],
      ['Ecuación exponencial', 'Resuelve `3<sup>x+1</sup> = 81`.', '`81 = 3<sup>4</sup>`.|`x + 1 = 4`.', 'x = 3'],
      ['Ecuación logarítmica', 'Resuelve `log<sub>2</sub>(x) + log<sub>2</sub>(x − 2) = 3`.', 'Dominio: x &gt; 2.|`x(x − 2) = 8`.|`(x − 4)(x + 2) = 0`; se descarta −2.', 'x = 4'],
      ['Crecimiento', 'Una población de 100 se duplica cada hora. ¿Cuántos hay a las 5 horas?', 'Modelo `P = 100·2<sup>t</sup>`.|`100·32`.', '3200']
    ],
    ejercicios: [
      ['f', 'Calcula `2<sup>6</sup>`.', 'Multiplica seis veces 2.|Resultado 64.', '64'],
      ['f', 'Calcula `log(1000)`.', 'Base 10.|`10<sup>3</sup> = 1000`.', '3'],
      ['f', 'Calcula `log<sub>5</sub>(25)`.', '`5² = 25`.|El exponente es 2.', '2'],
      ['f', 'Resuelve `2<sup>x</sup> = 16`.', '`16 = 2<sup>4</sup>`.|Iguala exponentes.', 'x = 4'],
      ['i', 'Resuelve `5<sup>2x−1</sup> = 125`.', '`2x − 1 = 3`.|`2x = 4`.', 'x = 2'],
      ['i', 'Calcula `log<sub>6</sub>(4) + log<sub>6</sub>(9)`.', 'Producto: `log<sub>6</sub>(36)`.|`6² = 36`.', '2'],
      ['i', 'Resuelve `log<sub>3</sub>(x − 1) = 2`.', '`x − 1 = 9`.|Está en el dominio.', 'x = 10'],
      ['i', 'Resuelve `2<sup>x</sup> = 10` con tres decimales.', '`x = ln 10 / ln 2`.|Calcula.', 'x ≈ 3.322'],
      ['d', 'Resuelve `4<sup>x</sup> − 6·2<sup>x</sup> + 8 = 0`.', 'Sea `u = 2<sup>x</sup>`: `u² − 6u + 8 = 0`.|`u = 2` o `u = 4`.', 'x = 1 o x = 2'],
      ['d', 'Resuelve `log(x) + log(x + 3) = 1`.', 'Dominio x &gt; 0.|`x² + 3x − 10 = 0`.|Raíces 2 y −5.', 'x = 2']
    ],
    teoricas: [
      ['¿Por qué la base no puede ser 1?', 'Porque la función sería constante y no tendría inversa.'],
      ['¿Cuál es el rango de la exponencial básica?', 'Los números reales positivos.'],
      ['¿Qué relación hay entre exponencial y logaritmo?', 'Son funciones inversas.'],
      ['¿Existe el logaritmo de un número negativo en los reales?', 'No.'],
      ['¿Cuánto vale log<sub>a</sub>(1)?', '0, porque a<sup>0</sup> = 1.'],
      ['¿Para qué sirve el cambio de base?', 'Para calcular logaritmos de cualquier base con ln o log.'],
      ['¿Cuándo una exponencial decrece?', 'Cuando la base está entre 0 y 1.']
    ],
    errores: ['Escribir log(M + N) como log M + log N.', 'No comprobar el dominio de la solución.', 'Confundir 2·3<sup>x</sup> con 6<sup>x</sup>.', 'Igualar exponentes con bases distintas.'],
    aplicacion: ['Interés compuesto', 'El dinero que gana interés compuesto crece de forma exponencial: `M = C(1 + i)<sup>t</sup>`; el logaritmo permite hallar el tiempo.'],
    examen: [
      ['`log<sub>2</sub>(8)`', 3, '2³ = 8.|Es 3.'],
      ['Resuelve `3<sup>x</sup> = 27`.', 3, '27 = 3³.|x = 3.'],
      ['`log(100)`', 2, '10² = 100.|Es 2.'],
      ['Resuelve `2<sup>x−2</sup> = 32`.', 7, 'x − 2 = 5.|x = 7.'],
      ['Resuelve `log<sub>4</sub>(x) = 3`.', 64, 'x = 4³.|x = 64.'],
      ['`log<sub>3</sub>(54) − log<sub>3</sub>(2)`', 3, 'log₃(27).|Es 3.'],
      ['Si `f(x) = 5·2<sup>x</sup>`, halla f(3).', 40, '5·8.|40.'],
      ['Resuelve `9<sup>x</sup> = 27`.', 1.5, 'Base 3: el exponente 2x es igual a 3.|x = 3/2.'],
      ['Dominio de `log(x − 5)`.', ['x &gt; 5', 'x ≥ 5', 'x &lt; 5', 'Todos los reales'], 0, 'x − 5 &gt; 0.|x &gt; 5.'],
      ['¿Qué punto está en toda gráfica `y = a<sup>x</sup>`?', ['(1, 0)', '(0, 0)', '(0, 1)', '(1, 1)'], 2, 'a⁰ = 1.|(0, 1).']
    ]
  });

  tema('1.17', {
    titulo: 'Sucesiones y series', calc: 'sucesion',
    resumen: 'Trabajarás con progresiones aritméticas y geométricas: término general y suma de términos.',
    objetivos: ['Identificar progresiones aritméticas y geométricas.', 'Calcular un término cualquiera.', 'Sumar los primeros n términos.', 'Reconocer cuándo converge una serie geométrica.'],
    teoria: [
      ['Sucesiones', 'Una <strong>sucesión</strong> es una lista ordenada de números. Su término general `a<sub>n</sub>` indica el valor en la posición n.'],
      ['Progresión aritmética', 'Cada término se obtiene sumando una <strong>diferencia</strong> constante d: `a<sub>n</sub> = a<sub>1</sub> + (n − 1)d`.'],
      ['Suma aritmética', 'Se promedian el primer y el último término y se multiplica por n.'],
      ['Progresión geométrica', 'Cada término se obtiene multiplicando por una <strong>razón</strong> constante r: `a<sub>n</sub> = a<sub>1</sub>·r<sup>n−1</sup>`.'],
      ['Series geométricas', 'La suma de n términos usa `r<sup>n</sup>` (si r ≠ 1). La suma infinita existe cuando el valor absoluto de r es menor que 1.']
    ],
    formulas: [['Término aritmético', 'a<sub>n</sub> = a<sub>1</sub> + (n − 1)d'], ['Suma aritmética', 'S<sub>n</sub> = n(a<sub>1</sub> + a<sub>n</sub>)/2'], ['Término geométrico', 'a<sub>n</sub> = a<sub>1</sub>·r<sup>n−1</sup>'], ['Suma geométrica', 'S<sub>n</sub> = a<sub>1</sub>(r<sup>n</sup> − 1)/(r − 1)'], ['Suma infinita', 'S = a<sub>1</sub>/(1 − r),  −1 &lt; r &lt; 1']],
    ejemplos: [
      ['Término aritmético', 'En 3, 7, 11, … halla el término 10.', '`d = 4`.|`3 + 9·4`.', '39'],
      ['Suma aritmética', 'Suma los primeros 20 números naturales.', '`a<sub>1</sub> = 1`, `a<sub>20</sub> = 20`.|`20·21/2`.', '210'],
      ['Término geométrico', 'En 2, 6, 18, … halla el término 6.', '`r = 3`.|`2·3<sup>5</sup> = 486`.', '486'],
      ['Suma infinita', 'Suma 8 + 4 + 2 + …', '`r = 1/2`.|`8/(1 − 1/2)`.', '16']
    ],
    ejercicios: [
      ['f', 'Siguiente término: 5, 9, 13, 17, …', '`d = 4`.|Suma 4.', '21'],
      ['f', 'Siguiente término: 3, 6, 12, 24, …', '`r = 2`.|Multiplica por 2.', '48'],
      ['f', 'Diferencia de 20, 17, 14, …', 'Resta consecutivos.|`17 − 20`.', '−3'],
      ['f', 'Razón de 81, 27, 9, …', 'Divide consecutivos.|`27/81`.', '1/3'],
      ['i', 'Término 15 de 2, 5, 8, …', '`2 + 14·3`.|Calcula.', '44'],
      ['i', 'Suma los primeros 10 términos de 4, 6, 8, …', '`a<sub>10</sub> = 22`.|`10·26/2`.', '130'],
      ['i', 'Suma 1 + 2 + 4 + … (8 términos).', '`(2<sup>8</sup> − 1)/(2 − 1)`.|`256 − 1`.', '255'],
      ['i', 'Suma infinita de 9 + 3 + 1 + …', '`r = 1/3`.|`9/(2/3)`.', '13.5'],
      ['d', 'En una progresión aritmética `a<sub>3</sub> = 11` y `a<sub>8</sub> = 31`. Halla `a<sub>1</sub>`.', '`5d = 20`, `d = 4`.|`a<sub>1</sub> = 11 − 2·4`.', '3'],
      ['d', 'En una progresión geométrica de razón positiva `a<sub>2</sub> = 6` y `a<sub>4</sub> = 54`. Halla `a<sub>1</sub>`.', '`r² = 9`, `r = 3`.|`a<sub>1</sub> = 6/3`.', '2']
    ],
    teoricas: [
      ['¿Qué es una sucesión?', 'Una lista ordenada de números.'],
      ['¿Cómo se reconoce una progresión aritmética?', 'La resta de términos consecutivos es constante.'],
      ['¿Cómo se reconoce una geométrica?', 'El cociente de términos consecutivos es constante.'],
      ['¿En qué se diferencian sucesión y serie?', 'La serie es la suma de los términos de la sucesión.'],
      ['¿Qué pasa si d es negativa?', 'La progresión aritmética decrece.'],
      ['¿Cuándo converge una serie geométrica infinita con primer término no nulo?', 'Cuando r está entre −1 y 1.'],
      ['¿Qué ocurre si r es negativa?', 'Los términos alternan de signo.']
    ],
    errores: ['Usar n en lugar de n − 1 en el término general.', 'Confundir diferencia con razón.', 'Aplicar la suma infinita cuando la razón no cumple −1 &lt; r &lt; 1.', 'Invertir el orden al calcular d o r.'],
    aplicacion: ['Plan de ahorro', 'Ahorrar cada semana una cantidad que aumenta siempre lo mismo forma una progresión aritmética; la suma da el total ahorrado.'],
    examen: [
      ['Término 8 de 1, 4, 7, …', 22, '1 + 7·3.|22.'],
      ['Término 5 de 4, 8, 16, …', 64, '4·2⁴.|64.'],
      ['Diferencia de 12, 19, 26.', 7, '19 − 12.|7.'],
      ['Razón de 5, 20, 80.', 4, '20/5.|4.'],
      ['Suma 1 + 2 + … + 50.', 1275, '50·51/2.|1275.'],
      ['Suma 3 + 6 + 12 + 24 + 48.', 93, '3·(32 − 1).|93.'],
      ['Suma infinita 10 + 5 + 2.5 + …', 20, '10/(1/2).|20.'],
      ['Suma los primeros 6 términos de 5, 8, 11, …', 75, 'a₆ = 20.|6·25/2.'],
      ['¿Cuál es geométrica?', ['2, 4, 6', '1, 5, 25', '1, 4, 9', '10, 7, 4'], 1, 'Razón constante.|1, 5, 25.'],
      ['¿Cuál serie infinita converge?', ['1 + 2 + 4', '1 + 1 + 1', '1 + 1/4 + 1/16', '1 + 3 + 9'], 2, 'La razón 1/4.|Converge.']
    ]
  });

  tema('1.18', {
    titulo: 'Combinatoria y probabilidad', calc: 'conteo',
    resumen: 'Contarás posibilidades con permutaciones y combinaciones, y calcularás probabilidades.',
    objetivos: ['Aplicar el principio multiplicativo.', 'Distinguir permutaciones de combinaciones.', 'Calcular probabilidades con la regla de Laplace.', 'Usar complemento, unión e independencia.'],
    teoria: [
      ['Principios de conteo', 'Si una decisión tiene m opciones y otra independiente tiene n, juntas hay m·n. Si son alternativas que no se superponen, hay m + n.'],
      ['Factorial y permutaciones', '`n! = n(n − 1)···1` y `0! = 1`. En una <strong>permutación</strong> importa el orden.'],
      ['Combinaciones', 'En una <strong>combinación</strong> no importa el orden: se eligen grupos de r elementos entre n.'],
      ['Probabilidad de Laplace', 'Con resultados igualmente probables, la probabilidad es casos favorables entre casos posibles, un número entre 0 y 1.'],
      ['Reglas', 'Complemento: 1 − P(A). Unión: se suman y se resta la intersección. Si A y B son independientes, la probabilidad de ambos es el producto.']
    ],
    formulas: [['Permutaciones', 'P(n, r) = n!/(n − r)!'], ['Combinaciones', 'C(n, r) = n!/(r!(n − r)!)'], ['Laplace', 'P(A) = favorables / posibles'], ['Complemento', 'P(no A) = 1 − P(A)'], ['Unión', 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)']],
    ejemplos: [
      ['Principio multiplicativo', 'Hay 3 camisas y 4 pantalones. ¿Cuántos conjuntos?', 'Decisiones independientes.|`3·4`.', '12'],
      ['Permutación', 'De 5 personas se eligen presidente y secretario.', 'Importa el orden.|`5·4`.', '20'],
      ['Combinación', 'De 6 estudiantes se elige un equipo de 3.', 'No importa el orden.|`6!/(3!·3!)`.', '20'],
      ['Probabilidad', 'Al lanzar un dado, ¿cuál es la probabilidad de sacar par?', 'Favorables: 2, 4, 6.|`3/6`.', '1/2']
    ],
    ejercicios: [
      ['f', 'Calcula `5!`.', '`5·4·3·2·1`.|Multiplica.', '120'],
      ['f', 'Hay 2 caminos de A a B y 5 de B a C. ¿Cuántas rutas de A a C pasando por B?', 'Multiplica.|`2·5`.', '10'],
      ['f', 'Probabilidad de sacar 6 en un dado.', 'Un favorable.|Seis posibles.', '1/6'],
      ['f', 'Si P(A) = 0.3, halla P(no A).', 'Complemento.|`1 − 0.3`.', '0.7'],
      ['i', '¿De cuántas formas se ordenan 4 libros distintos?', '`4!`.|24.', '24'],
      ['i', 'Calcula `C(8, 2)`.', '`8·7/2`.|28.', '28'],
      ['i', 'En una baraja de 52 cartas, probabilidad de as o corazón.', '`4/52 + 13/52 − 1/52`.|`16/52`.', '4/13'],
      ['i', 'Probabilidad de dos caras al lanzar dos monedas.', 'Independientes.|`1/2·1/2`.', '1/4'],
      ['d', 'Hay 3 bolas rojas y 2 azules. Se sacan 2 sin reposición. Probabilidad de que ambas sean rojas.', '`3/5·2/4`.|Simplifica.', '3/10'],
      ['d', 'Probabilidad de al menos una cara en 3 lanzamientos.', 'Complemento: ninguna cara = `1/8`.|`1 − 1/8`.', '7/8']
    ],
    teoricas: [
      ['¿Cuándo importa el orden?', 'En las permutaciones.'],
      ['¿Cuánto vale 0!?', '1, por definición.'],
      ['¿Qué es el espacio muestral?', 'El conjunto de todos los resultados posibles.'],
      ['¿Entre qué valores está una probabilidad?', 'Entre 0 y 1.'],
      ['¿Qué son sucesos mutuamente excluyentes?', 'Los que no pueden ocurrir a la vez.'],
      ['¿Qué son sucesos independientes?', 'Aquellos en que uno no cambia la probabilidad del otro.'],
      ['¿Cuándo sirve el complemento?', 'Cuando es más fácil contar lo contrario, como en «al menos uno».']
    ],
    errores: ['Usar permutaciones cuando el orden no importa.', 'No restar la intersección en la unión.', 'Suponer independencia al sacar sin reposición.', 'Aplicar Laplace con resultados no igualmente probables.'],
    aplicacion: ['Claves y sorteos', 'El conteo muestra cuántas claves distintas existen y la probabilidad indica la posibilidad de ganar un sorteo.'],
    examen: [
      ['Calcula `4!`.', 24, '4·3·2·1.|24.'],
      ['Calcula `P(6, 2)`.', 30, '6·5.|30.'],
      ['Calcula `C(5, 2)`.', 10, '5·4/2.|10.'],
      ['Menús posibles con 3 platos y 3 bebidas.', 9, '3·3.|9.'],
      ['Probabilidad (decimal) de cara en una moneda.', 0.5, '1 de 2.|0.5.'],
      ['Si P(A) = 0.85, halla P(no A).', 0.15, '1 − 0.85.|0.15.'],
      ['Probabilidad (decimal) de sacar mayor que 4 en un dado.', 0.3333, 'Favorables 5 y 6.|2/6.'],
      ['A y B independientes, P(A) = 0.4 y P(B) = 0.5. Halla P(A ∩ B).', 0.2, '0.4·0.5.|0.2.'],
      ['Elegir 3 delegados sin cargos es:', ['Permutación', 'Combinación', 'Factorial', 'Suma'], 1, 'No importa el orden.|Combinación.'],
      ['La probabilidad de un suceso imposible es:', ['1', '0.5', '0', '−1'], 2, 'No ocurre.|0.']
    ]
  });
})();

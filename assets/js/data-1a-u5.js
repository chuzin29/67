/* data-1a-u5.js — Unidad 5: temas complementarios de 1.er año (1.14).
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

})();

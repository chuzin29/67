/* data-3a-u6.js — Unidad 6: Matemática discreta */
(function () {
  var T = (window.CURSO_3A = window.CURSO_3A || { temas: {} }).temas;

  /* ───────────────────────────────────────────────────────── 1.25 */
  T['1.25'] = {
    id: '1.25',
    unidad: 6,
    titulo: `Lógica Proposicional`,
    resumen: `Estudiarás proposiciones, conectivos lógicos, tablas de verdad y equivalencias para analizar y verificar argumentos matemáticos.`,
    objetivos: [
      `Identificar proposiciones y aplicar los conectivos lógicos: negación, conjunción, disyunción, condicional y bicondicional.`,
      `Construir tablas de verdad para fórmulas proposicionales complejas.`,
      `Clasificar fórmulas como tautologías, contradicciones o contingencias.`,
      `Aplicar las leyes de De Morgan y equivalencias lógicas para simplificar expresiones.`
    ],
    teoria: [
      { titulo: `Proposiciones y conectivos`, html: `<p>Una <strong>proposición</strong> es un enunciado que puede ser verdadero (V) o falso (F), no ambos. Ejemplos: "2 + 2 = 4" (V), "7 es par" (F). No son proposiciones: preguntas, órdenes o exclamaciones.</p><p>Los <strong>conectivos lógicos</strong> combinan proposiciones:</p><ul><li><strong>Negación:</strong> ¬p (no p)</li><li><strong>Conjunción:</strong> p ∧ q (p y q)</li><li><strong>Disyunción:</strong> p ∨ q (p o q)</li><li><strong>Condicional:</strong> p → q (si p entonces q)</li><li><strong>Bicondicional:</strong> p ↔ q (p si y solo si q)</li></ul>` },
      { titulo: `Tablas de verdad`, html: `<p>Una <strong>tabla de verdad</strong> muestra el valor de una fórmula para todas las combinaciones posibles de sus proposiciones atómicas. Para n variables hay 2ⁿ filas.</p><p>Para p y q (4 filas):</p><ul><li><span class="math">¬p</span>: opuesto de p</li><li><span class="math">p ∧ q</span>: V solo cuando ambos son V</li><li><span class="math">p ∨ q</span>: F solo cuando ambos son F</li><li><span class="math">p → q</span>: F solo cuando p es V y q es F</li><li><span class="math">p ↔ q</span>: V cuando p y q tienen el mismo valor</li></ul>` },
      { titulo: `Tautología, contradicción y contingencia`, html: `<p>Una fórmula es:</p><ul><li><strong>Tautología:</strong> siempre verdadera (para todas las combinaciones). Ejemplo: <span class="math">p ∨ ¬p</span> (ley del tercio excluido).</li><li><strong>Contradicción:</strong> siempre falsa. Ejemplo: <span class="math">p ∧ ¬p</span>.</li><li><strong>Contingencia:</strong> tiene al menos una fila verdadera y una falsa. La mayoría de las fórmulas son contingencias.</li></ul><p>Verificar mediante tabla de verdad: si la columna final tiene todos V es tautología; todos F es contradicción.</p>` },
      { titulo: `Leyes de De Morgan`, html: `<p>Las <strong>leyes de De Morgan</strong> relacionan la negación con la conjunción y la disyunción:</p><p><span class="math">¬(p ∧ q) ≡ ¬p ∨ ¬q</span></p><p><span class="math">¬(p ∨ q) ≡ ¬p ∧ ¬q</span></p><p>En palabras: la negación de "ambos" es "al menos uno no"; la negación de "al menos uno" es "ninguno". Son fundamentales para simplificar expresiones y para diseño de circuitos digitales.</p>` },
      { titulo: `Equivalencias lógicas fundamentales`, html: `<p>Dos fórmulas son <strong>lógicamente equivalentes</strong> (<span class="math">≡</span>) si tienen la misma tabla de verdad:</p><ul><li>Doble negación: <span class="math">¬¬p ≡ p</span></li><li>Conmutatividad: <span class="math">p ∧ q ≡ q ∧ p</span></li><li>Associatividad: <span class="math">(p ∧ q) ∧ r ≡ p ∧ (q ∧ r)</span></li><li>Distribución: <span class="math">p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)</span></li><li>Contrapositivo: <span class="math">p → q ≡ ¬q → ¬p</span></li><li>Implicación: <span class="math">p → q ≡ ¬p ∨ q</span></li></ul>` },
      { titulo: `Razonamiento válido`, html: `<p>Un argumento es <strong>válido</strong> si siempre que las premisas son verdaderas, la conclusión también lo es. Se verifica construyendo la tabla de verdad de <span class="math">(P₁ ∧ P₂ ∧ ... ∧ Pₙ) → C</span> y comprobando que es tautología.</p><p>Reglas de inferencia comunes:</p><ul><li>Modus ponens: de p → q y p, concluir q.</li><li>Modus tollens: de p → q y ¬q, concluir ¬p.</li><li>Silogismo hipotético: de p → q y q → r, concluir p → r.</li></ul>` },
      { titulo: `Forma normal conjuntiva y disyuntiva`, html: `<p>Toda fórmula se puede expresar en formas normales:</p><ul><li><strong>FNC (Forma Normal Conjuntiva):</strong> conjunción de disyunciones de literales (cláusulas).</li><li><strong>FND (Forma Normal Disyuntiva):</strong> disyunción de conjunciones de literales (mintérminos).</li></ul><p>Para obtener la FND: identificar las filas de la tabla de verdad donde la fórmula es V; para cada una escribir la conjunción de literales (negado si F, sin negar si V); finalmente disyuntar todas las conjunciones.</p>` }
    ],
    formulas: [
      { label: `Negación`, html: `<span class="math">¬V = F,  ¬F = V</span>` },
      { label: `Condicional (implicación)`, html: `<span class="math">p → q ≡ ¬p ∨ q</span> (F solo cuando p=V, q=F)` },
      { label: `De Morgan 1`, html: `<span class="math">¬(p ∧ q) ≡ ¬p ∨ ¬q</span>` },
      { label: `De Morgan 2`, html: `<span class="math">¬(p ∨ q) ≡ ¬p ∧ ¬q</span>` },
      { label: `Bicondicional`, html: `<span class="math">p ↔ q ≡ (p → q) ∧ (q → p)</span>` },
      { label: `Contrapositivo`, html: `<span class="math">p → q ≡ ¬q → ¬p</span>` },
      { label: `Tautología clásica`, html: `<span class="math">p ∨ ¬p ≡ V</span> (ley del tercio excluido)` },
      { label: `Contradicción clásica`, html: `<span class="math">p ∧ ¬p ≡ F</span>` }
    ],
    ejemplos: [
      { titulo: `Tabla de verdad del condicional`,
        enunciado: `Construye la tabla de verdad de <span class="math">p → q</span>.`,
        pasos: [
          `Las 4 combinaciones de (p, q): (V,V), (V,F), (F,V), (F,F).`,
          `<span class="math">p → q</span>: V→V=V, V→F=F, F→V=V, F→F=V.`,
          `Conclusión: el condicional solo es falso cuando la hipótesis es verdadera y la conclusión falsa.`
        ],
        respuesta: `Tabla: (V,V)→V, (V,F)→F, (F,V)→V, (F,F)→V.` },
      { titulo: `Verificar una tautología`,
        enunciado: `Verifica que <span class="math">p → (q → p)</span> es tautología.`,
        pasos: [
          `Reescribe: <span class="math">p → (¬q ∨ p) ≡ ¬p ∨ ¬q ∨ p</span>.`,
          `Como <span class="math">¬p ∨ p</span> es tautología, <span class="math">¬p ∨ ¬q ∨ p = V ∨ ¬q = V</span>.`,
          `Siempre es verdadera: es una tautología.`
        ],
        respuesta: `<span class="math">p → (q → p)</span> es tautología.` },
      { titulo: `Aplicar De Morgan`,
        enunciado: `Simplifica <span class="math">¬(p ∧ ¬q)</span> usando leyes de De Morgan.`,
        pasos: [
          `Aplica De Morgan: <span class="math">¬(p ∧ ¬q) ≡ ¬p ∨ ¬(¬q)</span>.`,
          `Aplica doble negación: <span class="math">¬(¬q) ≡ q</span>.`,
          `Resultado: <span class="math">¬p ∨ q</span>.`
        ],
        respuesta: `<span class="math">¬(p ∧ ¬q) ≡ ¬p ∨ q ≡ p → q</span>.` },
      { titulo: `Modus ponens`,
        enunciado: `Con las premisas "Si llueve, llevo paraguas" (p → q) y "Llueve" (p), ¿qué se concluye?`,
        pasos: [
          `Premisa 1: <span class="math">p → q</span> (si llueve, llevo paraguas).`,
          `Premisa 2: <span class="math">p</span> (llueve).`,
          `Por modus ponens: se concluye <span class="math">q</span> (llevo paraguas).`
        ],
        respuesta: `Conclusión: llevo paraguas (modus ponens).` },
      { titulo: `Contrapositivo`,
        enunciado: `Escribe el contrapositivo de "Si n es par, entonces n² es par".`,
        pasos: [
          `Original: <span class="math">p → q</span> donde p = "n es par" y q = "n² es par".`,
          `Contrapositivo: <span class="math">¬q → ¬p</span>.`,
          `En palabras: "Si n² no es par (es impar), entonces n no es par (es impar)".`
        ],
        respuesta: `Contrapositivo: "Si n² es impar, entonces n es impar".` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Calcula el valor de <span class="math">p ∧ q</span> cuando p = V y q = F.`,
        pasos: [`La conjunción es V solo cuando ambos son V.`, `V ∧ F = F.`],
        respuesta: `<span class="math">p ∧ q = F</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula <span class="math">p ∨ q</span> cuando p = F y q = F.`,
        pasos: [`La disyunción es F solo cuando ambos son F.`, `F ∨ F = F.`],
        respuesta: `<span class="math">p ∨ q = F</span>.` },
      { nivel: 'facil',
        enunciado: `¿Cuál es el valor de <span class="math">p → q</span> cuando p = F y q = V?`,
        pasos: [`El condicional es F solo cuando p = V y q = F.`, `F → V = V.`],
        respuesta: `<span class="math">p → q = V</span>.` },
      { nivel: 'facil',
        enunciado: `Aplica De Morgan: simplifica <span class="math">¬(p ∨ q)</span>.`,
        pasos: [`Segunda ley de De Morgan.`, `<span class="math">¬(p ∨ q) ≡ ¬p ∧ ¬q</span>.`],
        respuesta: `<span class="math">¬p ∧ ¬q</span>.` },
      { nivel: 'intermedio',
        enunciado: `Construye la tabla de verdad de <span class="math">¬p ∨ q</span> y compara con <span class="math">p → q</span>.`,
        pasos: [`Tabla de <span class="math">¬p ∨ q</span>: (V,V)→V, (V,F)→F, (F,V)→V, (F,F)→V.`, `Tabla de <span class="math">p → q</span>: (V,V)→V, (V,F)→F, (F,V)→V, (F,F)→V.`, `Son idénticas, por lo que <span class="math">p → q ≡ ¬p ∨ q</span>.`],
        respuesta: `<span class="math">p → q ≡ ¬p ∨ q</span>; son lógicamente equivalentes.` },
      { nivel: 'intermedio',
        enunciado: `Determina si <span class="math">(p → q) ∧ ¬q → ¬p</span> es tautología (modus tollens).`,
        pasos: [`Supón que (p → q) y ¬q son ambos verdaderos.`, `Si p fuera V, entonces q sería V (por p → q), contradiciendo ¬q.`, `Luego p debe ser F, es decir ¬p es V. La fórmula siempre es V: es tautología.`],
        respuesta: `Es tautología (modus tollens).` },
      { nivel: 'intermedio',
        enunciado: `Escribe el contrapositivo de <span class="math">¬p → q</span>.`,
        pasos: [`El contrapositivo de <span class="math">r → s</span> es <span class="math">¬s → ¬r</span>.`, `Con r = ¬p y s = q: contrapositivo es <span class="math">¬q → ¬(¬p) ≡ ¬q → p</span>.`],
        respuesta: `Contrapositivo: <span class="math">¬q → p</span>.` },
      { nivel: 'intermedio',
        enunciado: `Simplifica <span class="math">¬(¬p ∧ q)</span> usando leyes lógicas.`,
        pasos: [`Aplica De Morgan: <span class="math">¬(¬p ∧ q) ≡ ¬(¬p) ∨ ¬q</span>.`, `Doble negación: <span class="math">p ∨ ¬q</span>.`],
        respuesta: `<span class="math">¬(¬p ∧ q) ≡ p ∨ ¬q</span>.` },
      { nivel: 'dificil',
        enunciado: `Verifica que <span class="math">(p → q) ∧ (q → r) → (p → r)</span> es tautología (silogismo hipotético).`,
        pasos: [`Supón que p → q y q → r son V. Si p es V, entonces q es V (por p → q), y entonces r es V (por q → r).`, `Así p → r es V. Si p es F, p → r es V trivialmente.`, `En todos los casos la conclusión es V: es tautología.`],
        respuesta: `Es tautología: el silogismo hipotético es siempre válido.` },
      { nivel: 'dificil',
        enunciado: `Halla la FND de <span class="math">p ∧ ¬q</span> (ya es una cláusula, confirma su tabla).`,
        pasos: [`Tabla: (V,V)→F, (V,F)→V, (F,V)→F, (F,F)→F.`, `Solo la fila (p=V, q=F) da V: mintérmino es <span class="math">p ∧ ¬q</span>.`, `FND: <span class="math">p ∧ ¬q</span> (ya está en forma normal).`],
        respuesta: `FND: <span class="math">p ∧ ¬q</span>.` },
      { nivel: 'dificil',
        enunciado: `Determina si <span class="math">p ↔ q</span> es equivalente a <span class="math">(p ∧ q) ∨ (¬p ∧ ¬q)</span>.`,
        pasos: [`Tabla de <span class="math">p ↔ q</span>: V, F, F, V (para VV, VF, FV, FF).`, `Tabla de <span class="math">(p ∧ q) ∨ (¬p ∧ ¬q)</span>: (V∧V)∨(F∧F)=V, (V∧F)∨(F∧V)=F, (F∧V)∨(V∧F)=F, (F∧F)∨(V∧V)=V.`, `Tablas idénticas: son equivalentes.`],
        respuesta: `Sí, <span class="math">p ↔ q ≡ (p ∧ q) ∨ (¬p ∧ ¬q)</span>.` }
    ],
    teoricas: [
      { q: `¿Por qué el condicional <span class="math">F → F</span> es verdadero?`, a: `El condicional p → q es falso solo cuando la hipótesis es verdadera y la conclusión falsa (se "prometió" algo y no se cumplió). Si la hipótesis es falsa, no se "prometió" nada, así el condicional es verdadero por vacuidad.` },
      { q: `¿Qué diferencia hay entre contraposición, inverso y recíproco de p → q?`, a: `Dado p → q: el <strong>recíproco</strong> es q → p; el <strong>inverso</strong> es ¬p → ¬q; el <strong>contrapositivo</strong> es ¬q → ¬p. Solo el contrapositivo es equivalente al original.` },
      { q: `¿Por qué las leyes de De Morgan son importantes en programación?`, a: `Permiten transformar condiciones negadas en formas equivalentes más simples: <span class="math">!(A && B)</span> se convierte en <span class="math">(!A || !B)</span>. Son esenciales en diseño de circuitos lógicos y verificación de código.` },
      { q: `¿Cómo se verifica que dos fórmulas son lógicamente equivalentes?`, a: `Construyendo sus tablas de verdad y comprobando que coinciden en cada fila, o aplicando una cadena de equivalencias lógicas conocidas (leyes de De Morgan, distribución, absorción, etc.).` },
      { q: `¿Es posible que una fórmula sea tautología sin tener que construir la tabla completa?`, a: `Sí, usando equivalencias lógicas se puede simplificar algebraicamente hasta llegar a una tautología conocida, como <span class="math">p ∨ ¬p</span>. Esto es más eficiente para fórmulas con muchas variables.` },
      { q: `¿Qué significa que un argumento sea válido pero con premisas falsas?`, a: `Que la forma del razonamiento es correcta (si las premisas fueran verdaderas, la conclusión también lo sería), pero las premisas no describen la realidad. La validez es una propiedad formal, independiente de la verdad material de las premisas.` },
      { q: `¿Cuántas filas tiene la tabla de verdad de una fórmula con n variables?`, a: `2ⁿ filas, porque cada variable puede tomar 2 valores (V o F) y las combinaciones son independientes. Con 3 variables hay 8 filas, con 4 hay 16, etc.` }
    ],
    errores: [
      `Creer que p → q es falso cuando p es falso. El condicional F → q es siempre verdadero, independientemente del valor de q. Solo es falso cuando p es V y q es F.`,
      `Confundir el recíproco (q → p) con el contrapositivo (¬q → ¬p). Solo el contrapositivo es equivalente al condicional original; el recíproco no lo es en general.`,
      `Aplicar De Morgan incorrectamente negando solo parte de la fórmula. <span class="math">¬(p ∧ q) ≠ ¬p ∧ ¬q</span>; la forma correcta es <span class="math">¬p ∨ ¬q</span>.`,
      `Calcular el número de filas como 2n en lugar de 2ⁿ para n variables proposicionales. La tabla crece exponencialmente, no linealmente.`
    ],
    aplicacion: { titulo: `Verificación de condiciones en programas`, html: `<p>En un sistema bancario, se rechaza una transacción si se cumple: "la cuenta no tiene fondos suficientes Y no está pre-aprobada". Expresado como <span class="math">¬F ∧ ¬P</span>. Por De Morgan: <span class="math">¬(F ∨ P)</span>.</p><ol><li>Versión original del código: <span class="math">if (!fondos && !preaprobada)</span>.</li><li>Usando De Morgan: <span class="math">if (!(fondos || preaprobada))</span>.</li><li>Ambas condiciones son lógicamente equivalentes pero la segunda puede ser más legible.</li></ol><p>Las leyes de De Morgan son fundamentales en la optimización de consultas SQL (<span class="math">NOT (A AND B) = NOT A OR NOT B</span>) y en el diseño de circuitos digitales con puertas NAND y NOR.</p>` },
    calc: 'logica',
    examen: [
      { tipo: 'num', q: `Evalúa <span class="math">p → q</span> con p = 1 (V) y q = 0 (F). Da 1 si es V, 0 si es F.`, r: 0, tol: 0.01, pasos: [`El condicional es F solo cuando p = V y q = F.`, `Aquí p = V y q = F, así <span class="math">p → q = F = 0</span>.`] },
      { tipo: 'num', q: `Evalúa <span class="math">p → q</span> con p = 0 y q = 0. Da 1 si es V, 0 si es F.`, r: 1, tol: 0.01, pasos: [`Si p = F, el condicional es siempre V.`, `F → F = V = 1.`] },
      { tipo: 'opt', q: `¿Cuándo es falso <span class="math">p ∧ q</span>?`, opciones: [`Solo cuando p = V y q = V`, `Cuando al menos uno es F`, `Solo cuando ambos son F`, `Cuando p = V`], correcta: 1, pasos: [`La conjunción es V solo cuando ambos son V.`, `En todos los demás casos (al menos uno F) es F.`] },
      { tipo: 'num', q: `Evalúa <span class="math">p ↔ q</span> con p = V y q = V. Da 1 si es V, 0 si es F.`, r: 1, tol: 0.01, pasos: [`El bicondicional es V cuando p y q tienen el mismo valor.`, `V ↔ V = V = 1.`] },
      { tipo: 'opt', q: `¿Cuál es la simplificación de <span class="math">¬(p ∨ q)</span> por De Morgan?`, opciones: [`<span class="math">¬p ∨ ¬q</span>`, `<span class="math">¬p ∧ ¬q</span>`, `<span class="math">p ∧ q</span>`, `<span class="math">¬p ∨ q</span>`], correcta: 1, pasos: [`Segunda ley de De Morgan.`, `<span class="math">¬(p ∨ q) ≡ ¬p ∧ ¬q</span>.`] },
      { tipo: 'num', q: `¿Cuántas filas tiene la tabla de verdad de una fórmula con 3 variables?`, r: 8, tol: 0.01, pasos: [`Número de filas = 2ⁿ con n = 3.`, `2³ = 8 filas.`] },
      { tipo: 'num', q: `Evalúa <span class="math">p ∨ q</span> con p = 0 y q = 1. Da 1 si es V, 0 si es F.`, r: 1, tol: 0.01, pasos: [`La disyunción es V cuando al menos uno es V.`, `F ∨ V = V = 1.`] },
      { tipo: 'opt', q: `¿Cuál es el contrapositivo de <span class="math">p → q</span>?`, opciones: [`<span class="math">q → p</span>`, `<span class="math">¬p → ¬q</span>`, `<span class="math">¬q → ¬p</span>`, `<span class="math">¬p → q</span>`], correcta: 2, pasos: [`El contrapositivo de p → q es ¬q → ¬p.`, `Es lógicamente equivalente al original.`] },
      { tipo: 'num', q: `¿Cuántas filas de la tabla de verdad de <span class="math">p ∨ ¬p</span> dan valor V?`, r: 2, tol: 0.01, pasos: [`<span class="math">p ∨ ¬p</span> es tautología.`, `Todas las filas (2 para 1 variable) dan V.`] },
      { tipo: 'num', q: `Evalúa <span class="math">p ↔ q</span> con p = V y q = F. Da 1 si es V, 0 si es F.`, r: 0, tol: 0.01, pasos: [`El bicondicional es F cuando p y q tienen valores distintos.`, `V ↔ F = F = 0.`] }
    ]
  };

  /* ───────────────────────────────────────────────────────── 1.26 */
  T['1.26'] = {
    id: '1.26',
    unidad: 6,
    titulo: `Conjuntos y Relaciones`,
    resumen: `Estudiarás operaciones entre conjuntos, el principio de inclusión-exclusión, pares ordenados y propiedades de relaciones binarias y de equivalencia.`,
    objetivos: [
      `Realizar operaciones de unión, intersección, complemento y diferencia de conjuntos.`,
      `Aplicar el principio de inclusión-exclusión para contar elementos en uniones.`,
      `Definir y construir el producto cartesiano y relaciones binarias entre conjuntos.`,
      `Clasificar relaciones según sus propiedades: reflexiva, simétrica, antisimétrica y transitiva.`
    ],
    teoria: [
      { titulo: `Operaciones con conjuntos`, html: `<p>Dado el conjunto universal U y conjuntos A, B ⊆ U, las operaciones principales son:</p><ul><li><strong>Unión:</strong> <span class="math">A ∪ B = {x : x ∈ A ó x ∈ B}</span></li><li><strong>Intersección:</strong> <span class="math">A ∩ B = {x : x ∈ A y x ∈ B}</span></li><li><strong>Complemento:</strong> <span class="math">A' = {x ∈ U : x ∉ A}</span></li><li><strong>Diferencia:</strong> <span class="math">A − B = {x : x ∈ A y x ∉ B} = A ∩ B'</span></li></ul><p>Los diagramas de Venn son la herramienta gráfica para visualizar estas operaciones.</p>` },
      { titulo: `Principio de inclusión-exclusión`, html: `<p>Para dos conjuntos:</p><p><span class="math">|A ∪ B| = |A| + |B| − |A ∩ B|</span></p><p>Se resta la intersección para no contar dos veces los elementos comunes. Para tres conjuntos:</p><p><span class="math">|A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |A ∩ C| − |B ∩ C| + |A ∩ B ∩ C|</span></p><p>Este principio es fundamental en combinatoria y probabilidad.</p>` },
      { titulo: `Producto cartesiano y relaciones`, html: `<p>El <strong>producto cartesiano</strong> de A y B es el conjunto de todos los pares ordenados:</p><p><span class="math">A × B = {(a, b) : a ∈ A, b ∈ B}</span></p><p>Si |A| = m y |B| = n, entonces <span class="math">|A × B| = m·n</span>. Una <strong>relación binaria</strong> R de A en B es cualquier subconjunto de A × B: se escribe (a, b) ∈ R o bien aRb.</p>` },
      { titulo: `Propiedades de relaciones`, html: `<p>Una relación R en A (R ⊆ A × A) puede ser:</p><ul><li><strong>Reflexiva:</strong> (a, a) ∈ R para todo a ∈ A.</li><li><strong>Simétrica:</strong> si (a, b) ∈ R entonces (b, a) ∈ R.</li><li><strong>Antisimétrica:</strong> si (a, b) ∈ R y (b, a) ∈ R entonces a = b.</li><li><strong>Transitiva:</strong> si (a, b) ∈ R y (b, c) ∈ R entonces (a, c) ∈ R.</li></ul>` },
      { titulo: `Relación de equivalencia`, html: `<p>Una relación R es de <strong>equivalencia</strong> si es reflexiva, simétrica y transitiva a la vez. Ejemplos: igualdad (=), congruencia módulo n, "tener el mismo valor absoluto".</p><p>Las relaciones de equivalencia particionan A en <strong>clases de equivalencia</strong>: la clase de a es <span class="math">[a] = {x ∈ A : xRa}</span>. Cada elemento pertenece a exactamente una clase.</p>` },
      { titulo: `Relación de orden parcial`, html: `<p>Una relación R es de <strong>orden parcial</strong> si es reflexiva, antisimétrica y transitiva. Ejemplo: la relación ≤ en los reales, o la divisibilidad en los naturales.</p><p>En un orden parcial, dos elementos pueden no ser comparables. Si todo par de elementos es comparable, es un <strong>orden total</strong> (orden lineal). Los diagramas de Hasse visualizan órdenes parciales.</p>` },
      { titulo: `Leyes de conjuntos y dualidad`, html: `<p>Las operaciones de conjuntos satisfacen leyes análogas a la lógica proposicional:</p><ul><li>De Morgan: <span class="math">(A ∪ B)' = A' ∩ B'</span> y <span class="math">(A ∩ B)' = A' ∪ B'</span></li><li>Distribución: <span class="math">A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</span></li><li>Absorción: <span class="math">A ∪ (A ∩ B) = A</span></li></ul><p>El <strong>principio de dualidad</strong>: intercambiando ∪↔∩ y ∅↔U, toda ley se transforma en otra ley válida.</p>` }
    ],
    formulas: [
      { label: `Principio de inclusión-exclusión`, html: `<span class="math">|A ∪ B| = |A| + |B| − |A ∩ B|</span>` },
      { label: `Inclusión-exclusión para 3`, html: `<span class="math">|A ∪ B ∪ C| = |A|+|B|+|C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|</span>` },
      { label: `Producto cartesiano`, html: `<span class="math">|A × B| = |A| · |B|</span>` },
      { label: `Diferencia de conjuntos`, html: `<span class="math">A − B = A ∩ B'</span>` },
      { label: `De Morgan para conjuntos`, html: `<span class="math">(A ∪ B)' = A' ∩ B'</span>` },
      { label: `Clase de equivalencia`, html: `<span class="math">[a] = {x ∈ A : xRa}</span>` },
      { label: `Complemento`, html: `<span class="math">|A'| = |U| − |A|</span>` },
      { label: `Solo en A`, html: `<span class="math">|A − B| = |A| − |A ∩ B|</span>` }
    ],
    ejemplos: [
      { titulo: `Inclusión-exclusión`,
        enunciado: `En un grupo de 50 estudiantes, 30 estudian Cálculo, 20 estudian Álgebra y 10 estudian ambas. ¿Cuántos estudian al menos una?`,
        pasos: [
          `<span class="math">|A ∪ B| = |A| + |B| − |A ∩ B|</span>.`,
          `<span class="math">= 30 + 20 − 10 = 40</span>.`,
          `Los restantes 10 no estudian ninguna de las dos materias.`
        ],
        respuesta: `40 estudiantes estudian al menos una materia.` },
      { titulo: `Propiedades de una relación`,
        enunciado: `Determina las propiedades de la relación R = {(1,1),(2,2),(3,3),(1,2),(2,1)} en A = {1,2,3}.`,
        pasos: [
          `Reflexiva: (1,1),(2,2),(3,3) ∈ R ✓.`,
          `Simétrica: (1,2) ∈ R y (2,1) ∈ R ✓.`,
          `Transitiva: de (1,2) y (2,1) debería estar (1,1) ✓; de (2,1) y (1,2) debería estar (2,2) ✓. Transitiva ✓.`,
          `Es relación de equivalencia: reflexiva, simétrica y transitiva.`
        ],
        respuesta: `R es reflexiva, simétrica y transitiva: relación de equivalencia.` },
      { titulo: `Clases de equivalencia`,
        enunciado: `Con la relación R del ejemplo anterior, halla las clases de equivalencia.`,
        pasos: [
          `[1] = {x : xR1} = {1, 2} (pues (1,1) y (2,1) ∈ R).`,
          `[2] = {x : xR2} = {1, 2} (pues (1,2) y (2,2) ∈ R).`,
          `[3] = {x : xR3} = {3} (solo (3,3) ∈ R).`,
          `Clases distintas: {1, 2} y {3}. Particionan A. ✓`
        ],
        respuesta: `Clases: {1, 2} y {3}.` },
      { titulo: `Producto cartesiano`,
        enunciado: `Sean A = {a, b} y B = {1, 2, 3}. Lista A × B.`,
        pasos: [
          `A × B = {(a,1),(a,2),(a,3),(b,1),(b,2),(b,3)}.`,
          `|A × B| = 2 × 3 = 6 pares ordenados.`
        ],
        respuesta: `A × B = {(a,1),(a,2),(a,3),(b,1),(b,2),(b,3)}, con 6 elementos.` },
      { titulo: `Inclusión-exclusión con tres conjuntos`,
        enunciado: `En 100 personas: |A|=60, |B|=50, |C|=40, |A∩B|=20, |A∩C|=15, |B∩C|=10, |A∩B∩C|=5. Halla |A∪B∪C|.`,
        pasos: [
          `Aplica: <span class="math">|A ∪ B ∪ C| = 60 + 50 + 40 − 20 − 15 − 10 + 5</span>.`,
          `<span class="math">= 150 − 45 + 5 = 110</span>.`,
          `Nota: 110 > 100, lo que indica que la información es consistente (con la población de 100).`
        ],
        respuesta: `<span class="math">|A ∪ B ∪ C| = 110</span>.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Si |A| = 15, |B| = 10 y |A ∩ B| = 4, halla |A ∪ B|.`,
        pasos: [`<span class="math">|A ∪ B| = |A| + |B| − |A ∩ B|</span>.`, `<span class="math">= 15 + 10 − 4 = 21</span>.`],
        respuesta: `<span class="math">|A ∪ B| = 21</span>.` },
      { nivel: 'facil',
        enunciado: `Sean A = {1,2,3} y B = {2,3,4}. Halla A ∩ B.`,
        pasos: [`Los elementos en común.`, `<span class="math">A ∩ B = {2, 3}</span>.`],
        respuesta: `<span class="math">A ∩ B = {2, 3}</span>.` },
      { nivel: 'facil',
        enunciado: `Sean A = {1,2,3} y B = {2,3,4}. Halla A − B.`,
        pasos: [`Elementos en A que no están en B.`, `<span class="math">A − B = {1}</span>.`],
        respuesta: `<span class="math">A − B = {1}</span>.` },
      { nivel: 'facil',
        enunciado: `Si U = {1,2,3,4,5} y A = {1,3,5}, halla A'.`,
        pasos: [`Complemento: elementos en U que no están en A.`, `<span class="math">A' = {2, 4}</span>.`],
        respuesta: `<span class="math">A' = {2, 4}</span>.` },
      { nivel: 'intermedio',
        enunciado: `Halla |A − B| si |A| = 20 y |A ∩ B| = 7.`,
        pasos: [`<span class="math">|A − B| = |A| − |A ∩ B|</span>.`, `<span class="math">= 20 − 7 = 13</span>.`],
        respuesta: `<span class="math">|A − B| = 13</span>.` },
      { nivel: 'intermedio',
        enunciado: `Determina si la relación "a ≤ b" en ℤ es reflexiva, simétrica y transitiva.`,
        pasos: [`Reflexiva: a ≤ a siempre. ✓`, `Simétrica: si a ≤ b, ¿necesariamente b ≤ a? No (1 ≤ 2 pero 2 ≤ 1 es falso). ✗`, `Transitiva: si a ≤ b y b ≤ c entonces a ≤ c. ✓`],
        respuesta: `Reflexiva y transitiva, pero NO simétrica. Es orden parcial.` },
      { nivel: 'intermedio',
        enunciado: `Sean A = {1,2} y B = {a,b}. ¿Cuántos elementos tiene A × B?`,
        pasos: [`<span class="math">|A × B| = |A| · |B| = 2 · 2</span>.`, `<span class="math">= 4</span>.`],
        respuesta: `A × B tiene 4 pares ordenados.` },
      { nivel: 'intermedio',
        enunciado: `Aplica De Morgan: halla (A ∪ B)' en términos de A' y B'.`,
        pasos: [`Primera ley de De Morgan para conjuntos.`, `<span class="math">(A ∪ B)' = A' ∩ B'</span>.`],
        respuesta: `<span class="math">(A ∪ B)' = A' ∩ B'</span>.` },
      { nivel: 'dificil',
        enunciado: `De 200 estudiantes: 120 estudian Matemáticas, 80 estudian Física, y 40 estudian ambas. ¿Cuántos no estudian ninguna?`,
        pasos: [`<span class="math">|M ∪ F| = 120 + 80 − 40 = 160</span>.`, `Los que estudian al menos una: 160.`, `Ninguna: <span class="math">200 − 160 = 40</span>.`],
        respuesta: `40 estudiantes no estudian ninguna.` },
      { nivel: 'dificil',
        enunciado: `Verifica que la relación "tiene el mismo resto al dividir por 3" en ℤ⁺ es de equivalencia.`,
        pasos: [`Reflexiva: a − a = 0 = 3·0, mismo resto. ✓`, `Simétrica: si a y b tienen el mismo resto, también b y a. ✓`, `Transitiva: si a ≡ b (mod 3) y b ≡ c (mod 3), entonces a ≡ c (mod 3). ✓`],
        respuesta: `Es relación de equivalencia (congruencia módulo 3).` },
      { nivel: 'dificil',
        enunciado: `Halla |A ∪ B ∪ C| si |A|=30, |B|=25, |C|=20, |A∩B|=10, |A∩C|=8, |B∩C|=5, |A∩B∩C|=3.`,
        pasos: [`Aplica inclusión-exclusión de tres.`, `<span class="math">30 + 25 + 20 − 10 − 8 − 5 + 3 = 55</span>.`],
        respuesta: `<span class="math">|A ∪ B ∪ C| = 55</span>.` }
    ],
    teoricas: [
      { q: `¿Por qué en la inclusión-exclusión se suma la intersección al final?`, a: `Cuando se suman |A| + |B| + |C|, los elementos en dos conjuntos se contaron dos veces y los de los tres se contaron tres veces. Al restar las intersecciones dobles se quita demasiado (los de triple se quedan en cero), así que se suma la triple de vuelta.` },
      { q: `¿Cuál es la diferencia entre relación simétrica y antisimétrica?`, a: `Simétrica: si (a,b) ∈ R entonces (b,a) ∈ R (se cumple siempre). Antisimétrica: si (a,b) ∈ R y (b,a) ∈ R entonces a = b (no puede haber "ida y vuelta" a menos que a = b). No son opuestos: una relación puede ser ambas (igualdad) o ninguna.` },
      { q: `¿Por qué las clases de equivalencia particionan el conjunto?`, a: `Porque la relación de equivalencia es reflexiva (cada elemento está en su clase), simétrica (si a ∈ [b] entonces b ∈ [a]) y transitiva (si a y b están en la misma clase, y b y c también, entonces a y c están juntos). Así las clases son disjuntas y cubren todo el conjunto.` },
      { q: `¿Qué diferencia hay entre A − B y B − A?`, a: `En general son distintos. A − B contiene los elementos que están en A pero no en B; B − A contiene los de B que no están en A. Solo son iguales si A = B (en ese caso ambos son el vacío).` },
      { q: `¿Es el orden ≤ una relación de equivalencia?`, a: `No. La relación ≤ es reflexiva y transitiva, pero no simétrica (a ≤ b no implica b ≤ a en general). Es un orden parcial total, no una equivalencia.` },
      { q: `¿Por qué el producto cartesiano A × B ≠ B × A en general?`, a: `Porque los pares ordenados tienen posición: (a, b) ≠ (b, a) salvo que a = b. Así A × B y B × A tienen los mismos pares pero con los componentes intercambiados, que son distintos salvo que A = B.` },
      { q: `¿Cómo se usa la inclusión-exclusión en probabilidad?`, a: `La fórmula P(A ∪ B) = P(A) + P(B) − P(A ∩ B) evita contar dos veces los eventos con elementos en común. Es fundamental en el cálculo de probabilidades de eventos compuestos y para el principio de complemento.` }
    ],
    errores: [
      `Sumar |A| + |B| sin restar |A ∩ B| en la inclusión-exclusión. Esto cuenta los elementos de la intersección dos veces, sobreestimando el tamaño de la unión.`,
      `Confundir A − B con la diferencia simétrica A △ B. La diferencia A − B solo quita B de A; la diferencia simétrica incluye los elementos que están en uno pero no en el otro: <span class="math">A △ B = (A−B) ∪ (B−A)</span>.`,
      `Creer que toda relación reflexiva y simétrica es transitiva. Se puede construir una relación reflexiva y simétrica que no sea transitiva, y por tanto no sea de equivalencia.`,
      `Confundir el producto cartesiano A × B con la intersección A ∩ B. A × B forma pares ordenados de elementos de A con elementos de B; A ∩ B recoge los elementos comunes a ambos.`
    ],
    aplicacion: { titulo: `Conteo de usuarios únicos en redes sociales`, html: `<p>Una empresa tiene usuarios en tres plataformas: Facebook (F): 1500, Instagram (I): 1200, Twitter (T): 800. Intersecciones: |F∩I|=400, |F∩T|=200, |I∩T|=150, |F∩I∩T|=80.</p><ol><li>Usuarios únicos (al menos una plataforma): <span class="math">|F ∪ I ∪ T| = 1500 + 1200 + 800 − 400 − 200 − 150 + 80 = 2830</span>.</li><li>Solo en Facebook: <span class="math">1500 − 400 − 200 + 80 = 980</span>.</li><li>El principio de inclusión-exclusión evita contar usuarios que están en varias plataformas.</li></ol><p>Este principio es fundamental en análisis de datos, deduplicación de registros y estadísticas de audiencia en marketing digital.</p>` },
    calc: 'relaciones',
    examen: [
      { tipo: 'num', q: `Si |A| = 30, |B| = 20 y |A ∩ B| = 8, halla |A ∪ B|.`, r: 42, tol: 0.01, pasos: [`<span class="math">|A ∪ B| = |A| + |B| − |A ∩ B|</span>.`, `<span class="math">= 30 + 20 − 8 = 42</span>.`] },
      { tipo: 'num', q: `Si |A| = 25, |B| = 15 y |A ∩ B| = 5, halla |A ∪ B|.`, r: 35, tol: 0.01, pasos: [`<span class="math">|A ∪ B| = 25 + 15 − 5</span>.`, `<span class="math">= 35</span>.`] },
      { tipo: 'opt', q: `¿Qué operación produce los elementos en A pero no en B?`, opciones: [`<span class="math">A ∪ B</span>`, `<span class="math">A ∩ B</span>`, `<span class="math">A − B</span>`, `<span class="math">B − A</span>`], correcta: 2, pasos: [`La diferencia A − B = A ∩ B' quita de A los elementos de B.`, `A − B contiene exactamente los de A que no están en B.`] },
      { tipo: 'num', q: `Si |A| = 18 y |A ∩ B| = 6, halla |A − B|.`, r: 12, tol: 0.01, pasos: [`<span class="math">|A − B| = |A| − |A ∩ B|</span>.`, `<span class="math">= 18 − 6 = 12</span>.`] },
      { tipo: 'num', q: `¿Cuántos pares ordenados tiene A × B si |A| = 4 y |B| = 5?`, r: 20, tol: 0.01, pasos: [`<span class="math">|A × B| = |A| · |B|</span>.`, `<span class="math">= 4 · 5 = 20</span>.`] },
      { tipo: 'opt', q: `Una relación R es de equivalencia si es:`, opciones: [`Reflexiva y simétrica`, `Reflexiva, simétrica y transitiva`, `Simétrica y transitiva`, `Reflexiva y antisimétrica`], correcta: 1, pasos: [`Definición: reflexiva + simétrica + transitiva.`, `Las tres propiedades son necesarias para que sea equivalencia.`] },
      { tipo: 'num', q: `En un grupo de 50 personas: |A| = 30, |B| = 25, |A ∩ B| = 10. ¿Cuántas no están en ningún conjunto?`, r: 5, tol: 0.01, pasos: [`<span class="math">|A ∪ B| = 30 + 25 − 10 = 45</span>.`, `Ninguno: <span class="math">50 − 45 = 5</span>.`] },
      { tipo: 'num', q: `Si |U| = 100 y |A| = 40, halla |A'|.`, r: 60, tol: 0.01, pasos: [`<span class="math">|A'| = |U| − |A|</span>.`, `<span class="math">= 100 − 40 = 60</span>.`] },
      { tipo: 'opt', q: `¿Cuál es la ley de De Morgan para conjuntos correcta?`, opciones: [`<span class="math">(A ∩ B)' = A' ∩ B'</span>`, `<span class="math">(A ∪ B)' = A' ∪ B'</span>`, `<span class="math">(A ∩ B)' = A' ∪ B'</span>`, `<span class="math">(A ∪ B)' = A ∩ B</span>`], correcta: 2, pasos: [`Segunda ley de De Morgan para conjuntos.`, `<span class="math">(A ∩ B)' = A' ∪ B'</span>.`] },
      { tipo: 'num', q: `Halla |A ∪ B ∪ C| con |A|=20, |B|=15, |C|=10, |A∩B|=5, |A∩C|=3, |B∩C|=4, |A∩B∩C|=2.`, r: 35, tol: 0.01, pasos: [`<span class="math">20 + 15 + 10 − 5 − 3 − 4 + 2</span>.`, `<span class="math">= 35</span>.`] }
    ]
  };

  /* ───────────────────────────────────────────────────────── 1.27 */
  T['1.27'] = {
    id: '1.27',
    unidad: 6,
    titulo: `Inducción, Combinatoria y Grafos`,
    resumen: `Aplicarás el principio de inducción matemática, contarás con permutaciones y combinaciones, y analizarás propiedades básicas de grafos y árboles.`,
    objetivos: [
      `Demostrar identidades y desigualdades usando el principio de inducción matemática.`,
      `Aplicar el principio fundamental del conteo, permutaciones P(n,r) y combinaciones C(n,r).`,
      `Identificar los elementos de un grafo (vértices, aristas, grado) y recorridos básicos.`,
      `Reconocer árboles y aplicar la propiedad n vértices ↔ n−1 aristas para grafos conexos acíclicos.`
    ],
    teoria: [
      { titulo: `Principio de inducción matemática`, html: `<p>Para demostrar que P(n) es verdadero para todo n ≥ n₀:</p><ol><li><strong>Paso base:</strong> verifica que P(n₀) es verdadero.</li><li><strong>Hipótesis inductiva:</strong> supón que P(k) es verdadero para algún k ≥ n₀.</li><li><strong>Paso inductivo:</strong> demuestra que P(k+1) es verdadero usando la hipótesis.</li></ol><p>Si los tres pasos se cumplen, P(n) es verdadero para todo n ≥ n₀. La inducción es el motor de las demostraciones en matemática discreta.</p>` },
      { titulo: `Principio fundamental del conteo`, html: `<p>Si una tarea se realiza en k etapas independientes, con n₁ formas en la etapa 1, n₂ en la etapa 2, ..., nₖ en la etapa k, entonces el número total de formas es:</p><p><span class="math">n₁ · n₂ · ... · nₖ</span></p><p>Ejemplo: hay 3 camisetas y 4 pantalones, luego hay 12 combinaciones posibles de ropa. Es la base de todas las fórmulas combinatorias.</p>` },
      { titulo: `Permutaciones y combinaciones`, html: `<p>El <strong>factorial</strong>: <span class="math">n! = n·(n−1)·...·2·1</span>, con <span class="math">0! = 1</span>.</p><p>La <strong>permutación</strong> de n en r (arreglos ordenados de r elementos de n):</p><p><span class="math">P(n, r) = n! / (n − r)!</span></p><p>La <strong>combinación</strong> de n en r (subconjuntos de r elementos de n, sin orden):</p><p><span class="math">C(n, r) = n! / (r! · (n − r)!)</span></p><p>Siempre P(n,r) ≥ C(n,r) pues la permutación cuenta el orden y la combinación no.</p>` },
      { titulo: `Propiedades de combinaciones`, html: `<p>Las combinaciones satisfacen identidades útiles:</p><ul><li><strong>Simetría:</strong> <span class="math">C(n, r) = C(n, n − r)</span></li><li><strong>Pascal:</strong> <span class="math">C(n, r) = C(n−1, r−1) + C(n−1, r)</span></li><li><strong>Fórmulas extremas:</strong> <span class="math">C(n, 0) = C(n, n) = 1</span></li><li><strong>Binomio de Newton:</strong> <span class="math">(a + b)ⁿ = Σᵣ C(n,r) aⁿ⁻ʳ bʳ</span></li></ul>` },
      { titulo: `Grafos: definición y terminología`, html: `<p>Un <strong>grafo</strong> G = (V, E) consiste en un conjunto de <strong>vértices</strong> V y un conjunto de <strong>aristas</strong> E (pares de vértices). El <strong>grado</strong> de un vértice v, deg(v), es el número de aristas incidentes en v.</p><p>Teorema del apretón de manos: <span class="math">Σ deg(v) = 2|E|</span> (cada arista contribuye 2 al total de grados). Un grafo es <strong>conexo</strong> si existe camino entre cualquier par de vértices.</p>` },
      { titulo: `Caminos, ciclos y árboles`, html: `<p>Un <strong>camino</strong> de u a v es una secuencia de vértices y aristas sin repetir aristas. Un <strong>ciclo</strong> es un camino cerrado (empieza y termina en el mismo vértice) que no repite vértices.</p><p>Un <strong>árbol</strong> es un grafo conexo sin ciclos. Propiedades equivalentes: tiene n vértices y n−1 aristas; existe exactamente un camino entre cualquier par de vértices; al quitar cualquier arista se desconecta.</p>` },
      { titulo: `Grafos eulerianos y hamiltonianos`, html: `<p>Un <strong>ciclo euleriano</strong> recorre todas las aristas exactamente una vez y regresa al inicio. Existe si y solo si el grafo es conexo y todos los vértices tienen grado par (teorema de Euler).</p><p>Un <strong>ciclo hamiltoniano</strong> visita todos los vértices exactamente una vez. No hay criterio simple análogo al de Euler; es un problema NP-completo en general. Aplicaciones: problema del viajante (TSP), diseño de rutas.</p>` }
    ],
    formulas: [
      { label: `Factorial`, html: `<span class="math">n! = n · (n−1) · ... · 2 · 1,  0! = 1</span>` },
      { label: `Permutaciones`, html: `<span class="math">P(n, r) = n! / (n − r)!</span>` },
      { label: `Combinaciones`, html: `<span class="math">C(n, r) = n! / (r! · (n − r)!)</span>` },
      { label: `Simetría de combinaciones`, html: `<span class="math">C(n, r) = C(n, n − r)</span>` },
      { label: `Pascal`, html: `<span class="math">C(n, r) = C(n−1, r−1) + C(n−1, r)</span>` },
      { label: `Apretón de manos`, html: `<span class="math">∑ deg(v) = 2|E|</span>` },
      { label: `Árbol: aristas`, html: `<span class="math">|E| = |V| − 1</span> para árbol (grafo conexo sin ciclos)` },
      { label: `Principio fundamental`, html: `<span class="math">N = n₁ · n₂ · ... · nₖ</span> (etapas independientes)` }
    ],
    ejemplos: [
      { titulo: `Inducción matemática`,
        enunciado: `Demuestra que <span class="math">1 + 2 + ... + n = n(n+1)/2</span> para todo n ≥ 1.`,
        pasos: [
          `Paso base (n=1): <span class="math">1 = 1·2/2 = 1</span>. ✓`,
          `HI: supón que <span class="math">1 + 2 + ... + k = k(k+1)/2</span>.`,
          `Paso inductivo: <span class="math">1 + 2 + ... + k + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2</span>. ✓`,
          `Por inducción, la fórmula vale para todo n ≥ 1.`
        ],
        respuesta: `Demostrado por inducción: <span class="math">∑ᵢ₌₁ⁿ i = n(n+1)/2</span>.` },
      { titulo: `Combinaciones`,
        enunciado: `¿De cuántas formas se pueden elegir 3 personas de un grupo de 8?`,
        pasos: [
          `Usamos combinaciones (el orden no importa): <span class="math">C(8, 3) = 8! / (3! · 5!)</span>.`,
          `<span class="math">= (8 · 7 · 6) / (3 · 2 · 1) = 336 / 6 = 56</span>.`
        ],
        respuesta: `Hay 56 formas de elegir 3 personas de 8.` },
      { titulo: `Permutaciones`,
        enunciado: `¿De cuántas formas se puede elegir y ordenar un presidente, vicepresidente y secretario de entre 10 candidatos?`,
        pasos: [
          `El orden importa: <span class="math">P(10, 3) = 10! / (10−3)! = 10! / 7!</span>.`,
          `<span class="math">= 10 · 9 · 8 = 720</span>.`
        ],
        respuesta: `Hay 720 formas (permutaciones).` },
      { titulo: `Teorema del apretón de manos`,
        enunciado: `Un grafo tiene 6 aristas. Si todos los vértices tienen grado 3, ¿cuántos vértices tiene?`,
        pasos: [
          `Por el apretón de manos: <span class="math">∑ deg(v) = 2|E| = 2·6 = 12</span>.`,
          `Si cada vértice tiene grado 3: <span class="math">|V| · 3 = 12 ⟹ |V| = 4</span>.`
        ],
        respuesta: `El grafo tiene 4 vértices.` },
      { titulo: `Árbol y número de aristas`,
        enunciado: `Un árbol tiene 7 vértices. ¿Cuántas aristas tiene?`,
        pasos: [
          `Por definición, un árbol con n vértices tiene n−1 aristas.`,
          `Con 7 vértices: <span class="math">7 − 1 = 6</span> aristas.`
        ],
        respuesta: `El árbol tiene 6 aristas.` }
    ],
    ejercicios: [
      { nivel: 'facil',
        enunciado: `Calcula C(5, 2).`,
        pasos: [`<span class="math">C(5, 2) = 5! / (2! · 3!)</span>.`, `<span class="math">= (5 · 4) / (2 · 1) = 10</span>.`],
        respuesta: `<span class="math">C(5, 2) = 10</span>.` },
      { nivel: 'facil',
        enunciado: `Calcula P(5, 2).`,
        pasos: [`<span class="math">P(5, 2) = 5! / 3!</span>.`, `<span class="math">= 5 · 4 = 20</span>.`],
        respuesta: `<span class="math">P(5, 2) = 20</span>.` },
      { nivel: 'facil',
        enunciado: `¿Cuántas aristas tiene un árbol con 10 vértices?`,
        pasos: [`Un árbol tiene n−1 aristas.`, `Con n = 10: 9 aristas.`],
        respuesta: `9 aristas.` },
      { nivel: 'facil',
        enunciado: `Calcula 4!.`,
        pasos: [`<span class="math">4! = 4 · 3 · 2 · 1</span>.`, `<span class="math">= 24</span>.`],
        respuesta: `<span class="math">4! = 24</span>.` },
      { nivel: 'intermedio',
        enunciado: `¿De cuántas formas se pueden organizar 5 libros en un estante?`,
        pasos: [`El orden importa: permutaciones de 5 elementos.`, `<span class="math">P(5,5) = 5! = 120</span>.`],
        respuesta: `120 formas.` },
      { nivel: 'intermedio',
        enunciado: `Calcula C(10, 3).`,
        pasos: [`<span class="math">C(10,3) = 10!/(3!·7!) = (10·9·8)/(3·2·1)</span>.`, `<span class="math">= 720/6 = 120</span>.`],
        respuesta: `<span class="math">C(10, 3) = 120</span>.` },
      { nivel: 'intermedio',
        enunciado: `Usando inducción, verifica el paso base y la hipótesis para <span class="math">2ⁿ > n</span> con n = 1 y n = k.`,
        pasos: [`Paso base n=1: <span class="math">2¹ = 2 > 1</span>. ✓`, `HI: supón <span class="math">2ᵏ > k</span>. Paso inductivo: <span class="math">2<sup>k+1</sup> = 2·2ᵏ > 2k ≥ k+1</span> para k ≥ 1. ✓`],
        respuesta: `Demostrado: <span class="math">2ⁿ > n</span> para todo n ≥ 1.` },
      { nivel: 'intermedio',
        enunciado: `Un grafo tiene 4 vértices y todos tienen grado 2. ¿Cuántas aristas tiene?`,
        pasos: [`Apretón de manos: <span class="math">∑ deg = 4·2 = 8 = 2|E|</span>.`, `<span class="math">|E| = 4</span>.`],
        respuesta: `El grafo tiene 4 aristas.` },
      { nivel: 'dificil',
        enunciado: `¿Cuántas palabras de 3 letras distintas se pueden formar con las letras {A, B, C, D, E}?`,
        pasos: [`El orden importa, sin repetición: <span class="math">P(5,3) = 5!/(5−3)!</span>.`, `<span class="math">= 5·4·3 = 60</span>.`],
        respuesta: `60 palabras.` },
      { nivel: 'dificil',
        enunciado: `Demuestra el paso inductivo de <span class="math">∑ᵢ₌₁ⁿ (2i−1) = n²</span> (suma de impares).`,
        pasos: [`HI: <span class="math">∑ᵢ₌₁ᵏ (2i−1) = k²</span>.`, `Paso k+1: <span class="math">k² + (2(k+1)−1) = k² + 2k + 1 = (k+1)²</span>. ✓`],
        respuesta: `Paso inductivo demostrado: la fórmula vale para k+1.` },
      { nivel: 'dificil',
        enunciado: `¿Cuántos subconjuntos de tamaño 4 se pueden formar de un conjunto de 9 elementos?`,
        pasos: [`<span class="math">C(9,4) = 9!/(4!·5!)</span>.`, `<span class="math">= (9·8·7·6)/(4·3·2·1) = 3024/24 = 126</span>.`],
        respuesta: `<span class="math">C(9, 4) = 126</span>.` }
    ],
    teoricas: [
      { q: `¿Por qué la inducción matemática es una demostración válida y no solo verificar ejemplos?`, a: `La inducción no es verificación parcial: el paso inductivo demuestra que si la propiedad vale para k, entonces vale para k+1. Combinado con el paso base, esto garantiza la verdad para todos los infinitos naturales mediante un "efecto dominó" lógicamente riguroso.` },
      { q: `¿Cuál es la diferencia entre permutaciones y combinaciones?`, a: `En las permutaciones el orden importa (arreglos): {A,B} y {B,A} son distintos. En las combinaciones el orden no importa (selecciones): {A,B} y {B,A} son el mismo subconjunto. Por eso <span class="math">P(n,r) = r! · C(n,r) ≥ C(n,r)</span>.` },
      { q: `¿Qué dice el teorema del apretón de manos y por qué es verdadero?`, a: `Que la suma de los grados de todos los vértices es el doble del número de aristas. Es verdadero porque cada arista contribuye exactamente 1 al grado de cada uno de sus dos extremos, sumando 2 al total.` },
      { q: `¿Por qué un árbol con n vértices tiene exactamente n−1 aristas?`, a: `Por inducción: un árbol con 1 vértice tiene 0 aristas (1−1=0). Al añadir un vértice a un árbol (conectado por exactamente una arista para mantener la conexión sin crear ciclos), aristas pasan de n−1 a n, y vértices de n a n+1. La diferencia siempre es 1.` },
      { q: `¿Por qué C(n, r) = C(n, n−r)?`, a: `Elegir r elementos de n equivale a elegir cuáles n−r elementos se quedan fuera. Ambas selecciones describen la misma partición del conjunto; por tanto el número de formas es el mismo.` },
      { q: `¿Cuál es la condición necesaria y suficiente para que un grafo conexo tenga un ciclo euleriano?`, a: `Que todos sus vértices tengan grado par. La condición es necesaria porque al entrar a un vértice por una arista se debe salir por otra, así cada vértice necesita aristas en número par. Es suficiente porque se puede construir el ciclo por el algoritmo de Hierholzer.` },
      { q: `¿Cuántos subconjuntos tiene un conjunto de n elementos?`, a: `Tiene 2ⁿ subconjuntos (incluyendo el vacío y el conjunto mismo), porque para cada elemento hay 2 opciones independientes: incluirlo o no. Esto es el caso particular C(n,0)+C(n,1)+...+C(n,n) = 2ⁿ del binomio de Newton con a=b=1.` }
    ],
    errores: [
      `Confundir permutaciones con combinaciones. Si el orden importa, se usa P(n,r); si no importa, C(n,r). En la práctica: "¿son diferentes {A,B} y {B,A}?" Si sí → permutación; si no → combinación.`,
      `Olvidar el paso base en la inducción matemática. Sin verificar el caso inicial, la cadena de implicaciones no tiene punto de partida y la demostración es incompleta.`,
      `Calcular el número de aristas de un árbol como n (en lugar de n−1). Un árbol con n vértices tiene exactamente n−1 aristas; n aristas implicaría la presencia de al menos un ciclo.`,
      `Aplicar el principio fundamental multiplicando cuando los eventos no son independientes. Si la elección de una etapa afecta las opciones de otra, se deben considerar las restricciones explícitamente.`
    ],
    aplicacion: { titulo: `Conteo de circuitos en redes de telecomunicaciones`, html: `<p>Una red de telecomunicaciones conecta 8 ciudades. Se quiere instalar un árbol de expansión mínimo para evitar redundancias:</p><ol><li>Un árbol de expansión con n = 8 vértices tiene <span class="math">n−1 = 7</span> enlaces de fibra óptica.</li><li>El número de árboles de expansión posibles en un grafo completo K₈ es 8⁶ = 262,144 (fórmula de Cayley).</li><li>Para elegir 3 ciudades como nodos principales: <span class="math">C(8,3) = 56</span> formas.</li></ol><p>La teoría de grafos y la combinatoria son la base del diseño de redes, algoritmos de enrutamiento (Dijkstra, Prim, Kruskal) y la optimización de infraestructura de comunicaciones.</p>` },
    calc: 'grafos',
    examen: [
      { tipo: 'num', q: `Calcula C(5, 2).`, r: 10, tol: 0.01, pasos: [`<span class="math">C(5,2) = 5!/(2!·3!) = (5·4)/(2·1)</span>.`, `<span class="math">= 10</span>.`] },
      { tipo: 'num', q: `Calcula C(6, 3).`, r: 20, tol: 0.01, pasos: [`<span class="math">C(6,3) = 6!/(3!·3!) = (6·5·4)/(3·2·1)</span>.`, `<span class="math">= 120/6 = 20</span>.`] },
      { tipo: 'num', q: `¿Cuántas aristas tiene un árbol con 8 vértices?`, r: 7, tol: 0.01, pasos: [`Un árbol con n vértices tiene n−1 aristas.`, `Con n=8: <span class="math">8−1 = 7</span>.`] },
      { tipo: 'num', q: `Calcula P(4, 2).`, r: 12, tol: 0.01, pasos: [`<span class="math">P(4,2) = 4!/(4−2)! = 4!/2!</span>.`, `<span class="math">= 4·3 = 12</span>.`] },
      { tipo: 'opt', q: `Un grafo con 5 vértices todos de grado 2, ¿cuántas aristas tiene?`, opciones: [`5`, `10`, `4`, `6`], correcta: 0, pasos: [`Apretón de manos: <span class="math">∑ deg = 5·2 = 10 = 2|E|</span>.`, `<span class="math">|E| = 5</span>.`] },
      { tipo: 'num', q: `Calcula C(10, 2).`, r: 45, tol: 0.01, pasos: [`<span class="math">C(10,2) = 10!/(2!·8!) = (10·9)/2</span>.`, `<span class="math">= 45</span>.`] },
      { tipo: 'num', q: `¿Cuántos arreglos ordenados de 2 letras distintas hay en {A,B,C,D}?`, r: 12, tol: 0.01, pasos: [`Permutaciones <span class="math">P(4,2) = 4·3</span>.`, `<span class="math">= 12</span>.`] },
      { tipo: 'opt', q: `¿Cuál es la diferencia entre P(n,r) y C(n,r)?`, opciones: [`P(n,r) no existe para r > n/2`, `P(n,r) cuenta orden; C(n,r) no`, `C(n,r) siempre es mayor`, `Son iguales cuando r = 1`], correcta: 1, pasos: [`Permutaciones: arreglos ordenados (el orden importa).`, `Combinaciones: subconjuntos (el orden no importa). P(n,r) = r!·C(n,r).`] },
      { tipo: 'num', q: `En el paso base de inducción para <span class="math">∑ᵢ₌₁ⁿ i = n(n+1)/2</span>, ¿cuál es el valor de ambos lados en n=1?`, r: 1, tol: 0.01, pasos: [`Lado izquierdo: <span class="math">∑ᵢ₌₁¹ i = 1</span>.`, `Lado derecho: <span class="math">1·2/2 = 1</span>.`] },
      { tipo: 'num', q: `Calcula C(7, 4) usando la simetría <span class="math">C(n,r) = C(n, n−r)</span>.`, r: 35, tol: 0.01, pasos: [`<span class="math">C(7,4) = C(7,3) = 7!/(3!·4!)</span>.`, `<span class="math">= (7·6·5)/(3·2·1) = 35</span>.`] }
    ]
  };

})();

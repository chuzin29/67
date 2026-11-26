# Guía para Claude Code — Precálculo 67

Sitio estático (HTML + CSS + JS vanilla, sin build ni dependencias). Idioma de todo el contenido: **español**. Probar en local: `python3 -m http.server 8000`.

## Estructura
- `index.html`: portada, menú, una `<section id="primero|segundo|tercero" class="view">` por año y los `<script>` en orden. Al cambiar un JS/CSS, sube el número `?v=N` de su `<script>`/`<link>` para evitar la caché de GitHub Pages.
- Tres años: **1.er** (`primero-*`, `data-1a-*`, 19 temas), **2.º** (`segundo*`, `data-2a-*`, 24 temas), **3.er** (`tercero-*`, `data-3a-*`, 27 temas). Cada uno se monta una vez al cargar: `Primero.mount(...)`, `Segundo`, `Tercero` (script inline al final de `index.html`).
- `assets/js/pizarra.js`: motor de la pizarra (`PZ.*`) y `Pizarra.auto(ejercicio)`, que arma una pizarra con los `pasos` de cualquier ejemplo o ejercicio.

## Contrato de datos de un tema
`window.CURSO_1A | CURSO_2A | CURSO_3A .temas['1.X']` (en `data-Na-uN.js`):
`id, unidad, titulo, resumen (≤160 car.), objetivos[3-4], teoria[{titulo,html}×5-9], formulas[{label,html}×4-9], ejemplos[{titulo,enunciado,pasos[≥2],respuesta}×4-6], ejercicios[{nivel:'facil'|'intermedio'|'dificil',enunciado,pasos[≥2],respuesta}×10-12 (≥3 fáciles, ≥3 intermedios, ≥2 difíciles)], teoricas[{q,a}×7-8], errores[3-4], aplicacion{titulo,html}, calc:'clave', examen[10]`.
Examen: `{tipo:'opt',q,opciones[4],correcta,pasos[≥2]}`, `{tipo:'num',q,r,tol,pasos}` o `{tipo:'par',q,r:[x,y],tol,pasos}`; al menos 6 de 10 deben ser `num`/`par`.

## Reglas de escritura (importante)
- **Nunca uses `^`** para potencias: usa `<sup>` (o ² ³). Raíces con `√`. Fracciones `a/b` o `<span class="math">a/b</span>`. Signo menos `−`.
- Sin `<script>`, `<img>` ni `style=` dentro del contenido; todo `<span>` bien cerrado.
- No inventes datos ni enlaces: los videos van en `videos-Na.js` solo si el ID de YouTube es real y verificado.
- Esta página **no incluye soluciones de exámenes reales**, solo ayuda a aprender.

## Pizarra (método paso a paso)
`pizarra-Na-N.js` define `window.PIZARRA_1A|2A|3A['1.X'] = [{titulo,intro,pasos:[{nota,html,reemplaza?}]}]`. Cada paso agrega líneas; `reemplaza:true` redibuja la figura anterior. Ayudantes en `pizarra.js`: `PZ.row, PZ.c(color,…), PZ.box, PZ.tach, PZ.flecha, PZ.ambos, PZ.llave, PZ.tabla, PZ.f(n,d), PZ.say, PZ.tijeras, PZ.ruffini`. Las figuras son `<svg>` en línea con trazos de tiza; **dentro de un svg el texto va en texto plano unicode** (el renderizador matemático no actúa ahí).

## Calculadoras y gráficos
`*-calc.js` (`T1Calc|S2Calc|T3Calc`): `{titulo, vars:[{id,label,min,max,step,def}], run(v) → {tipo,resultado,extra,pasos}}`. `*-graf.js` dibuja el gráfico interactivo con la misma clave. La clave `calc` del tema debe existir en ambos.

## Antes de subir cambios
1. Carga la página en local y revisa la consola (sin errores) y que cada pestaña del tema abra.
2. Comprueba a mano la matemática de cualquier ejemplo que cambies.
3. Sube los `?v=` de lo modificado.

## Registro de cambios (obligatorio)
Cada vez que cambies algo, agrega una entrada al principio de la sección «Cambios» del `README.md`: fecha, quién (persona y si fue con Claude), qué se cambió, archivos tocados y pendientes. Hazlo en el mismo commit que el cambio.

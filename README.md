# Precálculo 67

Sitio web interactivo para aprender, practicar y evaluarte en **Precálculo (1.º y 2.º año)** y **Cálculo (3.er año)** de Bachillerato.

> **Esta página está basada en el programa de estudio del MINED de El Salvador, con el fin de ayudar a los estudiantes a aprender más fácilmente la materia de matemática. Creada por Brandon de Jesús y Jimena con ayuda de Claude.**
>
> **Esta página no contiene respuestas ni soluciones de exámenes: solo busca ayudar a aprender los temas.**

Todo en una sola página, sin dependencias ni instalación: https://chuzin29.github.io/67/

## 📌 Nota para quien mantiene el repo: nuevas mascotas (25/11/2026, Jimena)

Se agregó un equipo de mascotas que ayudan en los tres años. Cheuscita se mantiene.

| Mascota | Oficio | Dónde ayuda | Qué hace |
| --- | --- | --- | --- |
| Pugsito | Constructor | Ejercicios | Muestra la solución un paso cada vez |
| Rockytos | Bomberos | Ejemplos, ejercicios, examen | Errores comunes; en examen apaga 2 opciones o da el primer paso |
| Mamoi | Cocinera | Ejemplos, ejercicios, examen | Fórmulas del tema |
| Rovin | Detective | Ejemplos, ejercicios | Datos del enunciado y primera pista |
| Manchita | Auditora | Ejercicios | Lista para revisar tu respuesta |
| Manchita y Rovin | Agentes | Examen | Mensajes durante la pregunta y el resultado |

**Ampliación (v3):** botón flotante «Ayuda» dentro de cada tema (actúa sobre el ejercicio en pantalla o lleva a Práctica), sonidos distintos por acción, y Manchita permite comparar la respuesta y marcar el ejercicio como dominado. Versiones actuales: `mascotas.js?v=3`, `style.css?v=32`.

**Resumen de Cheuscita (v4):** en la pestaña Video, Cheuscita muestra el resumen, puntos importantes, fórmulas y errores comunes. Se genera con los datos de cada tema (no es una transcripción del video). Versiones actuales: `mascotas.js?v=4`, `style.css?v=33`.

**Resúmenes de video (v5):** `assets/js/resumenes-video.js` guarda lo que explica cada video (clave = id de YouTube). Por ahora hay resumen de `BuCSeFMTiOE` (1.er año, 1.8) y `PbvKVSWyvpI` (1.er año, 1.10); los demás muestran solo el resumen del tema.

**Temas de 1.er año:** esta nota quedó reemplazada por la sección «Cambios del 25/11/2026» de más abajo (los temas 1.15 a 1.18 que se habían puesto aquí ahora son otros).

**Archivos**

- Nuevos: `assets/js/mascotas.js` (lógica, frases y sonidos con Web Audio) y `assets/img/mascotas/*.webp`.
- Cambiados: `assets/css/style.css` (bloque «Equipo de mascotas», `?v=31`), `assets/js/app.js` (el botón de sonido también silencia a Cheuscita, `?v=14`) e `index.html` (script y versiones).

**A tener en cuenta**

- `mascotas.js` se apoya en las clases `.s2-prob`, `.s2-ex`, `.s2-q`, `.s2-fb`, `.s2-result-card`, `.s2-num` y `.s2-head .s2-tile`; si cambian, hay que actualizarlo.
- La ayuda de Rockytos en el examen no resta puntos.
- Rovin es el siamés de la mancha blanca en la cara; Manchita, el de la nariz y cara más oscuras. Si cambias un retrato, sube el `?v=` de la imagen en `mascotas.js`.

## 🔄 Cambios (registro) — 25/11/2026 (Brandon y Claude), para Jimena y quien siga

> **Regla del proyecto:** cada vez que alguien (con o sin Claude) cambie algo, debe dejar anotado el cambio en esta sección «Cambios», con fecha, quién lo hizo, qué archivos tocó y qué quedó pendiente. Así el resto del equipo siempre sabe qué hay de nuevo. Las entradas nuevas van arriba.

Resumen de lo que se modificó después de las mascotas. Si vas a tocar algo de esto, léelo primero.

**1.er año alineado con el programa del MINED** (se comparó con el índice del libro ESMATE de 1.º de bachillerato)
- **Se quitaron** los temas 1.15 a 1.18 que había (cónicas, exponenciales y logaritmos, sucesiones, combinatoria y probabilidad): son de 2.º año y ya están allí. Se quitaron también sus videos y pizarras.
- **Temas nuevos** (con teoría, ejemplos, práctica, pizarra a mano, calculadora/gráfico y examen):
  - 1.15 Ecuación cuadrática y números complejos (`data-1a-u6a.js`, `pizarra-1a-6a.js`)
  - 1.16 Razones trigonométricas de ángulos no agudos (`…6b`)
  - 1.17 Ecuaciones trigonométricas (`…6c`)
  - 1.18 Producto escalar de vectores (`…6d`)
  - 1.19 Muestreo, estadísticos y parámetros (`…6e`)
- 1.14 (estadística descriptiva) se mantiene en `data-1a-u5.js`. Los períodos de 1.er año están en `PER` de `primero-ui.js`: I álgebra (1.1–1.4, 1.15, 1.5), II funciones, III trigonometría (1.9–1.11, 1.16, 1.17), IV vectores y complejos (1.12, 1.18, 1.13), V estadística (1.14, 1.19).
- **Videos:** 1.1 a 1.15 tienen video (1.14 y 1.15 son de Matemáticas profe Alex). **Faltan 1.16 a 1.19**: no se encontró un ID verificable; no inventar enlaces, mostrar el enlace de búsqueda.
- 2.º año se verificó contra el índice del libro de 2.º y coincide (24 temas), sin cambios.

**3.er año reordenado** (los 27 temas y sus números no cambian, solo el orden y los nombres)
- Ciclo I · Cálculo diferencial: 1.1–1.7 y 1.10–1.16.
- Ciclo II · Cálculo integral: 1.17–1.24, más 1.8 y 1.9 (complejos).
- Software · Matemática discreta para software: 1.25–1.27.
- Se cambió la palabra «período» por «ciclo» en la vista de 3.er año (`PER` en `tercero-ui.js`).

**Pizarra con nuevo diseño** (`pizarra.js`, `style.css`)
- Marco de madera, bandeja con tizas y borrador, puntos de progreso y globo del profe.
- Las soluciones de ejemplos y ejercicios (`Pizarra.auto`) ahora tienen pasos numerados, flechas entre líneas, botón ▶ Reproducir (avanza solo) y flechas del teclado.
- En 1.er año, un tema sin pizarra hecha a mano muestra la pizarra automática de sus ejemplos.

**Créditos:** ya no dice «Colegio Don Bosco»; dice «basada en el programa de estudio del MINED de El Salvador» (portada, pie y este README). No se afirma que el MINED la avale.

**Otros:** se añadió `CLAUDE.md` con la guía para trabajar con Claude Code (estructura, contrato de datos, reglas de escritura). Total: 70 temas (19 + 24 + 27).

**Pendiente**
- Videos de 1.16 a 1.19 y, si se quiere, las versiones más nuevas de Profe Alex en 3.er año.
- Un docente debería revisar los temas nuevos de 1.er año (1.15 a 1.19) antes de usarlos en clase.

## Qué incluye

Tres años, una misma metodología (70 temas):

| Año | Curso | Temas |
| --- | --- | --- |
| 1.er año | Precálculo (programa MINED): álgebra, ecuación cuadrática, funciones, trigonometría, vectores, complejos y estadística | 19 (1.1–1.19) |
| 2.º año | Precálculo: ecuaciones, rectas, cónicas, funciones, logaritmos, sucesiones, conteo y probabilidad | 24 (1.1–1.24) |
| 3.er año | Cálculo de ingeniería: Ciclo I (cálculo diferencial), Ciclo II (cálculo integral) y módulo de matemática discreta para software | 27 (1.1–1.27) |

Cada tema tiene:

- **Teoría** en acordeones y **fórmulas clave**.
- **Pizarra**: el método explicado paso a paso, como en clase (tijeras, Ruffini, árboles, figuras…).
- **Video** de YouTube y **gráficos interactivos** con deslizadores.
- **Ejemplos** y **práctica** por niveles (fácil, intermedio, difícil); las soluciones también se ven en la pizarra.
- **Preguntas teóricas**, errores comunes y una aplicación real.
- **Calculadora** y **mini‑examen** autocorregible, más modo examen por tema, unidad o período.

## Estructura

```
.
├── index.html                       # Portada, menú, secciones de cada año y scripts
├── CLAUDE.md                        # Guía para modificar el proyecto con Claude Code
└── assets
    ├── css/style.css
    └── js
        ├── app.js                   # Navegación, tema claro/oscuro, portada
        ├── math-render.js, format.js
        ├── pizarra.js               # Motor de la pizarra (PZ.*) y pizarra automática
        ├── symbiote.js              # Botones con efecto líquido
        ├── mascotas.js              # Equipo de mascotas (ayudas y sonidos)
        ├── data-1a-u1…u6e.js        # Contenido de 1.er año
        ├── pizarra-1a-1…5, 6a…6e.js # Pizarras hechas a mano de 1.er año
        ├── primero-ui.js, primero-calc.js, primero-graf.js, videos-1a.js
        ├── data-2a-u1…u8.js, pizarra-2a-1…6.js
        ├── segundo.js, segundo-calc.js, videos-2a.js
        ├── data-3a-u1…u6.js, pizarra-3a-1…5.js
        └── tercero-ui.js, tercero-calc.js, tercero-graf.js, videos-3a.js
```

HTML, CSS y JavaScript sin frameworks ni compilación.

## ¿Quieres cambiar o mejorar algo?

Es un proyecto abierto y pensado para modificarse, con o sin Claude:

1. Haz un *fork* o clona el repositorio.
2. Abre la carpeta con [Claude Code](https://claude.com/claude-code) y descríbele lo que quieres («agrega un tema», «mejora la pizarra del tema 1.7 de 2.º año», «cambia los colores»). Claude lee `CLAUDE.md` y ya sabe cómo está organizado.
3. Pruébalo en local (abajo) y abre un *pull request*.

Ideas que aún faltan: videos para los temas que aún no tengan, más pizarras hechas a mano para los ejercicios, y modos de práctica interactivos.

## Uso local

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Características

- Diseño responsive, tema claro y oscuro (con predominio del morado) y progreso guardado en `localStorage`.
- Gráficos SVG generados en tiempo real; accesibilidad por teclado y etiquetas ARIA.
- Respeta `prefers-reduced-motion`.

## Créditos

Contenido basado en el programa de estudio del MINED de El Salvador. Diseño inspirado en el proyecto [TORNUTI](https://github.com/chuzin29/TORNUTI).

Creada por Brandon de Jesús y Jimena con ayuda de Claude, para ayudar a más estudiantes a aprender.

Esta página no contiene respuestas ni soluciones de exámenes: solo busca ayudar a aprender los temas.

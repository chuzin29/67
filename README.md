# Precálculo 67

Sitio web interactivo para aprender, practicar y evaluarte en **Precálculo (1.º y 2.º año)** y **Cálculo (3.er año)** de Bachillerato.

> **Esta página está basada en las clases de precálculo en el Colegio Don Bosco 2026, con el fin de ayudar a los estudiantes a aprender más fácilmente la materia de precálculo. Creada por Brandon de Jesús con ayuda de Claude.**
>
> **Esta página no contiene respuestas ni soluciones de exámenes: solo busca ayudar a aprender los temas.**

Todo en una sola página, sin dependencias ni instalación: https://chuzin29.github.io/67/

## Qué incluye

Tres años, una misma metodología (64 temas):

| Año | Curso | Temas |
| --- | --- | --- |
| 1.er año | Precálculo: álgebra, funciones, trigonometría, vectores y complejos | 13 (1.1–1.13) |
| 2.º año | Precálculo: ecuaciones, rectas, cónicas, funciones, logaritmos, sucesiones, conteo y probabilidad | 24 (1.1–1.24) |
| 3.er año | Cálculo: límites, trigonometría y complejos, derivadas, integrales, vectores y matemática discreta | 27 (1.1–1.27) |

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
        ├── data-1a-u1…u4.js         # Contenido de 1.er año
        ├── pizarra-1a-1…4.js        # Pizarras hechas a mano de 1.er año
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

Ideas que aún faltan: videos reales para más temas (los de 1.er año están vacíos), más pizarras hechas a mano para los ejercicios, y modos de práctica interactivos.

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

Contenido basado en las clases de precálculo del Colegio Don Bosco (2026) y en el resumen del curso de Matemática 2A. Diseño inspirado en el proyecto [TORNUTI](https://github.com/chuzin29/TORNUTI).

Creada por Brandon de Jesús con ayuda de Claude, para ayudar a más estudiantes a aprender.

Esta página no contiene respuestas ni soluciones de exámenes: solo busca ayudar a aprender los temas.

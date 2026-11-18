# Precálculo 67

Sitio web interactivo para aprender, practicar y evaluarte en **precálculo** y en **Matemática de 2.º año de Bachillerato**.

> **Esta página está basada en las clases de precálculo en el Colegio Don Bosco 2026, con el fin de ayudar a los estudiantes a aprender más fácilmente la materia de precálculo. Creada por Brandon de Jesús con ayuda de Claude.**
>
> **Esta página no contiene respuestas ni soluciones de exámenes: solo busca ayudar a aprender los temas.**

Todo en una sola página, sin dependencias ni instalación: https://chuzin29.github.io/67/

## Qué incluye

### 2.º año de Bachillerato (Matemática 2A)

24 temas en 8 unidades y 4 períodos:

| Período | Unidades y temas |
| --- | --- |
| I | U1 Ecuaciones (1.1–1.3) · U2 Recta (1.4–1.6) · U3 Parábola (1.7) |
| II | U3 Circunferencia, elipse e hipérbola (1.8–1.10) · U4 Funciones trascendentales I (1.11–1.12) |
| III | U5 Funciones II: inyectividad, inversa, logaritmos y trigonometría (1.13–1.16) · U6 Sucesiones (1.17–1.18) |
| IV | U7 Conjuntos y conteo (1.19–1.21) · U8 Probabilidad y Bayes (1.22–1.24) |

Cada tema tiene:

- **Teoría** en acordeones, **fórmulas clave** y un **video de YouTube** explicativo.
- **Gráficos interactivos** con deslizadores y animación.
- **Ejemplos** que se revelan paso a paso.
- **Práctica** con 11 ejercicios por niveles (fácil, intermedio, difícil), solución completa y progreso.
- **Preguntas teóricas**, errores comunes y una aplicación real.
- **Calculadora** con gráfica y pasos, y **mini‑examen** autocorregible.
- **Modo examen** por tema, unidad, período o simulacro mixto del año.
- Navegación libre: menú con todos los temas, «Ver todo» en una página, atajos de teclado y búsqueda.

### Precálculo base

- **Vectores** y **números complejos** (con teorema de Moivre).
- **Trigonometría**: ley del seno, ley del coseno, caso ambiguo e identidades.
- **Estadística descriptiva**: media, mediana, moda, varianza y desviación típica.
- 30 ejercicios resueltos, 24 prácticos, 8 de Moivre y 60 preguntas teóricas, con filtros y buscador.

## Estructura

```
.
├── index.html
└── assets
    ├── css/style.css
    └── js
        ├── math-render.js, format.js     # Notación matemática
        ├── data-core.js, data-bancos.js, data-teoria.js   # Precálculo base
        ├── data-2a-u1.js … data-2a-u8.js # Contenido de 2.º año (por unidad)
        ├── videos-2a.js                  # Video por tema
        ├── segundo-calc.js               # 24 calculadoras y gráficos interactivos
        ├── segundo.js                    # Vista de 2.º año, práctica y exámenes
        ├── symbiote.js                   # Botones con efecto líquido
        └── app.js                        # Navegación, calculadoras y exámenes base
```

HTML, CSS y JavaScript sin frameworks ni compilación.

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

# Precálculo 67

Sitio web interactivo de **precálculo** que reúne teoría, calculadoras con gráficos y bancos de ejercicios de las tres guías del curso:

- **Vectores** y **números complejos** (con teorema de Moivre).
- **Trigonometría**: ley del seno, ley del coseno, caso ambiguo e identidades.
- **Estadística descriptiva**: media, mediana y moda.

Todo en una sola página, sin dependencias ni instalación.

## Contenido

| Sección | Qué incluye |
| --- | --- |
| Inicio | Portada, estadísticas y ruta de estudio |
| Teoría | Cuatro bloques con definiciones, propiedades y fórmulas |
| Vectores | Lista de referencia, calculadora (suma, resta, escalar, norma, producto escalar, ángulo, proyección) y plano cartesiano |
| Complejos | Lista z₁–z₃₀, calculadora (operaciones, conjugado, módulo, argumento, forma polar y potencia n-ésima) y plano complejo |
| Trigonometría | Resolvedor de triángulos AAS/ASA, SAS y LLL con figura a escala |
| Estadística | Calculadora de media, mediana, moda, rango, varianza y desviación típica con gráfico de frecuencias |
| Ejercicios | 30 ejercicios resueltos paso a paso, 5 niveles, filtros y progreso |
| Bancos | 24 ejercicios prácticos, 8 de Moivre y 60 preguntas teóricas con filtros, búsqueda y respuestas modelo |
| Examen | Modo numérico (vectores/complejos) y modo teórico autoevaluado |

### Bancos de práctica

- **24 ejercicios prácticos** — leyes del seno y del coseno, vectores, complejos, identidades trigonométricas y estadística.
- **8 ejercicios del teorema de Moivre** — conversión a forma polar y potencia n-ésima.
- **60 preguntas teóricas** — con respuesta modelo, filtros por tema y buscador.

## Estructura

```
.
├── index.html
├── cheuscita.png
└── assets
    ├── css
    │   └── style.css
    └── js
        ├── math-render.js   # Raíces, fracciones y paréntesis matemáticos
        ├── format.js        # Helpers de notación matemática
        ├── data-core.js     # 30 ejercicios base
        ├── data-bancos.js   # 24 prácticos + 8 de Moivre
        ├── data-teoria.js   # 60 preguntas teóricas
        └── app.js           # Navegación, calculadoras, SVG y exámenes
```

Es HTML, CSS y JavaScript sin frameworks: los scripts se cargan como archivos clásicos, así que funciona incluso abriendo `index.html` directamente.

## Uso local

```bash
# Opción 1: abrir index.html en el navegador
# Opción 2: servidor local
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Características

- Diseño responsive (escritorio, tableta y móvil) con menú desplegable.
- Tema oscuro y claro con preferencia guardada.
- Calculadoras que muestran resultados en forma exacta y decimal.
- Gráficos SVG generados en tiempo real (planos cartesiano y complejo, triángulos, frecuencias).
- Progreso guardado en `localStorage`.
- Accesibilidad: navegación por teclado, etiquetas ARIA y enlace para saltar al contenido.
- Respeta `prefers-reduced-motion`.

## Créditos

Contenido basado en las guías del curso de precálculo: *Banco de 24 Ejercicios Prácticos*, *Banco de 8 Ejercicios «Teorema de Moivre»* y *Banco de 60 Preguntas Teóricas*.

Hecho para aprender resolviendo.

/* tercero.js — Cálculo 3er año (esqueleto; contenido por completar) */
(function (global) {
  'use strict';
  var root, mounted = false;

  var TEMAS = {
    // LÍMITES
    '1.1': { unidad:1, titulo:'Concepto de límite', resumen:'Qué es un límite, notación y definición intuitiva.' },
    '1.2': { unidad:1, titulo:'Límites laterales', resumen:'Límite por la izquierda y por la derecha; existencia del límite.' },
    '1.3': { unidad:1, titulo:'Límites al infinito', resumen:'Comportamiento de funciones cuando x → ±∞; asíntotas horizontales.' },
    '1.4': { unidad:1, titulo:'Continuidad', resumen:'Definición formal, tipos de discontinuidades, Teorema del Valor Intermedio.' },
    '1.5': { unidad:1, titulo:'Límites trigonométricos', resumen:'lim(sin x / x) = 1; formas indeterminadas 0/0.' },
    // DERIVADAS
    '2.1': { unidad:2, titulo:'Definición y reglas básicas', resumen:'Derivada como límite del cociente diferencial; reglas de potencia, suma, producto y cociente.' },
    '2.2': { unidad:2, titulo:'Regla de la cadena', resumen:'Derivación de funciones compuestas; casos especiales.' },
    '2.3': { unidad:2, titulo:'Derivadas trigonométricas', resumen:'Derivadas de sen, cos, tan y sus recíprocas.' },
    '2.4': { unidad:2, titulo:'Derivadas implícitas', resumen:'Diferenciación implícita; derivadas de orden superior.' },
    '2.5': { unidad:2, titulo:'Aplicaciones', resumen:'Recta tangente/normal, máximos, mínimos, concavidad; Teorema de Moivre en contexto complejo.' },
    // INTEGRALES
    '3.1': { unidad:3, titulo:'Integral indefinida', resumen:'Antiderivada, constante de integración; reglas básicas.' },
    '3.2': { unidad:3, titulo:'Técnicas de integración', resumen:'Sustitución (cambio de variable), integración por partes.' },
    '3.3': { unidad:3, titulo:'Integral definida', resumen:'Sumas de Riemann; Teorema Fundamental del Cálculo partes I y II.' },
    '3.4': { unidad:3, titulo:'Área entre curvas', resumen:'Área como integral definida; intersección de curvas.' },
    '3.5': { unidad:3, titulo:'Integrales trigonométricas', resumen:'Potencias de sen y cos; identidades Pitágoras; sustitución trigonométrica.' },
    // ÁLGEBRA VECTORIAL
    '4.1': { unidad:4, titulo:'Vectores en ℝ³', resumen:'Magnitud, dirección, operaciones; vectores unitarios i, j, k.' },
    '4.2': { unidad:4, titulo:'Producto punto y cruz', resumen:'Producto escalar (ángulo entre vectores); producto vectorial (normal a un plano).' },
    '4.3': { unidad:4, titulo:'Planos y líneas en el espacio', resumen:'Ecuación vectorial y paramétrica de rectas; ecuación del plano.' },
    '4.4': { unidad:4, titulo:'Funciones vectoriales', resumen:'Límite, derivada e integral vectorial; curvas en el espacio.' },
    // MATEMÁTICA DISCRETA
    '5.1': { unidad:5, titulo:'Lógica proposicional', resumen:'Tablas de verdad, tautologías, equivalencias lógicas.' },
    '5.2': { unidad:5, titulo:'Conjuntos y relaciones', resumen:'Operaciones, diagramas de Venn, relaciones de equivalencia.' },
    '5.3': { unidad:5, titulo:'Combinatoria avanzada', resumen:'Principio de inclusión-exclusión, permutaciones y combinaciones con restricciones.' },
    '5.4': { unidad:5, titulo:'Grafos básicos', resumen:'Definición, representación, recorridos de Euler y Hamilton.' }
  };
  var UNIDADES = [
    { n:1, titulo:'Límites y Continuidad', temas:['1.1','1.2','1.3','1.4','1.5'] },
    { n:2, titulo:'Derivadas', temas:['2.1','2.2','2.3','2.4','2.5'] },
    { n:3, titulo:'Integrales', temas:['3.1','3.2','3.3','3.4','3.5'] },
    { n:4, titulo:'Álgebra Vectorial', temas:['4.1','4.2','4.3','4.4'] },
    { n:5, titulo:'Matemática Discreta', temas:['5.1','5.2','5.3','5.4'] }
  ];

  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

  function renderHome(){
    var h='<div class="s2-home-wrap"><div class="s2-home-hero"><span class="eyebrow">3er año · Ingeniería</span><h2>Cálculo y Álgebra</h2>'
      +'<p class="lead">20 temas en 5 unidades: Límites, Derivadas, Integrales, Vectorial y Discreta. Contenido completo en próxima actualización.</p></div>';
    UNIDADES.forEach(function(u){
      h+='<div class="s3-unit u'+u.n+'"><h3 class="s3-uhead">Unidad '+u.n+' — '+esc(u.titulo)+'</h3><div class="s3-grid">';
      u.temas.forEach(function(id){var t=TEMAS[id];
        h+='<button class="s3-card u'+u.n+'" data-s3open="'+id+'"><span class="s2-id">'+id+'</span><strong>'+esc(t.titulo)+'</strong><p>'+esc(t.resumen)+'</p><span class="s3-wip">Próximamente</span></button>';
      });
      h+='</div></div>';
    });
    h+='</div>';
    root.innerHTML=h;
  }

  function mount(){
    if(mounted)return;
    root=document.getElementById('s3Root');
    if(!root)return;
    mounted=true;
    renderHome();
    root.addEventListener('click',function(e){
      var b=e.target.closest('[data-s3open]');
      if(b){ alert('Tema '+b.dataset.s3open+' — contenido completo próximamente.'); }
    });
  }

  global.Tercero={mount:mount};
})(window);

/* data-9-base.js — 9.º grado: utilidades para armar los temas.
   Formato compacto: `…` = matemática. Cada generador devuelve
   [enunciado, [pasos], respuesta, valor numérico para el examen, pregunta del examen]. */
window.CURSO_9 = window.CURSO_9 || { temas: {} };
window.N9 = (function () {
  'use strict';
  function m(s) { return String(s).replace(/`([^`]+)`/g, '<span class="math">$1</span>'); }
  function n(x) { return String(Math.round(x * 1000) / 1000).replace('-', '−'); }
  /* término con signo: s(3) = "+ 3", s(−3) = "− 3" */
  function s(x) { return (x < 0 ? '− ' : '+ ') + n(Math.abs(x)); }
  function co(k, v) { return (k === 1 ? '' : k === -1 ? '−' : n(k)) + v; }
  /* polinomio ax² + bx + c */
  function poly(a, b, c) {
    var out = co(a, 'x²');
    if (b) out += (b < 0 ? ' − ' : ' + ') + co(Math.abs(b), 'x');
    if (c) out += ' ' + s(c);
    return out;
  }
  function bin(k, q) { return '(' + co(k, 'x') + ' ' + s(q) + ')'; }
  function raiz(x) { var f = 1, r = x, i; for (i = 2; i * i <= r; i++) while (r % (i * i) === 0) { r /= i * i; f *= i; } return r === 1 ? String(f) : (f === 1 ? '' : f) + '√' + r; }
  function tabla(rows) { return '<div class="n9-tabla"><table>' + rows.map(function (r, i) { var t = i ? 'td' : 'th'; return '<tr>' + r.map(function (c) { return '<' + t + '>' + m(c) + '</' + t + '>'; }).join('') + '</tr>'; }).join('') + '</table></div>'; }
  function tema(num, o) {
    var id = '1.' + num;
    function item(g, p) { var r = g.apply(null, p); return { enunciado: m(r[0]), pasos: r[1].map(m), respuesta: m(r[2]) }; }
    var ejercicios = [];
    ['facil', 'intermedio', 'dificil'].forEach(function (nv, k) { o.practica[k].forEach(function (p) { var e = item(o.gen[k], p); e.nivel = nv; ejercicios.push(e); }); });
    var examen = o.examen.map(function (x) { var r = o.gen[x[0]].apply(null, x[1]); return { tipo: 'num', q: m(r[4]), r: Math.round(r[3] * 1000) / 1000, tol: 0.1, pasos: r[1].map(m) }; })
      .concat(o.opciones.map(function (x) { return { tipo: 'opt', q: m(x[0]), opciones: x[1].map(m), correcta: x[2], pasos: x[3].map(m) }; }));
    var teoria = o.teoria.map(function (x) { return { titulo: x[0], html: '<p>' + m(x[1]) + '</p>' }; });
    teoria.push({ titulo: 'Tabla comparativa', html: tabla(o.tabla) });
    teoria.push({ titulo: 'Ojo con la notación', html: '<div class="n9-ojo"><strong>⚠️ Ojo con la notación</strong><p>' + m(o.ojo) + '</p></div>' });
    if (o.calculo) teoria.push({ titulo: 'Conexión con Cálculo', html: '<div class="n9-calc"><strong>🚀 Conexión con Cálculo (3.er año)</strong><p>' + m(o.calculo) + '</p></div>' });
    window.CURSO_9.temas[id] = {
      id: id, unidad: o.unidad, ruta: !!o.calculo, titulo: o.titulo, resumen: o.resumen, objetivos: o.objetivos, teoria: teoria,
      formulas: o.formulas.map(function (x) { return { label: x[0], html: x[1] }; }),
      ejemplos: o.ejemplos.map(function (x) { var e = item(o.gen[x[1]], x[2]); e.titulo = x[0]; return e; }),
      ejercicios: ejercicios,
      teoricas: o.teoricas.map(function (x) { return { q: x[0], a: m(x[1]) }; }),
      errores: o.errores.map(m), aplicacion: { titulo: o.aplicacion[0], html: '<p>' + m(o.aplicacion[1]) + '</p>' }, calc: o.calc, examen: examen
    };
  }
  return { m: m, n: n, s: s, co: co, poly: poly, bin: bin, raiz: raiz, tema: tema };
})();

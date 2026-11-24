/* primero-calc.js — Calculadoras de 1.er año · Precálculo (13 temas). */
(function (global) {
  'use strict';
  function r2(x, d) { var k = Math.pow(10, d == null ? 4 : d); return Math.round((x + Number.EPSILON) * k) / k; }
  function fmtRad(n) {
    if (n < 0) return null;
    var r = Math.sqrt(n);
    if (Number.isInteger(r)) return String(r);
    var out = 1, rem = n;
    for (var f = 2; f * f <= rem; f++) { while (rem % (f * f) === 0) { out *= f; rem /= (f * f); } }
    return (out > 1 ? out + '√' + rem : '√' + rem);
  }
  function mcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }

  var C = {};

  C['racionalizar'] = {
    titulo: 'Racionalizar c / (√a ± √b)',
    vars: [{ id: 'c', label: 'Numerador (c)', min: -20, max: 20, step: 1, def: 5 }, { id: 'a', label: 'Radicando a', min: 1, max: 30, step: 1, def: 3 }, { id: 'b', label: 'Radicando b (0 = monomio)', min: 0, max: 30, step: 1, def: 1 }, { id: 'signo', label: 'Signo (−1 resta, 1 suma)', min: -1, max: 1, step: 2, def: -1 }],
    run: function (v) {
      var c = v.c, a = v.a, b = v.b, s = v.signo, pasos = [];
      if (b === 0) {
        if (a <= 0) return { tipo: 'texto', resultado: 'El radicando debe ser positivo', pasos: ['Elige a > 0'] };
        var val = c * Math.sqrt(a) / a;
        pasos.push('Denominador monomio: multiplica por √a / √a.');
        pasos.push('c·√a / a = ' + r2(c, 2) + '·√' + a + ' / ' + a);
        return { tipo: 'valor', resultado: r2(val, 4), extra: '= ' + r2(c / a, 4) + '·√' + a, pasos: pasos };
      }
      var A = a, B = b;
      var den = A - B * s * s; // (√a + s√b)(√a − s√b) = a − b
      den = A - B;
      pasos.push('Conjugado del denominador: cambia el signo central.');
      pasos.push('Multiplica numerador y denominador por el conjugado.');
      pasos.push('Denominador: (√a)² − (√b)² = ' + A + ' − ' + B + ' = ' + den);
      if (den === 0) return { tipo: 'texto', resultado: 'a = b: el denominador se anula, elige otros valores', pasos: pasos };
      var val2 = c / den;
      return { tipo: 'valor', resultado: r2(val2, 4), extra: 'c·(√a ∓ √b) / ' + den, pasos: pasos };
    }
  };

  C['binomio'] = {
    titulo: '(ax + b)² y (ax + b)(ax − b)',
    vars: [{ id: 'a', label: 'a', min: -10, max: 10, step: 1, def: 2 }, { id: 'b', label: 'b', min: -10, max: 10, step: 1, def: 3 }],
    run: function (v) {
      var a = v.a, b = v.b;
      var cuad = [a * a, 2 * a * b, b * b], dif = [a * a, -(b * b)];
      var pasos = ['(ax)² = ' + (a * a) + 'x²', '2(ax)(b) = ' + (2 * a * b) + 'x', 'b² = ' + (b * b)];
      return { tipo: 'texto', resultado: '(' + a + 'x + ' + b + ')² = ' + cuad[0] + 'x² + ' + cuad[1] + 'x + ' + cuad[2] + '   |   (' + a + 'x+' + b + ')(' + a + 'x−' + b + ') = ' + dif[0] + 'x² − ' + dif[1] * -1, pasos: pasos };
    }
  };

  C['factorizar'] = {
    titulo: 'Factorizar ax² + bx + c (tijeras)',
    vars: [{ id: 'a', label: 'a', min: 1, max: 6, step: 1, def: 1 }, { id: 'b', label: 'b', min: -12, max: 12, step: 1, def: -1 }, { id: 'c', label: 'c', min: -12, max: 12, step: 1, def: -6 }],
    run: function (v) {
      var a = v.a, b = v.b, c = v.c, pasos = [];
      var disc = b * b - 4 * a * c;
      if (disc < 0) return { tipo: 'texto', resultado: 'No factoriza en los reales (discriminante negativo)', pasos: ['Δ = b² − 4ac = ' + disc + ' < 0'] };
      var sq = Math.sqrt(disc);
      if (!Number.isInteger(sq)) return { tipo: 'texto', resultado: 'Raíces irracionales: Δ = ' + disc + ' no es cuadrado perfecto', pasos: ['Prueba otros coeficientes enteros'] };
      var r1 = (-b + sq) / (2 * a), r2v = (-b - sq) / (2 * a);
      pasos.push('Δ = b² − 4ac = ' + disc);
      pasos.push('x = (−b ± √Δ) / (2a) → raíces ' + r2v + ' y ' + r1);
      var frac = function (n, d) { var g = mcd(n, d); return (d < 0 ? -n / g : n / g) + (Math.abs(d / g) === 1 ? '' : '/' + Math.abs(d / g)); };
      return { tipo: 'texto', resultado: a + 'x² ' + (b >= 0 ? '+' : '−') + ' ' + Math.abs(b) + 'x ' + (c >= 0 ? '+' : '−') + ' ' + Math.abs(c) + ' = ' + a + '(x − (' + r2v + '))(x − (' + r1 + '))', pasos: pasos };
    }
  };

  C['ruffini'] = {
    titulo: 'División sintética P(x) ÷ (x − a)',
    vars: [{ id: 'c3', label: 'Coef. x³', min: -5, max: 5, step: 1, def: 1 }, { id: 'c2', label: 'Coef. x²', min: -12, max: 12, step: 1, def: -3 }, { id: 'c1', label: 'Coef. x', min: -12, max: 12, step: 1, def: -4 }, { id: 'c0', label: 'Término indep.', min: -12, max: 12, step: 1, def: 12 }, { id: 'a', label: 'a (divisor x − a)', min: -6, max: 6, step: 1, def: 2 }],
    run: function (v) {
      var coef = [v.c3, v.c2, v.c1, v.c0], a = v.a, out = [coef[0]], pasos = [];
      for (var i = 1; i < coef.length; i++) out.push(coef[i] + out[i - 1] * a);
      var residuo = out[out.length - 1], cociente = out.slice(0, -1);
      pasos.push('Baja el primer coeficiente: ' + coef[0]);
      pasos.push('Multiplica por a = ' + a + ' y suma al siguiente, en cadena.');
      pasos.push('Residuo = P(' + a + ') = ' + residuo);
      return { tipo: 'texto', resultado: 'Cociente: ' + cociente.map(function (x, i) { return x; }).join(', ') + '  —  Residuo: ' + residuo, pasos: pasos };
    }
  };

  C['desigualdad'] = {
    titulo: 'Desigualdad lineal ax + b (>,<) 0',
    vars: [{ id: 'a', label: 'a', min: -10, max: 10, step: 1, def: 2 }, { id: 'b', label: 'b', min: -20, max: 20, step: 1, def: -6 }, { id: 'tipo', label: 'Tipo (1 = >, −1 = <)', min: -1, max: 1, step: 2, def: 1 }],
    run: function (v) {
      var a = v.a, b = v.b, t = v.tipo, pasos = [];
      if (a === 0) return { tipo: 'texto', resultado: 'a no puede ser 0', pasos: ['Elige a ≠ 0'] };
      var x0 = -b / a, flip = a < 0, signo = (t === 1) !== flip ? '>' : '<';
      pasos.push('Despeja x: ' + a + 'x ' + (t === 1 ? '>' : '<') + ' ' + (-b));
      pasos.push('Divide entre a = ' + a + (flip ? ' (cambia el sentido por ser negativo)' : ''));
      return { tipo: 'texto', resultado: 'x ' + signo + ' ' + r2(x0, 3) + '  →  intervalo ' + (signo === '>' ? '(' + r2(x0, 3) + ', +∞)' : '(−∞, ' + r2(x0, 3) + ')'), pasos: pasos };
    }
  };

  C['lineal'] = {
    titulo: 'Función lineal f(x) = mx + b',
    vars: [{ id: 'm', label: 'Pendiente m', min: -5, max: 5, step: 0.5, def: 1 }, { id: 'b', label: 'Ordenada b', min: -10, max: 10, step: 1, def: 0 }, { id: 'x', label: 'Evaluar en x', min: -10, max: 10, step: 1, def: 2 }],
    run: function (v) {
      var y = v.m * v.x + v.b;
      return { tipo: 'valor', resultado: r2(y, 3), extra: 'f(' + v.x + ') = ' + v.m + '(' + v.x + ') + ' + v.b, pasos: ['Sustituye x = ' + v.x + ' en f(x) = mx + b', 'f(' + v.x + ') = ' + r2(v.m * v.x, 3) + ' + ' + v.b + ' = ' + r2(y, 3)] };
    }
  };

  C['cuadratica'] = {
    titulo: 'Vértice de f(x) = ax² + bx + c',
    vars: [{ id: 'a', label: 'a', min: -5, max: 5, step: 0.5, def: 1 }, { id: 'b', label: 'b', min: -10, max: 10, step: 1, def: -4 }, { id: 'c', label: 'c', min: -10, max: 10, step: 1, def: 3 }],
    run: function (v) {
      if (v.a === 0) return { tipo: 'texto', resultado: 'a no puede ser 0', pasos: ['Elige a ≠ 0'] };
      var h = -v.b / (2 * v.a), k = v.a * h * h + v.b * h + v.c;
      return { tipo: 'par', resultado: [r2(h, 3), r2(k, 3)], extra: (v.a > 0 ? 'Mínimo' : 'Máximo') + ' en el vértice', pasos: ['h = −b/(2a) = ' + r2(h, 3), 'k = f(h) = a·h² + b·h + c = ' + r2(k, 3)] };
    }
  };

  C['func-especial'] = {
    titulo: 'Asíntotas de f(x) = a / (x − h) + k',
    vars: [{ id: 'a', label: 'a', min: -10, max: 10, step: 1, def: 1 }, { id: 'h', label: 'h (asíntota vertical)', min: -8, max: 8, step: 1, def: 2 }, { id: 'k', label: 'k (asíntota horizontal)', min: -8, max: 8, step: 1, def: 1 }],
    run: function (v) {
      return { tipo: 'texto', resultado: 'Asíntota vertical: x = ' + v.h + '   Asíntota horizontal: y = ' + v.k, pasos: ['El denominador x − h = 0 cuando x = ' + v.h, 'Cuando x → ±∞, a/(x−h) → 0, así que f(x) → ' + v.k] };
    }
  };

  C['trig-rectangulo'] = {
    titulo: 'Razones trigonométricas (triángulo rectángulo)',
    vars: [{ id: 'op', label: 'Cateto opuesto', min: 1, max: 20, step: 1, def: 3 }, { id: 'ady', label: 'Cateto adyacente', min: 1, max: 20, step: 1, def: 4 }],
    run: function (v) {
      var hip = Math.sqrt(v.op * v.op + v.ady * v.ady);
      var sen = v.op / hip, cos = v.ady / hip, tan = v.op / v.ady;
      return { tipo: 'texto', resultado: 'hip = ' + r2(hip, 3) + '   sen θ = ' + r2(sen, 4) + '   cos θ = ' + r2(cos, 4) + '   tan θ = ' + r2(tan, 4), pasos: ['hip = √(op² + ady²) = ' + r2(hip, 3) + ' (Pitágoras)', 'sen θ = op/hip, cos θ = ady/hip, tan θ = op/ady'] };
    }
  };

  C['identidad-trig'] = {
    titulo: 'Comprobar sen²θ + cos²θ = 1',
    vars: [{ id: 'theta', label: 'Ángulo θ (°)', min: 0, max: 360, step: 5, def: 40 }],
    run: function (v) {
      var r = v.theta * Math.PI / 180, s = Math.sin(r), c = Math.cos(r);
      return { tipo: 'texto', resultado: 'sen²θ + cos²θ = ' + r2(s * s + c * c, 6) + '   (sen θ = ' + r2(s, 4) + ', cos θ = ' + r2(c, 4) + ')', pasos: ['sen θ = ' + r2(s, 4) + ' → sen²θ = ' + r2(s * s, 4), 'cos θ = ' + r2(c, 4) + ' → cos²θ = ' + r2(c * c, 4), 'Suma = ' + r2(s * s + c * c, 6) + ' (siempre 1, por redondeo puede verse como 0.999…)'] };
    }
  };

  C['ley-senos-cosenos'] = {
    titulo: 'Ley del coseno: c² = a² + b² − 2ab·cos C',
    vars: [{ id: 'a', label: 'Lado a', min: 1, max: 20, step: 1, def: 5 }, { id: 'b', label: 'Lado b', min: 1, max: 20, step: 1, def: 7 }, { id: 'C', label: 'Ángulo C (°)', min: 1, max: 179, step: 1, def: 60 }],
    run: function (v) {
      var r = v.C * Math.PI / 180, c2 = v.a * v.a + v.b * v.b - 2 * v.a * v.b * Math.cos(r), c = Math.sqrt(c2);
      return { tipo: 'valor', resultado: r2(c, 3), extra: 'lado c (el opuesto al ángulo C)', pasos: ['c² = a² + b² − 2ab·cos C = ' + r2(c2, 3), 'c = √' + r2(c2, 3) + ' = ' + r2(c, 3)] };
    }
  };

  C['vector2'] = {
    titulo: 'Vector u = (u1, u2): magnitud y suma',
    vars: [{ id: 'u1', label: 'u1', min: -10, max: 10, step: 1, def: 3 }, { id: 'u2', label: 'u2', min: -10, max: 10, step: 1, def: 4 }, { id: 'v1', label: 'v1', min: -10, max: 10, step: 1, def: 1 }, { id: 'v2', label: 'v2', min: -10, max: 10, step: 1, def: -2 }],
    run: function (v) {
      var mag = Math.sqrt(v.u1 * v.u1 + v.u2 * v.u2), suma = [v.u1 + v.v1, v.u2 + v.v2];
      return { tipo: 'texto', resultado: '||u|| = ' + r2(mag, 3) + '   u + v = (' + suma[0] + ', ' + suma[1] + ')', pasos: ['||u|| = √(u1² + u2²) = ' + r2(mag, 3), 'u + v suma componente a componente: (' + v.u1 + '+' + v.v1 + ', ' + v.u2 + '+' + v.v2 + ')'] };
    }
  };

  C['complejo'] = {
    titulo: 'Complejo z = a + bi: módulo y argumento',
    vars: [{ id: 'a', label: 'Parte real a', min: -10, max: 10, step: 1, def: 3 }, { id: 'b', label: 'Parte imaginaria b', min: -10, max: 10, step: 1, def: 4 }],
    run: function (v) {
      var mod = Math.sqrt(v.a * v.a + v.b * v.b), arg = Math.atan2(v.b, v.a) * 180 / Math.PI;
      return { tipo: 'texto', resultado: '|z| = ' + r2(mod, 3) + '   arg(z) = ' + r2(arg, 2) + '°', pasos: ['|z| = √(a² + b²) = ' + r2(mod, 3), 'arg(z) = atan2(b, a) = ' + r2(arg, 2) + '°'] };
    }
  };

  global.T1Calc = { CALCS: C };
})(window);

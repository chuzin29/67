/* ============================================================
   tercero-calc.js — Calculadoras interactivas de 3.er año · Cálculo
   Cada calculadora devuelve { tipo:'valor'|'tabla'|'texto', resultado, extra? }
   o { tipo:'tabla', cols, filas } o { tipo:'texto', html }
   ============================================================ */
var T3Calc = (function () {
  'use strict';

  function f(n, d) {
    if (typeof n !== 'number' || !isFinite(n)) return '—';
    d = d == null ? 4 : d;
    var k = Math.pow(10, d), s = String(Math.round(n * k) / k);
    if (s === '-0') s = '0';
    return s.replace('-', '−');
  }

  var CALCS = {};

  /* ---- Límites ---- */

  CALCS['limite-tabla'] = {
    titulo: 'Tabla de valores de límite',
    vars: [
      { id: 'a', label: 'Punto x→a', min: -10, max: 10, step: 0.5, def: 2 }
    ],
    run: function (v) {
      var a = v.a;
      var deltas = [0.1, 0.01, 0.001];
      var cols = ['x', 'f(x) = x²'];
      var filas = [];
      deltas.slice().reverse().forEach(function (d) {
        var x = a - d;
        filas.push([x.toFixed(4), (x * x).toFixed(6)]);
      });
      deltas.forEach(function (d) {
        var x = a + d;
        filas.push([x.toFixed(4), (x * x).toFixed(6)]);
      });
      var lim = a * a;
      return { tipo: 'tabla', cols: cols, filas: filas, extra: 'Límite estimado: ' + f(lim) };
    }
  };

  CALCS['limite-lateral'] = {
    titulo: 'Límites laterales de |x|/x cerca de 0',
    vars: [
      { id: 'a', label: 'Punto a', min: -5, max: 5, step: 0.5, def: 0 }
    ],
    run: function (v) {
      var a = v.a;
      var fn = function (x) { return x === 0 ? NaN : Math.abs(x - a) / (x - a); };
      var cols = ['x', 'f(x) = |x−a|/(x−a)'];
      var filas = [];
      [0.1, 0.01, 0.001].reverse().forEach(function (d) {
        var x = a - d;
        var val = fn(x);
        filas.push([x.toFixed(4), isFinite(val) ? f(val) : 'indefinido']);
      });
      [0.001, 0.01, 0.1].forEach(function (d) {
        var x = a + d;
        var val = fn(x);
        filas.push([x.toFixed(4), isFinite(val) ? f(val) : 'indefinido']);
      });
      return { tipo: 'tabla', cols: cols, filas: filas, extra: 'Límite izquierdo: −1 · Límite derecho: 1 → Límite no existe' };
    }
  };

  CALCS['limite-algebraico'] = {
    titulo: 'Límite algebraico (x²−4)/(x−2)',
    vars: [
      { id: 'a', label: 'Punto x→a', min: -5, max: 5, step: 0.5, def: 2 }
    ],
    run: function (v) {
      var a = v.a;
      var fn = function (x) { return Math.abs(x - a) < 1e-12 ? NaN : (x * x - a * a) / (x - a); };
      var lim = 2 * a;
      var cols = ['x', 'f(x) = (x²−a²)/(x−a)'];
      var filas = [];
      [0.1, 0.01, 0.001].reverse().forEach(function (d) {
        var x = a - d, y = fn(x);
        filas.push([x.toFixed(4), isFinite(y) ? f(y) : 'indefinido']);
      });
      [0.001, 0.01, 0.1].forEach(function (d) {
        var x = a + d, y = fn(x);
        filas.push([x.toFixed(4), isFinite(y) ? f(y) : 'indefinido']);
      });
      return { tipo: 'tabla', cols: cols, filas: filas, extra: 'Límite = x + a = ' + f(lim) + ' (simplificando x²−a² = (x−a)(x+a))' };
    }
  };

  CALCS['limite-infinito'] = {
    titulo: 'Comportamiento de 1/x para x grande',
    vars: [
      { id: 'x', label: 'Valor de x', min: 1, max: 1000, step: 10, def: 10 }
    ],
    run: function (v) {
      var x = v.x;
      if (x === 0) return { tipo: 'valor', resultado: 'indefinido', extra: 'No se puede dividir por cero' };
      var val = 1 / x;
      return { tipo: 'valor', resultado: f(val, 6), extra: 'Al crecer x → ∞, 1/x → 0 (asíntota horizontal y = 0)' };
    }
  };

  CALCS['continuidad'] = {
    titulo: 'Continuidad de f(x) = x² en x = a',
    vars: [
      { id: 'a', label: 'Punto a', min: -5, max: 5, step: 0.5, def: 2 }
    ],
    run: function (v) {
      var a = v.a;
      var fa = a * a;
      var lim = a * a;
      var continua = Math.abs(fa - lim) < 1e-10;
      return {
        tipo: 'texto',
        html: 'f(' + f(a) + ') = ' + f(fa) + ' · lím f(x) = ' + f(lim) + ' · ' + (continua ? '¡Continua! f(a) = lím f(x)' : 'Discontinua: f(a) ≠ lím f(x)')
      };
    }
  };

  /* ---- Trigonometría ---- */

  CALCS['identidades'] = {
    titulo: 'Verificar sin²θ + cos²θ = 1',
    vars: [
      { id: 'theta', label: 'Ángulo θ (grados)', min: 0, max: 360, step: 5, def: 30 }
    ],
    run: function (v) {
      var deg = v.theta;
      var rad = deg * Math.PI / 180;
      var s = Math.sin(rad), c = Math.cos(rad);
      var suma = s * s + c * c;
      return {
        tipo: 'valor',
        resultado: f(suma, 8),
        extra: 'sin(' + f(deg) + '°) = ' + f(s, 4) + '  cos(' + f(deg) + '°) = ' + f(c, 4) + '  → sin²+cos² = ' + f(suma, 8)
      };
    }
  };

  CALCS['limite-trig'] = {
    titulo: 'Tabla de sen(x)/x cerca de x = 0',
    vars: [],
    run: function () {
      var cols = ['x (rad)', 'sen(x)/x'];
      var filas = [];
      [0.5, 0.1, 0.01, 0.001].reverse().forEach(function (d) {
        var x = -d;
        filas.push([x.toFixed(4), f(Math.sin(x) / x, 6)]);
      });
      [0.001, 0.01, 0.1, 0.5].forEach(function (d) {
        filas.push([d.toFixed(4), f(Math.sin(d) / d, 6)]);
      });
      return { tipo: 'tabla', cols: cols, filas: filas, extra: 'lím(x→0) sen(x)/x = 1' };
    }
  };

  /* ---- Complejos ---- */

  CALCS['complejo-polar'] = {
    titulo: 'Convertir (a, b) a forma polar r·e^(iθ)',
    vars: [
      { id: 'a', label: 'Parte real a', min: -10, max: 10, step: 0.5, def: 3 },
      { id: 'b', label: 'Parte imag b', min: -10, max: 10, step: 0.5, def: 4 }
    ],
    run: function (v) {
      var a = v.a, b = v.b;
      var r = Math.sqrt(a * a + b * b);
      var theta = Math.atan2(b, a) * 180 / Math.PI;
      return {
        tipo: 'valor',
        resultado: 'r = ' + f(r, 4) + '  θ = ' + f(theta, 2) + '°',
        extra: 'z = ' + f(r, 4) + '·(cos ' + f(theta, 2) + '° + i·sin ' + f(theta, 2) + '°)'
      };
    }
  };

  CALCS['moivre'] = {
    titulo: 'Teorema de De Moivre: (r·e^(iθ))^n',
    vars: [
      { id: 'r', label: 'Módulo r', min: 0.1, max: 10, step: 0.1, def: 2 },
      { id: 'theta', label: 'Ángulo θ (grados)', min: 0, max: 360, step: 5, def: 45 },
      { id: 'n', label: 'Exponente n', min: 1, max: 10, step: 1, def: 3 }
    ],
    run: function (v) {
      var r = v.r, theta = v.theta, n = Math.round(v.n);
      var rn = Math.pow(r, n);
      var thetan = theta * n;
      var rad = thetan * Math.PI / 180;
      var re = rn * Math.cos(rad), im = rn * Math.sin(rad);
      return {
        tipo: 'valor',
        resultado: f(re, 4) + (im >= 0 ? ' + ' : ' − ') + f(Math.abs(im), 4) + 'i',
        extra: 'r^n = ' + f(rn, 4) + '  nθ = ' + f(thetan, 2) + '°'
      };
    }
  };

  /* ---- Derivadas ---- */

  CALCS['derivada-def'] = {
    titulo: 'Derivada numérica de f(x)=x² en x₀',
    vars: [
      { id: 'x0', label: 'Punto x₀', min: -5, max: 5, step: 0.5, def: 2 },
      { id: 'h', label: 'Incremento h', min: 0.0001, max: 1, step: 0.001, def: 0.1 }
    ],
    run: function (v) {
      var x0 = v.x0, h = v.h;
      if (Math.abs(h) < 1e-9) return { tipo: 'valor', resultado: 'Usa h > 0', extra: '' };
      var fn = function (x) { return x * x; };
      var cociente = (fn(x0 + h) - fn(x0)) / h;
      var exacta = 2 * x0;
      return {
        tipo: 'valor',
        resultado: f(cociente, 6),
        extra: 'Derivada exacta f\'(x₀) = 2x₀ = ' + f(exacta, 4) + '  (error: ' + f(Math.abs(cociente - exacta), 6) + ')'
      };
    }
  };

  CALCS['derivada-reglas'] = {
    titulo: 'd/dx(xⁿ) = n·xⁿ⁻¹',
    vars: [
      { id: 'n', label: 'Exponente n', min: -5, max: 10, step: 1, def: 3 },
      { id: 'x', label: 'Evaluar en x', min: -5, max: 5, step: 0.5, def: 2 }
    ],
    run: function (v) {
      var n = v.n, x = v.x;
      if (x === 0 && n < 1) return { tipo: 'valor', resultado: 'indefinido', extra: '' };
      var deriv = n * Math.pow(x, n - 1);
      return {
        tipo: 'valor',
        resultado: f(deriv, 4),
        extra: 'd/dx(x^' + f(n) + ') = ' + f(n) + '·x^' + f(n - 1) + '  en x=' + f(x) + ' → ' + f(deriv, 4)
      };
    }
  };

  CALCS['cadena'] = {
    titulo: 'Derivada de cadena: d/dx f(g(x)) numéricamente',
    vars: [
      { id: 'x0', label: 'Punto x₀', min: -5, max: 5, step: 0.5, def: 1 }
    ],
    run: function (v) {
      var x0 = v.x0;
      /* f(u) = u², g(x) = x + 1 → f(g(x)) = (x+1)² */
      var fg = function (x) { return Math.pow(x + 1, 2); };
      var h = 1e-5;
      var num = (fg(x0 + h) - fg(x0 - h)) / (2 * h);
      var exacta = 2 * (x0 + 1);
      return {
        tipo: 'valor',
        resultado: f(num, 4),
        extra: 'f(g(x)) = (x+1)² · f\'(g)·g\'(x) = 2(x+1)·1 = 2(x+1) = ' + f(exacta, 4)
      };
    }
  };

  CALCS['derivada-trans'] = {
    titulo: 'Derivadas de funciones trascendentes',
    vars: [
      { id: 'x', label: 'Evaluar en x', min: 0.1, max: 6.28, step: 0.1, def: 1 }
    ],
    run: function (v) {
      var x = v.x;
      var dsin = Math.cos(x);
      var dexp = Math.exp(x);
      var dln = 1 / x;
      return {
        tipo: 'texto',
        html: 'd/dx(sin x)|ₓ₌' + f(x, 2) + ' = cos(x) = ' + f(dsin, 4) +
          '  |  d/dx(eˣ)|ₓ₌' + f(x, 2) + ' = eˣ = ' + f(dexp, 4) +
          '  |  d/dx(ln x)|ₓ₌' + f(x, 2) + ' = 1/x = ' + f(dln, 4)
      };
    }
  };

  CALCS['implicita'] = {
    titulo: 'Pendiente implícita: círculo x²+y²=r²',
    vars: [
      { id: 'r', label: 'Radio r', min: 1, max: 10, step: 0.5, def: 5 },
      { id: 'x0', label: 'Punto x₀', min: -9, max: 9, step: 0.5, def: 3 }
    ],
    run: function (v) {
      var r = v.r, x0 = v.x0;
      var r2 = r * r, x2 = x0 * x0;
      if (x2 > r2) return { tipo: 'valor', resultado: 'x₀ fuera del círculo', extra: '' };
      var y0 = Math.sqrt(r2 - x2);
      var m = -x0 / y0;
      return {
        tipo: 'valor',
        resultado: f(m, 4),
        extra: 'Punto (' + f(x0, 2) + ', ' + f(y0, 4) + ')  dy/dx = −x/y = ' + f(m, 4)
      };
    }
  };

  CALCS['tangente'] = {
    titulo: 'Recta tangente a f(x)=x² en x₀',
    vars: [
      { id: 'x0', label: 'Punto x₀', min: -5, max: 5, step: 0.5, def: 2 }
    ],
    run: function (v) {
      var x0 = v.x0;
      var y0 = x0 * x0;
      var m = 2 * x0;
      return {
        tipo: 'valor',
        resultado: 'Pendiente m = ' + f(m, 4),
        extra: 'Tangente en (' + f(x0) + ', ' + f(y0) + '): y − ' + f(y0) + ' = ' + f(m) + '(x − ' + f(x0) + ')'
      };
    }
  };

  CALCS['optimizacion'] = {
    titulo: 'Mínimo de f(x) = ax² + bx + c',
    vars: [
      { id: 'a', label: 'Coeficiente a', min: 0.1, max: 10, step: 0.1, def: 1 },
      { id: 'b', label: 'Coeficiente b', min: -10, max: 10, step: 0.5, def: -4 },
      { id: 'c', label: 'Coeficiente c', min: -10, max: 10, step: 0.5, def: 5 }
    ],
    run: function (v) {
      var a = v.a, b = v.b, c = v.c;
      if (a === 0) return { tipo: 'valor', resultado: 'a ≠ 0 para parábola', extra: '' };
      var xmin = -b / (2 * a);
      var ymin = a * xmin * xmin + b * xmin + c;
      return {
        tipo: 'valor',
        resultado: 'x = ' + f(xmin, 4),
        extra: 'Mínimo en (' + f(xmin, 4) + ', ' + f(ymin, 4) + ')  · f\'(x) = ' + f(2 * a) + 'x + ' + f(b) + ' = 0 → x = ' + f(xmin, 4)
      };
    }
  };

  /* ---- Integrales ---- */

  CALCS['antiderivada'] = {
    titulo: '∫xⁿ dx = xⁿ⁺¹/(n+1)',
    vars: [
      { id: 'n', label: 'Exponente n', min: -0.9, max: 10, step: 0.5, def: 2 },
      { id: 'x', label: 'Evaluar en x', min: 0.1, max: 10, step: 0.1, def: 2 }
    ],
    run: function (v) {
      var n = v.n, x = v.x;
      if (Math.abs(n + 1) < 1e-9) return { tipo: 'valor', resultado: 'ln|x| + C', extra: 'n = −1 es caso especial' };
      var val = Math.pow(x, n + 1) / (n + 1);
      return {
        tipo: 'valor',
        resultado: f(val, 4),
        extra: '∫x^' + f(n, 2) + ' dx = x^' + f(n + 1, 2) + '/' + f(n + 1, 2) + '  evaluado en x=' + f(x) + ' da ' + f(val, 4)
      };
    }
  };

  CALCS['sustitucion'] = {
    titulo: '∫[0,a] 2x·(x²+1)² dx por sustitución',
    vars: [
      { id: 'a', label: 'Límite superior a', min: 0.5, max: 5, step: 0.5, def: 2 }
    ],
    run: function (v) {
      var a = v.a;
      /* u = x²+1, du = 2x dx → ∫[1, a²+1] u² du = [u³/3]_1^{a²+1} */
      var u1 = 1, u2 = a * a + 1;
      var val = (Math.pow(u2, 3) - Math.pow(u1, 3)) / 3;
      return {
        tipo: 'valor',
        resultado: f(val, 4),
        extra: 'u = x²+1 · límites u: 1 → ' + f(u2, 4) + '  → [u³/3]₁^{' + f(u2, 4) + '} = ' + f(val, 4)
      };
    }
  };

  CALCS['integral-def'] = {
    titulo: '∫[a,b] xⁿ dx',
    vars: [
      { id: 'n', label: 'Exponente n', min: 1, max: 8, step: 1, def: 2 },
      { id: 'a', label: 'Límite inferior a', min: 0, max: 5, step: 0.5, def: 0 },
      { id: 'b', label: 'Límite superior b', min: 0.5, max: 10, step: 0.5, def: 3 }
    ],
    run: function (v) {
      var n = v.n, a = v.a, b = v.b;
      if (b <= a) return { tipo: 'valor', resultado: 'b debe ser > a', extra: '' };
      var val = (Math.pow(b, n + 1) - Math.pow(a, n + 1)) / (n + 1);
      return {
        tipo: 'valor',
        resultado: f(val, 4),
        extra: '[x^' + (n + 1) + '/' + (n + 1) + ']_' + f(a) + '^' + f(b) + ' = (' + f(Math.pow(b, n + 1), 4) + '−' + f(Math.pow(a, n + 1), 4) + ')/' + (n + 1)
      };
    }
  };

  CALCS['area-curvas'] = {
    titulo: 'Área entre y=x y y=x² en [0,1]',
    vars: [],
    run: function () {
      /* ∫[0,1] (x - x²) dx = [x²/2 - x³/3]_0^1 = 1/2 - 1/3 = 1/6 */
      var area = 1 / 6;
      return {
        tipo: 'valor',
        resultado: f(area, 6),
        extra: '∫[0,1] (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6 ≈ ' + f(area, 6)
      };
    }
  };

  CALCS['partes'] = {
    titulo: '∫[0,π] x·sin(x) dx por partes',
    vars: [],
    run: function () {
      /* u = x, dv = sin(x)dx → [-x·cos(x) + sin(x)]_0^π = π */
      var val = Math.PI;
      return {
        tipo: 'valor',
        resultado: f(val, 6),
        extra: 'u = x, dv = sin x dx  →  [−x·cos x + sin x]₀^π = π ≈ ' + f(val, 6)
      };
    }
  };

  /* ---- Álgebra vectorial ---- */

  CALCS['vector3'] = {
    titulo: 'Magnitud de vector 3D √(x²+y²+z²)',
    vars: [
      { id: 'x', label: 'Componente x', min: -10, max: 10, step: 0.5, def: 1 },
      { id: 'y', label: 'Componente y', min: -10, max: 10, step: 0.5, def: 2 },
      { id: 'z', label: 'Componente z', min: -10, max: 10, step: 0.5, def: 3 }
    ],
    run: function (v) {
      var x = v.x, y = v.y, z = v.z;
      var mag = Math.sqrt(x * x + y * y + z * z);
      return {
        tipo: 'valor',
        resultado: f(mag, 4),
        extra: '|v| = √(' + f(x) + '² + ' + f(y) + '² + ' + f(z) + '²) = √' + f(x * x + y * y + z * z, 4) + ' = ' + f(mag, 4)
      };
    }
  };

  CALCS['punto-cruz'] = {
    titulo: 'Producto punto de dos vectores 2D',
    vars: [
      { id: 'a1', label: 'a₁', min: -10, max: 10, step: 0.5, def: 1 },
      { id: 'a2', label: 'a₂', min: -10, max: 10, step: 0.5, def: 0 },
      { id: 'b1', label: 'b₁', min: -10, max: 10, step: 0.5, def: 0 },
      { id: 'b2', label: 'b₂', min: -10, max: 10, step: 0.5, def: 1 }
    ],
    run: function (v) {
      var dot = v.a1 * v.b1 + v.a2 * v.b2;
      var magA = Math.sqrt(v.a1 * v.a1 + v.a2 * v.a2);
      var magB = Math.sqrt(v.b1 * v.b1 + v.b2 * v.b2);
      var cos = magA > 0 && magB > 0 ? dot / (magA * magB) : 0;
      var ang = Math.acos(Math.max(-1, Math.min(1, cos))) * 180 / Math.PI;
      return {
        tipo: 'valor',
        resultado: f(dot, 4),
        extra: 'ángulo entre vectores: ' + f(ang, 2) + '°  |a| = ' + f(magA, 4) + '  |b| = ' + f(magB, 4)
      };
    }
  };

  CALCS['recta-plano'] = {
    titulo: 'Distancia de punto (x,y,z) al plano x+y+z=d',
    vars: [
      { id: 'px', label: 'Punto x', min: -10, max: 10, step: 0.5, def: 1 },
      { id: 'py', label: 'Punto y', min: -10, max: 10, step: 0.5, def: 2 },
      { id: 'pz', label: 'Punto z', min: -10, max: 10, step: 0.5, def: 3 },
      { id: 'd', label: 'Término d', min: -10, max: 10, step: 0.5, def: 6 }
    ],
    run: function (v) {
      var dist = Math.abs(v.px + v.py + v.pz - v.d) / Math.sqrt(3);
      return {
        tipo: 'valor',
        resultado: f(dist, 4),
        extra: 'dist = |x+y+z−d| / √(1²+1²+1²) = |' + f(v.px + v.py + v.pz) + '−' + f(v.d) + '| / √3 = ' + f(dist, 4)
      };
    }
  };

  /* ---- Matemática discreta ---- */

  CALCS['logica'] = {
    titulo: 'Tabla de verdad p → q',
    vars: [],
    run: function () {
      var cols = ['p', 'q', 'p → q'];
      var filas = [
        ['V', 'V', 'V'],
        ['V', 'F', 'F'],
        ['F', 'V', 'V'],
        ['F', 'F', 'V']
      ];
      return { tipo: 'tabla', cols: cols, filas: filas, extra: 'La implicación es falsa solo cuando p es verdadera y q es falsa' };
    }
  };

  CALCS['relaciones'] = {
    titulo: '|A∪B| = |A| + |B| − |A∩B|',
    vars: [
      { id: 'a', label: '|A|', min: 0, max: 50, step: 1, def: 10 },
      { id: 'b', label: '|B|', min: 0, max: 50, step: 1, def: 8 },
      { id: 'i', label: '|A∩B|', min: 0, max: 20, step: 1, def: 3 }
    ],
    run: function (v) {
      var aub = v.a + v.b - v.i;
      return {
        tipo: 'valor',
        resultado: String(aub),
        extra: '|A∪B| = ' + v.a + ' + ' + v.b + ' − ' + v.i + ' = ' + aub
      };
    }
  };

  CALCS['grafos'] = {
    titulo: 'C(n, r) = n! / (r!(n−r)!)',
    vars: [
      { id: 'n', label: 'n', min: 1, max: 20, step: 1, def: 6 },
      { id: 'r', label: 'r', min: 0, max: 20, step: 1, def: 2 }
    ],
    run: function (v) {
      var n = Math.round(v.n), r = Math.round(v.r);
      if (r > n) return { tipo: 'valor', resultado: '0', extra: 'r > n: imposible elegir más que el total' };
      var top = 1, bot = 1;
      var rr = Math.min(r, n - r);
      for (var i = 0; i < rr; i++) { top *= (n - i); bot *= (i + 1); }
      var c = Math.round(top / bot);
      return {
        tipo: 'valor',
        resultado: String(c),
        extra: 'C(' + n + ',' + r + ') = ' + n + '! / (' + r + '! · ' + (n - r) + '!) = ' + c
      };
    }
  };

  return { CALCS: CALCS };
})();

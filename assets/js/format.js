/* ============================================================
   format.js — Helpers de formato matemático
   Se carga antes que data-core.js porque ese archivo construye
   sus fórmulas usando estas funciones.
   ============================================================ */
(function (global) {
  'use strict';

  var MINUS = '\u2212';

  /** Número con hasta 4 decimales, sin ceros sobrantes. */
  function fmt(n) {
    if (typeof n !== 'number' || !isFinite(n)) return String(n);
    var out = Number.isInteger(n) ? n.toString() : n.toFixed(4).replace(/\.?0+$/, '');
    return out.replace('-', MINUS);
  }

  /** Número en notación "bonita": enteros, fracciones simples o decimales. */
  function fmtExacto(n) {
    if (typeof n !== 'number' || !isFinite(n)) return String(n);
    if (Number.isInteger(n)) return (n < 0 ? MINUS : '') + Math.abs(n);
    var neg = n < 0;
    var a = Math.abs(n);

    if (Math.abs(a - Math.PI) < 1e-9) return (neg ? MINUS : '') + '\u03C0';
    if (Math.abs(a - Math.PI / 2) < 1e-9) return (neg ? MINUS : '') + '\u03C0/2';
    if (Math.abs(a - Math.PI / 3) < 1e-9) return (neg ? MINUS : '') + '\u03C0/3';
    if (Math.abs(a - Math.PI / 4) < 1e-9) return (neg ? MINUS : '') + '\u03C0/4';
    if (Math.abs(a - Math.PI / 6) < 1e-9) return (neg ? MINUS : '') + '\u03C0/6';

    // Cuadrado perfecto -> raíz exacta
    var cuadrado = a * a;
    if (Math.abs(cuadrado - Math.round(cuadrado)) < 1e-9) {
      var entero = Math.round(cuadrado);
      var raiz = Math.sqrt(entero);
      if (Number.isInteger(raiz)) return (neg ? MINUS : '') + raiz;
    }

    // Fracción con denominador pequeño
    for (var den = 2; den <= 12; den++) {
      var num = a * den;
      if (Math.abs(num - Math.round(num)) < 1e-9) {
        var nu = Math.round(num);
        var g = gcd(Math.abs(nu), den);
        if (g > 1) { nu /= g; den = den / g; }
        if (den === 1) return (neg ? MINUS : '') + nu;
        return (neg ? MINUS : '') + frac(nu, den);
      }
    }
    return (neg ? MINUS : '') + a.toFixed(4).replace(/\.?0+$/, '');
  }

  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }

  /** Raíz con vínculo superior. */
  function sqrt(n) {
    return global.MathRender
      ? global.MathRender.sqrt(n)
      : '<span class="sqrt"><span class="sqrt-content">' + n + '</span></span>';
  }

  /** Fracción apilada. */
  function frac(a, b) {
    return global.MathRender
      ? global.MathRender.frac(a, b)
      : '<span class="frac"><span class="num">' + a + '</span><span class="den">' + b + '</span></span>';
  }

  function vec(v) { return '<span class="vec">' + v + '</span>'; }
  function conj(v) { return '<span class="conj">' + v + '</span>'; }
  function abs(v) { return '<span class="abs">' + v + '</span>'; }
  function sub(n) { return '<sub>' + n + '</sub>'; }
  function sup(n) { return '<sup>' + n + '</sup>'; }

  /** Número -> cadena con signo explícito (+ o −) para encadenar términos. */
  function signed(n) {
    return (n < 0 ? ' ' + MINUS + ' ' : ' + ') + fmt(Math.abs(n));
  }

  /** Complejo a + bi formateado. */
  function complex(a, b, opts) {
    opts = opts || {};
    var out = '';
    if (a !== 0 || b === 0) out += fmtExacto(a);
    if (b !== 0) {
      if (a !== 0) out += (b > 0 ? ' + ' : ' ' + MINUS + ' ');
      else if (b < 0) out += MINUS;
      var mod = Math.abs(b);
      out += (mod === 1 ? '' : fmtExacto(mod)) + 'i';
    }
    return out;
  }

  /** Vector (x, y) formateado. */
  function point(p) {
    return '(' + fmtExacto(p[0]) + ', ' + fmtExacto(p[1]) + ')';
  }

  /** Grados con redondeo legible. */
  function deg(rad) {
    return fmt(rad * 180 / Math.PI) + '\u00B0';
  }

  global.Fmt = {
    fmt: fmt,
    fmtExacto: fmtExacto,
    sqrt: sqrt,
    frac: frac,
    vec: vec,
    conj: conj,
    abs: abs,
    sub: sub,
    sup: sup,
    signed: signed,
    complex: complex,
    point: point,
    deg: deg,
    MINUS: MINUS
  };

  // Alias globales usados por data-core.js
  global.fmt = fmt;
  global.fmtExacto = fmtExacto;
  global.sqrt = sqrt;
  global.frac = frac;
  global.vec = vec;
  global.conj = conj;
  global.abs = abs;
  global.sub = sub;
  global.sup = sup;
})(window);

/* ============================================================
   math-render.js — Renderizador de notación matemática
   Convierte texto matemático plano en HTML con raíces, fracciones,
   normas y superíndices correctamente construidos.

   Reglas:
     √9            -> raíz de 9
     √(3/2)        -> raíz de la fracción
     √3/2          -> (√3)/2   (la raíz afecta solo al 3)
     10√6/3        -> 10 · (√6/3)
     a/sen A       -> fracción con "sen A" en el denominador
     ‖v‖           -> norma con barras verticales
     z⁸            -> z<sup>8</sup>

   No procesa texto dentro de etiquetas HTML; solo nodos de texto.
   ============================================================ */
(function (global) {
  'use strict';

  var RAD_SVG =
    '<svg class="rad-hook" viewBox="0 0 12 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">' +
    '<path d="M0 10.6 L2.6 12.2 L4.7 20 L7.6 0 L12 0" fill="none" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>' +
    '</svg>';

  var SUPERSCRIPT = {
    '\u2070': '0', '\u00B9': '1', '\u00B2': '2', '\u00B3': '3', '\u2074': '4',
    '\u2075': '5', '\u2076': '6', '\u2077': '7', '\u2078': '8', '\u2079': '9',
    '\u207F': 'n'
  };

  var FUNCTIONS = 'arcsen|arccos|arctan|sen|cos|tan|cot|sec|csc';

  function sqrtHtml(inner) {
    return '<span class="sqrt">' + RAD_SVG +
      '<span class="sqrt-content">' + inner + '</span></span>';
  }

  function fracHtml(numerator, denominator) {
    return '<span class="frac"><span class="num">' + numerator +
      '</span><span class="den">' + denominator + '</span></span>';
  }

  function normHtml(inner) {
    return '<span class="norm">' + inner + '</span>';
  }

  /** Índice del paréntesis que cierra el que abre en `start`, o -1. */
  function matchParen(text, start) {
    var depth = 0;
    for (var i = start; i < text.length; i++) {
      if (text[i] === '(') depth += 1;
      else if (text[i] === ')') {
        depth -= 1;
        if (depth === 0) return i;
      }
    }
    return -1;
  }

  function skipSpaces(text, i) {
    while (i < text.length && text[i] === ' ') i += 1;
    return i;
  }

  /** Envuelve un grupo; agranda los paréntesis si el contenido es alto. */
  function groupHtml(inner) {
    if (/class="(frac|sqrt|norm)"/.test(inner)) {
      return '<span class="paren">(</span>' + inner + '<span class="paren">)</span>';
    }
    return '(' + inner + ')';
  }

  /** Lee un operando a la derecha de un `/`. */
  function parseRight(text, start) {
    var i = skipSpaces(text, start);
    if (i >= text.length) return null;
    var rest = text.slice(i);

    if (text[i] === '\u221A') return parseRadical(text, i);

    if (text[i] === '(') {
      var close = matchParen(text, i);
      if (close > i) {
        return { html: groupHtml(convert(text.slice(i + 1, close))), end: close + 1, simple: true };
      }
      return null;
    }

    var withParen = new RegExp('^(' + FUNCTIONS + ')\\s*\\(', 'i').exec(rest);
    if (withParen) {
      var parenStart = i + withParen[0].length - 1;
      var parenClose = matchParen(text, parenStart);
      if (parenClose > parenStart) {
        return {
          html: withParen[1] + ' ' + groupHtml(convert(text.slice(parenStart + 1, parenClose))),
          end: parenClose + 1,
          simple: true
        };
      }
      return null;
    }

    var fn = new RegExp('^(' + FUNCTIONS + ')\\s*([A-Za-z]|\\d+(?:[.,]\\d+)?)\\s*(\u00B0|\u00BA)?', 'i').exec(rest);
    if (fn) {
      return {
        html: fn[1] + ' ' + fn[2] + (fn[3] || ''),
        end: i + fn[0].length,
        simple: true
      };
    }

    var number = /^\d+(?:[.,]\d+)?/.exec(rest);
    if (number) return { html: number[0], end: i + number[0].length, simple: true };

    // Si empieza con un nombre de función pero no se pudo leer, no partimos la palabra.
    if (new RegExp('^(' + FUNCTIONS + ')', 'i').test(rest)) return null;

    var variable = /^[A-Za-z\u03B1-\u03C9\u0391-\u03A9]/.exec(rest);
    if (variable) return { html: variable[0], end: i + 1, simple: true };

    return null;
  }

  /** Lee un radical: âˆš(...), âˆš12 o âˆšx. */
  function parseRadical(text, start) {
    var i = skipSpaces(text, start + 1);
    if (i >= text.length) return { html: '\u221A', end: start + 1, simple: false };

    if (text[i] === '(') {
      var close = matchParen(text, i);
      if (close > i) {
        return {
          html: sqrtHtml(convert(text.slice(i + 1, close))),
          end: close + 1,
          simple: true
        };
      }
    }

    var number = /^\d+(?:[.,]\d+)?/.exec(text.slice(i));
    if (number) {
      return { html: sqrtHtml(number[0]), end: i + number[0].length, simple: true };
    }

    var variable = /^[A-Za-z\u03B1-\u03C9\u0391-\u03A9]/.exec(text.slice(i));
    if (variable) {
      return { html: sqrtHtml(variable[0]), end: i + 1, simple: true };
    }

    return { html: '\u221A', end: start + 1, simple: false };
  }

  /** Separa el último operando simple de un texto (para el numerador). */
  function trailingOperand(text) {
    var fnParen = new RegExp('(' + FUNCTIONS + ')\\s*\\([^()]*\\)$', 'i').exec(text);
    if (fnParen) {
      return { head: text.slice(0, text.length - fnParen[0].length), html: fnParen[0] };
    }

    var fn = new RegExp('(' + FUNCTIONS + ')\\s*(?:[A-Za-z]|\\d+(?:[.,]\\d+)?)\\s*(?:\u00B0|\u00BA)?$', 'i').exec(text);
    if (fn) {
      return { head: text.slice(0, text.length - fn[0].length), html: fn[0] };
    }

    var number = /(\d+(?:[.,]\d+)?)$/.exec(text);
    if (number) {
      return { head: text.slice(0, text.length - number[1].length), html: number[1] };
    }

    var variable = /([A-Za-z\u03B1-\u03C9\u0391-\u03A9])$/.exec(text);
    if (variable) {
      return { head: text.slice(0, text.length - variable[1].length), html: variable[1] };
    }

    return null;
  }

  /** Convierte un fragmento de texto plano (sin etiquetas). */
  function convert(text) {
    var tokens = [];
    var buffer = '';

    function flushText() {
      if (buffer) {
        tokens.push({ html: buffer, simple: false });
        buffer = '';
      }
    }

    function lastTokenIsOperand() {
      return tokens.length > 0 && tokens[tokens.length - 1].simple;
    }

    for (var i = 0; i < text.length; i++) {
      var ch = text[i];

      if (ch === '\u221A') {
        flushText();
        var radical = parseRadical(text, i);
        tokens.push({ html: radical.html, simple: radical.simple });
        i = radical.end - 1;
        continue;
      }

      if (ch === '\u2016') {
        var closeNorm = text.indexOf('\u2016', i + 1);
        if (closeNorm > i) {
          flushText();
          tokens.push({ html: normHtml(convert(text.slice(i + 1, closeNorm))), simple: true });
          i = closeNorm;
          continue;
        }
      }

      if (SUPERSCRIPT[ch]) {
        flushText();
        var digits = '';
        while (i < text.length && SUPERSCRIPT[text[i]]) {
          digits += SUPERSCRIPT[text[i]];
          i += 1;
        }
        i -= 1;
        tokens.push({ html: '<sup>' + digits + '</sup>', simple: true });
        continue;
      }

      if (ch === '(') {
        var closeGroup = matchParen(text, i);
        if (closeGroup > i) {
          flushText();
          var groupInner = convert(text.slice(i + 1, closeGroup));
          tokens.push({ html: groupHtml(groupInner), simple: true });
          i = closeGroup;
          continue;
        }
      }

      if (ch === '/') {
        var right = parseRight(text, i + 1);
        if (right) {
          var numerator = null;

          if (buffer) {
            var split = trailingOperand(buffer);
            if (split) {
              numerator = split.html;
              buffer = split.head;
            } else if (/^\s+$/.test(buffer)) {
              buffer = '';
            }
          }

          if (numerator === null && !buffer && lastTokenIsOperand()) {
            numerator = tokens.pop().html;
          }

          if (numerator !== null) {
            flushText();
            tokens.push({ html: fracHtml(numerator, right.html), simple: true });
            i = right.end - 1;
            continue;
          }
        }
      }

      buffer += ch;
    }

    flushText();
    return tokens.map(function (token) { return token.html; }).join('');
  }

  /** Procesa una cadena con HTML: convierte solo los nodos de texto. */
  function render(html) {
    if (html === null || html === undefined) return '';
    return String(html)
      .split(/(<[^>]+>)/)
      .map(function (part) {
        if (part.charAt(0) === '<') return part;
        return convert(part);
      })
      .join('');
  }

  global.MathRender = {
    render: render,
    sqrt: sqrtHtml,
    frac: fracHtml,
    norm: normHtml
  };
})(window);



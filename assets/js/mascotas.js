/* ============================================================
   mascotas.js — El equipo de mascotas (ayudantes interactivos)
   Cada mascota tiene un oficio, un sonido propio (Web Audio, sin archivos)
   y una forma de ayudar. No modifica los otros motores: observa la página
   y añade sus botones a ejemplos, ejercicios y exámenes de los tres años.
   ============================================================ */
(function (global) {
  'use strict';
  var DIR = 'assets/img/mascotas/';
  var PETS = {
    pugsito: { n: 'Pugsito', rol: 'Constructor', v: 'ladra', boton: 'Construir por pasos',
      que: 'Arma la solución bloque por bloque: un paso cada vez, para que sigas tú.',
      frases: ['¡Guau! Primero los cimientos.', 'Paso firme, resultado firme. ¡Guau!', 'Revisa cada bloque antes de poner otro.'] },
    rockytos: { n: 'Rockytos', rol: 'Bomberos', v: 'maullan', boton: 'Rescate', plural: true,
      que: 'Te rescatan si te atascas: errores a evitar y, en el examen, apagan opciones incorrectas.',
      frases: ['¡Miau miau! Al rescate.', '¿Se quema el cerebro? Respira y relee.', 'Un error se apaga revisando los signos.'] },
    mamoi: { n: 'Mamoi', rol: 'Cocinera', v: 'chilla', boton: 'Ver la receta',
      que: 'Te sirve la receta: las fórmulas del tema, que son los ingredientes.',
      frases: ['¡Ñic! Reúne los ingredientes primero.', 'Cada fórmula en su momento, como en la cocina.', 'Prueba el resultado antes de servirlo.'] },
    rovin: { n: 'Rovin', rol: 'Detective', v: 'grave', boton: 'Dame una pista',
      que: 'Investiga el enunciado: qué datos hay, qué te piden y por dónde empezar.',
      frases: ['Miau. Lee el enunciado dos veces.', '¿Qué sabemos y qué falta?', 'Toda pista cuenta.'] },
    manchita: { n: 'Manchita', rol: 'Auditora', v: 'fino', boton: 'Revisar mi trabajo',
      que: 'Te hace una lista de control para comprobar tu respuesta antes de verla.',
      frases: ['Prrr. ¿Ya comprobaste?', 'Sustituye tu resultado y verifica.', 'Los detalles importan.'] },
    duo: { n: 'Manchita y Rovin', rol: 'Agentes de examen', v: 'duo', img: 'manchita-rovin', plural: true,
      que: 'Te acompañan en los exámenes y te dicen cómo vas.',
      frases: ['Agentes listos para el examen.', 'Uno investiga y la otra verifica.', 'Calma: pregunta por pregunta.'] }
  };
  function img(k) { return DIR + (PETS[k].img || k) + '.webp?v=2'; }
  function M(h) { return global.MathRender && global.MathRender.render ? global.MathRender.render(h) : h; }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function azar(a) { return a[Math.floor(Math.random() * a.length)]; }

  /* ---------- sonidos ---------- */
  var mudo = false, ctx = null;
  try { mudo = localStorage.getItem('masc.mudo') === '1'; } catch (e) { /* sin almacenamiento */ }
  /* una nota: inicio, duración, frecuencias [desde, pico, hasta], onda, volumen, filtro */
  function nota(t, d, f, tipo, vol, corte) {
    var o = ctx.createOscillator(), g = ctx.createGain(), fl = ctx.createBiquadFilter(), n = ctx.currentTime + t;
    o.type = tipo; o.frequency.setValueAtTime(f[0], n); o.frequency.exponentialRampToValueAtTime(f[1], n + d * 0.35); o.frequency.exponentialRampToValueAtTime(f[2], n + d);
    fl.type = 'lowpass'; fl.frequency.value = corte || 4000;
    g.gain.setValueAtTime(0.0001, n); g.gain.exponentialRampToValueAtTime(vol, n + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, n + d);
    o.connect(fl).connect(g).connect(ctx.destination); o.start(n); o.stop(n + d + 0.02);
  }
  var VOZ = {
    ladra: function () { nota(0, 0.13, [260, 420, 130], 'sawtooth', 0.14, 1100); nota(0.18, 0.15, [240, 390, 110], 'sawtooth', 0.14, 1000); },
    maullan: function () { nota(0, 0.35, [600, 950, 620], 'triangle', 0.09, 2600); nota(0.25, 0.4, [720, 1120, 700], 'triangle', 0.08, 2800); },
    chilla: function () { [0, 0.1, 0.2].forEach(function (t) { nota(t, 0.07, [1300, 1900, 1500], 'sine', 0.07); }); },
    grave: function () { nota(0, 0.5, [420, 640, 360], 'sawtooth', 0.06, 1700); },
    fino: function () { nota(0, 0.42, [700, 1050, 560], 'triangle', 0.09, 3000); },
    duo: function () { VOZ.grave(); nota(0.3, 0.42, [700, 1050, 560], 'triangle', 0.08, 3000); },
    acierto: function () { [523, 659, 784].forEach(function (f, i) { nota(0.5 + i * 0.1, 0.18, [f, f, f], 'sine', 0.07); }); }
  };
  function sonar(v) {
    if (mudo) return;
    try {
      var C = global.AudioContext || global.webkitAudioContext; if (!C) return;
      ctx = ctx || new C(); if (ctx.state === 'suspended') ctx.resume();
      VOZ[v]();
    } catch (e) { /* silencio */ }
  }

  /* ---------- datos del tema abierto ---------- */
  var CURSOS = { primero: 'CURSO_1A', segundo: 'CURSO_2A', tercero: 'CURSO_3A' };
  function curso(node) { var v = node.closest('section.view'); return v && global[CURSOS[v.id]]; }
  function temaDe(node) {
    var c = curso(node), v = node.closest('section.view'), t = v && v.querySelector('.s2-head .s2-tile');
    return c && t ? c.temas[t.textContent.trim()] : null;
  }
  function norm(h) { var d = el('div', '', h); return d.textContent.replace(/\s+/g, ''); }
  function itemDe(card, tema) {
    var num = card.querySelector('.s2-num'), i = num ? parseInt(num.textContent, 10) - 1 : -1;
    var lista = card.classList.contains('s2-ex') ? tema.ejemplos : tema.ejercicios;
    return lista[i] || null;
  }
  function preguntaDe(q) {
    var c = curso(q), s = q.querySelector('.s2-stmt'); if (!c || !s) return null;
    var buscado = s.textContent.replace(/\s+/g, '');
    for (var id in c.temas) {
      var ex = c.temas[id].examen || [];
      for (var i = 0; i < ex.length; i++) if (norm(M(ex[i].q)) === buscado) return { q: ex[i], tema: c.temas[id] };
    }
    return null;
  }

  /* ---------- ayudas ---------- */
  function lista(a) { return '<ul>' + a.map(function (x) { return '<li>' + M(x) + '</li>'; }).join('') + '</ul>'; }
  function receta(t) {
    return '<p>Ingredientes de «' + t.titulo + '». Elige los que pide este problema:</p>' +
      lista(t.formulas.map(function (f) { return '<b>' + f.label + ':</b> <span class="math">' + f.html + '</span>'; }));
  }
  function pista(it) {
    var datos = String(it.enunciado).match(/<span class="math">[\s\S]*?<\/span>/g);
    return '<p><b>Caso:</b> ¿qué te piden exactamente? Subráyalo en tu cuaderno.</p>' +
      (datos ? '<p><b>Datos a la vista:</b></p>' + lista(datos) : '<p>Anota cada dato del enunciado antes de operar.</p>') +
      (it.pasos && it.pasos[0] ? '<details><summary>Abrir la primera pista</summary><p>' + M(it.pasos[0]) + '</p></details>' : '');
  }
  function revision(t) {
    return '<p>Antes de mirar la respuesta, marca lo que ya revisaste:</p><div class="masc-check">' +
      ['Respondí justo lo que se pedía.', 'Revisé signos y operaciones.', 'Comprobé el resultado (sustituyendo o estimando).', 'Escribí unidades o condiciones si hacían falta.']
        .map(function (x) { return '<label><input type="checkbox"> ' + x + '</label>'; }).join('') +
      '</div>' + (t.errores && t.errores.length ? '<p><b>Ojo con esto:</b></p>' + lista([azar(t.errores)]) : '');
  }

  function decir(panel, k, html) {
    panel.hidden = false; panel.setAttribute('data-pet', k);
    panel.innerHTML = '<img src="' + img(k) + '" alt=""><div class="masc-txt"><strong>' + PETS[k].n + '</strong>' + html + '</div><button type="button" class="masc-x" aria-label="Cerrar ayuda">×</button>';
    panel.querySelector('.masc-x').onclick = function () { panel.hidden = true; };
  }

  function ayudar(k, host, panel, data) {
    sonar(PETS[k].v);
    var it = data.item, t = data.tema, abierto = !panel.hidden && panel.getAttribute('data-pet') === k;
    if (k === 'mamoi') return decir(panel, k, receta(t));
    if (k === 'rovin') return decir(panel, k, pista(it));
    if (k === 'manchita') return decir(panel, k, revision(t));
    if (k === 'pugsito') {
      var n = abierto ? +panel.getAttribute('data-n') + 1 : 1, total = it.pasos.length;
      n = Math.min(n, total); panel.setAttribute('data-n', n);
      return decir(panel, k, '<p>Bloque ' + n + ' de ' + total + '. Intenta el siguiente antes de pedirlo.</p><ol>' +
        it.pasos.slice(0, n).map(function (p) { return '<li>' + M(p) + '</li>'; }).join('') + '</ol>' +
        '<p>' + (n < total ? 'Pulsa otra vez «' + PETS[k].boton + '» para el siguiente.' : '¡Obra terminada! Escribe tú la respuesta final y compárala.') + '</p>');
    }
    /* Rockytos */
    if (data.examen) {
      var q = data.q;
      if (q.tipo === 'opt') {
        var ops = Array.prototype.filter.call(host.querySelectorAll('.s2-opt'), function (b, i) { return i !== q.correcta; });
        ops.sort(function () { return Math.random() - 0.5; }).slice(0, 2).forEach(function (b) { b.disabled = true; b.classList.add('masc-apagada'); });
        return decir(panel, k, '<p>¡Apagamos dos opciones incorrectas! Quedan dos: decide tú.</p>');
      }
      return decir(panel, k, '<p>¡Escalera de rescate! Empieza así:</p><p>' + M(q.pasos[0]) + '</p>');
    }
    return decir(panel, k, '<p>¡Tranquilidad! Evita estos incendios comunes:</p>' + lista(t.errores || []) + '<p>Si sigues atascado, pide una pista a Rovin o los pasos a Pugsito.</p>');
  }

  function barra(host, keys, data, antes) {
    var b = el('div', 'masc-bar'), panel = el('div', 'masc-panel');
    panel.hidden = true; panel.setAttribute('aria-live', 'polite');
    b.setAttribute('role', 'group'); b.setAttribute('aria-label', 'Ayuda de las mascotas');
    keys.forEach(function (k) {
      var x = el('button', 'masc-btn', '<img src="' + img(k) + '" alt=""><span><b>' + PETS[k].n + '</b><small>' + PETS[k].boton + '</small></span>');
      x.type = 'button'; x.setAttribute('data-pet', k);
      x.onclick = function (e) { e.stopPropagation(); ayudar(k, host, panel, data); };
      b.appendChild(x);
    });
    host.insertBefore(b, antes || null); host.insertBefore(panel, antes || null);
  }

  /* ---------- se añaden a lo que va apareciendo ---------- */
  function decorar() {
    document.querySelectorAll('.s2-prob:not([data-masc]), .s2-ex:not([data-masc])').forEach(function (c) {
      c.setAttribute('data-masc', '');
      var t = temaDe(c), it = t && itemDe(c, t); if (!it) return;
      /* en los ejemplos la solución ya está a la vista: solo ayudan quienes aportan algo */
      var ej = c.classList.contains('s2-ex');
      barra(c, ej ? ['mamoi', 'rovin', 'rockytos'] : ['rockytos', 'rovin', 'pugsito', 'mamoi', 'manchita'], { item: it, tema: t }, c.querySelector(ej ? '.pz-wrap' : '.s2-sol'));
    });
    document.querySelectorAll('.s2-q:not([data-masc])').forEach(function (q) {
      q.setAttribute('data-masc', '');
      var f = preguntaDe(q); if (!f) return;
      var cab = el('div', 'masc-duo', '<button type="button" aria-label="Saludar a Manchita y Rovin"><img src="' + img('duo') + '" alt=""></button><span>' + azar(PETS.duo.frases) + '</span>');
      cab.querySelector('button').onclick = function () { sonar('duo'); cab.querySelector('span').textContent = azar(PETS.duo.frases); };
      q.insertBefore(cab, q.firstChild);
      barra(q, ['rockytos', 'mamoi'], { examen: true, q: f.q, tema: f.tema });
    });
    document.querySelectorAll('.s2-fb:not([data-masc]), .s2-result-card:not([data-masc])').forEach(function (r) {
      r.setAttribute('data-masc', '');
      var fin = r.classList.contains('s2-result-card'), bien = r.classList.contains('ok');
      var txt = fin ? 'Informe de los agentes: misión terminada. Repasa lo que falló y vuelve cuando quieras.' : bien ? '¡Caso resuelto! Excelente.' : 'Pista nueva: compara tus pasos con estos y detecta dónde cambió.';
      var d = el('div', 'masc-duo', '<img src="' + img('duo') + '" alt=""><span>' + txt + '</span>');
      r.parentNode.insertBefore(d, r);
      if (bien) sonar('acierto'); else sonar('duo');
    });
  }

  /* ---------- la casa de las mascotas (portada) ---------- */
  function casa() {
    var inicio = document.getElementById('inicio'); if (!inicio) return;
    var s = el('div', 'wrap masc-casa', '<div class="masc-casa-head"><div><h2>Tu equipo de estudio</h2><p>Tócalas para saludarlas. Te esperan en los ejemplos, ejercicios y exámenes de cada año.</p></div><button type="button" class="chip masc-mute"></button></div><div class="masc-grid"></div>');
    var mute = s.querySelector('.masc-mute');
    function pintar() { mute.textContent = mudo ? 'Sonido apagado' : 'Sonido encendido'; mute.setAttribute('aria-pressed', String(!mudo)); }
    mute.onclick = function () { mudo = !mudo; try { localStorage.setItem('masc.mudo', mudo ? '1' : '0'); } catch (e) { /* ignorar */ } pintar(); };
    pintar();
    Object.keys(PETS).forEach(function (k) {
      var p = PETS[k], c = el('button', 'masc-card', '<img src="' + img(k) + '" alt="" width="112" height="112"><strong>' + p.n + '</strong><em>' + p.rol + '</em><small>' + p.que + '</small><span class="masc-dice" aria-live="polite"></span>');
      c.type = 'button';
      c.onclick = function () {
        sonar(p.v); c.querySelector('.masc-dice').textContent = azar(p.frases);
        c.classList.remove('salta'); void c.offsetWidth; c.classList.add('salta');
        var h = el('i', 'masc-corazon', '♥'); h.setAttribute('aria-hidden', 'true'); c.appendChild(h); setTimeout(function () { h.remove(); }, 900);
      };
      s.querySelector('.masc-grid').appendChild(c);
    });
    inicio.appendChild(s);
  }

  global.Mascotas = { mudo: function () { return mudo; } };

  var pendiente = false;
  function programar() { if (pendiente) return; pendiente = true; requestAnimationFrame(function () { pendiente = false; decorar(); }); }
  casa(); decorar();
  new MutationObserver(programar).observe(document.body, { childList: true, subtree: true });
})(window);

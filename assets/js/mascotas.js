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
    var k = 0.94 + Math.random() * 0.12; f = f.map(function (x) { return x * k; });
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
    sirena: function () { nota(0, 0.28, [650, 980, 650], 'square', 0.035, 2200); nota(0.28, 0.28, [650, 980, 650], 'square', 0.035, 2200); VOZ.maullan(); },
    campana: function () { nota(0, 0.5, [1568, 1568, 1560], 'sine', 0.08); nota(0.04, 0.4, [2350, 2350, 2340], 'sine', 0.035); },
    martillo: function () { [0, 0.14].forEach(function (t) { nota(t, 0.07, [210, 140, 60], 'square', 0.12, 900); }); nota(0.3, 0.13, [260, 420, 130], 'sawtooth', 0.12, 1100); },
    lupa: function () { [330, 392, 466].forEach(function (f, i) { nota(i * 0.13, 0.12, [f, f, f], 'triangle', 0.09); }); },
    tic: function () { nota(0, 0.05, [1200, 1500, 1300], 'sine', 0.06); },
    cerrar: function () { nota(0, 0.1, [600, 400, 250], 'sine', 0.05); },
    animo: function () { nota(0, 0.2, [440, 440, 430], 'sine', 0.07); nota(0.2, 0.3, [392, 392, 370], 'sine', 0.07); },
    fiesta: function () { [523, 659, 784, 1047].forEach(function (f, i) { nota(i * 0.09, 0.22, [f, f, f], 'triangle', 0.08); }); VOZ.maullan(); },
    pio: function () { [0, 0.09, 0.18].forEach(function (t, i) { nota(t, 0.1, [1500 + i * 320, 2300 + i * 260, 2100 + i * 260], 'sine', 0.06); }); },
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
  var CURSOS = { noveno: 'CURSO_9', primero: 'CURSO_1A', segundo: 'CURSO_2A', tercero: 'CURSO_3A' };
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
  /* ---- respuestas con aspecto de pizarra: líneas de tiza que se escriben solas ---- */
  function say(t, col) { return '<div class="mb-say pz-' + (col || 'w') + '">' + t + '</div>'; }
  function mat(h, col) { return '<div class="mb-m pz-' + (col || 'w') + '">' + M(h) + '</div>'; }
  function box(h) { return '<div class="mb-m"><span class="pz-box">' + M(h) + '</span></div>'; }
  function receta(t) {
    return say('¿Qué fórmula necesitas? Elige la que pide el problema:', 'y') +
      t.formulas.map(function (f) { return '<div class="mb-f"><span class="mb-l pz-p">' + f.label + '</span>' + mat('<span class="math">' + f.html + '</span>', 'w') + '</div>'; }).join('');
  }
  function pista(it) {
    var datos = String(it.enunciado).match(/<span class="math">[\s\S]*?<\/span>/g);
    return say('① ¿Qué te piden exactamente? Subráyalo en tu cuaderno.', 'y') +
      (datos ? say('② Datos a la vista:', 'p') + datos.map(function (d) { return mat(d, 'b'); }).join('') : say('② Anota cada dato del enunciado antes de operar.', 'p')) +
      (it.pasos && it.pasos[0] ? '<details class="mb-det"><summary>③ Abrir la primera pista</summary>' + say(M(it.pasos[0]), 'g') + '</details>' : '');
  }
  function revision(t) {
    return say('Antes de mirar la respuesta, marca lo que ya revisaste:', 'y') + '<div class="masc-check">' +
      ['Respondí justo lo que se pedía.', 'Revisé signos y operaciones.', 'Comprobé el resultado (sustituyendo o estimando).', 'Escribí unidades o condiciones si hacían falta.']
        .map(function (x) { return '<label><input type="checkbox"> ' + x + '</label>'; }).join('') +
      '</div>' + (t.errores && t.errores.length ? say('Ojo con esto:', 'r') + say('✗ ' + M(azar(t.errores)), 'r') : '');
  }

  function decir(panel, k, html) {
    panel.hidden = false; panel.setAttribute('data-pet', k);
    panel.innerHTML = '<img src="' + img(k) + '" alt=""><div class="masc-txt pz-board"><strong class="mb-name">' + PETS[k].n + '</strong>' + html + '</div><button type="button" class="masc-x" aria-label="Cerrar ayuda">×</button>';
    panel.querySelector('.masc-x').onclick = function () { panel.hidden = true; sonar('cerrar'); };
    var tx = panel.querySelector('.masc-txt');
    if (global.PZ && global.PZ.escribir) { var u = tx.querySelectorAll('.mb-say,.mb-f,.mb-m:not(.mb-f .mb-m),.mb-step'); u.length && tx.classList.add('mb-live'); global.PZ.escribir(tx); }
  }

  function boton(donde, texto, fn) { var b = el('button', 'chip masc-accion', texto); b.type = 'button'; b.onclick = function (e) { e.stopPropagation(); fn(); }; donde.appendChild(b); return b; }

  /* Manchita: lista de control, comparar con la respuesta y decidir qué sigue */
  function auditar(host, panel, data) {
    decir(panel, 'manchita', revision(data.tema));
    var txt = panel.querySelector('.masc-txt'), checks = txt.querySelectorAll('input');
    Array.prototype.forEach.call(checks, function (c) {
      c.onchange = function () { sonar(Array.prototype.every.call(checks, function (x) { return x.checked; }) ? 'fiesta' : 'tic'); };
    });
    var ver = boton(txt, 'Comparar con la respuesta', function () {
      ver.remove(); sonar('lupa');
      txt.insertAdjacentHTML('beforeend', say('✓ Respuesta', 'g') + box(data.item.respuesta)); if (global.PZ && global.PZ.escribir) { var ul = txt.lastElementChild; global.PZ.escribir(ul.parentNode); }
      var fila = el('div', 'masc-fila', '<span>¿Te salió igual?</span>'); txt.appendChild(fila);
      boton(fila, 'Sí, me salió', function () {
        sonar('fiesta');
        fila.innerHTML = '<b>¡Excelente trabajo! 🎉</b>';
        var d = host.querySelector('[data-done][aria-pressed="false"]');
        if (d) boton(fila, 'Marcar como dominado', function () { sonar('fiesta'); d.click(); });
      });
      boton(fila, 'Todavía no', function () { sonar('animo'); ayudar('pugsito', host, panel, data); });
    });
  }

  function ayudar(k, host, panel, data) {
    var sigue = k === 'pugsito' && !panel.hidden && panel.getAttribute('data-pet') === k;
    sonar(sigue ? 'martillo' : k === 'rockytos' ? 'sirena' : k === 'mamoi' ? 'campana' : k === 'rovin' ? 'lupa' : PETS[k].v);
    var it = data.item, t = data.tema, abierto = !panel.hidden && panel.getAttribute('data-pet') === k;
    if (k === 'mamoi') return decir(panel, k, receta(t));
    if (k === 'rovin') {
      decir(panel, k, pista(it));
      var s = panel.querySelector('summary'); if (s) s.onclick = function () { sonar('grave'); };
      return;
    }
    if (k === 'manchita') return auditar(host, panel, data);
    if (k === 'pugsito') {
      var n = abierto ? +panel.getAttribute('data-n') + 1 : 1, total = it.pasos.length;
      n = Math.min(n, total); panel.setAttribute('data-n', n);
      decir(panel, k, say('Bloque ' + n + ' de ' + total + ' — intenta el siguiente antes de pedirlo.', 'y') +
        it.pasos.slice(0, n).map(function (p, i) { return '<div class="mb-step"><span class="pz-num">' + (i + 1) + '</span><div>' + M(p) + '</div></div>'; }).join('') +
        (n < total ? '' : say('★ ¡Obra terminada! Escribe tú la respuesta final y compárala.', 'g')));
      var txt = panel.querySelector('.masc-txt');
      if (n < total) boton(txt, 'Poner el siguiente bloque', function () { ayudar('pugsito', host, panel, data); });
      else boton(txt, 'Revisar con Manchita', function () { ayudar('manchita', host, panel, data); });
      return;
    }
    /* Rockytos */
    if (data.examen) {
      var q = data.q;
      if (q.tipo === 'opt') {
        var ops = Array.prototype.filter.call(host.querySelectorAll('.s2-opt'), function (b, i) { return i !== q.correcta; });
        ops.sort(function () { return Math.random() - 0.5; }).slice(0, 2).forEach(function (b) { b.disabled = true; b.classList.add('masc-apagada'); });
        return decir(panel, k, say('¡Apagamos dos opciones incorrectas!', 'y') + say('Quedan dos: decide tú.', 'w'));
      }
      return decir(panel, k, say('¡Escalera de rescate! Empieza así:', 'y') + '<div class="mb-step"><span class="pz-num">1</span><div>' + M(q.pasos[0]) + '</div></div>');
    }
    return decir(panel, k, say('¡Tranquilidad! Evita estos incendios comunes:', 'y') + (t.errores || []).map(function (e) { return say('✗ ' + M(e), 'r'); }).join('') + say('Si sigues atascado, pide una pista a Rovin o los pasos a Pugsito.', 'b'));
  }

  function barra(host, keys, data, antes) {
    var b = el('div', 'masc-bar'), panel = el('div', 'masc-panel');
    panel.hidden = true; panel.setAttribute('aria-live', 'polite');
    b.setAttribute('role', 'group'); b.setAttribute('aria-label', 'Ayuda de las mascotas');
    b.appendChild(el('strong', 'masc-titulo', '🐾 ¿Necesitas ayuda? Toca a un compañero'));
    keys.forEach(function (k) {
      var x = el('button', 'masc-btn', '<img src="' + img(k) + '" alt=""><span><b>' + PETS[k].n + '</b><small>' + PETS[k].boton + '</small></span>');
      x.type = 'button'; x.setAttribute('data-pet', k);
      x.onclick = function (e) { e.stopPropagation(); ayudar(k, host, panel, data); };
      b.appendChild(x);
    });
    host.insertBefore(b, antes || null); host.insertBefore(panel, antes || null);
  }

  /* ---------- resumen de Cheuscita en la pestaña Video ---------- */
  function resumenes() {
    document.querySelectorAll('.s2-video:not([data-masc])').forEach(function (v) {
      v.setAttribute('data-masc', '');
      var t = temaDe(v); if (!t) return;
      var marco = v.querySelector('.s2-vframe'), vid = marco && (global.RESUMENES_VIDEO || {})[marco.getAttribute('data-vid')];
      var delVideo = vid ? '<h4>🎬 Lo que explica el video</h4>' + lista(vid) : '<p><b>🎬 Resumen del video:</b> todavía no está disponible. Abajo tienes el resumen del tema.</p>';
      var caja = el('div', 'masc-resumen'), cab = el('button', 'masc-resumen-cab', '<img src="cheuscita.png" alt=""><span><b>Resumen de Cheuscita</b><small>Toca para ver los puntos importantes de «' + t.titulo + '»</small></span>');
      var cuerpo = el('div', 'masc-txt', delVideo + '<h4>📘 El tema</h4><p>' + M(t.resumen) + '</p><h4>⭐ Puntos importantes</h4>' + lista(t.objetivos) +
        '<h4>📌 Fórmulas clave</h4>' + lista(t.formulas.map(function (f) { return '<b>' + f.label + ':</b> <span class="math">' + f.html + '</span>'; })) +
        '<h4>⚠️ Cuidado con</h4>' + lista(t.errores) +
        '<p><small>La sección del tema sale del contenido de la página. El resumen del video, cuando aparece, se basa en un resumen publicado en Video Highlight.</small></p>');
      cab.type = 'button'; cab.setAttribute('aria-expanded', 'false'); cuerpo.hidden = true;
      cab.onclick = function () { cuerpo.hidden = !cuerpo.hidden; cab.setAttribute('aria-expanded', String(!cuerpo.hidden)); sonar(cuerpo.hidden ? 'cerrar' : 'pio'); };
      caja.appendChild(cab); caja.appendChild(cuerpo); v.parentNode.insertBefore(caja, v.nextSibling);
    });
  }

  /* ---------- se añaden a lo que va apareciendo ---------- */
  function decorar() {
    resumenes();
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

  /* ---------- botón flotante: ayuda siempre a la vista dentro de un tema ---------- */
  var dock, menu, aviso;
  function activa() { return document.querySelector('section.view.active'); }
  /* la tarjeta que más se ve en pantalla (o la siguiente más abajo) */
  function enPantalla() {
    var v = activa(); if (!v) return null;
    var mejor = null, area = 0, abajo = null;
    Array.prototype.forEach.call(v.querySelectorAll('.s2-q, .s2-prob, .s2-ex'), function (c) {
      var r = c.getBoundingClientRect(); if (!r.height) return;
      var a = Math.min(r.bottom, global.innerHeight) - Math.max(r.top, 70);
      if (a > area) { area = a; mejor = c; }
      if (!abajo && r.top > 0) abajo = c;
    });
    return mejor || abajo;
  }
  function abrirMenu(si) {
    menu.hidden = !si; dock.setAttribute('aria-expanded', String(si)); if (!si) return;
    var c = enPantalla(); aviso.textContent = c ? 'Te ayudo con el que tienes en pantalla:' : 'Abre la práctica y te ayudamos:';
    Array.prototype.forEach.call(menu.querySelectorAll('[data-pet]'), function (b) {
      b.hidden = !(c && c.querySelector('.masc-btn[data-pet="' + b.getAttribute('data-pet') + '"]'));
    });
    menu.querySelector('.masc-ir').hidden = !!c;
  }
  function actualizarDock() {
    if (!dock) return;
    var v = activa(), si = !!(v && v.querySelector('.s2-tabs, .s2-q'));
    dock.hidden = !si; if (!si) menu.hidden = true;
  }
  function crearDock() {
    dock = el('button', 'masc-dock', '<img src="' + img('rockytos') + '" alt=""><span>Ayuda</span>');
    dock.type = 'button'; dock.hidden = true; dock.setAttribute('aria-expanded', 'false');
    menu = el('div', 'masc-menu'); menu.hidden = true; aviso = el('p'); menu.appendChild(aviso);
    ['rockytos', 'rovin', 'pugsito', 'mamoi', 'manchita'].forEach(function (k) {
      var b = el('button', 'masc-btn', '<img src="' + img(k) + '" alt=""><span><b>' + PETS[k].n + '</b><small>' + PETS[k].boton + '</small></span>');
      b.type = 'button'; b.setAttribute('data-pet', k);
      b.onclick = function () {
        var c = enPantalla(), x = c && c.querySelector('.masc-btn[data-pet="' + k + '"]'); abrirMenu(false); if (!x) return;
        x.click();
        var panel = c.querySelector('.masc-panel'); if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
      };
      menu.appendChild(b);
    });
    var ir = boton(menu, 'Ir a practicar', function () {
      var t = activa().querySelector('.s2-tab[data-tab="practica"]'); abrirMenu(false); if (!t) return;
      sonar('maullan'); t.click(); setTimeout(function () { var c = enPantalla(); if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    });
    ir.classList.add('masc-ir');
    dock.onclick = function () { var si = menu.hidden; sonar(si ? 'maullan' : 'cerrar'); abrirMenu(si); };
    document.body.appendChild(menu); document.body.appendChild(dock);
    document.addEventListener('click', function (e) {
      if (!menu.hidden && !menu.contains(e.target) && !dock.contains(e.target)) abrirMenu(false);
      setTimeout(actualizarDock, 60);
    }, true);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') abrirMenu(false); setTimeout(actualizarDock, 60); });
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
  function programar() { if (pendiente) return; pendiente = true; requestAnimationFrame(function () { pendiente = false; decorar(); actualizarDock(); }); }
  casa(); crearDock(); decorar(); actualizarDock();
  new MutationObserver(programar).observe(document.body, { childList: true, subtree: true });
})(window);

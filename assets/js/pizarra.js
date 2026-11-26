/* ============================================================
   pizarra.js — Métodos "como en la pizarra" (paso a paso, con tiza)
   Uso en los datos:   window.PIZARRA_2A['1.1'] = [ { titulo, intro, pasos:[{ nota, html }] } ]
   · Cada paso AGREGA líneas a la pizarra; la "nota" es lo que diría el profe.
   · Ayudantes PZ.* devuelven HTML (ver abajo). Los textos matemáticos
     se escriben igual que en el resto del sitio (a/b, √, ² ...).
   ============================================================ */
(function (global) {
  'use strict';

  function M(h) { return global.MathRender && global.MathRender.render ? global.MathRender.render(h) : h; }
  /* Aplica MathRender fuera de los <svg> (dentro se usa texto plano con ², √, etc.) */
  function MS(h) { return String(h).split(/(<svg[\s\S]*?<\/svg>)/).map(function (x) { return x.indexOf('<svg') === 0 ? x : M(x); }).join(''); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  var COLS = { y: 'y', p: 'p', b: 'b', g: 'g', w: 'w', r: 'r' };

  /* ---------- ayudantes para escribir pizarras ---------- */
  var PZ = {
    /* texto con color de tiza: y(amarillo) p(rosa) b(azul) g(verde) r(rojo) w(blanco) */
    c: function (col, html) { return '<span class="pz-c pz-' + (COLS[col] || 'w') + '">' + html + '</span>'; },
    /* una línea de pizarra con nota lateral opcional (lo que "le haces a los dos lados") */
    row: function (main, side, col) {
      return '<div class="pz-row"><span class="pz-main">' + main + '</span>' + (side ? '<span class="pz-side pz-' + (col || 'y') + '">' + side + '</span>' : '') + '</div>';
    },
    /* varias líneas apiladas, centradas */
    rows: function () { return Array.prototype.slice.call(arguments).map(function (r) { return typeof r === 'string' && r.indexOf('pz-row') !== -1 ? r : PZ.row(r); }).join(''); },
    /* texto suelto como si el profe lo escribiera */
    say: function (html, col) { return '<div class="pz-say pz-' + (col || 'w') + '">' + html + '</div>'; },
    /* recuadro de respuesta */
    box: function (html) { return '<span class="pz-box">' + html + '</span>'; },
    /* tachado con tiza roja */
    tach: function (html) { return '<span class="pz-tach">' + html + '</span>'; },
    /* flecha hacia abajo con operación:  PZ.flecha('÷ 2') */
    flecha: function (txt, col) { return '<div class="pz-flecha pz-' + (col || 'y') + '"><span>' + txt + '</span><svg viewBox="0 0 20 34" aria-hidden="true"><path d="M10 2v26M3 21l7 8 7-8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'; },
    /* "se hace igual a los dos lados":  PZ.ambos('+ 3')  */
    ambos: function (op, col) { return '<div class="pz-ambos pz-' + (col || 'y') + '"><span>' + op + '</span><span>' + op + '</span></div>'; },
    /* sistema de ecuaciones con llave:  PZ.llave(['x + y = 5','x − y = 1']) */
    llave: function (lines) {
      return '<span class="pz-llave"><svg viewBox="0 0 16 100" preserveAspectRatio="none" aria-hidden="true"><path d="M14 2 Q6 2 6 12 V38 Q6 50 1 50 Q6 50 6 62 V88 Q6 98 14 98" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="pz-llave-l">' +
        lines.map(function (l) { return '<span>' + l + '</span>'; }).join('') + '</span></span>';
    },
    /* tabla de tiza:  PZ.tabla(['x','y'], [['0','2'],['1','3']])  */
    tabla: function (heads, rows, hl) {
      return '<table class="pz-tabla"><thead><tr>' + heads.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
        rows.map(function (r, i) { return '<tr' + (hl === i ? ' class="pz-hl"' : '') + '>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
    },
    /* Método de las TIJERAS (factorizar trinomios  ax² + bx + c)
       o:{ l1,l2 (columna izquierda), r1,r2 (columna derecha), p1,p2 (productos en cruz), sum (suma), ok }
       l1 va arriba-izq, r1 arriba-der, l2 abajo-izq, r2 abajo-der.
       Productos: p1 = l1·r2 (diagonal ↘, amarilla)  p2 = l2·r1 (diagonal ↗, rosa) */
    tijeras: function (o) {
      var X1 = 96, X2 = 236, Y1 = 44, Y2 = 118, h;
      h = '<svg class="pz-tij" viewBox="0 0 420 170" role="img" aria-label="Método de las tijeras">' +
        '<text x="' + X1 + '" y="' + (Y1 + 8) + '" class="pz-t pz-w">' + o.l1 + '</text><text x="' + X1 + '" y="' + (Y2 + 8) + '" class="pz-t pz-w">' + o.l2 + '</text>' +
        '<text x="' + X2 + '" y="' + (Y1 + 8) + '" class="pz-t pz-w">' + o.r1 + '</text><text x="' + X2 + '" y="' + (Y2 + 8) + '" class="pz-t pz-w">' + o.r2 + '</text>' +
        '<line x1="' + (X1 + 26) + '" y1="' + (Y1 + 8) + '" x2="' + (X2 - 26) + '" y2="' + (Y2 - 8) + '" class="pz-ln pz-y"/><path d="M' + (X2 - 26) + ' ' + (Y2 - 8) + 'l-10 -3 M' + (X2 - 26) + ' ' + (Y2 - 8) + 'l-3 -10" class="pz-ln pz-y"/>' +
        '<line x1="' + (X1 + 26) + '" y1="' + (Y2 - 8) + '" x2="' + (X2 - 26) + '" y2="' + (Y1 + 8) + '" class="pz-ln pz-p"/><path d="M' + (X2 - 26) + ' ' + (Y1 + 8) + 'l-10 3 M' + (X2 - 26) + ' ' + (Y1 + 8) + 'l-3 10" class="pz-ln pz-p"/>' +
        '<text x="316" y="' + (Y1 + 8) + '" class="pz-t pz-y">' + (o.p1 != null ? o.p1 : '') + '</text><text x="316" y="' + (Y2 + 8) + '" class="pz-t pz-p">' + (o.p2 != null ? o.p2 : '') + '</text>' +
        (o.sum != null ? '<line x1="300" y1="' + (Y2 + 26) + '" x2="410" y2="' + (Y2 + 26) + '" class="pz-ln pz-w"/><text x="316" y="' + (Y2 + 52) + '" class="pz-t pz-g">' + o.sum + (o.ok ? ' ✓' : '') + '</text>' : '') +
        '</svg>';
      return h;
    },
    /* Ruffini / división sintética:  PZ.ruffini(['1','−5','6'], '2', ['','2','−6'], ['1','−3','0'])  */
    ruffini: function (coef, r, mid, res) {
      function cell(a, cls) { return a.map(function (c) { return '<td class="' + (cls || '') + '">' + c + '</td>'; }).join(''); }
      return '<table class="pz-ruf"><tr><td class="pz-ruf-e"></td>' + cell(coef, 'pz-w') + '</tr>' +
        '<tr><td class="pz-ruf-r pz-y">' + r + '</td>' + cell(mid, 'pz-p pz-ruf-m') + '</tr>' +
        '<tr class="pz-ruf-res"><td class="pz-ruf-e"></td>' + cell(res, 'pz-g') + '</tr></table>';
    },
    /* Fracción apilada simple con tiza */
    f: function (n, d) { return '<span class="frac"><span class="num">' + n + '</span><span class="den">' + d + '</span></span>'; }
  };

  /* ---------- render de lecciones ---------- */
  var uid = 0;
  function repaso(L) {
    var items = L.pasos.map(function (p, i) { return { i: i, t: plainNote(p.nota) }; }).filter(function (x) { return x.t; });
    if (L.sinRepaso || L.pasos.length < 3 || items.length < 3) return L;
    var h = PZ.say('<span class="pz-num">★</span> Repasemos lo que hicimos', 'y') + '<ol class="pz-recap">' + items.map(function (x) { return '<li>' + esc(cutSentence(x.t)) + '</li>'; }).join('') + '</ol>';
    return { titulo: L.titulo, intro: L.intro, pasos: L.pasos.concat([{ nota: 'Repasemos: mira los pasos en orden. Si entiendes por qué hicimos cada uno, ya dominas el método.', html: h }]) };
  }
  function plainNote(h) { return String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }
  function cutSentence(t) { var m = t.match(/^(.+?[.!?])(\s|$)/), x = m ? m[1] : t; return x.length > 110 ? x.slice(0, 107).replace(/\s+\S*$/, '') + '…' : x; }

  function lessonHtml(L) {
    L = repaso(L);
    var id = 'pz' + (++uid), n = L.pasos.length;
    var steps = L.pasos.map(function (p, i) {
      return '<div class="pz-step" data-i="' + i + '"' + (p.reemplaza ? ' data-rep="1"' : '') + (i ? ' hidden' : '') + '>' + MS(p.html) + '</div>';
    }).join('');
    var notes = L.pasos.map(function (p, i) {
      return '<div class="pz-nota" data-i="' + i + '"' + (i ? ' hidden' : '') + '><span class="pz-prof" aria-hidden="true">Profe</span><p>' + M(p.nota || '') + '</p></div>';
    }).join('');
    return '<article class="pz-lesson" id="' + id + '" tabindex="0" data-pz data-n="' + n + '" data-cur="0">' +
      '<header class="pz-head"><h4>' + esc(L.titulo) + '</h4>' + (L.intro ? '<p class="muted">' + M(L.intro) + '</p>' : '') + '</header>' +
      '<div class="pz-frame"><div class="pz-board" aria-live="polite">' + steps + '</div><div class="pz-tray" aria-hidden="true"><i class="pz-gis pz-gy"></i><i class="pz-gis pz-gp"></i><i class="pz-gis pz-gw"></i><i class="pz-borr"></i></div></div>' +
      '<div class="pz-dots" aria-hidden="true">' + L.pasos.map(function (_, i) { return '<i data-d="' + i + '"></i>'; }).join('') + '</div>' +
      '<div class="pz-notes">' + notes + '</div>' +
      '<div class="pz-ctrl"><button class="btn btn-ghost btn-sm" type="button" data-pz-act="prev" disabled>← Atrás</button>' +
      '<span class="pz-count"><b data-pz-n>1</b> / ' + n + '</span>' +
      '<button class="btn btn-primary btn-sm" type="button" data-pz-act="next">Siguiente paso →</button>' +
      '<button class="btn btn-ghost btn-sm" type="button" data-pz-act="play">▶ Reproducir</button>' +
      '<button class="btn btn-ghost btn-sm" type="button" data-pz-act="voz" aria-pressed="false" title="El profe lee cada paso en voz alta">🔊 Voz</button>' +
      '<button class="btn btn-ghost btn-sm" type="button" data-pz-act="all">Ver todo</button></div></article>';
  }

  var REDUCE = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var STEP = 0.55; /* segundos entre líneas */
  function animate(stepEl, cap) {
    var kids = Array.prototype.slice.call(stepEl.children), d = 0;
    function flat(el) { return el.classList && el.classList.contains('pz-paso') ? Array.prototype.slice.call(el.children) : [el]; }
    var lines = []; kids.forEach(function (k) { flat(k).forEach(function (x) { lines.push(x); }); });
    var stp = cap ? Math.min(0.3, cap / Math.max(1, lines.length)) : STEP;
    lines.forEach(function (el) {
      el.classList.remove('pz-wr'); void el.offsetWidth;
      el.style.setProperty('--pz-d', d.toFixed(2) + 's'); el.classList.add('pz-wr');
      var shapes = el.querySelectorAll ? el.querySelectorAll('svg') : [];
      Array.prototype.forEach.call(shapes, function (sv) {
        var k = 0;
        Array.prototype.forEach.call(sv.querySelectorAll('path,line,circle,ellipse,rect,polyline,polygon,text'), function (sh) {
          var fill = sh.getAttribute('fill'), stroke = sh.getAttribute('stroke'), tag = sh.tagName.toLowerCase();
          sh.classList.remove('pz-dr', 'pz-po'); void sh.getBoundingClientRect;
          if (tag !== 'text' && stroke && stroke !== 'none' && (!fill || fill === 'none')) { sh.setAttribute('pathLength', '1'); sh.classList.add('pz-dr'); }
          else sh.classList.add('pz-po');
          sh.style.setProperty('--pz-sd', (d + 0.15 * (k++)).toFixed(2) + 's');
        });
      });
      d += stp;
    });
    return d;
  }

  function show(root, cur, quiet) {
    var n = +root.getAttribute('data-n'), prev = +root.getAttribute('data-cur');
    cur = Math.max(0, Math.min(n - 1, cur)); root.setAttribute('data-cur', cur);
    var st = root.querySelectorAll('.pz-step'), dur = 0;
    Array.prototype.forEach.call(st, function (s) {
      var i = +s.getAttribute('data-i'), nx = st[i + 1], rep = nx && nx.getAttribute('data-rep') && cur >= i + 1;
      s.hidden = i > cur || !!rep; s.classList.toggle('pz-new', i === cur && cur > 0); s.classList.toggle('pz-old', i < cur);
      if (i === cur && !s.hidden && !quiet && !REDUCE && (cur !== prev || !s.getAttribute('data-shown'))) { s.setAttribute('data-shown', '1'); dur = animate(s); }
    });
    var notas = root.querySelectorAll('.pz-nota');
    Array.prototype.forEach.call(notas, function (s) { var on = +s.getAttribute('data-i') === cur; s.hidden = !on; if (on && !quiet) { s.classList.remove('pz-say-in'); void s.offsetWidth; s.classList.add('pz-say-in'); } });
    Array.prototype.forEach.call(root.querySelectorAll('.pz-dots i'), function (d) { var i = +d.getAttribute('data-d'); d.className = i < cur ? 'on' : i === cur ? 'now' : ''; });
    root.querySelector('[data-pz-n]').textContent = cur + 1;
    root.querySelector('[data-pz-act="prev"]').disabled = cur === 0;
    var nx = root.querySelector('[data-pz-act="next"]'); nx.disabled = cur === n - 1; nx.textContent = cur === n - 1 ? 'Listo ✓' : 'Siguiente paso →';
    root.setAttribute('data-dur', dur.toFixed(2));
    if (!quiet && root.getAttribute('data-voz') === '1') hablar(root, cur);
    return dur;
  }

  /* ---------- voz del profe ---------- */
  var SYN = global.speechSynthesis, VOZ_OK = !!(SYN && global.SpeechSynthesisUtterance);
  function aVoz(h) {
    return String(h || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ')
      .replace(/(\d)\s*\/\s*(\d)/g, '$1 sobre $2').replace(/√/g, ' raíz de ').replace(/²/g, ' al cuadrado ').replace(/³/g, ' al cubo ')
      .replace(/[−–]/g, ' menos ').replace(/[·×]/g, ' por ').replace(/÷/g, ' entre ').replace(/≈/g, ' aproximadamente ')
      .replace(/≤/g, ' menor o igual que ').replace(/≥/g, ' mayor o igual que ').replace(/=/g, ' igual a ').replace(/π/g, ' pi ')
      .replace(/°/g, ' grados ').replace(/⇒|→/g, ' entonces ').replace(/\+/g, ' más ').replace(/\s+/g, ' ').trim();
  }
  function hablar(root, cur) {
    if (!VOZ_OK) return; SYN.cancel();
    var nota = root.querySelector('.pz-nota[data-i="' + cur + '"] p'); if (!nota) return;
    var u = new global.SpeechSynthesisUtterance(aVoz(nota.innerHTML)); u.lang = 'es-419'; u.rate = 0.95;
    var prof = root.querySelector('.pz-nota[data-i="' + cur + '"] .pz-prof');
    u.onstart = function () { if (prof) prof.classList.add('pz-talk'); };
    u.onend = u.onerror = function () { if (prof) prof.classList.remove('pz-talk'); root.dispatchEvent(new CustomEvent('pz-voz-fin')); };
    SYN.speak(u);
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-pz-act]'); if (!b) return;
    var root = b.closest('[data-pz]'); if (!root) return;
    var cur = +root.getAttribute('data-cur'), n = +root.getAttribute('data-n'), a = b.getAttribute('data-pz-act');
    if (a === 'next') show(root, cur + 1); else if (a === 'prev') show(root, cur - 1); else if (a === 'all') show(root, n - 1, true);
    else if (a === 'voz') {
      if (!VOZ_OK) { b.textContent = '🔇 Sin voz'; b.disabled = true; return; }
      var on = root.getAttribute('data-voz') !== '1'; root.setAttribute('data-voz', on ? '1' : '0'); b.setAttribute('aria-pressed', on); b.textContent = on ? '🔊 Voz activada' : '🔊 Voz';
      if (on) hablar(root, cur); else SYN.cancel();
    }
  });


  /* ---------- pizarra automática para ejemplos y ejercicios ---------- */
  var MATH_RE = /<span class="math">([\s\S]*?)<\/span>/g;
  function mathsOf(h) { var o = [], m; MATH_RE.lastIndex = 0; while ((m = MATH_RE.exec(String(h || '')))) o.push(m[1]); return o; }
  function plain(h) { return String(h || '').replace(MATH_RE, '$1').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }
  function mathLine(x, col) { return '<div class="pz-row"><span class="pz-main pz-' + col + '"><span class="math">' + x + '</span></span></div>'; }
  function cut(t, n) { t = String(t || ''); if (t.length <= n) return t; var c = t.slice(0, n), i = c.lastIndexOf(' '); return (i > n * .6 ? c.slice(0, i) : c) + '…'; }
  function firstSentence(t) { var x = plain(t), m = x.match(/^(.+?[.:;!?])(\s|$)/); return cut(m ? m[1] : x, 80); }
  function autoLesson(e) {
    var pasos = [], ms = mathsOf(e.enunciado), pasosArr = e.pasos || [];
    var ARR = '<div class="pz-down" aria-hidden="true">↓</div>';
    pasos.push({ nota: '<b>Problema:</b> ' + e.enunciado,
      html: PZ.say('<span class="pz-num">?</span> Problema', 'y') +
        (ms.length ? ms.slice(0, 3).map(function (x) { return mathLine(x, 'w'); }).join('') : PZ.say(esc(cut(plain(e.enunciado), 160)), 'w')) });
    pasosArr.forEach(function (t, i) {
      var m = mathsOf(t).slice(-3), h = '<div class="pz-paso">' + PZ.say('<span class="pz-num">' + (i + 1) + '</span> ' + esc(firstSentence(t)), 'p');
      if (m.length) h += m.map(function (x, k) { return (k ? ARR : '') + mathLine(x, k === m.length - 1 ? 'y' : 'b'); }).join('');
      else h += PZ.say(esc(cut(plain(t), 220)), 'b');
      pasos.push({ nota: t, html: h + '</div>' });
    });
    pasos.push({ nota: '<b>Respuesta:</b> ' + e.respuesta, html: PZ.say('<span class="pz-num">✓</span> Respuesta', 'g') + PZ.say(PZ.box(String(e.respuesta)), 'g') });
    return { titulo: e.titulo || 'Resolución', pasos: pasos, sinRepaso: true };
  }

  /* reproducir solo + teclado */
  var timers = new WeakMap();
  function stop(root) { var t = timers.get(root); if (t) { clearTimeout(t.id); root.removeEventListener('pz-voz-fin', t.fin); timers.delete(root); } var b = root.querySelector('[data-pz-act="play"]'); if (b) b.textContent = '▶ Reproducir'; if (SYN) SYN.cancel(); }
  function tick(root) {
    var c = +root.getAttribute('data-cur'), n = +root.getAttribute('data-n'); if (c >= n - 1) { stop(root); return; }
    var dur = show(root, c + 1), voz = root.getAttribute('data-voz') === '1' && VOZ_OK, rec = timers.get(root); if (!rec) return;
    if (voz) { rec.fin = function () { root.removeEventListener('pz-voz-fin', rec.fin); rec.id = setTimeout(function () { tick(root); }, 900); }; root.addEventListener('pz-voz-fin', rec.fin); }
    else rec.id = setTimeout(function () { tick(root); }, Math.max(2800, dur * 1000 + 2200));
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-pz-act]'); if (!b) return;
    var root = b.closest('[data-pz]'); if (!root) return; var a = b.getAttribute('data-pz-act');
    if (a === 'voz') return;
    if (a === 'play') {
      if (timers.get(root)) { stop(root); return; }
      var n = +root.getAttribute('data-n'); if (+root.getAttribute('data-cur') >= n - 1) show(root, 0);
      b.textContent = '⏸ Pausa'; timers.set(root, { id: 0 }); timers.get(root).id = setTimeout(function () { tick(root); }, 1500);
    } else stop(root);
  }, true);
  document.addEventListener('keydown', function (e) {
    var root = e.target.closest && e.target.closest('[data-pz]'); if (!root || /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    var cur = +root.getAttribute('data-cur');
    if (e.key === 'ArrowRight') { show(root, cur + 1); e.preventDefault(); } else if (e.key === 'ArrowLeft') { show(root, cur - 1); e.preventDefault(); }
  });
  /* la primera pizarra de cada lección se "escribe" al aparecer en pantalla */
  if ('IntersectionObserver' in global) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { var r = en.target; io.unobserve(r); var s0 = r.querySelector('.pz-step[data-i="0"]'); if (s0 && !s0.hidden && !s0.getAttribute('data-shown') && !REDUCE) { s0.setAttribute('data-shown', '1'); animate(s0); } } }); }, { threshold: 0.35 });
    new MutationObserver(function () { Array.prototype.forEach.call(document.querySelectorAll('[data-pz]:not([data-io])'), function (r) { r.setAttribute('data-io', '1'); io.observe(r); }); }).observe(document.body, { childList: true, subtree: true });
    Array.prototype.forEach.call(document.querySelectorAll('[data-pz]'), function (r) { r.setAttribute('data-io', '1'); io.observe(r); });
  }

  PZ.escribir = function (c) { if (c && !REDUCE) { c.classList.remove('pz-new'); animate(c, 1.6); } };
  global.PZ = PZ;
  global.Pizarra = {
    /* pizarra de un solo ejercicio/ejemplo (usa sus pasos y respuesta) */
    auto: function (e) { var L = autoLesson(e); return '<div class="pz-wrap pz-auto">' + lessonHtml(L).replace(/<header class="pz-head">[\s\S]*?<\/header>/, '') + '</div>'; },
    html: function (lessons, vacio) {
      if (!lessons || !lessons.length) return vacio || '<p class="muted">Este tema aún no tiene método en pizarra.</p>';
      return '<div class="pz-wrap"><p class="muted small pz-hint">Pulsa <b>Siguiente paso</b> y mira cómo se va escribiendo en la pizarra, como en clase.</p>' + lessons.map(lessonHtml).join('') + '</div>';
    }
  };
})(window);

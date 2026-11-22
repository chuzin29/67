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
  function lessonHtml(L) {
    var id = 'pz' + (++uid), n = L.pasos.length;
    var steps = L.pasos.map(function (p, i) {
      return '<div class="pz-step" data-i="' + i + '"' + (p.reemplaza ? ' data-rep="1"' : '') + (i ? ' hidden' : '') + '>' + MS(p.html) + '</div>';
    }).join('');
    var notes = L.pasos.map(function (p, i) {
      return '<div class="pz-nota" data-i="' + i + '"' + (i ? ' hidden' : '') + '><span class="pz-prof" aria-hidden="true">Profe</span><p>' + M(p.nota || '') + '</p></div>';
    }).join('');
    return '<article class="pz-lesson" id="' + id + '" data-pz data-n="' + n + '" data-cur="0">' +
      '<header class="pz-head"><h4>' + esc(L.titulo) + '</h4>' + (L.intro ? '<p class="muted">' + M(L.intro) + '</p>' : '') + '</header>' +
      '<div class="pz-frame"><div class="pz-board" aria-live="polite">' + steps + '<div class="pz-chalk" aria-hidden="true"></div></div></div>' +
      '<div class="pz-notes">' + notes + '</div>' +
      '<div class="pz-ctrl"><button class="btn btn-ghost btn-sm" type="button" data-pz-act="prev" disabled>← Atrás</button>' +
      '<span class="pz-count"><b data-pz-n>1</b> / ' + n + '</span>' +
      '<button class="btn btn-primary btn-sm" type="button" data-pz-act="next">Siguiente paso →</button>' +
      '<button class="btn btn-ghost btn-sm" type="button" data-pz-act="all">Ver todo</button></div></article>';
  }

  function show(root, cur) {
    var n = +root.getAttribute('data-n');
    cur = Math.max(0, Math.min(n - 1, cur)); root.setAttribute('data-cur', cur);
    var st = root.querySelectorAll('.pz-step');
    Array.prototype.forEach.call(st, function (s) {
      var i = +s.getAttribute('data-i'), nx = st[i + 1], rep = nx && nx.getAttribute('data-rep') && cur >= i + 1;
      s.hidden = i > cur || !!rep; s.classList.toggle('pz-new', i === cur && cur > 0); s.classList.toggle('pz-old', i < cur);
    });
    Array.prototype.forEach.call(root.querySelectorAll('.pz-nota'), function (s) { s.hidden = +s.getAttribute('data-i') !== cur; });
    root.querySelector('[data-pz-n]').textContent = cur + 1;
    root.querySelector('[data-pz-act="prev"]').disabled = cur === 0;
    var nx = root.querySelector('[data-pz-act="next"]'); nx.disabled = cur === n - 1; nx.textContent = cur === n - 1 ? 'Listo ✓' : 'Siguiente paso →';
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-pz-act]'); if (!b) return;
    var root = b.closest('[data-pz]'); if (!root) return;
    var cur = +root.getAttribute('data-cur'), n = +root.getAttribute('data-n'), a = b.getAttribute('data-pz-act');
    if (a === 'next') show(root, cur + 1); else if (a === 'prev') show(root, cur - 1); else if (a === 'all') show(root, n - 1);
  });

  global.PZ = PZ;
  global.Pizarra = {
    html: function (lessons, vacio) {
      if (!lessons || !lessons.length) return vacio || '<p class="muted">Este tema aún no tiene método en pizarra.</p>';
      return '<div class="pz-wrap"><p class="muted small pz-hint">Pulsa <b>Siguiente paso</b> y mira cómo se va escribiendo en la pizarra, como en clase.</p>' + lessons.map(lessonHtml).join('') + '</div>';
    }
  };
})(window);

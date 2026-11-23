/* ============================================================
   tercero-ui.js — Vista de 3.er año · Cálculo
   Año → período → unidad → tema. Teoría, fórmulas, ejemplos paso a paso,
   práctica por niveles, preguntas, calculadora y examen autocorregible.
   Progreso guardado en localStorage (si está disponible).
   ============================================================ */
(function (global) {
  'use strict';

  var PER = [
    { id: 'I', temas: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9'], resumen: 'Límites, continuidad, trigonometría y números complejos' },
    { id: 'II', temas: ['1.10', '1.11', '1.12', '1.13', '1.14', '1.15', '1.16'], resumen: 'Derivadas: definición, reglas y aplicaciones' },
    { id: 'III', temas: ['1.17', '1.18', '1.19', '1.20', '1.21'], resumen: 'Integración: indefinida, definida y aplicaciones' },
    { id: 'IV', temas: ['1.22', '1.23', '1.24', '1.25', '1.26', '1.27'], resumen: 'Álgebra vectorial y matemática discreta' }
  ];
  var UN = { 1: 'Límites y continuidad', 2: 'Trigonometría y complejos', 3: 'Derivadas', 4: 'Integrales', 5: 'Álgebra vectorial', 6: 'Matemática discreta' };
  var TABS = [['teoria', 'Teoría'], ['pizarra', 'Pizarra'], ['video', 'Video'], ['explora', 'Gráficos'], ['formulas', 'Fórmulas'], ['ejemplos', 'Ejemplos'], ['practica', 'Práctica'], ['preguntas', 'Preguntas'], ['errores', 'Errores y uso'], ['calc', 'Calculadora'], ['examen', 'Mini‑examen']];
  var LVL = { facil: 'Fácil', intermedio: 'Intermedio', dificil: 'Difícil' };

  var root, mounted = false;
  var view = { mode: 'home', per: 'all', q: '', id: null, tab: 'teoria', nivel: 'todos', pend: false, all: false, sinver: false };
  var store = { seen: {}, done: {}, best: {}, last: null };
  var exam = null;

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function T() { return (global.CURSO_3A || {}).temas || {}; }
  function M(h) { return global.MathRender && global.MathRender.render ? global.MathRender.render(h) : h; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function order(id) { var p = id.split('.'); return +p[1]; }
  function ids() { return Object.keys(T()).sort(function (a, b) { return order(a) - order(b); }); }
  function perOf(id) { for (var i = 0; i < PER.length; i++) if (PER[i].temas.indexOf(id) >= 0) return PER[i]; return PER[0]; }

  function load() { try { var s = JSON.parse(localStorage.getItem('c3.v1')); if (s) { store = Object.assign(store, s); } } catch (e) { /* sin almacenamiento */ } }
  function save() { try { localStorage.setItem('c3.v1', JSON.stringify(store)); } catch (e) { /* ignorar */ } }

  function doneCount(id) { var t = T()[id], n = 0; if (!t) return 0; t.ejercicios.forEach(function (_, i) { if (store.done[id + ':' + i]) n++; }); return n; }
  function totals() {
    var all = ids(), seen = 0, ej = 0, ejT = 0, ex = 0;
    all.forEach(function (id) { if (store.seen[id]) seen++; ej += doneCount(id); ejT += T()[id].ejercicios.length; if (store.best['t:' + id] != null) ex++; });
    return { temas: all.length, seen: seen, ej: ej, ejT: ejT, ex: ex };
  }

  /* ---------- números y respuestas ---------- */
  function pnum(s) {
    s = String(s).trim().replace(/−/g, '-').replace(/\s+/g, '');
    if (!s) return NaN;
    var pct = /%$/.test(s); if (pct) s = s.slice(0, -1);
    var mm = s.match(/^(-?\d*\.?\d+)\/(-?\d*\.?\d+)$/), v;
    if (mm) v = parseFloat(mm[1]) / parseFloat(mm[2]);
    else { s = s.replace(',', '.'); v = /^-?\d*\.?\d+(e-?\d+)?$/i.test(s) ? parseFloat(s) : NaN; }
    return pct ? v / 100 : v;
  }
  function plist(s) {
    s = String(s).replace(/[a-zA-Z]+\s*=/g, '').replace(/[()\[\]{}]/g, '');
    var parts = s.indexOf(';') >= 0 ? s.split(';') : s.split(/,|\s+/);
    return parts.map(function (x) { return x.trim(); }).filter(Boolean).map(pnum);
  }
  function fmtN(n) { return (Math.round(n * 1000) / 1000).toString().replace('-', '−'); }

  function check(q, raw) {
    var tol = q.tol || 0.01, a, i;
    if (q.tipo === 'opt') return +raw === q.correcta;
    if (q.tipo === 'num') { a = pnum(raw); return isFinite(a) && Math.abs(a - q.r) <= tol; }
    a = plist(raw);
    if (a.length !== q.r.length || a.some(function (x) { return !isFinite(x); })) return false;
    if (q.tipo === 'par') return Math.abs(a[0] - q.r[0]) <= tol && Math.abs(a[1] - q.r[1]) <= tol;
    var s = a.slice().sort(function (x, y) { return x - y; }), r = q.r.slice().sort(function (x, y) { return x - y; });
    for (i = 0; i < r.length; i++) if (Math.abs(s[i] - r[i]) > tol) return false;
    return true;
  }
  function correctText(q) {
    if (q.tipo === 'opt') return q.opciones[q.correcta];
    if (q.tipo === 'num') return '<span class="math">' + fmtN(q.r) + '</span>';
    if (q.tipo === 'par') return '<span class="math">(' + fmtN(q.r[0]) + ', ' + fmtN(q.r[1]) + ')</span>';
    return '<span class="math">' + q.r.map(fmtN).join(', ') + '</span>';
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pool(tIds) { var out = []; tIds.forEach(function (id) { (T()[id].examen || []).forEach(function (q) { out.push(Object.assign({ _t: id }, q)); }); }); return out; }

  /* ---------- piezas de interfaz ---------- */
  function ring(pct, label) {
    var r = 26, c = 2 * Math.PI * r, o = c * (1 - pct / 100);
    return '<div class="s2-ring" role="img" aria-label="' + label + ' ' + pct + '%"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="' + r + '" class="bg"/><circle cx="32" cy="32" r="' + r + '" class="fg" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + o.toFixed(1) + '"/></svg><b>' + pct + '%</b></div>';
  }
  function bar(pct) { return '<div class="progress s2-prog"><div class="progress-fill" style="width:' + pct + '%"></div></div>'; }

  function topicCard(id, i) {
    var t = T()[id], d = doneCount(id), n = t.ejercicios.length, best = store.best['t:' + id];
    return '<button class="s2-topic u' + t.unidad + '" data-open="' + id + '" style="--i:' + i + '">' +
      '<span class="s2-tile">' + id + '</span>' +
      '<span class="s2-topic-body"><strong>' + esc(t.titulo) + '</strong><span class="s2-sub">' + M(t.resumen) + '</span>' +
      '<span class="s2-meta"><span>' + t.ejemplos.length + ' ejemplos</span><span>' + n + ' ejercicios</span><span>10 preguntas de examen</span></span>' +
      bar(Math.round(100 * d / n)) +
      '<span class="s2-flags">' + (store.seen[id] ? '<i class="s2-flag ok"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg> Visto</i>' : '<i class="s2-flag">Nuevo</i>') + (d ? '<i class="s2-flag">' + d + '/' + n + ' dominados</i>' : '') + (best != null ? '<i class="s2-flag gold">Examen ' + best + '/10</i>' : '') + '</span>' +
      '</span></button>';
  }

  /* ---------- inicio ---------- */
  function renderHome() {
    var tt = totals(), pct = Math.round(100 * (tt.seen / tt.temas * 0.4 + tt.ej / tt.ejT * 0.6)), html = '', n = 0;
    var last = store.last && T()[store.last] ? store.last : null;
    html += '<div class="s2-hero"><div class="s2-hero-text"><span class="eyebrow">Cálculo · Bachillerato</span><h2 id="s3-title">3.er año · Cálculo</h2>' +
      '<p class="lead">27 temas en 6 unidades y 4 períodos. En cada tema: teoría, fórmulas, ejemplos que se revelan paso a paso, práctica por niveles, calculadora con gráfica y mini‑examen que se corrige solo.</p>' +
      '<div class="hero-actions"><button class="btn btn-primary" data-open="' + (last || '1.1') + '">' + (last ? 'Continuar: tema ' + last : 'Empezar por el tema 1.1') + '</button>' +
      '<button class="btn btn-ghost" data-t3="examenes">Modo examen</button></div></div>' +
      '<div class="s2-hero-stats">' + ring(pct, 'Avance general') + '<ul><li><b>' + tt.seen + '</b>/' + tt.temas + ' temas vistos</li><li><b>' + tt.ej + '</b>/' + tt.ejT + ' ejercicios dominados</li><li><b>' + tt.ex + '</b>/' + tt.temas + ' mini‑exámenes hechos</li></ul></div></div>';
    html += '<div class="s2-toolbar"><div class="seg-tabs" role="tablist" aria-label="Períodos">' +
      '<button class="s2-tab' + (view.per === 'all' ? ' active' : '') + '" data-per="all">Todo el año</button>' +
      PER.map(function (p) { return '<button class="s2-tab' + (view.per === p.id ? ' active' : '') + '" data-per="' + p.id + '">Período ' + p.id + '</button>'; }).join('') + '</div>' +
      '<button class="chip' + (view.sinver ? ' active' : '') + '" data-sinver aria-pressed="' + view.sinver + '">Solo sin ver</button>' +
      '<div class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input type="search" id="s3Search" placeholder="Buscar tema… (parábola, logaritmo, Bayes)" value="' + esc(view.q) + '" autocomplete="off" aria-label="Buscar tema"></div></div>';
    var q = view.q.trim().toLowerCase(), shown = 0;
    PER.forEach(function (p) {
      if (view.per !== 'all' && view.per !== p.id) return;
      var list = p.temas.filter(function (id) { var t = T()[id]; return t && (!view.sinver || !store.seen[id]) && (!q || (t.titulo + ' ' + t.resumen + ' ' + id).toLowerCase().indexOf(q) >= 0); });
      if (!list.length) return;
      shown += list.length;
      html += '<section class="s2-period"><header class="s2-period-head"><span class="s2-pnum">' + p.id + '</span><div><h3>Período ' + p.id + '</h3><p>' + p.resumen + '</p></div></header>';
      var cur = null;
      list.forEach(function (id) {
        var u = T()[id].unidad;
        if (u !== cur) { if (cur !== null) html += '</div>'; cur = u; html += '<h4 class="s2-unit u' + u + '"><i></i>Unidad ' + u + ' · ' + UN[u] + '</h4><div class="s2-grid">'; }
        html += topicCard(id, n++);
      });
      html += '</div></section>';
    });
    if (!shown) html += '<div class="s2-empty">No hay temas que coincidan con tu búsqueda.</div>';
    root.innerHTML = html;
  }

  function drawerHtml(cur) {
    var h = '<div class="s2-scrim" data-drawer-close hidden></div><aside class="s2-drawer" id="s3Drawer" aria-label="Todos los temas" hidden><header><strong>Ir a otro tema</strong><button class="btn btn-ghost btn-sm" data-drawer-close aria-label="Cerrar"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button></header><div class="s2-drawer-body">';
    PER.forEach(function (p) {
      h += '<h4>Período ' + p.id + '</h4>';
      p.temas.forEach(function (id) { var t = T()[id]; h += '<button class="s2-dr-item u' + t.unidad + (id === cur ? ' current' : '') + '" data-jump="' + id + '"><i>' + id + '</i><span>' + esc(t.titulo) + '</span>' + (store.seen[id] ? '<b aria-label="visto"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg></b>' : '') + '</button>'; });
    });
    return h + '</div></aside><button class="s2-fab" data-drawer aria-label="Abrir lista de temas"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg> Temas</button>';
  }
  function drawer(open) {
    var d = $('#s3Drawer'), sc = $('.s2-scrim'); if (!d) return;
    d.hidden = !open; sc.hidden = !open; document.body.classList.toggle('s2-lock', open);
    if (open) { var c = $('.s2-dr-item.current', d); if (c) c.scrollIntoView({ block: 'center' }); }
  }
  function jump(id, keepTab) {
    view.mode = 'tema'; view.id = id; if (!keepTab) view.tab = 'teoria'; view.nivel = 'todos'; view.pend = false; drawerOpenFlag = false;
    renderTopic(); window.scrollTo({ top: 0, behavior: 'auto' });
  }
  var drawerOpenFlag = false;

  /* ---------- tema ---------- */
  function renderTopic() {
    var id = view.id, t = T()[id], p = perOf(id), all = ids(), ix = all.indexOf(id), html = '';
    html += '<div class="s2-crumbs"><button class="btn btn-ghost btn-sm" data-t3="home"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> 3.er año</button><button class="btn btn-ghost btn-sm" data-drawer><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg> Todos los temas</button><span>Período ' + p.id + ' · Unidad ' + t.unidad + ' · ' + UN[t.unidad] + '</span></div>';
    html += '<header class="s2-head u' + t.unidad + '"><span class="s2-tile big">' + id + '</span><div><h2 id="s3-title">' + esc(t.titulo) + '</h2><p class="lead">' + M(t.resumen) + '</p></div></header>';
    html += '<div class="s2-goals"><strong>Al terminar sabrás:</strong><ul>' + t.objetivos.map(function (o) { return '<li>' + M(o) + '</li>'; }).join('') + '</ul></div>';
    html += '<div class="s2-tabs" role="tablist">' + TABS.map(function (x) { return '<button class="s2-tab' + (view.tab === x[0] ? ' active' : '') + '" role="tab" aria-selected="' + (view.tab === x[0]) + '" data-tab="' + x[0] + '">' + x[1] + '</button>'; }).join('') + '<button class="s2-tab s2-all' + (view.all ? ' active' : '') + '" data-all aria-pressed="' + !!view.all + '" title="Muestra todas las secciones en una sola página">Ver todo <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></button></div>';
    html += '<div class="s2-panel u' + t.unidad + '" id="s3Panel"></div>';
    html += '<nav class="s2-pager">' + (ix > 0 ? '<button class="btn btn-ghost" data-jump="' + all[ix - 1] + '"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> ' + all[ix - 1] + ' ' + esc(T()[all[ix - 1]].titulo) + '</button>' : '<span></span>') +
      (ix < all.length - 1 ? '<button class="btn btn-primary" data-jump="' + all[ix + 1] + '">' + all[ix + 1] + ' ' + esc(T()[all[ix + 1]].titulo) + ' <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button>' : '<span></span>') + '</nav>';
    html += drawerHtml(id);
    root.innerHTML = html;
    store.seen[id] = true; store.last = id; save();
    renderTab();
  }

  function acc(title, body, open, extra) {
    return '<details class="s2-acc"' + (open ? ' open' : '') + '><summary>' + title + '</summary><div class="s2-acc-body">' + body + '</div></details>' + (extra || '');
  }

  /* ---------- gráficos interactivos con deslizadores ---------- */
  var anim = null;
  function stopAnim() { if (anim) { cancelAnimationFrame(anim.raf); anim = null; var b = $('[data-anim]'); if (b) b.innerHTML = '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 5l12 7-12 7z" fill="currentColor"/></svg> Animar'; } }
  function renderExplora(t) {
    var C = global.T3Calc && global.T3Calc.CALCS[t.calc];
    if (!C || !global.T3Graf || !global.T3Graf.has(t.calc)) return '<p class="muted">Este tema no tiene gráfico interactivo.</p>';
    var vars = C.vars || [], h = '<div class="s2-explora"><p class="muted small">Mueve los deslizadores y mira cómo cambia la gráfica.</p>';
    if (vars.length) {
      h += '<div class="s2-sliders" id="s3Sliders">';
      vars.forEach(function (x) {
        h += '<label class="s2-field"><span>' + esc(x.label) + '</span><input name="' + x.id + '" type="range" min="' + x.min + '" max="' + x.max + '" step="' + x.step + '" value="' + x.def + '"><b class="s2-rval" data-val="' + x.id + '">' + x.def + '</b></label>';
      });
      h += '</div><div class="s2-toolrow"><button class="btn btn-ghost btn-sm" type="button" data-anim><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 5l12 7-12 7z" fill="currentColor"/></svg> Animar</button></div>';
    } else h += '<div id="s3Sliders" hidden></div>';
    return h + '<div id="s3ExpOut"></div></div>';
  }
  function runExplora() {
    var t = T()[view.id], C = global.T3Calc && global.T3Calc.CALCS[t.calc], box = $('#s3Sliders'), out = $('#s3ExpOut');
    if (!C || !out || !box) return;
    var v = {};
    (C.vars || []).forEach(function (x) { var el = box.querySelector('[name="' + x.id + '"]'); v[x.id] = el ? +el.value : x.def; });
    $$('[data-val]', box).forEach(function (b) { b.textContent = v[b.getAttribute('data-val')]; });
    var g = global.T3Graf.draw(t.calc, v);
    if (!g) { out.innerHTML = '<div class="s2-calc-err">No se pudo dibujar con esos valores.</div>'; return; }
    out.innerHTML = '<figure class="s2-plot t3-plot">' + g.svg + '<figcaption>' + M(g.nota) + '</figcaption></figure>';
  }
  function toggleAnim() {
    if (anim) return stopAnim();
    var el = $('#s3Sliders input[type=range]');
    if (!el) return;
    var lo = +el.min, hi = +el.max, step = (hi - lo) / 40, dir = 1, val = +el.value, acc = 0, last = performance.now();
    $('[data-anim]').innerHTML = '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg> Detener';
    anim = { raf: 0 };
    (function loop(now) {
      acc += now - last; last = now;
      if (acc > 70) { acc = 0; val += dir * step; if (val >= hi) { val = hi; dir = -1; } else if (val <= lo) { val = lo; dir = 1; } el.value = val; runExplora(); }
      if (anim) anim.raf = requestAnimationFrame(loop);
    })(last);
  }

  var PL = { 'Límites': 'PLeySRPnY35dG9t51yT4nCwQEtWwCwvBwn', 'Integrales': 'PLeySRPnY35dEHnMLZGaNEXgHzJ2-TPLWw', 'Identidades trigonométricas': 'PLeySRPnY35dHK3mo8UWd3zAnYCG13OgAR', 'Vectores': 'PLeySRPnY35dEaZT3iJUNdDkgLEZE5x-Jd' };
  var PLT = { '1.1': 'Límites', '1.2': 'Límites', '1.3': 'Límites', '1.4': 'Límites', '1.5': 'Límites', '1.6': 'Identidades trigonométricas', '1.17': 'Integrales', '1.18': 'Integrales', '1.19': 'Integrales', '1.20': 'Integrales', '1.21': 'Integrales', '1.22': 'Vectores', '1.23': 'Vectores', '1.24': 'Vectores' };
  function videoHtml(t) {
    var v = (global.VIDEOS_3A || {})[t.id], q = encodeURIComponent(t.titulo + ' bachillerato');
    var pn = PLT[t.id], pl = pn ? '<a class="btn btn-ghost btn-sm" href="https://www.youtube.com/playlist?list=' + PL[pn] + '" target="_blank" rel="noopener">Lista de profe Alex · ' + pn + ' (curso completo)</a> ' : '';
    var pa = '<a class="btn btn-ghost btn-sm" href="https://www.youtube.com/results?search_query=' + encodeURIComponent('Matemáticas profe Alex ' + t.titulo) + '" target="_blank" rel="noopener">Buscar en profe Alex</a> ';
    var search = pl + pa + '<a class="btn btn-ghost btn-sm" href="https://www.youtube.com/results?search_query=' + q + '" target="_blank" rel="noopener">Buscar más videos de este tema</a>';
    if (!v) return '<p class="s2-hint">Aún no hay video para este tema.</p><div class="s2-toolrow">' + search + '</div>';
    var url = 'https://www.youtube.com/watch?v=' + v.id;
    return '<div class="s2-video"><div class="s2-vframe" data-vid="' + v.id + '"><button class="s2-vplay" data-play="' + v.id + '" aria-label="Reproducir video: ' + esc(v.t) + '" style="background-image:url(https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg)"><span aria-hidden="true"></span></button></div>' +
      '<div class="s2-vinfo"><strong>' + esc(v.t) + '</strong><p class="muted small">Video externo de YouTube que explica este tema con más detalle. No se carga hasta que pulses reproducir.</p>' +
      '<div class="s2-toolrow"><a class="btn btn-ghost btn-sm" href="' + url + '" target="_blank" rel="noopener">Abrir en YouTube <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 16L18 6M9 6h9v9"/></svg></a>' + search + '</div></div></div>' +
      '<div class="s2-goals s2-watch"><strong>Mientras lo ves, fíjate en:</strong><ul>' + t.objetivos.map(function (o) { return '<li>' + M(o) + '</li>'; }).join('') + '</ul>' +
      '<p class="muted small">Después, pasa a <button class="link" data-tab="ejemplos">Ejemplos</button> y comprueba que puedes resolverlos tú solo.</p></div>';
  }

  function tabHtml(tab, t) {
    var id = t.id, h = '';
    if (tab === 'teoria') {
      h = '<div class="s2-toolrow"><button class="btn btn-ghost btn-sm" data-acc="open">Expandir todo</button><button class="btn btn-ghost btn-sm" data-acc="close">Contraer todo</button></div>' +
        t.teoria.map(function (b, i) { return acc('<span class="s2-num">' + (i + 1) + '</span>' + esc(b.titulo), M(b.html), i === 0 || view.all); }).join('');
    } else if (tab === 'pizarra') {
      h = global.Pizarra ? global.Pizarra.html((global.PIZARRA_3A || {})[t.id]) : '';
    } else if (tab === 'video') {
      h = videoHtml(t);
    } else if (tab === 'explora') {
      h = renderExplora(t);
    } else if (tab === 'formulas') {
      h = '<div class="s2-formulas">' + t.formulas.map(function (x, i) { return '<div class="s2-formula" style="--i:' + i + '"><span class="s2-flabel">' + esc(x.label) + '</span><div class="formula"><span class="math">' + M(x.html) + '</span></div></div>'; }).join('') + '</div>';
    } else if (tab === 'ejemplos') {
      h = '<p class="s2-hint">Tapa la solución, intenta resolver y luego pulsa <strong>Siguiente paso</strong> para comparar.</p>' + t.ejemplos.map(function (e, i) {
        return '<article class="s2-ex" data-ex><header><span class="s2-num">' + (i + 1) + '</span><strong>' + esc(e.titulo) + '</strong></header><div class="s2-stmt">' + M(e.enunciado) + '</div>' +
          '<ol class="s2-steps">' + e.pasos.map(function (s) { return '<li class="s2-step" hidden>' + M(s) + '</li>'; }).join('') + '</ol>' +
          '<div class="s2-answer" hidden><span>Respuesta</span>' + M(e.respuesta) + '</div>' +
          '<div class="s2-ex-actions"><button class="btn btn-ghost btn-sm" data-step>Siguiente paso (0/' + e.pasos.length + ')</button><button class="btn btn-ghost btn-sm" data-allsteps>Mostrar todo</button></div></article>';
      }).join('');
    } else if (tab === 'practica') {
      h = renderPractica();
    } else if (tab === 'preguntas') {
      h = '<p class="s2-hint">Responde en voz alta o por escrito antes de abrir la respuesta modelo.</p><div class="s2-toolrow"><button class="btn btn-ghost btn-sm" data-acc="open">Abrir todas</button><button class="btn btn-ghost btn-sm" data-acc="close">Cerrar todas</button></div>' + t.teoricas.map(function (x, i) { return acc('<span class="s2-num">' + (i + 1) + '</span>' + M(x.q), M(x.a), false); }).join('');
    } else if (tab === 'errores') {
      h = '<h3 class="s2-h">Errores comunes</h3><div class="s2-errs">' + t.errores.map(function (e) { return '<div class="s2-err"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4l9 16H3zM12 10v4M12 17v.01"/></svg><div>' + M(e) + '</div></div>'; }).join('') + '</div>' +
        '<h3 class="s2-h">En la vida real · ' + esc(t.aplicacion.titulo) + '</h3><div class="s2-app">' + M(t.aplicacion.html) + '</div>';
    } else if (tab === 'calc') {
      h = renderCalc(t);
    } else if (tab === 'examen') {
      h = '<div id="s3Exam"></div>';
    }
    return h;
  }

  function renderTab() {
    var id = view.id, t = T()[id], el = $('#s3Panel'), h = '';
    exam = null; stopAnim();
    $$('.s2-tab[data-tab]').forEach(function (x) { var on = view.all ? false : x.dataset.tab === view.tab; x.classList.toggle('active', on); x.setAttribute('aria-selected', on); });
    var allBtn = $('[data-all]'); if (allBtn) { allBtn.classList.toggle('active', !!view.all); allBtn.setAttribute('aria-pressed', !!view.all); }
    if (view.all) {
      h = TABS.map(function (x) { return '<section class="s2-sec" id="s3sec-' + x[0] + '"><h3 class="s2-sec-title">' + x[1] + '</h3>' + tabHtml(x[0], t) + '</section>'; }).join('');
    } else h = tabHtml(view.tab, t);
    el.innerHTML = h;
    el.classList.remove('s2-swap'); void el.offsetWidth; el.classList.add('s2-swap');
    if (view.all || view.tab === 'calc') runCalc();
    if (view.all || view.tab === 'explora') runExplora();
    if (view.all || view.tab === 'examen') startExam($('#s3Exam'), shuffle(pool([id])), { key: 't:' + id, title: 'Mini‑examen · ' + t.titulo, intro: true });
  }

  function renderPractica() {
    var id = view.id, t = T()[id], d = doneCount(id), n = t.ejercicios.length;
    var h = '<div class="s2-pracbar"><div><strong id="s3PracTxt">' + d + ' de ' + n + ' dominados</strong>' + bar(Math.round(100 * d / n)) + '</div>' +
      '<div class="chips"><button class="chip' + (view.nivel === 'todos' ? ' active' : '') + '" data-nivel="todos">Todos</button>' +
      Object.keys(LVL).map(function (k) { return '<button class="chip' + (view.nivel === k ? ' active' : '') + '" data-nivel="' + k + '">' + LVL[k] + '</button>'; }).join('') +
      '<button class="chip' + (view.pend ? ' active' : '') + '" data-pend aria-pressed="' + view.pend + '">Solo pendientes</button></div></div><div id="s3PracList">';
    t.ejercicios.forEach(function (e, i) {
      var dn = store.done[id + ':' + i];
      if ((view.nivel !== 'todos' && e.nivel !== view.nivel) || (view.pend && dn)) return;
      h += '<article class="s2-prob' + (dn ? ' done' : '') + '" style="--i:' + i + '"><div class="s2-prob-top"><span class="s2-num">' + (i + 1) + '</span><span class="s2-lvl ' + e.nivel + '">' + LVL[e.nivel] + '</span><button class="btn btn-ghost btn-sm" data-done="' + i + '" aria-pressed="' + !!dn + '">' + (dn ? '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg> Dominado' : 'Marcar como dominado') + '</button></div>' +
        '<div class="s2-stmt">' + M(e.enunciado) + '</div>' +
        '<details class="s2-acc s2-sol"><summary>Ver solución paso a paso</summary><div class="s2-acc-body"><ol class="s2-steps">' + e.pasos.map(function (s) { return '<li class="s2-step">' + M(s) + '</li>'; }).join('') + '</ol><div class="s2-answer"><span>Respuesta</span>' + M(e.respuesta) + '</div></div></details></article>';
    });
    return h + '</div>';
  }
  function updatePractica() { /* el progreso se refresca al volver a pintar */ }

  /* ---------- calculadora (T3Calc usa {titulo,vars,run}) ---------- */
  function renderCalc(t) {
    var C = global.T3Calc && global.T3Calc.CALCS[t.calc];
    if (!C) return '<p class="muted">Este tema no tiene calculadora.</p>';
    var h = '<div class="s2-calc"><div class="s2-calc-head"><h3>' + esc(C.titulo) + '</h3></div><form class="s2-form" id="s3Form" autocomplete="off">';
    (C.vars || []).forEach(function (x) {
      h += '<label class="s2-field"><span>' + esc(x.label) + '</span>';
      h += '<input name="' + x.id + '" type="range" min="' + x.min + '" max="' + x.max + '" step="' + x.step + '" value="' + x.def + '">';
      h += '<b class="s2-rval" data-val="' + x.id + '">' + x.def + '</b>';
      h += '</label>';
    });
    h += '<div class="s2-form-actions"><button class="btn btn-primary" type="submit">Calcular</button><button class="btn btn-ghost" type="button" data-calc-reset>Valores iniciales</button></div></form><div id="s3CalcOut" class="s2-calc-out" aria-live="polite"></div></div>';
    return h;
  }
  function runCalc() {
    var t = T()[view.id], C = global.T3Calc && global.T3Calc.CALCS[t.calc], form = $('#s3Form'), out = $('#s3CalcOut');
    if (!C || !form) return;
    var v = {};
    (C.vars || []).forEach(function (x) {
      var el = form.elements[x.id];
      v[x.id] = el ? +el.value : x.def;
    });
    // Update range labels
    var box = form.parentElement;
    if (box) { var vals = box.querySelectorAll('[data-val]'); vals.forEach(function(b){ v[b.getAttribute('data-val')] !== undefined && (b.textContent = v[b.getAttribute('data-val')]); }); }
    var r;
    try { r = C.run(v); } catch (e) { r = { tipo: 'texto', resultado: 'No se pudo calcular: ' + e.message }; }
    if (!r) { out.innerHTML = '<div class="s2-calc-err">Sin resultado.</div>'; return; }
    if (r.tipo === 'tabla') {
      var rows = r.filas.map(function(row){ return '<tr>' + row.map(function(c){ return '<td>' + M(String(c)) + '</td>'; }).join('') + '</tr>'; }).join('');
      out.innerHTML = '<table class="s2-table"><thead><tr>' + r.cols.map(function(c){ return '<th>' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' + rows + '</tbody></table>';
    } else {
      var res = r.resultado !== undefined ? r.resultado : (r.res || '');
      out.innerHTML = '<div class="s2-result">' + M(String(res)) + '</div>' +
        (r.extra ? '<p class="muted">' + esc(r.extra) + '</p>' : '') +
        (r.pasos ? '<ol class="s2-steps s2-calc-steps">' + r.pasos.map(function(s){ return '<li class="s2-step">' + M(s) + '</li>'; }).join('') + '</ol>' : '');
    }
  }
  function resetCalc() {
    var t = T()[view.id], C = global.T3Calc && global.T3Calc.CALCS[t.calc], form = $('#s3Form');
    if (!C || !form) return;
    (C.vars || []).forEach(function (x) { if (form.elements[x.id]) form.elements[x.id].value = x.def; });
    runCalc();
  }

  /* ---------- examen ---------- */
  function startExam(box, qs, o) {
    exam = { box: box, qs: qs, i: 0, ok: 0, miss: [], o: o, done: false };
    if (o.intro) { examIntro(); } else renderQ();
    box.onclick = onExamClick; box.onkeydown = function (e) { if (e.key === 'Enter' && e.target.matches('.s2-q-input')) { e.preventDefault(); answer(); } };
  }
  function examIntro() {
    var q = exam.qs, calc = q.filter(function (x) { return x.tipo !== 'opt'; }).length, best = store.best[exam.o.key];
    exam.box.innerHTML = '<div class="s2-exam-intro"><h3>' + esc(exam.o.title) + '</h3><p>' + q.length + ' preguntas · ' + calc + ' de respuesta calculada · se corrige solo y te explica cada paso.</p>' +
      (best != null ? '<p class="s2-best">Tu mejor resultado: <strong>' + best + ' de ' + q.length + '</strong></p>' : '') +
      '<p class="muted small">Para escribir respuestas: decimales con punto (3.5), fracciones (7/2), varias respuestas separadas por comas o punto y coma, puntos como (3, −2).</p>' +
      '<button class="btn btn-primary" data-exam-start>Comenzar</button></div>';
  }
  function renderQ() {
    var q = exam.qs[exam.i], n = exam.qs.length, h = '';
    h += '<div class="s2-qhead"><span>Pregunta ' + (exam.i + 1) + ' de ' + n + (q._t ? ' · tema ' + q._t : '') + '</span><span>Aciertos: ' + exam.ok + '</span></div>' + bar(Math.round(100 * exam.i / n));
    h += '<div class="s2-q" role="group"><div class="s2-stmt">' + M(q.q) + '</div>';
    if (q.tipo === 'opt') h += '<div class="s2-opts">' + q.opciones.map(function (o, k) { return '<button class="s2-opt" data-opt="' + k + '"><i>' + 'ABCD'[k] + '</i><span>' + M(o) + '</span></button>'; }).join('') + '</div>';
    else h += '<div class="s2-answer-row"><input class="s2-q-input" type="text" inputmode="text" autocomplete="off" aria-label="Tu respuesta" placeholder="' + (q.tipo === 'lista' ? 'Ej.: -2, 1, 3' : q.tipo === 'par' ? 'Ej.: (3, -2)' : 'Ej.: 3.5 o 7/2') + '"><button class="btn btn-primary" data-check>Comprobar</button></div>';
    h += '</div><div id="s3Fb"></div>';
    exam.box.innerHTML = h;
    var inp = $('.s2-q-input', exam.box); if (inp) inp.focus({ preventScroll: true });
  }
  function answer(optIdx) {
    if (!exam || exam.locked) return;
    var q = exam.qs[exam.i], raw;
    if (q.tipo === 'opt') raw = optIdx; else { raw = ($('.s2-q-input', exam.box) || {}).value; if (!String(raw || '').trim()) return; }
    var ok = check(q, raw);
    exam.locked = true; if (ok) exam.ok++; else exam.miss.push(exam.i);
    if (q.tipo === 'opt') $$('.s2-opt', exam.box).forEach(function (b, k) { b.disabled = true; if (k === q.correcta) b.classList.add('right'); else if (k === +raw) b.classList.add('wrong'); });
    else { var i2 = $('.s2-q-input', exam.box); i2.disabled = true; i2.classList.add(ok ? 'right' : 'wrong'); var cb = $('[data-check]', exam.box); if (cb) cb.hidden = true; }
    $('#s3Fb').innerHTML = '<div class="s2-fb ' + (ok ? 'ok' : 'no') + '"><strong>' + (ok ? '¡Correcto!' : 'Todavía no') + '</strong>' + (ok ? '' : '<p>La respuesta era: ' + M(correctText(q)) + '</p>') +
      '<ol class="s2-steps">' + q.pasos.map(function (s) { return '<li class="s2-step">' + M(s) + '</li>'; }).join('') + '</ol>' +
      '<button class="btn btn-primary" data-next>' + (exam.i === exam.qs.length - 1 ? 'Ver resultado' : 'Siguiente pregunta') + '</button></div>';
    var nb = $('[data-next]', exam.box); if (nb) nb.focus({ preventScroll: true });
  }
  function nextQ() {
    exam.locked = false; exam.i++;
    if (exam.i >= exam.qs.length) return finishExam();
    renderQ();
  }
  function finishExam() {
    var n = exam.qs.length, pct = Math.round(100 * exam.ok / n), prev = store.best[exam.o.key];
    if (prev == null || exam.ok > prev) { store.best[exam.o.key] = exam.ok; save(); }
    var msg = pct >= 90 ? '¡Excelente! Dominas este contenido.' : pct >= 70 ? 'Muy bien. Repasa lo que fallaste y lo tendrás.' : pct >= 50 ? 'Vas por buen camino: vuelve a los ejemplos y a la práctica.' : 'Sin presión: revisa la teoría y los ejemplos y vuelve a intentarlo.';
    exam.box.innerHTML = '<div class="s2-result-card">' + ring(pct, 'Resultado') + '<div><h3>' + exam.ok + ' de ' + n + ' correctas</h3><p>' + msg + '</p>' +
      (exam.miss.length ? '<p class="muted small">Preguntas falladas: ' + exam.miss.map(function (i) { return i + 1; }).join(', ') + '.</p>' : '') +
      '<div class="hero-actions"><button class="btn btn-primary" data-exam-again>Repetir con preguntas nuevas</button>' + (exam.o.back ? '<button class="btn btn-ghost" data-t3="examenes">Otros exámenes</button>' : '<button class="btn btn-ghost" data-tab="practica">Ir a practicar</button>') + '</div></div></div>';
    exam.done = true;
  }
  function onExamClick(e) {
    var b = e.target.closest('button'); if (!b || !exam) return;
    if (b.hasAttribute('data-exam-start')) renderQ();
    else if (b.hasAttribute('data-opt')) answer(b.getAttribute('data-opt'));
    else if (b.hasAttribute('data-check')) answer();
    else if (b.hasAttribute('data-next')) nextQ();
    else if (b.hasAttribute('data-exam-again')) { var o = exam.o, box = exam.box, again = o.again ? o.again() : null; startExam(box, again || shuffle(exam.qs), Object.assign({}, o, { intro: false })); }
  }

  /* ---------- hub de exámenes ---------- */
  function renderExamHub() {
    var all = ids(), h = '<div class="s2-crumbs"><button class="btn btn-ghost btn-sm" data-t3="home"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> 3.er año</button><span>Modo examen</span></div>';
    h += '<header class="s2-head"><span class="s2-tile big"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 17l-5.6 3 1.3-6.2L3 9.5l6.3-.7z"/></svg></span><div><h2 id="s3-title">Modo examen</h2><p class="lead">Elige qué quieres evaluar. Cada pregunta se corrige sola y explica la solución paso a paso. Las preguntas se mezclan en cada intento.</p></div></header>';
    h += '<h3 class="s2-h">Por período</h3><div class="s2-modes">' + PER.map(function (p) { var b = store.best['p:' + p.id]; return '<button class="s2-mode" data-exam-mode="p:' + p.id + '"><strong>Período ' + p.id + '</strong><span>' + p.resumen + '</span><em>15 preguntas' + (b != null ? ' · mejor ' + b + '/15' : '') + '</em></button>'; }).join('') + '</div>';
    h += '<h3 class="s2-h">Por unidad</h3><div class="s2-modes">' + Object.keys(UN).map(function (u) { var b = store.best['u:' + u]; return '<button class="s2-mode u' + u + '" data-exam-mode="u:' + u + '"><strong>Unidad ' + u + '</strong><span>' + UN[u] + '</span><em>10 preguntas' + (b != null ? ' · mejor ' + b + '/10' : '') + '</em></button>'; }).join('') + '</div>';
    h += '<h3 class="s2-h">Todo el año</h3><div class="s2-modes"><button class="s2-mode" data-exam-mode="all"><strong>Simulacro mixto</strong><span>20 preguntas al azar de los 24 temas</span><em>' + (store.best.all != null ? 'mejor ' + store.best.all + '/20' : 'Reto final') + '</em></button></div>';
    h += '<h3 class="s2-h">Por tema</h3><div class="s2-chiprow">' + all.map(function (id) { var b = store.best['t:' + id]; return '<button class="chip" data-exam-mode="t:' + id + '" title="' + esc(T()[id].titulo) + '">' + id + (b != null ? ' · ' + b + '/10' : '') + '</button>'; }).join('') + '</div>';
    h += '<div id="s3Exam" class="s2-exam-hub"></div>';
    root.innerHTML = h;
  }
  function startMode(mode) {
    var all = ids(), tIds, n, title, key = mode;
    if (mode === 'all') { tIds = all; n = 20; title = 'Simulacro mixto'; }
    else {
      var kind = mode.split(':')[0], v = mode.split(':')[1];
      if (kind === 'p') { tIds = PER.filter(function (p) { return p.id === v; })[0].temas; n = 15; title = 'Período ' + v; }
      else if (kind === 'u') { tIds = all.filter(function (id) { return String(T()[id].unidad) === v; }); n = 10; title = 'Unidad ' + v + ' · ' + UN[v]; }
      else { tIds = [v]; n = 10; title = 'Tema ' + v + ' · ' + T()[v].titulo; }
    }
    var again = function () { return shuffle(pool(tIds)).slice(0, n); };
    var box = $('#s3Exam');
    startExam(box, again(), { key: key, title: 'Examen · ' + title, intro: true, back: true, again: again });
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------- eventos ---------- */
  function go(fn) { fn(); window.scrollTo({ top: 0, behavior: 'auto' }); }
  function onClick(e) {
    var b = e.target.closest('button'); if (!b || !root.contains(b)) return;
    if (b.closest('#s3Exam') && exam && exam.box.contains(b) && (b.hasAttribute('data-opt') || b.hasAttribute('data-check') || b.hasAttribute('data-next') || b.hasAttribute('data-exam-start') || b.hasAttribute('data-exam-again'))) return;
    var d = b.dataset;
    if (d.jump) { jump(d.jump, true); }
    else if (b.hasAttribute('data-drawer')) { drawer(true); }
    else if (b.hasAttribute('data-drawer-close')) { drawer(false); }
    else if (d.acc) { $$('#s3Panel details.s2-acc:not(.s2-sol)').forEach(function (x) { x.open = d.acc === 'open'; }); }
    else if (b.hasAttribute('data-all')) { view.all = !view.all; renderTab(); }
    else if (d.open) { go(function () { view.mode = 'tema'; view.id = d.open; view.tab = 'teoria'; view.nivel = 'todos'; view.pend = false; renderTopic(); }); }
    else if (d.t3 === 'home') { go(function () { view.mode = 'home'; renderHome(); }); }
    else if (d.t3 === 'examenes') { go(function () { view.mode = 'examenes'; renderExamHub(); }); }
    else if (b.hasAttribute('data-sinver')) { view.sinver = !view.sinver; renderHome(); }
    else if (d.per) { view.per = d.per; renderHome(); }
    else if (d.tab) { if (view.all && $('#s3sec-' + d.tab)) { $('#s3sec-' + d.tab).scrollIntoView({ behavior: 'smooth', block: 'start' }); return; } view.tab = d.tab; renderTab(); var tb = $('.s2-tabs'); if (tb && tb.getBoundingClientRect().top < 0) tb.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    else if (d.nivel) { view.nivel = d.nivel; renderTab(); }
    else if (b.hasAttribute('data-pend')) { view.pend = !view.pend; renderTab(); }
    else if (d.done != null) { var k = view.id + ':' + d.done; if (store.done[k]) delete store.done[k]; else store.done[k] = true; save(); renderTab(); }
    else if (b.hasAttribute('data-step')) { var ex = b.closest('[data-ex]'), nx = $('.s2-step[hidden]', ex), tot = $$('.s2-step', ex).length; if (nx) { nx.hidden = false; } var left = $$('.s2-step[hidden]', ex).length; b.textContent = 'Siguiente paso (' + (tot - left) + '/' + tot + ')'; if (!left) { $('.s2-answer', ex).hidden = false; b.disabled = true; b.textContent = 'Listo'; } }
    else if (b.hasAttribute('data-allsteps')) { var ex2 = b.closest('[data-ex]'); $$('.s2-step', ex2).forEach(function (s) { s.hidden = false; }); $('.s2-answer', ex2).hidden = false; var sb = $('[data-step]', ex2); sb.disabled = true; sb.textContent = 'Listo'; }
    else if (d.play) { var fr = b.closest('.s2-vframe'); fr.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + d.play + '?autoplay=1&rel=0" title="Video del tema" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe>'; }
    else if (b.hasAttribute('data-anim')) toggleAnim();
    else if (b.hasAttribute('data-exp-reset')) { stopAnim(); renderTab(); }
    else if (b.hasAttribute('data-calc-reset')) resetCalc();
    else if (d.examMode) startMode(d.examMode);
  }
  function onInput(e) {
    if (e.target.id === 's3Search') { view.q = e.target.value; var pos = e.target.selectionStart; renderHome(); var s = $('#s3Search'); s.focus(); try { s.setSelectionRange(pos, pos); } catch (x) { /* ok */ } }
    else if (e.target.closest('#s3Sliders')) { if (e.type === 'input' && e.isTrusted) stopAnim(); runExplora(); }
    else if (e.target.closest('#s3Form')) { clearTimeout(onInput.t); onInput.t = setTimeout(runCalc, 160); }
  }
  function onKey(e) {
    if (!root || view.mode !== 'tema' || !$('#tercero.active')) return;
    if (e.key === 'Escape') { drawer(false); return; }
    if (e.target.matches('input, textarea, select') || e.ctrlKey || e.metaKey) return;
    var all = ids(), ix = all.indexOf(view.id), ti = TABS.map(function (x) { return x[0]; }).indexOf(view.tab);
    if (e.altKey && e.key === 'ArrowRight' && ix < all.length - 1) { e.preventDefault(); jump(all[ix + 1], true); }
    else if (e.altKey && e.key === 'ArrowLeft' && ix > 0) { e.preventDefault(); jump(all[ix - 1], true); }
    else if (!e.altKey && !view.all && e.key === 'ArrowRight' && ti < TABS.length - 1) { view.tab = TABS[ti + 1][0]; renderTab(); }
    else if (!e.altKey && !view.all && e.key === 'ArrowLeft' && ti > 0) { view.tab = TABS[ti - 1][0]; renderTab(); }
    else if (e.key.toLowerCase() === 't' && !e.altKey) drawer(true);
  }
  function onSubmit(e) { if (e.target.id === 's3Form') { e.preventDefault(); runCalc(); } }

  function mount() {
    if (mounted) return;
    root = $('#s3Root'); if (!root) return;
    if (!ids().length) { root.innerHTML = '<p class="muted">No se pudo cargar el contenido de 3.er año.</p>'; return; }
    mounted = true; load();
    document.addEventListener('keydown', onKey);
    root.addEventListener('click', onClick); root.addEventListener('input', onInput); root.addEventListener('change', onInput); root.addEventListener('submit', onSubmit);
    renderHome();
  }

  function act(a) {
    var nav = document.querySelector('.nav-link[data-section="tercero"]'); if (nav) nav.click();
    mount(); if (!mounted) return;
    if (a === 'exams') { view.mode = 'examenes'; renderExamHub(); }
    else if (a.indexOf('period:') === 0) { view.per = a.split(':')[1]; view.q = ''; view.mode = 'home'; renderHome(); }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  /* T3: global act() listener disabled to avoid conflicts */
  global.Tercero = { mount: mount };
})(window);

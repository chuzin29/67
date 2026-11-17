/* ============================================================
   symbiote.js — Botón simbionte (portado de TORNUTI, sin dependencias)
   Una mancha de pintura respira en el borde del botón y, al acercar el
   puntero, corre hasta él. Decorativo: se apaga con prefers-reduced-motion
   y en pantallas táctiles.
   Uso: <span class="stretch" data-variant="primary"><svg class="stretch-stage"></svg>
        <button class="stretch-btn">…</button></span>   (se genera con Symbiote.init)
   ============================================================ */
(function (global) {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function sstep(x) { var v = clamp(x, 0, 1); return v * v * (3 - 2 * v); }
  function gooBlob(xs, ys) {
    var m = xs.length; if (m < 3) return '';
    var j = m - 1, d = 'M' + ((xs[j] + xs[0]) / 2).toFixed(1) + ' ' + ((ys[j] + ys[0]) / 2).toFixed(1);
    for (var i = 0; i < m; i++) { var k = (i + 1) % m; d += ' Q' + xs[i].toFixed(1) + ' ' + ys[i].toFixed(1) + ' ' + ((xs[i] + xs[k]) / 2).toFixed(1) + ' ' + ((ys[i] + ys[k]) / 2).toFixed(1); }
    return d + ' Z';
  }
  function path(svg, op) { var p = document.createElementNS(NS, 'path'); p.setAttribute('fill', 'var(--sb-thread)'); p.setAttribute('opacity', op); svg.appendChild(p); return p; }

  var uid = 0;
  function setup(wrap, radius) {
    var btn = wrap.querySelector('.stretch-btn'), svg = wrap.querySelector('.stretch-stage');
    if (!btn || !svg) return;
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduce || !fine) return;

    /* Filtro "goo": las formas se funden como líquido viscoso; sombra suave para dar volumen. */
    var fid = 'goo' + (++uid);
    var defs = document.createElementNS(NS, 'defs');
    defs.innerHTML = '<filter id="' + fid + '" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10.5" result="g"/><feDropShadow in="g" dx="0" dy="2.5" stdDeviation="2.2" flood-color="#000" flood-opacity=".28"/></filter>';
    svg.appendChild(defs);
    var grp = document.createElementNS(NS, 'g'); grp.setAttribute('filter', 'url(#' + fid + ')'); grp.setAttribute('fill', 'var(--sb-thread)'); svg.appendChild(grp);
    var NC = 150, circ = [], i;
    for (i = 0; i < NC; i++) { var c = document.createElementNS(NS, 'circle'); c.setAttribute('r', '0'); grp.appendChild(c); circ.push(c); }
    var shine = document.createElementNS(NS, 'ellipse'); shine.setAttribute('fill', '#fff'); shine.setAttribute('opacity', '0'); svg.appendChild(shine);

    var R = radius || 150, TILT = 8, SHIFT = 6;
    var pt = { x: -9999, y: -9999, active: false }, w = 0, h = 0, margin = 0, rect = null, dirty = false, raf = 0, last = performance.now(), t = 0;
    var es = 0, rest = 0, sx = 0, sy = 0, tilt = 0, press = 0, born = false;
    function mkNodes(n) { var a2 = []; for (var k = 0; k <= n; k++) a2.push({ x: 0, y: 0, vx: 0, vy: 0 }); return a2; }
    /* Tentáculo principal + dos laterales más finos que llegan con más retraso. */
    var T = [
      { M: 11, nodes: mkNodes(11), lat: 0, reach: 1, kb: 120, kh: 70, ch: 9.5, rs: 1, N: 34, min: 0 },
      { M: 8, nodes: mkNodes(8), lat: -1, reach: 0.78, kb: 80, kh: 42, ch: 7.5, rs: 0.5, N: 20, min: 0.32 },
      { M: 8, nodes: mkNodes(8), lat: 1, reach: 0.7, kb: 70, kh: 36, ch: 7, rs: 0.46, N: 20, min: 0.45 }
    ];
    var drops = [{ x: 0, y: 0, vx: 0, vy: 0 }, { x: 0, y: 0, vx: 0, vy: 0 }];
    var fingers = [{ x: 0, y: 0, vx: 0, vy: 0 }, { x: 0, y: 0, vx: 0, vy: 0 }];
    var splats = []; for (i = 0; i < 14; i++) splats.push({ x: 0, y: 0, vx: 0, vy: 0, life: 0, r: 0 });
    var headPos = { x: 0, y: 0 };

    function measure() {
      w = btn.offsetWidth; h = btn.offsetHeight; margin = R + 40;
      var W = w + margin * 2, H = h + margin * 2;
      svg.style.left = -margin + 'px'; svg.style.top = -margin + 'px'; svg.style.width = W + 'px'; svg.style.height = H + 'px';
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      rect = wrap.getBoundingClientRect(); dirty = false;
    }
    function hide() { circ.forEach(function (c) { c.setAttribute('r', '0'); }); shine.setAttribute('opacity', '0'); }
    function settle() { raf = 0; es = 0; sx = sy = tilt = press = 0; born = false; btn.style.transform = ''; btn.style.filter = 'none'; hide(); }
    function spring(n, tx, ty, k, c, dt) {
      var ax = (tx - n.x) * k - n.vx * c, ay = (ty - n.y) * k - n.vy * c;
      n.vx += ax * dt; n.vy += ay * dt; n.x += n.vx * dt; n.y += n.vy * dt;
    }
    function cr(p0, p1, p2, p3, u) { var u2 = u * u, u3 = u2 * u; return 0.5 * ((2 * p1) + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3); }

    function tick(now) {
      if (!wrap.isConnected) return dispose();
      var dt = clamp((now - last) / 1000, 1 / 240, 1 / 30); last = now; t += dt * 1000;
      if (dirty || !rect || w < 2) measure();
      if (w < 2 || h < 2) { settle(); return; }
      var px = pt.x - rect.left, py = pt.y - rect.top, cx = w / 2, cy = h / 2;
      var qx = clamp(px, h / 2, w - h / 2), qy = clamp(py, h / 2, h - h / 2);
      var dEdge = Math.max(0, Math.hypot(px - qx, py - qy) - h / 2);
      var ddx = px - cx, ddy = py - cy, dl = Math.hypot(ddx, ddy) || 1, ux = ddx / dl, uy = ddy / dl;
      var e = pt.active ? clamp((R - dEdge) / (R * 0.7), 0, 1) : 0, restR = R * 1.9;
      var eRest = pt.active ? clamp((restR - dEdge) / (restR - R), 0, 1) : 0;
      es += (sstep(e) - es) * 0.1; rest += (sstep(eRest) - rest) * 0.08;
      var alive = splats.some(function (s) { return s.life > 0; });
      if (es < 0.004 && rest < 0.02 && !alive) { settle(); return; }

      var rx = qx - cx + ux * (h / 2 - 4), ry = uy * (h / 2 - 4), torque = rx * uy - ry * ux;
      var tiltT = clamp((torque / (w * 0.5)) * TILT, -TILT, TILT) * es;
      press += ((btn.hasAttribute('data-pressed') ? 1 : 0) - press) * 0.22;
      sx += (ux * SHIFT * es - sx) * 0.1; sy += (uy * SHIFT * es - sy) * 0.1; tilt += (tiltT - tilt) * 0.1;
      btn.style.transform = 'translate(' + sx.toFixed(2) + 'px,' + sy.toFixed(2) + 'px) rotate(' + tilt.toFixed(2) + 'deg) scale(' + (1 - 0.04 * press).toFixed(3) + ',' + (1 - 0.06 * press).toFixed(3) + ')';

      var A = (w - h) / 2, segX = clamp(ddx, -A, A), ox2 = ddx - segX, oy2 = ddy, olen = Math.hypot(ox2, oy2), rimOk = olen > 0.6;
      var BX = margin + cx + sx + (rimOk ? segX + (ox2 / olen) * (h / 2 - 5) : 0), BY = margin + cy + sy + (rimOk ? (oy2 / olen) * (h / 2 - 5) : 0);
      var CX = margin + px, CY = margin + py, vx = CX - BX, vy = CY - BY, len = Math.hypot(vx, vy) || 1, dx = vx / len, dy = vy / len;
      var nxp = -dy, nyp = dx; if (nyp < 0) { nxp = -nxp; nyp = -nyp; }
      var Rmax = R * 0.92, want = len <= Rmax ? len : Rmax + (len - Rmax) * 0.06, reach = want * clamp(es * 1.25, 0, 1);
      var stretch = reach / (h * 1.4), SUB = 3, sdt = dt / SUB;

      if (!born) {
        T.forEach(function (tn) { tn.nodes.forEach(function (n) { n.x = BX; n.y = BY; n.vx = n.vy = 0; }); });
        drops.concat(fingers).forEach(function (d) { d.x = BX; d.y = BY; d.vx = d.vy = 0; }); born = true;
      }
      var headR = (h * 0.2 + 12 * es * es + press * 3) * (1 + 0.07 * Math.sin(t * 0.005));
      var gone = clamp((es - 0.01) / 0.07, 0, 1), poolVis = Math.max(rest, es);
      var ci = 0;
      function put(x, y, r) { if (ci < NC && isFinite(x + y + r) && r > 0.05) { circ[ci].setAttribute('cx', x.toFixed(1)); circ[ci].setAttribute('cy', y.toFixed(1)); circ[ci].setAttribute('r', r.toFixed(1)); ci++; } }

      var velMain = 0;
      T.forEach(function (tn, ti) {
        var M = tn.M, nodes = tn.nodes, vis = ti === 0 ? 1 : clamp((es - tn.min) / 0.3, 0, 1);
        var AX = BX + nxp * tn.lat * h * 0.6, AY = BY + nyp * tn.lat * h * 0.6, wig = Math.sin(t * 0.0021 + ti * 2.1) * reach * 0.12 * (ti ? 1 : 0.4);
        var rr = Math.max(reach * tn.reach * vis, h * 0.15);
        var HX = AX + dx * rr + nxp * (tn.lat * reach * 0.3 * vis + wig), HY = AY + dy * rr + nyp * (tn.lat * reach * 0.3 * vis + wig);
        for (var s2 = 0; s2 < SUB; s2++) {
          nodes[0].x = AX; nodes[0].y = AY; nodes[0].vx = nodes[0].vy = 0;
          spring(nodes[M], HX, HY, tn.kh, tn.ch, sdt);
          for (var k = 1; k < M; k++) {
            var u = k / M, sag = Math.sin(u * Math.PI) * (5 + 14 * (1 - es * 0.7)) + Math.sin(u * 2.4 + t * 0.0012 + ti) * (3 + stretch * 3) * Math.sin(u * Math.PI);
            var tx = AX + (nodes[M].x - AX) * u + nxp * sag * 0.6, ty = AY + (nodes[M].y - AY) * u + nyp * sag * 0.6 + 4 * Math.sin(u * Math.PI);
            spring(nodes[k], tx, ty, tn.kb - u * 50, 13 + u * 2, sdt);
          }
        }
        if (ti === 0) {
          velMain = Math.hypot(nodes[M].vx, nodes[M].vy); headPos.x = nodes[M].x; headPos.y = nodes[M].y;
          for (var s3 = 0; s3 < SUB; s3++) {
            spring(drops[0], nodes[M].x - dx * 16, nodes[M].y - dy * 16 + 5, 16, 3.6, sdt);
            spring(drops[1], nodes[M - 2].x + nxp * 9, nodes[M - 2].y + nyp * 9, 11, 3, sdt);
            spring(fingers[0], nodes[M].x + dx * headR * 0.9 + nxp * headR * 1.05, nodes[M].y + dy * headR * 0.9 + nyp * headR * 1.05, 46, 6.5, sdt);
            spring(fingers[1], nodes[M].x + dx * headR * 0.9 - nxp * headR * 1.05, nodes[M].y + dy * headR * 0.9 - nyp * headR * 1.05, 46, 6.5, sdt);
          }
        }
        if (gone * vis > 0.001) {
          var neck = h * 0.2 * tn.rs / Math.sqrt(1 + stretch * 0.9), hR = headR * tn.rs * (ti ? 0.8 : 1) * (1 + clamp(velMain / 900, 0, 0.35)), N = tn.N;
          for (var q = 0; q < N; q++) {
            var f = q / (N - 1) * M, i1 = Math.min(M - 1, Math.floor(f)), uu = f - i1, i0 = Math.max(0, i1 - 1), i2 = i1 + 1, i3 = Math.min(M, i1 + 2), g = f / M;
            var X = cr(nodes[i0].x, nodes[i1].x, nodes[i2].x, nodes[i3].x, uu), Y = cr(nodes[i0].y, nodes[i1].y, nodes[i2].y, nodes[i3].y, uu);
            put(X, Y, (neck * (1 + 0.7 * Math.pow(1 - g, 2)) + hR * Math.pow(g, 5)) * (1 + 0.1 * Math.sin(g * 7 - t * 0.0045 + ti)) * gone * vis);
          }
          put(nodes[M].x, nodes[M].y, hR * 1.05 * gone * vis);
        }
      });
      if (gone > 0.001) {
        var fv = clamp(es * 1.6 - 0.5, 0, 1);
        put(drops[0].x, drops[0].y, headR * 0.5 * gone * fv); put(drops[1].x, drops[1].y, headR * 0.34 * gone * fv);
        put(fingers[0].x, fingers[0].y, headR * 0.42 * gone * fv); put(fingers[1].x, fingers[1].y, headR * 0.42 * gone * fv);
        shine.setAttribute('cx', (headPos.x - headR * 0.25).toFixed(1)); shine.setAttribute('cy', (headPos.y - headR * 0.35).toFixed(1));
        shine.setAttribute('rx', (headR * 0.38 * gone).toFixed(1)); shine.setAttribute('ry', (headR * 0.2 * gone).toFixed(1)); shine.setAttribute('opacity', (0.3 * gone).toFixed(2));
        shine.setAttribute('transform', 'rotate(' + (Math.atan2(dy, dx) * 180 / Math.PI).toFixed(1) + ' ' + headPos.x.toFixed(1) + ' ' + headPos.y.toFixed(1) + ')');
      } else shine.setAttribute('opacity', '0');

      /* Mancha en reposo: pintura asentada en el borde que respira y se arrastra. */
      var wob = t * 0.0014, pr = h * (0.16 + 0.28 * poolVis);
      for (i = 0; i < 6; i++) {
        var ang = i * 1.05 + wob * (i % 2 ? 1 : -1), off = pr * 0.6;
        put(BX - dx * pr * 0.3 + Math.cos(ang) * off * 1.1 + nxp * (i - 2.5) * pr * 0.18, BY - dy * pr * 0.3 + Math.sin(ang) * off * 0.8, pr * (0.7 + 0.2 * Math.sin(wob * 2.1 + i * 2)));
      }
      put(BX, BY, pr * 1.1);

      /* Salpicadura al hacer clic: gotas con gravedad que se desvanecen. */
      splats.forEach(function (sp) {
        if (sp.life <= 0) return;
        sp.life -= dt; sp.vy += 900 * dt; sp.x += sp.vx * dt; sp.y += sp.vy * dt; sp.vx *= 0.985;
        put(sp.x, sp.y, sp.r * clamp(sp.life / 0.7, 0, 1));
      });
      for (; ci < NC; ci++) circ[ci].setAttribute('r', '0');
      raf = requestAnimationFrame(tick);
    }
    function wake() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } }
    function splat() {
      if (es < 0.1 || !born) return;
      var n = 0;
      splats.forEach(function (sp) {
        if (n >= 10 || sp.life > 0) return; n++;
        var a2 = Math.random() * Math.PI * 2, spd = 140 + Math.random() * 260;
        sp.x = headPos.x; sp.y = headPos.y; sp.vx = Math.cos(a2) * spd; sp.vy = Math.sin(a2) * spd - 120; sp.life = 0.5 + Math.random() * 0.4; sp.r = 2.5 + Math.random() * 4.5;
      });
      wake();
    }
    function onMove(e) { if (!wrap.isConnected) return dispose(); pt.x = e.clientX; pt.y = e.clientY; pt.active = true; wake(); }
    function onLeave() { pt.active = false; wake(); }
    function onScroll() { dirty = true; wake(); }
    function onDown() { btn.setAttribute('data-pressed', ''); splat(); }
    function onUp() { btn.removeAttribute('data-pressed'); }
    var ro = global.ResizeObserver ? new ResizeObserver(measure) : null;
    function dispose() {
      cancelAnimationFrame(raf); raf = 0;
      window.removeEventListener('pointermove', onMove); document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll, { capture: true }); window.removeEventListener('pointerup', onUp); window.removeEventListener('pointercancel', onUp); window.removeEventListener('resize', measure);
      if (ro) ro.disconnect();
    }
    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    btn.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp, { passive: true });
    window.addEventListener('pointercancel', onUp);
    measure();
    if (ro) ro.observe(btn);
    window.addEventListener('resize', measure);
  }

  /* Convierte los .btn-primary de la página en botones simbiontes (también los que se crean después). */
  function wrapBtn(b) {
    if (b.classList.contains('stretch-btn') || b.closest('.stretch') || b.closest('.topbar, .announce')) return;
    var block = b.classList.contains('btn-block'), wrap = document.createElement('span'), svg = document.createElementNS(NS, 'svg');
    wrap.className = 'stretch sb-auto' + (block ? ' sb-block' : ''); wrap.setAttribute('data-symbiote', '110'); wrap.setAttribute('data-variant', 'primary');
    svg.setAttribute('class', 'stretch-stage'); svg.setAttribute('aria-hidden', 'true');
    b.parentNode.insertBefore(wrap, b); wrap.appendChild(svg); wrap.appendChild(b);
    b.className = 'stretch-btn sb-sm' + (block ? ' sb-block' : '');
    setup(wrap, 110);
  }
  function enhance() { Array.prototype.forEach.call(document.querySelectorAll('main .btn-primary, #s2Root .btn-primary'), wrapBtn); }
  var pending = false;
  function schedule() { if (pending) return; pending = true; requestAnimationFrame(function () { pending = false; enhance(); }); }

  function init() { Array.prototype.forEach.call(document.querySelectorAll('.stretch[data-symbiote]'), function (w) { setup(w, +w.getAttribute('data-symbiote') || 150); }); }
  function boot() { init(); enhance(); new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  global.Symbiote = { init: init, enhance: enhance };
})(window);

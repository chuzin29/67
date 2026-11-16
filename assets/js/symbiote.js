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

    /* Filtro "goo": desenfoca y umbraliza el alfa, así los círculos se funden como líquido viscoso. */
    var fid = 'goo' + (++uid);
    var defs = document.createElementNS(NS, 'defs');
    defs.innerHTML = '<filter id="' + fid + '" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB"><feGaussianBlur in="SourceGraphic" stdDeviation="5.5" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9.5" result="g"/><feGaussianBlur in="g" stdDeviation="0.6"/></filter>';
    svg.appendChild(defs);
    var grp = document.createElementNS(NS, 'g'); grp.setAttribute('filter', 'url(#' + fid + ')'); grp.setAttribute('fill', 'var(--sb-thread)'); svg.appendChild(grp);
    var NC = 54, circ = [], i;
    for (i = 0; i < NC; i++) { var c = document.createElementNS(NS, 'circle'); c.setAttribute('r', '0'); grp.appendChild(c); circ.push(c); }
    var shine = document.createElementNS(NS, 'ellipse'); shine.setAttribute('fill', '#fff'); shine.setAttribute('opacity', '0'); svg.appendChild(shine);

    var R = radius || 150, M = 11, TILT = 8, SHIFT = 6;
    var pt = { x: -9999, y: -9999, active: false }, w = 0, h = 0, margin = 0, rect = null, dirty = false, raf = 0, last = performance.now(), t = 0;
    var es = 0, rest = 0, sx = 0, sy = 0, tilt = 0, press = 0, born = false;
    var nodes = [], drops = [{ x: 0, y: 0, vx: 0, vy: 0 }, { x: 0, y: 0, vx: 0, vy: 0 }];
    for (i = 0; i <= M; i++) nodes.push({ x: 0, y: 0, vx: 0, vy: 0 });

    function measure() {
      w = btn.offsetWidth; h = btn.offsetHeight; margin = R + 40;
      var W = w + margin * 2, H = h + margin * 2;
      svg.style.left = -margin + 'px'; svg.style.top = -margin + 'px'; svg.style.width = W + 'px'; svg.style.height = H + 'px';
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      rect = wrap.getBoundingClientRect(); dirty = false;
    }
    function hide() { circ.forEach(function (c) { c.setAttribute('r', '0'); }); shine.setAttribute('opacity', '0'); }
    function settle() { raf = 0; es = 0; sx = sy = tilt = press = 0; born = false; btn.style.transform = ''; btn.style.filter = 'none'; hide(); }

    /* Resorte amortiguado semi-implícito (subpasos para estabilidad). */
    function spring(n, tx, ty, k, c, dt) {
      var ax = (tx - n.x) * k - n.vx * c, ay = (ty - n.y) * k - n.vy * c;
      n.vx += ax * dt; n.vy += ay * dt; n.x += n.vx * dt; n.y += n.vy * dt;
    }
    function cr(p0, p1, p2, p3, u) { // Catmull-Rom
      var u2 = u * u, u3 = u2 * u;
      return 0.5 * ((2 * p1) + (-p0 + p2) * u + (2 * p0 - 5 * p1 + 4 * p2 - p3) * u2 + (-p0 + 3 * p1 - 3 * p2 + p3) * u3);
    }

    function tick(now) {
      var dt = clamp((now - last) / 1000, 1 / 240, 1 / 30); last = now; t += dt * 1000;
      if (!wrap.isConnected) return dispose();
      if (dirty || !rect || w < 2) { measure(); }
      if (w < 2 || h < 2) { settle(); return; }
      if (dirty || !rect) rect = wrap.getBoundingClientRect();
      var px = pt.x - rect.left, py = pt.y - rect.top, cx = w / 2, cy = h / 2;
      var qx = clamp(px, h / 2, w - h / 2), qy = clamp(py, h / 2, h - h / 2);
      var dEdge = Math.max(0, Math.hypot(px - qx, py - qy) - h / 2);
      var ddx = px - cx, ddy = py - cy, dl = Math.hypot(ddx, ddy) || 1, ux = ddx / dl, uy = ddy / dl;
      var e = pt.active ? clamp((R - dEdge) / (R * 0.7), 0, 1) : 0, restR = R * 1.9;
      var eRest = pt.active ? clamp((restR - dEdge) / (restR - R), 0, 1) : 0;
      es += (sstep(e) - es) * 0.1; rest += (sstep(eRest) - rest) * 0.08;
      if (es < 0.004 && rest < 0.02) { settle(); return; }

      /* El botón se inclina y se desplaza hacia la masa, y se hunde al presionar. */
      var rx = qx - cx + ux * (h / 2 - 4), ry = uy * (h / 2 - 4), torque = rx * uy - ry * ux;
      var tiltT = clamp((torque / (w * 0.5)) * TILT, -TILT, TILT) * es;
      press += ((btn.hasAttribute('data-pressed') ? 1 : 0) - press) * 0.22;
      sx += (ux * SHIFT * es - sx) * 0.1; sy += (uy * SHIFT * es - sy) * 0.1; tilt += (tiltT - tilt) * 0.1;
      btn.style.transform = 'translate(' + sx.toFixed(2) + 'px,' + sy.toFixed(2) + 'px) rotate(' + tilt.toFixed(2) + 'deg) scale(' + (1 - 0.04 * press).toFixed(3) + ',' + (1 - 0.06 * press).toFixed(3) + ')';

      /* Ancla en el borde del botón, del lado del puntero. */
      var A = (w - h) / 2, segX = clamp(ddx, -A, A), ox2 = ddx - segX, oy2 = ddy, olen = Math.hypot(ox2, oy2), rimOk = olen > 0.6;
      var BX = margin + cx + sx + (rimOk ? segX + (ox2 / olen) * (h / 2 - 5) : 0), BY = margin + cy + sy + (rimOk ? (oy2 / olen) * (h / 2 - 5) : 0);
      var CX = margin + px, CY = margin + py, vx = CX - BX, vy = CY - BY, len = Math.hypot(vx, vy) || 1, dx = vx / len, dy = vy / len;

      /* Alcance con elasticidad: la masa nunca pasa del rango, solo se estira como goma. */
      var Rmax = R * 0.92, want = len <= Rmax ? len : Rmax + (len - Rmax) * 0.06, reach = want * clamp(es * 1.25, 0, 1);
      var HX = BX + dx * Math.max(reach, h * 0.18), HY = BY + dy * Math.max(reach, h * 0.18);
      var nxp = -dy, nyp = dx; if (nyp < 0) { nxp = -nxp; nyp = -nyp; }

      if (!born) { for (i = 0; i <= M; i++) { nodes[i].x = BX; nodes[i].y = BY; nodes[i].vx = nodes[i].vy = 0; } drops.forEach(function (d) { d.x = BX; d.y = BY; d.vx = d.vy = 0; }); born = true; }

      var SUB = 3, sdt = dt / SUB, stretch = reach / (h * 1.4);
      for (var s2 = 0; s2 < SUB; s2++) {
        nodes[0].x = BX; nodes[0].y = BY; nodes[0].vx = nodes[0].vy = 0;
        /* Cabeza: resorte con poca amortiguación → rebote gelatinoso al frenar. */
        spring(nodes[M], HX, HY, 70, 9.5, sdt);
        /* Cuerpo: cada nodo persigue al segmento ideal con retraso (viscosidad), colgando por su peso. */
        for (i = 1; i < M; i++) {
          var u = i / M, sag = Math.sin(u * Math.PI) * (5 + 14 * (1 - es * 0.7)) + Math.sin(u * 2.4 + t * 0.0012) * (3 + stretch * 3) * Math.sin(u * Math.PI);
          var tx = BX + (nodes[M].x - BX) * u + nxp * sag * 0.6, ty = BY + (nodes[M].y - BY) * u + nyp * sag * 0.6 + 4 * Math.sin(u * Math.PI);
          spring(nodes[i], tx, ty, 120 - u * 50, 13 + u * 2, sdt);
        }
        /* Gotas satélite: siguen a la cabeza con más retraso, se funden o se sueltan. */
        drops[0].x += 0; spring(drops[0], nodes[M].x - dx * 16, nodes[M].y - dy * 16 + 5, 16, 3.6, sdt);
        spring(drops[1], nodes[M - 2].x + nxp * 9, nodes[M - 2].y + nyp * 9, 11, 3, sdt);
      }
      var velH = Math.hypot(nodes[M].vx, nodes[M].vy);

      /* Radios: gruesa en la base, cuello que adelgaza al estirarse, cabeza en bulbo que late. */
      var gone = clamp((es - 0.01) / 0.07, 0, 1), poolVis = Math.max(rest, es);
      var neck = h * 0.2 / Math.sqrt(1 + stretch * 0.9), headR = (h * 0.2 + 12 * es * es + press * 3) * (1 + 0.07 * Math.sin(t * 0.005)) * (1 + clamp(velH / 900, 0, 0.35));
      var ci = 0;
      function put(x, y, r) { if (ci < NC && isFinite(x + y + r)) { circ[ci].setAttribute('cx', x.toFixed(1)); circ[ci].setAttribute('cy', y.toFixed(1)); circ[ci].setAttribute('r', Math.max(0, r).toFixed(1)); ci++; } }

      /* Mancha en reposo: pintura asentada en el borde que respira. */
      var wob = t * 0.0014, pr = h * (0.16 + 0.26 * poolVis);
      for (i = 0; i < 4; i++) {
        var ang = i * 1.57 + wob * (i % 2 ? 1 : -1), off = pr * 0.55;
        put(BX - dx * pr * 0.3 + Math.cos(ang) * off * 0.8, BY - dy * pr * 0.3 + Math.sin(ang) * off * 0.8, pr * (0.78 + 0.18 * Math.sin(wob * 2.1 + i * 2)));
      }
      put(BX, BY, pr * 1.05);

      /* Cuerpo: círculos a lo largo de la spline; el filtro los funde en una sola masa lisa. */
      if (gone > 0.001) {
        var N = 34, pts = nodes;
        for (var k = 0; k < N; k++) {
          var f = k / (N - 1) * M, i1 = Math.min(M - 1, Math.floor(f)), uu = f - i1, i0 = Math.max(0, i1 - 1), i2 = i1 + 1, i3 = Math.min(M, i1 + 2), g = f / M;
          var X = cr(pts[i0].x, pts[i1].x, pts[i2].x, pts[i3].x, uu), Y = cr(pts[i0].y, pts[i1].y, pts[i2].y, pts[i3].y, uu);
          var r = (neck * (1 + 0.7 * Math.pow(1 - g, 2)) + headR * Math.pow(g, 5)) * (1 + 0.1 * Math.sin(g * 7 - t * 0.0045)) * gone;
          put(X, Y, r);
        }
        put(nodes[M].x, nodes[M].y, headR * 1.05 * gone);
        put(drops[0].x, drops[0].y, headR * 0.5 * gone * clamp(es * 1.5 - 0.3, 0, 1));
        put(drops[1].x, drops[1].y, headR * 0.34 * gone * clamp(es * 1.5 - 0.5, 0, 1));
        shine.setAttribute('cx', (nodes[M].x - headR * 0.25).toFixed(1)); shine.setAttribute('cy', (nodes[M].y - headR * 0.35).toFixed(1));
        shine.setAttribute('rx', (headR * 0.38 * gone).toFixed(1)); shine.setAttribute('ry', (headR * 0.2 * gone).toFixed(1)); shine.setAttribute('opacity', (0.28 * gone).toFixed(2));
        shine.setAttribute('transform', 'rotate(' + (Math.atan2(dy, dx) * 180 / Math.PI).toFixed(1) + ' ' + nodes[M].x.toFixed(1) + ' ' + nodes[M].y.toFixed(1) + ')');
      } else shine.setAttribute('opacity', '0');
      for (; ci < NC; ci++) circ[ci].setAttribute('r', '0');
      raf = requestAnimationFrame(tick);
    }
    function wake() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } }
    function onMove(e) { if (!wrap.isConnected) return dispose(); pt.x = e.clientX; pt.y = e.clientY; pt.active = true; wake(); }
    function onLeave() { pt.active = false; wake(); }
    function onScroll() { dirty = true; wake(); }
    function onDown() { btn.setAttribute('data-pressed', ''); }
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

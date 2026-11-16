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

  function setup(wrap, radius) {
    var btn = wrap.querySelector('.stretch-btn'), svg = wrap.querySelector('.stretch-stage');
    if (!btn || !svg) return;
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduce || !fine) return;
    var haze = path(svg, '0.1'), poolWide = path(svg, '0.2'), pool = path(svg, '0.78'), spill = path(svg, '0.14'), body = path(svg, '0.97');
    var blob = document.createElementNS(NS, 'ellipse'); blob.setAttribute('fill', 'var(--sb-thread)'); blob.setAttribute('opacity', '0.97'); svg.appendChild(blob);

    var R = radius || 150, TILT = 9, SHIFT = 7, STIFF = 46, DAMP = 0.82;
    var pt = { x: -9999, y: -9999, active: false }, w = 0, h = 0, margin = 0, rect = null, dirty = false, raf = 0, last = performance.now(), t = 0;
    var es = 0, rest = 0, sx = 0, sy = 0, tilt = 0, press = 0, tipX = 0, tipY = 0, tipVX = 0, tipVY = 0;

    function measure() {
      w = btn.offsetWidth; h = btn.offsetHeight; margin = R + 30;
      var W = w + margin * 2, H = h + margin * 2;
      svg.style.left = -margin + 'px'; svg.style.top = -margin + 'px'; svg.style.width = W + 'px'; svg.style.height = H + 'px';
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      rect = wrap.getBoundingClientRect(); dirty = false;
    }
    function resetInk() {
      btn.style.transform = ''; btn.style.filter = 'none';
      [spill, body, pool, poolWide, haze].forEach(function (p) { p.setAttribute('d', ''); });
      blob.setAttribute('rx', '0'); blob.setAttribute('ry', '0');
    }
    function settle() { raf = 0; es = 0; sx = sy = tilt = press = 0; tipVX = tipVY = 0; resetInk(); }

    function tick(now) {
      var dt = clamp((now - last) / 1000, 1 / 240, 1 / 30); last = now; t += dt * 1000;
      if (dirty || !rect) rect = wrap.getBoundingClientRect();
      var px = pt.x - rect.left, py = pt.y - rect.top, cx = w / 2, cy = h / 2;
      var qx = clamp(px, h / 2, w - h / 2), qy = clamp(py, h / 2, h - h / 2);
      var dEdge = Math.max(0, Math.hypot(px - qx, py - qy) - h / 2);
      var ddx = px - cx, ddy = py - cy, dl = Math.hypot(ddx, ddy) || 1, ux = ddx / dl, uy = ddy / dl;
      var e = pt.active ? clamp((R - dEdge) / (R * 0.62), 0, 1) : 0, restR = R * 1.9;
      var eRest = pt.active ? clamp((restR - dEdge) / (restR - R), 0, 1) : 0;
      es += (sstep(e) - es) * 0.16; rest += (sstep(eRest) - rest) * 0.11;
      if (es < 0.004 && rest < 0.02) { settle(); return; }
      var engaged = es > 0.002;

      var rx = qx - cx + ux * (h / 2 - 4), ry = uy * (h / 2 - 4), torque = rx * uy - ry * ux;
      var tiltT = clamp((torque / (w * 0.5)) * TILT, -TILT, TILT) * es, sxT = ux * SHIFT * es, syT = uy * SHIFT * es;
      press += ((btn.hasAttribute('data-pressed') ? 1 : 0) - press) * 0.22;
      sx += (sxT - sx) * 0.12; sy += (syT - sy) * 0.12; tilt += (tiltT - tilt) * 0.12;
      var move = Math.hypot(sxT - sx, syT - sy) + Math.abs(tiltT - tilt) * 2, blur = move > 0.55 ? Math.min(move * 0.22, 0.65) : 0;
      btn.style.transform = 'translate(' + sx.toFixed(2) + 'px,' + sy.toFixed(2) + 'px) rotate(' + tilt.toFixed(2) + 'deg) scale(' + (1 - 0.04 * press).toFixed(3) + ',' + (1 - 0.06 * press).toFixed(3) + ')';
      btn.style.filter = blur > 0.35 ? 'blur(' + blur.toFixed(2) + 'px)' : 'none';

      if (engaged) {
        var reach = Math.min(1, es * 1.2), tx = cx + ddx * reach, ty = cy + ddy * reach;
        tipVX += (tx - tipX) * STIFF * dt; tipVY += (ty - tipY) * STIFF * dt;
        var damp = Math.pow(DAMP, dt * 60); tipVX *= damp; tipVY *= damp; tipX += tipVX; tipY += tipVY;
      } else { tipVX *= 0.7; tipVY *= 0.7; tipX += (cx - tipX) * 0.24; tipY += (cy - tipY) * 0.24; }
      tipX = clamp(tipX, -margin, w + margin); tipY = clamp(tipY, -margin, h + margin);

      var A = (w - h) / 2, segX = clamp(ddx, -A, A), ox2 = ddx - segX, oy2 = ddy, olen = Math.hypot(ox2, oy2), rimOk = olen > 0.6;
      var BX = margin + cx + sx + (rimOk ? segX + (ox2 / olen) * (h / 2 - 3) : 0), BY = margin + cy + sy + (rimOk ? (oy2 / olen) * (h / 2 - 3) : 0);
      var tdx = margin + tipX - BX, tdy = margin + tipY - BY, tl = Math.hypot(tdx, tdy) || 1, dirX = tdx / tl, dirY = tdy / tl;
      var nx = -dirY, ny = dirX; if (ny < 0) { nx = -nx; ny = -ny; }
      var sag = (10 + tl * 0.16) * (1 - 0.78 * es), slow = 1 - 0.86 * press, whipAmp = (2.6 + tl * 0.052) * (1 - 0.4 * press), whipPh = t * 0.0042;
      var meanderAmp = (7 + tl * 0.075) * Math.max(0.25, 1 - press), meanderPh = Math.sin(t * 0.0011) * 1.6;
      var K = 13, cxs = [], cys = [], k, u;
      for (k = 0; k <= K; k++) {
        u = k / K; var taper = Math.sin(u * Math.PI), grow = 0.32 + 0.68 * u;
        var g = sag * 0.55 * taper + meanderAmp * Math.sin(u * 1.9 + meanderPh) * (0.18 + 0.82 * u) + slow * whipAmp * (Math.sin(u * 2.9 - whipPh) + 0.45 * Math.sin(u * 6.2 + whipPh * 1.7)) * taper * grow;
        cxs.push(BX + tdx * u + nx * g); cys.push(BY + tdy * u + ny * g);
      }
      var tipJit = nx * 1.6 * Math.sin(t * 0.0061) + ny * 0.9 * Math.sin(t * 0.0048 + 1); cxs[K] += tipJit; cys[K] += tipJit;
      var headR = (6.5 + 14 * es * es * es + press * 3.4) * (1 + 0.05 * Math.sin(t * 0.0045));
      var velQ = clamp(Math.hypot(tipVX, tipVY) / 1200, 0, 0.55), cEs = 0.62 + 0.38 * es;
      function hwAt(u2) { return (h * (0.27 - 0.09 * u2) + h * 0.11 * Math.sin(u2 * Math.PI * 0.9) + headR * 0.5 * u2 * u2) * (1 + 0.16 * Math.sin(u2 * 4.1 - whipPh * 1.25) * slow) * (1 + 0.14 * press) * (1 + velQ * 0.25 * u2) * cEs; }
      var nX = [], nY = [];
      for (k = 0; k <= K; k++) { var a = Math.max(0, k - 1), b = Math.min(K, k + 1), tx2 = cxs[b] - cxs[a], ty2 = cys[b] - cys[a], tn = Math.hypot(tx2, ty2) || 1; nX.push(-ty2 / tn); nY.push(tx2 / tn); }
      var wallPh = t * 0.0034;
      function ring(wMul, ox, oy) {
        var X = [], Y = [], kk, uu, rc, hw;
        for (kk = 0; kk <= K; kk++) { uu = kk / K; rc = 0.22 + 0.78 * uu; hw = hwAt(uu) * wMul * (1 + 0.12 * Math.sin(uu * 5.3 - wallPh * 1.4) * rc); X.push(cxs[kk] + nX[kk] * hw + ox); Y.push(cys[kk] + nY[kk] * hw + oy); }
        var capSide = hwAt(1) * wMul * (1 - velQ * 0.3) * 0.55, capLen = headR * 1.25 * wMul * (1 + velQ * 0.6);
        X.push(cxs[K] + nX[K] * capSide + dirX * capLen * 0.82 + ox); Y.push(cys[K] + nY[K] * capSide + dirY * capLen * 0.82 + oy);
        X.push(cxs[K] + dirX * capLen + ox); Y.push(cys[K] + dirY * capLen + oy);
        X.push(cxs[K] - nX[K] * capSide + dirX * capLen * 0.82 + ox); Y.push(cys[K] - nY[K] * capSide + dirY * capLen * 0.82 + oy);
        for (kk = K; kk >= 0; kk--) { uu = kk / K; rc = 0.22 + 0.78 * uu; hw = hwAt(uu) * wMul * (1 + 0.14 * Math.sin(uu * 4.4 + wallPh * 1.85 + 1.3) * rc); X.push(cxs[kk] - nX[kk] * hw + ox); Y.push(cys[kk] - nY[kk] * hw + oy); }
        return gooBlob(X, Y);
      }
      var gone = clamp((es - 0.012) / 0.055, 0, 1), poolVis = Math.max(rest, es);
      if (poolVis > 0.03) {
        var wob = t * 0.0011;
        var poolBlob = function (wideMul) {
          var xs2 = [], ys2 = [], base = h * (0.28 + 0.44 * poolVis) * wideMul, p2x = BX - ux * base * 0.32, p2y = BY - uy * base * 0.32;
          for (var i = 0; i < 15; i++) {
            var ang = (i / 15) * Math.PI * 2;
            var wobR = 1 + 0.17 * Math.sin(ang * 3 + wob * 1.7) + 0.12 * Math.sin(ang * 5 - wob * 1.15) + 0.08 * Math.sin(ang * 8 + wob * 2.3) + 0.06 * Math.sin(ang * 2 - wob * 0.6);
            var rr = base * wobR * (1 + 0.07 * Math.sin(t * 0.0016 + ang * 1.35)), ox3 = Math.cos(ang) * rr, oy3 = Math.sin(ang) * rr;
            var along = ox3 * ux + oy3 * uy, perp = -ox3 * uy + oy3 * ux, alongF = along >= 0 ? 1 + 0.42 * poolVis : 1 - 0.46 * poolVis, sq = 1 - 0.12 * poolVis;
            xs2.push(p2x + along * alongF * ux + perp * sq * -uy); ys2.push(p2y + along * alongF * uy + perp * sq * ux);
          }
          return gooBlob(xs2, ys2);
        };
        haze.setAttribute('d', poolBlob(1.6)); poolWide.setAttribute('d', poolBlob(1.26)); pool.setAttribute('d', poolBlob(0.95));
      } else { haze.setAttribute('d', ''); poolWide.setAttribute('d', ''); pool.setAttribute('d', ''); }
      if (gone > 0.001) {
        spill.setAttribute('d', ring(1.5 * gone, nx * 4.5, ny * 4.5)); body.setAttribute('d', ring(gone, 0, 0));
        var ang2 = Math.atan2(dirY, dirX) * 180 / Math.PI, hx = cxs[K].toFixed(1), hy = cys[K].toFixed(1);
        blob.setAttribute('cx', hx); blob.setAttribute('cy', hy); blob.setAttribute('rx', (headR * 0.95 * gone).toFixed(1)); blob.setAttribute('ry', (headR * (1.02 + velQ * 0.8) * gone).toFixed(1)); blob.setAttribute('transform', 'rotate(' + ang2.toFixed(1) + ' ' + hx + ' ' + hy + ')');
      } else { spill.setAttribute('d', ''); body.setAttribute('d', ''); blob.setAttribute('rx', '0'); blob.setAttribute('ry', '0'); }
      raf = requestAnimationFrame(tick);
    }
    function wake() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); } }
    window.addEventListener('pointermove', function (e) { pt.x = e.clientX; pt.y = e.clientY; pt.active = true; wake(); }, { passive: true });
    document.documentElement.addEventListener('pointerleave', function () { pt.active = false; wake(); });
    window.addEventListener('scroll', function () { dirty = true; wake(); }, { passive: true, capture: true });
    btn.addEventListener('pointerdown', function () { btn.setAttribute('data-pressed', ''); });
    window.addEventListener('pointerup', function () { btn.removeAttribute('data-pressed'); }, { passive: true });
    window.addEventListener('pointercancel', function () { btn.removeAttribute('data-pressed'); });
    measure();
    if (global.ResizeObserver) new ResizeObserver(measure).observe(btn);
    window.addEventListener('resize', measure);
  }

  function init() { Array.prototype.forEach.call(document.querySelectorAll('.stretch[data-symbiote]'), function (w) { setup(w, +w.getAttribute('data-symbiote') || 150); }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  global.Symbiote = { init: init };
})(window);

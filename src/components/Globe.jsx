"use client";

import { useEffect, useRef } from "react";

function toXYZ(lat, lng) {
  return [
    Math.cos(lat) * Math.sin(lng),
    Math.sin(lat),
    Math.cos(lat) * Math.cos(lng),
  ];
}

function generateDots(latSteps = 18, lngSteps = 36) {
  const dots = [];
  for (let li = 0; li <= latSteps; li++) {
    const lat = -Math.PI / 2 + (Math.PI * li) / latSteps;
    const count = Math.max(1, Math.round(Math.cos(lat) * lngSteps));
    for (let lo = 0; lo < count; lo++) {
      const lng = (Math.PI * 2 * lo) / count;
      dots.push(toXYZ(lat, lng));
    }
  }
  return dots;
}

function generateArcs(count = 22) {
  return Array.from({ length: count }, () => {
    const lat1 = (Math.random() - 0.5) * Math.PI * 0.85;
    const lng1 = Math.random() * Math.PI * 2;
    const lat2 = (Math.random() - 0.5) * Math.PI * 0.85;
    const lng2 = Math.random() * Math.PI * 2;
    const steps = 60;
    const pts = Array.from({ length: steps + 1 }, (_, t) => {
      const f = t / steps;
      return toXYZ(lat1 + (lat2 - lat1) * f, lng1 + (lng2 - lng1) * f);
    });
    return {
      pts,
      offset: Math.random() * Math.PI * 2,
      speed: 0.4 + Math.random() * 0.8,
    };
  });
}

const DOTS = generateDots();
const ARCS = generateArcs();

export default function Globe({
  size = 500,
  dotColor = "rgba(0,182,204,{a})",
  arcColor = "rgba(0,182,204,{a})",
  headColor = "rgba(230,220,255,{a})",
  glowColor = "rgba(120,100,255,0.08)",
  lineColor = "rgba(180,160,255,{a})",
  className = "",
  style = {},
}) {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    rotY: 0,
    rotX: 0.3,
    velX: 0,
    velY: 0.004,
    time: 0,
    dragging: false,
    lastX: 0,
    lastY: 0,
    raf: null,
  });

  function project([x, y, z], rotY, rotX, R, CX, CY) {
    const cosY = Math.cos(rotY),
      sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX),
      sinX = Math.sin(rotX);
    const nx = x * cosY - z * sinY;
    const nz = x * sinY + z * cosY;
    const ny = y * cosX - nz * sinX;
    const fnz = y * sinX + nz * cosX;
    return { x: CX + nx * R, y: CY - ny * R, z: fnz };
  }

  function mkColor(template, alpha) {
    return template.replace("{a}", alpha.toFixed(3));
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;
    const W = size,
      H = size,
      CX = W / 2,
      CY = H / 2,
      R = W * 0.42;

    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.scale(DPR, DPR);

    const s = stateRef.current;

    function draw() {
      const { rotY, rotX, time } = s;
      ctx.clearRect(0, 0, W, H);

      // Glow
      const grd = ctx.createRadialGradient(
        CX - R * 0.2,
        CY - R * 0.2,
        R * 0.1,
        CX,
        CY,
        R * 1.1,
      );
      grd.addColorStop(0, glowColor);
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(CX, CY, R * 1.1, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Dots
      for (const d of DOTS) {
        const p = project(d, rotY, rotX, R, CX, CY);
        if (p.z < 0) continue;
        const brightness = (p.z + 1) / 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.9 + brightness * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = mkColor(dotColor, brightness * 0.35);
        ctx.fill();
      }

      // Grid lines
      ctx.lineWidth = 0.5;
      for (let li = 1; li < 18; li++) {
        const lat = -Math.PI / 2 + (Math.PI * li) / 18;
        ctx.beginPath();
        let first = true;
        for (let lo = 0; lo <= 64; lo++) {
          const p = project(
            toXYZ(lat, (Math.PI * 2 * lo) / 64),
            rotY,
            rotX,
            R,
            CX,
            CY,
          );
          if (p.z < -0.1) {
            first = true;
            continue;
          }
          first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          first = false;
        }
        ctx.strokeStyle = mkColor(lineColor, 0.06);
        ctx.stroke();
      }
      for (let lo = 0; lo < 24; lo++) {
        const lng = (Math.PI * 2 * lo) / 24;
        ctx.beginPath();
        let first = true;
        for (let li = 0; li <= 64; li++) {
          const p = project(
            toXYZ(-Math.PI / 2 + (Math.PI * li) / 64, lng),
            rotY,
            rotX,
            R,
            CX,
            CY,
          );
          if (p.z < -0.1) {
            first = true;
            continue;
          }
          first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
          first = false;
        }
        ctx.strokeStyle = mkColor(lineColor, 0.06);
        ctx.stroke();
      }

      // Arcs
      for (const arc of ARCS) {
        const phase = (time * arc.speed + arc.offset) % (Math.PI * 2);
        const head = phase / (Math.PI * 2);
        const tailLen = 0.25;
        const tail = Math.max(0, head - tailLen);

        const visible = arc.pts.map((pt) => {
          const p = project(pt, rotY, rotX, R, CX, CY);
          return { ...p, visible: p.z > -0.05 };
        });

        for (let i = 0; i < visible.length - 1; i++) {
          const f0 = i / (visible.length - 1);
          const f1 = (i + 1) / (visible.length - 1);
          if (!visible[i].visible || !visible[i + 1].visible) continue;
          if (f1 < tail || f0 > head) continue;
          const tMid = (f0 + f1) / 2;
          if (tMid < tail || tMid > head) continue;
          const fromTail = (tMid - tail) / tailLen;
          const alpha = Math.sin(fromTail * Math.PI) * 0.9;
          const bright = (visible[i].z + 1) / 2;
          ctx.strokeStyle = mkColor(arcColor, alpha * bright);
          ctx.lineWidth = 1.2 + alpha;
          ctx.beginPath();
          ctx.moveTo(visible[i].x, visible[i].y);
          ctx.lineTo(visible[i + 1].x, visible[i + 1].y);
          ctx.stroke();
        }

        // Head dot
        const headIdx = Math.min(
          Math.floor(head * (arc.pts.length - 1)),
          arc.pts.length - 1,
        );
        const hp = project(arc.pts[headIdx], rotY, rotX, R, CX, CY);
        if (hp.z > 0) {
          const bright = (hp.z + 1) / 2;
          ctx.beginPath();
          ctx.arc(hp.x, hp.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = mkColor(headColor, bright * 0.9);
          ctx.fill();
        }
      }

      s.time += 0.016;
    }

    function loop() {
      if (!s.dragging) {
        s.rotY += s.velY;
        s.rotX += s.velX;
        s.velX *= 0.97;
      }
      draw();
      s.raf = requestAnimationFrame(loop);
    }

    s.raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(s.raf);
  }, [size, dotColor, arcColor, headColor, glowColor, lineColor]);

  // Pointer handlers
  const onPointerDown = (e) => {
    stateRef.current.dragging = true;
    stateRef.current.lastX = e.clientX;
    stateRef.current.lastY = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerUp = () => {
    stateRef.current.dragging = false;
  };
  const onPointerMove = (e) => {
    const s = stateRef.current;
    if (!s.dragging) return;
    const dx = e.clientX - s.lastX;
    const dy = e.clientY - s.lastY;
    s.velY = dx * 0.003;
    s.velX = dy * 0.003;
    s.rotY += dx * 0.003;
    s.rotX += dy * 0.003;
    s.lastX = e.clientX;
    s.lastY = e.clientY;
  };

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ cursor: "grab", display: "block", ...style }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
    />
  );
}

export const GlobeDemo = () => {
  return (
    <Globe size={480} className="mx-auto max-w-75 max-h-75 md:max-w-full md:max-h-full" />
  );
}

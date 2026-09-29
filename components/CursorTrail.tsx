"use client";

import { useEffect, useRef } from "react";

/** Orange exhaust trail that follows the cursor. Disabled on touch devices and for reduced motion. */
export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!fine || reduce || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points: { x: number; y: number; life: number }[] = [];
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onMove = (e: PointerEvent) => {
      points.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (points.length > 40) points.shift();
    };

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1];
        const b = points[i];
        ctx.strokeStyle = `rgba(255, ${106 + Math.round(b.life * 34)}, 0, ${b.life * 0.7})`;
        ctx.lineWidth = b.life * 5;
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(255,106,0,0.8)";
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      for (const p of points) p.life -= 0.045;
      while (points.length && points[0].life <= 0) points.shift();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[70] h-full w-full" aria-hidden />;
}

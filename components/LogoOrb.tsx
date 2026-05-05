'use client';

import { useEffect, useRef } from 'react';

export function LogoOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    if (!ctx) return;

    const SIZE = 480;
    canvas.width = SIZE;
    canvas.height = SIZE;
    const CX = SIZE / 2;
    const CY = SIZE / 2;

    /* ── Stars ── */
    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * SIZE,
      y: Math.random() * SIZE,
      r: Math.random() * 1.4 + 0.2,
      alpha: Math.random() * 0.7 + 0.2,
      twinkle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.005,
    }));

    /* ── Orbit particles ── */
    const particles = Array.from({ length: 40 }, (_, i) => ({
      angle: (i / 40) * Math.PI * 2,
      radius: 168,
      tilt: 0.38,          // radians — makes ellipse look 3-D
      size: Math.random() * 2.5 + 0.8,
      alpha: Math.random() * 0.8 + 0.2,
      speed: (Math.random() * 0.003 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
    }));

    let t = 0;

    function draw() {
      t += hoverRef.current ? 0.025 : 0.012;

      /* clear */
      ctx.clearRect(0, 0, SIZE, SIZE);

      /* ── deep space background (circle clip) ── */
      ctx.save();
      ctx.beginPath();
      ctx.arc(CX, CY, SIZE / 2 - 2, 0, Math.PI * 2);
      ctx.clip();

      /* gradient bg */
      const bg = ctx.createRadialGradient(CX, CY - 40, 20, CX, CY, SIZE / 2);
      bg.addColorStop(0, '#0c1a3a');
      bg.addColorStop(0.55, '#060e20');
      bg.addColorStop(1, '#020810');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, SIZE, SIZE);

      /* milky way haze */
      const mw = ctx.createLinearGradient(0, 0, SIZE, SIZE);
      mw.addColorStop(0, 'rgba(30,64,175,0.06)');
      mw.addColorStop(0.5, 'rgba(0,180,255,0.04)');
      mw.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = mw;
      ctx.fillRect(0, 0, SIZE, SIZE);

      /* stars */
      stars.forEach((s) => {
        s.twinkle += s.speed;
        const a = s.alpha * (0.6 + 0.4 * Math.sin(s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,220,255,${a})`;
        ctx.fill();
      });

      /* ── planet sphere ── */
      const R = 100;
      const planetGrad = ctx.createRadialGradient(CX - 28, CY - 28, 8, CX, CY, R);
      planetGrad.addColorStop(0, '#1e3a6e');
      planetGrad.addColorStop(0.45, '#0d1b3e');
      planetGrad.addColorStop(0.75, '#07101f');
      planetGrad.addColorStop(1, '#020810');
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.fillStyle = planetGrad;
      ctx.fill();

      /* planet edge glow */
      const edgeGlow = ctx.createRadialGradient(CX, CY, R - 6, CX, CY, R + 12);
      edgeGlow.addColorStop(0, 'rgba(0,180,255,0.0)');
      edgeGlow.addColorStop(0.5, 'rgba(0,180,255,0.18)');
      edgeGlow.addColorStop(1, 'rgba(0,180,255,0.0)');
      ctx.beginPath();
      ctx.arc(CX, CY, R + 12, 0, Math.PI * 2);
      ctx.fillStyle = edgeGlow;
      ctx.fill();

      /* surface shimmer */
      const shine = ctx.createRadialGradient(CX - 35, CY - 35, 0, CX - 35, CY - 35, 80);
      shine.addColorStop(0, 'rgba(0,180,255,0.12)');
      shine.addColorStop(1, 'rgba(0,180,255,0)');
      ctx.beginPath();
      ctx.arc(CX, CY, R, 0, Math.PI * 2);
      ctx.fillStyle = shine;
      ctx.fill();

      /* city lights on planet */
      const lights = [
        { x: CX + 20, y: CY + 30 }, { x: CX - 30, y: CY + 50 },
        { x: CX + 50, y: CY + 20 }, { x: CX - 55, y: CY + 10 },
        { x: CX + 15, y: CY + 70 }, { x: CX - 20, y: CY + 65 },
        { x: CX + 60, y: CY + 55 },
      ];
      lights.forEach(({ x, y }) => {
        const pulse = 0.4 + 0.3 * Math.sin(t * 2 + x);
        const lg = ctx.createRadialGradient(x, y, 0, x, y, 7);
        lg.addColorStop(0, `rgba(255,220,120,${pulse})`);
        lg.addColorStop(1, 'rgba(255,180,60,0)');
        ctx.fillStyle = lg;
        ctx.fillRect(x - 7, y - 7, 14, 14);
      });

      /* ── "IT" text ── */
      ctx.save();
      ctx.font = 'bold 68px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      /* text glow layers */
      for (let i = 3; i >= 1; i--) {
        ctx.shadowColor = '#00B4FF';
        ctx.shadowBlur = i * 14;
        ctx.fillStyle = `rgba(0,180,255,${0.08 * i})`;
        ctx.fillText('IT', CX, CY - 8);
      }
      /* metallic gradient fill */
      const tg = ctx.createLinearGradient(CX - 40, CY - 50, CX + 40, CY + 30);
      tg.addColorStop(0, '#c8e0ff');
      tg.addColorStop(0.3, '#7eb8f7');
      tg.addColorStop(0.6, '#3b82f6');
      tg.addColorStop(1, '#1e40af');
      ctx.shadowColor = '#00B4FF';
      ctx.shadowBlur = 18;
      ctx.fillStyle = tg;
      ctx.fillText('IT', CX, CY - 8);
      ctx.restore();

      /* ── "SPACE" text ── */
      ctx.save();
      ctx.font = '600 16px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '0.3em';
      ctx.fillStyle = 'rgba(148,185,255,0.9)';
      ctx.shadowColor = '#00B4FF';
      ctx.shadowBlur = 8;
      ctx.fillText('SPACE', CX, CY + 38);
      ctx.restore();

      ctx.restore(); /* end clip */

      /* ── orbital ring ── (drawn outside clip so it can extend) */
      ctx.save();
      ctx.translate(CX, CY);
      ctx.rotate(t * 0.4);
      ctx.scale(1, Math.sin(0.38));   /* tilt effect */

      /* ring track */
      ctx.beginPath();
      ctx.ellipse(0, 0, 168, 168, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,180,255,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();

      /* glowing arc on ring — drawn as segmented arc to avoid createConicGradient compat issues */
      const arcAngle = t * 0.9;
      const arcSpan = Math.PI * 0.55;
      const segments = 32;
      for (let s = 0; s < segments; s++) {
        const frac = s / segments;
        const a0 = arcAngle + frac * arcSpan;
        const a1 = arcAngle + (s + 1) / segments * arcSpan;
        const mid = frac < 0.4 ? frac / 0.4 : 1 - (frac - 0.4) / 0.6;
        const alpha = 0.9 * mid;
        ctx.beginPath();
        ctx.ellipse(0, 0, 168, 168, 0, a0, a1);
        ctx.strokeStyle = `rgba(0,180,255,${alpha.toFixed(3)})`;
        ctx.lineWidth = 2.5 + mid * 1.5;
        ctx.stroke();
      }

      /* orbit particles */
      particles.forEach((p) => {
        p.angle += p.speed * (hoverRef.current ? 1.8 : 1);
        const px = Math.cos(p.angle) * p.radius;
        const py = Math.sin(p.angle) * p.radius * Math.sin(p.tilt);
        const depth = Math.sin(p.angle);
        const visible = depth > -0.15; /* hide particles behind planet */
        if (!visible) return;
        const a = p.alpha * ((depth + 1) / 2);
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,180,255,${a})`;
        ctx.shadowColor = '#00B4FF';
        ctx.shadowBlur = 6;
        ctx.fill();
      });

      /* lead particle glow */
      const lx = Math.cos(t * 0.9) * 168;
      const ly = Math.sin(t * 0.9) * 168 * Math.sin(0.38);
      const lg2 = ctx.createRadialGradient(lx, ly, 0, lx, ly, 18);
      lg2.addColorStop(0, 'rgba(100,200,255,0.9)');
      lg2.addColorStop(1, 'rgba(0,180,255,0)');
      ctx.beginPath();
      ctx.arc(lx, ly, 18, 0, Math.PI * 2);
      ctx.fillStyle = lg2;
      ctx.fill();

      ctx.restore();

      /* outer glow ring */
      const outerGlow = ctx.createRadialGradient(CX, CY, SIZE / 2 - 16, CX, CY, SIZE / 2 + 4);
      outerGlow.addColorStop(0, 'rgba(0,180,255,0.0)');
      outerGlow.addColorStop(0.5, `rgba(0,180,255,${0.06 + 0.04 * Math.sin(t)})`);
      outerGlow.addColorStop(1, 'rgba(0,180,255,0.0)');
      ctx.beginPath();
      ctx.arc(CX, CY, SIZE / 2, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);

    const el = canvas.parentElement;
    const onEnter = () => { hoverRef.current = true; };
    const onLeave = () => { hoverRef.current = false; };
    el?.addEventListener('mouseenter', onEnter);
    el?.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(frameRef.current);
      el?.removeEventListener('mouseenter', onEnter);
      el?.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center select-none cursor-default group/orb">
      {/* outer pulse ring */}
      <div className="absolute w-[340px] h-[340px] rounded-full border border-[#00B4FF]/10 animate-ping [animation-duration:3s]" />
      <div className="absolute w-[380px] h-[380px] rounded-full border border-[#00B4FF]/6 animate-ping [animation-duration:4.5s] [animation-delay:1.5s]" />

      {/* canvas */}
      <canvas
        ref={canvasRef}
        className="w-[340px] h-[340px] rounded-full"
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
}

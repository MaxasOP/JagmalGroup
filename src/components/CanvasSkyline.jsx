'use client';
import { useEffect, useRef, useState } from "react";

const BUILDINGS = [
  { x: 0.01, w: 0.04, h: 0.28, floors: 7,  lit: 0.3  },
  { x: 0.05, w: 0.03, h: 0.18, floors: 5,  lit: 0.25 },
  { x: 0.07, w: 0.05, h: 0.42, floors: 10, lit: 0.35 },
  { x: 0.12, w: 0.03, h: 0.22, floors: 6,  lit: 0.2  },
  { x: 0.15, w: 0.06, h: 0.55, floors: 13, lit: 0.4  },
  { x: 0.20, w: 0.02, h: 0.15, floors: 4,  lit: 0.15 },
  { x: 0.22, w: 0.04, h: 0.35, floors: 9,  lit: 0.3  },
  { x: 0.27, w: 0.05, h: 0.50, floors: 12, lit: 0.45 },
  { x: 0.31, w: 0.03, h: 0.30, floors: 8,  lit: 0.25 },
  { x: 0.34, w: 0.07, h: 0.70, floors: 18, lit: 0.5  },
  { x: 0.40, w: 0.03, h: 0.45, floors: 11, lit: 0.35 },
  { x: 0.43, w: 0.06, h: 0.62, floors: 15, lit: 0.55 },
  { x: 0.48, w: 0.02, h: 0.25, floors: 6,  lit: 0.2  },
  { x: 0.50, w: 0.05, h: 0.80, floors: 20, lit: 0.6  },
  { x: 0.55, w: 0.03, h: 0.55, floors: 13, lit: 0.4  },
  { x: 0.57, w: 0.04, h: 0.40, floors: 10, lit: 0.3  },
  { x: 0.61, w: 0.06, h: 0.58, floors: 14, lit: 0.45 },
  { x: 0.66, w: 0.03, h: 0.32, floors: 8,  lit: 0.25 },
  { x: 0.69, w: 0.04, h: 0.48, floors: 12, lit: 0.4  },
  { x: 0.73, w: 0.02, h: 0.20, floors: 5,  lit: 0.15 },
  { x: 0.75, w: 0.05, h: 0.60, floors: 15, lit: 0.5  },
  { x: 0.79, w: 0.03, h: 0.35, floors: 9,  lit: 0.3  },
  { x: 0.82, w: 0.06, h: 0.45, floors: 11, lit: 0.35 },
  { x: 0.87, w: 0.03, h: 0.22, floors: 6,  lit: 0.2  },
  { x: 0.90, w: 0.04, h: 0.38, floors: 10, lit: 0.28 },
  { x: 0.94, w: 0.02, h: 0.16, floors: 4,  lit: 0.15 },
  { x: 0.96, w: 0.04, h: 0.30, floors: 7,  lit: 0.22 },
];

const SHAFTS = [
  { x1: 0.34, x2: 0.28, op: 0.04  },
  { x1: 0.50, x2: 0.44, op: 0.055 },
  { x1: 0.62, x2: 0.56, op: 0.035 },
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

// Pre-compute window lit states once
const WIN_STATES = BUILDINGS.map((b, bi) => {
  const rng = seededRandom(bi * 137 + 42);
  const cols = Math.max(2, Math.floor((b.w * 1000) / 12));
  return Array.from({ length: b.floors * cols }, () =>
    rng() < b.lit ? 1 : 0
  );
});

// Particles
const PARTICLES = Array.from({ length: 80 }, () => ({
  x:       Math.random(),
  y:       Math.random(),
  r:       Math.random() * 1.2 + 0.2,
  speed:   Math.random() * 0.00008 + 0.00003,
  opacity: Math.random() * 0.18 + 0.04,
  phase:   Math.random() * Math.PI * 2,
}));

export default function CanvasSkyline({ style = {}, className = "" }) {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      setIsMobile(window.innerWidth < 768);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      if (!w || !h) { rafRef.current = requestAnimationFrame(draw); return; }

      ctx.clearRect(0, 0, w, h);

      // Background
      ctx.fillStyle = "#080705";
      ctx.fillRect(0, 0, w, h);

      // Horizon ambient glow
      const grd = ctx.createLinearGradient(0, h * 0.35, 0, h * 0.68);
      grd.addColorStop(0,   "rgba(201,130,40,0.0)");
      grd.addColorStop(0.5, "rgba(201,130,40,0.025)");
      grd.addColorStop(1,   "rgba(8,7,5,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // Light shafts
      SHAFTS.forEach((s) => {
        const grad = ctx.createLinearGradient(s.x1 * w, 0, s.x2 * w, h);
        grad.addColorStop(0,   `rgba(201,162,80,${s.op})`);
        grad.addColorStop(0.5, `rgba(201,162,80,${s.op * 0.6})`);
        grad.addColorStop(1,   "rgba(201,162,80,0)");
        ctx.save();
        ctx.strokeStyle  = grad;
        ctx.lineWidth    = 40;
        ctx.globalAlpha  = 0.6 + 0.4 * Math.sin(t * 0.4 + s.x1 * 10);
        ctx.beginPath();
        ctx.moveTo(s.x1 * w, 0);
        ctx.lineTo(s.x2 * w, h);
        ctx.stroke();
        ctx.restore();
      });

      const groundY = h * 0.68;

      // Buildings (sorted back-to-front by height)
      const sorted = [...BUILDINGS]
        .map((b, i) => ({ ...b, _i: i }))
        .sort((a, b) => a.h - b.h);

      sorted.forEach((b) => {
        const bi  = b._i;
        const bx  = b.x * w;
        const bw  = Math.max(b.w * w, 18);
        const bh  = b.h * h * 0.65;
        const by  = groundY - bh;
        const dep = b.h;

        // Body
        ctx.fillStyle = `rgba(40,32,20,${0.12 + dep * 0.08})`;
        ctx.fillRect(bx, by, bw, bh);

        // Edge highlight
        ctx.strokeStyle = `rgba(120,95,55,${0.04 + dep * 0.06})`;
        ctx.lineWidth   = 0.5;
        ctx.strokeRect(bx, by, bw, bh);

        // Spire on tall buildings
        if (b.h > 0.55) {
          const spireH = bh * 0.08;
          const sx     = bx + bw / 2;
          ctx.strokeStyle = `rgba(180,145,70,${0.25 + dep * 0.15})`;
          ctx.lineWidth   = 1;
          ctx.beginPath();
          ctx.moveTo(sx, by);
          ctx.lineTo(sx, by - spireH);
          ctx.stroke();
          // Blinking light
          const bp = (t * 0.8 + bi * 1.7) % (Math.PI * 2);
          const ba = bp < Math.PI ? 0 : (Math.sin(bp) * 0.5 + 0.5) * 0.6;
          ctx.fillStyle = `rgba(255,80,80,${ba})`;
          ctx.beginPath();
          ctx.arc(sx, by - spireH - 2, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Windows
        const cols = Math.max(2, Math.floor(bw / 9));
        const rows = b.floors;
        const winW = Math.max(2, (bw - 6) / cols - 2);
        const winH = Math.max(2, (bh * 0.9) / rows - 3);
        const padX = (bw - cols * (winW + 2) + 2) / 2;
        const ws   = WIN_STATES[bi];

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const idx = row * cols + col;
            if (!ws[idx % ws.length]) continue;
            const wx = bx + padX + col * (winW + 2);
            const wy = by + bh * 0.05 + row * (winH + 3);
            const wm = 0.3 + ((idx * 17) % 100) / 250;
            const seed = ((bi * 13 + row * 29 + col * 47) % 100) / 100;
            const pulse = 0.4 + 0.6 * Math.sin(t * 1.5 + seed * 10);
            const baseAlpha = 0.12 + wm * 0.2;
            const alpha = baseAlpha * pulse;
            ctx.fillStyle = `rgba(255,${Math.floor(190 + wm * 40)},${Math.floor(80 + wm * 40)},${alpha})`;
            ctx.fillRect(wx, wy, winW, winH);
          }
        }
      });

      // Ground glow
      const gg = ctx.createLinearGradient(0, groundY - 20, 0, groundY + 40);
      gg.addColorStop(0,   "rgba(201,130,50,0.0)");
      gg.addColorStop(0.4, "rgba(201,130,50,0.04)");
      gg.addColorStop(1,   "rgba(8,7,5,0)");
      ctx.fillStyle = gg;
      ctx.fillRect(0, groundY - 20, w, 60);

      // Ground line
      ctx.strokeStyle = "rgba(180,140,70,0.08)";
      ctx.lineWidth   = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(w, groundY);
      ctx.stroke();

      // Isometric grid lines
      ctx.strokeStyle = "rgba(120,95,55,0.025)";
      ctx.lineWidth   = 0.5;
      for (let gx = 0; gx < w; gx += 60) {
        ctx.beginPath();
        ctx.moveTo(gx, groundY);
        ctx.lineTo(gx + w * 0.2, 0);
        ctx.stroke();
      }

      // Particles
      PARTICLES.forEach((p) => {
        const px    = ((p.x + t * p.speed * 0.5) % 1) * w;
        let   py    = ((p.y - t * p.speed) % 1) * h;
        if (py < 0) py += h;
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + p.phase);
        ctx.fillStyle = `rgba(201,162,80,${p.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Final Atmospheric Haze (Fog at the bottom to blend seamlessly)
      const haze = ctx.createLinearGradient(0, groundY - 100, 0, h);
      haze.addColorStop(0, "rgba(8,7,5,0)");
      haze.addColorStop(0.5, "rgba(25,20,15,0.4)");
      haze.addColorStop(1, "#080705");
      ctx.fillStyle = haze;
      ctx.fillRect(0, groundY - 100, w, h - (groundY - 100));

      t += 0.016;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className={className}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          ...style,
        }}
      />
      {/* SVG Grain Overlay */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`
          }}
        />
      )}
      {/* Vignette Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)'
        }}
      />
    </div>
  );
}
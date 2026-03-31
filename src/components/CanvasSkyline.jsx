import { useEffect, useRef } from 'react';

// --- Configuration Data ---
const buildings = [
  { x:.01, w:.04, h:.28, floors:7,  lit:.3  },
  { x:.05, w:.03, h:.18, floors:5,  lit:.25 },
  { x:.07, w:.05, h:.42, floors:10, lit:.35 },
  { x:.12, w:.03, h:.22, floors:6,  lit:.2  },
  { x:.15, w:.06, h:.55, floors:13, lit:.4  },
  { x:.20, w:.02, h:.15, floors:4,  lit:.15 },
  { x:.22, w:.04, h:.35, floors:9,  lit:.3  },
  { x:.27, w:.05, h:.50, floors:12, lit:.45 },
  { x:.31, w:.03, h:.30, floors:8,  lit:.25 },
  { x:.34, w:.07, h:.70, floors:18, lit:.5  },
  { x:.40, w:.03, h:.45, floors:11, lit:.35 },
  { x:.43, w:.06, h:.62, floors:15, lit:.55 },
  { x:.48, w:.02, h:.25, floors:6,  lit:.2  },
  { x:.50, w:.05, h:.80, floors:20, lit:.6  },
  { x:.55, w:.03, h:.55, floors:13, lit:.4  },
  { x:.57, w:.04, h:.40, floors:10, lit:.3  },
  { x:.61, w:.06, h:.58, floors:14, lit:.45 },
  { x:.66, w:.03, h:.32, floors:8,  lit:.25 },
  { x:.69, w:.04, h:.48, floors:12, lit:.4  },
  { x:.73, w:.02, h:.20, floors:5,  lit:.15 },
  { x:.75, w:.05, h:.60, floors:15, lit:.5  },
  { x:.79, w:.03, h:.35, floors:9,  lit:.3  },
  { x:.82, w:.06, h:.45, floors:11, lit:.35 },
  { x:.87, w:.03, h:.22, floors:6,  lit:.2  },
  { x:.90, w:.04, h:.38, floors:10, lit:.28 },
  { x:.94, w:.02, h:.16, floors:4,  lit:.15 },
  { x:.96, w:.04, h:.30, floors:7,  lit:.22 },
];

const shafts = [
  { x1:.34, x2:.28, op:.04 },
  { x1:.50, x2:.44, op:.055 },
  { x1:.62, x2:.56, op:.035 },
];

const particles = Array.from({ length: 60 }, () => ({
  x: Math.random(),
  y: Math.random(),
  r: Math.random() * 1.1 + 0.3,
  speed: Math.random() * 0.00006 + 0.00002,
  opacity: Math.random() * 0.15 + 0.05,
  phase: Math.random() * Math.PI * 2,
}));

// Procedural noise for flickering windows
const flickerSeed = (a, b, c) => {
  const v = Math.sin(a * 12.9898 + b * 78.233 + c * 437.11) * 43758.5453;
  return v - Math.floor(v);
};

export default function EnhancedSkyline() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const groundY = H * 0.72;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#080705'; // Deep background
      ctx.fillRect(0, 0, W, H);

      // 1. Light Shafts (V2 Style)
      shafts.forEach((s, i) => {
        const grad = ctx.createLinearGradient(s.x1 * W, 0, s.x2 * W, H);
        grad.addColorStop(0, `rgba(201,162,80,${s.op * 1.2})`);
        grad.addColorStop(0.5, `rgba(201,162,80,${s.op * 0.4})`);
        grad.addColorStop(1, 'rgba(201,162,80,0)');
        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 50 + i * 10;
        ctx.globalAlpha = 0.7 + 0.3 * Math.sin(t * 0.5 + i);
        ctx.beginPath();
        ctx.moveTo(s.x1 * W, 0);
        ctx.lineTo(s.x2 * W, H);
        ctx.stroke();
        ctx.restore();
      });

      // 2. Perspective Grid (V1 Style)
      ctx.strokeStyle = 'rgba(120,95,55,0.03)';
      ctx.lineWidth = 0.5;
      for (let gx = -W * 0.2; gx < W * 1.2; gx += 70) {
        ctx.beginPath();
        ctx.moveTo(gx, groundY);
        ctx.lineTo(gx + (gx - W/2) * 0.5, 0);
        ctx.stroke();
      }

      // 3. Buildings
      buildings.forEach((b, bi) => {
        const bx = b.x * W;
        const bw = Math.max(b.w * W, 20);
        const bh = b.h * H * 0.6;
        const by = groundY - bh;

        // Building Body Gradient
        const bodyGrad = ctx.createLinearGradient(bx, by, bx, by + bh);
        bodyGrad.addColorStop(0, `rgba(45,38,28, ${0.15 + b.h * 0.1})`);
        bodyGrad.addColorStop(1, 'rgba(15,12,8, 0.6)');
        ctx.fillStyle = bodyGrad;
        ctx.fillRect(bx, by, bw, bh);

        // Edge Highlight (V2 Top Glow)
        ctx.fillStyle = 'rgba(201,162,80,0.06)';
        ctx.fillRect(bx, by, bw, 1);

        // Spire & Blinking Red Antenna (V1 Style)
        if (b.h > 0.45) {
          const spireH = bh * 0.1;
          const spireX = bx + bw / 2;
          ctx.strokeStyle = 'rgba(180,145,70,0.2)';
          ctx.beginPath();
          ctx.moveTo(spireX, by);
          ctx.lineTo(spireX, by - spireH);
          ctx.stroke();
          
          const blink = (Math.sin(t * 2.5 + bi) > 0.8) ? 0.7 : 0.1;
          ctx.fillStyle = `rgba(255,80,80,${blink})`;
          ctx.beginPath();
          ctx.arc(spireX, by - spireH - 2, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // 4. Pulsing Windows (V2 Flicker Math)
        const rows = b.floors;
        const cols = Math.max(2, Math.floor(bw / 12));
        const winW = (bw * 0.7) / cols;
        const winH = (bh * 0.8) / rows;
        const padX = (bw - (cols * winW)) / 2;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const seed = flickerSeed(bi, r, c);
            // Threshold for window being "on"
            if (seed < b.lit) {
              const pulse = 0.4 + 0.6 * Math.sin(t * 1.5 + seed * 10);
              const wx = bx + padX + c * winW + winW * 0.2;
              const wy = by + (bh * 0.1) + r * winH + winH * 0.2;
              
              ctx.fillStyle = `rgba(201,162,80,${0.1 + pulse * 0.3})`;
              ctx.fillRect(wx, wy, winW * 0.6, winH * 0.6);
            }
          }
        }
      });

      // 5. Particles (Ambient Dust)
      particles.forEach(p => {
        const px = ((p.x + t * p.speed) % 1) * W;
        const py = ((p.y - t * p.speed + 1) % 1) * H;
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.2 + p.phase);
        ctx.fillStyle = `rgba(201,162,80,${p.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Final Atmospheric Haze (V2 Internal)
      const haze = ctx.createLinearGradient(0, groundY - 100, 0, H);
      haze.addColorStop(0, 'rgba(8,7,5,0)');
      haze.addColorStop(0.5, 'rgba(25,20,15,0.4)');
      haze.addColorStop(1, '#080705');
      ctx.fillStyle = haze;
      ctx.fillRect(0, groundY - 100, W, H - (groundY - 100));

      t += 0.016;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} style={styles.canvas} />
      
      {/* SVG Grain Overlay from V1 */}
      <div style={styles.grain} />
      
      {/* Vignette Overlay from V1 */}
      <div style={styles.vignette} />

      {/* Your Version 2 Content/UI goes here */}
      <div style={styles.content}>
        {/* Place children or boilerplate text here */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    inset: 0,
    backgroundColor: '#080705',
    overflow: 'hidden',
    zIndex: 0,
  },
  canvas: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  grain: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
    opacity: 0.04,
    pointerEvents: 'none',
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)',
    pointerEvents: 'none',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    height: '100%',
    pointerEvents: 'none', // Allows clicking through to canvas if needed
  }
};
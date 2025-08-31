'use client';
import { useEffect, useRef } from 'react';

export default function Roundel({ text = 'The Best of My Work •', size = 120, speed = 6 }) {
  const ref = useRef(null);
  useEffect(() => {
    let r = 0, el = ref.current;
    if (!el) return;
    const id = setInterval(() => {
      r = (r + speed) % 360;
      el.style.transform = `rotate(${r}deg)`;
    }, 50);
    return () => clearInterval(id);
  }, [speed]);
  const chars = text.split('');
  return (
    <div className="roundel relative" style={{ width: size, height: size }}>
      <div ref={ref} className="absolute inset-0 will-change-transform">
        {chars.map((c, i) => {
          const angle = (360 / chars.length) * i;
          const rad = (angle * Math.PI) / 180;
          const radius = size / 2 - 8;
          const x = radius * Math.cos(rad) + size / 2;
          const y = radius * Math.sin(rad) + size / 2;
          return (
            <span
              key={i}
              className="absolute text-xs"
              style={{ left: x, top: y, transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
            >
              {c}
            </span>
          );
        })}
      </div>
    </div>
  );
}
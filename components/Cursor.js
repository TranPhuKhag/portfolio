'use client';
import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const dot = document.createElement('div');
    const outline = document.createElement('div');
    dot.className = 'cursor-dot';
    outline.className = 'cursor-dot-outline';
    document.body.appendChild(dot);
    document.body.appendChild(outline);

    let x=0, y=0, ox=0, oy=0;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      dot.style.left = x+'px'; dot.style.top = y+'px';
    };
    const raf = () => {
      ox += (x-ox)*0.15; oy += (y-oy)*0.15;
      outline.style.left = ox+'px'; outline.style.top = oy+'px';
      requestAnimationFrame(raf);
    };
    window.addEventListener('mousemove', move);
    requestAnimationFrame(raf);
    return () => {
      window.removeEventListener('mousemove', move);
      dot.remove(); outline.remove();
    };
  }, []);
  return null;
}
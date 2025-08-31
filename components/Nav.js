'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="container-narrow py-5 flex items-center justify-between">
        <Link href="/" className="font-display text-xl text-awGold">khang.dev</Link>
        <nav className="flex gap-2 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1 rounded-full transition ${
                pathname === l.href
                  ? 'bg-awGold text-black'
                  : 'text-awGold hover:bg-white/5 border border-white/10'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
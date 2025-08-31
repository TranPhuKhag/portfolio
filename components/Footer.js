export default function Footer() {
  return (
    <footer className="py-12 text-center text-sm text-awGold/80 border-t border-white/10">
      © {new Date().getFullYear()} Tran Phu Khang — Built with Next.js, Tailwind, Framer Motion.
    </footer>
  );
}
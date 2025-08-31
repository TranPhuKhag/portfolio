export default function TimelineItem({ title, subtitle, period, children }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-ink"></div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-slate-600">{subtitle} • {period}</p>
      <div className="mt-2 text-sm">{children}</div>
    </div>
  );
}
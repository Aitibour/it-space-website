interface Props {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

export function PageHero({ title, subtitle, breadcrumb }: Props) {
  return (
    <section
      className="relative pt-32 pb-20 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D1B3E 0%, #0f2456 60%, #1a3a8a 100%)',
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,180,255,0.8) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {breadcrumb && (
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
            {breadcrumb}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

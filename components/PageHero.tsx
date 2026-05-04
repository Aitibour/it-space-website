interface Props {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  bgImage?: string;
}

export function PageHero({ title, subtitle, breadcrumb, bgImage }: Props) {
  return (
    <section className="relative pt-36 pb-24 px-4 overflow-hidden">
      {/* Background image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}
      {/* Dark overlay — always shown, stronger when no image */}
      <div
        className="absolute inset-0"
        style={{
          background: bgImage
            ? 'linear-gradient(135deg, rgba(13,27,62,0.92) 0%, rgba(15,36,86,0.80) 60%, rgba(26,58,138,0.70) 100%)'
            : 'linear-gradient(135deg, #0D1B3E 0%, #0f2456 60%, #1a3a8a 100%)',
        }}
      />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
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

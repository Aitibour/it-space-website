import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="fr">
      <body className="antialiased bg-[#0D1B3E] flex items-center justify-center min-h-screen font-sans">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(rgba(0,180,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.08] blur-[120px]" style={{ background: 'radial-gradient(circle, #00B4FF, #1E40AF)' }} />

        <div className="relative z-10 text-center px-6">
          {/* Large 404 */}
          <div
            className="text-[180px] font-black leading-none mb-4 select-none"
            style={{
              background: 'linear-gradient(135deg, #00B4FF 0%, #1E40AF 50%, #00B4FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.25,
            }}
          >
            404
          </div>

          <div className="-mt-16">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Page Not Found</h1>
            <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: '#00B4FF', color: '#0D1B3E', boxShadow: '0 8px 32px rgba(0,180,255,0.35)' }}
              >
                Go Home
              </Link>
              <Link
                href="/fr/contact"
                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Quick links */}
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
              {[
                { label: 'Services', href: '/fr/services' },
                { label: 'About', href: '/fr/about' },
                { label: 'Cybersecurity', href: '/fr/services/security' },
                { label: 'Cloud', href: '/fr/services/cloud' },
              ].map(({ label, href }) => (
                <Link key={href} href={href} className="text-slate-500 hover:text-[#00B4FF] transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

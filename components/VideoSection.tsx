'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface Props {
  videoId?: string;
  poster?: string;
  title?: string;
  subtitle?: string;
}

export function VideoSection({
  videoId = 'LXb3EKWsInQ',
  poster = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop',
  title = 'Our Story',
  subtitle = 'See how IT Space is driving digital transformation across North Africa',
}: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 group">
      {playing ? (
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="relative aspect-video bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url('${poster}')` }}
          onClick={() => setPlaying(true)}
          role="button"
          tabIndex={0}
          aria-label={`Play video: ${title}`}
          onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/70 via-[#0D1B3E]/20 to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full bg-[#00B4FF]/30 animate-ping scale-150" />
              <div className="absolute inset-0 rounded-full bg-[#00B4FF]/20 animate-ping scale-125" style={{ animationDelay: '0.3s' }} />
              {/* Play button */}
              <div className="relative w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-all duration-200 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-cyan-500/30 group-hover:shadow-2xl">
                <Play size={30} className="text-[#0D1B3E] ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          {/* Bottom caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-1">{title}</p>
            <p className="text-white font-bold text-lg leading-snug">{subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}

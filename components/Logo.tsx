interface Props {
  white?: boolean;
  compact?: boolean;
}

export function Logo({ white = false, compact = false }: Props) {
  const navy = white ? '#ffffff' : '#0D1B3E';
  const separator = white ? '#93C5FD' : '#3B82F6';
  const sub = white ? '#93C5FD' : '#1E3A8A';
  const iconSize = compact ? 40 : 52;

  return (
    <div className="flex items-center gap-3">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4FF" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="logo-arrow1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60C8FF" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="logo-arrow2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4FF" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <radialGradient id="logo-inner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EBF8FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#BFDBFE" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Outer orbit ring */}
        <circle cx="50" cy="50" r="46" stroke="url(#logo-ring)" strokeWidth="3.5" fill="none" />

        {/* Node dots on the ring */}
        <circle cx="50" cy="4" r="5.5" fill={white ? '#60C8FF' : '#0D1B3E'} />
        <circle cx="86" cy="77" r="5" fill={white ? '#60C8FF' : '#0D1B3E'} />

        {/* Inner filled circle */}
        <circle cx="50" cy="50" r="38" fill="url(#logo-inner)" />

        {/* First chevron (lighter, left) */}
        <path
          d="M18 28 L40 50 L18 72 L28 72 L50 50 L28 28 Z"
          fill="url(#logo-arrow1)"
          opacity="0.75"
        />
        {/* Second chevron (more prominent, right) */}
        <path
          d="M36 28 L58 50 L36 72 L46 72 L68 50 L46 28 Z"
          fill="url(#logo-arrow2)"
        />
      </svg>

      {!compact && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1 leading-none">
            <span
              className="font-black text-[22px] tracking-tight"
              style={{ color: navy }}
            >
              IT
            </span>
            <span
              className="font-thin text-[22px]"
              style={{ color: separator }}
            >
              |
            </span>
            <span className="font-light text-[22px] bg-gradient-to-r from-[#00B4FF] to-[#2563EB] bg-clip-text text-transparent">
              Space
            </span>
          </div>
          <div
            className="flex items-center gap-1 mt-1"
            style={{ color: sub }}
          >
            <div className="h-px w-3 bg-current opacity-70" />
            <span className="text-[7px] tracking-[0.18em] uppercase font-semibold whitespace-nowrap">
              Solutions &amp; Consulting
            </span>
            <div className="h-px w-3 bg-current opacity-70" />
          </div>
        </div>
      )}
    </div>
  );
}

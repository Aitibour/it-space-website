export function Logo({ white = false }: { white?: boolean }) {
  const textColor = white ? 'text-white' : 'text-[#1E40AF]';
  const subColor = white ? 'text-blue-200' : 'text-slate-400';

  return (
    <div className="flex items-center gap-2.5">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="#1E40AF" />
        <path d="M8 18L13 12L18 18L13 24L8 18Z" fill="white" />
        <path d="M18 18L23 12L28 18L23 24L18 18Z" fill="#93C5FD" />
      </svg>
      <div>
        <div className={`font-bold text-lg leading-tight ${textColor}`}>IT Space</div>
        <div className={`text-[10px] font-medium leading-tight tracking-wider uppercase ${subColor}`}>
          Tanger
        </div>
      </div>
    </div>
  );
}

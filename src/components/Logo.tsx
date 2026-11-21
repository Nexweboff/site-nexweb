export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
      <defs>
        <linearGradient id="nw-g" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" /><stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#080B12" stroke="#1e293b" />
      <path d="M18 47V17l28 30V17" fill="none" stroke="url(#nw-g)" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="46" cy="17" r="4.2" fill="#fff" />
    </svg>
  );
}

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="font-display text-xl font-extrabold tracking-tight text-white">
        Nex<span className="text-[#3B82F6]">Web</span>
      </span>
    </span>
  );
}

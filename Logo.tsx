export const Logo = ({ size = 48, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* C - outer structure */}
      <path
        d="M52 12H16C13.79 12 12 13.79 12 16V48C12 50.21 13.79 52 16 52H52"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        fill="none"
      />
      {/* E - inner module lines */}
      <line x1="22" y1="22" x2="46" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="22" y1="32" x2="40" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
      <line x1="22" y1="42" x2="46" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
      {/* Module grid dots */}
      <rect x="48" y="20" width="4" height="4" fill="currentColor" />
      <rect x="48" y="30" width="4" height="4" fill="currentColor" />
      <rect x="48" y="40" width="4" height="4" fill="currentColor" />
    </svg>
  );
};

export const LogoFull = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={36} />
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-wide">CALVIN EDGE</span>
        <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground">PROPERTY</span>
      </div>
    </div>
  );
};

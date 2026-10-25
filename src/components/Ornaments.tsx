type OrnamentProps = {
  className?: string;
};

export function Kolam({ className = "" }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      <path d="M12 3v18M3 12h18" opacity="0.35" />
      <circle cx="12" cy="3.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="20.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="3.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArchLines({ className = "" }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 620 820"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      preserveAspectRatio="xMidYMax meet"
    >
      <path d="M30 820V310a280 280 0 0 1 560 0v510" opacity="0.35" />
      <path d="M72 820V318a238 238 0 0 1 476 0v502" opacity="0.3" />
      <path d="M114 820V326a196 196 0 0 1 392 0v494" opacity="0.24" />
      <path d="M156 820V334a154 154 0 0 1 308 0v486" opacity="0.18" />
      <path d="M310 26v28" opacity="0.5" />
      <circle cx="310" cy="70" r="3.5" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  );
}

export function CornerFlourish({ className = "" }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M4 116V46C4 22.8 22.8 4 46 4h70" opacity="0.6" />
      <path d="M18 116V50c0-17.7 14.3-32 32-32h66" opacity="0.35" />
      <circle cx="46" cy="46" r="2.2" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  );
}

export function RotatingSeal({ className = "" }: OrnamentProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow text-gold">
        <defs>
          <path
            id="seal-circle"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
            fill="none"
          />
        </defs>
        <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeOpacity="0.35" />
        <circle cx="60" cy="60" r="36" fill="none" stroke="currentColor" strokeOpacity="0.25" />
        <text
          fill="currentColor"
          fontSize="7.1"
          letterSpacing="2.6"
          fontFamily="Manrope, sans-serif"
        >
          <textPath href="#seal-circle" startOffset="0%">
            SRI NARTHAKI · KUCHIPUDI · CHENNAI ·
          </textPath>
        </text>
        <path
          d="M60 54v12M54 60h12"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
        <circle cx="60" cy="60" r="1.7" fill="currentColor" />
      </svg>
    </div>
  );
}

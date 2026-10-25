const phrases = [
  "Abhinaya",
  "Nritta",
  "Nritya",
  "Natya",
  "Bhakti",
  "Chennai",
  "Kuchipudi",
];

function Group() {
  return (
    <span className="flex shrink-0 items-center">
      {phrases.map((phrase) => (
        <span key={phrase} className="flex items-center">
          <span className="eyebrow px-6 text-[0.58rem] tracking-[0.34em] text-ivory/70 sm:px-8">
            {phrase}
          </span>
          <span className="h-1 w-1 rounded-full bg-gold/70" aria-hidden="true" />
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee-track relative overflow-hidden border-y border-gold/20 bg-wine py-3.5 text-ivory"
    >
      <div className="flex w-max animate-marquee">
        <Group />
        <Group />
        <Group />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-wine to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-wine to-transparent" />
    </div>
  );
}

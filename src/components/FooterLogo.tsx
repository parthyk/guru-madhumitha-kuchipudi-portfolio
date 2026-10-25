export function FooterLogo() {
  return (
    <div className="flex items-center gap-4">
      <span className="relative grid h-[6.5rem] w-[6.5rem] shrink-0 place-items-center border border-gold/40">
        <span className="absolute inset-1.5 border border-gold/20" aria-hidden="true" />
        <span className="font-serif text-3xl italic leading-none text-gold">SN</span>
      </span>
      <span className="flex flex-col">
        <span className="font-serif text-2xl leading-none">Sri Narthaki</span>
        <span className="eyebrow mt-1.5 text-[0.5rem] text-muted">
          Kuchipudi Natyalaya
        </span>
      </span>
    </div>
  );
}

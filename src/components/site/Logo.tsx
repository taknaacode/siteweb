const logoAsset = "/assets/taknaacode-logo.png";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset}
      alt="TaknaaCode"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

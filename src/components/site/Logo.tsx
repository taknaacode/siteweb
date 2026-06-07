import logoAsset from "@/assets/taknaacode-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="TaknaaCode — circuit-board eagle logo"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2 rounded-full border border-teal/30 bg-background/50 px-3 py-2 backdrop-blur-md">
      <Globe className="h-4 w-4 text-teal" />

      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="cursor-pointer bg-transparent text-xs font-medium uppercase tracking-wider text-foreground outline-none"
      >
        <option className="bg-surface text-foreground" value="en">
          🇺🇸 English
        </option>
        <option className="bg-surface text-foreground" value="fr">
          🇫🇷 Français
        </option>
        <option className="bg-surface text-foreground" value="ar">
          🇦🇪 العربية
        </option>
      </select>
    </div>
  );
}


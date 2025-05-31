"use client";

import { useRouter, usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n";
import { Languages } from "lucide-react";

interface Props {
  currentLocale: Locale;
}

export function LanguageToggle({ currentLocale }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "ja" : "en";

    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(/^\/(en|ja)/, "") || "/";
    const newPath = `/${newLocale}${pathWithoutLocale}`;

    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 p-2 transition-colors border-theme-accent rounded-lg"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5" style={{ color: "var(--foreground)" }} />
    </button>
  );
}

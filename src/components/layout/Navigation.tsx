"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface Props {
  locale: Locale;
}

export function Navigation({ locale }: Props) {
  const pathname = usePathname();

  // Check if current page is a blog post page
  const isBlogPostPage =
    pathname.includes("/blog/") && pathname.split("/").length >= 4;

  return (
    <nav className="border-b" style={{ background: "var(--background)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link
              href={`/${locale}`}
              className="text-xl font-bold text-theme-primary transition-colors"
            >
              Rai
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href={`/${locale}`} className="transition-colors">
                Home
              </Link>
              <Link href={`/${locale}/blog`} className="transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {!isBlogPostPage && <LanguageToggle currentLocale={locale} />}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

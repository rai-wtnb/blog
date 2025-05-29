'use client';

import Link from 'next/link';
import { Locale, getTranslations } from '@/lib/i18n';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface Props {
  locale: Locale;
}

export function Navigation({ locale }: Props) {
  const t = getTranslations(locale);

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link
              href={`/${locale}`}
              className="text-xl font-bold text-theme-primary dark:text-white hover:text-theme-accent-gold transition-colors"
            >
              Blog
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                href={`/${locale}`}
                className="text-gray-700 dark:text-gray-300 hover:text-theme-accent-gold transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="text-gray-700 dark:text-gray-300 hover:text-theme-accent-gold transition-colors"
              >
                {t.nav.blog}
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <LanguageToggle currentLocale={locale} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
} 
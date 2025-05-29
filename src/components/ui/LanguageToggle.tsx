'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/lib/i18n';
import { Languages } from 'lucide-react';

interface Props {
  currentLocale: Locale;
}

export function LanguageToggle({ currentLocale }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'ja' : 'en';
    
    // Remove current locale from pathname and add new one
    const pathWithoutLocale = pathname.replace(/^\/(en|ja)/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle language"
    >
      <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {currentLocale === 'en' ? '日本語' : 'English'}
      </span>
    </button>
  );
} 
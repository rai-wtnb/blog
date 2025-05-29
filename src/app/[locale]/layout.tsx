import { Locale, locales } from '@/lib/i18n';
import { Navigation } from '@/components/layout/Navigation';
import { notFound } from 'next/navigation';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation locale={locale} />
      <main>{children}</main>
    </div>
  );
} 
import { SocialLinks as SocialLinksType } from '@/types/blog';
import { Locale, getTranslations } from '@/lib/i18n';
import { Linkedin, Twitter, Instagram, Github, Mail } from 'lucide-react';

interface Props {
  social: SocialLinksType;
  locale: Locale;
}

export function SocialLinks({ social, locale }: Props) {
  const t = getTranslations(locale);

  const socialItems = [
    {
      name: t.social.linkedin,
      url: social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: t.social.twitter,
      url: social.twitter,
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
    {
      name: t.social.instagram,
      url: social.instagram,
      icon: Instagram,
      color: 'hover:text-pink-600',
    },
    {
      name: 'GitHub',
      url: social.github,
      icon: Github,
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
    },
    {
      name: 'Email',
      url: social.email ? `mailto:${social.email}` : undefined,
      icon: Mail,
      color: 'hover:text-red-600',
    },
  ];

  return (
    <div className="flex space-x-4">
      {socialItems
        .filter((item) => item.url)
        .map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.url!}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 dark:text-gray-400 transition-colors ${item.color}`}
              aria-label={item.name}
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
    </div>
  );
} 
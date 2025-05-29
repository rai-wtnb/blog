import { Locale } from '@/lib/i18n';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  language: Locale;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  language: Locale;
  tags: string[];
  featured?: boolean;
  coverImage?: string;
  author: {
    name: string;
    image?: string;
    bio?: string;
  };
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  github?: string;
  email?: string;
}

export interface Author {
  name: string;
  bio: {
    en: string;
    ja: string;
  };
  image?: string;
  social: SocialLinks;
} 
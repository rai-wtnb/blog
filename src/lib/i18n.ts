export const defaultLocale = 'en' as const;
export const locales = ['en', 'ja'] as const;

export type Locale = typeof locales[number];

export const translations = {
  en: {
    nav: {
      home: 'Home',
      blog: 'Blog',
      toggleLanguage: 'Language',
      toggleTheme: 'Theme',
    },
    home: {
      introduction: 'Welcome to my blog',
      recentPosts: 'Recent Posts',
      readMore: 'Read More',
      allPosts: 'View All Posts',
    },
    blog: {
      backToBlog: 'Back to Blog',
      readingTime: 'min read',
      publishedOn: 'Published on',
      tags: 'Tags',
      relatedPosts: 'Related Posts',
    },
    social: {
      linkedin: 'LinkedIn',
      twitter: 'X (Twitter)',
      instagram: 'Instagram',
    },
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      notFound: 'Page not found',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      blog: 'ブログ',
      toggleLanguage: '言語',
      toggleTheme: 'テーマ',
    },
    home: {
      introduction: 'ブログへようこそ',
      recentPosts: '最新の投稿',
      readMore: '続きを読む',
      allPosts: '全ての投稿を見る',
    },
    blog: {
      backToBlog: 'ブログに戻る',
      readingTime: '分で読める',
      publishedOn: '公開日',
      tags: 'タグ',
      relatedPosts: '関連記事',
    },
    social: {
      linkedin: 'LinkedIn',
      twitter: 'X (Twitter)',
      instagram: 'Instagram',
    },
    common: {
      loading: '読み込み中...',
      error: 'エラーが発生しました',
      notFound: 'ページが見つかりません',
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
} 
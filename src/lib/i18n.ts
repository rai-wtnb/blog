export const defaultLocale = "en" as const;
export const locales = ["en", "ja"] as const;

export type Locale = (typeof locales)[number];

export const translations = {
  en: {
    home: {
      recentPosts: "Recent Posts",
      readMore: "Read More",
      allPosts: "View All Posts",
    },
    blog: {
      backToBlog: "Back to Blog",
      publishedOn: "Published on",
      tags: "Tags",
      relatedPosts: "Related Posts",
    },
    social: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
    },
    common: {
      loading: "Loading...",
      error: "Something went wrong",
      notFound: "Page not found",
    },
  },
  ja: {
    home: {
      recentPosts: "最新の投稿",
      readMore: "続きを読む",
      allPosts: "全ての投稿を見る",
    },
    blog: {
      backToBlog: "ブログに戻る",
      publishedOn: "公開日",
      tags: "タグ",
      relatedPosts: "関連記事",
    },
    social: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
    },
    common: {
      loading: "読み込み中...",
      error: "エラーが発生しました",
      notFound: "ページが見つかりません",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

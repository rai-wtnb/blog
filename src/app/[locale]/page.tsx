import { Locale, getTranslations } from "@/lib/i18n";
import { getRecentPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import Link from "next/link";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const recentPosts = getRecentPosts(locale, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-foreground">
            {t.home.recentPosts}
          </h2>
          <Link
            href={`/${locale}/blog`}
            className="text-theme-accent-gold hover:text-theme-primary transition-colors font-medium"
          >
            {t.home.allPosts} →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {recentPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}

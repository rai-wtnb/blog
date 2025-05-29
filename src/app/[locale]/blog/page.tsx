import { Locale, getTranslations } from '@/lib/i18n';
import { getAllPosts } from '@/lib/blog';
import { BlogPostCard } from '@/components/ui/BlogPostCard';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const posts = getAllPosts(locale);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t.nav.blog}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {locale === 'en' 
            ? 'All blog posts and articles' 
            : 'すべてのブログ投稿と記事'
          }
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
            {locale === 'en' ? 'No posts yet' : '投稿がありません'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {locale === 'en' 
              ? 'Blog posts will appear here once they are published.' 
              : 'ブログ投稿が公開されるとここに表示されます。'
            }
          </p>
        </div>
      )}
    </div>
  );
} 
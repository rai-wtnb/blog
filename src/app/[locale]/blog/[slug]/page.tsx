import { Locale, getTranslations } from '@/lib/i18n';
import { getPostBySlug, getAllSlugs, formatDate } from '@/lib/blog';
import { MDXRenderer } from '@/components/ui/MDXRenderer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Calendar, Tag, ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ locale: Locale; slug: string }>;
}

export function generateStaticParams() {
  const paths = [];
  
  // Generate paths for all locales and slugs
  const locales: Locale[] = ['en', 'ja'];
  for (const locale of locales) {
    const slugs = getAllSlugs(locale);
    for (const slug of slugs) {
      paths.push({ locale, slug });
    }
  }
  
  return paths;
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = getTranslations(locale);
  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back to blog link */}
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center text-theme-accent-gold hover:text-theme-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t.blog.backToBlog}
      </Link>

      {/* Article header */}
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{t.blog.publishedOn} {formatDate(post.publishedAt, locale)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{Math.max(1, Math.round(post.readingTime))} {t.blog.readingTime}</span>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="flex items-center flex-wrap gap-2 mb-8">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">{t.blog.tags}:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-theme-accent-beige dark:bg-gray-700 text-theme-primary dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRenderer source={post.content} />
        </div>

        {/* Author info */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {post.author.name}
              </h3>
              {post.author.bio && (
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {post.author.bio}
                </p>
              )}
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
} 
import { Locale, getTranslations } from "@/lib/i18n";
import { getPostBySlug, getAllSlugs, formatDate } from "@/lib/blog";
import { MDXRenderer } from "@/components/ui/MDXRenderer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Tag, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ locale: Locale; slug: string }>;
}

export function generateStaticParams() {
  const paths = [];

  // Generate paths for all locales and slugs
  const locales: Locale[] = ["en", "ja"];
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
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center text-theme-accent-gold hover:text-theme-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t.blog.backToBlog}
      </Link>

      <article>
        <header className="mb-8">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center">
              <Calendar
                className="w-4 h-4 mr-2"
                style={{ color: "var(--foreground)" }}
              />
              <span>
                {t.blog.publishedOn} {formatDate(post.publishedAt, locale)}
              </span>
            </div>
          </div>

          {post.tags.length > 0 && (
            <div className="flex items-center flex-wrap gap-2 mb-8">
              <Tag className="w-4 h-4" />
              <span className="text-sm mr-2">{t.blog.tags}:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-s rounded-full"
                  style={{
                    background: "var(--theme-accent)",
                    color: "var(--foreground-white)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <MDXRenderer source={post.content} />
      </article>
    </div>
  );
}

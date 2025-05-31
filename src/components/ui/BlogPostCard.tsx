import Link from "next/link";
import Image from "next/image";
import { BlogPostMeta } from "@/types/blog";
import { Locale, getTranslations } from "@/lib/i18n";
import { Tag } from "lucide-react";

interface Props {
  post: BlogPostMeta;
  locale: Locale;
}

export function BlogPostCard({ post, locale }: Props) {
  const t = getTranslations(locale);

  return (
    <article
      className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      style={{ background: "var(--background)" }}
    >
      {post.coverImage && (
        <div className="relative h-48 w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
          <Link
            href={`/${locale}/blog/${post.slug}`}
            className="hover:text-theme-accent-gold transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mb-4 line-clamp-3">{post.excerpt}</p>

        {post.tags.length > 0 && (
          <div className="flex items-center flex-wrap gap-2">
            <Tag className="w-4 h-4" />
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full"
                style={{
                  background: "var(--theme-accent)",
                  color: "var(--white)",
                }}
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 4 && (
              <span className="text-xs text-gray-500">
                +{post.tags.length - 4}
              </span>
            )}
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-gray-200">
          <Link
            href={`/${locale}/blog/${post.slug}`}
            className="inline-flex items-center text-theme-accent-gold hover:text-theme-primary transition-colors font-medium"
          >
            {t.home.readMore}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

import { Locale } from "@/lib/i18n";
import { getAllPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/ui/BlogPostCard";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const posts = getAllPosts(locale);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: "var(--foreground)" }}
        >
          Blog
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} locale={locale} />
        ))}
      </div>
    </div>
  );
}

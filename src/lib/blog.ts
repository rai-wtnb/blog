import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogPostMeta } from "@/types/blog";
import { Locale } from "@/lib/i18n";

const contentDirectory = path.join(process.cwd(), "src/content/blog");

export function getContentPath(locale: Locale, slug: string): string {
  return path.join(contentDirectory, locale, `${slug}.md`);
}

export function getAllSlugs(locale: Locale): string[] {
  const localeDirectory = path.join(contentDirectory, locale);

  if (!fs.existsSync(localeDirectory)) {
    return [];
  }

  const files = fs.readdirSync(localeDirectory);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string, locale: Locale): BlogPost | null {
  try {
    const fullPath = getContentPath(locale, slug);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      content,
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt,
      language: locale,
      tags: data.tags || [],
      featured: data.featured || false,
      coverImage: data.coverImage,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts(locale: Locale): BlogPostMeta[] {
  const slugs = getAllSlugs(locale);

  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug, locale);
      if (!post) return null;

      // Return metadata without content
      const { content: _content, ...meta } = post;
      return meta as BlogPostMeta;
    })
    .filter((post): post is BlogPostMeta => post !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return posts;
}

export function getFeaturedPosts(
  locale: Locale,
  limit: number = 4
): BlogPostMeta[] {
  const allPosts = getAllPosts(locale);
  return allPosts.filter((post) => post.featured).slice(0, limit);
}

export function getRecentPosts(
  locale: Locale,
  limit: number = 4
): BlogPostMeta[] {
  const allPosts = getAllPosts(locale);
  return allPosts.slice(0, limit);
}

export function getPostsByTag(tag: string, locale: Locale): BlogPostMeta[] {
  const allPosts = getAllPosts(locale);
  return allPosts.filter((post) => post.tags.includes(tag));
}

export function getAllTags(locale: Locale): string[] {
  const allPosts = getAllPosts(locale);
  const tags = new Set<string>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

export function formatDate(dateString: string, locale: Locale): string {
  const date = new Date(dateString);

  if (locale === "ja") {
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

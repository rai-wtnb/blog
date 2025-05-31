import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

interface Props {
  source: string;
}

// Custom components for MDX
const components = {
  img: (props: ComponentPropsWithoutRef<"img">) => (
    <div className="relative w-full h-64 my-8">
      <Image
        fill
        className="object-cover rounded-lg"
        alt={props.alt || ""}
        src={typeof props.src === "string" ? props.src : ""}
      />
    </div>
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <Link
      {...props}
      href={props.href || ""}
      className="text-theme-accent-gold hover:text-theme-primary underline transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      style={{ color: "var(--theme-accent)" }}
    />
  ),
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-3xl font-bold mb-6 mt-8"
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-2xl font-semibold mb-4 mt-6"
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-xl font-medium mb-3 mt-4"
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      className="mb-4 leading-relaxed"
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="list-disc list-inside mb-4 space-y-2"
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="list-decimal list-inside mb-4 space-y-2"
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-theme-accent-gold pl-4 italic my-6"
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono"
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6"
      style={{ color: "var(--foreground)" }}
      {...props}
    />
  ),
};

export function MDXRenderer({ source }: Props) {
  return (
    <div className="prose prose-lg max-w-none text-black dark:text-white">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

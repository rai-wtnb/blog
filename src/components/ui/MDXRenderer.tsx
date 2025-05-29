import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

interface Props {
  source: string;
}

// Custom components for MDX
const components = {
  img: (props: ComponentPropsWithoutRef<'img'>) => (
    <div className="relative w-full h-64 my-8">
      <Image
        fill
        className="object-cover rounded-lg"
        alt={props.alt || ''}
        src={typeof props.src === 'string' ? props.src : ''}
      />
    </div>
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <Link
      {...props}
      href={props.href || ''}
      className="text-theme-accent-gold hover:text-theme-primary underline transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    />
  ),
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-8" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-6" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 mt-4" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-4 border-theme-accent-gold pl-4 italic text-gray-600 dark:text-gray-400 my-6" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6" {...props} />
  ),
};

export function MDXRenderer({ source }: Props) {
  return (
    <div className="prose prose-lg max-w-none" style={{ color: "var(--foreground)" }}>
      <MDXRemote source={source} components={components} />
    </div>
  );
} 
# Bilingual Blog with Next.js

A modern, bilingual blog built with Next.js, TypeScript, and Tailwind CSS. Features dark mode, internationalization (i18n), and MDX support for rich content.

## Features

- 🌍 **Bilingual Support**: Japanese and English with separate URL slugs
- 🌙 **Dark Mode**: Automatic dark/light mode switching
- 📝 **MDX Support**: Rich markdown content with React components
- 🎨 **Custom Design**: Modern UI with custom color palette
- 📱 **Responsive**: Mobile-first responsive design
- ⚡ **Fast**: Built with Next.js App Router for optimal performance
- 🔍 **SEO Optimized**: Automatic sitemap generation and SEO meta tags
- 🎯 **TypeScript**: Full type safety throughout the application

## Color Palette

- **Theme Primary**: Dark gray-tinted teal (#3e4747)
- **Text**: Black (#000000)
- **Accent Colors**:
  - Muted pink (#c8a6a0)
  - Sand beige (#d9cfc1)
  - Antique gold (#bfae70)

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with gray-matter
- **Theme**: next-themes for dark mode
- **Icons**: Lucide React
- **SEO**: next-seo & next-sitemap
- **Future**: Supabase integration ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd blog
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── layout.tsx     # Locale-specific layout
│   │   ├── page.tsx       # Home page
│   │   └── blog/          # Blog pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── content/              # Blog content
│   └── blog/
│       ├── en/           # English posts
│       └── ja/           # Japanese posts
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── ...
```

## Content Management

### Adding Blog Posts

1. Create a new markdown file in the appropriate language directory:
   - English: `src/content/blog/en/your-post.md`
   - Japanese: `src/content/blog/ja/your-post.md`

2. Add frontmatter to your markdown file:
```markdown
---
title: "Your Post Title"
excerpt: "A brief description of your post"
publishedAt: "2024-01-15"
tags: ["tag1", "tag2", "tag3"]
featured: true
author:
  name: "Your Name"
  bio: "Your bio"
---

# Your Post Content

Write your content here using markdown...
```

### Frontmatter Fields

- `title`: Post title
- `excerpt`: Brief description for previews
- `publishedAt`: Publication date (YYYY-MM-DD)
- `updatedAt`: Update date (optional)
- `tags`: Array of tags
- `featured`: Boolean to feature on homepage
- `coverImage`: Cover image URL (optional)
- `author`: Author information

## Customization

### Updating Author Information

Edit the `authorData` object in `src/app/[locale]/page.tsx`:

```typescript
const authorData = {
  name: 'Your Name',
  bio: {
    en: 'Your English bio...',
    ja: 'Your Japanese bio...',
  },
  social: {
    linkedin: 'your-linkedin-url',
    twitter: 'your-twitter-url',
    instagram: 'your-instagram-url',
    github: 'your-github-url',
    email: 'your-email@example.com',
  },
};
```

### Changing Colors

Update the color variables in:
- `tailwind.config.ts` (Tailwind configuration)
- `src/app/globals.css` (CSS variables)

### SEO Configuration

Update `next-sitemap.config.js` with your domain:

```javascript
module.exports = {
  siteUrl: 'https://your-domain.com',
  // ... other configuration
};
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```
SITE_URL=https://your-domain.com
# Add other environment variables as needed
```

## Future Enhancements

- Supabase integration for dynamic content management
- Comment system
- Newsletter subscription
- Search functionality
- Related posts suggestions
- Analytics integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

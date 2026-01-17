# Blog Posts

This directory contains all blog posts for the website. Posts are written in Markdown/MDX format.

## Creating a New Blog Post

1. Create a new `.md` or `.mdx` file in this directory
2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
date: "2024-01-18"
author: "Your Name"
excerpt: "A brief description of your post"
imageUrl: "https://example.com/image.jpg"
---

Your content here...
```

## Frontmatter Fields

- **title** (required): The title of your blog post
- **date** (required): Publication date in YYYY-MM-DD format
- **author** (required): Author name
- **excerpt** (optional): Short description shown in blog listing
- **imageUrl** (optional): Cover image URL (falls back to default if not provided)

## Markdown Features

You can use standard Markdown syntax:

- Headings: `# H1`, `## H2`, etc.
- Lists: `- item` or `1. item`
- Links: `[text](url)`
- Images: `![alt](url)`
- Code blocks: \`\`\`language ... \`\`\`
- And more!

## File Naming

Use kebab-case for file names:
- ✅ `my-awesome-post.md`
- ❌ `My Awesome Post.md`

The filename becomes the URL slug: `/blog/my-awesome-post`

## Sorting

Posts are automatically sorted by date (newest first) on the blog listing page.

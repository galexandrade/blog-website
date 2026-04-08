# Blog Website

A modern blog website built with [Next.js](https://nextjs.org) and [TypeScript](https://www.typescriptlang.org/).

## Project Structure

```
app/              # Next.js app directory with pages and components
content/blog/     # Blog post markdown files
components/       # Reusable React components
lib/              # Utility functions and blog processing logic
public/           # Static assets
```

## Getting Started

Install dependencies and run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Adding New Blog Posts

1. Create a new markdown file in the `content/blog/` directory:

    ```bash
    content/blog/your-post-title.md
    ```

2. Add frontmatter to the top of your markdown file with the post metadata:

    ```markdown
    ---
    title: 'Your Post Title'
    date: '2024-04-07'
    description: 'A brief description of your post'
    ---

    Your markdown content here...
    ```

3. The post will automatically become available at `/blog/your-post-title`

## Deployment

This site is deployed on [Vercel](https://vercel.com). New blog posts go live automatically when:

1. Create a new markdown file in `content/blog/`
2. Commit and push to your branch
3. Open a pull request
4. Once the PR is merged to the main branch, Vercel automatically deploys to production

No manual deployment needed—Vercel handles everything!

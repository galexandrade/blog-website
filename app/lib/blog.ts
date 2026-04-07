import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { BlogPost, BlogPostFrontmatter } from '@/app/types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

function normalizeFrontmatter(data: BlogPostFrontmatter): BlogPostFrontmatter {
    const rawDate = data.date as unknown;
    const normalizedDate =
        rawDate instanceof Date ? rawDate.toISOString() : String(rawDate ?? '');

    const tags = Array.isArray(data.tags)
        ? data.tags.map((tag) => String(tag)).filter(Boolean)
        : undefined;

    return {
        ...data,
        date: normalizedDate,
        tags
    };
}

export function getAllPosts(): BlogPost[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .filter((fileName) => fileName !== 'about-me.md') // Exclude about page
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);
            const readingTimeResult = readingTime(content);

            return {
                slug,
                frontmatter: normalizeFrontmatter(data as BlogPostFrontmatter),
                content,
                readingTime: readingTimeResult.text
            };
        })
        .sort((a, b) => {
            if (new Date(a.frontmatter.date) < new Date(b.frontmatter.date)) {
                return 1;
            } else {
                return -1;
            }
        });

    return allPostsData;
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const readingTimeResult = readingTime(content);

        return {
            slug,
            frontmatter: normalizeFrontmatter(data as BlogPostFrontmatter),
            content,
            readingTime: readingTimeResult.text
        };
    } catch {
        return null;
    }
}

export function getFeaturedPosts(): BlogPost[] {
    const allPosts = getAllPosts();
    return allPosts.filter((post) => post.frontmatter.featured).slice(0, 3);
}

export function getLatestPosts(count: number = 3): BlogPost[] {
    const allPosts = getAllPosts();
    return allPosts.slice(0, count);
}

export function searchPosts(query: string): BlogPost[] {
    const allPosts = getAllPosts();
    const lowerQuery = query.toLowerCase();

    return allPosts.filter((post) => {
        return (
            post.frontmatter.title.toLowerCase().includes(lowerQuery) ||
            post.frontmatter.description.toLowerCase().includes(lowerQuery)
        );
    });
}

export function getAboutContent(): {
    content: string;
    frontmatter: BlogPostFrontmatter;
} | null {
    try {
        const fullPath = path.join(postsDirectory, 'about-me.md');
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            content,
            frontmatter: normalizeFrontmatter(data as BlogPostFrontmatter)
        };
    } catch {
        return null;
    }
}

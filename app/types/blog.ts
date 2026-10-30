export interface BlogPostFrontmatter {
    path: string;
    date: string;
    title: string;
    description: string;
    image?: string;
    featured?: boolean;
    /** Keep the post off the homepage; it still lists on /blog and in RSS */
    hideFromHome?: boolean;
    tags?: string[];
    author?: string;
    authorRole?: string;
}

export interface BlogPost {
    slug: string;
    frontmatter: BlogPostFrontmatter;
    content: string;
    readingTime: string;
    coverImage?: string;
}

// Everything a listing needs, without the markdown body
export type BlogPostSummary = Omit<BlogPost, 'content'>;

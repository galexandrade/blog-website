export interface BlogPostFrontmatter {
    path: string;
    date: string;
    title: string;
    description: string;
    featured?: boolean;
    tags?: string[];
    author?: string;
    authorRole?: string;
}

export interface BlogPost {
    slug: string;
    frontmatter: BlogPostFrontmatter;
    content: string;
    readingTime: string;
}

interface JsonLdProps {
    data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                // Escape "<" so post content can't close the script tag early
                __html: JSON.stringify(data).replace(/</g, '\\u003c')
            }}
        />
    );
}

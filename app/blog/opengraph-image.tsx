import { brandImage, ogSize } from '@/app/_og/brand-image';

export const alt = 'Writing by Alex Andrade';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
    return brandImage({
        eyebrow: '// writing',
        title: 'Design systems, AI and MCP, and frontend architecture'
    });
}

import { brandImage, ogSize } from '@/app/_og/brand-image';

export const alt = 'Work by Alex Andrade: Sous Chef and agent-ready products';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
    return brandImage({
        eyebrow: 'work',
        title: 'Design systems at 7shifts. Agent-ready products of my own.'
    });
}

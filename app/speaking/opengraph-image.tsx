import { brandImage, ogSize } from '@/app/_og/brand-image';

export const alt = 'Speaking by Alex Andrade: talks on design systems, AI and frontend';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
    return brandImage({
        eyebrow: '// speaking',
        title: 'Talks on design systems, AI and frontend.'
    });
}

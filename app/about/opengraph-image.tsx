import { brandImage, ogSize } from '@/app/_og/brand-image';

export const alt = 'About Alex Andrade';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
    return brandImage({
        eyebrow: '// about',
        title: 'I build design systems that humans and AI agents get right.'
    });
}

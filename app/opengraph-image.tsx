import { brandImage, ogSize } from '@/app/_og/brand-image';

export const alt =
    'Alex Andrade: design systems that humans and AI agents get right';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
    return brandImage({
        eyebrow: '// design-systems · ai · frontend',
        title: 'Design systems that humans and AI agents get right.'
    });
}

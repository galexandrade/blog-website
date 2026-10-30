import { brandImage, ogSize } from '@/app/_og/brand-image';

export const alt = 'Spec, the design system behind alexandrade.dev';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
    return brandImage({
        eyebrow: '// system',
        title: 'Spec: the design system behind this site'
    });
}

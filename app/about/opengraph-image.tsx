import { brandImage, ogSize } from '@/app/_og/brand-image';

export const alt = 'About Alex Andrade';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
    return brandImage({
        eyebrow: 'about',
        title: 'From Brazil to Saskatoon, building design systems at 7shifts.'
    });
}

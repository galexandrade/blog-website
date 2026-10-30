import { tokensJson } from '@/app/lib/tokens';

export const dynamic = 'force-static';

export function GET() {
    return Response.json(tokensJson());
}

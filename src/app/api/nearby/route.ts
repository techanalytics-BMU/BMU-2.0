import { NextResponse, type NextRequest } from 'next/server';
import { nearbyFor } from '@/lib/pseo/regions';

const decode = (text: string) => {
  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
};

// Which of a page's other places to offer this visitor – /api/nearby?path=/services/seo. Vercel
// says where each request comes from (country and city headers); ?country=AE&city=Abu Dhabi stands
// in for them, to try it out. See src/lib/pseo/regions.ts.
export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const testing = query.get('country');
  const country = testing ?? request.headers.get('x-vercel-ip-country') ?? '';
  const city = testing ? (query.get('city') ?? '') : decode(request.headers.get('x-vercel-ip-city') ?? '');

  return NextResponse.json(nearbyFor(query.get('path') ?? '', country, city), {
    headers: { 'Cache-Control': 'private, no-store' },
  });
}

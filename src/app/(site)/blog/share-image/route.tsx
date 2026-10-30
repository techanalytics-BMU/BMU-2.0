import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

// The picture shown when a post without a cover is shared (WhatsApp, LinkedIn, X…):
// /blog/share-image?title=… → a 1200×630 card in BMU's black and lime with the post's title.
export function GET(request: NextRequest) {
  const title = (request.nextUrl.searchParams.get('title') ?? 'Blog').slice(0, 140);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'radial-gradient(ellipse 70% 60% at 85% 0%, rgba(140,198,63,0.28), transparent 70%), #050505',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#8cc63f' }} />
          <div style={{ fontSize: 28, letterSpacing: 4, color: '#b5bac2' }}>BMU MARKETING · BLOG</div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: title.length > 70 ? 56 : 68,
            lineHeight: 1.12,
            letterSpacing: -1.5,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 120, height: 4, borderRadius: 2, background: '#8cc63f' }} />
          <div style={{ fontSize: 26, color: '#8b919a' }}>bmumarketing.in/blog</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { 'Cache-Control': 'public, max-age=86400, immutable' },
    }
  );
}

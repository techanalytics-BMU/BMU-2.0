import { getPublishedPosts } from '@/lib/blog/queries';
import { llmsTxt } from '@/lib/llms';

// /llms.txt – the short guide to BMU for AI assistants (see src/lib/llms.ts). Built once per
// deploy, with the published articles as they are then.
export const dynamic = 'force-static';

export async function GET() {
  return new Response(llmsTxt(await getPublishedPosts()), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

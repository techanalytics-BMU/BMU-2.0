import { getPublishedPosts } from '@/lib/blog/queries';
import { llmsFullTxt } from '@/lib/llms';

// /llms-full.txt – the full reference on BMU for AI assistants: every service and industry in
// full and every place served (see src/lib/llms.ts). Built once per deploy.
export const dynamic = 'force-static';

export async function GET() {
  return new Response(llmsFullTxt(await getPublishedPosts()), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

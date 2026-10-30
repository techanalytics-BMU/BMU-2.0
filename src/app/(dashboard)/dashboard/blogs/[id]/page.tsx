import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/pseo/services';
import { canWriteBlog, getProfile } from '@/lib/auth/session';
import { createClient } from '@/lib/supabase/server';
import { DashboardBlogEditor } from '@/sections/dashboard';
import type { BlogPost } from '@/types/blog';

export const metadata: Metadata = { title: 'Edit post – BMU' };

type Props = { params: Promise<{ id: string }> };

// The blog editor (/dashboard/blogs/<post id>) – SEO writers edit; admins and managers view
export default async function BlogEditorPage({ params }: Props) {
  const { id } = await params;
  const profile = (await getProfile())!;
  const supabase = await createClient();
  const { data } = await supabase.from('blog_posts').select('*').eq('id', id).maybeSingle();
  if (!data) notFound();

  // Only names and addresses go to the browser – not the whole services file
  const serviceOptions = Object.values(services)
    .map((service) => ({ slug: service.slug, name: service.title }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <DashboardBlogEditor
      post={data as BlogPost}
      services={serviceOptions}
      canWrite={canWriteBlog(profile.role)}
    />
  );
}

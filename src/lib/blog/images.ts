import { createClient } from '@/lib/supabase/client';

// Blog images, in the browser: every upload is shrunk and turned into WebP (at most 2000px wide,
// aiming for under 200 KB), then stored in Supabase Storage (bucket "blog-images").

const BUCKET = 'blog-images';
const MAX_WIDTH = 2000;
const TARGET_BYTES = 200 * 1024;
const MAX_UPLOAD_BYTES = 5 * 1024 * 1024; // the bucket's limit

function toWebp(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp', quality));
}

/** Shrink and convert: lower the quality step by step, then the size, until it's under 200 KB */
async function compress(file: File): Promise<Blob> {
  // Animated GIFs would lose their animation – they're kept as they are
  if (file.type === 'image/gif') return file;

  const bitmap = await createImageBitmap(file);
  let width = Math.min(bitmap.width, MAX_WIDTH);
  let best: Blob | null = null;

  for (let round = 0; round < 4; round++) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = Math.round((bitmap.height * width) / bitmap.width);
    canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

    for (const quality of [0.85, 0.75, 0.65]) {
      const blob = await toWebp(canvas, quality);
      if (!blob) continue;
      best = blob;
      if (blob.size <= TARGET_BYTES) return blob;
    }
    width = Math.round(width * 0.8);
  }
  bitmap.close();
  return best ?? file;
}

/** Upload an image for a post; gives back its public address */
export async function uploadBlogImage(file: File, postId: string): Promise<string> {
  if (!file.type.startsWith('image/')) throw new Error('Please choose an image file.');
  const image = await compress(file);
  if (image.size > MAX_UPLOAD_BYTES) {
    throw new Error('This image is too large even after shrinking – please try a smaller one.');
  }

  const base = file.name.replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40);
  const extension = image.type === 'image/webp' ? 'webp' : (file.name.split('.').pop() ?? 'img');
  const path = `posts/${postId}/${Date.now()}-${base || 'image'}.${extension}`;

  const supabase = createClient();
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(path, image, { contentType: image.type || file.type, cacheControl: '31536000' });
  if (error) throw new Error('The image couldn’t be uploaded. Please try again.');

  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
}

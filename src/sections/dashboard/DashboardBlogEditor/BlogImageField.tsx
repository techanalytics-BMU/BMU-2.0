'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { dashboardBlogEditor } from '@/data/dashboard/dashboardBlogEditor';
import { uploadBlogImage } from '@/lib/blog/images';
import styles from './DashboardBlogEditor.module.css';

type Props = {
  postId: string;
  src: string | null;
  onChange: (src: string | null) => void;
};

// An image for the post (the cover, or an image block): upload (shrunk to WebP, under ~200 KB) by
// click or drag. Shows the picture once set, with Replace / Remove.
export default function BlogImageField({ postId, src, onChange }: Props) {
  const t = dashboardBlogEditor.image;
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);

  const upload = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    setError('');
    try {
      onChange(await uploadBlogImage(file, postId));
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : String(problem));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className={styles.imageField}>
      {src ? (
        <div className={styles.imagePreview}>
          <Image src={src} alt="" width={640} height={360} className={styles.imagePreviewImg} />
          <div className={styles.imageActions}>
            <button type="button" className={styles.smallButton} onClick={() => inputRef.current?.click()}>
              {t.replace}
            </button>
            <button type="button" className={styles.smallButton} onClick={() => onChange(null)}>
              {t.remove}
            </button>
          </div>
        </div>
      ) : (
        <div
          className={styles.dropzone}
          data-dragging={dragging}
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            void upload(event.dataTransfer.files[0]);
          }}
        >
          <button
            type="button"
            className={styles.uploadButton}
            disabled={busy}
            onClick={() => inputRef.current?.click()}
          >
            {busy ? t.uploading : t.upload}
          </button>
          <span className={styles.muted}>{t.drop}</span>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(event) => {
          void upload(event.target.files?.[0]);
          event.target.value = '';
        }}
      />
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

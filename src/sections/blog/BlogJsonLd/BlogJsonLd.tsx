// Structured data for Google, as one JSON-LD graph ("<" escaped so the text can never close the
// script tag) – the same way the pSEO pages add theirs
export default function BlogJsonLd({ graph }: { graph: object[] }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(
    /</g,
    '\\u003c'
  );
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

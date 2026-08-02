// lib/JsonLd.tsx
// Renders a JSON-LD <script> block. Import this in page components.

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Renders a single JSON-LD <script> tag. Each schema object passed in must
 * describe something that's actually visible on the page — never generate
 * structured data for content the user can't see.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Renders a JSON-LD <script> tag from a plain data object. Server Component
// (no "use client") so structured data is present in the initial HTML for
// crawlers that don't execute JavaScript.

const JsonLd = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;

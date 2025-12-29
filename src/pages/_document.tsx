import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Default SEO */}
        <meta
          name="description"
          content="Neumog: Hybrid product teams, on demand. Managed product delivery for high-growth ventures."
        />
        <meta property="og:title" content="Neumog: Hybrid Product Teams" />
        <meta
          property="og:description"
          content="Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Neumog: Hybrid Product Teams" />
        <meta
          name="twitter:description"
          content="Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://neumog.com/" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Neumog",
              url: "https://neumog.com",
              logo: "https://neumog.com/neumog-logo.png",
              sameAs: [
                // social profiles
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
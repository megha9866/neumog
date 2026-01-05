import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ClientLayout } from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// Root metadata acts as homepage defaults.
// Individual pages override title, description, and canonical.
export const metadata: Metadata = {
  title: "Neumog | Product Development Services & Software Engineering",
  description:
    "Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML.",
  metadataBase: new URL("https://neumog.tech"),
  openGraph: {
    title: "Neumog | Product Development Services & Software Engineering",
    description:
      "Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML.",
    url: "https://neumog.tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neumog | Product Development Services & Software Engineering",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neumog | Product Development Services & Software Engineering",
    description:
      "Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://neumog.tech",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Organization structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Neumog",
              url: "https://neumog.tech",
              logo: "https://neumog.tech/apple-touch-icon.png",
              description: "Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML.",
              sameAs: ["https://www.linkedin.com/company/neumog"],
            }),
          }}
        />
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}


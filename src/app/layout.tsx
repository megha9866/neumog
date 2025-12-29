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


export const metadata: Metadata = {
  title: "Neumog: Hybrid Product Teams",
  description:
    "Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML.",
  metadataBase: new URL("https://neumog.com"),
  openGraph: {
    title: "Neumog: Hybrid Product Teams",
    description:
      "Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML.",
    url: "https://neumog.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neumog Hybrid Product Teams",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neumog: Hybrid Product Teams",
    description:
      "Managed product delivery, not a marketplace. Trusted experts in product, engineering, data science, and AI/ML.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://neumog.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}


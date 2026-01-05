import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Blog | Neumog",
    description: "Insights on product development, engineering, AI/ML, and startup execution from Neumog's expert collective.",
    alternates: {
        canonical: "https://neumog.tech/blog",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

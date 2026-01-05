import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Neumog | Blog",
    description: "Explore articles and insights on the latest trends in software engineering, data science, AI/ML, and product development. Stay informed with our expert analysis and case studies.",
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

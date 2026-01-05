import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "About Us | Neumog",
    description: "Learn who we are, what we believe, and how Neumog partners with founders to deliver real products through hybrid squads.",
    alternates: {
        canonical: "https://neumog.tech/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

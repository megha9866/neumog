import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Neumog | About Us",
    description: "Discover our story. Learn how Neumog is transforming product delivery through hybrid squads. Meet the team building the future of managed software development.",
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

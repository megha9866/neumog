import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Expert Collective | Neumog",
    description: "Join Neumog's Expert Collective. Work on serious product, AI/ML, and data science projects with flexible hours and fair rates.",
    alternates: {
        canonical: "https://neumog.tech/experts",
    },
};

export default function ExpertsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

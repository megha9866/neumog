import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Neumog | Expert Collective",
    description: "Join our expert network. Work on cutting-edge product, AI/ML, and data science projects with flexible hours, fair compensation, and real impact.",
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

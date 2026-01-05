import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Services | Neumog",
    description: "Trusted engineering teams to build, scale, and ship faster. Expert delivery in product development, AI/ML, data science, and RLHF annotation.",
    alternates: {
        canonical: "https://neumog.tech/services",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

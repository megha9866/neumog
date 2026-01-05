import { getJobOpenings } from "@/lib/careers-db";
import { CareersList } from "@/components/sections/CareersList";
import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Careers | Neumog",
    description: "Join the Neumog team. Build the future of hybrid product delivery with us.",
    alternates: {
        canonical: "https://neumog.tech/careers",
    },
};

export const revalidate = 60;

export default async function CareersPage() {
    const jobs = await getJobOpenings();

    return <CareersList initialJobs={jobs} />;
}

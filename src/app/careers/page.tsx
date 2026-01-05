import { getJobOpenings } from "@/lib/careers-db";
import { CareersList } from "@/components/sections/CareersList";
import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
    title: "Neumog | Careers",
    description: "Explore career opportunities at Neumog. Join our team building the future of hybrid product delivery.",
    alternates: {
        canonical: "https://neumog.tech/careers",
    },
};

export const revalidate = 60;

export default async function CareersPage() {
    const jobs = await getJobOpenings();

    return <CareersList initialJobs={jobs} />;
}

import { ContactSupportForm } from "@/components/sections/ContactSupportForm";
import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
  title: "Neumog | Contact Us",
  description: "Reach out to start your project, join our expert collective, or learn more about our hybrid delivery model. Let's build something great together.",
  alternates: {
    canonical: "https://neumog.tech/contact",
  },
};

export default function ContactPage() {
  return <ContactSupportForm />;
}

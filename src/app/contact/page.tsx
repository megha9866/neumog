import { ContactSupportForm } from "@/components/sections/ContactSupportForm";
import { Metadata } from "next";

// Page-specific SEO metadata
export const metadata: Metadata = {
  title: "Contact | Neumog",
  description: "Get in touch with Neumog. Start your next product, join our expert network, or learn more about hybrid delivery.",
  alternates: {
    canonical: "https://neumog.tech/contact",
  },
};

export default function ContactPage() {
  return <ContactSupportForm />;
}

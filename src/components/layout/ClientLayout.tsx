"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--ink-900)]">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}

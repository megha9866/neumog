"use client";

import { useEffect, useState } from "react";

export function CurrentYear() {
    const [year, setYear] = useState<string>("");

    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, []);

    // Return empty or fallback during SSR to avoid mismatch, then update on client
    if (!year) return <>{new Date().getFullYear()}</>;

    return <>{year}</>;
}

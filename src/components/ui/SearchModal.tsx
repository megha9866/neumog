"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, FileText, Hash, Layers } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { blogPosts, navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

// Extra searchable items that aren't in the main nav but users might look for
const extraSearchItems = [
    { label: "Testimonials", href: "/#testimonials", tag: "Section", keywords: ["reviews", "social proof", "clients", "quote", "feedback", "references"] },
    { label: "Our Process", href: "/how-it-works", tag: "Page", keywords: ["steps", "workflow", "how it works", "methodology"] },
    { label: "Neumog Guarantee", href: "/#guarantee", tag: "Section", keywords: ["promise", "risk", "money back", "warranty", "guarentee"] },
    { label: "Core Values", href: "/about#values", tag: "Section", keywords: ["culture", "principles", "beliefs"] },
    { label: "Industries", href: "/services#industries", tag: "Section", keywords: ["verticals", "sectors", "domains"] },
    { label: "Contact Support", href: "/contact", tag: "Page", keywords: ["help", "email", "phone", "support"] },
];

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const { theme } = useTheme();
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            setQuery("");
            setSelectedIndex(0);
        }
    }, [isOpen]);

    // Filter Logic
    const filteredPosts = blogPosts.filter((post) => {
        const q = query.toLowerCase();
        return (
            post.title.toLowerCase().includes(q) ||
            post.excerpt.toLowerCase().includes(q) ||
            post.tag.toLowerCase().includes(q)
        );
    });

    const filteredPages = navLinks.filter((link) =>
        link.label.toLowerCase().includes(query.toLowerCase())
    );

    const filteredExtras = extraSearchItems.filter((item) => {
        const q = query.toLowerCase();
        return (
            item.label.toLowerCase().includes(q) ||
            item.keywords.some(k => k.includes(q))
        );
    });

    // Combine all results for flat navigation
    // We filter out duplicates if an "extra" item points to the same href as a "page" item
    const uniqueExtras = filteredExtras.filter(extra =>
        !filteredPages.some(page => page.href === extra.href)
    );

    const allItems = [
        ...filteredPages.map(page => ({ ...page, label: page.label, type: 'page', tag: 'Page' })),
        ...uniqueExtras.map(extra => ({ ...extra, label: extra.label, type: 'section', tag: extra.tag })),
        ...filteredPosts.map(post => ({ ...post, label: post.title, type: 'article', tag: post.tag }))
    ];

    // Handle Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }

            if (allItems.length === 0) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex(prev => {
                    const next = (prev + 1) % allItems.length;
                    scrollToItem(next);
                    return next;
                });
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex(prev => {
                    const next = (prev - 1 + allItems.length) % allItems.length;
                    scrollToItem(next);
                    return next;
                });
            } else if (e.key === "Enter") {
                e.preventDefault();
                router.push(allItems[selectedIndex].href);
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose, allItems, selectedIndex, router]);

    // Reset selection when query changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    const scrollToItem = (index: number) => {
        const element = document.getElementById(`search-item-${index}`);
        element?.scrollIntoView({ block: "nearest" });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-20 sm:pt-32">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal - Removed Glassmorphism, Solid Colors */}
            <div
                className={cn(
                    "relative w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl transition-all animate-in fade-in zoom-in-95 duration-200",
                    theme === "dark"
                        ? "bg-[#0a0a0a] border border-white/10"
                        : "bg-white border border-[var(--border-soft)]"
                )}
            >
                {/* Search Header */}
                <div className={cn(
                    "flex items-center gap-3 border-b px-5 py-4",
                    theme === "dark" ? "border-white/10" : "border-gray-100"
                )}>
                    <Search className={cn("h-5 w-5", theme === "dark" ? "text-gray-400" : "text-gray-500")} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search testimonials, process, articles..."
                        className={cn(
                            "flex-1 bg-transparent text-lg outline-none placeholder:text-gray-400 font-medium",
                            theme === "dark" ? "text-white" : "text-[var(--ink-900)]"
                        )}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        onClick={onClose}
                        className={cn(
                            "rounded-md p-1 transition-colors",
                            theme === "dark" ? "hover:bg-white/10 text-gray-400" : "hover:bg-gray-100 text-gray-500"
                        )}
                    >
                        <div className="hidden sm:block text-xs border rounded px-1.5 py-0.5 font-sans opacity-70">ESC</div>
                        <X className="h-5 w-5 sm:hidden" />
                    </button>
                </div>

                {/* Results Body */}
                <div className={cn(
                    "max-h-[60vh] overflow-y-auto px-2 py-3",
                    theme === "dark" ? "scrollbar-track-black scrollbar-thumb-white/20" : "scrollbar-track-white scrollbar-thumb-gray-200"
                )}>

                    {/* Empty State */}
                    {query.trim() === "" && (
                        <div className="py-12 text-center">
                            <p className={cn("text-sm", theme === "dark" ? "text-gray-500" : "text-[var(--muted-500)]")}>
                                Try searching for "Testimonials", "Process", or "AI"
                            </p>
                        </div>
                    )}

                    {/* No Results */}
                    {query.trim() !== "" && allItems.length === 0 && (
                        <div className="py-12 text-center">
                            <p className={cn("text-sm", theme === "dark" ? "text-gray-500" : "text-[var(--muted-500)]")}>
                                No results found for "{query}"
                            </p>
                        </div>
                    )}

                    {/* Results Lists */}
                    {query.trim() !== "" && (
                        <div className="space-y-6 px-2">

                            {/* Pages & Sections Section */}
                            {(filteredPages.length > 0 || uniqueExtras.length > 0) && (
                                <div>
                                    <h4 className={cn("mb-2 px-3 text-xs font-semibold uppercase tracking-wider opacity-50", theme === "dark" ? "text-white" : "text-black")}>Pages & Sections</h4>
                                    <div className="space-y-1">
                                        {[...filteredPages, ...uniqueExtras].map((item) => {
                                            // Find the global index for this specific item in allItems
                                            const globalIndex = allItems.findIndex(i => i.label === item.label && i.href === item.href);
                                            const isSelected = globalIndex === selectedIndex;

                                            return (
                                                <Link
                                                    key={item.href + item.label}
                                                    id={`search-item-${globalIndex}`}
                                                    href={item.href}
                                                    onClick={onClose}
                                                    onMouseEnter={() => setSelectedIndex(globalIndex)}
                                                    className={cn(
                                                        "group flex items-center justify-between rounded-lg px-3 py-3 transition-colors",
                                                        isSelected
                                                            ? (theme === "dark" ? "bg-white/10" : "bg-[var(--sand-100)]")
                                                            : (theme === "dark" ? "text-gray-200" : "text-[var(--ink-900)]")
                                                    )}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        {(item as any).tag === 'Page' || !(item as any).tag ? (
                                                            <Hash className={cn("h-4 w-4", isSelected ? "opacity-100" : "opacity-50")} />
                                                        ) : (
                                                            <Layers className={cn("h-4 w-4", isSelected ? "opacity-100" : "opacity-50")} />
                                                        )}

                                                        <span className="font-medium">{item.label}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {(item as any).tag && (item as any).tag !== 'Page' && (
                                                            <span className={cn(
                                                                "text-[10px] uppercase tracking-wider opacity-60",
                                                                theme === "dark" ? "text-gray-400" : "text-gray-500"
                                                            )}>
                                                                {(item as any).tag}
                                                            </span>
                                                        )}
                                                        <ArrowRight className={cn("h-4 w-4 transition-opacity", isSelected ? "opacity-100" : "opacity-0")} />
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Articles Section */}
                            {filteredPosts.length > 0 && (
                                <div>
                                    <h4 className={cn("mb-2 px-3 text-xs font-semibold uppercase tracking-wider opacity-50", theme === "dark" ? "text-white" : "text-black")}>Articles</h4>
                                    <div className="space-y-1">
                                        {filteredPosts.map((post, index) => {
                                            // Calculate global index relative to preceding items
                                            const precedingCount = filteredPages.length + uniqueExtras.length;
                                            const globalIndex = index + precedingCount;

                                            const isSelected = globalIndex === selectedIndex;
                                            return (
                                                <Link
                                                    key={post.href}
                                                    id={`search-item-${globalIndex}`}
                                                    href={post.href}
                                                    onClick={onClose}
                                                    onMouseEnter={() => setSelectedIndex(globalIndex)}
                                                    className={cn(
                                                        "group flex items-start justify-between rounded-lg px-3 py-3 transition-colors",
                                                        isSelected
                                                            ? (theme === "dark" ? "bg-white/10" : "bg-[var(--sand-100)]")
                                                            : ""
                                                    )}
                                                >
                                                    <div className="flex gap-3">
                                                        <FileText className={cn("mt-1 h-4 w-4 shrink-0 opacity-50", theme === "dark" ? "text-gray-400" : "text-gray-500")} />
                                                        <div>
                                                            <h5 className={cn("font-medium", theme === "dark" ? "text-gray-200" : "text-[var(--ink-900)]")}>{post.title}</h5>
                                                            <p className={cn("mt-1 text-sm line-clamp-1", theme === "dark" ? "text-gray-500" : "text-[var(--muted-500)]")}>{post.excerpt}</p>
                                                        </div>
                                                    </div>
                                                    <span className={cn(
                                                        "ml-4 shrink-0 rounded px-2 py-1 text-[10px] font-medium uppercase tracking-widest",
                                                        theme === "dark"
                                                            ? "bg-white/10 text-neutral-400"
                                                            : "bg-[#1c1917] text-neutral-400"
                                                    )}>
                                                        {post.tag}
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>

                {/* Footer Hint */}
                {query.trim() !== "" && (
                    <div className={cn(
                        "border-t px-5 py-3 text-xs flex justify-between",
                        theme === "dark" ? "border-white/10 bg-white/5 text-gray-500" : "border-gray-100 bg-gray-50 text-gray-400"
                    )}>
                        <span>Search by keyword, topic, or title.</span>
                        <div className="flex gap-2">
                            <span>↑↓ to navigate</span>
                            <span>↵ to select</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

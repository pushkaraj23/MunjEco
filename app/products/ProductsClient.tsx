"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type ProductsClientProps = { categories: string[] };

export function ProductsClient({ categories }: ProductsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("category") ?? "";
  const q = searchParams.get("q") ?? "";

  const setFilter = useCallback(
    (category: string) => {
      const p = new URLSearchParams(searchParams.toString());
      if (category) p.set("category", category);
      else p.delete("category");
      router.push(`/products?${p.toString()}`);
    },
    [router, searchParams]
  );

  const setSearch = useCallback(
    (value: string) => {
      const p = new URLSearchParams(searchParams.toString());
      if (value) p.set("q", value);
      else p.delete("q");
      router.push(`/products?${p.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
            !current
              ? "bg-matcha text-white shadow-card"
              : "bg-white/80 text-foreground-muted hover:bg-matcha/10 hover:text-carob"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              current === cat
                ? "bg-matcha text-white shadow-card"
                : "bg-white/80 text-foreground-muted hover:bg-matcha/10 hover:text-carob"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <input
        type="search"
        placeholder="Search products..."
        value={q}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-2xl border border-almond bg-white/80 px-4 py-2 text-foreground placeholder:text-foreground-muted outline-none transition-all duration-300 focus:border-matcha focus:ring-2 focus:ring-matcha/20 sm:w-64"
      />
    </div>
  );
}

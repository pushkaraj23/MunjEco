"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Search } from "lucide-react";

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
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("")}
          className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
            !current
              ? "border border-pistache/50 bg-pistache/30 text-white shadow-[0_0_20px_rgba(162,183,154,0.2)]"
              : "border border-white/25 bg-white/10 text-white hover:border-pistache/40 hover:bg-pistache/20 hover:text-white"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
              current === cat
                ? "border border-pistache/50 bg-pistache/30 text-white shadow-[0_0_20px_rgba(162,183,154,0.2)]"
                : "border border-white/25 bg-white/10 text-white hover:border-pistache/40 hover:bg-pistache/20 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" strokeWidth={1.5} />
        <input
          type="search"
          placeholder="Search products..."
          value={q}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-white/25 bg-white/10 py-2.5 pl-10 pr-4 text-white placeholder-white/60 outline-none backdrop-blur-sm transition-all duration-300 focus:border-pistache/50 focus:ring-2 focus:ring-pistache/25 focus:ring-offset-0 focus:ring-offset-transparent sm:w-64"
        />
      </div>
    </div>
  );
}

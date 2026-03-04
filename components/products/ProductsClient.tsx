"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Search } from "lucide-react";

export function ProductsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

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
    <div className="flex justify-end">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted/70"
          strokeWidth={1.5}
        />
        <input
          type="search"
          placeholder="Search products..."
          value={q}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-border bg-background-alt py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground-muted/60 outline-none transition-colors duration-200 focus:border-primary sm:w-64"
        />
      </div>
    </div>
  );
}

"use client";

import { useCallback, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";

type ProductsClientProps = {
  categories: { slug: string; name: string }[];
  selectedCategory: string;
};

export function ProductsClient({
  categories,
  selectedCategory,
}: ProductsClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const q = searchParams.get("q") ?? "";

  const onSearchChange = useCallback(
    (value: string) => {
      startTransition(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
          params.set("q", value);
        } else {
          params.delete("q");
        }
        const qs = params.toString();
        router.push(qs ? `${pathname}?${qs}` : pathname);
      });
    },
    [pathname, router, searchParams]
  );

  const onCategoryChange = useCallback(
    (value: string) => {
      startTransition(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
          params.set("category", value);
        } else {
          params.delete("category");
        }
        const qs = params.toString();
        router.push(qs ? `${pathname}?${qs}` : pathname);
      });
    },
    [pathname, router, searchParams]
  );

  const currentCategory =
    searchParams.get("category") ?? selectedCategory ?? "";

  const sortedCategories = [...categories].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-end sm:gap-4">
      <div className="relative w-full sm:w-auto">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted" />
        <input
          type="search"
          name="q"
          defaultValue={q}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products..."
          className="w-full min-w-[220px] rounded-none border border-border bg-background-alt px-9 py-2.5 text-sm text-foreground shadow-sm outline-none ring-0 placeholder:text-foreground-muted focus:border-primary focus:outline-none focus:ring-0 md:min-w-[260px]"
          aria-label="Search products"
        />
        {isPending && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.18em] text-foreground-muted">
            Updating...
          </span>
        )}
      </div>

      <div className="w-full sm:w-auto">
        <label
          className="mb-1 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground-muted"
          htmlFor="category-select"
        >
          Category
        </label>
        <div className="relative">
          <select
            id="category-select"
            value={currentCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full appearance-none rounded-none border border-border bg-background-alt px-3 py-2.5 pr-9 text-xs font-medium uppercase tracking-[0.18em] text-foreground shadow-sm outline-none ring-0 transition-colors hover:border-primary/70 focus:border-primary focus:outline-none focus:ring-0 sm:w-auto"
          >
            <option value="">All categories</option>
            {sortedCategories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name || cat.slug}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addProduct } from "@/lib/addProduct";
import type { Category } from "@/lib/categories";

type Props = { categories: Category[] };

export function AddProductForm({ categories }: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const slug =
      (formData.get("slug") as string) ||
      name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    const category = formData.get("category") as string; // category slug
    const description = formData.get("description") as string;
    const imagesStr = formData.get("images") as string;
    const featured = formData.get("featured") === "on";

    const images = imagesStr
      .split("\n")
      .map((url) => url.trim())
      .filter(Boolean);

    const specsStr = formData.get("specifications") as string;
    const specifications: Record<string, string> = {};
    if (specsStr) {
      specsStr.split("\n").forEach((line) => {
        const [key, ...valParts] = line.split(":");
        const value = valParts.join(":").trim();
        if (key?.trim()) specifications[key.trim()] = value;
      });
    }

    try {
      await addProduct({
        name,
        slug,
        category,
        description,
        specifications: Object.keys(specifications).length ? specifications : undefined,
        images,
        featured,
      });
      setStatus("success");
      form.reset();
      router.refresh();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to add product");
    }
  }

  return (
    <div className="rounded-3xl border border-almond bg-surface p-6 shadow-card">
      <h2 className="mb-6 font-display text-lg font-semibold text-carob">
        Add Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-carob">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-2xl border border-almond bg-white px-4 py-2.5 text-foreground outline-none focus:border-matcha"
          />
        </div>
        <div>
          <label htmlFor="slug" className="mb-1 block text-sm font-medium text-carob">
            Slug (leave blank to auto-generate)
          </label>
          <input
            id="slug"
            name="slug"
            placeholder="bamboo-pen"
            className="w-full rounded-2xl border border-almond bg-white px-4 py-2.5 text-foreground outline-none focus:border-matcha"
          />
        </div>
        <div>
          <label htmlFor="category" className="mb-1 block text-sm font-medium text-carob">
            Category *
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full rounded-2xl border border-almond bg-white px-4 py-2.5 text-foreground outline-none focus:border-matcha"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
          {categories.length === 0 && (
            <p className="mt-1 text-xs text-foreground-muted">
              Create categories in the Categories tab first.
            </p>
          )}
        </div>
        <div>
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-carob">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={3}
            className="w-full rounded-2xl border border-almond bg-white px-4 py-2.5 text-foreground outline-none focus:border-matcha"
          />
        </div>
        <div>
          <label htmlFor="images" className="mb-1 block text-sm font-medium text-carob">
            Image URLs (one per line) *
          </label>
          <textarea
            id="images"
            name="images"
            required
            rows={4}
            placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
            className="w-full rounded-2xl border border-almond bg-white px-4 py-2.5 font-mono text-sm text-foreground outline-none focus:border-matcha"
          />
        </div>
        <div>
          <label htmlFor="specifications" className="mb-1 block text-sm font-medium text-carob">
            Specifications (key: value, one per line)
          </label>
          <textarea
            id="specifications"
            name="specifications"
            rows={4}
            placeholder="Capacity: 300ml&#10;Material: Bamboo"
            className="w-full rounded-2xl border border-almond bg-white px-4 py-2.5 font-mono text-sm text-foreground outline-none focus:border-matcha"
          />
        </div>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            name="featured"
            className="rounded border-almond text-matcha focus:ring-matcha"
          />
          <span className="text-sm text-foreground-muted">Featured product</span>
        </label>
        {status === "success" && (
          <p className="text-sm text-matcha">Product added successfully.</p>
        )}
        {status === "error" && error && (
          <p className="text-sm text-chai">{error}</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-2xl bg-matcha px-4 py-3 font-semibold text-white shadow-card transition-all hover:shadow-elevated disabled:opacity-50"
        >
          {status === "loading" ? "Adding…" : "Add Product"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { updateProduct, deleteProduct } from "@/lib/addProduct";

type Props = { products: Product[] };

export function ProductsList({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="border border-border bg-background-alt p-12 text-center shadow-card">
        <p className="text-foreground-muted">No products yet.</p>
        <p className="mt-2 text-sm text-foreground-muted">
          Add your first product using the form on the left.
        </p>
      </div>
    );
  }

  const router = useRouter();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function specsToTextarea(specs?: Record<string, string>): string {
    if (!specs) return "";
    return Object.entries(specs)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
  }

  async function handleSave(
    product: Product,
    form: HTMLFormElement
  ): Promise<void> {
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const slug = (formData.get("slug") as string).trim();
    const category = (formData.get("category") as string).trim();
    const description = (formData.get("description") as string).trim();
    const imagesStr = (formData.get("images") as string) ?? "";
    const featured = formData.get("featured") === "on";
    const specsStr = (formData.get("specifications") as string) ?? "";

    const images = imagesStr
      .split("\n")
      .map((url) => url.trim())
      .filter(Boolean);

    const specifications: Record<string, string> = {};
    if (specsStr) {
      specsStr.split("\n").forEach((line) => {
        const [key, ...valParts] = line.split(":");
        const value = valParts.join(":").trim();
        if (key?.trim()) specifications[key.trim()] = value;
      });
    }

    setSavingId(product.id);
    await updateProduct({
      id: product.id,
      name,
      slug,
      category,
      description,
      specifications: Object.keys(specifications).length
        ? specifications
        : {},
      images,
      featured,
    });
    setSavingId(null);
    setEditingId(null);
    router.refresh();
  }

  async function handleDelete(id: string, name: string): Promise<void> {
    if (!window.confirm(`Delete product "${name}"? This cannot be undone.`)) {
      return;
    }
    setDeletingId(id);
    await deleteProduct(id);
    setDeletingId(null);
    router.refresh();
  }

  return (
    <div className="border border-border bg-background-alt shadow-card">
      <div className="border-b border-border px-6 py-4">
        <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
          Existing Products
        </h2>
      </div>
      <ul className="divide-y divide-border/70">
        {products.map((product) => {
          const imageUrl =
            product.images[0] ?? "https://placehold.co/80x60/E5E0D8/809671?text=—";
          const isEditing = editingId === product.id;
          return (
            <li
              key={product.id}
              className="flex flex-col gap-4 px-6 py-4 transition-colors hover:bg-primary/5 sm:flex-row sm:items-start"
            >
              <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-background-alt">
                <Image
                  src={imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized={imageUrl.startsWith("http")}
                />
              </div>
              {isEditing ? (
                <form
                  className="min-w-0 flex-1 space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    void handleSave(product, e.currentTarget);
                  }}
                >
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      name="name"
                      defaultValue={product.name}
                      placeholder="Name"
                      className="w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                    />
                    <input
                      name="slug"
                      defaultValue={product.slug}
                      placeholder="Slug"
                      className="w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </div>
                  <input
                    name="category"
                    defaultValue={product.category}
                    placeholder="Category slug"
                    className="w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                  />
                  <textarea
                    name="description"
                    defaultValue={product.description}
                    rows={2}
                    className="w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                  />
                  <textarea
                    name="images"
                    defaultValue={product.images.join("\n")}
                    rows={3}
                    className="w-full border border-border bg-background px-3 py-2 text-xs font-mono text-foreground outline-none focus:border-primary"
                    placeholder="Image URLs, one per line"
                  />
                  <textarea
                    name="specifications"
                    defaultValue={specsToTextarea(product.specifications)}
                    rows={3}
                    className="w-full border border-border bg-background px-3 py-2 text-xs font-mono text-foreground outline-none focus:border-primary"
                    placeholder="Specifications: key: value, one per line"
                  />
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      name="featured"
                      defaultChecked={product.featured}
                      className="border-border text-primary focus:ring-primary"
                    />
                    <span className="text-foreground-muted">Featured product</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="submit"
                      disabled={savingId === product.id}
                      className="bg-primary px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white disabled:opacity-50"
                    >
                      {savingId === product.id ? "Saving…" : "Save"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingId(null)}
                      className="text-xs text-foreground-muted hover:text-foreground"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-sm font-medium text-foreground hover:text-primary"
                    >
                      {product.name}
                    </Link>
                    <p className="truncate text-sm text-foreground-muted">
                      {product.category} · {product.description.slice(0, 60)}…
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    {product.featured && (
                      <span className="border border-primary/40 bg-primary/5 px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary">
                        Featured
                      </span>
                    )}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setEditingId(product.id)}
                        className="border border-border bg-background px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground hover:border-primary hover:text-primary"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => void handleDelete(product.id, product.name)}
                        disabled={deletingId === product.id}
                        className="border border-border bg-background px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-accent-dark hover:border-accent-dark disabled:opacity-50"
                      >
                        {deletingId === product.id ? "Deleting…" : "Delete"}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

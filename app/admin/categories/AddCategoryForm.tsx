"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addCategory, uploadCategoryImage } from "@/lib/categories";

export function AddCategoryForm() {
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

    try {
      const imageUrlInput = (formData.get("imageUrl") as string | null)?.trim();
      const file = formData.get("coverPhoto") as File | null;

      if (!imageUrlInput && !file?.size) {
        setStatus("error");
        setError("Please provide an image URL or upload a file.");
        return;
      }

      const imageUrl = imageUrlInput
        ? imageUrlInput
        : await uploadCategoryImage(file as File, slug);
      await addCategory({ name, slug, imageUrl });
      setStatus("success");
      form.reset();
      router.refresh();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to add category");
    }
  }

  return (
    <div className="rounded-3xl border border-almond bg-surface p-6 shadow-card">
      <h2 className="mb-6 font-display text-lg font-semibold text-carob">
        Add Category
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
            placeholder="e.g. Bamboo Pens"
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
            placeholder="e.g. pens"
            className="w-full rounded-2xl border border-almond bg-white px-4 py-2.5 text-foreground outline-none focus:border-matcha"
          />
        </div>
        <div className="space-y-2">
          <div>
            <label htmlFor="imageUrl" className="mb-1 block text-sm font-medium text-carob">
              Cover Photo URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              placeholder="https://example.com/your-image.jpg"
              className="w-full rounded-2xl border border-almond bg-white px-4 py-2.5 text-foreground outline-none focus:border-matcha"
            />
            <p className="mt-1 text-xs text-foreground-muted">
              Paste an image link, or leave empty and upload a file below.
            </p>
          </div>
          <div>
            <label htmlFor="coverPhoto" className="mb-1 block text-sm font-medium text-carob">
              Cover Photo File
            </label>
            <input
              id="coverPhoto"
              name="coverPhoto"
              type="file"
              accept="image/*"
              className="w-full rounded-2xl border border-almond bg-white px-4 py-2.5 text-sm text-foreground file:mr-3 file:rounded-lg file:border-0 file:bg-matcha file:px-4 file:py-2 file:text-sm file:font-medium file:text-white file:hover:bg-matcha/90"
            />
            <p className="mt-1 text-xs text-foreground-muted">
              Optional if you provided an image URL above.
            </p>
          </div>
        </div>
        {status === "success" && (
          <p className="text-sm text-matcha">Category added successfully.</p>
        )}
        {status === "error" && error && (
          <p className="text-sm text-chai">{error}</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-2xl bg-matcha px-4 py-3 font-semibold text-white shadow-card transition-all hover:shadow-elevated disabled:opacity-50"
        >
          {status === "loading" ? "Adding…" : "Add Category"}
        </button>
      </form>
    </div>
  );
}

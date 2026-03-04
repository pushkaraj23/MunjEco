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
    <div className="border border-border bg-background-alt p-6 shadow-card">
      <h2 className="mb-2 font-heading text-lg font-semibold tracking-tight text-foreground">
        Add Category
      </h2>
      <p className="mb-6 text-xs text-foreground-muted">
        Create product groupings that appear in the Products tab.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground-muted"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="e.g. Bamboo Pens"
            className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>
        <div>
          <label
            htmlFor="slug"
            className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground-muted"
          >
            Slug (leave blank to auto-generate)
          </label>
          <input
            id="slug"
            name="slug"
            placeholder="e.g. pens"
            className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>
        <div className="space-y-2">
          <div>
            <label
              htmlFor="imageUrl"
              className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground-muted"
            >
              Cover Photo URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              placeholder="https://example.com/your-image.jpg"
              className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
            />
            <p className="mt-1 text-xs text-foreground-muted">
              Paste an image link, or leave empty and upload a file below.
            </p>
          </div>
          <div>
            <label
              htmlFor="coverPhoto"
              className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground-muted"
            >
              Cover Photo File
            </label>
            <input
              id="coverPhoto"
              name="coverPhoto"
              type="file"
              accept="image/*"
              className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground file:mr-3 file:border-0 file:bg-primary file:px-4 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.24em] file:text-white file:hover:bg-primary-dark"
            />
            <p className="mt-1 text-xs text-foreground-muted">
              Optional if you provided an image URL above.
            </p>
          </div>
        </div>
        {status === "success" && (
          <p className="text-xs text-primary">Category added successfully.</p>
        )}
        {status === "error" && error && (
          <p className="text-xs text-accent-dark">{error}</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary px-4 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.26em] text-white transition-all hover:bg-primary-dark disabled:opacity-50"
        >
          {status === "loading" ? "Adding…" : "Add Category"}
        </button>
      </form>
    </div>
  );
}

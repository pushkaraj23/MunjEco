"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Category } from "@/lib/categories";
import { updateCategory, deleteCategory } from "@/lib/categories";

type Props = { categories: Category[] };

export function CategoriesList({ categories }: Props) {
  const router = useRouter();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  if (categories.length === 0) {
    return (
      <div className="border border-border bg-background-alt p-12 text-center shadow-card">
        <p className="text-foreground-muted">No categories yet.</p>
        <p className="mt-2 text-sm text-foreground-muted">
          Add your first category using the form on the left. Categories will
          appear in the Products dropdown.
        </p>
      </div>
    );
  }

  async function handleSave(
    id: string,
    form: HTMLFormElement
  ): Promise<void> {
    const formData = new FormData(form);
    const name = (formData.get("name") as string).trim();
    const slug = (formData.get("slug") as string).trim();
    const imageUrl = (formData.get("imageUrl") as string).trim();

    setSavingId(id);
    await updateCategory(id, { name, slug, imageUrl });
    setSavingId(null);
    setEditingId(null);
    router.refresh();
  }

  async function handleDelete(id: string, name: string): Promise<void> {
    if (!window.confirm(`Delete category "${name}"? This cannot be undone.`)) {
      return;
    }
    setDeletingId(id);
    await deleteCategory(id);
    setDeletingId(null);
    router.refresh();
  }

  return (
    <div className="border border-border bg-background-alt shadow-card">
      <div className="border-b border-border px-6 py-4">
        <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground">
          Existing Categories
        </h2>
      </div>
      <ul className="divide-y divide-border/70">
        {categories.map((cat) => {
          const isEditing = editingId === cat.id;
          return (
            <li
              key={cat.id}
              className="flex flex-col gap-4 px-6 py-4 transition-colors hover:bg-primary/5 sm:flex-row sm:items-center"
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-background-alt">
                <Image
                  src={cat.imageUrl}
                  alt={cat.name}
                  fill
                  className="object-cover"
                  unoptimized={cat.imageUrl.startsWith("http")}
                />
              </div>
              {isEditing ? (
                <form
                  className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                    void handleSave(cat.id, e.currentTarget);
                  }}
                >
                  <div className="flex-1 space-y-2">
                    <div className="grid gap-2 sm:grid-cols-2">
                      <input
                        name="name"
                        defaultValue={cat.name}
                        placeholder="Name"
                        className="w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                      />
                      <input
                        name="slug"
                        defaultValue={cat.slug}
                        placeholder="Slug"
                        className="w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                      />
                    </div>
                    <input
                      name="imageUrl"
                      defaultValue={cat.imageUrl}
                      placeholder="Cover image URL"
                      className="w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:items-end">
                    <button
                      type="submit"
                      disabled={savingId === cat.id}
                      className="bg-primary px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white disabled:opacity-50"
                    >
                      {savingId === cat.id ? "Saving…" : "Save"}
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
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {cat.name}
                    </p>
                    <p className="text-sm text-foreground-muted">{cat.slug}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => setEditingId(cat.id)}
                      className="border border-border bg-background px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground hover:border-primary hover:text-primary"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => void handleDelete(cat.id, cat.name)}
                      disabled={deletingId === cat.id}
                      className="rounded-2xl border border-border bg-white px-3 py-1.5 text-xs font-semibold text-chai hover:border-chai disabled:opacity-50"
                    >
                      {deletingId === cat.id ? "Deleting…" : "Delete"}
                    </button>
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

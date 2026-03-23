"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import type { EnquiryWithId } from "@/lib/getEnquiries";
import type { EnquiryStatus } from "@/lib/types";
import { deleteEnquiry } from "@/lib/deleteEnquiry";
import { updateEnquiryStatus } from "@/lib/updateEnquiryStatus";

type Props = { enquiries: EnquiryWithId[] };

type StatusFilter = "all" | EnquiryStatus;

function formatDate(createdAt?: { seconds: number; nanoseconds: number }) {
  if (!createdAt) return "—";
  return new Date(createdAt.seconds * 1000).toLocaleString();
}

const statusStyles: Record<
  EnquiryStatus,
  { card: string; badge: string; label: string }
> = {
  new: {
    card: "border-l-4 border-l-primary bg-primary/5",
    badge: "bg-primary text-white",
    label: "New",
  },
  ongoing: {
    card: "border-l-4 border-l-chai bg-chai/10",
    badge: "bg-chai/90 text-white",
    label: "Ongoing",
  },
  done: {
    card: "border-l-4 border-l-foreground-muted/40 bg-background-alt/60",
    badge: "bg-foreground-muted/20 text-foreground-muted",
    label: "Done",
  },
};

function getStatus(e: EnquiryWithId): EnquiryStatus {
  return e.status ?? "new";
}

export function EnquiriesTable({ enquiries }: Props) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const counts = useMemo(() => {
    let newC = 0;
    let ongoing = 0;
    let done = 0;
    for (const e of enquiries) {
      const s = getStatus(e);
      if (s === "new") newC++;
      else if (s === "ongoing") ongoing++;
      else done++;
    }
    return {
      all: enquiries.length,
      new: newC,
      ongoing,
      done,
    };
  }, [enquiries]);

  const filteredEnquiries = useMemo(() => {
    if (statusFilter === "all") return enquiries;
    return enquiries.filter((e) => getStatus(e) === statusFilter);
  }, [enquiries, statusFilter]);

  const filterTabs: { id: StatusFilter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "new", label: "New" },
    { id: "ongoing", label: "Ongoing" },
    { id: "done", label: "Done" },
  ];

  async function onStatusChange(id: string, value: EnquiryStatus) {
    await updateEnquiryStatus(id, value);
    router.refresh();
  }

  async function onDelete(id: string, name: string) {
    const ok = window.confirm(
      `Delete this enquiry from ${name || "this contact"}? This cannot be undone.`
    );
    if (!ok) return;
    setDeletingId(id);
    try {
      await deleteEnquiry(id);
      router.refresh();
    } catch {
      window.alert("Could not delete the enquiry. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  if (enquiries.length === 0) {
    return (
      <div className="border border-border bg-background-alt p-12 text-center shadow-card">
        <p className="text-foreground-muted">No enquiries yet.</p>
        <p className="mt-2 text-sm text-foreground-muted">
          Enquiries will appear here when users submit the contact form.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div
        className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
        role="tablist"
        aria-label="Filter by status"
      >
        {filterTabs.map((tab) => {
          const count = counts[tab.id];
          const active = statusFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setStatusFilter(tab.id)}
              className={`flex min-h-[3rem] flex-col items-center justify-center rounded-lg border px-2 py-2.5 text-center transition-colors sm:min-h-0 sm:flex-row sm:gap-1.5 sm:py-3 ${
                active
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-border bg-background-alt text-foreground hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.18em]">
                {tab.label}
              </span>
              <span
                className={`text-[0.65rem] font-medium tabular-nums sm:text-xs ${
                  active ? "text-white/90" : "text-foreground-muted"
                }`}
              >
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {filteredEnquiries.length === 0 ? (
        <div className="border border-border bg-background-alt p-10 text-center shadow-card">
          <p className="text-foreground-muted">
            No enquiries in this category.
          </p>
          <p className="mt-2 text-sm text-foreground-muted">
            Try another tab or set status to match this filter.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredEnquiries.map((enquiry) => {
            const status = getStatus(enquiry);
            const style = statusStyles[status];
            return (
              <div
                key={enquiry.id}
                className={`border border-border bg-background-alt p-5 shadow-card sm:p-6 ${style.card}`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 gap-y-1">
                      <span className="font-heading text-base font-semibold tracking-tight text-foreground">
                        {enquiry.name}
                      </span>
                      <span className="text-sm text-foreground-muted">
                        {formatDate(enquiry.createdAt)}
                      </span>
                    </div>
                    <div className="grid gap-1 text-sm sm:grid-cols-2">
                      <p>
                        <span className="text-foreground-muted">Company:</span>{" "}
                        <span className="text-foreground">{enquiry.company || "—"}</span>
                      </p>
                      <p>
                        <span className="text-foreground-muted">Product:</span>{" "}
                        <span className="text-foreground">{enquiry.product || "—"}</span>
                      </p>
                      <p>
                        <span className="text-foreground-muted">Quantity:</span>{" "}
                        <span className="text-foreground">{enquiry.quantity || "—"}</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      <a
                        href={`mailto:${enquiry.email}`}
                        className="text-primary hover:underline"
                      >
                        {enquiry.email}
                      </a>
                      <a
                        href={`tel:${enquiry.phone}`}
                        className="text-primary hover:underline"
                      >
                        {enquiry.phone}
                      </a>
                    </div>
                    {enquiry.message && (
                      <p className="max-w-2xl text-sm text-foreground-muted">
                        <span className="text-foreground-muted">Message:</span>{" "}
                        {enquiry.message}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-2">
                    <span
                      className={`rounded-lg px-2 py-0.5 text-xs font-medium ${style.badge}`}
                    >
                      {style.label}
                    </span>
                    <select
                      value={status}
                      onChange={(e) =>
                        onStatusChange(enquiry.id, e.target.value as EnquiryStatus)
                      }
                      className="border border-border bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm outline-none focus:border-primary"
                      aria-label="Change status"
                    >
                      <option value="new">New</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="done">Done</option>
                    </select>
                    <button
                      type="button"
                      onClick={() => onDelete(enquiry.id, enquiry.name)}
                      disabled={deletingId === enquiry.id}
                      className="inline-flex items-center gap-1.5 border border-red-700 bg-red-600 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-red-700 hover:border-red-800 disabled:opacity-50"
                      aria-label="Delete enquiry"
                    >
                      <Trash2 className="h-3.5 w-3.5" strokeWidth={2} />
                      {deletingId === enquiry.id ? "Deleting…" : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

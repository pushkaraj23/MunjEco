"use client";

import { useRouter } from "next/navigation";
import type { EnquiryWithId } from "@/lib/getEnquiries";
import type { EnquiryStatus } from "@/lib/types";
import { updateEnquiryStatus } from "@/lib/updateEnquiryStatus";

type Props = { enquiries: EnquiryWithId[] };

function formatDate(createdAt?: { seconds: number; nanoseconds: number }) {
  if (!createdAt) return "—";
  return new Date(createdAt.seconds * 1000).toLocaleString();
}

const statusStyles: Record<
  EnquiryStatus,
  { card: string; badge: string; label: string }
> = {
  new: {
    card: "border-l-4 border-l-matcha bg-matcha/5",
    badge: "bg-matcha text-white",
    label: "New",
  },
  ongoing: {
    card: "border-l-4 border-l-chai bg-chai/10",
    badge: "bg-chai/90 text-white",
    label: "Ongoing",
  },
  done: {
    card: "border-l-4 border-l-foreground-muted/40 bg-background-alt/50",
    badge: "bg-foreground-muted/30 text-foreground-muted",
    label: "Done",
  },
};

export function EnquiriesTable({ enquiries }: Props) {
  const router = useRouter();

  async function onStatusChange(id: string, value: EnquiryStatus) {
    await updateEnquiryStatus(id, value);
    router.refresh();
  }

  if (enquiries.length === 0) {
    return (
      <div className="rounded-3xl border border-almond bg-surface p-12 text-center shadow-card">
        <p className="text-foreground-muted">No enquiries yet.</p>
        <p className="mt-2 text-sm text-foreground-muted">
          Enquiries will appear here when users submit the contact form.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {enquiries.map((enquiry) => {
        const status = enquiry.status ?? "new";
        const style = statusStyles[status];
        return (
          <div
            key={enquiry.id}
            className={`rounded-3xl border border-almond bg-surface p-5 shadow-card sm:p-6 ${style.card}`}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2 gap-y-1">
                  <span className="font-display text-lg font-semibold text-carob">
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
                    className="text-matcha hover:underline"
                  >
                    {enquiry.email}
                  </a>
                  <a
                    href={`tel:${enquiry.phone}`}
                    className="text-matcha hover:underline"
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
                  className="rounded-xl border border-almond bg-white px-3 py-2 text-sm font-medium text-foreground shadow-sm outline-none focus:border-matcha"
                  aria-label="Change status"
                >
                  <option value="new">New</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="done">Done</option>
                </select>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

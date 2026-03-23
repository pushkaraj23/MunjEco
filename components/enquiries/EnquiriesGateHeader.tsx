"use client";

import { enquiriesGateLogout } from "@/app/actions/enquiriesGateAuth";
import { LogOut } from "lucide-react";

export function EnquiriesGateHeader() {
  return (
    <div className="mb-5 flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted">
          Enquiries
        </p>
        <h1 className="font-heading text-xl font-semibold tracking-tight text-foreground md:text-2xl">
          Website enquiries
        </h1>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-foreground-muted">
          All enquiries submitted from the website contact and product forms.
        </p>
      </div>
      <form action={enquiriesGateLogout}>
        <button
          type="submit"
          className="inline-flex items-center gap-2 border border-border bg-background-alt px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
        >
          <LogOut className="h-4 w-4" strokeWidth={1.5} />
          Sign out
        </button>
      </form>
    </div>
  );
}

import { getEnquiries } from "@/lib/getEnquiries";
import { EnquiriesTable } from "@/components/admin/EnquiriesTable";

export const dynamic = "force-dynamic";

export default async function EnquiriesPage() {
  const enquiries = await getEnquiries();

  return (
    <div className="pt-0">
      <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted">
        Admin
      </p>
      <h1 className="font-heading mb-1 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Enquiries
      </h1>
      <p className="mb-5 max-w-xl text-sm leading-relaxed text-foreground-muted">
        All enquiries submitted from the website contact and product forms.
      </p>
      <EnquiriesTable enquiries={enquiries} />
    </div>
  );
}

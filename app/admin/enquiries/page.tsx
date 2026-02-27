import { getEnquiries } from "@/lib/getEnquiries";
import { EnquiriesTable } from "./EnquiriesTable";

export default async function EnquiriesPage() {
  const enquiries = await getEnquiries();

  return (
    <div>
      <h1 className="font-display mb-6 text-2xl font-semibold text-carob">
        Enquiries
      </h1>
      <p className="mb-8 text-foreground-muted">
        All enquiries submitted from the website contact and product forms.
      </p>
      <EnquiriesTable enquiries={enquiries} />
    </div>
  );
}

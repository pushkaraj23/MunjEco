import { getEnquiries } from "@/lib/getEnquiries";
import { EnquiriesTable } from "@/components/admin/EnquiriesTable";
import { EnquiriesGateHeader } from "@/components/enquiries/EnquiriesGateHeader";

export const dynamic = "force-dynamic";

export default async function EnquiriesGatePage() {
  const enquiries = await getEnquiries();

  return (
    <div className="min-h-screen bg-background px-6 pt-14 pb-16 md:px-10 md:pt-16 md:pb-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <EnquiriesGateHeader />
        <EnquiriesTable enquiries={enquiries} />
      </div>
    </div>
  );
}

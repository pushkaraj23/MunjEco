import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiries",
  description: "Website enquiries",
  robots: "noindex, nofollow",
};

export default function EnquiriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

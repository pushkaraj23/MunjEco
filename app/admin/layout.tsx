import type { Metadata } from "next";
import { AdminLayoutContent } from "./AdminLayoutContent";

export const metadata: Metadata = {
  title: "Admin | MunjEco Global",
  description: "Admin panel",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayoutContent>{children}</AdminLayoutContent>;
}

import type { Metadata } from "next";
import { AdminNav } from "./AdminNav";

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
  return (
    <div className="min-h-screen bg-background grid grid-cols-1 md:grid-cols-[250px_1fr]">
      <AdminNav />
      <main className="min-h-screen p-6 pt-24 md:pl-64 md:px-8 md:pb-8 md:pt-8 lg:px-10 lg:pb-10 lg:pt-10">
        <div className="mx-auto max-w-7xl">{children}</div>
      </main>
    </div>
  );
}

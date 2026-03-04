"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { adminLogout } from "@/app/actions/adminAuth";
import { LogOut } from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/enquiries", label: "Enquiries" },
  { href: "/admin/categories", label: "Categories" },
  { href: "/admin/products", label: "Products" },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-border bg-background-alt md:flex">
      <div className="flex h-16 items-center border-b border-border px-4">
        <Link href="/admin" className="flex items-center gap-2">
          <Image
            src="/full-logo.png"
            alt="MunjEco Admin"
            width={120}
            height={28}
            className="h-7 w-auto object-contain"
          />
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-foreground-muted">
            Admin
          </span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] transition-all ${
                isActive
                  ? "bg-primary text-white"
                  : "text-foreground-muted hover:bg-primary/5 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="mt-6 border-t border-border pt-4">
          <form action={adminLogout}>
            <button
              type="submit"
              className="flex w-full items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-foreground-muted transition-all hover:bg-accent/5 hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </button>
          </form>
        </div>
      </nav>
    </aside>
  );
}

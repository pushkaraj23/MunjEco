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
    <aside className="hidden w-64 flex-col border-r border-almond bg-surface md:flex">
      <div className="flex h-16 items-center border-b border-almond px-4">
        <Link href="/admin" className="flex items-center gap-2">
          <Image
            src="/full-logo.png"
            alt="MunjEco Admin"
            width={120}
            height={28}
            className="h-7 w-auto object-contain"
          />
          <span className="text-xs font-medium text-foreground-muted">Admin</span>
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
              className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                isActive
                  ? "bg-matcha text-white"
                  : "text-foreground-muted hover:bg-matcha/10 hover:text-carob"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <div className="mt-6 border-t border-almond pt-4">
          <form action={adminLogout}>
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-foreground-muted transition-all hover:bg-chai/10 hover:text-carob"
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

import Link from "next/link";
import { getEnquiries } from "@/lib/getEnquiries";
import { getCategories } from "@/lib/categories";
import { getProducts } from "@/lib/getProducts";

export default async function AdminDashboardPage() {
  const [enquiries, categories, products] = await Promise.all([
    getEnquiries(100),
    getCategories(),
    getProducts(),
  ]);

  const featuredCount = products.filter((p) => p.featured).length;

  const stats = [
    {
      label: "Enquiries",
      count: enquiries.length,
      href: "/admin/enquiries",
      description: "Contact form submissions",
    },
    {
      label: "Categories",
      count: categories.length,
      href: "/admin/categories",
      description: "Product categories",
    },
    {
      label: "Products",
      count: products.length,
      href: "/admin/products",
      description: `${featuredCount} featured`,
    },
  ];

  return (
    <div className="pt-2">
      <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-foreground-muted">
        Admin Overview
      </p>
      <h1 className="font-heading mb-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        Dashboard
      </h1>
      <p className="mb-8 max-w-xl text-sm leading-relaxed text-foreground-muted">
        Overview of your MunjEco admin data. Click a card to manage each
        section.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.href}
            href={stat.href}
            className="group block border border-border bg-background-alt px-6 py-5 shadow-card transition-all hover:border-primary/40 hover:shadow-elevated"
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-foreground-muted">
              {stat.label}
            </p>
            <p className="mt-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
              {stat.count}
            </p>
            <p className="mt-1 text-xs text-foreground-muted">
              {stat.description}
            </p>
            <span className="mt-4 inline-flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-primary group-hover:text-accent">
              <span>View</span>
              <span className="ml-1">→</span>
            </span>
          </Link>
        ))}
      </div>

      {enquiries.length > 0 && (
        <div className="mt-10">
          <h2 className="font-heading mb-2 text-lg font-semibold tracking-tight text-foreground">
            Recent Enquiries
          </h2>
          <div className="border border-border bg-background-alt shadow-card">
            <div className="divide-y divide-border/70">
              {enquiries.slice(0, 5).map((e) => (
                <Link
                  key={e.id}
                  href="/admin/enquiries"
                  className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-primary/5"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {e.name}
                    </p>
                    <p className="text-sm text-foreground-muted">{e.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">
                      {e.product}
                    </p>
                    <p className="text-xs text-foreground-muted">
                      {e.createdAt
                        ? new Date(e.createdAt.seconds * 1000).toLocaleDateString()
                        : "—"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/admin/enquiries"
              className="block border-t border-border px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.26em] text-primary hover:bg-primary/5"
            >
              View all enquiries →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

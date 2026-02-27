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
    <div>
      <h1 className="font-display mb-6 text-2xl font-semibold text-carob">
        Dashboard
      </h1>
      <p className="mb-8 text-foreground-muted">
        Overview of your MunjEco admin data. Click a card to manage each
        section.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.href}
            href={stat.href}
            className="group block rounded-3xl border border-almond bg-surface p-6 shadow-card transition-all hover:border-matcha/30 hover:shadow-elevated"
          >
            <p className="text-sm font-medium text-foreground-muted">
              {stat.label}
            </p>
            <p className="mt-2 font-display text-3xl font-semibold text-carob">
              {stat.count}
            </p>
            <p className="mt-1 text-xs text-foreground-muted">{stat.description}</p>
            <span className="mt-3 inline-block text-sm font-medium text-matcha group-hover:underline">
              View →
            </span>
          </Link>
        ))}
      </div>

      {enquiries.length > 0 && (
        <div className="mt-10">
          <h2 className="font-display mb-4 text-lg font-semibold text-carob">
            Recent Enquiries
          </h2>
          <div className="rounded-3xl border border-almond bg-surface shadow-card">
            <div className="divide-y divide-almond/50">
              {enquiries.slice(0, 5).map((e) => (
                <Link
                  key={e.id}
                  href="/admin/enquiries"
                  className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-matcha/5"
                >
                  <div>
                    <p className="font-medium text-carob">{e.name}</p>
                    <p className="text-sm text-foreground-muted">{e.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-carob">{e.product}</p>
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
              className="block border-t border-almond px-6 py-3 text-center text-sm font-medium text-matcha hover:bg-matcha/5"
            >
              View all enquiries →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

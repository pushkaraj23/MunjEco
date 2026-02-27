import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/lib/getProducts";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Badge } from "@/components/Badge";
import { ProductGallery } from "@/components/ProductGallery";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <Link
              href="/products"
              className="text-sm text-foreground-muted transition-all duration-300 hover:text-matcha"
            >
              ← Back to Products
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:self-start lg:sticky lg:top-24">
              <div className="space-y-6">
                <ProductGallery name={product.name} images={product.images} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <Badge variant="default" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="font-display text-3xl font-semibold text-carob md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-foreground-muted leading-relaxed">
                {product.description}
              </p>

              {product.specifications && Object.keys(product.specifications).length > 0 && (
                <div className="mt-8">
                  <h3 className="font-display text-lg font-semibold text-carob">
                    Specifications
                  </h3>
                  <dl className="mt-3 space-y-2">
                    {Object.entries(product.specifications).map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 border-b border-almond pb-2">
                        <dt className="text-foreground-muted">{k}</dt>
                        <dd className="font-medium text-carob">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              <div className="glass mt-8 rounded-3xl border border-almond p-6 shadow-card">
                <h3 id="enquiry" className="font-display text-lg font-semibold text-carob">
                  Request a Quote
                </h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  Share your requirements and we&apos;ll respond with pricing.
                </p>
                <div className="mt-4">
                  <EnquiryForm defaultProduct={product.name} compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

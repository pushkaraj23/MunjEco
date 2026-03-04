import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/getProducts";
import { ProductDetailContent } from "@/components/product/ProductDetailContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found | MunjEco Global",
    };
  }

  const baseDescription =
    product.description && product.description.length > 0
      ? product.description
      : `Eco‑friendly ${product.name} exported from India by MunjEco Global.`;

  const description =
    baseDescription.length > 155
      ? `${baseDescription.slice(0, 152)}...`
      : baseDescription;

  return {
    title: `${product.name} | Eco‑Friendly Indian Export`,
    description,
    openGraph: {
      type: "product",
      title: `${product.name} | Eco‑Friendly Indian Export`,
      description,
      url: `/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-background">
      <ProductDetailContent product={product} />
    </div>
  );
}

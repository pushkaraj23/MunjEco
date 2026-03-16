import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getProducts, getProductsByCategory } from "@/lib/getProducts";
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
      type: "website",
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

  const pool =
    product.category && product.category.trim().length > 0
      ? await getProductsByCategory(product.category)
      : await getProducts();

  const recommended = pool
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <ProductDetailContent product={product} recommended={recommended} />
    </div>
  );
}

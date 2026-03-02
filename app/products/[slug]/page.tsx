import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/getProducts";
import { ProductDetailContent } from "@/components/ProductDetailContent";

type Props = { params: Promise<{ slug: string }> };

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

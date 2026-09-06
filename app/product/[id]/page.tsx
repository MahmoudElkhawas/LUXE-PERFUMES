import { notFound } from 'next/navigation';
import { getShopProduct } from '@/lib/products';
import { ProductDetails } from '@/components/product-details';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getShopProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
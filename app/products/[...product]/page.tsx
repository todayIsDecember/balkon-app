import { getProduct } from "@/app/api/getProduct"
import { ProductPage } from "@/app/components"

export default async function Product({params}: {params: {product: number}}) {
  const product = await getProduct(params.product)
  return (
    <div>
      <ProductPage product={product}/>
    </div>
  )
}
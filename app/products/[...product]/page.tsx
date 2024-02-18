import { getProduct } from "@/app/api/getProduct"
import { ProductPage, Wrapper } from "@/app/components"

export default async function Product({params}: {params: {product: number}}) {
  const product = await getProduct(params.product)
  return (
    <Wrapper>
      <ProductPage product={product}/>
    </Wrapper>
  )
}
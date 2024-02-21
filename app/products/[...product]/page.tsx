import { getProduct } from "@/app/api/getProduct"
import { ProductPage, Wrapper } from "@/app/components"
import styles from './page.module.css'

export default async function Product({params}: {params: {product: number}}) {
  const product = await getProduct(params.product)
  return (
    <Wrapper className={styles.wrapper}>
      <ProductPage product={product}/>
    </Wrapper>
  )
}
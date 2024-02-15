'use client'

import { ProductPageProps } from "./ProductPage.props";
import styles from './ProductPage.module.css'
import cn from 'classnames'
import Image from 'next/image'
import PriceIcon from '../../../public/price.svg'
import WeightIcon from '../../../public/weight.svg'
import { Button } from "../button/Button";
import {useRouter} from 'next/navigation'

export const ProductPage = ({product, className, ...props}: ProductPageProps) => {
  const router = useRouter()

  return (
    <div
      className={cn(className, styles.product)}
      {...props}
    >
      <div className={styles.conteinerImage}>
        <Image
          src={`${process.env.NEXT_PUBLIC_DOMAIN}/${product.product_photo}`}
          alt="photo"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.title}>{product.product_name}</div>
      <div className={styles.desc}>{product.product_description}</div>
      <PriceIcon className={styles.priceIcon}/>
      <div className={styles.price}>{product.product_price} грн</div>
      <WeightIcon className={styles.weightIcon}/>
      <div className={styles.weight}>{product.product_weight} г</div>
      <Button appiarence="btn_main" className={styles.backBtn} onClick={(e) => {router.back()}}>Повернутись до меню</Button>
    </div>
  )
}
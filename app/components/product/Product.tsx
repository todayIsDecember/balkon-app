'use client'

import { ProductProps } from "./Product.props";
import styles from './Product.module.css'
import cn from 'classnames'
import Image from 'next/image'
import PriceIcon from '../../../public/price.svg'
import WeightIcon from '../../../public/weight.svg'
import { useState } from "react";

export const Product = ({product, className, ...props}: ProductProps) => {
  const [IsActive, setIsActive] = useState<boolean>(false)

  return (
    <div
      className={cn(className, styles.product, {
        [styles.active]: IsActive
      })}
      {...props}
      onClick={() => setIsActive(!IsActive)}
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
    </div>
  )
}
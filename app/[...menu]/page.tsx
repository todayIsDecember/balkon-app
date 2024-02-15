import { getMainCategories } from '../api/getMainCategories'
import { Button, Product } from "../components"
import styles from './page.module.css'
import cn from 'classnames'
import Image from 'next/image'
import { getCategories } from "../api/getCategories"
import { ICategory } from "../interfaces/categories.interface"
import Link from 'next/link'
import { IProduct } from "../interfaces/product.interface"
import ArrowIcon from '../../public/arrow.svg'

export default async function Menu({params}: {params: {menu: string[]}}) {
  const menuList = await getMainCategories()

  if(params.menu.length == 1) {

    return (
      <div className={styles.menuSection}>
        <Link href='./' className={styles.back}>
            <Button appiarence='back'>
              <ArrowIcon/>
            </Button>
        </Link>
        <div className={styles.menuTitle}>меню</div>
        {menuList.map((m: ICategory) => {
          return <Link
          href={`/menu/${m.category_id}`}
          key={m.category_id}
          scroll
          >
            <Button
              appiarence="category"
              className={styles.category}
              >
                <Image
                src={`${process.env.NEXT_PUBLIC_DOMAIN}/${m.category_photo}`}
                alt="category_img"
                fill
                priority
                className={styles.category_photo}/>
              {m.category_title}
            </Button>
          </Link>
        })}
      </div>
    )
  }
  else if(params.menu.length == 2) {
    {
      const category: ICategory = await getCategories(Number(params.menu[1]))

      return (
        <div className={styles.menuSection}>
          <Link href='./' className={styles.back}>
            <Button appiarence='back'>
              <ArrowIcon/>
            </Button>
          </Link>
          <div className={styles.menuTitle}>{
            category.category_title
          }</div>
          {category.other_categories.map((m:any) => {
            return <Link
            href={`/menu/${params.menu[1]}/${m.category_id}`}
            key={m.category_id}
            className={styles.category}
            scroll
            >
              <Button
              appiarence="category"
              className={styles.category}
              >
                <Image
                src={`${process.env.NEXT_PUBLIC_DOMAIN}/${m.category_photo}`}
                alt="category_img"
                fill
                priority
                className={styles.category_photo}/>
              {m.category_title}
              </Button>
            </Link>
          })}
        </div>
      )
    }
  }
  else if(params.menu.length == 3) {
    const category: ICategory = await getCategories(Number(params.menu[2]))
    if(category.other_categories.length) {
      return(
        <div className={styles.menuSection}>
          <Link href='./' className={styles.back}>
            <Button appiarence='back'>
              <ArrowIcon/>
            </Button>
          </Link>
          <div className={styles.menuTitle}>{
            category.category_title
          }</div>
          {category.other_categories.map((m:any) => {
            return <Link
            href={`/menu/${params.menu[1]}/${params.menu[2]}/${m.category_id}`}
            key={m.category_id}
            className={styles.category}
            scroll
            >
              <Button
              appiarence="category"
              className={styles.category}
              >
                <Image
                src={`${process.env.NEXT_PUBLIC_DOMAIN}/${m.category_photo}`}
                alt="category_img"
                fill
                priority
                className={styles.category_photo}/>
              {m.category_title}
              </Button>
            </Link>
          })}
        </div>
      )
    }else {
      return (
        <div className={styles.productSection}>
          <Link href='./' className={styles.back}>
            <Button appiarence='back'>
              <ArrowIcon/>
            </Button>
          </Link>
          <div className={styles.menuTitle}>{
            category.category_title
          }</div>
          {category.products.map((p:IProduct) => {
            return <Link
            href={`/products/${p.product_id}`}
            key={p.product_id}
            className={styles.category}
            scroll
            >
              <Product product={p}/>
            </Link>
          })}
        </div>
      )
    }
  }
  else if(params.menu.length == 4) {
    const category: ICategory = await getCategories(Number(params.menu[3]))
    return (
      <div className={styles.productSection}>
        <Link href='./' className={styles.back}>
          <Button appiarence='back'>
            <ArrowIcon/>
          </Button>
        </Link>
        <div className={styles.menuTitle}>{
          category.category_title
        }</div>
        {category.products.map((p:IProduct) => {
          return <Link
          href={`/products/${p.product_id}`}
          key={p.product_id}
          className={styles.category}
          scroll
          >
            <Product product={p}/>
          </Link>
        })}
      </div>
    )
  }
}
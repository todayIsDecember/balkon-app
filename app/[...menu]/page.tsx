import { Metadata } from "next"
import { getMenu } from "../api/getMenu"
import { Button } from "../components"
import { IMenu } from "../interfaces/menu.interface"
import styles from './page.module.css'
import cn from 'classnames'
import Image from 'next/image'
import { getFirstCategories } from "../api/getFirstCategories"
import { IFirstCategory } from "../interfaces/firstCategories.interface"
import Link from 'next/link'
import { getSecondCategory } from "../api/getSecondCategories"
import { ISecondCategory } from "../interfaces/secondCategories.interface"
import { getFirstCategoryById } from "../api/getFirstCategoryByIs"

export const metadata: Metadata = {
  title: 'Balkon IF -> Меню'
}

export default async function Menu({params}: {params: {menu: string[]}}) {
  const menuList = await getMenu()

  if(params.menu.length == 1) {

    return (
      <div className={styles.wrapper}>
      <div className={styles.menuTitle}>меню</div>
      {menuList.map((m: IMenu) => {
        return <Link
        href={`/menu/${m.menu_id}`}
        key={m.menu_id}
        scroll
        >
        <Button
          key={m.menu_id}
          appiarence="category"
          className={styles.category}
          >
          <Image
          src={`${process.env.NEXT_PUBLIC_DOMAIN}/${m.menu_photo}`}
          alt="category_img"
          fill
          priority
          className={styles.category_photo}/>
          {m.menu_name}
          </Button>
        </Link>
      })}
      </div>
    )
  }
  else if(params.menu.length == 2) {
    {
      const firstCategory = await getFirstCategories(Number(params.menu[1]))

      return (
        <div className={styles.wrapper}>
        <div className={styles.menuTitle}>{
          menuList[Number(params.menu[1]) - 1].menu_name
        }</div>
        {firstCategory.map((m: IFirstCategory) => {
          return <Link
          href={`/menu/${params.menu[1]}/${m.first_category_id}`}
          key={m.first_category_id}
          className={styles.category}
          scroll
          ><Button
          appiarence="category"
          className={styles.category}
          >
          <Image
          src={`${process.env.NEXT_PUBLIC_DOMAIN}/${m.first_category_photo}`}
          alt="category_img"
          fill
          priority
          className={styles.category_photo}/>
          {m.first_category_name}
          </Button></Link>
        })}
        </div>
      )
    }
  }
  else if(params.menu.length == 3) {
      const secondCategories = await getSecondCategory(Number(params.menu[2]))
      const firstCategory: IFirstCategory = await getFirstCategoryById(Number(params.menu[2]))
      if(secondCategories.length) {
      return (
        <div className={styles.wrapper}>
        <div className={styles.menuTitle}>{
          firstCategory.first_category_name
        }</div>
        {secondCategories.map((m: ISecondCategory) => {
          return <Link
          href={`/menu/${params.menu[1]}/${params.menu[2]}/${m.second_category_id}`}
          key={m.second_category_id}
          className={styles.category}
          scroll
          ><Button
          appiarence="category"
          className={styles.category}
          >
          <Image
          src={`${process.env.NEXT_PUBLIC_DOMAIN}/${m.second_category_photo}`}
          alt="category_img"
          fill
          priority
          className={styles.category_photo}/>
          {m.second_category_name}
          </Button></Link>
        })}
        </div>
      )
      }else {
        return (
          <div className={styles.wrapper}>Products</div>
        )
      }
  }
  else if(params.menu.length == 4) {
    return (
      <div className={styles.wrapper}>
        Products
      </div>
    )

}
}
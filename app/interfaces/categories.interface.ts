import { IProduct } from "./product.interface"

export interface ICategory {
  category_id: number,
  category_title: string,
  category_photo: string,
  father_id: number,
  categories?: {
    category_title: string,
  }
  other_categories: {
    category_id: number,
    category_title: string,
    category_photo: string,
    father_id: number,
    categories: {
      category_title: string
    }
  }[]
  products: IProduct[]
}
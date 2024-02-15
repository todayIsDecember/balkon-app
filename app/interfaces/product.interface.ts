export interface IProduct {
  product_id: number,
  product_name: string,
  product_photo: string,
  product_description: string,
  product_price: number,
  product_weight: number,
  first_category_id: number,
  second_category_id?: number,
}
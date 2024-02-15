export function getProductsByFirstId(id: number) {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/products/byFirstCategoryId/${id}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())
}
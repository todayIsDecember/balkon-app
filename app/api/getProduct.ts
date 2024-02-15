export function getProduct(id: number) {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/products/${id}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }).then(res => res.json())
}
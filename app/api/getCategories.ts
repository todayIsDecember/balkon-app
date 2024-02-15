export function getCategories(id: number) {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/categories/${id}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())
}
export function getFirstCategoryById(id: number) {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/first-categories/byId/${id}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }).then(res => res.json())
}
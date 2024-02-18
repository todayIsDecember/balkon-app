export function getMainCategories() {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/categories`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())
}
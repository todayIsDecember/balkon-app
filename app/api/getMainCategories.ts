export function getMainCategories() {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/categories`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    next: {revalidate: 5}
  }).then(res => res.json())
}
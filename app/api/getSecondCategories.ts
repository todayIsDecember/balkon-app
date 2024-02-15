export function getSecondCategory(id: number) {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/second-categories/byMenuId/${id}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())
}
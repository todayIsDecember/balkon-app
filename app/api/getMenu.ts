export function getMenu() {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/menu`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())
}
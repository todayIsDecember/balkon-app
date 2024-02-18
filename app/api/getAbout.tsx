export function getAbout() {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/about`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then(res => res.json())
}
import { IReview } from "../interfaces/reviewInterface";

export function createReview(data: Pick<IReview, 'description' | 'raiting'>) {
  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/reviews`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "description": data.description,
      "raiting": data.raiting
    })
  }).then(res => res.json())
}
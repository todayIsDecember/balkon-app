import { Metadata } from "next"
import { Review } from "../components"
import styles from './page.module.css'
import { getReviews } from "../api/getReviews"
import { IReview } from "../interfaces/reviewInterface"

export const metadata: Metadata = {
  title: 'Balkon IF -> Reviews'
}

export default async function Reviews() {
  const reviewsData = await getReviews()

  return (
    <div className={styles.wrapper}>
      <div className={styles.reviewsContainer}>
        <div className={styles.title}>Кількість відгуків: {reviewsData.count}</div>
        {reviewsData.reviews.map((r: IReview) => <Review key={r.review_id} review={r}/>)}
      </div>
    </div>
  )
}
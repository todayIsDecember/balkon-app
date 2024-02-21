import { Metadata } from "next"
import { Review, ReviewForm, Wrapper } from "../components"
import styles from './page.module.css'
import { getReviews } from "../api/getReviews"
import { IReview } from "../interfaces/reviewInterface"

export const metadata: Metadata = {
  title: 'Balkon IF -> Reviews'
}

export default async function Reviews() {
  const reviewsData = await getReviews()

  return (
    <Wrapper>
      <ReviewForm></ReviewForm>
      <div className={styles.reviewsContainer}>
        <div className={styles.title}>
        <div className={styles.avg}>{reviewsData['avg']['_avg']['raiting'].toFixed(1)} із 5</div>
        <div className={styles.count}>Всього відгуків: {reviewsData.count}</div>
        </div>
        {reviewsData.reviews.map((r: IReview) => <Review key={r.review_id} review={r}/>)}
      </div>
    </Wrapper>
  )
}
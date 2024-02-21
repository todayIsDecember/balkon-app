import { ReviewProps } from "./ReviewProps";
import cn from 'classnames'
import styles from './Review.module.css'
import { Raiting } from "../rating/Rating";

export const Review =({review, className, ...props}: ReviewProps):JSX.Element => {
  return (
    <div {...props} className={cn(className, styles.review)}>
      <div className={styles.created}>{review.created}</div>
      <Raiting rating={review.raiting} className={styles.rating}/>
      <div className={styles.description}>{review.description}</div>
    </div>
  )
}
import { ReviewProps } from "./ReviewProps";
import cn from 'classnames'
import styles from './Review.module.css'
import { Raiting } from "../rating/Rating";

export const Review =({review, className, ...props}: ReviewProps):JSX.Element => {
  return (
    <div {...props} className={cn(className, styles.review)}>
      <div className={styles.created}>{review.created}</div>
      <div className={styles.food}>Їжа:</div>
      <Raiting rating={review.foodraiting} className={styles.foodRaiting}/>
      <div className={styles.service}>Сервіс:</div>
      <Raiting rating={review.serviceraiting} className={styles.serviceRaiting}/>
      <div className={styles.atmosphere}>Атмосфера:</div>
      <Raiting rating={review.atmosthereraiting} className={styles.atmosthereRaiting}/>
      <div className={styles.text}>{review.title}</div>
    </div>
  )
}
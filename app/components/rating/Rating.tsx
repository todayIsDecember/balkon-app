'use client'

import { RatingProps } from "./RatingProps";
import StarIcon from '../../../public/star.svg'
import styles from './Rating.module.css'
import cn from 'classnames'
import { useEffect, useState } from "react";

export const Raiting = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
  const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
    constructRaiting(rating)
  }, [rating])

  const constructRaiting = (currentRaiting: number) => {
    const updatedArray = raitingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
        className={cn(styles.star, {
          [styles.filled]: i < currentRaiting
        })}
        key={i}
        />
      )
    })
    setRaitingArray(updatedArray)
  }

  return (
    <div {...props}>
      {raitingArray.map(r => (r))}
    </div>
  )
}
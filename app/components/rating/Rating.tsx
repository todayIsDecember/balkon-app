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
        key={i}
        className={cn(styles.star, {
          [styles.filled]: i < currentRaiting,
          [styles.editable]: isEditable
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClicked(i + 1)}
        />
      )
    })
    setRaitingArray(updatedArray)
  }

  const changeDisplay = (i: number) => {
    if(!isEditable) {
      return
    }
    constructRaiting(i)
  }

  const onClicked = (i: number) => {
    if(!isEditable || !setRating) {
      return
    }
    setRating(i)
  }
  return (
    <div {...props}>
      {raitingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  )
}
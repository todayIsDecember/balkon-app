'use client'
import cn from 'classnames'
import styles from './ReviewForm.module.css'

import { ReviewFormProps } from "./ReviewFormProps"
import { Raiting } from '../rating/Rating'
import { Button } from '../button/Button'
import { Controller, useForm } from 'react-hook-form'
import { IReview } from '@/app/interfaces/reviewInterface'
import { Textarea } from '../textarea/Textarea'
import { ForwardedRef, forwardRef } from 'react'
import { createReview } from '@/app/api/createReview'

// eslint-disable-next-line react/display-name
export const ReviewForm = forwardRef(({className, ...props}: ReviewFormProps, ref: ForwardedRef<HTMLFormElement>): JSX.Element => {
  const {register, control, handleSubmit, reset} = useForm<Pick<IReview, 'description' | 'raiting'>>()
  const onSubmit = async(formData: Pick<IReview, 'description' | 'raiting'>) => {
    try {
      await createReview(formData)
      reset()
    } catch (error) {
      console.log(error);

    }

  }
  return (
    <form className={cn(className, styles.form)} {...props} onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <p className={styles.title}>Залиште свій відгук</p>
      <Controller
        control={control}
        name='raiting'
        render={({field}) => (<Raiting isEditable rating={field.value} setRating={field.onChange}/>)}
      />
      <Textarea placeholder='Відгук...' className={styles.textarea} {...register('description')}/>
      <Button appiarence='btn_main' className={styles.btn}>Відправити відгук</Button>
    </form>
  )
})
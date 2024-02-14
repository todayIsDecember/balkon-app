import { ButtonProps } from "./ButtonProps";
import styles from './Button.module.css'
import cn from 'classnames'

export const Button = ({children, appiarence, className, ...props}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.btn_main]: appiarence == 'btn_main',
        [styles.category]: appiarence == 'category'
      })}
    >{children}</button>
  )
}
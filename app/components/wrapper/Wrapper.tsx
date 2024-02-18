import styles from './Wrapper.module.css'
import cn from 'classnames'
import { WrapperProps } from './WrapperProps'

export const Wrapper = ({children, className, ...props}: WrapperProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {children}
    </div>
  )
}
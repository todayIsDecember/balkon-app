import styles from "./page.module.css";
import { Button } from "./components";
import Link from 'next/link'
import cn from 'classnames'

export default function Home() {
  return (
    <main className={styles.main}>
        <Link className={cn(styles.btn, styles.btn1)} href='./menu'><Button appiarence="btn_main">меню</Button></Link>
        <Link className={cn(styles.btn, styles.btn2)} href='./reviews'><Button appiarence="btn_main">відгуки</Button></Link>
        <Link className={cn(styles.btn, styles.btn3)} href='./about'><Button appiarence="btn_main">Про нас</Button></Link>
        <Link className={cn(styles.btn, styles.btn4)} href='./reviews'><Button appiarence="btn_main">Резерви</Button></Link>
    </main>
  );
}

import styles from "./page.module.css";
import Image from 'next/image'
import { Button } from "./components";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
        <Link className={styles.btn} href='./menu'><Button appiarence="btn_main">меню</Button></Link>
        <Link className={styles.btn} href='./reviews'><Button appiarence="btn_main">відгуки</Button></Link>
    </main>
  );
}

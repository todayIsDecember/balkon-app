import { Metadata } from 'next';
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Balkon IF -> Меню'
}

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

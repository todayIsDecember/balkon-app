import { Metadata } from 'next';
import styles from './page.module.css'
import { Wrapper } from '../components';

export const metadata: Metadata = {
  title: 'Balkon IF -> Меню'
}

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Wrapper> {children}</Wrapper>
  )
}

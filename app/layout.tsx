import type { Metadata } from "next";
import "./globals.css";
import {open_Sans} from './ui/fonts'
import styles from './page.module.css'
import Image from 'next/image'
import LogoIcon from '../public/logo.svg'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Balkon IF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      </head>
      <body className={open_Sans.className}>
      <Image src='/images/bg.jpg' alt="fone" fill className={styles.backgroundPhoto} priority/>
        <div className={styles.container}>
          <Link className={styles.logo} href='/'>
            <LogoIcon className={styles.logoIcon}/>
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import {raleway} from './ui/fonts'
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
      <body className={raleway.className}>
      <Image src='/images/26.jpg' alt="fone" fill className={styles.backgroundPhoto} priority/>
        <div className={styles.container}>
          <Link className={styles.logo} href='/'>
            <LogoIcon/>
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}

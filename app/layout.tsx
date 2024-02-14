import type { Metadata } from "next";
import "./globals.css";
import {raleway} from './ui/fonts'
import styles from './page.module.css'
import Image from 'next/image'
import LogoIcon from '../public/logo.svg'

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
          <LogoIcon className={styles.logo}/>
          {children}
        </div>
      </body>
    </html>
  );
}

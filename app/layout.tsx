import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FooterLayout } from "./components/FooterLayout";
import { HeaderLayout } from "./components/HeaderLayout";
import "./globals.css";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderLayout />
        <div className={styles.body_container}>
          <main className={styles.main}>
            {children}
          </main>
        </div>
        <FooterLayout />
      </body>
    </html>
  );
}

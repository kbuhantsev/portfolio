"use client";

import Head from "next/head";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Script from "next/script";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Kostiantyn | Full stack developer",
  description: "Full stack developer Kostiantyn Bukhantsev",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head></Head>
      <body className={montserrat.className}>
        <Script src="/files/tailwindScript.js" />
        <Layout>
          <NavBar />
          <AnimatePresence>
            <main key={pathname} className="">
              {children}
            </main>
          </AnimatePresence>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}

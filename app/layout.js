import Head from "next/head";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

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
  return (
    <html lang="en">
      <Head></Head>
      <body className={montserrat.className}>
        <main className="bg-light text-dark w-full min-h-screen dark:bg-dark dark:text-light">
          <NavBar />
          <Layout>{children}</Layout>
          <Footer />
        </main>
      </body>
    </html>
  );
}

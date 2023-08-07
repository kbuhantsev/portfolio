import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

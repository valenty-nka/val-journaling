import "./globals.css";
import { Urbanist } from "next/font/google";
import { WindSong } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-base",
});
const windsong = WindSong({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: "400",
});

export const metadata = {
  title: "Val Journaling",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-base bg-light ${urbanist.variable} ${windsong.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

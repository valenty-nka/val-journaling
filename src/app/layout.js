import "./globals.css";
import { Urbanist } from "next/font/google";
import { WindSong } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "../components/Footer";
import siteMetadata from "@/src/utils/siteMetaData";

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
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner], // Must be an absolute URL
  },
  other: {
    "p:domain_verify": "d6d55dc87d6332a4514adfdc73dff6fe",
  },
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

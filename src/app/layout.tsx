import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import Header from "./common/Header";
import Footer from "./common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravarti Culture - Authentic Rajputi Fashion | Traditional Poshaks",
  description:
    "Discover authentic Rajputi fashion at Ravarti Culture. Explore traditional Rajputi poshaks, sarees, bridal wear, and handcrafted accessories with cultural elegance.",
  keywords: [
    "Ravarti Culture",
    "Rajputi Poshak",
    "Rajputi Dress",
    "Traditional Fashion",
    "Rajasthani Poshak",
    "Rajputi Bridal Wear",
    "Rajputi Culture",
    "Rajputi Jewellery",
    "Ethnic Wear India",
  ],
  authors: [{ name: "Ravarti Culture" }],
  creator: "Ravarti Culture",
  publisher: "Ravarti Culture",
  metadataBase: new URL("https://ravarticulture.in"),

  openGraph: {
    type: "website",
    url: "https://ravarticulture.in",
    title: "Ravarti Culture - Authentic Rajputi Fashion | Traditional Poshaks",
    description:
      "Shop authentic Rajputi poshaks, sarees, and ethnic wear at Ravarti Culture. Perfect blend of tradition and elegance.",
    siteName: "Ravarti Culture",
    images: [
      {
        url: "https://ravarticulture.in/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ravarti Culture Rajputi Poshak",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@ravarticulture",
    creator: "@ravarticulture",
    title: "Ravarti Culture - Authentic Rajputi Fashion | Traditional Poshaks",
    description:
      "Shop authentic Rajputi fashion with Ravarti Culture. Explore poshaks, bridal wear, and handcrafted ethnic attire.",
    images: ["https://ravarticulture.in/assets/images/twitter-card.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://ravarticulture.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>
      </head>

      <body

        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header/>
        {children}
      <Footer/>

      </body>
    </html>
  );
}

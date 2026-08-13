import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toba — Your Ultimate E-Commerce Destination",
  description: "Discover the best products, exclusive deals, and a seamless shopping experience at Toba.",
  keywords: ["e-commerce", "online shopping", "Toba", "store", "buy online"],
  authors: [{ name: "Toba Team" }],
  openGraph: {
    title: "Toba — Your Ultimate E-Commerce Destination",
    description: "Discover the best products, exclusive deals, and a seamless shopping experience at Toba.",
    type: "website",
    locale: "en_US",
    siteName: "Toba",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toba — Your Ultimate E-Commerce Destination",
    description: "Discover the best products, exclusive deals, and a seamless shopping experience at Toba.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
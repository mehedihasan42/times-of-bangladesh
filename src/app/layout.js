// "use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "500"], variable:'--font-roboto' });

export const metadata = {
  title: "Try next js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  console.log("from RootLayout");
  return (
    <html lang="en">
      <body className={`${roboto.className} font-roboto`}>{children}</body>
    </html>
  );
}

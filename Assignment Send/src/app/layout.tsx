import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"
import Navbar from "./Navbar/page";
import Footer from "@/Footer/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


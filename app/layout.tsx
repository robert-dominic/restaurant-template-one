import "./globals.css";
import { RootLayoutProps } from "./types";
import Navbar from "@/app/components/Navbar"
import WhatsAppButton from "./components/WhatAppButton";
import Footer from "@/app/components/Footer";
import { Albert_Sans, Montserrat_Alternates, Pacifico } from "next/font/google"

const albertSans = Albert_Sans({ 
  subsets: ["latin"], 
  display: "swap" 
})

const montserratAlternates = Montserrat_Alternates({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
  display: "swap"
})

const pacifico = Pacifico({ 
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-pacifico",
  display: "swap"
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 ${albertSans.className} ${montserratAlternates.variable} ${pacifico.variable}`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
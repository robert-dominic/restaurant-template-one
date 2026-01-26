import "./globals.css";
import { RootLayoutProps } from "./types";
import Navbar from "@/app/components/Navbar"
import WhatsAppButton from "./components/WhatAppButton";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

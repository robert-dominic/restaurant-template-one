import "./globals.css";
import { RootLayoutProps } from "./types";
import Navbar from "@/app/components/Navbar"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

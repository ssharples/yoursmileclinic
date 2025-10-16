import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Smile Clinic - Exceptional Dental Care in Sydney",
  description:
    "Leading dental practice in Sydney offering general dentistry, cosmetic treatments, dental implants, orthodontics, and emergency care. Book your appointment today.",
  keywords: [
    "dentist Sydney",
    "dental clinic",
    "cosmetic dentistry",
    "dental implants",
    "orthodontics",
    "teeth whitening",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

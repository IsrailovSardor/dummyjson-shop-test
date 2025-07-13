import "@/app/globals.scss";

import { Mona_Sans as FontSans } from "next/font/google";
import type React from "react";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Robotics Solutions",
  description: "Comprehensive robotics solutions for businesses of all sizes",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

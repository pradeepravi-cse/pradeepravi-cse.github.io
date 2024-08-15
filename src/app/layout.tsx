import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pradeepkumar | Personal Website",
  description: "A personal portfolio website of pradeepkumar",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-RM4WGMQ3WW"/>
    </html>
  );
}

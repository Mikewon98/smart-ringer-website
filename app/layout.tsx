import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import React from "react";
// @ts-ignore
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Ringer - Intelligent Call Management for Android",
  description:
    "Take control of your phone with Smart Ringer. Selectively silence calls from specific contacts while keeping your phone active for everyone else. Download now on Google Play Store.",
  keywords: [
    "smart ringer",
    "call management",
    "android app",
    "silence calls",
    "contact management",
    "phone app",
  ],
  authors: [{ name: "Michael Wondwossen", url: "https://michaelyze.com" }],
  creator: "Michael Wondwossen",
  publisher: "Michael Wondwossen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

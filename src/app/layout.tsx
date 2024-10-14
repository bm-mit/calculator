import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import {montserratFont} from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserratFont.className}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import LayoutProvider from "@/components/shared/Provider/LayoutProvider";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Nabilfaturr - Portfolio",
  description: "Nabilfaturr's Portfolio",
};

const gradientBg = `bg-gradient-to-r from-blue-950 via-indigo-950 to-violet-950`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${gradientBg} text-white border-slate-600`}
      >
        <LayoutProvider>
          {/* <Header /> */}
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}

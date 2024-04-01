import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Nabilfaturr - Portfolio",
  description: "Nabilfaturr's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="p-2">
          <Header />
          <main className="def-width mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

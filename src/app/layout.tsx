import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const monstserrat = Montserrat({
  variable:'--font-montserrat',
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Lago Moreno Zen",
  description: "Alquileres turisticos en Lago Moreno, Bariloche",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monstserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../app/components/Nav";
import Footer from "../app/components/Footer";
import Whatsapp from "../app/components/Whatsapp";

export const metadata: Metadata = {
  title: "Sacred Healing Foundation",
  description: "A foundation dedicated to holistic healing and wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        </style>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
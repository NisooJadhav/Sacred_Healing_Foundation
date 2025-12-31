import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../app/components/Nav";
import Footer from "../app/components/Footer";
import Whatsapp from "../app/components/Whatsapp";
import { CartProvider } from "./context/CartContext";
import AOSProvider from "../app/components/AOSProvider";

export const metadata: Metadata = {
  title: "Sacred Healing Foundation ~ Poonam Thore",
  description: "A foundation dedicated to holistic healing and wellness.",
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/icon.png" type="image/png" /> */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        </style>
      </head>
      <body>
        <CartProvider>
          <AOSProvider />
          <Nav />
          <main>{children}</main>
          <Whatsapp />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

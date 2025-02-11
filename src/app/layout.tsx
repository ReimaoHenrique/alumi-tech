import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav-bar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsapp-button/whatsapp-button";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Adicione outros elementos de <head> aqui, como links e scripts */}
      </head>
      <body className={inter.className}>
      <Navbar/>
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileWarning from "@/components/MobileWarning";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YCAP",
  description: "Chasser les trésors de la ville", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
      <MobileWarning />
    </html>
  );
}

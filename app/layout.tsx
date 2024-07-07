import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { AppProvider } from "@/providers";

export const metadata: Metadata = {
  title: "TicketsXP",
  description: `Explore a platform where you can find and enjoy every type of event imaginable. 
    From concerts and sports to conferences and community gatherings, there's something for everyone.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ position: "relative" }} className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

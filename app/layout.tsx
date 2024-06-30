import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { Footer } from "@/layouts/footer";
import { AppProvider } from "@/providers";
import Header from "@/layouts/header";
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
      <body className={inter.className}>
        <AppProvider>
          <Header />
          {children}
          <Footer/>
        </AppProvider>
      </body>
    </html>
  );
}

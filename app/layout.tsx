import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { geistMono, geistSans } from "@/utils/Fonts";

export const metadata: Metadata = {
  title: "Kenzchase",
  description: "Kenzchase tourism App",
  creator: "speriasoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        font-sans 
        ${geistSans.variable} 
        ${geistMono.variable}
      `}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
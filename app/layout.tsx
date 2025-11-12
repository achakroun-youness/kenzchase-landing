import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { geistMono, geistSans } from "@/utils/Fonts";

export const metadata: Metadata = {
  title: "Kenzchase",
  description: "Kenzchase tourism App",
  creator: "speriasoft",
  icons: {
    icon: [
      { url: "/icons/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/logo.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/logo.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/icons/logo.png"],
    apple: [
      { url: "/icons/logo.png", sizes: "180x180" },
    ],
  },
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
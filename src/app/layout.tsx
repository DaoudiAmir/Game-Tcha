import "./globals.css";
import type { Metadata } from "next";
import { Pixelify_Sans, Roboto } from "next/font/google";

const pixel = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Castle Quest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pixel.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
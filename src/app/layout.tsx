import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "I want to save TailwindCSS",
  description: "We love TailwindCSS!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

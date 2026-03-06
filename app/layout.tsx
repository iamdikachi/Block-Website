import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Bloc — Infrastructure Grade Activation",
  description:
    "Bloc helps B2B SaaS companies drive faster time-to-value with infrastructure-grade customer activation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

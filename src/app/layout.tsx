import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaikh Mohammad Affan - UX/UI Designer & Frontend Developer",
  description: "Portfolio of Shaikh Mohammad Affan, UX/UI Designer and Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=nohemi@400,500,600,700,800,900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-secondary" suppressHydrationWarning>{children}</body>
    </html>
  );
}

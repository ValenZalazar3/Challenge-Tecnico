import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "42i Challenge Técnico",
  description: "Challenge técnico",
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

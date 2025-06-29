import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Grishma's Cover",
  description: "Welcome to my Portfolio - Hope you enjoy visiting",
  creator: "Grishma"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

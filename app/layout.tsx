import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css"


export const metadata: Metadata = {
  title: "Property Pulse | Find the Perfect rental",
  description: "Find your dream rental property. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
        {children}
        </div>
        </body>
    </html>
  );
}

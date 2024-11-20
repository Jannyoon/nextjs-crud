import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "NEXT.JS CRUD",
  description: "NEXT.JS basic project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Link href='/' className="pageTitle">NEXT.JS CRUD</Link>
        {children}
      </body>
    </html>
  );
}

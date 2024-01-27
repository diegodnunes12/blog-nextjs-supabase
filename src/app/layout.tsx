import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog do Diego",
  description: "O blog do Diego é um blog de desenvolvimento de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <nav>
          <Link href="/"><h1>Blog do Diego</h1></Link>
          <div>
            <Link className="mr-10" href="/add">Novo Post</Link>
            <Link href="/login">Login</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

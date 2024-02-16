import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["900", "700", "500", "400", "300"],
});

export const metadata: Metadata = {
  title: "Maxence Dupuis",
  description: "Welcome on my portfolio !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body className={roboto.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

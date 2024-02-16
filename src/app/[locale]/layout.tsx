import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["900", "700", "500", "400", "300"],
});

export const metadata: Metadata = {
  title: "Maxence Dupuis",
  description: "Welcome on my portfolio !",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  const { locale } = params;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

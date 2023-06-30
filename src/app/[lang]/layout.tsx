import "./globals.css";
import { Titillium_Web } from "next/font/google";
import Header from "@components/organism/Header";
import { getDictionary } from "../../utils/get-dictionary";
import { i18n, Locale } from "../../utils/i18n-config";

const titillium = Titillium_Web({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Atif Aiman",
  description: "My experimentation site",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={titillium.className}>
        <Header dict={dict} lang={lang} />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}

import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Oswald } from "next/font/google";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
import { Metrika } from "@/components";
import { CookieBanner } from "@/components";
import { ConsentProvider } from "@/components";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ARGO.TECH",
  legalName: "ООО «АРГО ТЕХНОЛОДЖИ ИСТ»",
  url: "https://argo.tech",
  logo: "https://argo.tech/logo.svg",
  foundingDate: "2016",
  email: "info@argo.tech",
  telephone: "+7-499-430-00-54",
  address: {
    "@type": "PostalAddress",
    streetAddress: "проезд Завода Серп и Молот, дом 6, корпус 1, эт. 7, комн. 709",
    addressLocality: "Москва",
    postalCode: "111250",
    addressCountry: "RU",
  },
  sameAs: [
    "https://t.me/argo_technology_ist",
    "https://companies.rbc.ru/id/1165007052583-argotech/",
  ],
};

export const metadata = {
  metadataBase: new URL("https://argo.tech"),
  title: "СХД РФ: Реестр Минцифры, Минпромторга для импортозамещения",
  description:
    "Российский разработчик и производитель систем хранения данных. Готовые СХД для импортозамещения: блочные и объектные решения. Включены в реестры Минцифры и Минпромторга. Надёжность, проверенная годами.",
  icons: {
    icon: "/favicon.ico?v=3",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech",
    title: "СХД РФ: Реестр Минцифры, Минпромторга для импортозамещения",
    description:
      "Российский разработчик и производитель систем хранения данных. Готовые СХД для импортозамещения: блочные и объектные решения. Включены в реестры Минцифры и Минпромторга. Надёжность, проверенная годами.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${oswald.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConsentProvider>
            <Header />
            {children}
            <Footer />
            <CookieBanner />
            <Suspense fallback={null}>
              <Metrika />
            </Suspense>
          </ConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

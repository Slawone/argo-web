import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
import { Metrika } from "@/components";
import { CookieBanner } from "@/components";
import { ConsentProvider } from "@/components";
import { OrderFormProvider } from "@/components"
import "./globals.css";
import { ogImage } from "@/config";

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
  title: "СХД для импортозамещения в реестрах Минцифры | ARGO.TECH",
  description:
    "ARGO.TECH российский разработчик систем хранения данных. Блочные и объектные СХД в реестрах Минцифры и Минпромторга, поддержка до 10 лет.",
  icons: {
    icon: "/favicon.ico?v=3",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "ARGO.TECH",
    url: "https://argo.tech",
    title: "СХД для импортозамещения в реестрах Минцифры | ARGO.TECH",
    description:
      "ARGO.TECH российский разработчик систем хранения данных. Блочные и объектные СХД в реестрах Минцифры и Минпромторга, поддержка до 10 лет.",
    images: [ogImage("home")],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="antialiased">
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
            <OrderFormProvider>
              <Header />
              {children}
              <Footer />
              <CookieBanner />
              <Suspense fallback={null}>
                <Metrika />
              </Suspense>
            </OrderFormProvider>
          </ConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

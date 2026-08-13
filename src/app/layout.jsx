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
        url: "/hero-bg.jpg",
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

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
  title: "СХД РФ: Реестр Минцифры, Минпромторга для импортозамещения",
  description:
    "ARGO.TECH разрабатывает сертифицированное программное обеспечение для хранения и обработки данных с 2016 года. Решения для корпоративных и государственных структур: безопасность, надёжность, соответствие стандартам РФ.",
  icons: {
    icon: "/favicon.ico?v=3",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${oswald.variable} antialiased`}
      >
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

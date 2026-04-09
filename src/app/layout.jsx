import { Suspense } from "react";
import { ThemeProvider } from "next-themes";
import { IBM_Plex_Sans, Oswald } from "next/font/google";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
import { Metrika } from "@/components";
import { CookieBanner } from "@/components";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Argo.tech | Больше, чем система хранения данных",
  description:
    "ARGO.TECH с 2016 разрабатывает СХД и прикладные ИИ‑решения для бизнеса и госсектора. Все продукты компании в реестре и имеют поддержку до 10 лет.",
  icons: {
    icon: "/favicon.ico?v=2",
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
          <Header />
            {children}
          <Footer />
        </ThemeProvider>
        <CookieBanner />
        <Suspense fallback={null}>
          <Metrika />
        </Suspense>
      </body>
    </html>
  );
}

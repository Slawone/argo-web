import type { Metadata } from "next";
import { ThemeProvider } from "@/features/theme";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
import { SideControls } from "@/shared/ui";
import '@/styles/global.scss';

export const metadata: Metadata = {
  title: "Argo.tech",
  description: "Argo.tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ThemeProvider>
          <Header />
          <main className="main">
            {children}
          </main>
          <SideControls />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

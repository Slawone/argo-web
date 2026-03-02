import type { Metadata } from "next";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { IBM_Plex_Sans, Oswald } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
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
  description: "Argo.tech | Больше, чем система хранения данных",
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
      </body>
    </html>
  );
}

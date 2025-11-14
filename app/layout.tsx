// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/common/Preloader";

export const metadata: Metadata = {
  title: "TheLustYoung — Front-end Developer",
  description:
    "Современные веб-приложения с аккуратной интеграцией API и читаемым кодом.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-[#05060a] text-slate-100 antialiased">
        <I18nProvider>
          <Preloader>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Preloader>
        </I18nProvider>
      </body>
    </html>
  );
}

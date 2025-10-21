import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trubacki Orkestar Rakete - Dejvid Stamenkovic | Najpovoljnije Cene",
  description:
    "Trubacki orkestar Rakete Dejvida Stamenkovica za svadbe, slave, proslave u celoj Srbiji. Veliki repertoar, profesionalni muzicari, najpovoljnije cene. Pozovite 063 789 4687",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "trubacki orkestar",
    "trubaci za svadbu",
    "orkestar Rakete",
    "Dejvid Stamenkovic",
    "trubaci Velika Plana",
    "trubaci Smederevo",
    "trubaci Pozarevac",
    "trubaci Svilajnac",
    "trubaci Despotovac",
    "trubaci Jagodina",
    "trubaci Kragujevac",
    "trubaci Valjevo",
    "trubaci Kraljevo",
    "trubaci Uzice",
    "trubaci Leskovac",
    "trubaci Srbija",
    "povoljni trubaci",
    "najbolji trubacki orkestar",
    "orkestar za svadbu",
    "orkestar za slavu",
    "orkestar za proslavu",
  ],
  alternates: {
    canonical: "https://www.trubaci-velikaplana.rs/",
  },
  openGraph: {
    title: "Trubacki Orkestar Rakete - Dejvid Stamenkovic",
    description:
      "Profesionalni trubacki orkestar za sve vase proslave. Najpovoljnije cene u Srbiji!",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-foreground  text-base md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}

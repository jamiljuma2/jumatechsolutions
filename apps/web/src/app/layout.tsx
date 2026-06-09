import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnimatedBackdrop } from "@/components/visuals/AnimatedBackdrop";
import { Providers } from "@/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "JumaTech Solutions",
    template: "%s | JumaTech Solutions"
  },
  description: "Modern software company website and secure admin dashboard.",
  openGraph: {
    title: "JumaTech Solutions",
    description: "Modern software company website and secure admin dashboard.",
    type: "website"
  }
  ,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Providers>
          <div className="relative min-h-screen overflow-hidden">
            <AnimatedBackdrop />
            <div className="relative z-10">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}

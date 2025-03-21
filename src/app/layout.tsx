import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header/header";
import Footer from "@/components/footer/footer";
import WhatsAppButton from "@/components/whatsapp/whatsapp-button";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuryaVriksha",
  description:
    "Official website of SuryaVriksha. Providing high-quality services/products.",
  openGraph: {
    images: "/favicon.ico",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="description" content="Official website of SuryaVriksha." />
        <meta property="og:image" content="/favicon.ico" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SuryaVriksha",
            url: "https://suryavriksha.com",
            logo: "https://suryavriksha.com/favicon.ico",
          })}
        </script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          {children}
          <WhatsAppButton
            phoneOptions={[
              { label: "Sales Team", phoneNumber: "+977 9851114767" },
              { label: "Support Team", phoneNumber: "+91 9557237365" },
            ]}
          />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

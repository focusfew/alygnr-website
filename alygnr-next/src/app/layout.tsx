import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALYGNR — GTM Intelligence OS",
  description: "Turn strategic alignment into predictable pipeline. ALYGNR is the GTM Intelligence Operating System for B2B marketing teams.",
  metadataBase: new URL("https://alygnr.ai"),
  openGraph: {
    type: "website",
    url: "https://alygnr.ai",
    title: "ALYGNR — GTM Intelligence OS",
    description: "Turn strategic alignment into predictable pipeline.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ALYGNR — GTM Intelligence OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALYGNR — GTM Intelligence OS",
    description: "Turn strategic alignment into predictable pipeline.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="icon"
          href="/favicon-dark.svg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-light.svg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="antialiased min-h-screen bg-[#13171D] text-white">
        {children}
      </body>
    </html>
  );
}

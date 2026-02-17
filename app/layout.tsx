import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F3525A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://globalsumtech.vercel.app"),
  title: {
    default: "Global Summit Technologies | Enterprise IT Solutions & Software Development",
    template: "%s | Global Summit Technologies",
  },
  description: "Since 2003, Global Summit Technologies delivers reliable, scalable, and future-ready IT solutions. Expert software development, cloud computing, cybersecurity, and enterprise solutions built on experience, innovation, and strategic industry partnerships.",
  keywords: [
    "Global Summit Technologies",
    "IT solutions",
    "software development",
    "enterprise IT",
    "cloud computing",
    "cybersecurity",
    "business technology",
    "scalable solutions",
    "digital transformation",
    "IT consulting",
    "custom software",
    "technology partnership",
  ],
  authors: [{ name: "Global Summit Technologies" }],
  creator: "Global Summit Technologies",
  publisher: "Global Summit Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://globsum-landing.vercel.app",
    siteName: "Global Summit Technologies",
    title: "Global Summit Technologies | Enterprise IT Solutions & Software Development",
    description: "Since 2003, Global Summit Technologies delivers reliable, scalable, and future-ready IT solutions. Expert software development, cloud computing, cybersecurity, and enterprise solutions.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Global Summit Technologies - Enterprise IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Summit Technologies | Enterprise IT Solutions",
    description: "Since 2003, Global Summit Technologies delivers reliable, scalable, and future-ready IT solutions.",
    images: ["/og-image.jpg"],
    creator: "@globalsummit",
  },
  alternates: {
    canonical: "https://globsum-landing.vercel.app",
    languages: {
      en: "https://globsum-landing.vercel.app",
    },
  },
  category: "technology",
  classification: "Business Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

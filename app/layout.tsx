import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackToTop from "@/components/BackToTop";
import { serializeJsonLd } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logos/realtegic-logo-2026.png`,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 16, Atlantic Towers, Liberation Road",
    addressLocality: "Accra",
    addressCountry: "Ghana",
  },
  contactPoint: siteConfig.phoneNumbers.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.href.replace("tel:", ""),
    email: siteConfig.email,
    contactType: "customer support",
  })),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Realtegic",
    template: "%s | Realtegic",
  },
  description:
    "Realtegic builds digital infrastructure, intelligent platforms and technology products for businesses, developers and institutions.",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Realtegic",
    description:
      "Realtegic builds digital infrastructure, intelligent platforms and technology products for businesses, developers and institutions.",
    siteName: "Realtegic",
    type: "website",
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/logos/realtegic-logo-2026.png",
        width: 1774,
        height: 887,
        alt: "Realtegic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Realtegic",
    description:
      "Realtegic builds digital infrastructure, intelligent platforms and technology products for businesses, developers and institutions.",
    images: ["/logos/realtegic-logo-2026.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

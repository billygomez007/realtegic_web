import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Realtegic",
    template: "%s | Realtegic",
  },
  description:
    "Realtegic builds digital infrastructure, intelligent platforms and technology products for businesses, developers and institutions.",
  openGraph: {
    title: "Realtegic",
    description:
      "Realtegic builds digital infrastructure, intelligent platforms and technology products for businesses, developers and institutions.",
    siteName: "Realtegic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realtegic",
    description:
      "Realtegic builds digital infrastructure, intelligent platforms and technology products for businesses, developers and institutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

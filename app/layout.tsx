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
    "Realtegic builds the infrastructure and applications powering Africa's digital future.",
  openGraph: {
    title: "Realtegic",
    description:
      "Realtegic builds the infrastructure and applications powering Africa's digital future.",
    siteName: "Realtegic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realtegic",
    description:
      "Realtegic builds the infrastructure and applications powering Africa's digital future.",
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

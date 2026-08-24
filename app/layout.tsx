import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Realtegic | Technology • Innovation • Impact",
  description:
    "Realtegic builds the infrastructure and applications powering Africa's digital future.",
  openGraph: {
    title: "Realtegic | Technology • Innovation • Impact",
    description:
      "Realtegic builds the infrastructure and applications powering Africa's digital future.",
    siteName: "Realtegic",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Realtegic | Technology • Innovation • Impact",
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

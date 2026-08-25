import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="system-page">
      <section className="system-page__panel" aria-labelledby="not-found-title">
        <span className="system-page__code">404</span>
        <h1 id="not-found-title">Page Not Found</h1>
        <p>
          The page you are looking for may have moved or may no longer exist.
        </p>
        <div className="system-page__actions">
          <Link href="/" className="rt-btn rt-btn-primary">
            <Home size={17} aria-hidden="true" />
            Back to Home
          </Link>
          <Link href="/products" className="rt-btn rt-btn-outline">
            Explore Products
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link href="/infrastructure" className="rt-btn rt-btn-outline">
            Explore Infrastructure
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

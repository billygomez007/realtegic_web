"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RotateCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="system-page">
      <section className="system-page__panel" aria-labelledby="error-title">
        <span className="system-page__code">ERROR</span>
        <h1 id="error-title">Something went wrong.</h1>
        <p>
          The page could not be loaded. Try again, or return to the Realtegic
          homepage.
        </p>
        <div className="system-page__actions">
          <button type="button" className="rt-btn rt-btn-primary" onClick={reset}>
            <RotateCcw size={17} aria-hidden="true" />
            Try Again
          </button>
          <Link href="/" className="rt-btn rt-btn-outline">
            <Home size={17} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}

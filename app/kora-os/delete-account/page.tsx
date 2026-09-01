import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Kora OS Account | Realtegic",
  description:
    "Learn how to request deletion of your Kora OS account and associated personal information.",
};

export default function DeleteKoraOSAccountPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="mb-12 border-b border-neutral-200 pb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Kora OS · A Realtegic Product
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Delete Your Kora OS Account
          </h1>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Kora OS gives users the ability to request deletion of their
            account and associated personal information.
          </p>
        </header>

        <div className="space-y-12 leading-8 text-neutral-700">
          <section>
            <h2 className="mb-5 text-2xl font-bold text-neutral-900">
              Request deletion by email
            </h2>

            <p>Send an account deletion request to:</p>

            <p className="mt-4">
              <a
                href="mailto:info@realtegicworks.com?subject=Kora%20OS%20Account%20Deletion%20Request"
                className="font-semibold underline"
              >
                info@realtegicworks.com
              </a>
            </p>

            <p className="mt-4">
              Use the subject:
              <strong> Kora OS Account Deletion Request</strong>
            </p>

            <p className="mt-4">
              Please provide enough information to identify your account,
              preferably:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Your Kora OS account email address</li>
              <li>Your business name, if applicable</li>
            </ul>

            <div className="mt-6 rounded-xl bg-neutral-100 p-5 font-medium text-neutral-900">
              Never send your password, authentication code, payment PIN, API
              key or other secret credential by email.
            </div>
          </section>

          <section>
            <h2 className="mb-5 text-2xl font-bold text-neutral-900">
              Verification
            </h2>

            <p>
              We may need to verify your identity before processing an account
              deletion request. This helps protect accounts against
              unauthorized deletion.
            </p>
          </section>

          <section>
            <h2 className="mb-5 text-2xl font-bold text-neutral-900">
              What happens after deletion?
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>Your eligible Kora OS account access will be removed.</li>
              <li>Eligible personal information will be deleted or anonymized.</li>
              <li>
                Certain information may be retained where required for legal,
                accounting, security, fraud-prevention or dispute-resolution
                purposes.
              </li>
              <li>
                Information belonging to a business account may be subject to
                separate legitimate retention obligations.
              </li>
              <li>
                Backup copies may remain temporarily until they expire through
                normal backup retention processes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-5 text-2xl font-bold text-neutral-900">
              Delete from the Kora OS app
            </h2>

            <p>
              Where in-app account deletion is available, users can access
              account or privacy settings in Kora OS and follow the displayed
              deletion instructions.
            </p>

            <p className="mt-4">
              If this feature is not yet available in your version of Kora OS,
              use the email deletion process described above.
            </p>
          </section>

          <section>
            <h2 className="mb-5 text-2xl font-bold text-neutral-900">
              Need help?
            </h2>

            <p>
              Contact{" "}
              <a
                href="mailto:info@realtegicworks.com"
                className="font-semibold underline"
              >
                info@realtegicworks.com
              </a>
              .
            </p>

            <p className="mt-4">
              Read the{" "}
              <Link
                href="/kora-os/privacy"
                className="font-semibold underline"
              >
                Kora OS Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
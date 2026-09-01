import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kora OS Privacy Policy | Realtegic",
  description:
    "Learn how Kora OS collects, uses, protects, retains and manages personal information when businesses use the Kora OS platform.",
};

export default function KoraOSPrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="mb-12 border-b border-neutral-200 pb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
            Kora OS · A Realtegic Product
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Kora OS Privacy Policy
          </h1>

          <div className="mt-6 space-y-1 text-sm text-neutral-600">
            <p>Effective Date: September 1, 2026</p>
            <p>Last Updated: September 1, 2026</p>
          </div>
        </header>

        <div className="space-y-12 text-base leading-8 text-neutral-700">
          <section>
            <p>
              Kora OS (&quot;Kora OS,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) is a business operating and management platform
              provided by Realtegic. This Privacy Policy explains how
              information is collected, used, stored, protected, and disclosed
              when individuals and businesses use the Kora OS mobile
              application, website, and related services.
            </p>

            <p className="mt-5">
              Kora OS helps service businesses manage customers, appointments,
              queues, staff, services, transactions, payment records,
              commissions, and business performance.
            </p>
          </section>

          <Section title="1. Information We Collect">
            <h3 className="font-semibold text-neutral-900">
              Account and Profile Information
            </h3>
            <BulletList
              items={[
                "Full name",
                "Email address",
                "Telephone number",
                "Account credentials",
                "Business role or position",
                "Profile information",
                "Business association",
                "Account preferences",
              ]}
            />

            <h3 className="mt-8 font-semibold text-neutral-900">
              Business Information
            </h3>
            <BulletList
              items={[
                "Business name and type",
                "Business address or location",
                "Contact information",
                "Services and prices",
                "Operating hours",
                "Business settings",
                "Staff information",
                "Branch information",
              ]}
            />

            <h3 className="mt-8 font-semibold text-neutral-900">
              Customer Information
            </h3>

            <p>
              Businesses may enter information regarding customers to manage
              services and operations.
            </p>

            <BulletList
              items={[
                "Customer name",
                "Telephone number",
                "Email address",
                "Appointment information",
                "Queue information",
                "Services requested or received",
                "Transaction history",
                "Customer notes or preferences",
              ]}
            />

            <h3 className="mt-8 font-semibold text-neutral-900">
              Appointment and Queue Information
            </h3>
            <BulletList
              items={[
                "Appointments and appointment times",
                "Walk-in customers",
                "Queue positions and waiting times",
                "Service status",
                "Assigned staff",
                "Completed, cancelled, or pending appointments",
              ]}
            />

            <h3 className="mt-8 font-semibold text-neutral-900">
              Staff and Service Information
            </h3>
            <BulletList
              items={[
                "Staff names",
                "Roles",
                "Contact information",
                "Services performed",
                "Availability",
                "Appointment assignments",
                "Commission information",
                "Performance information",
              ]}
            />

            <h3 className="mt-8 font-semibold text-neutral-900">
              Transaction and Business Financial Records
            </h3>
            <BulletList
              items={[
                "Sales",
                "Transaction amounts",
                "Services purchased",
                "Payment status and method",
                "Receipts",
                "Refund records",
                "Staff commissions",
                "Revenue totals",
                "Business performance information",
              ]}
            />

            <p className="mt-5 rounded-xl bg-neutral-100 p-5 text-neutral-800">
              Kora OS is a business management platform. Unless expressly
              stated otherwise for a particular service, Kora OS does not
              itself operate as a bank, lender, cryptocurrency service,
              investment platform, or consumer digital wallet.
            </p>

            <h3 className="mt-8 font-semibold text-neutral-900">
              Device, Technical and Usage Information
            </h3>

            <BulletList
              items={[
                "Device type",
                "Operating system and application version",
                "IP address",
                "Device or application identifiers where applicable",
                "Login activity",
                "Error and crash information",
                "Security logs",
                "Feature usage information",
                "Diagnostic and performance information",
              ]}
            />
          </Section>

          <Section title="2. Device Permissions">
            <p>
              Kora OS may request access to device functionality when necessary
              to provide features selected by the user.
            </p>

            <p className="mt-4">
              <strong>Camera:</strong> May be used to capture or upload
              business-related images, profile images, documents or receipts.
            </p>

            <p className="mt-4">
              <strong>Photos or Files:</strong> May be used when users choose
              to upload permitted content or documents.
            </p>

            <p className="mt-4">
              <strong>Notifications:</strong> May be used for appointment
              reminders, queue updates, business alerts and operational
              notifications.
            </p>
          </Section>

          <Section title="3. How We Use Information">
            <BulletList
              items={[
                "Create and manage user accounts",
                "Authenticate users",
                "Operate Kora OS",
                "Manage businesses and branches",
                "Manage customers",
                "Schedule and manage appointments",
                "Operate customer queues",
                "Manage staff and services",
                "Record transactions",
                "Calculate and display commissions",
                "Generate receipts",
                "Provide dashboards and business insights",
                "Send service-related notifications",
                "Provide customer support",
                "Diagnose technical problems",
                "Improve application performance",
                "Prevent fraud, abuse and unauthorized access",
                "Maintain security and audit records",
                "Comply with applicable laws",
              ]}
            />
          </Section>

          <Section title="4. Business Customers and Their Customers">
            <p>
              Kora OS is primarily a business operating platform. Businesses
              may enter personal information relating to customers, employees,
              contractors and other individuals.
            </p>

            <p className="mt-4">
              Businesses using Kora OS are responsible for providing required
              privacy notices and obtaining permissions where applicable.
            </p>
          </Section>

          <Section title="5. How We Share Information">
            <p className="font-semibold text-neutral-900">
              We do not sell personal information.
            </p>

            <p className="mt-4">
              Information may be processed by trusted service providers that
              help us operate Kora OS, including providers for hosting,
              databases, authentication, messaging, notifications, analytics,
              application monitoring, customer support, payment processing
              where enabled, fraud prevention and security.
            </p>

            <p className="mt-4">
              We may also disclose information where directed by a user or
              business, required to provide a requested service, necessary to
              protect security and legal rights, required by law, or as part of
              a legitimate business restructuring or acquisition.
            </p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>
              Kora OS may integrate with third-party platforms. When users
              enable an integration, information may be transmitted to or
              received from that provider as required to provide the requested
              functionality. Third-party services operate under their own terms
              and privacy policies.
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We use reasonable administrative, technical and organizational
              safeguards designed to protect information against unauthorized
              access, disclosure, loss, misuse, alteration or destruction.
            </p>

            <p className="mt-4">
              Measures may include secure communications, authentication,
              authorization controls, organization isolation, secure
              infrastructure, monitoring, logging and audit trails.
            </p>

            <p className="mt-4">
              No electronic system or method of transmission can guarantee
              absolute security.
            </p>
          </Section>

          <Section title="8. Data Retention">
            <p>
              We retain information only for as long as reasonably necessary to
              provide Kora OS, maintain accounts, meet legitimate business and
              security requirements, resolve disputes, prevent fraud, and
              satisfy accounting, regulatory or legal obligations.
            </p>

            <p className="mt-4">
              Information that is no longer required may be deleted,
              anonymized or securely disposed of, subject to applicable legal
              and operational requirements.
            </p>
          </Section>

          <Section title="9. Account and Data Deletion">
            <p>
              Users may request deletion of their Kora OS account and
              associated personal information.
            </p>

            <p className="mt-4">
              Visit our{" "}
              <Link
                href="/kora-os/delete-account"
                className="font-semibold underline"
              >
                Kora OS Account Deletion page
              </Link>{" "}
              for instructions.
            </p>

            <p className="mt-4">
              Some information may need to be retained for legitimate security,
              fraud-prevention, accounting, dispute-resolution, regulatory or
              legal purposes.
            </p>
          </Section>

          <Section title="10. Your Privacy Rights">
            <p>
              Subject to applicable law, individuals may have rights to request
              access, correction or deletion of their personal information,
              object to certain processing, withdraw consent where applicable,
              and receive information about how their information is processed.
            </p>

            <p className="mt-4">
              We may need to verify a person's identity before completing a
              privacy request.
            </p>
          </Section>

          <Section title="11. International Data Processing">
            <p>
              Kora OS may use infrastructure and service providers located
              outside a user's country. Where required, appropriate safeguards
              are used for international processing and transfers.
            </p>
          </Section>

          <Section title="12. Children's Privacy">
            <p>
              Kora OS is designed as a business management platform and is not
              intended for children.
            </p>

            <p className="mt-4">
              If we become aware that personal information has been collected
              directly from a child contrary to applicable requirements, we
              will take appropriate steps to address it.
            </p>
          </Section>

          <Section title="13. Ghana Data Protection">
            <p>
              Where Ghanaian data-protection law applies, personal information
              is handled with regard to the Data Protection Act, 2012 (Act 843)
              and applicable requirements and guidance of Ghana's Data
              Protection Commission.
            </p>
          </Section>

          <Section title="14. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy as Kora OS changes, new
              functionality is introduced, providers change, or applicable
              laws and requirements evolve.
            </p>
          </Section>

          <Section title="15. Contact Us">
            <div className="rounded-xl border border-neutral-200 p-6">
              <p className="font-semibold text-neutral-900">Kora OS</p>
              <p>Provided by Realtegic</p>
              <p>Accra, Ghana</p>

              <p className="mt-5">
                Privacy Contact:{" "}
                <a
                  href="mailto:info@realtegicworks.com"
                  className="font-semibold underline"
                >
                  info@realtegicworks.com
                </a>
              </p>

              <p>
                Website:{" "}
                <a
                  href="https://realtegicworks.com"
                  className="font-semibold underline"
                >
                  realtegicworks.com
                </a>
              </p>
            </div>
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold text-neutral-900">{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
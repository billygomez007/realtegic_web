import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/logos/Realtegic_Official_Logo.png"
              alt="Realtegic"
              width={240}
              height={80}
              priority
              className="footer-logo-image footer-logo-image--inverse"
            />
          </Link>

          <p>
            Building the technology behind Africa&apos;s digital future.
          </p>
        </div>

        <div className="footer-column">
          <h4>Infrastructure</h4>
          <Link href="/#ai-platform">AI Platform</Link>
          <Link href="/#communications-cloud">Communications</Link>
          <Link href="/#identity-cloud">Identity</Link>
          <Link href="/#integration-cloud">Integrations</Link>
          <Link href="/#automation-cloud">Automation</Link>
          <Link href="/#data-intelligence-platform">Data &amp; Intelligence</Link>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <Link href="/products">SuperKuba</Link>
          <Link href="/products">PropertyOS</Link>
          <Link href="/products">TrustPay</Link>
          <Link href="/products">Institution Platform</Link>
          <Link href="/products">GovTech</Link>
          <Link href="/products">Mobility</Link>
        </div>

        <div className="footer-column">
          <h4>Developers</h4>
          <Link href="/developers">Developer Platform</Link>
          <Link href="/developers">Documentation</Link>
          <Link href="/developers">APIs</Link>
          <Link href="/developers">SDKs</Link>
          <Link href="/developers">Developer Community</Link>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/innovation">Innovation</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/security">Security</Link>
          <span>Accra, Ghana</span>
          <span>hello@realtegic.com</span>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>Realtegic</span>
        <span>Technology • Innovation • Impact</span>
        <span>© 2026 Realtegic. All rights reserved.</span>
      </div>
    </footer>
  );
}

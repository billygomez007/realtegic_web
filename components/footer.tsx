import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/logos/realtegic-logo-2026-white.png"
              alt="Realtegic"
              width={240}
              height={80}
              priority
              className="footer-logo-image"
            />
          </Link>

          <p>Building the technology behind what comes next.</p>
        </div>

        <div className="footer-column">
          <h4>Infrastructure</h4>
          <Link href="/infrastructure/ai-platform">AI Platform</Link>
          <Link href="/infrastructure/communications-cloud">Communications Cloud</Link>
          <Link href="/infrastructure/identity-cloud">Identity Cloud</Link>
          <Link href="/infrastructure/integration-cloud">Integration Cloud</Link>
          <Link href="/infrastructure/automation-cloud">Automation Cloud</Link>
          <Link href="/infrastructure/data-intelligence-platform">Data &amp; Intelligence Platform</Link>
          <Link href="/infrastructure/developer-cloud">Developer Cloud</Link>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <Link href="/products/kuba-ai">SuperKuba</Link>
          <Link href="/products/propertyos">PropertyOS</Link>
          <Link href="/products/trustpay">TrustPay</Link>
          <Link href="/products/tap-and-order">Tap &amp; Order</Link>
          <Link href="/products/institution-platform">Institution Platform</Link>
          <Link href="/products/mobility-platform">Mobility Platform</Link>
        </div>

        <div className="footer-column">
          <h4>Developers</h4>
          <Link href="/developers">Developer Platform</Link>
          <Link href="/infrastructure">Infrastructure</Link>
          <Link href="/developers">Developer Access</Link>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/company">Company</Link>
          <Link href="/innovation">Innovation</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h4>Trust &amp; Legal</h4>
          <Link href="/trust">Trust Center</Link>
          <Link href="/security">Security</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <span>{siteConfig.officeAddress[0]}</span>
          <span>{siteConfig.officeAddress[1]}</span>
          <span>
            {siteConfig.phoneNumbers.map((phone, index) => (
              <span key={phone.href}>
                {index > 0 ? " / " : ""}
                <a href={phone.href}>{phone.number}</a>
              </span>
            ))}
          </span>
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

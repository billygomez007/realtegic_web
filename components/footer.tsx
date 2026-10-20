import Image from "next/image";
import Link from "next/link";
import FooterLink from "@/components/site/FooterLink";
import styles from "@/components/site/footer.module.css";
import { platforms } from "@/lib/infrastructure";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const developerLinks = [
  { label: "Developer Platform", href: "/developers" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Developer Cloud", href: "/infrastructure/developer-cloud" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Company", href: "/company" },
  { label: "Careers", href: "/careers" },
  { label: "News & Insights", href: "/insights" },
  { label: "Innovation", href: "/innovation" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Trust Center", href: "/trust" },
  { label: "Security", href: "/security" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrap} ${styles.main}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logos/realtegic-logo-2026-white.png"
              alt="Realtegic"
              width={180}
              height={60}
              className={styles.logoImage}
            />
          </Link>
          <p>Building the technology behind what comes next.</p>
          <a href={`mailto:${siteConfig.email}`} className={styles.link}>
            {siteConfig.email}
          </a>
        </div>

        <nav className={styles.column} aria-label="Infrastructure">
          <h2>Infrastructure</h2>
          {platforms.map((platform) => (
            <FooterLink key={platform.slug} href={platform.route}>
              {platform.name}
            </FooterLink>
          ))}
        </nav>

        <nav className={styles.column} aria-label="Products">
          <h2>Products</h2>
          {products.map((product) => (
            <FooterLink key={product.slug} href={`/products/${product.slug}`}>
              {product.title}
            </FooterLink>
          ))}
        </nav>

        <nav className={styles.column} aria-label="Developers">
          <h2>Developers</h2>
          {developerLinks.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </nav>

        <nav className={styles.column} aria-label="Company">
          <h2>Company</h2>
          {companyLinks.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </nav>

        <div className={styles.column}>
          <h2>Trust &amp; Legal</h2>
          {legalLinks.map((link) => (
            <FooterLink key={link.label} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
          <address className={styles.address}>
            {siteConfig.officeAddress.map((line) => (
              <span key={line}>{line}</span>
            ))}
            {siteConfig.phoneNumbers.map((phone) => (
              <a key={phone.href} href={phone.href} className={styles.link}>
                {phone.number}
              </a>
            ))}
          </address>
        </div>
      </div>

      <div className={`${styles.wrap} ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Realtegic. All rights reserved.</span>
        <span>Technology • Innovation • Impact</span>
      </div>
    </footer>
  );
}

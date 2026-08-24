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
            />
          </Link>

          <p>
            Building intelligent technology products, AI-powered platforms and
            digital systems for what comes next.
          </p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/innovation">Innovation</Link>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <Link href="/products">Kuba AI</Link>
          <Link href="/products">Realtegic Property</Link>
          <Link href="/innovation">Innovation Lab</Link>
          <Link href="/contact">Partnerships</Link>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>
          <Link href="/contact">Talk to us</Link>
          <span>Accra, Ghana</span>
          <span>hello@realtegic.com</span>
        </div>

      </div>

      <div className="footer-bottom container">
        <span>© 2026 Realtegic. All rights reserved.</span>
        <span>Technology • Innovation • Impact</span>
      </div>
    </footer>
  );
}

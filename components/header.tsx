import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="nav container">
        <Link href="/" className="brand-logo">
          <Image
            src="/logos/Realtegic_Official_Logo.png"
            alt="Realtegic - Technology Innovation Impact"
            width={210}
            height={72}
            priority
          />
        </Link>

        <nav>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/innovation">Innovation</Link>
          <Link href="/contact" className="nav-button">
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import MegaMenu from "./MegaMenu";

const navigationItems = [
  { label: "About", href: "/about" },
  {
    label: "Infrastructure",
    href: "/#platforms",
    submenu: [
      { label: "AI Platform", href: "/#ai-platform" },
      { label: "Communications Cloud", href: "/#communications-cloud" },
      { label: "Identity Cloud", href: "/#identity-cloud" },
      { label: "Integration Cloud", href: "/#integration-cloud" },
      { label: "Automation Cloud", href: "/#automation-cloud" },
      { label: "Data & Intelligence", href: "/#data-intelligence-platform" },
      { label: "Developer Cloud", href: "/#developer-cloud" },
    ],
  },
  {
    label: "Products",
    href: "/#products",
    submenu: [
      { label: "SuperKuba", href: "/#superkuba" },
      { label: "PropertyOS", href: "/#propertyos" },
      { label: "TrustPay", href: "/#trustpay" },
      { label: "Institution Platform", href: "/#institution-platform" },
      { label: "Government Technology", href: "/#government-technology" },
      { label: "Mobility Platform", href: "/#mobility-platform" },
    ],
  },
  { label: "Developers", href: "/developers" },
  { label: "Innovation", href: "/innovation" },
  { label: "Company", href: "/company" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="header-v2">
      <div className="header-container">
        <Link href="/" className="logo-link">
          <Image
            src="/logos/Realtegic_Official_Logo.png"
            alt="Realtegic"
            width={160}
            height={48}
            priority
            className="logo-image"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navigationItems.map((item) => (
            <div key={item.label} className="nav-item-wrapper">
              {item.submenu ? (
                <MegaMenu
                  label={item.label}
                  items={item.submenu}
                />
              ) : (
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/#platforms" className="btn btn-primary btn-md nav-cta">
          Explore Realtegic
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          <div className="mobile-nav-content">
            {navigationItems.map((item) => (
              <div key={item.label} className="mobile-nav-item">
                {item.submenu ? (
                  <>
                    <button
                      className="mobile-nav-link"
                      onClick={() => toggleSubmenu(item.label)}
                      aria-expanded={openSubmenu === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`submenu-icon ${
                          openSubmenu === item.label ? "open" : ""
                        }`}
                      />
                    </button>
                    {openSubmenu === item.label && (
                      <div className="mobile-submenu">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="mobile-submenu-link"
                            onClick={closeMobileMenu}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/#platforms"
              className="btn btn-primary btn-md mobile-nav-cta"
              onClick={closeMobileMenu}
            >
              Explore Realtegic
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

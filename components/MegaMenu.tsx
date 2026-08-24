"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export interface MegaMenuProps {
  label: string;
  items: Array<{
    label: string;
    href: string;
  }>;
}

export default function MegaMenu({ label, items }: MegaMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mega-menu-wrapper">
      <button
        className="nav-link mega-menu-trigger"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          size={16}
          className={`chevron-icon ${isOpen ? "open" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="mega-menu-panel"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="mega-menu-grid">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="mega-menu-item"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

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
  const menuId = `${label.toLowerCase().replace(/\s+/g, "-")}-menu`;

  return (
    <div
      className="mega-menu-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      }}
    >
      <button
        className="nav-link mega-menu-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
      >
        {label}
        <ChevronDown
          size={16}
          className={`chevron-icon ${isOpen ? "open" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className="mega-menu-panel"
          id={menuId}
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

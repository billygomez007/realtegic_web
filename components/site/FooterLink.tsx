"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./footer.module.css";

export default function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={active ? styles.linkActive : styles.link}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

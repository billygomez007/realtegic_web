"use client";

import { useState } from "react";
import { Globe2, LayoutGrid, Layers, Users } from "lucide-react";
import { LayerStackVisual } from "./HomeVisuals";
import styles from "./home.module.css";

const pillars = [
  {
    label: "Technology Infrastructure",
    icon: Layers,
    detail: "Cloud, AI, identity, data and more.",
  },
  {
    label: "Products & Applications",
    icon: LayoutGrid,
    detail: "Real solutions for real needs.",
  },
  {
    label: "Connected Audiences",
    icon: Users,
    detail: "Businesses, developers and communities.",
  },
  {
    label: "Real-World Impact",
    icon: Globe2,
    detail: "Growth, innovation and opportunity.",
  },
];

export default function BigPicture() {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.bigGrid}>
      <div className={styles.bigTabs} role="tablist" aria-label="Ecosystem layers">
        {pillars.map(({ label, icon: Icon }, index) => (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? styles.bigTabActive : styles.bigTab}
            onClick={() => setActive(index)}
          >
            <Icon size={18} aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>

      <LayerStackVisual />

      <ul className={styles.bigList}>
        {pillars.map(({ label, detail }, index) => (
          <li key={label} className={active === index ? styles.bigListActive : undefined}>
            <span className={styles.bigDot} aria-hidden="true" />
            <div>
              <strong>{label}</strong>
              <small>{detail}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

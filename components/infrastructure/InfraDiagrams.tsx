import { Check } from "lucide-react";
import type { InfraNode, InfraPageContent } from "@/lib/infrastructure-pages";
import styles from "./infra.module.css";

function NodeCard({ node, compact = false }: { node: InfraNode; compact?: boolean }) {
  const Icon = node.icon;

  return (
    <div className={compact ? styles.nodeCompact : styles.node}>
      <span className={styles.nodeIcon}>
        <Icon size={compact ? 18 : 20} />
      </span>
      <div>
        <strong>{node.title}</strong>
        {node.detail ? <small>{node.detail}</small> : null}
      </div>
    </div>
  );
}

export function InfraHeroDiagram({ content }: { content: InfraPageContent }) {
  const Icon = content.heroIcon;
  const stacked = Boolean(content.heroChecks);
  const half = Math.ceil(content.heroNodes.length / 2);
  const leftNodes = stacked ? [] : content.heroNodes.slice(0, half);
  const rightNodes = stacked ? content.heroNodes : content.heroNodes.slice(half);

  return (
    <div
      className={stacked ? styles.heroDiagramStack : styles.heroDiagramOrbit}
      aria-hidden="true"
    >
      <div className={styles.heroGlow} />
      <div className={styles.heroPanel} />

      {leftNodes.length ? (
        <div className={styles.nodeColLeft}>
          {leftNodes.map((node) => (
            <NodeCard key={node.title} node={node} />
          ))}
        </div>
      ) : null}

      <div className={styles.coreCard}>
        <span className={styles.coreIcon}>
          <Icon size={30} />
        </span>
        <strong>{content.heroLabel}</strong>
        {content.heroChecks ? (
          <ul>
            {content.heroChecks.map((item) => (
              <li key={item}>
                <span>
                  <Check size={11} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className={styles.nodeColRight}>
        {rightNodes.map((node) => (
          <NodeCard key={node.title} node={node} />
        ))}
      </div>
    </div>
  );
}

export function InfraValueDiagram({ content }: { content: InfraPageContent }) {
  const Icon = content.valueIcon;

  return (
    <div className={styles.valueDiagram} aria-hidden="true">
      <div className={styles.valueStage}>
        <svg viewBox="0 0 400 260" preserveAspectRatio="none" className={styles.valueLines}>
          <g fill="none" stroke="#7aa2ff" strokeWidth="1.4" strokeDasharray="4 5">
            <path d="M90 42 H170 V100" />
            <path d="M310 42 H230 V100" />
            <path d="M90 218 H170 V160" />
            <path d="M310 218 H230 V160" />
          </g>
          {[
            [170, 100],
            [230, 100],
            [170, 160],
            [230, 160],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#1f5eff" />
          ))}
        </svg>

        <div className={styles.valueCore}>
          <Icon size={44} />
        </div>

        {content.valueNodes.map((node, index) => (
          <div key={node.title} className={styles[`valueNode${index}`]}>
            <NodeCard node={node} compact />
          </div>
        ))}
      </div>

      {content.valueExtras ? (
        <div className={styles.valueExtras}>
          {content.valueExtras.map((node) => {
            const ExtraIcon = node.icon;

            return (
              <span key={node.title} className={styles.valueExtra} title={node.title}>
                <ExtraIcon size={18} />
                <em>{node.title}</em>
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function CtaWave() {
  return (
    <svg
      viewBox="0 0 800 300"
      preserveAspectRatio="none"
      className={styles.ctaWave}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="infra-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d="M0 220 C200 120 380 300 560 160 S760 40 800 60 V300 H0 Z" fill="url(#infra-wave)" />
      <path
        d="M0 260 C220 170 400 320 600 200 S780 100 800 110"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.28"
        strokeWidth="2"
      />
      <path
        d="M120 300 C300 200 460 300 640 210 S780 150 800 160"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.16"
        strokeWidth="2"
      />
    </svg>
  );
}

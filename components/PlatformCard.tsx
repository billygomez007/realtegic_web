import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button";
import StatusBadge, { type StatusBadgeType } from "@/components/StatusBadge";

export interface PlatformCardData {
  name: string;
  slug: string;
  category: string;
  description: string;
  lifecycleStatus: StatusBadgeType;
  icon: LucideIcon;
  featured: boolean;
  route: string;
  publicAvailability: boolean;
  ctaLabel: string;
}

export interface PlatformCardProps {
  platform: PlatformCardData;
}

function formatStatusLabel(status: StatusBadgeType) {
  return status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const Icon = platform.icon;

  return (
    <article
      className={`platform-card ${platform.featured ? "platform-card--featured" : ""}`}
      data-slug={platform.slug}
      id={platform.slug}
    >
      <div className="platform-card__top">
        <div className="platform-card__icon" aria-hidden="true">
          <Icon size={26} />
        </div>

        <StatusBadge status={platform.lifecycleStatus}>
          {formatStatusLabel(platform.lifecycleStatus)}
        </StatusBadge>
      </div>

      <div className="platform-card__body">
        <div className="platform-card__content">
        <small>{platform.category}</small>
        <h3>{platform.name}</h3>
        <p>{platform.description}</p>

        <div className="platform-card__meta">
          <span>
            {platform.publicAvailability
              ? "Public preview available"
              : "Not publicly available"}
          </span>
          <Link href={platform.route} className="platform-card__link">
            {platform.ctaLabel}
            <ArrowRight size={15} />
          </Link>
        </div>
        </div>

        {platform.featured && (
          <div className="platform-card__feature">
            <p>
              A foundational layer designed to support future Realtegic
              applications with shared capabilities and consistent behavior.
            </p>

            <Button asLink href={platform.route} variant="outline" size="md">
              Explore structure
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

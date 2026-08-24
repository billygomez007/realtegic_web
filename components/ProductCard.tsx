import { ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button";
import StatusBadge, { type StatusBadgeType } from "@/components/StatusBadge";

export interface ProductCardData {
  productName: string;
  displayName: string;
  slug: string;
  category: string;
  description: string;
  availabilityStatus: StatusBadgeType;
  website: string;
  route: string;
  externalRoute?: string;
  visual: string;
  logo: LucideIcon;
  featured: boolean;
  ctaLabel: string;
  market: string;
}

export interface ProductCardProps {
  product: ProductCardData;
}

function formatStatusLabel(status: StatusBadgeType) {
  return status
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function ProductCard({ product }: ProductCardProps) {
  const Icon = product.logo;
  const href = product.externalRoute ?? product.route;

  return (
    <article
      className={`product-card ${product.featured ? "product-card--featured" : ""}`}
      data-slug={product.slug}
      id={product.slug}
    >
      <div className="product-card__top">
        <div className="product-card__icon" aria-hidden="true">
          <Icon size={24} />
        </div>

        <StatusBadge status={product.availabilityStatus}>
          {formatStatusLabel(product.availabilityStatus)}
        </StatusBadge>
      </div>

      <div className="product-card__body">
        <div className="product-card__content">
          <small>{product.category}</small>
          <h3>{product.displayName}</h3>
          <p>{product.description}</p>
        </div>

        <div className="product-card__details">
          <span className="product-card__visual">{product.visual}</span>
          <span className="product-card__market">{product.market}</span>
          <span className="product-card__website">{product.website}</span>
        </div>
      </div>

      <div className="product-card__footer">
        <Link href={href} className="product-card__link">
          {product.ctaLabel}
          <ArrowRight size={15} />
        </Link>

        {product.featured ? (
          <Button asLink href="/products" variant="outline" size="md">
            View all products
          </Button>
        ) : null}
      </div>
    </article>
  );
}

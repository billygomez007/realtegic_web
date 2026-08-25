import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Bike,
  Boxes,
  Check,
  MapPinned,
  PackageCheck,
  Route,
  ShoppingBag,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";
import ProductBrandLogo from "@/components/ProductBrandLogo";
import SectionEyebrow from "@/components/SectionEyebrow";
import type { ProductData } from "@/lib/products";

type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

const verticals: Capability[] = [
  {
    title: "Marketplace",
    description:
      "A digital marketplace connecting customers with products and businesses through the Tap & Order ecosystem.",
    icon: ShoppingBag,
    items: [
      "Product discovery",
      "Merchant storefronts",
      "Product categories",
      "Ordering",
      "Digital commerce",
      "Customer and merchant experiences",
    ],
  },
  {
    title: "Mobility",
    description:
      "Digital mobility services designed to help people move conveniently through the Tap & Order platform.",
    icon: Bike,
    items: [
      "Part of the connected super app",
      "Designed for convenient access",
      "Flexible for evolving mobility services",
    ],
  },
  {
    title: "Delivery",
    description:
      "An integrated delivery experience connecting customers, merchants and delivery operations through the Tap & Order platform.",
    icon: Truck,
    items: [
      "On-demand delivery",
      "Order delivery",
      "Merchant-to-customer delivery",
      "Delivery coordination",
      "Order status and tracking where supported",
    ],
  },
];

const connectedSteps = [
  { label: "Discover a product", icon: ShoppingBag },
  { label: "Place an order", icon: Store },
  { label: "Arrange delivery", icon: PackageCheck },
  { label: "Track the experience", icon: MapPinned },
];

export default function TapOrderShowcase({ product }: { product: ProductData }) {
  if (
    !product.logo ||
    !product.logoAlt ||
    !product.logoWidth ||
    !product.logoHeight ||
    !product.externalUrl
  ) {
    throw new Error(
      "Tap & Order showcase requires complete brand and destination configuration.",
    );
  }

  const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  } as const;

  return (
    <main className="tap-order-showcase">
      <section className="tap-order-hero">
        <div className="new-wrap tap-order-hero__grid">
          <div className="tap-order-hero__copy">
            <SectionEyebrow>A REALTEGIC PRODUCT</SectionEyebrow>
            <h1 className="tap-order-hero__title">
              <ProductBrandLogo
                src={product.logo}
                alt={product.logoAlt}
                width={product.logoWidth}
                height={product.logoHeight}
                sizes="(max-width: 650px) calc(100vw - 36px), 520px"
                className="tap-order-hero__logo"
              />
            </h1>
            <h2>One App. Everyday Possibilities.</h2>
            <p>
              Tap &amp; Order is a super app connecting marketplace, mobility and
              delivery services through one seamless digital experience.
            </p>
            <p>
              Users can discover products, access mobility services and arrange
              deliveries without having to move between multiple platforms.
            </p>
            <div className="tap-order-actions">
              <a
                href={product.externalUrl}
                className="tap-order-button tap-order-button--primary"
                {...externalLinkProps}
              >
                Visit Tap &amp; Order
                <ArrowRight size={17} />
              </a>
              <a
                href="#platform"
                className="tap-order-button tap-order-button--secondary"
              >
                Explore the Platform
                <ArrowDown size={17} />
              </a>
            </div>
          </div>

          <div className="tap-order-hero__visual" aria-label="Tap & Order super app">
            <div className="tap-order-app-card">
              <ProductBrandLogo
                src={product.logo}
                alt=""
                width={product.logoWidth}
                height={product.logoHeight}
                sizes="(max-width: 650px) calc(100vw - 120px), 330px"
                className="tap-order-app-card__logo"
              />
              <small>CONNECTED CONSUMER PLATFORM</small>
              <span>SUPER APP</span>
            </div>
            <div className="tap-order-hero__services" aria-hidden="true">
              <span><ShoppingBag size={18} /> Marketplace</span>
              <span><Bike size={18} /> Mobility</span>
              <span><Truck size={18} /> Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tap-order-section tap-order-platform" id="platform">
        <div className="new-wrap">
          <div className="tap-order-section__intro">
            <div>
              <SectionEyebrow>SUPER APP ARCHITECTURE</SectionEyebrow>
              <h2>Three Verticals. <span>One Connected Platform.</span></h2>
            </div>
            <p>
              Marketplace, mobility and delivery are not separate products. They
              operate as connected services inside one Tap &amp; Order ecosystem.
            </p>
          </div>

          <div className="tap-order-architecture">
            <div
              className="tap-order-architecture__core"
              aria-label="Tap & Order Super App"
            >
              <ProductBrandLogo
                src={product.logo}
                alt=""
                width={product.logoWidth}
                height={product.logoHeight}
                sizes="(max-width: 650px) calc(100vw - 120px), 250px"
                className="tap-order-architecture__logo"
              />
              <strong>SUPER APP</strong>
            </div>
            <div className="tap-order-architecture__line" aria-hidden="true" />
            <div className="tap-order-architecture__nodes">
              {verticals.map(({ title, icon: Icon }) => (
                <div key={title}>
                  <Icon size={22} aria-hidden="true" />
                  <strong>{title}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tap-order-section tap-order-section--soft">
        <div className="new-wrap tap-order-verticals">
          {verticals.map(({ title, description, icon: Icon, items }, index) => (
            <article key={title} className="tap-order-vertical">
              <div className="tap-order-vertical__top">
                <span aria-hidden="true"><Icon size={23} /></span>
                <small>0{index + 1}</small>
              </div>
              <h2>{title}</h2>
              <p>{description}</p>
              {title === "Marketplace" ? (
                <p>
                  Users can discover and purchase products from participating
                  merchants through the platform.
                </p>
              ) : null}
              {title === "Mobility" ? (
                <p>
                  The architecture remains flexible enough for different mobility
                  services to be added as Tap &amp; Order evolves.
                </p>
              ) : null}
              <ul>
                {items.map((item) => (
                  <li key={item}><Check size={15} />{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="tap-order-section tap-order-connected">
        <div className="new-wrap tap-order-connected__grid">
          <div className="tap-order-connected__copy">
            <SectionEyebrow>THE CONNECTED EXPERIENCE</SectionEyebrow>
            <h2>Everything Works <span>Together.</span></h2>
            <p>
              Customers can move from discovery to delivery in one connected
              journey instead of switching between separate platforms for every
              everyday digital service.
            </p>
            <div className="tap-order-mobility-callout">
              <Route size={24} aria-hidden="true" />
              <div>
                <strong>Mobility in the same ecosystem</strong>
                <span>
                  Access mobility services alongside commerce and delivery through
                  Tap &amp; Order.
                </span>
              </div>
            </div>
          </div>

          <ol className="tap-order-journey">
            {connectedSteps.map(({ label, icon: Icon }, index) => (
              <li key={label}>
                <span aria-hidden="true"><Icon size={20} /></span>
                <div>
                  <small>STEP 0{index + 1}</small>
                  <strong>{label}</strong>
                </div>
                {index < connectedSteps.length - 1 ? (
                  <ArrowDown size={18} aria-hidden="true" />
                ) : null}
              </li>
            ))}
            <li className="tap-order-journey__complete">
              <Boxes size={20} aria-hidden="true" />
              <strong>All within Tap &amp; Order</strong>
            </li>
          </ol>
        </div>
      </section>

      <section className="tap-order-built">
        <div className="new-wrap tap-order-built__grid">
          <div>
            <SectionEyebrow>PART OF THE REALTEGIC ECOSYSTEM</SectionEyebrow>
            <h2>Built by Realtegic.</h2>
          </div>
          <div>
            <p>
              Tap &amp; Order is part of the Realtegic product ecosystem,
              demonstrating how Realtegic builds technology platforms that connect
              digital services and solve everyday problems.
            </p>
            <Link href="/products">
              Explore Realtegic products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="tap-order-final-cta">
        <div className="new-wrap">
          <SectionEyebrow>ONE CONNECTED EXPERIENCE</SectionEyebrow>
          <h2>Explore Tap &amp; Order.</h2>
          <p>
            Discover a connected digital experience for shopping, mobility and
            delivery.
          </p>
          <div className="tap-order-actions tap-order-actions--center">
            <a
              href={product.externalUrl}
              className="tap-order-button tap-order-button--primary"
              {...externalLinkProps}
            >
              Visit Tap &amp; Order
              <ArrowRight size={17} />
            </a>
            <Link
              href="/products"
              className="tap-order-button tap-order-button--secondary"
            >
              Explore More Realtegic Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

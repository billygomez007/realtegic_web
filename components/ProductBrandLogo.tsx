import Image from "next/image";

interface ProductBrandLogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
}

export default function ProductBrandLogo({
  src,
  alt,
  width,
  height,
  sizes,
  className = "",
}: ProductBrandLogoProps) {
  return (
    <span className={`product-brand-logo ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="product-brand-logo__image"
      />
    </span>
  );
}

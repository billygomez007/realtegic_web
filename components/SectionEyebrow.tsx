export interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionEyebrow({
  children,
  className = "",
}: SectionEyebrowProps) {
  return (
    <div className={`section-eyebrow ${className}`}>
      {children}
    </div>
  );
}

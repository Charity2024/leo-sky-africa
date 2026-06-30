import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { brandAssets } from "@/content/site";

type BrandLogoProps = {
  variant?: "full" | "mark";
  className?: string;
  href?: string;
  linked?: boolean;
  priority?: boolean;
};

export default function BrandLogo({
  variant = "full",
  className,
  href = "/",
  linked = true,
  priority = false,
}: BrandLogoProps) {
  const src = variant === "full" ? brandAssets.logo : brandAssets.logoMark;
  const width = variant === "full" ? 200 : 40;
  const height = variant === "full" ? 34 : 40;

  const image = (
    <Image
      src={src}
      alt={brandAssets.logoAlt}
      width={width}
      height={height}
      priority={priority}
      className={clsx("h-auto w-auto", className)}
    />
  );

  if (!linked) return image;

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
      aria-label={brandAssets.homeLabel}
    >
      {image}
    </Link>
  );
}

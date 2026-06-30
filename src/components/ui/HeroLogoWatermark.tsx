import Image from "next/image";
import clsx from "clsx";
import { brandAssets } from "@/content/site";

type HeroLogoWatermarkProps = {
  position?: "center" | "left" | "right";
  opacity?: 0.04 | 0.05 | 0.06 | 0.07 | 0.08;
  className?: string;
};

const positionClasses = {
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  left: "top-1/2 left-[6%] -translate-y-1/2 lg:left-[10%]",
  right: "top-1/2 right-[6%] -translate-y-1/2 lg:right-[10%]",
} as const;

export default function HeroLogoWatermark({
  position = "center",
  opacity = 0.06,
  className,
}: HeroLogoWatermarkProps) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute z-[1] select-none",
        positionClasses[position],
        className,
      )}
      style={{ opacity }}
    >
      <Image
        src={brandAssets.logoMark}
        alt=""
        width={400}
        height={400}
        aria-hidden
        className="h-auto w-[min(52vw,380px)] sm:w-[min(44vw,420px)] lg:w-[420px]"
      />
    </div>
  );
}

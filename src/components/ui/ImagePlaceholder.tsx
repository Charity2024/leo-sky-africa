import clsx from "clsx";
import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  aspectRatio?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  aspectRatio = "aspect-video",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — image placeholder`}
      className={clsx(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-brand-secondary/10 bg-brand-primary/5",
        aspectRatio,
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(105,21,135,0.15),transparent_70%)]"
      />
      <ImageIcon className="relative mb-3 h-8 w-8 text-brand-secondary/40" aria-hidden />
      <span className="relative px-4 text-center text-xs tracking-wide text-brand-muted">
        {label}
      </span>
    </div>
  );
}

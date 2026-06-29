import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-brand-cream shadow-[0_4px_30px_rgba(105,21,135,0.4)] hover:bg-brand-purple-tone hover:shadow-[0_8px_40px_rgba(105,21,135,0.6)]",
  secondary:
    "border border-brand-secondary/25 bg-brand-dark/45 text-brand-cream/90 backdrop-blur-md hover:border-brand-secondary/50 hover:bg-brand-primary/15 hover:text-brand-cream hover:shadow-[0_0_30px_rgba(224,137,253,0.25)]",
  ghost:
    "border border-brand-secondary/30 bg-brand-primary/25 text-brand-cream backdrop-blur-sm hover:border-brand-secondary hover:bg-brand-primary/40 hover:shadow-[0_0_40px_rgba(224,137,253,0.3)]",
};

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark disabled:pointer-events-none disabled:opacity-50 sm:text-[15px]";

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(base, variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

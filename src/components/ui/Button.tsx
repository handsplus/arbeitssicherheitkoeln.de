import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  "aria-label"?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <Link
      href={href}
      className={`${base} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}

type ButtonAsButtonProps = {
  type: "button" | "submit";
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
  "aria-label"?: string;
  onClick?: () => void;
};

export function ButtonAsButton({
  type,
  children,
  variant = "primary",
  className = "",
  disabled,
  "aria-label": ariaLabel,
  onClick,
}: ButtonAsButtonProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <button
      type={type}
      className={`${base} ${className}`}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

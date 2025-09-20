'use client';
import clsx from "clsx";

type Props = {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: "black" | "gray" | "gradient";
};

export default function GradientButton({
  href, onClick, className, children, variant = "black",
}: Props) {
  const base = "rounded-lg px-5 py-3 font-medium transition-colors";
  const styles = {
    black: "bg-black text-white shadow-md hover:bg-neutral-900",
    gray: "bg-white text-neutral-900 border border-neutral-200 shadow-sm hover:bg-neutral-50",
    gradient: "button-gradient shadow-md hover:opacity-90",
  } as const;

  const cls = clsx(base, styles[variant], className);
  return href ? (
    <a href={href} className={cls}>{children}</a>
  ) : (
    <button onClick={onClick} className={cls}>{children}</button>
  );
}

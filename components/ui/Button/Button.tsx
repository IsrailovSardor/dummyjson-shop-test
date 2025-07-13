import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  fullWidth = false,
  ...props
}) => (
  <button
    className={clsx(
      styles.button,
      styles[`button--${variant}`],
      fullWidth && styles["button--fullWidth"],
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;

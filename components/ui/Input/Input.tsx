import React, { forwardRef, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => (
    <div className={styles.input__wrapper}>
      {label && (
        <label htmlFor={props.id} className={styles.input__label}>
          {label}
        </label>
      )}
      <input
        id={props.id}
        ref={ref}
        className={[styles.input__field, className].join(" ")}
        {...props}
      />
      {error && <div className={styles.input__error}>{error}</div>}
    </div>
  )
);

Input.displayName = "Input";

export default Input;

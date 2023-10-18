import { forwardRef, memo, ReactNode } from "react";
import { Input, InputProps } from "../../base/input";
import "./index.style.scss";

export interface TextFieldProps extends InputProps {
  label?: ReactNode;
  labelClassName?: string;
  helperText?: ReactNode;
  error?: boolean;
  rootClassName?: string;
  inputClassName?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function (
  props,
  ref
) {
  const {
    label,
    helperText,
    error,
    required,
    labelClassName,
    rootClassName,
    title,
    inputClassName,
    ...otherProps
  } = props;
  const inputErrorClass = error ? "input-error" : undefined;
  const helperTextClass = error ? "helper-text-error" : undefined;
  const showAsterisk = required ? " *" : undefined;
  return (
    <label className={`text-field-root ${rootClassName}`}>
      {label && (
        <span
          data-value={showAsterisk}
          className={`text-field-label ${labelClassName}`}
        >
          {label}
        </span>
      )}
      <Input
        {...otherProps}
        title={title ?? required ? "Please fill in this field." : undefined}
        ref={ref}
        required={required}
        className={`${inputErrorClass} ${inputClassName}`}
        aria-label={label?.toString()}
        aria-required={required}
        aria-invalid={error}
        aria-disabled={otherProps.disabled}
        aria-readonly={otherProps.readOnly}
      />
      {helperText && (
        <span className={`field-helperText ${helperTextClass}`}>
          {helperText}
        </span>
      )}
    </label>
  );
});

TextField.displayName = "TextField";

export default memo(TextField);

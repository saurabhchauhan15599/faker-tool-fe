import PropTypes from "prop-types";
import {
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
} from "react";
import "./index.style.scss";

export type buttonVariantType =
  | "contained"
  | "outlined"
  | "outlined-secondary"
  | "text"
  | "text-noshadow"
  | "contained-nopad"
  | "outlined-nopad";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariantType;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant,
    children,
    disabled,
    className,
    startIcon,
    loading,
    endIcon,
    ...otherProps
  } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement, []);

  return (
    <button
      {...otherProps}
      ref={buttonRef}
      className={`button-root button-${variant} ${className}`}
      disabled={disabled || loading}
    >
      {loading && <span className="spinner" />}
      {startIcon}
      {children}
      {endIcon}
    </button>
  );
});

Button.displayName = "Button";
Button.propTypes = {
  variant: PropTypes.oneOf([
    "contained",
    "outlined",
    "outlined-secondary",
    "text",
    "text-noshadow",
    "contained-nopad",
    "outlined-nopad",
  ]),
};

Button.defaultProps = {
  variant: "contained",
  type: "button",
};

export default memo(Button);

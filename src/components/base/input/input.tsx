import PropTypes from 'prop-types';
import {
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import './index.style.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  inputClassName?: string;
  disableFocus?: boolean;
}

const Input = forwardRef((props: InputProps, ref) => {
  const { disabled, disableFocus, className, inputClassName, startIcon, endIcon, autoFocus, readOnly, ...otherProps } =
    props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocus, setFocus] = useState(!!autoFocus && !disableFocus);

  useImperativeHandle(ref, () => inputRef.current, []);

  const handleFocusEvent = (event: FocusEvent<HTMLInputElement>) => {
    const { onFocus } = props;
    !disableFocus && setFocus(true);
    onFocus?.(event);
  };

  const handleBlurEvent = (event: FocusEvent<HTMLInputElement>) => {
    const { onBlur } = props;
    !disableFocus && setFocus(false);
    onBlur?.(event);
  };

  const focusClassName = inputFocus ? 'input-focus' : null;

  const disabledClassName = disabled ? 'input-disabled' : null;

  return (
    <div className={`input-root ${focusClassName} ${disabledClassName} ${className}`}>
      {startIcon}
      <input
        {...otherProps}
        ref={inputRef}
        className={`input-box ${inputClassName}`}
        readOnly={readOnly ?? disabled}
        disabled={disabled}
        autoFocus={autoFocus}
        onFocus={handleFocusEvent}
        onBlur={handleBlurEvent}
      />
      {endIcon}
    </div>
  );
});

Input.propTypes = {
  inputClassName: PropTypes.string,
  disableFocus: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: 'Jot something down',
  autoFocus: false,
  disabled: false,
  maxLength: 255,
};

Input.displayName = 'Input';

export default memo(Input);

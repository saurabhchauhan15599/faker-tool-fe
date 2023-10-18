import {
  useState,
  useRef,
  forwardRef,
  memo,
  ReactNode,
  useImperativeHandle,
  FocusEvent,
  TextareaHTMLAttributes,
  ChangeEvent,
} from 'react';
import PropTypes from 'prop-types';
import './index.style.scss';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  inputClassName?: string;
  disableFocus?: boolean;
  resizable?: boolean;
  autoExpand?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const {
    disabled,
    disableFocus,
    className,
    inputClassName,
    startIcon,
    endIcon,
    autoFocus,
    resizable,
    autoExpand,
    ...otherProps
  } = props;
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [inputFocus, setFocus] = useState(!!autoFocus && !disableFocus);

  useImperativeHandle(ref, () => textAreaRef.current!, []);

  const handleFocusEvent = (event: FocusEvent<HTMLTextAreaElement>) => {
    const { onFocus } = props;
    !disableFocus && setFocus(true);
    onFocus?.(event);
  };

  const handleBlurEvent = (event: FocusEvent<HTMLTextAreaElement>) => {
    const { onBlur } = props;
    !disableFocus && setFocus(false);
    onBlur?.(event);
  };

  const handleChangeEvent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange, autoExpand, resizable } = props;
    if (autoExpand && !resizable) {
      textAreaRef.current?.setAttribute('style', `height: 0px; overflow-y:hidden;`);
      textAreaRef.current?.setAttribute('style', `height: ${event.currentTarget.scrollHeight}px; overflow-y:hidden;`);
    }

    onChange?.(event);
  };

  const focusClassName = inputFocus ? 'input-focus' : null;
  const disabledClassName = disabled ? 'input-disabled' : null;
  const resizableClassName = resizable ? 'textarea-resizable' : 'textarea-not-resizable';

  return (
    <div className={`textarea-root ${focusClassName} ${disabledClassName} ${className}`}>
      {startIcon}
      <textarea
        {...otherProps}
        ref={textAreaRef}
        className={`textarea-box ${resizableClassName} ${inputClassName}`}
        disabled={disabled}
        autoFocus={autoFocus}
        onFocus={handleFocusEvent}
        onBlur={handleBlurEvent}
        onChange={handleChangeEvent}
      />
      {endIcon}
    </div>
  );
});

TextArea.propTypes = {
  inputClassName: PropTypes.string,
  disableFocus: PropTypes.bool,
  resizable: PropTypes.bool,
  autoExpand: PropTypes.bool,
};

TextArea.defaultProps = {
  placeholder: 'Jot something down',
  autoFocus: false,
  disabled: false,
  rows: 2,
  resizable: false,
  autoExpand: true,
};

export default memo(TextArea);

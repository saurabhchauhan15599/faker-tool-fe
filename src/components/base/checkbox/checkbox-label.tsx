import { LabelHTMLAttributes, ReactNode, forwardRef, memo, useMemo } from 'react';
import Checkbox, { CheckboxProps } from './checkbox';

interface CheckboxLabelProps extends CheckboxProps {
  label: ReactNode;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

const CheckboxLabel = forwardRef<HTMLInputElement, CheckboxLabelProps>((props, ref) => {
  const { label, labelProps, ...otherProps } = props;

  const labelClass = useMemo(() => {
    const { className, disabled } = props;
    const checkboxClass = disabled ? 'input-checkbox-label checkbox-disable' : 'input-checkbox-label';
    return `${checkboxClass} ${className}`;
  }, [props.disabled, props.className]);

  return (
    <label {...labelProps} className={labelClass}>
      <Checkbox {...otherProps} ref={ref} />
      <span className="checkbox-label">{label}</span>
    </label>
  );
});

CheckboxLabel.displayName = 'CheckboxLabel';
export type { CheckboxLabelProps };
export default memo(CheckboxLabel);

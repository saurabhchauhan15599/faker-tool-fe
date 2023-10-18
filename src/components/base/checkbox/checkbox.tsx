import PropTypes from 'prop-types';
import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  memo,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import CheckedCheckboxIntermediate from '../../../assets/icons/CheckboxInt';
import CheckedCheckbox from '../../../assets/icons/CheckedCheckbox';
import DisabledCheckbox from '../../../assets/icons/DisabledCheckbox';
import CheckboxDisabledIntermediate from '../../../assets/icons/DisabledCheckboxInt';
import UncheckedCheckbox from '../../../assets/icons/UncheckedCheckbox';
import UncheckedDisabledCheckbox from '../../../assets/icons/UncheckedCheckboxDisabled';
import './index.style.scss';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { indeterminate = false, checked, defaultChecked, className, ...otherProps } = props;

  const [checkboxState, setCheckboxState] = useState(!!defaultChecked);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

  useEffect(() => {
    const { checked } = props;
    if (checked !== undefined) setCheckboxState(!!checked);
  }, [props.checked]);

  const renderCheckbox = useMemo(() => {
    const { disabled } = props;
    return disabled ? (
      indeterminate ? (
        <CheckboxDisabledIntermediate className="checkbox-svg" />
      ) : checkboxState ? (
        <DisabledCheckbox className="checkbox-svg" />
      ) : (
        <UncheckedDisabledCheckbox className="checkbox-svg" />
      )
    ) : indeterminate ? (
      <CheckedCheckboxIntermediate className="checkbox-svg" />
    ) : checkboxState ? (
      <div className="checkedContainer">
        <CheckedCheckbox className="checkbox-svg" />
      </div>
    ) : (
      <UncheckedCheckbox className="checkbox-svg" />
    );
  }, [props.indeterminate, checkboxState, props.disabled]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, checked } = props;
    onChange?.(event);
    if (checked !== undefined) return;
    setCheckboxState(event.currentTarget.checked);
  };

  return (
    <span className={`checkbox-input-wrapper ${className}`}>
      <input
        {...otherProps}
        ref={inputRef}
        checked={checkboxState}
        type="checkbox"
        className="input-checkbox"
        onChange={handleChange}
      />
      <span className="checkbox-ripple"></span>
      {renderCheckbox}
    </span>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
  indeterminate: false,
  disabled: false,
};

Checkbox.propTypes = {
  indeterminate: PropTypes.bool,
};

export type { CheckboxProps };
export default memo(Checkbox);

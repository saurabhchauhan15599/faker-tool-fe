/* eslint-disable import/named */
import { Ref, forwardRef } from "react";
import { GroupBase, Props, SelectInstance } from "react-select";
import "./index.style.scss";
import { Select } from "../../base/select";

interface SelectLabelProps extends Props {
  label?: string;
  helperText?: string;
  error?: boolean;
  tagLimit?: number;
  rootClassName?: string;
  value?: any;
  styles?: any;
}

const SelectLabel = forwardRef(function SelectLabel<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: SelectLabelProps, ref: Ref<SelectInstance<Option, IsMulti, Group>>) {
  const {
    label,
    helperText,
    error,
    required,
    className,
    tagLimit = 2,
    rootClassName,
    value,
    styles,
    ...otherProps
  } = props;
  const errorClass = error ? `select-control-error ${className}` : className;
  const helperTextClass = error ? "helper-text-error" : "";
  const showAsterisk = required ? " *" : "";
  return (
    <label className={`select-label-wrapper ${rootClassName}`}>
      {label && (
        <span className="select-label" data-value={showAsterisk}>
          {label}
        </span>
      )}
      <Select
        {...otherProps}
        tagLimit={tagLimit}
        className={errorClass}
        ref={ref as any}
        required={required}
        value={value}
        styles={styles}
      />
      {helperText && (
        <span className={`select-field-helperText ${helperTextClass}`}>
          {helperText}
        </span>
      )}
    </label>
  );
});

export default SelectLabel;
export type { SelectLabelProps };

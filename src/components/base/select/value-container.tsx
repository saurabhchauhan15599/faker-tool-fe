import { useMemo } from 'react';
import './index.style.scss';
import { components, GroupBase, ValueContainerProps } from 'react-select';

function ValueContainer<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: ValueContainerProps<Option, IsMulti, Group>) {
  const { children, isMulti } = props;
  const [values, input] = children as any;

  const valueContainer = useMemo(() => {
    const { selectProps } = props;
    const { tagLimit } = selectProps as any;
    if (Array.isArray(values)) return values.slice(0, tagLimit);
    return values;
  }, [values]);

  const count = useMemo(() => {
    const { selectProps, isMulti } = props;
    const { tagLimit } = selectProps as any;
    if (Array.isArray(values) && isMulti) return values.length - tagLimit;
    return values;
  }, [values]);

  return (
    <components.ValueContainer {...props}>
      {valueContainer}
      {isMulti && count > 0 && <div className="tag-count">{`+${count}`}</div>}
      {input}
    </components.ValueContainer>
  );
}

export default ValueContainer;

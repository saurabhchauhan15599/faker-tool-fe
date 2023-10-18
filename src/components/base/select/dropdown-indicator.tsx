import { components, DropdownIndicatorProps, GroupBase } from "react-select";
import ChevronDown from "../../../assets/icons/ChevronDown";
import ChevronUp from "../../../assets/icons/ChevronUp";

function DropdownIndicator<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: DropdownIndicatorProps<Option, IsMulti, Group>) {
  const { selectProps } = props;
  const { menuIsOpen } = selectProps;
  return (
    <components.DropdownIndicator {...props}>
      {menuIsOpen ? <ChevronUp /> : <ChevronDown />}
    </components.DropdownIndicator>
  );
}

export default DropdownIndicator;

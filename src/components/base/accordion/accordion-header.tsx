import { KeyboardEvent, ReactNode, useContext } from "react";
import ChevronDown from "../../../assets/icons/ChevronDown";
import { AccordionContext } from "./accordion";

interface AccordionHeaderProps {
  children?: ReactNode;
  className?: string;
}

const AccordionHeader = (props: AccordionHeaderProps) => {
  const { children, className } = props;
  const accordionConsumer = useContext(AccordionContext);

  if (!accordionConsumer)
    throw new Error(
      "Context is not initialized, Wrap this component with Accordion"
    );

  const { open, disabled, changeAccordionState } = accordionConsumer;

  const disabledClass = disabled
    ? "accordion-header-wrapper accordion-disabled"
    : "accordion-header-wrapper";
  const chevronClass = open ? "chevron-rotate" : "";

  const handleClick = () => {
    changeAccordionState(!open);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Enter") changeAccordionState(!open);
  };

  return (
    <div
      className={`${disabledClass} ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="button"
      aria-expanded={open}
      aria-disabled={disabled}
    >
      <div className="accordion-header-content">{children}</div>
      <div className={`accordion-chevron-wrapper ${chevronClass}`}>
        <ChevronDown />
      </div>
    </div>
  );
};

export default AccordionHeader;

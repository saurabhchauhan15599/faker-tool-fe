import { createContext, ReactNode, useEffect, useState } from 'react';
import './index.style.scss';
import PropTypes from 'prop-types';
import AccordionHeader from './accordion-header';
import AccordionContent from './accordion-content';

interface IAccordionContext {
  open: boolean;
  disabled: boolean;
  changeAccordionState: (state: boolean) => void;
}

export const AccordionContext = createContext<IAccordionContext | null>(null);

interface AccordionProps {
  defaultExpanded?: boolean;
  expanded?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onChange?: (isExpanded: boolean) => void;
  className?: string;
}

interface AccordionState {
  open: boolean;
}

const Accordion = (props: AccordionProps) => {
  const { defaultExpanded, disabled, children, className } = props;

  const [accordionState, setAccordionState] = useState<AccordionState>({
    open: !!defaultExpanded
  });

  useEffect(() => {
    const { expanded } = props;
    if (expanded !== undefined)
      setAccordionState((prevState) => ({ ...prevState, open: !!expanded }));
  }, [props.expanded]);

  const changeAccordionState = (state: boolean) => {
    const { onChange, disabled } = props;
    !disabled && setAccordionState((prevState) => ({ ...prevState, open: state }));
    onChange?.(state);
  };

  return (
    <AccordionContext.Provider
      value={{ open: accordionState.open, disabled: !!disabled, changeAccordionState }}>
      <div className={`accordion-root ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.propTypes = {
  defaultExpanded: PropTypes.bool,
  expanded: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;

import { ReactNode, useContext } from 'react';
import './index.style.scss';
import { AccordionContext } from './accordion';

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent = (props: AccordionContentProps) => {
  const { children, className } = props;

  const accordionConsumer = useContext(AccordionContext);
  if (!accordionConsumer)
    throw new Error('Context is not initialized, Wrap this component with Accordion');

  const { open } = accordionConsumer;

  const contentClass = open
    ? `accordion-content ${className}`
    : `accordion-content accordion-content-collapse ${className}`;

  return (
    <div className={contentClass} role="region">
      {children}
    </div>
  );
};

export default AccordionContent;

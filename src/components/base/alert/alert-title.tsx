import { ReactNode } from 'react';
import Typography from '../typography';
import './index.style.scss';

export interface AlertTitleProps {
  children: ReactNode;
}

const AlertTitle = (props: AlertTitleProps) => {
  const { children } = props;
  return (
    <Typography variant="span" className="alert-title-root">
      {children}
    </Typography>
  );
};

export default AlertTitle;

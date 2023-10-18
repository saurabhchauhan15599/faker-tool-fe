import React from 'react';
import { SVGProps } from '../../helpers/types';

const AlertWarning: React.FC<SVGProps> = () => {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0.333344L0.666667 13H15.3333M8 3.00001L13.02 11.6667H2.98M7.33333 5.66668V8.33334H8.66667V5.66668M7.33333 9.66668V11H8.66667V9.66668"
        fill="#F79009"
      />
    </svg>
  );
};

export default AlertWarning;

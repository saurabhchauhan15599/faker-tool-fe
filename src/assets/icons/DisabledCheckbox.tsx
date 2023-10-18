import React from 'react';
import { SVGProps } from '../../helpers/types';

const DisabledCheckbox: React.FC<SVGProps> = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="#FCFCFC" />
      <path d="M12 5L6.5 10.5L4 8" stroke="#E2E2E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#E2E2E2" />
    </svg>
  );
};

export default DisabledCheckbox;

import React from 'react';
import { SVGProps } from '../../helpers/types';

const CheckedCheckboxIntermediate: React.FC<SVGProps> = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" fill="#EEF7FE" />
      <path d="M5.9165 10H14.0832" stroke="#2C74D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#2C74D6" />
    </svg>
  );
};

export default CheckedCheckboxIntermediate;

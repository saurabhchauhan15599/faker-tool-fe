import React from 'react';
import { SVGProps } from '../../helpers/types';

const CheckedCheckbox: React.FC<SVGProps> = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.03469 7.61723C2.73117 7.91303 2.7318 8.40105 3.03607 8.69607L5.89309 11.4662C6.20001 11.7638 6.6877 11.7641 6.99505 11.467L13.489 5.1887C13.7972 4.89077 13.7956 4.39629 13.4855 4.10036C13.1926 3.82082 12.7313 3.82229 12.4402 4.10369L6.44369 9.9L4.08289 7.61538C3.79049 7.33241 3.32609 7.33323 3.03469 7.61723Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckedCheckbox;

import React from 'react';
import { SVGProps } from '../../helpers/types';

const SelectedRadio: React.FC<SVGProps> = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="10" fill="#1ECEF7" />
      <path
        d="M6.27504 9.71287C6.0474 9.93472 6.04787 10.3007 6.27608 10.522L8.41884 12.5996C8.64903 12.8228 9.0148 12.8231 9.24531 12.6002L14.1158 7.89147C14.3469 7.66803 14.3457 7.29716 14.1132 7.07522C13.8935 6.86556 13.5475 6.86666 13.3291 7.07772L8.83179 11.4249L7.06119 9.71148C6.84189 9.49926 6.49359 9.49987 6.27504 9.71287Z"
        fill="white"
      />
    </svg>
  );
};

export default SelectedRadio;

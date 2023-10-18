import React from 'react';
import { SVGProps } from '../../helpers/types';

const CompletedStatus: React.FC<SVGProps> = () => {
  return (
    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_3936_222)">
        <path
          d="M13.5 2.16675C7.51996 2.16675 2.66663 7.02008 2.66663 13.0001C2.66663 18.9801 7.51996 23.8334 13.5 23.8334C19.48 23.8334 24.3333 18.9801 24.3333 13.0001C24.3333 7.02008 19.48 2.16675 13.5 2.16675ZM10.5641 17.6476L6.67496 13.7584C6.25246 13.3359 6.25246 12.6534 6.67496 12.2309C7.09746 11.8084 7.77996 11.8084 8.20246 12.2309L11.3333 15.3509L18.7866 7.89758C19.2091 7.47508 19.8916 7.47508 20.3141 7.89758C20.7366 8.32008 20.7366 9.00258 20.3141 9.42508L12.0916 17.6476C11.68 18.0701 10.9866 18.0701 10.5641 17.6476Z"
          fill="#00AD45"
        />
      </g>
      <defs>
        <clipPath id="clip0_3936_222">
          <rect width="26" height="26" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CompletedStatus;

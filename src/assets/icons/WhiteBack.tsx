import React from 'react';
import { SVGProps } from '../../helpers/types';

const WhiteBack: React.FC<SVGProps> = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 100% 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_3663_2299)">
        <rect x="8.08105" y="6" width="856.838" height="579.086" rx="10" fill="white" />
        <rect x="8.58105" y="6.5" width="855.838" height="578.086" rx="9.5" stroke="black" strokeOpacity="0.14" />
      </g>
      <defs>
        <filter
          id="filter0_d_3663_2299"
          x="0.832443"
          y="0.945922"
          width="871.335"
          height="593.583"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2.19453" />
          <feGaussianBlur stdDeviation="3.62431" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.545098 0 0 0 0 0.666667 0 0 0 0.06 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3663_2299" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3663_2299" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default WhiteBack;

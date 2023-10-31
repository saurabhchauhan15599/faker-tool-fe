import React from "react";
import { SVGProps } from "../../helpers/types";

const ChevronLeft: React.FC<SVGProps> = ({ color = "#000000" }, props) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.9951 9.585L3.1151 5.705L6.9951 1.825C7.3851 1.435 7.3851 0.804998 6.9951 0.414998C6.6051 0.0249976 5.9751 0.0249976 5.5851 0.414998L0.995098 5.005C0.605098 5.395 0.605098 6.025 0.995098 6.415L5.5851 11.005C5.9751 11.395 6.6051 11.395 6.9951 11.005C7.3751 10.615 7.3851 9.975 6.9951 9.585Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronLeft;

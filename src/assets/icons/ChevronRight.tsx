import React from "react";
import { SVGProps } from "../../helpers/types";

const ChevronRight: React.FC<SVGProps> = ({ color = "#000000" }, props) => {
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
        d="M1.0049 9.585L4.8849 5.705L1.0049 1.825C0.614902 1.435 0.614902 0.804998 1.0049 0.414998C1.3949 0.0249976 2.0249 0.0249976 2.4149 0.414998L7.0049 5.005C7.3949 5.395 7.3949 6.025 7.0049 6.415L2.4149 11.005C2.0249 11.395 1.3949 11.395 1.0049 11.005C0.624902 10.615 0.614902 9.975 1.0049 9.585Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronRight;

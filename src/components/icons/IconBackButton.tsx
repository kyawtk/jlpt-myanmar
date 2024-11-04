import React, { SVGProps } from 'react';

function IconBackButton(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      fill="none"
      viewBox="0 0 31 30"
      {...props}
    >
      <rect
        width="30.189"
        height="30"
        fill="#EDEDED"
        rx="5"
        className="dark:fill-[#1A1A2E]"
      ></rect>
      <path
        stroke="#424242"
        className="dark:stroke-[white]"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M17.19 21l-3.85-4.94c-.454-.583-.454-1.537 0-2.12L17.19 9"
      ></path>
    </svg>
  );
}

export default IconBackButton;

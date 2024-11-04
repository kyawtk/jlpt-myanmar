import React, { SVGProps } from 'react';
const IconLogout = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group overflow-visible transition-all"
      {...props}
    >
      <path
        d="M7.58333 19.125H3.52778C2.98998 19.125 2.4742 18.9114 2.09392 18.5311C1.71364 18.1508 1.5 17.635 1.5 17.0972V2.90278C1.5 2.36498 1.71364 1.8492 2.09392 1.46892C2.4742 1.08864 2.98998 0.875 3.52778 0.875H7.58333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="group-hover:translate-x-1"
        d="M14.6797 15.0694L19.7491 9.99999L14.6797 4.93054"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="group-hover:translate-x-1"
        d="M19.7507 10H7.58398"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconLogout;

import React, { SVGProps } from 'react';

const IconMonth = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 26 26"
      {...props}
    >
      <path
        fill="#424242"
        d="M13.393 2.262C7.6 2.262 2.88 6.982 2.88 12.774c0 5.793 4.72 10.513 10.512 10.513 5.793 0 10.513-4.72 10.513-10.512 0-5.793-4.72-10.513-10.513-10.513zm4.572 14.266a.784.784 0 01-1.082.273l-3.26-1.945c-.809-.483-1.408-1.545-1.408-2.48V8.064c0-.431.357-.789.789-.789.43 0 .788.358.788.789v4.31c0 .379.315.936.641 1.125l3.26 1.945c.378.22.504.704.272 1.083z"
      ></path>
    </svg>
  );
};

export default IconMonth;

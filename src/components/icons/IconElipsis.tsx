import React, { SVGProps } from 'react';

const IconElipsis = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="6"
      height="24"
      viewBox="0 0 6 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="3" cy="3" r="3" fill="#757575" />
      <circle cx="3" cy="12" r="3" fill="#757575" />
      <circle cx="3" cy="21" r="3" fill="#757575" />
    </svg>
  );
};

export default IconElipsis;

import React, { SVGProps } from 'react';

const IconThumbsUp = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.19531 17.3511L9.29531 19.7511C9.69531 20.1511 10.5953 20.3511 11.1953 20.3511H14.9953C16.1953 20.3511 17.4953 19.4511 17.7953 18.2511L20.1953 10.9511C20.6953 9.55107 19.7953 8.35107 18.2953 8.35107H14.2953C13.6953 8.35107 13.1953 7.85107 13.2953 7.15107L13.7953 3.95107C13.9953 3.05107 13.3953 2.05107 12.4953 1.75107C11.6953 1.45107 10.6953 1.85107 10.2953 2.45107L6.19531 8.55107"
        stroke={props.fill ? 'none' : 'currentColor'}
        strokeWidth="1.8"
        strokeMiterlimit="10"
      />
      <path
        d="M1.09375 17.351V7.551C1.09375 6.151 1.69375 5.651 3.09375 5.651H4.09375C5.49375 5.651 6.09375 6.151 6.09375 7.551V17.351C6.09375 18.751 5.49375 19.251 4.09375 19.251H3.09375C1.69375 19.251 1.09375 18.751 1.09375 17.351Z"
        stroke={props.fill ? 'none' : 'currentColor'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconThumbsUp;

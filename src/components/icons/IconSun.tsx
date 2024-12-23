import React, { SVGProps } from 'react';

const IconSun = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
      {...props}
    >
      <path fill="currentColor" d="M12 19.5a7 7 0 100-14 7 7 0 000 14z"></path>
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.321"
        d="M18.767 19.753l-.467.467.467-.467a.335.335 0 010-.476.335.335 0 01.476 0l.467-.467-.467.467.13.13a.335.335 0 01-.233.572.363.363 0 01-.25-.103l-.123-.123zm.476-14.02l.467.467-.467-.467a.323.323 0 01-.233.096.362.362 0 01-.248-.102.335.335 0 01.005-.47l.13-.13a.335.335 0 01.476 0 .335.335 0 010 .476l-.13.13zM4.634 5.61l-.008-.008-.009-.01a.335.335 0 010-.475.335.335 0 01.476 0l.13.13.467-.467-.467.467a.335.335 0 010 .476l-.006.006-.006.006a.31.31 0 01-.221.094.36.36 0 01-.243-.097l-.113-.122zM12 22.8c-.221 0-.34-.15-.34-.3v-.08c0-.185.155-.34.34-.34.185 0 .34.155.34.34 0 .219-.188.38-.34.38zm-7.14-2.82a.362.362 0 01-.248-.103.335.335 0 01.005-.47l.13-.13a.335.335 0 01.476 0 .335.335 0 010 .476l-.13.13a.34.34 0 01-.233.096zM22 12.84h-.08a.342.342 0 01-.34-.34c0-.185.155-.34.34-.34.219 0 .38.188.38.34 0 .221-.15.34-.3.34zm-19.92 0H2a.342.342 0 01-.34-.34c0-.185.155-.34.34-.34.219 0 .38.188.38.34 0 .221-.15.34-.3.34zM12 2.88c-.221 0-.34-.15-.34-.3V2.5c0-.185.155-.34.34-.34.185 0 .34.155.34.34 0 .219-.188.38-.34.38z"
      ></path>
    </svg>
  );
};

export default IconSun;

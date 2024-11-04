import { SVGProps } from 'react';

const IconCourseDetailButton = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="222"
      height="46"
      fill="currentColor"
      viewBox="0 0 222 46"
      {...props}
    >
      <rect
        width="219"
        height="43"
        x="1.5"
        y="1.5"
        fill="current"
        stroke="#A3CDF0"
        strokeWidth="3"
        rx="21.5"
      ></rect>
      <path
        fill="currentColor"
        d="M125.707 23.707a1 1 0 000-1.414l-6.364-6.364a1 1 0 10-1.414 1.414L123.586 23l-5.657 5.657a1 1 0 101.414 1.414l6.364-6.364zM98 24h27v-2H98v2z"
      ></path>
    </svg>
  );
};

export default IconCourseDetailButton;

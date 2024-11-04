import { SVGProps } from 'react';

const IconWhishList = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="54"
      fill="none"
      viewBox="0 0 54 54"
      {...props}
    >
      <g filter="url(#filter0_b_6910_2129)">
        <rect
          width="52.985"
          height="52.985"
          x="0.093"
          y="0.923"
          fill="url(#paint0_linear_6910_2129)"
          rx="26.492"
        ></rect>
      </g>
      <path
        stroke="#C14240"
        strokeWidth="1.892"
        d="M28.067 16.815h0c2.532-2.763 6.534-3.138 9.187-.748 3.142 2.835 3.316 7.967.49 11.052h-.001L26.835 39.03s0 0 0 0c-.33.36-.828.36-1.158 0 0 0 0 0 0 0L14.77 27.12s0 0 0 0 0 0 0 0c-2.822-3.086-2.648-8.217.493-11.053 2.653-2.39 6.661-2.014 9.187.747l.001.001 1.11 1.21.698.76.697-.76 1.11-1.21z"
      ></path>
      <defs>
        <filter
          id="filter0_b_6910_2129"
          width="103.446"
          height="103.446"
          x="-25.138"
          y="-24.308"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="12.615"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_6910_2129"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_6910_2129"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_6910_2129"
          x1="2.501"
          x2="59.086"
          y1="3.256"
          y2="41.188"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0.6"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0.6"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconWhishList;

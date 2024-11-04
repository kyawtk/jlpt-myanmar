import React, { SVGProps } from 'react';

function IconTestimonial(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="122"
      height="121"
      fill="none"
      viewBox="0 0 122 121"
      {...props}
    >
      <circle cx="61" cy="60.5" r="60.5" fill="#FFBFB8"></circle>
      <circle
        cx="61"
        cy="60.5"
        r="60.5"
        fill="url(#pattern0_3024_11510)"
      ></circle>
      <defs>
        <pattern
          id="pattern0_3024_11510"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00517 0 0 .00517 -.017 -.017)"
            xlinkHref="#image0_3024_11510"
          ></use>
        </pattern>
        <image
          id="image0_3024_11510"
          width="200"
          height="200"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default IconTestimonial;

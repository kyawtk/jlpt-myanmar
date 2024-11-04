import React, { SVGProps } from 'react';

function IconUserFriendly(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="94"
      height="94"
      fill="none"
      viewBox="0 0 94 94"
      {...props}
    >
      <path fill="url(#pattern0_4462_404)" d="M0 0H94V94H0z"></path>
      <defs>
        <pattern
          id="pattern0_4462_404"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01064)" xlinkHref="#image0_4462_404"></use>
        </pattern>
        <image
          id="image0_4462_404"
          width="94"
          height="94"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default IconUserFriendly;
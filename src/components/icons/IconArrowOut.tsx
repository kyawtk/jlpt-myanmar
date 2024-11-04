'use client';

import { arrowMotionToUpperLeft } from '#/constants/framer-motion/variants';
import { motion } from 'framer-motion';
const IconArrowOut = (props: any) => {
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      whileHover={'hover'}
      className={'overflow-visible'}
      {...props}
    >
      <motion.path
        variants={arrowMotionToUpperLeft}
        d="M12.9512 11L21.0418 2.80005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={arrowMotionToUpperLeft}
        d="M21.8317 6.8V2H17.0957"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9776 2H9.00429C4.07098 2 2.09766 4 2.09766 9V15C2.09766 20 4.07098 22 9.00429 22H14.9243C19.8576 22 21.8309 20 21.8309 15V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default IconArrowOut;

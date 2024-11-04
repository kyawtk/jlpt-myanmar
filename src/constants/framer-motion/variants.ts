export const arrowMotionToUpperLeft = {
  initial: {
    x: 0,
    y: 0,
  },
  hover: {
    x: 3,
    y: -3,
  },
};

export const animations = {
  popInOut: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
    transition: { type: 'spring', stiffness: 900, damping: 40 },
  },
};
// export const slideIn = {
//     initial={{ x: "100%" }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ x: "-100%" }}
// }

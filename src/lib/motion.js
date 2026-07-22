/* Apple-like motion tokens — soft, decisive, never abrupt */
export const ease = [0.22, 1, 0.36, 1];
export const easeOut = [0.16, 1, 0.3, 1];
export const easeInOut = [0.45, 0, 0.55, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.04 },
  },
};

export const viewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -4% 0px",
};

/** Cards / media — barely perceptible press */
export const tapScale = { scale: 0.985 };
/** Buttons — slightly firmer */
export const tapPress = { scale: 0.972 };

export const springSoft = {
  type: "spring",
  stiffness: 420,
  damping: 32,
  mass: 0.65,
};

export const springSnappy = {
  type: "spring",
  stiffness: 520,
  damping: 34,
  mass: 0.55,
};

export const menuOverlay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.38, ease },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease, delay: 0.04 },
  },
};

export const menuList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.028, staggerDirection: -1 },
  },
};

export const menuItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.22, ease },
  },
};

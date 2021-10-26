import { spring } from "react-router-transition";


// We need to map the `scale` prop we define below to the transform style property:
export function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// Wrap the `spring` helper to use a bouncy config:
export function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// Child matches will...
export const bounceTransition = {
  // Start in a transparent, upscaled state:
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // Leave in a transparent, downscaled state:
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // And rest at an opaque, normally-scaled state:
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

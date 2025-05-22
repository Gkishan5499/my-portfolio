export const cardHover = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
    }
  }
};

export const buttonHover = {
  whileHover: {
    scale: 1.1,
    backgroundColor: "#3b82f6", // Tailwind `bg-blue-500`
    color: "#fff",
    transition: {
      type: "spring",
      stiffness: 300,
    }
  }
};
// animations/variants.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

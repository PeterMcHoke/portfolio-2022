import { motion } from 'framer-motion';

const ScrollProgress = ({ pathLength }: { pathLength: any }) => {
  return (
    <svg className="w-full" viewBox="0 0 60 60">
      <motion.path
        fill="none"
        strokeWidth="4"
        stroke="white"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1, // Reverse direction of line animation
        }}
      />
    </svg>
  );
};

export default ScrollProgress;

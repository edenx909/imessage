import { motion } from "framer-motion";

const circleVariants = {
  animate1: {
    scale: [1, 1.2, 1],
    x: [0, 100, 0],
    y: [0, 50, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate2: {
    scale: [1, 1.1, 1],
    x: [0, 120, 0],
    y: [0, -60, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate3: {
    scale: [1, 1.3, 1],
    x: [0, 140, 0],
    y: [0, 70, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate4: {
    scale: [1, 1.4, 1],
    x: [0, 160, 0],
    y: [0, -80, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate5: {
    scale: [1, 1.5, 1],
    x: [0, 180, 0],
    y: [0, 90, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate6: {
    scale: [1, 1.6, 1],
    x: [0, 200, 0],
    y: [0, -100, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Background = () => {
  return (
    <div className="pointer-events-none fixed left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden opacity-20 blur-[100px] filter">
      <motion.div
        className="absolute h-[250px] w-[350px] rounded-full bg-yellow-500"
        variants={circleVariants}
        animate="animate1"
      ></motion.div>
      <motion.div
        className="absolute h-[260px] w-[360px] rounded-full bg-orange-500"
        variants={circleVariants}
        animate="animate2"
      ></motion.div>
      <motion.div
        className="absolute h-[270px] w-[370px] rounded-full bg-green-500"
        variants={circleVariants}
        animate="animate3"
      ></motion.div>
      <motion.div
        className="absolute h-[280px] w-[380px] rounded-full bg-purple-500"
        variants={circleVariants}
        animate="animate4"
      ></motion.div>
      <motion.div
        className="absolute h-[290px] w-[390px] rounded-full bg-blue-500"
        variants={circleVariants}
        animate="animate5"
      ></motion.div>
      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full bg-pink-500"
        variants={circleVariants}
        animate="animate6"
      ></motion.div>
    </div>
  );
};

export default Background;

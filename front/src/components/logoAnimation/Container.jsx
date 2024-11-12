import { motion } from "framer-motion";
import Circles from "./Circles";
import Logo from "../../assets/logo";

const Container = () => {
  return (
    // make sure the spread is in rem
    // size is for both height & width, also in rem
    <div className="relative flex items-center justify-center pb-48">
      <motion.div
        initial={{ scale: 0.4, opacity: 0, filter: "blur(9px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Logo fill={"#black"} />
      </motion.div>
      <motion.div
        className="absolute"
        initial={{ opacity: 0, filter: "blur(9px)" }}
        animate={{
          scale: 1.2,
          rotate: "30deg",
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Circles cirleDots={16} spread={"3rem"} size={"0.5rem"} />
      </motion.div>
      <motion.div
        className="absolute"
        initial={{ opacity: 0, filter: "blur(7px)" }}
        animate={{
          scale: 1.2,
          rotate: "45deg",
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Circles cirleDots={17} spread={"4rem"} size={"0.6rem"} />
      </motion.div>
      <motion.div
        className="absolute"
        initial={{ opacity: 0, filter: "blur(3px)" }}
        animate={{
          scale: 1.2,
          rotate: "60deg",
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Circles cirleDots={18} spread={"5rem"} size={"0.7rem"} />
      </motion.div>
    </div>
  );
};

export default Container;

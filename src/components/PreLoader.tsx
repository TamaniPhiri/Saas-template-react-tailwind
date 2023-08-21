import { motion } from "framer-motion";

const PreLoader = () => {
  return (
    <motion.div
      initial={{ x: 0, scaleX: 1 }}
      whileInView={{ x: "100%", scaleX: 1 }}
      transition={{ delay: 1, duration: 2 }}
      className="absolute inset-0 z-[60]"
    >
      <div className="bg-[#b6ff9c] text-black min-h-screen items-center flex py-56">
        <span className="text-6xl md:text-9xl font-bold tracking-wide">
          Hello.
        </span>
      </div>
    </motion.div>
  );
};

export default PreLoader;

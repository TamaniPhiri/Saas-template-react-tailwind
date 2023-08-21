import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <motion.div
      initial={loaded ? {} : {clipPath: "circle(138.1% at 98% 3%)", x: 0 }}
      whileInView={loaded ? {clipPath: "circle(0% at 100% 0%)", x: "45%" } : {}}
      transition={{ delay: 1, duration: 4.5 }}
      className="absolute inset-0 z-[60] bg-[#b6ff9c]"
    >
      <div className=" text-black h-fit min-h-screen lineMask overflow-hidden items-center flex py-56">
        <div className="text-7xl md:text-9xl flex gap-1 md:gap-5 items-center overflow-hidden pl-5 m-0 font-bold tracking-wide">
          <motion.span
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            }}
          >
            Hello
          </motion.span>
          <motion.span
            initial={{ scale: 0}}
            whileInView={{ scale: 1}}
            transition={{
              delay: 1,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.3}
              stroke="currentColor"
              className="md:w-32 w-28 md:h-32 h-28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                className="path"
              />
            </svg>
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default PreLoader;

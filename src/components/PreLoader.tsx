import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const PreLoader = () => {
  const body = useRef(null);
  const IsInView = useInView(body, { once: true, margin: "-10%" });

  useEffect(() => {
    console.log(IsInView);
  }, [IsInView]);

  const animate = {
    initial: { y: "100%" },
    open: { y: "0%", x: 100, transition: { duration: 1 } },
  };
  return (
    <motion.div
      initial={{ x: 0 }}
      whileInView={{ x: "100%" }}
      transition={{ delay: 2, duration: 5 }}
      className="absolute inset-0 z-[60]"
    >
      <div
        ref={body}
        className="bg-[#b6ff9c] text-black h-fit min-h-screen lineMask overflow-hidden items-center flex py-56"
      >
        <motion.p
          variants={animate}
          initial="initial"
          animate={IsInView ? "open" : ""}
          className="text-6xl md:text-9xl flex gap-7 items-center overflow-hidden pl-5 m-0 font-bold tracking-wide"
        >
          <span>Hello.</span>
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 2 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </motion.span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PreLoader;

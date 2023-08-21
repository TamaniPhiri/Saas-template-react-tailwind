import { useState } from "react";
import Button from "./Global/Button";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {
    height: 0,
    clipPath: "circle(5.8% at 50% 0)",
    opacity: 0,
    transition: {
      type: "spring",
      delay: 0.5,
      stiffness: 300,
      damping: 140,
      duration:1
    },
  },
  show: {
    height: 280,
    clipPath: "circle(130% at 50% 0)",
    opacity: 1,
    transition: {
      type: "tween",
      stiffness: 80,
      duration:0.4,
      delay:0.1
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full z-50 flex relative items-center justify-center px-4 md:px-10">
      <nav className="flex overflow-hidden py-6 md:py-4 w-full justify-between items-center">
        <div>
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab43601a607bdb2b4764_logo.svg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-5">
          <Button content="Sign up" plain />
          <div className="lg:block hidden">
            <Button content="Purchase Template" secondary />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`flex relative lg:hidden gap-3 ${
              open ? "rotate-90" : "rotate-0"
            } flex-col transition-all duration-500 delay-200 items-center justify-center`}
          >
            <div
              className={`w-6 h-[2px] rounded-full ${
                open ? "-rotate-45 translate-y-[0.45rem]" : ""
              } transition-all transform duration-500 delay-300 bg-white`}
            ></div>
            <div
              className={`w-6 h-[2px] ${
                open
                  ? "translate-x-4 rotate-180 opacity-0"
                  : "translate-x-0 rotate-0 opacity-100"
              } rounded-full transition-all duration-500 delay-300 bg-white absolute`}
            ></div>
            <div
              className={`w-6 h-[2px] rounded-full ${
                open ? "rotate-45 -translate-y-[0.45rem]" : ""
              } transition-all transform duration-500 delay-300 bg-white`}
            ></div>
          </div>
        </div>
      </nav>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate={open ? "show" : ""}
        exit=""
        className="bg-black z-30 border-t border-zinc-700 py-6 absolute lg:hidden origin-top right-0 w-full top-[100%]"
      >
        <div className="w-full flex-col flex-1 h-full justify-between p-4 flex">
          <div className="flex flex-col gap-4 justify-start w-full">
            <a href="" className=" hover:text-[#b6ff9c] transition-all">
              Home
            </a>
            <a href="" className=" hover:text-[#b6ff9c] transition-all">
              Features
            </a>
            <a href="" className="pb-6 hover:text-[#b6ff9c] transition-all">
              Testimonials
            </a>
          </div>
          <Button content="Purchase template" secondary widthFull />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;

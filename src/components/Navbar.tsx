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
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    height: 280,
    clipPath: "circle(130% at 50% 0)",
    opacity: 1,
    transition: {
      type: "",
      stiffness: 80,
    },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex relative items-center justify-center px-4 md:px-10">
      <nav className="flex z-50 overflow-hidden py-6 md:py-4 w-full justify-between items-center">
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
            className="flex lg:hidden gap-3 flex-col items-center justify-center"
          >
            <div
              className={`w-8 h-1 rounded-full ${
                open ? "-rotate-45 translate-y-2" : ""
              } transition-all transform duration-500 bg-white`}
            ></div>
            <div
              className={`w-8 h-1 rounded-full ${
                open ? "rotate-45 -translate-y-2" : ""
              } transition-all transform duration-500 bg-white`}
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
            <a href="" className=" hover:text-[#b6ff9c] transition-all">Home</a>
            <a href="" className=" hover:text-[#b6ff9c] transition-all">Features</a>
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

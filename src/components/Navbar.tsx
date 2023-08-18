import { useState } from "react";
import Button from "./Global/Button";
import { motion } from "framer-motion";

const navVariants={
    hidden:{
        clipPath:'circle(5.8% at 50% 0)',
        height:0,
        opacity:0,
        transition:{
            type:'spring',
            delay:0.2,
            stiffness:300,
            damping:140
        }
    },
    show:{
        opacity:1,
        height:"100%",
        clipPath:'circle(130% at 50% 0)',
        transition:{
            type:'spring',
            stiffness:80,
        }
    }
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex relative items-center justify-center px-4 md:px-12 lg:px-20">
      <nav className="flex z-50 overflow-hidden py-4 w-full justify-between items-center">
        <div>
          <img
            src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab43601a607bdb2b4764_logo.svg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-5 lg:gap-3">
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
        <motion.div variants={navVariants} initial="hidden" animate={open?"show":""} exit="" className="bg-white z-30 absolute origin-top right-0 text-black w-full top-[100%]">
          hello
        </motion.div>
    </div>
  );
};

export default Navbar;

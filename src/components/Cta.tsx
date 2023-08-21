import Button from "./Global/Button";
import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Cta = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <motion.div
      initial={loaded ? {} : { opacity: 0, x: -50 }}
      whileInView={loaded ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2, duration: 1, type: "tween" }}
      className="flex flex-col w-full min-h-screen px-4 gap-3 md:px-12 items-center justify-center"
    >
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c31033212f613fae2e7092_Subheading%20line.svg"
        alt="GreenLine"
        loading="lazy"
      />
      <Header
        content="Launch your fastest static sites to date with Dalma template!"
        center
        minWidth
      />
      <Paragraph
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        center
        minWidth
      />
      <motion.div
        initial={loaded ? {} : { opacity: 0, y: -50 }}
        whileInView={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 1, type: "spring" }}
        className="flex gap-3 md:flex-row flex-col w-full md:justify-center items-center my-5"
      >
        <Button content="Get started" secondary widthFull={false} />
        <Button content="Other templates" primary widthFull={false} />
      </motion.div>
    </motion.div>
  );
};

export default Cta;

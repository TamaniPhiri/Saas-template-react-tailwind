import { comparisons } from "../constants/Comparisons";
import Header from "./Global/Header";
import Paragraph from "./Global/Paragraph";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Comparison = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="flex flex-col w-full py-24 lg:min-h-screen px-4 gap-3 md:px-12 items-center justify-center">
      <img
        src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62c31033212f613fae2e7092_Subheading%20line.svg"
        alt="GreenLine"
        loading="lazy"
      />
      <Header content="What sets us apart" center />
      <Paragraph
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        center
        minWidth
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-10 gap-10 md:gap-4 grid-cols-1 items-center justify-center w-full">
        {comparisons.map((item, index) => (
          <motion.div
            key={index}
            initial={loaded ? {} : { opacity: 0, scale: 0.8 }}
            whileInView={loaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2*index, duration: 1, type: "tween" }}
            className="flex flex-col items-center gap-3 justify-center w-full"
          >
            <div className="bg-[#b6ff9c] rounded-full p-3">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="object-cover object-center h-10"
              />
            </div>
            <h1 className="font-bold text-xl md:text-2xl">{item.title}</h1>
            <p className="w-full md:text-base text-sm text-center text-zinc-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;

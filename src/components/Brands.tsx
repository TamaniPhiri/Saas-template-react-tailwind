import { brands } from "../constants/Brand";
import ClientLogos from "./client-logos";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Brands = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="h-auto flex justify-center px-4 md:px-12 items-center w-full overflow-hidden flex-col relative">
      <h1 className="font-bold text-xl mb-6">Trusted by these brands:</h1>
      <div className="overflow-hidden bg-black mb-20">
        <div className="grid place-items-center w-full md:max-w-md lg:max-w-3xl">
          <ClientLogos images={brands} />
        </div>
      </div>
      <motion.div
        initial={loaded ? {} : { opacity: 0, scale: 0.7 }}
        whileInView={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 1, type: "tween" }}
        className="rounded-xl bg-black p-2"
      >
        <img
          src="https://assets.website-files.com/62bea764d94f5f7e03ba6535/62beab438f3058330f16ff1c_Main%20UI.png"
          alt="UI"
          loading="lazy"
          className="w-full h-full object-cover object-center rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default Brands;

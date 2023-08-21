import { motion, useInView } from "framer-motion";
import {useRef,useEffect} from 'react'

const PreLoader = () => {
    const body=useRef(null)
    const IsInView=useInView(body,{once:true, margin:"-10%"})

    useEffect(()=>{
        console.log(IsInView);
    },[IsInView])
  return (
    <motion.div
      initial={{ x: 0, scaleX: 1 }}
      whileInView={{ x: "100%", scaleX: 1 }}
      transition={{ delay: 1, duration: 2 }}
      className="absolute inset-0 z-[60]"
    >
      <div ref={body} className="bg-[#b6ff9c] text-black h-fit min-h-screen lineMask overflow-hidden items-center flex py-56">
        <motion.span initial={{translateY:50}} className="text-6xl md:text-9xl overflow-hidden -mt-4 pl-5 m-0 font-bold tracking-wide">
          Hello.
        </motion.span>
      </div>
    </motion.div>
  );
};

export default PreLoader;

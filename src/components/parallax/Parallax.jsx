import { useRef } from 'react'
import Spline from '@splinetool/react-spline';
import './parallax.scss'
import {motion, useScroll, useTransform} from "framer-motion"


const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress,[0,1], ["0%", "200%"])
    const yBg = useTransform(scrollYProgress,[0,1], ["0%", "100%"])

  return (
    <div className="parallax" 
         ref={ref}
         style={{background: type==="services" 
         ? "linear-gradient(180deg, #111132, #0c0c1d)" 
         : "linear-gradient(180deg, #111132, #505064)" 
         }}
         >
        <motion.h1 
          style={{y:yText}}
         >
            {type==='services' ? "what we do" : "what we did?"}
         </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div 
          variants={variants}
          initial="initial"
          whileInView="animate"
          className="planets"
           style={{y:yBg, backgroundImage: `url(${type==="services" ? "/planet1.png" : "/sun.png"})`}}
          // style={{y:yBg, backgroundImage: `url(${type==="services" ?     
          // <Spline scene="https://prod.spline.design/aZgcMPAq9EXKsM2b/scene.splinecode" />
          // : 
          // "/sun.png"})`
        }}
          >
        </motion.div>
        <motion.div className="stars"></motion.div>
    </div>
  )
}

export default Parallax

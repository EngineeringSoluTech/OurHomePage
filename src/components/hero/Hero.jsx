import { useEffect, useState } from 'react';
import {motion} from "framer-motion"
import "./hero.scss"

const textVariants={
    initial:{
        x:-500, opacity: 0,
    },
    animate: {
        x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerCildren: 0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
}

const imageVariants={
    initial:{
        x:-200, 
        y:-100,
        opacity: 0,
    },
    animate: {
        x: [null, 100, 0],
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerCildren: 0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
}

const slideVariants={
    initial:{
        x:0,
    },
    animate: {
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration:15,
        },
    },
}

function Hero() {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });
      const [cursorVariant, setCursorVariant] = useState("default");
    
    
      useEffect(() => {
        const mouseMove = e => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, []);

      const mouseVariants = {
        default: {
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        },
        text: {
          height: 110,
          width: 110,
          x: mousePosition.x - 75,
          y: mousePosition.y - 75,
          backgroundColor: "yellow",
          mixBlendMode: "difference"
        }
      }
    
      const textEnter = () => setCursorVariant("text");
      const textLeave = () => setCursorVariant("default");

  return (
    <div className='hero'>
     {/* <motion.div
        className='cursor'
        variants={mouseVariants}
        animate={cursorVariant}
      /> */}
     <div className="wrapper">
      <motion.div 
         className="textContainer" 
         variants={textVariants} 
         initial="initial" 
         animate="animate"
         >
        <motion.h2 
         variants={textVariants} 
         style={{cursor:"pointer"}}  
         whileHover={{ scale: 1.03 }}
         onHoverStart={e => {}}
         onHoverEnd={e => {}}
         whileTap={{ scale: 0.88 }}
        >
          EngineeringSoluTech
        </motion.h2>
        <motion.h1 
          variants={textVariants}          
          onMouseEnter={textEnter} 
          onMouseLeave={textLeave} 
          >
            WEB DEVELOPMENT and engineering SERVICES
        </motion.h1>
        <motion.div  variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the latest work</motion.button>
            <motion.button variants={textVariants}>Contact Us</motion.button>
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src='/scroll.png' alt=''/>
      </motion.div>
    </div>
    <motion.div className="slidingTextContainer" 
      variants={slideVariants} 
      initial="initial" 
      animate="animate"
      >
     Write Us for your services
    </motion.div>
    <motion.div className="imageContainer" 
         variants={imageVariants}          
         initial="initial" 
         animate="animate">
      <img src="/foto.png" alt=''/>
    </motion.div>
    </div>
  )
}

export default Hero


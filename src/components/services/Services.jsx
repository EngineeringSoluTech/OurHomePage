import './services.scss'
import {motion, useInView} from "framer-motion"
import { useRef } from 'react';

const variants ={
  initial:{
    x:-500,
    y:100,
    opacity:0,
  },
  animate: {
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
}

function Services() {

  const ref = useRef();

  const isInView = useInView(ref, {margin:"-100px"}); // va detectar cuando este en la vista

  return (
    <motion.div
       className='services' 
       variants={variants} 
       initial="initial" 
      //  animate="animate"
       //whileInView="animate"
       ref={ref}
       animate={isInView && "animate"}
       >
      <motion.div className="textContainer"  variants={variants}>
        <p> 
            EngineeringSoluTech Engineers
            <br/> and move forward
        </p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer"  variants={variants} >
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Unique Ideas</b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Bussines.
          </h1>
          <button>
            What We Do ?
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer"  variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took .
          </p>
          <button>
            Go
          </button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took .
          </p>
          <button>
            Go
          </button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took .
          </p>
          <button>
            Go
          </button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took .
          </p>
          <button>
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services

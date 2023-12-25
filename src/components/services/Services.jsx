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
            <br/> Offers solutions for you
        </p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer"  variants={variants} >
        <div className="title">
          <img src="/networkpeople.jpg" alt="" />
          <h1>
            <b>Unique Ideas</b>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b 
             whileHover={{
              color:"orange", 
              cursor:"move", 
              textShadow: '0 0 5px red, 0 0 10px red, 0 0 15px red',
              }}>For Your
            </motion.b> Bussines.
          </h1>
          <motion.button whileTap={{scale:0.95}} whileHover={{scale:1.05}}>
            What We Do ?
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer"  variants={variants}>
        <motion.div className="box" 
          whileHover={{background:"lightgray", color:"black"}}
          >
          <h2>Solutions</h2>
          <p>
           Ofrecemos soluciones prácticas para tu negocio, proporcionando interfaces de usuarios interactivas y muy eficientes.
          </p>
          <motion.button whileTap={{scale:0.8, borderRadius:"10px"}}>
            Go
          </motion.button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took .
          </p>
          <motion.button whileTap={{scale:0.8, borderRadius:"10px"}}>
            Go
          </motion.button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Innovation</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took .
          </p>
          <motion.button whileTap={{scale:0.8, borderRadius:"10px"}}>
            Go
          </motion.button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
          <h2>Branding</h2>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took .
          </p>
          <motion.button whileTap={{scale:0.8, borderRadius:"10px"}}>
            Go
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services

import React, { useState } from 'react'

import {motion} from "framer-motion"

const Test =() => {
  
  const [open, setOpen] = useState(false)

  const variants = {
    visible:{opacity:1,x:800 ,transition:{type:"spring", stiffness:100, damping:100}}, //stiffness da efecto rebote suave, y damping reduce velocidad al llegar
    hidden:{opacity:0}
  }

  const items = [
    "item1",
    "item2",
    "item3",
    "item4",
  ]

  return (
    <div className='course'>
      <motion.div 
        className="box" 
        initial={{opacity:0.5, scale:0.5}}
        //animate={{opacity:1, scale:1, x:200, y:200}} 
        // animate={{opacity:1, scale:1, x:200, y:200}} se desplaza 200 px a la derecha mientras se escala y aparece
        transition={{duration:1}} // can use delay:
        //whileHover={{opacity:1, scale:2}} // aplica el efecto cuando me paro sobre el componente
        whileInView={{opacity:1, scale:2}}  /// aplica el efecto cuando cambie de vista
        //drag   me permite mover el componente
        //animate={open? "visible":"hidden"}
        > 
      </motion.div>
      {/* <button onClick={()=>(prev=>!prev)}>Click</button> */}

      {/* PARA LISTA */}
      {/* transition en variants = {staggerChildred:0.2}  me listara uno en uno los items con efecto */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {
          items.map((item)=>(
            <motion.li variants={variants} key={item}>{item}</motion.li>
          ))
        }
      </motion.ul>
    </div>
  )
}

export default Test
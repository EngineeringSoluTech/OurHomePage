import React from 'react'

import {motion} from "framer-motion"

const Test =() => {
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
        > 

      </motion.div>
    </div>
  )
}

export default Test
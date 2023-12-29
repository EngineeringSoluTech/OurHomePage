import {motion} from "framer-motion"
import { isMobile, isTablet } from 'react-device-detect';

const ToggleButtons= ({setOpen})=> {
  return (
    <button onClick={()=>setOpen((prev)=>!prev)}>
      <svg 
         width={isMobile ? 18 : isTablet ? 18 : 23} 
         height={isMobile ? 15 : isTablet ? 18 : 23} 
         viewBox={isMobile ? "0 0 15 23" : isTablet ? "0 0 18 23" : "0 0 13 23"}
         >
        <motion.path 
           strokeWidth="3" 
           stroke={isMobile ? "gray" : isTablet ? "gray" : "black"} 
           strokeLinecap="round"
           variants={{
             closed: {d:"M 2 2.5 L 20 2.5"},
             open: {d: "M 3 16.5 L 17 2.5"},
            }}
           />
        <motion.path 
          strokeWidth="3" 
          stroke={isMobile ? "gray" : isTablet ? "gray" : "black"} 
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: {opacity: 1},
            open: {opacity:0}
          }}
          />
        <motion.path 
           strokeWidth="3" 
           stroke={isMobile ? "gray" : isTablet ? "gray" : "black"}
           strokeLinecap="round"

           variants={{
             closed: {d:"M 2 16.346 L 20 16.346"},
             open: {d: "M 3 2.5 L 17 16.346"},
            }}
           />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"/>
      </svg>
    </button>
  )
}

export default ToggleButtons

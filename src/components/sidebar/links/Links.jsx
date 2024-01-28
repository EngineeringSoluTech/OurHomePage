import {motion} from 'framer-motion'

import Sidebar from '../Sidebar'


const variants = {
  open:{
    transition:{
      staggerChildren: 0.1,
    },
  },
  closed:{
    staggerChildren: 0.05,
    staggerDirection: -1,
  }
}

const itemVariants = {
  open:{
    y:0,
    opacity:1
  },
  closed:{
    y:50,
    opacity:0
  }
}

const Links=({ setOpenLink })=> {

  const handleClickClose = () => {
    setOpenLink(false);
  };

  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "About",
    "Contact",
  ]

  return (
    <motion.div className='links' variants={variants}>
      {
        items.map(item => (
          <motion.a href={`#${item}`} key={item} 
             variants={itemVariants} 
             whileHover={{scale:1.1}} 
             whileTap={{scale:0.95}}
             onClick={handleClickClose}
             >
            {item}
          </motion.a>
        ))
      }
    </motion.div>
  )
}

export default Links

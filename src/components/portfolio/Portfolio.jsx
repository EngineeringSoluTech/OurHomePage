import React from 'react';
import {motion, useScroll,useSpring, useTransform} from 'framer-motion'
import "./portfolio.scss"
import { useRef } from 'react'

const items = [
    {
        id:1, 
        title:"React Commerce",
        img:"https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ."
    },
    {
        id:2,
        title:"Chat App",
        img:"https://media.istockphoto.com/id/1496991982/es/foto/hombre-de-negocios-sosteniendo-y-tocando-correos-electr%C3%B3nicos-flotantes-renderizado-3d.jpg?s=612x612&w=0&k=20&c=VcfgQqbyZziPeRRdYOU_fjne9YbsIq8wG0wNtU94qi4=",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ."
    },
    {
        id:3,
        title:"mercaolibre Commerce",
        img:"https://media.istockphoto.com/id/1198383207/es/foto/arreglo-manual-de-bloques-de-madera-apilamiento-con-el-icono-gr%C3%A1fico-y-s%C3%ADmbolo-del-carro-de-la.jpg?b=1&s=612x612&w=0&k=20&c=ipbuPwr5mjRUx2-m-C4uEX0bDoLByrebo4hujO74tko=",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ."
    },
    {
        id:4,
        title:"peluditostrendy Commerce APP",
        img:"/peluditostrendy.PNG",
        desc:"Tienda de mascota con carrito de compras y pasarela de pagos, permite visualizar varios modelos y agregar productos al carrito, permite interaccion por comentarios tipo red social.",
        url:"https://peluditostrendyambientepruebas.netlify.app/"
    }
]

const Single =({item}) => {
    const ref = useRef()

    const handleSeeDemoClick = (link) => {
      // window.location.href = link;
      window.open(link, '_blank'); // abre en una pestaña nueva
    };

    const {scrollYProgress} = useScroll({
        target:ref, 
       // offset:["end end", "end start"]
     });

     const y = useTransform(scrollYProgress, [0,1], [-400, 400])

    return(
        <section >
           <div className="container">
            <div className="wrapper">
             <div className="imageContainer" ref={ref}>
             {item.img.startsWith('http') ? (
              <img src={item.img} alt='' />
               ) : (
              <img src={item.img} alt='' />
               )}            
             </div>
             <motion.div className="textContainer" style={{y:y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <motion.button 
                  whileTap={{scale:0.8}} 
                  whileHover={{scale:1.1}}
                  onClick={()=>handleSeeDemoClick(item.url)}
                  >
                    See Demo
                </motion.button>
             </motion.div>
            </div>
           </div>
        </section>
    )
}

const Portfolio = () => {

 const ref = useRef()

 const {scrollYProgress} = useScroll({
    target:ref, 
    offset:["end end", "start start"]
 });

 const scaleX = useSpring (scrollYProgress,{
    stiffness: 100, 
    damping: 10,
 })  

  return (
    <div className='portfolio'  ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
          <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio

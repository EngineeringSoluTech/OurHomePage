import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButtons";
import { isMobile, isTablet } from 'react-device-detect';

import "./sidebar.scss";

function Sidebar(setOpenLink) {
  console.log("setopne:", setOpenLink.value);
  const [open, setOpen] = useState(false);
  const controls = useAnimation();
  const sidebarRef = useRef(null);

  const variants = {
    open: {
      clipPath: isMobile ? "circle(1200px at 50px 50px)" : "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
      },
    },
    closed: {
      clipPath: isMobile ? "circle(13px at 31px 41px)": "circle(25px at 53px 47px)" ,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    controls.start(open ? "open" : "closed");
  }, [open, controls]);

  return (
    <motion.div className="sidebar" animate={controls} ref={sidebarRef}>
      <motion.div className="bg" variants={variants}>
        <Links setOpenLink={setOpen}/>
      </motion.div>
      <ToggleButton setOpen={toggleSidebar} />
    </motion.div>
  );
}

export default Sidebar;

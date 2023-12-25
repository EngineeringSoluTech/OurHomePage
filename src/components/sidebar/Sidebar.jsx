import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButtons";
import "./sidebar.scss";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();
  const sidebarRef = useRef(null);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
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
        <Links />
      </motion.div>
      <ToggleButton setOpen={toggleSidebar} />
    </motion.div>
  );
}

export default Sidebar;

import React from "react";
import './navbar.css';
import { motion } from "framer-motion";
import Sidebar from "../sidebar/SidebarComponent";


function Navbar() {
    
    return (
        <div className="navbar">
            <Sidebar></Sidebar>
            <div className="title">
                <motion.span initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>RISTORANTE PEPPERONE</motion.span>
                <div className="icons">
                    <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-facebook fa-2x me-2"></i></motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-instagram fa-2x me-2"></i></motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-x-twitter fa-2x me-2"></i></motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-youtube fa-2x me-2"></i></motion.a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
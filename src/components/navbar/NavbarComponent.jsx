import React from "react";
import './navbar.css';
import { motion } from "framer-motion";
import Sidebar from "../sidebar/SidebarComponent";


function Navbar() {

    return (
        <div className="navbar">
            <Sidebar></Sidebar> 
            <div className="icons d-flex justify-content-around align-items-center">
                <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-facebook fa-2x me-2"></i></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-instagram fa-2x me-2"></i></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-x-twitter fa-2x me-2"></i></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-youtube fa-2x me-2"></i></motion.a>
            </div>
        </div>
    )
}

export default Navbar
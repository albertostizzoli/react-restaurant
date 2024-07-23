import React from "react";
import { motion } from "framer-motion";
import './menu.css';

function Menu() {

    const title = {
        initial: {
            opacity: 0,
            y: -100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    }
    return (
        <div className="menu">
            <motion.h2 initial="initial" whileInView={animate} variants={title}>IL NOSTRO MENU</motion.h2>
        </div>
    )
}

export default Menu
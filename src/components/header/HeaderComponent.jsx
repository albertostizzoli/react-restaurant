import React from "react";
import './header.css';
import { motion } from "framer-motion";

function Header() {

    const text = {
        initial: {
            x: -500,
            opacity: 0
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }

        }
    }

    return (
        <div className="header">
            <div className="wrapper">
                <motion.div className="text" variants={text} initial="initial" animate="animate">
                    <motion.h1 variants={text}>PEPPERONE</motion.h1>
                    <motion.h2 variants={text}>Ristorante & Pizzeria & Cafè</motion.h2>
                    <motion.div className="buttons" variants={text}>
                        <motion.button variants={text}>Prenota un tavolo</motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <div className="image">
                <img className="hamburger" src="../../src/assets/img/hamburger.png" alt="Hamburger" />
            </div>
        </div>
    )
}

export default Header
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
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-left">
                        <motion.div className="text" variants={text} initial="initial" animate="animate">
                            <motion.h1 variants={text}>PEPPERONE</motion.h1>
                            <motion.h2 variants={text}>Ristorante & Pizzeria & Cafè</motion.h2>
                            <motion.div className="buttons pt-2" variants={text}>
                                <motion.button variants={text}>Prenota un tavolo</motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="col-md-6">
                        <img className="hamburger img-fluid" src="../../src/assets/img/hamburger.png" alt="Hamburger" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
import React from "react";
import './header.css';
import { motion } from "framer-motion";
import Hamburger from '../../assets/img/hamburger.png';

function Header() {

    const text = {
        initial: {
            x: -100,
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

    const image = {
        initial: {
            x: 100,
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
                        <motion.div className="text d-flex flex-column justify-content-center" variants={text} initial="initial" whileInView="animate">
                            <h1>PEPPERONE</h1>
                            <h2>Ristorante & Pizzeria & Cafè</h2>
                            <motion.div className="buttons pt-2" variants={text}>
                                <motion.button variants={text} whileHover={{ scale: 1.2 }}>Prenota un tavolo</motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div variants={image} initial="initial" whileInView="animate" className="col-md-6">
                        <img className="hamburger img-fluid" src={Hamburger} alt="Hamburger" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Header
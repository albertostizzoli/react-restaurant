import React from "react";
import { motion } from "framer-motion";

function Links() {

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.01,
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1
        },
        closed: {
            y: 50,
            opacity: 0
        }
    }

    const items = ['Home', 'Chi Siamo', 'Menu', 'Contatti']

    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
                <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>{item}</motion.a>
            ))}
            <motion.div className="social" variants={itemVariants}>
                <motion.a href="#" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}><i className="fa-brands fa-facebook"></i></motion.a>
                <motion.a href="#" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}><i className="fa-brands fa-instagram"></i></motion.a>
                <motion.a href="#" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}><i className="fa-brands fa-x-twitter"></i></motion.a>
                <motion.a href="#" whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}><i className="fa-brands fa-youtube"></i></motion.a>
            </motion.div>
        </motion.div>
    )
}

export default Links
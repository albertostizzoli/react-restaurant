import React from "react";
import { motion } from "framer-motion";

function Links() {

    const links = {
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

    const itemLinks = {
        open: {
            y: 0,
            opacity: 1
        },
        closed: {
            y: 50,
            opacity: 0
        }
    }

    const items = ['Home', 'Noi', 'Menu', 'Contatti']

    return (
        <motion.div className="links d-flex flex-column justify-content-center align-items-center gap-3" links={links}>
            {items.map((item) => (
                <motion.a href={`#${item}`} key={item} links={itemLinks} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>{item}</motion.a>
            ))}
            <motion.div className="icons" links={itemLinks}>
                <motion.a href="#" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}}><i className="fa-brands fa-facebook"></i></motion.a>
                <motion.a href="#" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}}><i className="fa-brands fa-instagram"></i></motion.a>
                <motion.a href="#" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}}><i className="fa-brands fa-x-twitter"></i></motion.a>
                <motion.a href="#" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}}><i className="fa-brands fa-youtube"></i></motion.a>
            </motion.div>
        </motion.div>
    )
}

export default Links
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import './sidebar.css';
import Button from "./button/ButtonComponent";
import Links from "./links/LinksComponent";


function Sidebar() {

    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: 'circle(1200px at 50px 50px)',
            transition: {
                type: 'spring',
                stiffness: 20,
            }
        },
        closed: {
            clipPath: 'circle(30px at 50px 50px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    }

    return (
        <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
            <motion.div className="bg" variants={variants}>
                <Links></Links>
            </motion.div>
            <Button setOpen={setOpen}></Button>
        </motion.div>

    )
}

export default Sidebar
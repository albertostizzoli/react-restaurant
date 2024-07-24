import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Switch, Case, Default } from "react-if";
import './card.css';

function Card() {

    const [selected, setSelected] = useState(1)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('src/menu.json').then(response => response.json()).then(data => { setData(data) })
    }, [])

    const firstButton = {
        selected: {
            backgroundColor: "var(--orange)",
            color: "white"
        },
        unselected: {
            backgroundColor: "var(--yellow)",
            color: "var(--dark-red)",
        },
        transition: {
            duration: 0.5
        }
    }

    const secondButton = {
        initial: {
            opacity: 0,
            y: -100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    const card = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }
    return (
        <>
            <motion.div variants={secondButton} initial="initial" whileInView="animate" className="box">
                <motion.button variants={firstButton} animate={selected == 1 ? "selected" : "unselected"} onClick={() => setSelected(1)} type='button' className="button-menu">Primi</motion.button>
                <motion.button variants={firstButton} animate={selected == 2 ? "selected" : "unselected"} onClick={() => setSelected(2)} type='button' className="button-menu">Secondi</motion.button>
                <motion.button variants={firstButton} animate={selected == 3 ? "selected" : "unselected"} onClick={() => setSelected(3)} type='button' className="button-menu">Hamburger</motion.button>
                <motion.button variants={firstButton} animate={selected == 4 ? "selected" : "unselected"} onClick={() => setSelected(4)} type='button' className="button-menu">Pizze</motion.button>
                <motion.button variants={firstButton} animate={selected == 5 ? "selected" : "unselected"} onClick={() => setSelected(5)} type='button' className="button-menu">Desserts</motion.button>
                <motion.button variants={firstButton} animate={selected == 6 ? "selected" : "unselected"} onClick={() => setSelected(6)} type='button' className="button-menu">Bevande</motion.button>
            </motion.div>
        </>
    )

}

export default Card
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

    const buttonsVariants = {
        selected: {
            backgroundColor: "var(--orange)",
            color: "white"
        },
        unselected: {
            backgroundColor: "var(--main)",
            color: "var(--white)",
        },
        transition: {
            duration: 0.5
        }
    }

    const buttonsVariants2 = {

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

    const cardVariants = {

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
        <div>
            <h3 className="text-center">CARD</h3>
        </div>
    )

}

export default Card
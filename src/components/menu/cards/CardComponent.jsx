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

            <div className="container">
                <div className="row">
                    <Switch>
                        <Case condition={selected == 1}>
                            {data.filter(data => data.category == "Primi").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food d-flex align-items-start">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 2}>
                            {data.filter(data => data.category == "Secondi").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food d-flex align-items-start">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 3}>
                            {data.filter(data => data.category == "Hamburger").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food d-flex align-items-start">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 4}>
                            {data.filter(data => data.category == "Pizze").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food d-flex align-items-start">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 5}>
                            {data.filter(data => data.category == "Desserts").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food d-flex align-items-start">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 6}>
                            {data.filter(data => data.category == "Bevande").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food d-flex align-items-start">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5>{data.name}</h5>
                                                    <p>{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default Card
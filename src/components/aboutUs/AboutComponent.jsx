import React from "react";
import './about.css';
import { motion } from "framer-motion";
import Restaurant from '../../assets/img/restaurant.jpg';
import Meat from '../../assets/img/meat.jpg';
import Pizza from '../../assets/img/pizza.jpg';
import Cake from '../../assets/img/cake.jpg';

function About() {

    const firstBlock = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            }
        }
    }

    const secondBlock = {
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

    const paragraph = {
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
        <div className="about d-flex flex-column align-items-center">
            <motion.h1 className="text-center" variants={firstBlock} initial="initial" whileInView="animate">CHI SIAMO</motion.h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <motion.div className="d-flex flex-wrap align-items-baseline justify-content-center gap-2" variants={firstBlock} initial="initial" whileInView="animate">
                            <img className="img-block" src={Restaurant} alt="Ristorante" />
                            <img className="image" src={Meat} alt="Ristorante" />
                        </motion.div>
                        <motion.div className="d-flex flex-wrap align-items-baseline justify-content-center gap-2" variants={secondBlock} initial="initial" whileInView="animate">
                            <img className="image" src={Pizza} alt="Pizza" />
                            <img className="img-block" src={Cake} alt="Torta" />
                        </motion.div>
                    </div>
                    <div className="col-12 col-md-6 about-text d-flex flex-column justify-content-center gap-2">
                        <motion.p variants={paragraph} initial="initial" whileInView="animate">
                            Benvenuti al Pepperone, un luogo dove tradizione e gusto si incontrano. 
                            Offriamo una vasta selezione di pizze cotte nel forno a legna, utilizzando solo ingredienti freschi e di alta qualità. Il nostro menù comprende anche piatti unici di Hamburger, preparati con cura e passione. L'ambiente accogliente e spazioso è perfetto per cene in famiglia, incontri tra amici e occasioni speciali. Venite a trovarci per vivere un'esperienza culinaria indimenticabile, all'insegna del buon cibo e della convivialità.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

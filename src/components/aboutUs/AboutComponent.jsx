import React from "react";
import './about.css';
import { motion } from "framer-motion";

function About() {

    const firstBlock = {
        initial: {
            x: -500,
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
            x: 500,
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
        <div className="about d-flex flex-column align-items-center">
            <motion.h1 className="text-center" variants={firstBlock} initial="initial" animate="animate">CHI SIAMO</motion.h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <motion.div className="d-flex flex-wrap align-items-baseline justify-content-center gap-2" variants={firstBlock} initial="initial" animate="animate">
                            <img className="img-block" src="../../src/assets/img/restaurant1.jpg" alt="Ristorante" />
                            <img className="image" src="../../src/assets/img/restaurant2.jpg" alt="Ristorante" />
                        </motion.div>
                        <motion.div className="d-flex flex-wrap align-items-baseline justify-content-center gap-2" variants={firstBlock} initial="initial" animate="animate">
                            <img className="image" src="../../src/assets/img/pizza.jpg" alt="Pizza" />
                            <img className="img-block" src="../../src/assets/img/cake.jpg" alt="Torta" />
                        </motion.div>
                    </div>
                    <div className="col-12 col-md-6 about-text d-flex flex-column justify-content-center gap-2">
                        <motion.p variants={secondBlock} initial="initial" animate="animate">
                            Benvenuti al nostro ristorante e pizzeria, un luogo dove tradizione e gusto si incontrano. 
                            Offriamo una vasta selezione di pizze cotte nel forno a legna, utilizzando solo ingredienti freschi e di alta qualità. Il nostro menù comprende anche piatti unici a base di carne e pesce, preparati con cura e passione. L'ambiente accogliente e spazioso è perfetto per cene in famiglia, incontri tra amici e occasioni speciali. Venite a trovarci per vivere un'esperienza culinaria indimenticabile, all'insegna del buon cibo e della convivialità.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

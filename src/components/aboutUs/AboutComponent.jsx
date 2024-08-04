// Importo la libreria React
import React from "react";
// Importo lo stile CSS per questo componente
import './about.css';
// Importo il modulo motion da framer-motion per le animazioni
import { motion } from "framer-motion";
// Importo le immagini per il componente
import Restaurant from '../../assets/img/restaurant.jpg';
import Meat from '../../assets/img/meat.jpg';
import Pizza from '../../assets/img/pizza.jpg';
import Cake from '../../assets/img/cake.jpg';

function About() {
    // Definisco le animazioni per il primo blocco delle immagini
    const firstBlock = {
        initial: {
            x: -100, // Le immagini partono da 100px a sinistra
            opacity: 0 // Le immagini partono con opacità 0 (invisibili)
        },
        animate: {
            x: 0, // Le immagini si spostano nella posizione originale
            opacity: 1, // Le immagini diventano completamente visibili
            transition: {
                duration: 1, // Durata dell'animazione in secondi
                staggerChildren: 0.1, // Ritardo di 0.1 secondi tra l'animazione di ciascun figlio
            }
        }
    };

    // Definisco le animazioni per il secondo blocco delle immagini
    const secondBlock = {
        initial: {
            x: 100, // Le immagini partono da 100px a destra
            opacity: 0 // Le immagini partono con opacità 0 (invisibili)
        },
        animate: {
            x: 0, // Le immagini si spostano nella posizione originale
            opacity: 1, // Le immagini diventano completamente visibili
            transition: {
                duration: 1, // Durata dell'animazione in secondi
                staggerChildren: 0.1 // Ritardo di 0.1 secondi tra l'animazione di ciascun figlio
            }
        }
    };

    // Definisco le animazioni per il paragrafo
    const paragraph = {
        initial: {
            opacity: 0, // Il paragrafo parte con opacità 0 (invisibile)
            y: -100 // Il paragrafo parte 100px sopra
        },
        animate: {
            opacity: 1, // Il paragrafo diventa completamente visibile
            y: 0, // Il paragrafo si sposta nella posizione originale
            transition: {
                duration: 1 // Durata dell'animazione in secondi
            }
        }
    };

    return (
        <div className="about d-flex flex-column align-items-center">
            {/* Titolo */}
            <motion.h1 className="text-center" variants={firstBlock} initial="initial" whileInView="animate">CHI SIAMO</motion.h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {/* Primo blocco delle immagini */}
                        <motion.div className="d-flex flex-wrap align-items-baseline justify-content-center gap-2" variants={firstBlock} initial="initial" whileInView="animate">
                            <img className="img-block" src={Restaurant} alt="Ristorante" />
                            <img className="image" src={Meat} alt="Carne" />
                        </motion.div>
                        {/* Secondo blocco delle immagini */}
                        <motion.div className="d-flex flex-wrap align-items-baseline justify-content-center gap-2" variants={secondBlock} initial="initial" whileInView="animate">
                            <img className="image" src={Pizza} alt="Pizza" />
                            <img className="img-block" src={Cake} alt="Torta" />
                        </motion.div>
                    </div>
                    <div className="col-12 col-md-6 about-text d-flex flex-column justify-content-center gap-2">
                        {/* Paragrafo */}
                        <motion.p variants={paragraph} initial="initial" whileInView="animate">
                            Benvenuti a La Dolce Vita, un luogo dove tradizione e gusto si incontrano. 
                            Offriamo una vasta selezione di pizze cotte nel forno a legna, utilizzando solo ingredienti freschi e di alta qualità. Il nostro menù comprende anche piatti unici di Hamburger, preparati con cura e passione. L'ambiente accogliente e spazioso è perfetto per cene in famiglia, incontri tra amici e occasioni speciali. Venite a trovarci per vivere un'esperienza culinaria indimenticabile, all'insegna del buon cibo e della convivialità.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Esporto la funzione About da poter usare nel componente App
export default About;


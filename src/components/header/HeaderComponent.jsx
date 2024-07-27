// Importo la libreria React
import React from "react";
// Importo lo stile CSS per il componente
import './header.css';
// Importo il modulo motion da framer-motion per le animazioni
import { motion } from "framer-motion";
// Importo l'immagine del componente
import Hamburger from '../../assets/img/hamburger.png';

function Header() {
    // Definisco le animazioni per il testo
    const text = {
        initial: {
            x: -100, // Il testo parte da 100px a sinistra
            opacity: 0 // Il testo parte con opacità 0 (invisibile)
        },
        animate: {
            x: 0, // Il testo si sposta nella posizione originale
            opacity: 1, // Il testo diventa completamente visibile
            transition: {
                duration: 1, // Durata dell'animazione in secondi
                staggerChildren: 0.1 // Ritardo di 0.1 secondi tra l'animazione di ciascun figlio
            }
        }
    };

    // Definisco le animazioni per l'immagine
    const image = {
        initial: {
            x: 100, // L'immagine parte da 100px a destra
            opacity: 0 // L'immagine parte con opacità 0 (invisibile)
        },
        animate: {
            x: 0, // L'immagine si sposta nella posizione originale
            opacity: 1, // L'immagine diventa completamente visibile
            transition: {
                duration: 1, // Durata dell'animazione in secondi
                staggerChildren: 0.1 // Ritardo di 0.1 secondi tra l'animazione di ciascun figlio
            }
        }
    };

    return (
        <div className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 text-left">
                        {/* Contenitore del testo animato */}
                        <motion.div className="text d-flex flex-column justify-content-center" variants={text} initial="initial" whileInView="animate">
                            <h1>PEPPERONE</h1>
                            <h2>Ristorante & Pizzeria & Cafè</h2>
                            {/* Bottone animato */}
                            <motion.div className="buttons pt-2" variants={text}>
                                <motion.button variants={text} whileHover={{ scale: 1.2 }}>Prenota un tavolo</motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                    {/* Contenitore dell'immagine animata */}
                    <motion.div variants={image} initial="initial" whileInView="animate" className="col-md-6">
                        <img className="hamburger img-fluid" src={Hamburger} alt="Hamburger" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// Esporto la funzione Header da poter usare nel componente App
export default Header;

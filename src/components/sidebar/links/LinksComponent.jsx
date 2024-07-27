import React from "react"; // Importo la libreria React
import { motion } from "framer-motion"; // Importo il modulo motion da framer-motion per le animazioni

function Links() {
    // Definisco le varianti per l'animazione dei collegamenti (links)
    const links = {
        open: {
            transition: {
                staggerChildren: 0.01, // Ritardo di 0.01 secondi tra l'animazione di ciascun figlio quando la sidebar è aperta
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05, // Ritardo di 0.05 secondi tra l'animazione di ciascun figlio quando la sidebar è chiusa
                staggerDirection: -1 // Inverte la direzione della transizione
            }
        }
    };

    // Definisco le varianti per l'animazione dei singoli elementi dei collegamenti
    const itemLinks = {
        open: {
            y: 0, // Sposto l'elemento nella sua posizione originale sull'asse y
            opacity: 1 // Rende l'elemento completamente visibile
        },
        closed: {
            y: 50, // Sposto l'elemento 50px verso il basso sull'asse y
            opacity: 0 // Rende l'elemento trasparente
        }
    };

    // Definisco un array di elementi di navigazione
    const items = ['Home', 'Noi', 'Menu', 'Contatti'];

    return (
        // Contenitore principale dei collegamenti con animazione condizionale basata sullo stato 'open' della sidebar
        <motion.div className="links d-flex flex-column justify-content-center align-items-center gap-3" variants={links}>
            {items.map((item) => (
                // Crea un collegamento per ogni elemento nell'array 'items' con varianti di animazione e effetti hover/tap
                <motion.a href={`#${item}`} key={item} variants={itemLinks} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                    {item}
                </motion.a>
            ))}
            <motion.div className="icons" variants={itemLinks}>
                <motion.a href="#" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}}><i className="fa-brands fa-facebook"></i></motion.a>
                <motion.a href="#" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}}><i className="fa-brands fa-instagram"></i></motion.a>
                <motion.a href="#" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}}><i className="fa-brands fa-x-twitter"></i></motion.a>
                <motion.a href="#" whileHover={{scale: 1.4}} whileTap={{scale: 0.9}}><i className="fa-brands fa-youtube"></i></motion.a>
            </motion.div>
        </motion.div>
    );
}

export default Links; // Esporto il componente Links da poter usare nel componente Sidebar

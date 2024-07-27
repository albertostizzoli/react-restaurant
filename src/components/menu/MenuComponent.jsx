// Importo la libreria React
import React from "react";
// Importo il modulo motion da framer-motion per le animazioni
import { motion } from "framer-motion";
// Importo lo stile CSS per questo componente
import './menu.css';
// Importo il componente Card
import Card from "./cards/CardComponent";

function Menu() {
    // Definisco le animazioni per il titolo
    const title = {
        initial: {
            opacity: 0, // Il titolo parte con opacità 0 (invisibile)
            y: -100 // Il titolo parte 100px sopra
        },
        animate: {
            opacity: 1, // Il titolo diventa completamente visibile
            y: 0, // Il titolo si sposta nella posizione originale
            transition: {
                duration: 1 // Durata dell'animazione in secondi
            }
        }
    };

    return (
        <div className="menu">
            {/* Titolo animato */}
            <motion.h2 initial="initial" whileInView="animate" variants={title}>IL NOSTRO MENU</motion.h2>
            {/* Componente Card che mostrerà le voci del menu */}
            <Card></Card>
        </div>
    );
}

// Esporto la funzione Menu da poter usare nel componente App
export default Menu;

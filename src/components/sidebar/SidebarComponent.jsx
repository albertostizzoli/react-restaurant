import React from "react"; // Importo la libreria React
import { useState } from "react"; // Importo il modulo useState da React per gestire lo stato
import { motion } from "framer-motion"; // Importo il modulo motion da framer-motion per animazioni
import './sidebar.css'; // Importo il file CSS per gli stili del componente Sidebar
import Button from "./button/ButtonComponent"; // Importo il componente Button
import Links from "./links/LinksComponent"; // Importo il componente Links

function Sidebar() {
    // Definisco una variabile di stato 'open' con il suo setter 'setOpen', inizialmente impostata su false
    const [open, setOpen] = useState(false);

    // Definisco le varianti per l'animazione della sidebar
    const variants = {
        open: {
            // Quando 'open' è true, la clipPath si espande per mostrare la sidebar
            clipPath: 'circle(1200px at 50px 50px)',
            transition: {
                type: 'spring', // Tipo di transizione
                stiffness: 20, // Rigidità della molla
            }
        },
        closed: {
            // Quando 'open' è false, la clipPath si riduce per nascondere la sidebar
            clipPath: 'circle(30px at 50px 50px)',
            transition: {
                delay: 0.5, // Ritardo prima della transizione
                type: 'spring', // Tipo di transizione
                stiffness: 400, // Rigidità della molla
                damping: 40 // Ammortizzazione della molla
            }
        }
    };

    return (
        // Componente principale della sidebar con animazione condizionale basata sullo stato 'open'
        <motion.div className="side-bar d-flex flex-column justify-content-center align-items-center" animate={open ? 'open' : 'closed'}>
            <motion.div className="back" variants={variants}>
                {/* Componente Links, checontiene i link della sidebar */}
                <Links></Links>
            </motion.div>
            {/* Componente Button, che  cambia lo stato 'open' quando viene cliccato */}
            <Button setOpen={setOpen}></Button>
        </motion.div>
    );
}

export default Sidebar; // Esporto il componente Sidebar da poter usare nel componente Navbar

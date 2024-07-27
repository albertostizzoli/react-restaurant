import React from "react"; // Importo la libreria React
import { motion } from "framer-motion"; // Importo il modulo motion da framer-motion per le animazioni

function Button({ setOpen }) {
    return (
        // Bottone che cambia lo stato 'open' al click
        <button onClick={() => setOpen((prev) => !prev)} className="toggle-button">
            {/* Icona del menu, visibile quando lo stato è 'closed' */}
            <motion.i 
                className="fa-solid fa-bars" 
                variants={{
                    open: { display: "none", scale: 0 }, // Nasconde l'icona quando lo stato è 'open'
                    closed: { display: "block" } // Mostra l'icona quando lo stato è 'closed'
                }} 
                transition={{ duration: 0.5 }} // Durata della transizione per la scala
            ></motion.i>
            {/* Icona della 'X', visibile quando lo stato è 'open' */}
            <motion.i 
                className="fa-solid fa-x" 
                variants={{
                    closed: { display: "none", scale: 0 }, // Nasconde l'icona quando lo stato è 'closed'
                    open: { display: "block" } // Mostra l'icona quando lo stato è 'open'
                }}
            ></motion.i>
        </button>
    );
}

export default Button; // Esporto il componente Button da poter usare nel componente Sidebar

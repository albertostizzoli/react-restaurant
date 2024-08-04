// Importo la libreria React
import React from 'react';
// Importo lo stile CSS per il componente
import './footer.css';
// Importo il modulo motion da framer-motion per le animazioni
import { motion } from "framer-motion";

function Footer() {
    // Definisco le animazioni per tutto il componente Footer
    const title = {
        initial: {
            opacity: 0, // Inizialmente il titolo è trasparente
            y: -100 // Inizialmente il titolo è posizionato 100px sopra
        },
        animate: {
            opacity: 1, // Il titolo diventa visibile
            y: 0, // Il titolo si sposta nella sua posizione originale
            transition: {
                duration: 1 // Durata dell'animazione in secondi
            }
        }
    }

    return (
        // Contenitore principale del footer con animazione condizionale basata sulla visibilità
        <motion.div initial="initial" whileInView="animate" variants={title} className="footer container">
            <h2>CONTATTI</h2>
            <div className="row text-start">
                <div className="col-12 col-md-4 mt-5">
                    <ul>
                        <li><h6>CONTATTACI</h6></li>
                        <li>INDIRIZZO: Via Garofoli 13</li>
                        <li>MAIL: dolcevita@example.com</li>
                        <li>TELEFONO: 555-123456</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 mt-5">
                    <ul>
                        <li><h6>LINKS</h6></li>
                        <li>Home</li>
                        <li>Noi</li>
                        <li>Menu</li>
                        <li>Contatti</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 mt-5">
                    <h6 className="ms-4">SEGUICI SU</h6>
                    <ul className="d-flex">
                        {/* Icone con l'effetto whileHover e whileTap da framer-motion */}
                        <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-facebook fa-2x me-3"></i></motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-instagram fa-2x me-3"></i></motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-x-twitter fa-2x me-3"></i></motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-youtube fa-2x me-3"></i></motion.a>
                    </ul>
                </div>
                <div className="row text-center pt-5">
                    <h6>Copyright © 2024. Tutti i diritti riservati</h6>
                </div>
            </div>
        </motion.div>
    )
}

// Esporto la funzione Footer da poter usare nel componente App
export default Footer;

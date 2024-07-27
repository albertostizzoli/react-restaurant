// Importo la libreria React
import React from "react";
// Importo lo stile CSS per il componente
import './navbar.css';
// Importo il modulo motion da framer-motion per le animazioni
import { motion } from "framer-motion";
// Importo il componente Sidebar
import Sidebar from "../sidebar/SidebarComponent";


function Navbar() {

    return (
        <div className="navbar">
            {/* Dichiaro il componente Sidebar */}
            <Sidebar></Sidebar> 
            <div className="icons d-flex justify-content-around align-items-center">
                <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-facebook fa-2x me-2"></i></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-instagram fa-2x me-2"></i></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-x-twitter fa-2x me-2"></i></motion.a>
                <motion.a href="#" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}><i className="fa-brands fa-youtube fa-2x me-2"></i></motion.a>
            </div>
        </div>
    )
}

// Esporto la funzione Navbar da poter usare nel componente App
export default Navbar
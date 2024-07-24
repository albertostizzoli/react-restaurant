import React from 'react';
import './footer.css';
import { motion } from "framer-motion";


function Footer() {
    return (
        <div className="footer container-fluid">
            <div className="row text-start">
                <div className="col-12 col-md-4">
                    <ul>
                        <li><h6>CONTATTACI</h6></li>
                        <li>INDIRIZZO: Via Giulio Cesare 12</li>
                        <li>MAIL: pepperone@example.com</li>
                        <li>TELEFONO: 555-123456</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <ul>
                        <li><h6>LINKS</h6></li>
                        <li>Home</li>
                        <li>Chi Siamo</li>
                        <li>Menu</li>
                        <li>Contatti</li>
                    </ul>
                </div>
                <div className="col-12 col-md-4">
                    <h6 className="ms-4">SEGUICI SU</h6>
                    <ul className="d-flex">
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
        </div>
    )
}

export default Footer
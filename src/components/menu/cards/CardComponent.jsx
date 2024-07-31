// Importo la libreria React
import React from "react";
// Importo il modulo motion da framer-motion per le animazioni
import { motion } from "framer-motion";
// Importo i hook useState e useEffect da React per la gestione dello stato e degli effetti
import { useState, useEffect } from "react";
// Importo i componenti Switch e Case da react-if per la logica condizionale
import { Switch, Case } from "react-if";
// Importo lo stile CSS per questo componente
import './card.css';

function Card() {
    // Stato per tenere traccia della categoria selezionata (default: 1 per 'Primi')
    const [selected, setSelected] = useState(1);
    // Stato per memorizzare i dati del menu
    const [data, setData] = useState([]);

    // Hook useEffect per caricare i dati del menu una volta che il componente è montato
    useEffect(() => {
        // Fetch dei dati dal file JSON
        fetch('/data/menu.json')
            .then(response => response.json()) // Converte la risposta in JSON
            .then(data => { setData(data) }); // Imposta i dati nel state
    }, []); // Dipendenza vuota per eseguire l'effetto solo una volta al montaggio

    // Definisco le animazioni per i bottoni del menu
    const firstButton = {
        selected: {
            backgroundColor: "var(--orange)", // Colore di sfondo quando il bottone è selezionato
            color: "var(--yellow)" // Colore del testo quando il bottone è selezionato
        },
        unselected: {
            backgroundColor: "var(--yellow)", // Colore di sfondo quando il bottone non è selezionato
            color: "var(--dark-red)" // Colore del testo quando il bottone non è selezionato
        },
        transition: {
            duration: 0.5 // Durata dell'animazione in secondi
        }
    };

    // Definisco le animazioni per i bottoni della sezione
    const secondButton = {
        initial: {
            opacity: 0, // Opacità iniziale
            y: -100 // Posizione iniziale sopra il punto di origine
        },
        animate: {
            opacity: 1, // Opacità finale
            y: 0, // Posizione finale al punto di origine
            transition: {
                duration: 0.5 // Durata dell'animazione in secondi
            }
        }
    };

    // Definisco le animazioni per le carte del menu
    const card = {
        initial: {
            x: -100, // Posizione iniziale a sinistra
            opacity: 0 // Opacità iniziale
        },
        animate: {
            x: 0, // Posizione finale
            opacity: 1, // Opacità finale
            transition: {
                duration: 0.5, // Durata dell'animazione in secondi
                staggerChildren: 0.1 // Tempo di ritardo tra l'animazione dei figli
            }
        }
    }
    return (
        <>
            <motion.div variants={secondButton} initial="initial" whileInView="animate" className="box">
                <motion.button variants={firstButton} animate={selected == 1 ? "selected" : "unselected"} onClick={() => setSelected(1)} type='button' className="button-menu">Primi</motion.button>
                <motion.button variants={firstButton} animate={selected == 2 ? "selected" : "unselected"} onClick={() => setSelected(2)} type='button' className="button-menu">Secondi</motion.button>
                <motion.button variants={firstButton} animate={selected == 3 ? "selected" : "unselected"} onClick={() => setSelected(3)} type='button' className="button-menu">Hamburger</motion.button>
                <motion.button variants={firstButton} animate={selected == 4 ? "selected" : "unselected"} onClick={() => setSelected(4)} type='button' className="button-menu">Pizze</motion.button>
                <motion.button variants={firstButton} animate={selected == 5 ? "selected" : "unselected"} onClick={() => setSelected(5)} type='button' className="button-menu">Desserts</motion.button>
                <motion.button variants={firstButton} animate={selected == 6 ? "selected" : "unselected"} onClick={() => setSelected(6)} type='button' className="button-menu">Bevande</motion.button>
            </motion.div>

            <div className="container">
                <div className="row">
                    <Switch>
                        <Case condition={selected == 1}>
                            {data.filter(data => data.category == "Primi").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2 pt-3" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5 className="text-center">{data.name}</h5>
                                                    <p className="text-center">{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 2}>
                            {data.filter(data => data.category == "Secondi").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2 pt-3" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5 className="text-center">{data.name}</h5>
                                                    <p className="text-center">{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 3}>
                            {data.filter(data => data.category == "Hamburger").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2 pt-3" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5 className="text-center">{data.name}</h5>
                                                    <p className="text-center">{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 4}>
                            {data.filter(data => data.category == "Pizze").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2 pt-3" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5 className="text-center">{data.name}</h5>
                                                    <p className="text-center">{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 5}>
                            {data.filter(data => data.category == "Desserts").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2 pt-3" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5 className="text-center">{data.name}</h5>
                                                    <p className="text-center">{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                        <Case condition={selected == 6}>
                            {data.filter(data => data.category == "Bevande").map((data) => {
                                return (
                                    <div className="col-12 col-md-3 my-2 pt-3" key={data.id}>
                                        <motion.div variants={card} initial="initial" whileInView="animate" className="food">
                                            <div className="pic">
                                                <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className="food-info">
                                                <div className="food-inf">
                                                    <h5 className="text-center">{data.name}</h5>
                                                    <p className="text-center">{data.price} &euro;</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </Case>
                    </Switch>
                </div>
            </div>
        </>
    )
}

// Esporto la funzione Card da poterla usare nel componente Menu
export default Card

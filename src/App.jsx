// Importo la libreria React
import React from "react";
// Importo il file CSS Principale
import './App.css'
//Importo i componenti del progetto
import Navbar from './components/navbar/NavbarComponent'
import Header from './components/header/HeaderComponent'
import About from './components/aboutUs/AboutComponent'
import Menu from './components/menu/MenuComponent'
import Footer from './components/footer/FooterComponent'

// Importo la libreria CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Definisco la funzione principale App con tutti i componenti dichiarati
function App() {
  return (
    <>
      <header id="Home">
        <Navbar></Navbar>
        <Header></Header>
      </header>
      <main>
        <section id="Noi">
          <About></About>
        </section>
        <section id="Menu">
          <Menu></Menu>
        </section>
      </main>
      <footer id="Contatti">
        <Footer></Footer>
      </footer>
    </>
  )
}

// Esporto la funzione principale App
export default App

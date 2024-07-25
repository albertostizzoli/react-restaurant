import React from "react";
import './App.css'
import Navbar from './components/navbar/NavbarComponent'
import Header from './components/header/HeaderComponent'
import About from './components/aboutUs/AboutComponent'
import Menu from './components/menu/MenuComponent'
import Footer from './components/footer/FooterComponent'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


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

export default App

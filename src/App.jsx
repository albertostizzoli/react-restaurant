import React from "react";
import './App.css'
import Navbar from './components/navbar/NavbarComponent'
import Header from './components/header/HeaderComponent'
import About from './components/aboutUs/AboutComponent'
import Footer from './components/footer/FooterComponent'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <Header></Header>
      </header>
      <main>
        <section>
          <About></About>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App

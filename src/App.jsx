import React from "react";
import './App.css'
import Navbar from './components/navbar/NavbarComponent'
import Footer from './components/footer/FooterComponent'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {

  return (
    <>
    <section>
      <Navbar></Navbar>
    </section>
      <section>
        <Footer></Footer>
      </section>
    </>
  )
}

export default App

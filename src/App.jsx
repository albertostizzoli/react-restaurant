import { useState } from 'react'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-center text-danger"> Ciao React</h1>
    </>
  )
}

export default App

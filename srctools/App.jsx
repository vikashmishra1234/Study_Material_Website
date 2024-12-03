
import React from 'react'
import PDF from './components/PDF'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Unit from './components/Unit.jsx'
import Color from './components/Color.jsx'

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path='/' element={ <Home/>}/>
        <Route path='/css' element={ <Unit/>}/>
        <Route path='/pdf' element={ <PDF/>}/>
        <Route path='/color' element={ <Color/>}/>
      </Routes>
    </Router>
   
  )
}

export default App
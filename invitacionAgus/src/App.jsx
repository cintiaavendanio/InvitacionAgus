import textoInvt from './assets/textoInvt.png'
import fotosAgus from './assets/fotosAgus.png'
import './App.css'
// import React from 'react'
// import Map from './assets/maps.jsx'

function App() {
  return (
    <>
      <div className='container'>
        <div className='paginaPrincipal'>
          <img className='imgGrande' src={textoInvt} alt='' />
          <img className='imgGrande' src={fotosAgus} alt='' />
        </div>
        <div className='cuando'>
          <h2>¿Cuándo?</h2>
          <p>24 De Febrero del 2024</p>
        </div>
        <div className='donde'>
          <h2>¿Dónde?</h2>
          <p>Catamarca 1829, Pérez</p>
        </div>
      </div>
    </>
  )
}

export default App

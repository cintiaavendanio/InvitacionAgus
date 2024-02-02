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
          <div className='cuandoTitulo'>
            <h1>¿Cuándo?</h1>
          </div>
          <div className='cuandoFecha'>
            <h2>24</h2>
            <p>de</p>
            <p>Febrero</p>
            <p>del</p>
            <p>2024</p>
          </div>
        </div>
        <div className='donde'>
          <h2>¿Dónde?</h2>
          <p>Catamarca 1829, Pérez</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.8757471641948!2d-60.77119468822641!3d-33.00705117483276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7b2780402002b%3A0x991263bf155406cc!2sCatamarca%201829%2C%20P%C3%A9rez%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1706836825841!5m2!1ses!2sar'
            width='600'
            height='450'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default App

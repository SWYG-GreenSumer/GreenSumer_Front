import { useState } from 'react'
import AppRouter from './AppRouter'
import reactLogo from './assets/react.svg'
import Nav from './Nav'
import Footer from './Footer'

function App() { 

  return (
    <div>      
      <Nav />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App

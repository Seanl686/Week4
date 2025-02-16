import React, { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Nav } from './components/nav'

// Create the context
export const Context = createContext();

function App() {

  const [signedIn, setSignedIn] = useState(false)

  return (
    <Context.Provider value={{ signedIn, setSignedIn }}>
      <Nav />
      <h1>
        {
          signedIn ? "Signed Out" : "Signed In" 
        }
      </h1>
    </Context.Provider>
  )
}

export default App

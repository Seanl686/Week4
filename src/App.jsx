import React, { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Nav } from './components/nav'

// Create the context
export const Context = createContext();

function App() {

  const [signedIn, setSignedIn] = useState(false) // State to track if the user is signed in

  return (
    <Context.Provider value={{ signedIn, setSignedIn }}> {/* Provide the signedIn state and setSignedIn function to the context */}
      <Nav /> {/* Nav component: Renders the navigation bar and includes the SignInButton component */}
      <h1>
        {
          signedIn ? "Signed Out" : "Signed In" // Display "Signed Out" if signedIn is true, otherwise display "Signed In"
        }
      </h1>
    </Context.Provider>
  )
}

export default App

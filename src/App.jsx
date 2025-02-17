import React, { useState, createContext } from 'react'; // Import React, useState for state management, and createContext for creating a context
import reactLogo from './assets/react.svg'; // Import React logo image (not used in this snippet)
import viteLogo from '/vite.svg'; // Import Vite logo image (not used in this snippet)
import './App.css'; // Import CSS for styling the app

import { Nav } from './components/nav'; // Import Nav component from the components directory

// Create a context to share state across components
export const Context = createContext();

function App() {
  // Initialize state to track if the user is signed in, default is false
  const [signedIn, setSignedIn] = useState(false);

  return (
    // Provide the context value to all child components
    <Context.Provider value={{ signedIn, setSignedIn }}>
      <Nav /> {/* Render the Nav component */}
      <h1>
        {
          // Conditionally render text based on the signedIn state
          signedIn ? "Signed Out" : "Signed In"
        }
      </h1>
    </Context.Provider>
  );
}

export default App; // Export the App component as the default export
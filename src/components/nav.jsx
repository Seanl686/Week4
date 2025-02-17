import React, { useContext } from 'react';
import { Context } from '../App'; // Ensure the relative path is correct
import { SignInButton } from './signIn';

// Nav component: Renders the navigation bar and includes the SignInButton component
export const Nav = () => {
  // Use the useContext hook to access the signedIn state and setSignedIn function from the App context
  const { signedIn, setSignedIn } = useContext(Context);

  // Render the navigation bar with inline styles
  return (
    <nav
      style={{
        top: 0,
        width: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
      }}
    >
      {/* Additional navigation elements can be added here */}
      {/* Render the SignInButton component, passing the signedIn state and setSignedIn function as props */}
      <SignInButton signedIn={signedIn} setSignedIn={setSignedIn} />
    </nav>
  );
};
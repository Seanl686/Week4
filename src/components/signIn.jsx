import * as React from 'react'; // Import all exports from the React library

// SignInButton component: Renders a button that toggles the signed-in state
export const SignInButton = ({ signedIn, setSignedIn }) => {
  return (
    <button onClick={() => setSignedIn(!signedIn)}>
      {
        // Conditional rendering of button text based on the 'signedIn' state
        signedIn ? "Sign In" : "Sign Out"
      }
    </button>
  );
};
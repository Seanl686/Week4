import * as React from 'react'

// SignInButton component: Renders a button that toggles the signed-in state
export const SignInButton = ({ signedIn, setSignedIn }) => {
    return (
        <button onClick={() => setSignedIn(!signedIn)}>
            {
                // Display "Sign In" if signedIn is true, otherwise display "Sign Out"
                signedIn ? "Sign In" : "Sign Out"
            }
        </button>
    )
}
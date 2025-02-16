import * as React from 'react'

export const SignInButton = ({ signedIn, setSignedIn }) => {
    return (
        <button onClick={() => setSignedIn(!signedIn)}>
            {
                signedIn ? "Sign In" : "Sign Out"
            }
        </button>
    )
}
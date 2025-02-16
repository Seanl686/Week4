import * as React from 'react'


export const SignInButton = () => {

    const [signedIn,setSignedIn] = React.useState(false)

    return (
        <button onClick={() => setSignedIn(!signedIn)}>
            {
                signedIn ? "Sign Out" : "Sign In"
            }
        </button>
    )
}
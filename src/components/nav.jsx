import * as React from 'react'
import { useContext } from 'react'
import { Context } from '../App'
import { SignInButton } from './signIn'

// Nav component: Renders the navigation bar and includes the SignInButton component
export const Nav = () => {
    const { signedIn, setSignedIn } = useContext(Context); // Use context to get signedIn state and setSignedIn function

    return (
        <nav style={{ top: 0, width: '100vh', display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
            {/* Other nav elements */}
            <SignInButton signedIn={signedIn} setSignedIn={setSignedIn} /> {/* SignInButton component: Toggles the signed-in state */}
        </nav>
    )
}
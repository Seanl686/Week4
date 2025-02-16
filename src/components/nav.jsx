import * as React from 'react'
import { useContext } from 'react'
import { Context } from '../App'
import { SignInButton } from './signIn'

export const Nav = () => {
    const { signedIn, setSignedIn } = useContext(Context);

    return (
        <nav style={{ top: 0, width: '100vh', display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
            {/* Other nav elements */}
            <SignInButton signedIn={signedIn} setSignedIn={setSignedIn} />
        </nav>
    )
}
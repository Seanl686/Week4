import * as React from 'react'

import { SignInButton } from './signIn'


export const Nav = () => {

    return (
        <nav style={{top: 0, width: '100vh', display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
            <SignInButton />
        </nav>
    )
}
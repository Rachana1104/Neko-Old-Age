import React from 'react'
import NavBar from './NavBar'

const Header = (activePage) => {
    return (
        <div>
            <NavBar activePage={activePage}/>
        </div>
    )
}

export default Header

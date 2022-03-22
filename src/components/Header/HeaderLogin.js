import React from 'react'
import NavBarLogin from './NavBarLogin'

const HeaderLogin = (activePage) => {
    return (
        <div>
            <NavBarLogin activePage={activePage}/>
        </div>
    )
}

export default HeaderLogin
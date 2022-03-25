import React from 'react'
import NavRelative from './NavRelative'

const HeaderAdmin = (activePage) => {
    return (
        <div>
            <NavRelative activePage={activePage}/>
        </div>
    )
}

export default HeaderAdmin

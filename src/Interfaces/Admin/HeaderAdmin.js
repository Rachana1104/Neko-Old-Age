import React from 'react'
import NavAdmin from './NavAdmin'

const HeaderAdmin = (activePage) => {
    return (
        <div>
            <NavAdmin activePage={activePage}/>
        </div>
    )
}

export default HeaderAdmin

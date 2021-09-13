import React from 'react'
import './NavItem.css'

const NavItem = ({navItems}) => {
    return (
        <div className="nav-items">
            <ul>
                {navItems.map(navItem => {
                    return(
                        <li>{navItem}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavItem

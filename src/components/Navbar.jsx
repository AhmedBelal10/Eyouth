import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul>
            <li>
                <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/services' className={({ isActive }) => isActive ? 'active' : ''}>
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink to='/products' className={({ isActive }) => isActive ? 'active' : ''}>
                    Products
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar
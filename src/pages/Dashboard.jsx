import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <section>
            <p>this is fixed content</p>
            <ul>
                <li>
                    <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/settings"
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        settings
                    </NavLink>
                </li>
            </ul>
            <Outlet/>
        </section>
    )
}

export default Dashboard
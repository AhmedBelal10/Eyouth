import React, { useContext } from 'react'
import { ThemeContext } from '../pages/Home'

const Slider = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div style={{ background: theme === 'light' ? '#888' : 'black' }}>
            <p>Slider Component </p>
            <p>theme : {theme}</p>
        </div>
    )
}

export default Slider
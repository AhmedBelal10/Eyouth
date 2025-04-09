import { useContext } from 'react'
import Slider from './Slider'
import { ThemeContext } from '../pages/Home'


const HeroSection = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <div style={{ background: "blue" }}>
            <p>Hero section component </p>
            <button onClick={() => toggleTheme()}>dark/light</button>
            <Slider />
        </div>
    )
}

export default HeroSection
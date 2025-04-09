import { useState, createContext } from 'react'
import HeroSection from '../components/HeroSection'

export const ThemeContext = createContext(null)


const Home = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <p>Home page</p>
      <HeroSection />
    </ThemeContext.Provider>
  )
}

export default Home
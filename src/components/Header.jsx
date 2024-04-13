import { useEffect, useState } from 'react'
import Navigation from './Navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const windowWidth = window.innerWidth

    const handleResize = () => {
      if (windowWidth <= 850) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="header">
      <img className="logo" src="/images/logo.svg" alt="Logo" />
      <div className="menu-wrapper">
        <img
          onClick={toggleMenu}
          className="menu"
          src={`/images/icon-${isMenuOpen ? 'close-menu' : 'menu'}.svg`}
          alt="Icon Menu"
        />
      </div>
      <Navigation />
      {isMenuOpen && (
        <div className="nav-mobile-wrapper nav-mobile-wrapper--display">
          <Navigation />
        </div>
      )}
    </header>
  )
}
export default Header

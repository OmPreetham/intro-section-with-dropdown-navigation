const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="/images/logo.svg" alt="Logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item item">
            <a className="item__link item__link--arrow" href="#">
              Features
            </a>
          </li>
          <li className="nav__item item">
            <a className="item__link item__link--arrow" href="#">
              Company
            </a>
          </li>
          <li className="nav__item item">
            <a className="item__link" href="#">
              Careeers
            </a>
          </li>
          <li className="nav__item item">
            <a className="item__link" href="#">
              About
            </a>
          </li>
        </ul>
        <ul className="nav__list">
          <li className="nav__item item">
            <a className="item__link" href="#">
              Login
            </a>
          </li>
          <li className="nav__item item nav__item--border">
            <a className="item__link" href="#">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header

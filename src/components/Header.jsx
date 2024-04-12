const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="/images/logo.svg" alt="Logo" />
      <div className="menu-wrapper">
        <picture>
          <source
            srcSet="/images/icon-close-menu.svg"
            media="(max-width: 850px)"
          />
          <img className="menu" src="/images/icon-menu.svg" alt="Icon Menu" />
        </picture>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__item__link" href="#">
              Features <span className="nav__item__link--arrow"></span>
            </a>
            <div className="nav__dropdown">
              <ul className="nav__dropdown__list">
                <li className="nav__dropdown__item">
                  <a className="nav__dropdown__link" href="">
                    <img
                      className="nav__dropdown__image"
                      src="/images/icon-todo.svg"
                      alt="TODO"
                    />
                    <p className="nav__dropdown__name"> Todo List</p>
                  </a>
                </li>
                <li className="nav__dropdown__item">
                  <a className="nav__dropdown__link" href="">
                    <img
                      className="nav__dropdown__image"
                      src="/images/icon-calendar.svg"
                      alt="Calendar"
                    />
                    <p className="nav__dropdown__name">Calendar</p>
                  </a>
                </li>
                <li className="nav__dropdown__item">
                  <a className="nav__dropdown__link" href="">
                    <img
                      className="nav__dropdown__image"
                      src="/images/icon-reminders.svg"
                      alt="Reminders Icon"
                    />
                    <p className="nav__dropdown__name">Reminders</p>
                  </a>
                </li>
                <li className="nav__dropdown__item">
                  <a className="nav__dropdown__link" href="">
                    <img
                      className="nav__dropdown__image"
                      src="/images/icon-planning.svg"
                      alt="Planning Icon"
                    />
                    <p className="nav__dropdown__name">Planning</p>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="#">
              Company <span className="nav__item__link--arrow"></span>
            </a>
            <div className="nav__dropdown">
              <ul className="nav__dropdown__list">
                <li className="nav__dropdown__item">
                  <a className="nav__dropdown__link" href="">
                    History
                  </a>
                </li>
                <li className="nav__dropdown__item">
                  <a className="nav__dropdown__link" href="">
                    Our Team
                  </a>
                </li>
                <li className="nav__dropdown__item">
                  <a className="nav__dropdown__link" href="">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="#">
              Careeers
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__item__link" href="#">
              About
            </a>
          </li>
        </ul>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__item__link" href="#">
              Login
            </a>
          </li>
          <li className="nav__item nav__item--border">
            <a className="nav__item__link" href="#">
              Register
            </a>
          </li>
        </ul>
      </nav>
      {/* <div className="nav-mobile-wrapper nav-mobile-wrapper--display">
        <nav className="nav-mobile">
          <ul className="nav-mobile__list">
            <li className="nav-mobile__item item-mobile">
              <a
                className="item-mobile__link item-mobile__link--arrow"
                href="#"
              >
                Features
              </a>
            </li>
            <li className="nav-mobile__item item-mobile">
              <a
                className="item-mobile__link item-mobile__link--arrow"
                href="#"
              >
                Company
              </a>
            </li>
            <li className="nav-mobile__item item-mobile">
              <a className="item-mobile__link" href="#">
                Careeers
              </a>
            </li>
            <li className="nav-mobile__item item-mobile">
              <a className="item-mobile__link" href="#">
                About
              </a>
            </li>
          </ul>
          <ul className="nav-mobile__list">
            <li className="nav-mobile__item item-mobile">
              <a className="item-mobile__link" href="#">
                Login
              </a>
            </li>
            <li className="nav-mobile__item item-mobile nav-mobile__item--border">
              <a className="item-mobile__link" href="#">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </header>
  )
}
export default Header

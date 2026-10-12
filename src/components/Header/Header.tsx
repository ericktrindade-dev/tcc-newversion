import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.container}>
      <nav className={style.navbox}>
        <div className={style.logo}>
          <p>NAME-LOGO</p>
        </div>

        <div className={style.navMenu}>
          <ul className={style.list}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${style.listItem} ${isActive ? style.active : ''}`
                }
              >
                Início
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${style.listItem} ${isActive ? style.active : ''}`
                }
              >
                Informações
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  `${style.listItem} ${isActive ? style.active : ''}`
                }
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={style.IaChat}>
          <NavLink
            to="/chat"
            className={style.ChatButton}
          >
            Bora Conversar?
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="logo Kasa" />
      <nav>
        <NavLink
          to="/"
          className={(homeCurrentPage) =>
            homeCurrentPage.isActive ? "active" : ""
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={(aboutCurrentPage) =>
            aboutCurrentPage.isActive ? "active" : ""
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header

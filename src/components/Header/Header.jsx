import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="about">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header

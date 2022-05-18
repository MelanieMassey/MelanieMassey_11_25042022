import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Header.css"
import { useState } from "react"

function Header() {
  const [homeCurrentPage, setHomeCurrentPage] = useState(true)
  const [aboutCurrentPage, setAboutCurrentPage] = useState(false)

  return (
    <header>
      <img src={logo} className="logo" alt="logo Kasa" />
      <nav>
        <Link
          to="/"
          className={homeCurrentPage ? "active" : ""}
          onClick={() => {
            setHomeCurrentPage(true)
            setAboutCurrentPage(false)
          }}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={aboutCurrentPage ? "active" : ""}
          onClick={() => {
            setHomeCurrentPage(false)
            setAboutCurrentPage(true)
          }}
        >
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header

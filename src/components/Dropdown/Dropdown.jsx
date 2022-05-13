// import PropTypes from 'prop-types'
import "./Dropdown.css"
import arrowDown from "../../assets/arrow_down.png"
import arrowUp from "../../assets/arrow_up.png"
import { useState } from "react"

function Dropdown({ title, text }) {
  const [dropdownOpened, setDropdown] = useState(false)

  return dropdownOpened ? (
    <div className="dropdown">
      <div className="dropdown_header">
        <h3>{title}</h3>
        <img
          src={arrowUp}
          alt="Cacher contenu"
          onClick={() => setDropdown(false)}
        />
      </div>
      <p>{text}</p>
    </div>
  ) : (
    <div className="dropdown">
      <div className="dropdown_header">
        <h3>{title}</h3>
        <img
          src={arrowDown}
          alt="Afficher contenu"
          onClick={() => setDropdown(true)}
        />
      </div>
    </div>
  )
}

// Dropdown.propTypes = {
//     title: PropTypes.string,
//     text: PropTypes.string,
// }

export default Dropdown

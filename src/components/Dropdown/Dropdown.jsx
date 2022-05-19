import "./Dropdown.css"
import arrowDown from "../../assets/arrow_down.png"
import arrowUp from "../../assets/arrow_up.png"
import { useState } from "react"

/**
 * @param {Object} props
 * @param {String} props.title
 * @param {String | Array} props.text une chaine ou un tableau d'éléments JSX
 * @param {("superRadius")} [props.extraClass]
 * @component
 */
function Dropdown({ title, text, extraClass }) {
  const [dropdownOpened, setDropdown] = useState(false)

  return dropdownOpened ? (
    <div className={extraClass ? "dropdown " + extraClass : "dropdown"}>
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

export default Dropdown

import { useState } from "react"
import "./Gallery.css"
import arrowLeft from "../../assets/arrow_left.png"
import arrowRight from "../../assets/arrow_right.png"
let index = 0

/**
 *
 * @param {Object} props
 * @param {Array} props.pictures Tableau contenant les photos du logement
 * @returns Le carrousel des photos du logement
 */

function Gallery({ pictures }) {
  const [refresh, setRefresh] = useState(0)

  function next() {
    index++
    if (index >= pictures.length) index = 0
    setRefresh(index)
  }
  function prev() {
    index--
    if (index < 0) index = pictures.length - 1
    setRefresh(index)
  }

  function showButtons() {
    return (
      <div className="navigation">
        <img
          src={arrowLeft}
          className="arrowLeft"
          onClick={prev}
          alt="Précédente"
        />
        <p>
          {index + 1}/{pictures.length}
        </p>
        <img
          src={arrowRight}
          className="arrowRight"
          onClick={next}
          alt="Suivante"
        />
      </div>
    )
  }

  return (
    <div
      className="slider"
      style={{
        backgroundImage: `url("${pictures[index]}")`,
      }}
    >
      {pictures.length > 1 ? showButtons() : ""}
    </div>
  )
}

export default Gallery

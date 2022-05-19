import "../style/Accomodation.css"
import { getAccomodationById } from "../services/datamanager"
import Dropdown from "../components/Dropdown/Dropdown"
import { useParams } from "react-router-dom"
import Tag from "../components/Tag/Tag"
import { useState } from "react"
import arrowLeft from "../assets/arrow_left.png"
import arrowRight from "../assets/arrow_right.png"
import Gallery from "../components/Gallery/Gallery"
import "../components/Gallery/Gallery.css"

function Accomodation() {
  const { accomodationId } = useParams()
  const accomodation = getAccomodationById(accomodationId)

  const [current, setCurrent] = useState(0)
  const length = accomodation.pictures.length

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  function previousSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  function showRating() {
    const classes = [
      null,
      "oneStar",
      "twoStars",
      "threeStars",
      "fourStars",
      "fiveStars",
    ]
    return "stars " + classes[parseInt(accomodation.rating)]
  }

  return (
    <section className="accomodationSection">
      <div className="slider">
        {accomodation.pictures.length > 1 ? (
          <div className="arrows">
            <img
              src={arrowLeft}
              className="arrowLeft"
              onClick={previousSlide}
              alt="Précédente"
            />
            <img
              src={arrowRight}
              className="arrowRight"
              onClick={nextSlide}
              alt="Suivante"
            />
          </div>
        ) : (
          ""
        )}
        {accomodation.pictures.map((picture, index) => {
          if (index === current) {
            return (
              <img src={picture} className="photo" alt="photos du logement" />
            )
          }
        })}
      </div>
      <div className="accomodationDetails">
        <div>
          <h4>{accomodation.title}</h4>
          <h6>{accomodation.location}</h6>
          <div className="tagsSection">
            {accomodation.tags.map((tag) => (
              <Tag tagName={tag} />
            ))}
          </div>
        </div>
        <div className="hostCard">
          <div className="hostId">
            <h5>{accomodation.host.name}</h5>
            <img src={accomodation.host.picture} alt={accomodation.host.name} />
          </div>
          <aside className={showRating()}></aside>
        </div>
      </div>

      <div className="accomodationDropdowns">
        <Dropdown title="Description" text={accomodation.description} />
        <Dropdown
          title="Équipements"
          text={accomodation.equipments.map((equipment) => (
            <ul>
              <li>{equipment}</li>
            </ul>
          ))}
        />
      </div>
    </section>
  )
}

export default Accomodation

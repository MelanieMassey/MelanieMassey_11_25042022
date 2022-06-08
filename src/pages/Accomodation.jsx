import "../style/Accomodation.css"
import { getAccomodationById } from "../services/datamanager"
import Dropdown from "../components/Dropdown/Dropdown"
import { useParams } from "react-router-dom"
import Tag from "../components/Tag/Tag"
import { useState } from "react"

import Gallery from "../components/Gallery/Gallery"
import "../components/Gallery/Gallery.css"
import Page404 from "./Page404"

function Accomodation() {
  const { accomodationId } = useParams()
  const accomodation = getAccomodationById(accomodationId)
  console.log(accomodation)

  // const [current, setCurrent] = useState(0)
  // const length = accomodation.pictures.length

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

  return accomodation === undefined ? (
    <Page404 />
  ) : (
    <section className="accomodationSection">
      <Gallery pictures={accomodation.pictures} />

      <div className="accomodationDetails">
        <div>
          <h4>{accomodation.title}</h4>
          <h6>{accomodation.location}</h6>
          <div className="tagsSection">
            {accomodation.tags.map((tag) => (
              <Tag tagName={tag} key={tag} />
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
        <Dropdown title="Équipements" text={accomodation.equipments} />
      </div>
    </section>
  )
}

export default Accomodation

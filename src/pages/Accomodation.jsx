import "../style/Accomodation.css"
import { getAccomodationById } from "../services/datamanager"
import Dropdown from "../components/Dropdown/Dropdown"
import { useParams } from "react-router-dom"
import Tag from "../components/Tag/Tag"

function Accomodation() {
  const { accomodationId } = useParams()
  const accomodation = getAccomodationById(accomodationId);
//   const accomodation = accomodations.filter(
//     (accomodation) => accomodation.id === accomodationId
//   )[0]
  console.log(accomodation)

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
    <div className="Accomodation">
      <section className="accomodationSection">
        <div className="carrousel"></div>
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
            <h5>{accomodation.host.name}</h5>
            <img src={accomodation.host.picture} alt={accomodation.host.name} />
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
    </div>
  )
}

export default Accomodation

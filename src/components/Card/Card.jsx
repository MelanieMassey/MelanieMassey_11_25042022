import "./Card.css"

/**
 * @typedef {import("../../services/datamanager").mainPageAccomodation} mainPageAccomodation
 */

/**
 *
 * @param {mainPageAccomodation} props
 * @returns
 */
function Card(props) {
  console.log(props)
  return (
    <article>
      <img src={props.src} alt={props.title} />
      <div></div>
      <h2>{props.title}</h2>
    </article>
  )
}

export default Card

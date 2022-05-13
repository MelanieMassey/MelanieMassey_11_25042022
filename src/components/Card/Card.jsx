// import PropTypes from "prop-types"
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
  // console.log(props)
  return (
    <article>
      <img src={props.cover} alt={props.title} />
      <div></div>
      <h2>{props.title}</h2>
    </article>
  )
}

// Card.propTypes = {
//   props: PropTypes.object,
// }

export default Card

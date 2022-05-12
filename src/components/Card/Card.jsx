import PropTypes from 'prop-types'
import './Card.css';

/**
 * @typedef {import("../../services/datamanager").mainPageAccomodation} mainPageAccomodation
 */

/**
 * 
 * @param {mainPageAccomodation} props 
 * @returns 
 */
function Thumb(props) {
    console.log(props)
    return(
        <article>
            <img src={props.src} alt={props.title}/>
            <div></div>
            <h2>{props.title}</h2>
        </article>
    )
}

Thumb.propTypes = {
    props: PropTypes.object,
}

export default Thumb;
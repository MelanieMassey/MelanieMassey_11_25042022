import PropTypes from 'prop-types'
import "./Banner.css"


function Banner({text, img, imgDescription}) {
    return (
        <div className="banner">
            <h1>{text}</h1>
            <img src={img} alt={imgDescription} />
            <div className="bannerFilter"></div>
        </div>
    )
}

Banner.propTypes = {
    text: PropTypes.string,
    img: PropTypes.string,
    imgDescription: PropTypes.string,
}

export default Banner;
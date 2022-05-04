import banner from "../../assets/banner.png";
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

export default Banner;
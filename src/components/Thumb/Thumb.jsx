import './Thumb.css';

function Thumb(props) {
    console.log(props)
    return(
        <article>
            <img src={props.src} alt={props.alt}/>
            <div></div>
            <h2>{props.title}</h2>
        </article>
    )
}

export default Thumb;
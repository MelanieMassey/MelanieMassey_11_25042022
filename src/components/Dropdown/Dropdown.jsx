import './Dropdown.css';
import arrowDown from '../../assets/arrow_down.png';
import arrowUp from '../../assets/arrow_up.png';

function Dropdown({title, text}) {
    return (
        <div className='dropdown'>
            <div className='dropdown_header'>
                <h3>{title}</h3>
                <img src={arrowDown} alt='Afficher contenu'onClick={handleClick}/>
            </div>
            <p>{text}</p>
        </div>
    )
}

function handleClick(e) {
    console.log(e.target)
    switch (e.target.alt) {
        case 'Afficher contenu' :
            e.target.src = arrowUp
            e.target.alt = "Cacher contenu"
        break;
        case 'Cacher contenu' :
            e.target.src = arrowDown
            e.target.alt = "Afficher contenu"
    }
    // if(e.target.alt === "Afficher contenu") {
    //     e.target.src = arrowUp
    //     e.target.alt = "Cacher contenu"
    // } else {
    //     console.log('pas le bon alt')
    // }
}

export default Dropdown;
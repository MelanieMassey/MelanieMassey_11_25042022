import logo from '../../assets/logo.png';
import './Header.css';

function Header() {
    return (
        <header>
                <img src={logo} className="logo" alt="logo Kasa" />
                <nav>
                    <a href=''>Accueil</a>
                    <a href=''>A Propos</a>
                </nav>
        </header>
        
    )
}

export default Header;
import logo from '../../assets/logo.png';
import './Header.css';

function Header() {
    return (
        <div>
            <header>
                <img src={logo} className="logo" alt="logo Kasa" />
                <nav>
                    <a href=''>Accueil</a>
                    <a href=''>A Propos</a>
                </nav>
            </header>
        </div>
    )
}

export default Header;
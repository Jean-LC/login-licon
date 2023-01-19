import "../style/header.css"
import "../style/grid.css"
import logo from '../img/logo-color.svg'

const Header = () => {
    return (
        <>
            <header>
                <img src={logo} alt='logo-header' className="logo-header"></img>
                <p className="texto-nav">CONÓCENOS</p>
                <p className="texto-nav">PRODUCTOS</p>
                <p className="texto-nav">INFOCON</p>
                <p className="texto-nav">CONTACTO</p>
            </header>
        </>
    )
}

export default Header
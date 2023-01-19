import logo from '../img/LICON-BLANCO-2.png'
import '../style/footer.css'
import "../style/grid.css"
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import telefono from '../img/phone.png'
import ubicacion from '../img/location.png'
import correo from '../img/mail.png'
import grupoLicon from '../img/GrupoLicoN.png'
import bandera from '../img/bandera_mex-1.png'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='iconos-redes'>
                    <img src={facebook} alt='facebook' className='iconos'></img>
                    <img src={twitter} alt='twitter' className='iconos'></img>
                    <img src={instagram} alt='instagram' className='iconos'></img>
                    <img src={linkedin} alt='linkedin' className='iconos'></img>
                    <img src={logo} alt='logo' className='logo-footer'></img>
                    <button className='boton-contacto'>CONTACTO</button>
                </div>

                <hr></hr>

                <div className='iconos-contacto'>
                    <div className='icono-texto'>
                        <img src={telefono} alt='telefono' className='iconos'></img>
                        <p className='texto-contacto'>(55) 5362-0299</p>
                    </div>
                    <div className='icono-texto'>
                        <img src={ubicacion} alt='ubicacion' className='iconos'></img>
                        <p className='texto-contacto'>Camino Antigup a Santa Mónica 7, CP 54050 Tlalnepantla de Baz, Méx.</p>
                    </div>
                    <div className='icono-texto'>
                        <img src={correo} alt='correo' className='iconos'></img>
                        <p className='texto-contacto'>contacto@licon.com.mx</p>
                    </div>
                </div>

                <div className='terminos-condiciones'>

                    <div className='parrafos-avisos'>
                        <p>TÉRMINOS Y CONDICIONES</p>
                        <p>AVISO DE PRIVACIDAD</p>
                        <p>POLÍTICA ANTI-SOBORNO</p>
                    </div>

                    <div className='grupo-licon'>
                        <p>UNA EMPRESA DE</p>
                        <img src={grupoLicon} alt='grupo-licon' className='iconos logo-grupo-licon'></img>
                        <img src={bandera} alt='bandera' className='iconos logo-grupo-licon'></img>
                    </div>

                    <p className='derechos'>TODOS LOS DERECHOS RESERVADOS-2021</p>
                </div>

            </footer>
        </>
    )
}

export default Footer
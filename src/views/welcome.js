import '../style/grid.css'
import '../style/welcome.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className='grid'>
                <Header />
                <section className='welcome-section'>
                    <p className='bienvenido-usuario'>aki aduya emi uwu</p>
                    <button className='boton-regresar' onClick={() => navigate('/login')}>Regresar</button>
                </section>
                <Footer />
            </section>
        </>
    )
}

export default Welcome
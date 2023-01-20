import '../style/grid.css'
import '../style/welcome.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Welcome = ({ user }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (user === null) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <section className='grid'>
                <Header />
                <section className='welcome-section'>
                    <p className='bienvenido-usuario'>Hola {user}</p>
                    <button className='boton-regresar' onClick={() => navigate('/login')}>Regresar</button>
                </section>
                <Footer />
            </section>
        </>
    )
}

export default Welcome
import '../style/grid.css'
import '../style/login.css'
import Footer from "../components/footer"
import Header from "../components/header"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        navigate('/welcome');
    }

    return (
        <>
            <section className='grid'>
                <Header />
                <section className='login'>
                    <p className='mensaje-bienvenido'>¡Bienvenido de nuevo!</p>
                    <div className='inicia-sesion'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <p className='parrafo-iniciar-sesion'>Iniciar sesión</p>
                            <label>Usuario</label>
                            <input type='text' className='input-login' onChange={(e) => setUsername(e.target.value)} required></input>
                            <label>Contraseña</label>
                            <input type='password' className='input-login' required></input>
                            <button className='enviar-login'>Enviar</button>
                        </form>
                        <p className='parrafo-nuevo'>¿Eres nuevo?</p>
                        <span>Regístrate</span>
                    </div>
                </section>
                <Footer />
            </section>
        </>
    )
}

export default Login;
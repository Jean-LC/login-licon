import logo from './img/logo.png';
import './App.css';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState('')
  const [color, setColor] = useState(true)

  return (
    <section className='grid-template'>

      <div className='logo-login'>
        <img src={logo} alt='logo' className='logo'></img>
        <h3 className={color ? 'login-on' : 'register-off'}
          onClick={(e) => {
            e.preventDefault();
            setColor(true)}}>
          LOGIN
        </h3>
        <h3 className={color ? 'register-off' : 'register-on'}
          onClick={(e) => {
            e.preventDefault();
            setColor(false)}}>
          REGISTER
        </h3>
      </div>-

      <div className={`input-register ${color ? 'background-login' : 'background-register'}`}>
        <form>
          <label>Username</label>
          <input className='input'
            placeholder='Username'
            type='text'
            onChange={(e) => setUser(e.target.value)}>
          </input>
          <label>Password</label>
          <input className='input'
            placeholder='Password'
            type='password'>
          </input>
          <button className='button-accept'
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              console.log(user)
            }}>ACCEPT</button>
        </form>
      </div>

    </section>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState('')
  return (
    <section className='grid-template'>

      <img src={logo} alt='logo'></img>
      <h3 className='login'>LOGIN</h3>
      <h3 className='register'>REGISTER</h3>
      <section className='input-register'>
        <form>
          <input className='user'
            placeholder='Username'
            type='text'
            onChange={(e) => setUser(e.target.value)}>
          </input>
          <input className='password'
            placeholder='Password'
            type='password'>
          </input>
          <button className='button-login' type='submit' onClick={(e) => {
            e.preventDefault();
            console.log(user)
          }}>ACCEPT</button>
        </form>
      </section>

    </section>
  );
}

export default App;

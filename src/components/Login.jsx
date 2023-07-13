import React from 'react';
import { useState } from 'react';
import '../styles/index.css'
import { useDispatch } from 'react-redux';
import { changeUsername } from '../store/slice/username.slice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch(state => state.username);
  const navigate = useNavigate();
  const [user, setUser] = useState('');


  const Submit = (e) => {
    e.preventDefault();
    if (user) {
      dispatch(changeUsername(user))
      navigate('/pokemons')
    } else {
      alert(user);
    }
  };

  return (
    <section className='login_container'>
      <div className="login_back"></div>
      <div className="login_back"></div>
      <div className="login_back"></div>
      <div className="login_back"></div>
      <div className="login_back"></div>
      <div className="login_back"></div>
      <form className='login' onSubmit={Submit
      }>
        <h2>Bienvenido Entrenador !!!</h2>
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/0/02/latest/20221113131941/Ash_%28Viajes_Pok%C3%A9mon%29_2.png" alt="" />
        <section className='login_input'>
          <input type="text"
            id="nombre"
            value={user}
            onChange={e => setUser(e.target.value)}
            required />
          <label htmlFor="nombre">Nombre: </label>
        </section>
        <button
          className={user ? 'active_bt' : ''}
          onClick={() => Submit}
        ><i className="fa-solid fa-check"></i></button>
      </form>
    </section>
  );
};

export default Login;